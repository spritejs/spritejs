import SpriteAttr from './attr'
import BaseNode from './basenode'
import {Matrix, Vector} from 'sprite-math'
import Animation from './animation'
import {rectVertices, deprecate} from 'sprite-utils'
import {createLinearGradients} from './gradient'

const _attr = Symbol('attr'),
  _animations = Symbol('animations'),
  _context = Symbol('context'),
  _beforeRenders = Symbol('beforeRenders'),
  _afterRenders = Symbol('afterRenders'),
  _paths = Symbol('paths')

class BaseSprite extends BaseNode {
  static Attr = SpriteAttr;

  /**
    new Sprite({
      attr: {
        ...
      }
    })
   */
  constructor(attr) {
    super()

    this[_attr] = new this.constructor.Attr(this)
    if(attr) {
      this.attr(attr)
    }
    this[_animations] = new Set()
    this[_context] = null
    this[_beforeRenders] = []
    this[_afterRenders] = []
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
    let node = this
    do {
      if(node[_context]) {
        return node[_context]
      }
      if(node.shadowContext) {
        return node.shadowContext
      }
      if(node.outputContext) {
        return node.outputContext
      }
      node = node.parent
    } while(node != null)

    return null
  }

  get nodeType() {
    return this.constructor.nodeType
  }

  get layer() {
    let node = this
    do {
      node = node.parent
    } while(node != null && !(node.drawSprites))
    return node
  }

  serialize() {
    const nodeType = this.nodeType,
      attrs = this[_attr].serialize(),
      id = this.id

    return {
      nodeType,
      attrs,
      id,
    }
  }

  cloneNode(copyContent) {
    const node = new this.constructor()
    if(copyContent) {
      node.initAttributes(this[_attr].serialize())
    }
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
      const attrs = this[_attr].attrs
      return attrs[props]
    }

