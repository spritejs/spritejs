## 快照

每个layer有自己的context，如果我们的scene有多个layer，而且我们需要将scene当前绘制结果保存下来时，我们并不需要自己处理每个layer（尽管自己处理也是可以的，通过layer.canvas可以拿到layer的canvas对象）。

SpriteJS <sup>Next</sup> 提供了一个同步的接口snapshot()，我们可以给scene拍一个当前的“快照”，snapshot()返回一个canvas对象，这个canvas对象是当前所有layer输出内容的叠加。（如果想忽略输出某个ignoreLayer的内容，可以通过设置`ignoreLayer.options.ignoreSnapshot = true`来实现）。

```js
const {Scene, Sprite, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const bglayer = scene.layer('bglayer');
const fglayer = scene.layer('fglayer');

(async function () {
  function randomTriangle() {
    const triangle = new Path();
    const pos = [Math.random() * 1540, Math.random() * 600];
    const d = 'M0,0L0,10L8.66, 5z';
    triangle.attr({
      d,
      scale: 5,
      pos,
      fillColor: '#37c',
      rotate: Math.random() * 360,
    });
    bglayer.append(triangle);
  }

  for(let i = 0; i < 100; i++) {
    randomTriangle();
  }

  const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

  await scene.preload([birdsRes, birdsJsonUrl]);

  const bird = new Sprite('bird1.png');

  bird.attr({
    anchor: [0.5, 0.5],
    pos: [50, 200],
    scale: 0.6,
    offsetPath: 'M0,100C0,100,200,-100,500,100S700,-100,1000,100S1200,-100,1700,100S2200,-100,2700,100',
  });
  fglayer.append(bird);

  bird.animate([
    {texture: 'bird1.png'},
    {texture: 'bird2.png'},
    {texture: 'bird3.png'},
    {texture: 'bird1.png'},
  ], {
    duration: 300,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'step-end',
  });

  bird.animate([
    {offsetDistance: 0},
    {offsetDistance: 1},
  ], {
    duration: 6000,
    iterations: Infinity,
  });

  const snapshotBtn = document.getElementById('take-snapshot'),
    snapshotList = document.getElementById('snapshot-list');

  snapshotBtn.addEventListener('click', (evt) => {
    const canvas = scene.snapshot();
    const snapshot = new Image();
    snapshot.src = canvas.toDataURL();
    const listItem = document.createElement('li');
    listItem.appendChild(snapshot);
    snapshotList.appendChild(listItem);
  });
}());
```

<iframe src="/demo/#/doc/snapshot" height="500"></iframe>

## 离屏快照

调用Scene的snapshot方法时，如果传参`{offscreen: true}`，那么快照将返回一个`OffscreenCanvas`。