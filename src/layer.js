import {Layer, createNode} from 'sprite-core'

const _resolution = Symbol('resolution')

class ExLayer extends Layer {
  constructor({
    context,
    handleEvent,
    evaluateFPS,
    renderMode,
    resolution,
    shadowContext,
  } = {}) {
    super({context, handleEvent, evaluateFPS, renderMode, shadowContext})

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
      context.restore()
      context.translate(offsetLeft, offsetTop)
      context.save()
    }

    this.children.forEach((child) => {
      delete child.lastRenderBox
      child.forceUpdate()
    })

    this[_resolution] = resolution
  }
  renderRepaintAll(t) {
    const [width, height, offsetLeft, offsetTop] = this.resolution
    this.shadowContext.clearRect(-offsetLeft, -offsetTop, width, height)
    super.renderRepaintAll(t)
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
    return this.parent.toLocalPos(this.canvas, x, y)
  }
  toGlobalPos(x, y) {
    return this.parent.toGlobalPos(this.canvas, x, y)
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
      Object.assign(node.attrs(), JSON.parse(child.attrs))
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
