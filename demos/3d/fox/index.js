const {Scene} = spritejs;
const {Mesh3d, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
  },
  directionalLight: [0.5, 1.0, -0.3, 0.15],
});

layer.camera.attributes.pos = [8, 5, 15];
layer.camera.lookAt([0, 1.5, 0]);

const texture = layer.createTexture('https://p3.ssl.qhimg.com/t01d6c6c93fdddf1e42.jpg');
const program = layer.createProgram({
  ...shaders.NORMAL_TEXTURE,
  texture,
});

const model = layer.loadModel('https://s5.ssl.qhres.com/static/1eb3e9b91a296abd.json');
const fox = new Mesh3d(program, {model});
layer.append(fox);
layer.setOrbit();