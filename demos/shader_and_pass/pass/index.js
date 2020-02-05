const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 1200,
});

const layer = scene.layer('fglayer');

for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    const s = new Sprite({
      width: 100,
      height: 100,
      x: i * 120,
      y: j * 120,
      bgcolor: `hsl(${Math.random() * 360}, 50%, 50%)`,
    });
    layer.append(s);
  }
}

const fragment = `precision mediump float;
  varying vec3 vTextureCoord;
  uniform sampler2D u_texSampler;
  uniform vec2 u_mousePos;
  uniform vec2 u_resolution;
  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    st.y = 1.0 - st.y;
    float d = distance(st, u_mousePos);
    vec4 color = texture2D(u_texSampler, vTextureCoord.xy);
    color.a *= mix(0.1, 1.0, (1.0 - smoothstep(0.0, 0.2, d)));
    color.rgb *= 1.0 - step(0.2, d);
    gl_FragColor = color;
  }
`;

const {width, height} = layer.getResolution();
layer.addPass({fragment,
  uniforms: {
    u_resolution: [width, height],
    u_mousePos: [0.1, 0.1],
  }});

layer.addEventListener('mousemove', (e) => {
  // const {width, height} = layer.getResolution();
  const x = e.x / width,
    y = e.y / height;
  layer.pass[0].setUniforms({
    u_mousePos: [x, y],
  });
});

layer.tick();