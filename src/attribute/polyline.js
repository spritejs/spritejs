import Path from './path';
import {toNumber, toArray} from '../utils/attribute_value';
import {makeSmoothCurveLine} from '../utils/smooth_curve';

const setDefault = Symbol.for('spritejs_setAttributeDefault');
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const declareAlias = Symbol.for('spritejs_declareAlias');


function getPath(attr) {
  const {points, smooth, close} = attr;
  const p = [];
  for(let i = 0; i < points.length; i += 2) {
    p.push([points[i], points[i + 1]]);
  }
  let d = '';
  if(smooth) {
    // if(close) {
    //   p.push([...p[0]]);
    // }
    d = makeSmoothCurveLine(p);
  } else if(p.length) {
    d = `M${p.map(v => v.join(' ')).join('L')}`;
  }
  if(d && close) {
    d += 'Z';
  }
  return d;
}

export default class Polyline extends Path {
  constructor(subject) {
    super(subject);

    this[setDefault]({
      points: [],
      smooth: false,
      closeType: 'none', // none | normal
      /* close */
    });
    this[declareAlias]('close');
  }

  // readonly
  get d() {
    return this[getAttribute]('d');
  }

  set d(value) { } // eslint-disable-line no-empty-function

  get close() {
    return this.closeType !== 'none';
  }

  set close(value) {
    value = value ? 'normal' : 'none';
    this.closeType = value;
  }

  get closeType() {
    return this[getAttribute]('closeType');
  }


  set closeType(value) {
    if(value != null && value !== 'none' && value !== 'normal') throw new TypeError('Invalid closeType type.');
    if(this[setAttribute]('closeType', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get smooth() {
    return this[getAttribute]('smooth');
  }

  set smooth(value) {
    if(this[setAttribute]('smooth', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }

  get points() {
    return this[getAttribute]('points');
  }

  set points(value) {
    value = toArray(value);
    if(Array.isArray(value)) {
      value = value.reduce((a, b) => {
        if(Array.isArray(b)) {
          return [...a, ...b.map(v => toNumber(v))];
        }
        return [...a, toNumber(b)];
      }, []);
    }
    if(this[setAttribute]('points', value)) {
      const d = getPath(this);
      this[setAttribute]('d', d);
    }
  }
}