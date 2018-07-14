<style>
#page-scene #adaptive {
  width: 350px;
  height: 350px;
}

#page-scene #resize {
  width: 50%;
  padding-bottom: 50%;
}

#page-scene #sticky {
  display: flex;
}

#page-scene #stickMode {
  width: 50%;
  padding-bottom: 50%;
  border: solid 2px #336;
  overflow: hidden;
}

#page-scene #stickMode canvas {
  background: black;
  border: none;
}

#page-scene #control {
  width: 50%;
  text-align: right;
  float: right;
}
</style>

SpriteJS creates a scene, which is used to manage the Layer, dispatch events, and implement screen adaptation.

## Create Scene

SpriteJS create a Scene with a DOM container.

```js
import { Scene } from 'spritejs'

const scene = new Scene('#container')
```

Scene supports some configuration parameters. The supported parameters are as follows:

##### resolution

Specifies the resolution to create the Scene. This parameter can be an array `[width, height]` or a special string `'flex'`.

```js
const scene = new Scene('#container', {
  resolution: [700, 700],
  viewport: [350, 350],
})
```

<div id="adaptive" class="sprite-container"></div>

<!-- demo: adaptive -->

#### flexible resolution

The resolution can be set to `'flex'`, when the viewport changes, the `flex` resolution is automatically set to twice the width of the viewport.

The effect of setting resolution to `flex`, see [this example](http://spritejs.org/demo/#proton_position)

##### stickMode

SpritJS can adapting to different devices and can be set to 12 different stick modes.

| Property Name | Property Type | Value | Description |
| --- | --- | --- | --- |
| stickMode | Enum | `"width"`,`"height"`,`"top"`,`"bottom"`,`"left"`,`"right"` | 6 stick mode to adapt different containers |
| stickExtend | Boolean | `true`,`false` | If `stickExtend` is set to true, the Canvas width and height are expand to fit the width and height of the container. |

<div id="sticky">
  <div id="stickMode"  class="sprite-container"></div>
  <div id="control">
    <div>height: <input id="heightBtn" type="range" value="0"></input></div>
    <div>stickExtend：<input id="extendBtn" type="checkbox"></input></div>
  </div>
</div>

<!-- demo: stickMode -->

#### viewport

Setting the viewport will affect the canvas's style width and height.

Viewport can set to be `auto`, if the viewport is `auto`, SpriteJS will automatelly register a `resize` event to the current window.

<div id="resize" class="sprite-container"></div>

<!-- demo: resize -->

## appendChild()

`appendChild(layer)` Add a layer to the scene.

## appendLayer()

`appendLayer(layer)` The same as appendChild.

## delegateEvent()


`delegateEvent(event, receiver = this.container)` Delegate a DOM event to the corresponding element.

## dispatchEvent()

`dispatchEvent(type, event)` Dispatch custom events. The event will be dispatched to the scene itself immediately, and the browser will create a CustomEvent object and dispatch it to the Container. 

## hasLayer()

`hasLayer(layer)` Determine if the layer is on the current scene.

## insertBefore()

`insertBefore(newLayer, refLayer)` Insert a Layer before the specified Layer.

## layer()

`layer(id = default, options = {})` Create a layer with the corresponding id. See [Layer](/en/doc/layer) for details.

## layers()

Get all the layers on the scene.

## preload()

`await scene.preload(...resources)` preloads resources. This is an asynchronous method that can accept urls or frame array or resource objects, and the browser will preload the resource of sprites.

## removerChild()

`removeChild(layer)` Remove a Layer from the Scene.

## removeLayer()

`removeLayer(layer)` The same as removeChild.

## resolution

Get or set resolution.

## snapshot()

`await scene.snapshot()` Asynchronous method, returns a canvas object for the current scene screenshot.

```js
const canvas = await scene.snapshot()
fs.writeFileSync('snap.png', canvas.toBuffer())
```

## viewport

Get or set viewport.

<script src="/js/guide/resolution.js"></script>
