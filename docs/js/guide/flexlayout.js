'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Group = _spritejs.Group,
    Label = _spritejs.Label;
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var scene, layer, layout, s1, s2, s3, s4;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          scene = new Scene('#flex-basic', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          _context.next = 3;
          return scene.preload(['https://p5.ssl.qhimg.com/t01f47a319aebf27174.png', 'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json']);

        case 3:
          layer = scene.layer(), layout = new Group();


          layout.attr({
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            // size: [300, 500],
            width: 1200,
            pos: [770, 50],
            anchor: [0.5, 0],
            border: [6, '#aaa']
          });

          layer.append(layout);

          s1 = new Sprite('guanguan1.png'), s2 = new Sprite('guanguan2.png'), s3 = new Sprite('guanguan3.png'), s4 = new Sprite('guanguan3.png');


          s4.attr({
            anchor: 0.5,
            scale: [-1, 1]
          });

          layout.append(s1, s2, s3, s4);

          layout.animate([{ width: 1200 }, { width: 400 }], {
            duration: 3000,
            direction: 'alternate',
            iterations: Infinity
          });

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();(function () {
  var scene = new Scene('#flex-direction', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var s1 = new Sprite();
  s1.attr({
    size: [50, 50],
    bgcolor: 'red'
  });
  var s2 = s1.cloneNode();
  s2.attr({ bgcolor: 'blue' });
  var s3 = s1.cloneNode();
  s3.attr({ bgcolor: 'green' });

  var g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [200, 300],
    width: 200,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row'
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  var g2 = g1.cloneNode();
  g2.attr({
    x: 500,
    flexDirection: 'row-reverse'
  });
  g2.append.apply(g2, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g2);

  var g3 = g1.cloneNode();
  g3.attr({
    x: 800,
    flexDirection: 'column',
    width: '',
    height: 200
  });
  g3.append.apply(g3, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g3);

  var g4 = g1.cloneNode();
  g4.attr({
    x: 1100,
    flexDirection: 'column-reverse',
    width: '',
    height: 200
  });
  g4.append.apply(g4, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g4);
})();(function () {
  var scene = new Scene('#flex-wrap', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var s1 = new Sprite();
  s1.attr({
    size: [100, 100],
    bgcolor: 'red'
  });
  var s2 = s1.cloneNode();
  s2.attr({ bgcolor: 'blue' });
  var s3 = s1.cloneNode();
  s3.attr({ bgcolor: 'green' });

  var g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [300, 300],
    width: 200,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  var g2 = g1.cloneNode();
  g2.attr({
    x: 800,
    flexWrap: 'wrap'
  });
  g2.append.apply(g2, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g2);

  var g3 = g1.cloneNode();
  g3.attr({
    x: 1300,
    flexWrap: 'wrap-reverse'
  });
  g3.append.apply(g3, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g3);
})();(function () {
  var scene = new Scene('#flex-justify', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var s1 = new Sprite();
  s1.attr({
    size: [50, 50],
    bgcolor: 'red'
  });
  var s2 = s1.cloneNode();
  s2.attr({ bgcolor: 'blue' });
  var s3 = s1.cloneNode();
  s3.attr({ bgcolor: 'green' });

  var g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [770, 100],
    width: 300,
    bgcolor: 'grey',
    display: 'flex',
    justifyContent: 'flex-start'
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  var g2 = g1.cloneNode();
  g2.attr({
    y: 200,
    justifyContent: 'flex-end'
  });
  g2.append.apply(g2, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g2);

  var g3 = g1.cloneNode();
  g3.attr({
    y: 300,
    justifyContent: 'center'
  });
  g3.append.apply(g3, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g3);

  var g4 = g1.cloneNode();
  g4.attr({
    y: 400,
    justifyContent: 'space-between'
  });
  g4.append.apply(g4, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g4);

  var g5 = g1.cloneNode();
  g5.attr({
    y: 500,
    justifyContent: 'space-around'
  });
  g5.append.apply(g5, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g5);
})();(function () {
  var scene = new Scene('#flex-alignItems', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var s1 = new Sprite();
  s1.attr({
    size: [50, 100],
    bgcolor: 'red'
  });
  var s2 = s1.cloneNode();
  s2.attr({ bgcolor: 'blue', height: 200 });
  var s3 = new Label('中\n国');
  s3.attr({
    fillColor: 'cyan',
    font: '2rem "宋体"',
    bgcolor: 'green'
  });

  var g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [200, 300],
    width: 200,
    bgcolor: 'grey',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  var g2 = g1.cloneNode();
  g2.attr({
    x: 550,
    alignItems: 'flex-end'
  });
  g2.append.apply(g2, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g2);

  var g3 = g1.cloneNode();
  g3.attr({
    x: 900,
    alignItems: 'center'
  });
  g3.append.apply(g3, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g3);

  var g4 = g1.cloneNode();
  g4.attr({
    x: 1250,
    alignItems: 'stretch'
  });
  g4.append.apply(g4, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g4);
})();(function () {
  var scene = new Scene('#flex-alignContent', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var s1 = new Sprite();
  s1.attr({
    size: [100, 100],
    bgcolor: 'red'
  });
  var s2 = s1.cloneNode();
  s2.attr({ bgcolor: 'blue' });
  var s3 = s1.cloneNode();
  s3.attr({ bgcolor: 'green' });

  var g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [200, 300],
    width: 200,
    height: 300,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  var g2 = g1.cloneNode();
  g2.attr({
    x: 500,
    alignContent: 'flex-start'
  });
  g2.append.apply(g2, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g2);

  var g3 = g1.cloneNode();
  g3.attr({
    x: 800,
    alignContent: 'flex-end'
  });
  g3.append.apply(g3, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g3);

  var g4 = g1.cloneNode();
  g4.attr({
    x: 1100,
    alignContent: 'space-between'
  });
  g4.append.apply(g4, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g4);

  var g5 = g1.cloneNode();
  g5.attr({
    x: 1400,
    alignContent: 'space-around'
  });
  g5.append.apply(g5, _toConsumableArray([s1, s2, s3].map(function (s) {
    return s.cloneNode();
  })));
  layer.append(g5);
})();(function () {
  var scene = new Scene('#flex-order', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var s1 = new Label('1');
  s1.attr({
    lineHeight: 100,
    fillColor: 'white',
    font: 'bold 2rem "宋体"',
    textAlign: 'center',
    size: [100, 100],
    bgcolor: 'red'
  });
  var s2 = s1.cloneNode();
  s2.attr({ bgcolor: 'blue', text: '2' });
  var s3 = s1.cloneNode();
  s3.attr({ bgcolor: 'green', text: '3' });

  var g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [300, 300],
    width: 200,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  var g2 = g1.cloneNode();
  g2.attr({
    x: 800
  });
  g2.append.apply(g2, _toConsumableArray([s1, s2, s3].map(function (s, i) {
    return s.cloneNode().attr({ order: 2 - i });
  })));
  layer.append(g2);

  var g3 = g1.cloneNode();
  g3.attr({
    x: 1300
  });
  g3.append.apply(g3, _toConsumableArray([s1, s2, s3].map(function (s, i) {
    return s.cloneNode().attr({ order: Math.abs(1 - i) });
  })));
  layer.append(g3);
})();(function () {
  var scene = new Scene('#flex-flex', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var s1 = new Label('1');
  s1.attr({
    lineHeight: 100,
    fillColor: 'white',
    font: 'bold 2rem "宋体"',
    textAlign: 'center',
    size: [100, 100],
    bgcolor: 'red',
    flex: 1
  });
  var s2 = s1.cloneNode();
  s2.attr({ bgcolor: 'blue', text: '2' });
  var s3 = s1.cloneNode();
  s3.attr({ bgcolor: 'green', text: '3' });

  var g1 = new Group();
  g1.attr({
    anchor: 0.5,
    pos: [300, 300],
    width: 300,
    bgcolor: 'grey',
    display: 'flex',
    flexDirection: 'row'
  });
  layer.append(g1);

  g1.append(s1, s2, s3);

  var g2 = g1.cloneNode();
  g2.attr({
    x: 800
  });
  g2.append.apply(g2, _toConsumableArray([s1, s2, s3].map(function (s, i) {
    return s.cloneNode().attr({ flex: i + 1 });
  })));
  layer.append(g2);

  var g3 = g1.cloneNode();
  g3.attr({
    x: 1300
  });
  g3.append.apply(g3, _toConsumableArray([s1, s2, s3].map(function (s, i) {
    return s.cloneNode().attr({ flex: 1 + Math.abs(1 - i) });
  })));
  layer.append(g3);
})();