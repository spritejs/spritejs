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


### action:reversable

当状态从`stateA`切换到`stateB`的时候，如果匹配到`{from:'stateA', to:'stateB'}`的Action并执行动画，此时状态再切换回`stateA`，如果上一个Action动画还没执行完成，此时默认不会执行`{to:'stateB', from:'stateA'}`选择器下的Action（或者其他更低优先级的选择器选择的Action），而是反向执行前一个未完成的Action，这样我们做状态双向切换的动画就比较自然。如果我们要强制执行新的Action，可以给`{from:'stateA', to:'stateB'}`的Action设置一个`reversable:false`属性，以强制忽略反向Action，执行新的Action。



<script src="/js/guide/states.js"></script>