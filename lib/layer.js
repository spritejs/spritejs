import BaseNode from './basenode'

const _children = Symbol('children'),
  _updateSet = Symbol('updateSet'),
  _zOrder = Symbol('zOrder'),
  _state = Symbol('state'),
  _tRecord = Symbol('tRecord'),
  _timeline = Symbol('timeline'),
  _renderPromise = Symbol('renderPromise')

import {boxIntersect, boxEqual, boxToRect, defer} from './utils'
import {Timeline} from 'sprite-animator'

import Sprite from './sprite'
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

    // renderMode: repaintAll | repaintDirty
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
    this[_tRecord] = [] // calculate FPS
    this[_state] = {}
    this[_timeline] = new Timeline()

    // d3-friendly
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

  getElementById(id) {
    for(const child of this[_children]) {
      if(child.id === id) {
        return child
      }
    }
    return null
  }

  getElementsByName(name) {
    return this[_children].filter(c => c.name === name)
  }

  /*
    d3-friendly
    *, nodeType, checker
  */
  querySelector(selector) {
    if(!selector || selector === '*') {
      return this[_children][0]
    } else if(typeof selector === 'string') {
      // querySelector('nodeType')
      // querySelector('#id')
      // querySelector(':name')
      if(selector.startsWith('#')) {
        return this.getElementById(selector.slice(1))
      }
      if(selector.startsWith(':')) {
        const name = selector.slice(1)
        for(const child of this[_children]) {
          if(child.name === name) {
            return child
          } 
        }
        return null
      }
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
      if(selector.startsWith('#')) {
        const sprite = this.getElementById(selector.slice(1))
        return sprite ? [sprite] : []
      }
      if(selector.startsWith(':')) {
        return this.getElementsByName(selector.slice(1))
      }
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

      this[_renderPromise] = new Promise((resolve, reject) => {
        requestAnimationFrame(async function step(t) {
          if(!parent) {
            // already removed from paper
            that[_state].prepareRender = false
            resolve()
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
            resolve()
          }
        })
      })
      //.catch(ex => console.error(ex.message))
    } 

    return this[_renderPromise]
  }
  update(target) {
    const parent = this.parent

    // already removed from paper
    if(!parent) {
      this[_updateSet].clear()
      return
    }
    if(target && this[_updateSet].has(target)) return

    // invisible... return
    if(target && !target.lastRenderBox && !this.isVisible(target)) return

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
            context = await child.render(t)
            child.userRender(t, context)
            child.cache = context
          }

          if(this.handleEvent && this[_updateSet].has(child)) {
            child.dispatchEvent('update',
              {target: child, context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox},
              true)
          }

          child.lastRenderBox = child.renderBox

          const transform = child.transform.m,
            pos = child.attr('pos'),
            bound = child.originRect

          shadowContext.save()
          shadowContext.translate(pos[0], pos[1])
          shadowContext.transform(...transform)
          shadowContext.globalAlpha = child.attr('opacity')
          shadowContext.drawImage(context.canvas, bound[0], bound[1])
          shadowContext.restore()
        } else {
          // invisible, only need to remove lastRenderBox
          delete child.lastRenderBox
        }
      }
    }
  }
  async renderRepaintAll(t) {
    const renderEls = this[_children].filter(e => this.isVisible(e))
    const [width, height] = this.resolution

    const shadowContext = this.shadowContext
    const outputContext = this.outputContext
    const shadowCanvas = shadowContext.canvas

    shadowContext.clearRect(0, 0, width, height)
    outputContext.clearRect(0, 0, width, height)

    this.sortChildren(renderEls)
    await this.drawSprites(shadowContext, renderEls, t)

    outputContext.drawImage(shadowCanvas, 0, 0)

    this[_updateSet].clear()
  }
  async renderRepaintDirty(t) {
    const [width, height] = this.resolution

    const updateSet = this[_updateSet]

    const children = this[_children].filter(e => this.isVisible(e))

    const shadowContext = this.shadowContext
    const outputContext = this.outputContext

    const shadowCanvas = shadowContext.canvas

    const restEls = children.filter(el => !updateSet.has(el))

    const affectedEls = new Set(),
      unaffectedEls = new Set()

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

    shadowContext.clearRect(0, 0, width, height)
    outputContext.clearRect(0, 0, width, height)

    const renderEls = [...updateSet, ...affectedEls]

    this.sortChildren(renderEls)
    await this.drawSprites(shadowContext, renderEls, t)

    outputContext.drawImage(shadowCanvas, 0, 0)

    shadowContext.restore()
    outputContext.restore()

    this[_updateSet].clear()
  }
  appendChild(sprite, forceUpdate = true) {
    this.removeChild(sprite)
    this[_children].push(sprite)
    sprite.connect(this, this[_zOrder]++)
    if(forceUpdate) this.update(sprite)
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
  async getSnapshot() {
    await this.prepareRender()
    const snapshotCanvas = this.canvas.cloneNode(true)
    const context = snapshotCanvas.getContext('2d').drawImage(this.canvas, 0, 0)
    const children = this[_children].map(child => child.serialize())
    return {context: snapshotCanvas, children : children}
  }
  putSnapshot(snapshot) {
    const outputContext = this.outputContext

    const [width, height] = this.resolution
    
    outputContext.clearRect(0, 0, width, height)
    outputContext.drawImage(snapshot.context, 0, 0)

    this[_updateSet].clear()

    snapshot.children.forEach(child => {
      const node = createNode(child.nodeType, child.attrs, child.id)
      this.appendChild(node, false)
    })

    for(let child of this[_children]) {
      if(this.handleEvent) {
        child.dispatchEvent('update',
          {target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox},
          true)
      }

      child.lastRenderBox = child.renderBox
    }

    return this[_children]
  }
}

export default Layer
