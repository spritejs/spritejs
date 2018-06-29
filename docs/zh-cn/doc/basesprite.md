BaseSprite是SpriteJS四种内置精灵类型的基类，它上面的方法被所有的的精灵元素继承。

## animate()

`animate(keyframes, timing)` 创建一个Web Animation关键帧动画。具体参考[动画](/zh-cn/doc/animation)

## appendTo()

`appendTo(parent)` 将自身添加到父容器上。

## attributes

读取或设置对象的属性，v2.2.0版本之后支持

## attr()

读取或设置对象的属性。

这个方法和jQuery的attr方法类似。

- sprite.attr(propName) 获取单个属性
- sprite.attr() 获取全部属性（性能有损耗，慎用）
- sprite.attr(propName, value) 设置单个属性
- sprite.attr(propName, oldValue => newValue ) 设置计算属性
- sprite.attr(propName, Promise) 设置异步属性
- sprite.attr(propName, async (oldValue) => Promise) 异步设置计算属性
- sprite.attr({prop1, prop2, ...}) 批量设置属性

<p data-height="376" data-theme-id="light" data-slug-hash="aKPBzO" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/aKPBzO/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## boundingRect

动态计算元素在Layer上的实际边界矩形，坐标相对于元素所在位置。比较耗性能的操作，慎用！

<p data-height="393" data-theme-id="light" data-slug-hash="vrvgoB" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/vrvgoB/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## cache

获取或设置元素缓存。具体参考[缓存策略](/zh-cn/guide/cache)

## clearCache()

清除元素缓存。具体参考[缓存策略](/zh-cn/guide/cache)

## clientSize

获取元素内容包含padding的占位大小，具体参考[盒模型](/zh-cn/guide/boxmodel)

## cloneNode()

`cloneNode(deepCopy = false)` 克隆一个sprite对象。如果该对象是Group且deepCopy为true，那么连同它下面的子对象一起复制。

**注意：**cloneNode会拷贝当前对象的全部属性（id除外，深拷贝），以及当前对象的dataset（浅拷贝）

## contentSize

获取元素内容占位大小，具体参考[盒模型](/zh-cn/guide/boxmodel)

## draw()

`draw(timelineTime, context)` Layer调用这个方法来绘制精灵元素到画布上。该方法会根据缓存策略来判断是否加载缓存，如果不加载缓存，那么调用元素的`render(timelineTime, context)`方法进行渲染，否则直接将缓存绘制到画布上。

## forceUpdate()

`forceUpdate(clearCache = false)` SpriteJS的更新策略是当元素属性发生改变时才会更新，有时候我们希望强制更新某些元素，那么可以调用这个方法通知Layer对该元素进行强制更新。

## id

读取或设置元素的id，同`sprite.attr({id})`

## innerSize

同contentSize，具体参考[盒模型](/zh-cn/guide/boxmodel)

## isVisible

元素是否可见，影响渲染和事件，不可见元素不被渲染且不会响应事件。

`opacity`属性为0、`offsetSize`为0、parent元素存在且不可见，会触发当前元素不可见。

## layer

sprite.layer 返回当前sprite所属的layer，如果当前sprite没有添加到layer上，返回undefined。

## name

读取或设置元素的name，同`sprite.attr({name})`

## OBBCollision()

`OBBCollision(target)` 判断两个元素是否碰撞。可以参考[这个例子](http://spritejs.org/demo/#obb)

## offsetSize

获取元素内容包括padding和border的占位大小，具体参考[盒模型](/zh-cn/guide/boxmodel)

## originalRect

元素原始边界矩形，相对于自身位置。

## outerSize

通offsetSize，具体参考[盒模型](/zh-cn/guide/boxmodel)

## pointCollision()

`pointCollision(event)` 元素的事件接收机制调用这个方法判断事件对象坐标是否落在元素的范围内。可以通过改写它来实现特殊的事件区域判定。可以参考[例子](/zh-cn/guide/events#事件和坐标)

## pointToOffset()

`pointToOffset(x, y)` 这个方法将相对于Layer的坐标转换为相对于元素的坐标。

## remove()

将自身从parent上移除。

## render()

`render(timelineTime, context)` 实际将元素绘制到缓存画布或Layer的画布上。

## serialize()

将一个元素序列化。

## transition()

`transition(second, easing)` 创建元素过渡动画。具体参考[过渡动画](/zh-cn/doc/transition)

## vertices

动态计算元素各个顶点在Layer中的坐标。操作比较耗性能，慎用！

## zIndex

读取或设置元素的zIndex，同`sprite.attr({zIndex})`

