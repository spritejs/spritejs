import Polyline from './polyline';
import ownerDocument from '../document';
import Attr from '../attribute/triangle';

export default class Triangle extends Polyline {
  static Attr = Attr;

  get isVisible() {
    const {sides} = this.attributes;
    return sides[0] > 0 && sides[1] > 0 && super.isVisible;
  }
}

ownerDocument.registerNode(Triangle, 'triangle');