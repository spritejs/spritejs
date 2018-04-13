# class: Group + extends BaseSprite


+ attribute clip:Object

Similar to Path\#path. This attribute defines an svg path. Not to draw, but to clip.

---

+ function appendChild(sprite:BaseSprite, sort:Boolean = true)

Add child to group element, sorted by `zIndex`.

---

+ function append(...sprites)


---

+ function removeChild(sprite:BaseSprite)


---

+ function remove(...sprites)


---

+ function cloneNode(deepCopy:Boolean = false):Group


---

+ get children:Array


---

+ function findPath(offserX:Integer, offsetY:Integer):Array If found, returns an array that contains the path. Otherwise, returns an empty array.


---

+ get pathOffset:Array


---

+ get pathSize:Array


---

+ function pointCollision(event:Object)

Detect whether mouse or touch point is in sprite element's bounding box.

If the group element has clip attribute, `event.inInClip` property shows whether the point is in the clip path.

---

+ get contentSize():Array

Get the content size of the element. The content size is the size of element content, excluding padding and border.

---

- function render(t:TimeOfTimeline, drawingContext:CanvasRenderingContext2D):CanvasRenderingContext2D

Called by `sprite.draw`, draw the element to canvas.

---

+ function dispatchEvent(type:String, event:Object, collisionState:Boolean, swallow:Boolean):Boolean is mouseover.

Dispatching events to the group and childNodes.

* type - The event type specified.

* event - The event arguments.

* collisionState - Whether **NOT** checking mouse or touch positions, default is `false`. If set to be `true`, always trigger events regardless of whether the coordinates are inside the bounding box of the elements.

* swallow - Whether **NOT** passing events to next element, default is `false`. If set to be `true`, event will not be passing to next element.

---
