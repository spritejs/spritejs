## 事件和坐标

在[基础用法：事件](/zh-cn/behavior#事件-event)里，我们介绍了sprite事件的基本原理和用法。但是在一些应用中，我们有一些非矩形的元素，比如一些Path或者利用元素圆角绘制的几何图形。如果是Path，我们可以通过事件参数event.targetPaths来判断元素中的Path路径是否在鼠标坐标之内。但是如果是利用元素圆角样式绘制的圆或圆环，我们就不能那么做了。

<div id="point-collision" class="sprite-container"></div>

一个办法是我们可以使用坐标位置到圆心的距离来判断，但是这样比较麻烦，而且还需要通过mouseleave事件特殊处理，否则可能不能判断鼠标移除元素。

<!-- demo: point-collision -->

其实我们有另一个比较好的办法，那就是重新定义元素鼠标的事件响应区域，这可以通过重写元素的pointCollision方法来实现。


<script src="/js/guide/events.js"></script>
