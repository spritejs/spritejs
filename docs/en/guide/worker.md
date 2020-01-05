## Worker

SpriteJS<sup>Next</sup> supports OffscreenCanvas and Web Worker, We can set the parameter `{worker: URL}` to create a layer running in the worker

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