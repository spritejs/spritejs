const {Scene} = spritejs;
const {Cube, shaders} = spritejs.ext3d;

const container = document.getElementById('container');
const scene = new Scene({container});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35, // 相机的视野
    pos: [3, 3, 5], // 相机的位置
  },
});

const program = layer.createProgram({
  ...shaders.NORMAL_GEOMETRY,
  cullFace: null,
});

const cube = new Cube(program, {
  colors: 'red red blue blue green green',
});
layer.append(cube);

layer.setOrbit(); // 开启旋转控制