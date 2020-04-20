const vertex = `
  attribute vec3 a_vertexPosition;
  attribute vec4 a_color;
  varying vec4 vColor;

  uniform mat3 viewMatrix;
  uniform mat3 projectionMatrix;

  void main() {
    gl_PointSize = 1.0;
    vec3 pos = projectionMatrix * viewMatrix * vec3(a_vertexPosition.xy, 1.0);
    gl_Position = vec4(pos.xy, 1.0, 1.0);
    vColor = a_color;
  }
`;

const fragment = `
  precision mediump float;
  uniform vec4 u_color;
  uniform vec2 u_resolution;
  varying vec4 vColor;

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float d = (st.x - st.y) / sqrt(2.0);
    d = fract(d * 50.0);
    d = 1.0 - abs(d);
    d = smoothstep(0.3, 0.4, d) - smoothstep(0.8, 0.9, d);
    gl_FragColor = d * vColor;
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
s.setProgram(program);
const {width, height} = fglayer.getResolution();
s.setUniforms({
  u_resolution: [width, height],
});
fglayer.append(s);