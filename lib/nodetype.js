'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

exports.registerNodeType = registerNodeType;
exports.createNode = createNode;
exports.getNodeType = getNodeType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeTypes = new _map2.default();

function registerNodeType(type, Class) {
  Object.defineProperty(Class, 'nodeType', {
    get: function get() {
      return type;
    }
  });
  nodeTypes.set(type, Class);
}

function createNode(type, attrs, nodeId) {
  var Class = nodeTypes.get(type);
  if (Class) {
    var sprite = new Class();
    if (attrs) {
      sprite.initAttributes(attrs);
    }
    if (nodeId) {
      sprite.id = nodeId;
    }
    return sprite;
  }
  return null;
}

function getNodeType(type) {
  return nodeTypes.get(type);
}