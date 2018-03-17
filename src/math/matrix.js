// from https://github.com/chrisaljoudi/transformatrix.js
/**
  default:
          (1, 0, 0)
          (0, 1, 0)
 */
const Matrix = function (m) {
  m = m || [1, 0, 0, 1, 0, 0]
  this.m = m.slice(0)
}

Matrix.prototype.unit = function () {
  this.m = [1, 0, 0, 1, 0, 0]
  return this
}

Matrix.prototype.multiply = function (m) {
  const m1 = this.m
  let m2

  if(m instanceof Matrix) {
    m2 = m.m
  } else {
    m2 = m
  }

  const m11 = m1[0] * m2[0] + m1[2] * m2[1],
    m12 = m1[1] * m2[0] + m1[3] * m2[1],
    m21 = m1[0] * m2[2] + m1[2] * m2[3],
    m22 = m1[1] * m2[2] + m1[3] * m2[3]

  const dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5]

  m1[0] = m11
  m1[1] = m12
  m1[2] = m21
  m1[3] = m22
  m1[4] = dx
  m1[5] = dy

  return this
}

Matrix.prototype.inverse = function () {
  const inv = new Matrix(this.m),
    invm = inv.m

  const d = 1 / (invm[0] * invm[3] - invm[1] * invm[2]),
    m0 = invm[3] * d,
    m1 = -invm[1] * d,
    m2 = -invm[2] * d,
    m3 = invm[0] * d,
    m4 = d * (invm[2] * invm[5] - invm[3] * invm[4]),
    m5 = d * (invm[1] * invm[4] - invm[0] * invm[5])

  invm[0] = m0
  invm[1] = m1
  invm[2] = m2
  invm[3] = m3
  invm[4] = m4
  invm[5] = m5

  return inv
}

/**
  (1, 0, sx)
  (0, 1, sy)
 * */
Matrix.prototype.translate = function (x, y) {
  return this.multiply([1, 0, 0, 1, x, y])
}

/**
    (cos, -sin, 0)
    (sin, cos, 0)
 */
Matrix.prototype.rotate = function (deg) {
  const rad = deg * Math.PI / 180,
    c = Math.cos(rad),
    s = Math.sin(rad)

  return this.multiply([c, s, -s, c, 0, 0])
}

/**
    (1, tx, 0)
    (ty, 1, 0)
 */
Matrix.prototype.skew = function (degX, degY) {
  degY |= 0
  const radX = degX * Math.PI / 180,
    radY = degY * Math.PI / 180
  const tx = Math.tan(radX),
    ty = Math.tan(radY)

  return this.multiply([1, ty, tx, 1, 0, 0])
}


/**
  (sx, 0, 0)
  (0, sy, 0)
 */
Matrix.prototype.scale = function (sx, sy) {
  return this.multiply([sx, 0, 0, sy, 0, 0])
}

Matrix.prototype.transformPoint = function (px, py) {
  const x = px,
    y = py
  px = x * this.m[0] + y * this.m[2] + this.m[4]
  py = x * this.m[1] + y * this.m[3] + this.m[5]

  return [px, py]
}

Matrix.prototype.transformVector = function (px, py) {
  const x = px,
    y = py
  px = x * this.m[0] + y * this.m[2]
  py = x * this.m[1] + y * this.m[3]

  return [px, py]
}

export default Matrix
