const vertex = `
  attribute vec3 a_vertexPosition;
  attribute vec4 a_color;
  attribute vec3 a_vertexTextureCoord;

  varying vec3 vTextureCoord;
  varying vec4 vColor;

  void main() {
    gl_PointSize = 1.0;
    gl_Position = vec4(a_vertexPosition.xy, 1.0, 1.0);
    vColor = a_color;
    vTextureCoord = a_vertexTextureCoord;
  }
`;

const fragment = `
  precision mediump float;
  uniform vec4 u_color;
  uniform vec2 u_resolution;
  uniform sampler2D u_texSampler;

  varying vec4 vColor;
  varying vec3 vTextureCoord;

  void main() {
    vec4 texColor = texture2D(u_texSampler, vTextureCoord.xy);
    if(texColor.a == 0.0) {
      gl_FragColor = vColor;
    }
  }
`;

const container = document.getElementById('stage');
const scene = new spritejs.Scene({
  container,
  width: 600,
  height: 600,
});

const fglayer = scene.layer('fglayer');
document.querySelector('#stage canvas').style.backgroundColor = '#eee';

const program = fglayer.renderer.createProgram({vertex, fragment});

const s = new spritejs.Ellipse();
s.attr({
  radius: [100, 50],
  pos: [300, 300],
  fillColor: 'blue',
});
function createMask() {
  const maskCanvas = new OffscreenCanvas(200, 100);
  const ctx = maskCanvas.getContext('2d');
  ctx.fillStyle = 'black';
  const path = new Path2D('M20,50L100,10L180,50L100,90Z');
  ctx.fill(path);
  return maskCanvas;
}
const texture = createMask();
s.attr({
  texture,
});

s.setProgram(program);
const {width, height} = fglayer.getResolution();
s.setUniforms({
  u_resolution: [width, height],
});
fglayer.append(s);