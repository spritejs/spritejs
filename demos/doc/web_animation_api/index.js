const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

const sprite = new Sprite();
sprite.attr({
  anchor: [0.5, 0.5],
  pos: [600, 300],
  bgcolor: 'red',
  size: [50, 50],
  borderRadius: 25,
  translate: [0, -200],
  transformOrigin: [0, 200],
});

sprite.animate([
  {rotate: 0},
  {rotate: 360},
], {
  duration: 3000,
  iterations: Infinity,
});

layer.append(sprite);