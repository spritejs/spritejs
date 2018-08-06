(async function () {
  const {Scene, Sprite} = spritejs;
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]});

  await scene.preload([
    'https://p3.ssl.qhimg.com/t010ded517024020e10.png',
    'https://s1.ssl.qhres.com/static/6ead70a354da7aa4.json',
  ]);

  const layer = scene.layer('fglayer');
  layer.canvas.style.backgroundColor = '#FFFDCC';

  const ground = new Sprite();
  ground.attr({
    anchor: [0.5, 0],
    size: [700, 30],
    pos: [600, 830],
    bgcolor: '#c93',
    borderRadius: 15,
  });
  layer.append(ground);

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
  });

  layer.append(head, neck, body, leftArm, rightArm);

  body.animate([
    {y: 773},
  ], {
    duration: 1000,
    easing: 'ease-in',
    fill: 'forwards',
  });

  leftArm.animate([
    {y: 773},
  ], {
    delay: 300,
    duration: 1000,
    easing: 'ease-in',
    fill: 'forwards',
  });

  rightArm.animate([
    {y: 773},
  ], {
    delay: 600,
    duration: 1000,
    easing: 'ease-in',
    fill: 'forwards',
  });

  neck.animate([
    {y: 758},
  ], {
    delay: 900,
    duration: 1000,
    easing: 'ease-in',
    fill: 'forwards',
  });

  await head.animate([
    {y: 685},
  ], {
    delay: 1200,
    duration: 1000,
    easing: 'ease-in',
    fill: 'forwards',
  }).finished;

  async function combine() {
    await leftArm.animate([
      {y: 753},
    ], {
      duration: 200,
      fill: 'forwards',
    }).finished;

    await rightArm.animate([
      {y: 753},
    ], {
      duration: 200,
      fill: 'forwards',
    }).finished;

    head.animate([
      {y: 695},
    ], {
      duration: 200,
      fill: 'forwards',
    });

    await neck.animate([
      {y: 768},
    ], {
      duration: 200,
      fill: 'forwards',
    }).finished;

    leftArm.animate([
      {y: 773},
    ], {
      duration: 200,
      fill: 'forwards',
    });

    rightArm.animate([
      {y: 773},
    ], {
      duration: 200,
      fill: 'forwards',
    });
  }

  async function stretch() {
    neck.animate([
      {y: 758},
    ], {
      delay: 100,
      duration: 200,
      easing: 'ease-in',
      fill: 'forwards',
    });

    await head.animate([
      {y: 685},
    ], {
      delay: 200,
      duration: 200,
      easing: 'ease-in',
      fill: 'forwards',
    }).finished;
  }

  await combine()

  ;[body, head].forEach((sprite) => {
    sprite.on('mouseenter', (evt) => {
      stretch();
    });
    sprite.on('mouseleave', (evt) => {
      combine();
    });
  });
}());