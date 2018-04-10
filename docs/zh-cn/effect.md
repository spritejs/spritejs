### 动画 Animate

在前面的例子里我们已经看过很多动画的用法。事实上，spritejs支持[Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)，因此可以让精灵使用.animate方法做出各种复杂的组合动画。

<div id="animations" class="sprite-container"></div>

我们既可以使用spritejs提供的animate动画，也可以使用其他方式，比如原生的setInterval或requestAnimationFrame。此外一些动画库提供的Tween动画，也可以很容易地结合spritejs使用。

```js
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

const scene = new Scene('#animations', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer('fglayer')

const d = "M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z"
scene.preload([birdsRes, birdsJsonUrl]).then(function() {
  const path = new Path()

  path.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    path: {d, trim: true},
    lineWidth: 26,
    lineCap: 'round',
    gradients: {
      strokeColor: {
        vector: [0, 400, 400, 0],
        colors: [{
          offset: 0,
          color: 'rgba(255,0,0,1)',
        }, {
          offset: .5,
          color: 'rgba(255,0,0,0)',
        }, {
          offset: 1,
          color: 'rgba(255,0,0,0)',
        }]
      },
      fillColor: {
        vector: [0, 0, 400, 400],
        colors: [{
          offset: 0,
          color: 'rgba(255,0,0,0.7)',
        }, {
          offset: 1,
          color: 'rgba(255,255,0,0.7)',
        }]
      }
    }
  })

  layer.append(path)

  const s = new Sprite('bird1.png')
  const pathSize = path.pathSize

  s.attr({
    anchor: [0.5, 0.5],
    pos: [770 + pathSize[0] / 2, 300 + pathSize[1] / 2],
    size: [80, 50],
    offsetPath: path.svg.d,
    zIndex: 200,
  })
  s.animate([
    { offsetDistance: 0 },
    { offsetDistance: 1 }
  ], {
    duration: 6000,
    iterations: Infinity,
  })

  let i = 0
  setInterval(function() {
    s.textures = [`bird${i++%3 + 1}.png`]
  }, 100)

  const startTime = Date.now()
  const T = 6000
  requestAnimationFrame(function next(){
    const p = Math.PI * 2 * (Date.now() - startTime) / T
    const colors = [
      { offset: 0, color: 'rgba(255,0,0,1)' },
      { offset: 0.5 + 0.5 * Math.abs(Math.sin(p)), color: 'rgba(255,0,0,0)' },
      { offset: 1, color: 'rgba(255,0,0,0)' },
    ]

    const gradients = path.attr('gradients')
    gradients.strokeColor.colors = colors
    path.attr({gradients})

    requestAnimationFrame(next)     
  })

  layer.appendChild(s)
})
```

比起使用原生timer或者第三方库，直接使用spritejs提供的animate动画有一个额外的好处，就是它默认基于layer的timeline。也就是说我们可以通过控制layer的timeline来控制动画播放的速度，方便地加速、减速、暂停甚至回放动画。

<div>
<button id="speedUp">加速</button>
<button id="slowDown">减速</button>
<button id="pause">暂停</button>
<button id="resume">继续</button>
<span id="playbackRate">playbackRate: 1.0</span>
</div>

<div id="animations-playback" class="sprite-container" style="margin-top: 10px"></div>

通过控制playbackRate可以控制layer上的所有动画的播放速度，该属性也会影响到layer的draw方法中的时间参数，对自定义绘图中依赖于时间轴的也可以产生影响。

```js
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

const scene = new Scene('#animations-playback', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer('fglayer')
const timeline = layer.timeline

function updateSpeed() {
  playbackRate.innerHTML = `playbackRate: ${timeline.playbackRate.toFixed(1)}`
}
speedUp.addEventListener('click', function(){
  timeline.playbackRate += 0.5
  updateSpeed()
})
slowDown.addEventListener('click', function(){
  timeline.playbackRate -= 0.5
  updateSpeed()
})
pause.addEventListener('click', function(){
  timeline.playbackRate = 0
  updateSpeed()
})
resume.addEventListener('click', function(){
  timeline.playbackRate = 1.0
  updateSpeed()
})

scene.preload([birdsRes, birdsJsonUrl]).then(function(){
  for(let i = 0; i < 10; i++) {
    if(i === 5 || i === 9) continue
    const bird = new Sprite('bird1.png')
    bird.attr({
      anchor: [0.5, 0.5],
      pos: [-50, 100 + (i % 5) * 100],
    })
    layer.append(bird)

    bird.animate([
      {textures: 'bird1.png'},
      {textures: 'bird2.png'},
      {textures: 'bird3.png'},
      {textures: 'bird1.png'},
    ], {
      duration: 500,
      iterations: Infinity,
      easing: 'step-end',
    })

    const delay = i < 5 ? Math.abs(2 - i) * 300 : (4 - Math.abs(7 - i)) * 300
    bird.animate([
      {x: -50},
      {x: 1600},
      {x: -50},
    ], {
      delay,
      duration: 6000,
      iterations: Infinity,    
    })

    bird.animate([
      {scale: [1, 1]},
      {scale: [-1, 1]},
      {scale: [1, 1]},
    ], {
      delay,
      duration: 6000,
      iterations: Infinity,
      easing: 'step-end',        
    })
  }
})

autoResize(scene)
```

