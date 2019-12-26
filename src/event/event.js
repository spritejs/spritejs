const _type = Symbol('type');
const _bubbles = Symbol('bubbles');
const _originalEvent = Symbol('originalEvent');
const _detail = Symbol('detail');

export default class Event {
  constructor(originalEvent, {bubbles = null} = {}) {
    if(typeof originalEvent === 'string') {
      this[_type] = originalEvent;
      this[_bubbles] = !!bubbles;
    } else {
      this[_type] = originalEvent.type;
      this[_originalEvent] = originalEvent;
      this[_bubbles] = bubbles != null ? !!bubbles : !!originalEvent.bubbles;
      if(originalEvent.detail) {
        this[_detail] = originalEvent.detail;
      }
    }
    if(!this[_type]) throw new TypeError('Invalid event type.');
    this.cancelBubble = false;
  }

  setOriginalEvent(originalEvent) {
    this[_originalEvent] = originalEvent;
  }

  get originalEvent() {
    return this[_originalEvent];
  }

  get type() {
    return this[_type];
  }

  get bubbles() {
    return this[_bubbles];
  }

  get detail() {
    return this[_detail];
  }

  stopPropagation() {
    this.cancelBubble = true;
  }
}