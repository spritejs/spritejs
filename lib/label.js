import BaseSprite from './basesprite'
import SpriteAttr from './attr'

import {attr, immutable} from './decorators'
import {parseColorString, getTextSize, gradientBox} from './utils'

const _attr = SpriteAttr.symbolFor('attr'),
  _subject = SpriteAttr.symbolFor('subject')

const _text = Symbol('text'),
  _textboxSize = Symbol('textboxSize')

// 计算多行文本框大小
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

class LabelSpriteAttr extends SpriteAttr {
  constructor(subject) {
    super(subject)
    Object.assign(this[_attr], {
      font: '16px Arial',
      textAlign: 'left',
      color: parseColorString('black'),
      lineHeight: 'auto',
      renderMode: 'fill',
    })
  }

  @attr('repaint')
  set font(val) {
    const subject = this[_subject]
    if(subject) {
      subject[_textboxSize] = calculTextboxSize(subject.text || ' ', val, this.lineHeight)
    }
    this[_attr].font = val
  }
  get font() {
    return this[_attr].font
  }

  @attr('repaint')
  set lineHeight(val) {
    const subject = this[_subject]
    if(subject) {
      subject[_textboxSize] = calculTextboxSize(subject.text || ' ', this.font, val)
    }
    this[_attr].lineHeight = val
  }
  get lineHeight() {
    return this[_attr].lineHeight
  }

  @attr('repaint')
  set textAlign(val) {
    this[_attr].textAlign = val
  }
  get textAlign() {
    return this[_attr].textAlign
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

class Label extends BaseSprite {
  constructor(text, opts) {
    super(opts, LabelSpriteAttr)
    this.text = String(text)
  }

  @attr
  set text(val) {
    val = String(val)
    this[_textboxSize] = calculTextboxSize(val, this.attr('font'), this.attr('lineHeight'))
    this[_text] = val
    this.cache = null
  }
  get text() {
    return this[_text]
  }

  // 改写，让它支持自适应 textbox 大小
  get contentSize() {
    const [width, height] = this.attr('size')

    if(width === '' && height === '') {
      return this[_textboxSize] || [0, 0]
    }

    return [width | 0, height | 0]
  }

  render(t) {
    const context = super.render(t),
      attr = this.attr(),
      text = this.text,
      font = attr.font,
      renderMode = attr.renderMode

    if(text) {
      // 文字
      context.font = attr.font
      const color = attr.color
      const lines = this.text.split(/\n/) // 换行

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
        const [w, h, textHeight] = getTextSize(line, font, 'auto')

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
