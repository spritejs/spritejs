// import {Layer} from 'sprite-core'
import Layer from './layer'
import {createNode, getNodeType} from './nodetype'

const _viewport = Symbol('_viewport')

class MyLayer extends Layer {
  constructor(opts = {}) {
    super(opts)
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
  }
  getElementById(id) {
    const children = this.children
    for(let i = 0; i < children.length; i++) {
      const child = children[i]
      if(child.id === id) {
        return child
      }
    }
    return null
  }

  getElementsByName(name) {
    return this.children.filter(c => c.name === name)
  }
  /*
    d3-friendly
    *, nodeType, checker
  */
  querySelector(selector) {
    const children = this.children

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
      return this.children
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
        return this.children.filter(child => child instanceof nodeType)
      }
      return null
    }
    return this.children.filter((child) => {
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
  get id() {
    return this.canvas.dataset.layerId
  }
  set viewport([width, height]) {
    this.canvas.style.width = `${width}px`
    this.canvas.style.height = `${height}px`
    this[_viewport] = [width, height]
  }
  get viewport() {
    return this[_viewport]
  }
  async getSnapshot() {
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
      const node = createNode(child.nodeType, child.attrs, child.id)
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

export default MyLayer
