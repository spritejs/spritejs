## 绘图尺寸

我们知道，画布canvas的坐标范围它的宽高属性决定，而在网页中，canvas呈现在文档中的大小则由canvas对象的css样式决定，两者不一定相同。对应于spritejs，用**resolution**表示画布的宽高，而用**viewport**表示canvas呈现在文档中的宽高。

```js
const scene = new Scene('#coordinate', {viewport:[770, 300], resolution: [1540, 600]})
```

在一般情况下我们可以不设置viewport，这样的话默认的viewport会根据容器自动调整，便于我们按照不同窗口来适配我们的canvas。

<div id="coordinate" class="sprite-container"></div>

```js
const scene = new Scene('#coordinate', {resolution: [1540, 600]})
const layer = scene.layer()

const [width, height] = scene.resolution
const viewport = scene.viewport 

const label = new Label(`resolution: ${[...scene.resolution]} | viewport: ${[...scene.viewport]}`)

label.attr({
  anchor: [0.5, 0],
  pos: [width/2, 10],
  font: '32px Arial',
  fillColor: '#aaa',
})

layer.append(label)

function createBox(x, size) {
  const box = new Label(`${size}px`)
  const bgcolor = `rgb(${size % 128 + 100}, ${size % 66}, ${size % 77})`

  box.attr({
    anchor: [0.5, 0],
    pos: [x, 100],
    size: [size, size],
    bgcolor,
    fillColor: '#eee',
    font: '24px Arial',
    textAlign: 'center',
  })
  return box
}

for(let i = 1, x = 200; i <= 4; i++) {
  const box = createBox(x, i * 100)
  x += 100 * (i + 1)
  layer.append(box)
}

window.addEventListener('resize', function(){
  scene.viewport = ['auto', 'auto']
  label.text = `resolution: ${[...scene.resolution]} | viewport: ${[...scene.viewport]}`
})
```

比如我们定义一个相对自适应的元素：

```css
#adaptive {
  width: 50%;
  padding-bottom: 50%;
}
```

<div id="adaptive" class="sprite-container"></div>

尝试改变窗口大小，可以看到canvas元素跟着窗口改变大小。

```js
const scene = new Scene('#adaptive')
const layer = scene.layer()

const [width, height] = layer.resolution

const path = new Path('M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z')

path.attr({
  anchor: [0.5, 0.5],
  pos: [width/2, height/2],
  fillColor: 'red',
  scale: 0.5,
})

layer.append(path)

window.onresize = function() {
  scene.viewport = ['auto', 'auto']
}
```

有时候，我们需要让canvas的宽度或高度其中一项自适应，但是我们又希望精灵元素保持宽高比例不变，此时我们可以在窗口大小改变的时候同动态修改Scene的**resolution**属性，一旦它被改变，所有Layer的resolution一同改变，并重新绘制元素。

<div id="adaptivesvg" class="sprite-container"></div>

尝试改变窗口大小，可以看到绘制的鹬鸵的大小比例并没有被改变。

```js
const scene = new Scene('#adaptivesvg')
const layer = scene.layer()

function createKiwi(x) {
  const kiwi = new Sprite('https://s1.ssl.qhres.com/static/e6a7d82354f52374.svg')

  kiwi.attr({
    pos: [x, 10],
    size: [120, 100],
  })

  return kiwi
}

for(let i = 0; i < 7; i++) {
  const kiwi = createKiwi(10 + i * 120)
  layer.append(kiwi)
}

window.addEventListener('resize', function() {
  scene.viewport = ['auto', 'auto']
  const [w, h] = scene.viewport
  scene.resolution = [w, h]
})
```

**注意**：微信小程序版spritejs采用不同于标准版的方式来管理绘图尺寸，具体可参考[高级用法：屏幕适配](/zh-cn/guide/resolution)

## 锚点 anchor

在前面的例子中，我们看到Sprite元素有不同的定位方式，具体表现为不同的anchor值。比如例1是`anchor:[0.5, 0]`，例2是`anchor:[0.5, 0.5]`，例3没有设定，是默认值`anchor:[0, 0]`。

在spritejs中，元素的anchor属性用来表示它的参考点，坐标定位、transform都是根据anchor值来设定的，默认值为[0, 0]，即以元素的左上角位置为参考点，正常值取0~1之间，表示参考点坐标相对于元素宽高的比例，因此如果设置为[1, 1]则为右下角。

调整anchor值，看看元素有什么变化：

anchor-x: <input id="anchorX" type="range" value="50"><br/>
anchor-y: <input id="anchorY" type="range" value="50">

<div id="anchor" class="sprite-container"></div>

