# sprite2 轻量级的 canvas 绘图库

像操作 DOM 元素一样操作 canvas 中的“精灵”

## 整体结构

![](https://p4.ssl.qhimg.com/t01d5a8d15933153621.png)

paper -> layer -> sprite -> texture

### 快速开始

[一个例子](https://code.h5jun.com/giq)

```js
const imgUrl = 'https://s5.ssl.qhres.com/static/ec9f373a383d7664.svg'
const paper = sprite2.Paper2D('#container')
paper.setResolution(400, 400)

const sprite = new sprite2.Sprite(imgUrl)
sprite.attr({
  bgcolor: '#fff',
  //anchor: [0.5, 0.5],
  pos: [0, 0],
  size: [400, 400],
  borderRadius: '200'
})

paper.layer().appendChild(sprite)
```

sprite2 使用非常简单，`sprite2.Paper2D(selector)` 在容器上创建一个 paper， paper 会自适应容器的宽高。通过 `paper.setResolution(width, height)` 创建指定分辨率的画布。

paper.layer 可以创建或获取一个 layer，一个 layer 是一层 canvas，可以在上面绘制 sprite。paper.layer 可以传不同 id，这样可以创建不同的图层。比如：

```
const background = paper.layer('background')
const foreground = paper.layer('foreground')
```

paper.layer 有第二个参数，如果是一个数字，表示 zIndex，数值大的显示在上层。默认的 zIndex 是 0。如果两个 layer 的 zIndex 相同，后生成的 layer 显示在上层。