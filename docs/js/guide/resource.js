'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Label = _spritejs.Label,
    Group = _spritejs.Group;
(function () {
  var scene = new Scene('#load-texture', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var robot = new Sprite('https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png');
  robot.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    scale: 0.5
  });

  layer.append(robot);

  var label = new Label('\u56FE\u7247\u5927\u5C0F\uFF1A ' + robot.contentSize);
  label.attr({
    anchor: [0.5, 0.5],
    pos: [770, 100],
    font: '36px Arial'
  });

  layer.append(label);
})();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var scene, layer, robot, label;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          scene = new Scene('#preload-texture', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          _context.next = 3;
          return scene.preload({
            id: 'robot',
            src: 'https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png'
          });

        case 3:
          layer = scene.layer();
          robot = new Sprite('robot');

          robot.attr({
            anchor: [0.5, 0.5],
            pos: [770, 300],
            scale: 0.5
          });

          layer.append(robot);

          label = new Label('\u56FE\u7247\u5927\u5C0F\uFF1A ' + robot.contentSize);

          label.attr({
            anchor: [0.5, 0.5],
            pos: [770, 100],
            font: '36px Arial'
          });

          layer.append(label);

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var scene, earthPNG, earthJSON, layer, group, earth, earthShadow;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          scene = new Scene('#texturepacker', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          earthPNG = 'https://p3.ssl.qhimg.com/t01806718065fe97c65.png', earthJSON = 'https://s3.ssl.qhres.com/static/d479c28f553c6cff.json';
          _context2.next = 4;
          return scene.preload([earthPNG, earthJSON]);

        case 4:
          layer = scene.layer();
          group = new Group();

          group.attr({
            pos: [655, 215]
          });

          earth = new Sprite();

          earth.attr({
            textures: 'earth_blue.png',
            pos: [115, 115],
            anchor: [0.5, 0.5]
          });
          earthShadow = new Sprite();

          earthShadow.attr({
            textures: 'earth_shadow2.png',
            pos: [0, 0]
          });

          group.append(earth, earthShadow);
          layer.append(group);

          earth.animate([{ rotate: 0, textures: 'earth_blue.png' }, { rotate: 360, textures: 'earth_yellow.png' }, { rotate: 720, textures: 'earth_green.png' }, { rotate: 1080, textures: 'earth_white.png' }, { rotate: 1440, textures: 'earth_blue.png' }], {
            duration: 20000,
            iterations: Infinity
          });

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}))();(function () {
  var loadRes = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var imgs;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              button.remove();

              scene.on('preload', function (evt) {
                label.text = '\u52A0\u8F7D\u4E2D... ' + evt.loaded.length + ' / ' + evt.resources.length;
              });

              _context3.next = 4;
              return scene.preload.apply(scene, images);

            case 4:
              imgs = _context3.sent;


              label.remove();

              imgs.forEach(function (_ref4, i) {
                var texture = _ref4.texture;

                var sprite = new Sprite();
                sprite.attr({
                  textures: [texture],
                  x: 125 + i % 8 * 170,
                  y: 100 + Math.floor(i / 8) * 200,
                  size: [150, 150]
                });
                layer.append(sprite);
              });

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function loadRes() {
      return _ref3.apply(this, arguments);
    };
  }();

  var scene = new Scene('#preload-many', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var images = ['https://p1.ssl.qhimg.com/t016dc86e4b2c9b83a4.jpg', 'https://p0.ssl.qhimg.com/t01408bb4e2bed11d2e.jpg', 'https://p2.ssl.qhimg.com/t014e6d3eddccf40638.jpg', 'https://p2.ssl.qhimg.com/t014db3a8e2bf146c5b.jpg', 'https://p4.ssl.qhimg.com/t01ff1bf2a37a741821.jpg', 'https://p2.ssl.qhimg.com/t01dc1341ab5d0fe663.jpg', 'https://p5.ssl.qhimg.com/t01a0acf6aa37d00f91.jpg', 'https://p1.ssl.qhimg.com/t013b8514570a69a1c8.jpg', 'https://p2.ssl.qhimg.com/t011c71494e6d98d92b.jpg', 'https://p4.ssl.qhimg.com/t01ab40609e924d995c.jpg', 'https://p0.ssl.qhimg.com/t01794495bebb84f47d.jpg', 'https://p4.ssl.qhimg.com/t01a30bb66a9d11d624.jpg', 'https://p4.ssl.qhimg.com/t01b3d2c0b0093a957d.jpg', 'https://p0.ssl.qhimg.com/t010da5e7311c8dd3a9.jpg', 'https://p5.ssl.qhimg.com/t0189dd547c322b2357.jpg', 'https://p4.ssl.qhimg.com/t01feb50457ebbada10.jpg'];

  var label = new Label('加载中... 0 / 16');
  label.attr({
    anchor: [0.5, 0.5],
    font: '36px Arial',
    pos: [770, 200]
  });

  layer.append(label);

  var button = new Label('点击加载');
  button.attr({
    anchor: [0.5, 0.5],
    font: '44px Arial',
    pos: [770, 350],
    border: [2, 'black'],
    borderRadius: 12,
    padding: [10, 10]
  });
  layer.append(button);

  button.on('mouseenter', function (evt) {
    scene.container.style.cursor = 'pointer';
  });
  button.on('mouseleave', function (evt) {
    scene.container.style.cursor = 'default';
  });
  button.on('mousedown', function (evt) {
    evt.target.attr('scale', 0.8);
  });
  button.on('mouseup', function (evt) {
    evt.target.attr('scale', 1);
    loadRes();
  });
})();