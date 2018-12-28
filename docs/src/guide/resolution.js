const {Scene, Sprite, Label} = spritejs

/* demo: adaptive */
;(function () {
  const scene = new Scene('#adaptive', {resolution: [700, 700]});

  const resolution = scene.resolution;
  const viewport = scene.viewport;

  const layer = scene.layer('fglayer');

  const label = new Label(`resolution: ${resolution} | viewport: ${viewport}`);
  label.attr({
    anchor: [0.5, 0.5],
    pos: [350, 350],
    font: '36px Arial',
  });

  layer.append(label);
}())

/* demo: resize */
;(function () {
  const scene = new Scene('#resize', {viewport: ['auto', 'auto'], resolution: [770, 770]});

  const resolution = scene.resolution;
  const viewport = scene.viewport;

  const layer = scene.layer('fglayer');

  const label = new Label(`resolution: ${resolution} | viewport: ${viewport}`);
  label.attr({
    anchor: [0.5, 0.5],
    pos: [350, 350],
    font: '36px Arial',
  });

  layer.append(label);

  scene.on('viewportChange', () => {
    const viewport = scene.viewport;
    label.text = `resolution: ${resolution} | viewport: ${viewport}`;
  });
}())

/* demo: stickMode */
;(async function () {
  const scene = new Scene('#stickMode', {
    viewport: ['auto', 'auto'],
    resolution: [640, 1000],
    stickMode: 'width',
    // renderMode: 'repaintDirty',
  });

  const heightBtn = document.getElementById('heightBtn'),
    stickMode = document.getElementById('stickMode'),
    extendBtn = document.getElementById('extendBtn');

  heightBtn.addEventListener('change', (evt) => {
    stickMode.style.paddingBottom = `${50 + evt.target.value / 2}%`;
    scene.updateViewport();
  });

  extendBtn.addEventListener('click', (evt) => {
    scene.stickExtend = evt.target.checked;
    scene.updateViewport().updateResolution();
  });

  await scene.preload(
    {id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'},
    {id: 'cloud', src: 'https://p5.ssl.qhimg.com/t01d2ff600bae7fe897.png'}
  );

  const layer = scene.layer('fglayer');

  const cloud = new Sprite('cloud');
  cloud.attr({
    anchor: [0.5, 0],
    pos: [320, -50],
    size: [200, 130],
  });
  layer.append(cloud);

  function addRandomSnow() {
    const snow = new Sprite('snow');
    const x0 = 20 + Math.random() * 600,
      y0 = 0;

    snow.attr({
      anchor: [0.5, 0.5],
      pos: [x0, y0],
      size: [50, 50],
    });

    snow.animate([
      {x: x0 - 10},
      {x: x0 + 10},
    ], {
      duration: 1000,
      fill: 'forwards',
      direction: 'alternate',
      iterations: Infinity,
      easing: 'ease-in-out',
    });

    const dropAnim = snow.animate([
      {y: -200, rotate: 0},
      {y: 2000, rotate: 1880},
    ], {
      duration: 15000,
      fill: 'forwards',
    });

    dropAnim.finished.then(() => {
      snow.remove();
    });

    layer.append(snow);
  }

  setInterval(addRandomSnow, 200);
}());
