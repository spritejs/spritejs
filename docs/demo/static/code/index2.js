(async function () {
  const {Scene, Sprite, Group} = spritejs;
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [3000, 3000]});

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

  const center = [1500, 1600];
  const region = new Group();

  region.attr({
    anchor: 0.5,
    size: [2300, 2300],
    pos: center,
    bgcolor: 'rgba(17, 51, 153, 0.5)',
    borderRadius: 300,
  });
  bglayer.append(region);

  const robot = new Sprite('guanguan1.png');
  robot.attr({
    anchor: [0.5, 1],
    pos: [700, 1100],
    transformOrigin: [0, -300],
  });
  fglayer.append(robot);

  async function robotMotion() {
    await robot.animate([
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png', scale: [-1, 1]},
      {textures: 'guanguan1.png', scale: [1, 1]},
    ], {
      duration: 3000,
      easing: 'step-end',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {y: 1100},
      {y: 2750},
    ], {
      duration: 500,
      easing: 'ease-in',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {textures: 'guanguan1.png'},
      {textures: 'guanguan3.png', scale: [-1, 1]},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png', scale: [1, 1]},
    ], {
      duration: 2000,
      easing: 'step-end',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {x: 700},
      {x: 2350},
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
      {textures: 'guanguan3.png', scale: [-1, 1]},
    ], {
      duration: 2500,
      easing: 'step-end',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {x: 2350},
      {x: 700, offset: 0.99, scale: [-1, 1]},
      {x: 700, scale: [1, 1]},
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    }).finished;

    await robot.animate([
      {x: 700, y: 2750, rotate: 0},
      {x: 2350, y: 2750, rotate: 0, offset: 0.3},
      {x: 2350, y: 2750, rotate: -90, offset: 0.35},
      {x: 2350, y: 1050, rotate: -90, offset: 0.65},
      {x: 2350, y: 1050, rotate: -180, offset: 0.7},
      {x: 700, y: 1050, rotate: -180},
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
      {y: 1050, rotate: -180},
      {y: 1050, rotate: 0},
    ], {
      delay: 1000,
      duration: 1000,
      fill: 'forwards',
    }).finished;
  }

  while(1) {
    /* eslint-disable no-await-in-loop */
    await robotMotion();
    /* eslint-enable no-await-in-loop */
  }
}());