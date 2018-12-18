"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Label = _spritejs.Label;

(function () {
  var scene = new Scene('#point-collision', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600]
  });
  var layer = scene.layer();
  var c1 = new Sprite();
  c1.attr({
    anchor: [0.5, 0.5],
    border: [100, 'red'],
    pos: [770, 300],
    borderRadius: 50,
    opacity: 0.5
  });
  layer.append(c1);
  var c2 = new Sprite();
  c2.attr({
    anchor: [0.5, 0.5],
    border: [50, 'rgb(192, 128, 0)'],
    size: [100, 100],
    pos: [470, 300],
    borderRadius: 75,
    opacity: 0.5
  });
  layer.append(c2);
  var c3 = new Sprite();
  c3.attr({
    anchor: [0.5, 0.5],
    border: [20, 'green'],
    pos: [1070, 300],
    size: [160, 160],
    borderRadius: 90,
    opacity: 0.5
  });
  layer.append(c3);

  function isPointCollision(sprite, x, y) {
    var _sprite$attr = sprite.attr('border'),
        borderWidth = _sprite$attr.width,
        width = sprite.contentSize[0];

    var bounds = sprite.boundingRect,
        cx = bounds[0] + bounds[2] / 2,
        cy = bounds[1] + bounds[3] / 2;
    var distance = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    return distance >= width / 2 && distance <= width / 2 + borderWidth;
  }

  [c1, c2, c3].forEach(function (c) {
    c.on('mousemove', function (evt) {
      var target = evt.target,
          offsetX = evt.offsetX,
          offsetY = evt.offsetY;

      if (isPointCollision(target, offsetX, offsetY)) {
        target.attr('opacity', 1);
      } else {
        target.attr('opacity', 0.5);
      }
    });
    c.on('mouseleave', function (evt) {
      var target = evt.target;
      target.attr('opacity', 0.5);
    });
  });
})();

