import BaseSprite from './basesprite'
import Resource from './resource'

import {attr} from './decorators'

const _textures = Symbol('textures')

class Sprite extends BaseSprite{
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
  set textures(textures){
    this[_textures] = textures.map(texture => {
      if(typeof texture === 'string'){
        texture = {src: texture, rect: [0, 0, ...this.attr('size')]}
      }
      return texture
    })
  }
  get textures(){
    return this[_textures]
  }

  pointCollision(evt){
    if(super.pointCollision(evt)){
      const textures = this.textures,
            {offsetX, offsetY} = evt 

      evt.targetTextures = []

      textures.forEach(texture => {
        let [x, y, w, h] = texture.rect
        if(offsetX >= x && offsetX - x < w
           && offsetY >= y && offsetY - y < h){
          evt.targetTextures.push(texture)
        }
      })
      return true
    }
  }

  async render(t) {
    const {canvas, rect} = await super.render(t),
          attr = this.attr(),
          textures = this.textures,
          boxctx = canvas.getContext('2d'),
          borderWidth = attr.border[0]


    if(textures){
      //绘制图片
      const promises = textures.map(texture => Resource.loadTexture(texture))

      const texturesWithImg = await Promise.all(promises)

      texturesWithImg.forEach(({texture, img}) => {
        let {rect, srcRect} = texture
        rect = (rect || [0, 0, ...attr.size]).slice(0)

        rect[0] += borderWidth
        rect[1] += borderWidth

        if(srcRect){
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
