import Sprite from './sprite';

const getAttribute = Symbol.for('spritejs_getAttribute');
const setAttribute = Symbol.for('spritejs_setAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');

export default class SpriteSvg extends Sprite {
  constructor(subject) {
    super(subject);

    this[setDefault]({
      passEvents: false,
      flexible: false,
    });
  }

  // readonly
  get texture() {
    return this[getAttribute]('texture');
  }

  set texture(value) { } // eslint-disable-line no-empty-function

  get passEvents() {
    return this[getAttribute]('passEvents');
  }

  set passEvents(value) {
    return this[setAttribute]('passEvents', value);
  }

  get flexible() {
    return this[getAttribute]('flexible');
  }

  set flexible(value) {
    return this[setAttribute]('flexible', value);
  }
}