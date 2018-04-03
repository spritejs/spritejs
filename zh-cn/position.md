## 锚点和定位

### 锚点 anchor

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