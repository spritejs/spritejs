import Path from './path';
import ownerDocument from '../document';
import Attr from '../attribute/polyline';

export default class Polyline extends Path {
  static Attr = Attr;

  /* override */
  get isVisible() {
    const {points} = this.attributes;
    return points.length > 0 && super.isVisible;
  }
}

ownerDocument.registerNode(Polyline, 'polyline');