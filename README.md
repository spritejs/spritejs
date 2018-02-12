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
<script src="https://s1.ssl.qhres.com/!b074206d/spritejs.min.js"></script>
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

Spritejs (>= 1.14.2) can render sprites' canvas on server-side. Depend on [node-canvas](https://github.com/Automattic/node-canvas).

```js
npm install node-canvas spritejs --save
```

```js
const fs = require('fs')
const GIFEncoder = require('gifencoder')

const {Scene, Sprite, Label} = require('spritejs')
const width = 800
const height = 600
const scene = new Scene('#test', width, height)
scene.setResolution(width * 2, height * 2)

;(async function () {
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

  await scene.preload([birdsRes, birdsJsonUrl])

  const layer = scene.layer('fglayer', {handleEvent: false})

  const sprite = new Sprite()
  sprite.attr({
    pos: [100, 100],
    size: [100, 100],
    bgcolor: 'red',
  })

  const bird = new Sprite('bird1.png')

  bird.attr({
    anchor: [0.5, 0.5],
    pos: [800, 600],
    transform: {
      rotate: 0
    }
  })

  layer.append(sprite, bird)

  const text1 = new Label('中国')

  text1.attr({
    anchor: '0.5',
    pos: [400, 300],
    font: '64px Arial',
    color: '#fff',
    bgcolor: 'blue',
    renderMode: 'stroke',
    lineHeight: 200,
    scale: [scene.distortion, 1],
  })

  layer.append(text1)

  const encoder = new GIFEncoder(width, height)
  // stream the results as they are available into myanimated.gif
  encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'))

  encoder.start()
  encoder.setRepeat(0) // 0 for repeat, -1 for no-repeat
  encoder.setDelay(100) // frame delay in ms
  encoder.setQuality(10) // image quality. 10 is default.

  const frameCount = 120
  for (let i = 0; i < frameCount; i++) {
    /* eslint-disable no-console */
    console.log(`recording... frame ${i + 1} of ${frameCount}`)
    /* eslint-enable no-console */
    bird.textures = [`bird${i % 3 + 1}.png`]

    /* eslint-disable no-await-in-loop */
    const canvas = await scene.snapshot()
    const ctx = canvas.getContext('2d')
    /* eslint-enable no-await-in-loop */

    sprite.attr({
      rotate: 3 * i
    })

    encoder.addFrame(ctx)
  }
}())
```

## License

[MIT](LICENSE)
