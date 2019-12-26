## Transition 过渡动画

spritejs最简单的动画方式是transition动画：

```js
// 让精灵在1s内向右移动50个像素
sprite.transition(1.0).attr({
  x: x => x + 50
})
```

`sprite.transition(sec).attr(...)`总是返回一个promise，因此我们可以很容易实现连续的动画：

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  const sprite = new Sprite({
    anchor: 0.5,
    bgcolor: 'red',
    pos: [500, 300],
    size: [200, 200],
    borderRadius: 50,
  });

  layer.append(sprite);

  await sprite.transition(2.0)
    .attr({
      bgcolor: 'green',
      width: width => width + 100,
    });

  await sprite.transition(1.0)
    .attr({
      bgcolor: 'orange',
      height: height => height + 100,
    });
}());
```

<iframe src="/demo/#/doc/transition_basic" height="450"></iframe>

`sprite.transition(sec)` 本身返回一个Transition对象，它也可以多次设置`attr()`，每次设置的时候会自动将上一次的transition结束，这样实现类似下面这样的hover效果会很方便：

```js
const {Scene, Sprite, Path, Group} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);

  const robot = new Sprite('guanguan1.png');
  robot.attr({
    anchor: 0.5,
    pos: [710, 210],
    scale: 0.4,
    rotate: 45,
    // zIndex: 2000,
  });
  layer.append(robot);

  const d = 'M235.946483,75.0041277 C229.109329,53.4046689 214.063766,34.845093 195.469876,22.3846101 C175.428247,8.9577702 151.414895,2 127.314132,2 C75.430432,2 31.6212932,32.8626807 18.323944,74.9130141 C8.97646468,77.1439182 2,85.5871171 2,95.7172992 C2,104.709941 7.49867791,112.371771 15.2700334,115.546944 C15.8218133,115.773348 16.6030463,122.336292 16.8270361,123.236385 C22.1235768,144.534892 35.4236577,163.530709 52.5998558,176.952027 C52.6299032,176.976876 52.6626822,177.001726 52.6954612,177.026575 C72.5513428,192.535224 98.5478246,202 127.043705,202 C152.034964,202 176.867791,194.597706 197.428422,180.146527 C215.659011,167.335395 230.201962,148.621202 236.52831,126.969284 C237.566312,123.421373 238.549682,119.685713 239.038636,116.019079 C239.044099,115.983185 239.074146,115.444787 239.082341,115.442025 C246.673412,112.184022 252,104.580173 252,95.7172992 C252,85.6892748 245.15192,77.3371896 235.946483,75.0041277';
  const shadowD = 'M82.1534529,43 C127.525552,43 164.306906,33.6283134 164.306906,21.663753 C164.306906,9.6991926 127.525552,0 82.1534529,0 C36.7813537,0 0,9.6991926 0,21.663753 C0,33.6283134 36.7813537,43 82.1534529,43 Z';
  const shadow = new Path();
  shadow.attr({
    d: shadowD,
    normalize: true,
    fillColor: '#000000',
    opacity: 0.05,
    pos: [500, 434],
    scale: [1.3, 1.2],
  });
  layer.append(shadow);

  const lemon = new Path();
  lemon.attr({
    d,
    normalize: true,
    pos: [500, 300],
    fillColor: '#fed330',
    scale: 1.4,
  });
  layer.append(lemon);

  const lemonGroup = new Group();
  lemonGroup.attr({
    anchor: 0.5,
    pos: [610, 300],
    size: [180, 180],
    bgcolor: '#faee35',
    border: [6, '#fdbd2c'],
    borderRadius: 90,
    scale: 1.5,
  });
  layer.append(lemonGroup);

  const d2 = 'M0,0L0,100A15,15,0,0,0,50,86.6z';
  for(let i = 0; i < 12; i++) {
    const t = new Path();
    t.attr({
      d: d2,
      scale: 0.65,
      lineWidth: 2,
      strokeColor: '#fff',
      fillColor: '#f8c32d',
      rotate: 30 * i,
    });
    lemonGroup.append(t);
  }

  lemonGroup.animate([
    {rotate: 360},
  ], {
    duration: 10000,
    iterations: Infinity,
  });

  const transition = robot.transition(0.3);

  lemonGroup.addEventListener('mouseenter', (evt) => {
    layer.timeline.playbackRate = 3.0;
    transition.attr({
      pos: [730, 190],
    });
  });
  lemonGroup.addEventListener('mouseleave', (evt) => {
    layer.timeline.playbackRate = 1.0;
    transition.attr({
      pos: [710, 210],
    });
  });
}());
```

<iframe src="/demo/#/doc/transition_hover" height="450"></iframe>

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

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

const sprite = new Sprite();
sprite.attr({
  anchor: [0.5, 0.5],
  pos: [600, 300],
  bgcolor: 'red',
  size: [50, 50],
  borderRadius: 25,
  translate: [0, -200],
  transformOrigin: [0, 200],
});

sprite.animate([
  {rotate: 0},
  {rotate: 360},
], {
  duration: 3000,
  iterations: Infinity,
});

layer.append(sprite);
```

