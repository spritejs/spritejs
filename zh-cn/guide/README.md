<style>
  .sprite-container {
    width: 100%;
    height: 300px;
  }
  .sprite-container canvas {
    border: solid 2px #333;
  }
  #coordinate {
    height: 300px;
  }
  #adaptive {
    width: 50%;
    padding-bottom: 50%;
  }
  #adaptivesvg {
    width: 80%;
    height: 120px;
    margin: auto;
  }
  #adaptivesvg canvas {
    background-color: #ddd;
  }
</style>

## 绘图尺寸

我们知道，画布canvas的坐标范围它的宽高属性决定，而在网页中，canvas呈现在文档中的大小则由canvas对象的css样式决定，两者不一定相同。对应于spritejs，用**resolution**表示画布的宽高，而用**viewport**表示canvas呈现在文档中的宽高。

<div id="coordinate" class="sprite-container"></div>

```js
const scene = new Scene('#coordinate', {viewport: [770, 300], resolution: [1540, 600]})
const layer = scene.layer()

const [width, height] = scene.resolution
const viewport = scene.viewport 

const label = new Label(`resolution: ${width}, ${height} | viewport: ${[...viewport]}`)

label.attr({
  anchor: [0.5, 0],
  pos: [width/2, 10],
  font: '32px Arial',
  fillColor: '#aaa',
})

layer.append(label)

function createBox(x, size) {
  const box = new Label(`${size}px`)
  const bgcolor = `rgb(${size % 128 + 128}, ${size % 100 + 59}, 0)`

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
```

当我们不设置Scene的resolution和viewport时，spritejs会根据容器元素的实际占位（不是css宽高）来初始化大小。比如我们定义一个相对自适应的元素：

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

有时候，我们需要让canvas的宽度或高度自适应，但是我们又希望精灵元素保持宽高比例不变，此时我们可以在窗口大小改变的时候同动态修改Scene的**resolution**属性，一旦它被改变，所有Layer的resolution一同改变，并重新绘制元素。

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

anchor-x: <input id="anchorX" type="range" value="50"> 
anchor-y: <input id="anchorY" type="range" value="50">

<div id="anchor" class="sprite-container"></div>

```js
const scene = new Scene('#anchor', {resolution: [1540, 600]})
const layer = scene.layer()
const box = new Sprite({
  anchor: [0.5, 0.5],
  size: [100, 100],
  pos: [770, 300],
  gradients: {
    bgcolor: {
      vector: [0, 0, 100, 100],
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

anchorX.addEventListener('change', evt => {
  const target = evt.target,
    [x, y] = box.attr('anchor')
  const value = target.value / 100

  box.attr('anchor', [value, y])
  label.text = `anchorX: ${value}, anchorY: ${y}`
})
anchorY.addEventListener('change', evt => {
  const target = evt.target,
    [x, y] = box.attr('anchor')
  const value = target.value / 100

  box.attr('anchor', [x, value])
  label.text = `anchorX: ${x}, anchorY: ${value}`
})
```

## 精灵 Sprite

在spritejs中，Sprite是最基础的一个类，一个Sprite对象相当于DOM中的一个元素Element。同Element在文档流中一样，Sprite在Canvas画布上占有一个特定的区域。一个Sprite有自己的[盒模型](/zh-cn/guide/boxmodel)，通过设置它的基本属性，可以让它在Canvas画布上呈现出不同的背景颜色、边框，也可以让它出现在不同的坐标位置。

### 设置边框和大小

spritejs里，一个不具有textures的Sprite元素默认大小为0，即使将它添加到指定Layer，也是不会被显示出来的。我们给元素设定大小，再设定一个边框，就能让它在画布上呈现出来。

<div id="border-and-size" class="sprite-container"></div>

不同线宽、大小、圆角的border：

```js
  const scene = new Scene('#border-and-size', {resolution: [1540, 600]})
  const layer = scene.layer()

  const box1 = new Sprite({
    size: [100, 100],
    pos: [100, 100],
    border: [2, '#f77'],
  })
  const box2 = new Sprite({
    size: [200, 200],
    pos: [300, 100],
    border: [4, '#7c7'],
    borderRadius: 20,
  })
  const box3 = new Sprite({
    size: [300, 300],
    pos: [600, 100],
    border: [6, '#77c'],
    borderRadius: 50,
  })
  const box4 = new Sprite({
    size: [400, 400],
    pos: [1000, 100],
    border: [8, '#c7c'],
    borderRadius: 200,
  })
  layer.append(box1, box2, box3, box4)
```

### 填充背景色

spritejs背景色填充只需要设置bgcolor属性，支持所有css允许的颜色类型，最常用的是rgb和rgba。

<div id="bgcolor" class="sprite-container"></div>

```js
const scene = new Scene('#bgcolor', {resolution: [1540, 600]})
const layer = scene.layer()

const box1 = new Sprite({
  size: [100, 100],
  pos: [100, 100],
  bgcolor: 'red',
})
const box2 = new Sprite({
  size: [200, 200],
  pos: [300, 100],
  bgcolor: '#7c7',
  borderRadius: 20,
})
const box3 = new Sprite({
  size: [300, 300],
  pos: [600, 100],
  bgcolor: 'rgba(192, 128, 192, 0.5)',
  borderRadius: 50,
})
const box4 = new Sprite({
  size: [400, 400],
  pos: [1000, 100],
  bgcolor: 'hsl(180,50%,50%)',
  borderRadius: 200,
})
layer.append(box1, box2, box3, box4) 
```

### 加载图片

在spritejs中，一个sprite元素可以加载一张或多张图片，加载图片最简单的方式就是直接设置Sprite元素的textures属性，将其中的内容设置为对应的图片的URL。

