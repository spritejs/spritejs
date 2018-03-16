'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _basenode = require('./basenode');

var _basenode2 = _interopRequireDefault(_basenode);

var _utils = require('./utils');

var _spriteAnimator = require('sprite-animator');

var _nodetype = require('./nodetype');

var _crossPlatform = require('./cross-platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _children = (0, _symbol2.default)('children'),
    _updateSet = (0, _symbol2.default)('updateSet'),
    _zOrder = (0, _symbol2.default)('zOrder'),
    _state = (0, _symbol2.default)('state'),
    _tRecord = (0, _symbol2.default)('tRecord'),
    _timeline = (0, _symbol2.default)('timeline'),
    _renderPromise = (0, _symbol2.default)('renderPromise'),
    _resolution = (0, _symbol2.default)('resolution');

var Layer = function (_BaseNode) {
  (0, _inherits3.default)(Layer, _BaseNode);

  function Layer(id, _ref) {
    var handleEvent = _ref.handleEvent,
        evaluateFPS = _ref.evaluateFPS,
        renderMode = _ref.renderMode,
        resolution = _ref.resolution;
    (0, _classCallCheck3.default)(this, Layer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layer.__proto__ || (0, _getPrototypeOf2.default)(Layer)).call(this));

    _this.handleEvent = handleEvent !== false;
    _this.evaluateFPS = !!evaluateFPS;

    // renderMode: repaintAll | repaintDirty
    _this.renderMode = renderMode || 'repaintAll';

    var canvas = (0, _crossPlatform.createCanvas)();
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';
    canvas.style.left = 0;
    canvas.style.top = 0;

    var shadowCanvas = canvas.cloneNode(true);
    _this.shadowContext = shadowCanvas.getContext('2d');
    _this.outputContext = canvas.getContext('2d');

    _this[_children] = [];
    _this[_updateSet] = new _set2.default();
    _this[_zOrder] = 0;
    _this[_tRecord] = []; // calculate FPS
    _this[_state] = {};
    _this[_timeline] = new _spriteAnimator.Timeline();

    // d3-friendly
    _this.namespaceURI = 'http://spritejs.org/layer';
    var that = _this;
    _this.ownerDocument = {
      createElementNS: function createElementNS(uri, name) {
        var sprite = (0, _nodetype.createNode)(name);
        if (sprite) {
          return that.appendChild(sprite);
        }
        return null;
      }
    };

    if (resolution) _this.resolution = resolution;
    _this.updateResolution();
    return _this;
  }

  (0, _createClass3.default)(Layer, [{
    key: 'getElementById',
    value: function getElementById(id) {
      var children = this[_children];
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.id === id) {
          return child;
        }
      }
      return null;
    }
  }, {
    key: 'getElementsByName',
    value: function getElementsByName(name) {
      return this[_children].filter(function (c) {
        return c.name === name;
      });
    }

    /*
      d3-friendly
      *, nodeType, checker
    */

  }, {
    key: 'querySelector',
    value: function querySelector(selector) {
      var children = this[_children];

      if (!selector || selector === '*') {
        return children[0];
      } else if (typeof selector === 'string') {
        // querySelector('nodeType')
        // querySelector('#id')
        // querySelector(':name')

        if (selector.startsWith('#')) {
          return this.getElementById(selector.slice(1));
        }
        if (selector.startsWith(':')) {
          var name = selector.slice(1);

          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.name === name) {
              return child;
            }
          }
          return null;
        }
        var nodeType = (0, _nodetype.getNodeType)(selector);
        if (nodeType) {
          for (var _i = 0; _i < children.length; _i++) {
            var _child = children[_i];
            if (_child instanceof nodeType) {
              return _child;
            }
          }
          return null;
        }
        return null;
      }
      for (var _i2 = 0; _i2 < children.length; _i2++) {
        var _child2 = children[_i2];
        var sel = (0, _entries2.default)(selector);
        for (var j = 0; j < sel.length; j++) {
          var _sel$j = (0, _slicedToArray3.default)(sel[j], 2),
              type = _sel$j[0],
              checker = _sel$j[1];

          var _nodeType = (0, _nodetype.getNodeType)(type);
          if (_nodeType && _child2 instanceof _nodeType && checker.call(this, _child2)) {
            return _child2;
          }
        }
      }
      return null;
    }
  }, {
    key: 'querySelectorAll',
    value: function querySelectorAll(selector) {
      var _this2 = this;

      if (!selector || selector === '*') {
        return this[_children];
      } else if (typeof selector === 'string') {
        if (selector.startsWith('#')) {
          var sprite = this.getElementById(selector.slice(1));
          return sprite ? [sprite] : [];
        }
        if (selector.startsWith(':')) {
          return this.getElementsByName(selector.slice(1));
        }
        var nodeType = (0, _nodetype.getNodeType)(selector);
        if (nodeType) {
          return this[_children].filter(function (child) {
            return child instanceof nodeType;
          });
        }
        return null;
      }
      return this[_children].filter(function (child) {
        var sel = (0, _entries2.default)(selector);
        for (var i = 0; i < sel.length; i++) {
          var _sel$i = (0, _slicedToArray3.default)(sel[i], 2),
              type = _sel$i[0],
              checker = _sel$i[1];

          var _nodeType2 = (0, _nodetype.getNodeType)(type);
          if (!_nodeType2 || !(child instanceof _nodeType2)) {
            return false;
          }
          if (!checker.call(_this2, child)) {
            return false;
          }
        }
        return true;
      });
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(newchild, refchild) {
      var idx = this[_children].indexOf(refchild);
      if (idx >= 0) {
        this.removeChild(newchild);
        this[_children].splice(idx, 0, newchild);
        newchild.connect(this, refchild.zOrder);
        this.update(newchild);

        for (var i = idx + 1; i < this[_children].length; i++) {
          var child = this[_children][i],
              zOrder = child.zOrder + 1;

          delete child.zOrder;
          Object.defineProperty(this, 'zOrder', {
            value: zOrder,
            writable: false,
            configurable: true
          });

          this.update(child);
        }

        this[_zOrder]++;
      }

      return newchild;
    }
  }, {
    key: 'isDirty',
    value: function isDirty(target) {
      return this[_updateSet].has(target);
    }
  }, {
    key: 'prepareRender',
    value: function prepareRender() {
      if (!this[_state].prepareRender) {
        this[_state].prepareRender = true;

        var that = this,
            _dispatchEvent = (0, _get3.default)(Layer.prototype.__proto__ || (0, _getPrototypeOf2.default)(Layer.prototype), 'dispatchEvent', this),
            parent = this.parent;

        this[_renderPromise] = new _promise2.default(function (resolve, reject) {
          requestAnimationFrame(function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(t) {
              var renderer;
              return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (parent) {
                        _context.next = 4;
                        break;
                      }

                      // already removed from paper
                      that[_state].prepareRender = false;
                      resolve();
                      return _context.abrupt('return');

                    case 4:

                      if (that.evaluateFPS) {
                        that[_tRecord].push(t);
                        that[_tRecord] = that[_tRecord].slice(-10);
                      }

                      renderer = void 0;

                      if (!(that.renderMode === 'repaintDirty')) {
                        _context.next = 10;
                        break;
                      }

                      renderer = that.renderRepaintDirty.bind(that);
                      _context.next = 15;
                      break;

                    case 10:
                      if (!(that.renderMode === 'repaintAll')) {
                        _context.next = 14;
                        break;
                      }

                      renderer = that.renderRepaintAll.bind(that);
                      _context.next = 15;
                      break;

                    case 14:
                      throw new Error('unknown render mode!');

                    case 15:
                      if (!that[_updateSet].size) {
                        _context.next = 19;
                        break;
                      }

                      _context.next = 18;
                      return renderer(t);

                    case 18:

                      _dispatchEvent.call(that, 'update', { target: that, timeline: that.timeline, currentTime: that.timeline.currentTime }, true);

                    case 19:

                      if (that[_updateSet].size) {
                        requestAnimationFrame(step);
                      } else {
                        that[_state].prepareRender = false;
                        resolve();
                      }

                    case 20:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function step(_x) {
              return _ref2.apply(this, arguments);
            }

            return step;
          }());
        });
        // .catch(ex => console.error(ex.message))
      }

      return this[_renderPromise];
    }
  }, {
    key: 'update',
    value: function update(target) {
      var parent = this.parent;

      // already removed from paper
      if (!parent) {
        this[_updateSet].clear();
        return;
      }
      if (target && this[_updateSet].has(target)) return;

      // invisible... return
      if (target && !target.lastRenderBox && !this.isVisible(target)) return;

      if (target) this[_updateSet].add(target);

      this.prepareRender();
    }
  }, {
    key: 'isVisible',
    value: function isVisible(sprite) {
      var opacity = sprite.attr('opacity');
      if (opacity <= 0) {
        return false;
      }

      var _sprite$offsetSize = (0, _slicedToArray3.default)(sprite.offsetSize, 2),
          width = _sprite$offsetSize[0],
          height = _sprite$offsetSize[1];

      if (width <= 0 || height <= 0) {
        return false;
      }

      var _resolution2 = (0, _slicedToArray3.default)(this.resolution, 2),
          maxWidth = _resolution2[0],
          maxHeigth = _resolution2[1];

      var box = sprite.renderBox;
      if (box[0] > maxWidth || box[1] > maxHeigth || box[2] < 0 || box[3] < 0) {
        return false;
      }

      return true;
    }
  }, {
    key: 'sortChildren',
    value: function sortChildren(children) {
      children.sort(function (a, b) {
        var a_zidx = a.attr('zIndex'),
            b_zidx = b.attr('zIndex');
        if (a_zidx === b_zidx) {
          return a.zOrder - b.zOrder;
        }
        return a_zidx - b_zidx;
      });
    }
  }, {
    key: 'drawSprites',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(shadowContext, renderEls, t) {
        var i, child, context, transform, pos, bound;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < renderEls.length)) {
                  _context2.next = 27;
                  break;
                }

                child = renderEls[i];

                if (!(child.parent === this)) {
                  _context2.next = 24;
                  break;
                }

                if (!this.isVisible(child)) {
                  _context2.next = 23;
                  break;
                }

                context = child.cache;

                /* eslint-disable no-await-in-loop */

                if (context) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 9;
                return child.render(t);

              case 9:
                context = _context2.sent;

                child.cache = context;

              case 11:
                /* eslint-enable no-await-in-loop */

                child.userRender(t, context);

                if (this[_updateSet].has(child)) {
                  child.dispatchEvent('update', {
                    target: child, context: context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox
                  }, true);
                }

                child.lastRenderBox = child.renderBox;

                transform = child.transform.m, pos = child.attr('pos'), bound = child.originRect;


                shadowContext.save();
                shadowContext.translate(pos[0], pos[1]);
                shadowContext.transform.apply(shadowContext, (0, _toConsumableArray3.default)(transform));
                shadowContext.globalAlpha = child.attr('opacity');
                shadowContext.drawImage(context.canvas, bound[0], bound[1]);
                shadowContext.restore();
                _context2.next = 24;
                break;

              case 23:
                // invisible, only need to remove lastRenderBox
                delete child.lastRenderBox;

              case 24:
                i++;
                _context2.next = 1;
                break;

              case 27:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function drawSprites(_x2, _x3, _x4) {
        return _ref3.apply(this, arguments);
      }

      return drawSprites;
    }()
  }, {
    key: 'renderRepaintAll',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(t) {
        var _this3 = this;

        var renderEls, _resolution3, width, height, shadowContext, outputContext, shadowCanvas;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                renderEls = this[_children].filter(function (e) {
                  return _this3.isVisible(e);
                });
                _resolution3 = (0, _slicedToArray3.default)(this.resolution, 2), width = _resolution3[0], height = _resolution3[1];
                shadowContext = this.shadowContext;
                outputContext = this.outputContext;
                shadowCanvas = shadowContext.canvas;


                shadowContext.clearRect(0, 0, width, height);
                outputContext.clearRect(0, 0, width, height);

                this.sortChildren(renderEls);
                _context3.next = 10;
                return this.drawSprites(shadowContext, renderEls, t);

              case 10:

                outputContext.drawImage(shadowCanvas, 0, 0);

                this[_updateSet].clear();

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function renderRepaintAll(_x5) {
        return _ref4.apply(this, arguments);
      }

      return renderRepaintAll;
    }()
  }, {
    key: 'renderRepaintDirty',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(t) {
        var _this4 = this;

        var _resolution4, width, height, updateSet, children, shadowContext, outputContext, shadowCanvas, restEls, affectedSet, unaffectedSet, updateEls, i, unaffectedEl, affected, j, affectedEl, box1, box2, box3, changed, _affectedEls, unaffectedEls, _i3, _affectedEl, _j, _unaffectedEl, _box, _box2, _i4, updateEl, box, dirtyBox, dirtyRect, lastRenderBox, _dirtyRect, affectedEls, _i5, _affectedEl2, _box3, _dirtyBox, _dirtyRect2, renderEls;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _resolution4 = (0, _slicedToArray3.default)(this.resolution, 2), width = _resolution4[0], height = _resolution4[1];
                updateSet = this[_updateSet];
                children = this[_children].filter(function (e) {
                  return _this4.isVisible(e);
                });
                shadowContext = this.shadowContext;
                outputContext = this.outputContext;
                shadowCanvas = shadowContext.canvas;
                restEls = children.filter(function (el) {
                  return !updateSet.has(el);
                });
                affectedSet = new _set2.default(), unaffectedSet = new _set2.default();
                updateEls = (0, _from2.default)(updateSet);
                i = 0;

              case 10:
                if (!(i < restEls.length)) {
                  _context4.next = 27;
                  break;
                }

                unaffectedEl = restEls[i];
                affected = false;
                j = 0;

              case 14:
                if (!(j < updateEls.length)) {
                  _context4.next = 23;
                  break;
                }

                affectedEl = updateEls[j];
                box1 = affectedEl.renderBox, box2 = unaffectedEl.renderBox, box3 = affectedEl.lastRenderBox;

                if (!((0, _utils.boxIntersect)(box1, box2) || box3 && (0, _utils.boxIntersect)(box3, box2))) {
                  _context4.next = 20;
                  break;
                }

                affected = true;
                return _context4.abrupt('break', 23);

              case 20:
                j++;
                _context4.next = 14;
                break;

              case 23:
                if (affected) affectedSet.add(unaffectedEl);else unaffectedSet.add(unaffectedEl);

              case 24:
                i++;
                _context4.next = 10;
                break;

              case 27:
                if (!(affectedSet.size > 0 && unaffectedSet.size > 0)) {
                  _context4.next = 52;
                  break;
                }

                changed = void 0;

              case 29:
                changed = false;
                _affectedEls = (0, _from2.default)(affectedSet), unaffectedEls = (0, _from2.default)(unaffectedSet);
                _i3 = 0;

              case 32:
                if (!(_i3 < _affectedEls.length)) {
                  _context4.next = 51;
                  break;
                }

                _affectedEl = _affectedEls[_i3];
                _j = 0;

              case 35:
                if (!(_j < unaffectedEls.length)) {
                  _context4.next = 46;
                  break;
                }

                _unaffectedEl = unaffectedEls[_j];
                _box = _affectedEl.renderBox, _box2 = _unaffectedEl.renderBox;

                if (!(0, _utils.boxIntersect)(_box, _box2)) {
                  _context4.next = 43;
                  break;
                }

                affectedSet.add(_unaffectedEl);
                unaffectedSet.delete(_unaffectedEl);
                changed = true;
                return _context4.abrupt('break', 46);

              case 43:
                _j++;
                _context4.next = 35;
                break;

              case 46:
                if (!changed) {
                  _context4.next = 48;
                  break;
                }

                return _context4.abrupt('break', 51);

              case 48:
                _i3++;
                _context4.next = 32;
                break;

              case 51:
                if (changed) {
                  _context4.next = 29;
                  break;
                }

              case 52:

                shadowContext.save();
                outputContext.save();

                shadowContext.beginPath();
                outputContext.beginPath();

                for (_i4 = 0; _i4 < updateEls.length; _i4++) {
                  updateEl = updateEls[_i4];
                  box = updateEl.renderBox;
                  dirtyBox = (0, _utils.boxIntersect)(box, [0, 0, width, height]);


                  if (dirtyBox) {
                    dirtyRect = (0, _utils.boxToRect)(dirtyBox);


                    shadowContext.rect.apply(shadowContext, (0, _toConsumableArray3.default)(dirtyRect));
                    outputContext.rect.apply(outputContext, (0, _toConsumableArray3.default)(dirtyRect));
                  }

                  lastRenderBox = updateEl.lastRenderBox;

                  if (lastRenderBox && !(0, _utils.boxEqual)(lastRenderBox, box)) {
                    dirtyBox = (0, _utils.boxIntersect)(lastRenderBox, [0, 0, width, height]);

                    if (dirtyBox) {
                      _dirtyRect = (0, _utils.boxToRect)(dirtyBox);


                      shadowContext.rect.apply(shadowContext, (0, _toConsumableArray3.default)(_dirtyRect));
                      outputContext.rect.apply(outputContext, (0, _toConsumableArray3.default)(_dirtyRect));
                    }
                  }
                }

                affectedEls = (0, _from2.default)(affectedSet);

                for (_i5 = 0; _i5 < affectedEls.length; _i5++) {
                  _affectedEl2 = affectedEls[_i5];
                  _box3 = _affectedEl2.renderBox;
                  _dirtyBox = (0, _utils.boxIntersect)(_box3, [0, 0, width, height]);


                  if (_dirtyBox) {
                    _dirtyRect2 = (0, _utils.boxToRect)(_dirtyBox);


                    shadowContext.rect.apply(shadowContext, (0, _toConsumableArray3.default)(_dirtyRect2));
                    outputContext.rect.apply(outputContext, (0, _toConsumableArray3.default)(_dirtyRect2));
                  }
                }

                shadowContext.clip();
                outputContext.clip();

                shadowContext.clearRect(0, 0, width, height);
                outputContext.clearRect(0, 0, width, height);

                renderEls = [].concat((0, _toConsumableArray3.default)(updateSet), (0, _toConsumableArray3.default)(affectedSet));


                this.sortChildren(renderEls);
                _context4.next = 67;
                return this.drawSprites(shadowContext, renderEls, t);

              case 67:

                outputContext.drawImage(shadowCanvas, 0, 0);

                shadowContext.restore();
                outputContext.restore();

                this[_updateSet].clear();

              case 71:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function renderRepaintDirty(_x6) {
        return _ref5.apply(this, arguments);
      }

      return renderRepaintDirty;
    }()
  }, {
    key: 'appendChild',
    value: function appendChild(sprite) {
      var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.removeChild(sprite);
      this[_children].push(sprite);
      sprite.connect(this, this[_zOrder]++);
      if (forceUpdate) this.update(sprite);
      return sprite;
    }
  }, {
    key: 'append',
    value: function append() {
      var _this5 = this;

      for (var _len = arguments.length, sprites = Array(_len), _key = 0; _key < _len; _key++) {
        sprites[_key] = arguments[_key];
      }

      sprites.forEach(function (sprite) {
        return _this5.appendChild(sprite);
      });
    }
  }, {
    key: 'removeChild',
    value: function removeChild(sprite) {
      var idx = this[_children].indexOf(sprite);
      if (idx === -1) {
        return null;
      }
      this[_children].splice(idx, 1);
      if (this.isVisible(sprite) || sprite.lastRenderBox) {
        sprite.forceUpdate();
      }
      sprite.disconnect(this);
      return sprite;
    }
  }, {
    key: 'remove',
    value: function remove() {
      var _this6 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (args.length === 0) {
        args = this[_children].slice(0);
      }
      return args.map(function (child) {
        return _this6.removeChild(child);
      });
    }
  }, {
    key: 'pointCollision',
    value: function pointCollision(evt) {
      var layerX = evt.layerX,
          layerY = evt.layerY;

      var _resolution5 = (0, _slicedToArray3.default)(this.resolution, 2),
          width = _resolution5[0],
          height = _resolution5[1];

      if (layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
        return [layerX, layerY];
      }
    }
  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(type, evt) {
      evt.layer = this;
      var sprites = this[_children].slice(0);
      sprites.sort(function (a, b) {
        var a_zidx = a.attr('zIndex'),
            b_zidx = b.attr('zIndex');

        if (a_zidx === b_zidx) {
          return b.zOrder - a.zOrder;
        }
        return b_zidx - a_zidx;
      });

      var targetSprites = [];
      for (var i = 0; i < sprites.length; i++) {
        var sprite = sprites[i];
        var hit = sprite.dispatchEvent(type, evt);
        if (hit) {
          targetSprites.push(sprite);
        }
      }

      evt.targetSprites = targetSprites;
      (0, _get3.default)(Layer.prototype.__proto__ || (0, _getPrototypeOf2.default)(Layer.prototype), 'dispatchEvent', this).call(this, type, evt);
    }
  }, {
    key: 'updateResolution',
    value: function updateResolution() {
      if (!this.parent) return;

      var resolution = this.resolution,
          viewport = this.viewport;

      var container = this.parent.container,
          shadowCanvas = this.shadowContext.canvas,
          outputCanvas = this.outputContext.canvas;

      outputCanvas.width = resolution[0];
      outputCanvas.height = resolution[1];
      shadowCanvas.width = resolution[0];
      shadowCanvas.height = resolution[1];

      outputCanvas.style.width = viewport[0] + 'px';
      outputCanvas.style.height = viewport[1] + 'px';

      this.outputContext.clearRect(0, 0, resolution[0], resolution[1]);
      this.shadowContext.clearRect(0, 0, resolution[0], resolution[1]);

      if (container !== outputCanvas.parentNode) {
        container.appendChild(outputCanvas);
      }

      this[_children].forEach(function (child) {
        delete child.lastRenderBox;
        child.forceUpdate();
      });
    }
  }, {
    key: 'connect',
    value: function connect(parent, zOrder, zIndex) {
      (0, _get3.default)(Layer.prototype.__proto__ || (0, _getPrototypeOf2.default)(Layer.prototype), 'connect', this).call(this, parent, zOrder);
      this.zIndex = zIndex;
      this.updateResolution();
      return this;
    }
  }, {
    key: 'disconnect',
    value: function disconnect(parent) {
      this.outputContext.canvas.remove();
      return (0, _get3.default)(Layer.prototype.__proto__ || (0, _getPrototypeOf2.default)(Layer.prototype), 'disconnect', this).call(this, parent);
    }
  }, {
    key: 'getSnapshot',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var snapshotCanvas, children;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.prepareRender();

              case 2:
                snapshotCanvas = this.canvas.cloneNode(true);

                snapshotCanvas.getContext('2d').drawImage(this.canvas, 0, 0);
                children = this[_children].map(function (child) {
                  return child.serialize();
                });
                return _context5.abrupt('return', { context: snapshotCanvas, children: children });

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getSnapshot() {
        return _ref6.apply(this, arguments);
      }

      return getSnapshot;
    }()
  }, {
    key: 'putSnapshot',
    value: function putSnapshot(snapshot) {
      var _this7 = this;

      var outputContext = this.outputContext;

      var _resolution6 = (0, _slicedToArray3.default)(this.resolution, 2),
          width = _resolution6[0],
          height = _resolution6[1];

      outputContext.clearRect(0, 0, width, height);
      outputContext.drawImage(snapshot.context, 0, 0);

      this[_updateSet].clear();

      snapshot.children.forEach(function (child) {
        var node = (0, _nodetype.createNode)(child.nodeType, child.attrs, child.id);
        _this7.appendChild(node, false);
      });

      for (var i = 0; i < this[_children].length; i++) {
        var child = this[_children][i];
        child.dispatchEvent('update', {
          target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox
        }, true);

        child.lastRenderBox = child.renderBox;
      }

      return this[_children];
    }
  }, {
    key: 'adjust',
    value: function adjust(handler) {
      var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var outputContext = this.outputContext,
          shadowContext = this.shadowContext;

      var _resolution7 = (0, _slicedToArray3.default)(this.resolution, 2),
          width = _resolution7[0],
          height = _resolution7[1];

      outputContext.clearRect(0, 0, width, height);

      handler.call(this, outputContext);

      if (forceUpdate) {
        outputContext.drawImage(shadowContext.canvas, 0, 0);
      }
    }
  }, {
    key: 'timeline',
    get: function get() {
      return this[_timeline];
    }
  }, {
    key: 'canvas',
    get: function get() {
      return this.outputContext.canvas;
    }
  }, {
    key: 'container',
    get: function get() {
      return this.parent ? this.parent.container : null;
    }
  }, {
    key: 'resolution',
    get: function get() {
      if (this[_resolution]) return this[_resolution];

      return this.parent ? this.parent.resolution : [0, 0];
    },
    set: function set(resolution) {
      this[_resolution] = resolution;
    }
  }, {
    key: 'viewport',
    get: function get() {
      return this.parent ? this.parent.viewport : [0, 0];
    }
  }, {
    key: 'id',
    get: function get() {
      return this.canvas.dataset.layerId;
    }
  }, {
    key: 'fps',
    get: function get() {
      if (!this.evaluateFPS) {
        return NaN;
      }
      var sum = 0;
      var tr = this[_tRecord].slice(-10);
      var len = tr.length;

      if (tr.length <= 5) {
        return NaN;
      }
      tr.reduceRight(function (a, b, i) {
        sum += i * (a - b);return b;
      });
      return Math.round(1000 * ((len - 1) * len / 2) / sum);
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return this.outputContext.canvas.style.zIndex;
    },
    set: function set(zIndex) {
      this.outputContext.canvas.style.zIndex = zIndex;
    }
  }]);
  return Layer;
}(_basenode2.default);

exports.default = Layer;