## 响应 DOM 事件

Scene 自动代理了 mouse 和 touch 相关事件，因此要监听这些事件非常简单，直接使用 spirte.on 方法即可。

移动鼠标：

<div id="dom-events" class="sprite-container"></div>

```js
const scene = new Scene('#dom-events', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer('fglayer')

const s1 = new Sprite()
s1.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  size: [300, 300],
  rotate: 45,
  bgcolor: '#3c7',
})

layer.append(s1)

s1.on('mouseenter', evt => {
  s1.attr('border', [4, 'blue'])
})
s1.on('mouseleave', evt => {
  s1.attr('border', [0, ''])
})

const anchorCross = new Path('M0,10H10,20M10,0V10,20')
anchorCross.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  strokeColor: 'red',
  rotate: 45,
  lineWidth: 4,
})

layer.append(anchorCross)

const label = new Label('鼠标位置：')

label.attr({
  pos: [20, 50],
  font: "32px Arial",
  lineHeight: 56,
})

layer.append(label)

layer.on('mousemove', evt => {
  const {x, y, targetSprites} = evt

  label.text = `鼠标位置：\n相对于 layer: ${x}, ${y}`

  if(targetSprites.length && targetSprites.includes(s1)) {
    const [offsetX, offsetY] = s1.pointToOffset(x, y).map(Math.round)
    label.text += `\n相对于元素：${offsetX}, ${offsetY}` 
  }
})
```

spritejs的事件触发规则是基于坐标位置（主要是mouse和touch坐标），在事件触发的坐标位置上所有精灵元素都会触发相应事件，事件触发的顺序是按照精灵的层级关系，**`zIndex`大的元素先触发，如果两个元素的`zIndex`相同，那么比较`zOrder`，即元素添加到layer的次序，`zOrder`大或者说元素添加次序较晚的先触发。当所有应当触发事件的元素触发完成之后，最后是layer的事件被触发。**。当layer的事件触发时，从layer的事件参数中可以拿到targetSprites数组，表示当前layer中之前已经触发过的所有元素的。

上面的例子里，我们通过layer的`mousemove`事件的targetSprites参数来判断s1是否被触发，如果触发，通过evt.x、evt.y拿到鼠标相对于layer的坐标，然后再通过`s1.pointToOffset`，可以得到鼠标相对于s1元素的相对坐标（以anchor point为坐标原点）。不过这样做有点麻烦，我们可以直接在s1上也注册`mousemove`事件，这样我们可以通过事件参数的`offsetX、offsetY`直接拿到鼠标的相对位置。但是，我们需要解决一个问题——

## 阻止事件继续传播

我们可以同时在layer和s1上注册mousemove事件，以修改label的提示文字。但是，如果鼠标停留在s1上时，我们不能让layer的mousemove事件仍被触发，否则的话文字就会被覆盖。在sprite提供的事件参数中，`stopDispatch()`方法正是用来阻止事件从当前的元素向下一个元素传播的。利用它就可以实现元素之间的遮挡。

<div id="dom-events-stop-dispatch" class="sprite-container"></div>

```js
const scene = new Scene('#dom-events-stop-dispatch', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer('fglayer')

const s1 = new Sprite()
s1.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  size: [300, 300],
  rotate: 45,
  bgcolor: '#3c7',
})

layer.append(s1)

s1.on('mouseenter', evt => {
  s1.attr('border', [4, 'blue'])
})
s1.on('mouseleave', evt => {
  s1.attr('border', [0, ''])
})

const anchorCross = new Path('M0,10H10,20M10,0V10,20')
anchorCross.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  strokeColor: 'red',
  rotate: 45,
  lineWidth: 4,
})

layer.append(anchorCross)

const label = new Label('鼠标位置：')

label.attr({
  pos: [20, 50],
  font: "32px Arial",
  lineHeight: 56,
})

layer.append(label)

layer.on('mousemove', evt => {
  const {x, y, targetSprites} = evt

  label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}`
})

