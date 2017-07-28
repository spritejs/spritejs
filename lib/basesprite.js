import SpriteAttr from './attr'
import Matrix from './matrix'
import BaseNode from './basenode'

import {readonly} from './decorators'

const _attr = Symbol('attr'),
  _eventHandlers = Symbol('eventHandlers')

class BaseSprite extends BaseNode {
  /**
    new Sprite({
      attr: {
        ...
      },
      attributeChangedCallback: function(prop, oldValue, newValue){

      }
    })
   */
  constructor(opts = {attr: {}}, AttrModel = SpriteAttr) {
    super()
    this[_attr] = new AttrModel(this)
    this.attr(opts.attr)
    delete opts.attr
    Object.assign(this, opts)
    this[_eventHandlers] = {}
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

  // 内容大小
  @readonly
  get contentSize() {
    const [width, height] = this.attr('size')

    return [width | 0, height | 0]
  }

  // 内容 + padding
  @readonly
  get clientSize() {
    const [top, right, bottom, left] = this.attr('padding'),
      [width, height] = this.contentSize

    return [left + width + right, top + height + bottom]
  }

  // 内容 + padding + 边框
  @readonly
  get offsetSize() {
    const [borderWidth] = this.attr('border'),
      [width, height] = this.clientSize

    return [width + 2 * borderWidth,
      height + 2 * borderWidth]
  }

  // 同 contentSize
  @readonly
  get innerSize() {
    return this.contentSize
  }

  // 同 offsetSize
  @readonly
  get outerSize() {
    return this.offsetSize
  }

  @readonly
  get boundRect() {
    const anchor = this.attr('anchor'),
      transform = new Matrix(this.attr('transform'))

    const [width, height] = this.offsetSize

    const [anchorX, anchorY] = anchor

    const vertexs = [[-anchorX * width, -anchorY * height],
                     [(1 - anchorX) * width, -anchorY * height],
                     [-anchorX * width, (1 - anchorY) * height],
                     [(1 - anchorX) * width, (1 - anchorY) * height]]

    const transformed = vertexs.map(v => transform.transformPoint(v[0], v[1]))
    const vx = transformed.map(v => v[0]),
      vy = transformed.map(v => v[1])

    const minX = Math.min(...vx),
      minY = Math.min(...vy),
      maxX = Math.max(...vx),
      maxY = Math.max(...vy)

    return [...[minX , minY].map(Math.floor),
      ...[maxX - minX, maxY - minY].map(Math.ceil)]
  }

  // 获得变换之前的 rect，用来计算鼠标和触摸位置的原始 box 坐标，从而判断鼠标和触摸位于原始 box 之内
  @readonly
  get originRect() {
    const [width, height] = this.offsetSize,
      [anchorX, anchorY] = this.attr('anchor')

    return [Math.floor(-anchorX * width),
      Math.floor(-anchorY * height),
      width, height]
  }

  @readonly
  get originRenderRect(){
    const bound = this.originRect,
      pos = this.attr('pos')

    return [pos[0] + bound[0],
      pos[1] + bound[1],
      bound[2],
      bound[3]]    
  }

  @readonly
  get renderBox() {
    const bound = this.boundRect,
      pos = this.attr('pos')

    //renderBox 负责计算渲染区域
    //因为有小数点精度问题，故要扩大一个像素
    return [pos[0] + bound[0] - 1,
      pos[1] + bound[1] - 1,
      pos[0] + bound[0] + bound[2] + 1,
      pos[1] + bound[1] + bound[3] + 1]
  }

  @readonly
  get renderRect() {
    const bound = this.boundRect,
      pos = this.attr('pos')

    return [pos[0] + bound[0],
      pos[1] + bound[1],
      bound[2],
      bound[3]]
  }

  // 清除缓存，非 norepaint 的属性更新会调用这个方法
  // 子类里面可以改写它
  clearCache() {
    delete this.cacheContext
  }
  fromCache() {
    return this.cacheContext
  }
  cache(context) {
    this.cacheContext = context
  }

  remove() {
    if(!this.parent) return false
    this.parent.removeChild(this)
    return true
  }
  appendTo(parent) {
    this.remove()
    parent.appendChild(this)
  }
  forceUpdate() {
    if(this.parent) {
      this.parent.update(this)
    }
  }
/** abstract
  connectedCallback() { }
  disconnectedCallback() { }
  attributeChangedCallback() { }
*/

  // 碰撞，判断点在当前 sprite 内，同时计算一些额外的值给 evt
  // offsetX、offsetY：鼠标相对于被点击 sprite 的坐标
  pointCollision(evt) {
    const {layerX, layerY} = evt

    const attr = this.attr(),
      [x, y, w, h] = this.renderRect

    const [anchorX, anchorY] = attr.anchor

    if(layerX >= x && layerX - x < w
     && layerY >= y && layerY - y < h) {
      const [dx, dy] = [layerX - attr.x, layerY - attr.y]
      // console.log('in box', dx, dy);
      const transform = new Matrix(attr.transform)
      const [nx, ny] = transform.inverse().transformPoint(dx, dy)
      const [ox, oy, ow, oh] = this.originRect

      if(nx >= ox && nx - ox < ow
        && ny >= oy && ny - oy < oh) {
        const p = [nx + anchorX * ow, ny + anchorY * oh].map(Math.round)

        evt.offsetX = p[0]
        evt.offsetY = p[1]

        return true
      }
    }
  }
  render(t) {
    const attr = this.attr(),
      bgcolor = attr.bgcolor,
      anchor = attr.anchor,
      [offsetWidth, offsetHeight] = this.offsetSize,
      [clientWidth, clientHeight] = this.clientSize

    if(offsetWidth === 0 || offsetHeight === 0) {
      return  // don't need to render
    }

    const box = document.createElement('canvas'),
      //bound = this.boundRect
      bound = this.originRect

    box.width = bound[2]
    box.height = bound[3]

    const boxctx = box.getContext('2d')

    //boxctx.translate(-bound[0], -bound[1])
    //boxctx.transform(...attr.transform)
    //boxctx.translate(-offsetWidth * anchor[0], -offsetHeight * anchor[1])

    const [borderWidth, borderColor] = attr.border

    const borderRadius = attr.borderRadius

    // 绘制 border
    // canvas 的 stroke 渲染模式是以中心点为 path，borderWidth 向两侧渲染
    // 因此内测宽度为 clientWidth + borderWidth，外侧为 borderWidth / 2
    if(borderWidth && borderColor.alpha) {
      boxctx.strokeStyle = `rgba(${borderColor.red}, 
                              ${borderColor.green}, 
                              ${borderColor.blue}, 
                              ${borderColor.alpha})`

      boxctx.lineWidth = borderWidth

      boxctx.beginPath()

      // boxctx.rect(borderWidth / 2, borderWidth / 2,
      //            offsetWidth - borderWidth, offsetHeight - borderWidth)

      const [x, y, w, h, r] = [borderWidth / 2, borderWidth / 2,
        offsetWidth - borderWidth, offsetHeight - borderWidth,
        borderRadius]


      boxctx.moveTo(x + r, y)
      boxctx.arcTo(x + w, y, x + w, y + h, r)
      boxctx.arcTo(x + w, y + h, x, y + h, r)
      boxctx.arcTo(x, y + h, x, y, r)
      boxctx.arcTo(x, y, x + w, y, r)

      boxctx.closePath()

      boxctx.stroke()
      boxctx.clip()
    }

    // 绘制背景
    if(bgcolor && bgcolor.alpha) {
      boxctx.fillStyle = `rgba(${bgcolor.red}, 
                              ${bgcolor.green}, 
                              ${bgcolor.blue}, 
                              ${bgcolor.alpha})`

      boxctx.beginPath()

      const [x, y, w, h, r] = [borderWidth, borderWidth,
        clientWidth, clientHeight,
        Math.max(0, borderRadius - borderWidth / 2)]

      boxctx.moveTo(x + r, y)
      boxctx.arcTo(x + w, y, x + w, y + h, r)
      boxctx.arcTo(x + w, y + h, x, y + h, r)
      boxctx.arcTo(x, y + h, x, y, r)
      boxctx.arcTo(x, y, x + w, y, r)

      boxctx.closePath()

      boxctx.fill()
    }

    const padding = attr.padding,
      paddingTop = padding[0],
      paddingLeft = padding[3]

    boxctx.translate(paddingTop, paddingLeft)

    return boxctx
  }
}

export default BaseSprite
