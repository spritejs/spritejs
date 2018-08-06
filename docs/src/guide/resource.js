const {Scene, Sprite, Label, Group} = spritejs

/* demo: load-texture */
;(function () {
  const scene = new Scene('#load-texture', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png');
  robot.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    scale: 0.5,
  });

  layer.append(robot);

  const label = new Label(`图片大小： ${robot.contentSize}`);
  label.attr({
    anchor: [0.5, 0.5],
    pos: [770, 100],
    font: '36px Arial',
  });

  layer.append(label);
}())

/* demo: preload-texture */
;(async function () {
  const scene = new Scene('#preload-texture', {viewport: ['auto', 'auto'], resolution: [1540, 600]});

  await scene.preload({
    id: 'robot',
    src: 'https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png',
  });

  const layer = scene.layer();

  const robot = new Sprite('robot');
  robot.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    scale: 0.5,
  });

  layer.append(robot);

  const label = new Label(`图片大小： ${robot.contentSize}`);
  label.attr({
    anchor: [0.5, 0.5],
    pos: [770, 100],
    font: '36px Arial',
  });

  layer.append(label);
}())

/* demo: texturepacker */
;(async function () {
  const scene = new Scene('#texturepacker', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const earthPNG = 'https://p3.ssl.qhimg.com/t01806718065fe97c65.png',
    earthJSON = 'https://s3.ssl.qhres.com/static/d479c28f553c6cff.json';

  await scene.preload([earthPNG, earthJSON]);

  const layer = scene.layer();
  const group = new Group();
  group.attr({
    pos: [655, 215],
  });

  const earth = new Sprite();
  earth.attr({
    textures: 'earth_blue.png',
    pos: [115, 115],
    anchor: [0.5, 0.5],
  });
  const earthShadow = new Sprite();
  earthShadow.attr({
    textures: 'earth_shadow2.png',
    pos: [0, 0],
  });

  group.append(earth, earthShadow);
  layer.append(group);

  earth.animate([
    {rotate: 0, textures: 'earth_blue.png'},
    {rotate: 360, textures: 'earth_yellow.png'},
    {rotate: 720, textures: 'earth_green.png'},
    {rotate: 1080, textures: 'earth_white.png'},
    {rotate: 1440, textures: 'earth_blue.png'},
  ], {
    duration: 20000,
    iterations: Infinity,
  });
}())

/* demo: preload-many */
;(function () {
  const scene = new Scene('#preload-many', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const images = [
    'https://p1.ssl.qhimg.com/t016dc86e4b2c9b83a4.jpg',
    'https://p0.ssl.qhimg.com/t01408bb4e2bed11d2e.jpg',
    'https://p2.ssl.qhimg.com/t014e6d3eddccf40638.jpg',
    'https://p2.ssl.qhimg.com/t014db3a8e2bf146c5b.jpg',
    'https://p4.ssl.qhimg.com/t01ff1bf2a37a741821.jpg',
    'https://p2.ssl.qhimg.com/t01dc1341ab5d0fe663.jpg',
    'https://p5.ssl.qhimg.com/t01a0acf6aa37d00f91.jpg',
    'https://p1.ssl.qhimg.com/t013b8514570a69a1c8.jpg',
    'https://p2.ssl.qhimg.com/t011c71494e6d98d92b.jpg',
    'https://p4.ssl.qhimg.com/t01ab40609e924d995c.jpg',
    'https://p0.ssl.qhimg.com/t01794495bebb84f47d.jpg',
    'https://p4.ssl.qhimg.com/t01a30bb66a9d11d624.jpg',
    'https://p4.ssl.qhimg.com/t01b3d2c0b0093a957d.jpg',
    'https://p0.ssl.qhimg.com/t010da5e7311c8dd3a9.jpg',
    'https://p5.ssl.qhimg.com/t0189dd547c322b2357.jpg',
    'https://p4.ssl.qhimg.com/t01feb50457ebbada10.jpg',
  ];

  const label = new Label('加载中... 0 / 16');
  label.attr({
    anchor: [0.5, 0.5],
    font: '36px Arial',
    pos: [770, 200],
  });

  layer.append(label);

  const button = new Label('点击加载');
  button.attr({
    anchor: [0.5, 0.5],
    font: '44px Arial',
    pos: [770, 350],
    border: [2, 'black'],
    borderRadius: 12,
    padding: [10, 10],
  });
  layer.append(button);

  async function loadRes() {
    button.remove();

    scene.on('preload', (evt) => {
      label.text = `加载中... ${evt.loaded.length} / ${evt.resources.length}`;
    });

    const imgs = await scene.preload(...images);

    label.remove();

    imgs.forEach(({texture}, i) => {
      const sprite = new Sprite();
      sprite.attr({
        textures: [texture],
        x: 125 + (i % 8) * 170,
        y: 100 + Math.floor(i / 8) * 200,
        size: [150, 150],
      });
      layer.append(sprite);
    });
  }

  button.on('mouseenter', (evt) => {
    scene.container.style.cursor = 'pointer';
  });
  button.on('mouseleave', (evt) => {
    scene.container.style.cursor = 'default';
  });
  button.on('mousedown', (evt) => {
    evt.target.attr('scale', 0.8);
  });
  button.on('mouseup', (evt) => {
    evt.target.attr('scale', 1);
    loadRes();
  });
}());
