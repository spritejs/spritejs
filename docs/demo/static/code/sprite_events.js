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


const button = new Button('Click Me')

button.attr({
  pos: [1350, 200],
  font: '36px Arial',
  color: '#fff',
  border: [1, '#fff'],
  borderRadius: 20,
  padding: 25,
})
fglayer.appendChild(button) 


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

  button.on('click', evt => {
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

  const label = new Label(`Render Box {x: ${bird.attr('x')} | y: ${bird.attr('y')}}`)
  label.attr({
    anchor: [0.5, 0.5],
    pos: [600, 300],
    font: '48px Arial',
    color: '#fff',
  })

  fglayer.appendChild(label)

  bird.on('update', evt => {
    const [x, y] = bird.renderBox
    label.text = `Render Box {x: ${x} | y: ${y}}`
  })
})

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})