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
  directionalLight: [0.5, 1.0, -0.3],
  directionalLightColor: [1, 1, 1, 0.15],
});

layer.camera.attributes.pos = [5, 3, 6];
layer.camera.lookAt([0, 0, 0]);

(async function () {
  const texture = layer.createTexture('https://p2.ssl.qhimg.com/t01598a49e49aba1046.jpg');
  const program = layer.createProgram({
    ...shaders.NORMAL_TEXTURE,
    uniforms: {
      tMap: {value: texture},
    },
  });

  const model = await layer.loadModel('https://s3.ssl.qhres2.com/static/8613b585d1542274.json');

  // For an accurate wireframe, triangle vertices need to be duplicated to make line pairs.
  // Here we do so by generating indices. If your geometry is already indexed, this needs to be adjusted.
  const index = new Uint16Array((model.position.length / 3 / 3) * 6);
  for(let i = 0; i < model.position.length / 3; i += 3) {
    // For every triangle, make three line pairs (start, end)
    index.set([i, i + 1, i + 1, i + 2, i + 2, i], i * 2);
  }
  model.index = index;

  // console.log(geometry);

  const wireframeMesh = new Mesh3d(program, {
    mode: 'LINES',
  });
  wireframeMesh.setGeometry(model);
  layer.append(wireframeMesh);
  wireframeMesh.animate([
    {rotateY: 0},
    {rotateY: 360},
  ], {
    duration: 5000,
    iterations: Infinity,
  });
}());