const fs = require('fs');
const {polyfill} = require('../lib/platform/node-canvas');
const {Scene, Label, ENV} = require('../lib');

polyfill({ENV});

const scene = new Scene({width: 512, height: 512});
const contextType = 'webgl';
const fglayer = scene.layer('fglayer', {
  contextType,
});


// const ss = new Sprite();
// ss.attr({
//   pos: [0, 0],
//   size: [512, 512],
//   bgcolor: 'rgba(255,255,255,0.5)',
// });

// fglayer.append(ss);

const vertex = `
  attribute vec3 a_vertexPosition;
  attribute vec4 a_color;
  varying vec4 vColor;
  uniform mat3 viewMatrix;
  uniform mat3 projectionMatrix;
  attribute vec3 a_vertexTextureCoord;
  varying vec3 vTextureCoord;

  void main() {
    gl_PointSize = 1.0;
    vec3 pos = projectionMatrix * viewMatrix * vec3(a_vertexPosition.xy, 1.0);
    gl_Position = vec4(pos.xy, 1.0, 1.0);
    vColor = a_color;
    vTextureCoord = a_vertexTextureCoord;
  }
`;

const fragment = `
  precision mediump float;
  varying vec4 vColor;
  varying vec3 vTextureCoord;
  
  uniform sampler2D u_texSampler;
  uniform vec3 u_shadowColor;

  vec3 blurX(in vec3 result) {
    float weight[5];
    weight[0] = 0.227027;
    weight[1] = 0.1945946;
    weight[2] = 0.1216216;
    weight[3] = 0.054054;
    weight[4] = 0.016216;
    result *= weight[0];
    vec2 tex_offset = vec2(0.01);
    for(int i = 1; i < 5; ++i) {
      float f = float(i);
      result += texture2D(u_texSampler, vTextureCoord.xy + vec2(tex_offset.x * f, 0.0)).rgb * weight[i];
      result += texture2D(u_texSampler, vTextureCoord.xy - vec2(tex_offset.x * f, 0.0)).rgb * weight[i];
    }
    return result;
  }

  vec3 blurY(in vec3 result) {
    float weight[5];
    weight[0] = 0.227027;
    weight[1] = 0.1945946;
    weight[2] = 0.1216216;
    weight[3] = 0.054054;
    weight[4] = 0.016216;
    result *= weight[0];
    vec2 tex_offset = vec2(0.01);
    for(int i = 1; i < 5; ++i) {
      float f = float(i);
      result += texture2D(u_texSampler, vTextureCoord.xy + vec2(tex_offset.y * f, 0.0)).rgb * weight[i];
      result += texture2D(u_texSampler, vTextureCoord.xy - vec2(tex_offset.y * f, 0.0)).rgb * weight[i];
    }
    return result;
  }

  void main() {
    vec4 color = vColor;
    vec4 texColor = texture2D(u_texSampler, vTextureCoord.xy);
    // texColor.rgb = u_shadowColor;
    float alpha = texColor.a;
    vec3 result = texColor.rgb;

    for(int i = 1; i < 5; i++) {
      result = blurX(result);
    }
    for(int i = 1; i < 5; i++) {
      result = blurY(result);
    }

    color.rgb = mix(color.rgb, result, alpha);
    color.rgb = mix(result, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));
    color.a = texColor.a + (1.0 - texColor.a) * color.a;
    gl_FragColor = color;
  }
`;

const program = fglayer.renderer.createProgram({vertex, fragment});

const text = new Label('ABC');
text.attr({
  pos: [256, 256],
  size: [100, 100],
  anchor: 0.5,
  bgcolor: 'rgba(255, 0, 0, 0.5)',
  // filter: 'grayscale(1.0)',
  font: 'normal 32px Arial',
});
text.setProgram(program);
text.setUniforms({
  u_shadowColor: [1, 1, 0],
});

fglayer.append(text);

// await fglayer.prepareRender;

text.textImageReady.then(() => {
  const canvas = scene.snapshot();
  fs.writeFileSync(`snap.text.${contextType}.png`, canvas.toBuffer());
});
