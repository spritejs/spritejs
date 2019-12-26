## 事件

Scene 自动代理了 mouse 和 touch 相关事件，因此要监听这些事件非常简单，直接使用 spirte.addEventListener 方法即可。

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

SpriteJS <sup>Next</sup> 采用标准的DOM事件模型，支持事件冒泡、捕获机制。

在同一个Layer的元素，上层可见元素会遮挡下层元素的事件，但是可以设置属性`pointerEvents: none`来阻止上层的遮盖。

与DOM事件一样，我们可以事件冒泡和阻止事件冒泡。

我们稍稍改一下上面的例子：

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
