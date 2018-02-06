'use strict';

var _require = require('./node-context'),
    document = _require.document,
    requestAnimationFrame = _require.requestAnimationFrame;

global.document = document;
global.requestAnimationFrame = requestAnimationFrame;
global.IS_NODE_ENV = true;

module.exports = require('./entrance');