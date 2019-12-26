## Event

Scene automatically proxies MouseEvent and TouchEvent. Just use the `spirte.addEventListener(type, listener)` method to register events.

```js
const {Scene, Sprite, Label, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const s1 = new Sprite();
s1.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  size: [300, 300],
  rotate: 45,
  bgcolor: '#3c7',
});

layer.append(s1);

s1.addEventListener('mouseenter', (evt) => {
  s1.attr('border', [4, 'blue']);
});
s1.addEventListener('mouseleave', (evt) => {
  s1.attr('border', [0, '']);
});

const anchorCross = new Path('M-10,0H10M0,-10V10');
anchorCross.attr({
  pos: [770, 300],
  strokeColor: 'red',
  rotate: 45,
  lineWidth: 4,
  pointerEvents: 'none',
});

layer.append(anchorCross);

const label = new Label('鼠标位置：');

label.attr({
  pos: [20, 50],
  font: '24px Arial',
  lineHeight: 56,
});

layer.append(label);

s1.addEventListener('mousemove', (evt) => {
  const {x, y} = evt;
  label.text = `鼠标位置：\n相对于锚点: ${s1.getOffsetPosition(x, y).map(Math.round)}`;
});
```

<iframe src="/demo/#/doc/event" height="450"></iframe>

SpriteJS<sup>Next</sup> adopts the standard DOM event model and supports the mechanism of event bubbling and capturing.

In the same layer element, the upper visible element will block the events of the lower layer element, but the attribute `pointerevents: none` can be set to prevent the upper layer from covering.

Like DOM events, we can event bubble and prevent event bubble.

Let's change the above example slightly:

```js
const {Scene, Sprite, Label, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const s1 = new Sprite();
s1.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  size: [300, 300],
  rotate: 45,
  bgcolor: '#3c7',
});

layer.append(s1);

s1.addEventListener('mouseenter', (evt) => {
  s1.attr('border', [4, 'blue']);
});
s1.addEventListener('mouseleave', (evt) => {
  s1.attr('border', [0, '']);
});

const anchorCross = new Path('M-10,0H10M0,-10V10');
anchorCross.attr({
  pos: [770, 300],
  strokeColor: 'red',
  rotate: 45,
  lineWidth: 4,
  pointerEvents: 'none',
});

layer.append(anchorCross);

const label = new Label('鼠标位置：');

label.attr({
  pos: [20, 50],
  font: '24px Arial',
  lineHeight: 56,
});

layer.append(label);

s1.addEventListener('mousemove', (evt) => {
  const {x, y} = evt;
  label.text = `鼠标位置：\n相对于锚点: ${s1.getOffsetPosition(x, y).map(Math.round)}`;
  evt.stopPropagation();
});

layer.addEventListener('mousemove', (evt) => {
  const {x, y} = evt;
  label.text = `鼠标位置：\n相对于 Layer: ${[Math.round(x), Math.round(y)]}`;
});
```

<iframe src="/demo/#/doc/event_bubbling" height="450"></iframe>