<div id="textures" class="sprite-container"></div>

如果指定图片不设置元素大小，sprite元素默认宽高为图片宽高（微信小程序版除外），如果设置元素大小，sprite图片默认大小被缩放为元素大小。此外，我们可以通过指定rect，来控制图片被加载到元素的哪个位置，这样我们可以平铺加载多张图片。最后，我们还可以通过指定srcRect来裁剪要加载的图片。以上是精灵图片的基本用法，更多加载图片相关的内容，参考[高级用法：资源加载与雪碧图](/zh-cn/guide/resource)。

```js
const scene = new Scene('#textures', {resolution: [1540, 600]})
const layer = scene.layer()
const texture = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'

const s1 = new Sprite(texture)
s1.attr({
  pos: [100, 20],
  border: [2, 'grey'],
})

const s2 = new Sprite(texture)
s2.attr({
  size: [190, 269],
  border: [2, 'grey'],
  pos: [500, 20],
})

const s3 = new Sprite()
s3.attr({
  textures: [{src: texture, rect:[0, 0, 190, 268]}, {src: texture, rect:[192, 0, 190, 268]}],
  border: [2, 'grey'],
  pos: [500, 300],
})

const s4 = new Sprite()
s4.attr({
  textures: [
    {src: texture, rect:[0, 0, 190, 268], srcRect: [0, 0, 190, 268]}, 
    {src: texture, rect:[200, 278, 190, 268], srcRect: [191, 269, 190, 268]},
    {src: texture, rect:[0, 278, 190, 268], srcRect: [0, 269, 190, 268]},
    {src: texture, rect:[200, 0, 190, 268], srcRect: [191, 0, 190, 268]},
  ],
  border: [2, 'grey'],
  pos: [1000, 20],    
})

layer.append(s1, s2, s3, s4)
```


<!-- javascript -->
<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs

;(function(){
  const scene = new Scene('#coordinate', {viewport: [770, 300], resolution: [1540, 600]})
  const layer = scene.layer()
  
  const [width, height] = scene.resolution
  const viewport = scene.viewport 
  
  const label = new Label(`resolution: ${width}, ${height} | viewport: ${[...viewport]}`)

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
    size: [100, 100],
    pos: [770, 300],
    gradients: {
      bgcolor: {
        vector: [0, 0, 100, 100],
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

  anchorX.addEventListener('change', evt => {
    const target = evt.target,
      [x, y] = box.attr('anchor')
    const value = target.value / 100

    box.attr('anchor', [value, y])
    label.text = `anchorX: ${value}, anchorY: ${y}`
  })
  anchorY.addEventListener('change', evt => {
    const target = evt.target,
      [x, y] = box.attr('anchor')
    const value = target.value / 100

    box.attr('anchor', [x, value])
    label.text = `anchorX: ${x}, anchorY: ${value}`
  })
}())

;(function(){
  const scene = new Scene('#border-and-size', {resolution: [1540, 600]})
  const layer = scene.layer()

  const box1 = new Sprite({
    size: [100, 100],
    pos: [100, 100],
    border: [2, '#f77'],
  })
  const box2 = new Sprite({
    size: [200, 200],
    pos: [300, 100],
    border: [4, '#7c7'],
    borderRadius: 20,
  })
  const box3 = new Sprite({
    size: [300, 300],
    pos: [600, 100],
    border: [6, '#77c'],
    borderRadius: 50,
  })
  const box4 = new Sprite({
    size: [400, 400],
    pos: [1000, 100],
    border: [8, '#c7c'],
    borderRadius: 200,
  })
  layer.append(box1, box2, box3, box4)
})()

;(function(){
  const scene = new Scene('#bgcolor', {resolution: [1540, 600]})
  const layer = scene.layer()

  const box1 = new Sprite({
    size: [100, 100],
    pos: [100, 100],
    bgcolor: 'red',
  })
  const box2 = new Sprite({
    size: [200, 200],
    pos: [300, 100],
    bgcolor: '#7c7',
    borderRadius: 20,
  })
  const box3 = new Sprite({
    size: [300, 300],
    pos: [600, 100],
    bgcolor: 'rgba(192, 128, 192, 0.5)',
    borderRadius: 50,
  })
  const box4 = new Sprite({
    size: [400, 400],
    pos: [1000, 100],
    bgcolor: 'hsl(180,50%,50%)',
    borderRadius: 200,
  })
  layer.append(box1, box2, box3, box4)  
}())

;(function(){
  const scene = new Scene('#textures', {resolution: [1540, 600]})
  const layer = scene.layer()
  const texture = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png'

  const s1 = new Sprite(texture)
  s1.attr({
    pos: [100, 20],
    border: [2, 'grey'],
  })

  const s2 = new Sprite(texture)
  s2.attr({
    size: [190, 269],
    border: [2, 'grey'],
    pos: [500, 20],
  })

  const s3 = new Sprite()
  s3.attr({
    textures: [{src: texture, rect:[0, 0, 190, 268]}, {src: texture, rect:[192, 0, 190, 268]}],
    border: [2, 'grey'],
    pos: [500, 300],
  })

  const s4 = new Sprite()
  s4.attr({
    textures: [
      {src: texture, rect:[0, 0, 190, 268], srcRect: [0, 0, 190, 268]}, 
      {src: texture, rect:[200, 278, 190, 268], srcRect: [191, 269, 190, 268]},
      {src: texture, rect:[0, 278, 190, 268], srcRect: [0, 269, 190, 268]},
      {src: texture, rect:[200, 0, 190, 268], srcRect: [191, 0, 190, 268]},
    ],
    border: [2, 'grey'],
    pos: [1000, 20],    
  })

  layer.append(s1, s2, s3, s4)
}())
</script>
