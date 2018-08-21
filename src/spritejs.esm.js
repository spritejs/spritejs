// es modules for rollup

import spritejs from '../dist/spritejs.es6';

export default spritejs;

export const {
  _debugger,
  version,
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
  Paper2D,

  registerNodeType,
  createNode,
  createElement,
  Color,

  Resource,
  Effects,
  Easings,
  Timeline,
} = spritejs;
