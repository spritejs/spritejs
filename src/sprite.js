import {Sprite, utils} from 'sprite-core'
import Resource from './resource'

const attr = utils.attr
const _mapTextures = Symbol('mapTextures')

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
      } else if(!texture.src && !texture.id && !texture.image) {
        texture = {image: texture}
      }

      return texture
    })

    this.set('textures', textures)
    this.loadTextures(textures)
  }

  [_mapTextures](textures) {
    let clearCache = false
    const res = textures.map(({img, texture, fromCache}) => {
      if(!fromCache) clearCache = true
      return Object.assign({}, texture, {image: img})
    })
    if(clearCache) {
      this.forceUpdate(true)
    }
    super.loadTextures(res)
  }

  loadTextures(textures) {
    // adaptive textures
    let hasPromise = false
    const tasks = textures.map((texture) => {
      if(texture.image) {
        return {img: texture.image, texture}
      }

      const loadingTexture = Resource.loadTexture(texture)
      if(loadingTexture instanceof Promise) {
        hasPromise = true
      }
      return loadingTexture
    })

    if(hasPromise) {
      Promise.all(tasks).then(this[_mapTextures].bind(this))
    } else {
      // if preload image, calculate the size of sprite synchronously
      this[_mapTextures](tasks)
    }
  }
}

class ResSprite extends Sprite {
  static Attr = ResAttr
}

export default ResSprite
