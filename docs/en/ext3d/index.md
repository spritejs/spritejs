# 3D Extension

SpriteJS<sup>Next</sup>can render 3D elements through [3D extension library](https://github.com/spritejs/sprite-extend-3d).

## Installion

The way to load the 3D extension library is very simple. You can load it directly through CND.

```html
<script src="https://unpkg.com/spritejs@3/dist/spritejs.es.min.js"></script>
<script src="https://unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.js"></script>
```

Just make sure that 'sprite-extend-3d.js' is loaded after' spritejs'.

Considering the best performance, the `sprite-extend-3d.js` adapts to chrome 59 and above. If you want to support older browsers, you need to modify the Babel configuration in the project and recompile and adapt to the old browser version.

When loaded, you can use `spritejs.ext3d` to access the 3D API, and you can use `scene.layer3d(layerid)` to create a 3D rendering layer.

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

layer.setOrbit();
```

<iframe src="/demo/#/3d/basic" height="500"></iframe>

Of course, you can also load it through modules.

```js
import {Scene} from 'spritejs';
import {Cube, shaders} from 'sprite-extend-3d';
```

## Coordinate and Camera

Different from 2D layer, layer3d uses webgl coordinate system. The position of canvas center point is [0,0,0], X axis is horizontally to the right, Y axis is vertically upward, and Z axis is vertically outward from the screen.

![](https://p2.ssl.qhimg.com/t017063e6041bdc4b0f.png)

Whether the element is displayed and where it is displayed depends on the perspective camera.

A layer corresponds to a default perspective camera. When creating a layer, you can initialize it and modify its properties in subsequent rendering. In the above example, we put the camera at the coordinate `[3, 3, 5]`.

The perspective camera has some parameters as follows:

- near: The near clipping distance, default is 0.1.
- far: The far clipping distance, default is 100.
- fov: The field of view, default is 45 degree.
- aspect: The aspect ratio, which is 1:1 by default, is set by the layer according to the resolution if the preserveAspect configuration is not set to false.
- preserveAspect: The default value is `true`. The camera aspect ratio is maintained according to the canvas aspect ratio, so that the elements are not stretched or compressed.

By default, the direction of the camera is toward the z-axis negative infinity, and the camera has a method called `lookAt`, which can let the camera shoot towards the position by passing in a coordinate.

<iframe src="/demo/#/3d/camera" height="500"></iframe>

## Geometry elements

In 3D layer, it is very convenient to draw geometry by vertex coordinates.

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

In this example, we create a set of vertex coordinates and drew a tetrahedron.

<iframe src="/demo/#/3d/geometry2" height="650"></iframe>

## Models

The 3D extension supports the JSON data model.

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

Note that `layer.loadModel` is an asynchronous method, but we don't need to wait until the model data is actually loaded. We can directly assign the model (at this time, it is a promise) to the mesh3d element. After the data is loaded, the element will be rerendered.

<iframe src="/demo/#/3d/model" height="650"></iframe>

With the model, we can add the texture.

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

We only need to create a texture object through `layer.createTexture` and assign the object to the program. Note that the createTexture method is also an asynchronous method, but we also don't need to wait for the image to load before creating the element.

## Lights

Several common light sources are supported by default. We can set ambient color, directional light and point light.

```js
/* globals dat */
const {Scene, Color} = spritejs;
const {Cube, shaders} = spritejs.ext3d;

const container = document.getElementById('container');
const scene = new Scene({container});
const layer = scene.layer3d('fglayer', {
  ambientColor: '#ff000080',
  directionalLight: [1, 0, 0],
  directionalLightColor: [1, 1, 1, 0.5]
  pointLightColor: 'blue',
  pointLightPosition: [5, 3, 6],
  camera: {
    fov: 35,
    pos: [3, 3, 5],
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

## Interact

In 3D extension, it is very simple to interact with elements, as we have seen in the previous example.

One kind of interaction is to rotate the angle and zoom through the mouse or touch screen, only one statement is required:

```js
layer.setOrbit({target: [x, y, z]});
```

Another interaction is make the element to support click events, also one statement is required:

```js
layer.setRaycast();
```

With this statement, we can register mouse or touch screen events on elements like we did in 2D mode.

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