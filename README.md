# spritejs 

[![npm status](https://img.shields.io/npm/v/spritejs.svg)](https://www.npmjs.org/package/spritejs)
[![build status](https://api.travis-ci.org/spritejs/spritejs.svg?branch=master)](https://travis-ci.org/spritejs/spritejs) 
[![dependency status](https://david-dm.org/spritejs/spritejs.svg)](https://david-dm.org/spritejs/spritejs)
[![License](https://img.shields.io/npm/l/spritejs.svg)](LICENSE)

A lightweight 2D canvas rendering engine for modern browsers with ES6+.

Manipulate the **sprites** in canvas as you do with the DOM elements.

Learn more at [spritejs.org](http://spritejs.org/)

## Fetures

- Provide `attr()` methods to set sprite styles.
- Provide [web animations api](https://w3c.github.io/web-animations/#the-animation-interface
) to perform animations.
- Provide filters.
- Provide high-level mouse & touch events
- Optimized rendering performance.

## Usage

In browser:

```html
<script src="https://s1.ssl.qhres.com/!729ec803/spritejs.min.js"></script>
```

## Quick Start

### Examples

- [Overview](http://spritejs.org/)
- [Sprites](http://spritejs.org/#basic_sprites)
- [Textures](http://spritejs.org/#sprites_textures)
- [Labels](http://spritejs.org/#labels)
- [Buttons](http://spritejs.org/#buttons)
- [Transforms](http://spritejs.org/#sprites_transforms)
- [Events](http://spritejs.org/#sprite_events)
- [Filters](http://spritejs.org/#filters)
- [Animations](http://spritejs.org/#animations)
- [SVG Paths](http://spritejs.org/#svg_path)
- [Offset API](http://spritejs.org/#offset_api)
- [OBB Hit](http://spritejs.org/#obb)

#### D3 Examples

Compatible with [d3.js](https://github.com/d3/d3).

- [D3.js Example 1](http://spritejs.org/#d3)
- [D3.js Example 2](http://spritejs.org/#d3-2)
- [D3.js Example 3](http://spritejs.org/#d3-3)

### API Doc (中文）

- [Architecture](docs#整体结构)
- [paper & layers](docs#快速上手)
- [Sprite](docs#sprite-类结构)
- [Events](docs#事件机制)
- [Performance](docs#性能)

### Server-side Render

Spritejs (>= 1.14.4) can render sprites' canvas on server-side. Depend on [node-canvas](https://github.com/Automattic/node-canvas).

```js
npm install spritejs --save
```

```js
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
```

## License

[MIT](LICENSE)
