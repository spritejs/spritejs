const {Scene} = spritejs;
const {Cylinder, Sphere, Cube, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  directionalLight: [1, 0, 0, 0.5],
  pointLightColor: `hsl(${Math.floor(360 * Math.random())}, 50%, 50%)`,
  pointLightPosition: [5, 3, 6],
  camera: {
    fov: 35,
  },
});

layer.camera.attributes.pos = [5, 3, 6];
layer.camera.lookAt([0, 0, 0]);

const program = layer.createProgram({
  ...shaders.BASE_GEOMETRY,
  cullFace: null,
  uniforms: {
    lighting: {value: [0.3, 0.8, 0.6, 0.1]},
  },
});

const cylinder = new Cylinder(program);
cylinder.attributes.pos = [0, 1.3, 0];
layer.append(cylinder);
cylinder.animate([
  {rotateY: 0},
  {rotateY: -360},
], {
  duration: 10000,
  iterations: Infinity,
});

const sphere = new Sphere(program);
sphere.attr({
  phiLength: Math.PI,
});
layer.append(sphere);
sphere.animate([
  {rotateY: 0},
  {rotateY: -360},
], {
  duration: 7500,
  iterations: Infinity,
});

const cube = new Cube(program);
cube.attributes.pos = [0, -1.3, 0];
layer.append(cube);
cube.animate([
  {rotateY: 0},
  {rotateY: -360},
], {
  duration: 5000,
  iterations: Infinity,
});

layer.setRaycast();

layer.addEventListener('click', (evt) => {
  if(evt.target === cube) {
    const colors = [];
    for(let i = 0; i < 3; i++) {
      const randomColor = `hsl(${Math.floor(360 * Math.random())}, 50%, 50%)`;
      colors.push(randomColor, randomColor);
    }
    evt.target.attributes.colors = colors;
  } else if(evt.target !== layer) {
    evt.target.attributes.colors = `hsl(${Math.floor(360 * Math.random())}, 50%, 50%)`;
  }
});