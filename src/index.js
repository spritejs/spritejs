import {
  BaseNode,
  BaseSprite,
  Label,
  Group,
  Effects,
  Path,
  registerNodeType,
  createNode,
  Color,

  utils,
  math,
} from 'sprite-core'

const {setDeprecation} = utils

import Sprite from './sprite'
import Layer from './layer'
import Scene from './scene'
import Resource from './resource'
import Axis from './axis'
import {shim} from './platform'

if(shim) {
  shim()
}

registerNodeType('layer', Layer, true)
registerNodeType('sprite', Sprite)
registerNodeType('axis', Axis)

function Paper2D(...args) {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.')
  return new Scene(...args)
}

const version = require('../package.json').version

export {
  version,
  math,
  utils,

  BaseNode,
  BaseSprite,
  Sprite,
  Label,
  Path,
  Group,
  Axis,
  Layer,
  Scene,
  Paper2D,

  registerNodeType,
  createNode,
  Color,

  Resource,
  Effects,
}
