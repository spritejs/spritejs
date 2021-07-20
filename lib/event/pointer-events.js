"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPointerEvents;

var _event = _interopRequireDefault(require("./event"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function createPointerEvents(originalEvent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$offsetTop = _ref.offsetTop,
      offsetTop = _ref$offsetTop === void 0 ? 0 : _ref$offsetTop,
      _ref$offsetLeft = _ref.offsetLeft,
      offsetLeft = _ref$offsetLeft === void 0 ? 0 : _ref$offsetLeft,
      _ref$displayRatio = _ref.displayRatio,
      displayRatio = _ref$displayRatio === void 0 ? 1 : _ref$displayRatio;

  var x, y;
  var originalCoordinates = [];

  var _originalEvent$target = originalEvent.target.getBoundingClientRect(),
      left = _originalEvent$target.left,
      top = _originalEvent$target.top,
      viewportWidth = _originalEvent$target.width,
      viewportHeight = _originalEvent$target.height;

  var resolutionWidth = originalEvent.target.width;
  var resolutionHeight = originalEvent.target.height;
  var pointers = originalEvent.changedTouches || [originalEvent];

  for (var i = 0; i < pointers.length; i++) {
    var pointer = pointers[i];
    var identifier = pointer.identifier;
    var clientX = pointer.clientX,
        clientY = pointer.clientY;

    if (clientX != null && clientY != null) {
      originalCoordinates.push({
        x: Math.round((clientX | 0) - left),
        y: Math.round((clientY | 0) - top),
        identifier: identifier
      });
    }
  }

  if (originalCoordinates.length <= 0) originalCoordinates.push({
    x: x,
    y: y
  });
  var ret = [];
  originalCoordinates.forEach(function (originalCoordinate) {
    if (originalCoordinate.x != null && originalCoordinate.y != null) {
      x = (originalCoordinate.x * resolutionWidth / viewportWidth - offsetLeft) / displayRatio;
      y = (originalCoordinate.y * resolutionHeight / viewportHeight - offsetTop) / displayRatio;
    }

    var event = new _event.default(originalEvent);
    Object.defineProperties(event, {
      // layerX: {
      //   value: x,
      // },
      // layerY: {
      //   value: y,
      // },
      originalX: {
        value: originalCoordinate.x
      },
      originalY: {
        value: originalCoordinate.y
      },
      x: {
        value: x
      },
      y: {
        value: y
      },
      identifier: {
        value: originalCoordinate.identifier
      }
    });
    ret.push(event);
  });
  return ret;
}