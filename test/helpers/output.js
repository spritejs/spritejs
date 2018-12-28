const {wait} = require('./index');

const {Scene, Sprite} = require('../../lib');
const drawCase = require('./drawcase');

drawCase('red-block-150', () => {
  const scene = new Scene('#test', {
    resolution: [300, 300],
    viewport: [150, 150],
  });
  const sprite = new Sprite();
  sprite.attr({
    size: [300, 300],
    bgcolor: 'red',
  });
  // console.log(scene.viewport)
  scene.layer().append(sprite);

  return scene;
});

drawCase('scene-scale-150-300', () => {
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

  return scene;
});

drawCase('scene-stick-750-width', () => {
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

  return scene;
});

drawCase('scene-stick-750-height', () => {
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

  return scene;
});

drawCase('scene-stick-750-top', () => {
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

  return scene;
});

drawCase('scene-stick-750-left', () => {
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

  return scene;
});

drawCase('scene-stick-750-right', () => {
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

  return scene;
});

drawCase('scene-stick-750-bottom', () => {
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

  return scene;
});

drawCase('scene-bg-fg-2', () => {
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

  return scene;
});

drawCase('scene-bg-fg', () => {
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

  return scene;
});

drawCase('scene-bg-fg-removed', async () => {
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

  await fglayer.prepareRender();

  scene.removeLayer(bglayer);

  return scene;
});

drawCase('scene-loadframes', async () => {
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
  return scene;
});

drawCase('scene-loadframes-2', async () => {
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

  return scene;
});


drawCase('scene-preload', async () => {
  const scene = new Scene('#preload-many', {viewport: [770, 300], resolution: [1540, 600]});
  const layer = scene.layer();
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
    'https://p4.ssl.qhimg.com/t01feb50457ebbada10.jpg',
  ];
  async function loadRes() {
    scene.on('preload', (evt) => {
      console.log(`加载中... ${evt.loaded.length} / ${evt.resources.length}`); // eslint-disable-line no-console
    });

    const imgs = await scene.preload(...images);

    imgs.forEach(({texture}) => {
      const i = images.indexOf(texture.src);
      const sprite = new Sprite();
      sprite.attr({
        textures: [texture],
        x: 125 + (i % 8) * 170,
        y: 100 + Math.floor(i / 8) * 200,
        size: [150, 150],
      });
      layer.append(sprite);
    });
  }
  await loadRes();

  return scene;
});

drawCase('scene-robot', async () => {
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

  while(robot.contentSize[0] === 0) {
    await wait(100); // eslint-disable-line no-await-in-loop
  }
  return scene;
});

drawCase('scene-snapshot', async () => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [600, 600],
  });
  const robot = new Sprite('https://p0.ssl.qhimg.com/t01a72262146b87165f.png');
  robot.attr({
    id: 'robot',
    anchor: 0.5,
    pos: [150, 150],
  });
  const layer = scene.layer('layer1');
  layer.append(robot);

  // await for load image
  let i = 0;
  while(i++ < 100 && robot.contentSize[0] === 0) {
    await wait(100); // eslint-disable-line no-await-in-loop
  }

  const snapshot = await layer.takeSnapshot();
  const layer2 = scene.layer('layer2');
  layer2.putSnapshot(snapshot);
  scene.removeChild(layer);

  const robot2 = layer2.querySelector('#robot');
  robot2.attr({
    rotate: 45,
  });

  return scene;
});

drawCase('background-image', async () => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [600, 600],
  });
  await scene.preload('https://p3.ssl.qhimg.com/t01f0e5810120ea0cf0.jpg');
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
  return scene;
});