s1.on('mousemove', evt => {
  let {x, y, offsetX, offsetY} = evt
  label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}\n相对于元素：${Math.round(offsetX)}, ${Math.round(offsetY)}` 

  evt.stopDispatch()
})
```

## 利用 zIndex 和 stopDispatch 遮挡

比如我们可以利用改变元素的zIndex和stopDispatch来实现元素间的拖拽。

<div id="dragdrop" class="sprite-container"></div>

```js
const scene = new Scene('#dragdrop', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer('fglayer')
let zIndex = 1

function draggable(sprite) {
  if(sprite.isDraggable) return
  
  sprite.isDraggable = true

  let x0, y0, startPos

  function onMouseMove(evt) {
    const dx = evt.x - x0,
      dy = evt.y - y0
    
    sprite.attr('pos', [startPos[0] + dx, startPos[1] + dy])
    evt.stopDispatch()
  }

  sprite.on('mousedown', evt => {
    x0 = evt.x
    y0 = evt.y
    startPos = sprite.attr('pos')
    sprite.attr('zIndex', zIndex++)
    layer.on('mousemove', onMouseMove)
    evt.stopDispatch()
  })

  document.documentElement.addEventListener('mouseup', () => {
    layer.off('mousemove', onMouseMove)
  })

  return sprite
}

const s1 = new Sprite()
s1.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  size: [200, 200],
  rotate: 45,
  bgcolor: '#3c7',
})

const s2 = new Sprite()
s2.attr({
  anchor: [0.5, 0.5],
  pos: [270, 300],
  size: [200, 200],
  bgcolor: '#c37',
})

const s3 = new Sprite()
s3.attr({
  anchor: [0.5, 0.5],
  pos: [1270, 300],
  size: [200, 200],
  bgcolor: '#73c',
})


layer.append(...[s1, s2, s3].map(draggable))

layer.on('mousemove', evt => {
  if(evt.targetSprites.some(target => target.isDraggable)){
    scene.container.style.cursor = 'move'
  } else {
    scene.container.style.cursor = 'default'
  }
})
```


<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs

;(function(){
  const scene = new Scene('#dom-events', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer('fglayer')

  const s1 = new Sprite()
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [300, 300],
    rotate: 45,
    bgcolor: '#3c7',
  })

  layer.append(s1)

  s1.on('mouseenter', evt => {
    s1.attr('border', [4, 'blue'])
  })
  s1.on('mouseleave', evt => {
    s1.attr('border', [0, ''])
  })

  const anchorCross = new Path('M0,10H10,20M10,0V10,20')
  anchorCross.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    strokeColor: 'red',
    rotate: 45,
    lineWidth: 4,
  })

  layer.append(anchorCross)

  const label = new Label('鼠标位置：')

  label.attr({
    pos: [20, 50],
    font: "32px Arial",
    lineHeight: 56,
  })

  layer.append(label)

  layer.on('mousemove', evt => {
    const {x, y, targetSprites} = evt

    label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}`

    if(targetSprites.length && targetSprites.includes(s1)) {
      const [offsetX, offsetY] = s1.pointToOffset(x, y).map(Math.round)
      label.text += `\n相对于元素：${offsetX}, ${offsetY}` 
    }
  })
}())

;(function(){
  const scene = new Scene('#dom-events-stop-dispatch', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer('fglayer')

  const s1 = new Sprite()
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [300, 300],
    rotate: 45,
    bgcolor: '#3c7',
  })

  layer.append(s1)

  s1.on('mouseenter', evt => {
    s1.attr('border', [4, 'blue'])
  })
  s1.on('mouseleave', evt => {
    s1.attr('border', [0, ''])
  })

  const anchorCross = new Path('M0,10H10,20M10,0V10,20')
  anchorCross.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    strokeColor: 'red',
    rotate: 45,
    lineWidth: 4,
  })

  layer.append(anchorCross)

  const label = new Label('鼠标位置：')

  label.attr({
    pos: [20, 50],
    font: "32px Arial",
    lineHeight: 56,
  })

  layer.append(label)

  layer.on('mousemove', evt => {
    const {x, y, targetSprites} = evt

    label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}`
  })

  s1.on('mousemove', evt => {
    let {x, y, offsetX, offsetY} = evt
    label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}\n相对于元素：${Math.round(offsetX)}, ${Math.round(offsetY)}` 

    evt.stopDispatch()
  })
}())

;(function(){
  const scene = new Scene('#dragdrop', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer('fglayer')
  let zIndex = 1

  function draggable(sprite) {
    if(sprite.isDraggable) return
    
    sprite.isDraggable = true

    let x0, y0, startPos

    function onMouseMove(evt) {
      const dx = evt.x - x0,
        dy = evt.y - y0
      
      sprite.attr('pos', [startPos[0] + dx, startPos[1] + dy])
      evt.stopDispatch()
    }

    sprite.on('mousedown', evt => {
      x0 = evt.x
      y0 = evt.y
      startPos = sprite.attr('pos')
      sprite.attr('zIndex', zIndex++)
      layer.on('mousemove', onMouseMove)
      evt.stopDispatch()
    })

    document.documentElement.addEventListener('mouseup', () => {
      layer.off('mousemove', onMouseMove)
    })

    return sprite
  }

  const s1 = new Sprite()
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [200, 200],
    rotate: 45,
    bgcolor: '#3c7',
  })

  const s2 = new Sprite()
  s2.attr({
    anchor: [0.5, 0.5],
    pos: [270, 300],
    size: [200, 200],
    bgcolor: '#c37',
  })

  const s3 = new Sprite()
  s3.attr({
    anchor: [0.5, 0.5],
    pos: [1270, 300],
    size: [200, 200],
    bgcolor: '#73c',
  })


  layer.append(...[s1, s2, s3].map(draggable))

  layer.on('mousemove', evt => {
    if(evt.targetSprites.some(target => target.isDraggable)){
      scene.container.style.cursor = 'move'
    } else {
      scene.container.style.cursor = 'default'
    }
  })

}())
</script>
