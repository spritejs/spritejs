import {Effects, Easings, Timeline} from 'sprite-animator';
import * as math from 'sprite-math';
import * as utils from 'sprite-core/src/utils';
import Label from 'sprite-core/src/core/label';
import Group from 'sprite-core/src/core/group';
import BaseNode from 'sprite-core/src/core/basenode';
import Path from 'sprite-core/src/core/path';
import use from 'sprite-core/src/core/use';
import 'sprite-core/src/modules/animation';
import {
  registerNodeType,
  createNode,
  createElement,
  isValidNodeType,
  querySelector,
  querySelectorAll,
} from 'sprite-core/src/modules/dom';


import BaseSprite from './basesprite';
import Sprite from './sprite';
import Layer from './layer';
import Scene from './scene';
import Resource from './resource';
import {shim} from './platform';

const Color = utils.Color;

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
