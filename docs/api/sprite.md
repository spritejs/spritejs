# class: Sprite + extends BaseSprite

<!--attributes-->

+ attribute textures:String|Object|Array

Set or get the textures of the Sprite. A texture is a local image or an image from URL.

<code>
const sprite = new Sprite()
sprite.attr({
  textures: 'site.url/path/image.png',
})
</code>

see [proprety textures](#public-textures-stringorobjectorarray-).

---
<!--properties-->

. property Attr:TextureAttr

The Attribute class used by sprites to get and set attributes.

---

+ property textures:String|Object|Array

Set or get the textures of the Sprite.

```js
const sprite = new Sprite()
sprite.attr({
  textures: 'site.url/path/image.png',
})
```

`texture` attribute has some properties.

* texture properties

| Name | Type | Description |
| --- | --- | --- |
| id | String | Image can be cached by id, see [scene.preload](/api/scene) |
| src | String | Image URL |
| rect | Array | Drawing region of the sprite elements |
| srcRect | Array | Clip region of the source image |

Example:

```js
const texture = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'
const s = new Sprite()

s.attr({
  textures: [
    {src: texture, rect:[0, 0, 190, 268], srcRect: [0, 0, 190, 268]}, 
    {src: texture, rect:[200, 278, 190, 268], srcRect: [191, 269, 190, 268]},
    {src: texture, rect:[0, 278, 190, 268], srcRect: [0, 269, 190, 268]},
    {src: texture, rect:[200, 0, 190, 268], srcRect: [191, 0, 190, 268]},
  ],
  border: [2, 'grey'],
  pos: [1000, 20],    
})
```

---

+ get contentSize():Array

Get the content size of the element. The content size is the size of element content, excluding padding and border.

---

- property images:Array

Get or set the to elements for drawing. Called by `sprite.attr({texutres})`.

---

+ property cache:CanvasRenderingContext2D

Cache the element's drawing context.

---

<!--methods-->

+ function constructor(attr:String|SpriteAttr)

The constructor of Sprite.

* attr - The shorthand of `sprite.attr({...})`. If the typeof attr is `string`, it is `{textures: attr}`.

---

+ function cloneNode():Sprite

Create a new sprite element and copy all attribute to it.

---

+ function pointCollision(event:Object)

Detect whether mouse or touch point is in sprite element's bounding box.

event.targetTextures property holds all the textures which mouse or touch pointer is in their bouding boxes.

---

- function render(t:TimeOfTimeline, drawingContext:CanvasRenderingContext2D):CanvasRenderingContext2D

Called by `sprite.draw`, draw the element to canvas.

---

<!--eof-->