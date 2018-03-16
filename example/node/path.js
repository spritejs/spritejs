const fs = require('fs')

const {Scene, Path} = require('../../lib')
const scene = new Scene('#test', 800, 600)

const bglayer = scene.layer('bg', {handleEvent: false})

const path = new Path()

path.attr({
  pos: [10, 50],
  color: 'red',
  d: 'M10,80 q100,120 120,20 q140,-50 160,0',
})
bglayer.append(path)

function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t)
  })
}

(async function () {
  const animation = path.animate([
    {pos: [10, 50]},
    {pos: [100, 50]},
  ], {
    duration: 500,
  })
  await animation.ready
  console.log('ready!!!')
  await sleep(500)
  const canvas = await scene.snapshot()
  fs.writeFileSync('snap.png', canvas.toBuffer())
}())