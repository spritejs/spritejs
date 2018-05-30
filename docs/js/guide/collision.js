'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var birdsJsonUrl, birdsRes, scene, layer, bird, createRandomBlock, blocks, i;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          createRandomBlock = function createRandomBlock() {
            var block = new Sprite();
            var x = Math.round(1540 * Math.random());
            var y = Math.round(600 * Math.random());
            var rotate = 360 * Math.random();

            block.attr({
              pos: [x, y],
              rotate: rotate,
              bgcolor: '#37c',
              size: [30, 70],
              opacity: 0.5
            });
            layer.append(block);

            return block;
          };

          birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
          birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
          scene = new Scene('#obbcollision', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          layer = scene.layer('fglayer');
          _context.next = 7;
          return scene.preload([birdsRes, birdsJsonUrl]);

        case 7:
          bird = new Sprite('bird1.png');


          bird.attr({
            anchor: [0.5, 0.5],
            pos: [50, 200],
            offsetPath: 'M0,100C0,100,200,-100,500,100S700,-100,1000,100S1200,-100,1700,100S2200,-100,2700,100'
          });
          layer.append(bird);

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

          blocks = [];

          for (i = 0; i < 500; i++) {
            blocks.push(createRandomBlock());
          }

          layer.on('update', function (evt) {
            blocks.forEach(function (block) {
              if (bird.OBBCollision(block)) {
                block.attr('bgcolor', '#c73');
              } else {
                block.attr('bgcolor', '#37c');
              }
            });
          });

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();