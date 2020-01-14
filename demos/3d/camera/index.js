/* globals dat */
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

const camera = layer.camera;
camera.lookAt([0, 0, 0]);

const program = layer.createProgram({
  ...shaders.NORMAL_GEOMETRY,
  cullFace: null,
});

const cube = new Cube(program, {
  colors: 'red red blue blue green green',
});
layer.append(cube);


const initGui = () => {
  const gui = new dat.GUI();
  const lookAt = [0, 0, 0];
  gui.add({x: 3}, 'x', -5, 5, 0.01).onChange((val) => {
    camera.attributes.x = val;
    camera.lookAt(lookAt);
  });
  gui.add({y: 3}, 'y', -5, 5, 0.01).onChange((val) => {
    camera.attributes.y = val;
    camera.lookAt(lookAt);
  });
  gui.add({z: 5}, 'z', -5, 5, 0.01).onChange((val) => {
    camera.attributes.z = val;
    camera.lookAt(lookAt);
  });
  gui.add({lookAt: '0,0,0'}, 'lookAt').onChange((val) => {
    const value = val.split(',').map(v => Number(v));
    lookAt[0] = value[0] || 0;
    lookAt[1] = value[1] || 0;
    lookAt[2] = value[2] || 0;
    camera.lookAt(lookAt);
  });
};

initGui();