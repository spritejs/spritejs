import {
  querySelector,
  querySelectorAll,
  registerNodeType,
  isValidNodeType,
  createNode,
  createElement,

  use,
  utils,
  math,
  BaseNode,
  Label,
  Path,
  Group,
  Effects,
  Easings,
  Timeline,
  Color,
} from 'sprite-core';

import BaseSprite from './basesprite';
import Sprite from './sprite';
import Layer from './layer';
import Scene from './scene';
import Resource from './resource';
import {shim} from './platform';

if(shim) {
  shim();
}

registerNodeType('layer', Layer, true);
registerNodeType('scene', Scene, true);

const version = require('../package.json').version;

export {
  version,
  math,
  utils,
  use,

  querySelector,
  querySelectorAll,

  BaseNode,
  BaseSprite,
  Sprite,
  Label,
  Path,
  Group,
  Layer,
  Scene,

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
