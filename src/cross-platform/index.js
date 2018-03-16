const fs = require('fs')
const axios = require('axios')

import {memoize} from '../decorators'

let nodeCanvas = null
try {
  nodeCanvas = require('canvas')
} catch (ex) {
  throw new Error('Node runtime require node-canvas. please follow https://github.com/Automattic/node-canvas to install node-canvas@2.x')
}

export function createCanvas(width = 300, height = 150) {
  const _createCanvas = nodeCanvas.createCanvas
  const canvas = _createCanvas(width, height)
  canvas.style = {}
  canvas.dataset = {}

  canvas.cloneNode = function (copyContent) {
    const {width, height} = this
    const copied = createCanvas(width, height)
    if(copyContent) {
      const ctx = copied.getContext('2d')
      ctx.drawImage(this, 0, 0, width, height)
    }
    return copied
  }

  return canvas
}

export function loadImage(src) {
  const Image = nodeCanvas.Image
  const img = new Image()
  const base64Pattern = /^data:image\/\w+;base64,/

  const promise = new Promise((resolve) => {
    img.onload = function () {
      resolve(img)
    }
  })

  if(typeof src === 'string') {
    if(base64Pattern.test(src)) {
      const base64Data = src.replace(base64Pattern, '')
      img.src = Buffer.from(base64Data, 'base64')
    } else if(/^https?:\/\//.test(src)) {
      axios.get(src, {responseType: 'arraybuffer'}).then(({data}) => {
        img.src = data
      })
    } else {
      fs.readFile(src, (err, squid) => {
        if(err) {
          throw err
        } else {
          img.src = squid
        }
      })
    }
  } else {
    img.src = src
  }

  return promise
}

// http://jsfiddle.net/joquery/cQXgd/
function measureFontHeight(context, text = 'fißgPauljMPÜÖÄ') {
  const sourceWidth = context.canvas.width,
    sourceHeight = context.canvas.height

  // place the text somewhere
  context.textAlign = 'left'
  context.textBaseline = 'top'
  context.fillText(text, 25, 0)

  // returns an array containing the sum of all pixels in a canvas
  // * 4 (red, green, blue, alpha)
  // [pixel1Red, pixel1Green, pixel1Blue, pixel1Alpha, pixel2Red ...]
  const data = context.getImageData(0, 0, sourceWidth, sourceHeight).data

  let firstY = -1
  let lastY = -1

  // loop through each row
  for(let y = 0; y < sourceHeight; y++) {
    // loop through each column
    for(let x = 0; x < sourceWidth; x++) {
      // let red = data[((sourceWidth * y) + x) * 4]
      // let green = data[((sourceWidth * y) + x) * 4 + 1]
      // let blue = data[((sourceWidth * y) + x) * 4 + 2]
      const alpha = data[((sourceWidth * y) + x) * 4 + 3]

      if(alpha > 0) {
        firstY = y
        // exit the loop
        break
      }
    }
    if(firstY >= 0) {
      // exit the loop
      break
    }
  }

  // loop through each row, this time beginning from the last row
  for(let y = sourceHeight; y > 0; y--) {
    // loop through each column
    for(let x = 0; x < sourceWidth; x++) {
      const alpha = data[((sourceWidth * y) + x) * 4 + 3]
      if(alpha > 0) {
        lastY = y
        // exit the loop
        break
      }
    }
    if(lastY >= 0) {
      // exit the loop
      break
    }
  }

  return {
    // The actual height
    textHeight: lastY - firstY,

    height: lastY + firstY,

    // The first pixel
    firstPixel: firstY,

    // The last pixel
    lastPixel: lastY,
  }
}

const measureText = memoize((text, font, lineHeight = '') => {
  lineHeight = parseInt(lineHeight, 10) || 0 // warn: only support px
  const canvas = createCanvas(),
    ctx = canvas.getContext('2d')

  if(font) ctx.font = font

  const {width} = ctx.measureText(text)

  canvas.width = width
  canvas.height = width * 3

  const {height} = measureFontHeight(ctx, text)

  const size = [width, Math.max(height, lineHeight)]

  return size
})

export {measureText}

const MAX_SIZE = 2048

