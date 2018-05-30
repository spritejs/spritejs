'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Label = _spritejs.Label;
(function () {
  var scene = new Scene('#point-collision', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
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
})();(function () {
  var scene = new Scene('#point-collision-override', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
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

  var Circle = function (_Sprite) {
    _inherits(Circle, _Sprite);

    function Circle() {
      _classCallCheck(this, Circle);

      return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
    }

    _createClass(Circle, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if (!_get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'pointCollision', this).call(this, evt)) {
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
      }, {
        borderRadius: function borderRadius() {
          var _r = _slicedToArray(this.r, 2),
              r1 = _r[0],
              r2 = _r[1];

          return (r1 + r2) / 2;
        },
        width: function width() {
          var r2 = this.r[1];
          return 2 * r2;
        },
        height: function height() {
          var r2 = this.r[1];
          return 2 * r2;
        },
        border: function border() {
          var _r2 = _slicedToArray(this.r, 2),
              r1 = _r2[0],
              r2 = _r2[1];

          return { width: r1 - r2, color: this.color, style: 'solid' };
        }
      });
    },
    r: function r(attr, val) {
      // 定义半径属性 [外环，内环]
      attr.clearCache();
      if (!Array.isArray(val)) {
        val = [val, 0];
      }
      attr.set('r', val);
    },
    color: function color(attr, val) {
      attr.clearCache();
      attr.set('color', val);
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
  layer.append(c3);[c1, c2, c3].forEach(function (c) {
    c.on('mouseenter', function (evt) {
      evt.target.attr('opacity', 1);
    });
    c.on('mouseleave', function (evt) {
      evt.target.attr('opacity', 0.5);
    });
  });
})();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
  var _this2 = this;

  var moveClaw = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speed) {
      var _x2, anim, x0;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!pressed) {
                _context.next = 7;
                break;
              }

              _x2 = claw.attr('x');
              anim = claw.animate([{ x: _x2 }, { x: _x2 + speed }], {
                duration: 500,
                fill: 'forwards'
              });
              /* eslint-disable no-await-in-loop */

              _context.next = 5;
              return anim.finished;

            case 5:
              _context.next = 0;
              break;

            case 7:
              x0 = claw.attr('x');
              _context.next = 10;
              return claw.animate([{ x: x0 }, { x: x0 + speed / 5 }], {
                duration: 100,
                fill: 'forwards',
                easing: 'ease-out'
              }).finished;

            case 10:
              moving = null;

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function moveClaw(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var chickRes, chickJSON, scene, layer, claw, i, chick, pressed, moving, ctrl;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          chickRes = 'https://p5.ssl.qhimg.com/t01acd5010cb5a500d5.png', chickJSON = 'https://s2.ssl.qhres.com/static/930e3b2e60496c6e.json';
          scene = new Scene('#custom-event', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          layer = scene.layer();
          _context4.next = 5;
          return scene.preload([chickRes, chickJSON]);

        case 5:
          claw = new Sprite('chickclaw.png');

          claw.attr({
            anchor: [0.5, 0],
            pos: [770, 0],
            zIndex: 100
          });
          layer.append(claw);

          for (i = 1; i <= 4; i++) {
            chick = new Sprite('chick0' + i + '.png');

            chick.attr({
              anchor: [0.5, 1],
              pos: [300 + (i - 1) * 350, 600],
              scale: 0.5
            });
            layer.append(chick);
          }

          pressed = false;
          moving = void 0;


          layer.on('buttonDown', function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(evt) {
              var buttonId;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      pressed = true;
                      buttonId = evt.buttonId;

                      if (!(!moving && buttonId === 'leftBtn')) {
                        _context3.next = 6;
                        break;
                      }

                      moving = moveClaw(-50);
                      _context3.next = 14;
                      break;

                    case 6:
                      if (!(!moving && buttonId === 'rightBtn')) {
                        _context3.next = 10;
                        break;
                      }

                      moving = moveClaw(50);
                      _context3.next = 14;
                      break;

                    case 10:
                      if (!(buttonId === 'downBtn')) {
                        _context3.next = 14;
                        break;
                      }

                      _context3.next = 13;
                      return moving;

                    case 13:
                      moving = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return claw.animate([{ y: 0 }, { y: 400 }], {
                                  duration: 2000,
                                  fill: 'forwards'
                                }).finished;

                              case 2:
                                layer.children.forEach(function (child) {
                                  if (child !== claw && claw.OBBCollision(child)) {
                                    child.attr('zIndex', 200);
                                    child.animate([{ y: 600 }, { y: 200 }], {
                                      duration: 3000,
                                      fill: 'forwards'
                                    }).finished.then(function () {
                                      return child.remove();
                                    });
                                  }
                                });
                                _context2.next = 5;
                                return claw.animate([{ y: 400 }, { y: 0 }], {
                                  duration: 3000,
                                  fill: 'forwards'
                                }).finished;

                              case 5:
                                moving = null;

                              case 6:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        }, _callee2, _this2);
                      }))();

                    case 14:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee3, _this2);
            }));

            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }());
          layer.on('buttonUp', function (evt) {
            pressed = false;
          });

          ctrl = document.querySelector('#zwwctrl');

          ctrl.addEventListener('mousedown', function (evt) {
            var target = evt.target;
            if (target.tagName === 'BUTTON') {
              layer.dispatchEvent('buttonDown', { buttonId: target.id }, true, true);
            }
          });
          document.documentElement.addEventListener('mouseup', function (evt) {
            layer.dispatchEvent('buttonUp', {}, true, true);
          });

        case 16:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, this);
}))();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
  var scene, layer, image;
  return regeneratorRuntime.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          scene = new Scene('#afterdraw', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
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
            scale: [-0.8, 0.8]
            // bgcolor: 'red',
          });
          layer.append(image);

          image.on('afterdraw', function (_ref6) {
            var target = _ref6.target,
                context = _ref6.context;

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
        case 'end':
          return _context5.stop();
      }
    }
  }, _callee5, this);
}))();(function () {
  var scene = new Scene('#event-delegate', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var KeyButton = function (_Label) {
    _inherits(KeyButton, _Label);

    function KeyButton() {
      _classCallCheck(this, KeyButton);

      return _possibleConstructorReturn(this, (KeyButton.__proto__ || Object.getPrototypeOf(KeyButton)).apply(this, arguments));
    }

    _createClass(KeyButton, [{
      key: 'pointCollision',
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
        border: { width: 4, color: 'black', style: 'solid' },
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
    var keyButtons = [].concat(_toConsumableArray(keys[i]));

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