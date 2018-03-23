const test = require('ava')

import {parseValue, deprecate} from '../src/decorators'

const _subject = Symbol('subject')

class Attr {
  constructor(subject = {cache: null, forceUpdate: () => {}}) {
    this[_subject] = subject
  }
  get subject() {
    return this[_subject]
  }

  set pos(val) {
    this._pos = val
  }
  get pos() {
    return this._pos
  }

  set border(val) {
    this._border = val
  }
  get border() {
    return this._border
  }

  get loc() {
    return this._pos
  }

  @parseValue(parseInt)
  set width(val) {
    this._width = val
  }
  get width() {
    return this._width
  }
  normal() {

  }

  @deprecate
  bar() {
    return 'bar'
  }
  @deprecate('out of date...')
  set bar2(val) {
    this._bar2 = val
  }
  get bar2() {
    return this._bar2
  }
}

test('attr', (t) => {
  const node = new Attr()
  node.pos = [0, 1]
  t.deepEqual(node.pos, [0, 1])
})

test('attr parseValue', (t) => {
  const node = new Attr()
  node.width = '100px'

  t.is(node.width, 100)
})

test('deprecate', (t) => {
  const node = new Attr()
  node.bar()
  node.bar2 = 'test'
  t.is(node.bar2, 'test')
})