## 渲染模式

SpriteJS<sup>Next</sup>支持所有的WebGL渲染模式，我们可以通过设置元素的mode属性来改变它的渲染模式。

mode属性的类型是字符串，可选的值如下：

- POINTS 以`gl.POINTS`模式渲染
- LINES 以`gl.LINES`模式渲染
- LINE_LOOP 以`gl.LINE_LOOP`模式渲染
- LINE_STRIP 以`gl.LINE_STRIP`模式渲染
- TRIANGLES 默认值，以`gl.TRIANGLES`模式渲染

这些模式各有用处，举例如下。

以点的模式来渲染粒子：

<iframe src="/demo/#/3d/particles" height="550"></iframe>

渲染模型的轮廓：

```js
const {Scene} = spritejs;
const {Mesh3d, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 45,
    pos: [-2, 2, 2],
  },
  directionalLight: [0.5, 1.0, -0.3, 0.15],
});

const program = layer.createProgram(shaders.NORMAL);

const model = layer.loadModel('https://s2.ssl.qhres.com/static/bf607b5f64a91492.json');
const macow = new Mesh3d(program, {model, mode: 'LINE_STRIP'});
layer.append(macow);
layer.setOrbit({target: [0, 0.7, 0]});

/* globals dat */
const initGui = () => {
  const gui = new dat.GUI();
  gui.add({mode: 'LINE_STRIP'}, 'mode', ['LINES', 'LINE_LOOP', 'LINE_STRIP', 'TRIANGLES']).onChange((val) => {
    macow.attributes.mode = val;
  });
};

initGui();
```

<iframe src="/demo/#/3d/model2" height="550"></iframe>