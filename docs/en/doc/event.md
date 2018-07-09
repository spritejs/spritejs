SpriteJS supports dispatching events to receiver, supporting DOM events, built-in events, and custom events.

## DOM Events

SpriteJS delegate the mouse and touch events on the container by default, so we can register these events' handler to the sprite element.

SpriteJS supports the following events by default:

| Event type | Browser Event | Description | 
| --- | --- | --- |
| click | Yes | Mouse clicked or touched |
| mousedown | Yes | Mouse pressed down on the sprite |
| mousemove | Yes | Mouse moved above the sprite |
| mouseup | Yes | Mouse pressed up on the sprite |
| mouseenter | No | Mouse move into the sprite box |
| mouseleave | No | Mouse move out of the sprite box |
| touchstart | Yes | Touch on the sprite |
| touchmove | Yes | Touch on the sprite and move |
| touchend | Yes | Touch end on the sprite |

We can register events' handlers directly with the sprite by using `sprite.on(type, handler)`.

The first parameter of the on method can also be an array, which can register multiple event types for the sprite at the same time.

In details see [example 1](http://spritejs.org/demo/#buttons) and [example 2](http://spritejs.org/demo/#events).

## stopDispatch

Just as DOM has a bubbling mechanism and a way to prevent bubbling, SpriteJS events are dispatched according to the sprite's cascading position. We can call `event.stopDispatch()`
Prevent events from being dispatched to subsequent elements of the peer.

<p data-height="394" data-theme-id="light" data-slug-hash="rKoeXj" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/rKoeXj/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

In the above example, we blocked the response of the lower element of the mouse event via stopDispatch(). Note that stopDispatch() can only block events of the elements of the same level, so blocking the mousemove event of the sprite does not prevent the mouseemove event of its parent layer.

## Build-in Events

The SpriteJS element has some built-in events, as the following:

| Event Type | Event Arguments | Description |
| --- | --- | --- |
| append | {parent, zOrder} | Triggered when an element is append to a layer |
| remove | {parent, zOrder} | Triggered when an element is removed from the layer |
| update | {context, target, renderTime, fromCache} | Triggered when an element is redrawn. |
| beforedraw | {context, target, renderTime, fromCache} | Triggered when an element is before draw. Target is the element to be drawn, renderTime is the time of the current layer's timeline, and if fromCache is true, indicating that the element cache is still valid. |
| afterdraw | {context, target, renderTime, fromCache} | Triggered when an element is after draw. |
| preload | {target, loaded, resources} | This event is only triggered when the scene preloads the resource, the target is the current scene, the loaded is the loaded resource, and the resources are all the resources that need to be loaded. |

## user delegate

SpriteJS can delegate other browser events via `scene.delegateEvent(type, subject)`. For example, we can proxy the document's keyboard events:

```js
scene.delegateEvent('keydown', document)
scene.delegateEvent('keyup', document)
```

See [example](http://spritejs.org/demo/#events).

## Custom Events

We can dispatch events to the sprite element by calling the sprite element's `dispatchEvent(type, eventArgs, collisionState = false, swallow = false)` method, which has four parameters.

- type - The type of event to be dispatched.
- eventArgs - The arguments of event to be dispatched.
- collisionState - The default value is false, spritejs will check eventArgs.layerX and eventArgs.layerY to determine if the event is within the scope of the element. If set to true, the checker is skipped and the event is always considered to be in scope.
- swallow - If the event receiver is a Layer or a Group, set `swallow` to be true will prevent the event be dispatched to its child elements.

## Remove Events

We can call the `sprite.off(type, handler)` method to remove the event listener. The `type` can be an array to removes multiple events. If the `handler` parameter is undefined, all event listeners of the specified type are removed.
