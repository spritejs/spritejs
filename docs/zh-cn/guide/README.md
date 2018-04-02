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

当我们不设置Scene的viewport时，spritejs会根据容器元素的实际占位（不是css宽高）来初始化大小。比如我们定义一个相对自适应的元素：

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

### 文字 Label

Label是用来显示文字的元素，可以显示单行或多行文字。通过Label的font属性可以改变字体样式、大小等，支持[css font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)字符串。与加载图片的精灵元素类似，如果Label不指定宽高，可以自适应宽高。文字可以通过设置textAlign属性修改对齐方式，默认是居左对齐，可以支持居中和居右对齐。文字还可以支持行高lineHeight属性，如果不设置这个属性，默认行高是font指定字体像素大小的1.2倍。通过设置padding属性能够让文字周围保留一定的空白。

<div id="label-text" class="sprite-container"></div>

```js
const scene = new Scene('#label-text', {resolution: [1540, 600]})
const layer = scene.layer('fglayer')

const text1 = new Label('SpriteJS.org')
text1.attr({
  pos: [100, 40],
  fillColor: '#707',
  font: "oblique small-caps bold 56px Arial",
  border: [2.5, '#ccc'],
})
layer.append(text1)

const text2 = new Label('从前有座\n灵剑山')
text2.attr({
  pos: [500, 40],
  fillColor: '#077',
  font: "64px 宋体",
  lineHeight: 112,
  textAlign: 'center',
  padding: [0, 30],
  border: [2.5, '#ccc'],
})
layer.append(text2)  

const text3 = new Label('Hello')
text3.attr({
  pos: [100, 240],
  strokeColor: '#fc7',
  font: "bold italic 70px Microsoft Yahei ",
  textAlign: 'center',
  padding: [0, 30],
  border: [2.5, '#ccc'],
})
layer.append(text3)  

function createClockTexts(text, x, y) {
  const len = text.length

  for(let i = 0; i < len; i++) {
    const char = text.charAt(i)
    const label = new Label(char)
    label.attr({
      anchor: [0.5, 4.5],
      pos: [x, y],
      font: 'bold 44px Arial',
      color: '#37c',
      rotate: i * 360 / len,
    })

    layer.append(label)
  }
}
createClockTexts('Sprite.js JavaScript Canvas...', 1200, 300)
```

label能够自适应大小，但是对于指定大小的Label，超出大小的部分文字将被遮挡，目前无法做到自动换行、撑开box等高级功能。这块内容后续可以通过为spritejs开发专门的文字类扩展库来实现。

### 路径 Path

前面的例子里我们已经见过Path的使用，这是一个强大的用来绘制矢量图形的基础类。

Path支持SVG的[Path路径](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths)，我们可以使用它来绘制复杂的几何图形。

<div id="svgpath" class="sprite-container"></div>

```js
const scene = new Scene('#svgpath', {resolution: [1540, 600]})
const layer = scene.layer('fglayer')

const p1 = new Path()
p1.attr({
  path: {
    d: 'M280,250A200,200,0,1,1,680,250A200,200,0,1,1,280,250Z',
    transform: {
      scale: 0.5,
    },
    trim: true,
  },
  strokeColor: '#033',
  fillColor: '#839',
  lineWidth: 12,
  pos: [100, 50],
})

layer.appendChild(p1)

const p2 = new Path()
p2.attr({
  path: {
    d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
    transform: {
      rotate: 45,
    },
    trim: true,
  },
  fillColor: '#ed8',
  pos: [450, 100],
})
layer.appendChild(p2)

const p3 = new Path()
p3.attr({
  path: {
    d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
    trim: true,
  },
  strokeColor: '#f37',
  lineWidth: 20,
  lineJoin: 'round',
  lineCap: 'round',
  pos: [1000, 100],
})
layer.appendChild(p3)
```

Path对象的path属性是一个非常重要而且强大的属性，通过它能够指定SVG Path的“d”属性，绘制一个矢量图形。path属性还包括transform，对矢量图进行变换。与精灵元素本身的transform不同的是，path的transform直接变换的是矢量路径，所以在进行缩放的时候能够保真。

<div id="svgpath-transform" class="sprite-container"></div>

可以看到左边的爱心在放大的时候会变模糊，右边则不会。因为右边是在放大的时候通过路径的transform重新生成的路径，这样可以保真，当然代价是运算量比较大，因此有利有弊，分场合使用。

