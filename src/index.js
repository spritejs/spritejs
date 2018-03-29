import {Color, parseColor, setDeprecation} from 'sprite-utils'
import {
  BaseNode,
  BaseSprite,
  Label,
  Group,
  Effects,
  Path,
} from 'sprite-core'

import Sprite from './sprite'
import Layer from './layer'
import Scene from './scene'
import Resource from './resource'
import Axis from './axis'
import {registerNodeType, createNode} from './nodetype'
import {Matrix, Vector} from 'sprite-math'
import {shim} from './platform'

if(shim) {
  shim()
}

registerNodeType('sprite', Sprite)
registerNodeType('label', Label)
registerNodeType('path', Path)
registerNodeType('axis', Axis)
registerNodeType('group', Group)

function Paper2D(...args) {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.')
  return new Scene(...args)
}

const version = require('../package.json').version

export {
  version,
  BaseNode,
  BaseSprite,
  Sprite,
  Resource,
  Label,
  Layer,
  Path,
  Color,
  parseColor,
  Axis,
  registerNodeType,
  createNode,
  Effects,
  Matrix,
  Group,
  Scene,
  Paper2D,
  Vector,
}
