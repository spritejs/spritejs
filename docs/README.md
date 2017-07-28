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

```
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



