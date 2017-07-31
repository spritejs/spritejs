# sprite2 轻量级的 canvas 绘图库

像操作 DOM 元素一样操作 canvas 中的“精灵”

## 整体结构

![](https://p4.ssl.qhimg.com/t01d5a8d15933153621.png)

paper -> layer -> sprite -> texture

### 快速上手

[一个例子](https://code.h5jun.com/giq)

```js
const imgUrl = 'https://s5.ssl.qhres.com/static/ec9f373a383d7664.svg'
const paper = sprite2.Paper2D('#container')
paper.setResolution(400, 400)

const sprite = new sprite2.Sprite(imgUrl)
sprite.attr({
  bgcolor: '#fff',
  //anchor: [0.5, 0.5],
  pos: [0, 0],
  size: [400, 400],
  borderRadius: '200'
})

paper.layer().appendChild(sprite)
```

sprite2 使用非常简单，`sprite2.Paper2D(selector)` 在容器上创建一个 paper， paper 会自适应容器的宽高。通过 `paper.setResolution(width, height)` 创建指定分辨率的画布。

### 设置分辨率

#### paper.setResolution(width, height)

这个方法会影响所有属于 paper 的 layer，分辨率默认值是与容器的宽高相同，通过 setResolution 可以将分辨率设置为任意数值，如果分辨率比例和容器不相同，图像会被拉伸。

```js
const container = document.querySelector('#container')
container.style.width = 600
container.style.height = 400

const paper = sprite2.Paper2D(container)
paper.setResolution(1200, 800)
```

### 创建和获取 layer

paper.layer 可以创建或获取一个 layer，一个 layer 是一层 canvas，可以在上面绘制 sprite。paper.layer 可以传不同 id，这样可以创建不同的图层。比如：

```js
const background = paper.layer('background')
const foreground = paper.layer('foreground')
```

paper.layer 有第二个参数，如果是一个数字，表示 zIndex，数值大的显示在上层。默认的 zIndex 是 0。如果两个 layer 的 zIndex 相同，后生成的 layer 显示在上层。

```js
const foreground = paper.layer('foreground', 1)  //前景在背景之上
const background = paper.layer('background', 0)
```

### Layer 的高级配置

layer 的第二个参数可以传一个 object，有以下几个属性：

#### zIndex

同直接传数字 zIndex

```js
const foreground = paper.layer('foreground', {zIndex: 1})
```

#### handleEvent 

boolean handleEvent ： 是否处理事件，默认为 true，能够让 layer 响应事件，并派发给 layer 上的所有 sprites。目前支持的事件有 mousedown、mouseup、mousemove、mouseenter、mouseleave、touchstart、touchmove、touchend，详见**事件处理机制**

```js
const foreground = paper.layer('foreground', {handleEvent: false})
```

如果一个层只是渲染，不要给其中的 sprite 添加事件，那么可以将 handleEvent 置为 false，这样可以提升性能。

#### evaluateFPS

boolean evaluteFPS ： 开启这个选项可以监控 layer 的 FPS 变化从而测试性能。不过注意的是，sprite2 的渲染机制和其他一些库不同，它并没有固定周期渲染，如果当前 layer 的 sprite 没有发生变化，sprite2 并不会刷新，此时测不出 FPS，如果 sprite 的刷新频率很低，那么此时的 FPS 数值也会很低，这个和性能无关。

```js
const foreground = paper.layer('foreground', {evaluateFPS: false})
```

#### renderMode

renderMode : 渲染模式，默认值为 repaintAll，表示每当 sprite 有变化时，整个 layer 区域全部刷新，可切换为 repaintDirty，那样只会刷新 sprite 影响到的区域。如果 sprite 数量很多的时候，repaintAll 性能较好，如果 sprite 数量不太多，而且运动区域只占整个 canvas 区域一小部分的时候，采用 repaintDirty 性能较好。

```js
const foreground = paper.layer('foreground', {renderMode: 'repaintDirty'})
```


### 资源预加载

主要是 sprite 用到的图片资源，当图片比较大时，可以用 paper.preload 进行资源的预加载。

#### paper.preload(...res)

这是一个异步方法，返回一个 promise，异步获取图片资源。

```js
(async function(){
	...
	
	await paper.preload(
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

目前 sprite2 提供两类基本 Sprite，一类是图形化的 Sprite，拥有 textures 结构，一类是 Label，用来设置字体。

#### Sprite 盒模型

sprite 盒模型和 DOM 的类似，不同的是因为 sprite2 主要是以坐标定位为主，因此没有为 sprite 提供 margin 属性。

![](https://s5.ssl.qhres.com/static/a8175ad8602ba8ee.svg)

盒模型从内到外依次是 texture -> innerbox -> outerbox -> border

innerbox 与 outerbox 之间的空隙是 padding

**注意** 

- sprite2 简化了 border 和 padding，目前只支持单一的数值，暂不支持 borderLeft、paddingTop 这种分别设定不同宽度，未来可能会提供支持。
- sprite2 的 border 提供 colore 和宽度，暂不支持改变线条样式，统一为实现，未来可能会提供其他线条支持
- sprite2 的 border 支持 borderRadius，但是也同样不支持分别设定不同的 x、y 方向的 radius，只支持统一的单一值，另外 borderRadius 不支持百分比，未来可能会提供支持

[例子](https://code.h5jun.com/legi)

```js
const paper = sprite2.Paper2D('#container')
const Sprite = sprite2.Sprite

paper.setResolution(800, 600)

const box = new Sprite()
box.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [100, 100],
  border: [10, 'red'],
  borderRadius: 25
})

