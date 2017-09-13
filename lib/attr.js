import {attr, immutable} from './decorators'
import Matrix from './matrix'
import {parseColor, oneOrTwoValues, fourValuesShortCut, createPath} from './utils'

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
      zIndex: 0,
      offsetRotate: 'auto',
      linearGradients: {},
    }
  }

  get subject() {
    return this[_subject]
  }

  @attr
  set anchor(val) {
    this[_attr].anchor = oneOrTwoValues(val)
  }
  @immutable('plainArray')
  get anchor() {
    return this[_attr].anchor
  }

  @attr
  set x(val) {
    this[_attr].x = Math.round(val)
  }
  get x() {
    return this[_attr].x
  }

  @attr
  set y(val) {
    this[_attr].y = Math.round(val)
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

  @attr('repaint')
  set bgcolor(val) {
    if(typeof val === 'string'){
      this[_attr].bgcolor = parseColor(val)
    } else {
      this[_attr].bgcolor = {
        red: Math.round(val.red),
        green: Math.round(val.green),
        blue: Math.round(val.blue),
        alpha: val.alpha != null ? val.alpha : 1
      }
    }
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

  @attr('repaint')
  set width(val) {
    this[_attr].width = Math.round(val)
  }
  get width() {
    return this[_attr].width
  }

  @attr('repaint')
  set height(val) {
    this[_attr].height = Math.round(val)
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

  @attr('repaint')
  set border(val) {
    const [width, color] = val
    this[_attr].border = [width, parseColor(color)]
  }
  @immutable('plainArray')
  get border() {
    return this[_attr].border
  }

  @attr('repaint')
  set padding(val) {
    this[_attr].padding = fourValuesShortCut(val)
  }
  @immutable('plainArray')
  get padding() {
    return this[_attr].padding
  }

  @attr('repaint')
  set borderRadius(val) {
    this[_attr].borderRadius = val
  }
  get borderRadius() {
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
    this[_attr].transform.rotate(-delta)
  }
  get rotate() {
    return this[_attr].rotate
  }

  @attr
  set scale(val) {
    val = oneOrTwoValues(val)
    const oldVal = this[_attr].scale
    const delta = [val[0] / oldVal[0], val[1] / oldVal[1]]
    this[_attr].scale = val

    if(this[_attr].offsetAngle){
      this.rotate -= this[_attr].offsetAngle
    }

    this[_attr].transform.scale(...delta)

    if(this[_attr].offsetAngle){
      this.rotate += this[_attr].offsetAngle
    }    
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

  /**
    linearGradients : {
      bgcolor: {
        direction: 30,  //角度，[0,360)
        colors: [
          {offset: 0, color: 'red'},
          {offset: 1, color: 'black'}
        ]
      }
    }
   */
  @attr('repaint')
  set linearGradients(val) {
    this[_attr].linearGradients = val
  }
  @immutable('plainObject')
  get linearGradients() {
    return this[_attr].linearGradients
  }

  @attr
  set offsetPath(val) {
    this[_attr].offsetPath = createPath(val)
    this.resetOffset()
  }
  get offsetPath() {
    const offsetPath = this[_attr].offsetPath
    if(offsetPath){
      return offsetPath.getAttribute('d')
    }
  }

  @attr
  set offsetDistance(val) {
    this[_attr].offsetDistance = val
    this.resetOffset()
  }
  get offsetDistance() {
    return this[_attr].offsetDistance || 0
  }

  @attr
  set offsetRotate(val) {
    this[_attr].offsetRotate = val
    this.resetOffset()
  }
  get offsetRotate() {
    return this[_attr].offsetRotate
  }

  resetOffset() {
    const offsetPath = this[_attr].offsetPath,
          dis = this.offsetDistance

    if(offsetPath != null){
      const len = dis * offsetPath.getTotalLength(),
            {x, y} = offsetPath.getPointAtLength(len)

      let angle = this.offsetRotate
      if(angle === 'auto' || angle === 'reverse'){
        const delta = offsetPath.getPointAtLength(angle == 'auto' ? len + 1 : len - 1)
        const x1 = delta.x, y1 = delta.y

        angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI

        if(this.offsetRotate === 'reverse'){
          angle = -angle
        }
      }

      if(this[_attr].offsetAngle){
        this.rotate -= this[_attr].offsetAngle
      }

      this[_attr].offsetAngle = angle
      this.rotate += angle 

      const offsetPoint = this[_attr].offsetPoint
      if(offsetPoint){
        this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]]
      }

      this[_attr].offsetPoint = [x, y]
      this.pos = [this.x + x, this.y + y]  
    }
  }
}



SpriteAttr.symbolFor = function (symbolName) {
  const symbols = {
    attr: _attr,
    subject: _subject
  }
  return symbols[symbolName]
}

export default SpriteAttr
