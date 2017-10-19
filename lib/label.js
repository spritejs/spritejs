import BaseSprite from './basesprite'

import {attr, readonly} from './decorators'
import {parseColorString, getTextSize, gradientBox} from './utils'

function calculTextboxSize(text, font, lineHeight) {
  const lines = text.split(/\n/)
  let width = 0,
    height = 0

  lines.forEach((line) => {
    const [w, h] = getTextSize(line, font, lineHeight)
    width = Math.max(width, w)
    height += h
  })

  return [width, height]
}

class LabelSpriteAttr extends BaseSprite.Attr {
  constructor(subject) {
    super(subject)
    this.merge({
      font: '16px Arial',
      textAlign: 'left',
      color: parseColorString('black'),
      lineHeight: '',
      renderMode: 'fill',
      text: '',
      textboxSize: [0, 0],
    })
  }

  @attr('repaint')
  set text(val) {
    val = String(val)
    this.set('textboxSize', calculTextboxSize(val, this.font, this.lineHeight))
    this.set('text', val)
  }
  get text() {
    return this.get('text')
  }

  @readonly
  get textboxSize() {
    return this.get('textboxSize')
  }

  @attr('repaint')
  set font(val) {
    this.set('textboxSize', calculTextboxSize(this.text, val, this.lineHeight))
    this.set('font', val)
  }
  get font() {
    return this.get('font')
  }

  @attr('repaint')
  set lineHeight(val) {
    this.set('textboxSize', calculTextboxSize(this.text, this.font, val))
    this.set('lineHeight', val)
  }
  get lineHeight() {
    return this.get('lineHeight')
  }

  @attr('repaint')
  set textAlign(val) {
    this.set('textAlign', val)
  }
  get textAlign() {
    return this.get('textAlign')
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

  render(t) {
    const context = super.render(t),
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

      const [borderWidth] = this.attr('border')

      const linearGradients = attr.linearGradients

      if(linearGradients && linearGradients.text) {
        const colors = linearGradients.text.colors,
          direction = linearGradients.text.direction || 0

        const [x0, y0, x1, y1] = gradientBox(direction,
          [borderWidth, borderWidth,
            width, height])

        const gradient = context.createLinearGradient(x0, y0, x1, y1)

        colors.forEach((o) => {
          gradient.addColorStop(o.offset, o.color)
        })
        context.strokeStyle = context.fillStyle = gradient
      }

      let top = borderWidth

      lines.forEach((line) => {
        let left = borderWidth
        const [w, h, textHeight] = getTextSize(line, font, attr.lineHeight)

        if(align === 'center') {
          left += (width - w) / 2
        } else if(align === 'right') {
          left += width - w
        }

        if(renderMode === 'fill') {
          context.fillText(line, left, top + (h - textHeight) / 2)
        } else {
          context.strokeText(line, left, top + (h - textHeight) / 2)
        }

        top += h
      })
    }

    return context
  }
}

export default Label
