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

const vertex = `
precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec3 vNormal;

void main() {
    vNormal = normalize(normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragment = `
precision highp float;
precision highp int;

varying vec3 vNormal;

highp float noise(vec3 p) {
  vec3 i = floor(p);
  vec4 a = dot(i, vec3(1.0, 57.0, 21.0)) + vec4(0.0, 57.0, 21.0, 78.0);
  vec3 f = cos((p - i) * acos(-1.0)) * (-0.5) + 0.5;
  a = mix(sin(cos(a) * a), sin(cos(1.0 + a) * (1.0 + a)), f.x);
  a.xy = mix(a.xz, a.yw, f.y);
  return mix(a.x, a.y, f.z);
}

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb(vec3 c){
  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}

uniform float uTime;

void main() {
  vec3 normal = vNormal * uTime;
  gl_FragColor.rgb = hsb2rgb(vec3(noise(normal), 0.5, 0.5));
  gl_FragColor.a = 1.0;
}
`;

const program = layer.createProgram({
  vertex,
  fragment,
  cullFace: null,
}, {
  uniforms: {
    uTime: {value: 0},
  },
});

const cube = new Cube(program);
layer.append(cube);

layer.bindTime(program, {playbackRate: 0.2});

layer.setOrbit(); // 开启旋转控制