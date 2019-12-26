"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySelectorAll = querySelectorAll;
exports.querySelector = querySelector;
exports.isMatched = isMatched;
exports.compile = compile;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _color = require("../utils/color");

var _document = _interopRequireDefault(require("../document"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var CSSselect = require('css-select');

function isTag(elem) {
  return elem.nodeType === 1 || _document.default.isSpriteNode(elem.nodeName);
}

function getChildren(elem) {
  return Array.from(elem.childNodes || []);
}

function getParent(elem) {
  if (_document.default.isSpriteNode(elem.nodeName)) {
    return elem.parent || elem.canvas || elem.container;
  }

  return elem.parentElement;
}

function removeSubsets(nodes) {
  var idx = nodes.length,
      node,
      ancestor,
      replace; // Check if each node (or one of its ancestors) is already contained in the
  // array.

  while (--idx > -1) {
    node = ancestor = nodes[idx]; // Temporarily remove the node under consideration

    nodes[idx] = null;
    replace = true;

    while (ancestor) {
      if (nodes.indexOf(ancestor) > -1) {
        replace = false;
        nodes.splice(idx, 1);
        break;
      }

      ancestor = getParent(ancestor);
    } // If the node has been found to be unique, re-insert it.


    if (replace) {
      nodes[idx] = node;
    }
  }

  return nodes;
}

var adapter = {
  isTag: isTag,
  existsOne: function existsOne(test, elems) {
    return elems.some(function (elem) {
      return isTag(elem) ? test(elem) || adapter.existsOne(test, getChildren(elem)) : false;
    });
  },
  getSiblings: function getSiblings(elem) {
    var parent = getParent(elem);
    return parent && getChildren(parent);
  },
  getChildren: getChildren,
  getParent: getParent,
  getAttributeValue: function getAttributeValue(elem, name) {
    if (elem.nodeType === 1 && name === 'class' || name === 'id') {
      return elem[name];
    }

    if (this.hasAttrib(elem, name)) {
      var val = elem.attributes[name];

      if (Array.isArray(val)) {
        val = "[".concat(val.join(), "]");
      }

      return String(val);
    }
  },
  hasAttrib: function hasAttrib(elem, name) {
    return elem.attributes[name] != null;
  },
  removeSubsets: removeSubsets,
  getName: function getName(elem) {
    return elem.tagName ? elem.tagName.toLowerCase() : null;
  },
  findOne: function findOne(test, arr) {
    var elem = null;

    for (var i = 0, l = arr.length; i < l && !elem; i++) {
      if (test(arr[i])) {
        elem = arr[i];
      } else {
        var childs = getChildren(arr[i]);

        if (childs && childs.length > 0) {
          elem = findOne(test, childs);
        }
      }
    }

    return elem;
  },
  findAll: function findAll(test, elems) {
    var result = [];

    for (var i = 0, j = elems.length; i < j; i++) {
      if (!isTag(elems[i])) continue; // eslint-disable-line

      if (test(elems[i])) result.push(elems[i]);
      var childs = getChildren(elems[i]);
      if (childs) result = result.concat(findAll(test, childs));
    }

    return result;
  },
  getText: function getText(elem) {
    if (Array.isArray(elem)) return elem.map(getText).join('');
    if (isTag(elem)) return getText(getChildren(elem));
    if (elem.nodeType === 3) return elem.nodeValue;
    if (_document.default.isSpriteNode(elem.nodeName)) return elem.text;
    return '';
  }
};

function resolveQuery(query) {
  if (typeof query !== 'string') return query;
  var matches = query.match(/\[(bgcolor|fillColor|strokeColor|color)\s*=\s*['"]?\w+['"]?\]/g);

  if (matches) {
    matches = matches.map(function (matched) {
      var kv = matched.slice(1, -1).split('=');
      var color = (0, _color.parseColor)(kv[1].replace(/['"]/g, ''));
      return [matched, "[".concat(kv[0], "=\"").concat(color, "\"]")];
    });
    matches.forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          r = _ref2[0],
          p = _ref2[1];

      query = query.replace(r, p);
    });
  }

  matches = query.match(/\[\w+\s*=\s*['"]\[.+?\]['"]\]/g);

  if (matches) {
    matches = matches.map(function (matched) {
      var kv = matched.slice(1, -1).split('=');
      var arr = kv[1].slice(2, -2).split(/,/g).map(function (k) {
        return k.trim();
      });
      return [matched, "[".concat(kv[0], "=\"[").concat(arr, "]\"]")];
    });
    matches.forEach(function (_ref3) {
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
          r = _ref4[0],
          p = _ref4[1];

      query = query.replace(r, p);
    });
  }

  return query;
}

function querySelectorAll(query, elems) {
  return CSSselect.selectAll(resolveQuery(query), elems, {
    adapter: adapter
  });
}

function querySelector(query, elems) {
  return CSSselect.selectOne(resolveQuery(query), elems, {
    adapter: adapter
  });
}

function isMatched(elem, query) {
  return CSSselect.is(elem, resolveQuery(query), {
    adapter: adapter
  });
}

function compile(query) {
  return CSSselect.compile(resolveQuery(query), {
    adapter: adapter
  });
}