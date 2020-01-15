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

我们可以通过两个向量的叉积计算出这两个向量所在平面的法向量。

