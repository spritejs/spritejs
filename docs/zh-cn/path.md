## 路径元素

SpriteJS <sup>Next</sup> 的路径元素不同于块元素，块元素更类似于HTML的inline-block元素，而路径元素则更类似于SVG。

路径元素包括以下元素：

- Arc 圆弧与扇形
- Ellipse 椭圆弧与椭圆扇形
- Parallel 平行四边形
- Path SVG路径
- Polyline 折线与多边形
- Rect 矩形
- Regular 正多边形
- Ring 圆环
- Star 多角星

## 路径 path

与块元素不同，路径元素没有`anchor、border、padding、boxSizing`等属性。

Path是最基础的路径元素，它可以通过设置`d`属性来绘制SVG Path。

Path的`normalize`属性如果设置为true，那么Path图形的中心将作为元素的锚点绘制，否则，根据Path的实际进行坐标绘制。

```js
const {Scene, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();
const p1 = new Path();
p1.attr({
  d: 'M0,0A200,200,0,1,1,400,0A200,200,0,1,1,0,0Z',
  scale: 0.5,
  strokeColor: '#033',
  fillColor: '#839',
  lineWidth: 12,
  pos: [100, 150],
});

layer.appendChild(p1);

const p2 = new Path();
p2.attr({
  d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
  normalize: true,
  rotate: 45,
  fillColor: '#ed8',
  pos: [500, 300],
});
layer.appendChild(p2);

const p3 = new Path();
p3.attr({
  d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
  normalize: true,
  strokeColor: '#f37',
  lineWidth: 20,
  pos: [950, 300],
});
layer.appendChild(p3);
```

<iframe src="/demo/#/doc/path" height="450"></iframe>

对于Path也可以设置texture，这样就可以实现类似于旧版Group的clipPath效果。

需要注意的是，对于Path元素，textureRect的起始点（0，0）默认位于Path的originalContentRect（即矢量图形的外框）左上角。

如果不设置textureRect，默认的textureRect是Path的originalContentRect，图片会自动拉伸。

```js
const {Scene, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();
const imgUrl = 'https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg';

const path = new Path({
  d: 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',
  normalize: true,
  scale: 15,
  pos: [600, 300],
  fillColor: 'red',
  texture: imgUrl,
  textureRect: [0, 0, 48, 30],
  rotate: 15,
});

layer.append(path);
```

<iframe src="/demo/#/doc/path_texture" height="450"></iframe>

## 矩形

矩形可以用Path绘制，也可以直接用块元素，而更简单的是用Rect元素。

Rect继承Path，无需设置`d`属性，而是可以直接设置`width、height`属性（或`size`属性）。

```js
const {Scene, Rect} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const rect = new Rect({
  normalize: true,
  pos: [600, 300],
  size: [300, 300],
  fillColor: 'red',
});
layer.append(rect);
```

<iframe src="/demo/#/doc/rect" height="450"></iframe>

## 三角形和平行四边形

Triangle和Parallel继承Path，只需要设置`sides`和`angle`属性。

```js
const {Scene, Triangle, Parallel} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const traingle = new Triangle({
  pos: [150, 150],
  sides: [300, 300],
  angle: 60,
  fillColor: '#7cc',
});
layer.append(traingle);

const parallel = new Parallel({
  normalize: true,
  pos: [750, 300],
  sides: [200, 200],
  angle: 60,
  rotate: 60,
  fillColor: '#c7c',
});
layer.append(parallel);
```

<iframe src="/demo/#/doc/triangle_parallel" height="450"></iframe>

## 折线和多边形

利用Polyline元素可以绘制折线和多边形。

属性`points`表示要绘制的多边形顶点坐标，属性`close`表示图形是否闭合（闭合为多边形），属性`smooth`表示是否将曲线平滑。

```js
const {Scene, Polyline} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

const line = new Polyline({
  pos: [250, 50],
  points: [0, 0, 100, 100, 200, 0, 300, 100, 400, 0, 500, 100, 600, 0],
  strokeColor: 'blue',
  lineWidth: 3,
});
layer.append(line);

const line2 = line.cloneNode();
line2.attr({
  smooth: true,
  strokeColor: 'red',
});
layer.append(line2);

const polygon = new Polyline({
  pos: [250, 350],
  points: [0, 0, 100, 100, 200, 0, 300, 100, 400, 0, 500, 100, 600, 0],
  fillColor: '#37c',
  lineWidth: 3,
  close: true,
  smooth: true,
});
layer.append(polygon);
```

<iframe src="/demo/#/doc/polyline" height="450"></iframe>

## 正多边形和星形

Regular类和Star类可分别绘制正多边形和多角星。

对于多边形，属性：

- edges 表示边数
- radius 表示半径
- offsetAngle 表示旋转角度

对于多角星，属性：

- angles 表示角数
- innerRadius 表示内半径
- outerRadius 表示外半径
- offsetAngle 表示旋转角度

```js
const {Scene, Regular, Star} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const shape = new Regular({
  pos: [300, 300],
  edges: 7,
  radius: 100,
  fillColor: 'blue',
});
layer.append(shape);

const star = new Star({
  pos: [700, 300],
  angles: 5,
  innerRadius: 50,
  outerRadius: 100,
  fillColor: 'red',
});
layer.append(star);
```

<iframe src="/demo/#/doc/regular_star" height="450"></iframe>

## 圆弧和椭圆弧

Arc类和Ellipse类可以绘制圆和椭圆弧。

对于圆弧，属性：

- radius 半径
- startAngle 起始角
- endAngle 结束角
- direction 方向，'clockwise' 默认值，表示顺时针，'anticlockwise' 逆时针
- closeType 闭合方式，'none' 默认值，表示stroke不闭合，'normal' stroke延直线闭合，'sector' stroke延扇形闭合

对于椭圆弧，属性：

- radiusX x轴半径
- radiusY y轴半径
- startAngle 起始角
- endAngle 结束角
- direction 方向，'clockwise' 默认值，表示顺时针，'anticlockwise' 逆时针
- closeType 闭合方式，'none' 默认值，表示stroke不闭合，'normal' stroke延直线闭合，'sector' stroke延扇形闭合

```js
const {Scene, Arc, Ellipse} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const fan = new Arc({
  pos: [300, 300],
  radius: 100,
  startAngle: 0,
  endAngle: 120,
  fillColor: 'blue',
});
layer.append(fan);

const fan2 = fan.cloneNode();
fan2.attr({
  pos: [300, 150],
  closeType: 'sector',
});

layer.append(fan2);

const ellipse = new Ellipse({
  pos: [700, 300],
  radiusX: 150,
  radiusY: 100,
  startAngle: 0,
  endAngle: 240,
  lineWidth: 6,
  strokeColor: 'red',
  fillColor: 'green',
  closeType: 'sector',
});
layer.append(ellipse);
```

<iframe src="/demo/#/doc/arc_ellipse" height="450"></iframe>

## 圆环

Ring类绘制圆环，属性：

- innerRadius 内圆半径
- outerRadius 外圆半径
- startAngle 起始角
- endAngle 结束角

```js
const {Scene, Ring} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const ring = new Ring({
  pos: [300, 300],
  innerRadius: 50,
  outerRadius: 100,
  fillColor: 'blue',
});
layer.append(ring);

const ring2 = ring.cloneNode();
ring2.attr({
  pos: [700, 300],
  startAngle: 0,
  endAngle: 180,
  fillColor: 'red',
});
layer.append(ring2);
```

<iframe src="/demo/#/doc/ring" height="450"></iframe>