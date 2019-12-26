import Polyline from './polyline';
import {toNumber, toArray} from '../utils/attribute_value';

const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');

function getPoints(attr) {
  const [a, b] = attr.sides;
  let angle = attr.angle % 360;
  if(angle < 0) angle += 360;

  angle = Math.PI * angle / 180;

  return [0, 0, a, 0, b * Math.cos(angle), b * Math.sin(angle)];
}

export default class Triangle extends Polyline {
  constructor(subject) {
    super(subject);

    this[setDefault]({
      sides: [0, 0],
      angle: 60,
      closeType: 'normal',
    });
  }

  // readonly
  get points() {
    return super.points;
  }

  set points(value) { } // eslint-disable-line no-empty-function

  get sides() {
    return this[getAttribute]('sides');
  }

  set sides(value) {
    value = toArray(value, true);
    if(value != null && !Array.isArray(value)) value = [value, value];
    if(this[setAttribute]('sides', value)) {
      const points = getPoints(this);
      super.points = points;
    }
  }

  get angle() {
    return this[getAttribute]('angle');
  }

  set angle(value) {
    value = toNumber(value);
    if(this[setAttribute]('angle', value)) {
      const points = getPoints(this);
      super.points = points;
    }
  }
}