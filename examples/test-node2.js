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