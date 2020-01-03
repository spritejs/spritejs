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

layer.camera.attributes.pos = [8, 5, 15];
layer.camera.lookAt([0, 1.5, 0]);

(async function () {
  const img = await layer.loadImage('https://p3.ssl.qhimg.com/t01d6c6c93fdddf1e42.jpg');
  const texture = layer.createTexture(img);
  const program = layer.createProgram({
    vertex,
    fragment,
    uniforms: {
      tMap: {value: texture},
    },
  });
  const model = await layer.loadModel('https://s5.ssl.qhres.com/static/1eb3e9b91a296abd.json');
  const fox = new Mesh3d(program);
  fox.setGeometry(model);
  layer.append(fox);
  layer.setOrbit();
}());