const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

class Button extends spritejs.Label {
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

;(async function(){
  const paper = spritejs.Paper2D('#paper'),
        Sprite = spritejs.Sprite

  paper.setResolution(1600, 1200) 
  
  await paper.preload(
    [birdsRes, birdsJsonUrl]   
  )  
  
  const bglayer = paper.layer('bg'), 
        fglayer = paper.layer('fg', {
              handleEvent: false,
              evaluateFPS: true,
              renderMode: 'repaintAll',
        })   

  function randomBirds(i){
    const s = new Sprite('bird1.png')
    const pos = [300, 350 + 60 * i]
    const duration = Math.round(200 + 300 * Math.random())

    s.attr({
      anchor: [0.5, 0.5],
      pos,
      zIndex: 200,
    })  

    fglayer.appendChild(s)

    s.animate([
      {textures: 'bird1.png'},
      {textures: 'bird2.png'},
      {textures: 'bird3.png'},
    ], {
      duration,
      direction: 'alternate',
      iterations: Infinity,
    })

    s.animate([
      {x: 100},
      {x: 900},
      {x: 100},
    ], {
      duration: duration * 20,
      iterations: Infinity,
      easing: 'ease-in-out',        
    })

    s.animate([
      {scale: [1, 1]},
      {scale: [-1, 1]},
      {scale: [1, 1]},
    ], {
      duration: duration * 20,
      iterations: Infinity,
      easing: 'step-end',        
    })

    return s    
  }

  let block1 = new Sprite({
    attr: {
      anchor: [0.5, 0.5],
      pos: [400, 600],
      size: [100, 100],
      bgcolor: 'red',
    }
  })

  fglayer.appendChild(block1)

  block1.animate([{
    rotate: 0,
    borderRadius: 0,
    bgcolor: 'red',
  },{
    rotate: 180,
    borderRadius: 50,
    bgcolor: 'green',
  },{
    rotate: 360,
    borderRadius: 0,
    bgcolor: 'blue',
  }], {
    duration: 5000,
    direction: 'alternate',
    iterations: Infinity,
  })

  for(let i = 0; i < 10; i++){
    randomBirds(i)
  }
  
  const [speedupBtn, slowdownBtn, pauseBtn, playBtn] = 
  ['Speed up', 'Slow down', 'Pause', 'Play'].map((type, i) => {
    const button = new Button(type)

    button.attr({
      anchor: [0.5, 0.5],
      pos: [1300, 200 + 180 * i],
      size: [240, 50],
      font: '36px Arial',
      lineHeight: 50,
      textAlign: 'center',
      color: '#fff',
      border: [1, '#fff'],
      borderRadius: 20,
      padding: 25,
    })
    bglayer.appendChild(button)

    return button   
  })

  speedupBtn.on('click', evt => {
    fglayer.timeline.playbackRate += 0.2
  })

  slowdownBtn.on('click', evt => {
    fglayer.timeline.playbackRate -= 0.2
  })

  pauseBtn.on('click', evt => {
    fglayer.timeline.playbackRate = 0
  })

  playBtn.on('click', evt => {
    fglayer.timeline.playbackRate = 1
  })

  const birdCountLabel = new spritejs.Label()
  birdCountLabel.attr({
    pos: [30, 60],
    font: '32px Arial',
    color: 'white',
  })

  bglayer.appendChild(birdCountLabel) 

  setInterval(() => {
    birdCountLabel.text = `fps: ${fglayer.fps}` 
      + ` | rate: ${fglayer.timeline.playbackRate.toFixed(2)}`
  }, 100)

  window.addEventListener('resize', evt => {
    paper.setViewport('auto', 'auto')
  })
})()