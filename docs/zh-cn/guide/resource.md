## 图片的异步加载

spritejs支持图片URL作为资源，我们前面已经看过，我们可以把URL作为texture直接传给Sprite的textures属性。但是，因为网络图片资源是异步加载的，这会可能导致sprite的异步显示以及我们拿到的sprite的contentSize为0。

<div id="load-texture" class="sprite-container"></div>

获取图片大小之所以为0，是因为当我们把label添加到layer上的时候，图片还没有完成加载，因此此时的sprite里没有内容来撑开宽高，所以得到的大小就是0。

```js
const scene = new Scene('#load-texture', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer()

const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png')
robot.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  scale: 0.5,
})

layer.append(robot)

const label = new Label(`图片大小： ${robot.contentSize}`)
label.attr({
  anchor: [0.5, 0.5],
  pos: [770, 100],
  font: '36px Arial',
})

layer.append(label)
```

scene提供了`preload`方法来预加载和保存图片资源。这个方法可以接受一个或多个图片数据，返回一个promise对象。

<div id="preload-texture" class="sprite-container"></div>

我们通过preload事先预加载并缓存了图片，所以我们使用id:'robot'来创建sprite时，就可以立即显示出来，并得到contentSize。

```js
const scene = new Scene('#preload-texture', {viewport:['auto', 'auto'], resolution: [1540, 600]})

scene.preload({
  id: 'robot',
  src: 'https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png'
}).then(function(){
  const layer = scene.layer()

  const robot = new Sprite('robot')
  robot.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    scale: 0.5,
  })

  layer.append(robot)

  const label = new Label(`图片大小： ${robot.contentSize}`)
  label.attr({
    anchor: [0.5, 0.5],
    pos: [770, 100],
    font: '36px Arial',
  })

  layer.append(label)
})
```

## 雪碧图

