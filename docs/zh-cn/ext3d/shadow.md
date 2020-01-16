## 阴影

3D扩展提供了绘制阴影的方法：

```js
const {Scene} = spritejs;
const {Camera, Mesh3d, Plane, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});

const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
  },
});

layer.camera.attributes.pos = [5, 4, 10];
layer.setOrbit();

const light = new Camera(layer.gl, {
  left: -3,
  right: 3,
  bottom: -3,
  top: 3,
  near: 1,
  far: 20,
});
light.attributes.pos = [3, 10, 3];
light.lookAt([0, 0, 0]);

const shadow = layer.createShadow({light});

const texture = layer.createTexture('https://p2.ssl.qhimg.com/t01155feb9a795bdd05.jpg');
const model = layer.loadModel('https://s0.ssl.qhres.com/static/0baccc5ad3cd5b8c.json');
const program = layer.createProgram({
  ...shaders.TEXTURE_WITH_SHADOW,
  cullFace: null,
  texture,
});
const plane = new Mesh3d(program, {model});
window.plane = plane;
layer.append(plane);

const waterTexture = layer.createTexture('https://p0.ssl.qhimg.com/t01db936e50ab52f10a.jpg');
const program2 = layer.createProgram({
  ...shaders.TEXTURE_WITH_SHADOW,
  cullFace: null,
  texture: waterTexture,
});
const ground = new Plane(program2, {
  rotateX: 90,
  scale: 6,
  y: -3,
});
layer.append(ground);

shadow.add(plane);
shadow.add(ground);
layer.setShadow(shadow);

layer.tick((t) => {
  // A bit of plane animation
  if(plane) {
    plane.attributes.z = Math.sin(t * 0.001);
    plane.attributes.rotateX = Math.sin(t * 0.001 + 2) * 18;
    plane.attributes.rotateY = Math.sin(t * 0.001 - 4) * -18;
  }
});
```

我们可以使用正交投影来将阴影投到平面上，具体做法是，通过`layer.createShadow`创建一个Shadow对象，将设置好的正交相机作为光源传给这个对象，然后把要生成投影的元素添加到这个对象中，再调用`layer.setShadow`方法绑定这个对象即可。

<iframe src="/demo/#/3d/shadow" height="750"></iframe>