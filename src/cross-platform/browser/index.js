export function createCanvas(width = 300, height = 150) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export function loadImage(src) {
  const img = document.createElement('img')
  img.crossOrigin = 'anonymous'

  const promise = new Promise((resolve) => {
    img.addEventListener('load', () => {
      resolve(img)
    })
  })
  img.src = src
  return promise
}

// get svg path object
export function createPath(d) {
  if(!d) return null
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('d', d)

  return path
}

export function calPathRect(attr) {
  const {
    d, lineCap, lineJoin,
  } = attr

  if(!d) {
    return [0, 0, 0, 0]
  }

  const path = createPath(d)

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.style.visibility = 'hidden'
  svg.style.position = 'absolute'
  svg.style.top = 0
  svg.style.left = 0
  // svg.setAttribute('width', 1000)
  // svg.setAttribute('height', 1000)
  // svg.setAttribute('preserveAspectRatio', 'none')
  path.setAttribute('stroke-width', 1)
  path.setAttribute('stroke', '#f00')
  path.setAttribute('stroke-linecap', lineCap)
  path.setAttribute('stroke-linejoin', lineJoin)
  svg.appendChild(path)
  document.body.appendChild(svg)
  const {left: x0, top: y0} = svg.getBoundingClientRect()
  const {
    left, top, width, height,
  } = path.getBoundingClientRect()
  const [ox, oy] = [left - x0, top - y0]
  document.body.removeChild(svg)

  return [ox, oy, width, height]
}

export function getContainer(container) {
  if(typeof container === 'string') {
    container = document.querySelector(container)
  }
  if(!container) {
    throw new Error('Container is not defined or cannot found.')
  }
  return container
}

import {Sprite} from 'sprite-core'
const SpriteAttr = Sprite.Attr
export function shim() {
  Object.defineProperties(SpriteAttr.prototype, {
    offsetPath: {
      set(val) {
        const offsetPath = createPath(val)

        this.set('offsetPath', offsetPath.getAttribute('d'))
        this.saveObj('offsetPath', offsetPath)
        this.resetOffset()
      },
      get() {
        return this.get('offsetPath')
      },
    },
    offsetDistance: {
      set(val) {
        this.set('offsetDistance', val)
        this.resetOffset()
      },
      get() {
        return this.get('offsetDistance')
      },
    },
    offsetRotate: {
      set(val) {
        this.set('offsetRotate', val)
        this.resetOffset()
      },
      get() {
        return this.get('offsetRotate')
      },
    },
  })

  Object.assign(SpriteAttr.prototype, {
    resetOffset() {
      let offsetPath = this.get('offsetPath')
      const dis = this.offsetDistance

      if(offsetPath) {
        const pathObj = this.loadObj('offsetPath')
        if(pathObj) {
          offsetPath = pathObj
        } else {
          offsetPath = createPath(offsetPath)
          this.saveObj('offsetPath', offsetPath)
        }
      }

      if(offsetPath != null) {
        const len = dis * offsetPath.getTotalLength(),
          {x, y} = offsetPath.getPointAtLength(len)

        let angle = this.offsetRotate
        if(angle === 'auto' || angle === 'reverse') {
          const delta = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1)
          const x1 = delta.x,
            y1 = delta.y

          if(x1 === x && y1 === y) { // last point
            angle = this.get('offsetAngle')
          } else {
            angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI
          }

          if(this.offsetRotate === 'reverse') {
            angle = -angle
          }
        }

        const offsetAngle = this.get('offsetAngle')

        if(offsetAngle) {
          this.rotate -= offsetAngle
        }

        this.set('offsetAngle', angle)
        this.rotate += angle

        const offsetPoint = this.get('offsetPoint')
        if(offsetPoint) {
          this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]]
        }

        this.set('offsetPoint', [x, y])
        this.pos = [this.x + x, this.y + y]
      }
    },
  })
}
