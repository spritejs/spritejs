Like DOM elements, sprite elements have some intrinsic properties that can be changed to change the appearance of the sprite on the canvas. This is similar to the style of the DOM element, but unlike the DOM, the DOM distinguishes between attributes and styles, so there are two APIs, attributes and style. The sprite element has only one attributes API.

To set the properties of a sprite element, you can directly access its `.attributes` property (since v2.2.0), or set it by the `.attr()` method. The `attr()` is recommended because it is more flexible.

Set the `.attributes` of the element directly, since v2.2.0

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

It is recommended to use the `.attr()` 

<p data-height="374" data-theme-id="light" data-slug-hash="zaMREK" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/zaMREK/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The basic attributes supported by the sprite are as follows:

## anchor 

_Sprite, Group, Label, Path_

`{anchor: [x, y]}` - Gets and sets the "anchor" of the sprite, and the sprite is positioned with the anchor point.

**Anchor is an important and commonly used attribute of SpriteJS elements.**

<p data-height="457" data-theme-id="light" data-slug-hash="ERBbLY" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/ERBbLY/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

_rotation of anchor [0.5, 0.5]_. Abbreviation `{anchor: 0.5}` is equivalent to `{anchor: [0.5, 0.5]}`

<p data-height="462" data-theme-id="light" data-slug-hash="vrqWzx" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/vrqWzx/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

_rotation of anchor [1.0, 1.0]_.

## bgcolor

_Sprite, Group, Label, Path_

`{bgcolor: ColorString}` - Gets or sets the background color of the sprite.

