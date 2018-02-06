class Vector {
  constructor(p1, p2 = [0, 0, 0]) {
    let [x1, y1, z1] = p1,
      [x2, y2, z2] = p2

    z1 = z1 || 0
    z2 = z2 || 0

    this.x = x1 - x2
    this.y = y1 - y2
    this.z = z1 - z2
  }

  get length() {
    const {x, y, z} = this
    return Math.sqrt(x * x + y * y + z * z)
  }

  unit() {
    const length = this.length
    return new Vector([this.x / length, this.y / length, this.z / length])
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z
  }

  cross(v) {
    const x1 = this.x,
      y1 = this.y,
      z1 = this.z,
      x2 = v.x,
      y2 = v.y,
      z2 = v.z

    return new Vector([y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - x2 * y1])
  }
}

export default Vector
