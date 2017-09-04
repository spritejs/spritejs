import SpriteAttr from './attr'
import BaseNode from './basenode'

import Matrix from './matrix'
import Vector from './vector'

import Animation from './animation'

import {gradientBox, rectVertices} from './utils'

const _attr = Symbol('attr'),
  _eventHandlers = Symbol('eventHandlers'),
  _animations = Symbol('animations')

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
    this[_animations] = []
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

  animate(frames, timing){
    if(!this.parent) {
      console.warn('no context, ignore animation')
      return
    }
    const animation = new Animation(this, frames, timing)
    animation.baseTimeline = this.parent.timeline
    animation.play()
    return animation
  }

  // 内容大小
  get contentSize() {
    const [width, height] = this.attr('size')

    return [width | 0, height | 0]
  }

  // 内容 + padding
  get clientSize() {
    const [top, right, bottom, left] = this.attr('padding'),
      [width, height] = this.contentSize

    return [left + width + right, top + height + bottom]
  }

  // 内容 + padding + 边框
  get offsetSize() {
    const [borderWidth] = this.attr('border'),
      [width, height] = this.clientSize

    return [width + 2 * borderWidth,
      height + 2 * borderWidth]
  }

  // 同 contentSize
  get innerSize() {
    return this.contentSize
  }

  // 同 offsetSize
  get outerSize() {
    return this.offsetSize
  }

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
  get originRect() {
    const [width, height] = this.offsetSize,
      [anchorX, anchorY] = this.attr('anchor')

    return [Math.floor(-anchorX * width),
      Math.floor(-anchorY * height),
      width, height]
  }

  get originRenderRect(){
    const bound = this.originRect,
      pos = this.attr('pos')

    return [pos[0] + bound[0],
      pos[1] + bound[1],
      bound[2],
      bound[3]]    
  }

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

  get renderRect() {
    const bound = this.boundRect,
      pos = this.attr('pos')

    return [pos[0] + bound[0],
      pos[1] + bound[1],
      bound[2],
      bound[3]]
  }

  get vertices() {
    const vertices = rectVertices(this.originRect),
          transform = new Matrix(this.attr('transform')),
          [x0, y0] = this.attr('pos')

    return vertices.map(v => {
      const [x, y] = transform.transformPoint(v[0], v[1])
      return [Math.round(x0 + x), Math.round(y0 + y)]
    })
  }

  //OBB 碰撞检测，检查两个 sprite 的四个轴上的投影，如果都有重叠部分，则两个 sprite 碰撞
  OBBCollision(sprite){
    const [p11, p12, p13, p14] = this.vertices,
          [p21, p22, p23, p24] = sprite.vertices

    const a1 = (new Vector(p12, p11)).unit(),
          a2 = (new Vector(p13, p12)).unit(),
          a3 = (new Vector(p22, p21)).unit(),
          a4 = (new Vector(p23, p22)).unit()
 
    //计算顶点在某个方向上的轴的投影
    function verticesProjection(vertices, axis){
      let [p1, p2, p3, p4] = vertices.map(v => axis.dot(new Vector(v)))

      return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)]
    }

    function projectionIntersect(p1, p2){
      const m1 = (p1[0] + p1[1]) / 2, l1 = Math.abs(p1[1] - p1[0]),
            m2 = (p2[0] + p2[1]) / 2, l2 = Math.abs(p2[1] - p2[0])
      
      return Math.abs(m2 - m1) <= (l1 + l2) / 2
    }

    //计算投影
    return projectionIntersect(
          verticesProjection(this.vertices, a1),
          verticesProjection(sprite.vertices, a1)
        ) && projectionIntersect(
          verticesProjection(this.vertices, a2),
          verticesProjection(sprite.vertices, a2)
        ) && projectionIntersect(
          verticesProjection(this.vertices, a3),
          verticesProjection(sprite.vertices, a3)
        ) && projectionIntersect(
          verticesProjection(this.vertices, a4),
          verticesProjection(sprite.vertices, a4)
        )
  }

  // 清除缓存，非 norepaint 的属性更新会调用这个方法
  // 子类里面可以改写它
  set cache(context){
    this.cacheContext = context
  }

  get cache(){
    return this.cacheContext
  }

  remove() {
    if(!this.parent) return false
    this.parent.removeChild(this)
    return true
  }

  appendTo(parent) {
    parent.appendChild(this)
  }

  forceUpdate(clearCache = false) {
    const parent = this.parent
    if(parent) {
      if(parent.forceUpdate){
        parent.forceUpdate(clearCache)
      } else if(parent.update && parent.parent){
        if(clearCache){
          this.cache = null
        }
        // 在 paper 上的 layer
        if(!this.parent.isDirty(this)){
          this.parent.update(this)
        }
      }
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
      linearGradients = attr.linearGradients,
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
    if(borderWidth && borderColor.alpha|| 
      linearGradients && linearGradients.border) {

      boxctx.lineWidth = borderWidth

      // boxctx.rect(borderWidth / 2, borderWidth / 2,
      //            offsetWidth - borderWidth, offsetHeight - borderWidth)

      const [x, y, w, h, r] = [borderWidth / 2, borderWidth / 2,
        offsetWidth - borderWidth, offsetHeight - borderWidth,
        borderRadius]

      boxctx.beginPath()
      boxctx.moveTo(x + r, y)
      boxctx.arcTo(x + w, y, x + w, y + h, r)
      boxctx.arcTo(x + w, y + h, x, y + h, r)
      boxctx.arcTo(x, y + h, x, y, r)
      boxctx.arcTo(x, y, x + w, y, r)
      boxctx.closePath()

      if(linearGradients && linearGradients.border){
        const colors = linearGradients.border.colors,
              direction = linearGradients.border.direction || 0

        const [x0, y0, x1, y1] = gradientBox(direction, [x, y, w, h])

        const gradient =  boxctx.createLinearGradient(x0, y0, x1, y1)

        colors.forEach(o => {
          gradient.addColorStop(o.offset, o.color)
        })
        boxctx.strokeStyle = gradient
      } else if(borderColor){
        boxctx.strokeStyle = `rgba(${borderColor.red}, 
                                ${borderColor.green}, 
                                ${borderColor.blue}, 
                                ${borderColor.alpha})`
      }

      boxctx.stroke()
      boxctx.clip()
    }

    // 绘制背景
    if(bgcolor && bgcolor.alpha || 
      linearGradients && linearGradients.bgcolor) {

      const [x, y, w, h, r] = [borderWidth, borderWidth,
        clientWidth, clientHeight,
        Math.max(0, borderRadius - borderWidth / 2)]

      boxctx.beginPath()
      boxctx.moveTo(x + r, y)
      boxctx.arcTo(x + w, y, x + w, y + h, r)
      boxctx.arcTo(x + w, y + h, x, y + h, r)
      boxctx.arcTo(x, y + h, x, y, r)
      boxctx.arcTo(x, y, x + w, y, r)
      boxctx.closePath()

      if(linearGradients && linearGradients.bgcolor){
        const colors = linearGradients.bgcolor.colors,
              direction = linearGradients.bgcolor.direction || 0

        const [x0, y0, x1, y1] = gradientBox(direction, [x, y, w, h])

        const gradient =  boxctx.createLinearGradient(x0, y0, x1, y1)

        colors.forEach(o => {
          gradient.addColorStop(o.offset, o.color)
        })
        boxctx.fillStyle = gradient
      } else if(bgcolor){
        boxctx.fillStyle = `rgba(${bgcolor.red}, 
                                ${bgcolor.green}, 
                                ${bgcolor.blue}, 
                                ${bgcolor.alpha})`
      }

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
