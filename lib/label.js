import BaseSprite from './basesprite'
import {attr, readonly, immutable} from './decorators'
import SpriteAttr from './attr'

import {parseColor, getTextSize} from './utils'

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
      color: parseColor('black'),
      lineHeight: '150%'
    })
  }

  @attr
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

  @attr
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

  @attr
  set textAlign(val) {
    this[_attr].textAlign = val
  }
  get textAlign() {
    return this[_attr].textAlign
  }

  @attr
  set color(val) {
    this[_attr].color = parseColor(val)
  }
  @immutable('plainObject')
  get color() {
    return this[_attr].color
  }
}

class Label extends BaseSprite {
  constructor(text, opts) {
    super(opts, LabelSpriteAttr)
    this.text = text
  }

  @attr
  set text(val) {
    this[_textboxSize] = calculTextboxSize(val, this.attr('font'), this.attr('lineHeight'))
    this[_text] = val
  }
  get text() {
    return this[_text]
  }

  // 改写，让它支持自适应 textbox 大小
  @readonly
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
      font = attr.font

    if(text) {
      // 文字
      context.font = attr.font
      const color = attr.color
      const lines = this.text.split(/\n/) // 换行

      context.fillStyle = `rgba(${color.red}, 
                              ${color.green}, 
                              ${color.blue}, 
                              ${color.alpha})`

      const lineHeight = getTextSize('中国', font, attr.lineHeight)[1]

      context.textBaseline = 'top'

      const align = attr.textAlign,
        width = this.contentSize[0]

      lines.forEach((line, i) => {
        let begin = 0
        const [w, h] = getTextSize(line, font)

        if(align === 'center') {
          begin = (width - w) / 2
        } else if(align === 'right') {
          begin = width - w
        }

        context.fillText(line, begin, i * lineHeight + (lineHeight - h) / 2)
      })
    }

    return context
  }
}

export default Label
