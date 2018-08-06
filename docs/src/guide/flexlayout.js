const {Scene, Sprite, Group, Label} = spritejs

/* demo: flex-basic */
;(async function () {
  const scene = new Scene('#flex-basic', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  await scene.preload([
    'https://p5.ssl.qhimg.com/t01f47a319aebf27174.png',
    'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json',
  ]);

  const layer = scene.layer(),
    layout = new Group();

  layout.attr({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    // size: [300, 500],
    width: 1200,
    pos: [770, 50],
    anchor: [0.5, 0],
    border: [6, '#aaa'],
  });

  layer.append(layout);

  const s1 = new Sprite('guanguan1.png'),
    s2 = new Sprite('guanguan2.png'),
    s3 = new Sprite('guanguan3.png'),
    s4 = new Sprite('guanguan3.png');

  s4.attr({
    anchor: 0.5,
    scale: [-1, 1],
  });

  layout.append(s1, s2, s3, s4);

  layout.animate([
    {width: 1200},
    {width: 400},
  ], {
    duration: 3000,
    direction: 'alternate',
    iterations: Infinity,
  });
}())

/* demo: flex-direction */
;(function () {
  const scene = new Scene('#flex-direction', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const s1 = new Sprite();
  s1.attr({
    size: [50, 50],
    bgcolor: 'red',
  });
  const s2 = s1.cloneNode();
  s2.attr({bgcolor: 'blue'});
  const s3 = s1.cloneNode();
  s3.attr({bgcolor: 'green'});

  const g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [200, 300],
    width: 200,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row',
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  const g2 = g1.cloneNode();
  g2.attr({
    x: 500,
    flexDirection: 'row-reverse',
  });
  g2.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g2);

  const g3 = g1.cloneNode();
  g3.attr({
    x: 800,
    flexDirection: 'column',
    width: '',
    height: 200,
  });
  g3.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g3);

  const g4 = g1.cloneNode();
  g4.attr({
    x: 1100,
    flexDirection: 'column-reverse',
    width: '',
    height: 200,
  });
  g4.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g4);
}())

/* demo: flex-wrap */
;(function () {
  const scene = new Scene('#flex-wrap', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const s1 = new Sprite();
  s1.attr({
    size: [100, 100],
    bgcolor: 'red',
  });
  const s2 = s1.cloneNode();
  s2.attr({bgcolor: 'blue'});
  const s3 = s1.cloneNode();
  s3.attr({bgcolor: 'green'});

  const g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [300, 300],
    width: 200,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  const g2 = g1.cloneNode();
  g2.attr({
    x: 800,
    flexWrap: 'wrap',
  });
  g2.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g2);

  const g3 = g1.cloneNode();
  g3.attr({
    x: 1300,
    flexWrap: 'wrap-reverse',
  });
  g3.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g3);
}())

/* demo: flex-justify */
;(function () {
  const scene = new Scene('#flex-justify', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const s1 = new Sprite();
  s1.attr({
    size: [50, 50],
    bgcolor: 'red',
  });
  const s2 = s1.cloneNode();
  s2.attr({bgcolor: 'blue'});
  const s3 = s1.cloneNode();
  s3.attr({bgcolor: 'green'});

  const g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [770, 100],
    width: 300,
    bgcolor: 'grey',
    display: 'flex',
    justifyContent: 'flex-start',
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  const g2 = g1.cloneNode();
  g2.attr({
    y: 200,
    justifyContent: 'flex-end',
  });
  g2.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g2);

  const g3 = g1.cloneNode();
  g3.attr({
    y: 300,
    justifyContent: 'center',
  });
  g3.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g3);

  const g4 = g1.cloneNode();
  g4.attr({
    y: 400,
    justifyContent: 'space-between',
  });
  g4.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g4);

  const g5 = g1.cloneNode();
  g5.attr({
    y: 500,
    justifyContent: 'space-around',
  });
  g5.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g5);
}())

