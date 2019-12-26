## Pointer Event

In [basic usage: event](/en/event?id=event), we introduced the basic principle and usage of Sprite event.

In SpriteJS<sup>Next</sup>, the event Click area of an element is determined by the `isPointCollision(x, y)` method. We can change the event Click area of an element by overloading it. The overloading of this method will affect all mouse and touch events.

## Other Events

Besides the pointer event, there are some default drawing and other events, as follows:

- beforerender - The element start rendering
- afterrender - The element finish rendering
- preload - The resources are loading.

We've seen `preload` event before. Let's take a look at the usage of `beforerender/afterrender`.

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const s1 = new Sprite({
  pos: [600, 300],
  size: [200, 200],
  anchor: 0.5,
  bgcolor: 'red',
});
const s2 = new Sprite({
  pos: [600, 300],
  size: [200, 200],
  anchor: 0.5,
  bgcolor: 'blue',
  rotate: 45,
});

s2.addEventListener('beforerender', ({detail}) => {
  const gl = detail.context;
  gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ZERO, gl.ONE);
});

s2.addEventListener('afterrender', ({detail}) => {
  const gl = detail.context;
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
});

layer.append(s1, s2);
```

<iframe src="/demo/#/doc/event_render" height="450"></iframe>

## Custom Event

The scene of SpriteJS<sup>Next</sup> delegated all the point events, including mouse and touch events. In order to respond to other events, such as keyboard events or other user interact events, we can manually dispatch the events to the corresponding elements through the element's `dispatchEvent` method.

```js
const {Scene, Label} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();
const keys = [
  'qwertyuiop',
  'asdfghjkl',
  'zxcvbnm',
];
for(let i = 0; i < 3; i++) {
  const keyButtons = [...keys[i]];
  for(let j = 0; j < keyButtons.length; j++) {
    const key = new Label({
      id: keyButtons[j],
      text: keyButtons[j],
      pos: [250 + j * 80, 200 + i * 100],
      font: '42px Arial',
      borderWidth: 4,
      borderColor: 'black',
      size: [50, 50],
      anchor: [0.5, 0.5],
      textAlign: 'center',
      lineHeight: 50,
    });

    layer.append(key);
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const button = scene.getElementById(key);
  button.attr({
    bgcolor: 'grey',
    fillColor: 'white',
  });
});

document.addEventListener('keyup', (event) => {
  const key = event.key;
  const button = scene.getElementById(key);
  button.attr({
    bgcolor: '',
    fillColor: 'black',
  });
});
```

<iframe src="/demo/#/doc/keyboard" height="450"></iframe>

## Event pierce

As DOM elements, the visible elements of SpriteJS<sup>Next</sup> will block the pointer events of the element under it, but there are several cases that will not block the events:

- The `pointerEvents` attribute of the event target is set to `none`
- The event target is not visible and the `pointerEvents` attribute value is not `all`.
- The event target is a Layer.

## handleEvent option

Like the previous version, you can set the option `handleEvent` to `false` for the layer, so the scene will not dispatch events to the layer, which can improve the performance.