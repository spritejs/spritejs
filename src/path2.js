import {BaseSprite, createGradients, Effects} from 'sprite-core'
import {parseColorString, attr} from 'sprite-utils'
import {pathToCanvas, getBounds} from 'svg-path-to-canvas'
import pathEffect from 'sprite-path-effect'

Effects.d = pathEffect

class PathSpriteAttr extends BaseSprite.Attr {
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
      pathBounds: [0, 0, 0, 0],
    })
  }
  @attr
  set d(val) {
    this.clearCache()
    this.set('d', val)
    const commands = pathToCanvas(val)
    this.set('pathCommands', commands)
    this.set('pathBounds', getBounds(val))
  }

  @attr
  set lineWidth(val) {
    this.clearCache()
    this.set('lineWidth', Math.round(val))
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

    const bounds = this.attr('pathBounds')
    const lineWidth = this.attr('lineWidth')
    const lw = Math.ceil(lineWidth / 2)

    if(width === '') {
      width = bounds[2] + lw | 0
    }
    if(height === '') {
      height = bounds[3] + lw | 0
    }

    return [width, height]
  }

  render(t, drawingContext) {
    const context = super.render(t, drawingContext),
      attr = this.attr()

    if(attr.d) {
      let {strokeColor, fillColor} = attr

      if(!strokeColor && !fillColor) {
        strokeColor = parseColorString('black')
      }

      let p = null
      if(typeof Path2D !== 'undefined') {
        p = new Path2D(attr.d)
      } else {
        context.save()
        context.beginPath()
        const {commands} = this.attr('pathCommands')
        commands.forEach(({cmd, args}) => {
          context[cmd](...args)
        })
        context.restore()
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

      if(strokeColor) {
        if(p) {
          context.stroke(p)
        } else {
          context.stroke()
        }
      }
      if(fillColor) {
        if(p) {
          context.fill(p)
        } else {
          context.fill()
        }
      }
    }

    return context
  }
}

export default Path
