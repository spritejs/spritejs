import {Layer, createNode} from 'sprite-core'
import {createCanvas} from './platform'

const _resolution = Symbol('resolution')

class ExLayer extends Layer {
  constructor(id, opts = {}) {
    if(typeof id === 'object') {
      opts = id
      id = opts.id || `id_${Math.random().toString().slice(2, 10)}`
    }
    let {context,
      resolution,
      handleEvent = true,
      evaluateFPS = false,
      renderMode = 'repaintAll',
      shadowContext = true,
      autoRender = true} = opts

    context = context || createCanvas().getContext('2d')
    const canvas = context.canvas
    canvas.dataset.layerId = id
    canvas.style.position = 'absolute'

    super({context, handleEvent, evaluateFPS, renderMode, shadowContext, autoRender})

    if(resolution) {
      this.resolution = resolution
    } else {
      this[_resolution] = [this.canvas.width, this.canvas.height, 0, 0]
    }
  }
  get id() {
    return this.canvas.dataset.layerId
  }
  get resolution() {
    return this[_resolution]
  }
  get viewport() {
    const canvas = this.canvas
    if(canvas && canvas.clientWidth) {
      return [canvas.clientWidth, canvas.clientHeight]
    }
    if(this.parent) {
      return this.parent.layerViewport
    }
    const [width, height] = this[_resolution]
    return [width, height]
  }
  get offset() {
    return [this.resolution[2], this.resolution[3]]
  }
  set resolution(resolution) {
    const [width, height, offsetLeft, offsetTop] = resolution
    const outputCanvas = this.outputContext.canvas
    outputCanvas.width = width
    outputCanvas.height = height
    this.outputContext.clearRect(0, 0, width, height)

    if(this.shadowContext) {
      const shadowCanvas = this.shadowContext.canvas
      shadowCanvas.width = width
      shadowCanvas.height = height
      this.shadowContext.clearRect(0, 0, width, height)
    }

    if(offsetLeft || offsetTop) {
      const context = this.shadowContext || this.outputContext
      context.translate(offsetLeft, offsetTop)
    }

    this.children.forEach((child) => {
      delete child.lastRenderBox
      child.forceUpdate()
    })

    this[_resolution] = resolution
  }
  clearContext(context) {
    const [width, height, offsetLeft, offsetTop] = this.resolution
    if(context.canvas) {
      context.clearRect(-offsetLeft, -offsetTop, width, height)
    }
  }
  isVisible(sprite) {
    if(!super.isVisible(sprite)) return false
    const [width, height, offsetLeft, offsetTop] = this.resolution

    const box = sprite.renderBox
    if(box[0] > width - offsetLeft || box[1] > height - offsetTop
      || box[2] < 0 || box[3] < 0) {
      return false
    }
    return true
  }

  toLocalPos(x, y) {
    const resolution = this.resolution,
      viewport = this.viewport

    x = x * resolution[0] / viewport[0] - resolution[2]
    y = y * resolution[1] / viewport[1] - resolution[3]

    return [x, y]
  }
  toGlobalPos(x, y) {
    const resolution = this.resolution,
      viewport = this.viewport

    x = x * viewport[0] / resolution[0] + resolution[2]
    y = y * viewport[1] / resolution[1] + resolution[3]

    return [x, y]
  }

  async takeSnapshot() {
    await this.prepareRender()
    const snapshotCanvas = this.canvas.cloneNode(true),
      context = snapshotCanvas.getContext('2d')

    context.drawImage(this.canvas, 0, 0)
    const children = this.children.map(child => child.serialize())
    return {context, children}
  }
  putSnapshot(snapshot) {
    const outputContext = this.outputContext

    const [width, height] = this.resolution

    outputContext.clearRect(0, 0, width, height)
    outputContext.drawImage(snapshot.context.canvas, 0, 0)

    this.clearUpdate()

    snapshot.children.forEach((child) => {
      const node = createNode(child.nodeType)
      if(child.id) {
        node.id = child.id
      }
      node.attr(JSON.parse(child.attrs))
      this.appendChild(node, false)
    })

    for(let i = 0; i < this.children.length; i++) {
      const child = this.children[i]
      child.dispatchEvent(
        'update',
        {
          target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox,
        },
        true
      )

      child.lastRenderBox = child.renderBox
    }

    return this.children
  }
  get zIndex() {
    return this.canvas.style.zIndex
  }
  set zIndex(zIndex) {
    this.canvas.style.zIndex = zIndex
  }
}

export default ExLayer
