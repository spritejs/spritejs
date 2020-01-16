const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat3 normalMatrix;

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    precision highp int;

    uniform sampler2D tMap;

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vec3 normal = normalize(vNormal);
        float lighting = 0.2 * dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
        vec3 tex = texture2D(tMap, vUv).rgb;
        gl_FragColor.rgb = tex + lighting + vec3(vUv - 0.5, 0.0) * 0.1;
        gl_FragColor.a = 1.0;
    }
`;

const {Scene} = spritejs;
const {Cube, RenderTarget} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  autoRender: false,
  camera: {
    fov: 35,
  },
});

layer.camera.attributes.pos = [0, 1, 5];
layer.camera.lookAt([0, 0, 0]);

const texture = layer.createTexture({
  image: new Uint8Array([
    191, 25, 54, 255,
    96, 18, 54, 255,
    96, 18, 54, 255,
    37, 13, 53, 255,
  ]),
  width: 2,
  height: 2,
  magFilter: layer.gl.NEAREST,
});

const program = layer.createProgram({
  vertex,
  fragment,
  texture,
});

const target = new RenderTarget(layer.gl, {
  width: 512,
  height: 512,
  camera: {
    fov: 35,
  },
});
target.camera.attributes.pos = [0, 1, 5];
target.camera.lookAt([0, 0, 0]);

const mesh = new Cube(program);
target.append(mesh);

const targetProgram = layer.createProgram({
  vertex,
  fragment,
  texture: target.texture,
});

target.addEventListener('beforerender', (e) => {
  layer.gl.clearColor(0.15, 0.05, 0.2, 1);
});

target.addEventListener('afterrender', (e) => {
  layer.gl.clearColor(1, 1, 1, 0);
});

const mesh2 = new Cube(targetProgram);
layer.append(mesh2);

layer.tick(() => {
  layer.renderTarget(target);
  mesh.attributes.rotateY -= 1.5;
  mesh2.attributes.rotateY -= 0.9;
  mesh2.attributes.rotateX -= 1;
});