(async function () {
  const {Scene, Sprite, Label, Path, Group} = spritejs;
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 1200,
    height: 1200,
  });

  class Button extends Label {
    connect(parent, zOrder) {
      super.connect(parent, zOrder);

      this.addEventListener('mouseenter', (evt) => {
        this.attr({
          fillColor: '#fee139',
          bgcolor: '#32ab61',
        });
      });

      this.addEventListener('mousedown', (evt) => {
        this.attr({
          scale: 0.95,
        });
      });

      this.addEventListener('mouseup', (evt) => {
        this.attr({
          scale: 1,
        });
      });

      this.addEventListener('mouseleave', (evt) => {
        this.attr({
          fillColor: '#32ab61',
          bgcolor: '',
        });
      });
    }
  }

  const fglayer = scene.layer('fglayer');
  fglayer.canvas.style.backgroundColor = '#fee139';

  const [translateBtn, rotateBtn, scaleBtn, skewBtn, stopBtn]
    = ['translate', 'rotate', 'scale', 'skew', 'stop'].map((type, i) => {
      const button = new Button(type);

      button.attr({
        pos: [950, 350 + i * 100],
        font: '28px Arial',
        fillColor: '#32ab61',
        size: [130, 40],
        lineHeight: 40,
        padding: 16,
        border: [3, '#32ab61'],
        textAlign: 'center',
        borderRadius: 20,
        anchor: 0.5,
      });
      fglayer.appendChild(button);

      return button;
    });

  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);

  const huanhuan = new Group();
  huanhuan.attr({
    pos: [450, 600],
  });
  fglayer.append(huanhuan);

  const robot = new Sprite('huanhuan.png');
  robot.attr({
    anchor: 0.5,
    size: [156, 192],
  });
  huanhuan.appendChild(robot);

  const outerFireD = 'M19.8173,24.1766 L5.3273,32.9936 C4.6293,33.4186 3.7183,33.1976 3.2943,32.4996 C3.1953,32.3376 3.1313,32.1596 3.1003,31.9836 L0.1953,15.2736 C-1.0387,8.1796 3.7123,1.4286 10.8073,0.1946 C17.9013,-1.0394 24.6523,3.7116 25.8853,10.8056 C26.8283,16.2296 24.2443,21.4666 19.8173,24.1766';

  const outerFire = new Path();
  outerFire.attr({
    d: outerFireD,
    pos: [-30, 80],
    scale: 2,
    fillColor: 'rgb(253,88,45)',
    zIndex: -1,
  });
  huanhuan.append(outerFire);

  const innerFireD = 'M15.9906,13.766 L8.4096,26.718 C8.0486,27.335 7.2706,27.521 6.6726,27.133 C6.4296,26.976 6.2536,26.748 6.1536,26.491 L0.6356,12.223 C-1.1554,7.594 0.9666,2.393 5.3746,0.605 C9.7826,-1.182 14.8076,1.122 16.5976,5.752 C17.6546,8.483 17.3236,11.455 15.9906,13.766';

  const innerFire = new Path();
  innerFire.attr({
    d: innerFireD,
    pos: [-15, 90],
    rotate: 15,
    scale: 1.6,
    fillColor: 'rgb(254,222,9)',
    zIndex: -1,
  });
  huanhuan.append(innerFire);

  let animation = null;

  translateBtn.addEventListener('click', (evt) => {
    if(animation) animation.cancel();
    animation = huanhuan.animate([
      {translate: [0, 0]},
      {translate: [0, -100]},
    ], {
      duration: 1000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
    });
  });

  rotateBtn.addEventListener('click', (evt) => {
    if(animation) animation.cancel();
    animation = huanhuan.animate([
      {rotate: 0},
      {rotate: 360},
    ], {
      duration: 5000,
      iterations: Infinity,
      direction: 'reverse',
    });
  });

  scaleBtn.addEventListener('click', (evt) => {
    if(animation) animation.cancel();
    animation = huanhuan.animate([
      {scale: [1, 1]},
      {scale: [1, 0.5]},
      {scale: [1, 1]},
      {scale: [0, 1]},
      {scale: [-1, 1]},
      {scale: [1, 1]},
    ], {
      duration: 3000,
      iterations: Infinity,
    });
  });

  skewBtn.addEventListener('click', (evt) => {
    if(animation) animation.cancel();
    animation = huanhuan.animate([
      {skew: [0, 0]},
      {skew: [0, 30]},
      {skew: [0, 0]},
      {skew: [30, 0]},
      {skew: [0, 0]},
    ], {
      duration: 5000,
      iterations: Infinity,
    });
  });

  stopBtn.addEventListener('click', (evt) => {
    if(animation) animation.cancel();
  });
}());