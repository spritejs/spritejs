'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;
(function () {
  var scene = new Scene('#circle', { viewport: ['auto', 'auto'], resolution: [1540, 600] });

  var layer = scene.layer();

  var sprite = new Sprite();
  sprite.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    bgcolor: 'red',
    size: [50, 50],
    borderRadius: 25,
    translate: [0, -200],
    transformOrigin: [0, 200]
  });

  sprite.animate([{ rotate: 0 }, { rotate: 360 }], {
    duration: 3000,
    iterations: Infinity
  });

  layer.append(sprite);
})();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var scene, layer, _document$querySelect, _document$querySelect2, speed1, speed2, speed4, halfSpeed, pause, reversePlay, timeline, addRandomSnow;

  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          addRandomSnow = function addRandomSnow() {
            var snow = new Sprite('snow');
            var x0 = 20 + Math.random() * 1500,
                y0 = 0;

            snow.attr({
              anchor: [0.5, 0.5],
              pos: [x0, y0],
              size: [50, 50]
            });

            snow.animate([{ x: x0 - 10 }, { x: x0 + 10 }], {
              duration: 1000,
              fill: 'forwards',
              direction: 'alternate',
              iterations: Infinity,
              easing: 'ease-in-out'
            });

            var dropAnim = snow.animate([{ y: -20, rotate: 0 }, { y: 700, rotate: 360 }], {
              duration: 10000,
              fill: 'forwards'
            });

            dropAnim.finished.then(function () {
              snow.remove();
            });

            layer.append(snow);
          };

          scene = new Scene('#animate-timeline', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          layer = scene.layer();
          _context.next = 5;
          return scene.preload({ id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png' });

        case 5:
          _document$querySelect = document.querySelectorAll('#speed1, #speed2, #speed4, #halfSpeed, #pause, #reversePlay'), _document$querySelect2 = _slicedToArray(_document$querySelect, 6), speed1 = _document$querySelect2[0], speed2 = _document$querySelect2[1], speed4 = _document$querySelect2[2], halfSpeed = _document$querySelect2[3], pause = _document$querySelect2[4], reversePlay = _document$querySelect2[5];
          timeline = layer.timeline;


          speed1.addEventListener('click', function (evt) {
            timeline.playbackRate = 1.0;
          });

          speed2.addEventListener('click', function (evt) {
            timeline.playbackRate = 2.0;
          });

          speed4.addEventListener('click', function (evt) {
            timeline.playbackRate = 4.0;
          });

          halfSpeed.addEventListener('click', function (evt) {
            timeline.playbackRate = 0.5;
          });

          pause.addEventListener('click', function (evt) {
            timeline.playbackRate = 0;
          });

          reversePlay.addEventListener('click', function (evt) {
            timeline.playbackRate = -1.0;
          });

          setInterval(addRandomSnow, 200);

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();(function () {
  var scene = new Scene('#animate-tweenjs', { viewport: ['auto', 'auto'], resolution: [1540, 600] });

  var layer = scene.layer();

  var sprite = new Sprite();
  sprite.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    bgcolor: 'rgb(128, 0, 255)',
    size: [100, 100]
  });
  layer.append(sprite);

  var coords = { rotate: 0 };

  new TWEEN.Tween(coords).to({ rotate: 360 }, 5000).easing(TWEEN.Easing.Quadratic.Out).onUpdate(function () {
    var rotate = coords.rotate,
        radian = Math.PI * rotate / 180,
        red = 128 + Math.round(127 * Math.sin(radian)),
        green = Math.round(rotate) % 128,
        blue = 128 + Math.round(127 * Math.cos(radian));

    var bgcolor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    sprite.attr({ rotate: rotate, bgcolor: bgcolor });
  }).repeat(Infinity).start();

  function animate() {
    requestAnimationFrame(animate);
    TWEEN.update(layer.timeline.currentTime);
  }
  requestAnimationFrame(animate);

  var _document$querySelect3 = document.querySelectorAll('#tweenjs-speed1, #tweenjs-speed2, #tweenjs-speed4, #tweenjs-halfSpeed, #tweenjs-pause, #tweenjs-reversePlay'),
      _document$querySelect4 = _slicedToArray(_document$querySelect3, 6),
      speed1 = _document$querySelect4[0],
      speed2 = _document$querySelect4[1],
      speed4 = _document$querySelect4[2],
      halfSpeed = _document$querySelect4[3],
      pause = _document$querySelect4[4],
      reversePlay = _document$querySelect4[5];

  var timeline = layer.timeline;

  speed1.addEventListener('click', function (evt) {
    timeline.playbackRate = 1.0;
  });

  speed2.addEventListener('click', function (evt) {
    timeline.playbackRate = 2.0;
  });

  speed4.addEventListener('click', function (evt) {
    timeline.playbackRate = 4.0;
  });

  halfSpeed.addEventListener('click', function (evt) {
    timeline.playbackRate = 0.5;
  });

  pause.addEventListener('click', function (evt) {
    timeline.playbackRate = 0;
  });

  reversePlay.addEventListener('click', function (evt) {
    timeline.playbackRate = -1;
  });
})();