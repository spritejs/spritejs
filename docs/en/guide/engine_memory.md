## The Engine

SpriteJS<sup>Next</sup> supports multiple engines. In newer browsers, the webGL2 engine is used by default. If webGL2 is not supported, it will fallback to web GL. If webGL is not supported, it will fallback to canvas2d.

We can also specify the rendering engine through the scene or layer options.

When using with some third-party libraries, we may need to select the appropriate engine according to the support of the third-party libraries.

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

**Note that webGL2/webGL engine is not necessarily better than canvas2d. In the case of memory limitation, in some cases using canvas2d rendering may be more efficient because of lower usage of memory.**

In canvas2d mode, some functions cannot be fully supported, such as the texturerepeat attribute, which cannot be supported in canvas2d.

## About Memory

In the webGL2/webGL rendering mode, the elements that can be merged will be merged automatically to render in one drawcall, which will improve the rendering efficiency, but will consume more memory. When memory is limited, you can set the `bufferSize` option of scene or layer to limit the number of merged vertices to lower memory consumption.

```js
const scene = new Scene({
  container,
  width: 1000,
  height: 1000,
  bufferSize: 500,
})
```

The default `bufferSize` value is 1500.