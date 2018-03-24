import BaseSprite from './basesprite'
import {parseColorString, attr, deprecate} from 'sprite-utils'
import {createLinearGradients} from './gradient'
const parseFont = require('./font/parse-font')

const measureText = (node, text, font, lineHeight = '') => {
  const ctx = node.context || node.layer && node.layer.outputContext
  if(!ctx) {
    return [0, 0]
  }
  ctx.save()
  ctx.font = font
  const {width} = ctx.measureText(text)
  const height = parseFont(font).size * 1.2
  ctx.restore()
  return [width, Math.max(height, lineHeight)]
}

function calculTextboxSize(node, text, font, lineHeight) {
  const lines = text.split(/\n/)
  let width = 0,
    height = 0

  lines.forEach((line) => {
    const [w, h] = measureText(node, line, font, lineHeight)
    width = Math.max(width, w)
    height += h
  })

  return [width, height]
}

class LabelSpriteAttr extends BaseSprite.Attr {
  constructor(subject) {
    super(subject)
    this.setDefault({
      font: '16px Arial',
      textAlign: 'left',
      strokeColor: '',
      fillColor: '',
      lineHeight: '',
      text: '',
      textboxSize: '',
    }, {
      color: {
        get() {
          return this.strokeColor
        },
      },
    })
  }

  @attr
  set text(val) {
    val = String(val)
    this.clearCache()
    this.set('textboxSize', '')
    this.set('text', val)
  }

  @attr
  set textboxSize(val) {
    this.set('textboxSize', val)
  }

  @attr
  set font(val) {
    this.clearCache()
    this.set('textboxSize', '')
    this.set('font', val)
  }

  @attr
  set lineHeight(val) {
    this.clearCache()
    this.set('textboxSize', '')
    this.set('lineHeight', val)
  }

  @attr
  set textAlign(val) {
    this.clearCache()
    this.set('textAlign', val)
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

class Label extends BaseSprite {
  static Attr = LabelSpriteAttr

  constructor(text, opts) {
    super(opts)
    this.text = String(text)
  }

  set text(val) {
    this.attr('text', val)
  }
  get text() {
    return this.attr('text')
  }

  // override to adapt content size
  get contentSize() {
    const [width, height] = this.attr('size')

    const boxSize = this.attr('textboxSize')
    if(boxSize) {
      return boxSize
    }
    if(width === '' || height === '') {
      const size = calculTextboxSize(this, this.text, this.attr('font'), this.attr('lineHeight'))
      this.attr('textboxSize', size)
      return size
    }

    return [width, height]
  }

  render(t, drawingContext) {
    const context = super.render(t, drawingContext),
      attr = this.attr(),
      text = this.text,
      font = attr.font

    if(text) {
      context.font = attr.font
      const lines = this.text.split(/\n/)
      let {strokeColor, fillColor} = attr
      if(!strokeColor && !fillColor) {
        fillColor = parseColorString('black')
      }

      context.textBaseline = 'top'

      const align = attr.textAlign,
        [width, height] = this.contentSize

      context.textBaseline = 'middle'

      const [borderWidth] = this.attr('border')

      const linearGradients = attr.linearGradients

      if(linearGradients && linearGradients.strokeColor) {
        const rect = linearGradients.strokeColor.rect || [borderWidth, borderWidth,
          width, height]

        context.strokeStyle = createLinearGradients(context, rect, linearGradients.strokeColor)
      } else {
        context.strokeStyle = strokeColor
      }

      if(fillColor) {
        if(linearGradients && linearGradients.fillColor) {
          const rect = linearGradients.fillColor.rect || [borderWidth, borderWidth,
            width, height]

          context.fillStyle = createLinearGradients(context, rect, linearGradients.fillColor)
        } else {
          context.fillStyle = fillColor
        }
      }

      let top = borderWidth

      lines.forEach((line) => {
        let left = borderWidth
        const [w, h] = measureText(this, line, font, attr.lineHeight)

        if(align === 'center') {
          left += (width - w) / 2
        } else if(align === 'right') {
          left += width - w
        }

        if(fillColor) {
          context.fillText(line, left, top + h / 2)
        }
        if(strokeColor) {
          context.strokeText(line, left, top + h / 2)
        }

        top += h
      })
    }

    return context
  }
}

export default Label
