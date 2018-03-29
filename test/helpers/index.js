import {loadImage} from '../../src/platform'
const {createCanvas} = require('canvas')

const imghash = require('imghash')
const hamming = require('hamming-distance')
const colors = require('colors')
const pixelmatch = require('pixelmatch')
const fs = require('fs')

export async function createCanvasFromFile(src) {
  const img = await loadImage(src)
  const canvas = createCanvas(img.width, img.height)
  canvas.getContext('2d').drawImage(img, 0, 0)
  return canvas
}

export async function compare(canvas, imgFile) {
  const srcData = canvas.toBuffer()
  const desCanvas = await createCanvasFromFile(`./test/img/${imgFile}`)

  const desData = desCanvas.toBuffer()
  const N = 32
  const hash1 = imghash.hash(srcData, N)
  const hash2 = imghash.hash(desData, N)

  const results = await Promise.all([hash1, hash2])

  const dist = hamming(...results)
  console.warn(colors.cyan(`Hamming distance between canvas and ${imgFile} should be: ${dist}`))

  const diffFile = `./test/img-diff/${imgFile}`

  const width = canvas.width,
    height = canvas.height
  const diffCanvas = createCanvas(width, height),
    srcContext = canvas.getContext('2d'),
    desContext = desCanvas.getContext('2d'),
    diffContext = diffCanvas.getContext('2d')

  const img1 = srcContext.getImageData(0, 0, width, height)
  const img2 = desContext.getImageData(0, 0, width, height)
  const diff = diffContext.createImageData(width, height)

  pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    {threshold: 0.1}
  )
  diffContext.putImageData(diff, 0, 0)

  let isEqual = !dist

  if(isEqual) { // hash equal, re-check pixels
    const data = diff.data
    for(let i = 0; i < data.length; i += 4) {
      const r = data[i],
        g = data[i + 1],
        b = data[i + 2]

      if(r === 255 && g === 0 && b === 0) {
        isEqual = false
        break
      }
    }
  }

  if(!isEqual) {
    fs.writeFileSync(diffFile, diffCanvas.toBuffer())
  } else if(fs.existsSync(diffFile)) {
    fs.unlinkSync(diffFile)
  }

  return isEqual
}

export function drawSprites(canvas, sprites) {
  const {width, height} = canvas,
    context = canvas.getContext('2d')

  context.clearRect(0, 0, width, height)
  for(let i = 0; i < sprites.length; i++) {
    sprites[i].connect(context).draw()
  }
  return canvas
}
