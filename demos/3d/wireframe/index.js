const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec2 uv;
    attribute vec3 position;
    attribute vec3 normal;

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

    uniform float uTime;
    uniform sampler2D tMap;

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vec3 normal = normalize(vNormal);
        vec3 tex = texture2D(tMap, vUv).rgb;
        
        vec3 light = normalize(vec3(0.5, 1.0, -0.3));
        float shading = dot(normal, light) * 0.15;
        gl_FragColor.rgb = tex + shading;
        gl_FragColor.a = 1.0;
    }
`;

const {Scene} = spritejs;
const {Mesh3d} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
  },
});

layer.camera.attributes.pos = [5, 3, 6];
layer.camera.lookAt([0, 0, 0]);

(async function () {
  const img = await layer.loadImage('https://p2.ssl.qhimg.com/t01598a49e49aba1046.jpg');
  const texture = layer.createTexture(img);
  const program = layer.createProgram({
    vertex,
    fragment,
    uniforms: {
      tMap: {value: texture},
    },
  });
  const model = await layer.loadModel('https://s3.ssl.qhres.com/static/8613b585d1542274.json');

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