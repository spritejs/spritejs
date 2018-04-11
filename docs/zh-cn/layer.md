## 绘图尺寸

我们知道，画布canvas的坐标范围它的宽高属性决定，而在网页中，canvas呈现在文档中的大小则由canvas对象的css样式决定，两者不一定相同。对应于spritejs，用**resolution**表示画布的宽高，而用**viewport**表示canvas呈现在文档中的宽高。

```js
const scene = new Scene('#coordinate', {viewport:[770, 300], resolution: [1540, 600]})
```

在一般情况下我们可以不设置viewport，这样的话默认的viewport会根据容器自动调整，便于我们按照不同窗口来适配我们的canvas。

比如我们定义一个相对自适应的元素：

```css
#adaptive {
  width: 50%;
  padding-bottom: 50%;
}
```

<div id="adaptive" class="sprite-container"></div>

<!-- demo: adaptive -->

不设置viewport自动适配容器大小，只会在scene初始化的时候执行，如果我们希望在窗口大小改变的同时保持scene大小继续适配容器大小，那么我们可以将viewport手动设置为`['auto', 'auto']`。

<div id="coordinate" class="sprite-container"></div>

把viewport设置为`['auto', 'auto']`，scene会自动注册一个`resize`事件到window上，当窗口大小改变时，触发viewport的更新。

<!-- demo: coordinate -->

有时候，我们需要让canvas的宽度或高度其中一项自适应，但是我们又希望精灵元素保持宽高比例不变，此时我们可以在窗口大小改变的时候同动态修改Scene的**resolution**属性，一旦它被改变，所有Layer的resolution一同改变，并重新绘制元素。

<div id="adaptivesvg" class="sprite-container"></div>

尝试改变窗口大小，可以看到绘制的鹬鸵的大小比例并没有被改变。

<!-- demo: adaptivesvg -->

**注意**：微信小程序版spritejs采用不同于标准版的方式来管理绘图尺寸，具体可参考[高级用法：屏幕适配](/zh-cn/guide/resolution)

## 锚点 anchor

在前面的例子中，我们看到Sprite元素有不同的定位方式，具体表现为不同的anchor值。比如例1是`anchor:[0.5, 0.5]`，例2是`anchor:[0.5, 0]`，例3没有设定，是默认值`anchor:[0, 0]`。

在spritejs中，元素的anchor属性用来表示它的参考点，坐标定位、transform都是根据anchor值来设定的，默认值为[0, 0]，即以元素的左上角位置为参考点，正常值取0~1之间，表示参考点坐标相对于元素宽高的比例，因此如果设置为[1, 1]则为右下角。

调整anchor值，看看元素有什么变化：

anchor-x: <input id="anchorX" type="range" value="50"><br/>
anchor-y: <input id="anchorY" type="range" value="50">

<div id="anchor" class="sprite-container"></div>

<!-- demo: anchor -->


<script src="/js/layer.js"></script>
