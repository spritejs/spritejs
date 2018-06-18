'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var birdsJsonUrl, birdsRes, scene, layer, s, util, _curvejs, Stage, Curve, motion, randomColor, stage, tick;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          tick = function tick() {
            stage.update();
            layer.draw(false);
            requestAnimationFrame(tick);
          };

          birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
          birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
          scene = new Scene('#curvejs', {
            resolution: [1540, 600],
            viewport: 'auto'
          });
          layer = scene.layer('fglayer', {
            autoRender: false
          });
          _context.next = 7;
          return scene.preload([birdsRes, birdsJsonUrl]);

        case 7:
          s = new Sprite('bird1.png');


          s.attr({
            anchor: [0.5, 0.5],
            pos: [300, 100],
            transform: {
              scale: [0.5, 0.5]
            },
            offsetPath: 'M10,80 q100,120 120,20 q140,-50 160,0',
            zIndex: 200
          });
          s.animate([{ offsetDistance: 0 }, { offsetDistance: 1 }], {
            duration: 3000,
            direction: 'alternate',
            iterations: Infinity
          });

          s.animate([{ scale: [0.5, 0.5], offsetRotate: 'auto' }, { scale: [0.5, -0.5], offsetRotate: 'reverse' }, { scale: [0.5, 0.5], offsetRotate: 'auto' }], {
            duration: 6000,
            iterations: Infinity,
            easing: 'step-end'
          });
          s.animate([{ textures: 'bird1.png' }, { textures: 'bird2.png' }, { textures: 'bird3.png' }], {
            duration: 300,
            direction: 'alternate',
            iterations: Infinity
          });
          layer.appendChild(s);

          util = {
            random: function random(min, max) {
              return min + Math.floor(Math.random() * (max - min + 1));
            },
            randomColor: function randomColor() {
              return ['#22CAB3', '#90CABE', '#A6EFE8', '#C0E9ED', '#C0E9ED', '#DBD4B7', '#D4B879', '#ECCEB2', '#F2ADA6', '#FF7784'][util.random(0, 9)];
            }
          };
          _curvejs = curvejs, Stage = _curvejs.Stage, Curve = _curvejs.Curve, motion = _curvejs.motion;
          randomColor = util.randomColor, stage = new Stage(layer.canvas);


          stage.add(new Curve({
            points: [378, 123, 297, 97, 209, 174, 217, 258],
            color: randomColor(),
            motion: motion.rotate,
            data: Math.PI / 20
          }));

          stage.add(new Curve({
            points: [378, 123, 385, 195, 293, 279, 217, 258],
            color: randomColor(),
            motion: motion.rotate,
            data: Math.PI / 20
          }));

          tick();

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();