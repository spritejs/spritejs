'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty4 = require('babel-runtime/core-js/object/define-property');

var _defineProperty5 = _interopRequireDefault(_defineProperty4);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _getOwnPropertyDescriptors = require('babel-runtime/core-js/object/get-own-property-descriptors');

var _getOwnPropertyDescriptors2 = _interopRequireDefault(_getOwnPropertyDescriptors);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _class, _temp;

var _attr12 = require('./attr');

var _attr13 = _interopRequireDefault(_attr12);

var _basenode = require('./basenode');

var _basenode2 = _interopRequireDefault(_basenode);

var _matrix = require('./matrix');

var _matrix2 = _interopRequireDefault(_matrix);

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

var _vector = require('./vector');

var _vector2 = _interopRequireDefault(_vector);

var _animation = require('./animation');

var _animation2 = _interopRequireDefault(_animation);

var _utils = require('./utils');

var _decorators = require('./decorators');

var _crossPlatform = require('./cross-platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _attr = (0, _symbol2.default)('attr'),
    _eventHandlers = (0, _symbol2.default)('eventHandlers'),
    _animations = (0, _symbol2.default)('animations'),
    _context = (0, _symbol2.default)('context'),
    _renderers = (0, _symbol2.default)('renderers'),
    _paths = (0, _symbol2.default)('paths');

var BaseSprite = (_temp = _class = function (_BaseNode) {
  (0, _inherits3.default)(BaseSprite, _BaseNode);
  (0, _createClass3.default)(BaseSprite, null, [{
    key: 'defineAttributes',
    value: function defineAttributes(attrs) {
      var SubAttr = function (_Attr) {
        (0, _inherits3.default)(SubAttr, _Attr);

        function SubAttr() {
          (0, _classCallCheck3.default)(this, SubAttr);
          return (0, _possibleConstructorReturn3.default)(this, (SubAttr.__proto__ || (0, _getPrototypeOf2.default)(SubAttr)).apply(this, arguments));
        }

        return SubAttr;
      }(this.Attr);
      var descriptors = (0, _getOwnPropertyDescriptors2.default)(attrs);
      (0, _entries2.default)(descriptors).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            prop = _ref2[0],
            descriptor = _ref2[1];

        (0, _defineProperty5.default)(SubAttr.prototype, prop, (0, _decorators.attr)(SubAttr.prototype, prop, descriptor));
      });
      this.Attr = SubAttr;
    }

    /**
      new Sprite({
        attr: {
          ...
        },
        attributeChangedCallback: function(prop, oldValue, newValue){
         }
      })
     */

  }]);

  function BaseSprite() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { attr: {} };
    (0, _classCallCheck3.default)(this, BaseSprite);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BaseSprite.__proto__ || (0, _getPrototypeOf2.default)(BaseSprite)).call(this));

    _this[_attr] = new _this.constructor.Attr(_this);

    _this.attr(opts.attr);
    delete opts.attr;
    (0, _assign2.default)(_this, opts);
    _this[_eventHandlers] = {};
    _this[_animations] = new _set2.default();
    _this[_context] = null;
    _this[_renderers] = [];
    _this[_paths] = [];
    return _this;
  }

  (0, _createClass3.default)(BaseSprite, [{
    key: 'initAttributes',
    value: function initAttributes(attrs) {
      this[_attr].merge(attrs);
    }

    // create and save path

  }, {
    key: 'createPath',
    value: function createPath() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var path = new (Function.prototype.bind.apply(Path2D, [null].concat(args)))();
      this[_paths].push(path);
      return path;
    }
  }, {
    key: 'findPath',
    value: function findPath(offsetX, offsetY) {
      var context = this.context;

      if (context) {
        var paths = this[_paths].filter(function (path) {
          return context.isPointInPath(path, offsetX, offsetY);
        });
        return paths;
      }
      return [];
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var nodeType = this.nodeType,
          attrs = this[_attr].serialize(),
          id = this.id;

      return {
        nodeType: nodeType,
        attrs: attrs,
        id: id
      };
    }
  }, {
    key: 'cloneNode',
    value: function cloneNode() {
      var node = new this.constructor();
      node.initAttributes(this[_attr].serialize());
      return node;
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(prop) {
      return this.attr(prop);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(prop, val) {
      return this.attr(prop, val);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(prop) {
      return this.attr(prop, null);
    }
  }, {
    key: 'attr',
    value: function attr(props, val) {
      if ((typeof props === 'undefined' ? 'undefined' : (0, _typeof3.default)(props)) === 'object') {
        (0, _assign2.default)(this[_attr], props);
        return this;
      } else if (typeof props === 'string') {
        if (val !== undefined) {
          (0, _assign2.default)(this[_attr], (0, _defineProperty3.default)({}, props, val));
          return this;
        }
        return this[_attr][props];
      }
      var ret = {};
      /* eslint-disable no-restricted-syntax */
      for (var prop in this[_attr]) {
        ret[prop] = this[_attr][prop];
      }
      /* eslint-enable no-restricted-syntax */
      return ret;
    }
  }, {
    key: 'animate',
    value: function animate(frames, timing) {
      var _this3 = this;

      var animation = new _animation2.default(this, frames, timing);
      if (this.layer) {
        animation.baseTimeline = this.layer.timeline;
        animation.play();
        animation.finished.then(function () {
          _this3[_animations].delete(animation);
        });
      }
      this[_animations].add(animation);
      return animation;
    }
  }, {
    key: 'connect',
    value: function connect(parent, zOrder) {
      var _this4 = this;

      (0, _get3.default)(BaseSprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(BaseSprite.prototype), 'connect', this).call(this, parent, zOrder);
      this[_animations].forEach(function (animation) {
        animation.baseTimeline = parent.timeline;
        animation.play();
        animation.finished.then(function () {
          _this4[_animations].delete(animation);
        });
      });
    }
  }, {
    key: 'disconnect',
    value: function disconnect(parent) {
      this[_animations].forEach(function (animation) {
        return animation.cancel();
      });
      (0, _get3.default)(BaseSprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(BaseSprite.prototype), 'disconnect', this).call(this, parent);
    }

    // content width / height

  }, {
    key: 'OBBCollision',


    // OBB: http://blog.csdn.net/silangquan/article/details/50812425
    value: function OBBCollision(sprite) {
      // vertices: [p1, p2, p3, p4]
      var _vertices = (0, _slicedToArray3.default)(this.vertices, 3),
          p11 = _vertices[0],
          p12 = _vertices[1],
          p13 = _vertices[2],
          _sprite$vertices = (0, _slicedToArray3.default)(sprite.vertices, 3),
          p21 = _sprite$vertices[0],
          p22 = _sprite$vertices[1],
          p23 = _sprite$vertices[2];

      var a1 = new _vector2.default(p12, p11).unit(),
          a2 = new _vector2.default(p13, p12).unit(),
          a3 = new _vector2.default(p22, p21).unit(),
          a4 = new _vector2.default(p23, p22).unit();

      // The projection of the axis of a vertex in a certain direction
      function verticesProjection(vertices, axis) {
        var _vertices$map = vertices.map(function (v) {
          return axis.dot(new _vector2.default(v));
        }),
            _vertices$map2 = (0, _slicedToArray3.default)(_vertices$map, 4),
            p1 = _vertices$map2[0],
            p2 = _vertices$map2[1],
            p3 = _vertices$map2[2],
            p4 = _vertices$map2[3];

        return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)];
      }

      function projectionIntersect(p1, p2) {
        var m1 = (p1[0] + p1[1]) / 2,
            l1 = Math.abs(p1[1] - p1[0]),
            m2 = (p2[0] + p2[1]) / 2,
            l2 = Math.abs(p2[1] - p2[0]);

        return Math.abs(m2 - m1) <= (l1 + l2) / 2;
      }

      return projectionIntersect(verticesProjection(this.vertices, a1), verticesProjection(sprite.vertices, a1)) && projectionIntersect(verticesProjection(this.vertices, a2), verticesProjection(sprite.vertices, a2)) && projectionIntersect(verticesProjection(this.vertices, a3), verticesProjection(sprite.vertices, a3)) && projectionIntersect(verticesProjection(this.vertices, a4), verticesProjection(sprite.vertices, a4));
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (!this.parent) return false;
      this.parent.removeChild(this);
      return true;
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parent) {
      parent.appendChild(this);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var clearCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var parent = this.parent;
      if (parent) {
        if (parent.forceUpdate) {
          parent.forceUpdate(true);
        } else if (parent.update && parent.parent) {
          if (clearCache) {
            this.cache = null;
          }
          if (!this.parent.isDirty(this)) {
            this.parent.update(this);
          }
        }
      }
    }

    /** abstract
    connectedCallback() { }
    disconnectedCallback() { }
    attributeChangedCallback() { }
    */

    // layer position to sprite offset

  }, {
    key: 'pointToOffset',
    value: function pointToOffset(x, y) {
      var attr = this.attr();
      var dx = x - attr.x,
          dy = y - attr.y;

      var transform = this.transform;
      return transform.inverse().transformPoint(dx, dy);
    }
  }, {
    key: 'pointCollision',
    value: function pointCollision(evt) {
      var parentX = void 0,
          parentY = void 0;

      if (evt.parentX != null) {
        // group
        parentX = evt.parentX;
        parentY = evt.parentY;
      } else {
        parentX = evt.layerX;
        parentY = evt.layerY;
      }

      var _renderRect = (0, _slicedToArray3.default)(this.renderRect, 4),
          x = _renderRect[0],
          y = _renderRect[1],
          w = _renderRect[2],
          h = _renderRect[3];

      if (parentX >= x && parentX - x < w && parentY >= y && parentY - y < h) {
        var _originRect = (0, _slicedToArray3.default)(this.originRect, 4),
            ox = _originRect[0],
            oy = _originRect[1],
            ow = _originRect[2],
            oh = _originRect[3];

        var _pointToOffset = this.pointToOffset(parentX, parentY),
            _pointToOffset2 = (0, _slicedToArray3.default)(_pointToOffset, 2),
            nx = _pointToOffset2[0],
            ny = _pointToOffset2[1];

        if (nx >= ox && nx - ox < ow && ny >= oy && ny - oy < oh) {
          evt.offsetX = nx;
          evt.offsetY = ny;
          evt.targetPaths = this.findPath(nx, ny);

          return true;
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw(fn) {
      var clearCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this[_renderers].push({ fn: fn, remove: remove });
      this.forceUpdate(clearCache);
    }
  }, {
    key: 'drawOnce',
    value: function drawOnce(fn) {
      this.draw(fn, true, true);
    }

    // call by layer

  }, {
    key: 'userRender',
    value: function userRender(t, context) {
      var _this5 = this;

      if (this[_renderers].length) {
        var renderers = [];

        this[_renderers].forEach(function (renderer) {
          var fn = renderer.fn,
              remove = renderer.remove;

          fn.call(_this5, context, t, renderer);
          if (!remove) {
            renderers.push(renderer);
          }
        });

        this[_renderers] = renderers;
      }
    }
  }, {
    key: 'render',
    value: function render(t) {
      this[_paths] = [];

      var attr = this.attr(),
          bgcolor = attr.bgcolor,
          linearGradients = attr.linearGradients,
          _offsetSize = (0, _slicedToArray3.default)(this.offsetSize, 2),
          offsetWidth = _offsetSize[0],
          offsetHeight = _offsetSize[1],
          _clientSize = (0, _slicedToArray3.default)(this.clientSize, 2),
          clientWidth = _clientSize[0],
          clientHeight = _clientSize[1];


      if (offsetWidth === 0 || offsetHeight === 0) {
        return; // don't need to render
      }

      var box = (0, _crossPlatform.createCanvas)(),

      // bound = this.boundRect
      bound = this.originRect;

      box.width = bound[2];
      box.height = bound[3];

      var boxctx = box.getContext('2d');

      var _attr$border = (0, _slicedToArray3.default)(attr.border, 2),
          borderWidth = _attr$border[0],
          borderColor = _attr$border[1];

      var borderRadius = attr.borderRadius;

      boxctx.save();

      // draw border
      if (borderWidth || linearGradients && linearGradients.border) {
        boxctx.lineWidth = borderWidth;

        var x = borderWidth / 2,
            y = borderWidth / 2,
            w = offsetWidth - borderWidth,
            h = offsetHeight - borderWidth,
            r = borderRadius;


        boxctx.beginPath();
        boxctx.moveTo(x + r, y);
        boxctx.arcTo(x + w, y, x + w, y + h, r);
        boxctx.arcTo(x + w, y + h, x, y + h, r);
        boxctx.arcTo(x, y + h, x, y, r);
        boxctx.arcTo(x, y, x + w, y, r);
        boxctx.closePath();

        if (linearGradients && linearGradients.border) {
          var rect = linearGradients.border.rect || [x, y, w, h];

          boxctx.strokeStyle = (0, _utils.getLinearGradients)(boxctx, rect, linearGradients.border);
        } else if (borderColor) {
          boxctx.strokeStyle = borderColor;
        }

        boxctx.stroke();
        boxctx.clip();
      }

      // draw bgcolor
      if (bgcolor || linearGradients && linearGradients.bgcolor) {
        var _ref3 = [borderWidth, borderWidth, clientWidth, clientHeight, Math.max(0, borderRadius - borderWidth / 2)],
            _x5 = _ref3[0],
            _y = _ref3[1],
            _w = _ref3[2],
            _h = _ref3[3],
            _r = _ref3[4];


        boxctx.beginPath();
        boxctx.moveTo(_x5 + _r, _y);
        boxctx.arcTo(_x5 + _w, _y, _x5 + _w, _y + _h, _r);
        boxctx.arcTo(_x5 + _w, _y + _h, _x5, _y + _h, _r);
        boxctx.arcTo(_x5, _y + _h, _x5, _y, _r);
        boxctx.arcTo(_x5, _y, _x5 + _w, _y, _r);
        boxctx.closePath();

        if (linearGradients && linearGradients.bgcolor) {
          var _rect = linearGradients.bgcolor.rect || [_x5, _y, _w, _h];

          boxctx.fillStyle = (0, _utils.getLinearGradients)(boxctx, _rect, linearGradients.bgcolor);
        } else if (bgcolor) {
          boxctx.fillStyle = bgcolor;
        }

        boxctx.fill();
      }

      boxctx.restore();

      var padding = attr.padding,
          paddingTop = padding[0],
          paddingLeft = padding[3];

      boxctx.translate(paddingTop, paddingLeft);
      this[_context] = boxctx;

      return boxctx;
    }
  }, {
    key: 'context',
    get: function get() {
      return this[_context];
    }
  }, {
    key: 'nodeType',
    get: function get() {
      return this.constructor.nodeType;
    }
  }, {
    key: 'layer',
    get: function get() {
      var node = this;
      do {
        node = node.parent;
      } while (node != null && !(node instanceof _layer2.default));
      return node;
    }
  }, {
    key: 'id',
    set: function set(val) {
      this.attr('id', val);
    },
    get: function get() {
      return this.attr('id');
    }
  }, {
    key: 'name',
    set: function set(val) {
      this.attr('name', val);
    },
    get: function get() {
      return this.attr('name');
    }
  }, {
    key: 'transform',
    get: function get() {
      return new _matrix2.default(this[_attr].get('transform'));
    }
  }, {
    key: 'contentSize',
    get: function get() {
      var _attr2 = this.attr('size'),
          _attr3 = (0, _slicedToArray3.default)(_attr2, 2),
          width = _attr3[0],
          height = _attr3[1];

      return [width | 0, height | 0];
    }

    // content + padding

  }, {
    key: 'clientSize',
    get: function get() {
      var _attr4 = this.attr('padding'),
          _attr5 = (0, _slicedToArray3.default)(_attr4, 4),
          top = _attr5[0],
          right = _attr5[1],
          bottom = _attr5[2],
          left = _attr5[3],
          _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
          width = _contentSize[0],
          height = _contentSize[1];

      return [left + width + right, top + height + bottom];
    }

    // content + padding + border

  }, {
    key: 'offsetSize',
    get: function get() {
      var _attr6 = this.attr('border'),
          _attr7 = (0, _slicedToArray3.default)(_attr6, 1),
          borderWidth = _attr7[0],
          _clientSize2 = (0, _slicedToArray3.default)(this.clientSize, 2),
          width = _clientSize2[0],
          height = _clientSize2[1];

      return [width + 2 * borderWidth, height + 2 * borderWidth];
    }
  }, {
    key: 'innerSize',
    get: function get() {
      return this.contentSize;
    }
  }, {
    key: 'outerSize',
    get: function get() {
      return this.offsetSize;
    }
  }, {
    key: 'boundRect',
    get: function get() {
      var anchor = this.attr('anchor'),
          transform = this.transform;

      var _offsetSize2 = (0, _slicedToArray3.default)(this.offsetSize, 2),
          width = _offsetSize2[0],
          height = _offsetSize2[1];

      var _anchor = (0, _slicedToArray3.default)(anchor, 2),
          anchorX = _anchor[0],
          anchorY = _anchor[1];

      var vertexs = [[-anchorX * width, -anchorY * height], [(1 - anchorX) * width, -anchorY * height], [-anchorX * width, (1 - anchorY) * height], [(1 - anchorX) * width, (1 - anchorY) * height]];

      var transformed = vertexs.map(function (v) {
        return transform.transformPoint(v[0], v[1]);
      });
      var vx = transformed.map(function (v) {
        return v[0];
      }),
          vy = transformed.map(function (v) {
        return v[1];
      });

      var minX = Math.min.apply(Math, (0, _toConsumableArray3.default)(vx)),
          minY = Math.min.apply(Math, (0, _toConsumableArray3.default)(vy)),
          maxX = Math.max.apply(Math, (0, _toConsumableArray3.default)(vx)),
          maxY = Math.max.apply(Math, (0, _toConsumableArray3.default)(vy));

      return [].concat((0, _toConsumableArray3.default)([minX, minY].map(Math.floor)), (0, _toConsumableArray3.default)([maxX - minX, maxY - minY].map(Math.ceil)));
    }

    // rect before transform

  }, {
    key: 'originRect',
    get: function get() {
      var _offsetSize3 = (0, _slicedToArray3.default)(this.offsetSize, 2),
          width = _offsetSize3[0],
          height = _offsetSize3[1],
          _attr8 = this.attr('anchor'),
          _attr9 = (0, _slicedToArray3.default)(_attr8, 2),
          anchorX = _attr9[0],
          anchorY = _attr9[1];

      return [Math.floor(-anchorX * width), Math.floor(-anchorY * height), width, height];
    }
  }, {
    key: 'originRenderRect',
    get: function get() {
      var bound = this.originRect,
          pos = this.attr('pos');

      return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
    }
  }, {
    key: 'renderBox',
    get: function get() {
      var bound = this.boundRect,
          pos = this.attr('pos');

      return [pos[0] + bound[0] - 1, pos[1] + bound[1] - 1, pos[0] + bound[0] + bound[2] + 1, pos[1] + bound[1] + bound[3] + 1];
    }
  }, {
    key: 'renderRect',
    get: function get() {
      var bound = this.boundRect,
          pos = this.attr('pos');

      return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
    }
  }, {
    key: 'vertices',
    get: function get() {
      var vertices = (0, _utils.rectVertices)(this.originRect),
          transform = this.transform,
          _attr10 = this.attr('pos'),
          _attr11 = (0, _slicedToArray3.default)(_attr10, 2),
          x0 = _attr11[0],
          y0 = _attr11[1];


      return vertices.map(function (v) {
        var _transform$transformP = transform.transformPoint(v[0], v[1]),
            _transform$transformP2 = (0, _slicedToArray3.default)(_transform$transformP, 2),
            x = _transform$transformP2[0],
            y = _transform$transformP2[1];

        return [Math.round(x0 + x), Math.round(y0 + y)];
      });
    }
  }, {
    key: 'cache',
    set: function set(context) {
      this.cacheContext = context;
    },
    get: function get() {
      return this.cacheContext;
    }
  }]);
  return BaseSprite;
}(_basenode2.default), _class.Attr = _attr13.default, _temp);
exports.default = BaseSprite;