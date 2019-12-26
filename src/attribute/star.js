// 多角星
import Polyline from './polyline';
import {toNumber, toArray} from '../utils/attribute_value';

const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');

function getPoints(attr) {
  const {angles, innerRadius, outerRadius, offsetAngle} = attr;
  const offset = Math.PI * offsetAngle / 180 - 0.5 * Math.PI;
  if(angles < 3 || innerRadius <= 0 || outerRadius <= 0) return [];
  const points = [];
  for(let i = 0; i < angles * 2; i++) {
    const angle = i * Math.PI / angles + offset;
    const radius = i % 2 ? innerRadius : outerRadius;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    points.push(x, y);
  }
  return points;
}

export default class Star extends Polyline {
  constructor(subject) {
    super(subject);

    this[setDefault]({
      angles: 5,
      innerRadius: 0,
      outerRadius: 0,
      /* radius */
      offsetAngle: 0,
      closeType: 'normal',
    });
  }

  // readonly
  get points() {
    return super.points;
  }

  set points(value) { } // eslint-disable-line no-empty-function

  get angles() {
    return this[getAttribute]('angles');
  }

  set angles(value) {
    value = toNumber(value);
    if(this[setAttribute]('angles', value)) {
      const points = getPoints(this);
      super.points = points;
    }
  }


  get innerRadius() {
    return this[getAttribute]('innerRadius');
  }

  set innerRadius(value) {
    value = toNumber(value);
    if(this[setAttribute]('innerRadius', value)) {
      const points = getPoints(this);
      super.points = points;
    }
  }

  get outerRadius() {
    return this[getAttribute]('outerRadius');
  }

  set outerRadius(value) {
    value = toNumber(value);
    if(this[setAttribute]('outerRadius', value)) {
      const points = getPoints(this);
      super.points = points;
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

  get offsetAngle() {
    return this[getAttribute]('offsetAngle');
  }

  set offsetAngle(value) {
    value = toNumber(value);
    if(this[setAttribute]('offsetAngle', value)) {
      const points = getPoints(this);
      super.points = points;
    }
  }
}