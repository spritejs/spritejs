## 分组

与2D一样，3D扩展支持分组，我们可以创建Group3d元素。

```js
const {Scene} = spritejs;
const {Cube, Sphere, Group3d, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
    pos: [5, 3, 6],
  },
});
layer.camera.lookAt([0, -0.5, 0]);

const program = layer.createProgram({
  ...shaders.NORMAL,
  cullFace: null,
});

const s1 = new Sphere(program, {
  phiLength: Math.PI, // 半球
  x: -1,
  rotateY: -90,
});

const s2 = s1.cloneNode();
s2.attr({
  x: 1,
  rotateY: 90,
});

const c = new Cube(program, {
  rotateY: 45,
  scale: 0.5,
});

const group = new Group3d();

group.append(s1, s2, c);

layer.append(group);

group.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 19000,
  iterations: Infinity,
});

c.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 11000,
  iterations: Infinity,
});
```

<iframe src="/demo/#/3d/group" height="600"></iframe>

在3D扩展中，layer上有一个默认的分组root，它是所有子元素共同的group，所以，上面的代码可以简化为：

```js
const {Scene} = spritejs;
const {Cube, Sphere, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
    pos: [5, 3, 6],
  },
});
layer.camera.lookAt([0, -0.5, 0]);

const program = layer.createProgram({
  ...shaders.NORMAL,
  cullFace: null,
});

const s1 = new Sphere(program, {
  phiLength: Math.PI, // 半球
  x: -1,
  rotateY: -90,
});

const s2 = s1.cloneNode();
s2.attr({
  x: 1,
  rotateY: 90,
});

const c = new Cube(program, {
  rotateY: 45,
  scale: 0.5,
});

layer.append(s1, s2, c);

layer.root.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 19000,
  iterations: Infinity,
});

c.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 11000,
  iterations: Infinity,
});
```

与2D不同的是，3D中的一切元素都是Group3d的派生类，因此我们也可以将元素直接append到任意一个3D元素上。

```js
const {Scene} = spritejs;
const {Sphere, Cube} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  autoRender: false,
  camera: {
    fov: 35,
  },
  ambientColor: 'white',
});

layer.camera.attributes.pos = [1, 7, 0];
layer.camera.lookAt([0, 0, 0]);

const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat3 normalMatrix;

    varying vec3 vNormal;
    varying vec4 vMVPos;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        
        vMVPos = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * vMVPos;
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;
    varying vec4 vMVPos;

    void main() {
        vec3 normal = normalize(vNormal);
        float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
        vec3 color = vec3(1.0, 0.5, 0.2) * (1.0 - 0.5 * lighting) + vMVPos.xzy * 0.1;
        
        float dist = length(vMVPos);
        float fog = smoothstep(4.0, 10.0, dist);
        color = mix(color, vec3(1.0), fog);
        
        gl_FragColor.rgb = color;
        gl_FragColor.a = 1.0;
    }
`;

const program = layer.createProgram({
  vertex,
  fragment,
});

const sphere = new Sphere(program, {
  radius: 0.15,
});

const cube = new Cube(program, {
  width: 0.3,
  height: 0.3,
  depth: 0.3});
const shapes = [cube];

cube.speed = -0.5;
layer.append(cube);

// Create random array of shapes
for(let i = 0; i < 50; i++) {
  const mesh = Math.random() > 0.5 ? cube : sphere;
  const shape = mesh.cloneNode();
  shape.attr({
    scale: Math.random() * 0.3 + 0.7,
    x: (Math.random() - 0.5) * 3,
    y: (Math.random() - 0.5) * 3,
    z: (Math.random() - 0.5) * 3,
  });
  shape.speed = (Math.random() - 0.5) * 0.7;

  // Attach them to a random, previously created shape
  const parent = shapes[Math.floor(Math.random() * shapes.length)];
  parent.append(shape);
  shapes.push(shape);
}

layer.tick((t) => {
  shapes.forEach((shape) => {
    shape.attributes.rotateY += 2 * shape.speed;
    shape.attributes.rotateX += 1.5 * shape.speed;
    shape.attributes.rotateZ += shape.speed;
  });
});
```

<iframe src="/demo/#/3d/group3" height="750"></iframe>