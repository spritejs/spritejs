const fragment = /* glsl */ `
  precision highp float;

  uniform sampler2D tMap;
  uniform sampler2D tFluid;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec3 fluid = texture2D(tFluid, vUv).rgb;
    vec2 uv = vUv - fluid.rg * 0.0002;

    gl_FragColor = mix( texture2D(tMap, uv), vec4(fluid * 0.1 + 0.5, 1), step(0.5, vUv.x) ) ;

    // Oscillate between fluid values and the distorted scene
    // gl_FragColor = mix(texture2D(tMap, uv), vec4(fluid * 0.1 + 0.5, 1), smoothstep(0.0, 0.7, sin(uTime)));
  }
`;

const baseVertex = /* glsl */ `
  precision highp float;
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform vec2 texelSize;
  void main () {
    vUv = uv;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(position, 0, 1);
  }
`;

const clearShader = /* glsl */ `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  uniform sampler2D uTexture;
  uniform float value;
  void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
  }
`;

const splatShader = /* glsl */ `
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uTarget;
  uniform float aspectRatio;
  uniform vec3 color;
  uniform vec2 point;
  uniform float radius;
  void main () {
    vec2 p = vUv - point.xy;
    p.x *= aspectRatio;
    vec3 splat = exp(-dot(p, p) / radius) * color;
    vec3 base = texture2D(uTarget, vUv).xyz;
    gl_FragColor = vec4(base + splat, 1.0);
  }
`;

const advectionManualFilteringShader = /* glsl */ `
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 texelSize;
  uniform vec2 dyeTexelSize;
  uniform float dt;
  uniform float dissipation;
  vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
    vec2 st = uv / tsize - 0.5;
    vec2 iuv = floor(st);
    vec2 fuv = fract(st);
    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
  }
  void main () {
    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
    gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);
    gl_FragColor.a = 1.0;
  }
`;

const advectionShader = /* glsl */ `
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 texelSize;
  uniform float dt;
  uniform float dissipation;
  void main () {
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    gl_FragColor = dissipation * texture2D(uSource, coord);
    gl_FragColor.a = 1.0;
  }
`;

const divergenceShader = /* glsl */ `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uVelocity;
  void main () {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    vec2 C = texture2D(uVelocity, vUv).xy;
    if (vL.x < 0.0) { L = -C.x; }
    if (vR.x > 1.0) { R = -C.x; }
    if (vT.y > 1.0) { T = -C.y; }
    if (vB.y < 0.0) { B = -C.y; }
    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
  }
`;

const curlShader = /* glsl */ `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uVelocity;
  void main () {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    float vorticity = R - L - T + B;
    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
  }
`;

const vorticityShader = /* glsl */ `
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D uVelocity;
  uniform sampler2D uCurl;
  uniform float curl;
  uniform float dt;
  void main () {
    float L = texture2D(uCurl, vL).x;
    float R = texture2D(uCurl, vR).x;
    float T = texture2D(uCurl, vT).x;
    float B = texture2D(uCurl, vB).x;
    float C = texture2D(uCurl, vUv).x;
    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
    force /= length(force) + 0.0001;
    force *= curl * C;
    force.y *= -1.0;
    vec2 vel = texture2D(uVelocity, vUv).xy;
    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
  }
`;

const pressureShader = /* glsl */ `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;
  void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    float C = texture2D(uPressure, vUv).x;
    float divergence = texture2D(uDivergence, vUv).x;
    float pressure = (L + R + B + T - divergence) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`;