`bgcolor` supports RGB, RGBA, HSLA and HWBA colors base on [color-string](https://github.com/Qix-/color-string).

Bgcolor also supports gradients. You can set a {vector, colors} value to it. It will automatically determine whether it is LinearGradient or RadialGradient according to the number of the vector values.

<p data-height="412" data-theme-id="light" data-slug-hash="zayYGd" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/zayYGd/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## border

_Sprite, Group, Label, Path_

`{width: 1, style: 'solid', color: 'red'}` - Get or set sprite borders

- style: solid | dashed | [5, 10, ...]

<p data-height="374" data-theme-id="light" data-slug-hash="vrvYKv" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/vrvYKv/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## borderRadius

_Sprite, Group, Label, Path_

Get or set border-radius.

## bounding

_Path_

Get or set the collision area of Path. The value is 'box' (default) or 'path. If the value is 'box', the event collision area is the boundingBox of the Path element, otherwise the event collision area is the path area of the Path element.

## boxSizing

_Sprite, Group, Label, Path_

Defines how to calculate the total width and height of an element.

- content-box
  - This is the initial and default value as specified by the CSS standard. The width and height properties include the content, but does not include the padding, border, or margin. For example, `{width: 350, border: {width: 10}}` renders a box that is 370px wide.
Here, the dimensions of the element are calculated as: width = width of the content, and height = height of the content. (Borders and padding are not included in the calculation.)
- border-box
  - The width and height properties include the content, padding, and border, but do not include the margin. Note that padding and border will be inside of the box. For example, `{width: 350, border: {width: 10}}` renders a box that is 350px wide. The content box can't be negative and is floored to 0, making it impossible to use border-box to make the element disappear.

## clip

_Group_

`{path, transform, trim}` Set a clipping area.

<p data-height="480" data-theme-id="light" data-slug-hash="YvdPOG" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/YvdPOG/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## d

_Path_

Short for  `path: {d}`, set the path of the Path element.

<p data-height="372" data-theme-id="light" data-slug-hash="GGPgpZ" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/GGPgpZ/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## dashOffset

_Sprite, Group, Label, Path_

Valid when the the border.style is not 'solid'.

<p data-height="494" data-theme-id="light" data-slug-hash="OErJmL" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/OErJmL/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## fillColor

_Label, Path_

Get or set the fill color of the Path or Label element.

<p data-height="372" data-theme-id="light" data-slug-hash="qKLBGv" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/qKLBGv/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## filter

_Sprite, Group, Label, Path_

Get or set the filter of the element. For details, see [Demo](http://spritejs.org/demo/#filters)

## font

_Label_

Get or set fonts, support most css font formats.

## height

_Sprite, Group, Label, Path_

Get or set the height of the element. The default value is the height of the texture image. If there is no textures, the default value is 0.

## id

_Sprite, Group, Label, Path_

## letterSpacing

_Label_

Specifies the spacing behavior between text characters.

## lineBreak

_Label_

Get or set the label's linefeed mechanism. The default value is 'none'. The optional values are: `normal | strict | none`. When the width of the Label element is fixed, the text that exceeds the width will be wrapped according to the lineBreak setting.

## lineCap

_Path_


## lineHeight

_Label_

Set the line height of the text. If the text height is greater than the line height, the text will be cut.

## lineJoin

_Path_

## lineWidth

_Path_

Get or set the line width of the Path, only takes effect when strokeColor is set.

## name

_Sprite, Group, Label, Path_

## offsetDistance

_Sprite, Group, Label, Path_

Set with offsetPath.

## offsetPath

_Sprite, Group, Label, Path_

Set the offsetPath to move the sprite along the path. 

See [demo](http://spritejs.org/demo/#offset_api).

## offsetRotate

_Sprite, Group, Label, Path_

## opacity

_Sprite, Group, Label, Path_

Get or set the sprite transparency, from 0 to 1.

## padding

_Sprite, Group, Label, Path_

`[top, right, bottom, left]` sprite paddings.

## path

_Path_

`{d, transform, trim}` Set or get paths.

<p data-height="378" data-theme-id="light" data-slug-hash="BVgJRv" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/BVgJRv/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## rotate

_Sprite, Group, Label, Path_

Set the angle of the element rotation. (unit: deg)

## pos

_Sprite, Group, Label, Path_

`[x, y]` Get or set the X and Y coordinates of the element.

## scale

_Sprite, Group, Label, Path_

`[x, y]` Get or set the scaling of the element, if set to negative values, the element will be flipped.

## scrollLeft

_Group_

Gets or sets the number of pixels that a group's children is scrolled to the left.

## scrollTop

_Group_

Gets or sets the number of pixels that a group's children is scrolled to the top.

## shadow

_Sprite, Group, Label, Path_

`{blur, color, offset}` Get or set the shadow of the element.

<p data-height="414" data-theme-id="light" data-slug-hash="mKayqO" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/mKayqO/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## size

_Sprite, Group, Label, Path_

`[width, height]` Get or set the width and height of the element.

## skew

_Sprite, Group, Label, Path_

Get or set the skew value of the element.

## strokeColor

_Label, Path_

<p data-height="372" data-theme-id="light" data-slug-hash="YvdPPz" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/YvdPPz/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## text

_Label_

Get or set the text content of the Label.

## textAlign

_Label_

`left|center|right` Get or set text alignment.

## textIndent

_Lebel_

Specifies the amount of indentation (empty space) that is put before lines of text in a block. 

## textures

_Sprite_

`[... Images]` Get or set one or more textures to the elements, the item value can be URL, ID, Image or `{src, srcRect, rect}`.

<p data-height="363" data-theme-id="light" data-slug-hash="qKzxww" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/qKzxww/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

_load a texture_

<p data-height="377" data-theme-id="light" data-slug-hash="qKzxeG" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/qKzxeG/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

_load texture parts_

**SpriteJS support css-sprites. We can use [TexturePacker](https://www.codeandweb.com/texturepacker) to create sprite sheets!**

See [demo](http://spritejs.org/demo/#basic_sprites).

## transform

_Sprite, Group, Label, Path_

`{translate, rotate, scale, skew, matrix}` Reset the translate, rotate, scale, and skew attributes.

Support the matrix attribute, default value is `[1,0,0,1,0,0]`.

## transformOrigin

_Sprite, Group, Label, Path_

Set the origin of the transform, similar to the anchor.

The difference of transformOrigin and anchor is that the value of the anchor relative to the element size, and the value of the transformOrigin is relative to the current position of the element. 

## translate

_Sprite, Group, Label, Path_

`[x, y]` Get or set the translation of the element.

## width

_Sprite, Group, Label, Path_

Get or set the width of the element. The default value is the height of the texture image. If there is no textures, the default value is 0.

## wordBreak

_Label_

Get or set the linefeed policy of the Label element. When the lineBreak attribute is not 'none' and the 'width' attribute is set, the text performs a line break. The optional values are `normal | break-all | break-word | keep-all`.

## x

_Sprite, Group, Label, Path_

Get or set the x coordinate of the element.

## y

_Sprite, Group, Label, Path_

Get or set the y coordinate of the element.

## zIndex

_Sprite, Group, Label, Path_
