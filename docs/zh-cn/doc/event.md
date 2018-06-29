SpriteJS支持给精灵派发事件（dispatchEvent），支持DOM事件、内建事件和自定义事件。

## DOM Events

SpriteJS默认代理了container上的鼠标和Touch事件，所以我们可以直接给精灵元素注册这些事件。

SpriteJS默认支持下列事件：

| 事件类型 | 是否原生 | 事件说明 | 
| --- | --- | --- |
| click | Yes | 鼠标或触控设备点击精灵 |
| mousedown | Yes | 鼠标在精灵上被按下 |
| mousemove | Yes | 鼠标在精灵上移动 |
| mouseup | Yes | 鼠标在精灵上被松开 |
| mouseenter | No | 鼠标移入精灵范围 |
| mouseleave | No | 鼠标移出精灵范围 |
| touchstart | Yes | 触控设备触碰精灵 |
| touchmove | Yes | 触碰设备触碰精灵并移动 |
| touchend | Yes | 触控设备结束触碰精灵 |

我们可以直接对精灵注册事件，方法是直接使用`sprite.on(type, handler)`。

on方法的第一个参数还可以是数组，可以同时给精灵注册多个事件类型。

具体可以参考[例子一](http://spritejs.org/demo/#buttons)和[例子二](http://spritejs.org/demo/#events)

## stopDispatch

就像DOM有冒泡机制和阻止冒泡的方法一样，SpriteJS的事件根据精灵的层叠位置关系依次派发，我们可以通过调用`event.stopDispatch()`来
阻止事件派发给同级的后续元素，这样可以实现事件的遮罩。

<p data-height="394" data-theme-id="light" data-slug-hash="rKoeXj" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/rKoeXj/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

上面的例子中，我们通过stopDispatch()屏蔽掉下层元素对mouse事件的响应。要注意，stopDispatch()并不会阻止不同级的元素的事件，因此阻止掉sprite元素的mousemove事件，并不会同时阻止掉它的父容器layer的mousemove事件。

## Build-in Events

SpriteJS元素有一些内置的事件，主要有以下几种：

| 事件类型 | 事件参数 | 事件说明 |
| --- | --- | --- |
| append | {parent, zOrder} | 当元素被append到layer上时触发 |
| remove | {parent, zOrder} | 当元素被从layer上remove时触发 |
| update | {context, target, renderTime, fromCache} | 当元素被重新绘制时触发，发生重绘操作有可能是元素本身属性发生改变，也有可能是其他元素属性改变需要重绘，影响到当前元素。target是要绘制的元素，renderTime是当前layer的timeline的时间，fromCache为true，则说明元素缓存未失效 |
| beforedraw | {context, target, renderTime, fromCache} | 当元素被重新绘制时触发，发生重绘操作有可能是元素本身属性发生改变，也有可能是其他元素属性改变需要重绘，影响到当前元素。target是要绘制的元素，renderTime是当前layer的timeline的时间，fromCache为true，则说明元素缓存未失效 |
| afterdraw | {context, target, renderTime, fromCache} | 当元素被重新绘制时触发，发生重绘操作有可能是元素本身属性发生改变，也有可能是其他元素属性改变需要重绘，影响到当前元素。target是要绘制的元素，renderTime是当前layer的timeline的时间，fromCache为true，则说明元素缓存未失效 |
| preload | {target, loaded, resources} | 这个事件只在scene预加载资源时触发，target是当前scene，loaded是已经加载的资源，resources是需要加载的所有资源 |

我们可以利用这些事件来做一些事情，比如通过afterdraw实现自定义滤镜，参考[这个例子](/zh-cn/guide/events#元素和绘图事件)

## user delegate

SpriteJS可以通过scene.delegateEvent(type, subject)将其他外部事件代理过来，所有在subject上可以被响应的事件都可以代理进来。比如我们可以代理document上的键盘输入事件：

```js
scene.delegateEvent('keydown', document)
scene.delegateEvent('keyup', document)
```

这里有[详细的例子](/zh-cn/guide/events#scene事件代理)

## Custom Events

我们可以给精灵元素派发事件，做法是调用精灵元素的`dispatchEvent(type, eventArgs, collisionState = false, swallow = false)`方法，该方法有四个参数。

- type 要派发的事件类型
- eventArgs 派发的事件参数
- collisionState 默认为false，这样spritejs会检查eventArgs.layerX和eventArgs.layerY来判断事件是否在元素范围内，如果设为true，则跳过这项检查，始终认为事件在范围内。
- swallow 如果派发事件的元素是Layer或Group，那么将这个参数设置为true，可以阻止这个元素将事件下发到它的子元素。

## Remove Events

我们可以调用`sprite.off(type, handler)`方法将事件监听移除。type可以是数组，这样批量移除多个事件。handler参数如果缺省，那么将这个类型下的所有事件监听句柄全部移除。
