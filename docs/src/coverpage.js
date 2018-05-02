
(async function () {
  const {Scene, Sprite, Group, Label, Path} = spritejs
  const scene = new Scene('#coverpage', {
    viewport: ['auto', 'auto'],
    resolution: [1920, 1080],
    stickMode: 'width',
  })

  const [width] = scene.viewport
  if(width <= 480) {
    scene.container.style.transform = 'scale(2)'
  }

  window.addEventListener('resize', (evt) => {
    const [width] = scene.viewport
    if(width <= 480) {
      scene.container.style.transform = 'scale(2)'
    } else {
      scene.container.style.transform = ''
    }
  })

  await scene.preload([
    'https://p5.ssl.qhimg.com/t0100238c57e97a8268.png',
    'https://s1.ssl.qhres.com/static/6d5d24a08e6d6bc1.json',
  ])

  const fglayer = scene.layer('fglayer')

  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

  async function showLogoText(text, posList, delay = 0) {
    const els = []
    for(let i = 0; i < text.length; i++) {
      const letter = text.charAt(i),
        x = posList[i]

      const letterEl = new Sprite(`letter-${letter}.png`)
      letterEl.attr({pos: [535 + x, 333]})
      if(letter === 'j') {
        letterEl.attr({zIndex: 20})
      }
      els.push(letterEl)
      /* eslint-disable no-await-in-loop */
      await wait(delay)
      /* eslint-enable no-await-in-loop */
      fglayer.append(letterEl)
    }
    return els
  }

  await showLogoText('spritejs', [0, 128, 250, 380, 424, 539, 643, 744], 200)

  const introText = new Group()
  introText.attr({
    anchor: 0.5,
    pos: [1080, 540],
    size: [360, 40],
    opacity: 0,
    // bgcolor: 'rgba(0, 0, 0, 0.3)',
  })
  fglayer.append(introText)

  ;[...'跨平台绘图对象模型'].forEach((char, i) => {
    const label = new Label(char)
    label.attr({
      pos: [i * 40, 0],
      font: '32px "宋体"',
      fillColor: '#fff',
    })
    introText.append(label)
  })

  const anim = introText.animate([
    {x: 1080, opacity: 0},
    {x: 980, opacity: 0.8},
  ], {
    duration: 500,
    fill: 'forwards',
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  })

  await anim.finished

  const huanhuanGroup = new Group()
  huanhuanGroup.attr({
    anchor: 0.5,
    pos: [490, 372],
    rotate: 30,
    size: [100, 160],
    opacity: 0,
  })
  fglayer.append(huanhuanGroup)
  // 60, 104

  const huanhuan = new Sprite('huanhuan.png')
  huanhuan.attr({
    pos: [0, 0],
  })
  huanhuanGroup.append(huanhuan)

  const huanhuanFire = new Path('M0,0Q-1,12,5,36Q30,22,30,0z')
  huanhuanFire.attr({
    anchor: [0, 0],
    fillColor: '#FEE139',
    pos: [23, 100],
    lineWidth: 6,
    strokeColor: '#FB6F4A',
    zIndex: -1,
    rotate: -5,
  })
  huanhuanGroup.append(huanhuanFire)

  // random burn fire
  let fx = 5,
    fy = 6

  fglayer.timeline.setInterval(() => {
    const deltaX = Math.floor(Math.random() * 3) - 1, // -1 0 1,
      deltaY = Math.floor(Math.random() * 3) - 1

    fx += deltaX
    if(fx < 0) fx = 0
    if(fx > 15) fx = 15

    fx += deltaY
    if(fy < 0) fy = 0
    if(fy > 20) fy = 20

    const q1 = [-1, 12, -5 + fx, 30 + fy]
    const q2 = [30, 22, 30, 0]
    const d = `M0,0Q${q1}Q${q2}z`
    huanhuanFire.attr({
      path: {d},
    })
  }, 100)

  const anim2 = huanhuanGroup.animate([
    {pos: [490, 372], opacity: 0},
    {pos: [520, 320], opacity: 1},
  ], {
    duration: 500,
    fill: 'forwards',
  })

  huanhuanGroup.on('mouseenter', (evt) => {
    huanhuan.textures = 'huanhuan2.png'
  })

  huanhuanGroup.on('mouseleave', (evt) => {
    huanhuan.textures = 'huanhuan.png'
  })

  await anim2.finished

  huanhuanGroup.animate([
    {y: 320},
    {y: 325},
    {y: 320},
    {y: 315},
    {y: 320},
  ], {
    duration: 2000,
    iterations: Infinity,
  })

  const guanguan = new Sprite('guanguan3.png')
  guanguan.attr({
    anchor: 0.5,
    scale: [-1, 1],
    pos: [1600, 660],
  })
  fglayer.append(guanguan)

  const anim3 = guanguan.animate([
    {x: 1600},
    {x: 1500},
  ], {
    duration: 500,
    fill: 'forwards',
  })

  await anim3.finished
  guanguan.textures = 'guanguan1.png'

  await wait(800)
  guanguan.textures = 'guanguan3.png'

  const anim4 = guanguan.animate([
    {x: 1500},
    {x: 1180},
  ], {
    duration: 500,
    fill: 'forwards',
  })

  await anim4.finished
  guanguan.textures = 'guanguan1.png'
  guanguan.attr({
    zIndex: -1,
    rotate: 20,
  })

  guanguan.on('mouseenter', (evt) => {
    guanguan.textures = 'guanguan2.png'
    guanguan.attr({rotate: 30})
  })
  guanguan.on('mouseleave', (evt) => {
    guanguan.textures = 'guanguan1.png'
    guanguan.attr({rotate: 20})
  })

  function registerButton(button, link) {
    button.on('mouseenter', (evt) => {
      document.documentElement.style.cursor = 'pointer'
    })
    button.on('mouseleave', (evt) => {
      document.documentElement.style.cursor = 'default'
    })
    const btnPressDown = (evt) => {
      button.attr({
        bgcolor: '#1e9d5a',
        fillColor: '#fff',
      })
    }
    button.on('mouseenter', btnPressDown)
    button.on('touchstart', btnPressDown)

    const btnPressUp = (evt) => {
      button.attr({
        bgcolor: '',
        fillColor: '#11773d',
      })
    }

    button.on('mouseleave', btnPressUp)
    document.documentElement.addEventListener('touchend', btnPressUp)

    button.on('click', (evt) => {
      window.location.href = link
    })
  }

  const githubBtn = new Label('GitHub')
  githubBtn.attr({
    anchor: [0.5, 0],
    size: [260, 60],
    border: [2, '#208b50'],
    pos: [660, 828],
    zIndex: 99999,
    borderRadius: 30,
    textAlign: 'center',
    font: '36px "宋体"',
    lineHeight: 60,
    fillColor: '#11773d',
    opacity: 0,
    // bgcolor: 'red',
  })
  fglayer.append(githubBtn)
  registerButton(githubBtn, 'https://github.com/spritejs/spritejs')

  const anim5 = githubBtn.animate([
    {opacity: 0},
    {opacity: 1},
  ], {
    duration: 500,
    fill: 'forwards',
  })
  await anim5.finished

  const getStartBtn = githubBtn.cloneNode()
  getStartBtn.attr({
    text: 'Get Started',
    pos: [960, 828],
  })
  fglayer.append(getStartBtn)
  registerButton(getStartBtn, '/#/zh-cn/index')

  const anim6 = getStartBtn.animate([
    {opacity: 0},
    {opacity: 1},
  ], {
    duration: 500,
    fill: 'forwards',
  })
  await anim6.finished

  const demoBtn = githubBtn.cloneNode()
  demoBtn.attr({
    text: 'Demo',
    pos: [1260, 828],
  })
  fglayer.append(demoBtn)

  registerButton(demoBtn, '/demo')
  const anim7 = demoBtn.animate([
    {opacity: 0},
    {opacity: 1},
  ], {
    duration: 500,
    fill: 'forwards',
  })
  await anim7.finished
}())
