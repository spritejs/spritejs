import Polyline from './polyline';
import ownerDocument from '../document';
import Attr from '../attribute/regular';

export default class Regular extends Polyline {
  static Attr = Attr;
}

ownerDocument.registerNode(Regular, 'regular');