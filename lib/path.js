import BaseSprite from './basesprite'
import SpriteAttr from './attr'

import {attr, readonly, immutable} from './decorators'
import {parseColor, getTextSize} from './utils'

const _attr = SpriteAttr.symbolFor('attr'),
  _subject = SpriteAttr.symbolFor('subject')

const _boxSize = Symbol('boxSize')

function getBoundingBox(attr) {
  const d = attr.d,
        lw = Math.ceil(attr.lineWidth / 2)

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute('d', d)

  const length = Math.ceil(path.getTotalLength())
  let x0 = Infinity, y0 = Infinity,
      x1 = -Infinity, y1 = -Infinity

  for(let i = 0; i < length; i++){
    const {x, y} = path.getPointAtLength(i)

    if(x0 > x) x0 = x
    if(y0 > y) y0 = y
    if(x1 < x) x1 = x
    if(y1 < y) y1 = y
  }
  
  return [Math.floor(x0) - lw, Math.floor(y0) - lw, 
          Math.ceil(x1) + lw, Math.ceil(y1) + lw]
}

function calculateBox(attr){
  if(!attr.d) return [0, 0, 0, 0]

  const box = getBoundingBox(attr)

  return [box[2] - box[0], box[3] - box[1]]      
}

class PathSpriteAttr extends SpriteAttr {
  constructor(subject) {
    super(subject)
    Object.assign(this[_attr], {
      'lineWidth': 1,
      'color': 'black',
      'renderMode': 'stroke',   //stroke, fill
      //d: path2d, 
    })
  }

  @attr('repaint')
  set d(val) {
    this[_attr].d = val
    const subject = this[_subject]
    if(subject){
      subject[_boxSize] = calculateBox(this)
    }
  }
  get d() {
    return this[_attr].d
  }

  @attr('repaint')
  set lineWidth(val) {
    this[_attr].lineWidth = Math.round(val)
    const subject = this[_subject]
    if(subject){
      subject[_boxSize] = calculateBox(this)
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
    if(typeof val === 'string'){
      this[_attr].color = parseColor(val)
    } else {
      this[_attr].color = {
        red: Math.round(val.red),
        green: Math.round(val.green),
        blue: Math.round(val.blue),
        alpha: val.alpha != null ? val.alpha : 1
      }
    }
  }
  @immutable('plainObject')
  get color() {
    return this[_attr].color
  }
}

class Path extends BaseSprite {
  constructor(opts) {
    super(opts, PathSpriteAttr)
  }

  @readonly
  get contentSize() {
    const [width, height] = this.attr('size')

    if(width === '' && height === '') {
      return this[_boxSize] || [0, 0]
    }

    return [width | 0, height | 0]
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

      if(attr.renderMode === 'stroke'){

        context.strokeStyle = `rgba(${color.red}, 
                              ${color.green}, 
                              ${color.blue}, 
                              ${color.alpha})`
        context.stroke(p)
      } else {
        context.fillStyle = `rgba(${color.red}, 
                              ${color.green}, 
                              ${color.blue}, 
                              ${color.alpha})`
        context.fill(p)        
      }
    }

    return context
  }
}

export default Path
