"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Label = _spritejs.Label,
    Effects = _spritejs.Effects,
    utils = _spritejs.utils;
var parseColorString = utils.parseColorString
/* demo: progressbar */
;

(function () {
  var scene = new Scene('#progressbar', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600]
  });
  var layer = scene.layer();

  var ProgressBar =
  /*#__PURE__*/
  function (_Sprite) {
    _inherits(ProgressBar, _Sprite);

    function ProgressBar() {
      _classCallCheck(this, ProgressBar);

      return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBar).apply(this, arguments));
    }

    _createClass(ProgressBar, [{
      key: "render",
      value: function render(t, context) {
        _get(_getPrototypeOf(ProgressBar.prototype), "render", this).call(this, t, context);

        var progress = this.attr('progress'),
            slotColor = this.attr('slotColor'),
            progressColor = this.attr('progressColor'),
            type = this.attr('type');
        var p = progress / 100;

        var _this$contentSize = _slicedToArray(this.contentSize, 2),
            width = _this$contentSize[0],
            height = _this$contentSize[1];

        if (type === 'bar') {
          context.beginPath();
          context.rect(0, 0, width, height);
          context.fillStyle = slotColor;
          context.fill();
          var progressRect = [0, 0, width * p, height];
          context.beginPath();
          context.rect.apply(context, progressRect);
          context.fillStyle = progressColor;
          context.fill();
        } else if (type === 'circle') {
          var slotWidth = this.attr('slotWidth');
          var r = width / 2;
          context.beginPath();
          context.arc(r, r, r - slotWidth / 2, 0, 2 * Math.PI);
          context.lineWidth = slotWidth;
          context.strokeStyle = slotColor;
          context.stroke();
          context.beginPath();
          context.arc(r, r, r - slotWidth / 2, -0.5 * Math.PI, (2 * p - 0.5) * Math.PI);
          context.lineWidth = slotWidth;
          context.strokeStyle = progressColor;
          context.stroke();
        } else if (type === 'hourglass') {
          context.beginPath();
          context.moveTo(width / 2, height / 2);
          context.lineTo(0, 0);
          context.lineTo(width, 0);
          context.closePath();
          context.fillStyle = slotColor;
          context.fill();
          context.beginPath();
          context.moveTo(width / 2, height / 2);
          context.lineTo(0, height);
          context.lineTo(width, height);
          context.closePath();
          context.fillStyle = progressColor;
          context.fill();
          var dx = (1 - Math.pow(p, 2)) * width / 2,
              dy = (1 - Math.pow(p, 2)) * height / 2;
          context.beginPath();
          context.moveTo(width / 2, height / 2);
          context.lineTo(width / 2 - dx, height / 2 - dy);
          context.lineTo(width / 2 + dx, height / 2 - dy);
          context.closePath();
          context.fillStyle = progressColor;
          context.fill();
          context.beginPath();
          context.moveTo(width / 2, height / 2);
          context.lineTo(width / 2 - dx, height / 2 + dy);
          context.lineTo(width / 2 + dx, height / 2 + dy);
          context.closePath();
          context.fillStyle = slotColor;
          context.fill();
        }
      }
    }, {
      key: "contentSize",
      get: function get() {
        var _this$attr = this.attr('size'),
            _this$attr2 = _slicedToArray(_this$attr, 2),
            width = _this$attr2[0],
            height = _this$attr2[1];

        var _this$attr3 = this.attr(),
            slotLength = _this$attr3.slotLength,
            slotWidth = _this$attr3.slotWidth,
            type = _this$attr3.type;

        if (type === 'bar') {
          if (width === '') {
            width = slotLength;
          }

          if (height === '') {
            height = slotWidth;
          }
        } else if (type === 'circle') {
          if (width === '') {
            width = Math.round(slotLength / Math.PI + slotWidth);
          }

          if (height === '') {
            height = Math.round(slotLength / Math.PI + slotWidth);
          }
        } else if (type === 'hourglass') {
          if (width === '') {
            width = slotWidth;
          }

          if (height === '') {
            height = slotLength;
          }
        }

        return [width, height];
      }
    }]);

    return ProgressBar;
  }(Sprite);

  ProgressBar.defineAttributes({
    init: function init(attr) {
      attr.setDefault({
        progress: 0,
        slotColor: 'grey',
        progressColor: 'green',
        type: 'bar',
        // bar, circle, hourglass
        slotLength: 200,
        slotWidth: 25
      });
    },
    progress: function progress(attr, val) {
      attr.clearCache();
      attr.set('progress', val);
    },
    slotColor: function slotColor(attr, val) {
      attr.clearCache();
      attr.set('slotColor', parseColorString(val));
    },
    progressColor: function progressColor(attr, val) {
      attr.clearCache();
      attr.set('progressColor', parseColorString(val));
    },
    type: function type(attr, val) {
      attr.clearCache();
      attr.set('type', val);
    },
    slotLength: function slotLength(attr, val) {
      attr.clearCache();
      attr.set('slotLength', val);
    },
    slotWidth: function slotWidth(attr, val) {
      attr.clearCache();
      attr.set('slotWidth', val);
    }
  });
  var p1 = new ProgressBar();
  p1.attr({
    anchor: [0.5, 0.5],
    progress: 45,
    pos: [250, 300],
    slotLength: 500,
    type: 'circle'
  });
  layer.append(p1);
  p1.animate([{
    progress: 0
  }, {
    progress: 100
  }], {
    duration: 10000,
    iterations: Infinity,
    easing: 'ease-in-out'
  });
  var label = new Label('0%');
  label.attr({
    anchor: [0.5, 0.5],
    pos: [250, 300],
    font: '36px Arial'
  });
  layer.append(label);
  p1.on('update', function (evt) {
    var progress = evt.target.attr('progress');
    label.text = "".concat(progress.toFixed(0), "%");
  });
  var p2 = new ProgressBar();
  p2.attr({
    anchor: [0.5, 0.5],
    progress: 0,
    pos: [770, 300],
    slotLength: 300,
    slotWidth: 45,
    progressColor: 'rgb(192,0,0)',
    borderRadius: 20
  });
  layer.append(p2);
  Effects.progressColor = Effects.color;
  Effects.slotColor = Effects.color;
  p2.animate([{
    progress: 0,
    progressColor: 'rgb(192,0,0)'
  }, {
    progress: 50,
    progressColor: 'rgb(192, 192, 0)'
  }, {
    progress: 100,
    progressColor: 'rgb(0, 192, 0)'
  }], {
    duration: 5000,
    iterations: Infinity
  });
  var p3 = new ProgressBar();
  p3.attr({
    anchor: [0.5, 0.5],
    progress: 0.5,
    pos: [1150, 300],
    slotLength: 100,
    slotWidth: 50,
    progressColor: '#cc6',
    type: 'hourglass'
  });
  layer.append(p3);
  p3.attr({
    progress: 0.5
  });
  p3.animate([{
    progress: 0
  }, {
    progress: 100
  }], {
    duration: 3000,
    iterations: Infinity
  });
})();