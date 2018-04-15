## 自定义元素

实际上我们在前面一些例子里已经看到过，我们能够继承Sprite一系列类来扩展新的精灵类型。很多例子里我们创建了一些简单的精灵类型。现在我们尝试创建一类更复杂的UI元素。

<div id="progressbar" class="sprite-container"></div>

我们可以很容易制作一组进度条UI组件，在这里我简单写了一个可以有三种展现类型的ProgressBar类（当然也可以将它拆分成3个不同的子类），可以看到通过spritejs实现UI组件是一件很容易的事情。

<!-- demo: progressbar -->

我们可以看到，要扩展Sprite类，只需要继承Sprite、Label、Path或Group这四个类，通过静态方法`defineAttributes`定义一些新的属性。

```js
Sprite.defineAttributes({
  init(attr) {
    // 这是构造函数，在这里可以通过 setDefault 给属性设置初始值
  },
  foo(attr, val) {
    // 添加一个叫做 foo 的属性
    // 如果不需要其他处理，只需要将它保存在 attribute 对象中即可
    attr.set('foo', val)
    attr.clearCache()  // 如果这个属性需要清缓存，则调用 clearCache，什么属性需要清缓存，具体见“缓存策略”一节
  }
})
```

扩展了属性，我们要实现继承类的一些方法。一般来说，我们只要重写`get contentSize`和`render`方法，前者负责在不给元素设置size的情况下计算元素的大小，后者负责元素具体的渲染过程。

```js
class MyElement extends Sprite {
  get contentSize() {
    let [width, height] = this.attr('size')
    if(width === '') {
      // 当宽度为默认值时，处理
    }
    if(height === '') {
      // 当宽度为默认值时，处理
    }
    return [width, height]
  }
  render(t, context) {
    super.render(t, context)

    // 处理具体绘制过程
  }
}
```

这样我们就可以很方便地扩展我们需要的新元素了。

除了initAttributes方法外，如果我们通过babel和webpack编译，我们还可以使用decorate来定义属性，我们可以继承Sprite.Attr类。

## 另一种扩展方式

另一种自定义元素实现方式：

```js
class MyAttr extends Sprite.Attr {
  constructor() {
    this.setDefault({
      // 设置默认属性
    })
  }
  @attr
  foo(val) {
    this.set('foo', val)
    this.clearCache()
  }
}

class MyElement extends Sprite {
  ...
}
```

一个[例子](https://github.com/spritejs/sprite-extend-d3axis)，通过继承Group类实现D3可用的坐标轴元素。


<script src="/js/guide/nodes.js"></src>