(function () {
  var scene = new Scene('#point-collision-override', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600]
  });
  var layer = scene.layer();

  function isPointCollision(circle, x, y) {
    var _circle$attr = circle.attr('r'),
        _circle$attr2 = _slicedToArray(_circle$attr, 2),
        r1 = _circle$attr2[0],
        r2 = _circle$attr2[1],
        width = circle.contentSize[0];

    var bounds = circle.boundingRect,
        cx = bounds[0] + bounds[2] / 2,
        cy = bounds[1] + bounds[3] / 2;
    var distance = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    return distance >= width / 2 && distance <= width / 2 + r1 - r2;
  }

  var Circle =
  /*#__PURE__*/
  function (_Sprite) {
    _inherits(Circle, _Sprite);

    function Circle() {
      _classCallCheck(this, Circle);

      return _possibleConstructorReturn(this, _getPrototypeOf(Circle).apply(this, arguments));
    }

    _createClass(Circle, [{
      key: "pointCollision",
      value: function pointCollision(evt) {
        if (!_get(_getPrototypeOf(Circle.prototype), "pointCollision", this).call(this, evt)) {
          return false;
        }

        var offsetX = evt.offsetX,
            offsetY = evt.offsetY;
        return isPointCollision(this, offsetX, offsetY);
      }
    }]);

    return Circle;
  }(Sprite);

  Circle.defineAttributes({
    init: function init(attr) {
      attr.setDefault({
        r: [100, 0],
        color: 'black'
      });
    },
    r: function r(attr, val) {
      // 定义半径属性 [外环，内环]
      attr.clearCache();

      if (!Array.isArray(val)) {
        val = [val, 0];
      }

      var _val = val,
          _val2 = _slicedToArray(_val, 2),
          r1 = _val2[0],
          r2 = _val2[1];

      attr.set('r', val);
      attr.set('borderRadius', (r1 + r2) / 2);
      attr.size = [2 * r2, 2 * r2];
      attr.set('border', {
        width: r1 - r2,
        color: attr.color,
        style: 'solid'
      });
    },
    color: function color(attr, val) {
      attr.clearCache();
      attr.set('color', val);

      var _attr$r = _slicedToArray(attr.r, 2),
          r1 = _attr$r[0],
          r2 = _attr$r[1];

      attr.set('border', {
        width: r1 - r2,
        color: attr.color,
        style: 'solid'
      });
    }
  });
  var c1 = new Circle();
  c1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    opacity: 0.5,
    r: 100,
    color: 'red'
  });
  layer.append(c1);
  var c2 = new Circle();
  c2.attr({
    anchor: [0.5, 0.5],
    color: 'rgb(192, 128, 0)',
    r: [100, 50],
    pos: [470, 300],
    opacity: 0.5
  });
  layer.append(c2);
  var c3 = new Circle();
  c3.attr({
    anchor: [0.5, 0.5],
    color: 'green',
    pos: [1070, 300],
    r: [100, 80],
    opacity: 0.5
  });
  layer.append(c3);
  [c1, c2, c3].forEach(function (c) {
    c.on('mouseenter', function (evt) {
      evt.target.attr('opacity', 1);
    });
    c.on('mouseleave', function (evt) {
      evt.target.attr('opacity', 0.5);
    });
  });
})();

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee4() {
  var chickRes, chickJSON, scene, layer, claw, i, chick, pressed, moving, moveClaw, _moveClaw, ctrl;

  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _moveClaw = function _ref5() {
            _moveClaw = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3(speed) {
              var _x3, anim, x0;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!pressed) {
                        _context3.next = 7;
                        break;
                      }

                      _x3 = claw.attr('x');
                      anim = claw.animate([{
                        x: _x3
                      }, {
                        x: _x3 + speed
                      }], {
                        duration: 500,
                        fill: 'forwards'
                      });
                      /* eslint-disable no-await-in-loop */

                      _context3.next = 5;
                      return anim.finished;

                    case 5:
                      _context3.next = 0;
                      break;

                    case 7:
                      x0 = claw.attr('x');
                      _context3.next = 10;
                      return claw.animate([{
                        x: x0
                      }, {
                        x: x0 + speed / 5
                      }], {
                        duration: 100,
                        fill: 'forwards',
                        easing: 'ease-out'
                      }).finished;

                    case 10:
                      moving = null;

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
            return _moveClaw.apply(this, arguments);
          };

          moveClaw = function _ref4(_x) {
            return _moveClaw.apply(this, arguments);
          };

          chickRes = 'https://p5.ssl.qhimg.com/t01acd5010cb5a500d5.png', chickJSON = 'https://s2.ssl.qhres.com/static/930e3b2e60496c6e.json';
          scene = new Scene('#custom-event', {
            viewport: ['auto', 'auto'],
            resolution: [1540, 600]
          });
          layer = scene.layer();
          _context4.next = 7;
          return scene.preload([chickRes, chickJSON]);

        case 7:
          claw = new Sprite('chickclaw.png');
          claw.attr({
            anchor: [0.5, 0],
            pos: [770, 0],
            zIndex: 100
          });
          layer.append(claw);

          for (i = 1; i <= 4; i++) {
            chick = new Sprite("chick0".concat(i, ".png"));
            chick.attr({
              anchor: [0.5, 1],
              pos: [300 + (i - 1) * 350, 600],
              scale: 0.5
            });
            layer.append(chick);
          }

          pressed = false;
          layer.on('buttonDown',
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2(evt) {
              var buttonId;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      pressed = true;
                      buttonId = evt.buttonId;

                      if (!(!moving && buttonId === 'leftBtn')) {
                        _context2.next = 6;
                        break;
                      }

                      moving = moveClaw(-50);
                      _context2.next = 14;
                      break;

                    case 6:
                      if (!(!moving && buttonId === 'rightBtn')) {
                        _context2.next = 10;
                        break;
                      }

                      moving = moveClaw(50);
                      _context2.next = 14;
                      break;

                    case 10:
                      if (!(buttonId === 'downBtn')) {
                        _context2.next = 14;
                        break;
                      }

                      _context2.next = 13;
                      return moving;

                    case 13:
                      moving = _asyncToGenerator(
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return claw.animate([{
                                  y: 0
                                }, {
                                  y: 400
                                }], {
                                  duration: 2000,
                                  fill: 'forwards'
                                }).finished;

                              case 2:
                                layer.children.forEach(function (child) {
                                  if (child !== claw && claw.OBBCollision(child)) {
                                    child.attr('zIndex', 200);
                                    child.animate([{
                                      y: 600
                                    }, {
                                      y: 200
                                    }], {
                                      duration: 3000,
                                      fill: 'forwards'
                                    }).finished.then(function () {
                                      return child.remove();
                                    });
                                  }
                                });
                                _context.next = 5;
                                return claw.animate([{
                                  y: 400
                                }, {
                                  y: 0
                                }], {
                                  duration: 3000,
                                  fill: 'forwards'
                                }).finished;

                              case 5:
                                moving = null;

                              case 6:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }))();

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          layer.on('buttonUp', function (evt) {
            pressed = false;
          });
          ctrl = document.querySelector('#zwwctrl');
          ctrl.addEventListener('mousedown', function (evt) {
            var target = evt.target;

            if (target.tagName === 'BUTTON') {
              layer.dispatchEvent('buttonDown', {
                buttonId: target.id
              }, true, true);
            }
          });
          document.documentElement.addEventListener('mouseup', function (evt) {
            layer.dispatchEvent('buttonUp', {}, true, true);
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, this);
}))();

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee5() {
  var scene, layer, image;
  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          scene = new Scene('#afterdraw', {
            viewport: ['auto', 'auto'],
            resolution: [1540, 600]
          });
          layer = scene.layer();
          _context5.next = 4;
          return scene.preload({
            id: 'beauty',
            src: 'https://p0.ssl.qhimg.com/t01300d8189b2edf8ca.jpg'
          });

        case 4:
          image = new Sprite('beauty');
          image.attr({
            anchor: [0.5, 0.5],
            pos: [770, 300],
            scale: [-0.8, 0.8] // bgcolor: 'red',

          });
          layer.append(image);
          image.on('afterdraw', function (_ref7) {
            var target = _ref7.target,
                context = _ref7.context;

            var _target$renderRect = _slicedToArray(target.renderRect, 4),
                x = _target$renderRect[0],
                y = _target$renderRect[1],
                width = _target$renderRect[2],
                height = _target$renderRect[3];

            var imageData = context.getImageData(x, y, width, height);
            var cx = width / 2,
                cy = height / 2;

            for (var i = 0; i < imageData.data.length; i += 4) {
              var _x4 = i / 4 % width,
                  _y = Math.floor(i / 4 / width);

              var dist = Math.sqrt(Math.pow(cx - _x4, 2) + Math.pow(cy - _y, 2));
              imageData.data[i + 3] = 255 - Math.round(255 * dist / 600);
            }

            context.putImageData(imageData, x, y);
          });

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5, this);
}))();

