import BaseSprite from './basesprite'
import Resource from './resource'
import filters from './filters'

import {rectToBox, boxToRect, boxUnion} from './utils'
import {createCanvas} from './cross-platform'

const _texturesCache = Symbol('_texturesCache')

function getTextureSize(attr, textures) {
  const subject = attr.subject

  // adaptive textures
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
    const [ow, oh] = attr.texturesSize
    attr.set('texturesSize', [width, height])

    // Asynchronously loaded new texture
    if(ow !== width || oh !== height) {
      subject.forceUpdate(true)
    }
  })
}

class TextureAttr extends BaseSprite.Attr {
  /*
    {
      src: ...,   //texture path
      srcRect: ...,  //texture clip
      rect: ....,  //texture in sprite offset
      filter: ...  //texture filters
    }
   */
  set textures(textures) {
    if(!Array.isArray(textures)) {
      textures = [textures]
    }

    textures = textures.map((texture) => {
      if(typeof texture === 'string') {
        texture = {src: texture}
      } else if(texture instanceof BaseSprite) {
        texture = {src: texture}
      }

      return texture
    })

    const [width, height] = this.size
    if(width === '' || height === '') {
      getTextureSize(this, textures)
    }

    this.set('textures', textures)
  }
  get textures() {
    return this.get('textures')
  }

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

  // override to adapt textures' size
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
            // touched textures
            evt.targetTextures.push(texture)
          }
        })
      }
      return true
    }
  }

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
      return cacheMap.get(key)
    }
    return null
  }

  async render(t, drawingContext) {
    let context
    const textures = this.textures

    if(textures) {
      const attr = this.attr(),
        borderWidth = attr.border[0]

      // load textures
      const promises = textures.map(texture => Resource.loadTexture(texture))
      const texturesWithImg = await Promise.all(promises)

      context = super.render(t, drawingContext)

      texturesWithImg.forEach(({texture, img, sprite}) => {
        const rect = (texture.rect || [0, 0, ...this.innerSize]).slice(0)
        const srcRect = texture.srcRect

        rect[0] += borderWidth
        rect[1] += borderWidth

        context.save()

        let bound = [0, 0]

        if(img instanceof BaseSprite) {
          const transform = img.transform.m,
            pos = img.attr('pos')

          bound = img.originRect

          context.translate(pos[0], pos[1])
          context.transform(...transform)
          context.globalAlpha = img.attr('opacity')

          img = img.context.canvas
        }

        if(texture.filter) {
          const imgCanvas = createCanvas()
          const imgContext = imgCanvas.getContext('2d')

          let outterRect
          const imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height]

          if(texture.filter.dropShadow) {
            const dsArr = texture.filter.dropShadow
            const shadowRect = [Math.round(dsArr[0] - 2 * dsArr[2]), Math.round(dsArr[1] - 2 * dsArr[2]), imgRect[2] + 4 * dsArr[2], imgRect[3] + 4 * dsArr[2]]

            outterRect = boxToRect(boxUnion(rectToBox(shadowRect), rectToBox(imgRect))).map(val => Math.abs(val))
          } else {
            outterRect = imgRect
          }
          imgCanvas.width = outterRect[2]
          imgCanvas.height = outterRect[3]

          imgContext.filter = filters.compile(texture.filter)

          if(srcRect) {
            imgContext.drawImage(img, ...srcRect, bound[0] + outterRect[0], bound[1] + outterRect[1], srcRect[2], srcRect[3])
          } else {
            imgContext.drawImage(img, bound[0] + outterRect[0], bound[1] + outterRect[1], img.width, img.height)
          }
          context.drawImage(imgCanvas, ...rect)
        } else if(srcRect) {
          context.drawImage(img, ...srcRect, ...[bound[0] + rect[0], bound[1] + rect[1], rect[2], rect[3]])
        } else {
          context.drawImage(img, ...[bound[0] + rect[0], bound[1] + rect[1], rect[2], rect[3]])
        }

        context.restore()
      })
    } else {
      context = super.render(t, drawingContext)
    }

    return context
  }
}
