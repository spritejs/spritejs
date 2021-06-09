## Transition

If we want to add some simple effects to the element, we can do it through transition method.

Like CSS transition.

```js
const {Scene, Arc} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

async function createBubble() {
  const x = 100 + Math.random() * 1000,
    y = 100 + Math.random() * 400;
  const r = Math.round(255 * Math.random()),
    g = Math.round(255 * Math.random()),
    b = Math.round(255 * Math.random());

  const fillColor = `rgb(${r},${g},${b})`;
  const bubble = new Arc();
  bubble.attr({
    fillColor,
    radius: 25,
    x,
    y,
  });
  layer.append(bubble);
  await bubble.transition(2.0).attr({
    scale: [2.0, 2.0],
    opacity: 0,
  });
  bubble.remove();
}

setInterval(() => {
  createBubble();
}, 50);
```

<iframe src="/demo/#/doc/transition" height="450"></iframe>

`sprite.transition(...)` returns a special object (not the original sprite object). When we call the `.attr()` method to set its attributes, it creates an attribute animation. When we set attribute again, it will end the last animation and enter the next animation, so we can smoothly switch states. In addition, we can call the `.reverse()` method to roll back the current transition state.

```js
const {Scene, Sprite, Label} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const label = new Label('试试将鼠标移动到左右两个方块上：');
label.attr({
  anchor: 0.5,
  pos: [400, 50],
  fontSize: '2rem',
});
layer.append(label);

const left = new Sprite();
left.attr({
  anchor: 0.5,
  pos: [300, 300],
  size: [200, 200],
  bgcolor: 'red',
});
layer.append(left);

const right = left.cloneNode();
right.attr({
  pos: [700, 300],
  bgcolor: 'green',
});
layer.append(right);

let leftTrans = null;
left.addEventListener('mouseenter', (evt) => {
  if(leftTrans) leftTrans.cancel();
  leftTrans = left.transition(1.0);
  leftTrans.attr({
    rotate: 180,
    bgcolor: 'green',
  });
});
left.addEventListener('mouseleave', (evt) => {
  leftTrans.attr({
    rotate: 0,
    bgcolor: 'red',
  });
});

let rightTrans = null;
right.addEventListener('mouseenter', (evt) => {
  if(rightTrans) rightTrans.cancel();
  rightTrans = right.transition(3.0);
  rightTrans.attr({
    rotate: 720,
    bgcolor: 'red',
  });
});
right.addEventListener('mouseleave', (evt) => {
  rightTrans.reverse();
});
```

<iframe src="/demo/#/doc/transition_reverse" height="450"></iframe>

### Animation

