const fs = require('fs');
const {polyfill} = require('../lib/platform/node-canvas');
const {Scene, Sprite, ENV} = require('../lib');

polyfill({ENV});

const scene = new Scene({width: 512, height: 512});
const contextType = 'webgl';
const fglayer = scene.layer('fglayer', {
  contextType,
});
const url = 'https://p0.ssl.qhimg.com/t01a72262146b87165f.png';

(async function () {
  await scene.preload({id: 'robot', src: url});

  // const ss = new Sprite();
  // ss.attr({
  //   pos: [0, 0],
  //   size: [512, 512],
  //   bgcolor: 'rgba(255,255,255,0.5)',
  // });

  // fglayer.append(ss);

  const sprite = new Sprite();
  sprite.attr({
    pos: [256, 256],
    size: [100, 100],
    anchor: 0.5,
    bgcolor: 'rgba(255, 0, 0, 0.5)',
    // bgcolor: 'red',
    // opacity: 1.0,
    filter: 'grayscale(0.5)',
    texture: 'robot',
  });

  fglayer.append(sprite);

  const s2 = sprite.cloneNode();
  s2.attr({
    rotate: 45,
    bgcolor: 'rgba(0, 0, 255, 0.5)',
    // opacity: 0.3,
  });

  fglayer.append(s2);

  // await fglayer.prepareRender;

  const canvas = scene.snapshot();
  fs.writeFileSync(`snap.${contextType}.png`, canvas.toBuffer());
}());
