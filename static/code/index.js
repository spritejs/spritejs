const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

;(async function(){
  const paper = spritejs.Paper2D('#paper')
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
  
  const axisZero = [800, 600]
  const circle = new spritejs.Sprite()
  
  circle.attr({
    anchor: [0.5, 0.5],
    size: [800, 800],
    pos: axisZero,
    bgcolor: '#139',
    opacity: 0.5,
    borderRadius: 400,
  })
  
  bglayer.appendChild(circle)

  const birdCountLabel = new spritejs.Label()
  birdCountLabel.attr({
    pos: [30, 160],
    font: '32px Arial',
    color: 'white',
  })

  bglayer.appendChild(birdCountLabel) 
  
  function pointAdd(p1, p2 = [0, 0]){
    return [p1[0] + p2[0], p1[1] + p2[1]].map(Math.round)
  }
  
  function pointSub(p1, p2 = [0, 0]){
    return [p1[0] - p2[0], p1[1] - p2[1]].map(Math.round)
  }
  
  async function randomAnimate(bird){
    const birdPoint = bird.attr('pos')
    const randomArc = Math.random() * 2 * Math.PI
    const randomPoint = pointAdd([350 * Math.cos(randomArc), 
                                  350 * Math.sin(randomArc)], axisZero)
    
    const dist = pointSub(randomPoint, birdPoint)
    const distance = Math.round(Math.sqrt(dist[0] * dist[0] + dist[1] * dist[1]))
    const deg = Math.round(180 * Math.atan(dist[1] / dist[0]) / Math.PI)
    const flip = dist[0] < 0 ? -1 : 1
    const duration = 5 * distance + 100

    bird.attr('scale', [flip, 1]) 
    
    const anim = bird.animate([
      {pos: birdPoint},
      {pos: randomPoint}
    ], {
      duration,
      endDelay: 500,
      fill: 'both'
    })

    await anim.finished
  }

  let birdCount = 0
  async function addBird(){
    birdCountLabel.text = `sprites: ${++birdCount} | fps: ${fglayer.fps}`
    const bird = new spritejs.Sprite('bird1.png') 

    bird.attr({
      anchor: [0.5, 0.5],
      pos: axisZero,
      transform: {
        rotate: 0,
      }
    })

    fglayer.appendChild(bird)
    
    let idx = 0
    setInterval(() => {
      bird.textures = [`bird${++idx % 3 + 1}.png`]
    }, 100)

    // bird.animate([
    //   {textures: 'bird1.png'},
    //   {textures: 'bird2.png'},
    //   {textures: 'bird3.png'},
    // ], {
    //   duration: 300,
    //   direction: 'alternate',
    //   iterations: Infinity,
    // })
    
    //noprotect
    do{
      await randomAnimate(bird)
    }while(1) 
  }

  addBird()
  circle.on('click', evt => {
    addBird()
  })

  console.log('Click in the circle to add bird...')
  
  setInterval(() => {
    birdCountLabel.text = `sprites: ${birdCount} | fps: ${fglayer.fps}`
  }, 1000)

  window.addEventListener('resize', evt => {
    paper.setViewport('auto', 'auto')
  })
})()