```js
const scene = new Scene('#svgpath-transform', {resolution: [1540, 600]})
const layer = scene.layer('fglayer')
const d =  'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'

const heart1 = new Path()
heart1.attr({
  anchor: [0.5, 0.5],
  path: {
    d,
    transform: {
      rotate: 45,
    },
    trim: true,
  },
  fillColor: '#f33',
  pos: [300, 300],
})
layer.appendChild(heart1)

heart1.animate([
  {scale: 1},
  {scale: 10}
], {
  duration: 5000,
  iterations: Infinity,
  direction: 'alternate',
})

const heart2 = new Path()
heart2.attr({
  anchor: [0.5, 0.5],
  path: {
    d,
    transform: {
      rotate: 45,
    },
    trim: true,
  },
  fillColor: '#f33',
  pos: [900, 300],
})
heart2.animate([
  {path: {d, trim: true, transform:{rotate: 45, scale: 1}}},
  {path: {d, trim: true, transform:{rotate: 45, scale: 10}}},
], {
  duration: 5000,
  iterations: Infinity,
  direction: 'alternate',
})
layer.appendChild(heart2)
```

如上所见，使用Path对象可以绘制复杂的矢量图，不过我们需要对SVG的Path熟悉才会比较好用。spritejs本身不提供基础的简单图形的绘制，但我们可以使用[自定义绘图](/zh-cn/guide/userdraw)或者通过创建[自定义的精灵类型](/zh-cn/guide/nodes)来解决这样的需求。在未来，我们考虑提供专业的绘图扩展库，来解决各种图形相关的问题。

### 分组 Group

就像DOM元素可以嵌套一样，当我们要批量操作多个元素时，我们可以使用Group元素将其他元素放到Group元素下。

<div id="group" class="sprite-container"></div>

对于Group元素的操作就像操作普通精灵那样，因此当我们把几个不同的元素放进Group之后，直接操作Group就可以让Group中的所有元素一起随着Group运动。


```js
const scene = new Scene('#group', {resolution: [1540, 600]})
const layer = scene.layer('fglayer')
const group = new Group()
const arcD = 'M0 0L 50 0A50 50 0 0 1 43.3 25z'

group.attr({
  size: [300, 300],
  pos: [770, 300],
  anchor: [0.5, 0.5],
})
layer.append(group)

for(let i = 0; i < 6; i++) {
  const arc = new Path()
  arc.attr({
    path: {
      d: arcD,
      transform: {scale: 3, rotate: -15},
      trim: true,
    },
    pos: [150, 150],
    anchor: [0, 0.5],
    strokeColor: 'red',
    rotate: i * 60,
  })
  arc.attr('fillColor', `rgb(${i * 139 % 255}, 0, 0)`)
  group.append(arc)
}

group.animate([
  {rotate: 0},
  {rotate: 360},
], {
  duration: 3000,
  iterations: Infinity,
})
```

Group除了分组元素外，还有一个特别好的功能，那就是创建clip剪裁区域。

<div id="group-clip" class="sprite-container"></div>

```js
const imgUrl = 'https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg'
const scene = new Scene('#group-clip', {resolution: [1540, 600]})
const layer = scene.layer('fglayer')
const group = new Group()
group.attr({
  pos: [770, 300],
  anchor: [0.5, 0.5],
  clip: {d: 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z', transform: {scale: 15}},
})
layer.append(group)

const sprite = new Sprite(imgUrl)
sprite.attr({
  pos: [0, 0],
  scale: 0.75,
})
group.append(sprite)
```

Group的clip属性和Path的path属性一样，可以设置d，表示剪裁区域，并且设置transform和trim。

### 动画 Animate


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

;(function(){
  const scene = new Scene('#label-text', {resolution: [1540, 600]})
  const layer = scene.layer('fglayer')
  
  const text1 = new Label('SpriteJS.org')
  text1.attr({
    pos: [100, 40],
    fillColor: '#707',
    font: "oblique small-caps bold 56px Arial",
    border: [2.5, '#ccc'],
  })
  layer.append(text1)

  const text2 = new Label('从前有座\n灵剑山')
  text2.attr({
    pos: [500, 40],
    fillColor: '#077',
    font: "64px 宋体",
    lineHeight: 112,
    textAlign: 'center',
    padding: [0, 30],
    border: [2.5, '#ccc'],
  })
  layer.append(text2)  

  const text3 = new Label('Hello')
  text3.attr({
    pos: [100, 240],
    strokeColor: '#fc7',
    font: "bold italic 70px Microsoft Yahei ",
    textAlign: 'center',
    padding: [0, 30],
    border: [2.5, '#ccc'],
  })
  layer.append(text3)  

  function createClockTexts(text, x, y) {
    const len = text.length

    for(let i = 0; i < len; i++) {
      const char = text.charAt(i)
      const label = new Label(char)
      label.attr({
        anchor: [0.5, 4.5],
        pos: [x, y],
        font: 'bold 44px Arial',
        color: '#37c',
        rotate: i * 360 / len,
      })

      layer.append(label)
    }
  }
  createClockTexts('Sprite.js JavaScript Canvas...', 1200, 300)
}())

