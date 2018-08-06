const {Scene, Sprite} = spritejs

/* demo: curvejs */
;(async function () {
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

  const scene = new Scene('#curvejs', {
    resolution: [1540, 600],
    viewport: 'auto',
  });
  const layer = scene.layer('fglayer', {
    autoRender: false,
  });
  await scene.preload([birdsRes, birdsJsonUrl]);
  const s = new Sprite('bird1.png');

  s.attr({
    anchor: [0.5, 0.5],
    pos: [300, 100],
    transform: {
      scale: [0.5, 0.5],
    },
    offsetPath: 'M10,80 q100,120 120,20 q140,-50 160,0',
    zIndex: 200,
  });
  s.animate([
    {offsetDistance: 0},
    {offsetDistance: 1},
  ], {
    duration: 3000,
    direction: 'alternate',
    iterations: Infinity,
  });

  s.animate([
    {scale: [0.5, 0.5], offsetRotate: 'auto'},
    {scale: [0.5, -0.5], offsetRotate: 'reverse'},
    {scale: [0.5, 0.5], offsetRotate: 'auto'},
  ], {
    duration: 6000,
    iterations: Infinity,
    easing: 'step-end',
  });
  s.animate([
    {textures: 'bird1.png'},
    {textures: 'bird2.png'},
    {textures: 'bird3.png'},
  ], {
    duration: 300,
    direction: 'alternate',
    iterations: Infinity,
  });
  layer.appendChild(s);

  const util = {
    random(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    },
    randomColor() {
      return ['#22CAB3', '#90CABE', '#A6EFE8', '#C0E9ED', '#C0E9ED', '#DBD4B7', '#D4B879', '#ECCEB2', '#F2ADA6', '#FF7784'][util.random(0, 9)];
    },
  };

  const {Stage, Curve, motion} = curvejs;

  const randomColor = util.randomColor,
    stage = new Stage(layer.canvas);

  stage.add(new Curve({
    points: [378, 123, 297, 97, 209, 174, 217, 258],
    color: randomColor(),
    motion: motion.rotate,
    data: Math.PI / 20,
  }));

  stage.add(new Curve({
    points: [378, 123, 385, 195, 293, 279, 217, 258],
    color: randomColor(),
    motion: motion.rotate,
    data: Math.PI / 20,
  }));

  function tick() {
    stage.update();
    layer.draw(false);
    requestAnimationFrame(tick);
  }

  tick();
}());