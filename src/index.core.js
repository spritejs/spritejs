import {
  use,
  utils,
  math,
  BaseNode,
  Label,
  Path,
  Group,
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

const version = require('../package.json').version;

export {
  version,

  use,
  math,
  utils,
  BaseNode,
  BaseSprite,
  Sprite,
  Label,
  Path,
  Group,
  Layer,
  Scene,

  Color,

  Resource,
};
