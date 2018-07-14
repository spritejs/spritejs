<style>
#page-basesprite #box-rect,
#page-basesprite #box-setting {
  width: 50%;
}

#page-basesprite #box-setting {
  padding-left: 20px;
}
</style>

BaseSprite is the base class for the all built-in sprite types of SpriteJS. Its methods are inherited by all sprite elements.

## animate()


`animate(keyframes, timing)` Create a Web Animation keyframe animation. See [animation](/en/doc/animation)

## appendTo()

`appendTo(parent)` Add node itself to the parent container.

## attributes

Get or set the attributes of the object, supported from v2.2.0.

## attr()

Get or set the attributes of the object.

This method is similar to jQuery's attr method.

- sprite.attr(propName) Get a single attribute
- sprite.attr() Get all attributes (low performance, use with caution)
- sprite.attr(propName, value) Set a single attribute
- sprite.attr(propName, oldValue => newValue ) Set commputed attribute
- sprite.attr(propName, Promise) Set the asynchronous attribute
- sprite.attr(propName, async (oldValue) => Promise) Asynchronously set computed attribute
- sprite.attr({prop1, prop2, ...}) Set many attributes.

<p data-height="376" data-theme-id="light" data-slug-hash="aKPBzO" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/aKPBzO/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## boundingRect

Dynamically computes the actual bounding rectangle of the element on the Layer, relative to the position of the element. (low performance, use with caution)

<p data-height="393" data-theme-id="light" data-slug-hash="vrvgoB" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/vrvgoB/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## clientSize

Get the element content including the padding's place size. 

![boxmodel](https://p0.ssl.qhimg.com/t0180860d6757b2b1e7.png)

<div id="box-rect-demo">
  <div id="box-rect" class="sprite-container"></div>
  <div id="box-setting">
    <div>
      padding: <input id="paddingCtl" type="range" min="0" max="50" value="20"></input>
      <span id="paddingValue">20</span>
    </div>
    <div>
      border: &nbsp;&nbsp;&nbsp;<input id="borderCtl" type="range" min="0" max="20" value="5"></input>
      <span id="borderValue">5</span>
    </div>
    <div>
      rotate: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="rotateCtl" type="range" min="0" max="180" value="0"></input>
      <span id="rotateValue">0</span>
    </div>
    <div>
      size: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="sizeCtl" type="range" min="100" max="200" value="100"></input>
      <span id="sizeValue">100</span>
    </div>
    <hr/>
    <div>
      contentSize: <span  id="contentSize">100,100</span>
    </div>
    <div>
      clientSize:  <span id="clientSize">140,140</span>
    </div>
    <div>
      offsetSize: <span id="offsetSize">150,150</span>
    </div>
    <div>
      originalRect:  <span id="originalRect">-75,-75,150,150</span>
    </div>
    <div>
      boundingRect: <span  id="boundingRect">-75,-75,150,150</span>
    </div>
    <div>
      originalRenderRect: <span  id="originalRenderRect">310,225,150,150</span>
    </div>
    <div>
      renderRect: <span  id="renderRect">310,225,150,150</span>
    </div>
  </div>
</div>


## cloneNode()

`cloneNode(deepCopy = false)` Clone a sprite object. If the object is a Group and deepCopy is true, it is clone all the child objects as well.

## contentSize

Get the size of the element content.

## draw()

`draw(timelineTime, context)` Layer call this method to draw the sprite element onto the canvas. The method will determine whether to flush the cache according to the cache policy. If the cache is not loaded, the element's `render(timelineTime, context)` method is called to perform render, otherwise the cache image is directly drawn onto the canvas.

## forceUpdate()

`forceUpdate(clearCache = false)` The update strategy of SpriteJS is to update when the element attribute changes. Sometimes we want to force some elements to be updated, then we can call this method to notify the Layer to force the element to be updated.

## id

Get or set the id of the element, the same as `sprite.attr({id})`.

## innerSize

The same as contentSize.

## isVisible

Whether the element is visible, invisible elements are not rendered and will not respond to events.

If the `opacity` attribute is 0 or the `offsetSize` is 0 or the parent element exists and is invisible, then the current element is invisible.

## layer

sprite.layer The layer which the current sprite belongs. If the current sprite is not added to the layer, it's value is undefined.

## name

Get or set the name of the element, the same as `sprite.attr({name})`.

## OBBCollision()

Determine if two elements collide. See [this example] (http://spritejs.org/demo/#obb).

## offsetSize

Get the content of the element including the size of the padding and border.

## originalRect

The element's original bounding rectangle, relative to its own position.

## outerSize

The same as offsetSize.

## pointCollision()

`pointCollision(event)` The event receiving mechanism calls this method to determine whether the coordinates of the event object hit within the scope of the element. 

## pointToOffset()

`pointToOffset(x, y)` This method converts the position coordinates relative to the Layer to the coordinates relative to the element.

## remove()

Remove the sprite itself from the parent.

## render()

`render(timelineTime, context)` Draw the element onto the canvas.

## serialize()

Serialize an element.

## transition()

`transition(second, easing)` Create an element transition. See [transition animation](/en/doc/transition).

## vertices

Dynamically calculate the coordinates of each vertex of the element in the Layer.

## zIndex

Get or set the zIndex of the element, the same as `sprite.attr({zIndex})`.


<script src="/js/guide/boxmodel.js"></script>
