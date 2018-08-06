(async function () {
  const {Scene, Sprite, Path} = spritejs;
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [600, 600]});
  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);
  const fglayer = scene.layer('fglayer');
  fglayer.canvas.style.backgroundColor = '#ffb965';

  const path = new Path(),
    d = 'M235.946483,75.0041277 C229.109329,53.4046689 214.063766,34.845093 195.469876,22.3846101 C175.428247,8.9577702 151.414895,2 127.314132,2 C75.430432,2 31.6212932,32.8626807 18.323944,74.9130141 C8.97646468,77.1439182 2,85.5871171 2,95.7172992 C2,104.709941 7.49867791,112.371771 15.2700334,115.546944 C15.8218133,115.773348 16.6030463,122.336292 16.8270361,123.236385 C22.1235768,144.534892 35.4236577,163.530709 52.5998558,176.952027 C52.6299032,176.976876 52.6626822,177.001726 52.6954612,177.026575 C72.5513428,192.535224 98.5478246,202 127.043705,202 C152.034964,202 176.867791,194.597706 197.428422,180.146527 C215.659011,167.335395 230.201962,148.621202 236.52831,126.969284 C237.566312,123.421373 238.549682,119.685713 239.038636,116.019079 C239.044099,115.983185 239.074146,115.444787 239.082341,115.442025 C246.673412,112.184022 252,104.580173 252,95.7172992 C252,85.6892748 245.15192,77.3371896 235.946483,75.0041277';

  // draw helper path
  path.attr({
    pos: [150, 180],
    strokeColor: 'yellow',
    lineWidth: 3,
    d,
  });
  fglayer.append(path);


  const s = new Sprite();
  s.attr({
    anchor: [0.5, 0.5],
    pos: [150, 180],
    offsetPath: d,
    zIndex: 200,
  });
  s.textures = ['guanguan3.png'];
  fglayer.appendChild(s);

  // run along path animation
  s.animate([
    {offsetDistance: 0},
    {offsetDistance: 1},
  ], {
    duration: 8000,
    direction: 'alternate',
    iterations: Infinity,
  });

  // turn around animation
  s.animate([
    {scale: [0.2, 0.2], offsetRotate: 'auto'},
    {scale: [0.2, -0.2], offsetRotate: 'reverse'},
    {scale: [0.2, 0.2], offsetRotate: 'auto'},
  ], {
    duration: 16000,
    iterations: Infinity,
    easing: 'step-end',
  });
}());
