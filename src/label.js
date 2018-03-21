import BaseSprite from './basesprite'

import {parseColorString, getLinearGradients} from './utils'
import {measureText} from './cross-platform'

function calculTextboxSize(text, font, lineHeight) {
  const lines = text.split(/\n/)
  let width = 0,
    height = 0

  lines.forEach((line) => {
    const [w, h] = measureText(line, font, lineHeight)
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
      color: parseColorString('black'),
      lineHeight: '',
      renderMode: 'fill',
      text: '',
      textboxSize: [0, 0],
    })
  }

  set text(val) {
    val = String(val)
    this.clearCache()
    this.set('textboxSize', calculTextboxSize(val, this.font, this.lineHeight))
    this.set('text', val)
  }
  get text() {
    return this.get('text')
  }

  get textboxSize() {
    return this.get('textboxSize')
  }

  set font(val) {
    this.clearCache()
    this.set('textboxSize', calculTextboxSize(this.text, val, this.lineHeight))
    this.set('font', val)
  }
  get font() {
    return this.get('font')
  }

  set lineHeight(val) {
    this.clearCache()
    this.set('textboxSize', calculTextboxSize(this.text, this.font, val))
    this.set('lineHeight', val)
  }
  get lineHeight() {
    return this.get('lineHeight')
  }

  set textAlign(val) {
    this.clearCache()
    this.set('textAlign', val)
  }
  get textAlign() {
    return this.get('textAlign')
  }

  set renderMode(val) {
    this.clearCache()
    this.set('renderMode', val)
  }
  get renderMode() {
    return this.get('renderMode')
  }

  set color(val) {
    this.clearCache()
    this.set('color', parseColorString(val))
  }
  get color() {
    return this.get('color')
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
    let [width, height] = this.attr('size')

    const boxSize = this.attr('textboxSize')

    if(width === '') {
      width = boxSize[0] | 0
    }
    if(height === '') {
      height = boxSize[1] | 0
    }

    return [width, height]
  }

  render(t, drawingContext) {
    const context = super.render(t, drawingContext),
      attr = this.attr(),
      text = this.text,
      font = attr.font,
      renderMode = attr.renderMode

    if(text) {
      context.font = attr.font
      const color = attr.color
      const lines = this.text.split(/\n/)

      context.textBaseline = 'top'

      const align = attr.textAlign,
        [width, height] = this.contentSize

      context.strokeStyle = context.fillStyle = color
      context.textBaseline = 'middle'

      const [borderWidth] = this.attr('border')

      const linearGradients = attr.linearGradients

      if(linearGradients && linearGradients.text) {
        const rect = linearGradients.text.rect || [borderWidth, borderWidth,
          width, height]

        context.strokeStyle = context.fillStyle
          = getLinearGradients(context, rect, linearGradients.text)
      }

      let top = borderWidth

      lines.forEach((line) => {
        let left = borderWidth
        const [w, h] = measureText(line, font, attr.lineHeight)

        if(align === 'center') {
          left += (width - w) / 2
        } else if(align === 'right') {
          left += width - w
        }

        if(renderMode === 'fill') {
          context.fillText(line, left, top + h / 2)
        } else {
          context.strokeText(line, left, top + h / 2)
        }

        top += h
      })
    }

    return context
  }
}

export default Label
