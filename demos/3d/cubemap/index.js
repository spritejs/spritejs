const {Scene} = spritejs;
const {Cube, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 45,
  },
});

layer.camera.attributes.pos = [-2, 1, -3];

const gl = layer.gl;

const boxImages = [
  'https://p1.ssl.qhimg.com/d/inn/b61950e9faba/posx.jpg',
  'https://p5.ssl.qhimg.com/d/inn/b61950e9faba/negx.jpg',
  'https://p1.ssl.qhimg.com/d/inn/b61950e9faba/posy.jpg',
  'https://p4.ssl.qhimg.com/d/inn/b61950e9faba/negy.jpg',
  'https://p0.ssl.qhimg.com/d/inn/b61950e9faba/posz.jpg',
  'https://p1.ssl.qhimg.com/d/inn/b61950e9faba/negz.jpg',
];

const texture = layer.createTexture({
  target: gl.TEXTURE_CUBE_MAP,
  image: boxImages,
});

const program = layer.createProgram({
  ...shaders.TEXTURE_CUBE,
  texture,
  cullFace: null,
});

const cube = new Cube(program);
layer.append(cube);

const skybox = cube.cloneNode();
skybox.attributes.scale = 20;
layer.append(skybox);

cube.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 20000,
  iterations: Infinity,
});

layer.setOrbit();