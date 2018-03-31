import {Layer, createNode} from 'sprite-core'

const _viewport = Symbol('_viewport')

class ExLayer extends Layer {
  constructor({
    context,
    handleEvent,
    evaluateFPS,
    renderMode,
    resolution,
  } = {}) {
    super({context, handleEvent, evaluateFPS, renderMode})

    if(resolution) {
      this.resolution = resolution
    }
  }
  get canvas() {
    return this.outputContext.canvas
  }
  get id() {
    return this.canvas.dataset.layerId
  }
  get resolution() {
    return [this.canvas.width, this.canvas.height]
  }
  set resolution(resolution) {
    const [width, height] = resolution
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

    this.children.forEach((child) => {
      delete child.lastRenderBox
      child.forceUpdate()
    })
  }
  set viewport([width, height]) {
    this.canvas.style.width = `${width}px`
    this.canvas.style.height = `${height}px`
    this[_viewport] = [width, height]
  }
  get viewport() {
    return this[_viewport]
  }
  isVisible(sprite) {
    if(!super.isVisible(sprite)) return false
    const [maxWidth, maxHeigth] = this.resolution

    const box = sprite.renderBox
    if(box[0] > maxWidth || box[1] > maxHeigth
      || box[2] < 0 || box[3] < 0) {
      return false
    }
    return true
  }
  async takeSnapshot() {
    await this.prepareRender()
    const snapshotCanvas = this.canvas.cloneNode(true)
    snapshotCanvas.getContext('2d').drawImage(this.canvas, 0, 0)
    const children = this.children.map(child => child.serialize())
    return {context: snapshotCanvas, children}
  }
  putSnapshot(snapshot) {
    const outputContext = this.outputContext

    const [width, height] = this.resolution

    outputContext.clearRect(0, 0, width, height)
    outputContext.drawImage(snapshot.context, 0, 0)

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
