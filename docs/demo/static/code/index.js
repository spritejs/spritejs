(async function () {
  const {Scene, Sprite, Group} = spritejs;
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]});

  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);

  const bglayer = scene.layer('bg', {
      handleEvent: false,
    }),
    fglayer = scene.layer('fg', {
      handleEvent: false,
      renderMode: 'repaintDirty',
    });

  const center = [600, 640];
  const region = new Group();

  region.attr({
    anchor: 0.5,
    size: [920, 920],
    pos: center,
    bgcolor: '#f4f2e6',
    borderRadius: 120,
  });
  bglayer.append(region);

  const robot = new Sprite('guanguan1.png');
  robot.attr({
    anchor: [0.5, 1],
    pos: [280, 600],
    transformOrigin: [0, -300],
    scale: 0.4,
  });
  fglayer.append(robot);

  async function robotMotion() {
    await robot.animate([
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png', scale: [-0.4, 0.4]},
      {textures: 'guanguan1.png', scale: [0.4, 0.4]},
    ], {
      duration: 3000,
      easing: 'step-end',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {y: 600},
      {y: 1280},
    ], {
      duration: 500,
      easing: 'ease-in',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {textures: 'guanguan1.png'},
      {textures: 'guanguan3.png', scale: [-0.4, 0.4]},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png', scale: [0.4, 0.4]},
    ], {
      duration: 2000,
      easing: 'step-end',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {x: 280},
      {x: 940},
    ], {
      duration: 2000,
      easing: 'ease-in-out',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {rotate: 0},
      {rotate: -70},
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      direction: 'alternate',
      iterations: 2,
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {textures: 'guanguan3.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan3.png'},
    ], {
      duration: 2500,
      easing: 'step-end',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {rotate: 0},
      {rotate: -70},
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      direction: 'alternate',
      iterations: 2,
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {textures: 'guanguan3.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan3.png', scale: [-0.4, 0.4]},
    ], {
      duration: 2500,
      easing: 'step-end',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {x: 940},
      {x: 280, offset: 0.99, scale: [-0.4, 0.4]},
      {x: 280, scale: [0.4, 0.4]},
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {x: 280, y: 1280, rotate: 0},
      {x: 940, y: 1280, rotate: 0, offset: 0.3},
      {x: 940, y: 1280, rotate: -90, offset: 0.35},
      {x: 940, y: 600, rotate: -90, offset: 0.65},
      {x: 940, y: 600, rotate: -180, offset: 0.7},
      {x: 280, y: 600, rotate: -180},
    ], {
      delay: 500,
      duration: 3500,
      easing: 'ease-in',
      fill: 'forwards',
    }).finished;

    robot.attr({
      textures: 'guanguan1.png',
    });

    await robot.animate([
      {y: 600, rotate: -180},
      {y: 600, rotate: 0},
    ], {
      delay: 1000,
      duration: 1000,
      fill: 'forwards',
    }).finished;
  }

  // noprotect
  while(1) {
    /* eslint-disable no-await-in-loop */
    await robotMotion();
    /* eslint-enable no-await-in-loop */
  }
}());