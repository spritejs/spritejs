class Vector2D extends Array {
  constructor(x = 1, y = 0) {
    super(x, y);
  }

  set x(v) {
    this[0] = v;
  }

  set y(v) {
    this[1] = v;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get length() {
    return Math.hypot(this.x, this.y);
  }

  get dir() {
    return Math.PI + Math.atan2(this.y, this.x);
  }

  copy() {
    return new Vector2D(this.x, this.y);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  scale(a) {
    this.x *= a;
    this.y *= a;
    return this;
  }

  cross(v) {
    return this.x * v.y - v.x * this.y;
  }

  dot(v) {
    return this.x * v.x + v.y * this.y;
  }

  normalize() {
    return this.scale(1 / this.length);
  }

  rotate(rad) {
    const c = Math.cos(rad),
      s = Math.sin(rad);
    const [x, y] = this;

    this.x = x * c + y * -s;
    this.y = x * s + y * c;

    return this;
  }
}

const container = document.getElementById('stage');
const scene = new spritejs.Scene({
  container,
  width: 1200,
  height: 1200,
});

const points = [new Vector2D(0, 200)];
for(let i = 1; i <= 4; i++) {
  const p = points[0].copy().rotate(i * Math.PI * 0.4);
  points.push(p);
}

const layer = scene.layer();
layer.canvas.style.background = '#fff';

const polyline = new spritejs.Polyline({
  points: [
    points[0],
    points[2],
    points[4],
    points[1],
    points[3],
  ],
  fillColor: 'red',
  fillRule: 'evenodd',
  x: 600,
  y: 600,
});
layer.append(polyline);