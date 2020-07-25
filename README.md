<p align="center">
  <a href="http://spritejs.org"><img src="https://p2.ssl.qhimg.com/t01e6920579715cc92b.jpg" alt="spritejs logo"/></a>
</p>

<a href="http://spritejs.org"><h1 align="center">spritejs.org</h1></a>

[![npm status](https://img.shields.io/npm/v/spritejs.svg)](https://www.npmjs.org/package/spritejs)
[![build status](https://api.travis-ci.org/spritejs/spritejs.svg?branch=master)](https://travis-ci.org/spritejs/spritejs)
[![dependency status](https://david-dm.org/spritejs/spritejs.svg)](https://david-dm.org/spritejs/spritejs)
[![Package Quality](http://npm.packagequality.com/shield/spritejs.svg?v=3)](http://packagequality.com/#?package=spritejs)
[![Maintainability](https://api.codeclimate.com/v1/badges/8327f502ee8ba003c6b8/maintainability)](https://codeclimate.com/github/spritejs/spritejs/maintainability)
[![License](https://img.shields.io/npm/l/spritejs.svg)](LICENSE)

Spritejs is a cross platform high-performance graphics system, which can render graphics on web, node, desktop applications and mini-programs.

Spritejs<sup>Next</sup> is the new version of spritejs. It is renderer agnostic enabling the same api to render in multiple contexts: webgl2, webgl, and canvas2d.

Manipulate the **sprites** in canvas as you do with the DOM elements.

## Features

- Manipulate the sprites element as you do with the DOM elements.
- Rendering by **WebGL2** context.
- Multiple layers.
- DOM Events.
- Object Oriented Programmed Development with ES6+.
- OffscreenCanvas and [Web Worker](https://next.spritejs.org/#/en/guide/worker).
- Work with [d3](https://github.com/d3/d3).
- [Server-side rendering](https://next.spritejs.org/#/en/guide/platforms).
- [Vue](http://vue.spritejs.org).

## Quick Start

**SpriteJS** - spritejs.org

```html
<script src="https://unpkg.com/spritejs@3/dist/spritejs.min.js"></script>
<div id="container" style="width:400px;height:400px"></div>
<script>
    const imgUrl = 'https://s5.ssl.qhres.com/static/ec9f373a383d7664.svg'
    const {Scene, Sprite} = spritejs;
    const container = document.getElementById('container');
    const paper = new Scene({
      container,
      width: 400,
      height: 400,
    })

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

<div style="font-size: 1.5rem">Learn more at <strong style="font-size: 2.5rem"><a href="http://spritejs.org/"><font size="36">spritejs.org</font></a></strong> </div>

## Usage

In browser:

```html
<script src="https://unpkg.com/spritejs@3/dist/spritejs.min.js"></script>
```

With Node.js:

```bash
npm install spritejs --save
```

```js
import * as spritejs from 'spritejs';
```

## 3D

SpriteJS<sup>Next</sup> can render 3D elements through [3D extension library](https://github.com/spritejs/sprite-extend-3d).

```html
<script src="https://unpkg.com/spritejs@3/dist/spritejs.es.min.js"></script>
<script src="https://unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.js"></script>
```

Or from NPM


```js
import {Scene} from 'spritejs';
import {Cube, shaders} from 'sprite-extend-3d';
```

## Examples

### Basic

- [Overview](http://spritejs.org/demo/)
- [Sprites](http://spritejs.org/demo/#basic_sprites)
- [Path & Group](http://spritejs.org/demo/#path_groups)
- [Labels](http://spritejs.org/demo/#labels)
- [Button](http://spritejs.org/demo/#button)
- [Transforms](http://spritejs.org/demo/#transforms)
- [Events](http://spritejs.org/demo/#events)
- [Filters](http://spritejs.org/demo/#filters)
- [Animations](http://spritejs.org/demo/#animations)
- [SVG Paths](http://spritejs.org/demo/#svg_path)
- [Offset API](http://spritejs.org/demo/#offset_api)

### With D3

Compatible with [d3.js](https://github.com/d3/d3).

- [Bar Graph](http://spritejs.org/demo/#/d3/bar)
- [Hierarchy](http://spritejs.org/demo/#/d3/hierarchy)
- [Map](http://spritejs.org/demo/#/d3/map)
- [Force Links](http://spritejs.org/demo/#/d3/links)

### 3D Extension

- [3D Cube](http://spritejs.org/demo/#/3d/basic)
- [Camera](http://spritejs.org/demo/#/3d/camera2)
- [Cube Map](http://spritejs.org/demo/#/3d/cubemap)
- [Physically Based Rendering](http://spritejs.org/demo/#/3d/pbr)
- [Geometry](http://spritejs.org/demo/#/3d/geometry)
- [Geometry Model](http://spritejs.org/demo/#/3d/geometry3)
- [Model & Texture](http://spritejs.org/demo/#/3d/model_texture)
- [Groups](http://spritejs.org/demo/#/3d/group3)
- [Skydom](http://spritejs.org/demo/#/3d/skydom)
- [Video](http://spritejs.org/demo/#/3d/video)
- [Shadow](http://spritejs.org/demo/#/3d/shadow)
- [Post channel](http://spritejs.org/demo/#/3d/post)
- [GPGPU](http://spritejs.org/demo/#/3d/gpgpu)

### [Q-Charts](https://github.com/spritejs/q-charts)

A visulization library based on spritejs.

- [QCharts basic](http://spritejs.org/demo/#/qchart/basic)
- [Lines](http://spritejs.org/demo/#/qchart/double_line)
- [Smooth Lines](http://spritejs.org/demo/#/qchart/smooth_line)
- [Lines & Bars](http://spritejs.org/demo/#/qchart/multicharts)
- [Area Chart](http://spritejs.org/demo/#/qchart/area)
- [Pie Chart](http://spritejs.org/demo/#/qchart/pie)
- [Rose Chart](http://spritejs.org/demo/#/qchart/rose)
- [Radar Chart](http://spritejs.org/demo/#/qchart/radar)
- [Bubble Chart](http://spritejs.org/demo/#/qchart/bubble)

<!-- ### With Proton

[Proton](https://github.com/a-jie/Proton) is a lightweight and powerful javascript particle engine. 

- [Big Fire](http://spritejs.org/demo/#/proton/fire)
- [Background Particles](http://spritejs.org/demo/#/proton/position)
- [Custom Behavior](http://spritejs.org/demo/#/proton/behavior)

### With Matter-js

[Matter.js]((https://github.com/liabru/matter-js)) is a JavaScript 2D rigid body physics engine.

- [Mixed shapes](http://spritejs.org/demo/#/matterjs/mixed_shapes)

-->

### Ecosystem & Extensions

| **Project**                         | **Description**                           |
| ------------------------------- | ----------------------------------- |
| [sprite-vue](https://github.com/spritejs/sprite-vue)| SpriteJS for Vue.js. |
| [sprite-react](https://github.com/spritejs/sprite-react)| Rendering spritejs elements with React. |
| [q-charts](https://github.com/spritejs/q-charts) | A visulization library based on spritejs |
| [cat-charts-vue](https://github.com/spritejs/cat-charts-vue)| A visulization library based on spritejs , qcharts and Vue. |

## Architecture

Spritejs<sup>Next</sup> provides several kinds of basic sprite elements, which can be operated on the layer like DOM elements.

![架构图](https://s0.ssl.qhres.com/static/fe2ee3b6fd1aa59f.svg)

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

# V2

[SpriteJS v2.0](https://github.com/spritejs/spritejs/tree/v2)

# Compatibility

Compatible for most modern browsers.

You should import [babel-polyfill](https://cdn.baomitu.com/babel-polyfill) for early browers(i.e. iOS 8).

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->

| | | | | | | |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/12529206?s=460&v=4" width="60px;"/><br /><sub><b>betseyliu</b></sub>](https://github.com/betseyliu)<br />[💻](https://github.com/spritejs/spritejs/commits?author=betseyliu "Code") [📖](https://github.com/spritejs/spritejs/commits?author=betseyliu "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/11631503?s=460&v=4" width="60px;"/><br /><sub><b>Shero0311</b></sub>](https://github.com/Shero0311)<br />[📖](https://github.com/spritejs/spritejs/commits?author=Shero0311 "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/16967069?s=460&v=4" width="60px;"/><br /><sub><b>有马</b></sub>](https://github.com/makeco)<br />[📖](https://github.com/spritejs/spritejs/commits?author=makeco "Documentation") [💻](https://github.com/spritejs/spritejs/commit/e2ef39bafd81ee09494f5ebbaf0f8319dbd85122 "Code")| [<img src="https://avatars1.githubusercontent.com/u/8180186?s=400&v=4" width="60px;"/><br /><sub><b>文蔺</b></sub>](https://github.com/AngusFu)<br />[💻](https://github.com/spritejs/spritejs/commits?author=AngusFu "Code") [🐛](https://github.com/spritejs/spritejs/issues/30 "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/5996758?s=400&v=4" width="60px;"/><br /><sub><b>蔡斯杰</b></sub>](https://github.com/SijieCai)<br />[💻](https://github.com/spritejs/sprite-core/commits?author=SijieCai "Code") [📖](https://github.com/spritejs/spritejs/commits?author=SijieCai "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/726566?s=400&v=4" width="60px;"/><br /><sub><b>Shaofei Cheng</b></sub>](https://github.com/wintercn)<br />[💻](https://github.com/spritejs/sprite-core/commits?author=wintercn "Code") [📖](https://github.com/spritejs/spritejs/commits?author=wintercn "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/2947893?s=400&v=4" width="60px;"/><br /><sub><b>摇太阳</b></sub>](https://github.com/yaotaiyang)<br />[📖](https://github.com/spritejs/spritejs/commits?author=yaotaiyang "Documentation")  
| [<img src="https://avatars2.githubusercontent.com/u/424491?s=400&v=4" width="60px;"/><br /><sub><b>公子</b></sub>](https://github.com/lizheming)<br />[💻](https://github.com/spritejs/sprite-core/commits?author=lizheming "Code") |  [<img src="https://avatars1.githubusercontent.com/u/26452939?s=400&v=4" width="60px;"/><br /><sub><b>justemit</b></sub>](https://github.com/justemit)<br />[💻](https://github.com/spritejs/sprite-extend-shapes/commits?author=justemit "Code")  [📖](https://github.com/spritejs/sprite-extend-shapes/commits?author=justemit "Documentation") [🐛](https://github.com/spritejs/sprite-core/issues/34 "Bug reports") | [<img src="https://avatars2.githubusercontent.com/u/40935?s=400&v=4" width="60px;"/><br /><sub><b>Welefen Lee</b></sub>](https://github.com/welefen)<br />[💻](https://github.com/spritejs/sprite-flex-layout "Code")   | [<img src="https://avatars2.githubusercontent.com/u/30425185?s=400&v=4" width="60px;"/><br /><sub><b>YUPENG12138</b></sub>](https://github.com/YUPENG12138)<br />[📖](https://github.com/spritejs/spritejs/issues/52 "Documentation")| [<img src="https://avatars1.githubusercontent.com/u/1617414?s=400&v=4" width="60px;"/><br /><sub><b>xinde</b></sub>](https://github.com/xinde)<br />[🐛](https://github.com/spritejs/spritejs/issues/59 "Bug reports")| [<img src="https://avatars2.githubusercontent.com/u/13284749?s=400&v=4" width="60px;"/><br /><sub><b>ggvswild</b></sub>](https://github.com/ggvswild)<br />[🐛](https://github.com/spritejs/spritejs/issues/70 "Bug reports")| [<img src="https://avatars2.githubusercontent.com/u/41336612?s=400&u=aef0eee102ca66f28c7cbd8769fa21be9dfe3697&v=4" width="60px;"/><br /><sub><b>liulinboyi</b></sub>](https://github.com/liulinboyi)<br />[💻](https://github.com/spritejs/spritejs/commits?author=liulinboyi "Code")|
| [<img src="https://avatars3.githubusercontent.com/u/22330483?s=400&u=93fe7b2234377c1f55feb81811354ed5af80e0c5&v=4" width="60px;"/><br /><sub><b>Lulzx</b></sub>](https://github.com/Lulzx)<br />[💻](https://github.com/spritejs/sprite-core/commits?author=Lulzx "Code") |  [<img src="https://avatars3.githubusercontent.com/u/63718466?s=400&u=4836efce7fc68af52a4449e95e920da9ad1df34f&v=4" width="60px;"/><br /><sub><b>asidar</b></sub>](https://github.com/asidar)<br />[💻](https://github.com/spritejs/sprite-extend-shapes/commits?author=asidar "Code")  | [<img src="https://avatars2.githubusercontent.com/u/1798972?s=400&u=36d324fd75d4f4fb14992dff084e4c013c8dc214&v=4" width="60px;"/><br /><sub><b>alphatr</b></sub>](https://github.com/alphatr)<br />[💻](https://github.com/spritejs/sprite-extend-shapes/commits?author=alphatr "Code")   | [<img src="https://avatars2.githubusercontent.com/u/30466018?s=400&u=e35b17b9772b1ed63f3b0c5897f3076e94a426ed&v=4" width="60px;"/><br /><sub><b>W-Qing</b></sub>](https://github.com/W-Qing)<br />[📖](https://github.com/spritejs/spritejs/commits?author=W-Qing "Documentation") |


<!-- ALL-CONTRIBUTORS-LIST:END -->

## Credits and Acknowledgements

- [svg-path-contours](https://github.com/mattdesl/svg-path-contours) Approximates an SVG path into a discrete list of 2D contours (polylines). 

- [extrude-polyline](https://github.com/mattdesl/extrude-polyline) Extrudes a 2D polyline with a given line thickness and the desired join/cap types. 

- [triangulate-contours](https://github.com/mattdesl/triangulate-contours) Triangulates a series of contours using Tess2.js. 

- [OGL](https://github.com/oframe/ogl) OGL is a small, effective WebGL library aimed at developers who like minimal layers of abstraction, and are comfortable creating their own shaders.

## License

[MIT](LICENSE)
