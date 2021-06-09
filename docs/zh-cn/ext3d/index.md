# 3D 扩展

SpriteJS<sup>Next</sup>可以通过[3D扩展库](https://github.com/spritejs/sprite-extend-3d)来渲染3D元素。

## 安装

加载3D渲染库的方式非常简单，你可以直接通过CND加载

```html
<script src="https://unpkg.com/spritejs@3/dist/spritejs.es.min.js"></script>
<script src="https://unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.js"></script>
```

只要确保`sprite-extend-3d.js`加载在`spritejs`的JS之后即可。

💡考虑到最佳性能，`sprite-extend-3d.js`默认适配`chrome59`及以上浏览器，所以你只要用spritejs的ES编译版本即可。如果你希望支持较早的浏览器，`sprite-extend-3d.js`仍可支持早期版本，不过你需要在项目中修改babel配置，重新编译适配旧浏览器的版本。

加载之后，可以通过`spritejs.ext3d`来访问3D的API，并且可以通过`scene.layer3d(layerID)`来创建3D的渲染层。

```js
const {Scene} = spritejs;
const {Cube, shaders} = spritejs.ext3d;

const container = document.getElementById('container');
const scene = new Scene({container});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35, // Field of view
  },
});
layer.camera.attributes.pos = [3, 3, 5];

const program = layer.createProgram({
  ...shaders.NORMAL_GEOMETRY,
  cullFace: null,
});

const cube = new Cube(program, {
  colors: 'red red blue blue green green',
});
layer.append(cube);

layer.setOrbit(); // 开启旋转控制
```

<iframe src="/demo/#/3d/basic" height="500"></iframe>

当然，你也可以通过模块方式加载`sprite-extend-3d`：

```js
import {Scene} from 'spritejs';
import {Cube, shaders} from 'sprite-extend-3d';
```

## 坐标和相机

与2D的layer不同，layer3d采用WebGL坐标系，画布中心点的位置是[0,0,0]，水平向右是x轴，垂直向上是y轴，垂直于屏幕向外的是z轴。

![](https://p2.ssl.qhimg.com/t017063e6041bdc4b0f.png)

元素是否显示出来，显示在什么位置，与透视相机有关。

一个layer对应一个默认的透视相机，创建layer的时候可以初始化它，在后续渲染的时候也可以修改它的属性。上面的例子中，我们把相机放在坐标`[3, 3, 5]`的位置。

透视相机有一些参数，如下：

- near: 相机可以拍摄到的最近距离，默认为 0.1
- far: 相机可以拍摄到的最远距离，默认为 100
- fov: 视野宽度，默认是45度
- aspect: 宽高比，默认是1:1，但是如果preserveAspect配置不为false，layer会根据resolution来设置相机的宽高比
- preserveAspect: 默认为true，根据画布宽高比来保持相机宽高比，这样元素就不会被拉伸或压缩

默认情况下，相机的方向是朝着z轴负向无穷远处，而相机有一个方法叫lookAt，传入一个坐标，可以让相机朝向该位置拍摄。

<iframe src="/demo/#/3d/camera" height="500"></iframe>

## 绘制几何体

在3D的layer中，只要有顶点坐标就可以非常方便地绘制几何体。

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
    z: 5,
  },
});

const program = layer.createProgram({
  ...shaders.NORMAL_GEOMETRY,
  cullFace: null,
});

const p = 1 / Math.sqrt(2);
const model = {
  position: [
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
    0, -1, p],
};

const sprite = new Mesh3d(program, {
  model,
  colors: 'red blue green orange',
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

上面的代码中，我们传入一组顶点坐标，绘制了一个正四面体。

<iframe src="/demo/#/3d/geometry2" height="650"></iframe>

## 绘制模型

SpriteJS<sup>Next</sup>的3D扩展支持ThreeJS的json数据模型，因此只需要将模型以model参数传给Mesh3D对象即可。

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
  directionalLight: [0.5, 1.0, -0.3],
  directionalLightColor: [1, 1, 1, 0.15],
});

const program = layer.createProgram(shaders.NORMAL);

