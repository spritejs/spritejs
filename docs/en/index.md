## Introduction

Spritejs is a cross platform high-performance graphics system, which can rendering graphics on web, node, desktop applications and mini-programs.

Spritejs<sup>Next</sup> is the new version of spritejs. It is renderer agnostic enabling the same api to render in multiple contexts: webgl2, webgl, and canvas2d.

## Features

- Manipulate the sprites element as you do with the DOM elements.
- Rendering by **WebGL2** context.
- Multiple layers.
- DOM Events.
- Object Oriented Programmed Development with ES6+.
- OffscreenCanvas and [Web Worker](/en/guide/worker).
- Work with [d3](https://github.com/d3/d3).
- [Server-side rendering](/en/guide/platforms).
- [Vue](http://vue.spritejs.org).

## Usage

With NPM:

```bash
npm install @spritejs/next
```

Spritejs is cross platform. you can run it in a node environment, depend on [node canvas](https://github.com/automatic/node-canvas) or [node canvas webgl](https://github.com/akira-cn/node-canvas-webgl).

```bash
npm install canvas@next
```

In browser with CDN:

```html
<script src="https://unpkg.com/@spritejs/next/dist/spritejs.js"></script>
```

## Architecture

Spritejs<sup>Next</sup> provides several kinds of basic sprite elements, which can be operated on the layer like DOM elements.


![架构图](../assets/image/sprites.svg)

## Major differences between 2.x and 3.x

### Enhanced

- More elements
  - Add up more elements such as Polyline, Ellipse, Arc, Ring, Regular, Triangle, Rect, etc.
  - The elements are divided into two categories: block and path, which have different box models and rendering strategies.

- Enable WebGL2 rendering by default.
  - The rendering performance is greatly improved.

- Workers / Multithreads
  - You can use LayerWorker object to let different layers run in different threads.

### Strategy change

- Simplified scene adaptation
  - Remove the old resolution and viewport configuration, simplify it to width and height. By default, viewport adapts automatically according to the container.
  - The adaptation modes are simplified to: `static, scale, stickywidth, stickyheight, stickytop, stickybottom, stickyleft` and `stickyright`.

### Weakening

- Removed multiline text and text typesetting.
- Remove layout strategies.
- Remove css support.

## Basic

```js
const {Scene, Sprite} = spritejs;

const container = document.querySelector('#stage');
const scene = new Scene({container, width: 3080, height: 800, mode: 'stickyTop'});

const layer = scene.layer();

const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png');

robot.attr({
  anchor: [0, 0.5],
  pos: [0, 0],
});

robot.animate([
  {pos: [0, 0]},
  {pos: [0, 300]},
  {pos: [2700, 300]},
  {pos: [2700, 0]},
], {
  duration: 5000,
  iterations: Infinity,
  direction: 'alternate',
});

layer.append(robot);
```

[Online](http://next.spritejs.org/demo/#/doc/basic)

<iframe src="/demo/#/doc/basic" height="300"></iframe>

## License

MIT