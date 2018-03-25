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

    this.set('textures', textures)
    this.loadTextures(textures)
  }

  loadTextures(textures) {
    // adaptive textures
    const promises = textures.map((texture) => {
      if(texture.image) {
        return Promise.resolve({img: texture.image, texture})
      }
      return Resource.loadTexture(texture)
    })
    Promise.all(promises).then((textures) => {
      const res = textures.map(({img, texture, fromCache}) => {
        if(!fromCache) {
          this.clearCache()
        }
        return Object.assign({}, texture, {image: img})
      })
      super.loadTextures(res)
    })
  }
}

class ResSprite extends Sprite {
  static Attr = ResAttr

  render(t, drawingContext) {
    return super.render(t, drawingContext)
  }
}

export default ResSprite
