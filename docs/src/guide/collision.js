const {Scene, Sprite} = spritejs

/* demo: obbcollision */
;(async function () {
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
  const scene = new Scene('#obbcollision', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');

  await scene.preload([birdsRes, birdsJsonUrl]);

  const bird = new Sprite('bird1.png');

  bird.attr({
    anchor: [0.5, 0.5],
    pos: [50, 200],
    offsetPath: 'M0,100C0,100,200,-100,500,100S700,-100,1000,100S1200,-100,1700,100S2200,-100,2700,100',
  });
  layer.append(bird);

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

  function createRandomBlock() {
    const block = new Sprite();
    const x = Math.round(1540 * Math.random());
    const y = Math.round(600 * Math.random());
    const rotate = 360 * Math.random();

    block.attr({
      pos: [x, y],
      rotate,
      bgcolor: '#37c',
      size: [30, 70],
      opacity: 0.5,
    });
    layer.append(block);

    return block;
  }

  const blocks = [];
  for(let i = 0; i < 500; i++) {
    blocks.push(createRandomBlock());
  }

  layer.on('update', (evt) => {
    blocks.forEach((block) => {
      if(bird.OBBCollision(block)) {
        block.attr('bgcolor', '#c73');
      } else {
        block.attr('bgcolor', '#37c');
      }
    });
  });
}());