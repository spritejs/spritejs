import {ENV, createText, parseFont} from '@mesh.js/core';
import {requestAnimationFrame} from '../utils/animation-frame';
import {createTexture} from '../utils/texture';
import Block from './block';
import Attr from '../attribute/label';
import ownerDocument from '../document';

const _textImage = Symbol('textImage');
const _textImageTask = Symbol('textImageTask');
const _textureContext = Symbol('textureContext');

const _updateTextureRect = Symbol('updateTextureRect');

export default class Label extends Block {
  static Attr = Attr;

  constructor(attrs = {}) {
    if(typeof attrs === 'string') attrs = {text: attrs};
    super(attrs);
  }

  /* override */
  get contentSize() {
    let [w, h] = super.contentSize;
    const {width, height} = this.attributes;
    if(width == null || height == null) {
      const img = this[_textImage];
      if(img) {
        if(width == null) w = img.rect[2];
        if(height == null) h = img.rect[3];
      }
    }
    return [w, h];
  }

  get text() {
    return this.attributes.text;
  }

  set text(value) {
    this.attributes.text = value;
  }

  /* override */
  draw(meshes) {
    super.draw(meshes);
    const mesh = this.mesh;
    if(mesh) {
      const textImage = this[_textImage];
      if(textImage) {
        let texture = mesh.texture;

        if(!texture
          || this[_textureContext] && this[_textureContext] !== this.renderer
          || texture.image !== textImage.image) {
          texture = createTexture(textImage.image, this.renderer);
          this[_updateTextureRect] = true;
        } else {
          texture = mesh.uniforms.u_texSampler;
        }

        if(this[_updateTextureRect]) {
          const [width, height] = textImage.rect.slice(2);
          const [w, h] = this.contentSize;
          const textAlign = this.attributes.textAlign;
          const verticalAlign = this.attributes.verticalAlign;

          let x = 0;
          if(textAlign === 'center') {
            x = (w - width) / 2;
          } else if(textAlign === 'right' || textAlign === 'end') {
            x = w - width;
          }

          let y;
          if(verticalAlign === 'top') {
            y = 0;
          } else if(verticalAlign === 'bottom') {
            y = h - height;
          } else {
            y = (h - height) / 2;
          }
          const {paddingLeft, paddingTop} = this.attributes;

          x += paddingLeft;
          y += paddingTop;

          const {anchorX, anchorY} = this.attributes;

          x -= this.clientSize[0] * anchorX;
          y -= this.clientSize[1] * anchorY;

          mesh.setTexture(texture, {
            rect: [x, y, width, height],
          });
          this[_updateTextureRect] = false;
          this[_textureContext] = this.renderer;
        }
      }
    }
    return meshes;
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    if(key === 'text' || key === 'fontSize' || key === 'fontFamily'
      || key === 'fontStyle' || key === 'fontVariant' || key === 'fontWeight'
      || key === 'fontStretch' || key === 'lineHeight'
      || key === 'strokeColor' || key === 'fillColor') {
      this.updateText();
    } else {
      if(key === 'textAlign' || key === 'verticalAlign') {
        this[_updateTextureRect] = true;
      }
      super.onPropertyChange(key, newValue, oldValue);
    }
  }

  /* override */
  updateContours() {
    super.updateContours();
    this[_updateTextureRect] = true;
  }

  updateText() {
    if(!this[_textImageTask]) {
      this[_textImageTask] = new Promise((resolve) => {
        requestAnimationFrame(() => {
          this[_textImageTask] = null;
          const {text, font, fillColor, strokeColor, strokeWidth} = this.attributes;
          if(ENV.createText) {
            this[_textImage] = ENV.createText(text, {font, fillColor, strokeColor, strokeWidth, parseFont});
          } else {
            this[_textImage] = createText(text, {font, fillColor, strokeColor, strokeWidth});
          }
          this.updateContours();
          this.forceUpdate();
          resolve(this[_textImage]);
        });
      });
    }
  }
}

ownerDocument.registerNode(Label, 'label');