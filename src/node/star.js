import Polyline from './polyline';
import ownerDocument from '../document';
import Attr from '../attribute/star';

export default class Star extends Polyline {
  static Attr = Attr;
}

ownerDocument.registerNode(Star, 'star');