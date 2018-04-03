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


<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs

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

  autoResize(scene)
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

  autoResize(scene)
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

  autoResize(scene)
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

  autoResize(scene)
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

  autoResize(scene)
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

  autoResize(scene)
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

  autoResize(scene)
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

  autoResize(scene)
}())
</script>