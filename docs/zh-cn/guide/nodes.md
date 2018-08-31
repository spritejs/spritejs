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

## 定义属性特殊操作

我们定义元素属性的时候，需要理解和使用一些概念：

- reflow: 当定义了一个新属性，该属性改变会引起元素的`contentSize`、`clientSize`、`offsetSize`等box大小变化的时候，由于spritejs默认缓存了这些属性计算值，因此需要显式调用`attr.clearFlow()`来通知引擎清除这些元素缓存的值。

- cache: 当定义了一个新属性，该属性改变会引起元素的外观呈现发生变化（包括改变size、color、border、shape等）时，由于spritejs缓存策略可能会将元素缓存，因此需要显式调用`attr.clearCache()`来通知引擎清除缓存。在大部分情况下，元素的属性都引起外观改变（除了pos、transform、layout相关的这类只做位置变换的属性），因此通常情况下自定义的属性都要进行clearCache操作。

- quietSet: 如果定义一个属性，既不影响元素外观，又不影响box大小（如Path的bounding属性只影响事件的hit判断），那么可以使用`attr.quietSet()`来代替`attr.set()`设置元素属性，这样元素的这个属性变化的时候，不会通知layer做update操作，能够减少消耗，提升性能。

- relayout: 当继承一个Group，定义的新属性如果是layout相关的属性，那么需要显式调用`attr.subject.relayout()`来通知元素清除layout，这样在绘制的时候才能重新计算layout。

## 插件封装

我们可以自定义spritejs的插件库，spritejs提供了`use`操作，能够载入并初始化插件。

`use(component, options, merge = true)`方法支持三个参数，返回插件对象。

- component 要使用的组件，该组件暴露一个`function`或者`{install:function}`的接口。
- options 传给接口的配置。
- merge 默认值true，将该接口返回的内容merge到spritejs对象上。

```js
import * as MyElement from 'my-element';
spritejs.use(MyElement);

const el = new spritejs.MyElement();

...
```

*MyElement插件的定义*

```js
export function install({Sprite, registerNodeType}, options) {
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


  registerNodeType('myelement', MyElement); // 定义新的nodeType名为myelement
  return {MyElement}
}
```

注意由于spritejs使用`babel-transform-decorators-runtime`和`babel-decorators-runtime`两个扩展来支持ES6的decorators特性，所以需要安装这两个依赖：

```bash
npm i -D babel-transform-decorators-runtime
npm i -S babel-decorators-runtime
```

对应的.babelrc推荐配置为：

```json
{
  "presets": ["env"],
  "plugins": ["transform-runtime",
              "transform-decorators-runtime",
              "transform-class-properties"]
}
```

一个[例子](https://github.com/spritejs/sprite-extend-shapes)，通过继承Group类实现矢量图形的绘制。


<script src="/js/guide/nodes.js"></src>
