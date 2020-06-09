const vertex = /* glsl */ `
    attribute vec2 uv;
    attribute vec3 position;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec2 vUv;
    varying vec4 vMVPos;
    varying vec3 vPos;

    void main() {
        vUv = uv;
        vPos = position;
        vMVPos = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * vMVPos;
    }
`;

const fragment = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;

    varying vec2 vUv;
    varying vec4 vMVPos;
    varying vec3 vPos;

    void main() {
        vec3 tex = texture2D(tMap, vUv).rgb;
        
        float dist = length(vMVPos);
        float fog = smoothstep(2.0, 15.0, dist);
        tex = mix(tex, vec3(1), fog * 0.8);
        tex = mix(tex, vec3(1), smoothstep(1.0, 0.0, vPos.y)); 
        
        gl_FragColor.rgb = tex;
        gl_FragColor.a = 1.0;
    }
`;

const {Scene} = spritejs;
const {Camera, Mesh3d, Cylinder, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 45,
  },
  ambientColor: 'white',
});
layer.gl.clearColor(1, 1, 1, 1);
layer.camera.attributes.pos = [6, 6, 12];
// layer.camera.lookAt([0, 0, 0]);

const texture = layer.createTexture('https://p5.ssl.qhimg.com/t01749f23f82ef86c9f.jpg');
const program = layer.createProgram({
  vertex,
  fragment,
  texture,
});

const model = layer.loadModel('https://s4.ssl.qhres.com/static/4d2c8de20e171997.json');
const size = 20;
const num = size * size;

for(let i = 0; i < num; i++) {
  const tree = new Mesh3d(program, {model});
  layer.append(tree);
  tree.attributes.pos = [(i % size - size * 0.5) * 2, 0, (Math.floor(i / size) - size * 0.5) * 2];
  tree.attributes.y += Math.sin(tree.attributes.x * 0.5) * Math.sin(tree.attributes.z * 0.5) * 0.5;
  tree.attributes.rotateY = Math.random() * Math.PI * 2;
  tree.attributes.scale = 0.8 + Math.random() * 0.3;
}

const cameraProgram = layer.createProgram({
  ...shaders.NORMAL,
  cullFace: null,
});

// const frustumTransform = new Group3d();

const cameraShape = new Cylinder(cameraProgram, {
  radiusBottom: 0.2,
  height: 0.7,
  radialSegments: 4,
  openEnded: true,
  rotateOrder: 'XYZ',
  rotateX: -90,
  rotateY: 45,
});

function cameraPath(time, y) {
  const x = 4 * Math.sin(time);
  const z = 2 * Math.sin(time * 2);
  return [x, y, z];
}

// Add camera used for demonstrating frustum culling
const frustumCamera = new Camera(layer.gl, {
  fov: 65,
  far: 10,
});
frustumCamera.append(cameraShape);
layer.append(frustumCamera);

layer.setOrbit();

layer.tick((t) => {
  frustumCamera.attributes.pos = cameraPath(t * 0.001, 2);
  const target = cameraPath(t * 0.001 + 1, 1);
  frustumCamera.lookAt(target);
  frustumCamera.updateMatrixWorld();
  frustumCamera.updateFrustum();

  // Traverse all meshes in the scene
  layer.traverse((node) => {
    if(!node.body.draw) return;
    if(node === cameraShape) return;

    // perform the frustum test using the demo camera
    node.attributes.display = frustumCamera.frustumIntersects(node) ? '' : 'none';
  });
});