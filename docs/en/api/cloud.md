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
## Cloud <sub>_extends_</sub> [Node](zh-cn/api/node)

Cloud is a special element. It can draw multiple mesh of other elements on the canvas at the same time.

### constructor(node, amount = 1)

Create cloud elements with node elements as a template.

### Properties

##### _readonly_ meshCloud

Get the MeshCloud mesh object.

##### amount

The number of elements drawn.

#### _From Node_

##### _readonly_ ancestors

Get a list of ancestor elements for the current element.

##### _readonly_ animations

Get all animations in the execution of the current element.

##### _readonly_ filters

Get the filters on the current element.

##### _readonly_ isVisible

Whether the element is visible.

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

##### brightness(idx, p)

Set the color brightness of the element drawn the IDX time.

##### contrast(idx, p)

Set the contrast of the elements drawn the IDX time.

##### _override_ draw(meshes = [])

Get a list of element related geometric meshes for rendering.

##### getTransform(idx)

Get the transform matrix of the IDX element.

##### grayscale(idx, p)

Set the grayscale of the element drawn the IDX time.

##### hueRotate(idx, deg)

Set the hue deflection angle of the element drawn IDX times.

##### isPointCollision(x, y)

Determine whether the event coordinates intersect the element.

##### invert(idx, p)

Set the inverse color of the element drawn the IDX time.

##### opacity(idx, p)

Set the transparency of the element drawn the IDX time.

##### rotate(idx, ang, [ox, oy] = [0, 0])

Set the rotation angle of the element drawn IDX times.

##### saturate(idx, p)

Sets the saturation of the element drawn the IDX time.

##### scale(idx, [x, y = x], [ox, oy] = [0, 0])

Sets the scale of the element drawn the IDX time.

##### setColorTransform(idx, m)

Sets the color transformation matrix of the element drawn for the IDX time. The default value is the unit matrix.

##### setFillColor(idx, color)

Sets the fill color of the element drawn the IDX time.

##### sepia（idx, p）

Sets the darkness of the element drawn the IDX time.

##### _override_ setResolution({width, height})

Set the context resolution of the element.

##### setStrokeColor(idx, color)

Sets the stroke color of the element drawn the IDX time.

##### setTransform(idx, m)

Set the position transformation matrix of the element drawn for the IDX time. The default value is the unit matrix.

##### skew(idx, [x, y = x], [ox, oy] = [0, 0])

Sets the degree of twist for the element drawn IDX times.

##### transform(idx, m)

Change the position of the element drawn in IDX.

##### transformColor(idx, m)

Color transform the elements drawn in IDX.

##### translate(idx, [x, y])

Translate the elements drawn the IDX time.

#### FROM _Node_

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

##### onPropertyChange(key, newValue, oldValue)

The action when an element attribute value is changed.

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

##### updateContours()

Update the geometric figure of the drawing.