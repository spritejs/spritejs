const {createCanvas} = require('canvas')
const fs = require('fs')

const Label = require('../../lib/label').default

async function drawSprites(canvas, sprites) {
  const {width, height} = canvas,
    context = canvas.getContext('2d')

  context.clearRect(0, 0, width, height)
  for(let i = 0; i < sprites.length; i++) {
    /* eslint-disable no-await-in-loop */
    await sprites[i].draw(context, true)
    /* eslint-enabel no-await-in-loop */
  }
  return canvas.toBuffer()
}

const text1 = new Label('SpriteJS.org 中国')

text1.attr({
  anchor: 0.5,
  pos: [400, 300],
  font: '48px Arial',
  color: '#fff',
  bgcolor: 'blue',
  renderMode: 'stroke',
})

const canvas = createCanvas(800, 600)

;(async function () {
  const buffer = await drawSprites(canvas, [text1])
  fs.writeFileSync('../../test/img/label-48px-Arial.png', buffer)
}())

