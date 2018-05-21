const paper = new spritejs.Scene('#paper', {
  resolution: [800, 600],
  stickMode: 'width',
})
const Sprite = spritejs.Sprite,
      Path = spritejs.Path

;(async function(){
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json',
        birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'  
  
  const path = new Path(),
        d = 'M10,80 q100,120 120,20 q140,-50 160,0'
  
  path.attr({
    pos: [110, 150],
    color: 'red',
    d,
  })
  paper.layer().append(path)

  await paper.preload(
    [birdsRes, birdsJsonUrl]
  )

  const s = new Sprite({
    attributeChangedCallback(...args) {
      //console.log(args)
    }
  })

  s.attr({
    anchor: [0.5, 0.5],
    pos: [110, 150],
    transform: {
      scale: [0.5, 0.5],
    },
    offsetPath: d,
    zIndex: 200,
  })

  paper.layer().appendChild(s)

  s.textures = ['bird1.png']

  s.animate([
    {offsetDistance: 0},
    {offsetDistance: 1}
  ], {
    duration: 3000,
    direction: 'alternate',
    iterations: Infinity,
  })

  s.animate([
    {scale: [.5, .5], offsetRotate: 'auto'},
    {scale: [.5, -.5], offsetRotate: 'reverse'},
    {scale: [.5, .5], offsetRotate: 'auto'},
  ], {
    duration: 6000,
    iterations: Infinity,
    easing: 'step-end',
  })

  s.animate([
    {textures: 'bird1.png'},
    {textures: 'bird2.png'},
    {textures: 'bird3.png'},
  ], {
    duration: 300,
    direction: 'alternate',
    iterations: Infinity,
  })  
})()

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})
