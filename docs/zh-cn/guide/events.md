## Pointer 事件

在[基础用法：事件](/zh-cn/event#事件)里，我们介绍了sprite事件的基本原理和用法。

在 SpriteJS <sup>Next</sup> 里，元素的事件点击区域是由 `isPointCollision(x, y)` 方法决定的，我们可以通过改写它，来改变元素事件可点击区域。

这个方法的改写会影响所有的鼠标和touch事件判定。

## 其他事件

在 SpriteJS <sup>Next</sup> 里，除了Pointer事件，还有一些默认的绘图和其他事件，主要有：

- beforerender 元素开始绘制
- afterrender 元素结束绘制
- preload Scene加载资源

其中preload前面我们已经见过，这里我们看一下 `beforerender/afterrender` 的用法。

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

## 自定义事件

SpriteJS <sup>Next</sup> 的 Scene 默认代理了点击事件（Pointer Events）包括鼠标和触屏事件，要响应其他事件比如键盘事件或者与页面上的其他元素交互，我们可以通过元素的`dispatchEvent`方法将事件派发给对应元素。

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

## 事件穿透

与DOM元素一样，SpriteJS <sup>Next</sup> 的可见元素之间默认会互相遮挡，但是有以下几种情况不会遮挡：

- 事件目标元素的`pointerEvents`属性设置为`none`
- 事件目标元素不可见且`pointerEvents`属性不为`all`
- 事件目标元素是Layer元素

另外如果`pointerEvents`设为`visibleStroke`，那么块元素的`border`或Path元素的`stroke`部分会遮挡事件；如果`pointerEvents`设为`visibleFill`，那么块元素不包含`border`和Path元素`fill`的部分会遮挡事件。

## 不派发事件

与旧版本的SpriteJS一样，可以给Layer设置参数`handleEvent`为`false`，那么Scene将不向该Layer派发事件，这么做能够提升性能纯展示Layer的渲染性能。