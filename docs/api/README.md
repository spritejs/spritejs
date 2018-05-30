[![npm status](https://img.shields.io/npm/v/spritejs.svg)](https://www.npmjs.org/package/spritejs)
[![build status](https://api.travis-ci.org/spritejs/spritejs.svg?branch=master)](https://travis-ci.org/spritejs/spritejs) 
[![dependency status](https://david-dm.org/spritejs/spritejs.svg)](https://david-dm.org/spritejs/spritejs)
[![License](https://img.shields.io/npm/l/spritejs.svg)](LICENSE)

Sprite is a cross-platform Render Object Model System that let users manipulate drawing elements on canvas like HTML element on webpage.

It is can not only support web apps but also support node (use node-canvas) apps or other platforms like weixin apps.

## Fetures

- Manipulate the **sprites** element as you do with the DOM elements.
- Perform fast drawing with smart cache.
- Multiple layers.
- Controllable event dispatching.
- Object Oriented Programmed Development with ES6+
- [Server-side render](#server-side-render). Work with node-canvas.
- [Weixin app](https://github.com/spritejs/sprite-wxapp)

## Quick Look

```html
<script src="https://s4.ssl.qhres.com/!ce414b25/spritejs.min.js"></script>
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

## Loading and installing

In browser:

```html
<script src="https://s4.ssl.qhres.com/!ce414b25/spritejs.min.js"></script>
```

With Node:

```bash
npm install spritejs --save
```

```js
import {Scene, Sprite, Label, Path, Group} from 'spritejs'
```

### Server-side Render

Install dependencies

```bash
sudo apt-get install libcairo2-dev libjpeg-dev libpango1.0-dev librsvg2-dev libgif-dev build-essential g++
```

Install node-canvas

```bash
npm install canvas@next --save
```

Just use spritejs in normal way, spritejs will use node-canvas to create render context automatically.

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
