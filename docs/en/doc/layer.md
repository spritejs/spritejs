In SpriteJS, a Layer object corresponds to a Canvas instance.

## Create Layer

In SpriteJS, you can create a Layer object directly through the Layer constructor method. 

```js
const fglayer = new Layer('fglayer', options)
```

A better approach is to create a Layer object using the scene.layer() method.

```js
const fglayer = scene.layer('fglayer', options)
```

Layer has some options options, as follows:

#### autoRender = true

If this parameter is set to `false`, the Layer will no longer automatically render after the element attribute is changed. Sometimes we use SpriteJS in conjunction with other third-party libraries. Since third-party libraries may have their own tickers, we can turn off automatic rendering of SpriteJS and use third-party tickers.

#### context

If this parameter is passed to the Layer, the Layer will use the contxt object as the context of the actual drawing. If not, the Layer will create a new Canvas object inside the container element and get its CanvasRenderingContext2D object as the context.

#### evaluateFPS = false

Whether to calculate the frame rate of the Layer rendering, if true, you can get the current frame rate through layer.fps. Note that because SpriteJS's rendering mechanism is different from other frameworks, it is not a fixed ticker to refresh. When the canvas does not change, SpriteJS will not refresh, which will result in accurate fps.

##### handleEvent = true 

Whether to delegate DOM events, if this parameter is set to `false`, the Layer will not handle DOM events (for better performance).

## center

Readonly, the center point of the layer.

## canvas

Readonly, get the low-level canvas instance of the current object, when use SpriteJS in conjunction with a third-party library, you can pass this canvas object to a third-party library.

## clearContext()

`clearContext(context)` This method defines the default way to clear the canvas canvas. Developers can override this method to customize the refresh mechanism of the canvas.

```js
layer.clearContext = function(context) {
  context.fillStyle = 'black'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
}
```

See [example](http://spritejs.org/demo/#proton_behavior).

## children

Readonly, get all child elements.

## context

Readonly，get the context of the current Layer's canvas object for rendering.

## id

Readonly, get the current layer's id.

## resolution

Get the resolution of the current Layer.

## timeline

Readonly, get the current timeline, layer's timeline is inherited by all animation animations on the layer, changing the timeline can change the animation behavior of the entire layer.

See [example](http://spritejs.org/demo/#animations).

## toGolbalPos()

`toGlobalPos(x, y)` 

## toLocalPos()

`toLocalPos(x, y)` 

## viewport

Readonly, get the current viewport of the Layer.

## zIndex

Get or set the zIndex of the Layer.

