## 状态切换

SpriteJS支持状态的管理。我们可以给元素设置一组states属性，然后再设置一组actions属性，这样就可以对它们进行状态切换。

states是一个对象，它的每个key表示一个状态ID，对应的值是一组属性：

```js
const states = {
  stateA: {
    scale: 0.5,
    rotate: 45,
  },
  stateB: {
    scale: 1.0,
    color: 'green',
    rotate: 0,
  },
  stateC: {
    color: 'blue',
    rotate: 60,
  },
};

sprite.attr('states', states);
```

有了states以后，我们就可以切换元素的状态：

<div id="state-basic" class="sprite-container"></div>

<!-- demo: state-basic -->

### 给状态添加 Actions

我们可以在状态切换的时候给状态切换设置行为，方法是设置actions属性。这个属性是一个数组，每个元素是一个action描述对象，包含以下内容：

`from`,`to`或`both`，设置状态切换选择器，`action`，设置动作timing：

```js
const actions = [
  {
    from: 'stateA',
    to: 'stateB',
    action: {
      duration: 500,
      easing: 'ease-in-out',
    },
  },{
    both: ['stateB', 'stateC'],
    action: {
      duration: 800,
      easing: 'cubic-bezier(0.26, 0.09, 0.37, 0.18)',
    },
  },{
    from: 'stateC',
    action: {
      duration: 1000,
    },
  },{
    to: 'stateC',
    action: {
      duration: 500,
    }
  },
];

sprite.attr('actions', actions);
```

Action的匹配规则如下：

当一个状态stateA切换到stateB的时候，优先匹配`{from:'stateA', to:'stateB'}`，如果不存在这个Action选择器，那么匹配`{to:'stateB'}`，如果也不存在，那么匹配`{from:'stateA'}`。`{both: ['stateA', 'stateB']}`是简写，会生成`{from:'stateA', to:'stateB'}`和`{from:'stateB', to:'stateA'}`两个选择器。对应的，`{both:['stateA']}`也会生成`{from:'stateA'}`和`{to:'stateA'}`两个选择器。

<div id="state-actions" class="sprite-container"></div>

<!-- demo: state-actions -->

### state-change 事件

状态切换的时候，我们可以监听state变化的事件。

一个元素的状态从`a`变化为`b`，会触发两个事件，一个是`state-from-a`，一个是`state-to-b`。事件参数包括四个属性，分别是：

- `from`: 元素的源状态名，即`a`
- `to`: 元素的目的状态名，即`b`
- `action`: 元素切换状态的action对象，该对象是一个动画timing对象，由前面的Action选择器规则匹配出来。
- `animation`: 元素切换状态的Animation对象。

### action:reversable

当状态从`stateA`切换到`stateB`的时候，如果匹配到`{from:'stateA', to:'stateB'}`的Action并执行动画，此时状态再切换回`stateA`，如果上一个Action动画还没执行完成，此时默认不会执行`{to:'stateB', from:'stateA'}`选择器下的Action（或者其他更低优先级的选择器选择的Action），而是反向执行前一个未完成的Action，这样我们做状态双向切换的动画就比较自然。如果我们要强制执行新的Action，可以给`{from:'stateA', to:'stateB'}`的Action设置一个`reversable:false`属性，以强制忽略反向Action，执行新的Action。

<div id="state-reversable" class="sprite-container"></div>

<!-- demo: state-reversable -->

## 状态序列

我们可以通过`resolveStates(states, before, after)`方法批量设置一组state，然后让元素从开始state变更到结束state。

每个元素的`resolveStates(states, before, after)`方法是**互斥**的，也就是说如果同一时间调用两组`resolveState()`，spritejs会立即结束前面的动作，执行后一组动作。

<div id="state-resolveStates" class="sprite-container"></div>

<!-- demo: state-resolveStates -->

## 内置状态

spritejs为每一个元素内置了一些特定的状态，要实现这些状态的动作效果，只需要直接给这些状态设置初始值即可。内置状态包括以下这些：

- `beforeEnter` 当元素或它的父级元素被append到layer上之前的临时状态。
- `afterEnter` 当元素或它的父级元素被append到layer上之后的临时状态。
- `beforeExit` 当元素或它的父级元素被从layer上remove之前的临时状态。
- `afterExit` 当元素或它的父级元素被从layer上remove之后的临时状态。
- `show` 当元素被调用`hide()`方法之前的临时状态，或被调用`show()`方法之后的临时状态。
- `hide` 当元素被调用`hide()`方法之后的状态。
- `default` 元素默认的初始状态。

<div id="state-toggleEnterExit" class="sprite-container"></div>

<!-- demo: state-toggleEnterExit -->

在上面的例子里，我们给元素设置了beforeEnter和afterExit的状态，在append和remove的时候，spritejs会自动触发动作。`enter`和`exit`行为有默认的action，值为：

```js
[
  {
    from: 'beforeEnter',
    duration: 300,
    ease: 'ease-in',
  },
  {
    from: 'beforeExit',
    duration: 300,
    ease: 'ease-out',
  }
]
```

我们可以设置元素的actions属性来改写它们。

```js
// 延长动画时间
sprite.attr('actions', [
  {
    from: 'beforeEnter',
    duration: 600,
    ease: 'ease-in',
  },
  {
    from: 'beforeExit',
    duration: 600,
    ease: 'ease-out',
  }  
])
```

除了控制enter和exit之外，我们还可以通过给元素增加`hide`状态来控制它的显示隐藏，通过它我们可以很方便地实现fade-in和fade-out效果：

<div id="state-fade" class="sprite-container"></div>

<!-- demo: state-fade -->

## enterMode 和 exitMode

在使用group的时候，我们可以将子元素一一添加到group上，然后再将group添加到parent上，此时group下的子元素的enter行为会被触发。我们可以通过设置enterMode和exitMode来改变enter/exit行为的触发方式，可选的方式如下：

- `normal` 默认值，enter时同时触发自身和子元素的enter，exit时先同时触发自身和子元素的exit
- `onebyone` enter时先触发自身的enter，然后根据zOrder顺序依次触发子元素的enter，exit时先根据zOrder顺序依次触发子元素的exit，然后触发自身的exit
- `onebyone-reverse` enter时先触发自身的enter，然后根据zOrder的倒序依次触发子元素的enter，exit时先根据zOrder倒序依次触发子元素的exit，然后触发自身的exit

<div id="state-mode" class="sprite-container"></div>

<!-- demo: state-mode -->



<script src="/js/guide/states.js"></script>