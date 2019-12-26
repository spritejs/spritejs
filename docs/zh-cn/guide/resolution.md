## 屏幕适配

与旧版相比，SpriteJS <sup>Next</sup> 简化了屏幕适配参数。

旧版在构造Scene的时候可以提供viewport和resolution两个参数，而新版不再需要手工指定viewport，而是让viewport跟随着container自适应。

新版只需要指定width/height属性，这两个属性相当于旧版里设置resolution。

## 粘连模式

SpriteJS <sup>Next</sup> 也对粘连模式进行了简化，不再像旧版那样有两个参数，只提供一个 mode 参数。

mode 可选值如下：

- scale 默认值，将canvas拉伸到container大小，因为拉伸，画布可能会变形
- stickyWidth 将canvas宽度设为container宽度，高度随比例适配，并垂直居中
- stickyTop 将canvas宽度设为container宽度，高度随比例适配，并与container顶部对齐
- stickyBottom 将canvas宽度设为container宽度，高度随比例适配，并与container底部对齐
- stickyHeight 将canvas高度设为container高度，宽度随比例适配，并水平居中
- stickyLeft  将canvas高度设为container高度，宽度随比例适配，并与container左边对齐
- stickyRight 将canvas高度设为container高度，宽度随比例适配，并与container右边对齐

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 640,
  height: 1000,
  mode: 'stickyWidth',
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  await scene.preload(
    {id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'},
    {id: 'cloud', src: 'https://p5.ssl.qhimg.com/t01d2ff600bae7fe897.png'}
  );

  const cloud = new Sprite('cloud');
  cloud.attr({
    anchor: [0.5, 0],
    pos: [320, -50],
    size: [200, 130],
  });
  layer.append(cloud);

  function addRandomSnow() {
    const snow = new Sprite('snow');
    const x0 = 20 + Math.random() * 600,
      y0 = 0;

    snow.attr({
      anchor: [0.5, 0.5],
      pos: [x0, y0],
      size: [50, 50],
    });

    snow.animate([
      {x: x0 - 10},
      {x: x0 + 10},
    ], {
      duration: 1000,
      fill: 'forwards',
      direction: 'alternate',
      iterations: Infinity,
      easing: 'ease-in-out',
    });

    const dropAnim = snow.animate([
      {y: -200, rotate: 0},
      {y: 2000, rotate: 1880},
    ], {
      duration: 15000,
      fill: 'forwards',
    });

    dropAnim.finished.then(() => {
      snow.remove();
    });

    layer.append(snow);
  }

  setInterval(addRandomSnow, 200);
}());
```

<iframe src="/demo/#/doc/sticky" height="450"></iframe>