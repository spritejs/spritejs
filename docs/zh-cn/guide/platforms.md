## 服务端渲染

spritejs通过[node-canvas](https://github.com/Automattic/node-canvas)支持服务端渲染，也就是说我们可以在node环境下使用spritejs，将绘制好的图形保存成png，或者将动画保存成gif。

💡由于Node版不经过打包，而package.json中配置的是打包后的web端版本，所以Node版使用只能`require('spritejs/lib/index')`这样用。

将静态输出保存成png

```js
const fs = require('fs')

const {Scene, Label} = require('spritejs/lib/index')
const scene = new Scene('#test', 800, 600)

const bglayer = scene.layer('bg', {handleEvent: false})

const text = new Label('Hello Sprite!')

text.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  font: '46px Arial',
  color: 'blue',
  bgcolor: 'white',
  textAlign: 'center',
})

bglayer.append(text)

;(async function () {
  const canvas = await scene.snapshot()
  fs.writeFileSync('snap.png', canvas.toBuffer())
}())
```

将动画保存成gif，甚至可以通过dispatchEvent模拟点击事件。

```js
const fs = require('fs')

const {Scene, Label} = require('spritejs/lib/index')
const scene = new Scene('#test', 800, 600)

const bglayer = scene.layer('bg', {handleEvent: true})

const text = new Label('Clicked: 0')

text.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  font: '46px Arial',
  color: 'blue',
  bgcolor: 'white',
  textAlign: 'center',
})

bglayer.append(text)

function sleep(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t)
  })
}

const GIFEncoder = require('gifencoder')
const encoder = new GIFEncoder(scene.width, scene.height)
// stream the results as they are available into myanimated.gif
encoder.createReadStream().pipe(fs.createWriteStream('label_clicked.gif'))
encoder.start()
encoder.setRepeat(0) // 0 for repeat, -1 for no-repeat
encoder.setDelay(500) // frame delay in ms
encoder.setQuality(10) // image quality. 10 is default.

let count = 0
bglayer.on('click', async (e) => {
  const msg = `Clicked: ${++count}`
  text.text = msg
  const canvas = await scene.snapshot()
  const ctx = canvas.getContext('2d')
  encoder.addFrame(ctx)
  console.log(msg)
})

;(async function () {
  // const canvas = await scene.snapshot()
  // fs.writeFileSync('snap.png', canvas.toBuffer())
  for(let i = 0; i < 10; i++) {
    scene.dispatchEvent('click', {x: 400, y: 300})
    await sleep(500)
  }
  console.log('done')
}())
```

## 微信小程序

spritejs为微信小程序提供[定制版本：sprite-wxapp](https://github.com/spritejs/sprite-wxapp)

sprite-wxapp与spritejs标准版基于同一套底层，由于微信环境的不同，一些api上略有差别，另外微信小程序版不支持缓存，无法使用缓存策略。其他大部分功能二者是一致的。

```js
//index.js
//获取应用实例
const app = getApp()
const spritejs = require('../../lib/spritejs')

Page({
  data: {
    layers: ['fglayer'],
  },
  onTouchStart: function(event) {
    const {x, y} = event.touches[0]
    const [layerX, layerY] = this.scene.toLocalPos(x, y)
    // 派发 touchstart 事件
    this.scene.layer('fglayer').dispatchEvent('touchstart', {originEvent: event, layerX, layerY})
  },
  onReady: function() { 
    const scene = new spritejs.Scene(1)
    this.scene = scene
    
    // 预加载资源
    scene.preload(['../../assets/img/birds.png', require('../../assets/img/birds.json.js')])
    
    const bird = new spritejs.Sprite('bird1.png')
    bird.attr({
      anchor: [0.5, 0.5],
      pos: [100, 200],
    })

    // 添加 ontouch 事件
    bird.on('touchstart', evt => {
      console.log(evt)
    })

    // 纹理动画
    let i = 0
    setInterval(() => {
      bird.textures = [`bird${i++%3+1}.png`]
    }, 100)

    // 添加文字
    const text = new spritejs.Label('Hello\n World!')
    text.attr({
      //anchor: [0.5, 0.5],
      font: '44px Arial',
      border: [2, 'red'],
    })

    const posFrom = [0, 0]
    const posTo = [100, 0]

    // 播放一个移位动画
    text.animate([
      {pos: posFrom},
      {pos: posTo},
    ], {
      duration: 2000
    })

    // 将两个精灵添加到 layer
    layer.append(bird, text)
  },
})
```