```js
const scene = new Scene('#anchor', {resolution: [1540, 600]})
const layer = scene.layer()
const box = new Sprite({
  anchor: [0.5, 0.5],
  size: [200, 200],
  pos: [770, 300],
  gradients: {
    bgcolor: {
      vector: [0, 0, 200, 200],
      colors: [
        {offset: 0, color: 'red'},
        {offset: 1, color: 'green'},
      ]
    }
  }
})
layer.append(box)

const cross = new Path('M0 10L20 10M10 0L10 20')
cross.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  strokeColor: 'blue',
  lineWidth: 3,
})
layer.append(cross)

const label = new Label('anchorX: 0.5, anchorY: 0.5')
label.attr({
  pos: [20, 20],
  font: '26px Arial',
  fillColor: '#aaa',
})
layer.append(label)

box.animate([
  {rotate: 0},
  {rotate: 360},
], {
  iterations: Infinity,
  duration: 3000,
})

anchorX.addEventListener('change', function(evt) {
  const target = evt.target,
    [x, y] = box.attr('anchor')
  const value = target.value / 100

  box.attr('anchor', [value, y])
  label.text = `anchorX: ${value}, anchorY: ${y}`
})
anchorY.addEventListener('change', function(evt) {
  const target = evt.target,
    [x, y] = box.attr('anchor')
  const value = target.value / 100

  box.attr('anchor', [x, value])
  label.text = `anchorX: ${x}, anchorY: ${value}`
})
```


<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs

;(function(){
  const scene = new Scene('#coordinate', {resolution: [1540, 600]})
  const layer = scene.layer()
  
  const [width, height] = scene.resolution
  const viewport = scene.viewport 
  
  const label = new Label(`resolution: ${[...scene.resolution]} | viewport: ${[...scene.viewport]}`)

  label.attr({
    anchor: [0.5, 0],
    pos: [width/2, 10],
    font: '32px Arial',
    fillColor: '#aaa',
  })

  layer.append(label)

  function createBox(x, size) {
    const box = new Label(`${size}px`)
    const bgcolor = `rgb(${size % 128 + 100}, ${size % 66}, ${size % 77})`

    box.attr({
      anchor: [0.5, 0],
      pos: [x, 100],
      size: [size, size],
      bgcolor,
      fillColor: '#eee',
      font: '24px Arial',
      textAlign: 'center',
    })
    return box
  }

  for(let i = 1, x = 200; i <= 4; i++) {
    const box = createBox(x, i * 100)
    x += 100 * (i + 1)
    layer.append(box)
  }

  window.addEventListener('resize', function(){
    scene.viewport = ['auto', 'auto']
    label.text = `resolution: ${[...scene.resolution]} | viewport: ${[...scene.viewport]}`
  })
}())

;(function(){
  const scene = new Scene('#adaptive')
  const layer = scene.layer()
  
  const [width, height] = layer.resolution

  const path = new Path('M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z')

  path.attr({
    anchor: [0.5, 0.5],
    pos: [width/2, height/2],
    fillColor: 'red',
    scale: width / 800,
  })

  layer.append(path)

  window.addEventListener('resize', function() {
    scene.viewport = ['auto', 'auto']
  })
}())

;(function() {
  const scene = new Scene('#adaptivesvg')
  const layer = scene.layer()

  function createKiwi(x) {
    const kiwi = new Sprite('https://s1.ssl.qhres.com/static/e6a7d82354f52374.svg')

    kiwi.attr({
      pos: [x, 10],
      size: [120, 100],
    })

    return kiwi
  }

  for(let i = 0; i < 7; i++) {
    const kiwi = createKiwi(10 + i * 120)
    layer.append(kiwi)
  }

  window.addEventListener('resize', function() {
    scene.viewport = ['auto', 'auto']
    const [w, h] = scene.viewport
    scene.resolution = [w, h]
  })
}())

;(function(){
  const scene = new Scene('#anchor', {resolution: [1540, 600]})
  const layer = scene.layer()
  const box = new Sprite({
    anchor: [0.5, 0.5],
    size: [200, 200],
    pos: [770, 300],
    gradients: {
      bgcolor: {
        vector: [0, 0, 200, 200],
        colors: [
          {offset: 0, color: 'red'},
          {offset: 1, color: 'green'},
        ]
      }
    }
  })
  layer.append(box)

  const cross = new Path('M0 10L20 10M10 0L10 20')
  cross.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    strokeColor: 'blue',
    lineWidth: 3,
  })
  layer.append(cross)

  const label = new Label('anchorX: 0.5, anchorY: 0.5')
  label.attr({
    pos: [20, 20],
    font: '26px Arial',
    fillColor: '#aaa',
  })
  layer.append(label)

  box.animate([
    {rotate: 0},
    {rotate: 360},
  ], {
    iterations: Infinity,
    duration: 3000,
  })

  anchorX.addEventListener('change', function(evt) {
    const target = evt.target,
      [x, y] = box.attr('anchor')
    const value = target.value / 100

    box.attr('anchor', [value, y])
    label.text = `anchorX: ${value}, anchorY: ${y}`
  })
  anchorY.addEventListener('change', function(evt) {
    const target = evt.target,
      [x, y] = box.attr('anchor')
    const value = target.value / 100

    box.attr('anchor', [x, value])
    label.text = `anchorX: ${x}, anchorY: ${value}`
  })

  autoResize(scene)
}())
</script>
