"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var nodeMap = new Map();

function createElement(nodeName) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  nodeName = nodeName.toLowerCase();
  var Element = nodeMap.get(nodeName);
  if (!Element) throw new TypeError("Invalid node: ".concat(nodeName));
  var elem = new Element(attrs);
  children.forEach(function (child) {
    elem.appendChild(child);
  });
  return elem;
}

var ownerDocument = {
  registerNode: function registerNode(Node, nodeName) {
    var nodeType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    nodeName = nodeName.toLowerCase();
    if (nodeMap.has(nodeName)) throw new TypeError("Cannot registerNode, ".concat(nodeName, " has been taken."));
    nodeMap.set(nodeName, Node);
    Object.defineProperties(Node.prototype, {
      nodeType: {
        value: nodeType
      },
      tagName: {
        value: nodeName.toUpperCase()
      },
      nodeName: {
        value: nodeName
      },
      ownerDocument: {
        value: ownerDocument
      },
      namespaceURI: {
        value: "http://spritejs.com/".concat(nodeName)
      }
    });
  },
  createElement: createElement,
  createElementNS: function createElementNS(uri, name) {
    return createElement(name);
  },
  isSpriteNode: function isSpriteNode(nodeName) {
    return nodeMap.has(nodeName.toLowerCase());
  }
};
var _default = ownerDocument;
exports.default = _default;