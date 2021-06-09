## 摄像机

我们前面已经使用过layer上自带的透视相机，实际上，我们还可以创建并使用新的相机。

```js
const vertex = /* glsl */ `
    attribute vec2 uv;
    attribute vec3 position;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec2 vUv;
    varying vec4 vMVPos;
    varying vec3 vPos;

    void main() {
        vUv = uv;
        vPos = position;
        vMVPos = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * vMVPos;
    }
`;

const fragment = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;

    varying vec2 vUv;
    varying vec4 vMVPos;
    varying vec3 vPos;

    void main() {
        vec3 tex = texture2D(tMap, vUv).rgb;
        
        float dist = length(vMVPos);
        float fog = smoothstep(2.0, 15.0, dist);
        tex = mix(tex, vec3(1), fog * 0.8);
        tex = mix(tex, vec3(1), smoothstep(1.0, 0.0, vPos.y)); 
        
        gl_FragColor.rgb = tex;
        gl_FragColor.a = 1.0;
    }
`;

const {Scene} = spritejs;
const {Camera, Mesh3d, Cylinder, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 45,
  },
  ambientColor: 'white',
});

layer.camera.attributes.pos = [6, 6, 12];
// layer.camera.lookAt([0, 0, 0]);

const texture = layer.createTexture('https://p5.ssl.qhimg.com/t01749f23f82ef86c9f.jpg');
const program = layer.createProgram({
  vertex,
  fragment,
  texture,
});

const model = layer.loadModel('https://s4.ssl.qhres2.com/static/4d2c8de20e171997.json');
const size = 20;
const num = size * size;

for(let i = 0; i < num; i++) {
  const tree = new Mesh3d(program, {model});
  layer.append(tree);
  tree.attributes.pos = [(i % size - size * 0.5) * 2, 0, (Math.floor(i / size) - size * 0.5) * 2];
  tree.attributes.y += Math.sin(tree.attributes.x * 0.5) * Math.sin(tree.attributes.z * 0.5) * 0.5;
  tree.attributes.rotateY = Math.random() * Math.PI * 2;
  tree.attributes.scale = 0.8 + Math.random() * 0.3;
}

const cameraProgram = layer.createProgram({
  ...shaders.NORMAL,
  cullFace: null,
});

// const frustumTransform = new Group3d();

const cameraShape = new Cylinder(cameraProgram, {
  radiusBottom: 0.2,
  height: 0.7,
  radialSegments: 4,
  openEnded: true,
  rotateOrder: 'XYZ',
  rotateX: -90,
  rotateY: 45,
});

function cameraPath(time, y) {
  const x = 4 * Math.sin(time);
  const z = 2 * Math.sin(time * 2);
  return [x, y, z];
}

// Add camera used for demonstrating frustum culling
const frustumCamera = new Camera(layer.gl, {
  fov: 65,
  far: 10,
});
frustumCamera.append(cameraShape);
layer.append(frustumCamera);

layer.setOrbit();

layer.tick((t) => {
  frustumCamera.attributes.pos = cameraPath(t * 0.001, 2);
  const target = cameraPath(t * 0.001 + 1, 1);
  frustumCamera.lookAt(target);
  frustumCamera.updateMatrixWorld();
  frustumCamera.updateFrustum();

  // Traverse all meshes in the scene
  layer.traverse((node) => {
    if(!node.body.draw) return;
    if(node === cameraShape) return;

    // perform the frustum test using the demo camera
    node.attributes.display = frustumCamera.frustumIntersects(node) ? '' : 'none';
  });
});
```

<iframe src="/demo/#/3d/camera2" height="750"></iframe>

我们通过

```js
frustumCamera.updateMatrixWorld();
frustumCamera.updateFrustum();
```

来更新相机的位置变换和视锥，然后就可以通过`frustumIntersects`来判断对应的目标元素是否处在相机的视野中。

### 正交相机

除了透视相机之外，我们也可以构造正交相机，正交相机使用`orthographic projection`（正交投影）来进行投影，在这种投影模式下，无论物体距离相机距离远或者近，在最终渲染的图片中物体的大小都保持不变。

正交相机：

![](https://p4.ssl.qhimg.com/t01578a904be08e35a1.jpg)

透视相机：

![](https://p1.ssl.qhimg.com/t013f3cb48edd5cbd94.jpg)

要构造正交相机，我们需要给Camera确定以下参数：

- left — 摄像机视锥体左侧面。
- right — 摄像机视锥体右侧面。
- top — 摄像机视锥体上侧面。
- bottom — 摄像机视锥体下侧面。
- near — 摄像机视锥体近端面。
- far — 摄像机视锥体远端面。

