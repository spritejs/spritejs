# spritejs 轻量级的 canvas 绘图库

像操作 DOM 元素一样操作 canvas 中的“精灵”

## 整体结构

![](https://p1.ssl.qhimg.com/t01c7d7aa748c0367c3.png)

scene -> layer -> sprite -> texture

### 快速上手

[一个例子](https://code.h5jun.com/giq)

```js
const imgUrl = 'https://s5.ssl.qhres.com/static/ec9f373a383d7664.svg'
const scene = new Scene('#container')
scene.setResolution(400, 400)

const sprite = new spritejs.Sprite(imgUrl)
sprite.attr({
  bgcolor: '#fff',
  //anchor: [0.5, 0.5],
  pos: [0, 0],
  size: [400, 400],
  borderRadius: '200'
})

scene.layer().appendChild(sprite)
```

spritejs 使用非常简单，`spritejs.Scene(selector)` 在容器上创建一个 scene， scene 会自适应容器的宽高。通过 `scene.setResolution(width, height)` 创建指定分辨率的画布。

### 设置分辨率

#### scene.setResolution(width, height)

这个方法会影响所有属于 scene 的 layer，分辨率默认值是与容器的宽高相同，通过 setResolution 可以将分辨率设置为任意数值，如果分辨率比例和容器不相同，图像会被拉伸。

```js
const container = document.querySelector('#container')
container.style.width = 600
container.style.height = 400

const scene = spritejs.Scene(container)
scene.setResolution(1200, 800)
```

### 创建和获取 layer

scene.layer 可以创建或获取一个 layer，一个 layer 是一层 canvas，可以在上面绘制 sprite。scene.layer 可以传不同 id，这样可以创建不同的图层。比如：

```js
const background = scene.layer('background')
const foreground = scene.layer('foreground')
```

scene.layer 有第二个参数，如果是一个数字，表示 zIndex，数值大的显示在上层。默认的 zIndex 是 0。如果两个 layer 的 zIndex 相同，后生成的 layer 显示在上层。

```js
const foreground = scene.layer('foreground', 1)  //前景在背景之上
const background = scene.layer('background', 0)
```

### Layer 的高级配置

layer 的第二个参数可以传一个 object，有以下几个属性：

#### zIndex

同直接传数字 zIndex

```js
const foreground = scene.layer('foreground', {zIndex: 1})
```

#### handleEvent 

boolean handleEvent ： 是否处理事件，默认为 true，能够让 layer 响应事件，并派发给 layer 上的所有 sprites。目前支持的事件有 mousedown、mouseup、mousemove、mouseenter、mouseleave、touchstart、touchmove、touchend，详见**事件处理机制**

```js
const foreground = scene.layer('foreground', {handleEvent: false})
```

如果一个层只是渲染，不要给其中的 sprite 添加事件，那么可以将 handleEvent 置为 false，这样可以提升性能。

#### evaluateFPS

boolean evaluteFPS ： 开启这个选项可以监控 layer 的 FPS 变化从而测试性能。不过注意的是，spritejs 的渲染机制和其他一些库不同，它并没有固定周期渲染，如果当前 layer 的 sprite 没有发生变化，spritejs 并不会刷新，此时测不出 FPS，如果 sprite 的刷新频率很低，那么此时的 FPS 数值也会很低，这个和性能无关。

```js
const foreground = scene.layer('foreground', {evaluateFPS: false})
```

#### renderMode

renderMode : 渲染模式，默认值为 repaintAll，表示每当 sprite 有变化时，整个 layer 区域全部刷新，可切换为 repaintDirty，那样只会刷新 sprite 影响到的区域。如果 sprite 数量很多的时候，repaintAll 性能较好，如果 sprite 数量不太多，而且运动区域只占整个 canvas 区域一小部分的时候，采用 repaintDirty 性能较好。

```js
const foreground = scene.layer('foreground', {renderMode: 'repaintDirty'})
```


### 资源预加载

主要是 sprite 用到的图片资源，当图片比较大时，可以用 scene.preload 进行资源的预加载。

#### scene.preload(...res)

这是一个异步方法，返回一个 promise，异步获取图片资源。

```js
(async function(){
	...
	
	await scene.preload(
	  img1,
	  img2,
	  [res3, res3json]   // 预加载资源，支持雪碧图
	)
	
	...
})()
```

### Sprite

sprite 很像 DOM 的 element，它有一个 attr 方法，可以设置各种属性。默认的 Sprite 可以设置 textures， textures 是图片，并支持雪碧图。

#### Sprite 类结构

![](https://s5.ssl.qhres.com/static/14c973eccde05f63.svg)

目前 spritejs 提供两类基本 Sprite，一类是图形化的 Sprite，拥有 textures 结构，一类是 Label，用来设置字体。

#### Sprite 盒模型

sprite 盒模型和 DOM 的类似，不同的是因为 spritejs 主要是以坐标定位为主，因此没有为 sprite 提供 margin 属性。

![](https://s5.ssl.qhres.com/static/a8175ad8602ba8ee.svg)

盒模型从内到外依次是 texture -> innerbox -> outerbox -> border

innerbox 与 outerbox 之间的空隙是 padding

**注意** 

- spritejs 简化了 border 和 padding，目前只支持单一的数值，暂不支持 borderLeft、paddingTop 这种分别设定不同宽度，未来可能会提供支持。
- spritejs 的 border 提供 color 和宽度，暂不支持改变线条样式，统一为实现，未来可能会提供其他线条支持。
- spritejs 的 border 支持 borderRadius，但是也同样不支持分别设定不同的 x、y 方向的 radius，只支持统一的单一值，另外 borderRadius 不支持百分比，未来可能会提供支持。

[例子](https://code.h5jun.com/legi)

```js
const {Scene, Sprite} = spritejs
const scene = new Scene('#container')

scene.setResolution(800, 600)

const box = new Sprite()
box.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [100, 100],
  border: [10, 'red'],
  borderRadius: 25
})

scene.layer().appendChild(box)
```

#### 定位

上面的例子可以看到，spritejs 提供 pos、 size 属性用来定义 sprite **相对于 layer** 的坐标位置和大小。另外 sprite 有一个 anchor 属性，两个值分别定义 x、y 轴上元素参考点的相对位置，默认是 [0, 0]，表示元素的左上角。上面设置为 [0.5, 0.5] 表示参考点位于元素的中心。sprite 在 layer 上的位置 pos 实际上是参考点在 layer 上的相对坐标。另外对元素做 transform 的时候，也是以参考点为中心。 

#### transform

sprite 提供 transform 进行形状变换，支持 rotate、scale、translate、skew，也直接支持变换矩阵：

[例子](https://code.h5jun.com/fejo)

```js
const {Scene, Sprite} = spritejs
const scene = new Scene('#container')

scene.setResolution(800, 600)

const box1 = new Sprite()
box1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [100, 100],
  border: [10, 'red'],
  borderRadius: 25,
  transform: {
    translate: [10, 20],
    rotate: 30
  }
})

scene.layer().appendChild(box1)

const box2 = new Sprite()
box2.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [100, 100],
  border: [10, 'green'],
  borderRadius: 25,
  transform: {
    translate: [10, 20],
    scale: 1.5
  }
})

scene.layer().appendChild(box2)

const box3 = new Sprite()
box3.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [50, 50],
  border: [10, 'blue'],
  borderRadius: 5,
  transform: {
    translate: [10, 20],
    skew: [30, 0]
  }
})

scene.layer().appendChild(box3)
```

**注意**

- transform 里面定义属性的顺序可能会影响变换结果，因为变换是按照顺序来的，比如先 transform 在 rotate 和先 rotate 再 transform，结果可能并不相同。
- transform 支持直接传一个 6 个数的变换数组，它的值以及含义和 css3 矩阵变换是一样的

#### bgcolor 和 opacity

sprite 支持背景色，背景色支持所有的 css 颜色格式，包括 rgba。同时 sprite 也支持直接设置透明度 opacity，设置的规则也和 css 规则一样。

[例子](https://code.h5jun.com/juri)

```js
const {Scene, Sprite} = spritejs
const scene = new Scene('#container')

scene.setResolution(800, 600)

const box1 = new Sprite()
box1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [100, 100],
  border: [10, 'red'],
  borderRadius: 25,
  bgcolor: '#7fc',
  transform: {
    translate: [10, 20],
    rotate: 30
  }
})

scene.layer().appendChild(box1)

const box2 = new Sprite()
box2.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [100, 100],
  border: [10, 'green'],
  borderRadius: 25,
  bgcolor: '#000',
  opacity: 0.3,
  transform: {
    translate: [10, 20],
    scale: 1.5
  }
})

scene.layer().appendChild(box2)

const box3 = new Sprite()
box3.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [50, 50],
  border: [10, 'blue'],
  borderRadius: 5,
  transform: {
    translate: [10, 20],
    skew: [30, 0]
  }
})

scene.layer().appendChild(box3)
```

#### zOrder 和 zIndex

所有的 sprite 都有 zOrder 和 zIndex 两个属性，其中 zOrder 是根据 appendChild 的顺序由 layer 自动添加的，zIndex 是可以设置的，同 DOM 的 zIndex

layer 在绘制 sprite 的时候，zIndex 小的先绘制，如果两个 sprite 的 zIndex 相同，则 zOrder 小的先绘制，这样就确定层级关系。

#### textures

sprite 可以添加一个或多个 texture，一个 texture 可以是一个图片 url，一个 base64 图片或者一个 json + 图片组成的数组。

textures 不是通过 attr() 添加，而是直接在 sprite 属性上赋值，这一点区别应注意。本库的规范是所有 样式相关的属性通过 attr() 读写，资源属性如 textures、text 直接在 sprite 的属性上赋值。

[例子](https://code.h5jun.com/giq)

```js
const imgUrl = 'https://s5.ssl.qhres.com/static/ec9f373a383d7664.svg'
const scene = new spritejs.Scene('#container')
scene.setResolution(400, 400)

const sprite = new spritejs.Sprite(imgUrl)
sprite.attr({
  bgcolor: '#fff',
  //anchor: [0.5, 0.5],
  pos: [0, 0],
  size: [400, 400],
  borderRadius: '200'
})

scene.layer().appendChild(sprite)
```

sprite 可以添加多个 texture，如果设置了 size，默认 texture 的大小会铺满 sprite 区域，不过我们可以通过 rect 指定 texture 相对于 sprite 显示的区域。还有，我们可以通过 srcRect 来指定 sprite 图片剪裁区域。

[例子](https://code.h5jun.com/kev)

```js
const {Scene, Sprite} = spritejs
const scene = new Scene('#container')
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

scene.setResolution(800, 600)

const box1 = new Sprite()
box1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [212, 188],
  border: [10, 'red'],
  borderRadius: 25,
  bgcolor: '#7fc',
  padding: 10
})

box1.textures = [{
  src: birdsRes,
  srcRect: [2, 2, 86, 60],
  rect: [2, 2, 86, 60]
}, {
  src: birdsRes,
  srcRect: [2, 64, 86, 60],
  rect: [64, 64, 86, 60]      
}, {
  src: birdsRes,
  srcRect: [2, 126, 86, 60],
  rect: [126, 126, 86, 60]   
}]

scene.layer().appendChild(box1)
```

#### spriteFrames

spritejs 支持小图片拼合，类似于 css 的雪碧图，可以使用 [Texture Packer](https://www.codeandweb.com/texturepacker/download) 来生成合并的图片并导出 json 文件，可以用 paper.preload 直接加载合并后的图片和 json 文件，然后直接使用 json 文件中定义好的资源 ID 即可。 

[例子](https://code.h5jun.com/jut)

```js
const {Scene, Sprite} = spritejs
const scene = new Scene('#container')
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

;(async function(){
scene.setResolution(800, 600)

await scene.preload([
  birdsRes, birdsJsonUrl
])

const box1 = new Sprite()
box1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [212, 188],
  border: [10, 'red'],
  borderRadius: 25,
  bgcolor: '#7fc',
  padding: 10
})
box1.textures = [{
  src: 'bird1.png',
  rect: [2, 2, 86, 60]
},{
  src: 'bird2.png',
  rect: [64, 64, 86, 60]
},{
  src: 'bird3.png',
  rect: [126, 126, 86, 60]
}]

scene.layer().appendChild(box1)
})()
```

#### 滤镜 filter

支持 blur、brightness、brightness、dropShadow、grayscale、hueRotate、invert、opacity、saturate、sepia 等常用滤镜。

[例子](https://code.h5jun.com/wisa)

```js
const {Scene, Sprite} = spritejs
const scene = new Scene('#container')
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

scene.setResolution(800, 600)

const box1 = new Sprite()
box1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [212, 188],
  border: [10, 'red'],
  borderRadius: 25,
  bgcolor: '#7fc',
  padding: 10
})

box1.textures = [{
  src: birdsRes,
  srcRect: [2, 64, 86, 60],
  rect: [64, 64, 86, 60],
  filter: {
    dropShadow: [2, 2, 10, 'black'],
  }    
},{
  src: birdsRes,
  srcRect: [2, 2, 86, 60],
  rect: [2, 2, 86, 60],
  filter: {
    opacity: 0.5,
  }    
},{
  src: birdsRes,
  srcRect: [2, 126, 86, 60],
  rect: [126, 126, 86, 60] ,
}]

scene.layer().appendChild(box1)
```

#### Label

Label 是文字类 sprite，它不能设置 textures，但是可以设置 text。Label 支持 font、lineHeight、color 和 textAlign 属性，这些属性的使用方法和 css 基本一样。

需要**注意**的是，不能用 `16px/24px Arial` 表示一个行高 24px 的 16px 字体，必须要使用 `16px Arial` 然后设置行高为 24：

```js
const label = new Label('Hello World')

label.attr({
	font: '16px Arial',
	color: '#000',
	lineHeight: 24
})
```

[例子](https://code.h5jun.com/god)

```js
const {Scene, Label} = spritejs
const scene = new Scene('#container')
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

scene.setResolution(800, 600)

const box1 = new Label("Hello World")
box1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  border: [5, 'grey'],
  borderRadius: 8,
  padding: 16,
  font: 'italic bold 32px Arial'
})

scene.layer().appendChild(box1)
```

### 事件机制

spritejs 支持类似 DOM 的事件模型，与 DOM 不同的是，sprite 没有事件冒泡，默认也不会遮盖事件，事件会依照 sprite 的 zIndex、zOrder 依次触发，最后会触发 layer 的事件。

事件注册方法是 on，注销方法是 off，事件参数中包含 target 表示当前触发事件的对象，layerX、layerY 表示鼠标或触摸事件触发时相对于 layer 左上角的位置，offsetX、offsetY 表示鼠标或触摸事件触发时相对于当前元素 anchor 的坐标位置，originalX、originalY 表示原始的鼠标或 touch 事件坐标。如果包含 texture，还有一个 targetTextures 数组，包含当前位置命中的所有 textures。

[例子](https://code.h5jun.com/puz)

```js
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'


;(async function(){
  const {Scene, Sprite, Label} = spritejs
  const scene = new Scene('#container', 600, 400)

  let res = await scene.preload([birdsRes, 
                                 birdsJsonUrl])


  const button = new Label('点我开始')
  const layer = scene.layer()

  button.attr({
    pos: [10, 10],
    bgcolor: 'rgba(255,255,255,0.5)',
    borderRadius: 5,
    padding: 6,
    color: '#111',
    font: '16px/16px Arial'
  })

  const bird = new Sprite()

  bird.attr({
    anchor: [0.5, 0.5],
    pos: [100, 100],
    opacity: 0.7,
    scale: 0.5,
    //bgcolor: 'green',
    padding: [0,0,0,0],
  })
  window.bird = bird

  bird.textures = ['bird1.png']

  layer.append(button, bird);

  const a1 = new Animator(3000,  function(p){
    var ty = 200 * p
    bird.attr('pos', [100 + ty, 100 ])
  })

  button.on('mouseenter', function(evt){
    evt.layer.canvas.style.cursor = 'pointer'
  })

  button.on('mouseleave', function(evt){
    evt.layer.canvas.style.cursor = 'default'
  })

  button.on('mousedown', function(evt){
    evt.target.attr({
      color: '#f99'
    })
  })

  layer.on('mouseup', function(evt){
    button.attr({
      color: '#111'
    })
  })

  button.on('click', function(evt){
    a1.animate()
  })

  let textureIdx = 0
  setInterval(function(){
    const src = `bird${++textureIdx % 3 + 1}.png`
    bird.textures = [src]
  }, 100);
})()
```

如果有多个 sprite 在同一个位置，事件并不会默认被遮挡，还是会被都触发，但是可以通过事件参数的 stopDispatch() 方法来阻止事件继续传播：

```js
s.on('touchstart', e => {
  console.log('in origin box', e.offsetX, e.offsetY)
  //阻止事件继续传播，如果 s 覆盖住 s2，那么 s 的事件触发后，s2事件不会被触发
  e.stopDispatch() 
})

s2.on('touchstart', e => {
  console.log(111)
})
```

目前支持的事件包括：

`mousedown、mouseup、mousemove、mouseenter、mouseleave、touchstart、touchend、touchmove`

#### 特殊事件: update

任何一个 sprite 如果被引擎渲染一次，就会触发一次 update 事件，事件参数为：

```
{
  target,   //触发事件的 sprite
  context,  //render 时的 context
  renderBox, //当前 render 时的 box
  lastRenderBox,  //前一次 render 时的 box
}

```

### 动画

spritejs 支持 [web animations api](https://w3c.github.io/web-animations/#the-animation-interface)，能够通过指定精灵的关键帧和 timing 来为单个精灵添加动画：

```js
block1.animate([{
  rotate: 0,
  borderRadius: 0,
  bgcolor: 'red',
},{
  rotate: 180,
  borderRadius: 50,
  bgcolor: 'green',
},{
  rotate: 360,
  borderRadius: 0,
  bgcolor: 'blue',
}], {
  duration: 5000,
  direction: 'alternate',
  iterations: Infinity,
})
```

#### layer.timeline

可以通过改变 layer.timeline 中的属性调整动画进程，最常用的是通过设置 layer.timeline.playbackRate 来控制动画的播放速度，如果要让动画暂停，可以将 layer.timeline.playbackRate 设置为 0。

**注意** layer.timeline 会影响到 layer 上的所有动画。

[例子](https://code.h5jun.com/page)

```js
(async function(){
  const {Scene, Sprite, Label} = spritejs
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

  const scene = new Scene('#container', 600, 400)

  let res = await scene.preload(
    [birdsRes, birdsJsonUrl],
  )

  console.log(res)

  const layer = scene.layer('fg', {
    handleEvent: false,
    evaluateFPS: true,
  })

  function randomBirds(i){
    const s = new Sprite('bird1.png')
    const pos = [100, 50 + 30 * i]
    const duration = Math.round(200 + 300 * Math.random())

    s.attr({
      anchor: [0.5, 0.5],
      pos,
      size: [43, 30],
      zIndex: 200,
    })  

    layer.appendChild(s)

    s.animate([
      {textures: 'bird1.png'},
      {textures: 'bird2.png'},
      {textures: 'bird3.png'},
    ], {
      duration,
      direction: 'alternate',
      iterations: Infinity,
    })

    s.animate([
      {x: 100},
      {x: 500},
      {x: 100},
    ], {
      duration: duration * 10,
      iterations: Infinity,
      easing: 'ease-in-out',        
    })

    s.animate([
      {scale: [1, 1]},
      {scale: [-1, 1]},
      {scale: [1, 1]},
    ], {
      duration: duration * 10,
      iterations: Infinity,
      easing: 'step-end',        
    })

    return s    
  }

  let block1 = new Sprite({
    attr: {
      anchor: [0.5, 0.5],
      pos: [300, 200],
      size: [100, 100],
      bgcolor: 'red',
    }
  })

  layer.appendChild(block1)

  block1.animate([{
    rotate: 0,
    borderRadius: 0,
    bgcolor: 'red',
  },{
    rotate: 180,
    borderRadius: 50,
    bgcolor: 'green',
  },{
    rotate: 360,
    borderRadius: 0,
    bgcolor: 'blue',
  }], {
    duration: 5000,
    direction: 'alternate',
    iterations: Infinity,
  })

  for(let i = 0; i < 10; i++){
    randomBirds(i)
  }

  let pausedPlaybackRate;

  speedUpBtn.onclick = function(){
    layer.timeline.playbackRate += 0.2
    rate.innerHTML = layer.timeline.playbackRate.toFixed(1)
  }

  slowDownBtn.onclick = function(){
    layer.timeline.playbackRate -= 0.2
    rate.innerHTML = layer.timeline.playbackRate.toFixed(1)
  }

  pauseBtn.onclick = function(){
    if(pausedPlaybackRate == null){
      pausedPlaybackRate = layer.timeline.playbackRate
      layer.timeline.playbackRate = 0
      rate.innerHTML = layer.timeline.playbackRate.toFixed(1)
    }
  }

  resumeBtn.onclick = function(){
    if(pausedPlaybackRate != null){
      layer.timeline.playbackRate = pausedPlaybackRate
      pausedPlaybackRate = null
      rate.innerHTML = layer.timeline.playbackRate.toFixed(1)
    }
  }

  setInterval(() => {
    fps.innerHTML = layer.fps
  }, 1000)
})()
```

## 性能

spritejs 默认对 sprite 采取缓存，只要没有 bgcolor、border 等基本属性的变化，sprite 渲染一次之后就会被缓存，下次直接从缓存读取，不需要重绘，从而提升效率。另外开发者可以继承 Sprite 类实现自己的缓存策略，比如前面动画的例子就使用了：

```js
const cacheMap = new Map()
class Bird extends spritejs.Sprite {
  constructor(){
    super('bird1.png')
  }
  //共用缓存，提高性能
  get cache() {
    const key = JSON.stringify(this.textures) + this.attr('scale')
    if(cacheMap.has(key)) {
      return cacheMap.get(key)
    }
  }
  set cache(context) {
    if(context == null){
      cacheMap.clear()
      return
    }
    const key = JSON.stringify(this.textures) + this.attr('scale')

    if(!cacheMap.has(key)) {
      cacheMap.set(key, context)
    }
  }      
}
```

## 分组

这是 1.13.0 之后增加的新功能，能够创建一个 Group 对象，在 Group 实例中添加多个 sprites，对它们统一进行 transform。

[例子](https://code.h5jun.com/juqu/edit?html,output)

```js
const scene = new spritejs.Scene('#paper'),
      fglayer = scene.layer('fglayer'),
      Sprite = spritejs.Sprite,
      Group = spritejs.Group

scene.setResolution(800, 600) 

const s1 = new Sprite()
s1.attr({
  pos: [100, 100],
  size: [50, 50],
  bgcolor: 'red',
  rotate: 90,
})

const s2 = new Sprite()
s2.attr({
  pos: [100, 100],
  size: [50, 50],
  bgcolor: 'green',
  rotate: 180,
})

const s3 = new Sprite()
s3.attr({
  pos: [100, 100],
  size: [50, 50],
  bgcolor: 'blue',
})

const group = new Group()

group.append(s1, s2, s3)

fglayer.append(group)

group.attr({
  anchor: 0.5,
  pos: [200, 200],
  rotate: 0, 
  border: [1, 'red'],
})

s1.on('click', evt => {
  console.log(evt)
})

group.animate([
  {rotate: 360}
], {
  duration: 2000,
  iterations: Infinity,
  direction: 'reverse',
})

s1.animate([
  {rotate: 450}
], {
  duration: 1000,
  iterations: Infinity,
})

s2.animate([
  {rotate: 540}
], {
  duration: 1000,
  iterations: Infinity,
})

s3.animate([
  {rotate: 360}
], {
  duration: 1000,
  iterations: Infinity,
})

window.addEventListener('resize', evt => {
  scene.setViewport('auto', 'auto')
})
```

## 高级用法

### 底层渲染

所有的 sprite 都有两个底层方法 draw(fn, clearCache, remove) 和 drawOnce(fn) 方法，用来直接调用 context 进行多次与单次底层渲染。

draw 方法有两个额外参数，表示渲染后是否主动清除缓存，以及渲染后是否移除 sprite。drawOnce 方法只有一个默认参数 fn。fn 是一个函数，它有三个参数分别为当前 canvas 的 context 对象、一个 t 时间戳以及当前 renderer 对象。

调用底层接口用来实现一些高性能动画（如果需要的话）

[例子](https://code.h5jun.com/jibe/edit?js,output)

```js
const scene = new spritejs.Scene('#paper')
//paper.setResolution(800, 600)

const sprite = new spritejs.Sprite()
sprite.attr({
  bgcolor: '#fff',
  pos: [10, 10],
  size: [100, 100],
})

scene.layer().appendChild(sprite)

let i = 0
setInterval(() => {
  sprite.drawOnce(context => {
    context.font = '48px Arial'
    context.strokeStyle = '#f00'
    context.strokeText(String(++i), 10, 90)
  })
}, 1000)
```

### 自定义 sprite 元素

用户可以通过类继承 BaseSprite 或其他 Sprite 类来自定义 Sprite 元素。比如前面性能的例子里，我们通过继承 Sprite 就定义了一个 Bird 类，重写了缓存策略来达到更好的性能。

我们除了继承 Sprite，还可以通过 Sprite.defineAttributes 来扩展属性（**版本 1.8+**），结合底层渲染和扩展属性，我们可以定制出其他的一些强大的 sprite 元素。

[例子](https://code.h5jun.com/coqot)

```js
const scene = new spritejs.Scene('#paper')
scene.setResolution(800, 800) // 设置 Paper 的实际分辨率

const BaseSprite = spritejs.BaseSprite,
  Color = spritejs.Color

class Arc extends BaseSprite {
  constructor(props) {
    super(props);
    this.initAttributes({
      radius: 10,
      fillColor: '',
      strokeColor: '#000',
      renderMode: 'stroke',
      lineWidth: 1,
      angle: [0, 360],
      direction: 1,
    })
  }
  get contentSize() {
    let [width, height] = this.attr('size')
    const radius = this.attr('radius'),
      lineWidth = this.attr('lineWidth')

    if(width === '') {
      width = 2 * (radius + lineWidth)
    }
    if(height === '') {
      height = 2 * (radius + lineWidth)
    }

    return [width, height]
  }
  render(t) {
    const context = super.render(t)
    const r = this.attr('radius')

    if(r) {
      let path = this.createPath()
      const [borderWidth] = this.attr('border')
      const {strokeColor, fillColor, renderMode, lineWidth, direction} = this.attr()

      context.save()
      context.translate(borderWidth + lineWidth, borderWidth + lineWidth)

      let angle = this.attr('angle')

      if(direction === 1) {
        angle = angle.map(ang => Math.PI * -ang / 180)
      } else {
        angle = angle.map(ang => Math.PI * ang / 180)
      }

      path.arc(r, r, r, ...angle, direction)
      if(angle[1] - angle[0] < 2 * Math.PI) {            
        path.lineTo(r, r)
        path.closePath()
      }

      if(lineWidth){
        context.lineWidth = lineWidth
        context.strokeStyle = strokeColor
        context.stroke(path)
      }

      if(renderMode === 'fill') {
        context.fillStyle = fillColor || strokeColor
        context.fill(path)
      }
      context.restore()
    }

    return context
  }
}

Arc.defineAttributes({
  set radius(val) {
    this.set('radius', val)
    this.forceUpdate(true)
  },
  get radius() {
    return this.get('radius')
  },
  set fillColor(val) {
    this.set('fillColor', Color(val).str)
    this.forceUpdate(true)
  },
  get fillColor() {
    return this.get('fillColor')
  },
  set strokeColor(val) {
    this.set('strokeColor', Color(val).str)
    this.forceUpdate(true)
  },
  get strokeColor() {
    return this.get('strokeColor')
  },
  set renderMode(val) {
    this.set('renderMode', val)
    this.forceUpdate(true)
  },
  get renderMode() {
    return this.get('renderMode')
  },
  set lineWidth(val) {
    this.set('lineWidth', val)
  },
  get lineWidth() {
    return this.get('lineWidth')
  },
  set angle(val) {
    this.set('angle', val)
  },
  get angle() {
    return this.get('angle').slice(0)
  },
  set direction(val) {
    this.set('direction', val)
  },
  get direction() {
    return this.get('direction')
  },
})

const arc = new Arc()
arc.attr({
  pos: [200, 200],
  //size: [100, 100],
  //bgcolor: '#f00',
  radius: 100,
  border: [10, 'green'],
  padding: 10,
  renderMode: 'fill',
  fillColor: 'blue',
  strokeColor: 'red',
  lineWidth: 20,
  angle: [0, 90],
})

scene.layer().appendChild(arc)
```

## 服务端渲染

在 1.15.0 之后支持服务端渲染，服务端渲染需要依赖于 [node-canvas](https://github.com/Automattic/node-canvas)，目前暂不支持 Path、Axis 以及 d3 相关的 API 在服务器端渲染。其他 API 可以使用，生成的 canvas 可以输出成图片或者 gif 动画。

服务端渲染需要使用 [sprite-node](https://github.com/spritejs/sprite-node) 模块代替 spritejs 模块

```bash
npm install sprite-node
```

例子

```js
const fs = require('fs')
const GIFEncoder = require('gifencoder');
const {Scene, Layer, Sprite, Label} = require('sprite-node')
const width = 800, height = 600
const scene = new Scene('#test', width, height)
scene.setResolution(width * 2, height * 2)

;(async function(){

const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

await scene.preload(
  [birdsRes, birdsJsonUrl]
) 

const layer = scene.layer('fglayer', {handleEvent: false})

const sprite = new Sprite()
sprite.attr({
  pos: [100, 100],
  size: [100, 100],
  bgcolor: 'red'
})

const bird = new Sprite('bird1.png') 

bird.attr({
  anchor: [0.5, 0.5],
  pos: [800, 600],
  transform: {
    rotate: 0,
  }
})

layer.append(sprite, bird)

const text1 = new Label('中国')

text1.attr({
  anchor: "0.5",
  pos: [400, 300],
  font: '64px Arial',
  color: '#fff',
  bgcolor: 'blue',
  renderMode: 'stroke',
  lineHeight: 200,
  scale: [scene.distortion, 1]
})

layer.append(text1)

const encoder = new GIFEncoder(width, height)
// stream the results as they are available into myanimated.gif
encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'))

encoder.start()
encoder.setRepeat(0)   // 0 for repeat, -1 for no-repeat
encoder.setDelay(500)  // frame delay in ms
encoder.setQuality(10) // image quality. 10 is default.

for(let i = 0; i < 51; i++) {
  console.log(`recording... frame ${i + 1} of 51`)
  bird.textures = [`bird${i % 3 + 1}.png`]
  const canvas = await scene.snapshot(),
    ctx = canvas.getContext('2d')

  encoder.addFrame(ctx)
}
})()
```

## 1.1 版本更新

### 新增 Path 对象用来绘制 SVG Path

Path 对象继承 BaseSprite，可以设置 d、lineWidth、color、renderMode 属性

[例子](https://code.h5jun.com/nalu)

```js
const {Scene, Sprite, Path} = spritejs
const scene = new Scene('#paper', 600, 400)

const path = new Path()

path.attr({
  pos: [10, 50],
  color: 'red',
  d: 'M10,80 q100,120 120,20 q140,-50 160,0',
})
scene.layer().append(path)

renderMode.onchange = function(e){
  path.attr('renderMode', e.target.value)
}

lineWidth.onchange = function(e) {
  let width = e.target.value | 0

  if(width) {
    path.attr('lineWidth', width)
  }
}

pickColor.onchange = function(e) {
  path.attr('color', e.target.value)
}

dPath.onchange = function(e) {
  path.attr('d', e.target.value)
}
```

### 新增 offsetPath、offsetDistance、offsetRotate 属性用来实现路径动画

符合 [offset-path](https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path) API

[例子](https://code.h5jun.com/zozux)

```js
const {Scene, Sprite, Path} = spritejs
const scene = new Scene('#paper', 600, 400)

;(async function(){
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json',
        birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'  
  
  const path = new Path(),
        d = 'M10,80 q100,120 120,20 q140,-50 160,0'
  
  path.attr({
    pos: [10, 50],
    color: 'red',
    d,
  })
  scene.layer().append(path)

  await scene.preload(
    [birdsRes, birdsJsonUrl]   // 预加载资源，支持雪碧图
  )

  const s = new Sprite({
    attributeChangedCallback(...args) {
      //console.log(args)
    }
  })

  s.attr({
    anchor: [0.5, 0.5],
    pos: [10, 50],
    transform: {
      scale: [0.5, 0.5],
    },
    offsetPath: d,
    zIndex: 200,
  })

  scene.layer().appendChild(s)

  s.textures = ['bird1.png']

  s.animate([
    {offsetDistance: 0},
    {offsetDistance: 1}
  ], {
    duration: 3000,
    direction: 'alternate',
    iterations: Infinity,
  })

  s.animate([
    {scale: [.5, .5], offsetRotate: 'auto'},
    {scale: [.5, -.5], offsetRotate: 'reverse'},
    {scale: [.5, .5], offsetRotate: 'auto'},
  ], {
    duration: 6000,
    iterations: Infinity,
    easing: 'step-end',
  })

  s.animate([
    {textures: 'bird1.png'},
    {textures: 'bird2.png'},
    {textures: 'bird3.png'},
  ], {
    duration: 300,
    direction: 'alternate',
    iterations: Infinity,
  })  
})()
```

## 1.2 版本更新

支持 linearGradients 渐变

[例子](https://code.h5jun.com/vik)

```js
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

;(async function(){
  const {Scene, Sprite, Path, Label} = spritejs
  const scene = new Scene('#paper', 600, 400)
  
  await scene.preload(
    [birdsRes, birdsJsonUrl]   // 预加载资源，支持雪碧图
  )  

  const s2 = new Sprite()

  s2.attr({
    anchor: [0.5, 0.5],
    pos: [100, 100],
    size: [50, 50],
    bgcolor: 'red',
    border: [5, 'blue'],
    opacity: 1,
    zIndex: 101,
    transform: {
      //skew: [30, 0]
      translate: [30, 30],
      //rotate: 90
    },
    linearGradients: {
      bgcolor: {
        direction: 135,
        colors: [{
          offset: 0,
          color: 'red',
        }, {
          offset: 1,
          color: 'green',
        }]
      },
      border: {
        direction: 135,
        colors: [{
          offset: 0,
          color: '#37c',
        }, {
          offset: 1,
          color: '#c73',
        }]
      },
    },
  })

  scene.layer().append(s2);

  const label = new Label('Hello World!\n你好，世界！')
  
  label.attr({
    pos: [200, 100],
    zIndex: 1000,
    font: '36px Arial',
    linearGradients: {
      text: {
        direction: 135,
        colors: [{
          offset: 0,
          color: 'red',
        }, {
          offset: 1,
          color: 'green',
        }]
      },
    }      
  })

  scene.layer().append(label)
})()
```

## 1.3 版本更新

支持 OBB 碰撞检测

[例子](https://code.h5jun.com/cosu)

```js
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

;(async function(){
  const {Scene, Sprite, Path, Label} = spritejs
  const scene = new Scene('#paper', 600, 400)
  
  await scene.preload(
    [birdsRes, birdsJsonUrl]   // 预加载资源，支持雪碧图
  )  

  const s = new Sprite({
    attributeChangedCallback(...args) {
      //console.log(args)
    }
  })

  s.attr({
    anchor: [0.5, 0.5],
    pos: [50, 100],
    //size: [50, 50],
    //bgcolor: 'green',
    //opacity: 0.5,
    transform: {
      //translate: [30, 30],
      //rotate: 30,
      scale: [0.5, 0.5],
    },
    offsetPath: 'M10,80 q100,120 120,20 q140,-50 160,0',
    //offsetDistance: 0.5,
    //offsetRotate: 30,
    zIndex: 200,
  })

  scene.layer().appendChild(s)

  s.textures = ['bird1.png']

  s.animate([
    {offsetDistance: 0},
    {offsetDistance: 1}
  ], {
    duration: 3000,
    direction: 'alternate',
    iterations: Infinity,
  })

  s.animate([
    {scale: [.5, .5], offsetRotate: 'auto'},
    {scale: [.5, -.5], offsetRotate: 'reverse'},
    {scale: [.5, .5], offsetRotate: 'auto'},
  ], {
    duration: 6000,
    iterations: Infinity,
    easing: 'step-end',
  })

  s.animate([
    {textures: 'bird1.png'},
    {textures: 'bird2.png'},
    {textures: 'bird3.png'},
  ], {
    duration: 300,
    direction: 'alternate',
    iterations: Infinity,
  })
  
  s.on('touchstart', e => {
    console.log('in origin box', e.offsetX, e.offsetY);
    e.stopDispatch()
  })

  const s4 = new Path()

  s4.attr({
    pos: [50, 100],
    //size: [200, 200],
    bgcolor: '#ddd',
    color: 'red',
    //renderMode: 'fill',
    //lineWidth: 6,
    d: 'M10,80 q100,120 120,20 q140,-50 160,0',
  })
  scene.layer().append(s4)


  const label = new Label('Hello World!\n你好，世界！')
  
  label.attr({
    anchor: [0.5, 0.5],
    pos: [200, 150],
    zIndex: 1000,
    font: '36px Arial',
    border: [10, 'blue'],
    opacity: 0.3,
    linearGradients: {
      text: {
        direction: 135,
        colors: [{
          offset: 0,
          color: 'red',
        }, {
          offset: 1,
          color: 'green',
        }]
      },
    }      
  })

  scene.layer().append(label)

  label.animate([
    {rotate: 0},
    {rotate: 360}
  ], {
    duration: 10000,
    iterations: Infinity,
  })

  s.on('update', evt => {
    if(s.OBBCollision(label)){
      label.attr('opacity', 0.7)
    } else {
      label.attr('opacity', 0.3)
    }
  })

})()
```

## 1.4 ~ 1.7+

完善渲染机制、优化性能、规范 API，提供对 d3 的友好支持

## 1.8 版本更新

新增 Attr 的集成机制，可以很方便地扩展各类 Sprite 对象

## 1.9 版本更新

添加了 layer.getElementById、layer.getElementsByName、layer.querySelector、layer.querySelectorAll

```js
sprite1.id = 'someid'
sprite1.name = sprite2.name = 'akira'

fglayer.getElementById('someid') //sprite1
fglayer.getElementsByName('akira') //[sprite1, sprite2]
fglayer.querySelector('#someid') //sprite1
fglayer.querySelectorAll(':akira') //[sprite1, sprite2]
fglayer.querySelectorAll('label') //[all labels on fglayer]
```

添加了 scene.distortion 属性表示分辨率与 Viewport 之间的横向比率，可以用来防止 label 被拉伸变形：

```js
const scene = new Scene('#paper'),
      fglayer = scene.layer('fglayer'),
      Label = spritejs.Label  

scene.setResolution(1600, 600) 

const text1 = new Label('SpriteJS.org')

text1.attr({
  anchor: "0.5",
  pos: [400, 300],
  font: '48px Arial',
  color: '#fff',
  bgcolor: 'blue',
  renderMode: 'stroke',
  lineHeight: 100,
  scale: [scene.distortion, 1] //防止 text 的拉伸变形
})

fglayer.appendChild(text1)

window.addEventListener('resize', evt => {
  scene.setViewport('auto', 'auto')
})
```

## 1.10 版本更新

### 1.10.0 增加了快照机制，方便高性能地切换 layer

[例子](https://code.h5jun.com/yoro/edit?js,output)

```js
const {Scene, Label} = spritejs

const scene = new Scene('#paper'),
      fglayer = scene.layer('fglayer') 

scene.setResolution(1600, 600) 

let snapshot1, snapshot2;

async function drawText1(){

  if(snapshot1) {
    //clearTimeout(timer)
    const [text1] = fglayer.putSnapshot(snapshot1)
    console.log(fglayer.getElementById('mytext'))
  } else {
    fglayer.remove()
    const text1 = new Label('SpriteJS.org')

    text1.attr({
      id: 'mytext',
      anchor: "0.5",
      pos: [400, 300],
      font: '48px Arial',
      color: '#fff',
      bgcolor: 'blue',
      renderMode: 'stroke',
      lineHeight: 100,
      scale: [scene.distortion, 1]
    })

    fglayer.appendChild(text1)
  }

  if(!snapshot1) {
    snapshot1 = await fglayer.getSnapshot()
  }
}

async function drawText2(){
  if(snapshot2) {
    //console.log('from snapshot!')
    const [text1] = fglayer.putSnapshot(snapshot2)
  } else {
    fglayer.remove()
    const text1 = new Label('Hello world')

    text1.attr({
      //id: "mytext",
      anchor: "0.5",
      pos: [400, 300],
      font: '48px Arial',
      color: '#f0f',
      bgcolor: 'blue',
      renderMode: 'fill',
      lineHeight: 100,
      scale: [scene.distortion, 1]
    })

    fglayer.appendChild(text1)
  }

  if(!snapshot2) {
    snapshot2 = await fglayer.getSnapshot()
  }
}

function $toggle(...functors) {
  const len = functors.length
  let idx = 0
  return function() {
    functors[idx++ % len]()
  }
}

let timer = setInterval($toggle(drawText1, drawText2), 1000)

window.addEventListener('resize', evt => {
  scene.setViewport('auto', 'auto')
})
```

### 1.10.1 Path 增加了 lineCap 和 lineJoin 两个属性

```js
s4.attr({
  anchor: [0, 0],
  pos: [300, 100],
  //size: [200, 200],
  bgcolor: '#ddd',
  //color: 'red',
  //renderMode: 'fill',
  lineWidth: 6,
  lineCap: 'round',
  d: 'M10,80 q100,120 120,20 q140,-50 160,0',
  //d: 'M10 80 h260 v206 h-260Z',
  linearGradients: {
    strokeColor: {
      direction: 45,
      colors: [{
        offset: 0,
        color: 'rgba(255,0,0,1)',
      }, {
        offset: 1,
        color: 'rgba(255,0,0,0)',
      }]
    },
  }
})
```

## 版本 1.16+ 更新

### 将 linearGradients 改成 gradients，支持线性和圆周渐变

```js
const s = new BaseSprite({
  anchor: 0.5,
  bgcolor: 'red',
  size: [100, 100],
  pos: [300, 300],
  zIndex: 200,
  gradients: {
    bgcolor: {
      // vector: [0, 0, 100, 100],  // 线性渐变
      vector: [50, 50, 10, 70, 80, 100], // 圆周渐变
      colors: [{
        offset: 0,
        color: 'rgba(255,0,0,0.5)',
      }, {
        offset: 1,
        color: 'rgba(255,0,0,1)',
      }]
    },
  }  
})
```

- 废弃了 textrue 中允许使用 sprite 的机制，推荐采用 Group 代替
- 优化了 Canvas 渲染性能
- 将 Paper2D 接口废弃，采用 Scene 类
- 跨平台支持 node-canvas 和 微信小程序
- 修复了 fps 显示不正确的 bug