'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Label = _spritejs.Label,
    Path = _spritejs.Path;
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var birdsJsonUrl, birdsRes, scene, layer, d, path, s, pathSize, i, startTime, T;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
          birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
          scene = new Scene('#animations', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          layer = scene.layer('fglayer');
          d = 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z';
          _context.next = 7;
          return scene.preload([birdsRes, birdsJsonUrl]);

        case 7:
          path = new Path();


          path.attr({
            anchor: [0.5, 0.5],
            pos: [770, 300],
            path: { d: d, trim: true },
            lineWidth: 26,
            lineCap: 'round',
            gradients: {
              strokeColor: {
                vector: [0, 400, 400, 0],
                colors: [{
                  offset: 0,
                  color: 'rgba(255,0,0,1)'
                }, {
                  offset: 0.5,
                  color: 'rgba(255,0,0,0)'
                }, {
                  offset: 1,
                  color: 'rgba(255,0,0,0)'
                }]
              },
              fillColor: {
                vector: [0, 0, 400, 400],
                colors: [{
                  offset: 0,
                  color: 'rgba(255,0,0,0.7)'
                }, {
                  offset: 1,
                  color: 'rgba(255,255,0,0.7)'
                }]
              }
            }
          });

          layer.append(path);

          s = new Sprite('bird1.png');
          pathSize = path.pathSize;


          s.attr({
            anchor: [0.5, 0.5],
            pos: [770 - pathSize[0] / 2, 300 - pathSize[1] / 2],
            size: [80, 50],
            offsetPath: path.svg.d,
            zIndex: 200
          });
          s.animate([{ offsetDistance: 0 }, { offsetDistance: 1 }], {
            duration: 6000,
            iterations: Infinity
          });

          i = 0;

          setInterval(function () {
            s.textures = ['bird' + (i++ % 3 + 1) + '.png'];
          }, 100);

          startTime = Date.now();
          T = 6000;

          requestAnimationFrame(function next() {
            var p = Math.PI * 2 * (Date.now() - startTime) / T;
            var colors = [{ offset: 0, color: 'rgba(255,0,0,1)' }, { offset: 0.5 + 0.5 * Math.abs(Math.sin(p)), color: 'rgba(255,0,0,0)' }, { offset: 1, color: 'rgba(255,0,0,0)' }];

            var gradients = path.attr('gradients');
            gradients.strokeColor.colors = colors;
            path.attr({ gradients: gradients });

            requestAnimationFrame(next);
          });

          layer.appendChild(s);

        case 20:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var birdsJsonUrl, birdsRes, scene, layer, timeline, playbackRate, speedUp, slowDown, pause, resume, updateSpeed, i, bird, delay;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          updateSpeed = function updateSpeed() {
            playbackRate.innerHTML = 'playbackRate: ' + timeline.playbackRate.toFixed(1);
          };

          birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
          birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
          scene = new Scene('#animations-playback', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          layer = scene.layer('fglayer');
          timeline = layer.timeline;
          playbackRate = document.getElementById('playbackRate');
          speedUp = document.getElementById('speedUp');
          slowDown = document.getElementById('slowDown');
          pause = document.getElementById('pause');
          resume = document.getElementById('resume');

          speedUp.addEventListener('click', function () {
            timeline.playbackRate += 0.5;
            updateSpeed();
          });
          slowDown.addEventListener('click', function () {
            timeline.playbackRate -= 0.5;
            updateSpeed();
          });
          pause.addEventListener('click', function () {
            timeline.playbackRate = 0;
            updateSpeed();
          });
          resume.addEventListener('click', function () {
            timeline.playbackRate = 1.0;
            updateSpeed();
          });

          _context2.next = 17;
          return scene.preload([birdsRes, birdsJsonUrl]);

        case 17:

          for (i = 0; i < 10; i++) {
            if (i !== 5 && i !== 9) {
              bird = new Sprite('bird1.png');

              bird.attr({
                anchor: [0.5, 0.5],
                pos: [-50, 100 + i % 5 * 100]
              });
              layer.append(bird);

              bird.animate([{ textures: 'bird1.png' }, { textures: 'bird2.png' }, { textures: 'bird3.png' }, { textures: 'bird1.png' }], {
                duration: 500,
                iterations: Infinity,
                easing: 'step-end'
              });

              delay = i < 5 ? Math.abs(2 - i) * 300 : (4 - Math.abs(7 - i)) * 300;

              bird.animate([{ x: -50 }, { x: 1600 }, { x: -50 }], {
                delay: delay,
                duration: 6000,
                // direction: 'alternate',
                iterations: Infinity
              });

              bird.animate([{ scale: [1, 1] }, { scale: [-1, 1] }, { scale: [1, 1] }], {
                delay: delay,
                duration: 6000,
                iterations: Infinity,
                easing: 'step-end'
              });
            }
          }

        case 18:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}))();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var images, scene, layer, y1, y2, applyFilters, filters1, filters2;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          applyFilters = function applyFilters(id, filters, y) {
            var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            filters.forEach(function (filter, i) {
              var s = new Sprite();
              var textures = { id: id, filter: {} };
              if (filter.length === 2) {
                textures.filter[filter[0]] = filter[1];
              }
              s.attr({
                textures: textures,
                pos: [50 + i * 250, y],
                scale: scale
              });
              layer.append(s);
            });
          };

          images = [{ id: 'girl1', src: 'https://p5.ssl.qhimg.com/t01feb7d2e05533ca2f.jpg' }, { id: 'girl2', src: 'https://p5.ssl.qhimg.com/t01deebfb5b3ac6884e.jpg' }];
          scene = new Scene('#filters', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          layer = scene.layer('fglayer');
          y1 = 50, y2 = 320;
          _context3.next = 7;
          return scene.preload.apply(scene, images);

        case 7:
          filters1 = [[], ['brightness', '150%'], ['grayscale', '50%'], ['blur', '12px'], ['dropShadow', [15, 15, 5, '#033']], ['hueRotate', 45]];


          applyFilters('girl1', filters1, y1, 0.5);

          filters2 = [[], ['invert', '100%'], ['opacity', '70%'], ['saturate', '20%'], ['sepia', '100%'], ['hueRotate', 135]];


          applyFilters('girl2', filters2, y2);

        case 11:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, this);
}))();(function () {
  var scene = new Scene('#gradients', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer('fglayer');

  var box = new Sprite();
  box.attr({
    border: 10,
    gradients: {
      border: {
        vector: [0, 0, 170, 170],
        colors: [{ offset: 0, color: 'red' }, { offset: 0.5, color: 'yellow' }, { offset: 1, color: 'green' }]
      },
      bgcolor: {
        vector: [0, 150, 150, 0],
        colors: [{ offset: 0, color: '#fff' }, { offset: 0.5, color: 'rgba(33, 33, 77, 0.7)' }, { offset: 1, color: 'rgba(128, 45, 88, 0.5)' }]
      }
    },
    pos: [150, 50],
    size: [150, 150],
    borderRadius: 15
  });

  layer.append(box);

  var label = new Label('Hello SpriteJS~~');
  label.attr({
    lineWidth: 6,
    gradients: {
      fillColor: {
        vector: [35, 35, 50, 350, 350, 600],
        colors: [{ offset: 0, color: '#777' }, { offset: 0.5, color: '#ccc' }, { offset: 1, color: '#333' }]
      }
    },
    pos: [500, 50],
    font: '106px Arial'
  });

  layer.append(label);

  var path = new Path();

  path.attr({
    path: {
      d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
      trim: true,
      transform: { scale: 0.7, rotate: 30 }
    },
    gradients: {
      fillColor: {
        vector: [200, 200, 0, 0],
        colors: [{ offset: 0, color: 'red' }, { offset: 0.5, color: 'yellow' }, { offset: 1, color: 'green' }]
      }
    },
    anchor: [0.5, 0.5],
    pos: [700, 360]
  });

  layer.append(path);
})();