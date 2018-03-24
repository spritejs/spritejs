import Sprite from './sprite'
import {attr} from 'sprite-utils'
import Resource from './resource'

class ResAttr extends Sprite.Attr {
  /*
    {
      id: ...,   //auto generate id
      src: ...,   //texture path
      image: ..., //texture resource
      srcRect: ...,  //texture clip
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
      if(typeof texture === 'string') {
        texture = {src: texture}
      } else if(!texture.src && !texture.image) {
        texture = {image: texture}
      }

      return texture
    })

    this.setTextureSize(textures)
    this.set('textures', textures)
  }

  setTextureSize(textures) {
    // adaptive textures
    const promises = textures.map((texture) => {
      if(texture.image) {
        return Promise.resolve({img: texture.image, texture})
      }
      return Resource.loadTexture(texture)
    })
    const subject = this.subject
    subject.images = Promise.all(promises).then((textures) => {
      const res = textures.map(({img, texture}) => {
        return Object.assign({}, texture, {image: img})
      })
      super.setTextureSize(res)
    })
  }
}

class ResSprite extends Sprite {
  static Attr = ResAttr

  async render(t, drawingContext) {
    const textures = this.textures
    if(textures && textures.length) {
      await this.images
    }
    return super.render(t, drawingContext)
  }
}

export default ResSprite
