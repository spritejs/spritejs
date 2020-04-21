/* globals dat */
const {Scene, Color} = spritejs;
const {Cube, shaders} = spritejs.ext3d;

const container = document.getElementById('container');
const scene = new Scene({container});
const layer = scene.layer3d('fglayer', {
  ambientColor: '#ff000080',
  directionalLight: [1, 0, 0],
  directionalLightColor: [1, 1, 1, 0.5],
  pointLightColor: 'blue',
  pointLightPosition: [5, 3, 6],
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
  colors: 'grey',
});
layer.append(cube);
layer.setOrbit();

const initGui = () => {
  const gui = new dat.GUI();
  const palette = {
    ambientColor: 'rgba(255, 0, 0, 0.5)', // CSS string
    pointLightColor: '#0000ff',
  };
  gui.addColor(palette, 'ambientColor').onChange((val) => {
    const color = new Color(val);
    program.uniforms.ambientColor.value = color;
    layer.gl.clearColor(...color);
    layer.forceUpdate();
  });
  gui.addColor(palette, 'pointLightColor').onChange((val) => {
    const color = new Color(val);
    program.uniforms.pointLightColor.value = color;
    layer.forceUpdate();
  });
};

initGui();