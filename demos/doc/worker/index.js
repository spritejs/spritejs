const container = document.getElementById('stage');
const scene = new spritejs.Scene({
  container,
  width: 1200,
  height: 600,
});

scene.layer('fglayer', {worker: './worker.js'});