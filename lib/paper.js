import Layer from './layer'
import Resource from './resource'

const _layerMap = Symbol('layerMap'),
  _zOrder = Symbol('zOrder'),
  _layers = Symbol('layers')

function sortLayer(paper) {
  const layers = []

  for(const key in paper[_layerMap]) {
    const layer = paper[_layerMap][key]

    layers.push(layer)
  }

  layers.sort((a, b) => b.zOrder - a.zOrder)

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
  setResolution(width, height){
    const oldResolution = this.resolution
    this.resolution = [width, height]
    this[_layers].forEach(layer => layer.resolutionChange(oldResolution, this.resolution))
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
  layer(id = 'default', handleEvent = true) {
    if(!this[_layerMap][id]) {
      this[_layerMap][id] = new Layer(id, this, handleEvent)

      Object.defineProperty(this[_layerMap][id], 'zOrder', {
        value: this[_zOrder]++,
        writable: false
      })

      sortLayer(this)
    }

    return this[_layerMap][id]
  }
  removeLayer(id) {
    const layer = this[_layerMap][id]

    if(layer){
      delete this[_layerMap][id]
      sortLayer(this)
    }

    return layer
  }
}


const paper = {
  Paper2D(...args) {
    return new Paper(...args)
  }
}

export default paper
