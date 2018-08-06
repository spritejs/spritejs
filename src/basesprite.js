import {BaseSprite} from 'sprite-core';
import Resource from './resource';

const _loadBgImagePassport = Symbol('loadBgImagePassport');

let passport;

BaseSprite.prototype.loadBgImage = function (val) {
  let res;
  if(val.id) {
    res = Resource.loadTexture({id: val.id});
  } else if(val.src) {
    res = Resource.loadTexture(val.src);
  }
  if(res instanceof Promise) {
    passport = Symbol('passport');
    this[_loadBgImagePassport] = passport;
    res.then(({img, texture}) => {
      if(passport === this[_loadBgImagePassport]) {
        const bgimage = this.attr('bgimage');
        bgimage.image = img;
        this.attr('bgimage', null);
        this.attr('bgimage', bgimage);
      }
    });
  } else if(res) {
    val.image = res.img;
  }

  return val;
};

export default BaseSprite;
