import BaseSprite from './basesprite'
import filters from './filters'

import {rectToBox, boxToRect, boxUnion, attr} from 'sprite-utils'

const _texturesCache = Symbol('_texturesCache')
const _images = Symbol('_images')

class TextureAttr extends BaseSprite.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      texturesSize: [0, 0],
      textures: [],
    })
  }
  /*
    {
      image: ...,  //texture resource
      srcRect: ..., //texture clip
      rect: ....,  //texture in sprite offset
      filter: ...  //texture filters
    }
   */
  @attr
  set textures(textures) {
    if(!Array.isArray(textures)) {
      textures = [textures]
    }

    textures = textures.map((texture) => {
      if(!texture.image) {
        texture = {image: texture}
      }
      return texture
    })

    this.setTextureSize(textures)

    this.set('textures', textures)
  }

  setTextureSize(textures) {
    const subject = this.subject

    // adaptive textures
    let width = 0,
      height = 0

    subject.images = textures.map(({image, rect, srcRect}) => {
      let w,
        h
      if(rect) {
        w = rect[2] + rect[0]
        h = rect[3] + rect[1]
      } else if(srcRect) {
        w = srcRect[2]
        h = srcRect[3]
      } else {
        w = image.width
        h = image.height
      }
      if(width < w) {
        width = w
      }
      if(height < h) {
        height = h
      }
      return image
    })
    const [ow, oh] = this.texturesSize
    this.set('texturesSize', [width, height])

    // Asynchronously loaded new texture
    if(ow !== width || oh !== height) {
      subject.forceUpdate(true)
    }
  }

  get texturesSize() {
    return this.get('texturesSize')
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

  cloneNode(copyContent) {
    const node = super.cloneNode(copyContent)
    if(copyContent) {
      node.textures = this.textures
    }
    return node
  }

  set images(images) {
    this[_images] = images
  }
  get images() {
    return this[_images]
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

  render(t, drawingContext) {
    const context = super.render(t, drawingContext)
    const textures = this.textures

    if(textures && textures.length) {
      const attr = this.attr(),
        borderWidth = attr.border[0]

      textures.forEach((texture, i) => {
        const img = this.images[i]
        const rect = (texture.rect || [0, 0, ...this.innerSize]).slice(0)
        const srcRect = texture.srcRect
        rect[0] += borderWidth
        rect[1] += borderWidth

        context.save()

        if(texture.filter) {
          let outterRect
          const imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height]

          if(texture.filter.dropShadow) {
            const dsArr = texture.filter.dropShadow
            const shadowRect = [dsArr[0] - 2 * dsArr[2], dsArr[1] - 2 * dsArr[2],
              imgRect[2] + 4 * dsArr[2], imgRect[3] + 4 * dsArr[2]].map(val => Math.round(val))

            outterRect = boxToRect(boxUnion(rectToBox(shadowRect), rectToBox(imgRect))).map(val => Math.abs(val))
          } else {
            outterRect = imgRect
          }

          const sx = rect[2] / outterRect[2],
            sy = rect[3] / outterRect[3]

          context.filter = filters.compile(texture.filter)

          if(srcRect) {
            context.drawImage(img, ...srcRect, sx * outterRect[0] + rect[0], sy * outterRect[1] + rect[1], sx * srcRect[2], sy * srcRect[3])
          } else {
            context.drawImage(img, sx * outterRect[0] + rect[0], sy * outterRect[1] + rect[1], sx * img.width, sy * img.height)
          }
        } else if(srcRect) {
          context.drawImage(img, ...srcRect, ...rect)
        } else {
          context.drawImage(img, ...rect)
        }

        context.restore()
      })
    }

    return context
  }
}