/* demo: flex-alignItems */
;(function () {
  const scene = new Scene('#flex-alignItems', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const s1 = new Sprite();
  s1.attr({
    size: [50, 100],
    bgcolor: 'red',
  });
  const s2 = s1.cloneNode();
  s2.attr({bgcolor: 'blue', height: 200});
  const s3 = new Label('中\n国');
  s3.attr({
    fillColor: 'cyan',
    font: '2rem "宋体"',
    bgcolor: 'green',
  });

  const g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [200, 300],
    width: 200,
    bgcolor: 'grey',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  const g2 = g1.cloneNode();
  g2.attr({
    x: 550,
    alignItems: 'flex-end',
  });
  g2.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g2);

  const g3 = g1.cloneNode();
  g3.attr({
    x: 900,
    alignItems: 'center',
  });
  g3.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g3);

  const g4 = g1.cloneNode();
  g4.attr({
    x: 1250,
    alignItems: 'stretch',
  });
  g4.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g4);
}())

/* demo: flex-alignContent */
;(function () {
  const scene = new Scene('#flex-alignContent', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const s1 = new Sprite();
  s1.attr({
    size: [100, 100],
    bgcolor: 'red',
  });
  const s2 = s1.cloneNode();
  s2.attr({bgcolor: 'blue'});
  const s3 = s1.cloneNode();
  s3.attr({bgcolor: 'green'});

  const g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [200, 300],
    width: 200,
    height: 300,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  const g2 = g1.cloneNode();
  g2.attr({
    x: 500,
    alignContent: 'flex-start',
  });
  g2.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g2);

  const g3 = g1.cloneNode();
  g3.attr({
    x: 800,
    alignContent: 'flex-end',
  });
  g3.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g3);

  const g4 = g1.cloneNode();
  g4.attr({
    x: 1100,
    alignContent: 'space-between',
  });
  g4.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g4);

  const g5 = g1.cloneNode();
  g5.attr({
    x: 1400,
    alignContent: 'space-around',
  });
  g5.append(...[s1, s2, s3].map(s => s.cloneNode()));
  layer.append(g5);
}())

/* demo: flex-order */
;(function () {
  const scene = new Scene('#flex-order', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const s1 = new Label('1');
  s1.attr({
    lineHeight: 100,
    fillColor: 'white',
    font: 'bold 2rem "宋体"',
    textAlign: 'center',
    size: [100, 100],
    bgcolor: 'red',
  });
  const s2 = s1.cloneNode();
  s2.attr({bgcolor: 'blue', text: '2'});
  const s3 = s1.cloneNode();
  s3.attr({bgcolor: 'green', text: '3'});

  const g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [300, 300],
    width: 200,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  const g2 = g1.cloneNode();
  g2.attr({
    x: 800,
  });
  g2.append(...[s1, s2, s3].map((s, i) => s.cloneNode().attr({order: 2 - i})));
  layer.append(g2);

  const g3 = g1.cloneNode();
  g3.attr({
    x: 1300,
  });
  g3.append(...[s1, s2, s3].map((s, i) => s.cloneNode().attr({order: Math.abs(1 - i)})));
  layer.append(g3);
}())


/* demo: flex-flex */
;(function () {
  const scene = new Scene('#flex-flex', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const s1 = new Label('1');
  s1.attr({
    lineHeight: 100,
    fillColor: 'white',
    font: 'bold 2rem "宋体"',
    textAlign: 'center',
    size: [100, 100],
    bgcolor: 'red',
    flex: 1,
  });
  const s2 = s1.cloneNode();
  s2.attr({bgcolor: 'blue', text: '2'});
  const s3 = s1.cloneNode();
  s3.attr({bgcolor: 'green', text: '3'});

  const g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [300, 300],
    width: 300,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row',
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  const g2 = g1.cloneNode();
  g2.attr({
    x: 800,
  });
  g2.append(...[s1, s2, s3].map((s, i) => s.cloneNode().attr({flex: i + 1})));
  layer.append(g2);

  const g3 = g1.cloneNode();
  g3.attr({
    x: 1300,
  });
  g3.append(...[s1, s2, s3].map((s, i) => s.cloneNode().attr({flex: 1 + Math.abs(1 - i)})));
  layer.append(g3);
}());
