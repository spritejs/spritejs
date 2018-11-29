<p align="center">
  <a href="http://spritejs.org"><img src="https://p2.ssl.qhimg.com/t01e6920579715cc92b.jpg" alt="spritejs logo"/></a>
</p>

<a href="http://spritejs.org"><h1 align="center">spritejs.org</h1></a>

[![npm status](https://img.shields.io/npm/v/spritejs.svg)](https://www.npmjs.org/package/spritejs)
[![build status](https://api.travis-ci.org/spritejs/spritejs.svg?branch=master)](https://travis-ci.org/spritejs/spritejs)
[![dependency status](https://david-dm.org/spritejs/spritejs.svg)](https://david-dm.org/spritejs/spritejs)
[![Package Quality](http://npm.packagequality.com/shield/spritejs.svg)](http://packagequality.com/#?package=spritejs)
[![Code Climate](https://codeclimate.com/github/spritejs/spritejs/badges/gpa.svg)](https://codeclimate.com/github/spritejs/spritejs)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8327f502ee8ba003c6b8/test_coverage)](https://codeclimate.com/github/spritejs/spritejs/test_coverage)
[![License](https://img.shields.io/npm/l/spritejs.svg)](LICENSE)

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
- [Sprite-vue](http://vue.spritejs.org). Work with [Vue](https://github.com/vuejs/vue).
- [Sprite-React](http://react.spritejs.org). Work with [React](https://github.com/vuejs/react).
- [微信小程序](https://github.com/spritejs/sprite-wxapp)

## Quick Start

**SpriteJS** - spritejs.org

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

**React JSX** - react.spritejs.org

```jsx
<Scene id="container">
  <layer>
    <sprite
      textures={imgUrl}
      bgcolor="#fff"
      pos={[0,0]}
      size={[400, 400]}
      borderRadius="200"
    />
  </layer>
</Scene>
```

**Vue Component** - vue.spritejs.org

```xml
<template>
  <scene id="container" :viewport="[300, 300]">
    <layer>
      <sprite
        :textures="imgUrl"
        bgcolor="#fff"
        :pos="[0,0]"
        :size="[400, 400]"
        borderRadius="200"
      />
    </layer>
  </scene>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: 'https://s5.ssl.qhres.com/static/ec9f373a383d7664.svg'
    }
  }
}
</script>
```

<div style="font-size: 1.5rem">Learn more at <strong style="font-size: 2.5rem"><a href="http://spritejs.org/"><font size="36">spritejs.org</font></a></strong> </div>

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->

| [<img src="https://avatars2.githubusercontent.com/u/12529206?s=460&v=4" width="60px;"/><br /><sub><b>betseyliu</b></sub>](https://github.com/betseyliu)<br />[💻](https://github.com/spritejs/spritejs/commits?author=betseyliu "Code") [📖](https://github.com/spritejs/spritejs/commits?author=betseyliu "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/11631503?s=460&v=4" width="60px;"/><br /><sub><b>Shero0311</b></sub>](https://github.com/Shero0311)<br />[📖](https://github.com/spritejs/spritejs/commits?author=Shero0311 "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/16967069?s=460&v=4" width="60px;"/><br /><sub><b>有马</b></sub>](https://github.com/makeco)<br />[📖](https://github.com/spritejs/spritejs/commits?author=makeco "Documentation") [💻](https://github.com/spritejs/spritejs/commit/e2ef39bafd81ee09494f5ebbaf0f8319dbd85122 "Code")| [<img src="https://avatars1.githubusercontent.com/u/8180186?s=400&v=4" width="60px;"/><br /><sub><b>文蔺</b></sub>](https://github.com/AngusFu)<br />[💻](https://github.com/spritejs/spritejs/commits?author=AngusFu "Code") [🐛](https://github.com/spritejs/spritejs/issues/30 "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/5996758?s=400&v=4" width="60px;"/><br /><sub><b>蔡斯杰</b></sub>](https://github.com/SijieCai)<br />[💻](https://github.com/spritejs/sprite-core/commits?author=SijieCai "Code") [📖](https://github.com/spritejs/spritejs/commits?author=SijieCai "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/726566?s=400&v=4" width="60px;"/><br /><sub><b>Shaofei Cheng</b></sub>](https://github.com/wintercn)<br />[💻](https://github.com/spritejs/sprite-core/commits?author=wintercn "Code") [📖](https://github.com/spritejs/spritejs/commits?author=wintercn "Documentation") | 
| :---: | :---: | :---: | :---: | :---: | :---: | 

| [<img src="https://avatars2.githubusercontent.com/u/424491?s=400&v=4" width="60px;"/><br /><sub><b>公子</b></sub>](https://github.com/lizheming)<br />[💻](https://github.com/spritejs/sprite-core/commits?author=lizheming "Code") |  [<img src="https://avatars1.githubusercontent.com/u/26452939?s=400&v=4" width="60px;"/><br /><sub><b>justemit</b></sub>](https://github.com/justemit)<br />[💻](https://github.com/spritejs/sprite-extend-shapes/commits?author=justemit "Code")  [📖](https://github.com/spritejs/sprite-extend-shapes/commits?author=justemit "Documentation") [🐛](https://github.com/spritejs/sprite-core/issues/34 "Bug reports") | [<img src="https://avatars2.githubusercontent.com/u/40935?s=400&v=4" width="60px;"/><br /><sub><b>Welefen Lee</b></sub>](https://github.com/welefen)<br />[💻](https://github.com/spritejs/sprite-flex-layout "Code")   | [<img src="https://avatars2.githubusercontent.com/u/30425185?s=400&v=4" width="60px;"/><br /><sub><b>YUPENG12138</b></sub>](https://github.com/YUPENG12138)<br />[📖](https://github.com/spritejs/spritejs/issues/52 "Documentation")| [<img src="https://avatars1.githubusercontent.com/u/1617414?s=400&v=4" width="60px;"/><br /><sub><b>xinde</b></sub>](https://github.com/xinde)<br />[🐛](https://github.com/spritejs/spritejs/issues/59 "Bug reports")| [<img src="https://avatars2.githubusercontent.com/u/13284749?s=400&v=4" width="60px;"/><br /><sub><b>ggvswild</b></sub>](https://github.com/ggvswild)<br />[🐛](https://github.com/spritejs/spritejs/issues/70 "Bug reports")|
| :---: | :---: | :---: | :---: | :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT](LICENSE)
