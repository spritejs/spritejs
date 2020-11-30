import Node from './node';
import {toNumber, toArray} from '../utils/attribute_value';
import {parseColor} from '../utils/color';

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
const declareAlias = Symbol.for('spritejs_declareAlias');

export default class Block extends Node {
  constructor(subject) {
    super(subject);

    this[setDefault]({
      anchorX: 0,
      anchorY: 0,
      /* anchor */
      width: undefined,
      height: undefined,
      /* size */
      borderWidth: 0,
      borderColor: 'rgba(0,0,0,1)',
      /* border */
      borderDash: undefined,
      borderDashOffset: 0,
      borderTopLeftRadius: [0, 0],
      borderTopRightRadius: [0, 0],
      borderBottomRightRadius: [0, 0],
      borderBottomLeftRadius: [0, 0],
      /* borderRadius */
      bgcolor: 'rgba(0,0,0,0)',
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      /* padding */
      boxSizing: 'content-box',
      clipPath: undefined,
    });
    this[declareAlias]('anchor', 'size', 'border', 'borderRadius', 'padding');
  }

  get anchorX() {
    return this[getAttribute]('anchorX');
  }

  set anchorX(value) {
    this[setAttribute]('anchorX', toNumber(value));
  }

  get anchorY() {
    return this[getAttribute]('anchorY');
  }

  set anchorY(value) {
    this[setAttribute]('anchorY', toNumber(value));
  }

  get anchor() {
    return [this.anchorX, this.anchorY];
  }

  set anchor(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = [value, value];
    this.anchorX = value[0];
    this.anchorY = value[1];
  }

  get width() {
    return this[getAttribute]('width');
  }

  set width(value) {
    this[setAttribute]('width', toNumber(value));
  }

  get height() {
    return this[getAttribute]('height');
  }

  set height(value) {
    this[setAttribute]('height', toNumber(value));
  }

  get size() {
    return [this.width, this.height];
  }

  set size(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = [value, value];
    this.width = value[0];
    this.height = value[1];
  }

  get borderWidth() {
    return this[getAttribute]('borderWidth');
  }

  set borderWidth(value) {
    this[setAttribute]('borderWidth', toNumber(value));
  }

  get borderColor() {
    return this[getAttribute]('borderColor');
  }

  set borderColor(value) {
    this[setAttribute]('borderColor', parseColor(value));
  }

  get border() {
    return [this.borderWidth, this.borderColor];
  }

  set border(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = [value];
    this.borderWidth = value[0];
    if(value[1] != null) this.borderColor = value[1];
  }

  get borderDash() {
    return this[getAttribute]('borderDash');
  }

  set borderDash(value) {
    value = toArray(value, true);
    if(value != null && !Array.isArray(value)) value = [value];
    this[setAttribute]('borderDash', value ? value.map(toNumber) : null);
  }

  get borderDashOffset() {
    return this[getAttribute]('borderDashOffset');
  }

  set borderDashOffset(value) {
    this[setAttribute]('borderDashOffset', toNumber(value));
  }

  get borderTopLeftRadius() {
    return this[getAttribute]('borderTopLeftRadius');
  }

  set borderTopLeftRadius(value) {
    value = toArray(value, true);
    if(!Array.isArray(value)) value = [value, value];
    this[setAttribute]('borderTopLeftRadius', value.map(toNumber));
  }

  get borderTopRightRadius() {
    return this[getAttribute]('borderTopRightRadius');
  }

  set borderTopRightRadius(value) {
    value = toArray(value, true);
    if(!Array.isArray(value)) value = [value, value];
    this[setAttribute]('borderTopRightRadius', value.map(toNumber));
  }

  get borderBottomRightRadius() {
    return this[getAttribute]('borderBottomRightRadius');
  }

  set borderBottomRightRadius(value) {
    value = toArray(value, true);
    if(!Array.isArray(value)) value = [value, value];
    this[setAttribute]('borderBottomRightRadius', value.map(toNumber));
  }

  get borderBottomLeftRadius() {
    return this[getAttribute]('borderBottomLeftRadius');
  }

  set borderBottomLeftRadius(value) {
    value = toArray(value, true);
    if(!Array.isArray(value)) value = [value, value];
    this[setAttribute]('borderBottomLeftRadius', value.map(toNumber));
  }

  get borderRadius() {
    return [...this.borderTopLeftRadius, ...this.borderTopRightRadius,
      ...this.borderBottomRightRadius, ...this.borderBottomLeftRadius];
  }

  set borderRadius(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = Array(8).fill(value);
    else if(value.length === 2) value = [value[0], value[1], value[0], value[1], value[0], value[1], value[0], value[1]];
    else if(value.length === 4) value = [value[0], value[1], value[2], value[3], value[0], value[1], value[2], value[3]];
    else if(value.length === 6) value = [value[0], value[1], value[2], value[3], value[4], value[5], value[2], value[3]];
    else if(value.length !== 8) throw new TypeError('Invalid borderRadius value.');
    this.borderTopLeftRadius = [value[0], value[1]];
    this.borderTopRightRadius = [value[2], value[3]];
    this.borderBottomRightRadius = [value[4], value[5]];
    this.borderBottomLeftRadius = [value[6], value[7]];
  }

  get bgcolor() {
    return this[getAttribute]('bgcolor');
  }

  set bgcolor(value) {
    this[setAttribute]('bgcolor', parseColor(value));
  }

  get paddingTop() {
    return this[getAttribute]('paddingTop');
  }

  set paddingTop(value) {
    this[setAttribute]('paddingTop', toNumber(value));
  }

  get paddingRight() {
    return this[getAttribute]('paddingRight');
  }

  set paddingRight(value) {
    this[setAttribute]('paddingRight', toNumber(value));
  }

  get paddingBottom() {
    return this[getAttribute]('paddingBottom');
  }

  set paddingBottom(value) {
    this[setAttribute]('paddingBottom', toNumber(value));
  }

  get paddingLeft() {
    return this[getAttribute]('paddingLeft');
  }

  set paddingLeft(value) {
    this[setAttribute]('paddingLeft', toNumber(value));
  }

  get padding() {
    return [this.paddingTop, this.paddingRight, this.paddingBottom, this.paddingLeft];
  }

  set padding(value) {
    value = toArray(value);
    if(!Array.isArray(value)) {
      value = [value, value, value, value];
    } else if(value.length === 2) {
      value = [value[0], value[1], value[0], value[1]];
    } else if(value.length === 3) {
      value = [value[0], value[1], value[2], value[1]];
    }
    this.paddingTop = value[0];
    this.paddingRight = value[1];
    this.paddingBottom = value[2];
    this.paddingLeft = value[3];
  }

  get clipPath() {
    return this[getAttribute]('clipPath');
  }

  set clipPath(value) {
    this[setAttribute]('clipPath', value);
  }

  get boxSizing() {
    return this[getAttribute]('boxSizing');
  }

  set boxSizing(value) {
    if(value != null && value !== 'border-box' && value !== 'content-box') {
      throw new TypeError('Invalid boxSizing type.');
    }
    this[setAttribute]('boxSizing', value);
  }
}