(function () {
  var scene = new Scene('#event-delegate', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600]
  });
  var layer = scene.layer();

  var KeyButton =
  /*#__PURE__*/
  function (_Label) {
    _inherits(KeyButton, _Label);

    function KeyButton() {
      _classCallCheck(this, KeyButton);

      return _possibleConstructorReturn(this, _getPrototypeOf(KeyButton).apply(this, arguments));
    }

    _createClass(KeyButton, [{
      key: "pointCollision",
      value: function pointCollision(evt) {
        return evt.originalEvent.key === this.text;
      }
    }]);

    return KeyButton;
  }(Label);

  KeyButton.defineAttributes({
    init: function init(attr) {
      attr.setDefault({
        font: '42px Arial',
        border: {
          width: 4,
          color: 'black',
          style: 'solid'
        },
        width: 50,
        height: 50,
        anchor: [0.5, 0.5],
        textAlign: 'center',
        lineHeight: 50
      });
    }
  });
  var keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

  for (var i = 0; i < 3; i++) {
    var keyButtons = _toConsumableArray(keys[i]);

    var _loop = function _loop(j) {
      var key = new KeyButton(keyButtons[j]);
      key.attr({
        pos: [250 + j * 80, 200 + i * 100]
      });
      key.on('keydown', function (evt) {
        key.attr({
          bgcolor: 'grey',
          fillColor: 'white'
        });
      });
      key.on('keyup', function (evt) {
        key.attr({
          bgcolor: 'transparent',
          fillColor: 'black'
        });
      });
      layer.append(key);
    };

    for (var j = 0; j < keyButtons.length; j++) {
      _loop(j);
    }
  }

  var label = new Label('轻敲键盘');
  label.attr({
    anchor: [0.5, 0],
    pos: [770, 50],
    font: '42px Arial'
  });
  layer.append(label);
  scene.delegateEvent('keydown', document);
  scene.delegateEvent('keyup', document);
})();