'use strict';

var _entrance = require('./entrance');

var _require = require('./node-context'),
    document = _require.document,
    requestAnimationFrame = _require.requestAnimationFrame;

global.document = document;
global.requestAnimationFrame = requestAnimationFrame;
global.IS_NODE_ENV = true;

module.exports = {
  BaseSprite: _entrance.BaseSprite,
  Sprite: _entrance.Sprite,
  Resource: _entrance.Resource,
  Label: _entrance.Label,
  Color: _entrance.Color,
  Matrix: _entrance.Matrix,
  Group: _entrance.Group,
  Scene: _entrance.Scene,
  Paper2D: _entrance.Paper2D
};