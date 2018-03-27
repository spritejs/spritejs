import {BaseSprite, createGradients, Effects} from 'sprite-core'
import {parseColorString, deprecate, attr} from 'sprite-utils'
import pathEffect from './path-effect'
import {createPath, calPathRect} from './cross-platform'

Effects.d = pathEffect

function getBoundingBox(lineWidth, pathRect) {
  const [x, y, width, height] = pathRect,
    lw = Math.ceil(lineWidth / 2)

  return [-lw, -lw, x + width + lw, y + height + lw]
}

export class PathSpriteAttr extends BaseSprite.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      lineWidth: 1,
      lineCap: 'butt',
      lineJoin: 'miter',
      strokeColor: '',
      fillColor: '',
      // d: path2d,
      boxSize: [0, 0],
      pathRect: [0, 0, 0, 0],
    }, {
      color: {
        get() {
          return this.strokeColor
        },
      },
    })
  }

  @attr
  set d(val) {
    this.clearCache()
    if(val != null) {
      const path = createPath(val)
      this.set('d', path.getAttribute('d'))
    } else {
      this.set('d', val) // undefined
    }

    const pathRect = calPathRect(this)
    this.set('pathRect', pathRect)

    const box = getBoundingBox(this.lineWidth, pathRect)
    this.set('boxSize', [box[2] - box[0], box[3] - box[1]])

    const [x0, y0] = this.translate
    const offset = this.get('dOffset') || [0, 0]

    this.translate = [x0 + box[0] - offset[0], y0 + box[1] - offset[1]]
    this.set('dOffset', [box[0], box[1]])
  }

  @attr
  set lineWidth(val) {
    this.clearCache()
    this.set('lineWidth', Math.round(val))

    if(this.d) {
      const pathRect = this.get('pathRect')
      const box = getBoundingBox(this.lineWidth, pathRect)
      this.set('boxSize', [box[2] - box[0], box[3] - box[1]])

      const [x0, y0] = this.translate
      const offset = this.get('dOffset') || [0, 0]

      this.translate = [x0 + box[0] - offset[0], y0 + box[1] - offset[1]]
      this.set('dOffset', [box[0], box[1]])
    }
  }

  /**
    lineCap: butt|round|square
   */
  @attr
  set lineCap(val) {
    this.clearCache()
    this.set('lineCap', val)
  }

  /**
    lineJoin: miter|round|bevel
   */
  @attr
  set lineJoin(val) {
    this.clearCache()
    this.set('lineJoin', val)
  }

  @attr
  @deprecate('Instead use strokeColor.')
  set color(val) {
    this.strokeColor = val
  }

  @attr
  set strokeColor(val) {
    this.clearCache()
    this.set('strokeColor', parseColorString(val))
  }

  @attr
  set fillColor(val) {
    this.clearCache()
    this.set('fillColor', parseColorString(val))
  }
}

class Path extends BaseSprite {
  static Attr = PathSpriteAttr

  constructor(attr) {
    if(typeof attr === 'string') {
      attr = {d: attr}
    }
    super(attr)
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

  render(t, drawingContext) {
    const context = super.render(t, drawingContext),
      attr = this.attr()

    if(attr.d) {
      const box = getBoundingBox(attr.lineWidth, attr.pathRect)

      context.translate(-box[0], -box[1])

      const p = this.createPath(attr.d)
      let {strokeColor, fillColor} = attr

      if(!strokeColor && !fillColor) {
        strokeColor = parseColorString('black')
      }

      context.lineWidth = attr.lineWidth
      context.lineCap = attr.lineCap
      context.lineJoin = attr.lineJoin

      const [width, height] = this.contentSize,
        [borderWidth] = attr.border

      const gradients = attr.gradients

      if(gradients && gradients.fillColor) {
        const rect = gradients.fillColor.rect || [borderWidth, borderWidth,
          width, height]

        context.fillStyle = createGradients(context, rect, gradients.fillColor)
      } else if(fillColor) {
        context.fillStyle = fillColor
      }

      if(gradients && gradients.strokeColor) {
        const rect = gradients.strokeColor.rect || [borderWidth, borderWidth,
          width, height]

        context.strokeStyle = createGradients(context, rect, gradients.strokeColor)
      } else if(strokeColor) {
        context.strokeStyle = strokeColor
      }

      if(fillColor) context.fill(p)
      if(strokeColor) context.stroke(p)

      this.path = p
    }

    return context
  }
}

export default Path
