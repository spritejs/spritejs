import {compare, wait} from './helpers';
import {Scene, Sprite, Resource} from '../src';
import {loadImage} from '../src/platform';
const test = require('ava');

test('robot', async (t) => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [300, 300],
  });
  const robot = new Sprite('https://p0.ssl.qhimg.com/t01a72262146b87165f.png');
  robot.attr({
    anchor: 0.5,
    pos: [150, 150],
  });
  scene.layer().append(robot);

  // await for load image
  let i = 0;
  while(i++ < 100 && robot.contentSize[0] === 0) {
    await wait(100); // eslint-disable-line no-await-in-loop
  }
  t.deepEqual(robot.contentSize, [196, 256]);

  const canvas = await scene.snapshot();
  const isEqual = await compare(canvas, 'scene-robot');
  t.truthy(isEqual);
});

test('robot-load-img', async (t) => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [300, 300],
  });
  const image = await loadImage('https://p0.ssl.qhimg.com/t01a72262146b87165f.png');

  const robot = new Sprite();
  robot.attr({
    textures: image,
    anchor: 0.5,
    pos: [150, 150],
  });
  scene.layer().append(robot);

  t.deepEqual(robot.contentSize, [196, 256]);

  const canvas = await scene.snapshot();
  const isEqual = await compare(canvas, 'scene-robot');
  t.truthy(isEqual);
});

test('load-bgimg', async (t) => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [600, 600],
  });

  const s = new Sprite();
  s.attr({
    anchor: 0.5,
    border: [6, 'black'],
    pos: [300, 300],
    size: [300, 300],
    bgcolor: 'blue',
    bgimage: {
      src: 'https://p3.ssl.qhimg.com/t01f0e5810120ea0cf0.jpg',
      display: '.9',
      clip9: 64,
      // offset: [0, 50],
    },
  });
  const layer = scene.layer('layer1');
  layer.append(s);

  await Resource.loadTexture('https://p3.ssl.qhimg.com/t01f0e5810120ea0cf0.jpg');

  const canvas = await scene.snapshot();
  const isEqual = await compare(canvas, 'background-image');
  t.truthy(isEqual);
});

test('load-bgimg-2', async (t) => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [600, 600],
  });

  await Resource.loadTexture('https://p3.ssl.qhimg.com/t01f0e5810120ea0cf0.jpg');

  const s = new Sprite();
  s.attr({
    anchor: 0.5,
    border: [6, 'black'],
    pos: [300, 300],
    size: [300, 300],
    bgcolor: 'blue',
    bgimage: {
      id: 'https://p3.ssl.qhimg.com/t01f0e5810120ea0cf0.jpg',
      display: '.9',
      clip9: 64,
      // offset: [0, 50],
    },
  });
  const layer = scene.layer('layer1');
  layer.append(s);

  const canvas = await scene.snapshot();
  const isEqual = await compare(canvas, 'background-image');
  t.truthy(isEqual);
});
