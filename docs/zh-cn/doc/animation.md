SpriteJS支持标准的[Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)，所以熟悉css3 animation或web animation api的话，很容易上手SpriteJS动画。

## sprite.animate

`sprite.animate(keyframes, timing)` - SpriteJS动画是标准的**关键帧动画**，我们可以设置多个属性关键帧，然后执行动画。

<p data-height="578" data-theme-id="light" data-slug-hash="jKXPOX" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/jKXPOX/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## keyframes

animate的第一个参数是keyframes，它是一个数组，定义了每一个关键帧上的属性。它有一个可选的offset属性，取值从0到1，定义该关键帧在整个动画过程中的位置。如果keyframes只有一帧，那么默认该帧为最后一帧（offset: 1）

<p data-height="528" data-theme-id="light" data-slug-hash="PaXqze" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/PaXqze/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## timing

animate的第二个参数是一个timing对象，timeing对象有以下属性：

| 属性名 | 属性类型 | 初始值 | 属性描述 |
| --- | --- | --- | --- |
| delay | Number | 0 | 动画多长时间后开始运行，单位是毫秒 |
| endDelay | Number | 0 | 动画执行完毕后多长时间之后结束，单位是毫秒 |
| fill | 枚举: 'none', 'forwards', 'backwards', 'both' | 'none' | 如果这个属性为'none'，那么元素的动画效果只有在'running'和'paused'状态时有效，在其他状态下元素回到动画前状态。如果这个属性为 'forwards'，那么动画结束后，元素保持在动画结束时的状态。如果这个属性为'backwards'，那么动画处于开始前pending状态时，元素保持在动画第一帧的状态。如果这个属性为'both'，那么元素在动画开始前保持第一帧状态，并在动画结束后保持最后一帧状态。 |
| iterations | Number | 1 | 动画播放的次数，可以是整数，也可以是小数 |
| direction | 枚举: 'default', 'reverse', 'alternate' 'alternate-reverse'| 'default' | 动画播放的方向，默认是正向播放，如果该属性设置为'reverse'，则动画反向播放，如果设置为alternate，则在iterations > 1的时候正反交替播放 |
| duration | Number | 0 | 动画播放一次的时长 |
| easing | String | 'linear' | 动画的easing函数，可以是`linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end`或者cubic-bezier函数比如`cubic-bezier(0.42, 0, 0.58, 1)` |

## animation 对象

`sprite.animate(keyframes, timing)`方法返回一个animation对象，该对象有一系列属性和方法。

### baseTimeline

获取或设置baseTimeline。由于SpriteJS动画是基于timeline的动画，每个动画对象上有baseTimeline，这是layer的timeline，动画播放时，从baseTimeline中fork出动画自己的timeline。关于timeline的详细内容，可以参考[这篇文章](https://zhuanlan.zhihu.com/p/38604408)

### cancel(preserveState = false)

取消动画播放，有一个参数preserveState，默认为false，当它的值为true时，动画取消，但是状态停在动画播放到的当前状态。

### finish()

结束动画，跳过未播放完的动画，直接到动画结束状态。

### finished

Promise，如果动画结束，该Promise对象resolved。

有了finsished属性，我们可以很方便地让多段独立的动画依次执行。

<p data-height="383" data-theme-id="light" data-slug-hash="KebpYp" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/KebpYp/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### frame

只读属性，获得当前帧的属性值。

### pause()

暂停动画的播放。

### play()

开始播放动画，调用`sprite.animate`方法时，动画会自动播放，不需要手动调用play()，但是如果动画执行中被暂停，那么调用play()可以继续播放动画。

### playbackRate

获取或设置动画的速度，可以设置为负数，如果设置为负数，动画会回放。如果playbackRate设置为0，动画暂停。

### playState

只读属性，获取动画当前的状态，有四个可能的值，分别是：

- idle: 动画播放被取消，进入这个状态
- pending: 如果timing设置了delay或endDelay，动画处于这两个delay中的一个区间时，状态是pending。如果调用pause方法将动画暂停，动画的状态也将是pending。
- running: 如果动画未被暂停，时间区间也不在delay或endDelay的区间，那么动画状态是running
- finished: 如果动画已经结束，那么动画状态是finished

### progress

只读属性，0到1之间的值，表示当前动画的进度，如果timing的iterations大于1，那么progress周期性在0到1之间变化。

### ready

Promise对象，当动画从pending状态进入running状态时，该对象resolved。

### timing

只读属性，获取timing对象。

### timeline

读取或设置timeline对象，通过改变timeline的currentTime可以手动控制动画跳转到任意时间。

<p data-height="422" data-theme-id="light" data-slug-hash="gKZaVP" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/gKZaVP/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## layer.timeline

我们可以通过layer.timeline来控制当前layer上的所有sprite元素的动画。

具体的例子可以参考[Demo](http://spritejs.org/demo/#animations)
