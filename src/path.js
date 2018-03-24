import BaseSprite from './basesprite'
import {parseColorString, deprecate, attr} from 'sprite-utils'
import {createLinearGradients} from './gradient'
import {Effects} from 'sprite-animator'
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
      strokeColor: parseColorString('black'),
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

  render(t, drawingContext) {
    const context = super.render(t, drawingContext),
      attr = this.attr()

    if(attr.d) {
      const box = getBoundingBox(attr.lineWidth, attr.pathRect)

      context.translate(-box[0], -box[1])

      const p = this.createPath(attr.d),
        {strokeColor, fillColor} = attr

      context.lineWidth = attr.lineWidth
      context.lineCap = attr.lineCap
      context.lineJoin = attr.lineJoin

      const [width, height] = this.contentSize,
        [borderWidth] = attr.border

      const linearGradients = attr.linearGradients

      if(fillColor) {
        if(linearGradients && linearGradients.fillColor) {
          const rect = linearGradients.fillColor.rect || [borderWidth, borderWidth,
            width, height]

          context.fillStyle = createLinearGradients(context, rect, linearGradients.fillColor)
        } else {
          context.fillStyle = fillColor
        }

        context.fill(p)
      }

      if(linearGradients && linearGradients.strokeColor) {
        const rect = linearGradients.strokeColor.rect || [borderWidth, borderWidth,
          width, height]

        context.strokeStyle = createLinearGradients(context, rect, linearGradients.strokeColor)
      } else {
        context.strokeStyle = strokeColor
      }

      context.stroke(p)

      this.path = p
    }

    return context
  }
}

export default Path
