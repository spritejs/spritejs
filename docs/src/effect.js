const {Scene, Sprite, Label, Path} = spritejs

/* demo: transition */
;(function () {
  const scene = new Scene('#transition', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');

  async function createBubble() {
    const x = 100 + Math.random() * 1340,
      y = 100 + Math.random() * 400;
    const r = Math.round(255 * Math.random()),
      g = Math.round(255 * Math.random()),
      b = Math.round(255 * Math.random());

    const bgcolor = `rgb(${r},${g},${b})`;
    const bubble = new Sprite();
    bubble.attr({
      anchor: 0.5,
      bgcolor,
      size: [50, 50],
      x,
      y,
      borderRadius: 25,
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
}())

/* demo: transition-toggle */
;(function () {
  const scene = new Scene('#transition-toggle', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');

  const left = new Sprite();
  left.attr({
    anchor: 0.5,
    pos: [400, 300],
    size: [200, 200],
    bgcolor: 'red',
  });
  layer.append(left);

  const right = left.cloneNode();
  right.attr({
    pos: [900, 300],
    bgcolor: 'green',
  });
  layer.append(right);

  let leftTrans = null;
  left.on('mouseenter', (evt) => {
    leftTrans = left.transition(1.0);
    leftTrans.attr({
      rotate: 180,
      bgcolor: 'green',
    });
  });
  left.on('mouseleave', (evt) => {
    leftTrans.attr({
      rotate: 0,
      bgcolor: 'red',
    });
  });

  let rightTrans = null;
  right.on('mouseenter', (evt) => {
    rightTrans = right.transition(3.0);
    rightTrans.attr({
      rotate: 720,
      bgcolor: 'red',
    });
  });
  right.on('mouseleave', (evt) => {
    rightTrans.reverse();
  });
}())

/* demo: animations */
;(async function () {
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

  const scene = new Scene('#animations', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');

  const d = 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z';

  await scene.preload([birdsRes, birdsJsonUrl]);

  const path = new Path();

  path.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    path: {d, trim: true},
    lineWidth: 26,
    lineCap: 'round',
    gradients: {
      strokeColor: {
        vector: [0, 400, 400, 0],
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
      },
      fillColor: {
        vector: [0, 0, 400, 400],
        colors: [{
          offset: 0,
          color: 'rgba(255,0,0,0.7)',
        }, {
          offset: 1,
          color: 'rgba(255,255,0,0.7)',
        }],
      },
    },
  });

  layer.append(path);

  const s = new Sprite('bird1.png');
  const pathSize = path.pathSize;

  s.attr({
    anchor: [0.5, 0.5],
    pos: [770 - pathSize[0] / 2, 300 - pathSize[1] / 2],
    size: [80, 50],
    offsetPath: path.svg.d,
    zIndex: 200,
  });
  s.animate([
    {offsetDistance: 0},
    {offsetDistance: 1},
  ], {
    duration: 6000,
    iterations: Infinity,
  });

  let i = 0;
  setInterval(() => {
    s.textures = [`bird${i++ % 3 + 1}.png`];
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

    const gradients = path.attr('gradients');
    gradients.strokeColor.colors = colors;
    path.attr({gradients});

    requestAnimationFrame(next);
  });

  layer.appendChild(s);
}())

/* demo: animations-playback */
;(async function () {
  const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
  const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

  const scene = new Scene('#animations-playback', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');
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
        pos: [-50, 100 + (i % 5) * 100],
      });
      layer.append(bird);

      bird.animate([
        {textures: 'bird1.png'},
        {textures: 'bird2.png'},
        {textures: 'bird3.png'},
        {textures: 'bird1.png'},
      ], {
        duration: 500,
        iterations: Infinity,
        easing: 'step-end',
      });

      const delay = i < 5 ? Math.abs(2 - i) * 300 : (4 - Math.abs(7 - i)) * 300;
      bird.animate([
        {x: -50},
        {x: 1600},
        {x: -50},
      ], {
        delay,
        duration: 6000,
        // direction: 'alternate',
        iterations: Infinity,
      });

      bird.animate([
        {scale: [1, 1]},
        {scale: [-1, 1]},
        {scale: [1, 1]},
      ], {
        delay,
        duration: 6000,
        iterations: Infinity,
        easing: 'step-end',
      });
    }
  }
}())

/* demo: shadow */
;(function () {
  const scene = new Scene('#shadow', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');

  const p = new Path('M0,0H200V200z');
  p.attr({
    fillColor: 'red',
    pos: [700, 150],
    rotate: 60,
    shadow: {
      offset: [15, 15],
      blur: 10,
      color: '#999',
    },
  });
  layer.append(p);
}())

/* demo: filters */
;(async function () {
  const images = [
    {id: 'girl1', src: 'https://p5.ssl.qhimg.com/t01feb7d2e05533ca2f.jpg'},
    {id: 'girl2', src: 'https://p5.ssl.qhimg.com/t01deebfb5b3ac6884e.jpg'},
  ];
  const scene = new Scene('#filters', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');
  const y1 = 50,
    y2 = 320;

  function applyFilters(id, filters, y, scale = 1) {
    filters.forEach((f, i) => {
      const s = new Sprite();
      const textures = {id},
        filter = {};

      if(f.length === 2) {
        filter[f[0]] = f[1];
      }
      s.attr({
        textures,
        pos: [50 + i * 250, y],
        scale,
        filter,
      });
      layer.append(s);
    });
  }

  await scene.preload(...images);

  const filters1 = [
    [],
    ['brightness', '150%'],
    ['grayscale', '50%'],
    ['blur', '12px'],
    ['dropShadow', [15, 15, 5, '#033']],
    ['hueRotate', 45],
  ];

  applyFilters('girl1', filters1, y1, 0.5);

  const filters2 = [
    [],
    ['invert', '100%'],
    ['opacity', '70%'],
    ['saturate', '20%'],
    ['sepia', '100%'],
    ['hueRotate', 135],
  ];

  applyFilters('girl2', filters2, y2);
}())

/* demo: gradients */
;(function () {
  const scene = new Scene('#gradients', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');

  const box = new Sprite();
  box.attr({
    border: 10,
    gradients: {
      border: {
        vector: [0, 0, 170, 170],
        colors: [
          {offset: 0, color: 'red'},
          {offset: 0.5, color: 'yellow'},
          {offset: 1, color: 'green'},
        ],
      },
      bgcolor: {
        vector: [0, 150, 150, 0],
        colors: [
          {offset: 0, color: '#fff'},
          {offset: 0.5, color: 'rgba(33, 33, 77, 0.7)'},
          {offset: 1, color: 'rgba(128, 45, 88, 0.5)'},
        ],
      },
    },
    pos: [150, 50],
    size: [150, 150],
    borderRadius: 15,
  });

  layer.append(box);

  const label = new Label('Hello SpriteJS~~');
  label.attr({
    lineWidth: 6,
    gradients: {
      fillColor: {
        vector: [35, 35, 50, 350, 350, 600],
        colors: [
          {offset: 0, color: '#777'},
          {offset: 0.5, color: '#ccc'},
          {offset: 1, color: '#333'},
        ],
      },
    },
    pos: [500, 50],
    font: '106px Arial',
  });

  layer.append(label);

  const path = new Path();

  path.attr({
    path: {
      d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
      trim: true,
      transform: {scale: 0.7, rotate: 30},
    },
    gradients: {
      fillColor: {
        vector: [200, 200, 0, 0],
        colors: [
          {offset: 0, color: 'red'},
          {offset: 0.5, color: 'yellow'},
          {offset: 1, color: 'green'},
        ],
      },
    },
    anchor: [0.5, 0.5],
    pos: [700, 360],
  });

  layer.append(path);
}());