与css雪碧图一样，spritejs也支持雪碧图。spritejs支持[texture packer](https://www.codeandweb.com/texturepacker)生成的标准JSON雪碧图。

<div id="texturepacker" class="sprite-container"></div>

使用雪碧图可以有效减少HTTP请求，从而提高响应速度。

```js
const scene = new Scene('#texturepacker', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const earthPNG = 'https://p3.ssl.qhimg.com/t01806718065fe97c65.png',
  earthJSON = 'https://s3.ssl.qhres.com/static/d479c28f553c6cff.json'

scene.preload(
  [earthPNG, earthJSON]
).then(function(){
  const layer = scene.layer()
  const group = new Group()
  group.attr({
    pos: [655, 215],
  })

  const earth = new Sprite()
  earth.attr({
    textures: 'earth_blue.png',
    pos: [115, 115],
    anchor: [0.5, 0.5],
  })
  const earthShadow = new Sprite()
  earthShadow.attr({
    textures: 'earth_shadow2.png',
    pos: [0, 0],
  })

  group.append(earth, earthShadow)
  layer.append(group)

  earth.animate([
    {rotate: 0, textures: 'earth_blue.png'},
    {rotate: 360, textures: 'earth_yellow.png'},
    {rotate: 720, textures: 'earth_green.png'},
    {rotate: 1080, textures: 'earth_white.png'},
    {rotate: 1440, textures: 'earth_blue.png'},
  ], {
    duration: 20000,
    iterations: Infinity,
  })
})
```

## 批量资源预加载进度

有时候，我们要预加载大量的资源，此时我们可以在preload的时候显示一个进度。

<div id="preload-many" class="sprite-container"></div>

我们可以监听scene的preload事件来获取资源加载的进度，因为例子里这些图片不大，所以加载还是很快，可能需要打开控制台，模拟慢速网络才能看到效果。

```js
const scene = new Scene('#preload-many', {viewport:['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer()

const images = [
  'https://p1.ssl.qhimg.com/t016dc86e4b2c9b83a4.jpg',
  'https://p0.ssl.qhimg.com/t01408bb4e2bed11d2e.jpg',
  'https://p2.ssl.qhimg.com/t014e6d3eddccf40638.jpg',
  'https://p2.ssl.qhimg.com/t014db3a8e2bf146c5b.jpg',
  'https://p4.ssl.qhimg.com/t01ff1bf2a37a741821.jpg',
  'https://p2.ssl.qhimg.com/t01dc1341ab5d0fe663.jpg',
  'https://p5.ssl.qhimg.com/t01a0acf6aa37d00f91.jpg',
  'https://p1.ssl.qhimg.com/t013b8514570a69a1c8.jpg',
  'https://p2.ssl.qhimg.com/t011c71494e6d98d92b.jpg',
  'https://p4.ssl.qhimg.com/t01ab40609e924d995c.jpg',
  'https://p0.ssl.qhimg.com/t01794495bebb84f47d.jpg',
  'https://p4.ssl.qhimg.com/t01a30bb66a9d11d624.jpg',
  'https://p4.ssl.qhimg.com/t01b3d2c0b0093a957d.jpg',
  'https://p0.ssl.qhimg.com/t010da5e7311c8dd3a9.jpg',
  'https://p5.ssl.qhimg.com/t0189dd547c322b2357.jpg',
  'https://p4.ssl.qhimg.com/t01feb50457ebbada10.jpg',
]

function loadRes() {
  scene.on('preload', function(evt) {
    label.text = `加载中... ${evt.loaded.length} / ${evt.resources.length}`
  })
  scene.preload(...images).then(function(imgs){
    label.remove()
    button.remove()
    imgs.forEach(function({texture}, i) {
      const sprite = new Sprite()
      sprite.attr({
        textures: [texture],
        x: 125 + (i % 8) * 170,
        y: 100 + Math.floor(i / 8) * 200,
        size: [150, 150],
      })
      layer.append(sprite)
    })
  })
}

const label = new Label('加载中... 0 / 16')
label.attr({
  anchor: [0.5, 0.5],
  font: '36px Arial',
  pos: [770, 200],
})

layer.append(label)

const button = new Label('点击加载')
button.attr({
  anchor: [0.5, 0.5],
  font: '44px Arial',
  pos: [770, 350],
  border: [2, 'black'],
  borderRadius: 12,
  padding: [10, 10],
})
layer.append(button)

button.on('mouseenter', function(evt) {
  scene.container.style.cursor = 'pointer'
})
button.on('mouseleave', function(evt) {
  scene.container.style.cursor = 'default'
})
button.on('mousedown', function(evt) {
  evt.target.attr('scale', 0.8)
})
button.on('mouseup', function(evt) {
  evt.target.attr('scale', 1)
  loadRes()
})
```


<script>
const {Scene, Layer, Sprite, Label, Path, Group} = spritejs

;(function(){
  const scene = new Scene('#load-texture', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer()

  const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png')
  robot.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    scale: 0.5,
  })

  layer.append(robot)

  const label = new Label(`图片大小： ${robot.contentSize}`)
  label.attr({
    anchor: [0.5, 0.5],
    pos: [770, 100],
    font: '36px Arial',
  })

  layer.append(label)
}())

