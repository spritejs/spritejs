## Chrome Devtools扩展

spritejs v2.0提供chrome开发者工具扩展，让使用者能够比较方便地在chrome浏览器调试sprite元素。

该扩展工具的正式版还未发布，可以在[此处](https://github.com/spritejs/sprite-devtools)获取开发版。

![devtools](https://p5.ssl.qhimg.com/t0138eea6d80e35e719.jpg)

安装了开发者工具后，打开devtools，在Elements面板的Sidebar列表里会多出一个Spritejs的页，同时鼠标可以选中layer上的任意spritejs元素（不过此layer必须启用事件代理，如果设置了`{handleEvent:false}`，那么开发者工具无法选中该元素）。

选中元素后右侧Sidebar面板会出现该元素的属性，可以查看，双击某个属性，可以修改它的值，动态修改属性值能够立即生效。
