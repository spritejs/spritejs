## Path

The path element of SpriteJS<sup>Next</sup> is different from the block element. The block element is more similar to the inline block element of HTML, and the path element is more similar to SVG.

Path elements include the following:

- Arc - Arc and Sector
- Ellipse - Ellipse arc and ellipse sector
- Parallel - Parallelogram
- Path - SVG path
- Polyline - Polyline and polygon
- Rect - Rectangle
- Regular - Regular polygon
- Ring - Ring
- Star - Regular Polygonal Star

Unlike block elements, path elements have no `anchor, border, padding, boxsizing` attributes.

Path is the most basic path element. It can draw a SVG path by setting the `d` attribute.

If the `normalize` attribute of path is set to `true`, the center of the path graph will be drawn as the anchor of the element, otherwise, the coordinate will be drawn according to the actual path.

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

Texture can also be set for Path.

It should be noted that for the Path element, the starting point (0, 0) of texturerect is at the top left corner of the original content Rect (that is, the outer frame of the vector graph) of the Path.

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

## Rectangle

Rect inherits from path, sets `width` and `height` properties to draw a rectangle.

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

## Triangle and Paralle

Triangle and parallel inherit path, only need to set 'sides' and' angle 'properties.

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

## Polyline and Polygon

Polyline elements allow you to draw polylines and polygons.

The attribute `points` indicates the vertex positions of the polygon to be drawn, the attribute `close` indicates whether the graph is closed (closed as a polygon), and the attribute `smooth` indicates whether the curve is smooth.

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

## Regular and Star

Regular and Star can draw regular polygons and polygonal stars.

For regular polygon:

- edges - Indicates the number of sides.
- radius - The radius.
- offsetAngle - The rotated angle.

For polygonal stars:

- angles - Indicates the number of angles.
- innerRadius - The inner radius.
- outerRadius - The outer radius.
- offsetAngle - The rotated angle.

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

## Arc and Ellipse

Arc and Ellipse can draw arc and elliptical arc.

For arc:

- radius - The radius of arc.
- startAngle - The start angle.
- endAngle - The end angle.
- direction - The direction, default is `clockwise`.
- closeType - Closed mode, `none` is the default value, indicating that the arc is not closed, `normal` indicating that the arc is closed by extension line, `sector` indicating that the arc is closed by extension sector.

For elliptical arc:

- radiusX - The radius of x-axis.
- radiusY - The radius of y-axis.
- startAngle - The start angle.
- endAngle - The end angle.
- direction - The direction, default is `clockwise`.
- closeType - Closed mode, `none` is the default value, indicating that the arc is not closed, `normal` indicating that the arc is closed by extension line, `sector` indicating that the arc is closed by extension sector.

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

## Ring

Attributes:

- innerRadius - The inner radius.
- outerRadius - The outer radius.
- startAngle - The start angle.
- endAngle - The end angle.

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