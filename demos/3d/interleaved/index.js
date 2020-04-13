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

const vertex = `
precision highp float;
precision highp int;

attribute vec3 position;
attribute vec4 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec4 vColor;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vColor = color;
}
`;

const program = layer.createProgram({
  fragment: shaders.NORMAL_GEOMETRY.fragment,
  vertex,
  cullFace: null,
});

const p = 1 / Math.sqrt(2);
const data = new Float32Array([
  -1, 0, -p, // position
  1, 0, 0, // color
  1, 0, -p,
  0, 1, 0,
  0, 1, p,
  0, 0, 1,
  0, -1, p,
  1, 1, 0,
]);

const model = {
  position: {
    data,
    stride: 24,
  },
  color: {
    data,
    stride: 24,
    offset: 12,
  },
  index: [
    0, 1, 2, 0, 1, 3, 1, 3, 2, 0, 2, 3,
  ],
};

const sprite = new Mesh3d(program, {
  model,
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