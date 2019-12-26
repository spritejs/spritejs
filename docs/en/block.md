## Block

Block elements are those elements that have an outer box and a content box.

The block element of SpriteJS<sup>Next</sup> inherits the base class `Block`. There are three main types: Sprite, Label and Group.

## anchor

Like the previous version of SpriteJS, block elements can be set with different `anchor` attributes to represent reference points. The change of `anchor` attribute will affect the location of block elements and the default `transformOrigin`.

```js
const {Scene, Sprite, Gradient, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 600,
  height: 360,
});
const layer = scene.layer();

const gradient = new Gradient({
  vector: [0, 0, 150, 150],
  colors: [
    {offset: 0, color: 'red'},
    {offset: 1, color: 'green'},
  ],
});

const box = new Sprite({
  anchor: [0.5, 0.5],
  size: [150, 150],
  pos: [300, 180],
  bgcolor: gradient,
});
layer.append(box);

const cross = new Path('M-5 0L5 0M0 5L0 -5');
cross.attr({
  pos: [300, 180],
  lineWidth: 2,
  strokeColor: 'blue',
});
layer.append(cross);

box.animate([
  {rotate: 0},
  {rotate: 360},
], {
  iterations: Infinity,
  duration: 3000,
});
```

<iframe src="/demo/#/doc/anchor" height="500"></iframe>

## border

Similar to HTML elements, block elements can set borders. Related attributes as follows:

- borderWidth
- borderColor
- borderDash 
- borderDashOffset
- borderRadius

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 600,
  height: 360,
});
const layer = scene.layer();

const box = new Sprite({
  anchor: [0.5, 0.5],
  size: [150, 150],
  pos: [300, 180],
  bgcolor: 'white',
  borderWidth: 1,
  borderRadius: 20,
});
layer.append(box);
```

<iframe src="/demo/#/doc/border" height="500"></iframe>

## padding

Similar to HTML elements, block elements can set paddings. Related attributes as follows:

- paddingTop
- paddingRight
- paddingBottom
- paddingLeft

```js
const {Scene, Label} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 600,
  height: 360,
  // contextType: '2d',
});
const layer = scene.layer();

const box = new Label({
  text: 'SpriteJS',
  fontSize: '2rem',
  anchor: [0.5, 0.5],
  pos: [300, 180],
  bgcolor: 'white',
  borderWidth: 1,
  padding: 25,
});
layer.append(box);
```

<iframe src="/demo/#/doc/padding" height="500"></iframe>

## boxSizing

Similar to HTML elements, block elements can set the calculation method of element width and height by modifying the `boxSizing` attribute.

![](https://p3.ssl.qhimg.com/t01e3c080702b26edd8.jpg)

As shown in the figure, a block element has four `size`, as follows:

- contentSize The `width` and `height` of the content.
- clientSize contentSize + padding
- borderSize contentSize + padding + borderWidth
- offsetSize contentSize + padding + 2 * borderWidth

When the `boxSizing` value is `content-size` (the default), the `width` and `height` attributes of the element are:

```
el.attribute.width = contentSize[0];
el.attribute.height = contentSize[1];
```

When the `boxSizing` value is `border-size`, the `width` and `height` attributes of the element are:

```
el.attribute.width = offsetSize[0];
el.attribute.width = offsetSize[1];
```

## Sprite

Sprite element is the most commonly used block element. It can set the `texture` attribute. Unlike the previous version, the new SpriteJS<sup>Next</sup> can only set one `texture` per element.

You can also set `sourceRect` to trim the picture, or `textureRect` to display the picture in the specified location of the sprite.

If you want to display the image repeatedly, you can set the sprite's `textureRepeat` attribute to `true`.

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const imgUrl = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png';
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const s1 = new Sprite({
  anchor: [0, 0.5],
  pos: [20, 300],
  bgcolor: 'white',
  borderWidth: 1,
  borderRadius: 20,
  texture: imgUrl,
});
layer.append(s1);

const srcParts = [
  [0, 0, 190, 268],
  [0, 269, 190, 268],
  [191, 0, 190, 268],
  [191, 269, 190, 268],
];
for(let i = 0; i < 2; i++) {
  for(let j = 0; j < 2; j++) {
    const sourceRect = srcParts[i * 2 + j];
    const x = 360 + i * 200;
    const y = j * 278;
    const s = new Sprite({
      x,
      y,
      texture: imgUrl,
      sourceRect,
    });
    layer.append(s);
  }
}

const s2 = new Sprite({
  anchor: [0, 0.5],
  pos: [720, 300],
  bgcolor: 'white',
  borderWidth: 1,
  borderRadius: 20,
  texture: imgUrl,
  textureRect: [0, 0, 190, 268],
  textureRepeat: true,
});

layer.append(s2);
```

<iframe src="/demo/#/doc/sprite" height="450"></iframe>

## Label

For performance reasons, the Label element of SpriteJS<sup>Next</sup> only supports single line text and does not support automatic typesettings.

```js
const {Scene, Label} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

const text1 = new Label('SpriteJS.org');
text1.attr({
  pos: [100, 40],
  fillColor: '#707',
  font: 'oblique small-caps bold 56px Arial',
  border: [2.5, '#ccc'],
});
layer.append(text1);

const text2 = new Label('从前有座灵剑山');
text2.attr({
  pos: [500, 20],
  fillColor: '#077',
  font: '64px "宋体"',
  lineHeight: 112,
  textAlign: 'center',
  padding: [0, 30],
  border: [2.5, '#ccc'],
});
layer.append(text2);

const text3 = new Label('Hello');
text3.attr({
  pos: [100, 240],
  strokeColor: 'red',
  font: 'bold oblique 70px Microsoft Yahei',
  strokeWidth: 1,
  textAlign: 'center',
  padding: [0, 30],
  border: [2.5, '#ccc'],
});
layer.append(text3);

function createClockTexts(text, x, y) {
  const len = text.length;

  for(let i = 0; i < len; i++) {
    const char = text.charAt(i);
    const label = new Label(char);
    label.attr({
      anchor: [0.5, 4.5],
      pos: [x, y],
      font: 'bold 44px Arial',
      fillColor: '#37c',
      rotate: i * 360 / len,
    });

    layer.append(label);
  }
}
createClockTexts('Sprite.js JavaScript Canvas...', 700, 360);
```

<iframe src="/demo/#/doc/label" height="450"></iframe>

## Group

The Group element is simpler than the previous version, and its performance is much better. However, there is no function of clip and clipping area.

```js
const {Scene, Group, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();
const arcD = 'M0 0L 50 0A50 50 0 0 1 43.3 25z';

const group = new Group();
group.attr({
  size: [300, 300],
  pos: [600, 300],
  anchor: [0.5, 0.5],
  bgcolor: '#cec',
  borderRadius: 150,
});
layer.append(group);

for(let i = 0; i < 6; i++) {
  const arc = new Path();
  arc.attr({
    d: arcD,
    scale: 3,
    anchor: [0, 0.5],
    strokeColor: 'red',
    fillColor: `rgb(${i * 99 % 255}, 0, 0)`,
    rotate: i * 60,
  });
  group.append(arc);
}

group.animate([
  {rotate: 0},
  {rotate: 360},
], {
  duration: 3000,
  iterations: Infinity,
});
```

<iframe src="/demo/#/doc/group" height="450"></iframe>