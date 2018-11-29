import {Sprite, utils} from 'sprite-core';
import Resource from './resource';

const attr = utils.attr;
const generateID = utils.generateID;
const _mapTextures = Symbol('mapTextures'),
  _loadTexturePassport = Symbol('loadTexturePassport');

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
      textures = [textures];
    }

    textures = textures.map((texture) => {
      if(typeof texture === 'string') {
        texture = {src: texture};
      } else if(!texture.src && !texture.id && !texture.image) {
        const id = generateID(texture);
        Resource.loadedResources.set(id, texture);
        texture = {image: texture, id};
      } else if(texture.nodeType === 1) {
        texture = {image: texture, src: texture.src};
      }

      return texture;
    });

    this.set('textures', textures);
    this.loadTextures(textures);
  }

  [_mapTextures](textures) {
    let clearCache = false;
    const res = textures.map(({img, texture, fromCache}) => {
      if(!fromCache) clearCache = true;
      return Object.assign({}, texture, {image: img});
    });
    if(clearCache) {
      // async loaded images
      this.subject.forceUpdate(true);
    }
    super.loadTextures(res);
  }

  loadTextures(textures) {
    // adaptive textures
    const passport = Symbol('passport');
    this[_loadTexturePassport] = passport;
    let hasPromise = false;
    const tasks = textures.map((texture) => {
      if(texture.image) {
        return {img: texture.image, texture, fromCache: true};
      }

      const loadingTexture = Resource.loadTexture(texture);
      if(loadingTexture instanceof Promise) {
        hasPromise = true;
      }
      return loadingTexture;
    });

    if(hasPromise) {
      Promise.all(tasks).then((res) => {
        if(this[_loadTexturePassport] === passport) {
          // prevent multicall loadTextures
          this[_mapTextures](res);
        }
      });
    } else {
      // if preload image, calculate the size of sprite synchronously
      this[_mapTextures](tasks);
    }
  }
}

Sprite.Attr = ResAttr;

export default Sprite;
