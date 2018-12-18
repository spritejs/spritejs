"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Label = _spritejs.Label,
    Resource = _spritejs.Resource;

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  var scene, layer, s;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          scene = new Scene('#bgimage', {
            viewport: ['auto', 'auto'],
            resolution: [1540, 600]
          });
          layer = scene.layer();
          _context.next = 4;
          return Resource.loadTexture({
            id: '9scale',
            src: 'https://p2.ssl.qhimg.com/t01c18f4e677c09a87e.jpg'
          });

        case 4:
          s = new Label('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试');
          s.attr({
            textAlign: 'center',
            font: '34px "宋体"',
            anchor: 0.5,
            border: [6, 'black'],
            pos: [770, 300],
            size: [250, 300],
            bgcolor: 'blue',
            lineBreak: 'normal',
            bgimage: {
              id: '9scale',
              display: '.9',
              clip9: 60 // offset: [0, 50],

            },
            padding: 60
          });
          layer.append(s);
          s.animate([{
            width: 250
          }, {
            width: 500
          }], {
            duration: 5000,
            iterations: Infinity,
            direction: 'alternate'
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))();