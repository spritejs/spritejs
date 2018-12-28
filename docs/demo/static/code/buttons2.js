(async function () {
  const {Scene, Label, Sprite, Path, Group} = spritejs;
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]});

  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);

  const fglayer = scene.layer('fglayer');
  fglayer.canvas.style.backgroundColor = '#a1d36d';

  const button = new Label('Press & Hold');

  button.attr({
    anchor: [0.5, 0.5],
    pos: [900, 1000],
    font: 'bold 48px Arial',
    color: '#fff',
    padding: 15,
    border: [1, '#fff'],
    borderRadius: 15,
  });

  fglayer.appendChild(button);

  button.on('mouseenter', (evt) => {
    button.attr({
      bgcolor: 'rgba(233,233,233,0.3)',
      color: '#f70',
    });
  });

  button.on('mousedown', (evt) => {
    button.attr({
      bgcolor: 'transparent',
    });
    burnFire();
  });

  button.on('mouseup', (evt) => {
    button.attr({
      bgcolor: 'rgba(233,233,233,0.3)',
    });
    unburnFire();
  });

  button.on('mouseleave', (evt) => {
    button.attr({
      bgcolor: 'transparent',
      color: '#fff',
    });
  });

  const group = new Group();
  group.attr({
    anchor: 0.5,
    pos: [500, 800],
  });
  fglayer.append(group);

  const huanhuan = new Sprite();
  huanhuan.attr({
    textures: ['huanhuan.png'],
    scale: 0.4,
  });
  group.append(huanhuan);

  const floatAnim = group.animate([
    {translate: [0, 10]},
    {translate: [0, -10]},
  ], {
    duration: 500,
    iterations: Infinity,
    direction: 'alternate',
  });

  let flying;

  async function burnFire() {
    const outerFireD = 'M19.8173,24.1766 L5.3273,32.9936 C4.6293,33.4186 3.7183,33.1976 3.2943,32.4996 C3.1953,32.3376 3.1313,32.1596 3.1003,31.9836 L0.1953,15.2736 C-1.0387,8.1796 3.7123,1.4286 10.8073,0.1946 C17.9013,-1.0394 24.6523,3.7116 25.8853,10.8056 C26.8283,16.2296 24.2443,21.4666 19.8173,24.1766';

    const outerFire = new Path();
    outerFire.attr({
      path: {d: outerFireD},
      pos: [22, 90],
      fillColor: 'rgb(253,88,45)',
      zIndex: -1,
    });
    group.append(outerFire);

    const innerFireD = 'M15.9906,13.766 L8.4096,26.718 C8.0486,27.335 7.2706,27.521 6.6726,27.133 C6.4296,26.976 6.2536,26.748 6.1536,26.491 L0.6356,12.223 C-1.1554,7.594 0.9666,2.393 5.3746,0.605 C9.7826,-1.182 14.8076,1.122 16.5976,5.752 C17.6546,8.483 17.3236,11.455 15.9906,13.766';

    const innerFire = new Path();
    innerFire.attr({
      path: {d: innerFireD},
      pos: [30, 90],
      rotate: 15,
      fillColor: 'rgb(254,222,9)',
      zIndex: -1,
    });
    group.append(innerFire);

    floatAnim.pause();

    const y0 = group.attr('y'),
      y = 350;

    if(flying) flying.pause();
    flying = group.animate([
      {y},
    ], {
      duration: 10 * (y0 - y),
      fill: 'forwards',
    });

    await flying.finished;
    floatAnim.play();
  }

  async function unburnFire() {
    const outerFire = group.children[1],
      innerFire = group.children[2];

    if(outerFire) group.remove(outerFire);
    if(innerFire) group.remove(innerFire);

    floatAnim.pause();

    const y0 = group.attr('y'),
      y = 800;
    if(flying) flying.pause();
    flying = group.animate([
      {y},
    ], {
      duration: 10 * (y - y0),
      fill: 'forwards',
    });

    await flying.finished;
    floatAnim.play();
  }
}());
