const {createCanvas} = require('canvas')

module.exports = function drawSprites(sprites, width, height) {
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  context.clearRect(0, 0, width, height)
  for(let i = 0; i < sprites.length; i++) {
    sprites[i].connect(context).draw()
  }
  return canvas
}
