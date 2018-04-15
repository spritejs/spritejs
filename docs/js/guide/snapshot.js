'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Path = _spritejs.Path;
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var _this = this;

  var scene, bglayer, randomTriangle, i, birdsJsonUrl, birdsRes, fglayer, bird, snapshotBtn, snapshotList;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          randomTriangle = function randomTriangle() {
            var triangle = new Path();
            var pos = [Math.random() * 1540, Math.random() * 600];
            var d = 'M0,0L0,10L8.66, 5z';
            triangle.attr({
              path: { d: d, transform: { scale: 5 } },
              pos: pos,
              fillColor: '#37c',
              rotate: Math.random() * 360
            });
            bglayer.append(triangle);
          };

          scene = new Scene('#snapshot', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          bglayer = scene.layer('bglayer', { handleEvent: false });


          for (i = 0; i < 100; i++) {
            randomTriangle();
          }

          birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
          birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
          _context2.next = 8;
          return scene.preload([birdsRes, birdsJsonUrl]);

        case 8:
          fglayer = scene.layer('fglayer');
          bird = new Sprite('bird1.png');


          bird.attr({
            anchor: [0.5, 0.5],
            pos: [50, 200],
            offsetPath: 'M0,100C0,100,200,-100,500,100S700,-100,1000,100S1200,-100,1700,100S2200,-100,2700,100'
          });
          fglayer.append(bird);

          bird.animate([{ textures: 'bird1.png' }, { textures: 'bird2.png' }, { textures: 'bird3.png' }, { textures: 'bird1.png' }], {
            duration: 300,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'step-end'
          });

          bird.animate([{ offsetDistance: 0 }, { offsetDistance: 1 }], {
            duration: 6000,
            iterations: Infinity
          });

          snapshotBtn = document.getElementById('take-snapshot'), snapshotList = document.getElementById('snapshot-list');


          snapshotBtn.addEventListener('click', function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(evt) {
              var canvas, snapshot, listItem;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return scene.snapshot();

                    case 2:
                      canvas = _context.sent;
                      snapshot = new Image();

                      snapshot.src = canvas.toDataURL();
                      listItem = document.createElement('li');

                      listItem.appendChild(snapshot);
                      snapshotList.appendChild(listItem);

                    case 8:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, _this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());

        case 16:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}))();