const gradientSubtractShader = /* glsl */ `
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uPressure;
  uniform sampler2D uVelocity;
  void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;

const {Scene} = spritejs;
const {RenderTarget, Mesh3d, Geometry, Cube, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  // autoRender: false,
  camera: {
    fov: 35,
  },
  post: true,
});

layer.camera.attributes.pos = [0, 1, 5];
layer.camera.lookAt([0, 0, 0]);

const post = layer.post;

// Helper functions for larger device support
function getSupportedFormat(gl, internalFormat, format, type) {
  if(!supportRenderTextureFormat(gl, internalFormat, format, type)) {
    switch (internalFormat) {
      case gl.R16F:
        return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
      case gl.RG16F:
        return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
      default:
        return null;
    }
  }

  return {internalFormat, format};
}

function supportRenderTextureFormat(gl, internalFormat, format, type) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  if(status !== gl.FRAMEBUFFER_COMPLETE) return false;
  return true;
}

// Resolution of simulation
const simRes = 128;
const dyeRes = 512;

// Main inputs to control look and feel of fluid
const iterations = 3;
const densityDissipation = 0.97;
const velocityDissipation = 0.98;
const pressureDissipation = 0.8;
const curlStrength = 20;
const radius = 0.2;

// Common uniform
const texelSize = {value: [1 / simRes, 1 / simRes]};

const renderer = layer.renderer;
const gl = layer.gl;

// Get supported formats and types for FBOs
const supportLinearFiltering = renderer.extensions[`OES_texture_${renderer.isWebgl2 ? '' : 'half_'}float_linear`];
const halfFloat = renderer.isWebgl2 ? gl.HALF_FLOAT // eslint-disable-line no-nested-ternary
  : renderer.extensions.OES_texture_half_float ? renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES
    : gl.UNSIGNED_BYTE;

const filtering = supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
let rgba,
  rg,
  r;

if(renderer.isWebgl2) {
  rgba = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloat);
  rg = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloat);
  r = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloat);
} else {
  rgba = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloat);
  rg = rgba;
  r = rgba;
}

// Create fluid simulation FBOs
const density = new RenderTarget(gl, {
  width: dyeRes,
  height: dyeRes,
  type: halfFloat,
  format: rgba.format,
  internalFormat: rgba.internalFormat,
  minFilter: filtering,
  depth: false,
  buffer: true,
});

const velocity = new RenderTarget(gl, {
  width: simRes,
  height: simRes,
  type: halfFloat,
  format: rg.format,
  internalFormat: rg.internalFormat,
  minFilter: filtering,
  depth: false,
  buffer: true,
});

const pressure = new RenderTarget(gl, {
  width: simRes,
  height: simRes,
  type: halfFloat,
  format: r.format,
  internalFormat: r.internalFormat,
  minFilter: gl.NEAREST,
  depth: false,
  buffer: true,
});

const divergence = new RenderTarget(gl, {
  width: simRes,
  height: simRes,
  type: halfFloat,
  format: r.format,
  internalFormat: r.internalFormat,
  minFilter: gl.NEAREST,
  depth: false,
});

const curl = new RenderTarget(gl, {
  width: simRes,
  height: simRes,
  type: halfFloat,
  format: r.format,
  internalFormat: r.internalFormat,
  minFilter: gl.NEAREST,
  depth: false,
});

const triangle = new Geometry(gl, {
  position: {size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3])},
  uv: {size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2])},
});

// Create fluid simulation programs
const clearProgram = new Mesh3d(layer.createProgram({
  vertex: baseVertex,
  fragment: clearShader,
  uniforms: {
    texelSize,
    uTexture: {value: null},
    value: {value: pressureDissipation},
  },
  depthTest: false,
  depthWrite: false,
}), {
  model: triangle,
});

const splatProgram = new Mesh3d(layer.createProgram({
  vertex: baseVertex,
  fragment: splatShader,
  uniforms: {
    texelSize,
    uTarget: {value: null},
    aspectRatio: {value: 1},
    color: {value: [0, 0, 0]},
    point: {value: [0, 0]},
    radius: {value: 1},
  },
  depthTest: false,
  depthWrite: false,
}), {
  model: triangle,
});

const advectionProgram = new Mesh3d(layer.createProgram({
  vertex: baseVertex,
  fragment: supportLinearFiltering ? advectionShader : advectionManualFilteringShader,
  uniforms: {
    texelSize,
    dyeTexelSize: {value: [1 / dyeRes, 1 / dyeRes]},
    uVelocity: {value: null},
    uSource: {value: null},
    dt: {value: 0.016},
    dissipation: {value: 1.0},
  },
  depthTest: false,
  depthWrite: false,
}), {
  model: triangle,
});

const divergenceProgram = new Mesh3d(layer.createProgram({
  vertex: baseVertex,
  fragment: divergenceShader,
  uniforms: {
    texelSize,
    uVelocity: {value: null},
  },
  depthTest: false,
  depthWrite: false,
}), {
  model: triangle,
});

const curlProgram = new Mesh3d(layer.createProgram({
  vertex: baseVertex,
  fragment: curlShader,
  uniforms: {
    texelSize,
    uVelocity: {value: null},
  },
  depthTest: false,
  depthWrite: false,
}), {
  model: triangle,
});

const vorticityProgram = new Mesh3d(layer.createProgram({
  vertex: baseVertex,
  fragment: vorticityShader,
  uniforms: {
    texelSize,
    uVelocity: {value: null},
    uCurl: {value: null},
    curl: {value: curlStrength},
    dt: {value: 0.016},
  },
  depthTest: false,
  depthWrite: false,
}), {
  model: triangle,
});

const pressureProgram = new Mesh3d(layer.createProgram({
  vertex: baseVertex,
  fragment: pressureShader,
  uniforms: {
    texelSize,
    uPressure: {value: null},
    uDivergence: {value: null},
  },
  depthTest: false,
  depthWrite: false,
}), {
  model: triangle,
});

const gradienSubtractProgram = new Mesh3d(layer.createProgram({
  vertex: baseVertex,
  fragment: gradientSubtractShader,
  uniforms: {
    texelSize,
    uPressure: {value: null},
    uVelocity: {value: null},
  },
  depthTest: false,
  depthWrite: false,
}), {
  model: triangle,
});

const splats = [];

// Create handlers to get mouse position and velocity
const isTouchCapable = 'ontouchstart' in window;
if(isTouchCapable) {
  window.addEventListener('touchstart', updateMouse, false);
  window.addEventListener('touchmove', updateMouse, false);
} else {
  window.addEventListener('mousemove', updateMouse, false);
}

const lastMouse = {x: 0, y: 0};
function updateMouse(e) {
  if(e.changedTouches && e.changedTouches.length) {
    e.x = e.changedTouches[0].pageX;
    e.y = e.changedTouches[0].pageY;
  }
  if(e.x === undefined) {
    e.x = e.pageX;
    e.y = e.pageY;
  }

  if(!lastMouse.isInit) {
    lastMouse.isInit = true;

    // First input
    lastMouse.x = e.x;
    lastMouse.y = e.y;
  }

  const deltaX = e.x - lastMouse.x;
  const deltaY = e.y - lastMouse.y;

  lastMouse.x = e.x;
  lastMouse.y = e.y;
  // console.log(deltaX, deltaY);
  // Add if the mouse is moving
  if(Math.abs(deltaX) || Math.abs(deltaY)) {
    splats.push({
      // Get mouse value in 0 to 1 range, with y flipped
      x: e.x / renderer.width,
      y: 1.0 - e.y / renderer.height,
      dx: deltaX * 5.0,
      dy: deltaY * -5.0,
    });
  }
}

// Function to draw number of interactions onto input render target
function splat({x, y, dx, dy}) {
  splatProgram.program.uniforms.uTarget.value = velocity.texture;
  splatProgram.program.uniforms.aspectRatio.value = renderer.width / renderer.height;
  splatProgram.program.uniforms.point.value = [x, y];
  splatProgram.program.uniforms.color.value = [dx, dy, 1.0];
  splatProgram.program.uniforms.radius.value = radius / 100.0;

  layer.renderTarget(velocity, {
    root: splatProgram,
    sort: false,
    update: false,
  });
  velocity.swap();

  splatProgram.program.uniforms.uTarget.value = density.texture;

  layer.renderTarget(density, {
    root: splatProgram,
    sort: false,
    update: false,
  });

  density.swap();
}

const normalProgram = layer.createProgram({
  ...shaders.NORMAL,
});

const mesh = new Cube(normalProgram);
layer.append(mesh);

for(let i = 0; i < 20; i++) {
  const m = mesh.cloneNode();
  m.attributes.pos = [
    Math.random() * 3 - 1.5,
    Math.random() * 3 - 1.5,
    Math.random() * 3 - 1.5,
  ];
  m.attributes.rotate = [
    Math.random() * 360 - 180,
    Math.random() * 360 - 180,
    0,
  ];
  m.attributes.scale = Math.random() * 0.5 + 0.1;
  mesh.append(m);
}

const pass = post.addPass({
  fragment,
  uniforms: {
    tFluid: {value: null},
    uTime: {value: 0},
  },
});
layer.bindTime(pass);

// requestAnimationFrame(update);

layer.ticker(() => {
  // Perform all of the fluid simulation renders
  // No need to clear during sim, saving a number of GL calls.
  layer.autoClear = false;

  // Render all of the inputs since last frame
  for(let i = splats.length - 1; i >= 0; i--) {
    const s = splats.splice(i, 1)[0];
    splat(s);
  }

  curlProgram.program.uniforms.uVelocity.value = velocity.texture;
  layer.renderTarget(curl, {
    root: curlProgram,
    sort: false,
    update: false,
  });

  vorticityProgram.program.uniforms.uVelocity.value = velocity.texture;
  vorticityProgram.program.uniforms.uCurl.value = curl.texture;

  layer.renderTarget(velocity, {
    root: vorticityProgram,
    sort: false,
    update: false,
  });
  velocity.swap();

  divergenceProgram.program.uniforms.uVelocity.value = velocity.texture;
  layer.renderTarget(divergence, {
    root: divergenceProgram,
    sort: false,
    update: false,
  });

  clearProgram.program.uniforms.uTexture.value = pressure.texture;
  clearProgram.program.uniforms.value.value = pressureDissipation;

  layer.renderTarget(pressure, {
    root: clearProgram,
    sort: false,
    update: false,
  });
  pressure.swap();

  pressureProgram.program.uniforms.uDivergence.value = divergence.texture;

  for(let i = 0; i < iterations; i++) {
    pressureProgram.program.uniforms.uPressure.value = pressure.texture;

    layer.renderTarget(pressure, {
      root: pressureProgram,
      sort: false,
      update: false,
    });
    pressure.swap();
  }

  gradienSubtractProgram.program.uniforms.uPressure.value = pressure.texture;
  gradienSubtractProgram.program.uniforms.uVelocity.value = velocity.texture;

  layer.renderTarget(velocity, {
    root: gradienSubtractProgram,
    sort: false,
    update: false,
  });
  velocity.swap();

  advectionProgram.program.uniforms.dyeTexelSize.value = 1 / simRes;
  advectionProgram.program.uniforms.uVelocity.value = velocity.texture;
  advectionProgram.program.uniforms.uSource.value = velocity.texture;
  advectionProgram.program.uniforms.dissipation.value = velocityDissipation;

  layer.renderTarget(velocity, {
    root: advectionProgram,
    sort: false,
    update: false,
  });
  velocity.swap();

  advectionProgram.program.uniforms.dyeTexelSize.value = 1 / dyeRes;
  advectionProgram.program.uniforms.uVelocity.value = velocity.texture;
  advectionProgram.program.uniforms.uSource.value = density.texture;
  advectionProgram.program.uniforms.dissipation.value = densityDissipation;

  layer.renderTarget(density, {
    root: advectionProgram,
    sort: false,
    update: false,
  });
  density.swap();

  // Set clear back to default
  layer.autoClear = true;

  // Update post pass uniform with the simulation output
  pass.uniforms.tFluid.value = density.texture;

  mesh.attributes.rotateY -= 0.15;
  mesh.attributes.rotateX -= 0.3;
});