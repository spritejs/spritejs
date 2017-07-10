import SpriteAttr from './attr'
import Matrix from './matrix'

const _attr = Symbol('attr'),
  _children = Symbol('children'),
  _isDirty = Symbol('isDirty')

class Sprite {
  /**
    new Sprite({
      attr: {
        ...
      },
      attributeChangedCallback: function(prop, oldValue, newValue){

      }
    })
   */
  constructor(opts = {attr: {}}) {
    this[_attr] = new SpriteAttr(this)
    this.attr(opts.attr)
    delete opts.attr
    Object.assign(this, opts)
  }
  attr(props, val) {
    if(typeof props === 'object') {
      Object.assign(this[_attr], props)
    } else if(typeof props === 'string') {
      if(val !== undefined) {
        Object.assign(this[_attr], {[props]: val})
      } else {
        return this[_attr][props]
      }
    } else {
      const ret = {}
      for(const prop in this[_attr]) {
        ret[prop] = this[_attr][prop]
      }
      return ret
    }
  }
  remove() {
    if(!this.parent) return false
    this.parent.removeChild(this)
    return true
  }
  get context() {
    return this.parent && this.parent.context
  }
  appendTo(parent) {
    this.remove()
    parent.appendChild(this)
  }
  forceUpdate() {
    if(this.parent){
      this.parent.update(this)
    }
  }
/** abstract
  connectedCallback() { }
  disconnectedCallback() { }
  attributeChangedCallback() { }
*/
  appendChild() {

  }
  render() {
    // if(!this[_isDirty]) return;

    // this[_isDirty] = false;

    const attr = this.attr(),
      bgcolor = attr.bgcolor,
      rotate = attr.rotate,
      context = this.context,
      anchor = attr.anchor,
      [clientWidth, clientHeight] = attr.clientSize

    if(clientWidth === 0 || clientHeight === 0) {
      return  // don't need to render
    }

    const box = document.createElement('canvas'),
      bound = attr.boundRect

    box.width = bound[2]
    box.height = bound[3]

    const boxctx = box.getContext('2d')

    boxctx.translate(-bound[0], -bound[1])
    boxctx.transform(...attr.transform)
    boxctx.translate(-clientWidth * anchor[0], -clientHeight * anchor[1])

    const [borderWidth, borderColor] = attr.border

    // canvas 的 stroke 渲染模式是以中心点为 path，borderWidth 向两侧渲染
    // 因此内测宽度为 attr.width + borderWidth，外侧为 borderWidth / 2
    // TODO: 实现圆角
    if(borderWidth && borderColor.alpha) {
      boxctx.strokeStyle = `rgba(${borderColor.red}, 
                              ${borderColor.green}, 
                              ${borderColor.blue}, 
                              ${borderColor.alpha})`

      boxctx.lineWidth = borderWidth
      boxctx.rect(borderWidth / 2, borderWidth / 2,
                  attr.width + borderWidth, attr.height + borderWidth)
      boxctx.stroke()
    }

    if(bgcolor && bgcolor.alpha) {
      boxctx.fillStyle = `rgba(${bgcolor.red}, 
                              ${bgcolor.green}, 
                              ${bgcolor.blue}, 
                              ${bgcolor.alpha})`


      const rect = [borderWidth, borderWidth, ...attr.size]

      boxctx.fillRect(...rect)
    }

    context.drawImage(box, ...attr.boxRect)
  }
}

export default Sprite
