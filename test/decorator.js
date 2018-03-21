const test = require('ava')

import {attr, parseValue, memoize, deprecate} from '../src/decorators'

const _subject = Symbol('subject')

class Attr {
  constructor(subject = {cache: null, forceUpdate: () => {}}) {
    this[_subject] = subject
  }
  get subject() {
    return this[_subject]
  }
  @attr
  set pos(val) {
    this._pos = val
  }
  get pos() {
    return this._pos
  }
  @attr('repaint')
  set border(val) {
    this._border = val
  }
  get border() {
    return this._border
  }

  get loc() {
    return this._pos
  }

  @attr
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

test('attr update subject', (t) => {
  let update = 0
  let change = 0

  const subject = {
    cache: null,
    forceUpdate() {
      update++
    },
    attributeChangedCallback() {
      change++
    },
  }

  const node = new Attr(subject)

  node.pos = [0, 0]
  node.pos = [0, 1]
  node.pos = [0, 1]
  node.pos = [1, 1]

  t.is(update, 3)
  t.is(change, 4)
})

test('attr repaint', (t) => {
  let updte = 0
  const subject = {
    cache: null,
    forceUpdate() {
      updte++
    },
  }

  const node = new Attr(subject)

  node.border = 0
  t.is(subject.cache, null)
  subject.cache = 'not null'

  node.border = 1
  t.is(subject.cache, null)

  subject.cache = 'not null'
  node.border = 1
  t.is(subject.cache, 'not null')

  node.border = 2
  t.is(subject.cache, null)

  t.is(updte, 3)
})

test('attr enumable', (t) => {
  const node = new Attr()
  const attrs = []

  /* eslint-disable no-restricted-syntax */
  for(const prop in node) {
    attrs.push(prop)
  }
  /* eslint-enable no-restricted-syntax */

  t.is(attrs.includes('pos'), true)
  t.is(attrs.includes('loc'), true)
  t.is(attrs.includes('normal'), false)
})

test('attr parseValue', (t) => {
  const node = new Attr()
  node.width = '100px'

  t.is(node.width, 100)
})

test('attr remove', (t) => {
  const node = new Attr()
  node.pos = [1, 1]
  t.deepEqual(node.pos, [1, 1])

  node.pos = null
  t.is(node.pos === null, true)

  node.remove = (prop) => {
    node[prop] = [0, 0]
  }

  node.pos = [1, 1]
  t.deepEqual(node.pos, [1, 1])

  node.pos = null
  t.deepEqual(node.pos, [0, 0])
})

test('memoize', (t) => {
  let getRand = function (key) {
    return Math.random()
  }

  let a = getRand('a')
  let b = getRand('b')
  let c = getRand('a')

  t.is(a !== b, true)
  t.is(a !== c, true)

  getRand = memoize(getRand)

  a = getRand('a')
  b = getRand('b')
  c = getRand('a')

  t.is(a !== b, true)
  t.is(a === c, true)
})

test('deprecate', (t) => {
  const node = new Attr()
  node.bar()
  node.bar2 = 'test'
  t.is(node.bar2, 'test')
})