"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Label = _spritejs.Label;

(function () {
  var scene = new Scene('#adaptive', {
    resolution: [700, 700]
  });
  var resolution = scene.resolution;
  var viewport = scene.viewport;
  var layer = scene.layer('fglayer');
  var label = new Label("resolution: ".concat(resolution, " | viewport: ").concat(viewport));
  label.attr({
    anchor: [0.5, 0.5],
    pos: [350, 350],
    font: '36px Arial'
  });
  layer.append(label);
})();

(function () {
  var scene = new Scene('#resize', {
    viewport: ['auto', 'auto'],
    resolution: [770, 770]
  });
  var resolution = scene.resolution;
  var viewport = scene.viewport;
  var layer = scene.layer('fglayer');
  var label = new Label("resolution: ".concat(resolution, " | viewport: ").concat(viewport));
  label.attr({
    anchor: [0.5, 0.5],
    pos: [350, 350],
    font: '36px Arial'
  });
  layer.append(label);
  scene.on('viewportChange', function () {
    var viewport = scene.viewport;
    label.text = "resolution: ".concat(resolution, " | viewport: ").concat(viewport);
  });
})();

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var scene, heightBtn, stickMode, extendBtn, layer, cloud, addRandomSnow;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          addRandomSnow = function _ref2() {
            var snow = new Sprite('snow');
            var x0 = 20 + Math.random() * 600,
                y0 = 0;
            snow.attr({
              anchor: [0.5, 0.5],
              pos: [x0, y0],
              size: [50, 50]
            });
            snow.animate([{
              x: x0 - 10
            }, {
              x: x0 + 10
            }], {
              duration: 1000,
              fill: 'forwards',
              direction: 'alternate',
              iterations: Infinity,
              easing: 'ease-in-out'
            });
            var dropAnim = snow.animate([{
              y: -200,
              rotate: 0
            }, {
              y: 2000,
              rotate: 1880
            }], {
              duration: 15000,
              fill: 'forwards'
            });
            dropAnim.finished.then(function () {
              snow.remove();
            });
            layer.append(snow);
          };

          scene = new Scene('#stickMode', {
            viewport: ['auto', 'auto'],
            resolution: [640, 1000],
            stickMode: 'width' // renderMode: 'repaintDirty',

          });
          heightBtn = document.getElementById('heightBtn'), stickMode = document.getElementById('stickMode'), extendBtn = document.getElementById('extendBtn');
          heightBtn.addEventListener('change', function (evt) {
            stickMode.style.paddingBottom = "".concat(50 + evt.target.value / 2, "%");
            scene.updateViewport();
          });
          extendBtn.addEventListener('click', function (evt) {
            scene.stickExtend = evt.target.checked;
            scene.updateViewport().updateResolution();
          });
          _context.next = 7;
          return scene.preload({
            id: 'snow',
            src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'
          }, {
            id: 'cloud',
            src: 'https://p5.ssl.qhimg.com/t01d2ff600bae7fe897.png'
          });

        case 7:
          layer = scene.layer('fglayer');
          cloud = new Sprite('cloud');
          cloud.attr({
            anchor: [0.5, 0],
            pos: [320, -50],
            size: [200, 130]
          });
          layer.append(cloud);
          setInterval(addRandomSnow, 200);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))();