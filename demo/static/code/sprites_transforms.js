const paper = spritejs.Paper2D('#paper'),
      fglayer = paper.layer('fglayer'),
      Sprite = spritejs.Sprite,
      Label = spritejs.Label  

paper.setResolution(1600, 1200) 

class Button extends Label {
  connect(parent, zOrder) {
    super.connect(parent, zOrder)

    this.on('mouseenter', evt => {
      this.attr({
        scale: 1.1
      })
    })

    this.on('mousedown', evt => {
      this.attr({
        scale: 0.95
      })
    })

    this.on('mouseup', evt => {
      this.attr({
        scale: 1.1
      })
    })

    this.on('mouseleave', evt => {
      this.attr({
        scale: 1.0
      })
    })
  }
}

const [translateBtn, rotateBtn, scaleBtn, skewBtn, stopBtn] 
  = ['translate','rotate','scale','skew', 'stop'].map((type, i) => {

  const button = new Button(type)

  button.attr({
    pos: [1350, 200 + i * 80],
    font: '48px Arial',
    color: '#fff',
  })
  fglayer.appendChild(button) 

  return button 
})

const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

paper.preload([birdsRes, birdsJsonUrl])
.then(() => {
  const bird = new Sprite()
  bird.attr({
    textures: [
      'bird1.png'
    ],
    anchor: [0.5, 0.5],
    pos: [600, 600],
  })

  let i = 0
  setInterval(() => {
    bird.textures = `bird${++i % 2 + 1}.png`
  }, 100)

  fglayer.appendChild(bird)

  let animation = null

  translateBtn.on('click', evt => {
    if(animation) animation.cancel()
    animation = bird.animate([
      {transform:{translate: [0, 0]}},
      {transform:{translate: [0, -100]}},
    ], {
      duration: 1000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
    })
  })

  rotateBtn.on('click', evt => {
    if(animation) animation.cancel()
    animation = bird.animate([
      {transform: {rotate: 0, translate: [0, 150]}},
      {transform: {rotate: 360, translate: [0, 150]}},
    ], {
      duration: 5000,
      iterations: Infinity,
      direction: 'reverse',
    })
  })

  scaleBtn.on('click', evt => {
    if(animation) animation.cancel()
    animation = bird.animate([
      {transform: {scale: [1, 1]}},
      {transform: {scale: [1, 0.5]}},
      {transform: {scale: [1, 1]}},
      {transform: {scale: [0, 1]}},
      {transform: {scale: [-1, 1]}},
      {transform: {scale: [1, 1]}},
    ], {
      duration: 3000,
      iterations: Infinity,
    })
  })

  skewBtn.on('click', evt => {
    if(animation) animation.cancel()
    animation = bird.animate([
      {transform: {skew: [0, 0]}},
      {transform: {skew: [0, 180]}},
      {transform: {skew: [0, 0]}},
      {transform: {skew: [180, 0]}},
      {transform: {skew: [0, 0]}},
    ], {
      duration: 5000,
      iterations: Infinity,
    })
  })

  stopBtn.on('click', evt => {
    if(animation) animation.cancel()
  })
})

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})