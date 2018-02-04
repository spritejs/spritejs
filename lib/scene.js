import Layer from './layer'
import Resource from './resource'
import BaseNode from './basenode'

const _layerMap = Symbol('layerMap'),
  _zOrder = Symbol('zOrder'),
  _layers = Symbol('layers')

function sortLayer(paper) {
  const layers = []

  for(const key in paper[_layerMap]) {
    const layer = paper[_layerMap][key]

    layers.push(layer)
  }

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
    if(typeof container === 'string') {
      container = document.querySelector(container)
    }
    if(!container) {
      throw new Error('Container is not defined or cannot found.')
    }

    this.container = container

    this.viewport = [width || container.clientWidth,
      height || container.clientHeight]

    this.resolution = [this.viewport[0], this.viewport[1]]

    this[_zOrder] = 0
    this[_layerMap] = {}
    this[_layers] = []

    // d3-friendly
    this.namespaceURI = 'http://spritejs.org/paper2D'
    const that = this
    this.ownerDocument = {
      createElementNS(uri, name) {
        return that.layer(name)
      }
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
          }
        }

        const {left, top} = e.target.getBoundingClientRect()
        let originalX,
          originalY

        // mouse event layerX, layerY value change while browser scaled.
        if(e.changedTouches) { // mobile
          const {clientX, clientY} = e.changedTouches[0]

          originalX = Math.round(clientX - left)
          originalY = Math.round(clientY - top)
        } else {
          originalX = Math.round(e.clientX - left)
          originalY = Math.round(e.clientY - top)
        }

        const [layerX, layerY] = this.toLocalPos(originalX, originalY)

        Object.assign(evtArgs, {layerX, layerY, originalX, originalY, x: layerX, y: layerY})

        for(let i = 0; i < layers.length; i++) {
          const layer = layers[i]

          if(layer.handleEvent) {
            layer.dispatchEvent(type, evtArgs)
          }
        }
      }, {passive})
    })
  }
  async preload(...resources) {
    const ret = []
    for(let i = 0; i < resources.length; i++) {
      const res = resources[i]
      if(typeof res === 'string') {
        ret.push(await Resource.loadTexture(res))
        this.dispatchEvent('preload', {target: this, progress: i, resources}, true)
      } else if(Array.isArray(res)) {
        ret.push(await Resource.loadFrames(...res))
        this.dispatchEvent('preload', {target: this, progress: i, resources}, true)
      } else {
        const {id, src} = res
        ret.push(await Resource.loadTexture({id, src}))
        this.dispatchEvent('preload', {target: this, progress: i, resources}, true)
      }
    }
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
}
