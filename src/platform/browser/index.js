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

export function getContainer(container) {
  if(typeof container === 'string') {
    container = document.querySelector(container)
  }
  if(!container) {
    throw new Error('Container is not defined or cannot found.')
  }
  return container
}

export function shim() {

}
