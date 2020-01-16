## 通用 GPU

在3D扩展中，除了后期处理通道外，我们还可以给layer加通用GPU通道，这样可以更灵活地利用GPU的高性能实现各种效果。

```js
const vertex = /* glsl */ `
    precision highp float;

    attribute vec2 coords;
    attribute vec4 random;

    uniform float uTime;
    uniform sampler2D tPosition;
    uniform sampler2D tVelocity;

    varying vec4 vRandom;
    varying vec4 vVelocity;

    void main() {
        vRandom = random;

        // Get position from texture, rather than attribute
        vec4 position = texture2D(tPosition, coords);
        vVelocity = texture2D(tVelocity, coords);
        
        // Add some subtle random oscillating so it never fully stops
        position.xy += sin(vec2(uTime) * vRandom.wy + vRandom.xz * 6.28) * vRandom.zy * 0.1;

        gl_Position = vec4(position.xy, 0, 1);
        gl_PointSize = mix(2.0, 15.0, vRandom.x);

        // Make bigger while moving
        gl_PointSize *= 1.0 + min(1.0, length(vVelocity.xy));

    }
`;

const fragment = /* glsl */ `
    precision highp float;

    varying vec4 vRandom;
    varying vec4 vVelocity;

    void main() {

        // Circle shape
        if (step(0.5, length(gl_PointCoord.xy - 0.5)) > 0.0) discard;

        // Random colour
        vec3 color = vec3(vRandom.zy, 1.0) * mix(0.7, 2.0, vRandom.w);

        // Fade to white when not moving, with an ease off curve
        gl_FragColor.rgb = mix(vec3(1), color, 1.0 - pow(1.0 - smoothstep(0.0, 0.7, length(vVelocity.xy)), 2.0));

        gl_FragColor.a = 1.0;
    }
`;

const positionFragment = /* glsl */ `
    precision highp float;

    uniform float uTime;
    uniform sampler2D tVelocity;

    // Default texture uniform for GPGPU pass is 'tMap'.
    // Can use the textureUniform parameter to update.
    uniform sampler2D tMap;

    varying vec2 vUv;

    void main() {
        vec4 position = texture2D(tMap, vUv);
        vec4 velocity = texture2D(tVelocity, vUv);

        position.xy += velocity.xy * 0.01;
                        
        // Keep in bounds
        vec2 limits = vec2(1);
        position.xy += (1.0 - step(-limits.xy, position.xy)) * limits.xy * 2.0;
        position.xy -= step(limits.xy, position.xy) * limits.xy * 2.0;

        gl_FragColor = position;
    }
`;

const velocityFragment = /* glsl */ `
    precision highp float;

    uniform float uTime;
    uniform sampler2D tPosition;
    uniform sampler2D tMap;
    uniform vec2 uMouse;

    varying vec2 vUv;

    void main() {
        vec4 position = texture2D(tPosition, vUv);
        vec4 velocity = texture2D(tMap, vUv);

        // Repulsion from mouse
        vec2 toMouse = position.xy - uMouse;
        float strength = smoothstep(0.3, 0.0, length(toMouse));
        velocity.xy += strength * normalize(toMouse) * 0.5;

        // Friction
        velocity.xy *= 0.98;

        gl_FragColor = velocity;
    }
`;

const {Scene} = spritejs;
const {Vec2, GPGPU, Geometry, Mesh3d} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
  },
  ambientColor: 'white',
});

layer.camera.attributes.pos = [0, 0, 5];

// Common uniforms
const time = {value: 0};
const mouse = {value: new Vec2()};

// The number of particles will determine how large the GPGPU textures are,
// and therefore how expensive the GPU calculations will be.
// Below I'm using 65536 to use every pixel of a 256x256 texture. If I used one more (65537),
// it would need to use a 512x512 texture - the GPU would then perform calculations for each pixel,
// meaning that nearly 3/4 of the texture (196607 pixels) would be redundant.
const numParticles = 65536;

// Create the initial data arrays for position and velocity. 4 values for RGBA channels in texture.
const initialPositionData = new Float32Array(numParticles * 4);
const initialVelocityData = new Float32Array(numParticles * 4);

// Random to be used as regular static attribute
const random = new Float32Array(numParticles * 4);
for(let i = 0; i < numParticles; i++) {
  initialPositionData.set([
    (Math.random() - 0.5) * 2.0,
    (Math.random() - 0.5) * 2.0,
    0, // the Green and Alpha channels go unused in this example, however I set
    1, // unused Alpha to 1 so that texture is visible in WebGL debuggers
  ], i * 4);
  initialVelocityData.set([0, 0, 0, 1], i * 4);
  random.set([
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
  ], i * 4);
}

const gl = layer.gl;

// Initialise the GPGPU classes, creating the FBOs and corresponding texture coordinates
const position = new GPGPU(gl, {data: initialPositionData});
const velocity = new GPGPU(gl, {data: initialVelocityData});

// Add the simulation shaders as passes to each GPGPU class
position.addPass({
  fragment: positionFragment,
  uniforms: {
    uTime: time,
    tVelocity: velocity.uniform,
  },
});
velocity.addPass({
  fragment: velocityFragment,
  uniforms: {
    uTime: time,
    uMouse: mouse,
    tPosition: position.uniform,
  },
});

// Now we can create our geometry, using the coordinates from above.
// We don't use the velocity or position data as attributes,
// instead we will get this from the FBO textures in the shader.
const model = new Geometry(gl, {
  random: {size: 4, data: random},

  // Could use either position or velocity coords, as they are the same
  coords: {size: 2, data: position.coords},
});

const program = layer.createProgram({
  vertex,
  fragment,
  uniforms: {
    uTime: time,
    tPosition: position.uniform,
    tVelocity: velocity.uniform,
  },
});

const points = new Mesh3d(program, {model, mode: gl.POINTS});

// Add handlers to get mouse position
const isTouchCapable = 'ontouchstart' in window;
if(isTouchCapable) {
  window.addEventListener('touchstart', updateMouse, false);
  window.addEventListener('touchmove', updateMouse, false);
} else {
  window.addEventListener('mousemove', updateMouse, false);
}

function updateMouse(e) {
  if(e.changedTouches && e.changedTouches.length) {
    e.x = e.changedTouches[0].pageX;
    e.y = e.changedTouches[0].pageY;
  }
  if(e.x === undefined) {
    e.x = e.pageX;
    e.y = e.pageY;
  }

  // Get mouse value in -1 to 1 range, with y flipped
  mouse.value.set(
    (e.x / gl.renderer.width) * 2 - 1,
    (1.0 - e.y / gl.renderer.height) * 2 - 1
  );
}

layer.append(points);

layer.tick((t) => {
  time.value = t * 0.001;

  // Update the GPGPU classes
  velocity.render();
  position.render();
});
```

<iframe src="/demo/#/3d/gpgpu" height="750"></iframe>