const {Scene} = spritejs;
const {Sphere, shaders} = spritejs.ext3d;
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

layer.camera.attributes.pos = [0, 0, 8];
const texture = layer.createTexture('https://p5.ssl.qhimg.com/t01e4a8428b9cc12bca.jpg');

const program = layer.createProgram({
  ...shaders.GEOMETRY_WITH_TEXTURE,
  texture,
  // Need inside of sphere to be visible
  cullFace: null,
});

const sphere = new Sphere(program, {radius: 1, widthSegments: 64});
layer.append(sphere);

const skyBox = sphere.cloneNode();
skyBox.attributes.scale = 10;
layer.append(skyBox);

layer.setOrbit();