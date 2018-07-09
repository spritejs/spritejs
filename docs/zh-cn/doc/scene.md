SpriteJS创建场景Scene，利用它来管理Layer，派发事件，实现屏幕适配。

## 创建Scene

我们通过new Scene来创建场景，需要传一个容器给Scene，在浏览器版本中，可使用querySelector来制定容器对象，对于Node版本，使用字符串会以该字符串为ID创建一个虚拟容器。对于微信小程序，不需要传Container。

```js
import { Scene } from 'spritejs'

const scene = new Scene('#container')
```

创建Scene除了必须要有的Container外，支持一些配置参数，浏览器和Node版本中支持的参数如下：

### resolution

指定创建Scene的分辨率，这个参数可以是一个数组`[width, height]`或一个特殊的字符串`'flex'`。

如果resolution是一个数组，那么表示将分辨率设置为这个数组里给出的值：

```js
const scene = new Scene('#container', {
  resolution: [600, 600],
})
```

上面的代码不设置viewport只设置resolution，那么默认的viewport和resolution相等，都是600 * 600

这决定了layer创建的canvas的width、height是600、600，容器的宽高也是600、600。

我们可以给scene设置不一样的viewport和resolution：

```js
const scene = new Scene('#container', {
  resolution: [600, 600],
  viewport: [300, 300],
})
```

除此以外，我们还可以给viewport设置`'auto'`让它自适应容器，具体内容详见[屏幕适配](/zh-cn/guide/resolution)

#### 弹性resolution

resolution可以设置为`'flex'`，这样当viewport发生改变时，resolution自动设置为viewport宽高的2倍。

resolution设置为flex的效果可以看[这个例子](http://spritejs.org/demo/#proton_position)

### stickMode

SpritJS支持适配不同的设备，可以设置12种不同的粘连模式。

| 属性名称 | 属性类型 | 属性值 | 属性说明 |
| --- | --- | --- | --- |
| stickMode | 枚举 | `"width"`,`"height"`,`"top"`,`"bottom"`,`"left"`,`"right"` | 6种适配容器的粘连模式 |
| stickExtend | Boolean | `true`,`false` | 如果在前面的任何一种粘连模式中，Canvas宽/高小于容器宽/高时，stickExtend如果设为true，那么将Canvas宽高补齐到容器的宽高 |

具体内容详见[粘连模式](/zh-cn/guide/resolution#id=stick-mode-粘连模式)

### viewport

设置viewport影响创建canvas的样式宽高，viewport除了设置`[width, height]`数组外可以设置成`'auto'`，这样SpriteJS会在当前窗口注册size事件，并在窗口改变时自动更新viewport。

具体内容详见[屏幕适配](/zh-cn/guide/resolution)

## appendChild()

`appendChild(layer)` 添加一个Layer

## appendLayer()

`appendLayer(layer)` 同appendChild

## delegateEvent()

`delegateEvent(event, receiver)` 代理一个DOM事件到对应的元素上，receiveer默认为当前Container

Scene自动代理的事件包括mouse和touch事件，其他事件可以自行代理。具体内容见[事件](/zh-cn/guide/events)

## dispatchEvent()

`dispatchEvent(type, event)` 派发自定义事件。调用这个方法，event会被立即派发给scene自身，同时浏览器会创建一个CustomEvent对象并派发给Container，如果在Container中代理（通过delegateEvent方法）了这个自定义事件类型，那么这个事件会被派发给各个layer。

## hasLayer()

`hasLayer(layer)` 判断layer是否在当前scene上

## insertBefore()

`insertBefore(newLayer, refLayer)` 插入一个Layer到指定Layer之前

## layer()

`layer(id = default, options = {})` 创建一个对应的id的layer。具体详见[Layer](/zh-cn/doc/layer)

## layers()

获取scene上的全部layer

## preload()

`await scene.preload(...resources)` 预加载资源。这是一个异步方法，可以传入url或者frame数组或者资源对象，浏览器会将资源预加载进来，以便后续创建sprite。

具体详见[预加载与雪碧图](/zh-cn/guide/resource)

## removerChild()

`removeChild(layer)` 将一个Layer从Scene中移除

## removeLayer()

`removeLayer(layer)` 同removeChild

## resolution

获取或设置resolution，详见[屏幕适配](/zh-cn/guide/resolution)

## snapshot()

`await scene.snapshot()` 异步方法，对当前scene截屏，返回一个canvas对象。

可以在Node版本中用来生成图片。

```js
const canvas = await scene.snapshot()
fs.writeFileSync('snap.png', canvas.toBuffer())
```

## viewport

获取或设置viewport，详见[屏幕适配](/zh-cn/guide/resolution)
