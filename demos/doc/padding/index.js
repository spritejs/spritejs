const {Scene, Label} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 600,
  height: 360,
  // contextType: '2d',
});
const layer = scene.layer();

const box = new Label({
  text: 'SpriteJS',
  fontSize: '2rem',
  anchor: [0.5, 0.5],
  pos: [300, 180],
  bgcolor: 'white',
  borderWidth: 1,
  padding: 25,
});
layer.append(box);

/* globals dat */
const gui = new dat.GUI();
const config = {
  paddingLeft: box.attributes.paddingLeft,
  paddingRight: box.attributes.paddingRight,
  paddingTop: box.attributes.paddingTop,
  paddingBottom: box.attributes.paddingBottom,
};
gui.add(config, 'paddingLeft', 0, 50).onChange((val) => {
  box.attributes.paddingLeft = val;
});
gui.add(config, 'paddingRight', 0, 50).onChange((val) => {
  box.attributes.paddingRight = val;
});

gui.add(config, 'paddingTop', 0, 50).onChange((val) => {
  box.attributes.paddingTop = val;
});
gui.add(config, 'paddingBottom', 0, 50).onChange((val) => {
  box.attributes.paddingBottom = val;
});