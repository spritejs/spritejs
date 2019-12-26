import Ellipse from './ellipse';
import ownerDocument from '../document';
import Attr from '../attribute/arc';

export default class Arc extends Ellipse {
  static Attr = Attr;
}

ownerDocument.registerNode(Arc, 'arc');