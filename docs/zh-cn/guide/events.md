## 事件和坐标

在[基础用法：事件](/zh-cn/behavior#事件-event)里，我们介绍了sprite事件的基本原理和用法。但是在一些应用中，我们有一些非矩形的元素，比如一些Path或者利用元素圆角绘制的几何图形。如果是Path，我们可以通过事件参数event.targetPaths来判断元素中的Path路径是否在鼠标坐标之内。但是如果是利用元素圆角样式绘制的圆或圆环，我们就不能那么做了。

<div id="point-collision" class="sprite-container"></div>

一个办法是我们可以使用坐标位置到圆心的距离来判断，但是这样比较麻烦，mousemove不断监听，而且还需要通过mouseleave事件处理，否则可能不能判断鼠标是否已经移出元素。

<!-- demo: point-collision -->

其实我们有另一个比较好的办法，那就是重新定义元素鼠标的事件响应区域，这可以通过重写元素的pointCollision方法来实现。

<div id="point-collision-override" class="sprite-container"></div>

我们可以继承Sprite创建一个Circle类，然后重新定义一些属性，对于一些不需要配置，根据可配置属性决定的属性，我们可以在init的attr.setDefault里面确定，创建新的精灵类型是[另一个话题](/zh-cn/guide/nodes)，我们不在这里详细说。在这里，我们只关注通过重写pointCollision方法，我们给精灵重新指定了响应事件的范围，这样我们就只需简单把事件注册在mouseenter和mouseleave上即可。

<!-- demo: point-collision-override -->

## 自定义事件

所有的sprite节点都可以通过dispatchEvent方法发送自定义事件。dispatchEvent有四个参数，含义分别如下：

| 参数名 | 参数类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | String |  | 派发事件的类型 |
| evtArgs | Object |  | 事件参数 | 
| collisionState | Boolean | false | 如果这个参数为`true`，忽略pointCollision，默认判定为命中事件区域 |
| swallow | Boolean | false | 如果这个参数为`true`，事件执行完之后不再向后面的元素传播，这个参数只对Group、Layer类型有效 | 

自定义事件可以让我们以松耦合的方式来完成canvas内部与外部文档的交互。

<div id="custom-event" class="sprite-container"></div>

<div id="zwwctrl">
  <button id="leftBtn">左</button>
  <button id="downBtn">下</button>
  <button id="rightBtn">右</button>
</div>

<!-- demo: custom-event -->

## 绘图事件

## scene的事件代理



<script src="/js/guide/events.js"></script>
