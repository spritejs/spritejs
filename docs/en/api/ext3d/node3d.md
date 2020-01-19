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

## Node3d <sub>_extends_</sub> [Node](zh-cn/api/node)

Node3d is the common base class for all SpriteJS <sup>Next</sup> 3D extension elements.

### constructor(attrs)

Constructor

### Attributes

| Attribute Name | Inherits | Type | Default | Instruction |
| --- | --- | --- | --- | --- |
| x | Node3d | number | 0 |  |
| y | Node3d | number | 0 |  |
| z | Node3d | number | 0 |  |
| pos | Node3d | Array | [0, 0, 0] | Short hand of [x, y, z] |
| rotateX | Node3d | number | 0 |  |
| rotateY | Node3d | number | 0 |  |
| rotateZ | Node3d | number | 0 |  |
| rotate | Node3d | Array | [0, 0, 0] | Short hand of [rotateX, rotateY, rotateZ] |
| scaleX | Node3d | number | 1 |  |
| scaleY | Node3d | number | 1 |  |
| scaleZ | Node3d | number | 1 |  |
| scale | Node3d | Array | [1, 1, 1] | Short hand of [scaleX, scaleY, scaleZ] |
| raycast | Node3d | string | undefined | Collision detection mode. `boundings` or `sphere` |
| visibility | Node3d | enum | enum{visible,hidden} |  |
| id | Node | string | '' |  |
| name | Node | string | '' |  |
| className | Node | string | '' |  |
| display | Node | string | '' |  |
| pointerEvents | Node | string | visible |  |

### Properties

##### _readonly_ body

The mesh or transform object of the current element.

##### _readonly_ isVisible

Is visible or not.

##### _readonly_ localMatrix

The transformation matrix of the current element.

##### _readonly_ matrix

The same as localMatrix.

##### _readonly_ mesh

The mesh object of the current element.

##### _readonly_ modelViewMatrix

Transformation matrix after camera conversion.

##### _readonly_ normalMatrix

Normal transformation matrix, a 3 x 3 matrix, is used to calculate the illumination.

##### _readonly_ renderMatrix

The transformation matrix relative to the layer.

##### _readonly_ worldMatrix

The same as renderMatrix.

##### _readonly_ zDepth

The depth of the element relative to the Z axis.

#### _From Node_

##### _readonly_ ancestors

Get a list of ancestor elements for the current element.

##### _readonly_ animations

Get all animations in the execution of the current element.

##### _readonly_ layer

Get the layer object in the current paint context.

##### _readonly_ parent

Get the parent of the current object.

##### _readonly_ renderer

Get the rendered object in the current paint context.

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

##### _override_ connect(parent, zOrder)

When the element is added to the context tree, the function is called and `parent` and `zorder` are assigned to the element.

##### _override_ disconnect()

When the element is removed from the context tree, the function is called and the parent and zorder properties are removed.

##### lookAt([x, y, z])

Turn the element in the direction of the corresponding coordinates.

##### _override_ onPropertyChange(key, newValue, oldValue)

The action when an element attribute value is changed.

##### setBody(body, update = true) 

Set the mesh object of the element.

##### traverse(callback) 

Traverses the current element and all descendant elements.

##### updateMatrix() 

Update matrix.

##### updateMatrixWorld(force = false)

Update worldMatrix.

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

Copy the element.

##### deactivateAnimations()

Stops all animations in progress on the element.

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