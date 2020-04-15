## Server Side Rendering

SpriteJS<sup>Next</sup> supports server-side rendering through [node-canvas-webgl](https://github.com/akira-cn/node-canvas-webgl), that is to say, we can use SpriteJS in node environment then save the drawn figure as PNG, or save the animation as GIF.

To use server-side rendering, install node-canvas-webgl first.

```bash
npm install node-canvas-webgl
```

Then load the polyfill in the lib directory to use it normally.

```js
const fs = require('fs');
const {polyfill} = require('../lib/platform/node-canvas');
const {Scene, Sprite, ENV} = require('../lib');

polyfill({ENV});

const scene = new Scene({width: 512, height: 512});
const fglayer = scene.layer('fglayer');
const url = 'https://p0.ssl.qhimg.com/t01a72262146b87165f.png';

const sprite = new Sprite();
sprite.attr({
  pos: [256, 256],
  size: [100, 100],
  anchor: 0.5,
  bgcolor: 'red',
  texture: url,
});

fglayer.append(sprite);

setTimeout(() => {
  const canvas = scene.snapshot();
  fs.writeFileSync('snap.png', canvas.toBuffer());
}, 1000);
```