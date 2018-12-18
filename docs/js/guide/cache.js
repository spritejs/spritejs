"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;

(function () {
  var scene = new Scene('#normal-cache', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600]
  });
  var layer = scene.layer();
  var colors = ['red', 'blue', 'green'];

  function randomBlock() {
    var block = new Sprite();
    block.attr({
      x: 1540 * Math.random(),
      y: 600 * Math.random(),
      size: [10, 10],
      bgcolor: colors[0],
      opacity: 0.5,
      rotate: Math.random() * 360
    });
    return block;
  }

  var blocks = [];

  for (var i = 0; i < 2000; i++) {
    blocks.push(randomBlock());
  }

  layer.append.apply(layer, blocks);
  var ctrlBtn = document.getElementById('toggle-normal-cache');
  var timerId;
  ctrlBtn.addEventListener('click', function () {
    if (timerId) return;
    var i = 0;
    timerId = setInterval(function () {
      i++;
      blocks.forEach(function (block) {
        block.attr('bgcolor', colors[i % 3]);
      });

      if (timerId && i >= 12) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 100);
  });
})();

(function () {
  var scene = new Scene('#user-cache', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600]
  });
  var layer = scene.layer();
  var colors = ['red', 'blue', 'green'];
  var cacheMap = {};

  var Block =
  /*#__PURE__*/
  function (_Sprite) {
    _inherits(Block, _Sprite);

    function Block() {
      _classCallCheck(this, Block);

      return _possibleConstructorReturn(this, _getPrototypeOf(Block).apply(this, arguments));
    }

    _createClass(Block, [{
      key: "cache",
      get: function get() {
        return cacheMap[this.attr('bgcolor')];
      },
      set: function set(cacheContext) {
        if (cacheContext) {
          cacheMap[this.attr('bgcolor')] = cacheContext;
        }
      }
    }]);

    return Block;
  }(Sprite);

  function randomBlock() {
    var block = new Block();
    block.attr({
      x: 1540 * Math.random(),
      y: 600 * Math.random(),
      size: [10, 10],
      bgcolor: colors[0],
      opacity: 0.5,
      rotate: Math.random() * 360
    });
    return block;
  }

  var blocks = [];

  for (var i = 0; i < 2000; i++) {
    blocks.push(randomBlock());
  }

  layer.append.apply(layer, blocks);
  var ctrlBtn = document.getElementById('toggle-user-cache');
  var timerId;
  ctrlBtn.addEventListener('click', function () {
    if (timerId) return;
    var i = 0;
    timerId = setInterval(function () {
      i++;
      blocks.forEach(function (block) {
        block.attr('bgcolor', colors[i % 3]);
      });

      if (timerId && i >= 12) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 100);
  });
})();

(function () {
  var scene = new Scene('#use-batch', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600]
  });
  var layer = scene.layer();
  var colors = ['red', 'blue', 'green'];

  function randomBlock() {
    var block = new Sprite();
    block.attr({
      x: 1540 * Math.random(),
      y: 600 * Math.random(),
      size: [10, 10],
      bgcolor: colors[0],
      opacity: 0.5,
      rotate: Math.random() * 360
    });
    return block;
  }

  var blocks = [];

  for (var i = 0; i < 2000; i++) {
    blocks.push(randomBlock());
  }

  var batch = layer.batch.apply(layer, blocks);
  var ctrlBtn = document.getElementById('toggle-use-batch');
  var timerId;
  ctrlBtn.addEventListener('click', function () {
    if (timerId) return;
    var i = 0;
    timerId = setInterval(function () {
      i++;
      batch.baseNode.attr('bgcolor', colors[i % 3]);

      if (timerId && i >= 12) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 100);
  });
})();