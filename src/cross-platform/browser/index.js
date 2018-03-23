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
