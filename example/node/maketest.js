const {createCanvas} = require('canvas')
// const {createCanvas} = require('../../lib/platform')
const fs = require('fs')

const {BaseSprite} = require('sprite-core')

function drawSprites(canvas, sprites) {
  const {width, height} = canvas,
    context = canvas.getContext('2d')

  context.clearRect(0, 0, width, height)
  for(let i = 0; i < sprites.length; i++) {
    sprites[i].connect(context).draw()
  }
  return canvas.toBuffer()
}

const s1 = new BaseSprite()

s1.attr({
  bgcolor: '#c0c',
  anchor: [0.5, 0.5],
  pos: [100, 100],
  size: [50, 50],
})

const s = new BaseSprite()
s.attr({
  bgcolor: 'green',
  opacity: 0.5,
  anchor: [0.5, 0.5],
  pos: [100, 100],
  size: [50, 50],
})

const canvas = createCanvas(200, 200)

;(async function () {
  const buffer = await drawSprites(canvas, [s])
  fs.writeFileSync('../../test/img/basesprite-bgcolor-green-opacity.png', buffer)
}())

