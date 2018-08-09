import {compare} from './helpers';
import {Paper2D, Scene, Layer, Sprite} from '../src';
const test = require('ava');

test('red-block-150', async (t) => {
  const scene = Paper2D('#test', {
    resolution: [300, 300],
    viewport: [150, 150],
  });
  const sprite = new Sprite();
  sprite.attr({
    size: [300, 300],
    bgcolor: 'red',
  });

  scene.layer().append(sprite);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'red-block-150');
  t.truthy(isEqual);

  const pos = scene.layer().toLocalPos(100, 100);
  t.deepEqual(pos, [200, 200]);

  t.is(scene.width, 150);
  t.is(scene.height, 150);

  // d3 friendly
  const layer = scene.ownerDocument.createElementNS('', 'mylayer');
  t.is(layer.id, 'mylayer');
});

test('scene-scale-150-300', async (t) => {
  const scene = new Scene('#test', {
    resolution: [300, 300],
    viewport: [150, 300],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [150, 150],
    size: [50, 50],
    bgcolor: 'blue',
  });
  scene.layer().append(block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-scale-150-300');
  t.truthy(isEqual);
});

test('scene-stick-750-width', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'width',
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-width');
  t.truthy(isEqual);
});

test('scene-stick-750-height', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'height',
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-height');
  t.truthy(isEqual);
});

test('scene-stick-750-left', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'left',
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-left');
  t.truthy(isEqual);
});

test('scene-stick-750-right', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'right',
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-right');
  t.truthy(isEqual);
});

test('scene-stick-750-top', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'top',
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-top');
  t.truthy(isEqual);
});

test('scene-stick-750-bottom', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'bottom',
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-bottom');
  t.truthy(isEqual);
});

test('scene-stick-750-width-extend', async (t) => {
  t.plan(6);
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'width',
    stickExtend: true,
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  scene.layer().on('click', (evt) => {
    console.log('clicked', evt.x, evt.y); // eslint-disable-line no-console
    t.truthy(evt.x === 100);
    t.truthy(evt.y === 100 || evt.y === -100);
  });

  scene.dispatchEvent('click', {x: 100, y: 100});
  scene.dispatchEvent('click', {x: 100, y: -100});
  scene.dispatchEvent('click', {x: -100, y: -100});
  scene.dispatchEvent('click', {x: 100, y: -1000});

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-width', true);
  t.truthy(isEqual);

  t.deepEqual(scene.layerViewport, scene.viewport);
});

test('scene-stick-750-height-extend', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'height',
    stickExtend: true,
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-height');
  t.truthy(isEqual);
});

test('scene-stick-750-left-extend', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'left',
    stickExtend: true,
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-left');
  t.truthy(isEqual);
});

test('scene-stick-750-right-extend', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'right',
    stickExtend: true,
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-right');
  t.truthy(isEqual);
});

test('scene-stick-750-top-extend', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'top',
    stickExtend: true,
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-top');
  t.truthy(isEqual);
});

test('scene-stick-750-bottom-extend', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'bottom',
    stickExtend: true,
  });
  const frame = new Sprite();
  frame.attr({
    anchor: 0.5,
    size: [1170, 1170],
    pos: [600, 600],
    border: [10, 'grey'],
  });
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
  });
  scene.layer().append(frame, block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-stick-750-bottom');
  t.truthy(isEqual);
});

test('scene-bg-fg', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'width',
  });

  const circle = new Sprite();
  circle.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [500, 500],
    borderRadius: 250,
    bgcolor: 'rgba(0, 0, 192, 0.3)',
  });
  scene.layer('bglayer').append(circle);

  const fglayer = scene.layer('fglayer');
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
    rotate: 45,
  });
  fglayer.append(block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-bg-fg');
  t.truthy(isEqual);
});

test('scene-bg-fg-2', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'width',
  });

  const circle = new Sprite();
  circle.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [500, 500],
    borderRadius: 250,
    bgcolor: 'rgba(0, 0, 192, 0.3)',
  });
  scene.layer('bglayer').append(circle);

  const fglayer = scene.layer('fglayer', -1);
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
    rotate: 45,
  });
  fglayer.append(block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-bg-fg-2');
  t.truthy(isEqual);
});

test('scene-bg-fg-3', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'width',
  });

  const circle = new Sprite();
  circle.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [500, 500],
    borderRadius: 250,
    bgcolor: 'rgba(0, 0, 192, 0.3)',
  });
  const bglayer = scene.layer('bglayer');
  bglayer.append(circle);

  const fglayer = new Layer('fglayer');
  scene.insertBefore(fglayer, bglayer);

  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
    rotate: 45,
  });
  fglayer.append(block);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-bg-fg-2');
  t.truthy(isEqual);

  t.throws(() => scene.insertBefore(fglayer, new Layer()));
});

test('scene-bg-fg-removed', async (t) => {
  const scene = new Scene('#container', {
    resolution: [1200, 1200],
    viewport: [750, 1334],
    stickMode: 'width',
  });

  const circle = new Sprite();
  circle.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [500, 500],
    borderRadius: 250,
    bgcolor: 'rgba(0, 0, 192, 0.3)',
  });
  scene.layer('bglayer').append(circle);

  const fglayer = scene.layer('fglayer');
  const block = new Sprite();
  block.attr({
    anchor: 0.5,
    pos: [600, 600],
    size: [150, 150],
    bgcolor: 'red',
    rotate: 45,
  });
  fglayer.append(block);

  t.is(scene.layers.length, 2);

  scene.removeChild('bglayer');

  t.is(scene.layers.length, 1);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-bg-fg-removed');
  t.truthy(isEqual);

  t.throws(() => {
    const layer = new Layer('fglayer');
    scene.appendChild(layer);
  });
});

