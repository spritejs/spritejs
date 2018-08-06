(async function () {
  const {Scene, Sprite, Group, Path, Label} = spritejs;

  const scene = new Scene('#paper', {
      resolution: [1200, 1200],
      viewport: ['auto', 'auto'],
    }),
    fglayer = scene.layer('fglayer');

  fglayer.canvas.style.backgroundColor = '#F0DBAE';

  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);

  const huanhuan = new Group();
  huanhuan.attr({
    anchor: [0.5, 0],
    pos: [600, 600],
    rotate: 30,
  });
  fglayer.append(huanhuan);

  const robot = new Sprite('huanhuan.png');
  robot.attr({
    size: [78, 96],
  });
  huanhuan.append(robot);

  const outerFireD = 'M19.8173,24.1766 L5.3273,32.9936 C4.6293,33.4186 3.7183,33.1976 3.2943,32.4996 C3.1953,32.3376 3.1313,32.1596 3.1003,31.9836 L0.1953,15.2736 C-1.0387,8.1796 3.7123,1.4286 10.8073,0.1946 C17.9013,-1.0394 24.6523,3.7116 25.8853,10.8056 C26.8283,16.2296 24.2443,21.4666 19.8173,24.1766';

  const outerFire = new Path();
  outerFire.attr({
    path: {d: outerFireD},
    pos: [22, 90],
    fillColor: 'rgb(253,88,45)',
    zIndex: -1,
  });
  huanhuan.append(outerFire);

  const innerFireD = 'M15.9906,13.766 L8.4096,26.718 C8.0486,27.335 7.2706,27.521 6.6726,27.133 C6.4296,26.976 6.2536,26.748 6.1536,26.491 L0.6356,12.223 C-1.1554,7.594 0.9666,2.393 5.3746,0.605 C9.7826,-1.182 14.8076,1.122 16.5976,5.752 C17.6546,8.483 17.3236,11.455 15.9906,13.766';

  const innerFire = new Path();
  innerFire.attr({
    path: {d: innerFireD},
    pos: [30, 90],
    rotate: 15,
    fillColor: 'rgb(254,222,9)',
    zIndex: -1,
  });
  huanhuan.append(innerFire);

  const keyboardBg = new Sprite();
  keyboardBg.attr({
    size: [380, 400],
    pos: [750, 900],
    bgcolor: '#E0CDA3',
    borderRadius: 20,
  });
  fglayer.append(keyboardBg);

  class KeyButton extends Label {
    pointCollision(evt) {
      if(evt.originalEvent.key === this.text.toLowerCase()) {
        return true;
      }
      return super.pointCollision(evt);
    }
  }
  KeyButton.defineAttributes({
    init(attr) {
      attr.setDefault({
        font: '40px "宋体"',
        fillColor: '#333',
        bgcolor: '#FFFDE6',
        borderRadius: 15,
        width: 80,
        height: 80,
        textAlign: 'center',
        lineHeight: 80,
      });
    },
  });

  function setKey(key, x, y) {
    const button = new KeyButton(key);
    button.attr({
      pos: [x, y],
    });
    button.on(['keydown', 'mousedown', 'touchstart'], (evt) => {
      button.attr({
        bgcolor: '#E8E6D1',
        fillColor: '#333',
      });
    });
    button.on(['keyup', 'mouseup', 'touchend'], (evt) => {
      button.attr({
        bgcolor: '#FFFDE6',
        fillColor: '#333',
      });
    });
    fglayer.append(button);
    return button;
  }

  const flapping = huanhuan.animate([
    {translate: [8.5, 10]},
    {translate: [-8.5, -10]},
  ], {
    duration: 1000,
    iterations: Infinity,
    direction: 'alternate',
  });

  let moving = null;
  function moveY(destY) {
    flapping.pause();
    const y = huanhuan.attr('y');
    if(moving) moving.cancel(true);
    moving = huanhuan.animate([
      {y},
      {y: destY},
    ], {
      duration: Math.abs(10 * (y - destY)),
      fill: 'forwards',
    });
  }
  function moveX(destX) {
    flapping.pause();
    const x = huanhuan.attr('x');
    if(moving) moving.cancel(true);
    moving = huanhuan.animate([
      {x},
      {x: destX},
    ], {
      duration: Math.abs(10 * (x - destX)),
      fill: 'forwards',
    });
  }

  function stopMove() {
    if(moving) {
      moving.cancel(true);
      moving = null;
    }
    flapping.play();
  }

  setKey('W', 900, 950)
    .on(['keydown', 'mousedown', 'touchstart'], moveY.bind(null, -1000))
    .on(['keyup', 'mouseup', 'touchend'], stopMove);
  setKey('A', 800, 1050)
    .on(['keydown', 'mousedown', 'touchstart'], moveX.bind(null, -1000))
    .on(['keyup', 'mouseup', 'touchend'], stopMove);
  setKey('S', 900, 1050)
    .on(['keydown', 'mousedown', 'touchstart'], moveY.bind(null, 3000))
    .on(['keyup', 'mouseup', 'touchend'], stopMove);
  setKey('D', 1000, 1050)
    .on(['keydown', 'mousedown', 'touchstart'], moveX.bind(null, 3000))
    .on(['keyup', 'mouseup', 'touchend'], stopMove);

  scene.delegateEvent('keydown', document);
  scene.delegateEvent('keyup', document);

  /* eslint-disable no-console */
  console.log('press key to move robot');
  /* eslint-enable no-console */
}());
