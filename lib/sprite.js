import BaseSprite from './basesprite'
import Resource from './resource'
import filters from './filters'

import {attr, readonly} from './decorators'
import {rectToBox, boxToRect, boxUnion} from './utils'

const _texturesCache = Symbol('_texturesCache')

class TextureAttr extends BaseSprite.Attr {
  /*
    {
      src: ...,   //texture 路径
      srcRect: ...,  //texture 裁剪
      rect: ....,  //texture 绘制到 sprite 的区域
      filter: ...  //texture 滤镜
    }
   */
  @attr
  set textures(textures) {
    if(!Array.isArray(textures)) {
      textures = [textures]
    }
    const subject = this.subject

    textures = textures.map((texture) => {
      if(typeof texture === 'string') {
        texture = {src: texture}
      } else if(texture instanceof BaseSprite) {
        texture = {src: texture}
      }

      return texture
    })

    // 自适应 textures
    const promises = textures.map(texture => Resource.loadTexture(texture))
    Promise.all(promises).then((textures) => {
      let width = 0,
        height = 0
      textures.forEach(({img, texture}) => {
        let w,
          h
        if(texture && texture.rect) {
          w = texture.rect[2] + texture.rect[0]
          h = texture.rect[3] + texture.rect[1]
        } else if(texture && texture.srcRect) {
          w = texture.srcRect[2]
          h = texture.srcRect[3]
        } else {
          w = img.width
          h = img.height
        }
        if(width < w) {
          width = w
        }
        if(height < h) {
          height = h
        }
      })
      const [ow, oh] = this.texturesSize
      this.set('texturesSize', [width, height])

      // 因为这个更新属性是异步的，结束后必须要 forceUpdate
      if(ow !== width || oh !== height) {
        subject.forceUpdate(true)
      }
    })

    this.set('textures', textures)
  }
  get textures() {
    return this.get('textures')
  }

  @readonly
  get texturesSize() {
    return this.get('texturesSize') || [0, 0]
  }
}

export default class Sprite extends BaseSprite {
  static Attr = TextureAttr

  /**
    new Sprite({
      attr: {
        ...
      },
      attributeChangedCallback: function(prop, oldValue, newValue){

      }
    })
   */
  constructor(textures, opts = {attr: {}}, AttrModel = TextureAttr) {
    if(typeof textures === 'string') {
      textures = [textures]
    } else if(textures && !Array.isArray(textures)) {
      opts = textures
      textures = opts.textures
    }
    const attr = opts.attr
    delete opts.attr
    super(opts, AttrModel)
    this[_texturesCache] = new Map()
    if(textures) {
      this.textures = textures
    }
    if(attr) {
      this.attr(attr)
    }
  }

  set textures(textures) {
    this.attr('textures', textures)
  }
  get textures() {
    return this.attr('textures')
  }

  // 改写，让它支持自适应 textures 大小
  get contentSize() {
    let [width, height] = this.attr('size')

    const boxSize = this.attr('texturesSize')

    if(width === '') {
      width = boxSize[0] | 0
    }
    if(height === '') {
      height = boxSize[1] | 0
    }

    return [width, height]
  }

  // 判断哪几张图片纹理被鼠标或touch命中
  pointCollision(evt) {
    if(super.pointCollision(evt)) {
      const textures = this.textures

      if(textures) {
        let {offsetX, offsetY} = evt
        evt.targetTextures = []

        const [anchorX, anchorY] = this.attr('anchor'),
          [width, height] = this.contentSize

        offsetX += width * anchorX
        offsetY += height * anchorY

        textures.forEach((texture) => {
          const [x, y, w, h] = texture.rect || [0, 0, ...this.innerSize]
          if(offsetX >= x && offsetX - x < w
             && offsetY >= y && offsetY - y < h) {
            evt.targetTextures.push(texture)
          }
        })
      }
      return true
    }
  }

  // 清除缓存，非 norepaint 的属性更新会调用这个方法
  // 子类里面可以改写它
  set cache(context) {
    if(context == null) {
      this[_texturesCache].clear()
      return
    }

    const key = JSON.stringify(this.textures),
      cacheMap = this[_texturesCache]

    if(!cacheMap.has(key)) {
      cacheMap.set(key, context)
    }
  }
  get cache() {
    const key = JSON.stringify(this.textures),
      cacheMap = this[_texturesCache]
    if(cacheMap.has(key)) {
      // console.log('from cache')
      return cacheMap.get(key)
    }
  }

  async render(t) {
    let context
    const textures = this.textures

    if(textures) {
      const attr = this.attr(),
        borderWidth = attr.border[0]
      // 绘制图片
      const promises = textures.map(texture => Resource.loadTexture(texture))

      // 如果图片没有被预加载，这里就是异步的
      const texturesWithImg = await Promise.all(promises)

      // 必须要放在这里渲染，因为图片加载完之后宽高有可能发生变化
      // 这里是异步的
      context = super.render(t)

      texturesWithImg.forEach(({texture, img}) => {
        const rect = (texture.rect || [0, 0, ...this.innerSize]).slice(0)
        const srcRect = texture.srcRect

        rect[0] += borderWidth
        rect[1] += borderWidth

        const imgCanvas = document.createElement('canvas')
        const imgContext = imgCanvas.getContext('2d')


        if(texture.filter) {
          let outterRect
          const imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height]

          if(texture.filter.dropShadow) {
            const dsArr = texture.filter.dropShadow
              // if(typeof dsArr === 'string'){
              //   dsArr = texture.filter.dropShadow.split(/\s+/).map(item => parseFloat(item))
              // }
            const shadowRect = [Math.round(dsArr[0] - 2 * dsArr[2]), Math.round(dsArr[1] - 2 * dsArr[2]), imgRect[2] + 4 * dsArr[2], imgRect[3] + 4 * dsArr[2]]

            outterRect = boxToRect(boxUnion(rectToBox(shadowRect), rectToBox(imgRect))).map(val => Math.abs(val))
          } else {
            outterRect = imgRect
          }
          imgCanvas.width = outterRect[2]
          imgCanvas.height = outterRect[3]

          imgContext.filter = filters.compile(texture.filter)

          if(srcRect) {
            imgContext.drawImage(img, ...srcRect, outterRect[0], outterRect[1], srcRect[2], srcRect[3])
          } else {
            imgContext.drawImage(img, outterRect[0], outterRect[1], img.width, img.height)
          }
          context.drawImage(imgCanvas, ...rect)
        } else if(srcRect) {
          context.drawImage(img, ...srcRect, ...rect)
        } else {
          context.drawImage(img, ...rect)
        }
      })
    } else {
      context = super.render(t)
    }

    return context
  }
}
