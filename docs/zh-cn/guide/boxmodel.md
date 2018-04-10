## 盒模型

类似于 DOM 元素，spritejs 的元素也有自己的“盒模型”，具体来说，是指一个sprite元素有内容、padding、border，它们依照标准的规则占据一定的可视区域，另外由于元素还有transform，因此还有一个特殊的boundingRect。

我们用一张图来表示sprite元素的盒模型：

![box-model](https://p0.ssl.qhimg.com/t0180860d6757b2b1e7.png)

属性`sprite.contentSize`或`innerSize`表示是元素内容的宽高，给元素设置`attr('size', size)`改变的也是这个值。而在它外面是padding（如果有的话），再外面是border（如果有的话），它和padding、innerSize共同构成了元素的offsetSize以及originalRect。如果元素被旋转、缩放，那么它实际在canvas内占据的矩形则是boundingRect。我们看一下例子：


<div id="box-rect-demo">
  <div id="box-rect" class="sprite-container"></div>
  <div id="box-setting">
    <div>
      padding: <input id="paddingCtl" type="range" min="0" max="50" value="20"></input>
      <span id="paddingValue">20</span>
    </div>
    <div>
      border: &nbsp;&nbsp;&nbsp;<input id="borderCtl" type="range" min="0" max="20" value="5"></input>
      <span id="borderValue">5</span>
    </div>
    <div>
      rotate: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="rotateCtl" type="range" min="0" max="180" value="0"></input>
      <span id="rotateValue">0</span>
    </div>
    <div>
      size: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="sizeCtl" type="range" min="100" max="200" value="100"></input>
      <span id="sizeValue">100</span>
    </div>
    <hr/>
    <div>
      contentSize: <span  id="contentSize">100,100</span>
    </div>
    <div>
      clientSize:  <span id="clientSize">140,140</span>
    </div>
    <div>
      offsetSize: <span id="offsetSize">150,150</span>
    </div>
    <div>
      originalRect:  <span id="originalRect">-75,-75,150,150</span>
    </div>
    <div>
      boundingRect: <span  id="boundingRect">-75,-75,150,150</span>
    </div>
    <div>
      originalRenderRect: <span  id="originalRenderRect">310,225,150,150</span>
    </div>
    <div>
      renderRect: <span  id="renderRect">310,225,150,150</span>
    </div>
  </div>
</div>

```js
const scene = new Scene('#box-rect', {viewport:['auto', 'auto'], resolution: [770, 600]})
const layer = scene.layer('fglayer')

const s1 = new Path()
s1.attr({
  path: {
    d: 'M0,0L0,1L1,1L1,0z',
    transform: {scale: 100},
  },
  anchor: [0.5, 0.5],
  fillColor: '#f77',
  pos: [385, 300],
  padding: [20, 20, 20, 20],
  bgcolor: 'rgba(0, 0, 0, 0.3)',
  border: [5, 'black'],
  borderRadius: 10,
})

layer.append(s1)

function updateState() {
  contentSize.innerHTML = s1.contentSize
  clientSize.innerHTML = s1.clientSize
  offsetSize.innerHTML = s1.offsetSize
  originalRect.innerHTML = s1.originalRect
  boundingRect.innerHTML = s1.boundingRect
}
updateState()

paddingCtl.addEventListener('change', evt => {
  const value = evt.target.value
  s1.attr('padding', value)
  paddingValue.innerHTML = value
  updateState()
})

borderCtl.addEventListener('change', evt => {
  const value = evt.target.value
  s1.attr('border', [value])
  borderValue.innerHTML = value
  updateState()
})

rotateCtl.addEventListener('change', evt => {
  const value = evt.target.value
  s1.attr('rotate', [value])
  borderValue.innerHTML = value
  updateState()
})

sizeCtl.addEventListener('change', evt => {
  const value = evt.target.value
  const path = s1.attr('path')
  path.transform.scale = value
  s1.attr({path})
  borderValue.innerHTML = value
  updateState()
})

```


<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs
;(function(){
  const scene = new Scene('#box-rect', {viewport:['auto', 'auto'], resolution: [770, 600]})
  const layer = scene.layer('fglayer')

  const s1 = new Path()
  s1.attr({
    path: {
      d: 'M0,0L0,1L1,1L1,0z',
      transform: {scale: 100},
    },
    anchor: [0.5, 0.5],
    fillColor: '#f77',
    pos: [385, 300],
    padding: [20, 20, 20, 20],
    bgcolor: 'rgba(0, 0, 0, 0.3)',
    border: [5, 'black'],
    borderRadius: 10,
  })

  layer.append(s1)

  function updateState() {
    contentSize.innerHTML = s1.contentSize
    clientSize.innerHTML = s1.clientSize
    offsetSize.innerHTML = s1.offsetSize
    originalRect.innerHTML = s1.originalRect
    boundingRect.innerHTML = s1.boundingRect
    originalRenderRect.innerHTML = s1.originalRenderRect
    renderRect.innerHTML = s1.renderRect
  }
  updateState()

  paddingCtl.addEventListener('change', evt => {
    const value = evt.target.value
    s1.attr('padding', value)
    paddingValue.innerHTML = value
    updateState()
  })

  borderCtl.addEventListener('change', evt => {
    const value = evt.target.value
    s1.attr('border', [value])
    borderValue.innerHTML = value
    updateState()
  })

  rotateCtl.addEventListener('change', evt => {
    const value = evt.target.value
    s1.attr('rotate', [value])
    borderValue.innerHTML = value
    updateState()
  })

  sizeCtl.addEventListener('change', evt => {
    const value = evt.target.value
    const path = s1.attr('path')
    path.transform.scale = value
    s1.attr({path})
    borderValue.innerHTML = value
    updateState()
  })
}())
</script>

**注意一个细节**，originalRect和boundingRect的坐标原点是sprite元素的anchor points，因为我们把anchor设为了[0.5, 0.5]所以我们看到的坐标起始点是负值。另外我们还可以直接拿到renderRect和originRect，对应元素transform之前和之后在画布上的实际坐标。
