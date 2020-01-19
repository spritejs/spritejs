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

## Sphere <sub>_extends_</sub> [Mesh3d](zh-cn/api/ext3d/mesh3d)

Sphere element.

### constructor(program, attrs)

Constructor

### Attributes

| Attribute Name | Inherits | Type | Default | Instruction |
| --- | --- | --- | --- | --- |
| radius | | number | 0.5 |  |
| height | | number | 1 |  |
| widthSegments | | number | 32 |  |
| heightSegments | | number | 16 |  |
| phiStart | | number | 0 | |
| phiLength | | number | Math.PI * 2 | |
| thetaStart | | number | 0 | |
| thetaLength | | number | Math.PI | |
| mode | Mesh3d | string | TRIANGLES | Set drawing mode. |
| colors | Mesh3d | Color | #80808080 | Color of each vertex. |
| colorDivisor | Mesh3d | number | 3 | Each color value is assigned to how many vertices. |
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

#### _From Mesh3d_

##### _readonly_ geometry

Gets the geometry object of the element.

##### _readonly_ meshes

A list of mesh objects for the current element and its descendants.

##### _readonly_ model

Get geometry data.

##### _readonly_ program

Get GLProgram。

#### _From Group3d_

##### _readonly_ childNodes

The same as children.

##### _readonly_ children

Child elements.

##### _readonly_ meshes

A list of mesh objects for the current element and its descendants.

#### _From Node3d_

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

##### _override_ onPropertyChange(key, newValue, oldValue)

The action when an element attribute value is changed.

##### _override_ remesh()

Re-created the mesh object of the element.

#### _From Mesh3d_

##### addEventListener(type, listener, options = {})

Register event listeners.

##### cloneNode(deep = false)

Copy a group. If deep parameter is true, the child elements in the group are copied at the same time.

##### removeAllListeners(type)

Remove all event listeners of a type.

##### removeEventListener(type, listener, options)

Remove the event listener.

##### setGeometry(model = this[_model])

Set or update geometry data.

##### setProgram(program)

Set or update GLProgram.

##### updateMesh()

Set or update mesh object.

#### _From Group3d_

##### append(...els)

Add elements to the group.

##### appendChild(el)

Add an element to the group.

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

##### setResolution({width, height})

Set the context resolution of the element.

#### _From Node3d_

##### _override_ connect(parent, zOrder)

When the element is added to the context tree, the function is called and `parent` and `zorder` are assigned to the element.

##### _override_ disconnect()

When the element is removed from the context tree, the function is called and the parent and zorder properties are removed.

##### lookAt([x, y, z])

Turn the element in the direction of the corresponding coordinates.

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

##### animate(frames, timing)

Perform the animations.

##### attr(...args)

Get or set attributes in batch.

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

##### releaseMouseCapture()

Release mouse pointer.

##### remove()

Remove the element from its parent.

##### removeAttribute(key)

Remove the element attribute value and restore it to the default value.

##### transition(sec, easing = 'linear')

Create a transition animation.