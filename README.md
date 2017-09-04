# sprite2 轻量级的 canvas 绘图库

[![npm status](https://img.shields.io/npm/v/sprite2.svg)](https://www.npmjs.org/package/sprite2)
[![build status](https://api.travis-ci.org/spritejs/sprite2.svg?branch=master)](https://travis-ci.org/spritejs/sprite2) 
[![dependency status](https://david-dm.org/spritejs/sprite2.svg)](https://david-dm.org/spritejs/sprite2)
[![coverage status](https://img.shields.io/coveralls/spritejs/sprite2.svg)](https://coveralls.io/github/spritejs/sprite2)

像操作 DOM 元素一样操作 canvas 中的“精灵”

## 特性

- 支持 attr 属性设置精灵样式
- 支持 [web animations api](https://w3c.github.io/web-animations/#the-animation-interface
) 精灵动画
- 支持精灵的 canvas 滤镜
- 支持精灵的 mouse 和 touch 事件
- 优化的渲染性能

## Usage

在浏览器中使用

```html
<script src="https://s4.ssl.qhres.com/!5037b002/sprite2-1.3.0.js"></script>
```

## 快速上手

- [整体结构](docs#整体结构)
- [paper & layers](docs#快速上手)
- [Sprite](docs#sprite-类结构)
- [事件模型](docs#事件机制)
- [性能](docs#性能)
- [1.1 更新](docs#11-版本更新)
- [1.2 更新](docs#12-版本更新)
	
## 示例

[Demo](https://code.h5jun.com/gus)

```js
const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

;(async function(){
  const paper = sprite2.Paper2D('#paper')
  paper.setResolution(800, 800) // 设置 Paper 的实际分辨率
  
  const cacheMap = new Map()
  class Bird extends sprite2.Sprite {
    constructor(){
      super('bird1.png')
    }
    //共用缓存，提高性能
    get cache() {
      const key = JSON.stringify(this.textures) + this.attr('scale')
      if(cacheMap.has(key)) {
        return cacheMap.get(key)
      }
    }
    set cache(context) {
      if(context == null){
        cacheMap.clear()
        return
      }
      const key = JSON.stringify(this.textures) + this.attr('scale')

      if(!cacheMap.has(key)) {
        cacheMap.set(key, context)
      }
    }      
  }

  await paper.preload(
    [birdsRes, birdsJsonUrl]   // 预加载资源，支持雪碧图
  )  
  
  const bglayer = paper.layer('bg'),  // 背景层
        // 前景层
        // 不代理事件，提升性能
        fglayer = paper.layer('fg', {
              handleEvent: false,
              evaluateFPS: true,
              renderMode: 'repaintAll',
        })   
  
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

    bird.attr('scale', [flip, 1]) //scale 放在外面，触发缓存
    
    bird.animate([
      {textures: 'bird1.png'},
      {textures: 'bird2.png'},
      {textures: 'bird3.png'},
    ], {
      duration: 300,
      direction: 'alternate',
      iterations: Infinity,
    })
    
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
    spriteCount.innerHTML = ++birdCount
    const bird = new Bird()

    bird.attr({
      anchor: [0.5, 0.5],
      pos: axisZero,
      transform: {
        rotate: 0,
      }
    })

    fglayer.appendChild(bird)
    
    //noprotect
    do{
      await randomAnimate(bird)
    }while(1) 
  }

  addBird()

  circle.on('click', evt => {
    addBird()
  })

  //显示 fps ，注意，因为本框架采用的是非定时渲染，即只有 sprite 有更新时才渲染
  //所以所有精灵不运动的时候 fps 也会降下来
  setInterval(() => {
    fps.innerHTML = fglayer.fps
  }, 1000)
  window.fglayer = fglayer
  window.paper = paper
})()
```
