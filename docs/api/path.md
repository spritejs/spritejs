# class: Path + extends BaseSprite

---

+ attribute path:Object

Get or set the svg-path of the element. See [property path](#public-path-object-)

---

+ property path:Object

Shorthand of `path.attr({path})`

`path` attribute has some properties.

* path properties

| Name | Type | Description |
| --- | --- | --- |
| d | String | The svg-path `d` attribute |
| transform | Object | The path transform. |
| trim | Boolean | It `trim` is `true` Remove the blank space of the path. |

---

+ attribute d:String

The shorthand of `path.attr('path', {d: '...'})`

---

+ attribute lineWidth:Integer

Get or set `context.strokeWidth`

* default: 1

---

+ attribute lineCap:String

Get or set `context.lineCap`

* default: 'butt'

---

+ attribute lineJoin:String

Get or set `context.lineJoin`

* default: 'miter'

---

+ attribute strokeColor:String


---

+ attribute fillColor:String


---

+ function getPointAtLength(length:Integer):Array The point at the svg path.



---

+ function getPathLength():Integer Total length of the svg path.


---

+ function findPath(offserX:Integer, offsetY:Integer):Array If found, returns an array that contains the path. Otherwise, returns an empty array.


---

+ get pathOffset:Array


---

+ get pathSize:Array


---

+ function pointCollision(event:Object)

Detect whether mouse or touch point is in sprite element's bounding box.

event.targetTextures property holds all the textures which mouse or touch pointer is in their bouding boxes.

---

+ get contentSize():Array

Get the content size of the element. The content size is the size of element content, excluding padding and border.

---

- function render(t:TimeOfTimeline, drawingContext:CanvasRenderingContext2D):CanvasRenderingContext2D

Called by `sprite.draw`, draw the element to canvas.

---
