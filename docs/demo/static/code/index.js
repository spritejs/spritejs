;(async function(){
  const {Scene, Sprite, Group} = spritejs
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [3000, 3000]})
  
  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ])
  
  const fglayer = scene.layer('fg', {
              handleEvent: false,
        })   
  
  const center = [1500, 1600]
  const region = new Group()
  
  region.attr({
    anchor: 0.5,
    size: [2300, 2300],
    pos: center,
    bgcolor: 'rgba(17, 51, 153, 0.5)',
    borderRadius: 300,
  })
  
  fglayer.append(region)

  const robot = new Sprite('guanguan1.png')
  robot.attr({
    anchor: [0.5, 1],
    pos: [350, 650],
    transformOrigin: [0, -300],
  })
  region.append(robot)

  async function robotMotion() {
    await robot.animate([
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png', scale: [-1, 1]},
      {textures: 'guanguan1.png', scale: [1, 1]},
    ], {
      duration: 3000,
      easing: 'step-end',
      fill: 'forwards',
    }).finished
  
    await robot.animate([
      {y: 650},
      {y: 2300}, 
    ], {
      duration: 500,
      easing: 'ease-in',
      fill: 'forwards',
    }).finished
    
    await robot.animate([
      {textures: 'guanguan1.png'},
      {textures: 'guanguan3.png', scale: [-1, 1]},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan3.png', scale: [1, 1]},
    ], {
      duration: 2000,
      easing: 'step-end',
      fill: 'forwards',
    }).finished
  
    await robot.animate([
      {x: 350},
      {x: 2000},
    ], {
      duration: 2000,
      easing: 'ease-in-out',
      fill: 'forwards',
    }).finished

    await robot.animate([
      {rotate: 0},
      {rotate: -70},
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      direction: 'alternate',
      iterations: 2,
      fill: 'forwards',
    }).finished

    await robot.animate([
      {textures: 'guanguan3.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan3.png'},
    ], {
      duration: 2500,
      easing: 'step-end',
      fill: 'forwards',
    }).finished

    await robot.animate([
      {rotate: 0},
      {rotate: -70},
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      direction: 'alternate',
      iterations: 2,
      fill: 'forwards',
    }).finished
  
    await robot.animate([
      {textures: 'guanguan3.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan2.png'},
      {textures: 'guanguan1.png'},
      {textures: 'guanguan3.png', scale: [-1, 1]},
    ], {
      duration: 2500,
      easing: 'step-end',
      fill: 'forwards',
    }).finished
  
    await robot.animate([
      {x: 2000},
      {x: 350, offset: 0.99, scale: [-1, 1]},
      {x: 350, scale: [1, 1]},
    ], {
      duration: 1000,
      easing: 'ease-in-out',
      fill: 'forwards',
    }).finished
  
    await robot.animate([
      {x: 350, y: 2300, rotate: 0},
      {x: 2000, y: 2300, rotate: 0, offset: 0.3},
      {x: 2000, y: 2300, rotate: -90, offset: 0.35},
      {x: 2000, y: 600, rotate: -90, offset: 0.65},
      {x: 2000, y: 600, rotate: -180, offset: 0.7},
      {x: 350, y: 600, rotate: -180},
    ], {
      delay: 500,
      duration: 3500,
      easing: 'ease-in',
      fill: 'forwards',
    }).finished

    robot.attr({
      textures: 'guanguan1.png'
    })

    await robot.animate([
      {y: 600, rotate: -180}, 
      {y: 650, rotate: 0},
    ], {
      delay: 1000,
      duration: 1000,
      fill: 'forwards',
    }).finished
  }

  while(1) {
    await robotMotion()
  }
})()