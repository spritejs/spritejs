import {applyTexture, drawTexture} from '../utils/texture';
import Block from './block';
import Attr from '../attribute/sprite';
import ownerDocument from '../document';

const _textureTask = Symbol('textureTask');

export default class Sprite extends Block {
  static Attr = Attr;

  constructor(attrs = {}) {
    if(typeof attrs === 'string') attrs = {texture: attrs};
    super(attrs);
  }

  /* override */
  get contentSize() {
    let [w, h] = super.contentSize;
    const {width, height} = this.attributes;
    if(width == null || height == null) {
      const img = this.textureImage;
      const textureRect = this.attributes.textureRect;
      const sourceRect = this.attributes.sourceRect;
      if(textureRect) {
        if(width == null) w = textureRect[0] + textureRect[2];
        if(height == null) h = textureRect[1] + textureRect[3];
      } else if(sourceRect) {
        const ratio = this.layer ? this.layer.displayRatio : 1;
        if(width == null) w = sourceRect[2] / ratio;
        if(height == null) h = sourceRect[3] / ratio;
      } else if(img) {
        const ratio = this.layer ? this.layer.displayRatio : 1;
        if(width == null) w = img.width / ratio;
        if(height == null) h = img.height / ratio;
      }
    }
    return [w, h];
  }

  get textureImageReady() {
    return this[_textureTask] || Promise.resolve();
  }

  /* override */
  draw(meshes = []) {
    super.draw(meshes);
    const mesh = this.mesh;
    if(mesh) {
      drawTexture(this, mesh);
    }

    return meshes;
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'texture') {
      this[_textureTask] = applyTexture(this, newValue, true);
      // this.setTexture(newValue);
    }
    if(key === 'textureRect') {
      const {width, height} = this.attributes;
      if(width == null || height == null) {
        this.updateContours();
      }
    }
  }
}

ownerDocument.registerNode(Sprite, 'sprite');