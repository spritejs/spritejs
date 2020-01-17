const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat3 normalMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        vec3 normal = normalize(vNormal);
        float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
        gl_FragColor.rgb = vec3(0.2, 0.8, 1.0) + lighting * 0.1;
        gl_FragColor.a = 1.0;
    }
`;

const {Scene} = spritejs;
const {Cube} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  handleEvent: false,
  camera: {
    fov: 35,
    far: 3000,
  },
});
const program = layer.createProgram({
  vertex,
  fragment,
});

const count = 2000;
const cubeModel = new Cube(program); // shared model
for(let i = 0; i < count; ++i) {
  const cube = cubeModel.cloneNode();
  cube.attributes.pos = [
    -100 + Math.random() * 200,
    -100 + Math.random() * 200,
    -100 + Math.random() * 200,
  ];

  cube.attributes.rotate = [Math.random() * 3, Math.random() * 3, Math.random() * 3];
  layer.append(cube);
}

const children = layer.children;

layer.tick((t) => {
  const time = t / 30000;
  layer.camera.attributes.pos = [Math.sin(time) * 180, 80, Math.cos(time) * 180];
  layer.camera.lookAt([0, 0, 0]);
  for(let i = 0; i < children.length; ++i) {
    children[i].attributes.rotateX += 1.2;
    children[i].attributes.rotateY += 1.2;
  }
});
