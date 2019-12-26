import {Figure2D} from '@mesh.js/core';
import Path from './path';
import {toNumber, toString, toArray} from '../utils/attribute_value';

const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const declareAlias = Symbol.for('spritejs_declareAlias');

function getPath(attr) {
  const {radiusX, radiusY, startAngle, endAngle, direction, closeType} = attr;
  const anticlockwise = direction === 'anitclockwise';
  const f = new Figure2D();
  if(closeType === 'sector') {
    f.moveTo(0, 0);
  }
  f.ellipse(0, 0, radiusX, radiusY, 0, Math.PI * startAngle / 180, Math.PI * endAngle / 180, anticlockwise);
  if(closeType !== 'none') {
    f.closePath();
  }
  const path = f.path;
  const ret = path.reduce((a, b) => {
    return a + b.join(' ');
  }, '');
  return ret;
}

export default class Ellipse extends Path {
  constructor(subject) {
    super(subject);

    this[setDefault]({
      radiusX: 0,
      radiusY: 0,
      /* radius */
      startAngle: 0,
      endAngle: 360,
      /* angle */
      direction: 'clockwise', // clockwise | anticlockwise
      closeType: 'none', // none | sector | normal
    });
    this[declareAlias]('radius', 'angle');
  }

  // readonly
  get d() {
    return this[getAttribute]('d');
  }

  set d(value) { } // eslint-disable-line no-empty-function

  get radiusX() {
    return this[getAttribute]('radiusX');
  }

  set radiusX(value) {
    value = toNumber(value);
    if(this[setAttribute]('radiusX', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get radiusY() {
    return this[getAttribute]('radiusY');
  }

  set radiusY(value) {
    value = toNumber(value);
    if(this[setAttribute]('radiusY', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get radius() {
    return [this.radiusX, this.radiusY];
  }

  set radius(value) {
    value = toArray(value, true);
    if(!Array.isArray(value)) value = [value, value];
    this.radiusX = value[0];
    this.radiusY = value[1];
  }

  get angle() {
    return [this.startAngle, this.endAngle];
  }

  set angle(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = [value, value];
    this.startAngle = value[0];
    this.endAngle = value[1];
  }

  get direction() {
    return this[getAttribute]('direction');
  }

  set direction(value) {
    if(value != null && value !== 'clockwise' && value !== 'anticlockwise') throw new TypeError('Invalid direction type.');
    this[setAttribute]('direction', toString(value));
  }

  get startAngle() {
    return this[getAttribute]('startAngle');
  }

  set startAngle(value) {
    value = toNumber(value);
    if(this[setAttribute]('startAngle', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get endAngle() {
    return this[getAttribute]('endAngle');
  }

  set endAngle(value) {
    value = toNumber(value);
    if(this[setAttribute]('endAngle', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get closeType() {
    return this[getAttribute]('closeType');
  }

  set closeType(value) {
    if(value != null && value !== 'none' && value !== 'sector' && value !== 'normal') throw new TypeError('Invalid closeType type.');
    if(this[setAttribute]('closeType', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }
}