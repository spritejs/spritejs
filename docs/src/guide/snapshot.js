const {Scene, Sprite, Path} = spritejs

/* demo: snapshot */
;(async function () {
  const scene = new Scene('#snapshot', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const bglayer = scene.layer('bglayer', {handleEvent: false});

  function randomTriangle() {
    const triangle = new Path();
    const pos = [Math.random() * 1540, Math.random() * 600];
    const d = 'M0,0L0,10L8.66, 5z';
    triangle.attr({
      path: {d, transform: {scale: 5}},
      pos,
      fillColor: '#37c',
      rotate: Math.random() * 360,
    });
    bglayer.append(triangle);
  }

  for(let i = 0; i < 100; i++) {
    randomTriangle();
  }

  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

  await scene.preload([birdsRes, birdsJsonUrl]);

  const fglayer = scene.layer('fglayer');

  const bird = new Sprite('bird1.png');

  bird.attr({
    anchor: [0.5, 0.5],
    pos: [50, 200],
    offsetPath: 'M0,100C0,100,200,-100,500,100S700,-100,1000,100S1200,-100,1700,100S2200,-100,2700,100',
  });
  fglayer.append(bird);

  bird.animate([
    {textures: 'bird1.png'},
    {textures: 'bird2.png'},
    {textures: 'bird3.png'},
    {textures: 'bird1.png'},
  ], {
    duration: 300,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'step-end',
  });

  bird.animate([
    {offsetDistance: 0},
    {offsetDistance: 1},
  ], {
    duration: 6000,
    iterations: Infinity,
  });

  const snapshotBtn = document.getElementById('take-snapshot'),
    snapshotList = document.getElementById('snapshot-list');

  snapshotBtn.addEventListener('click', async (evt) => {
    const canvas = await scene.snapshot();
    const snapshot = new Image();
    snapshot.src = canvas.toDataURL();
    const listItem = document.createElement('li');
    listItem.appendChild(snapshot);
    snapshotList.appendChild(listItem);
  });
}());
