import Block from './block';

const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');

export default class Sprite extends Block {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      texture: undefined,
      textureRect: undefined,
      textureRepeat: false,
      sourceRect: undefined,
    });
  }

  get texture() {
    return this[getAttribute]('texture');
  }

  set texture(value) {
    this[setAttribute]('texture', value);
  }

  get textureRect() {
    return this[getAttribute]('textureRect');
  }

  set textureRect(value) {
    this[setAttribute]('textureRect', value);
  }

  get sourceRect() {
    return this[getAttribute]('sourceRect');
  }

  set sourceRect(value) {
    this[setAttribute]('sourceRect', value);
  }

  get textureRepeat() {
    return this[getAttribute]('textureRepeat');
  }

  set textureRepeat(value) {
    this[setAttribute]('textureRepeat', !!value);
  }
}