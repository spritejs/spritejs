import Polyline from './polyline';
import ownerDocument from '../document';
import Attr from '../attribute/parallel';

export default class Parallel extends Polyline {
  static Attr = Attr;

  /* override */
  get isVisible() {
    const {sides} = this.attributes;
    return sides[0] > 0 && sides[1] > 0 && super.isVisible;
  }
}

ownerDocument.registerNode(Parallel, 'parallel');