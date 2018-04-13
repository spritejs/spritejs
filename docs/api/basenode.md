# class: BaseSprite extends BaseNode

+ function constructor()

Create a basenode. A basenode is a element of spritejs.

--- 

+ function on(type:String, handler:Function)

Add an event listener of the specified type.

Scene can delegate the DOM events such as 'mousemove', 'mousedown', 'mouseup', 'mouseenter', 'mouseleave', 'touchstart', 'touchend', 'touchmove' and 'click'.

Spritejs has its own events like 'beforedraw', 'afterdraw', 'update' ect.

---

+ function off(type:String optional, handler:Function optional)

Remove event listener from node.

* type - Specify which type of events to be removed, if undefined, remove all events.

* handler - Specify which handler to be removed, if undefined, remove all handlers.

---

+ function addEventListener(type:String, handler:Function)

See [on(type, handler)](#public-ontype-handler-basenode).

---

+ function removeEventListener(type:String, handler:Function)

See [off(type, handler)](#public-offtype-handler-basenode).

---

+ function pointCollision()

Abstract method. Detect whether elements bounding box intersects. Implements by subclasses.

---

+ function dispatchEvent(type:String, event:Object, collisonState:Boolean):Boolean is mouseover.

Dispatching events to the node.

* type - The event type specified.

* event - The event arguments.

* collisonState - Whether **NOT** checking mouse or touch positions, default is `false`. If set to be `true`, always trigger events regardless of whether the coordinates are inside the bounding box of the elements.

---

- function connect(parent:BaseNode, zOrder:Integer = 0):BaseNode the node.

Called when the node is append to the parent node. 

---

- function disconnect(parent:BaseNode):BaseNode the node.

Called when the node is removed from the parent node.

---
