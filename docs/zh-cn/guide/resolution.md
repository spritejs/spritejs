<style>
  #resolution-adaptive {
    width: 350px;
    height: 350px;
  }
</style>

## 自适应父容器

要实现自适应大小，使用spritejs是很简单的，Scene能够在初始化的时候自动根据容器的宽高来设置canvas的样式宽高。

<div id="adaptive" class="sprite-container"></div>

<!-- demo: adaptive -->

如果我们的容器适配窗口大小，当我们改变窗口大小时，canvas的大小不会随着改变，但是我们可以通过将Scene的viewport设置为`['auto', 'auto']`，这样就让canvas大小在窗口调整时随着容器大小改变。

<div id="resize" class="sprite-container"></div>

<!-- demo: resize -->

## Stick Mode 粘连模式

在移动设备上，要适配不同的屏幕比例，简单的auto适配可能会导致sprite元素被拉伸变形。如果要避免这个问题，我们可以通过配置Scene的Stick Mode相关属性来解决这个问题。

| 属性名称 | 属性类型 | 属性值 | 属性说明 |
| --- | --- | --- | --- |
| stickMode | 枚举 | `"width"`,`"height"`,`"top"`,`"bottom"`,`"left"`,`"right"` | 6种适配容器的粘连模式 |
| stickExtend | Boolean | `true`,`false` | 如果在前面的任何一种粘连模式中，Canvas宽/高小于容器宽/高时，stickExtend如果设为true，那么将Canvas宽高补齐到容器的宽高 |

<div id="sticky">
  <div id="stickMode"  class="sprite-container"></div>
  <div id="control">
    <div>增加高度：<input id="heightBtn" type="range" value="0"></input></div>
    <div>stickExtend：<input id="extendBtn" type="checkbox"></input></div>
  </div>
</div>

<!-- demo: stickMode -->

竖屏的9种适配情况：

![](https://s1.ssl.qhres.com/static/e65fd506d3628cb8.svg)

对应横屏的9种适配情况

![](https://s1.ssl.qhres.com/static/9b11bf3144fbe59a.svg)

<script src="/js/guide/resolution.js"></script>
