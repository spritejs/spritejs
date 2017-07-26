import BaseSprite from './basesprite'
import {attr, readonly, immutable} from './decorators'
import SpriteAttr from './attr'

import {parseColor, getTextSize} from './utils'

let _attr = SpriteAttr.symbolFor('attr'),
    _subject = SpriteAttr.symbolFor('subject')

const _text = Symbol('text'),
      _textboxSize = Symbol('textboxSize')

//计算多行文本框大小
function calculTextboxSize(text, font){
  const lines = text.split(/\n/)
  let width = 0, height = 0

  lines.forEach(line => {
    const [w, h] = getTextSize(line, font)
    width = Math.max(width, w)
    height += h
  })

  return [width, height]
}

class LabelSpriteAttr extends SpriteAttr{
  constructor(subject){
    super(subject)
    Object.assign(this[_attr], {
      font: '16px Arial',
      textAlign: 'left',
      color: parseColor('black')
    })
  }

  @attr
  set font(val){
    const subject = this[_subject]
    if(subject){
      subject[_textboxSize] = calculTextboxSize(subject.text || ' ', val)
    }
    this[_attr].font = val
  }
  get font(){
    return this[_attr].font
  }

  @attr
  set textAlign(val){
    this[_attr].textAlign = val
  }
  get textAlign(){
    return this[_attr].textAlign
  }

  @attr
  set color(val){
    this[_attr].color = parseColor(val)
  }
  @immutable('plainObject')
  get color(){
    return this[_attr].color
  }
}

class Label extends BaseSprite {
  constructor(text, opts){
    super(opts, LabelSpriteAttr)
    this.text = text
  }

  @attr
  set text(val){
    this[_textboxSize] = calculTextboxSize(val, this.attr('font'))
    this[_text] = val
  }
  get text(){
    return this[_text]
  }

  //改写，让它支持自适应 textbox 大小
  @readonly
  get contentSize() {
    const [width, height] = this.attr('size')

    if(width === '' && height === ''){
      return this[_textboxSize] || [0, 0]
    }

    return [width | 0, height | 0]
  }

  async render(t){
    const context = await super.render(t),
      rect = this.renderRect,
      attr = this.attr(),
      text = this.text,
      font = attr.font,
      borderWidth = attr.border[0]

    if(text) {
      // 文字
      context.font = attr.font
      const color = attr.color
      const lines = this.text.split(/\n/) //换行

      context.fillStyle = `rgba(${color.red}, 
                              ${color.green}, 
                              ${color.blue}, 
                              ${color.alpha})`

      const [lineWidth, lineHeight] = getTextSize('中国', font)

      context.textBaseline = "top";

      const align = attr.textAlign,
            [width, height] = this.contentSize

      lines.forEach((line, i) => {
        let begin = 0,
            [w, h] = getTextSize(line, font)

        if(align === 'center'){
          begin = (width - w) / 2
        } else if(align === 'right'){
          begin = width - w;
        }
        
        context.fillText(line, begin, i * lineHeight)
      })
    }

    return context
  }
}

export default Label
