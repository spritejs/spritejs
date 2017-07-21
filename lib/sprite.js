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
  set textures(val){
    this[_textures] = val
  }
  get textures(){
    return this[_textures]
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
        rect = rect || [borderWidth, borderWidth, ...attr.size]

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
