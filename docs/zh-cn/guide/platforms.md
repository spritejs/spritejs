## 服务端渲染

SpriteJS <sup>Next</sup> 通过[node-canvas-webgl](https://github.com/akira-cn/node-canvas-webgl)支持服务端渲染，也就是说我们可以在node环境下使用spritejs，将绘制好的图形保存成png，或者将动画保存成gif。

要使用服务端渲染，要先安装 node-canvas-webgl

```bash
npm install node-canvas-webgl
```

然后加载lib目录下的polyfill后即可正常使用了。

```js
const fs = require('fs');
const {polyfill} = require('../lib/platform/node-canvas');
const {Scene, Sprite, ENV} = require('../lib');

polyfill({ENV});

const scene = new Scene({width: 512, height: 512});
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

## 小程序中使用

SpriteJS <sup>Next</sup> 实现了自己的小程序组件`misc/components/scene`，不需要添加sprite-wxapp依赖，即可支持在小程序中使用。

### 使用方法

1. 在小程序本地设置中开启`使用npm包`，安装`spritejs`和`@babel/runtime`

2. 构建npm，构建后将`@babel/runtime`移动到`miniprogram_npm`中，将`spritejs/lib/platform`和`spritejs/dist/spritejs.min.js`移动到`miniprogram_npm/spritejs`中

3. 将spritejs源码中`misc/components/scene`小程序组件拷贝到小程序components目录里，将`scene/index.js`中对`spritejs`的依赖替换为`require('spritejs/spritejs.min')`将对polyfill的依赖替换为`require('spritejs/lib/platform/wx-miniprogram')`

4. 在需要使用组件的页面里引入该组件，配置useComponents，其中 `pixelUnit` 属性可以设定为 rpx，让 layer 的单位采用微信的 rpx 单位

  ```xml
    <view>
      <s-scene 
        id="container"
        layers="bglayer,fglayer"
        bindSceneCreated="onSceneCreated"
        pixelUnit="rpx"
        style="width:{{width}}rpx;height:{{height}}rpx"
      ></s-scene>
    </view>
  ```

  ```json
  {
    "useComponents": {
      "s-scene": "path/to/scene"
    }
  }
  ```

  ```js
  const {Sprite} = require('spritejs/spritejs.min');

  Page({
    data: {
      width: 400,
      height: 400,
    },
    onSceneCreated({detail: layers}) {
      const {bglayer, fglayer} = layers;
      console.log(bglayer, fglayer);
      const s = new Sprite({
        size: [100, 100],
        pos: [0, 0],
        bgcolor: 'red',
      });
      fglayer.append(s);

      const s2 = new Sprite({
        size: [300, 300],
        pos: [150, 150],
        bgcolor: 'blue',
        border: [10, 'green'],
      });
      bglayer.append(s2);

      s.addEventListener('touchstart', () => {
        s.attr('bgcolor', 'green');
      });
      s.addEventListener('touchmove', () => {
        s.attr('bgcolor', 'yellow');
      });
      s.addEventListener('touchend', () => {
        s.attr('bgcolor', 'red');
      });
      s.addEventListener('longpress', () => {
        s.attr('bgcolor', 'black');
      });

      setTimeout(() => {
        this.setData({
          width: 500,
          height: 500,
        });
        console.log('resized');
      }, 2000);
    },
  });
  ```
