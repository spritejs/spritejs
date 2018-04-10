<style>
  #resolution-adaptive {
    width: 350px;
    height: 350px;
  }
</style>

## 自适应父容器

要实现自适应大小，使用spritejs是很简单的，Scene能够在初始化的时候自动根据容器的宽高来设置canvas的样式宽高。

```js
const scene = new Scene('#adaptive', {resolution: [700, 700]})

const resolution = scene.resolution
const viewport = scene.viewport

const layer = scene.layer('fglayer')

const label = new Label(`resolution: ${resolution} | viewport: ${viewport}`)
label.attr({
  anchor: [0.5, 0.5],
  pos: [350, 350],
  font: '36px Arial',
})

layer.append(label)
```

<div id="adaptive" class="sprite-container"></div>

如果我们的容器适配窗口大小，当我们改变窗口大小时，canvas的大小不会随着改变，但是我们可以通过将Scene的viewport设置为`['auto', 'auto']`，这样就让canvas大小在窗口调整时随着容器大小改变。

```js
const scene = new Scene('#resize', {viewport:['auto', 'auto'], resolution: [770, 770]})

const resolution = scene.resolution
const viewport = scene.viewport

const layer = scene.layer('fglayer')

const label = new Label(`resolution: ${resolution} | viewport: ${viewport}`)
label.attr({
  anchor: [0.5, 0.5],
  pos: [350, 350],
  font: '36px Arial',
})

layer.append(label)

scene.on('viewportChange', function() {
  const viewport = scene.viewport
  label.text = `resolution: ${resolution} | viewport: ${viewport}`
})
```

<div id="resize" class="sprite-container"></div>

## Stick Mode 粘连模式

在移动设备上，要适配不同的屏幕比例，简单的auto适配可能会导致sprite元素被拉伸变形。如果要避免这个问题，我们可以通过配置Scene的Stick Mode相关属性来解决这个问题。

| 属性名称 | 属性类型 | 属性值 | 属性说明 |
| --- | --- | --- | --- |
| stickMode | 枚举 | `"width"`,`"height"`,`"top"`,`"bottom"`,`"left"`,`"right"` | 6种适配容器的粘连模式 |
| stickExtend | Boolean | `true`,`false` | 如果在前面的任何一种粘连模式中，Canvas宽/高小于容器宽/高时，stickExtend如果设为true，那么将Canvas宽高补齐到容器的宽高 |

<div id="sticky">
  <div id="stickMode"  class="sprite-container"></div>
  <div id="control">
    <div>增加高度：<input id="heightBtn" type="range" value="0"></input></div>
    <div>stickExtend：<input id="extendBtn" type="checkbox"></input></div>
  </div>
</div>

竖屏的9种适配情况：

![](https://s1.ssl.qhres.com/static/e65fd506d3628cb8.svg)

对应横屏的9种适配情况

![](https://s1.ssl.qhres.com/static/9b11bf3144fbe59a.svg)

<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs

;(function(){
  const scene = new Scene('#adaptive', {resolution: [700, 700]})

  const resolution = scene.resolution
  const viewport = scene.viewport

  const layer = scene.layer('fglayer')
  
  const label = new Label(`resolution: ${resolution} | viewport: ${viewport}`)
  label.attr({
    anchor: [0.5, 0.5],
    pos: [350, 350],
    font: '36px Arial',
  })

  layer.append(label)
})()

;(function(){
  const scene = new Scene('#resize', {viewport:['auto', 'auto'], resolution: [770, 770]})

  const resolution = scene.resolution
  const viewport = scene.viewport

  const layer = scene.layer('fglayer')
  
  const label = new Label(`resolution: ${resolution} | viewport: ${viewport}`)
  label.attr({
    anchor: [0.5, 0.5],
    pos: [350, 350],
    font: '36px Arial',
  })

  layer.append(label)

  scene.on('viewportChange', function() {
    const viewport = scene.viewport
    label.text = `resolution: ${resolution} | viewport: ${viewport}`
  })
})()

;(function(){
  const scene = new Scene('#stickMode', {
    viewport:['auto', 'auto'], 
    resolution: [640, 1000],
    stickMode: 'width',
    // renderMode: 'repaintDirty',
  })

  heightBtn.addEventListener('change', function(evt) {
    stickMode.style.paddingBottom = `${50 + evt.target.value / 2}%`
    scene.updateViewport()
  })

  extendBtn.addEventListener('click', function(evt) {
    scene.stickExtend = evt.target.checked
    scene.updateViewport().updateResolution()
  })

  scene.preload({id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'},
    {id:'cloud', src: 'https://p5.ssl.qhimg.com/t01d2ff600bae7fe897.png'})
    .then(function(){
      const layer = scene.layer('fglayer')

      const cloud = new Sprite('cloud')
      cloud.attr({
        anchor: [0.5, 0],
        pos: [320, -50],
        size: [200, 130],
      })
      layer.append(cloud)

      function addRandomSnow(){
        const snow = new Sprite('snow')
        const x0 = 20 + Math.random() * 600, y0 = 0
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
          {y: -200, rotate: 0},
          {y: 2000, rotate: 1880},
        ], {
          duration: 15000,
          fill: 'forwards',          
        })

        dropAnim.finished.then(function() {
          snow.remove()
        })

        layer.append(snow)
      }

      setInterval(addRandomSnow, 200)
    })
})()
</script>
