const {Scene, Triangle, Parallel} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const traingle = new Triangle({
  pos: [150, 150],
  sides: [300, 300],
  angle: 60,
  fillColor: '#7cc',
});
layer.append(traingle);

const parallel = new Parallel({
  normalize: true,
  pos: [750, 300],
  sides: [200, 200],
  angle: 60,
  rotate: 60,
  fillColor: '#c7c',
});
layer.append(parallel);