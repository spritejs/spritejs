## 块元素

块元素是指有外盒（outer box）和内容盒（content box）的元素。

SpriteJS <sup>Next</sup>的块元素继承基类`Block`，主要有`Sprite、Label、Group`三大类。

## 锚点 anchor

与旧版的SpriteJS一样，块元素可以设置不同的`anchor`值，用来表示参考点，`anchor`值的变化会影响块元素的定位和默认的`transformOrigin`。

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

[在线运行](/demo/#/doc/anchor)

<iframe src="/demo/#/doc/anchor" height="500"></iframe>

## 边框 border

与HTML元素类似，块元素可以设置边框，相关属性包括：

- borderWidth 设置边框的宽度
- borderColor 设置边框的颜色
- borderDash  设置虚线框
- borderDashOffset  设置虚线框偏移量
- borderRadius  设置圆角

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

## 内边距 padding

与HTML元素类似，块元素可以设置内边距：

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

## 盒子 boxSizing

与HTML元素类似，块元素可以通过修改`boxSizing`属性来设置元素宽高的计算方式。

![](https://p3.ssl.qhimg.com/t01e3c080702b26edd8.jpg)

如图所示，一个块元素有四个“宽高”，分别是：

- contentSize 内容的宽高
- clientSize 内容的宽高+padding
- borderSize 内容的宽高+padding+border的一半
- offsetSize 内容的宽高+padding+border

当`box-sizing`值为`content-size`（默认值）时，元素的width和height属性分别为：

```
el.attribute.width = contentSize[0];
el.attribute.height = contentSize[1];
```

当`box-sizing`值为`border-size`时，元素的width和height属性分别为：

```
el.attribute.width = offsetSize[0];
el.attribute.width = offsetSize[1];
```

## 精灵 Sprite

Sprite元素是最常用的块元素，它可以设置`texture`属性。与旧版SpriteJS不同，旧版SpriteJS可以设置`textures`属性指定多张图片，新版 SpriteJS <sup>Next</sup> 则只能设置一张图片。

除了设置`texture`外，还可以设置`sourceRect`来剪裁图片，或者设置`textureRect`来将图片显示在精灵的指定位置。

如果要重复显示图片，可以设置精灵的`textureRepeat`属性为true，这个可以用来实现类似HTML中的平铺背景。

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

## 文字 Label

基于性能考虑，SpriteJS <sup>Next</sup> 的 Label 元素比旧版本的SpriteJS的Label元素要弱化了不少。

新版本只支持单行文本，不支持自动排版。

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

## 分组 Group

SpriteJS <sup>Next</sup> 的Group比旧版简单一些，性能好很多，但功能上也不再有的clip和剪裁区域的功能。

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

## SpriteSvg

SpriteSvg 元素继承自 Sprite 元素，可以给定一个 Svg 图片。

SpriteSvg 元素可以和 D3 配合，方便地渲染坐标轴。

```js
/* globals d3 */
const {Scene, SpriteSvg} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 1200,
});

const dataset = [125, 121, 127, 193, 309];

const scale = d3.scaleLinear()
  .domain([100, d3.max(dataset)])
  .range([0, 500]);

const colors = ['#fe645b', '#feb050', '#c2af87', '#81b848', '#55abf8'];

const fglayer = scene.layer('fglayer');
const s = d3.select(fglayer);

document.querySelector('#stage canvas').style.backgroundColor = '#eee';

const chart = s.selectAll('sprite')
  .data(dataset)
  .enter()
  .append('sprite')
  .attr('x', 450)
  .attr('y', (d, i) => {
    return 200 + i * 95;
  })
  .attr('width', 0)
  .attr('height', 80)
  .attr('bgcolor', '#ccc');

chart.transition()
  .duration(2000)
  .attr('width', (d, i) => {
    return scale(d);
  })
  .attr('bgcolor', (d, i) => {
    return colors[i];
  });

const axis = d3.axisBottom(scale).tickValues([100, 200, 300, 400]);
const axisNode = new SpriteSvg({
  x: 420,
  y: 680,
});
d3.select(axisNode.svg)
  .attr('width', 600)
  .attr('height', 60)
  .append('g')
  .attr('transform', 'translate(30, 0)')
  .call(axis);

axisNode.svg.children[0].setAttribute('font-size', 20);
fglayer.append(axisNode);

chart.on('click', (data) => {
  /* eslint-disable no-console */
  console.log(data, d3.event);
  /* eslint-enable no-console */
});
```

<iframe src="/demo/#/d3/bar" height="550"></iframe>

此外，我们可以将SpriteSvg元素的`flexible`属性设为`true`，让SVG自适应元素大小。

```js
const container = document.getElementById('container');
const scene = new spritejs.Scene({
  container,
  displayRatio: 2,
  width: 1200,
  height: 600,
  mode: 'stickyHeight',
});

const svgURL = 'https://s1.ssl.qhres2.com/static/9bd74da7f533f462.svg';


const fglayer = scene.layer('fglayer');
const root = new spritejs.SpriteSvg(svgURL);
root.attr({
  x: 100,
  y: 100,
  flexible: true,
  scale: 0.5,
});

fglayer.append(root);
```