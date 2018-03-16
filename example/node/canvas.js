const {CanvasRenderingContext2D, createCanvas, Image} = require('canvas')
const {parseSVG, makeAbsolute} = require('svg-path-parser')

const MAX_SIZE = 2048

function createPathSVG(d, lineWidth, lineCap, lineJoin, strokeColor, fillColor, width = MAX_SIZE, height = MAX_SIZE) {
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

  const img = new Image()
  img.src = Buffer.from(tpl, 'utf8')

  return img
}

class Path2D {
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

const p = new Path2D('M10,80 q100,120 120,20 q140,-50 160,0')
const canvas = createCanvas(300, 150)
const context = canvas.getContext('2d')
context.strokeStyle = 'red'
context.stroke(p)

require('fs').writeFileSync('out.png', canvas.toBuffer())
