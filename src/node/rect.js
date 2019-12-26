import Path from './path';
import ownerDocument from '../document';
import Attr from '../attribute/rect';

export default class Rect extends Path {
  static Attr = Attr;

  /* override */
  get isVisible() {
    const {width, height} = this.attributes;
    return width > 0 && height > 0 && super.isVisible;
  }
}

ownerDocument.registerNode(Rect, 'rect');