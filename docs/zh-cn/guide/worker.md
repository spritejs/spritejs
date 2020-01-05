## 多线程

SpriteJS <sup>Next</sup> 支持 OffscreenCanvas 和多线程，我们可以给 Layer 设置参数 `{worker: URL}` 来创建一个在 worker 中运行的 Layer。

```js
// 主线程
const container = document.getElementById('stage');
const scene = new spritejs.Scene({
  container,
  width: 1200,
  height: 600,
});

scene.layer('fglayer', {worker: './worker.js'});
```

```js
// worker.js
importScripts('https://unpkg.com/spritejs@3/dist/spritejs.worker.js');

const textureURL = 'https://p4.ssl.qhimg.com/t012170360e1552ce17.png';

spritejs.layerCreated.then((layer) => {
  const {Sprite} = spritejs;

  const s = new Sprite();
  s.attr({
    anchor: 0.5,
    size: [200, 200],
    pos: [600, 300],
    bgcolor: 'red',
    texture: textureURL,
  });

  layer.append(s);

  s.addEventListener('click', (evt) => {
    console.log(evt);
  });
});
```

<iframe src="/demo/#/doc/worker" height="450"></iframe>