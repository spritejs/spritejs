import BaseSprite from './basesprite'
import Resource from './resource'

import {attr, immutable} from './decorators'

const _textures = Symbol('textures')

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

  @attr
  set textures(textures) {
    if(this.isDefaultSize()) {
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
        this.attr('size', [width, height])
      })
    }
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

  isDefaultSize() {
    const [width, height] = this.attr('size')
    return width === '' && height === ''
  }

  async render(t) {
    const {canvas, rect} = await super.render(t),
      attr = this.attr(),
      textures = this.textures,
      boxctx = canvas.getContext('2d'),
      borderWidth = attr.border[0]

    if(textures) {
      // 绘制图片
      const promises = textures.map(texture => Resource.loadTexture(texture))

      const texturesWithImg = await Promise.all(promises)

      texturesWithImg.forEach(({texture, img}) => {
        let {rect, srcRect} = texture
        rect = (rect || [0, 0, ...this.innerSize]).slice(0)

        rect[0] += borderWidth
        rect[1] += borderWidth

        if(srcRect) {
          boxctx.drawImage(img, ...srcRect, ...rect)
        } else {
          boxctx.drawImage(img, ...rect)
        }
      })
    }

    return {canvas, rect}
  }
}

export default Sprite
