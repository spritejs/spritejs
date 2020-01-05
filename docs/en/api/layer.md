<style>
  sub > em {
    font-size: 12px;
    margin-right: 10px;
  }

  h5 {
    padding-top: 10px;
    border-top: dashed 1px #ddd;
  }
</style>
## Layer <sub>_extends_</sub> [Group](zh-cn/api/group)

The layer element represents a layer that binds to a canvas context.

### Attributes

| Attribute Name | Inherits | Type | Default | Instruction |
| --- | --- | --- | --- | --- |
 anchorX | | number | 0 | |
| anchorY | | number | 0 | |
| anchor | | Array | [0, 0] | Shorthand of [anchorX, anchorY] |
| width | | number | undefined | if not set, it is adaptive according to the content |
| height | | number | undefined | if not set, it is adaptive according to the content |
| size | | Array | [undefined, undefined] | Shorthand of [width, height] |
| borderWidth | | number | 0 | |
| borderColor | | color | rgba(0,0,0,1) | |
| border | | Array | [0, 'rgba(0,0,0,1)'] | Shorthand of [borderWidth, borderColor] |
| borderDash | | Array | undefined | |
| borderDashOffset | | number | 0 | | 
| borderTopLeftRadius | | Array | [0, 0] | |
| borderTopRightRadius | | Array | [0, 0] | |
| borderBottomRightRadius | | Array | [0, 0] | |
| borderBottomLeftRadius | | Array | [0, 0] | |
| borderRadius | | Array or number | 0 | |
| bgcolor | | color | undefined | background color |
| paddingTop | | number | 0 | |
| paddingRight | | number | 0 | |
| paddingBottom | | number | 0 | |
| paddingLeft | | number | 0 | |
| padding | | Array | [0, 0, 0, 0] | Shorthand of [paddingTop, paddingRight, paddingBottom, paddingLeft] |
| boxSizing | | enum: {content-box, border-box} | content-box | |
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

##### _readonly_ autoRender

Whether to render automatically depends on the parameters when creating a layer. For specific usage, see [external ticker](/en/guide/Ticker).

##### _readonly_ displayRatio

The display pixel ratio is determined according to the scene parameters. For specific usage, see [screen adaptation](/en/guide/resolution).

##### _readonly_ offscreen

If the canvas of the layer is offscreen, this property is true.

##### _readonly_ renderer

Layer's render object.

##### _readonly_ renderOffset

The coordinate offset of the layer from the scene's container.

##### _readonly_ timeline

The timeline used to control the animations.

##### prepareRender

A promise, corresponding to the current frame rendering state, is only valid when autoRender is true.

#### _From Group_

##### _readonly_ childNodes

The same as children.

##### _readonly_ children

The child elements.

##### _readonly_ orderedChildren

Child elements sorted by zindex and zorder.

#### _From Block_

##### _readonly_ borderSize

Element's border size, equal to `content + padding + half of border`.

##### _readonly_ clientSize

Element's content box size, equal to `content + padding`.

##### _readonly_ contentSize

Element's content size.

##### _readonly_ hasBorder

If there is a border.

##### _readonly_ isVisible

Whether the element is visible.

##### _readonly_ mesh

Get the element's geometry mesh data.

##### _readonly_ offsetSize

Element's content box and border size, equal to `content + padding + border`.

##### _readonly_ originalClientRect

Client box area before matrix transform.

##### _readonly_ originalContentRect

Content box area before matrix transform.

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

##### constructor(options)

| Name | Type |Defaul | Instruction |
| --- | --- | --- | --- |
| alpha | boolean | true | alpha channel |
| autoRender | boolean | true | auto render |
| antialias | boolean | true | antialias option for webgl/webgl2 |
| bufferSize | number | 1500 | BufferSize is used to merge rendering. The larger the buffer size is, the more memory will be consumed, but the corresponding drawing count can be reduced |
| canvas | Canvas | null | Canvas context passed to the layer, if not specified, layer will create a new context environment. |
| contextType | enum: {webgl2, webgl, 2d} | webgl2 | The context type |
| depth | boolean | true | depth option for webgl/webgl2 |
| desynchronized | boolean | false | Set to true to reduce the delay of canvas drawing in the event loop |
| failIfMajorPerformanceCaveat | boolean | false | failIfMajorPerformanceCaveat option for webgl/webgl2 |
| id | string | '' | Layer's ID |
| powerPreference | enum: {default, high-performance, low-power} | default | powerPreference option for webgl/webgl2 |
| premultipliedAlpha | boolean | true | premultipliedAlpha option for webgl/webgl2 |
| preserveDrawingBuffer | boolean| false | preserveDrawingBuffer option for webgl/webgl2 |
| stencil | boolean | false | stencil option for webgl/webgl2 |

##### _override_ dispatchPointerEvent(event)

Dispatch a mouse or touch event.

##### _override_ forceUpdate()

Force the canvas to be redrawn.

##### _override_ onPropertyChange(key, newValue, oldValue)

The action when an element attribute value is changed.

##### _override_ setResolution({width, height})

Set the context resolution of the element.

##### render({clear = true} = {})

Draw content onto canvas.

##### toGlobalPos(x, y)

Convert the layer coordinates to DOM event coordinates.

##### toLocalPos(x, y)

Convert DOM event coordinates to layer coordinates.

#### _From Group_

##### append(...els)

Add elements to the group.

##### appendChild(el)

Add an element to the group.

##### _override_ cloneNode(deep = false)

Copy a group. If deep parameter is true, the child elements in the group are copied at the same time.

##### _override_ draw(meshes = [])

Get a list of element related geometric meshes for rendering.

##### getElementById(id)

Returns the child element of the specified ID.

##### getElementsByClassName(className)

Returns the list of child elements for the specified className.

##### getElementsByName(name)

Returns a list of child elements for the specified name.

##### getElementsByTagName(name)

Returns a list of child elements of the specified type.

##### insertBefore(el, ref)

Before inserting the specified element into the ref element, if ref is null, then el will be added to the end of the group. If ref is not null and is not a child element of the group, an exception will be thrown.

##### querySelctor(selector)

Returns the specified child element based on the selector.

##### querySelectorAll(selector)

Returns a list of all matching child elements based on the selector.

##### replaceChild(el, ref)

Replace the ref element with a new el element. If the ref element is not in the current group, an exception is thrown.

##### removeAllChildren()

Remove all child elements of the group.

##### removeChild(el)

Moves the specified element out of the group.

##### reorder()

Reorder children in the order of zindex and zorder, which updates orderedChildren.

##### seal()

Seal child elements to improve performance. For details, please refer to [improve performance](/en/guide/performance).

##### _override_ updateContours()

Update the geometric figure of the drawing.

#### _From Block_

##### getBoundingClientRect()

Get the actual drawing area information of the element.

#### _From Node_

##### activateAnimations() {

Activate all animations in progress on the element.

##### addEventListener(type, listener, options = {})

Register event listeners.

##### animate(frames, timing)

Perform the animations.

##### attr(...args)

Get or set attributes in batch.

##### connect(parent, zOrder)

When the element is added to the context tree, the function is called and `parent` and `zorder` are assigned to the element.

##### deactivateAnimations()

Stops all animations in progress on the element.

##### disconnect()

When the element is removed from the context tree, the function is called and the parent and zorder properties are removed.

##### dispatchEvent(event)

Dispatch a custom event.

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