class Button extends spritejs.Label {
  connect(parent, zOrder) {
    super.connect(parent, zOrder);

    this.on('mouseenter', (evt) => {
      this.attr({
        color: '#635d47',
        bgcolor: '#00e15e',
      });
    });

    this.on('mousedown', (evt) => {
      this.attr({
        scale: 0.95,
      });
    });

    this.on('mouseup', (evt) => {
      this.attr({
        scale: 1,
      });
    });

    this.on('mouseleave', (evt) => {
      this.attr({
        color: '#00e15e',
        bgcolor: '',
      });
    });
  }
}

(async function () {
  const paper = new spritejs.Scene('#paper', {
      viewport: ['auto', 'auto'],
      resolution: [1600, 1200],
      stickMode: 'width',
      stickExtend: true,
    }),
    {Sprite, Group, Path} = spritejs;

  await paper.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);

  const bglayer = paper.layer('bg'),
    fglayer = paper.layer('fg', {
      handleEvent: false,
      evaluateFPS: true,
      renderMode: 'repaintAll',
    });

  bglayer.canvas.style.backgroundColor = '#635D47';

  const wall = new Sprite();
  wall.attr({
    size: [10, 740],
    pos: [940, 250],
    bgcolor: '#CFC441',
  });
  fglayer.append(wall);

  function randomBirds(i) {
    const pos = [100, 350 + 60 * i];
    const duration = Math.round(200 + 300 * Math.random());

    const g = new Group();
    g.attr({
      anchor: [0.5, 0.5],
      pos,
      zIndex: 200,
    });

    const s = new Sprite('huanhuan.png');
    s.attr({scale: 0.4});

    g.appendChild(s);

    g.animate([
      {x: 100},
      {x: 900},
      {x: 100},
    ], {
      duration: duration * 20,
      iterations: Infinity,
      easing: 'ease-in-out',
      fill: 'both',
    });

    g.animate([
      {transform: {rotate: 30, scale: [1, 1]}},
      {transform: {rotate: -30, scale: [-1, 1]}},
      {transform: {rotate: 30, scale: [1, 1]}},
    ], {
      duration: duration * 20,
      iterations: Infinity,
      easing: 'step-end',
      fill: 'both',
    });

    const outerFireD = 'M19.8173,24.1766 L5.3273,32.9936 C4.6293,33.4186 3.7183,33.1976 3.2943,32.4996 C3.1953,32.3376 3.1313,32.1596 3.1003,31.9836 L0.1953,15.2736 C-1.0387,8.1796 3.7123,1.4286 10.8073,0.1946 C17.9013,-1.0394 24.6523,3.7116 25.8853,10.8056 C26.8283,16.2296 24.2443,21.4666 19.8173,24.1766';

    const outerFire = new Path();
    outerFire.attr({
      path: {d: outerFireD},
      pos: [22, 90],
      fillColor: 'rgb(253,88,45)',
      zIndex: -1,
    });
    g.append(outerFire);

    const innerFireD = 'M15.9906,13.766 L8.4096,26.718 C8.0486,27.335 7.2706,27.521 6.6726,27.133 C6.4296,26.976 6.2536,26.748 6.1536,26.491 L0.6356,12.223 C-1.1554,7.594 0.9666,2.393 5.3746,0.605 C9.7826,-1.182 14.8076,1.122 16.5976,5.752 C17.6546,8.483 17.3236,11.455 15.9906,13.766';

    const innerFire = new Path();
    innerFire.attr({
      path: {d: innerFireD},
      pos: [30, 90],
      rotate: 15,
      fillColor: 'rgb(254,222,9)',
      zIndex: -1,
    });
    g.append(innerFire);

    fglayer.append(g);

    return g;
  }

  for(let i = 0; i < 10; i++) {
    randomBirds(i);
  }

  const [speedupBtn, slowdownBtn, pauseBtn, playBtn]
    = ['Speed up', 'Slow down', 'Pause', 'Play'].map((type, i) => {
      const button = new Button(type);

      button.attr({
        anchor: [0.5, 0.5],
        pos: [1300, 400 + 150 * i],
        size: [170, 50],
        font: '36px Arial',
        lineHeight: 50,
        textAlign: 'center',
        color: '#00e15e',
        border: [3, '#00e15e'],
        borderRadius: 25,
        padding: 30,
      });
      bglayer.appendChild(button);

      return button;
    });

  speedupBtn.id = 'speedUp';
  speedupBtn.on('click', (evt) => {
    fglayer.timeline.playbackRate += 0.2;
  });

  slowdownBtn.on('click', (evt) => {
    fglayer.timeline.playbackRate -= 0.2;
  });

  pauseBtn.on('click', (evt) => {
    fglayer.timeline.playbackRate = 0;
  });

  playBtn.on('click', (evt) => {
    fglayer.timeline.playbackRate = 1;
  });

  const birdCountLabel = new spritejs.Label();
  birdCountLabel.attr({
    pos: [60, 80],
    font: '36px Arial',
    color: 'white',
  });

  bglayer.appendChild(birdCountLabel);

  setInterval(() => {
    birdCountLabel.text = `fps: ${fglayer.fps}`
      + ` | rate: ${fglayer.timeline.playbackRate.toFixed(2)}`;
  }, 100);
}());