const {Scene, Sprite} = spritejs

/* demo: transition-sequence */
;(async function () {
  const scene = new Scene('#transition-sequence', {viewport: ['auto', 'auto'], resolution: [1540, 600]});

  const layer = scene.layer();

  const sprite = new spritejs.Sprite({
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
}())

/* demo: transition-hover */
;(async function () {
  const {Scene, Sprite, Path, Group} = spritejs;
  const scene = new Scene('#transition-hover', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);
  const layer = scene.layer('fglayer');

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
    path: shadowD,
    fillColor: '#000000',
    opacity: 0.05,
    pos: [500, 434],
    anchor: 0.5,
    scale: [1.3, 1.2],
  });
  layer.append(shadow);

  const lemon = new Path();
  lemon.attr({
    path: {d},
    anchor: 0.5,
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
      path: {d: d2, transform: {scale: 0.65}},
      pos: [90, 90],
      lineWidth: 2,
      lineCap: 'round',
      lineJoin: 'round',
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

  lemonGroup.on('mouseenter', (evt) => {
    layer.timeline.playbackRate = 3.0;
    transition.attr({
      pos: [730, 190],
    });
  });
  lemonGroup.on('mouseleave', (evt) => {
    layer.timeline.playbackRate = 1.0;
    transition.attr({
      pos: [710, 210],
    });
  });
}())

/* demo: circle */
;(function () {
  const scene = new Scene('#circle', {viewport: ['auto', 'auto'], resolution: [1540, 600]});

  const layer = scene.layer();

  const sprite = new Sprite();
  sprite.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
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
}())

/* demo: animate-timeline */
;(async function () {
  const scene = new Scene('#animate-timeline', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

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
    const x0 = 20 + Math.random() * 1500,
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
}())

/* demo: animate-tweenjs */
;(function () {
  const scene = new Scene('#animate-tweenjs', {viewport: ['auto', 'auto'], resolution: [1540, 600]});

  const layer = scene.layer();

  const sprite = new Sprite();
  sprite.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    bgcolor: 'rgb(128, 0, 255)',
    size: [100, 100],
  });
  layer.append(sprite);

  const coords = {rotate: 0};

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
}());
