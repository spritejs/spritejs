## 渲染对象

有时候我们需要多次渲染，比如先将一些内容渲染到FrameBuffer中，然后再输出到屏幕。

在3D扩展中，我们可以使用RenderTarget对象来创建一块可绘制的FrameBuffer。

```js
const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat3 normalMatrix;

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    precision highp int;

    uniform sampler2D tMap;

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vec3 normal = normalize(vNormal);
        float lighting = 0.2 * dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
        vec3 tex = texture2D(tMap, vUv).rgb;
        gl_FragColor.rgb = tex + lighting + vec3(vUv - 0.5, 0.0) * 0.1;
        gl_FragColor.a = 1.0;
    }
`;

const {Scene} = spritejs;
const {Cube, RenderTarget} = spritejs.ext3d;
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
});

layer.camera.attributes.pos = [0, 1, 5];
layer.camera.lookAt([0, 0, 0]);

const texture = layer.createTexture({
  image: new Uint8Array([
    191, 25, 54, 255,
    96, 18, 54, 255,
    96, 18, 54, 255,
    37, 13, 53, 255,
  ]),
  width: 2,
  height: 2,
  magFilter: layer.gl.NEAREST,
});

const program = layer.createProgram({
  vertex,
  fragment,
  texture,
});

const target = new RenderTarget(layer.gl, {
  width: 512,
  height: 512,
  camera: {
    fov: 35,
  },
});
target.camera.attributes.pos = [0, 1, 5];
target.camera.lookAt([0, 0, 0]);

const mesh = new Cube(program);
target.append(mesh);

const targetProgram = layer.createProgram({
  vertex,
  fragment,
  texture: target.texture,
});

target.addEventListener('beforerender', (e) => {
  layer.gl.clearColor(0.15, 0.05, 0.2, 1);
});

target.addEventListener('afterrender', (e) => {
  layer.gl.clearColor(1, 1, 1, 0);
});

const mesh2 = new Cube(targetProgram);
layer.append(mesh2);

layer.tick(() => {
  layer.renderTarget(target);
  mesh.attributes.rotateY -= 1.5;
  mesh2.attributes.rotateY -= 0.9;
  mesh2.attributes.rotateX -= 1;
});
```

我们可以通过`layer.renderTarget`来绘制内容到FrameBuffer上，然后通过将`target.texture`绑定为program的texture的方式使用。

<iframe src="/demo/#/3d/render_target" height="750"></iframe>

我们可以创建多个RenderTarget将内容叠加，比如：

```js
const target1 = new RenderTarget(layer.gl, {
  width: 512,
  height: 512,
  camera: {
    fov: 35,
  },
});

const target2 = new RenderTarget(layer.gl, {
  width: 512,
  height: 512,
  camera: {
    fov: 35,
  },
});

const target3 = new RenderTarget(layer.gl, {
  width: 512,
  height: 512,
  camera: {
    fov: 35,
  },
});

...

const root = new Mesh3d(...);
layer.tick(() => {
  // 我们可以不将root添加到renderTarget上，这样就可以针对不同的renderTarget复用root
  layer.renderTarget(target1, {root});
  root.program.uniforms.tMap.value = target1.texture;
  layer.renderTarget(target2, {root});
  root.program.uniforms.tMap.value = target2.texture;
  layer.renderTarget(target3, {root});
  root.program.uniforms.tMap.value = target2.texture;
  ...

});
```

但是这样的话，要处理多次就要创建多个RenderTarget，比较消耗内存。实际上，如果我们多次处理，可以只创建两个target，依次交换他们

```js
const root = new Mesh3d(...);
layer.tick(() => {
  // 我们可以不将root添加到renderTarget上，这样就可以针对不同的renderTarget复用root
  layer.renderTarget(target1, {root});
  root.program.uniforms.tMap.value = target1.texture;
  layer.renderTarget(target2, {root});
  root.program.uniforms.tMap.value = target2.texture;
  layer.renderTarget(target1, {root});
  ...

});
```

`RenderTarget`在创建的时候还可以传一个配置项buffer，设为true，则启用双缓冲，这样就不需要创建两个Target，代码就可以简化为：

```js
const root = new Mesh3d(...);
layer.tick(() => {
  // 我们可以不将root添加到renderTarget上，这样就可以针对不同的renderTarget复用root
  layer.renderTarget(target, {root});
  root.program.uniforms.tMap.value = target.texture;
  target.swap();
  layer.renderTarget(target, {root});
  root.program.uniforms.tMap.value = target.texture;
  target.swap();
  layer.renderTarget(target, {root});
  ...

});
```

默认情况下，执行layer.renderTarget会清空之前缓冲区中的内容，如果我们不希望这么做，可以设置`layer.autoClear`为false，那么就可以保留缓冲区的内容。
