import Node from './node';
import {parseColor} from '../utils/color';
import {toNumber, toString, toArray} from '../utils/attribute_value';

const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');

export default class Path extends Node {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      d: '',
      normalize: false,
      fillColor: undefined,
      fillRule: 'nonzero',
      strokeColor: undefined,
      lineWidth: 1,
      lineJoin: 'miter', // 'miter' or 'bevel'
      lineCap: 'butt', // 'butt' or 'square'
      lineDash: undefined,
      lineDashOffset: 0,
      miterLimit: 10,
      texture: undefined,
      textureRect: undefined,
      textureRepeat: false,
      sourceRect: undefined,
    });
  }

  get d() {
    return this[getAttribute]('d');
  }

  set d(value) {
    this[setAttribute]('d', toString(value));
  }

  get normalize() {
    return this[getAttribute]('normalize');
  }

  set normalize(value) {
    this[setAttribute]('normalize', !!value);
  }

  get fillColor() {
    return this[getAttribute]('fillColor');
  }

  set fillColor(value) {
    this[setAttribute]('fillColor', parseColor(value));
  }

  get fillRule() {
    return this[getAttribute]('fillRule');
  }

  set fillRule(value) {
    if(value != null && value !== 'nonzero' && value !== 'evenodd') throw new TypeError('Invalid fill rule.');
    this[setAttribute]('fillRule', value);
  }

  get strokeColor() {
    return this[getAttribute]('strokeColor');
  }

  set strokeColor(value) {
    this[setAttribute]('strokeColor', parseColor(value));
  }

  get lineWidth() {
    return this[getAttribute]('lineWidth');
  }

  set lineWidth(value) {
    this[setAttribute]('lineWidth', toNumber(value));
  }

  get lineJoin() {
    return this[getAttribute]('lineJoin');
  }

  set lineJoin(value) {
    if(value != null && value !== 'miter' && value !== 'bevel') throw new TypeError('Invalid lineJoin type.');
    this[setAttribute]('lineJoin', value);
  }

  get lineCap() {
    return this[getAttribute]('lineCap');
  }

  set lineCap(value) {
    if(value != null && value !== 'butt' && value !== 'square') throw new TypeError('Invalid lineCap type.');
    this[setAttribute]('lineCap', value);
  }

  get lineDash() {
    return this[getAttribute]('lineDash');
  }

  set lineDash(value) {
    value = toArray(value, true);
    if(value != null && !Array.isArray(value)) value = [value];
    this[setAttribute]('lineDash', value ? value.map(toNumber) : null);
  }

  get lineDashOffset() {
    return this[getAttribute]('lineDashOffset');
  }

  set lineDashOffset(value) {
    this[setAttribute]('lineDashOffset', toNumber(value));
  }

  get miterLimit() {
    return this[getAttribute]('miterLimit');
  }

  set miterLimit(value) {
    this[setAttribute]('miterLimit', toNumber(value));
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