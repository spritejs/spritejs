## 精灵 Sprite

在spritejs中，Sprite是最基础的一个类，一个Sprite对象相当于DOM中的一个元素Element。同Element在文档流中一样，Sprite在Canvas画布上占有一个特定的区域。一个Sprite有自己的[盒模型](/zh-cn/guide/boxmodel)，通过设置它的基本属性，可以让它在Canvas画布上呈现出不同的背景颜色、边框，也可以让它出现在不同的坐标位置。

### 设置边框和大小

spritejs里，一个不具有textures的Sprite元素默认大小为0，即使将它添加到指定Layer，也是不会被显示出来的。我们给元素设定大小，再设定一个边框，就能让它在画布上呈现出来。

<div id="border-and-size" class="sprite-container"></div>

不同线宽、大小、圆角的border：

<!-- demo: border-and-size -->

### 填充背景色

spritejs背景色填充只需要设置bgcolor属性，支持所有css允许的颜色类型，最常用的是rgb和rgba。

<div id="bgcolor" class="sprite-container"></div>

<!-- demo: bgcolor -->

### 加载图片

在spritejs中，一个sprite元素可以加载一张或多张图片，加载图片最简单的方式就是直接设置Sprite元素的textures属性，将其中的内容设置为对应的图片的URL。

<div id="textures" class="sprite-container"></div>

如果指定图片不设置元素大小，sprite元素默认宽高为图片宽高（微信小程序版除外），如果设置元素大小，sprite图片默认大小被缩放为元素大小。此外，我们可以通过指定rect，来控制图片被加载到元素的哪个位置，这样我们可以平铺加载多张图片。最后，我们还可以通过指定srcRect来裁剪要加载的图片。以上是精灵图片的基本用法，更多加载图片相关的内容，参考[高级用法：资源加载与雪碧图](/zh-cn/guide/resource)。

<!-- demo: textures -->

### 文字 Label

Label是用来显示文字的元素，可以显示单行或多行文字。通过Label的font属性可以改变字体样式、大小等，支持[css font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)字符串。与加载图片的精灵元素类似，如果Label不指定宽高，可以自适应宽高。文字可以通过设置textAlign属性修改对齐方式，默认是居左对齐，可以支持居中和居右对齐。文字还可以支持行高lineHeight属性，如果不设置这个属性，默认行高是font指定字体像素大小的1.2倍。通过设置padding属性能够让文字周围保留一定的空白。

<div id="label-text" class="sprite-container"></div>

<!-- demo: label-text -->

label能够自适应大小，但是对于指定大小的Label，超出大小的部分文字将被遮挡，目前无法做到自动换行、撑开box等高级功能。这块内容后续可以通过为spritejs开发专门的文字类扩展库来实现。

### 路径 Path

前面的例子里我们已经见过Path的使用，这是一个强大的用来绘制矢量图形的基础类。

Path支持SVG的[Path路径](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths)，我们可以使用它来绘制复杂的几何图形。

<div id="svgpath" class="sprite-container"></div>

<!-- demo: svgpath -->

Path对象的path属性是一个非常重要而且强大的属性，通过它能够指定SVG Path的“d”属性，绘制一个矢量图形。path属性还包括transform，对矢量图进行变换。与精灵元素本身的transform不同的是，path的transform直接变换的是矢量路径，所以在进行缩放的时候能够保真。

<div id="svgpath-transform" class="sprite-container"></div>

可以看到左边的爱心在放大的时候会变模糊，右边则不会。因为右边是在放大的时候通过路径的transform重新生成的路径，这样可以保真，当然代价是运算量比较大，因此有利有弊，分场合使用。

<!-- demo: svgpath-transform -->

如上所见，使用Path对象可以绘制复杂的矢量图，不过我们需要对SVG的Path熟悉才会比较好用。spritejs本身不提供基础的简单图形的绘制，但我们可以使用[自定义绘图](/zh-cn/guide/events#元素和绘图事件)或者通过创建[自定义的精灵类型](/zh-cn/guide/nodes)来解决这样的需求。在未来，我们考虑提供专业的绘图扩展库，来解决各种图形相关的问题。

### 分组 Group

就像DOM元素可以嵌套一样，当我们要批量操作多个元素时，我们可以使用Group元素将其他元素放到Group元素下。

<div id="group" class="sprite-container"></div>

对于Group元素的操作就像操作普通精灵那样，因此当我们把几个不同的元素放进Group之后，直接操作Group就可以让Group中的所有元素一起随着Group运动。

<!-- demo: group -->

Group除了分组元素外，还有一个特别好的功能，那就是创建clip剪裁区域。

<div id="group-clip" class="sprite-container"></div>

<!-- demo: group-clip -->

Group的clip属性和Path的path属性一样，可以设置d，表示剪裁区域，并且设置transform和trim。


<script src="/js/elements.js"></script>