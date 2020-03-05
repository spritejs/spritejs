## 服务端渲染

SpriteJS <sup>Next</sup> 通过[node-canvas-webgl](https://github.com/akira-cn/node-canvas-webgl)支持服务端渲染，也就是说我们可以在node环境下使用spritejs，将绘制好的图形保存成png，或者将动画保存成gif。

要使用服务端渲染，要先安装 node-canvas-webgl

```bash
npm install node-canvas-webgl
```

然后加载lib目录下的polyfill后即可正常使用了。

```js
const fs = require('fs');
const {Container} = require('../lib/polyfill/node-canvas');
const {Scene, Sprite} = require('../lib');

const container = new Container(512, 512);
const scene = new Scene({container});
const fglayer = scene.layer('fglayer');
const url = 'https://p0.ssl.qhimg.com/t01a72262146b87165f.png';

const sprite = new Sprite();
sprite.attr({
  pos: [256, 256],
  size: [100, 100],
  anchor: 0.5,
  bgcolor: 'red',
  texture: url,
});

fglayer.append(sprite);

setTimeout(() => {
  const canvas = scene.snapshot();
  fs.writeFileSync('snap.png', canvas.toBuffer());
}, 1000);
```