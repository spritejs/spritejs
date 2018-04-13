const {Scene, Sprite} = spritejs

/* demo: point-collision */
;(function () {
  const scene = new Scene('#point-collision', {viewport: ['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer()

  const c1 = new Sprite()
  c1.attr({
    anchor: [0.5, 0.5],
    border: [100, 'red'],
    pos: [770, 300],
    borderRadius: 50,
    opacity: 0.5,
  })
  layer.append(c1)

  const c2 = new Sprite()
  c2.attr({
    anchor: [0.5, 0.5],
    border: [50, 'rgb(192, 128, 0)'],
    size: [100, 100],
    pos: [470, 300],
    borderRadius: 75,
    opacity: 0.5,
  })
  layer.append(c2)

  const c3 = new Sprite()
  c3.attr({
    anchor: [0.5, 0.5],
    border: [20, 'green'],
    pos: [1070, 300],
    size: [160, 160],
    borderRadius: 90,
    opacity: 0.5,
  })
  layer.append(c3)

  function isPointCollision(sprite, x, y) {
    const [borderWidth] = sprite.attr('border'),
      width = sprite.contentSize[0]

    const bounds = sprite.boundingRect,
      [cx, cy] = [bounds[0] + bounds[2] / 2, bounds[1] + bounds[3] / 2]

    const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
    return distance >= width / 2 && distance <= width / 2 + borderWidth
  }

  [c1, c2, c3].forEach((c) => {
    c.on('mousemove', (evt) => {
      const target = evt.target,
        {offsetX, offsetY} = evt

      if(isPointCollision(target, offsetX, offsetY)) {
        target.attr('opacity', 1)
      } else {
        target.attr('opacity', 0.5)
      }
    })
    c.on('mouseleave', (evt) => {
      const target = evt.target
      target.attr('opacity', 0.5)
    })
  })
}())

/* demo: point-collision-override */
;(function () {
  const scene = new Scene('#point-collision-override', {viewport: ['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer()

  function isPointCollision(circle, x, y) {
    const [r1, r2] = circle.attr('r'),
      width = circle.contentSize[0]

    const bounds = circle.boundingRect,
      [cx, cy] = [bounds[0] + bounds[2] / 2, bounds[1] + bounds[3] / 2]

    const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
    return distance >= width / 2 && distance <= width / 2 + r1 - r2
  }

  class Circle extends Sprite {
    pointCollision(evt) {
      if(!super.pointCollision(evt)) {
        return false
      }
      const {offsetX, offsetY} = evt
      return isPointCollision(this, offsetX, offsetY)
    }
  }

  Circle.defineAttributes({
    init(attr) {
      attr.setDefault({
        r: [100, 0],
        color: 'black',
      }, {
        borderRadius: {
          get() {
            const [r1, r2] = this.r
            return (r1 + r2) / 2
          },
        },
        width: {
          get() {
            const r2 = this.r[1]
            return 2 * r2
          },
        },
        height: {
          get() {
            const r2 = this.r[1]
            return 2 * r2
          },
        },
        border: {
          get() {
            const [r1, r2] = this.r
            return [r1 - r2, this.color]
          },
        },
      })
    },
    r(attr, val) { // 定义半径属性 [外环，内环]
      attr.clearCache()
      if(!Array.isArray(val)) {
        val = [val, 0]
      }
      attr.set('r', val)
    },
    color(attr, val) {
      attr.clearCache()
      attr.set('color', val)
    },
  })

  const c1 = new Circle()
  c1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    opacity: 0.5,
    r: 100,
    color: 'red',
  })
  layer.append(c1)

  const c2 = new Circle()
  c2.attr({
    anchor: [0.5, 0.5],
    color: 'rgb(192, 128, 0)',
    r: [100, 50],
    pos: [470, 300],
    opacity: 0.5,
  })
  layer.append(c2)

  const c3 = new Circle()
  c3.attr({
    anchor: [0.5, 0.5],
    color: 'green',
    pos: [1070, 300],
    r: [100, 80],
    opacity: 0.5,
  })
  layer.append(c3)

  ;[c1, c2, c3].forEach((c) => {
    c.on('mouseenter', (evt) => {
      evt.target.attr('opacity', 1)
    })
    c.on('mouseleave', (evt) => {
      evt.target.attr('opacity', 0.5)
    })
  })
}())

