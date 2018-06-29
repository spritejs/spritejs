# class: BaseSprite + extends BaseNode

. property Attr:SpriteAttr

The Attribute class used by sprites to get and set attributes.

---

+ function constructor(attr:SpriteAttr)

The constructor of BaseSprite.

* attr - The shorthand of `sprite.attr({...})`.

---

+ attribute id:String


---

+ attribute name:String


---

+ attribute anchor:Array

* default: [0, 0]

Set or get the anchor point of the sprite elements.

The anchor point is the geometric center of the sprite element. Layer set node position based on its anchor point and perform transform or animations also based on the archor point.

Typically, the value of the anchor point is from [0, 0] to [1, 1]. If necessary, the value also can be negative or bigger than 1. 

---

+ attribute fliter:Object

* default: ''

The filter of the element.

---

+ attribute shadow:Object

* default: ''

The shadow of the element.

---

+ attribute x:Float

* default: 0

The x coordinate of the element.

---

+ attribute y:Float

* default: 0

The y coordinate of the element.

---

+ attribute pos:Array

* default: [0, 0]

The [x, y] coordinate of the element

---

+ attribute opacity:Float

* default: 1

---

+ attribute width:Float


---

+ attribute heigth:Float


---

+ attribute size:Array

The [width, height] of the element

---

+ attribute bgcolor:String


---

+ attribute rotate:Integer

* default: 0

---

+ attribute scale:Integer|Array

* default: [1, 1]

---

+ attribute translate:Array

* default: [0, 0]

---

+ attribute skew:Array

* default: [0, 0]

---

+ attribute transform:String|Object

* default: 'matrix(1, 0, 0, 1, 0, 0)'

---

+ attribute transformOrigin:Array

* default: [0, 0]

---

+ attribute border:Object|Array

* default: 0, 'rgba(0,0,0,0)'

default:

<code>
{
  width: 0, 
  color: 'rgba(0,0,0,0)', 
  style: 'solid'
}
</code>

style can be 'solid' or 'dashed' or array type like: [10, 5]

if border.style is 'dashed'

<code>
context.setLineDash([border.width \* 3, border.width \* 3])
</code>

if border.style is array type

<code>
context.setLineDash(border.style)
</code>

---

+ attribute borderRadius:Float

* default: 0

---

+ attribute dashOffset:Float

* default: 0

---

+ attribute padding:Integer|Array

* default: [0, 0, 0, 0]

---

+ attribute zIndex:Integer

* default: 0

---

+ attribute offsetPath:String



---

+ attribute offsetRotate:String

* default: 'auto'

---

+ attribute gradients:Object

* default: {}

---

+ attribute offsetDistance:Integer

* default: 0

---

+ get layer:Layer

Get the current layer that the element append to.

---

+ function serialize():Object The serialied element `{id, nodeType, attrs}`.

Parse the element to a JSON-Object.

---

- function merge(attrs:String|Object)

* attrs - JSON object or string of attributes to merge.

---

+ function cloneNode():BaseSprite

Create a new sprite element and copy all attribute to it.

---

+ property id:String

Shorthand of `sprite.attr('id', value)`

---

+ property name:String

Shorthand of `sprite.attr('name', value)`

---

+ function getAttribute(name:String):Any Any attributes.

The same as `sprite.attr(name)`

---

+ function setAttribute(name:String, value:Any)

Set attribute by name. The same as `sprite.attr(name, value)`

---

+ function removeAttribute(name:String)

Remove attribute by name. The same as `sprite.attr(name, null)`

---

+ function attr():Object

**Overload.** Get all attributes.

---

+ function attr(name:String):Any

**Overload.** Get the named attribute. 

---

+ function attr(name:String, value:Any)

**Overload.** Set attribute value by name.

---

+ function attr(props:Object)

**Overload.** Set many attributes.

---

+ function attrs()

The same as `sprite.attr()`

---

- get transform:Matrix

Get transform matrix of the sprite element.

---

+ function animate(frames:Array, timing:Object):Animation

Create an animation for the sprite element and perform.

---

- function connect(parent:BaseNode, zOrder:Integer = 0):BaseNode the node.

Called when the node is append to the parent node. 

---

- function disconnect(parent:BaseNode):BaseNode the node.

Called when the node is removed from the parent node.

---

+ get contentSize:Array

Get the content size of the element. The content size is the size of element content, excluding padding and border.

---

+ get clientSize:Array

The contentSize + padding.

---

+ get offsetSize:Array

The contentSize + padding + borderWidth.

---

+ get innerSize:Array

The same as contentSize.

---

+ get outerSize:Array

The same as offsetSize.

---

- get boundingRect:Array

The element's drawing rect.

---

- get originalRect:Array

The element's boundingRect before transform.

---

+ get originalRenderRect:Array

The element's drawing rect on the layer, before transform.

---

+ get renderRect:Array

The element's drawing rect on the layer.

---

+ get renderBox:Array

The element's drawing box on the layer.

---

+ get vertices:Array

The element's all vertices on the layer.

---

+ property cache:CanvasRenderingContext2D

Cache the element's drawing context.

---

+ function remove()

Remove self from parent.

---

+ function appendTo(parent:BaseNode)

Append the element to parent node.

---

+ function forceUpdate(clearCache:Boolean = false)

* clearCache - If clearCache flag is `true`, cache will be refreshed.

Cause sprite element to send update signal to layer. 

---

+ function pointToOffset(x:Integer, y:Integer)

Convert the layer position to the relative position to the element's anchor point.

---

+ function pointCollision(event:Object)

Detect whether mouse or touch point is in sprite element's bounding box.

---

+ function draw(t:TimeOfTimeLine):CanvasRenderingContext2D

Draw the element to canvas.

---

- function render(t:TimeOfTimeline, drawingContext:CanvasRenderingContext2D):CanvasRenderingContext2D

Called by `sprite.draw`, draw the element to canvas.

---

<!--eof-->