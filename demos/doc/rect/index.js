const {Scene, Rect} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

const rect = new Rect({
  normalize: true,
  pos: [600, 300],
  size: [300, 300],
  fillColor: 'red',
});
layer.append(rect);