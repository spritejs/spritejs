import BaseNode from './basenode'

const _children = Symbol('children'),
  _updateSet = Symbol('updateSet'),
  _zOrder = Symbol('zOrder'),
  _state = Symbol('state'),
  _tRecord = Symbol('tRecord'),
  _timeline = Symbol('_timeline')

import {boxIntersect, boxEqual, boxToRect} from './utils'
import {Timeline} from 'sprite-animator'

import {Sprite} from './sprite'
import Label from './label'
import Path from './path'
import Axis from './axis'

import {registerNodeType, createNode, getNodeType} from './nodetype'

registerNodeType('sprite', Sprite)
registerNodeType('label', Label)
registerNodeType('path', Path)
registerNodeType('axis', Axis)

class Layer extends BaseNode {
  constructor(id, {handleEvent, evaluateFPS, renderMode}) {
    super()

    this.handleEvent = handleEvent !== false
    this.evaluateFPS = !!evaluateFPS

    // 渲染模式，repaintDirty 只重绘脏数据
    // repaintAll 默认，重绘全部数据
    // TODO: auto 智能判断哪一种渲染效率高，切换为高效率的渲染方式
    this.renderMode = renderMode || 'repaintAll'

    const canvas = document.createElement('canvas')
    canvas.dataset.layerId = id
    canvas.style.position = 'absolute'
    canvas.style.left = 0
    canvas.style.top = 0

    const shadowCanvas = canvas.cloneNode(true)
    this.shadowContext = shadowCanvas.getContext('2d')
    this.outputContext = canvas.getContext('2d')

    this[_children] = []
    this[_updateSet] = new Set()
    this[_zOrder] = 0
    this[_tRecord] = [] // 用来计算 FPS
    this[_state] = {}
    this[_timeline] = new Timeline()

    // 对 d3 友好
    this.namespaceURI = 'http://spritejs.org/layer'
    const that = this
    this.ownerDocument = {
      createElementNS(uri, name) {
        const sprite = createNode(name)
        if(sprite) {
          return that.appendChild(sprite)
        }
        return null
      }
    }

    this.updateResolution()
  }

  /*
    对 d3 友好
    *, nodeType, checker
  */
  querySelector(selector) {
    if(!selector || selector === '*') {
      return this[_children][0]
    } else if(typeof selector === 'string') {
      const nodeType = getNodeType(selector)
      if(nodeType) {
        for(const child of this[_children]) {
          if(child instanceof nodeType) {
            return child
          }
        }
        return null
      }
      return null
    }
    for(const child of this[_children]) {
      for(const [type, checker] of Object.entries(selector)) {
        const nodeType = getNodeType(type)
        if(nodeType && child instanceof nodeType && checker.call(this, child)) {
          return child
        }
      }
    }
    return null
  }
  querySelectorAll(selector) {
    if(!selector || selector === '*') {
      return this[_children]
    } else if(typeof selector === 'string') {
      const nodeType = getNodeType(selector)
      if(nodeType) {
        return this[_children].filter(child => child instanceof nodeType)
      }
      return null
    }
    return this[_children].filter((child) => {
      for(const [type, checker] of Object.entries(selector)) {
        const nodeType = getNodeType(type)
        if(!nodeType || !(child instanceof nodeType)) {
          return false
        }

        if(!checker.call(this, child)) {
          return false
        }
      }
      return true
    })
  }
  insertBefore(newchild, refchild) {
    const idx = this[_children].indexOf(refchild)
    if(idx >= 0) {
      this.removeChild(newchild)
      this[_children].splice(idx, 0, newchild)
      newchild.connect(this, refchild.zOrder)
      this.update(newchild)

      for(let i = idx + 1; i < this[_children].length; i++) {
        const child = this[_children][i],
          zOrder = child.zOrder + 1

        delete child.zOrder
        Object.defineProperty(this, 'zOrder', {
          value: zOrder,
          writable: false,
          configurable: true,
        })

        this.update(child)
      }

      this[_zOrder]++
    }

    return newchild
  }

