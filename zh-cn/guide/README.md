<style>
  #coordinate {
    height: 300px;
  }
  .sprite-container canvas {
    background-color: #333;
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

## 坐标系

我们知道，画布canvas的坐标范围它的宽高属性决定，而在网页中，canvas呈现在文档中的大小则由canvas对象的css样式决定，两者不一定相同。对应于spritejs，用**resolution**表示画布的宽高，而用**viewport**表示canvas呈现在文档中的宽高。

<div id="coordinate" class="sprite-container"></div>

```js
const demo1 = new Scene('#coordinate', {viewport: [770, 300], resolution: [1540, 600]})
const layer = demo1.layer()

const [width, height] = demo1.resolution
const viewport = demo1.viewport 

const label = new Label(`resolution: ${width}, ${height} | viewport: ${[...viewport]}`)

label.attr({
  anchor: [0.5, 0],
  pos: [width/2, 10],
  font: '32px Arial',
  fillColor: '#ccc',
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
const demo2 = new Scene('#adaptive')
const layer = demo2.layer()

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
  demo2.viewport = ['auto', 'auto']
}
```

<div id="adaptivesvg" class="sprite-container"></div>

## 精灵 Sprite

在spritejs中，Sprite是最基础的一个类，一个Sprite对象相当于DOM中的一个元素Element。同Element在文档流中一样，Sprite在Canvas画布上占有一个特定的区域。一个Sprite有自己的[盒模型](/zh-cn/guide/boxmodel)，通过设置它的属性，可以让它在Canvas画布上呈现出不同的背景颜色、边框，也可以让它出现在不同的坐标位置。

(未完待续)

<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs

;(function(){
  const demo1 = new Scene('#coordinate', {viewport: [770, 300], resolution: [1540, 600]})
  const layer = demo1.layer()
  
  const [width, height] = demo1.resolution
  const viewport = demo1.viewport 
  
  const label = new Label(`resolution: ${width}, ${height} | viewport: ${[...viewport]}`)

  label.attr({
    anchor: [0.5, 0],
    pos: [width/2, 10],
    font: '32px Arial',
    fillColor: '#ccc',
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
  const demo2 = new Scene('#adaptive')
  const layer = demo2.layer()
  
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
    console.log(111)
    demo2.viewport = ['auto', 'auto']
  })
}())

;(function() {
  const demo3 = new Scene('#adaptivesvg')
  const layer = demo3.layer()

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
    demo3.viewport = ['auto', 'auto']
    const [w, h] = demo3.viewport
    demo3.resolution = [w, h]
  })
}())

</script>