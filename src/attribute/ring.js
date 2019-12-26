import {Figure2D} from '@mesh.js/core';
import Path from './path';
import {toNumber, toArray} from '../utils/attribute_value';

const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const declareAlias = Symbol.for('spritejs_declareAlias');

function getPath(attr) {
  let {innerRadius, outerRadius, startAngle, endAngle} = attr;

  const f = new Figure2D();
  startAngle = Math.PI * startAngle / 180;
  endAngle = Math.PI * endAngle / 180;

  if(innerRadius > outerRadius) {
    [innerRadius, outerRadius] = [outerRadius, innerRadius];
  }

  if(innerRadius <= 0) {
    f.moveTo(0, 0);
  }
  f.arc(0, 0, outerRadius, startAngle, endAngle, false);
  if(innerRadius > 0) {
    const PI2 = Math.PI * 2;
    if(endAngle < startAngle) {
      endAngle = startAngle + PI2 + (endAngle - startAngle) % PI2;
    }
    if(endAngle - startAngle >= PI2) {
      endAngle = startAngle + PI2 - 1e-6;
    }
    f.arc(0, 0, innerRadius, endAngle, startAngle, true);
  }
  f.closePath();

  const path = f.path;
  const ret = path.reduce((a, b) => {
    return a + b.join(' ');
  }, '');
  return ret;
}

export default class Ring extends Path {
  constructor(subject) {
    super(subject);

    this[setDefault]({
      innerRadius: 0,
      outerRadius: 0,
      /* radius */
      startAngle: 0,
      endAngle: 360,
      /* angle */
    });
    this[declareAlias]('radius', 'angle');
  }

  // readonly
  get d() {
    return this[getAttribute]('d');
  }

  set d(value) { } // eslint-disable-line no-empty-function

  get innerRadius() {
    return this[getAttribute]('innerRadius');
  }

  set innerRadius(value) {
    value = toNumber(value);
    if(this[setAttribute]('innerRadius', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get outerRadius() {
    return this[getAttribute]('outerRadius');
  }

  set outerRadius(value) {
    value = toNumber(value);
    if(this[setAttribute]('outerRadius', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get radius() {
    return [this.innerRadius, this.outerRadius];
  }

  set radius(value) {
    value = toArray(value, true);
    if(!Array.isArray(value)) value = [value, value];
    this.innerRadius = value[0];
    this.outerRadius = value[1];
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

  get angle() {
    return [this.startAngle, this.endAngle];
  }

  set angle(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = [value, value];
    this.startAngle = value[0];
    this.endAngle = value[1];
  }
}