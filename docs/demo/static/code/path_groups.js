(function () {
  const {Scene, Path, Group} = spritejs;
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]});

  const layer = scene.layer('fglayer');
  layer.canvas.style.backgroundColor = '#9cd470';

  const d = 'M235.946483,75.0041277 C229.109329,53.4046689 214.063766,34.845093 195.469876,22.3846101 C175.428247,8.9577702 151.414895,2 127.314132,2 C75.430432,2 31.6212932,32.8626807 18.323944,74.9130141 C8.97646468,77.1439182 2,85.5871171 2,95.7172992 C2,104.709941 7.49867791,112.371771 15.2700334,115.546944 C15.8218133,115.773348 16.6030463,122.336292 16.8270361,123.236385 C22.1235768,144.534892 35.4236577,163.530709 52.5998558,176.952027 C52.6299032,176.976876 52.6626822,177.001726 52.6954612,177.026575 C72.5513428,192.535224 98.5478246,202 127.043705,202 C152.034964,202 176.867791,194.597706 197.428422,180.146527 C215.659011,167.335395 230.201962,148.621202 236.52831,126.969284 C237.566312,123.421373 238.549682,119.685713 239.038636,116.019079 C239.044099,115.983185 239.074146,115.444787 239.082341,115.442025 C246.673412,112.184022 252,104.580173 252,95.7172992 C252,85.6892748 245.15192,77.3371896 235.946483,75.0041277';
  const shadowD = 'M82.1534529,43 C127.525552,43 164.306906,33.6283134 164.306906,21.663753 C164.306906,9.6991926 127.525552,0 82.1534529,0 C36.7813537,0 0,9.6991926 0,21.663753 C0,33.6283134 36.7813537,43 82.1534529,43 Z';
  const shadow = new Path();
  shadow.attr({
    path: shadowD,
    fillColor: '#000000',
    opacity: 0.05,
    pos: [500, 734],
    anchor: 0.5,
    scale: [1.3, 1.2],
  });
  layer.append(shadow);

  const lemon = new Path();
  lemon.attr({
    path: {d},
    anchor: 0.5,
    pos: [500, 600],
    fillColor: '#fed330',
    scale: 1.4,
  });
  layer.append(lemon);

  const lemonGroup = new Group();
  lemonGroup.attr({
    anchor: 0.5,
    pos: [610, 600],
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

  lemonGroup.on('mouseenter', (evt) => {
    layer.timeline.playbackRate = 3.0;
  });
  lemonGroup.on('mouseleave', (evt) => {
    layer.timeline.playbackRate = 1.0;
  });
}());