;(function(){
  const scene = new Scene('#svgpath', {resolution: [1540, 600]})
  const layer = scene.layer('fglayer')
  
  const p1 = new Path()
  p1.attr({
    path: {
      d: 'M280,250A200,200,0,1,1,680,250A200,200,0,1,1,280,250Z',
      transform: {
        scale: 0.5,
      },
      trim: true,
    },
    strokeColor: '#033',
    fillColor: '#839',
    lineWidth: 12,
    pos: [100, 50],
  })

  layer.appendChild(p1)

  const p2 = new Path()
  p2.attr({
    path: {
      d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
      transform: {
        rotate: 45,
      },
      trim: true,
    },
    fillColor: '#ed8',
    pos: [450, 100],
  })
  layer.appendChild(p2)

  const p3 = new Path()
  p3.attr({
    path: {
      d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
      trim: true,
    },
    strokeColor: '#f37',
    lineWidth: 20,
    lineJoin: 'round',
    lineCap: 'round',
    pos: [1000, 100],
  })
  layer.appendChild(p3)
}())

;(function(){
  const scene = new Scene('#svgpath-transform', {resolution: [1540, 600]})
  const layer = scene.layer('fglayer')
  const d =  'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'

  const heart1 = new Path()
  heart1.attr({
    anchor: [0.5, 0.5],
    path: {
      d,
      transform: {
        rotate: 45,
      },
      trim: true,
    },
    fillColor: '#f33',
    pos: [300, 300],
  })
  layer.appendChild(heart1)

  heart1.animate([
    {scale: 1},
    {scale: 10}
  ], {
    duration: 5000,
    iterations: Infinity,
    direction: 'alternate',
  })

  const heart2 = new Path()
  heart2.attr({
    anchor: [0.5, 0.5],
    path: {
      d,
      transform: {
        rotate: 45,
      },
      trim: true,
    },
    fillColor: '#f33',
    pos: [900, 300],
  })
  heart2.animate([
    {path: {d, trim: true, transform:{rotate: 45, scale: 1}}},
    {path: {d, trim: true, transform:{rotate: 45, scale: 10}}},
  ], {
    duration: 5000,
    iterations: Infinity,
    direction: 'alternate',
  })
  layer.appendChild(heart2)
}())

;(function(){
  const scene = new Scene('#group', {resolution: [1540, 600]})
  const layer = scene.layer('fglayer')
  const group = new Group()
  const arcD = 'M0 0L 50 0A50 50 0 0 1 43.3 25z'

  group.attr({
    size: [300, 300],
    pos: [770, 300],
    anchor: [0.5, 0.5],
  })
  layer.append(group)

  for(let i = 0; i < 6; i++) {
    const arc = new Path()
    arc.attr({
      path: {
        d: arcD,
        transform: {scale: 3, rotate: -15},
        trim: true,
      },
      pos: [150, 150],
      anchor: [0, 0.5],
      strokeColor: 'red',
      rotate: i * 60,
    })
    arc.attr('fillColor', `rgb(${i * 139 % 255}, 0, 0)`)
    group.append(arc)
  }

  group.animate([
    {rotate: 0},
    {rotate: 360},
  ], {
    duration: 3000,
    iterations: Infinity,
  })
}())

;(function(){
  const imgUrl = 'https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg'
  const scene = new Scene('#group-clip', {resolution: [1540, 600]})
  scene.preload({id: 'beauty', src: imgUrl})
    .then(function(){
      const layer = scene.layer('fglayer')
      const group = new Group()
      group.attr({
        pos: [770, 300],
        anchor: [0.5, 0.5],
        clip: {d: 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z', transform: {scale: 15}},
      })
      layer.append(group)

      const sprite = new Sprite('beauty')
      sprite.attr({
        pos: [-10, 0],
        scale: 0.75,
      })
      group.append(sprite)
    })
}())
</script>
