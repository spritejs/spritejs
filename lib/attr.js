import Matrix from './matrix'

const _attr = Symbol('attr'),
  _subject = Symbol('subject')

function readonly(target, prop, descriptor) {
  descriptor.enumerable = true
  return descriptor
}

function attr(...args) {
  let propParser

  function decorator(target, prop, descriptor) {
    descriptor.enumerable = true

    const setter = descriptor.set

    descriptor.set = function (val) {
      const subject = this[_subject],
        oldVal = this[prop]

      if(propParser) val = propParser(val)

      setter.call(this, val)

      //修改过属性，通知引擎渲染
      subject.forceUpdate()

      if(subject.attributeChangedCallback) {
        subject.attributeChangedCallback(prop, oldVal, val)
      }
    }

    return descriptor
  }

  if(args.length === 1) {
    propParser = args[0]
    return decorator
  }
  return decorator(...args)
}

function parseColor(colorStr) {
  if(typeof colorStr === 'string') {
    const canvas = document.createElement('canvas'),
      context = canvas.getContext('2d')

    context.fillStyle = colorStr
    context.fillRect(0, 0, 1, 1)
    const data = context.getImageData(0, 0, 1, 1).data

    return {
      red: data[0],
      green: data[1],
      blue: data[2],
      alpha: data[3] / 255,
    }
  }
  return colorStr
}

class SpriteAttr {
  constructor(subject) {
    this[_subject] = subject
    this[_attr] = {
      anchor: [0, 0],
      x: 0,
      y: 0,
      opacity: 1,
      width: 0,
      height: 0,
      bgcolor: parseColor('transparent'),
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      transform: new Matrix([1, 0, 0, 1, 0, 0]),
      border: [0, parseColor('transparent')],
      zIndex: 0
    }
  }

  @attr
  set anchor(val) {
    this[_attr].anchor = val
  }
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
  get bgcolor() {
    return this[_attr].bgcolor
  }

  @attr
  set opacity(val) {
    const color = this.bgcolor
    color.alpha = val
    this.bgcolor = color

    const borderColor = this.border[1]
    borderColor.alpha = val
    this.border = [this.border[0], borderColor]
  }
  get opacity() {
    return this.bgcolor.alpha
  }

  @attr
  set width(val) {
    this[_attr].width = val
  }
  get width() {
    return this[_attr].width
  }

  @attr
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

  @readonly
  get clientSize() {
    const [borderWidth] = this.border
    return [this.width + 2 * borderWidth, this.height + 2 * borderWidth]
  }

  @attr
  set border(val) {
    const [width, color] = val
    this[_attr].border = [width, parseColor(color)]
  }
  get border() {
    return this[_attr].border
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
  get transform() {
    return this[_attr].transform.m
  }
  @attr
  set rotate(val) {
    const delta = this[_attr].rotate - val;
    this[_attr].rotate = val
    this[_attr].transform.rotate(delta)
  }
  get rotate() {
    return this[_attr].rotate
  }
  @attr
  set scale(val) {
    val = [Math.max(val[0], 0.001), Math.max(val[1], 0.001)]
    const oldVal = this[_attr].scale
    const delta = [val[0] / oldVal[0], val[1] / oldVal[1]]
    this[_attr].scale = val
    this[_attr].transform.scale(...delta)
  }
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
  get skew() {
    return this[_attr].skew
  }

  @readonly
  get boundRect() {
    const {transform, anchor} = this[_attr]
    const [width, height] = this.clientSize

    const [anchorX, anchorY] = anchor

    const vertexs = [[-anchorX * width, -anchorY * height],
                     [(1 - anchorX) * width, -anchorY * height],
                     [-anchorX * width, (1 - anchorY) * height],
                     [(1 - anchorX) * width, (1 - anchorY) * height]]

    const transformed = vertexs.map(v => transform.transformPoint(v[0], v[1]))
    const vx = transformed.map(v => v[0]),
      vy = transformed.map(v => v[1])

    const minX = Math.min(...vx),
      minY = Math.min(...vy),
      maxX = Math.max(...vx),
      maxY = Math.max(...vy)

    return [...[minX, minY].map(Math.round), 
            ...[maxX - minX, maxY - minY].map(Math.round)]
  }

  // 获得变换之前的 rect，用来计算鼠标和触摸位置的原始 box 坐标，从而判断鼠标和触摸位于原始 box 之内
  @readonly
  get originBoxRect() {
    const [width, height] = this.clientSize,
      [anchorX, anchorY] = this.anchor

    return [Math.round(-anchorX * width), 
            Math.round(-anchorY * height), 
            width, height]
  }

  @readonly
  get box() {
    const bound = this.boundRect,
      pos = this.pos

    return [pos[0] + bound[0], 
            pos[1] + bound[1], 
            pos[0] + bound[0] + bound[2], 
            pos[1] + bound[1] + bound[3]]
  }

  // 变换后的 rect
  @readonly
  get boxRect() {
    const bound = this.boundRect,
      pos = this.pos

    return [pos[0] + bound[0], 
            pos[1] + bound[1], 
            bound[2], 
            bound[3]]
  }

  @attr
  set zIndex(val){
    this[_attr].zIndex = val
  }
  get zIndex(){
    return this[_attr].zIndex
  }

  /**
    {
      src: ...,
      srcRect: ..., //裁剪
      rect: ... //绘制区
    }
   */
  @attr
  set textures(val){
    this[_attr].textures = val
  }
  get textures(){
    return this[_attr].textures
  }
}

export default SpriteAttr
