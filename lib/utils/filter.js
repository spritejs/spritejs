"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFilterString = parseFilterString;
exports.applyFilters = applyFilters;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _attribute_value = require("./attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function parseFilterString(filterStr) {
  filterStr = filterStr.trim();
  if (!filterStr || filterStr === 'none') return null;
  var filterReg = /^(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]*(?:\(.*\))*[^()]*)\))+$/i;
  var filters = filterStr.match(/(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]*(?:\(.*\))*[^()]*)\))+?/ig);
  var ret = [];

  if (filters) {
    filters.forEach(function (filter) {
      var matched = filter.match(filterReg);
      if (!matched) throw new TypeError('Invalid fitler string.');

      var _matched = (0, _slicedToArray2.default)(matched, 3),
          type = _matched[1],
          args = _matched[2];

      type = type.toLowerCase();
      args = args.trim().match(/([^( )]+|([^( )]+\(.*\)))(?=\s|$)/g).map(function (n, i) {
        var value;

        if (type === 'url' || type === 'drop-shadow' && i === 3) {
          value = n;
        } else {
          value = (0, _attribute_value.toNumber)(n);
        }

        if (/%$/.test(n)) {
          value /= 100;
        }

        return value;
      });
      ret.push({
        type: type,
        args: args
      });
    });
  }

  return ret;
}

function applyFilters(mesh, filters) {
  mesh.clearFilter();

  if (filters) {
    filters.forEach(function (_ref) {
      var type = _ref.type,
          args = _ref.args;
      var method = type;
      if (method === 'drop-shadow') method = 'dropShadow';else if (method === 'hue-rotate') method = 'hueRotate';
      mesh[method].apply(mesh, (0, _toConsumableArray2.default)(args));
    });
  }
}