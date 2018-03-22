const {createCanvas} = require('canvas')
const fs = require('fs')

const BaseSprite = require('../../lib/basesprite').default
const s = new BaseSprite()

s.attr({
  bgcolor: 'red',
  anchor: [0.5, 0.5],
  pos: [100, 100],
  size: [50, 50],
})

const canvas = createCanvas(200, 200),
  context = canvas.getContext('2d')

s.draw(context, true).then(() => {
  fs.writeFileSync('../../test/img/basesprite-bgcolor-red.png', canvas.toBuffer())
})
