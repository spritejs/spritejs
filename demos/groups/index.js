(async function () {
  /* globals dat */
  const {Scene, Sprite, Group} = spritejs;
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 1200,
    height: 1200,
  });

  await scene.preload([
    '//p.ssl.qhimg.com/t01293283c63b01af00.png',
    '//s.ssl.qhres.com/static/ee4e193568c3ffcb.json',
  ]);

  const layer = scene.layer('fglayer');
  layer.canvas.style.backgroundColor = '#FFFDCC';

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

  window.scene = scene;
  window.lemon = lemon;
  window.guanguan = guanguan;
  window.group = group;

  const initGui = () => {
    const gui = new dat.GUI();
    const config = {
      choosen: 'lemon',
      initObject: lemon,
    };
    const x = gui.add({x: config.initObject.attributes.x}, 'x', 0, 800).onChange((val) => {
      config.initObject.attr({
        x: val,
      });
    });
    const y = gui.add({y: config.initObject.attributes.y}, 'y', 0, 800).onChange((val) => {
      config.initObject.attr({
        y: val,
      });
    });
    gui.add(config, 'choosen', ['lemon', 'guanguan', 'group']).onChange((val) => {
      config.initObject = layer.getElementsByName(val)[0] || group.getElementsByName(val)[0];
      x.setValue(config.initObject.attributes.x);
      y.setValue(config.initObject.attributes.y);
    });
  };

  initGui();
}());