paper.layer().appendChild(box)
```

#### 定位

上面的例子可以看到，sprite2 提供 pos、 size 属性用来定义 sprite **相对于 layer** 的坐标位置和大小。另外 sprite 有一个 anchor 属性，两个值分别定义 x、y 轴上元素参考点的相对位置，默认是 [0, 0]，表示元素的左上角。上面设置为 [0.5, 0.5] 表示参考点位于元素的中心。sprite 在 layer 上的位置 pos 实际上是参考点在 layer 上的相对坐标。另外对元素做 transform 的时候，也是以参考点为中心。 

#### transform

sprite 提供 transform 进行形状变换，支持 rotate、scale、translate、skew，也直接支持变换矩阵：

[例子](https://code.h5jun.com/fejo)

```js
const paper = sprite2.Paper2D('#container')
const Sprite = sprite2.Sprite

paper.setResolution(800, 600)

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

paper.layer().appendChild(box1)

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

paper.layer().appendChild(box2)

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

paper.layer().appendChild(box3)
```

**注意**

- transform 里面定义属性的顺序可能会影响变换结果，因为变换是按照顺序来的，比如先 transform 在 rotate 和先 rotate 再 transform，结果可能并不相同。
- transform 支持直接传一个 6 个数的变换数组，它的值以及含义和 css3 矩阵变换是一样的

#### bgcolor 和 opacity

sprite 支持背景色，背景色支持所有的 css 颜色格式，包括 rgba。同时 sprite 也支持直接设置透明度 opacity，设置的规则也和 css 规则一样。

[例子](https://code.h5jun.com/juri)

```js
const paper = sprite2.Paper2D('#container')
const Sprite = sprite2.Sprite

paper.setResolution(800, 600)

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

paper.layer().appendChild(box1)

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

paper.layer().appendChild(box2)

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

