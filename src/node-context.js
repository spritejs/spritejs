const { createCanvas, Image, Canvas } = require('canvas')
const request = require('request').defaults({ encoding: null })
const fs = require('fs')

const base64Pattern = /^data:image\/\w+;base64,/

export class Container {
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
    //console.warn('addEventListener is not implemented yet.')
  }
}

Image.prototype.__defineSetter__('src', function(data){
  if(typeof data === 'string') {
    if ('string' == typeof data && base64Pattern.test(data)) {
      const base64Data = data.replace(base64Pattern, "")
      this.source = new Buffer(data, 'base64')
    } else if(/^https?:\/\//.test(data)) {
      request.get(data, (err, res, buf) => {
        if(err) {
          throw err
        } else {
          this.source = buf
        }
      })
    } else {
      fs.readFile(data,  function(err, squid){
        if(err) {
          throw err
        } else {
          this.source = squid
        }
      })      
    }
  } else {
    this.source = data
  }
})

Canvas.prototype.cloneNode = function(copyContent) {
  const {width, height} = this
  const copied = createCanvas(width, height)
  if(copyContent) {
    const ctx = copied.getContext('2d')
    ctx.drawImage(this, 0, 0, width, height)
  }
  return copied
}

const elementMap = new Map()

const document = {
  querySelector(selector) {
    const key = 'res-' + selector.replace(/[#.:()]/g, '')
    return this.getElementById(key)
  },
  getElementById(id) {
    if(elementMap.has(id)){
      return elementMap.get(id)
    } else {
      const el = new Container(id)
      elementMap.set(id, el)
      return el
    }        
  },
  createElement(nodeType) {
    if(nodeType === 'canvas') {
      const canvas = createCanvas(800, 600)
      canvas.dataset = {}
      canvas.style = {}
      return canvas
    } else if(nodeType === 'img') {
      return new Image()
    } else {
      throw new Error('Invalid element. Only canvas and img can be created.')
    }
  }
}

function requestAnimationFrame(fn) {
  process.nextTick(() => {
    let [s, ns] = process.hrtime()
    const t = s * 1e3 + ns * 1e-6
    fn(t)
  })
}

export {
  Image,
  document,
  requestAnimationFrame,
}
