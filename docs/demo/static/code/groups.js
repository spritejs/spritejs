(async function () {
  const {Scene, Sprite, Group} = spritejs;
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200], stickMode: 'width'});

  await scene.preload([
    'http://p7.qhimg.com/t01293283c63b01af00.png',
    'http://s6.qhres.com/static/ee4e193568c3ffcb.json',
  ]);

  const layer = scene.layer('fglayer');
  layer.canvas.style.backgroundColor = '#FFFDCC';


  window.addEventListener('resize', (evt) => {
    paper.setViewport('auto', 'auto'); // eslint-disable-line no-undef
  });

  const group = new Group();
  group.name = 'group';
  group.attr({
    pos: [380, 460],
  });
  layer.append(group);

  const guanguan = new Sprite('guanguan.png');
  guanguan.name = 'guanguan';
  guanguan.attr({
    pos: [200, 10],
  });
  group.append(guanguan);

  const lemon = new Sprite('lemon.png');
  lemon.name = 'lemon';
  lemon.attr({
    pos: [10, 80],
    scale: 0.5,
  });
  group.append(lemon);

  const initGui = () => {
    const gui = new dat.GUI();
    const config = {
      choosen: 'lemon',
      initObject: lemon,
    };
    const x = gui.add(config.initObject.attr(), 'x', 0, 800).onChange((val) => {
      config.initObject.attr({
        x: val,
      });
    });
    const y = gui.add(config.initObject.attr(), 'y', 0, 800).onChange((val) => {
      config.initObject.attr({
        y: val,
      });
    });
    gui.add(config, 'choosen', ['lemon', 'guanguan', 'group']).onChange((val) => {
      config.initObject = layer.getElementsByName(val)[0] || group.getElementsByName(val)[0];
      x.setValue(config.initObject.attr().x);
      y.setValue(config.initObject.attr().y);
    });
  };

  initGui();
}());