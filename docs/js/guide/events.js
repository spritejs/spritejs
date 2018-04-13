'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;
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
        _sprite$attr2 = _slicedToArray(_sprite$attr, 1),
        borderWidth = _sprite$attr2[0],
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
        borderRadius: {
          get: function get() {
            var _r = _slicedToArray(this.r, 2),
                r1 = _r[0],
                r2 = _r[1];

            return (r1 + r2) / 2;
          }
        },
        width: {
          get: function get() {
            var r2 = this.r[1];
            return 2 * r2;
          }
        },
        height: {
          get: function get() {
            var r2 = this.r[1];
            return 2 * r2;
          }
        },
        border: {
          get: function get() {
            var _r2 = _slicedToArray(this.r, 2),
                r1 = _r2[0],
                r2 = _r2[1];

            return [r1 - r2, this.color];
          }
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
})();