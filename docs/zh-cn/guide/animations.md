## Transition 过渡动画

spritejs最简单的动画方式是transition动画：

```js
// 让精灵在1s内向右移动50个像素
sprite.transition(1.0).attr({
  x: x => x + 50
})
```

`sprite.transition(sec).attr(...)`总是返回一个promise，因此我们可以很容易实现连续的动画：

<div id="transition-sequence" class="sprite-container"></div>

<!-- demo: transition-sequence -->

`sprite.transition(sec)` 本身返回一个Transition对象，它也可以多次设置`attr()`，每次设置的时候会自动将上一次的transition结束，这样实现类似下面这样的hover效果会很方便：

<div id="transition-hover" class="sprite-container"></div>

<!-- demo: transition-hover -->

## Web Animations API

spritejs动画支持的是几乎标准的[Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)。

每一个sprite有一个animate方法，该方法用来定义并运行动画，它返回一个animation对象，该对象有几种不同的状态，分别如下：

| 状态 | 描述 |
| --- | --- |
| idle | 当前动画未开始 |
| pending | 当前动画已开始未结束，但元素还未运动或已运动结束 |
| running | 当前动画正在运行 |
| paused | 当前动画被暂停 |
| finished | 当前动画已结束 |


根据Web Animations API，animate方法有两个参数，分别是动画属性的关键帧序列和一个timeing对象。

timeing对象有以下属性：

| 属性名 | 属性类型 | 初始值 | 属性描述 |
| --- | --- | --- | --- |
| delay | Number | 0 | 动画多长时间后开始运行，单位是毫秒 |
| endDelay | Number | 0 | 动画执行完毕后多长时间之后结束，单位是毫秒 |
| fill | 枚举: 'none', 'forwards', 'backwards', 'both' | 'none' | 如果这个属性为'none'，那么元素的动画效果只有在'running'和'paused'状态时有效，在其他状态下元素回到动画前状态。如果这个属性为 'forwards'，那么动画结束后，元素保持在动画结束时的状态。如果这个属性为'backwards'，那么动画处于开始前pending状态时，元素保持在动画第一帧的状态。如果这个属性为'both'，那么元素在动画开始前保持第一帧状态，并在动画结束后保持最后一帧状态。 |
| iterations | Number | 1 | 动画播放的次数，可以是整数，也可以是小数 |
| direction | 枚举: 'default', 'reverse', 'alternate', 'alternate-reverse' | 'default' | 动画播放的方向，默认是正向播放，如果该属性设置为'reverse'，则动画反向播放，如果设置为alternate，则在iterations > 1的时候正反交替播放 |
| duration | Number | 0 | 动画播放一次的时长 |
| easing | String | 'linear' | 动画的easing函数，可以是`linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end`或者cubic-bezier函数比如`cubic-bezier(0.42, 0, 0.58, 1)` |

<div id="circle" class="sprite-container"></div>

<!-- demo: circle -->

## 动画的 Timeline

sprite所属的layer上有一个timeline属性，这是一个[Timeline](https://github.com/spritejs/sprite-timeline)对象，所有layer上运行的动画使用这个timeline对象来获得时间线，这样当我们改变layer的时间线的时候，我们就能影响到所有元素的动画时间。

<div id="timeline-ctrl">
  <button id="speed1">原速</button>
  <button id="speed2">2倍速</button>
  <button id="speed4">4倍速</button>
  <button id="halfSpeed">&#189;倍速</button>
  <button id="pause">静止</button>
  <button id="reversePlay">倒放</button>
</div>

<div id="animate-timeline" class="sprite-container"></div>

回放playbackRate < 0的时候，动画回复到初始状态然后结束，因此旧的雪花往上飘，而新的雪花动画一开始就结束了，所以看不到新雪花从上方飘落。

<!-- demo: animate-timeline -->

## 使用第三方动画库

如果不喜欢Web Animation API这种动画形势的话，spritejs的Timeline还能够很方便地与第三方库一同使用。这里以[TweenJS](https://github.com/tweenjs/tween.js)为例：

<div id="timeline-ctrl">
  <button id="tweenjs-speed1">原速</button>
  <button id="tweenjs-speed2">2倍速</button>
  <button id="tweenjs-speed4">4倍速</button>
  <button id="tweenjs-halfSpeed">&#189;倍速</button>
  <button id="tweenjs-pause">静止</button>
  <button id="tweenjs-reversePlay">倒放</button>
</div>

<div id="animate-tweenjs" class="sprite-container"></div>

**注意**倒放的时候动画只运动到一个周期的起始位置就停止了，这个是TweenJS具体实现的问题，如果用原生的Web Animation API是可以倒回全部周期的。

<!-- demo: animate-tweenjs -->


<script src="//lib.baomitu.com/tween.js/17.2.0/Tween.min.js"></script>
<script src="/js/guide/animation.js"></script>
