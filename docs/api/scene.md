# class Scene

+ function constructor(container:Object, options:Object = {})


---

+ get width:Integer

Width of the viewport.

---

+ get height:Integer

Height of the viewport.

---

+ function insertBefore(newChild:Layer, refChild:Layer)


---

+ function appendChild(layer:Layer)


---

+ function removeChild(layer:Layer)


---

- get distortion:Integer

Proportion of Y-axis being stretched.

---

+ property viewport:Array

Get or set the viewport of all layers. Viewport determines the output size of each canvases.

---

+ property resolution:Array

Get or set the resolution of all layers. Resolution determines the physical size of each canvases. 

---

+ function toLocalPos(x, y):Array

Position convert from viewport to resolution.

---

+ function toGlobalPos(x, y):Array

Position convert from resolution to viewport.

---

+ function delegateEvent(...eventTypes)

Let dom events dispatching to sprite elements.

---

+ function dispatchEvent(type:String, event:Object)


---

+ async preload(...resources:Object)

Preload images and cahced.

---

+ function layer(id:String = 'default'):Layer


---

+ function appendLayer(layer:Layer, zOrder:Integer = 1)


---

+ function removeLayer(layer:Layer)


---

+ fuction hasLayer(layer:Layer)


---

+ async snapshot()

Take snapshot of all levels.

---
