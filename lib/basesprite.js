import SpriteAttr from './attr'
import BaseNode from './basenode'
import Matrix from './matrix'

import Vector from './vector'

import Animation from './animation'

import {gradientBox, rectVertices} from './utils'

import {attr} from './decorators'

const _attr = Symbol('attr'),
  _eventHandlers = Symbol('eventHandlers'),
  _animations = Symbol('animations'),
  _context = Symbol('context'),
  _renderers = Symbol('renderers'),
  _paths = Symbol('paths')

class BaseSprite extends BaseNode {
  static Attr = SpriteAttr;

  static defineAttributes(attrs) {
    const SubAttr = class extends this.Attr {}
    const descriptors = Object.getOwnPropertyDescriptors(attrs)
    for(const [prop, descriptor] of Object.entries(descriptors)) {
      Object.defineProperty(SubAttr.prototype, prop, attr(SubAttr.prototype, prop, descriptor))
    }
    this.Attr = SubAttr
  }

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

    this[_attr] = new this.constructor.Attr(this)

    this.attr(opts.attr)
    delete opts.attr
    Object.assign(this, opts)
    this[_eventHandlers] = {}
    this[_animations] = new Set()
    this[_context] = null
    this[_renderers] = []
    this[_paths] = []
  }

  initAttributes(attrs) {
    this[_attr].merge(attrs)
  }

  // create and save path
  createPath(...args) {
    const path = new Path2D(...args)
    this[_paths].push(path)
    return path
  }

  findPath(offsetX, offsetY) {
    const context = this.context

    if(context) {
      const paths = this[_paths].filter(path => context.isPointInPath(path, offsetX, offsetY))
      return paths
    }
    return []
  }

  get context() {
    return this[_context]
  }

  get nodeType() {
    return this.constructor.nodeType
  }

  serialize() {
    const nodeType = this.nodeType,
      attrs = this[_attr].serialize(),
      id = this.id

    return {
      nodeType,
      attrs,
      id
    }
  }

  cloneNode() {
    const node = new this.constructor()
    node.initAttributes(this[_attr].serialize())
    return node
  }

  set id(val) {
    this.attr('id', val)
  }
  get id() {
    return this.attr('id')
  }

  set name(val) {
    this.attr('name', val)
  }
  get name() {
    return this.attr('name')
  }

  getAttribute(prop) {
    return this.attr(prop)
  }
  setAttribute(prop, val) {
    return this.attr(prop, val)
  }
  removeAttribute(prop) {
    return this.attr(prop, null)
  }

  attr(props, val) {
    if(typeof props === 'object') {
      Object.assign(this[_attr], props)
      return this
    } else if(typeof props === 'string') {
      if(val !== undefined) {
        Object.assign(this[_attr], {[props]: val})
        return this
      }
      return this[_attr][props]
    }
    const ret = {}
    for(const prop in this[_attr]) {
      ret[prop] = this[_attr][prop]
    }
    return ret
  }

  get transform() {
    return new Matrix(this[_attr].get('transform'))
  }

  animate(frames, timing) {
    const animation = new Animation(this, frames, timing)
    if(this.parent) {
      animation.baseTimeline = this.parent.timeline
      animation.play()
      animation.finished.then(() => {
        this[_animations].delete(animation)
      })
    }
    this[_animations].add(animation)
    return animation
  }

  connect(parent, zOrder) {
    super.connect(parent, zOrder)
    for(const animation of this[_animations]) {
      animation.baseTimeline = parent.timeline
      animation.play()
      animation.finished.then(() => {
        this[_animations].delete(animation)
      })
    }
  }

  disconnect(parent) {
    for(const animation of this[_animations]) {
      animation.cancel()
    }
    super.disconnect(parent)
  }

  // content width / height
  get contentSize() {
    const [width, height] = this.attr('size')

    return [width | 0, height | 0]
  }

  // content + padding
  get clientSize() {
    const [top, right, bottom, left] = this.attr('padding'),
      [width, height] = this.contentSize

    return [left + width + right, top + height + bottom]
  }

  // content + padding + border
  get offsetSize() {
    const [borderWidth] = this.attr('border'),
      [width, height] = this.clientSize

    return [width + 2 * borderWidth,
      height + 2 * borderWidth]
  }

  get innerSize() {
    return this.contentSize
  }

  get outerSize() {
    return this.offsetSize
  }

  get boundRect() {
    const anchor = this.attr('anchor'),
      transform = this.transform

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

    return [...[minX, minY].map(Math.floor),
      ...[maxX - minX, maxY - minY].map(Math.ceil)]
  }

  // rect before transform
  get originRect() {
    const [width, height] = this.offsetSize,
      [anchorX, anchorY] = this.attr('anchor')

    return [Math.floor(-anchorX * width),
      Math.floor(-anchorY * height),
      width, height]
  }

  get originRenderRect() {
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
      transform = this.transform,
      [x0, y0] = this.attr('pos')

    return vertices.map((v) => {
      const [x, y] = transform.transformPoint(v[0], v[1])
      return [Math.round(x0 + x), Math.round(y0 + y)]
    })
  }

  // OBB: http://blog.csdn.net/silangquan/article/details/50812425
  OBBCollision(sprite) {
    const [p11, p12, p13, p14] = this.vertices,
      [p21, p22, p23, p24] = sprite.vertices

    const a1 = (new Vector(p12, p11)).unit(),
      a2 = (new Vector(p13, p12)).unit(),
      a3 = (new Vector(p22, p21)).unit(),
      a4 = (new Vector(p23, p22)).unit()

    // The projection of the axis of a vertex in a certain direction
    function verticesProjection(vertices, axis) {
      const [p1, p2, p3, p4] = vertices.map(v => axis.dot(new Vector(v)))

      return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)]
    }

    function projectionIntersect(p1, p2) {
      const m1 = (p1[0] + p1[1]) / 2,
        l1 = Math.abs(p1[1] - p1[0]),
        m2 = (p2[0] + p2[1]) / 2,
        l2 = Math.abs(p2[1] - p2[0])

      return Math.abs(m2 - m1) <= (l1 + l2) / 2
    }

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

  set cache(context) {
    this.cacheContext = context
  }

  get cache() {
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
      if(parent.forceUpdate) {
        parent.forceUpdate(clearCache)
      } else if(parent.update && parent.parent) {
        if(clearCache) {
          this.cache = null
        }
        if(!this.parent.isDirty(this)) {
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

  // layer position to sprite offset
  pointToOffset(layerX, layerY) {
    const attr = this.attr()
    const [dx, dy] = [layerX - attr.x, layerY - attr.y]
    const transform = this.transform
    return transform.inverse().transformPoint(dx, dy)
  }

  pointCollision(evt) {
    const {layerX, layerY} = evt

    const [x, y, w, h] = this.renderRect

    if(layerX >= x && layerX - x < w
     && layerY >= y && layerY - y < h) {
      const [ox, oy, ow, oh] = this.originRect

      const [nx, ny] = this.pointToOffset(layerX, layerY)

      if(nx >= ox && nx - ox < ow
        && ny >= oy && ny - oy < oh) {
        evt.offsetX = nx
        evt.offsetY = ny

        return true
      }
    }
  }

  draw(fn, clearCache = false, remove = false) {
    this[_renderers].push({fn, remove})
    this.forceUpdate(clearCache)
  }
  drawOnce(fn) {
    this.draw(fn, true, true)
  }

  // call by layer
  userRender(t, context) {
    if(this[_renderers].length) {
      let renderType
      const renderers = []

      this[_renderers].forEach((renderer) => {
        const {fn, remove} = renderer
        fn.call(this, context, t, renderer)
        if(!remove) {
          renderers.push(renderer)
        }
      })

      this[_renderers] = renderers
    }
  }

  render(t) {
    this[_paths] = []

    const attr = this.attr(),
      bgcolor = attr.bgcolor,
      linearGradients = attr.linearGradients,
      [offsetWidth, offsetHeight] = this.offsetSize,
      [clientWidth, clientHeight] = this.clientSize

    if(offsetWidth === 0 || offsetHeight === 0) {
      return  // don't need to render
    }

    const box = document.createElement('canvas'),
      // bound = this.boundRect
      bound = this.originRect

    box.width = bound[2]
    box.height = bound[3]

    const boxctx = box.getContext('2d')

    const [borderWidth, borderColor] = attr.border
    const borderRadius = attr.borderRadius

    boxctx.save()

    // draw border
    if(borderWidth || linearGradients && linearGradients.border) {
      boxctx.lineWidth = borderWidth

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

      if(linearGradients && linearGradients.border) {
        const colors = linearGradients.border.colors,
          direction = linearGradients.border.direction || 0

        const [x0, y0, x1, y1] = gradientBox(direction, [x, y, w, h])

        const gradient = boxctx.createLinearGradient(x0, y0, x1, y1)

        colors.forEach((o) => {
          gradient.addColorStop(o.offset, o.color)
        })
        boxctx.strokeStyle = gradient
      } else if(borderColor) {
        boxctx.strokeStyle = borderColor
      }

      boxctx.stroke()
      boxctx.clip()
    }

    // draw bgcolor
    if(bgcolor || linearGradients && linearGradients.bgcolor) {
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

      if(linearGradients && linearGradients.bgcolor) {
        const colors = linearGradients.bgcolor.colors,
          direction = linearGradients.bgcolor.direction || 0

        const [x0, y0, x1, y1] = gradientBox(direction, [x, y, w, h])

        const gradient = boxctx.createLinearGradient(x0, y0, x1, y1)

        colors.forEach((o) => {
          gradient.addColorStop(o.offset, o.color)
        })
        boxctx.fillStyle = gradient
      } else if(bgcolor) {
        boxctx.fillStyle = bgcolor
      }

      boxctx.fill()
    }

    boxctx.restore()

    const padding = attr.padding,
      paddingTop = padding[0],
      paddingLeft = padding[3]

    boxctx.translate(paddingTop, paddingLeft)
    this[_context] = boxctx

    return boxctx
  }
}

export default BaseSprite
