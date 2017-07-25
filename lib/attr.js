import Matrix from './matrix'

import {attr, immutable} from './decorators'
import {parseColor, oneOrTwoValues, fourValuesShortCut} from './utils'

const _attr = Symbol('attr'),
  _subject = Symbol('subject')

class SpriteAttr {
  constructor(subject) {
    this[_subject] = subject
    this[_attr] = {
      anchor: [0, 0],
      x: 0,
      y: 0,
      opacity: 1,
      width: '',
      height: '',
      bgcolor: parseColor('transparent'),
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      transform: new Matrix([1, 0, 0, 1, 0, 0]),
      border: [0, parseColor('transparent')],
      borderRadius: 0,
      padding: [0, 0, 0, 0],
      zIndex: 0
    }
  }

  get subject() {
    return this[_subject]
  }

  @attr(oneOrTwoValues)
  set anchor(val) {
    this[_attr].anchor = val
  }
  @immutable('plainArray')
  get anchor() {
    return this[_attr].anchor
  }

  @attr(Math.round)
  set x(val) {
    this[_attr].x = val
  }
  get x() {
    return this[_attr].x
  }

  @attr(Math.round)
  set y(val) {
    this[_attr].y = val
  }
  get y() {
    return this[_attr].y
  }

  @attr
  set pos(val) {
    const [x, y] = val
    this.x = x
    this.y = y
  }
  get pos() {
    return [this.x, this.y]
  }

  @attr(parseColor)
  set bgcolor(val) {
    this[_attr].bgcolor = val
  }
  @immutable('plainObject')
  get bgcolor() {
    return this[_attr].bgcolor
  }

  @attr
  set opacity(val) {
    this[_attr].opacity = val
  }
  get opacity() {
    return this[_attr].opacity
  }

  @attr(Math.round)
  set width(val) {
    this[_attr].width = val
  }
  get width() {
    return this[_attr].width
  }

  @attr(Math.round)
  set height(val) {
    this[_attr].height = val
  }
  get height() {
    return this[_attr].height
  }

  @attr
  set size(val) {
    const [width, height] = val
    this.width = width
    this.height = height
  }
  get size() {
    return [this.width, this.height]
  }

  @attr
  set border(val) {
    const [width, color] = val
    this[_attr].border = [width, parseColor(color)]
  }
  @immutable('plainArray')
  get border() {
    return this[_attr].border
  }

  @attr(fourValuesShortCut)
  set padding(val) {
    this[_attr].padding = val
  }
  @immutable('plainArray')
  get padding() {
    return this[_attr].padding
  }

  @attr
  set borderRadius(val) {
    this[_attr].borderRadius = val
  }
  get borderRadius(){
    return this[_attr].borderRadius
  }

  // transform attributes
  @attr
  set transform(val) {
    if(Array.isArray(val)) {
      this[_attr].transform = new Matrix(val)
    } else {
      const keys = Object.keys(val)
      keys.forEach((key) => {
        this[key] = val[key]
      })
    }
  }
  @immutable('plainArray')
  get transform() {
    return this[_attr].transform.m
  }

  @attr
  set rotate(val) {
    const delta = this[_attr].rotate - val
    this[_attr].rotate = val
    this[_attr].transform.rotate(delta)
  }
  get rotate() {
    return this[_attr].rotate
  }

  @attr(oneOrTwoValues)
  set scale(val) {
    val = [Math.max(val[0], 0.001), Math.max(val[1], 0.001)]
    const oldVal = this[_attr].scale
    const delta = [val[0] / oldVal[0], val[1] / oldVal[1]]
    this[_attr].scale = val
    this[_attr].transform.scale(...delta)
  }
  @immutable('plainArray')
  get scale() {
    return this[_attr].scale
  }

  @attr
  set translate(val) {
    const oldVal = this[_attr].translate
    const delta = [val[0] - oldVal[0], val[1] - oldVal[1]]
    this[_attr].translate = val
    this[_attr].transform.translate(...delta)
  }
  @immutable('plainArray')
  get translate() {
    return this[_attr].translate
  }

  @attr
  set skew(val) {
    const oldVal = this[_attr].skew
    const invm = new Matrix().skew(...oldVal).inverse()
    this[_attr].skew = val
    this[_attr].transform.multiply(invm)
    this[_attr].transform.skew(...val)
  }
  @immutable('plainArray')
  get skew() {
    return this[_attr].skew
  }

  @attr
  set zIndex(val) {
    this[_attr].zIndex = val
  }
  get zIndex() {
    return this[_attr].zIndex
  }
}

SpriteAttr.symbolFor = function(symbolName){
  const symbols = {
    attr: _attr,
    subject: _subject
  }
  return symbols[symbolName]
}

export default SpriteAttr