;(function(){
  const scene = new Scene('#preload-texture', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  
  scene.preload({
    id: 'robot',
    src: 'https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png'
  }).then(function(){
    const layer = scene.layer()

    const robot = new Sprite('robot')
    robot.attr({
      anchor: [0.5, 0.5],
      pos: [770, 300],
      scale: 0.5,
    })

    layer.append(robot)

    const label = new Label(`图片大小： ${robot.contentSize}`)
    label.attr({
      anchor: [0.5, 0.5],
      pos: [770, 100],
      font: '36px Arial',
    })

    layer.append(label)
  })
}())

;(function(){
  const scene = new Scene('#texturepacker', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const earthPNG = 'https://p3.ssl.qhimg.com/t01806718065fe97c65.png',
    earthJSON = 'https://s3.ssl.qhres.com/static/d479c28f553c6cff.json'

  scene.preload(
    [earthPNG, earthJSON]
  ).then(function(){
    const layer = scene.layer()
    const group = new Group()
    group.attr({
      pos: [655, 215],
    })

    const earth = new Sprite()
    earth.attr({
      textures: 'earth_blue.png',
      pos: [115, 115],
      anchor: [0.5, 0.5],
    })
    const earthShadow = new Sprite()
    earthShadow.attr({
      textures: 'earth_shadow2.png',
      pos: [0, 0],
    })

    group.append(earth, earthShadow)
    layer.append(group)

    earth.animate([
      {rotate: 0, textures: 'earth_blue.png'},
      {rotate: 360, textures: 'earth_yellow.png'},
      {rotate: 720, textures: 'earth_green.png'},
      {rotate: 1080, textures: 'earth_white.png'},
      {rotate: 1440, textures: 'earth_blue.png'},
    ], {
      duration: 20000,
      iterations: Infinity,
    })
  })
}())

;(function(){
  const scene = new Scene('#preload-many', {viewport:['auto', 'auto'], resolution: [1540, 600]})
  const layer = scene.layer()

  const images = [
    'https://p1.ssl.qhimg.com/t016dc86e4b2c9b83a4.jpg',
    'https://p0.ssl.qhimg.com/t01408bb4e2bed11d2e.jpg',
    'https://p2.ssl.qhimg.com/t014e6d3eddccf40638.jpg',
    'https://p2.ssl.qhimg.com/t014db3a8e2bf146c5b.jpg',
    'https://p4.ssl.qhimg.com/t01ff1bf2a37a741821.jpg',
    'https://p2.ssl.qhimg.com/t01dc1341ab5d0fe663.jpg',
    'https://p5.ssl.qhimg.com/t01a0acf6aa37d00f91.jpg',
    'https://p1.ssl.qhimg.com/t013b8514570a69a1c8.jpg',
    'https://p2.ssl.qhimg.com/t011c71494e6d98d92b.jpg',
    'https://p4.ssl.qhimg.com/t01ab40609e924d995c.jpg',
    'https://p0.ssl.qhimg.com/t01794495bebb84f47d.jpg',
    'https://p4.ssl.qhimg.com/t01a30bb66a9d11d624.jpg',
    'https://p4.ssl.qhimg.com/t01b3d2c0b0093a957d.jpg',
    'https://p0.ssl.qhimg.com/t010da5e7311c8dd3a9.jpg',
    'https://p5.ssl.qhimg.com/t0189dd547c322b2357.jpg',
    'https://p4.ssl.qhimg.com/t01feb50457ebbada10.jpg',
  ]

  function loadRes() {
    scene.on('preload', function(evt) {
      label.text = `加载中... ${evt.loaded.length} / ${evt.resources.length}`
    })
    scene.preload(...images).then(function(imgs){
      label.remove()
      button.remove()
      imgs.forEach(function({texture}, i) {
        const sprite = new Sprite()
        sprite.attr({
          textures: [texture],
          x: 125 + (i % 8) * 170,
          y: 100 + Math.floor(i / 8) * 200,
          size: [150, 150],
        })
        layer.append(sprite)
      })
    })
  }

  const label = new Label('加载中... 0 / 16')
  label.attr({
    anchor: [0.5, 0.5],
    font: '36px Arial',
    pos: [770, 200],
  })

  layer.append(label)

  const button = new Label('点击加载')
  button.attr({
    anchor: [0.5, 0.5],
    font: '44px Arial',
    pos: [770, 350],
    border: [2, 'black'],
    borderRadius: 12,
    padding: [10, 10],
  })
  layer.append(button)

  button.on('mouseenter', function(evt) {
    scene.container.style.cursor = 'pointer'
  })
  button.on('mouseleave', function(evt) {
    scene.container.style.cursor = 'default'
  })
  button.on('mousedown', function(evt) {
    evt.target.attr('scale', 0.8)
  })
  button.on('mouseup', function(evt) {
    evt.target.attr('scale', 1)
    loadRes()
  })
}())
</script>
