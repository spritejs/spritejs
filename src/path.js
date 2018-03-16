import BaseSprite from './basesprite'

import {attr, readonly} from './decorators'
import {parseColorString, getLinearGradients} from './utils'

import {Effects} from 'sprite-animator'
import pathEffect from './path-effect'

Effects.d = pathEffect

import {createPath, calPathRect} from './cross-platform'

function getBoundingBox(attr, forceUpdate) {
  let pathRect = forceUpdate ? null : attr.loadObj('pathRect')

  if(!pathRect) {
    pathRect = calPathRect(attr)
  }

  const [x, y, width, height] = pathRect,
    lw = Math.ceil(attr.lineWidth / 2)

  return [-lw, -lw, x + width + lw, y + height + lw]
}

export class PathSpriteAttr extends BaseSprite.Attr {
  constructor(subject) {
    super(subject)
    this.merge({
      lineWidth: 1,
      lineCap: 'butt',
      lineJoin: 'miter',
      strokeColor: parseColorString('black'),
      fillColor: '',
      // d: path2d,
      boxSize: [0, 0],
    })
  }

  @readonly
  get boundingBox() {
    return getBoundingBox(this)
  }

  @readonly
  get pathRect() {
    const pathRect = this.loadObj('pathRect')
    return pathRect || [0, 0, 0, 0]
  }

  @attr('repaint')
  set d(val) {
    const path = createPath(val)
    this.set('d', path.getAttribute('d'))

    const box = getBoundingBox(this, true)
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
      const box = getBoundingBox(this, false)
      this.set('boxSize', [box[2] - box[0], box[3] - box[1]])

      const [x0, y0] = this.translate
      const offset = this.get('dOffset') || [0, 0]

      this.translate = [x0 + box[0] - offset[0], y0 + box[1] - offset[1]]
      this.set('dOffset', [box[0], box[1]])
    }
  }
  get lineWidth() {
    return this.get('lineWidth')
  }

  /**
    lineCap: butt|round|square
   */
  @attr('repaint')
  set lineCap(val) {
    this.set('lineCap', val)
  }
  get lineCap() {
    return this.get('lineCap')
  }

  /**
    lineJoin: miter|round|bevel
   */
  @attr('repaint')
  set lineJoin(val) {
    this.set('lineJoin', val)
  }
  get lineJoin() {
    return this.get('lineJoin')
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

  get pathRect() {
    return this.attr('pathRect')
  }

  getPointAtLength(length) {
    const path = createPath(this.attr('d'))
    const {x, y} = path.getPointAtLength(length)
    return [x, y]
  }

  getPathLength() {
    const path = createPath(this.attr('d'))
    return path.getTotalLength()
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
      context.lineCap = attr.lineCap
      context.lineJoin = attr.lineJoin

      const [width, height] = this.contentSize,
        [borderWidth] = attr.border

      const linearGradients = attr.linearGradients

      if(linearGradients && linearGradients.strokeColor) {
        const rect = linearGradients.strokeColor.rect || [borderWidth, borderWidth,
          width, height]

        context.strokeStyle = getLinearGradients(context, rect, linearGradients.strokeColor)
      } else {
        context.strokeStyle = strokeColor
      }

      context.stroke(p)

      if(fillColor) {
        if(linearGradients && linearGradients.fillColor) {
          const rect = linearGradients.fillColor.rect || [borderWidth, borderWidth,
            width, height]

          context.fillStyle = getLinearGradients(context, rect, linearGradients.fillColor)
        } else {
          context.fillStyle = fillColor
        }

        context.fill(p)
      }

      this.path = p
    }

    return context
  }
}

export default Path
