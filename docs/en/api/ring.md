<style>
  sub > em {
    font-size: 12px;
    margin-right: 10px;
  }
</style>
## Ring <sub>_extends_</sub> [Path](zh-cn/api/path)

The Ring element draws a torus or arc.

### Attributes

| Attribute Name | Inherits | Type | Default | Instruction |
| --- | --- | --- | --- | --- |
| innerRadius | | number | 0 | Radius of inner circle. |
| outerRadius | | number | 0 | Radius of outer circle. |
| radius | | Array | [0, 0] | Shorthand of [innerRadius, outerRadius] |
| startAngle | | number | 0 | |
| endAngle | | number | 360 | |
| angle | | Array | [0, 360] | Shorthand of [startAngle, endAngle] |
| _readonly_ d | Path | string | '' | SVG Path |
| normalize | | boolean | false | If the `normalize` attribute of path is set to `true`, the center of the path graph will be drawn as the anchor of the element, otherwise, the coordinate will be drawn according to the actual path. |
| fillColor | | color | undefined | |
| strokeColor | | color | undefined | |
| lineWidth | | number | 1 | |
| lineJoin | | enum: {miter, bevel} | miter | |
| lineCap | | enum: {butt, square} | butt | |
| lineDash | | Array | undefined | |
| lineDashOffset | | number | 0 | | 
| miterLimit | | number | 10 | |
| texture | | Image | undefined | |
| textureRect | | Array | undefined | |
| textureRepeat | | boolean | false | Not supported in 2D mode |
| sourceRect | | Array | undefined | |
| id | | string | '' | |
| name | | string | '' | |
| className | | string | '' | |
| x | | number | 0 | |
| y | | number | 0 | |
| pos | | Array | [0, 0] | Shorthand of [x, y] |
| transform | | string | '' | |
| transformOrigin | | Array | [0, 0] | |
| translate | | Array | [0, 0] | |
| rotate | | number | 0 | |
| scale | | Array | [1, 1] | |
| skew | | Array | [0, 0] | |
| opacity | | number | 1 | |
| zIndex | | number | 0 | |
| offsetPath | | string | undefined | |
| offsetDistance | | number | 0 | |
| offsetRotate | | string or number | auto | |
| pointerEvents | | string | visible | |
| filter | | string | none | |

### Properties

##### _readonly_ isVisible

Whether the element is visible.

#### _From Path_

##### _readonly_ mesh

Get the element's geometry mesh data.

##### _readonly_ originalClientCenter

Client center point before matrix transform.

##### _readonly_ originalClientRect

Content box area before matrix transform.

##### _readonly_ originalContentRect

Content box area before matrix transform.

##### d

The same as element.attributes.d。

#### _From Node_

##### _readonly_ ancestors

Get a list of ancestor elements for the current element.

##### _readonly_ animations

Get all animations in the execution of the current element.

##### _readonly_ filters

Get the filters on the current element.

##### _readonly_ layer

Get the layer object in the current paint context.

##### _readonly_ localMatrix

Get the transform matrix of the current element relative to the parent element.

##### _readonly_ parent

Get the parent of the current object.

##### _readonly_ renderer

Get the rendered object in the current paint context.

##### _readonly_ renderMatrix

Get the transform matrix of the current element relative to the canvas coordinate system.

##### _readonly_ zOrder

Returns the order in which the current object is added to the context tree.

##### attributes

Returns the attribute object of the current element.

##### className

The same as element.attributes.className

##### id

The same as element.attributes.id

##### name

The same as element.attributes.name

##### zIndex

The same as element.attributes.zIndex

### Methods

#### _From Path_

##### _override_ draw(meshes = [])

Get a list of element related geometric meshes for rendering.

##### getBoundingClientRect()

Get the actual drawing area information of the element.

##### getPathLength()

Get the total length of path.

##### getPointAtLength(len)

Get the original coordinates of the point where the specified length is located.

##### _override_ onPropertyChange(key, newValue, oldValue)

The action when an element attribute value is changed.

##### _override_ updateContours()

Update the geometric figure of the drawing.

#### _From Node_

##### activateAnimations() {

Activate all animations in progress on the element.

##### addEventListener(type, listener, options = {})

Register event listeners.

##### animate(frames, timing)

Perform the animations.

##### attr(...args)

Get or set attributes in batch.

##### cloneNode()

Copy the entire element.

##### connect(parent, zOrder)

When the element is added to the context tree, the function is called and `parent` and `zorder` are assigned to the element.

##### deactivateAnimations()

Stops all animations in progress on the element.

##### disconnect()

When the element is removed from the context tree, the function is called and the parent and zorder properties are removed.

##### dispatchEvent(event)

Dispatch a custom event.

##### dispatchPointerEvent(event)

Dispatch a mouse or touch event.

##### forceUpdate()

Force the canvas to be redrawn.

##### getAttribute(key)

Get element attribute values.

##### getListeners(type, {capture = false} = {})

Get the event listeners.

##### getOffsetPosition(x, y)

Transform the specified [x, y] coordinates relative to the layer to the coordinates of to the current element, with the anchor as the origin [0, 0].

##### getResolution()

Get the context resolution of the element.

##### isPointCollision(x, y)

Determine whether the event coordinates intersect the element.

##### setAttribute(key, value)

Set the element attribute value.

##### setMouseCapture()

Capture mouse pointer.

##### setResolution({width, height})

Set the context resolution of the element.

##### releaseMouseCapture()

Release mouse pointer.

##### remove()

Remove the element from its parent.

##### removeAttribute(key)

Remove the element attribute value and restore it to the default value.

##### removeEventListener(type, listener, options)

Remove the event listener.

##### transition(sec, easing = 'linear')

Create a transition animation.