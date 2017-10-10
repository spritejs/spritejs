import BaseSprite from './basesprite'

import {attr, readonly} from './decorators'
import {parseColorString, createPath} from './utils'

import {Effects} from 'sprite-animator'
import pathEffect from './path-effect/index'

Effects.d = pathEffect

function getBoundingBox(attr) {
  let path = attr.loadObj('path')
  const d = attr.d

  if(!path) {
    if(d) { // Deserialized sprite may have d value but no path obj
      path = createPath(d)
      attr.saveObj('path', path)
    } else {
      return [0, 0, 0, 0]
    }
  }

  const lw = Math.ceil(attr.lineWidth / 2)

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.style.visibility = 'hidden'
  svg.style.position = 'absolute'
  svg.style.top = 0
  svg.style.left = 0
  // svg.setAttribute('width', 1000)
  // svg.setAttribute('height', 1000)
  // svg.setAttribute('preserveAspectRatio', 'none')
  path.setAttribute('stroke-width', attr.lineWidth)
  path.setAttribute('stroke', '#f00')
  svg.appendChild(path)
  document.body.appendChild(svg)
  const {x: x0, y: y0} = svg.getBoundingClientRect()
  const {x, y, width, height} = path.getBoundingClientRect()
  const [ox, oy] = [x - x0, y - y0]
  document.body.removeChild(svg)

  return [-lw, -lw, ox + width + lw, oy + height + lw]
}

export class PathSpriteAttr extends BaseSprite.Attr {
  constructor(subject) {
    super(subject)
    this.merge({
      lineWidth: 1,
      strokeColor: parseColorString('black'),
      fillColor: '',
      renderMode: 'stroke',   // stroke, fill
      // d: path2d,
      boxSize: [0, 0]
    })
  }

  @readonly
  get boundingBox() {
    return getBoundingBox(this)
  }

  @attr('repaint')
  set d(val) {
    const path = createPath(val)
    this.set('d', path.getAttribute('d'))
    this.saveObj('path', path)

    const box = this.boundingBox
    this.set('boxSize', [box[2] - box[0], box[3] - box[1]])

    const [x0, y0] = this.translate
    const offset = this.get('dOffset') || [0, 0]

    this.translate = [x0 + box[0] - offset[0], y0 + box[1] - offset[1]]
    this.set('dOffset', [box[0], box[1]])
  }
  get d() {
    return this.get('d')
  }

  @readonly
  get boxSize() {
    return this.get('boxSize')
  }

  @attr('repaint')
  set lineWidth(val) {
    this.set('lineWidth', Math.round(val))

    if(this.d) {
      const box = this.boundingBox
      this.set('boxSize', [box[2] - box[0], box[3] - box[1]])
    }
  }
  get lineWidth() {
    return this.get('lineWidth')
  }

  @attr('repaint')
  set renderMode(val) {
    this.set('renderMode', val)
  }
  get renderMode() {
    return this.get('renderMode')
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
    this.set('strokeColor', parseColorString(val))
  }
  get strokeColor() {
    return this.get('strokeColor')
  }

  @attr('repaint')
  set fillColor(val) {
    this.set('fillColor', parseColorString(val))
  }
  get fillColor() {
    return this.get('fillColor')
  }
}

const _isPointIn = Symbol('isPointIn'),
  _isOffsetIn = Symbol('isOffsetIn')

class Path extends BaseSprite {
  static Attr = PathSpriteAttr

  constructor(d, opts) {
    super(opts)
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

  render(t) {
    const context = super.render(t),
      attr = this.attr()

    if(attr.d) {
      const box = attr.boundingBox

      context.translate(-box[0], -box[1])

      const p = this.createPath(attr.d),
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
