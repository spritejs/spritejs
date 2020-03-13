const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 960,
  height: 540,
  displayRatio: 2,
});

const layer = scene.layer('fglayer');

const s = new Sprite('https://p1.ssl.qhimg.com/t01ea011242c0a2ea2c.jpg');
layer.append(s);

// https://zhuanlan.zhihu.com/p/38767820
const fragment = `precision mediump float;
  varying vec3 vTextureCoord;
  uniform sampler2D u_texSampler;
  uniform float u_aspect;
  uniform vec2 u_center;
  uniform float speed;
  uniform float u_time;

  void main() {
    vec2 tc = vTextureCoord.xy;
    vec2 p = (tc - u_center);
    p.x = p.x * u_aspect;
    float len = length(p);
    float amp = 1.0;
    float waves = 5.0;
    float radius = 0.2;
    float waves_factor = waves * len / radius;
    float current_progress = 0.005 * u_time;

    float band = 3.0;
    float wave_width = band * radius;
    float current_radius = radius * current_progress;
    float cut_factor = clamp(wave_width - abs(current_radius - len), 0.0, 1.0);
    vec2 uv_offset = (p / len) * cos((waves_factor - current_progress) * 3.14) * cut_factor;

    vec4 wave_image = texture2D(u_texSampler, fract(tc + uv_offset));
    vec4 origin_image = texture2D(u_texSampler, tc);
    gl_FragColor = mix(wave_image, origin_image, len);
  }
`;

const {width, height} = layer.getResolution();
const aspect = width / height;

layer.addPass({fragment,
  uniforms: {
    u_aspect: aspect,
    u_center: [0.5, 0.5],
    u_time: 0,
  }});

const passMesh = layer.pass[0];
layer.tick((t) => {
  passMesh.setUniforms({
    u_time: t % 3000,
  });
});

setInterval(() => {
  passMesh.setUniforms({u_center: [Math.random(), Math.random()]});
}, 3000);