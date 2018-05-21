(function () {
  const {Scene, Sprite, Label} = spritejs
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]})
  const bglayer = scene.layer('bglayer'),
    fglayer = scene.layer('fglayer')

  const bg = new Sprite()
  bg.attr({
    size: [1200, 1200],
    bgcolor: '#3a2a64',
  })
  bglayer.append(bg)

  const text1 = new Label('Hello World !\nSpriteJS.org')

  text1.attr({
    anchor: [0.5, 0.5],
    pos: [600, 600],
    font: 'bold 48px Arial',
    color: '#29ab64',
  })

  text1.animate([
    {scale: 1.5, rotate: -30},
    {scale: 1, rotate: 0},
    {scale: 1.5, rotate: 30},
  ], {
    duration: 3000,
    iterations: Infinity,
    direction: 'alternate',
  })

  fglayer.append(text1)
}())
