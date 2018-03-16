import {memoize} from '../../decorators'
import {appendUnit} from '../../utils'

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

const measureText = memoize((text, font, lineHeight = '') => {
  const tmpEl = document.createElement('font')

  if(font) tmpEl.style.font = font

  lineHeight = appendUnit(lineHeight)

  Object.assign(tmpEl.style, {
    position: 'absolute',
    left: 0,
    top: 0,
    visibility: 'hidden',
    display: 'inline-block',
    lineHeight,
    padding: '0',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  })

  tmpEl.innerHTML = text
  document.documentElement.appendChild(tmpEl)
  const size = [tmpEl.clientWidth, tmpEl.clientHeight]

  document.documentElement.removeChild(tmpEl)

  return size
})

export {measureText}

// get svg path object
export function createPath(d) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('d', d)

  return path
}

export function calPathRect(attr) {
  let path = attr.loadObj('path')
  const {
    d, lineCap, lineJoin, lineWidth,
  } = attr

  if(!path) {
    if(d) { // Deserialized sprite may have d value but no path obj
      path = createPath(d)
      attr.saveObj('path', path)
    } else {
      return [0, 0, 0, 0]
    }
  }

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.style.visibility = 'hidden'
  svg.style.position = 'absolute'
  svg.style.top = 0
  svg.style.left = 0
  // svg.setAttribute('width', 1000)
  // svg.setAttribute('height', 1000)
  // svg.setAttribute('preserveAspectRatio', 'none')
  path.setAttribute('stroke-width', lineWidth)
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

  const pathRect = [ox, oy, width, height]

  attr.saveObj('pathRect', pathRect)

  return pathRect
}
