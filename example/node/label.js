const fs = require('fs')

const {Scene, Label} = require('../../lib')
const scene = new Scene('#test', 800, 600)

const bglayer = scene.layer('bg', {handleEvent: true})

const text = new Label('Clicked: 0')

text.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  font: '40px Arial',
  color: 'blue',
  bgcolor: 'white',
  textAlign: 'center',
})

bglayer.append(text)

function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t)
  })
}

const GIFEncoder = require('gifencoder')
const encoder = new GIFEncoder(scene.width, scene.height)
// stream the results as they are available into myanimated.gif
encoder.createReadStream().pipe(fs.createWriteStream('label_clicked.gif'))
encoder.start()
encoder.setRepeat(0) // 0 for repeat, -1 for no-repeat
encoder.setDelay(500) // frame delay in ms
encoder.setQuality(10) // image quality. 10 is default.

let count = 0
bglayer.on('click', async (e) => {
  const msg = `Clicked: ${++count}`
  text.text = msg
  const canvas = await scene.snapshot()
  const ctx = canvas.getContext('2d')
  encoder.addFrame(ctx)
  console.log(msg)
})

;(async function () {
  // const canvas = await scene.snapshot()
  // fs.writeFileSync('snap.png', canvas.toBuffer())
  for(let i = 0; i < 10; i++) {
    scene.dispatchEvent('click', {x: 400, y: 300})
    await sleep(500)
  }
  console.log('done')
}())