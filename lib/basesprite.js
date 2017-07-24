import SpriteAttr from './attr'
import Matrix from './matrix'
import BaseNode from './basenode'

import {readonly} from './decorators'

const _attr = Symbol('attr'),
  _children = Symbol('children'),
  _eventHandlers = Symbol('eventHandlers')

class BaseSprite extends BaseNode{
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
    super()
    this[_attr] = new SpriteAttr(this)
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

  @readonly
  get clientSize() {
    const [borderWidth] = this.attr('border'),
          [width, height] = this.innerSize

    return [width + 2 * borderWidth, 
            height + 2 * borderWidth]
  }

  @readonly
  get outerSize() {
    return this.clientSize
  }

  @readonly
  get innerSize() {
    const [width, height] = this.attr('size')

    return [width | 0, height | 0]
  }

  @readonly
  get boundRect() {
    const anchor = this.attr('anchor'),
          transform = new Matrix(this.attr('transform'))

    const [width, height] = this.clientSize

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

    return [...[minX, minY].map(Math.round), 
            ...[maxX - minX, maxY - minY].map(Math.round)]
  }

  // 获得变换之前的 rect，用来计算鼠标和触摸位置的原始 box 坐标，从而判断鼠标和触摸位于原始 box 之内
  @readonly
  get originRect() {
    const [width, height] = this.clientSize,
      [anchorX, anchorY] = this.attr('anchor')

    return [Math.round(-anchorX * width), 
            Math.round(-anchorY * height), 
            width, height]
  }

  @readonly
  get renderBox() {
    const bound = this.boundRect,
      pos = this.attr('pos')

    return [pos[0] + bound[0], 
            pos[1] + bound[1], 
            pos[0] + bound[0] + bound[2], 
            pos[1] + bound[1] + bound[3]]
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
  
  //碰撞，判断点在当前 sprite 内，同时计算一些额外的值给 evt
  pointCollision(evt){
    const {layerX, layerY} = evt

    let attr = this.attr(),
        [x, y, w, h] = this.renderRect

    const [anchorX, anchorY] = attr.anchor

    if( layerX >= x && layerX - x < w 
     && layerY >= y && layerY - y < h){
      let [dx, dy] = [layerX - attr.x, layerY - attr.y]
      //console.log('in box', dx, dy);
      let transform = new Matrix(attr.transform)
      let [nx, ny] = transform.inverse().transformPoint(dx, dy);
      let [ox, oy, ow, oh] = this.originRect

      if(nx >= ox && nx - ox < ow
        && ny >= oy && ny - oy < oh){

        const p = [nx + anchorX * ow, ny + anchorY * oh].map(Math.round)

        evt.offsetX = p[0]
        evt.offsetY = p[1]

        return true
      }
    }
  }
  async render(t) {
    
    const attr = this.attr(),
      bgcolor = attr.bgcolor,
      rotate = attr.rotate,
      anchor = attr.anchor,
      [clientWidth, clientHeight] = this.clientSize

    this.lastRenderBox = this.renderBox

    if(clientWidth === 0 || clientHeight === 0) {
      return  // don't need to render
    }

    const box = document.createElement('canvas'),
      bound = this.boundRect

    box.width = bound[2]
    box.height = bound[3]

    const boxctx = box.getContext('2d')

    boxctx.translate(-bound[0], -bound[1])
    boxctx.transform(...attr.transform)
    boxctx.translate(-clientWidth * anchor[0], -clientHeight * anchor[1])

    const [borderWidth, borderColor] = attr.border

    boxctx.globalAlpha = attr.opacity

    // 绘制 border
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

    // 绘制背景
    if(bgcolor && bgcolor.alpha) {
      boxctx.fillStyle = `rgba(${bgcolor.red}, 
                              ${bgcolor.green}, 
                              ${bgcolor.blue}, 
                              ${bgcolor.alpha})`


      const rect = [borderWidth, borderWidth, attr.width | 0, attr.height | 0]

      boxctx.fillRect(...rect)
    }

    return {canvas: box, rect: this.renderRect}
  }
}

export default BaseSprite
