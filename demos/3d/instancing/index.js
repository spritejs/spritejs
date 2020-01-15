const fragment = `
  precision highp float;
  precision highp int;

  varying vec3 vNormal;
  varying vec4 vColor;

  uniform vec4 lighting;

  void main() {
    vec3 normal = normalize(vNormal);
    float l = dot(normal, normalize(lighting.xyz));
    gl_FragColor.rgb = vColor.rgb + l * lighting.w;
    gl_FragColor.a = vColor.a;
  }
`;
const vertex = `
  precision highp float;
  precision highp int;

  attribute vec3 position;
  attribute vec3 normal;
  attribute vec4 color;
  attribute vec3 offset;
  attribute vec2 random;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform mat3 normalMatrix;

  varying vec3 vNormal;
  varying vec4 vColor;

  void rotate2d(inout vec2 v, float a){
    mat2 m = mat2(cos(a), -sin(a), sin(a),  cos(a));
    v = m * v;
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vColor = color;
    vec3 pos = position;
    rotate2d(pos.xz, random.x * 6.28);
    rotate2d(pos.xy, random.y * 6.28);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0) + vec4(offset, 1.0);
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
  camera: {
    fov: 35,
    pos: [0, 0, 7],
  },
});
layer.camera.lookAt([0, -0.5, 0]);

const program = layer.createProgram({
  vertex,
  fragment,
  cullFace: null,
  uniforms: {
    lighting: {value: [-0.3, 0.8, 0.6, 0.1]},
  },
}, {
  attributes: {
    offset(node, geometry) {
      const data = new Float32Array(5 * 5 * 3);
      for(let i = 0; i < 5; i++) {
        const p = -5 + 2 * i;
        for(let j = 0; j < 5; j++) {
          const q = -5 + 2 * j;
          data.set([p, q, 0], (i * 5 + j) * 3);
        }
      }
      return {instanced: 1, size: 3, data};
    },
    random(node, geometry) {
      const data = new Float32Array(5 * 5 * 2);
      for(let i = 0; i < 25; i++) {
        data.set([Math.random() * 2 - 1, Math.random() * 2 - 1], i * 2);
      }
      return {instanced: 1, size: 2, data};
    },
  },
});

const cube = new Cube(program);
cube.attributes.pos = [0, 0, 0];
cube.attributes.colors = 'red red blue blue orange orange';
cube.attributes.scale = 0.5;
layer.append(cube);
cube.animate([
  {rotateY: 0},
  {rotateY: -360},
], {
  duration: 5000,
  iterations: Infinity,
});