import Path from './path';
import ownerDocument from '../document';
import Attr from '../attribute/ellipse';

export default class Ellipse extends Path {
  static Attr = Attr;

  /* override */
  get isVisible() {
    const {radiusX, radiusY, startAngle, endAngle} = this.attributes;
    return radiusX > 0 && radiusY > 0 && startAngle !== endAngle && super.isVisible;
  }
}

ownerDocument.registerNode(Ellipse, 'ellipse');