<style>
#enlogo {
  width: 100%;
  padding-bottom: 33%;
}
</style>

<div id="enlogo" style="position:relative"></div>

SpriteJS is a cross-platform lightweight 2D render object model.

Manipulate the **sprites** in canvas as you do with the DOM elements.

## Features

- Manipulate the **sprites** element as you do with the DOM elements.
- Perform fast drawing with smart cache.
- Multiple layers.
- **Flex Layout**.
- **Text typesetting**.
- [Web Animations Api](https://w3c.github.io/web-animations/#the-animation-interface)
- Controllable event dispatching.
- Object Oriented Programmed Development with ES6+
- [Server-side render](#server-side-render). Work with node-canvas.
- [Weixin Apps](https://github.com/spritejs/sprite-wxapp)

## Quick Start

```html
<script src="https://unpkg.com/spritejs/dist/spritejs.min.js"></script>
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
---

## Usage

In browser:

```html
<script src="https://unpkg.com/spritejs/dist/spritejs.min.js"></script>
```

With NPM:

```bash
npm install spritejs --save
```

## Examples

### Basic

- [Overview](http://spritejs.org/demo/)
- [Sprites](http://spritejs.org/demo/#basic_sprites)
- [Path & Group](http://spritejs.org/demo/#path_groups)
- [Labels](http://spritejs.org/demo/#labels)
- [Buttons](http://spritejs.org/demo/#buttons)
- [Transforms](http://spritejs.org/demo/#transforms)
- [Events](http://spritejs.org/demo/#events)
- [Filters](http://spritejs.org/demo/#filters)
- [Animations](http://spritejs.org/demo/#animations)
- [SVG Paths](http://spritejs.org/demo/#svg_path)
- [Offset API](http://spritejs.org/demo/#offset_api)
- [OBB Hit](http://spritejs.org/demo/#obb)

### With D3

Compatible with [d3.js](https://github.com/d3/d3).

- [Bar Graph](http://spritejs.org/demo/#d3_bar)
- [Hierarchy](http://spritejs.org/demo/#d3-2)
- [Map](http://spritejs.org/demo/#d3_map)
- [Force Links](http://spritejs.org/demo/#d3_links)

### With Proton

[Proton](https://github.com/a-jie/Proton) is a lightweight and powerful javascript particle engine. 

- [Big Fire](http://spritejs.org/demo/#proton_fire)
- [Background Particles](http://spritejs.org/demo/#proton_position)
- [Custom Behavior](http://spritejs.org/demo/#proton_behavior)

### With Matter-js

[Matter.js]((https://github.com/liabru/matter-js)) is a JavaScript 2D rigid body physics engine.

- [Mixed shapes](http://spritejs.org/demo/#matterjs_mixed_shapes)

### API Doc

- [Sprite](http://spritejs.org/#/api/sprite)
- [Label](http://spritejs.org/#/api/label)
- [Path](http://spritejs.org/#/api/path)
- [Group](http://spritejs.org/#/api/group)
- [Layer](http://spritejs.org/#/api/layer)
- [Scene](http://spritejs.org/#/api/scene)

### Build

Build with NPM

```bash
npm run build
```

Build Doc

```bash
npm run build-doc
```

### Tests

```bash
npm test
```

  31 passed

File          |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------|----------|----------|----------|----------|----------------|
All files     |     97.7 |    86.73 |    95.24 |     97.8 |                |
 src          |    97.28 |    86.13 |    92.31 |    97.39 |                |
  index.js    |      100 |       50 |      100 |      100 |             24 |
  layer.js    |    96.04 |    83.33 |      100 |    95.92 |    28,42,53,55 |
  resource.js |    97.73 |       80 |    85.71 |    97.56 |             28 |
  scene.js    |    97.98 |     89.7 |    90.91 |    98.31 |219,222,267,300 |
  sprite.js   |    94.12 |    76.19 |      100 |    93.75 |          28,55 |
 src/platform |      100 |    91.43 |      100 |      100 |                |
  index.js    |      100 |    91.43 |      100 |      100 |      68,82,139 |


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

<script src="/js/en.js"></script>