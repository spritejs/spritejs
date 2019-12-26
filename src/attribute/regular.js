// 正多边形
import Polyline from './polyline';
import {toNumber} from '../utils/attribute_value';

const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');

function getPoints(attr) {
  const {edges, radius, offsetAngle} = attr;
  const offset = Math.PI * offsetAngle / 180 - 0.5 * Math.PI;
  if(edges < 3 || radius <= 0) return [];
  const points = [];
  for(let i = 0; i < edges; i++) {
    const angle = i * 2 * Math.PI / edges + offset;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    points.push(x, y);
  }
  return points;
}

export default class Regular extends Polyline {
  constructor(subject) {
    super(subject);

    this[setDefault]({
      edges: 3,
      radius: 0,
      offsetAngle: 0,
      closeType: 'normal',
    });
  }

  // readonly
  get points() {
    return super.points;
  }

  set points(value) { } // eslint-disable-line no-empty-function

  get edges() {
    return this[getAttribute]('edges');
  }

  set edges(value) {
    value = toNumber(value);
    if(this[setAttribute]('edges', value)) {
      const points = getPoints(this);
      super.points = points;
    }
  }


  get radius() {
    return this[getAttribute]('radius');
  }

  set radius(value) {
    value = toNumber(value);
    if(this[setAttribute]('radius', value)) {
      const points = getPoints(this);
      super.points = points;
    }
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