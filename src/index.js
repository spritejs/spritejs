import {
  BaseNode,
  Label,
  Group,
  Effects,
  Easings,
  Timeline,
  Path,
  registerNodeType,
  isValidNodeType,
  createNode,
  createElement,
  Color,

  use,
  utils,
  math,

  querySelector,
  querySelectorAll,
  stylesheet,
} from '@spritejs/core';

import BaseSprite from './basesprite';
import Sprite from './sprite';
import Layer from './layer';
import BaseScene from './scene';
import Resource from './resource';
import {shim} from './platform';
import {_debugger} from './platform/devtools';

class Scene extends BaseScene {
  constructor(container, options = {}) {
    super(container, options);
    if(options.useDocumentCSS) {
      stylesheet.fromDocumentCSS();
    }
  }
}

const {setDeprecation} = utils;

if(shim) {
  shim();
}

registerNodeType('layer', Layer, true);
registerNodeType('scene', Scene, true);

function Paper2D(...args) {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.');
  return new Scene(...args);
}

const version = require('../package.json').version;

export {
  _debugger,
  version,
  math,
  utils,
  use,

  querySelector,
  querySelectorAll,
  stylesheet,

  BaseNode,
  BaseSprite,
  Sprite,
  Label,
  Path,
  Group,
  Layer,
  Scene,
  Paper2D,

  registerNodeType,
  isValidNodeType,
  createNode,
  createElement,
  Color,

  Resource,
  Effects,
  Easings,
  Timeline,
};
