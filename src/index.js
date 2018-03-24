import {Color, parseColor, setDeprecation} from 'sprite-utils'
import BaseSprite from './basesprite'
import Sprite from './ressprite'
import Label from './label'
import Scene from './scene'
import Resource from './resource'
import Path from './path'
import Axis from './axis'
import {registerNodeType, createNode} from './nodetype'
import {Matrix, Vector} from 'sprite-math'
import Group from './group'
import {Effects} from 'sprite-animator'
import {shim} from './cross-platform'

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
  BaseSprite,
  Sprite,
  Resource,
  Label,
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
