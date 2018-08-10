SpriteJS里，一个Layer对象对应一个Canvas实例。

## 创建layer对象

在SpriteJS里，可以直接通过Layer构造函数的方法来创建Layer对象，但是我们不推荐这个做法。更好的做法是通过scene.layer()方法来创建Layer对象。

`scene.layer(id='default', options = {})`

Layer有一些options选项，如下：

### autoRender = true

将这个参数设置为false，那么Layer将不再元素属性更新后自动渲染。有时候我们把SpriteJS结合其他第三方库使用，由于第三方库可能有自己的ticker，这时候我们可以关闭SpriteJS的自动渲染，使用第三方的ticker。具体参考[外部时钟](/zh-cn/guide/ticker)

### context

传给Layer的CanvasRenderingContext2D对象。这个参数如果传给Layer，Layer将使用这个contxt作为实际绘图的context，如果不传，Layer将在container元素内创建一个新的Canvas对象，获取它的CanvasRenderingContext2D对象作为context。

### evaluateFPS = false

是否计算Layer渲染的帧率，如果为true，可以通过layer.fps拿到当前帧率。注意因为SpriteJS的渲染机制不同于其他框架，并不是一个固定的ticker去不断刷新，当画布没有变化的时候，SpriteJS是不会刷新的，这会导致计算不出准确的fps。

### handleEvent = true 

是否代理DOM事件，如果这个参数设置为false，那么这个Layer将不处理DOM事件（可以提升性能）。

### renderMode = 'repaintAll'

SpriteJS提供两种渲染模式：repaintAll和repaintDirty，前者当元素更新时，SpriteJS更新整个画布，后者SpriteJS会动态计算画布需要更新的区域，然后只更新相应区域。一般情况下元素比较多时采用renderAll模式性能较好，如果元素不多，而且画布上更新的区域不大的时候，可以采用repaintDirty节省资源。

## center

只读属性，获得当前layer的中心点。

## canvas

只读属性，获得当前对象的canvas，在与第三方库联合使用的时候，可以将这个canvas传给第三方库，具体参考[外部时钟](/zh-cn/guide/ticker)

## clearContext()

`clearContext(context)` 这个方法定义了清除canvas画布的默认方式，开发者可以改写这个方法来自定义画布的刷新：

```js
layer.clearContext = function(context) {
  context.fillStyle = 'black'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
}
```

## children

只读属性，获得所有子元素

## context

只读属性，获得当前Layer的canvas对象用以渲染的context

## id

只读属性，获得当前Layer的id

## resolution

获得当前Layer的resolution（分辨率），关于resolution，详见[屏幕适配](/zh-cn/guide/resolution)

## timeline

只读属性，获得当前timeline，timeline被所有该layer上的animation动画继承，改变timeline可以改变整个layer的动画行为。

具体参考[动画](/zh-cn/effect#动画-animate)

## toGlobalPos()

`toGlobalPos(x, y)` 将相对于layer的坐标换算成相对于layer所在canvas的相对坐标

## toLocalPos()

`toLocalPos(x, y)` 将相对于layer所在canvas的相对坐标还算成相对于layer的坐标

## viewport

只读属性，获得当前Layer的viewport（实际占位大小），具体参考[屏幕适配](/zh-cn/guide/resolution)

## zIndex

获取或设置Layer的zIndex

