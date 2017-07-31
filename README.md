# sprite2 轻量级的 canvas 绘图库

像操作 DOM 元素一样操作 canvas 中的“精灵”

## Usage

在浏览器中使用

```html
<script src="https://s4.ssl.qhres.com/!e92e97c3/sprite2-0.3.7.js"></script>
```

[帮助文档](https://github.com/spritejs/sprite2/tree/master/docs)

[Demo](https://code.h5jun.com/gus)

```js
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

;(async function(){
  const paper = sprite2.Paper2D('#paper')
  paper.setResolution(800, 800) // 设置 Paper 的实际分辨率
  
  await paper.preload(
    [birdsRes, birdsJsonUrl]   // 预加载资源，支持雪碧图
  )  
  
  const bglayer = paper.layer('bg'),  // 背景层
        fglayer = paper.layer('fg')   // 前景层
  
  const axisZero = [400, 400]
  const circle = new sprite2.Sprite()
  
  circle.attr({
    anchor: [0.5, 0.5],
    size: [800, 800],
    pos: axisZero,
    bgcolor: '#139',
    opacity: 0.5,
    borderRadius: 400,
  })
  
  bglayer.appendChild(circle)
  
  function pointAdd(p1, p2 = [0, 0]){
    return [p1[0] + p2[0], p1[1] + p2[1]].map(Math.round)
  }
  
  function pointSub(p1, p2 = [0, 0]){
    return [p1[0] - p2[0], p1[1] - p2[1]].map(Math.round)
  }
  
  function sleep(time){
    return new Promise(resolve => setTimeout(resolve, time))
  }
  
  async function randomAnimate(bird){
    const birdPoint = bird.attr('pos')
    const randomArc = Math.random() * 2 * Math.PI
    const randomPoint = pointAdd([350 * Math.cos(randomArc), 
                                  350 * Math.sin(randomArc)], axisZero)
    
    const dist = pointSub(randomPoint, birdPoint)
    const distance = Math.round(Math.sqrt(dist[0] * dist[0] + dist[1] * dist[1]))
    const flip = dist[0] < 0 ? -1 : 1
    const duration = 5 * distance + 100

    const anim = new Animator(duration, function(p){
      const pos = pointAdd(birdPoint, [p * dist[0], p * dist[1]])
      bird.attr({
        pos,
        scale: [flip, 1]
      })
    })
    await anim.animate()
    await sleep(500)
  }
  
  async function addBird(){
    const bird = new sprite2.Sprite('bird1.png') 

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
    
    //noprotect
    do{
      await randomAnimate(bird)
    }while(1)
  }

  addBird()
  circle.on('click', evt => {
    addBird()
  })
})()
```