  get timeline() {
    return this[_timeline]
  }
  get canvas() {
    return this.outputContext.canvas
  }
  get container() {
    return this.parent ? this.parent.container : null
  }
  get resolution() {
    return this.parent ? this.parent.resolution : [0, 0]
  }
  get viewport() {
    return this.parent ? this.parent.viewport : [0, 0]
  }
  get id() {
    return this.canvas.dataset.layerId
  }
  isDirty(target) {
    return this[_updateSet].has(target)
  }
  prepareRender() {
    if(!this[_state].prepareRender) {
      this[_state].prepareRender = true

      const that = this,
        _dispatchEvent = super.dispatchEvent
      requestAnimationFrame(async function step(t) {
        if(!parent) {
          // 如果已经不在 paper 上，不执行渲染
          that[_state].prepareRender = false
          return
        }

        if(that.evaluateFPS) {
          that[_tRecord].push(t)
          that[_tRecord] = that[_tRecord].slice(-10)
        }

        let renderer
        if(that.renderMode === 'repaintDirty') {
          renderer = that.renderRepaintDirty.bind(that)
        } else if(that.renderMode === 'repaintAll') {
          renderer = that.renderRepaintAll.bind(that)
        } else {
          throw new Error('unknown render mode!')
        }

        if(that[_updateSet].size) {
          await renderer(t)

          if(that.handleEvent) {
            _dispatchEvent.call(that, 'update',
              {target: that, timeline: that.timeline, currentTime: that.timeline.currentTime}, true)
          }
        }

        if(that[_updateSet].size) {
          requestAnimationFrame(step)
        } else {
          that[_state].prepareRender = false
        }
      })
    }
  }
  update(target) {
    const parent = this.parent

    // 如果不在 paper 上，不执行 update
    if(!parent) {
      this[_updateSet].clear()
      return
    }
    if(target && this[_updateSet].has(target)) return

    // 如果之前不可见，update 之后也不可见，直接返回
    if(!target.lastRenderBox && !this.isVisible(target)) return

    if(target) this[_updateSet].add(target)

    this.prepareRender()
  }
  isVisible(sprite) {
    const opacity = sprite.attr('opacity')
    if(opacity <= 0) {
      return false
    }

    const [width, height] = sprite.offsetSize
    if(width <= 0 || height <= 0) {
      return false
    }

    const [maxWidth, maxHeigth] = this.resolution

    const box = sprite.renderBox
    if(box[0] > maxWidth || box[1] > maxHeigth
      || box[2] < 0 || box[3] < 0) {
      return false
    }

    return true
  }
  get fps() {
    if(!this.evaluateFPS) {
      return NaN
    }
    let sum = 0
    const tr = this[_tRecord].slice(-10)
    const len = tr.length

    if(tr.length <= 5) {
      return NaN
    }
    tr.reduceRight((a, b, i) => { sum += i * (a - b); return b })
    return Math.round(1000 * ((len - 1) * len / 2) / sum)
  }
  sortChildren(children) {
    children.sort((a, b) => {
      const a_zidx = a.attr('zIndex'),
        b_zidx = b.attr('zIndex')
      if(a_zidx === b_zidx) {
        return a.zOrder - b.zOrder
      }
      return a_zidx - b_zidx
    })
  }
  async drawSprites(shadowContext, renderEls, t) {
    for(let i = 0; i < renderEls.length; i++) {
      const child = renderEls[i]
      if(child.parent === this) {
        if(this.isVisible(child)) {
          let context = child.cache

          if(!context) {
            // 这里要作为异步处理，是因为如果没有预加载资源
            // textures 是图片，会被异步加载
            // 而 sprite 是有层级的，必须按顺序渲染
            context = await child.render(t)
            child.userRender(t, context)
            child.cache = context
          }

          if(this.handleEvent) {
            child.dispatchEvent('update',
              {target: child, context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox},
              true)
          }

          child.lastRenderBox = child.renderBox

          const transform = child.attr('transformMatrix').m,
            pos = child.attr('pos'),
            bound = child.originRect

          shadowContext.save()
          shadowContext.translate(pos[0], pos[1])
          shadowContext.transform(...transform)
          shadowContext.globalAlpha = child.attr('opacity')
          shadowContext.drawImage(context.canvas, bound[0], bound[1])
          shadowContext.restore()
        } else {
          // 如果当前不可见，删除之前的 lastRenderBox
          delete child.lastRenderBox
        }
      }
    }
  }
  async renderRepaintAll(t) {
    const renderEls = this[_children].filter(e => this.isVisible(e)) // 所有可见元素
    const [width, height] = this.resolution

    const shadowContext = this.shadowContext
    const outputContext = this.outputContext
    const shadowCanvas = shadowContext.canvas

    shadowContext.clearRect(0, 0, width, height)
    outputContext.clearRect(0, 0, width, height)

    this.sortChildren(renderEls)
    await this.drawSprites(shadowContext, renderEls, t)

    // 将 shadowCanvas 的内容输出到实际的 canvas
    outputContext.drawImage(shadowCanvas, 0, 0)

    this[_updateSet].clear()
  }
  async renderRepaintDirty(t) {
    const [width, height] = this.resolution

    const updateSet = this[_updateSet]

    const children = this[_children].filter(e => this.isVisible(e)) // 所有可见元素

    const shadowContext = this.shadowContext
    const outputContext = this.outputContext

    const shadowCanvas = shadowContext.canvas

    // 不刷新的元素
    const restEls = children.filter(el => !updateSet.has(el))

    const affectedEls = new Set(),
      unaffectedEls = new Set()

    // 判断与待刷新元素相交的不刷新元素，这些元素也要刷新
    for(let i = 0; i < restEls.length; i++) {
      const unaffectedEl = restEls[i]
      let affected = false

      for(const affectedEl of updateSet) {
        const box1 = affectedEl.renderBox,
          box2 = unaffectedEl.renderBox,
          box3 = affectedEl.lastRenderBox

        if(boxIntersect(box1, box2) || box3 && boxIntersect(box3, box2)) {
          affected = true
          break
        }
      }
      if(affected) affectedEls.add(unaffectedEl)
      else unaffectedEls.add(unaffectedEl)
    }

    // 继续判断这些受影响的元素，因为它们也可以与其他元素相交
    if(affectedEls.size > 0 && unaffectedEls.size > 0) {
      let changed
      do {
        changed = false
        for(const affectedEl of affectedEls) {
          for(const unaffectedEl of unaffectedEls) {
            const box1 = affectedEl.renderBox,
              box2 = unaffectedEl.renderBox

            if(boxIntersect(box1, box2)) {
              affectedEls.add(unaffectedEl)
              unaffectedEls.delete(unaffectedEl)
              changed = true
            }
          }
        }
      } while(changed)
    }

    shadowContext.save()
    outputContext.save()

    shadowContext.beginPath()
    outputContext.beginPath()

    // 通过 clip 来设置 canvas 最小刷新区域

    // updateSet 是当前刷新元素，需要同时刷新 box 和 lastRenderBox
    for(const updateEl of updateSet) {
      const box = updateEl.renderBox

      let dirtyBox = boxIntersect(box, [0, 0, width, height])

      if(dirtyBox) {
        const dirtyRect = boxToRect(dirtyBox)

        shadowContext.rect(...dirtyRect)
        outputContext.rect(...dirtyRect)
      }

      const lastRenderBox = updateEl.lastRenderBox
      if(lastRenderBox && !boxEqual(lastRenderBox, box)) {
        dirtyBox = boxIntersect(lastRenderBox, [0, 0, width, height])

        if(dirtyBox) {
          const dirtyRect = boxToRect(dirtyBox)

          shadowContext.rect(...dirtyRect)
          outputContext.rect(...dirtyRect)
        }
      }
    }

    // affectedEls 是被 updateSet 影响到的元素
    for(const affectedEl of affectedEls) {
      const box = affectedEl.renderBox
      const dirtyBox = boxIntersect(box, [0, 0, width, height])

      if(dirtyBox) {
        const dirtyRect = boxToRect(dirtyBox)

        shadowContext.rect(...dirtyRect)
        outputContext.rect(...dirtyRect)
      }
    }

    shadowContext.clip()
    outputContext.clip()

    // 清除要刷新的内容
    shadowContext.clearRect(0, 0, width, height)
    outputContext.clearRect(0, 0, width, height)
    // outputContext.fillRect(0, 0, width, height)

    // 全部渲染的元素包括 updateSet 和 affectedEls
    const renderEls = [...updateSet, ...affectedEls]

    this.sortChildren(renderEls)
    await this.drawSprites(shadowContext, renderEls, t)

    // 将 shadowCanvas 的内容输出到 outputCanvas
    outputContext.drawImage(shadowCanvas, 0, 0)

    shadowContext.restore()
    outputContext.restore()

    this[_updateSet].clear()
  }
  appendChild(sprite) {
    this.removeChild(sprite)
    this[_children].push(sprite)
    sprite.connect(this, this[_zOrder]++)
    this.update(sprite)
    return sprite
  }
  append(...sprites) {
    sprites.forEach(sprite => this.appendChild(sprite))
  }
  removeChild(sprite) {
    const idx = this[_children].indexOf(sprite)
    if(idx === -1) {
      return null
    }
    this[_children].splice(idx, 1)
    if(this.isVisible(sprite) || sprite.lastRenderBox) {
      sprite.forceUpdate()
    }
    sprite.disconnect(this)
    return sprite
  }
  remove(...args) {
    if(args.length === 0) {
      args = this[_children].slice(0)
    }
    return args.map(child => this.removeChild(child))
  }
  pointCollision(evt) {
    const {layerX, layerY} = evt
    const [width, height] = this.resolution

    if(layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
      return [layerX, layerY]
    }
  }
  dispatchEvent(type, evt) {
    evt.layer = this
    const sprites = this[_children].slice(0)
    sprites.sort((a, b) => {
      const a_zidx = a.attr('zIndex'),
        b_zidx = b.attr('zIndex')

      if(a_zidx === b_zidx) {
        return b.zOrder - a.zOrder
      }
      return b_zidx - a_zidx
    })

    const targetSprites = []
    for(let i = 0; i < sprites.length; i++) {
      const sprite = sprites[i]
      const hit = sprite.dispatchEvent(type, evt)
      if(hit) {
        targetSprites.push(sprite)
      }
    }

    evt.targetSprites = targetSprites
    super.dispatchEvent(type, evt)
  }
  updateResolution() {
    if(!this.parent) return

    const resolution = this.resolution,
      viewport = this.viewport

    const container = this.parent.container,
      shadowCanvas = this.shadowContext.canvas,
      outputCanvas = this.outputContext.canvas

    outputCanvas.width = resolution[0]
    outputCanvas.height = resolution[1]
    shadowCanvas.width = resolution[0]
    shadowCanvas.height = resolution[1]

    outputCanvas.style.width = `${viewport[0]}px`
    outputCanvas.style.height = `${viewport[1]}px`

    this.outputContext.clearRect(0, 0, resolution[0], resolution[1])
    this.shadowContext.clearRect(0, 0, resolution[0], resolution[1])

    if(container !== outputCanvas.parentNode) {
      container.appendChild(outputCanvas)
    }

    this[_children].forEach((child) => {
      delete child.lastRenderBox
      child.forceUpdate()
    })
  }
  get zIndex() {
    return this.outputContext.canvas.style.zIndex
  }
  set zIndex(zIndex) {
    this.outputContext.canvas.style.zIndex = zIndex
  }
  connect(parent, zOrder, zIndex) {
    super.connect(parent, zOrder)
    this.zIndex = zIndex
    this.updateResolution()
    return this
  }
  disconnect(parent) {
    this.outputContext.canvas.remove()
    return super.disconnect(parent)
  }
}

export default Layer
