import {createCanvas, Path2D} from './index'
global.IS_NODE_ENV = true

global.requestAnimationFrame = (fn) => {
  setTimeout(() => {
    const [s, ns] = process.hrtime()
    const t = s * 1e3 + ns * 1e-6
    fn(t)
  }, 16)
}

const elementMap = new Map()

class Container {
  constructor(id, path = '.') {
    this.id = id
    this.path = path
    this.children = []
    this.clientWidth = 800
    this.clientHeight = 600
  }
  appendChild(node) {
    this.children.push(node)
  }
  insertBefore(node, next) {
    const idx = this.children.indexOf(next)
    if(idx === -1) {
      throw new Error('ERR: no such element')
    } else {
      this.children.splice(idx, 0, node)
    }
  }
  addEventListener() {
    // console.warn('addEventListener is not implemented yet.')
  }
  remove() {
    elementMap.delete(this.id)
  }
}

global.document = {
  querySelector(selector) {
    const key = `node_canvas-${selector.replace(/[#.:()]/g, '')}`
    return this.getElementById(key)
  },
  getElementById(id) {
    if(elementMap.has(id)) {
      return elementMap.get(id)
    }
    const el = new Container(id)
    elementMap.set(id, el)
    return el
  },
  createElement(nodeType) {
    if(nodeType === 'canvas') {
      const canvas = createCanvas(800, 600)
      canvas.dataset = {}
      canvas.style = {}
      return canvas
    } else if(nodeType === 'img') {
      return new Image()
    }
    throw new Error('Invalid element. Only canvas and img can be created.')
  },
}

global.Path2D = Path2D

export default {}