<iframe src="/demo/#/doc/web_animation_api" height="450"></iframe>

## 动画的 Timeline

sprite所属的layer上有一个timeline属性，这是一个[Timeline](https://github.com/spritejs/sprite-timeline)对象，所有layer上运行的动画使用这个timeline对象来获得时间线，这样当我们改变layer的时间线的时候，我们就能影响到所有元素的动画时间。

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  await scene.preload({id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'});

  const [speed1, speed2, speed4, halfSpeed, pause, reversePlay]
    = document.querySelectorAll('#speed1, #speed2, #speed4, #halfSpeed, #pause, #reversePlay');

  const timeline = layer.timeline;

  speed1.addEventListener('click', (evt) => {
    timeline.playbackRate = 1.0;
  });

  speed2.addEventListener('click', (evt) => {
    timeline.playbackRate = 2.0;
  });

  speed4.addEventListener('click', (evt) => {
    timeline.playbackRate = 4.0;
  });

  halfSpeed.addEventListener('click', (evt) => {
    timeline.playbackRate = 0.5;
  });

  pause.addEventListener('click', (evt) => {
    timeline.playbackRate = 0;
  });

  reversePlay.addEventListener('click', (evt) => {
    timeline.playbackRate = -1.0;
  });


  function addRandomSnow() {
    const snow = new Sprite('snow');
    const x0 = 20 + Math.random() * 1100,
      y0 = -100;

    snow.attr({
      anchor: [0.5, 0.5],
      pos: [x0, y0],
      size: [50, 50],
    });

    snow.animate([
      {x: x0 - 10},
      {x: x0 + 10},
    ], {
      duration: 1000,
      fill: 'forwards',
      direction: 'alternate',
      iterations: Infinity,
      easing: 'ease-in-out',
    });

    const dropAnim = snow.animate([
      {y: -100, rotate: 0},
      {y: 700, rotate: 360},
    ], {
      duration: 10000,
      fill: 'forwards',
    });

    dropAnim.finished.then(() => {
      snow.remove();
    });

    layer.append(snow);
  }

  setInterval(addRandomSnow, 200);
}());
```

<iframe src="/demo/#/doc/web_animation_timeline" height="500"></iframe>

回放playbackRate < 0的时候，动画回复到初始状态然后结束，因此旧的雪花往上飘，而新的雪花动画一开始就结束了，所以看不到新雪花从上方飘落。

## 使用第三方动画库

如果不喜欢Web Animation API这种动画形式的话，spritejs的Timeline还能够很方便地与第三方库一同使用。这里以[TweenJS](https://github.com/tweenjs/tween.js)为例：

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

const sprite = new Sprite();
sprite.attr({
  anchor: [0.5, 0.5],
  pos: [600, 300],
  bgcolor: 'rgb(128, 0, 255)',
  size: [100, 100],
});
layer.append(sprite);

const coords = {rotate: 0};

/* globals TWEEN */
new TWEEN.Tween(coords)
  .to({rotate: 360}, 5000)
  .easing(TWEEN.Easing.Quadratic.Out)
  .onUpdate(() => {
    const rotate = coords.rotate,
      radian = Math.PI * rotate / 180,
      red = 128 + Math.round(127 * Math.sin(radian)),
      green = Math.round(rotate) % 128,
      blue = 128 + Math.round(127 * Math.cos(radian));

    const bgcolor = `rgb(${red}, ${green}, ${blue})`;
    sprite.attr({rotate, bgcolor});
  })
  .repeat(Infinity)
  .start();

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update(layer.timeline.currentTime);
}
requestAnimationFrame(animate);

const [speed1, speed2, speed4, halfSpeed, pause, reversePlay]
  = document.querySelectorAll('#tweenjs-speed1, #tweenjs-speed2, #tweenjs-speed4, #tweenjs-halfSpeed, #tweenjs-pause, #tweenjs-reversePlay');

const timeline = layer.timeline;

speed1.addEventListener('click', (evt) => {
  timeline.playbackRate = 1.0;
});

speed2.addEventListener('click', (evt) => {
  timeline.playbackRate = 2.0;
});

speed4.addEventListener('click', (evt) => {
  timeline.playbackRate = 4.0;
});

halfSpeed.addEventListener('click', (evt) => {
  timeline.playbackRate = 0.5;
});

pause.addEventListener('click', (evt) => {
  timeline.playbackRate = 0;
});

reversePlay.addEventListener('click', (evt) => {
  timeline.playbackRate = -1;
});
```

<iframe src="/demo/#/doc/web_animation_tweenjs" height="500"></iframe>