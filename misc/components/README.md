## 微信小程序组件

这是微信小程序组件。

### 使用方法：

1. 将 scene 组件添加到微信小程序项目中，完成配置。

1. 将 `index.js` 文件中的 `require` 修改为实际的 `spritejs.js` 和 `wx-miniprogram.js` 路径。

1. 在需要使用的页面中引入组件。

```xml
<view>
  <s-scene id="container" layers="bglayer,fglayer"
    bindSceneCreated="onSceneCreated"
    pixelUnit="rpx"
    style="width:{{width}}rpx;height:{{height}}rpx"
  ></s-scene>
</view>
```

其中 `pixelUnit` 属性可以设定为 rpx，让 layer 的单位采用微信的 rpx 单位。

```js
const {Sprite} = require('../../lib/spritejs');

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