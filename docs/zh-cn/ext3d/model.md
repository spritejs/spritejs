## 模型

前面我们已经看到过，只要给元素传入一组顶点，就可以渲染出来。这一组顶点的数据，就是元素的模型 model。


但是实际上只有顶点是不够的，如果我们要比较逼真的点光源漫反射效果，还要计算出每个面的法向量 normal。

```js
const {Scene} = spritejs;
const {Mesh3d, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  width: 600,
  height: 600,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
    z: 8,
  },
});

const program = layer.createProgram({
  ...shaders.NORMAL,
  cullFace: null,
});

function normalize(v) {
  const len = Math.hypot(...v);
  return [v[0] / len, v[1] / len, v[2] / len];
}

// 两个向量的叉积就是这个向量的法向量
function getNormal(a, b, c) {
  const ab = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const bc = [b[0] - c[0], b[1] - c[1], b[2] - c[2]];

  return normalize([
    ab[1] * bc[2] - ab[2] * bc[1],
    ab[0] * bc[2] - ab[2] * bc[0],
    ab[0] * bc[1] - ab[1] * bc[0],
  ]);
}

const p = 1 / Math.sqrt(2);

const position = [
  -1, 0, -p,
  1, 0, -p,
  0, 1, p,
  -1, 0, -p,
  1, 0, -p,
  0, -1, p,
  1, 0, -p,
  0, -1, p,
  0, 1, p,
  -1, 0, -p,
  0, 1, p,
  0, -1, p,
];

const normal = [];

for(let i = 0; i < position.length; i += 9) {
  const a = [position[i], position[i + 1], position[i + 2]],
    b = [position[i + 3], position[i + 4], position[i + 5]],
    c = [position[i + 6], position[i + 7], position[i + 8]];

  const norm = getNormal(a, b, c);
  normal.push(...norm, ...norm, ...norm);
}

const model = {
  position,
  normal,
};

const sprite = new Mesh3d(program, {
  model,
});
layer.append(sprite);

sprite.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 7000,
  iterations: Infinity,
});

sprite.animate([
  {rotateZ: 0},
  {rotateZ: 360},
], {
  duration: 17000,
  iterations: Infinity,
});

sprite.animate([
  {rotateX: 0},
  {rotateX: -360},
], {
  duration: 11000,
  iterations: Infinity,
});

layer.setOrbit();
```

<iframe src="/demo/#/3d/geometry3" height="600"></iframe>

我们可以通过两个向量的叉积计算出这两个向量所在平面的法向量。

不过这样计算顶点和法向量也挺麻烦的，所以3D扩展内置了一些几何体，直接创建这些几何体的元素，就不用自己手动计算了。

目前支持的内置几何体包括以下几类：

- Cube - 立方体
- Cylinder - 圆柱体
- Plane - 平面
- Sphere - 球体

你可以像操作普通的2D元素那样给这些对象设置属性，比如：

```js
cube.attr({
  width: 1.0,
  height: 0.5,
  depth: 0.5,
});
```

### 批量绘制

我们可以通过给program传额外的attribute来做一些特别的事情，如果我们传的数据对象有instanced属性，那么引擎会启用批量绘制。

要动态传给元素model数据，我们可以在创建program的时候传入一个attributes配置，这个配置的内容是一组getter。

```js
const fragment = `
  precision highp float;
  precision highp int;

  varying vec3 vNormal;
  varying vec4 vColor;

  uniform vec4 lighting;

  void main() {
    vec3 normal = normalize(vNormal);
    float l = dot(normal, normalize(lighting.xyz));
    gl_FragColor.rgb = vColor.rgb + l * lighting.w;
    gl_FragColor.a = vColor.a;
  }
`;
const vertex = `
  precision highp float;
  precision highp int;

  attribute vec3 position;
  attribute vec3 normal;
  attribute vec4 color;
  attribute vec3 offset;
  attribute vec2 random;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform mat3 normalMatrix;

  varying vec3 vNormal;
  varying vec4 vColor;

  void rotate2d(inout vec2 v, float a){
    mat2 m = mat2(cos(a), -sin(a), sin(a),  cos(a));
    v = m * v;
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vColor = color;
    vec3 pos = position;
    rotate2d(pos.xz, random.x * 6.28);
    rotate2d(pos.xy, random.y * 6.28);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0) + vec4(offset, 1.0);
  }    
`;

const {Scene} = spritejs;
const {Cube} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
    pos: [0, 0, 7],
  },
});
layer.camera.lookAt([0, -0.5, 0]);

const program = layer.createProgram({
  vertex,
  fragment,
  cullFace: null,
  uniforms: {
    lighting: {value: [-0.3, 0.8, 0.6, 0.1]},
  },
}, {
  attributes: {
    offset(node, geometry) {
      const data = new Float32Array(5 * 5 * 3);
      for(let i = 0; i < 5; i++) {
        const p = -5 + 2 * i;
        for(let j = 0; j < 5; j++) {
          const q = -5 + 2 * j;
          data.set([p, q, 0], (i * 5 + j) * 3);
        }
      }
      return {instanced: 1, size: 3, data};
    },
    random(node, geometry) {
      const data = new Float32Array(5 * 5 * 2);
      for(let i = 0; i < 25; i++) {
        data.set([Math.random() * 2 - 1, Math.random() * 2 - 1], i * 2);
      }
      return {instanced: 1, size: 2, data};
    },
  },
});

const cube = new Cube(program);
cube.attributes.pos = [0, 0, 0];
cube.attributes.colors = 'red red blue blue orange orange';
cube.attributes.scale = 0.5;
layer.append(cube);
cube.animate([
  {rotateY: 0},
  {rotateY: -360},
], {
  duration: 5000,
  iterations: Infinity,
});
```

<iframe src="/demo/#/3d/instancing" height="600"></iframe>

## 共享模型

有时候，我们要创建许多个相同模型的对象，如果我们直接将model传给这些对象，那么它们之间的数据是不共享的，也就是说，我们可以改变一个元素的几何体数据，不会影响另一个元素。

但是，如果我们确定它们可以共享几何形状，那么我们可以先创建`Geometry`对象：

```js
const model = {
  position,
  normal,
};

const geometry = new Geometry({
  position: {size: 3, data: new Float32Array(model.position)},
  normal: {size: 3, data: new Float32Array(model.normal)},
});

const s1 = new Mesh3d(program, {model: geometry});
const s2 = new Mesh3d(program, {model: geometry}); // s1、s2 共享几何形状
```

如果要创建很多个元素，共享几何形状能够减少内存消耗。

💡如果使用cloneNode，被clone的对象和clone对象会自动共享几何形状。

如果我们要取消几何形状的共享（因为共享几何形状如果改变颜色，所有的元素会一起改变），我们可以调用对应元素的`remesh`方法，该方法刷新它的`geometry`和`mesh`信息。