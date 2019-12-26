import Path from './path';
import ownerDocument from '../document';
import Attr from '../attribute/ring';

export default class Ring extends Path {
  static Attr = Attr;

  /* override */
  get isVisible() {
    const {innerRadius, outerRadius, startAngle, endAngle} = this.attributes;
    return (innerRadius > 0 || outerRadius > 0) && startAngle !== endAngle && super.isVisible;
  }
}

ownerDocument.registerNode(Ring, 'ring');