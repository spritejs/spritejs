import BaseSprite from './basesprite'
import SpriteAttr from './attr'

import {attr, readonly} from './decorators'
import {parseColorString, createPath} from './utils'

import {Effects} from 'sprite-animator'
import pathEffect from './path-effect/index'

Effects.d = pathEffect

const _attr = SpriteAttr.symbolFor('attr'),
  _temp = Symbol('temp')

function getBoundingBox(attr) {
  let path = attr[_temp].path
  const d = attr.d

  if(!path) {
    if(d) { // 反序列化回来的时候没有 path 但是有 d
      path = createPath(d)
      attr[_temp].path = path
    } else {
      return [0, 0, 0, 0]
    }
  }

  const lw = Math.ceil(attr.lineWidth / 2)

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.style.visibility = 'hidden'
  svg.setAttribute('preserveAspectRatio', 'none')
  path.setAttribute('stroke-width', attr.lineWidth)
  path.setAttribute('stroke', '#f00')
  svg.appendChild(path)
  document.body.appendChild(svg)
  const {x: x0, y: y0} = svg.getBoundingClientRect()
  const {x, y, width, height} = path.getBoundingClientRect()
  const [ox, oy] = [x - x0, y - y0]
  document.body.removeChild(svg)

  return [-lw, -lw, ox + width + lw, oy + height + lw]

  // const length = Math.ceil(path.getTotalLength())
  // const maxVal = 2 ** 53 - 1 // 这里不用 Infinity 是因为 Infinity 无法正确 JSON.stringify

  // let x0 = maxVal,
  //   y0 = maxVal,
  //   x1 = -maxVal,
  //   y1 = -maxVal

  // for(let i = 0; i < length; i++) {
  //   const {x, y} = path.getPointAtLength(i)

  //   if(x0 > x) x0 = x
  //   if(y0 > y) y0 = y
  //   if(x1 < x) x1 = x
  //   if(y1 < y) y1 = y
  // }

  // return [Math.floor(x0) - lw, Math.floor(y0) - lw,
  //   Math.ceil(x1) + lw, Math.ceil(y1) + lw]
}

export class PathSpriteAttr extends SpriteAttr {
  constructor(subject) {
    super(subject)
    Object.assign(this[_attr], {
      lineWidth: 1,
      strokeColor: parseColorString('black'),
      fillColor: null,
      renderMode: 'stroke',   // stroke, fill
      // d: path2d,
      boxSize: [0, 0]
    })
    this[_temp] = {} // 临时存储不可序列化的值
  }

  @readonly
  get path() {
    return this[_temp].path
  }

  @readonly
  get boundingBox() {
    return getBoundingBox(this)
  }

  @attr('repaint')
  set d(val) {
    const path = createPath(val)
    this[_attr].d = path.getAttribute('d')
    this[_temp].path = path

    const box = this.boundingBox
    this[_attr].boxSize = [box[2] - box[0], box[3] - box[1]]

    const [x0, y0] = this.translate
    const offset = this[_attr].dOffset || [0, 0]
    this.translate = [x0 + box[0] - offset[0], y0 + box[1] - offset[1]]
    this[_attr].dOffset = [box[0], box[1]]
  }
  get d() {
    return this[_attr].d
  }

  @readonly
  get boxSize() {
    return this[_attr].boxSize
  }

  @attr('repaint')
  set lineWidth(val) {
    this[_attr].lineWidth = Math.round(val)

    if(this.d) {
      const box = this.boundingBox
      this[_attr].boxSize = [box[2] - box[0], box[3] - box[1]]
    }
  }
  get lineWidth() {
    return this[_attr].lineWidth
  }

  @attr('repaint')
  set renderMode(val) {
    this[_attr].renderMode = val
  }
  get renderMode() {
    return this[_attr].renderMode
  }

  @attr('repaint')
  set color(val) {
    this.strokeColor = val
  }
  get color() {
    return this.strokeColor
  }

  @attr('repaint')
  set strokeColor(val) {
    this[_attr].strokeColor = parseColorString(val)
  }
  get strokeColor() {
    return this[_attr].strokeColor
  }

  @attr('repaint')
  set fillColor(val) {
    this[_attr].fillColor = parseColorString(val)
  }
  get fillColor() {
    return this[_attr].fillColor
  }
}

const _isPointIn = Symbol('isPointIn'),
  _isOffsetIn = Symbol('isOffsetIn')

class Path extends BaseSprite {
  constructor(d, opts, AttrModel = PathSpriteAttr) {
    super(opts, AttrModel)
    if(d) {
      this.attr({d})
    }
  }

  get contentSize() {
    let [width, height] = this.attr('size')

    const boxSize = this.attr('boxSize')

    if(width === '') {
      width = boxSize[0] | 0
    }
    if(height === '') {
      height = boxSize[1] | 0
    }

    return [width, height]
  }

  [_isPointIn](x, y, mode = 'isPointInPath') {
    const [offsetX, offsetY] = this.pointToOffset(x, y)

    return this[_isOffsetIn](offsetX, offsetY, mode)
  }
  [_isOffsetIn](offsetX, offsetY, mode = 'isPointIn') {
    const {path, context} = this

    if(!context || !path) {
      return false
    }

    const anchor = this.attr('anchor'),
      [borderWidth] = this.attr('border'),
      [w, h] = this.contentSize

    offsetX += w * anchor[0] + borderWidth
    offsetY += h * anchor[1] + borderWidth

    return this.context[mode](path, offsetX, offsetY)
  }

  isPointInPath(x, y) {
    return this[_isPointIn](x, y, 'isPointInPath')
  }
  isPointInStroke(x, y) {
    return this[_isPointIn](x, y, 'isPointInStroke')
  }

  // 判断在 path 内部
  pointCollision(evt) {
    if(super.pointCollision(evt)) {
      const path = this.path

      if(path) {
        const {offsetX, offsetY} = evt

        evt.pointInPath = this[_isOffsetIn](offsetX, offsetY, 'isPointInPath')
        evt.pointInStroke = this[_isOffsetIn](offsetX, offsetY, 'isPointInStroke')
      }
      return true
    }
  }

  render(t) {
    const context = super.render(t),
      attr = this.attr()

    if(attr.d) {
      const box = attr.boundingBox

      context.translate(-box[0], -box[1])

      const p = new Path2D(attr.d),
        {strokeColor, fillColor} = attr

      context.lineWidth = attr.lineWidth

      context.strokeStyle = strokeColor
      context.stroke(p)

      if(attr.renderMode === 'fill') {
        context.fillStyle = fillColor || strokeColor
        context.fill(p)
      }

      this.path = p
    }

    return context
  }
}

export default Path
