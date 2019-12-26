## 渲染引擎

SpriteJS <sup>Next</sup> 支持多引擎，在较新的浏览器中，默认优先采用 webgl2 引擎渲染，如果不支持 webgl2 会降级为 webgl，如果不支持 webgl，会再降级为 canvas2d。

我们也可以通过Scene或者Layer的参数指定渲染引擎。

在与某些第三方库联合使用的时候，我们可能需要根据第三方库的支持情况选择合适的引擎。

```js
const {Scene, Rect} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 600,
  height: 600,
  contextType: '2d',
});
const layer = scene.layer({
  autoRender: false,
});

const rect = new Rect({
  normalize: true,
  pos: [300, 300],
  size: [100, 100],
  fillColor: 'red',
  opacity: 0.5,
});
layer.append(rect);

/* globals curvejs */
const {Stage, Curve} = curvejs;
const canvas = layer.canvas;
const stage = new Stage(canvas);
const rd = () => -2 + Math.random() * 2;
const curve = new Curve({
  color: '#00FF00',
  points: [277, 327, 230, 314, 236, 326, 257, 326],
  data: [rd(), rd(), rd(), rd(), rd(), rd(), rd(), rd()],
  motion: function motion(points, data) {
    points.forEach((item, index) => {
      points[index] += data[index];

      if(points[index] < 0) {
        points[index] = 0;
        data[index] *= -1;
      }
      if(index % 2 === 0) {
        if(points[index] > canvas.width) {
          points[index] = canvas.width;
          data[index] *= -1;
        }
      } else if(points[index] > canvas.height) {
        points[index] = canvas.height;
        data[index] *= -1;
      }
    });
  },
});
stage.add(curve);

let ang = 0;
function tick() {
  stage.update();
  rect.attributes.rotate = ang++;
  layer.render({clear: false});
  requestAnimationFrame(tick);
}

tick();
```

<iframe src="/demo/#/doc/curvejs" height="450"></iframe>

**值得注意的是，不一定 webgl2/webgl 引擎就优于 canvas2d，在内存限制的情况下，某些特定场景使用 canvas2d 渲染因为节省内存，可能反而效率要更高。**

canvas2d下，有些功能不能完全支持，比如 textureRepeat 属性，在 canvas2d 下不能支持。

## 内存

SpriteJS <sup>Next</sup> 在 webgl2/webgl 渲染引擎下，会自动合并能够合并的元素在同一批次下进行渲染，这会提升渲染效率，但是会耗费更多的内存。在内存限制的情况下，可以通过设置Scene或者Layer的`bufferSize`参数来减少合并的顶点个数，以减少内存消耗。

```js
const scene = new Scene({
  container,
  width: 1000,
  height: 1000,
  bufferSize: 500,
})
```

默认的`bufferSize`值为1500。