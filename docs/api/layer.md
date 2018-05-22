# class: Layer + extends BaseNode

+ get id:String

Returns the `data-layerId` attribute of the layer canvas.

---

+ property resolution:Array

Get or set the resolution of the layer. Resolution determines the physical size of the canvas. 

---

+ property viewport:Array

Get or set the viewport of the layer. Viewport determines the output size of the canvas.

---

+ property zIndex:Integer


---

+ get children:Array


---

+ function isVisible(sprite:BaseSprite):Boolean


---

+ async takeSnapshot():Object

Capture a snapshot from layer canvas.

---

+ function putSnapshot(snapshot:Object):Object

Apply a snapshot to current layer.

---

+ function insertBefore(newChild:BaseNode, refChild:BaseNode):BaseNode new child


---

+ get timeline:Timeline

Get timeline of the layer.

---

+ get context:CanvasRenderingContext2D

Get current drawingContext of layer.

---

+ get canvas:Canvas

Get current outputContext's canvs of layer.

---

+ async prepareRender():Promise

Once the sprites' attribute has been changed, the layer prepare to repaint in the next drawing frame.

---

+ function draw(t:TimeOfTimeLine)

Start drawing immediately.

---

- function update(target:BaseSprite)


---

+ get fps:Float


---

- function sortChildren(children: Array)


---

- function drawSprites(sprites:Array, drawingContext:CanvasRenderingContext2D)


---

- function renderRepaintAll(t: TimeOfTimeline)


---

- function renderRepaintDirty(t: TimeOfTimeline)


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

+ function pointCollision(event:Object)

Detect whether mouse or touch point is in sprite element's bounding box.

---

+ function dispatchEvent(type:String, event:Object, collisionState:Boolean, swallow:Boolean):Boolean is mouseover.

Dispatching events to the group and childNodes.

* type - The event type specified.

* event - The event arguments.

* collisionState - Whether **NOT** checking mouse or touch positions, default is `false`. If set to be `true`, always trigger events regardless of whether the coordinates are inside the bounding box of the elements.

* swallow - Whether **NOT** passing events to next element, default is `false`. If set to be `true`, event will not be passing to next element.

---

- function connect(parent:Scene, zOrder:Integer = 0):Layer

Called when the layer is append to the scene. 

---

- function disconnect(parent:Scene):Layer

Called when the layer is removed from the scene.

---

+ function group(...sprites):Group create a group and append children.


---

+ function adjust(handler, update)


---

- function clearUpdate()


---