SpriteJS supports the [web animations API](https://developer.mozilla.org/en-us/docs/web/api/web_animations_api), so you can use the `.animate()` method to make a variety of complex composite animations.

We can also use other way to create animations, such as native setInterval or requestAnimationFrame. In addition, the tween animation provided by the 3rd animation libraries can also be easily used in SpriteJS.

```js
const {Scene, Path, Sprite, Gradient} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

(async function () {
  await scene.preload([birdsRes, birdsJsonUrl]);
  const d = 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437Z';

  const gradient = new Gradient({
    vector: [280, 470, 680, 70],
    colors: [{
      offset: 0,
      color: 'rgba(255,0,0,1)',
    }, {
      offset: 0.5,
      color: 'rgba(255,0,0,0)',
    }, {
      offset: 1,
      color: 'rgba(255,0,0,0)',
    }],
  });

  const path = new Path({
    d,
    lineWidth: 26,
    fillColor: 'red',
    strokeColor: gradient,
    // lineJoin: 'bevel',
  });

  layer.append(path);
  window.path = path;

  const bird = new Sprite('bird1.png');
  bird.attr({
    anchor: [0.5, 0.5],
    size: [65, 45],
    offsetPath: d,
    zIndex: 200,
  });

  layer.append(bird);

  bird.animate([
    {offsetDistance: 0},
    {offsetDistance: 1},
  ], {
    duration: 6000,
    iterations: Infinity,
  });

  let i = 0;
  setInterval(() => {
    bird.attributes.texture = `bird${i++ % 3 + 1}.png`;
  }, 100);

  const startTime = Date.now();
  const T = 6000;
  requestAnimationFrame(function next() {
    const p = Math.PI * 2 * (Date.now() - startTime) / T;
    const colors = [
      {offset: 0, color: 'rgba(255,0,0,1)'},
      {offset: 0.5 + 0.5 * Math.abs(Math.sin(p)), color: 'rgba(255,0,0,0)'},
      {offset: 1, color: 'rgba(255,0,0,0)'},
    ];

    const gradients = new Gradient({
      vector: [280, 470, 680, 70],
      colors,
    });
    path.attr({strokeColor: gradients});

    requestAnimationFrame(next);
  });
}());
```

<iframe src="/demo/#/doc/animation" height="450"></iframe>

Compared with using native timers or third-party libraries, there is an additional advantage of using animation api provided by spritejs directly, because it is based on layer timeline. With layer timeline we can control the playback rate of the animation.

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

(async function () {
  const timeline = layer.timeline;

  const playbackRate = document.getElementById('playbackRate');
  const speedUp = document.getElementById('speedUp');
  const slowDown = document.getElementById('slowDown');
  const pause = document.getElementById('pause');
  const resume = document.getElementById('resume');

  function updateSpeed() {
    playbackRate.innerHTML = `playbackRate: ${timeline.playbackRate.toFixed(1)}`;
  }
  speedUp.addEventListener('click', () => {
    timeline.playbackRate += 0.5;
    updateSpeed();
  });
  slowDown.addEventListener('click', () => {
    timeline.playbackRate -= 0.5;
    updateSpeed();
  });
  pause.addEventListener('click', () => {
    timeline.playbackRate = 0;
    updateSpeed();
  });
  resume.addEventListener('click', () => {
    timeline.playbackRate = 1.0;
    updateSpeed();
  });

  await scene.preload([birdsRes, birdsJsonUrl]);

  for(let i = 0; i < 10; i++) {
    if(i !== 5 && i !== 9) {
      const bird = new Sprite('bird1.png');
      bird.attr({
        anchor: [0.5, 0.5],
        pos: [-50, 100 + (i % 5) * 80],
        scale: 0.6,
      });
      layer.append(bird);

      bird.animate([
        {texture: 'bird1.png'},
        {texture: 'bird2.png'},
        {texture: 'bird3.png'},
        {texture: 'bird1.png'},
      ], {
        duration: 500,
        iterations: Infinity,
        easing: 'step-end',
      });

      const delay = i < 5 ? Math.abs(2 - i) * 300 : (4 - Math.abs(7 - i)) * 300;
      bird.animate([
        {x: -50},
        {x: 1100},
        {x: -50},
      ], {
        delay,
        duration: 6000,
        // direction: 'alternate',
        iterations: Infinity,
      });

      bird.animate([
        {scale: [0.6, 0.6]},
        {scale: [-0.6, 0.6]},
        {scale: [0.6, 0.6]},
      ], {
        delay,
        duration: 6000,
        iterations: Infinity,
        easing: 'step-end',
      });
    }
  }
}());
```

<iframe src="/demo/#/doc/animation_timeline" height="450"></iframe>

For more details, please refer to [advanced usage: animation](/en/guide/animations).

## Filter

Spritejs supports [canvas filters](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter) and can easily add various filters to elements.

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const images = [
  {id: 'girl1', src: 'https://p5.ssl.qhimg.com/t01feb7d2e05533ca2f.jpg'},
  {id: 'girl2', src: 'https://p5.ssl.qhimg.com/t01deebfb5b3ac6884e.jpg'},
];

(async function () {
  function applyFilters(texture, filters, y, scale = 1) {
    filters.forEach((filter, i) => {
      const s = new Sprite();
      s.attr({
        texture,
        pos: [100 + i * 150, y],
        scale,
        filter,
      });
      layer.append(s);
    });
  }

  await scene.preload(...images);

  applyFilters('girl1', [
    'none',
    'brightness(150%)',
    'grayscale(50%)',
    'blur(12px)',
    'drop-shadow(15, 15, 5, #033)',
    'hue-rotate(45)',
  ], 100, 0.3);

  applyFilters('girl2', [
    'none',
    'invert(100%)',
    'opacity(70%)',
    'saturate(20%)',
    'sepia(100%)',
    'hue-rotate(135)',
  ], 300, 0.6);
}());
```

<iframe src="/demo/#/doc/filter" height="450"></iframe>

## Gradient

Unlike the previous version, SpriteJS<sup>Next</sup> creates gradients through Gradient Class. According to the number of vector parameters, LinearGradient and LinearGradient are created respectively.

```js
const {Scene, Sprite, Gradient, Label, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();
const box = new Sprite();
box.attr({
  borderWidth: 10,
  borderColor: new Gradient({
    vector: [0, 0, 170, 170],
    colors: [
      {offset: 0, color: 'red'},
      {offset: 0.5, color: 'yellow'},
      {offset: 1, color: 'green'},
    ],
  }),
  // borderColor: 'green',
  bgcolor: new Gradient({
    vector: [0, 150, 150, 0],
    colors: [
      {offset: 0, color: '#fff'},
      {offset: 0.5, color: 'rgba(33, 33, 77, 0.7)'},
      {offset: 1, color: 'rgba(128, 45, 88, 0.5)'},
    ],
  }),
  pos: [150, 50],
  size: [150, 150],
  borderRadius: 15,
});

layer.append(box);

const label = new Label('Hello SpriteJS~~');
label.attr({
  lineWidth: 6,
  fillColor: new Gradient({
    vector: [35, 35, 50, 350, 350, 600],
    colors: [
      {offset: 0, color: '#777'},
      {offset: 0.5, color: '#ccc'},
      {offset: 1, color: '#333'},
    ],
  }),
  pos: [500, 50],
  font: '48px Arial',
});

layer.append(label);

const path = new Path();

path.attr({
  d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
  normalize: true,
  rotate: 30,
  scale: 0.7,
  fillColor: new Gradient({
    vector: [300, 300, 100, 100],
    colors: [
      {offset: 0, color: 'red'},
      {offset: 0.5, color: 'yellow'},
      {offset: 1, color: 'green'},
    ],
  }),
  pos: [700, 360],
});

layer.append(path);
```

<iframe src="/demo/#/doc/gradient" height="450"></iframe>