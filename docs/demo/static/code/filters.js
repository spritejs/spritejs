(async function () {
  const paper = new spritejs.Scene('#paper', {
      resolution: [1600, 1200],
      stickMode: 'width',
      stickExtend: true,
    }),
    Sprite = spritejs.Sprite

  const layer = paper.layer()
  layer.canvas.style.backgroundColor = '#60b4f9'

  await paper.preload([
    'https://p3.ssl.qhimg.com/t010ded517024020e10.png',
    'https://s1.ssl.qhres.com/static/6ead70a354da7aa4.json',
  ])

  const guanguan = new Sprite()
  guanguan.attr({
    textures: [{
      src: 'guanguan1s.png',
      filter: {
        dropShadow: [2, 2, 10, 'black'],
      },
    }],
    anchor: 0.5,
    pos: [800, 600],
  })
  layer.append(guanguan)

  const guanguan2 = guanguan.cloneNode()
  guanguan2.attr({
    textures: [{
      src: 'guanguan2s.png',
      filter: {
        opacity: 0.5,
      },
    }],
    pos: [400, 600],
  })
  layer.append(guanguan2)

  const guanguan3 = guanguan.cloneNode()
  guanguan3.attr({
    textures: [{
      src: 'guanguan2s.png',
      filter: {
        blur: '4px',
      },
    }],
    pos: [1200, 600],
  })
  layer.append(guanguan3)
}())
