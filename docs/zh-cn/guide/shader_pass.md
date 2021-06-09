## Shader 和 Pass

SpriteJS<sup>Next</sup>在WebGL/WebGL2模式下，可以支持自定义Shader，这样我们就可以创建自定义的渲染模式。

比如我们要想把Path元素的背景填充修改为虚线填充，我们可以自定义Shader实现：

```js
const vertex = `
  attribute vec3 a_vertexPosition;
  attribute vec4 a_color;
  varying vec4 vColor;

  void main() {
    gl_PointSize = 1.0;
    gl_Position = vec4(a_vertexPosition.xy, 1.0, 1.0);
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
```

<iframe src="/demo/#/shader_and_pass/fill_color" height="750"></iframe>

还可以创建更复杂的Shader：

```js
const vertex = `
  attribute vec3 a_vertexPosition;
  // attribute vec4 a_color;
  // varying vec4 vColor;

  void main() {
    gl_PointSize = 1.0;
    gl_Position = vec4(a_vertexPosition.xy, 1.0, 1.0);
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
```

上面的代码通过shader创建的云层和地面。

<iframe src="/demo/#/shader_and_pass/custom_shader" height="750"></iframe>

### 后期处理通道

在`3.2`之后的版本中，我们还可以将layer渲染的结果送入后期处理通道进行处理：

```js
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
```

这样我们就可以方便灵活地在图层上实现各种视觉特效和交互特效了。

<iframe src="/demo/#/shader_and_pass/pass" height="750"></iframe>