    return this[_attr].attrs
  }
  attrs() {
    return this[_attr].attrs
  }

  get transform() {
    return new Matrix(this[_attr].get('transformMatrix'))
  }

  animate(frames, timing) {
    const animation = new Animation(this, frames, timing)
    if(this.layer) {
      animation.baseTimeline = this.layer.timeline
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
    this[_animations].forEach((animation) => {
      animation.baseTimeline = parent.timeline
      animation.play()
      animation.finished.then(() => {
        this[_animations].delete(animation)
      })
    })
  }

  disconnect(parent) {
    this[_animations].forEach(animation => animation.cancel())
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
    // vertices: [p1, p2, p3, p4]
    const [p11, p12, p13] = this.vertices,
      [p21, p22, p23] = sprite.vertices

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
        parent.forceUpdate(true)
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

  // layer position to sprite offset
  pointToOffset(x, y) {
    const attr = this.attr()
    const [dx, dy] = [x - attr.x, y - attr.y]
    const transform = this.transform
    return transform.inverse().transformPoint(dx, dy)
  }

  pointCollision(evt) {
    let parentX,
      parentY

    if(evt.parentX != null) {
      // group
      parentX = evt.parentX
      parentY = evt.parentY
    } else {
      parentX = evt.layerX
      parentY = evt.layerY
    }

    const [x, y, w, h] = this.renderRect

    if(parentX >= x && parentX - x < w
     && parentY >= y && parentY - y < h) {
      const [ox, oy, ow, oh] = this.originRect

      const [nx, ny] = this.pointToOffset(parentX, parentY)

      if(nx >= ox && nx - ox < ow
        && ny >= oy && ny - oy < oh) {
        evt.offsetX = nx
        evt.offsetY = ny
        evt.targetPaths = this.findPath(nx, ny)

        return true
      }
    }
  }
  async draw(drawingContext, cacheContext, t) {
    if(typeof drawingContext === 'function') {
      return this._draw(drawingContext, cacheContext, t)
    }
    this[_context] = drawingContext
    const transform = this.transform.m,
      pos = this.attr('pos'),
      bound = this.originRect

    const opacity = this.attr('opacity'),
      box = this.renderBox,
      size = this.offsetSize,
      {width, height} = drawingContext.canvas

    const isVisible = opacity > 0 && (size[0] > 0 && size[1] > 0)
      && (box[0] <= width && box[1] <= height && box[2] >= 0 && box[3] >= 0)

    let context = drawingContext
    if(isVisible) {
      drawingContext.save()
      drawingContext.translate(pos[0], pos[1])
      drawingContext.transform(...transform)
      drawingContext.globalAlpha = this.attr('opacity')

      if(cacheContext) {
        context = this.cache
        if(!context) {
          cacheContext.canvas.width = bound[2]
          cacheContext.canvas.height = bound[3]
          context = cacheContext
        }
      } else {
        context.translate(bound[0], bound[1])
      }

      if(this[_beforeRenders].length) {
        this[_beforeRenders] = this.userRender(t, context, this[_beforeRenders])
      }
      if(!cacheContext || context !== this.cache) {
        context = await this.render(t, context)
        if(cacheContext) this.cache = context
      }
      if(this[_afterRenders].length) {
        this[_afterRenders] = this.userRender(t, context, this[_afterRenders])
      }

      if(context !== drawingContext) {
        drawingContext.drawImage(context.canvas, bound[0], bound[1])
      }
      drawingContext.restore()
    }

    const updateHandlers = this.getEventHandlers('update')
    if(updateHandlers.length) {
      this.dispatchEvent(
        'update',
        {
          target: this, isVisible, context, renderBox: this.renderBox, lastRenderBox: this.lastRenderBox,
        },
        true
      )
    }
    this.lastRenderBox = this.renderBox

    return drawingContext
  }

  @deprecate('BaseSprite#draw(fn, ...)', 'Instead use beforeDraw/afterDraw.')
  _draw(fn, clearCache = false, remove = false) {
    this.drawAfter(fn, clearCache, remove)
  }

  @deprecate('Instead use beforeDraw/afterDraw.')
  drawOnce(fn) {
    this._draw(fn, true, true)
  }

  drawBefore(fn, clearCache = false, remove = false) {
    this[_beforeRenders].push({fn, clearCache, remove})
    this.forceUpdate()
  }

  drawAfter(fn, clearCache = false, remove = false) {
    this[_afterRenders].push({fn, clearCache, remove})
    this.forceUpdate()
  }

  // call by layer
  userRender(t, context, handlers) {
    const renderers = []
    for(let i = 0; i < handlers.length; i++) {
      const renderer = handlers[i]
      const {fn, remove, clearCache} = renderer
      /* eslint-disable no-await-in-loop */
      fn.call(this, context, t, renderer)
      /* eslint-enable no-await-in-loop */
      if(!remove) {
        renderers.push(renderer)
      }
      if(clearCache) {
        this.cache = null
      }
    }
    return renderers
  }

  render(t, drawingContext) {
    this[_paths] = []
    this[_context] = drawingContext

    const attr = this.attr(),
      bgcolor = attr.bgcolor,
      linearGradients = attr.linearGradients,
      [offsetWidth, offsetHeight] = this.offsetSize,
      [clientWidth, clientHeight] = this.clientSize

    if(offsetWidth === 0 || offsetHeight === 0) {
      return drawingContext // don't need to render
    }

    const [borderWidth, borderColor] = attr.border
    const borderRadius = attr.borderRadius

    drawingContext.save()

    // draw border
    if(borderWidth || linearGradients && linearGradients.border) {
      drawingContext.lineWidth = borderWidth

      const [x, y, w, h, r] = [borderWidth / 2, borderWidth / 2,
        offsetWidth - borderWidth, offsetHeight - borderWidth,
        borderRadius]

      drawingContext.beginPath()
      drawingContext.moveTo(x + r, y)
      drawingContext.arcTo(x + w, y, x + w, y + h, r)
      drawingContext.arcTo(x + w, y + h, x, y + h, r)
      drawingContext.arcTo(x, y + h, x, y, r)
      drawingContext.arcTo(x, y, x + w, y, r)
      drawingContext.closePath()

      if(linearGradients && linearGradients.border) {
        const rect = linearGradients.border.rect || [x, y, w, h]

        drawingContext.strokeStyle = createLinearGradients(drawingContext, rect, linearGradients.border)
      } else if(borderColor) {
        drawingContext.strokeStyle = borderColor
      }

      drawingContext.stroke()
      drawingContext.clip()
    }

    // draw bgcolor
    if(bgcolor || linearGradients && linearGradients.bgcolor) {
      const [x, y, w, h, r] = [borderWidth, borderWidth,
        clientWidth, clientHeight,
        Math.max(0, borderRadius - borderWidth / 2)]

      drawingContext.beginPath()
      drawingContext.moveTo(x + r, y)
      drawingContext.arcTo(x + w, y, x + w, y + h, r)
      drawingContext.arcTo(x + w, y + h, x, y + h, r)
      drawingContext.arcTo(x, y + h, x, y, r)
      drawingContext.arcTo(x, y, x + w, y, r)
      drawingContext.closePath()

      if(linearGradients && linearGradients.bgcolor) {
        const rect = linearGradients.bgcolor.rect || [x, y, w, h]

        drawingContext.fillStyle = createLinearGradients(drawingContext, rect, linearGradients.bgcolor)
      } else if(bgcolor) {
        drawingContext.fillStyle = bgcolor
      }

      drawingContext.fill()
    }

    drawingContext.restore()

    const padding = attr.padding,
      paddingTop = padding[0],
      paddingLeft = padding[3]

    drawingContext.translate(paddingLeft, paddingTop)

    return drawingContext
  }
}

export default BaseSprite
