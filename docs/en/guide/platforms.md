## Server Side Rendering

SpriteJS<sup>Next</sup> supports server-side rendering through [node canvas](https://github.com/Automattic/node-canvas), that is to say, we can use SpriteJS in node environment then save the drawn figure as PNG, or save the animation as GIF.

```js
const fs = require('fs');
const {Container} = require('../lib/polyfill/node-canvas');
const {Scene, Sprite} = require('../lib');

const container = new Container(512, 512);
const scene = new Scene({container});
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