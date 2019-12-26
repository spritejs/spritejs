const {Scene, Sprite, Gradient, Path} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 600,
  height: 360,
});
const layer = scene.layer();

const gradient = new Gradient({
  vector: [0, 0, 150, 150],
  colors: [
    {offset: 0, color: 'red'},
    {offset: 1, color: 'green'},
  ],
});

const box = new Sprite({
  anchor: [0.5, 0.5],
  size: [150, 150],
  pos: [300, 180],
  bgcolor: gradient,
});
layer.append(box);

const cross = new Path('M-5 0L5 0M0 5L0 -5');
cross.attr({
  pos: [300, 180],
  lineWidth: 2,
  strokeColor: 'blue',
});
layer.append(cross);

box.animate([
  {rotate: 0},
  {rotate: 360},
], {
  iterations: Infinity,
  duration: 3000,
});

/* globals dat */
const gui = new dat.GUI();
const config = {
  anchorX: box.attributes.anchorX,
  anchorY: box.attributes.anchorY,
};
gui.add(config, 'anchorX', 0, 1).onChange((val) => {
  box.attributes.anchorX = val;
});
gui.add(config, 'anchorY', 0, 1).onChange((val) => {
  box.attributes.anchorY = val;
});