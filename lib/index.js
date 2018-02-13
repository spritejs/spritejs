'use strict';

var _entrance = require('./entrance');

var spritejs = _interopRequireWildcard(_entrance);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

spritejs.serverRenderer = function () {
  var _require = require('./node-context'),
      document = _require.document,
      requestAnimationFrame = _require.requestAnimationFrame;

  global.document = document;
  global.requestAnimationFrame = requestAnimationFrame;
  global.IS_NODE_ENV = true;
  var Sprite = this.Sprite,
      Resource = this.Resource,
      Label = this.Label,
      Color = this.Color,
      Matrix = this.Matrix,
      Group = this.Group,
      Scene = this.Scene,
      Paper2D = this.Paper2D;


  return {
    Sprite: Sprite,
    Resource: Resource,
    Label: Label,
    Color: Color,
    Matrix: Matrix,
    Group: Group,
    Scene: Scene,
    Paper2D: Paper2D
  };
};

module.exports = spritejs;