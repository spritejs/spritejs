### 过渡 Transition

如果我们要给元素增加一些简单的效果，可以通过transition来完成，只要在设置和改变元素的属性前调用transition方法，传入时间和可选的easing参数即可。transition的easing支持css3的easing。

<div id="transition" class="sprite-container"></div>

<!-- demo: transition -->

`sprite.transition(...)` 返回一个特殊对象（并不是原来的sprite对象），当我们调用`.attr`方法对它进行属性设置时，它创建一个属性动画。当我们再次对它进行属性设置时，它会结束上一次的动画进入下一段动画，这样我们就可以平滑地进行状态切换。此外我们可以通过调用`.reverse`方法来让当前transition状态回滚。

试试将鼠标移动到左右两个方块上：

<div id="transition-toggle" class="sprite-container"></div>

<!-- demo: transition-toggle -->

### 动画 Animate

在前面的例子里我们已经看过很多动画的用法。事实上，spritejs支持[Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)，因此可以让精灵使用.animate方法做出各种复杂的组合动画。

<div id="animations" class="sprite-container"></div>

我们既可以使用spritejs提供的animate动画，也可以使用其他方式，比如原生的setInterval或requestAnimationFrame。此外一些动画库提供的Tween动画，也可以很容易地结合spritejs使用。

<!-- demo: animations -->

比起使用原生timer或者第三方库，直接使用spritejs提供的animate动画有一个额外的好处，就是它默认基于layer的timeline。也就是说我们可以通过控制layer的timeline来控制动画播放的速度，方便地加速、减速、暂停甚至回放动画。

<div>
<button id="speedUp">加速</button>
<button id="slowDown">减速</button>
<button id="pause">暂停</button>
<button id="resume">继续</button>
<span id="playbackRate">playbackRate: 1.0</span>
</div>

<div id="animations-playback" class="sprite-container" style="margin-top: 10px"></div>

通过控制playbackRate可以控制layer上的所有动画的播放速度，该属性也会影响到layer的draw方法中的时间参数，对自定义绘图中依赖于时间轴的也可以产生影响。

<!-- demo: animations-playback -->

layer的timeline是TimeLine类的一个对象，TimeLine类定义于[sprite-timeline](https://github.com/spritejs/sprite-timeline)，这是一个独立的库，也可以单独作于其他方式的动画。

spritejs动画功能非常丰富，关于动画的其他内容，可参考[高级用法：动画](/zh-cn/guide/animations)。

### 阴影 shadow

spritejs可以通过`shadow`属性给元素设置阴影：

<div id="shadow" class="sprite-container"></div>

<!-- demo: shadow -->

### 滤镜 filter

除了设置shadow外，spritejs支持[canvas滤镜](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter)，能够方便地给元素添加各种滤镜。

<div id="filters" class="sprite-container"></div>

<!-- demo: filters -->

### 渐变 gradient

spritejs支持三种渐变，分别为两种标准的canvas渐变：[linearGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)和[radialGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)，以及一种微信小程序的特殊的渐变：circularGradient。spritejs中设置渐变很简单，只需要设置gradients属性，其中指定需要应用渐变的属性，目前支持border、bgcolor、fillColor和strokeColor四种属性的渐变。通过传递vector参数表示渐变的类型，根据个数自动识别为对应的渐变类型。

<div id="gradients" class="sprite-container"></div>

<!-- demo: gradients -->


<!-- javascript -->
<script src="/js/effect.js"></script>
