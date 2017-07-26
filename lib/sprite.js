import BaseSprite from './basesprite'
import Resource from './resource'

import {attr, readonly, immutable} from './decorators'

const _textures = Symbol('textures'),
  _texturesSize = Symbol('texturesSize'),
  _texturesCache = Symbol('_texturesCache')

class Sprite extends BaseSprite {
  /**
    new Sprite({
      attr: {
        ...
      },
      attributeChangedCallback: function(prop, oldValue, newValue){

      }
    })
   */
  constructor(textures, opts) {
    super(opts)
      if(typeof textures === 'string') {
      textures = [textures]
    } else if(typeof textures === 'object') {
      opts = textures
      textures = opts.textures
    }
    if(textures) {
      this.textures = textures
    }
    this[_texturesCache] = new Map()
  }

  @attr('norepaint')
  set textures(textures) {
    // 自适应 textures
    const promises = textures.map(texture => Resource.loadTexture(texture))
    Promise.all(promises).then((textures) => {
      let width = 0,
        height = 0
      textures.forEach(({img}) => {
        if(width < img.width) {
          width = img.width
        }
        if(height < img.height) {
          height = img.height
        }
      })
      this[_texturesSize] = [width, height]
      // 因为这个更新属性是异步的，结束后必须要 forceUpdate
      this.forceUpdate()
    })

    this[_textures] = textures.map((texture) => {
      if(typeof texture === 'string') {
        texture = {src: texture}
      }
      return texture
    })
  }
  @immutable('json')
  get textures() {
    return this[_textures]
  }

  // 改写，让它支持自适应 textures 大小
  @readonly
  get contentSize() {
    const [width, height] = this.attr('size')

    if(width === '' && height === '') {
      return this[_texturesSize] || [0, 0]
    }

    return [width | 0, height | 0]
  }

  // 判断哪几张图片纹理被鼠标或touch命中
  pointCollision(evt) {
    if(super.pointCollision(evt)) {
      const textures = this.textures

      if(textures) {
        const {offsetX, offsetY} = evt
        evt.targetTextures = []

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

  //清除缓存，非 norepaint 的属性更新会调用这个方法
  //子类里面可以改写它
  clearCache () {
    delete this[_texturesCache].clear()    
  }
  fromCache() {
    const key = JSON.stringify(this.textures),
          cacheMap = this[_texturesCache]
    if(cacheMap.has(key)) {
      return cacheMap.get(key)
    }
  }
  cache(context) {
    const key = JSON.stringify(this.textures),
          cacheMap = this[_texturesCache]

    if(!cacheMap.has(key)){
      cacheMap.set(key, context)
    }
  }

  async render(t) {
    const context = super.render(t),
      attr = this.attr(),
      textures = this.textures,
      borderWidth = attr.border[0]

    if(textures) {
      // 绘制图片
      const promises = textures.map(texture => Resource.loadTexture(texture))

      // 如果图片没有被预加载，这里就是异步的
      const texturesWithImg = await Promise.all(promises)

      texturesWithImg.forEach(({texture, img}) => {
        const rect = (texture.rect || [0, 0, ...this.innerSize]).slice(0),
          srcRect = texture.srcRect

        rect[0] += borderWidth
        rect[1] += borderWidth

        if(srcRect) {
          context.drawImage(img, ...srcRect, ...rect)
        } else {
          context.drawImage(img, ...rect)
        }
      })
    }

    return context
  }
}

export default Sprite
