// es modules for rollup

import * as spritejs from '../dist/spritejs.es6';

export default spritejs;

export const {
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
  DataNode,
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
} = spritejs;