paper.layer().appendChild(box3)
```

#### zOrder 和 zIndex

所有的 sprite 都有 zOrder 和 zIndex 两个属性，其中 zOrder 是根据 appendChild 的顺序由 layer 自动添加的，zIndex 是可以设置的，同 DOM 的 zIndex

layer 在绘制 sprite 的时候，zIndex 小的先绘制，如果两个 sprite 的 zIndex 相同，则 zOrder 小的先绘制，这样就确定层级关系。

#### textures

sprite 可以添加一个或多个 texture，一个 texture 可以是一个图片 url，一个 base64 图片或者一个 json + 图片组成的数组。

textures 不是通过 attr() 添加，而是直接在 sprite 属性上赋值，这一点区别应注意。本库的规范是所有 样式相关的属性通过 attr() 读写，资源属性如 textures、text 直接在 sprite 的属性上赋值。

[例子](https://code.h5jun.com/giq)

sprite 可以添加多个 texture，如果设置了 size，默认 texture 的大小会铺满 sprite 区域，不过我们可以通过 rect 指定 texture 相对于 sprite 显示的区域。还有，我们可以通过 srcRect 来指定 sprite 图片剪裁区域。

[例子](https://code.h5jun.com/kev)

```js
const paper = sprite2.Paper2D('#container')
const Sprite = sprite2.Sprite
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

paper.setResolution(800, 600)

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

paper.layer().appendChild(box1)
```

#### spriteFrames

sprite2 支持小图片拼合，类似于 css 的雪碧图，可以使用 [Texture Packer](https://www.codeandweb.com/texturepacker/download) 来生成合并的图片并导出 json 文件，可以用 paper.preload 直接加载合并后的图片和 json 文件，然后直接使用 json 文件中定义好的资源 ID 即可。 

[例子](https://code.h5jun.com/jut)

```js
const paper = sprite2.Paper2D('#container')
const Sprite = sprite2.Sprite
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

;(async function(){

paper.setResolution(800, 600)

await paper.preload([
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

paper.layer().appendChild(box1)
})()
```

#### 滤镜 filter

texture 未来会支持 filter 属性，可以对图形进行一些变换，目前还未实现

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
const paper = sprite2.Paper2D('#container')
const Label = sprite2.Label
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

paper.setResolution(800, 600)

const box1 = new Label("Hello World")
box1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  border: [5, 'grey'],
  borderRadius: 8,
  padding: 16,
  font: 'italic bold 32px Arial'
})

paper.layer().appendChild(box1)
```

### 事件机制

sprite2 支持类似 DOM 的事件模型，与 DOM 不同的是，sprite 没有事件冒泡，默认也不会遮盖事件，事件会依照 sprite 的 zIndex、zOrder 依次触发，最后会触发 layer 的事件。

事件注册方法是 on，注销方法是 off，事件参数中包含 target 表示当前触发事件的对象，layerX、layerY 表示鼠标或触摸事件触发时相对于 layer 左上角的位置，offsetX、offsetY 表示鼠标或触摸事件触发时相对于当前元素 anchor 的坐标位置。如果包含 texture，还有一个 targetTextures 数组，包含当前位置命中的所有 textures。

[例子](https://code.h5jun.com/puz)

```js
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'


;(async function(){
  const paper = sprite2.Paper2D('#container', 600, 400)

  const Sprite = sprite2.Sprite,
        Label = sprite2.Label

  let res = await paper.preload([birdsRes, 
                                 birdsJsonUrl])


  const button = new Label('点我开始')
  const layer = paper.layer()

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

### transition 与 animation

这一块目前还未实现，将来会实现

现在可以使用[第三方动画库](https://github.com/akira-cn/animator.js)来做简单的动画

[例子](https://code.h5jun.com/gus)

### 性能

sprite2 默认对 sprite 采取缓存，只要没有 bgcolor、border 等基本属性的变化，sprite 渲染一次之后就会被缓存，下次直接从缓存读取，不需要重绘，从而提升效率。另外开发者可以继承 Sprite 类实现自己的缓存策略，比如前面动画的例子就使用了：

```js
const cacheMap = new Map()
class Bird extends sprite2.Sprite {
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