import Layer from './layer'
import Resource from './resource'
import {BaseNode} from 'sprite-core'
import {createCanvas, getContainer} from './platform'
import {setDeprecation} from 'sprite-utils'

const _layerMap = Symbol('layerMap'),
  _zOrder = Symbol('zOrder'),
  _layers = Symbol('layers'),
  _snapshot = Symbol('snapshot'),
  _viewport = Symbol('viewport'),
  _resolution = Symbol('resolution')

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
  constructor(container, options = {}) {
    super()

    container = getContainer(container)
    this.container = container

    if(arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).')
      /* eslint-disable prefer-rest-params */
      options = {viewport: [arguments[1], arguments[2]]}
      /* eslint-enabel prefer-rest-params */
    }
    let [width, height] = options.viewport || []
    if(!width || width === 'auto') {
      width = container.clientWidth
    }
    if(!height || height === 'auto') {
      height = container.clientHeight
    }
    this[_viewport] = [width, height]

    const resolution = options.resolution
    if(!resolution) {
      this[_resolution] = [this.viewport[0], this.viewport[1]]
    } else {
      this[_resolution] = resolution
    }

    this[_zOrder] = 0
    this[_layerMap] = {}
    this[_layers] = []
    this[_snapshot] = createCanvas()

    // d3-friendly
    this.namespaceURI = 'http://spritejs.org/scene'
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

  get width() {
    return this.viewport[0]
  }
  get height() {
    return this.viewport[1]
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

  set viewport([width, height]) {
    if(width === '' || width === 'auto') {
      width = this.container.clientWidth
    }
    if(height === '' || height === 'auto') {
      height = this.container.clientHeight
    }
    this[_viewport] = [width, height]
    this[_layers].forEach((layer) => {
      layer.viewport = [width, height]
    })
  }
  get viewport() {
    return this[_viewport]
  }

  set resolution([width, height]) {
    this[_resolution] = [width, height]
    this[_layers].forEach((layer) => {
      layer.resolution = [width, height]
    })
  }
  get resolution() {
    return this[_resolution]
  }

  setViewport(width, height) {
    this.viewport = [width, height]
    return this
  }

  setResolution(width, height) {
    this.resolution = [width, height]
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

      const context = opts.context || createCanvas().getContext('2d')
      const canvas = context.canvas
      canvas.dataset.layerId = id
      canvas.style.position = 'absolute'
      canvas.style.left = 0
      canvas.style.top = 0
      if(this.container.style && !this.container.style.position) {
        this.container.style.position = 'relative'
      }
      opts.context = context
      const layer = new Layer(opts)
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
    layer.viewport = this.viewport
    layer.resolution = this.resolution

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
