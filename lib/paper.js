import Layer from './layer'
import Resource from './resource'

const _layerMap = Symbol('layerMap'),
  _zOrder = Symbol('zOrder'),
  _layers = Symbol('layers')

//排序，影响事件派发的顺序
function sortLayer(paper) {
  const layers = []

  for(const key in paper[_layerMap]) {
    const layer = paper[_layerMap][key]

    layers.push(layer)
  }

  layers.sort((a, b) => {
    if(b.zIndex === a.zIndex){
      return b.zOrder - a.zOrder
    }
    return b.zIndex - a.zIndex
  })

  paper[_layers] = layers
}

class Paper {
  constructor(container, width, height) {
    if(typeof container === 'string') {
      container = document.querySelector(container)
    }

    this.container = container
    
    this.viewport = [width || container.clientWidth, 
                     height || container.clientHeight]
    this.resolution = [width, height]

    this[_zOrder] = 0
    this[_layerMap] = {}
    this[_layers] = []

    const events = ['mousedown', 'mouseup', 'mousemove',
      'touchstart', 'touchend', 'touchmove',
      'click', 'dblclick']

    this.delegateEvent(...events)
  }
  setViewport(width, height){
    if(width === 'auto'){
      width = this.container.clientWidth
    }
    if(height === 'auto'){
      height = this.container.clientHeight
    }
    this.viewport = [width, height]
    this[_layers].forEach(layer => layer.updateResolution())
  }
  setResolution(width, height){
    const oldResolution = this.resolution
    this.resolution = [width, height]
    this[_layers].forEach(layer => layer.updateResolution())
  }
  delegateEvent(...events) {
    events.forEach((event) => {
      if(typeof event === 'string') {
        event = {type: event, passive: true}
      }

      const {type, passive} = event

      this.container.addEventListener(type, (e) => {
        const layers = this[_layers]

        for(let i = 0; i < layers.length; i++) {
          const layer = layers[i]
          const evtArgs = {
            originalEvent: e,
            type,
            stopDispatch() {
              this.terminated = true
            }
          }

          let layerX = e.layerX != null ? e.layerX : e.offsetX
          let layerY = e.layerY != null ? e.layerY : e.offsetY

          // mouse 事件计算 Layer 相对坐标
          if(layerX == null || layerY == null) {
            const {clientX, clientY} = e.changedTouches[0]
            const {left, top} = e.target.getBoundingClientRect()
            layerX = clientX - left
            layerY = clientY - top
          }

          const resolution = this.resolution,
                viewport = this.viewport

          layerX = Math.round(layerX * resolution[0] / viewport[0]),
          layerY = Math.round(layerY * resolution[1] / viewport[1])

          Object.assign(evtArgs, {layerX, layerY})

          if(layer.handleEvent) {
            layer.dispatchEvent(type, evtArgs)
            // 如果被阻止继续传播
            if(evtArgs.terminated) {
              break
            }
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
      } else if(Array.isArray(res)) {
        ret.push(await Resource.loadFrames(...res))
      }
    }
    return ret
  }
  layer(id = 'default', opts = {handleEvent: true}) {
    if(typeof opts === 'number'){
      opts = {zIndex: opts}
    }
    if(!this.hasLayer(id)) {
      let zIndex = 0
      if(opts.zIndex != null){
        zIndex = opts.zIndex
        delete opts.zIndex
      }
      const layer = new Layer(id, opts)
      this.appendLayer(layer, zIndex)
    }

    return this[_layerMap][id]
  }
  appendLayer(layer, zIndex = 0) {
    const parent = layer.parent,
          id = layer.id
    
    if(this.hasLayer(id) && this[_layerMap][id] !== layer){
      throw new Error(`layer ${id} already exists! remove first...`)
      return
    }

    this.removeLayer(layer)

    this[_layerMap][id] = layer
    layer.connect(this, this[_zOrder]++, zIndex)

    sortLayer(this)   
    return layer
  }
  removeLayer(layer) {
    let layerID
    if(typeof layer === 'string'){
      layerID = layer
      layer = this[_layerMap][layer]
    } else {
      layerID = layer.id
    }

    if(this.hasLayer(layer)){
      layer.disconnect(this)
      delete this[_layerMap][layerID]
      sortLayer(this)
      return layer
    }

    return null 
  }
  hasLayer(layer) {
    let layerID
    if(typeof layer === 'string'){
      layerID = layer
      layer = this[_layerMap][layer]
    } else {
      layerID = layer.id
    }
    return layer && this[_layerMap][layerID] === layer
  }
}

const paper = {
  Paper2D(...args) {
    return new Paper(...args)
  }
}

export default paper
