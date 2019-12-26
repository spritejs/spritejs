const {Scene, Regular, Star} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const shape = new Regular({
  pos: [300, 300],
  edges: 7,
  radius: 100,
  fillColor: 'blue',
});
layer.append(shape);

const star = new Star({
  pos: [700, 300],
  angles: 5,
  innerRadius: 50,
  outerRadius: 100,
  fillColor: 'red',
});
layer.append(star);