layer的timeline是TimeLine类的一个对象，TimeLine类定义于[sprite-timeline](https://github.com/spritejs/sprite-timeline)，这是一个独立的库，也可以单独作于其他方式的动画。

spritejs动画功能非常丰富，关于动画的其他内容，可参考[高级用法：动画](/zh-cn/guide/animations)。

### 滤镜 filter

spritejs支持[canvas滤镜](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)，能够方便地给元素中的各个texture添加各种滤镜。

<div id="filters" class="sprite-container"></div>

```js
const images = [
    {id:'girl1', src:'https://p5.ssl.qhimg.com/t01feb7d2e05533ca2f.jpg'},
    {id:'girl2', src:'https://p5.ssl.qhimg.com/t01deebfb5b3ac6884e.jpg'},
  ]
const scene = new Scene('#filters', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer('fglayer')
const y1 = 50, y2 = 320

function applyFilters(id, filters, y, scale = 1) {
  filters.forEach(function(filter, i){
    const s = new Sprite()
    const textures = {id, filter: {}}
    if(filter.length === 2) {
      textures.filter[filter[0]] = filter[1]
    }
    s.attr({
      textures,
      pos: [50 + i * 250, y],
      scale,
    })
    layer.append(s)
  })    
}

scene.preload(...images).then(function(){
  const filters1 = [
    [],
    ['brightness', '150%'],
    ['grayscale', '50%'],
    ['blur', '12px'],
    ['dropShadow', [15, 15, 5, '#033']],
    ['hueRotate', 45],
  ]

  applyFilters('girl1', filters1, y1, 0.5)

  const filters2 = [
    [],
    ['invert', '100%'],
    ['opacity', '70%'],
    ['saturate', '20%'],
    ['sepia', '100%'],
    ['hueRotate', 135],
  ]

  applyFilters('girl2', filters2, y2)
})
```

### 渐变 gradient

spritejs支持三种渐变，分别为两种标准的canvas渐变：[linearGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)和[radialGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)，以及一种微信小程序的特殊的渐变：circularGradient。spritejs中设置渐变很简单，只需要设置gradients属性，其中指定需要应用渐变的属性，目前支持border、bgcolor、fillColor和strokeColor四种属性的渐变。通过传递vector参数表示渐变的类型，根据个数自动识别为对应的渐变类型。

<div id="gradients" class="sprite-container"></div>


<!-- javascript -->
<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs

;(function(){
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

  const scene = new Scene('#animations', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer('fglayer')

  const d = "M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z"
  scene.preload([birdsRes, birdsJsonUrl]).then(function() {
    const path = new Path()

    path.attr({
      anchor: [0.5, 0.5],
      pos: [770, 300],
      path: {d, trim: true},
      lineWidth: 26,
      lineCap: 'round',
      gradients: {
        strokeColor: {
          vector: [0, 400, 400, 0],
          colors: [{
            offset: 0,
            color: 'rgba(255,0,0,1)',
          }, {
            offset: .5,
            color: 'rgba(255,0,0,0)',
          }, {
            offset: 1,
            color: 'rgba(255,0,0,0)',
          }]
        },
        fillColor: {
          vector: [0, 0, 400, 400],
          colors: [{
            offset: 0,
            color: 'rgba(255,0,0,0.7)',
          }, {
            offset: 1,
            color: 'rgba(255,255,0,0.7)',
          }]
        }
      }
    })

    layer.append(path)

    const s = new Sprite('bird1.png')
    const pathSize = path.pathSize

    s.attr({
      anchor: [0.5, 0.5],
      pos: [770 - pathSize[0] / 2, 300 - pathSize[1] / 2],
      size: [80, 50],
      offsetPath: path.svg.d,
      zIndex: 200,
    })
    s.animate([
      { offsetDistance: 0 },
      { offsetDistance: 1 }
    ], {
      duration: 6000,
      iterations: Infinity,
    })

    let i = 0
    setInterval(function() {
      s.textures = [`bird${i++%3 + 1}.png`]
    }, 100)

    const startTime = Date.now()
    const T = 6000
    requestAnimationFrame(function next(){
      const p = Math.PI * 2 * (Date.now() - startTime) / T
      const colors = [
        { offset: 0, color: 'rgba(255,0,0,1)' },
        { offset: 0.5 + 0.5 * Math.abs(Math.sin(p)), color: 'rgba(255,0,0,0)' },
        { offset: 1, color: 'rgba(255,0,0,0)' },
      ]

      const gradients = path.attr('gradients')
      gradients.strokeColor.colors = colors
      path.attr({gradients})

      requestAnimationFrame(next)     
    })

    layer.appendChild(s)
  })
}())

;(function(){
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'
  
  const scene = new Scene('#animations-playback', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer('fglayer')
  const timeline = layer.timeline

  function updateSpeed() {
    playbackRate.innerHTML = `playbackRate: ${timeline.playbackRate.toFixed(1)}`
  }
  speedUp.addEventListener('click', function(){
    timeline.playbackRate += 0.5
    updateSpeed()
  })
  slowDown.addEventListener('click', function(){
    timeline.playbackRate -= 0.5
    updateSpeed()
  })
  pause.addEventListener('click', function(){
    timeline.playbackRate = 0
    updateSpeed()
  })
  resume.addEventListener('click', function(){
    timeline.playbackRate = 1.0
    updateSpeed()
  })

  scene.preload([birdsRes, birdsJsonUrl]).then(function(){
    for(let i = 0; i < 10; i++) {
      if(i === 5 || i === 9) continue
      const bird = new Sprite('bird1.png')
      bird.attr({
        anchor: [0.5, 0.5],
        pos: [-50, 100 + (i % 5) * 100],
      })
      layer.append(bird)

      bird.animate([
        {textures: 'bird1.png'},
        {textures: 'bird2.png'},
        {textures: 'bird3.png'},
        {textures: 'bird1.png'},
      ], {
        duration: 500,
        iterations: Infinity,
        easing: 'step-end',
      })

      const delay = i < 5 ? Math.abs(2 - i) * 300 : (4 - Math.abs(7 - i)) * 300
      bird.animate([
        {x: -50},
        {x: 1600},
        {x: -50},
      ], {
        delay,
        duration: 6000,
        // direction: 'alternate',
        iterations: Infinity,    
      })

      bird.animate([
        {scale: [1, 1]},
        {scale: [-1, 1]},
        {scale: [1, 1]},
      ], {
        delay,
        duration: 6000,
        iterations: Infinity,
        easing: 'step-end',        
      })
    }
  })
}())

;(function(){
  const images = [
      {id:'girl1', src:'https://p5.ssl.qhimg.com/t01feb7d2e05533ca2f.jpg'},
      {id:'girl2', src:'https://p5.ssl.qhimg.com/t01deebfb5b3ac6884e.jpg'},
    ]
  const scene = new Scene('#filters', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer('fglayer')
  const y1 = 50, y2 = 320

  function applyFilters(id, filters, y, scale = 1) {
    filters.forEach(function(filter, i){
      const s = new Sprite()
      const textures = {id, filter: {}}
      if(filter.length === 2) {
        textures.filter[filter[0]] = filter[1]
      }
      s.attr({
        textures,
        pos: [50 + i * 250, y],
        scale,
      })
      layer.append(s)
    })    
  }

  scene.preload(...images).then(function(){
    const filters1 = [
      [],
      ['brightness', '150%'],
      ['grayscale', '50%'],
      ['blur', '12px'],
      ['dropShadow', [15, 15, 5, '#033']],
      ['hueRotate', 45],
    ]

    applyFilters('girl1', filters1, y1, 0.5)

    const filters2 = [
      [],
      ['invert', '100%'],
      ['opacity', '70%'],
      ['saturate', '20%'],
      ['sepia', '100%'],
      ['hueRotate', 135],
    ]

    applyFilters('girl2', filters2, y2)
  })
}())

;(function(){
  const scene = new Scene('#gradients', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer('fglayer')

  const box = new Sprite()
  box.attr({
    border: 10,
    gradients: {
      border: {
        vector: [0, 0, 170, 170],
        colors: [
          {offset:0, color:'red'},
          {offset:0.5, color:'yellow'},
          {offset:1, color:'green'},
        ],
      },
      bgcolor: {
        vector: [0, 150, 150, 0],
        colors: [
          {offset:0, color:'#fff'},
          {offset:0.5, color:'rgba(33, 33, 77, 0.7)'},
          {offset:1, color:'rgba(128, 45, 88, 0.5)'},
        ],        
      }
    },
    pos: [150, 50],
    size: [150, 150],
    borderRadius: 15,
  })

  layer.append(box)

  const label = new Label('Hello SpriteJS~~')
  label.attr({
    lineWidth: 6,
    gradients: {
      fillColor: {
        vector: [35, 35, 50, 350, 350, 600],
        colors: [
          {offset:0, color:'#777'},
          {offset:0.5, color:'#ccc'},
          {offset:1, color:'#333'},        
        ],
      }
    },
    pos: [500, 50],
    font: '106px Arial',
  })

  layer.append(label)

  const path = new Path()

  path.attr({
    path: {
      d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
      trim: true,
      transform: {scale: 0.7, rotate: 30},
    },
    gradients: {
      fillColor: {
        vector: [200, 200, 0, 0],
        colors: [
          {offset:0, color:'red'},
          {offset:0.5, color:'yellow'},
          {offset:1, color:'green'},        
        ],
      }
    },
    anchor: [0.5, 0.5],
    pos: [700, 360],
  })

  layer.append(path)
}())
</script>
