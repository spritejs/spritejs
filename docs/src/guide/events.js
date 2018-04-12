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
