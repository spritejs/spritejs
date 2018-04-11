const {Scene, Sprite} = spritejs

/* demo: circle */
;(function () {
  const scene = new Scene('#circle', {viewport: ['auto', 'auto'], resolution: [1540, 600]})

  const layer = scene.layer()

  const sprite = new Sprite()
  sprite.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    bgcolor: 'red',
    size: [50, 50],
    borderRadius: 25,
    translate: [0, -200],
    transformOrigin: [0, 200],
  })

  sprite.animate([
    {rotate: 0},
    {rotate: 360},
  ], {
    duration: 3000,
    iterations: Infinity,
  })

  layer.append(sprite)
}())

/* demo: animate-timeline */
;(async function () {
  const scene = new Scene('#animate-timeline', {viewport: ['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer()

  await scene.preload({id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'})

  const [speed1, speed2, speed4, halfSpeed, pause, reversePlay]
    = document.querySelectorAll('#speed1, #speed2, #speed4, #halfSpeed, #pause, #reversePlay')

  const timeline = layer.timeline

  speed1.addEventListener('click', (evt) => {
    timeline.playbackRate = 1.0
  })

  speed2.addEventListener('click', (evt) => {
    timeline.playbackRate = 2.0
  })

  speed4.addEventListener('click', (evt) => {
    timeline.playbackRate = 4.0
  })

  halfSpeed.addEventListener('click', (evt) => {
    timeline.playbackRate = 0.5
  })

  pause.addEventListener('click', (evt) => {
    timeline.playbackRate = 0
  })

  reversePlay.addEventListener('click', (evt) => {
    timeline.playbackRate = -1.0
  })


  function addRandomSnow() {
    const snow = new Sprite('snow')
    const x0 = 20 + Math.random() * 1500,
      y0 = 0

    snow.attr({
      anchor: [0.5, 0.5],
      pos: [x0, y0],
      size: [50, 50],
    })

    snow.animate([
      {x: x0 - 10},
      {x: x0 + 10},
    ], {
      duration: 1000,
      fill: 'forwards',
      direction: 'alternate',
      iterations: Infinity,
      easing: 'ease-in-out',
    })

    const dropAnim = snow.animate([
      {y: -20, rotate: 0},
      {y: 700, rotate: 360},
    ], {
      duration: 10000,
      fill: 'forwards',
    })

    dropAnim.finished.then(() => {
      snow.remove()
    })

    layer.append(snow)
  }

  setInterval(addRandomSnow, 200)
}())

/* demo: animate-tweenjs */
;(function () {
  const scene = new Scene('#animate-tweenjs', {viewport: ['auto', 'auto'], resolution: [1540, 600]})

  const layer = scene.layer()

  const sprite = new Sprite()
  sprite.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    bgcolor: 'rgb(128, 0, 255)',
    size: [100, 100],
  })
  layer.append(sprite)

  const coords = {rotate: 0}

  new TWEEN.Tween(coords)
    .to({rotate: 360}, 5000)
    .easing(TWEEN.Easing.Quadratic.Out)
    .onUpdate(() => {
      const rotate = coords.rotate,
        radian = Math.PI * rotate / 180,
        red = 128 + Math.round(127 * Math.sin(radian)),
        green = Math.round(rotate) % 128,
        blue = 128 + Math.round(127 * Math.cos(radian))

      const bgcolor = `rgb(${red}, ${green}, ${blue})`
      sprite.attr({rotate, bgcolor})
    })
    .repeat(Infinity)
    .start()

  function animate() {
    requestAnimationFrame(animate)
    TWEEN.update(layer.timeline.currentTime)
  }
  requestAnimationFrame(animate)

  const [speed1, speed2, speed4, halfSpeed, pause, reversePlay]
    = document.querySelectorAll('#tweenjs-speed1, #tweenjs-speed2, #tweenjs-speed4, #tweenjs-halfSpeed, #tweenjs-pause, #tweenjs-reversePlay')

  const timeline = layer.timeline

  speed1.addEventListener('click', (evt) => {
    timeline.playbackRate = 1.0
  })

  speed2.addEventListener('click', (evt) => {
    timeline.playbackRate = 2.0
  })

  speed4.addEventListener('click', (evt) => {
    timeline.playbackRate = 4.0
  })

  halfSpeed.addEventListener('click', (evt) => {
    timeline.playbackRate = 0.5
  })

  pause.addEventListener('click', (evt) => {
    timeline.playbackRate = 0
  })

  reversePlay.addEventListener('click', (evt) => {
    timeline.playbackRate = -1
  })
}())
