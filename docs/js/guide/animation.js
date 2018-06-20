'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var scene, layer, sprite;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          scene = new Scene('#transition-sequence', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          layer = scene.layer();
          sprite = new spritejs.Sprite({
            anchor: 0.5,
            bgcolor: 'red',
            pos: [500, 300],
            size: [200, 200],
            borderRadius: 50
          });


          layer.append(sprite);
          _context.next = 6;
          return sprite.transition(2.0).attr({
            bgcolor: 'green',
            width: function width(_width) {
              return _width + 100;
            }
          });

        case 6:
          _context.next = 8;
          return sprite.transition(1.0).attr({
            bgcolor: 'orange',
            height: function height(_height) {
              return _height + 100;
            }
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var _spritejs2, Scene, Sprite, Path, Group, scene, layer, robot, d, shadowD, shadow, lemon, lemonGroup, d2, i, t, transition;

  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _spritejs2 = spritejs, Scene = _spritejs2.Scene, Sprite = _spritejs2.Sprite, Path = _spritejs2.Path, Group = _spritejs2.Group;
          scene = new Scene('#transition-hover', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          _context2.next = 4;
          return scene.preload(['https://p5.ssl.qhimg.com/t01f47a319aebf27174.png', 'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json']);

        case 4:
          layer = scene.layer('fglayer');
          robot = new Sprite('guanguan1.png');

          robot.attr({
            anchor: 0.5,
            pos: [710, 210],
            scale: 0.4,
            rotate: 45
            // zIndex: 2000,
          });
          layer.append(robot);

          d = 'M235.946483,75.0041277 C229.109329,53.4046689 214.063766,34.845093 195.469876,22.3846101 C175.428247,8.9577702 151.414895,2 127.314132,2 C75.430432,2 31.6212932,32.8626807 18.323944,74.9130141 C8.97646468,77.1439182 2,85.5871171 2,95.7172992 C2,104.709941 7.49867791,112.371771 15.2700334,115.546944 C15.8218133,115.773348 16.6030463,122.336292 16.8270361,123.236385 C22.1235768,144.534892 35.4236577,163.530709 52.5998558,176.952027 C52.6299032,176.976876 52.6626822,177.001726 52.6954612,177.026575 C72.5513428,192.535224 98.5478246,202 127.043705,202 C152.034964,202 176.867791,194.597706 197.428422,180.146527 C215.659011,167.335395 230.201962,148.621202 236.52831,126.969284 C237.566312,123.421373 238.549682,119.685713 239.038636,116.019079 C239.044099,115.983185 239.074146,115.444787 239.082341,115.442025 C246.673412,112.184022 252,104.580173 252,95.7172992 C252,85.6892748 245.15192,77.3371896 235.946483,75.0041277';
          shadowD = 'M82.1534529,43 C127.525552,43 164.306906,33.6283134 164.306906,21.663753 C164.306906,9.6991926 127.525552,0 82.1534529,0 C36.7813537,0 0,9.6991926 0,21.663753 C0,33.6283134 36.7813537,43 82.1534529,43 Z';
          shadow = new Path();

          shadow.attr({
            path: shadowD,
            fillColor: '#000000',
            opacity: 0.05,
            pos: [500, 434],
            anchor: 0.5,
            scale: [1.3, 1.2]
          });
          layer.append(shadow);

          lemon = new Path();

          lemon.attr({
            path: { d: d },
            anchor: 0.5,
            pos: [500, 300],
            fillColor: '#fed330',
            scale: 1.4
          });
          layer.append(lemon);

          lemonGroup = new Group();

          lemonGroup.attr({
            anchor: 0.5,
            pos: [610, 300],
            size: [180, 180],
            bgcolor: '#faee35',
            border: [6, '#fdbd2c'],
            borderRadius: 90,
            scale: 1.5
          });
          layer.append(lemonGroup);

          d2 = 'M0,0L0,100A15,15,0,0,0,50,86.6z';

          for (i = 0; i < 12; i++) {
            t = new Path();

            t.attr({
              path: { d: d2, transform: { scale: 0.65 } },
              pos: [90, 90],
              lineWidth: 2,
              lineCap: 'round',
              lineJoin: 'round',
              strokeColor: '#fff',
              fillColor: '#f8c32d',
              rotate: 30 * i
            });
            lemonGroup.append(t);
          }

          lemonGroup.animate([{ rotate: 360 }], {
            duration: 10000,
            iterations: Infinity
          });

          transition = robot.transition(0.3);


          lemonGroup.on('mouseenter', function (evt) {
            layer.timeline.playbackRate = 3.0;
            transition.attr({
              pos: [730, 190]
            });
          });
          lemonGroup.on('mouseleave', function (evt) {
            layer.timeline.playbackRate = 1.0;
            transition.attr({
              pos: [710, 210]
            });
          });

        case 25:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}))();(function () {
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
})();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var scene, layer, _document$querySelect, _document$querySelect2, speed1, speed2, speed4, halfSpeed, pause, reversePlay, timeline, addRandomSnow;

  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          addRandomSnow = function addRandomSnow() {
            var snow = new Sprite('snow');
            var x0 = 20 + Math.random() * 1500,
                y0 = -100;

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

            var dropAnim = snow.animate([{ y: -100, rotate: 0 }, { y: 700, rotate: 360 }], {
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
          _context3.next = 5;
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
          return _context3.stop();
      }
    }
  }, _callee3, this);
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