const model = layer.loadModel('https://s2.ssl.qhres2.com/static/bf607b5f64a91492.json');
const macow = new Mesh3d(program, {model});
layer.append(macow);
layer.setOrbit({target: [0, 0.7, 0]});
```

注意上面的代码里`layer.loadModel`是个异步方法，但是我们并不用等到model数据真正加载下来，可以直接把model（此时是一个promise）赋给Mesh3d元素，等数据加载完毕后，元素就会被渲染出来。

<iframe src="/demo/#/3d/model" height="650"></iframe>

有了模型，我们可以把纹理加上：

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
  directionalLight: [0.5, 1.0, -0.3],
  directionalLightColor: [1, 1, 1, 0.15],
});

const texture = layer.createTexture('https://p1.ssl.qhimg.com/t01b4bd0e2fb9f47550.jpg');
const program = layer.createProgram({
  ...shaders.NORMAL_TEXTURE,
  texture,
});

const model = layer.loadModel('https://s2.ssl.qhres2.com/static/bf607b5f64a91492.json');
const macow = new Mesh3d(program, {model});
layer.append(macow);
layer.setOrbit({target: [0, 0.7, 0]});
```

<iframe src="/demo/#/3d/model_texture" height="650"></iframe>

我们只要通过`layer.createTexture`创建texture对象，并将该对象赋给program（同时要将programe的shader类型改为NORMAL_TEXTURE），这样元素的纹理就能显示出来。注意createTexture方法也是一个异步方法，但我们同样不用等待图片加载完毕再创建元素。

## 光照

SpriteJS<sup>Next</sup>默认支持几种常见的光源，我们可以设置环境光（ambientColor），方向光（directionalLight）和点光源（pointLight）。

```js
/* globals dat */
const {Scene, Color} = spritejs;
const {Cube, shaders} = spritejs.ext3d;

const container = document.getElementById('container');
const scene = new Scene({container});
const layer = scene.layer3d('fglayer', {
  ambientColor: '#ff000080',
  directionalLight: [1, 0, 0],
  directionalLightColor: [1, 1, 1, 0.5],
  pointLightColor: 'blue',
  pointLightPosition: [5, 3, 6],
  camera: {
    fov: 35, // 相机的视野
    pos: [3, 3, 5], // 相机的位置
  },
});

const camera = layer.camera;
camera.lookAt([0, 0, 0]);

const program = layer.createProgram({
  ...shaders.NORMAL_GEOMETRY,
  cullFace: null,
});

const cube = new Cube(program, {
  colors: 'grey',
});
layer.append(cube);
layer.setOrbit();

const initGui = () => {
  const gui = new dat.GUI();
  const palette = {
    ambientColor: 'rgba(255, 0, 0, 0.5)', // CSS string
    pointLightColor: '#0000ff',
  };
  gui.addColor(palette, 'ambientColor').onChange((val) => {
    const color = new Color(val);
    program.uniforms.ambientColor.value = color;
    layer.gl.clearColor(...color);
    layer.forceUpdate();
  });
  gui.addColor(palette, 'pointLightColor').onChange((val) => {
    const color = new Color(val);
    program.uniforms.pointLightColor.value = color;
    layer.forceUpdate();
  });
};

initGui();
```

<iframe src="/demo/#/3d/light" height="650"></iframe>

## 与元素交互

SpriteJS<sup>Next</sup>的3D扩展中，与元素交互也非常简单，在前面的例子我们已经见过。

一种交互是通过鼠标或触屏旋转角度和缩放，只需要一条语句：

```js
layer.setOrbit({target: [x, y, z]});
```

另一种交互是让元素支持点击事件，也只需要一条语句：

```js
layer.setRaycast();
```

有了这条语句之后，我们就可以在元素上像2D那样注册鼠标或触屏事件了。

```js
layer.addEventListener('click', (evt) => {
  if(evt.target === cube) {
    const colors = [];
    for(let i = 0; i < 3; i++) {
      const randomColor = `hsl(${Math.floor(360 * Math.random())}, 50%, 50%)`;
      colors.push(randomColor, randomColor);
    }
    evt.target.attributes.colors = colors;
  } else if(evt.target !== layer) {
    evt.target.attributes.colors = `hsl(${Math.floor(360 * Math.random())}, 50%, 50%)`;
  }
});
```

<iframe src="/demo/#/3d/geometry" height="750"></iframe>