## 着色器

SpriteJS<sup>Next</sup>的3D扩展预置了一些默认的着色器，能够方便开发者快速创建应用。

这些预置着色器定义在[这个文件里](https://github.com/spritejs/sprite-extend-3d/blob/master/src/shader/index.js)。

包括：

- NORMAL 一个简单的根据法向量来确定表面颜色的着色器，主要用于测试
- NORMAL_GEOMETRY 支持光照、表面颜色的通用着色器，一般的几何元素可以使用它
- NORMAL_TEXTURE 支持光照、纹理的通用着色器，带纹理的几何元素可以使用它
- GEOMETRY_WITH_TEXTURE 支持光照、表面颜色和纹理的通用着色器，半透明纹理的几何元素可以使用它
- GEOMETRY_WITH_SHADOW 支持光照、表面颜色和阴影的通用着色器
- TEXTURE_WITH_SHADOW 支持光照、纹理和阴影的通用着色器
- GEOMETRY_WITH_TEXTURE_AND_SHADOW 支持光照、表面颜色、纹理和阴影的通用着色器
- TEXTURE_CUBE 支持立方体纹理的通用着色器

这些着色器我们都可以根据情况直接用，例如：

```js
const program = layer.createProgram({
  ...shaders.GEOMETRY_WITH_SHADOW,
  cullFace: null,
  texture,
});
```

当然我们也可以用自己定义的着色器，比如：

```js
const {Scene} = spritejs;
const {Cube, shaders} = spritejs.ext3d;

const container = document.getElementById('container');
const scene = new Scene({container});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35, // 相机的视野
    pos: [3, 3, 5], // 相机的位置
  },
});

const vertex = `
precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec3 vNormal;

void main() {
    vNormal = normalize(normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragment = `
precision highp float;
precision highp int;

varying vec3 vNormal;

highp float noise(vec3 p) {
  vec3 i = floor(p);
  vec4 a = dot(i, vec3(1.0, 57.0, 21.0)) + vec4(0.0, 57.0, 21.0, 78.0);
  vec3 f = cos((p - i) * acos(-1.0)) * (-0.5) + 0.5;
  a = mix(sin(cos(a) * a), sin(cos(1.0 + a) * (1.0 + a)), f.x);
  a.xy = mix(a.xz, a.yw, f.y);
  return mix(a.x, a.y, f.z);
}

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb(vec3 c){
  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
  rgb = rgb * rgb * (3.0 - 2.0 * rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}

uniform float uTime;

void main() {
  vec3 normal = vNormal * uTime;
  gl_FragColor.rgb = hsb2rgb(vec3(noise(normal), 0.5, 0.5));
  gl_FragColor.a = 1.0;
}
`;

const program = layer.createProgram({
  vertex,
  fragment,
  cullFace: null,
}, {
  uniforms: {
    uTime: {value: 0},
  },
});

const cube = new Cube(program);
layer.append(cube);

layer.bindTime(program, {playbackRate: 0.2});

layer.setOrbit(); // 开启旋转控制
```

<iframe src="/demo/#/3d/shader" height="750"></iframe>

上面的代码我们定义了一个随着时间随机渐变的shader。

💡注意，layer上有一个bindTime函数，它允许我们将layer.timeline作为uTime的uniform传给对应的program，这样我们就可以方便地让shader的渲染随时间变化而变化了。