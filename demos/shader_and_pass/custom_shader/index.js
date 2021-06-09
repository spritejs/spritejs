const vertex = `
  attribute vec3 a_vertexPosition;
  // attribute vec4 a_color;
  // varying vec4 vColor;

  uniform mat3 viewMatrix;
  uniform mat3 projectionMatrix;

  void main() {
    gl_PointSize = 1.0;
    vec3 pos = projectionMatrix * viewMatrix * vec3(a_vertexPosition.xy, 1.0);
    gl_Position = vec4(pos.xy, 1.0, 1.0);
    // vColor = a_color;
  }
`;

const fragment = `
precision mediump float;

highp float random(vec2 co)
{
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}

// Value Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
highp float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix( mix( random( i + vec2(0.0,0.0) ),
                    random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                    random( i + vec2(1.0,1.0) ), u.x), u.y);
}

#ifndef OCTAVES
#define OCTAVES 6
#endif
float mist(vec2 st) {
  //Initial values
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 0.0;

  // Loop of octaves
  for(int i = 0; i < OCTAVES; i++) {
    value += amplitude * noise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb(vec3 c){
  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}

uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
  st.x += 0.1 * u_time; 
  gl_FragColor = vec4(hsb2rgb(vec3(mist(st), 1.0, 1.0)),1.0);
}
`;

const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

(async function () {
  const container = document.getElementById('stage');
  const scene = new spritejs.Scene({
    container,
    // displayRatio: 2,
    width: 600,
    height: 600,
    // mode: 'stickyHeight',
    // contextType: '2d',
  });

  const fglayer = scene.layer('fglayer', {autoRender: false});
  await scene.preload([birdsRes, birdsJsonUrl]);

  const program = fglayer.renderer.createProgram({vertex, fragment});

  const sky = new spritejs.Block();
  sky.attr({
    size: [600, 600],
  });
  sky.setProgram(program);
  const {width, height} = fglayer.getResolution();
  sky.setUniforms({
    u_time: 0,
    u_resolution: [width, height],
  });
  sky.setShaderAttribute('a_pp', () => {
    return [Math.random(), Math.random(), Math.random()];
  });
  fglayer.append(sky);

  const bird = new spritejs.Sprite('bird1.png');
  bird.attr({
    anchor: 0.5,
    pos: [300, 300],
    scale: 0.5,
  });
  fglayer.append(bird);

  let idx = 0;
  setInterval(() => {
    // bird.forceUpdate();
    bird.attributes.texture = `bird${++idx % 3 + 1}.png`;
  }, 100);

  requestAnimationFrame(function update(t) {
    sky.setUniforms({
      u_time: t / 1000,
    });
    fglayer.render();
    requestAnimationFrame(update);
  });
}());