test('scene-loadframes', async (t) => {
  const scene = new Scene('#preload-many', {viewport: [600, 600], resolution: [1200, 1200]});
  await scene.preload([
    'https://p3.ssl.qhimg.com/t010ded517024020e10.png',
    'https://s1.ssl.qhres.com/static/6ead70a354da7aa4.json',
  ]);

  const ground = new Sprite();
  ground.attr({
    anchor: [0.5, 0],
    size: [700, 30],
    pos: [600, 830],
    bgcolor: '#c93',
    borderRadius: 15,
  });
  scene.layer().append(ground);

  const head = new Sprite('head.png');
  head.attr({
    pos: [606, 0],
  });

  const neck = new Sprite('neck.png');
  neck.attr({
    pos: [626, 68],
    zIndex: -1,
  });

  const body = new Sprite('body.png');
  body.attr({
    pos: [606, 73],
  });

  const leftArm = new Sprite('arm-1.png');
  leftArm.attr({
    pos: [600, 73],
  });

  const rightArm = new Sprite('arm-2.png');
  rightArm.attr({
    pos: [675, 73],
  })

  ;[head, neck, body, leftArm, rightArm].forEach((s) => {
    s.attr({
      y: y => y + 700,
    });
  });

  scene.layer().append(head, neck, body, leftArm, rightArm);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-loadframes');
  t.truthy(isEqual);
});

test('scene-loadframes-2', async (t) => {
  const scene = new Scene('#preload-many', {viewport: [600, 600], resolution: [1200, 1200]});
  await scene.preload([
    'https://p3.ssl.qhimg.com/t017baa4debc87f4320.png',
    'https://s1.ssl.qhres.com/static/337f0a0d2d7e9f34.json',
  ]);

  const lambda = new Sprite('ramda.png');
  lambda.attr({
    anchor: [0.5, 0],
    pos: [600, 600],
  });
  scene.layer().append(lambda);

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-loadframes-2');
  t.truthy(isEqual);
});


test('scene-preload', async (t) => {
  const scene = new Scene('#preload-many');

  const layer = scene.layer();

  scene.setViewport(770, 300);
  scene.setResolution(1540, 600);

  const images = [
    'https://p1.ssl.qhimg.com/t016dc86e4b2c9b83a4.jpg',
    'https://p0.ssl.qhimg.com/t01408bb4e2bed11d2e.jpg',
    'https://p2.ssl.qhimg.com/t014e6d3eddccf40638.jpg',
    'https://p2.ssl.qhimg.com/t014db3a8e2bf146c5b.jpg',
    'https://p4.ssl.qhimg.com/t01ff1bf2a37a741821.jpg',
    'https://p2.ssl.qhimg.com/t01dc1341ab5d0fe663.jpg',
    'https://p5.ssl.qhimg.com/t01a0acf6aa37d00f91.jpg',
    'https://p1.ssl.qhimg.com/t013b8514570a69a1c8.jpg',
    'https://p2.ssl.qhimg.com/t011c71494e6d98d92b.jpg',
    'https://p4.ssl.qhimg.com/t01ab40609e924d995c.jpg',
    'https://p0.ssl.qhimg.com/t01794495bebb84f47d.jpg',
    'https://p4.ssl.qhimg.com/t01a30bb66a9d11d624.jpg',
    'https://p4.ssl.qhimg.com/t01b3d2c0b0093a957d.jpg',
    'https://p0.ssl.qhimg.com/t010da5e7311c8dd3a9.jpg',
    'https://p5.ssl.qhimg.com/t0189dd547c322b2357.jpg',
    {id: 'foo', src: 'https://p4.ssl.qhimg.com/t01feb50457ebbada10.jpg'},
  ];
  async function loadRes() {
    scene.on('preload', (evt) => {
      console.log(`加载中... ${evt.loaded.length} / ${evt.resources.length}`); // eslint-disable-line no-console
    });

    const imgs = await scene.preload(...images);

    imgs.forEach(({texture}) => {
      let i = images.indexOf(texture.src);
      if(i === -1) {
        i = images.length - 1;
      }
      const sprite = new Sprite();
      sprite.attr({
        textures: [texture],
        x: 125 + (i % 8) * 170,
        y: 100 + Math.floor(i / 8) * 200,
        size: [150, 150],
      });
      layer.append(sprite);

      if(i === 0) {
        sprite.on('click', (evt) => {
          console.log('sprite clicked!'); // eslint-disable-line no-console
          t.is(evt.target, sprite);
          if(evt.originalY === 110) {
            sprite.off('click');
          }
        });
      }
    });
  }
  await loadRes();

  const canvas = await scene.snapshot();

  const isEqual = await compare(canvas, 'scene-preload');
  t.truthy(isEqual);

  scene.dispatchEvent('click', {x: 130, y: 110});
  scene.dispatchEvent('click', {originalX: 130, originalY: 110});
  scene.dispatchEvent('click', {originalX: 130, originalY: 110}); // no trigger
});
