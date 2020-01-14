const {Scene} = spritejs;
const {Mesh3d, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  width: 600,
  height: 600,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
    z: 5,
  },
});

const program = layer.createProgram({
  ...shaders.NORMAL_GEOMETRY,
  cullFace: null,
});

const p = 1 / Math.sqrt(2);
const model = {
  position: [
    -1, 0, -p,
    1, 0, -p,
    0, 1, p,
    -1, 0, -p,
    1, 0, -p,
    0, -1, p,
    1, 0, -p,
    0, -1, p,
    0, 1, p,
    -1, 0, -p,
    0, 1, p,
    0, -1, p],
};

const sprite = new Mesh3d(program, {
  model,
  colors: 'red blue green orange',
});
layer.append(sprite);

sprite.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 7000,
  iterations: Infinity,
});

sprite.animate([
  {rotateZ: 0},
  {rotateZ: 360},
], {
  duration: 17000,
  iterations: Infinity,
});

sprite.animate([
  {rotateX: 0},
  {rotateX: -360},
], {
  duration: 11000,
  iterations: Infinity,
});

layer.setOrbit();