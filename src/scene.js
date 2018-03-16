import Layer from './layer'
import Resource from './resource'
import BaseNode from './basenode'
import {createCanvas, getContainer} from './cross-platform'

const _layerMap = Symbol('layerMap'),
  _zOrder = Symbol('zOrder'),
  _layers = Symbol('layers'),
  _snapshot = Symbol('snapshot')

function sortLayer(paper) {
  const layers = Object.values(paper[_layerMap])

  layers.sort((a, b) => {
    if(b.zIndex === a.zIndex) {
      return b.zOrder - a.zOrder
    }
    return b.zIndex - a.zIndex
  })

  paper[_layers] = layers
}

export default class extends BaseNode {
  constructor(container, width, height) {
    super()

    container = getContainer(container)
    this.container = container

    this.viewport = [width || container.clientWidth,
      height || container.clientHeight]

    this.resolution = [this.viewport[0], this.viewport[1]]

    this[_zOrder] = 0
    this[_layerMap] = {}
    this[_layers] = []
    this[_snapshot] = createCanvas()

    // d3-friendly
    this.namespaceURI = 'http://spritejs.org/paper2D'
    const that = this
    this.ownerDocument = {
      createElementNS(uri, name) {
        return that.layer(name)
      },
    }

    const events = ['mousedown', 'mouseup', 'mousemove',
      'touchstart', 'touchend', 'touchmove',
      'click', 'dblclick']

    this.delegateEvent(...events)
  }

  // d3-friendly
  insertBefore(node, next) {
    if(this.container) {
      return this.container.insertBefore(node, next)
    }
  }
  appendChild(layer) {
    return this.appendLayer(layer)
  }
  removeChild(layer) {
    return this.removeLayer(layer)
  }

  get distortion() {
    return this.viewport[1] * this.resolution[0] / (this.viewport[0] * this.resolution[1])
  }

  setViewport(width, height) {
    if(width === 'auto') {
      width = this.container.clientWidth
    }
    if(height === 'auto') {
      height = this.container.clientHeight
    }
    this.viewport = [width, height]
    this[_layers].forEach(layer => layer.updateResolution())
    return this
  }
  setResolution(width, height) {
    this.resolution = [width, height]
    this[_layers].forEach(layer => layer.updateResolution())
    return this
  }
  toGlobalPos(x, y) {
    const resolution = this.resolution,
      viewport = this.viewport

    x = x * viewport[0] / resolution[0]
    y = y * viewport[1] / resolution[1]

    return [x, y]
  }
  toLocalPos(x, y) {
    const resolution = this.resolution,
      viewport = this.viewport

    x = x * resolution[0] / viewport[0]
    y = y * resolution[1] / viewport[1]

    return [x, y]
  }
  delegateEvent(...events) {
    events.forEach((event) => {
      if(typeof event === 'string') {
        event = {type: event, passive: true}
      }

      const {type, passive} = event

      this.container.addEventListener(type, (e) => {
        const layers = this[_layers]
        const evtArgs = {
          originalEvent: e,
          type,
          stopDispatch() {
            this.terminated = true
          },
        }

        // mouse event layerX, layerY value change while browser scaled.
        if(e instanceof CustomEvent) {
          Object.assign(evtArgs, e.detail)
          const {x, y} = evtArgs
          if(x != null && y != null) {
            const [originalX, originalY] = this.toGlobalPos(x, y)
            Object.assign(evtArgs, {
              layerX: x, layerY: y, originalX, originalY, x, y,
            })
          }
        } else {
          const {left, top} = e.target.getBoundingClientRect()
          let originalX,
            originalY

          if(e.changedTouches) { // mobile
            const {clientX, clientY} = e.changedTouches[0]

            originalX = Math.round(clientX - left)
            originalY = Math.round(clientY - top)
          } else {
            originalX = Math.round(e.clientX - left)
            originalY = Math.round(e.clientY - top)
          }

          const [layerX, layerY] = this.toLocalPos(originalX, originalY)

          Object.assign(evtArgs, {
            layerX, layerY, originalX, originalY, x: layerX, y: layerY,
          })
        }

        for(let i = 0; i < layers.length; i++) {
          const layer = layers[i]

          if(layer.handleEvent) {
            layer.dispatchEvent(type, evtArgs)
          }
        }
      }, {passive})
    })
  }
  dispatchEvent(type, evt) {
    const container = this.container
    container.dispatchEvent(new CustomEvent(type, {detail: evt}))
    super.dispatchEvent(type, evt, true)
  }
  async preload(...resources) {
    const ret = [],
      tasks = []

    for(let i = 0; i < resources.length; i++) {
      const res = resources[i]
      let task

      if(typeof res === 'string') {
        task = Resource.loadTexture(res)
      } else if(Array.isArray(res)) {
        task = Resource.loadFrames(...res)
      } else {
        const {id, src} = res
        task = Resource.loadTexture({id, src})
      }

      tasks.push(task.then((r) => {
        ret.push(r)
        this.dispatchEvent('preload', {
          target: this, current: r, loaded: ret, resources,
        })
      }))
    }

    await Promise.all(tasks)
    return ret
  }
  layer(id = 'default', opts = {handleEvent: true}) {
    if(typeof opts === 'number') {
      opts = {zIndex: opts}
    }
    if(!this.hasLayer(id)) {
      let zIndex = 0
      if(opts.zIndex != null) {
        zIndex = opts.zIndex
        delete opts.zIndex
      }
      const layer = new Layer(id, opts)
      this.appendLayer(layer, zIndex)
    }

    return this[_layerMap][id]
  }
  appendLayer(layer, zIndex = 0) {
    const id = layer.id

    if(this.hasLayer(id) && this[_layerMap][id] !== layer) {
      throw new Error(`layer ${id} already exists! remove first...`)
    }

    this.removeLayer(layer)

    this[_layerMap][id] = layer
    layer.connect(this, this[_zOrder]++, zIndex)

    sortLayer(this)
    return layer
  }
  removeLayer(layer) {
    let layerID
    if(typeof layer === 'string') {
      layerID = layer
      layer = this[_layerMap][layer]
    } else {
      layerID = layer.id
    }

    if(this.hasLayer(layer)) {
      layer.disconnect(this)
      delete this[_layerMap][layerID]
      sortLayer(this)
      return layer
    }

    return null
  }
  hasLayer(layer) {
    let layerID
    if(typeof layer === 'string') {
      layerID = layer
      layer = this[_layerMap][layer]
    } else {
      layerID = layer.id
    }
    return layer && this[_layerMap][layerID] === layer
  }
  async snapshot() {
    const canvas = this[_snapshot]
    const [width, height] = this.viewport

    canvas.width = width
    canvas.height = height

    const layers = this[_layers].slice(0).reverse()
    const ctx = canvas.getContext('2d')

    const renderTasks = layers.map(layer => layer.prepareRender())
    await Promise.all(renderTasks)

    layers.forEach(layer => ctx.drawImage(layer.canvas, 0, 0, width, height))

    return canvas
  }
}
