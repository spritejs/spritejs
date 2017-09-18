import BaseSprite from './basesprite'
import SpriteAttr from './attr'

import {attr, immutable, readonly} from './decorators'
import {parseColorString, createPath} from './utils'

import {Effects} from 'sprite-animator'
import pathEffect from './path-effect/index'

Effects.d = pathEffect

const _attr = SpriteAttr.symbolFor('attr')

function getBoundingBox(attr) {
  const d = attr.d,
    lw = Math.ceil(attr.lineWidth / 2)

  const path = createPath(d)

  const length = Math.ceil(path.getTotalLength())
  let x0 = Infinity,
    y0 = Infinity,
    x1 = -Infinity,
    y1 = -Infinity

  for(let i = 0; i < length; i++) {
    const {x, y} = path.getPointAtLength(i)

    if(x0 > x) x0 = x
    if(y0 > y) y0 = y
    if(x1 < x) x1 = x
    if(y1 < y) y1 = y
  }

  return [Math.floor(x0) - lw, Math.floor(y0) - lw,
    Math.ceil(x1) + lw, Math.ceil(y1) + lw]
}

export class PathSpriteAttr extends SpriteAttr {
  constructor(subject) {
    super(subject)
    Object.assign(this[_attr], {
      lineWidth: 1,
      color: parseColorString('black'),
      renderMode: 'stroke',   // stroke, fill
      // d: path2d,
      boxSize: [0, 0]
    })
  }

  @attr('repaint')
  set d(val) {
    this[_attr].d = val

    const box = getBoundingBox(this)
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
      const box = getBoundingBox(this)
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
    this[_attr].color = parseColorString(val)
  }
  get color() {
    return this[_attr].color
  }
}

class Path extends BaseSprite {
  constructor(d, opts, AttrModel = PathSpriteAttr) {
    super(opts, AttrModel)
    if(d){
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
      const box = getBoundingBox(attr)

      context.translate(-box[0], -box[1])

      const p = new Path2D(attr.d),
        color = attr.color

      context.lineWidth = attr.lineWidth

      if(attr.renderMode === 'stroke') {
        context.strokeStyle = color
        context.stroke(p)
      } else {
        context.fillStyle = color
        context.fill(p)
      }
    }

    return context
  }
}

export default Path
