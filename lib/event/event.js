"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var _type = Symbol('type');

var _bubbles = Symbol('bubbles');

var _originalEvent = Symbol('originalEvent');

var _detail = Symbol('detail');

var Event = /*#__PURE__*/function () {
  function Event(originalEvent) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$bubbles = _ref.bubbles,
        bubbles = _ref$bubbles === void 0 ? null : _ref$bubbles;

    (0, _classCallCheck2.default)(this, Event);

    if (typeof originalEvent === 'string') {
      this[_type] = originalEvent;
      this[_bubbles] = !!bubbles;
    } else {
      this[_type] = originalEvent.type;
      this[_originalEvent] = originalEvent;
      this[_bubbles] = bubbles != null ? !!bubbles : !!originalEvent.bubbles;

      if (originalEvent.detail) {
        this[_detail] = originalEvent.detail;
      }
    }

    if (!this[_type]) throw new TypeError('Invalid event type.');
    this.cancelBubble = false;
  }

  (0, _createClass2.default)(Event, [{
    key: "setOriginalEvent",
    value: function setOriginalEvent(originalEvent) {
      this[_originalEvent] = originalEvent;
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.cancelBubble = true;
    }
  }, {
    key: "originalEvent",
    get: function get() {
      return this[_originalEvent];
    }
  }, {
    key: "type",
    get: function get() {
      return this[_type];
    }
  }, {
    key: "bubbles",
    get: function get() {
      return this[_bubbles];
    }
  }, {
    key: "detail",
    get: function get() {
      return this[_detail];
    }
  }]);
  return Event;
}();

exports.default = Event;