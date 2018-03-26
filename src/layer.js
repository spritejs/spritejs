import BaseNode from './basenode'
import Group from './group'

import {boxIntersect, boxEqual, boxToRect} from 'sprite-utils'
import {Timeline} from 'sprite-animator'

import {createNode, getNodeType} from './nodetype'

const _children = Symbol('children'),
  _updateSet = Symbol('updateSet'),
  _zOrder = Symbol('zOrder'),
  _state = Symbol('state'),
  _tRecord = Symbol('tRecord'),
  _timeline = Symbol('timeline'),
  _renderPromise = Symbol('renderPromise'),
  _resolution = Symbol('resolution')

class Layer extends BaseNode {
  constructor({
    canvas,
    handleEvent,
    evaluateFPS,
    renderMode,
    resolution,
  } = {}) {
    super()

    this.handleEvent = handleEvent !== false
    this.evaluateFPS = !!evaluateFPS

    // renderMode: repaintAll | repaintDirty
    this.renderMode = renderMode || 'repaintAll'

    this.outputContext = canvas.getContext('2d')

    const shadowCanvas = canvas.cloneNode(true)
    this.shadowContext = shadowCanvas.getContext('2d')

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
      },
    }

    if(resolution) this.resolution = resolution
    this.updateResolution()
  }

  getElementById(id) {
    const children = this[_children]
    for(let i = 0; i < children.length; i++) {
      const child = children[i]
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
    const children = this[_children]

    if(!selector || selector === '*') {
      return children[0]
    } else if(typeof selector === 'string') {
      // querySelector('nodeType')
      // querySelector('#id')
      // querySelector(':name')

      if(selector.startsWith('#')) {
        return this.getElementById(selector.slice(1))
      }
      if(selector.startsWith(':')) {
        const name = selector.slice(1)

        for(let i = 0; i < children.length; i++) {
          const child = children[i]
          if(child.name === name) {
            return child
          }
        }
        return null
      }
      const nodeType = getNodeType(selector)
      if(nodeType) {
        for(let i = 0; i < children.length; i++) {
          const child = children[i]
          if(child instanceof nodeType) {
            return child
          }
        }
        return null
      }
      return null
    }
    for(let i = 0; i < children.length; i++) {
      const child = children[i]
      const sel = Object.entries(selector)
      for(let j = 0; j < sel.length; j++) {
        const [type, checker] = sel[j]
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
      const sel = Object.entries(selector)
      for(let i = 0; i < sel.length; i++) {
        const [type, checker] = sel[i]
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
  get context() {
    return this.shadowContext ? this.shadowContext : this.outputContext
  }
  get container() {
    return this.parent ? this.parent.container : null
  }
  get resolution() {
    if(this[_resolution]) return this[_resolution]

    return this.parent ? this.parent.resolution : [0, 0]
  }
  set resolution(resolution) {
    this[_resolution] = resolution
  }
  get viewport() {
    return this.parent ? this.parent.viewport : [0, 0]
  }
  get id() {
    return this.canvas.dataset.layerId
  }
  prepareRender() {
    if(!this[_state].prepareRender) {
      this[_state].prepareRender = true

      const that = this,
        _dispatchEvent = super.dispatchEvent,
        parent = this.parent

      this[_renderPromise] = new Promise((resolve, reject) => {
        requestAnimationFrame(function step(t) {
          if(!parent) {
            // already removed from paper
            that[_state].prepareRender = false
            resolve()
            return
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
            renderer(t)

            _dispatchEvent.call(
              that, 'update',
              {target: that, timeline: that.timeline, currentTime: that.timeline.currentTime}, true
            )
          }

          if(that[_updateSet].size) {
            requestAnimationFrame(step)
          } else {
            that[_state].prepareRender = false
            resolve()
          }
        })
      })
      // .catch(ex => console.error(ex.message))
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

    if(len <= 5) {
      return NaN
    }
    tr.reduceRight((a, b, i) => { sum += (a - b); return b })

    return Math.round(1000 * (len - 1) / sum)
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
  drawSprites(renderEls, t) {
    if(this.evaluateFPS) {
      this[_tRecord].push(t)
      this[_tRecord] = this[_tRecord].slice(-10)
    }

    for(let i = 0; i < renderEls.length; i++) {
      const child = renderEls[i]
      if(child.parent === this) {
        if(this.isVisible(child)) {
          child.draw(t)
        } else {
          // invisible, only need to remove lastRenderBox
          delete child.lastRenderBox
        }
      }
    }
  }
  renderRepaintAll(t) {
    const renderEls = this[_children].filter(e => this.isVisible(e))
    const [width, height] = this.resolution

    this.sortChildren(renderEls)

    const outputContext = this.outputContext
    outputContext.clearRect(0, 0, width, height)

    const shadowContext = this.shadowContext

    if(shadowContext) {
      shadowContext.clearRect(0, 0, width, height)
      this.drawSprites(renderEls, t)
      outputContext.drawImage(shadowContext.canvas, 0, 0)
    } else {
      this.drawSprites(renderEls, t)
    }

    this[_updateSet].clear()
  }
  renderRepaintDirty(t) {
    const [width, height] = this.resolution

    const updateSet = this[_updateSet]
    const children = this[_children].filter(e => this.isVisible(e))
    const restEls = children.filter(el => !updateSet.has(el))
    const affectedSet = new Set(),
      unaffectedSet = new Set()

    const updateEls = Array.from(updateSet)

    for(let i = 0; i < restEls.length; i++) {
      const unaffectedEl = restEls[i]
      let affected = false

      for(let j = 0; j < updateEls.length; j++) {
        const affectedEl = updateEls[j]
        const box1 = affectedEl.renderBox,
          box2 = unaffectedEl.renderBox,
          box3 = affectedEl.lastRenderBox

        if(boxIntersect(box1, box2) || box3 && boxIntersect(box3, box2)) {
          affected = true
          break
        }
      }
      if(affected) affectedSet.add(unaffectedEl)
      else unaffectedSet.add(unaffectedEl)
    }

    if(affectedSet.size > 0 && unaffectedSet.size > 0) {
      let changed
      do {
        changed = false
        const affectedEls = Array.from(affectedSet),
          unaffectedEls = Array.from(unaffectedSet)

        for(let i = 0; i < affectedEls.length; i++) {
          const affectedEl = affectedEls[i]
          for(let j = 0; j < unaffectedEls.length; j++) {
            const unaffectedEl = unaffectedEls[j]
            const box1 = affectedEl.renderBox,
              box2 = unaffectedEl.renderBox

            if(boxIntersect(box1, box2)) {
              affectedSet.add(unaffectedEl)
              unaffectedSet.delete(unaffectedEl)
              changed = true
              break
            }
          }
          if(changed) break
        }
      } while(changed)
    }

    const shadowContext = this.shadowContext
    const outputContext = this.outputContext

    if(shadowContext) {
      shadowContext.save()
      shadowContext.beginPath()
    }
    outputContext.save()
    outputContext.beginPath()

    for(let i = 0; i < updateEls.length; i++) {
      const updateEl = updateEls[i]
      const box = updateEl.renderBox

      let dirtyBox = boxIntersect(box, [0, 0, width, height])

      if(dirtyBox) {
        const dirtyRect = boxToRect(dirtyBox)

        if(shadowContext) shadowContext.rect(...dirtyRect)
        outputContext.rect(...dirtyRect)
      }

      const lastRenderBox = updateEl.lastRenderBox
      if(lastRenderBox && !boxEqual(lastRenderBox, box)) {
        dirtyBox = boxIntersect(lastRenderBox, [0, 0, width, height])

        if(dirtyBox) {
          const dirtyRect = boxToRect(dirtyBox)

          if(shadowContext) shadowContext.rect(...dirtyRect)
          outputContext.rect(...dirtyRect)
        }
      }
    }

    const affectedEls = Array.from(affectedSet)
    for(let i = 0; i < affectedEls.length; i++) {
      const affectedEl = affectedEls[i]
      const box = affectedEl.renderBox
      const dirtyBox = boxIntersect(box, [0, 0, width, height])

      if(dirtyBox) {
        const dirtyRect = boxToRect(dirtyBox)

        if(shadowContext) shadowContext.rect(...dirtyRect)
        outputContext.rect(...dirtyRect)
      }
    }

    if(shadowContext) {
      shadowContext.clip()
      shadowContext.clearRect(0, 0, width, height)
    }

    outputContext.clip()
    outputContext.clearRect(0, 0, width, height)

    const renderEls = [...updateSet, ...affectedSet]
    this.sortChildren(renderEls)

    if(shadowContext) {
      this.drawSprites(renderEls, t)
      outputContext.drawImage(shadowContext.canvas, 0, 0)
      shadowContext.restore()
    } else {
      this.drawSprites(renderEls, t)
    }

    outputContext.restore()
    this[_updateSet].clear()
  }
  appendChild(sprite, update = true) {
    this.removeChild(sprite)
    this[_children].push(sprite)
    sprite.connect(this, this[_zOrder]++)
    if(update) this.update(sprite)
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
        // detect mouseenter/mouseleave
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
      outputCanvas = this.outputContext.canvas

    outputCanvas.width = resolution[0]
    outputCanvas.height = resolution[1]

    outputCanvas.style.width = `${viewport[0]}px`
    outputCanvas.style.height = `${viewport[1]}px`

    this.outputContext.clearRect(0, 0, resolution[0], resolution[1])

    if(this.shadowContext) {
      const shadowCanvas = this.shadowContext.canvas
      shadowCanvas.width = resolution[0]
      shadowCanvas.height = resolution[1]
      this.shadowContext.clearRect(0, 0, resolution[0], resolution[1])
    }

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
    snapshotCanvas.getContext('2d').drawImage(this.canvas, 0, 0)
    const children = this[_children].map(child => child.serialize())
    return {context: snapshotCanvas, children}
  }
  putSnapshot(snapshot) {
    const outputContext = this.outputContext

    const [width, height] = this.resolution

    outputContext.clearRect(0, 0, width, height)
    outputContext.drawImage(snapshot.context, 0, 0)

    this[_updateSet].clear()

    snapshot.children.forEach((child) => {
      const node = createNode(child.nodeType, child.attrs, child.id)
      this.appendChild(node, false)
    })

    for(let i = 0; i < this[_children].length; i++) {
      const child = this[_children][i]
      child.dispatchEvent(
        'update',
        {
          target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox,
        },
        true
      )

      child.lastRenderBox = child.renderBox
    }

    return this[_children]
  }
  group(...sprites) {
    const group = new Group()
    group.append(...sprites)
    this.appendChild(group)
    return group
  }
  adjust(handler, update = true) {
    const outputContext = this.outputContext,
      shadowContext = this.shadowContext
    if(!shadowContext) {
      throw new Error('No shadowContext.')
    }
    const [width, height] = this.resolution
    outputContext.clearRect(0, 0, width, height)

    handler.call(this, outputContext)

    if(update) {
      outputContext.drawImage(shadowContext.canvas, 0, 0)
    }
  }
}

export default Layer
