const {Scene, Path, Sprite, Gradient} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

(async function () {
  await scene.preload([birdsRes, birdsJsonUrl]);
  const d = 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437Z';

  const gradient = new Gradient({
    vector: [280, 470, 680, 70],
    colors: [{
      offset: 0,
      color: 'rgba(255,0,0,1)',
    }, {
      offset: 0.5,
      color: 'rgba(255,0,0,0)',
    }, {
      offset: 1,
      color: 'rgba(255,0,0,0)',
    }],
  });

  const path = new Path({
    d,
    lineWidth: 26,
    fillColor: 'red',
    strokeColor: gradient,
    // lineJoin: 'bevel',
  });

  layer.append(path);
  window.path = path;

  const bird = new Sprite('bird1.png');
  bird.attr({
    anchor: [0.5, 0.5],
    size: [65, 45],
    offsetPath: d,
    zIndex: 200,
  });

  layer.append(bird);

  bird.animate([
    {offsetDistance: 0},
    {offsetDistance: 1},
  ], {
    duration: 6000,
    iterations: Infinity,
  });

  let i = 0;
  setInterval(() => {
    bird.attributes.texture = `bird${i++ % 3 + 1}.png`;
  }, 100);

  const startTime = Date.now();
  const T = 6000;
  requestAnimationFrame(function next() {
    const p = Math.PI * 2 * (Date.now() - startTime) / T;
    const colors = [
      {offset: 0, color: 'rgba(255,0,0,1)'},
      {offset: 0.5 + 0.5 * Math.abs(Math.sin(p)), color: 'rgba(255,0,0,0)'},
      {offset: 1, color: 'rgba(255,0,0,0)'},
    ];

    const gradients = new Gradient({
      vector: [280, 470, 680, 70],
      colors,
    });
    path.attr({strokeColor: gradients});

    requestAnimationFrame(next);
  });
}());