export function createPathSVG(d, lineWidth, lineCap, lineJoin, strokeColor, fillColor, width = MAX_SIZE, height = MAX_SIZE) {
  const tpl = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <path d="${d}" 
        stroke="${strokeColor || 'black'}" 
        fill="${fillColor || 'transparent'}"
        stroke-width="${lineWidth || 1}"
        stroke-linecap="${lineCap || 'butt'}"
        stroke-linejoin="${lineJoin || 'miter'}"
      ></path>
    </svg>
  `
  const Image = nodeCanvas.Image
  const img = new Image()
  img.src = Buffer.from(tpl, 'utf8')

  return img
}

export function calPathRect(attr) {
  const {d, lineCap, lineJoin, strokeColor, fillColor} = attr

  const svg = createPathSVG(d, 1, lineCap, lineJoin, strokeColor, fillColor)

  const {width, height} = svg
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  ctx.drawImage(svg, 0, 0, width, height)
  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data

  let left = width
  let top = height
  let right = 0
  let bottom = 0

  for(let j = 0; j < height; j++) {
    for(let i = 0; i < width; i++) {
      const red = data[((width * j) + i) * 4]
      const green = data[((width * j) + i) * 4 + 1]
      const blue = data[((width * j) + i) * 4 + 2]
      const alpha = data[((width * j) + i) * 4 + 3]
      if(red || green || blue || alpha) {
        left = Math.min(i, left)
        top = Math.min(j, top)
        right = Math.max(i, right)
        bottom = Math.max(j, bottom)
      }
    }
  }

  const pathRect = [left + 1, top + 1, right - left - 1, bottom - top - 1]
  attr.saveObj('pathRect', pathRect)

  return pathRect
}

export function createPath(d) {
  d.replace(/(\s){2,}/g, ' ').trim()
  return {
    getAttribute(attr) {
      if(attr === 'd') {
        return d
      }
    },
  }
}

const {parseSVG, makeAbsolute} = require('svg-path-parser')
export class Path2D {
  constructor(d) {
    this.footprint = []
    this.commands = []
    if(d instanceof Path2D) {
      this.addPath(d)
    } else if(typeof d === 'string') {
      // svg path
      const commands = makeAbsolute(parseSVG(d))
      if(commands[0] && commands[0].code === 'M') {
        this.footprint.push([commands[0].x, commands[0].y])
      }
      this.commands.push(['path', d])
    }
  }
  addPath(path) {
    this.footprint.push(...path.footprint)
    this.commands.push(...path.commands)
  }
  closePath() {
    const point = this.footprint[0]
    if(point) {
      this.moveTo(...point)
    }
  }
  moveTo(x, y) {
    this.footprint.push([x, y])
    this.commands.push(['moveTo', x, y])
  }
  lineTo(x, y) {
    this.footprint.push([x, y])
    this.commands.push(['lineTo', x, y])
  }
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.footprint.push([x, y])
    this.commands.push(['bezierCurveTo', cp1x, cp1y, cp2x, cp2y, x, y])
  }
  quadraticCurveTo(cpx, cpy, x, y) {
    this.footprint.push([x, y])
    this.commands.push('quadraticCurveTo', cpx, cpy, x, y)
  }
  arc(x, y, ...rest) {
    this.footprint.push([x, y])
    this.commands.push('arc', x, y, ...rest)
  }
  arcTo(x1, y1, x2, y2, radius) {
    this.commands.push('artTo', x1, y1, x2, y2, radius)
  }
  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
    this.footprint.push([x, y])
    this.commands.push('ellipse', x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
  }
  rect(x, y, width, height) {
    this.footprint.push([x, y])
    this.commands.push('rect', x, y, width, height)
  }
  draw(context, type = 'stroke') {
    context.save()
    context.beginPath()
    this.commands.forEach((command) => {
      const [cmd, ...args] = command
      if(cmd === 'path') {
        const {lineWidth, lineCap, lineJoin, strokeStyle, fillStyle} = context
        const {width, height} = context.canvas
        const svg = createPathSVG(...args, lineWidth, lineCap, lineJoin, strokeStyle, type === 'stroke' ? null : fillStyle, width, height)
        context.drawImage(svg, 0, 0)
      } else {
        context[cmd](...args)
        context[type]()
      }
    })
    context.restore()
  }
}

const CanvasRenderingContext2D = nodeCanvas.CanvasRenderingContext2D
const _stroke = CanvasRenderingContext2D.prototype.stroke
Object.defineProperty(CanvasRenderingContext2D.prototype, 'stroke', {
  value(p) {
    if(p instanceof Path2D) {
      return p.draw(this, 'stroke')
    }
    return _stroke.call(this)
  },
})

const _fill = CanvasRenderingContext2D.prototype.fill
Object.defineProperty(CanvasRenderingContext2D.prototype, 'fill', {
  value(p) {
    if(p instanceof Path2D) {
      return p.draw(this, 'fill')
    }
    return _fill.call(this)
  },
})
