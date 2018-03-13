const test = require('ava')

import {attr} from '../src/decorators'

class Attr {
  constructor(subject = {cache: null, forceUpdate: () => {}}) {
    this.subject = subject
  }
  @attr
  set pos(val) {
    this._pos = val
  }
  get pos() {
    return this._pos
  }
}

test('attr', (t) => {
  const node = new Attr()
  node.pos = [0, 1]
  t.deepEqual(node.pos, [0, 1])
})