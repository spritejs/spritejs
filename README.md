<p align="center">
  <a href="http://spritejs.org"><img src="https://p2.ssl.qhimg.com/t01e6920579715cc92b.jpg" alt="spritejs logo"/></a>
</p>

<h1 align="center">SpriteJS</h1>

[![npm status](https://img.shields.io/npm/v/spritejs.svg)](https://www.npmjs.org/package/spritejs)
[![build status](https://api.travis-ci.org/spritejs/spritejs.svg?branch=master)](https://travis-ci.org/spritejs/spritejs) 
[![dependency status](https://david-dm.org/spritejs/spritejs.svg)](https://david-dm.org/spritejs/spritejs)
[![Package Quality](http://npm.packagequality.com/shield/spritejs.svg)](http://packagequality.com/#?package=spritejs)
 [![Code Climate](https://codeclimate.com/github/spritejs/spritejs/badges/gpa.svg)](https://codeclimate.com/github/spritejs/spritejs)
[![License](https://img.shields.io/npm/l/spritejs.svg)](LICENSE)

SpriteJS is a cross-platform lightweight 2D render object model.

Manipulate the **sprites** in canvas as you do with the DOM elements.

## Fetures

- Manipulate the **sprites** element as you do with the DOM elements.
- Perform fast drawing with smart cache.
- Multiple layers.
- [Web Animations Api](https://w3c.github.io/web-animations/#the-animation-interface)
- Controllable event dispatching.
- Object Oriented Programmed Development with ES6+
- [Server-side render](#server-side-render). Work with node-canvas.
- [微信小程序](https://github.com/spritejs/sprite-wxapp)

## Quick Look

```html
<script src="https://s0.ssl.qhres.com/!5ec1e79d/spritejs.min.js"></script>
<div id="container"></div>
<script>
    const imgUrl = 'https://s5.ssl.qhres.com/static/ec9f373a383d7664.svg'
    const {Scene, Sprite} = spritejs;
    const paper = new Scene('#container', 400, 400)

    const sprite = new Sprite(imgUrl)
    sprite.attr({
      bgcolor: '#fff',
      pos: [0, 0],
      size: [400, 400],
      borderRadius: '200'
    })

    paper.layer().appendChild(sprite)
</script>
```

<div style="font-size: 1.5rem">Learn more at <strong style="font-size: 2.5rem"><a href="http://spritejs.org/">spritejs.org</a></strong> </div>

---

## Usage

In browser:

```html
<script src="https://s0.ssl.qhres.com/!5ec1e79d/spritejs.min.js"></script>
```

## Quick Start

### Examples

- [Overview](http://spritejs.org/)
- [Sprites](http://spritejs.org/demo/#basic_sprites)
- [Textures](http://spritejs.org/demo/#sprites_textures)
- [Labels](http://spritejs.org/demo/#labels)
- [Buttons](http://spritejs.org/demo/#buttons)
- [Transforms](http://spritejs.org/demo/#sprites_transforms)
- [Events](http://spritejs.org/demo/#sprite_events)
- [Filters](http://spritejs.org/demo/#filters)
- [Animations](http://spritejs.org/demo/#animations)
- [SVG Paths](http://spritejs.org/demo/#svg_path)
- [Offset API](http://spritejs.org/demo/#offset_api)
- [OBB Hit](http://spritejs.org/demo/#obb)

#### D3 Examples

Compatible with [d3.js](https://github.com/d3/d3).

- [D3.js Example 1](http://spritejs.org/demo/#d3)
- [D3.js Example 2](http://spritejs.org/demo/#d3-2)
- [D3.js Example 3](http://spritejs.org/demo/#d3-3)

### Guide (中文）

- [Introduction](http://spritejs.org/#/zh-cn/index)
- [Scene & layers](http://spritejs.org/#/zh-cn/layer)
- [Elements](http://spritejs.org/#/zh-cn/elements)
- [Animations & Effects](http://spritejs.org/#/zh-cn/elements)
- [Behaviors](http://spritejs.org/#/zh-cn/behavior)

### API Doc

- [Sprite](http://spritejs.org/#/api/sprite)
- [Label](http://spritejs.org/#/api/label)
- [Path](http://spritejs.org/#/api/path)
- [Group](http://spritejs.org/#/api/group)
- [Layer](http://spritejs.org/#/api/layer)
- [Scene](http://spritejs.org/#/api/scene)

### Server-side Render

Spritejs (>= 1.15.0) can render sprites' canvas on server-side. Depend on [node-canvas](https://github.com/Automattic/node-canvas).

```bash
sudo apt-get install libcairo2-dev libjpeg-dev libpango1.0-dev librsvg2-dev libgif-dev build-essential g++
```

```bash
npm install canvas@next
```

```js
const fs = require('fs')

const {Scene, Label} = require('spritejs')
const scene = new Scene('#test', 800, 600)

const bglayer = scene.layer('bg', {handleEvent: false})

const text = new Label('Hello Sprite!')

text.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  font: '46px Arial',
  color: 'blue',
  bgcolor: 'white',
  textAlign: 'center',
})

bglayer.append(text)

;(async function () {
  const canvas = await scene.snapshot()
  fs.writeFileSync('snap.png', canvas.toBuffer())
}())
```

## License

[MIT](LICENSE)
