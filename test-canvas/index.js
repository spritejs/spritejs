const fs = require('fs')
const GIFEncoder = require('gifencoder')

const {Scene, Sprite} = require('../lib')
const width = 800
const height = 600
const scene = new Scene('#test', width, height)
scene.setResolution(width * 2, height * 2)

;(async function () {
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

  await scene.preload([birdsRes, birdsJsonUrl])

  // 背景层
  const bglayer = scene.layer('bg', {handleEvent: false})

  // 前景层
  const fglayer = scene.layer('fg', {handleEvent: false})
  const axisZero = [400, 400]
  const circle = new Sprite()
  circle.attr({
    anchor: [0.5, 0.5],
    size: [800, 800],
    pos: axisZero,
    bgcolor: '#139',
    opacity: 0.5,
    borderRadius: 400,
  })

  bglayer.appendChild(circle)

  function pointAdd(p1, p2 = [0, 0]) {
    return [p1[0] + p2[0], p1[1] + p2[1]].map(Math.round)
  }

  function pointSub(p1, p2 = [0, 0]) {
    return [p1[0] - p2[0], p1[1] - p2[1]].map(Math.round)
  }

  function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }
  async function randomAnimate(bird) {
    const birdPoint = bird.attr('pos')
    const randomArc = Math.random() * 2 * Math.PI
    const randomPoint = pointAdd([350 * Math.cos(randomArc), 350 * Math.sin(randomArc)], axisZero)  
    const dist = pointSub(randomPoint, birdPoint)
    const distance = Math.round(Math.sqrt(dist[0] * dist[0] + dist[1] * dist[1]))
    const flip = dist[0] < 0 ? -1 : 1
    const duration = 5 * distance + 100
    bird.attr('scale', [flip, 1]) // scale 放在外面，触发缓存

    const anim = bird.animate([
      {pos: birdPoint},
      {pos: randomPoint},
    ], {
      duration,
      endDelay: 500,
      fill: 'both',
    })
    await anim.finished
  }

  let stop = false, birdCount = 0

  async function addBird() {
    birdCount++
    const bird = new Sprite('bird1.png')
    bird.attr({
      anchor: [0.5, 0.5],
      pos: axisZero,
      transform: {
        rotate: 0,
      },
    })
    fglayer.appendChild(bird)
    let idx = 0
    let t = setInterval(() => {
      bird.textures = [`bird${++idx % 3 + 1}.png`]
      if(stop) clearInterval(t)
    }, 100)

    do {
      await randomAnimate(bird)
    } while (!stop)

    bird.remove()
    birdCount--
  }

  const encoder = new GIFEncoder(width, height)
  // stream the results as they are available into myanimated.gif
  encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'))

  encoder.start()
  encoder.setRepeat(0) // 0 for repeat, -1 for no-repeat
  encoder.setDelay(100) // frame delay in ms
  encoder.setQuality(10) // image quality. 10 is default.

  const t = setInterval(async () => {
    const canvas = await scene.snapshot()
    const ctx = canvas.getContext('2d')
    encoder.addFrame(ctx)
    if(stop && birdCount <= 0) clearInterval(t)
  }, 100)

  for(let i = 0; i < 10; i++) {
    console.log(`add ${i+1} bird...`)
    await sleep(500)
    addBird()
  }

  await sleep(3000)
  stop = true
}())
