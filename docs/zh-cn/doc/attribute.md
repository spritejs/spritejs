像DOM元素一样，sprite元素有一些固有属性，改变这些属性可以改变精灵在画布上的外观。这一点与DOM元素的style比较类似，但是与DOM不同的是，DOM区分属性和样式，因此有setAttribute和style两个API，sprite元素只有属性这一个API。

要设置sprite元素的属性，可以直接访问它的`.attributes`属性（v2.2.0之后支持），或者通过`.attr()`方法来设置，推荐使用后者，因为更加灵活。

直接设置元素的`.attributes`属性，在v2.2.0之后支持

```js
const s = new Sprite()

s.attributes.anchor = 0.5
s.attributes.x = 300
s.attributes.y = 300
s.attributes.width = 200
s.attributes.height = 200
s.attributes.bgcolor = 'red'

layer.append(s)
```

推荐使用元素的`.attr`方法

<p data-height="374" data-theme-id="light" data-slug-hash="zaMREK" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/zaMREK/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

精灵支持的基本属性如下：

## anchor 

_Sprite, Group, Label, Path_

`{anchor: [x, y]}` - 获取和设置精灵的“锚点”，精灵以锚点进行定位。

anchor是SpriteJS的元素比较重要和常用的一个属性，详细说明见[锚点-anchor](/zh-cn/layer#锚点-anchor)。

简写 `{anchor: 0.5}` 相当于 `{anchor: [0.5, 0.5]}`

## bgcolor

_Sprite, Group, Label, Path_

`{bgcolor: ColorString}` - 获取和设置精灵的背景色。

bgcolor支持RGB、RGBA、HSLA、HWBA等格式，底层是依赖[color-string](https://github.com/Qix-/color-string)这个库。

bgcolor也支持gradient渐变，可以传一个`{vector, colors}`对象给它，根据vector的length自动判断是LinearGradient还是RadialGradient。

<p data-height="412" data-theme-id="light" data-slug-hash="zayYGd" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/zayYGd/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## border

_Sprite, Group, Label, Path_

`{width: 1, style: 'solid', color: 'red'}` - 定义元素边框

- style: solid | dashed | [5, 10, ...]

<p data-height="374" data-theme-id="light" data-slug-hash="vrvYKv" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/vrvYKv/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## borderRadius

_Sprite, Group, Label, Path_

定义圆角大小

## bounding

_Path_

读取或设置Path的区域检测，默认为'box'，可选值为`box | path`。如果值为'box'，事件碰撞区域为Path元素的boundingBox，否则事件碰撞区域为Path元素的path区域。

## boxSizing

_Sprite, Group, Label, Path_

读取或设置盒模型。默认为'content-box'，可选值`content-box | border-box`。如果设置为`border-box`，那么元素的contentSize为“border+padding+内容宽高”，否则元素的contentSize是内容宽高。

## clip

_Sprite, Group, Label, Path_

改变元素的盒模型，默认值为`content-box`，可选值为`content-box | border-box`。

_Group_

`{path, transform, trim}` 设置一块剪裁区域

<p data-height="480" data-theme-id="light" data-slug-hash="YvdPOG" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/YvdPOG/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## d

_Path_

`path: {d}`的简写，设置Path元素的路径

<p data-height="372" data-theme-id="light" data-slug-hash="GGPgpZ" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/GGPgpZ/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## dashOffset

_Sprite, Group, Label, Path_

当border的style非'solid'的时候有效

<p data-height="494" data-theme-id="light" data-slug-hash="OErJmL" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/OErJmL/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## fillColor

_Label, Path_

设置Path或Label元素的填充色。

<p data-height="372" data-theme-id="light" data-slug-hash="qKLBGv" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/qKLBGv/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## filter

_Sprite, Group, Label, Path_

设置元素的滤镜，支持CanvasRenderingContext2D滤镜，具体使用方式详见[Demo](http://spritejs.org/demo/#filters)

## font

_Label_

设置字体，支持css字体格式。

## height

_Sprite, Group, Label, Path_

设置元素的高度，如果不设置，元素默认高度为图片（textures）的高度，如果没有图片，默认高度为0

## id

_Sprite, Group, Label, Path_

非渲染属性，设置元素的ID

## letterSpacing

_Label_

指定拉丁字母或者CJK文字之间的空间。

## lineBreak

_Label_

读取或设置Label的换行机制，默认为'none'。可选值为：`normal | strict | none`。当Label元素宽度固定时，超过宽度的文字将按照lineBreak的设置换行。

## lineCap

_Path_

设置Path的线帽

## lineHeight

_Label_

设置文字的行高，如果文字高度大于行高，文字会被切割。

## lineJoin

_Path_

设置Path的连线方式

## lineWidth

_Path_

设置Path的线宽，当strokeColor同时被设置时生效

## name

_Sprite, Group, Label, Path_

非渲染属性，设置元素的name

## offsetDistance

_Sprite, Group, Label, Path_

配合offsetPath使用

## offsetPath

_Sprite, Group, Label, Path_

设置offsetPath，可以让精灵沿着path运动，详见[例子](http://spritejs.org/demo/#offset_api)

## offsetRotate

_Sprite, Group, Label, Path_

配合offsetPath使用

## opacity

_Sprite, Group, Label, Path_

设置精灵透明度，值从0到1

## padding

_Sprite, Group, Label, Path_

`[top, right, bottom, left]` 设置元素的padding值

## path

_Path_

`{d, transform, trim}` 设置Path元素的path，详细可参考[文档](/zh-cn/elements#路径-path)

## rotate

_Sprite, Group, Label, Path_

设置元素旋转的角度，单位是角度(deg)

## pos

_Sprite, Group, Label, Path_

`[x, y]` 同时获取或设置元素的x、y坐标

## scale

_Sprite, Group, Label, Path_

`[x, y]` 设置元素的缩放程度，如果设置为负值，元素会被翻转

## scrollLeft

_Group_

设置Group的内容（子元素）往左滚动的距离。

## scrollTop

_Group_

设置Group的内容（子元素）往上滚动的距离。

## shadow

_Sprite, Group, Label, Path_

`{blur, color, offset}` 设置元素的shadow

<p data-height="414" data-theme-id="light" data-slug-hash="mKayqO" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/mKayqO/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## size

_Sprite, Group, Label, Path_

`[width, height]` 同时获取或设置元素的宽度和高度

## skew

_Sprite, Group, Label, Path_

设置元素的倾斜拉伸值

## strokeColor

_Label, Path_

以描边的方式绘制Label或Path

<p data-height="372" data-theme-id="light" data-slug-hash="YvdPPz" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/YvdPPz/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## text

_Label_

设置Label的文字内容

## textAlign

_Label_

`left|center|right` 设置文字水平对齐方式

## textIndent

_Lebel_

指定行首的缩进。只会作用于Label的第一行，如果有多段文字都需要textIndent，建议分成多个Label。

## textures

_Sprite_

`[...images]` 给元素设置一张或多张图片，参数可以是URL、ID、Image对象、`{src, srcRect, rect}`。

详细内容参考[加载图片](/zh-cn/elements#加载图片)，[预加载与雪碧图](/zh-cn/guide/resource#图片的异步加载)

## transform

_Sprite, Group, Label, Path_

`{translate, rotate, scale, skew, matrix}` 批量地重置和设置translate、rotate、scale、skew属性

支持matrix属性，默认值`[1,0,0,1,0,0]`

## transformOrigin

_Sprite, Group, Label, Path_

设置transform的原点，与anchor类似，影响transform的变换规则，但与anchor不同的是anchor相对于元素的size，而transformOrigin则是相对于元素当前的位置。

## translate

_Sprite, Group, Label, Path_

`[x, y]` 设置元素的偏移

## width

_Sprite, Group, Label, Path_

设置元素的宽度，如果不设置，元素默认高度为图片（textures）的高度，如果没有图片，默认高度为0

## wordBreak

_Label_

设置Label元素的换行策略。当lineBreak属性不为'none'且设置了width时，文字按照wordBreak的方式执行换行。可选值为`normal | break-all | break-word | keep-all`，默认值为'normal'。

## x

_Sprite, Group, Label, Path_

设置元素的x坐标位置

## y

_Sprite, Group, Label, Path_

设置元素的y坐标位置

## zIndex

_Sprite, Group, Label, Path_

改变元素的层叠次序
