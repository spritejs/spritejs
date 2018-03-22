import BaseSprite from './basesprite'
import Sprite from './sprite'
import Label from './label'
import Scene from './scene'
import Resource from './resource'
import Path from './path'
import {setDeprecation} from './decorators'
import {parseColor} from './utils'
import Axis from './axis'
import {registerNodeType, createNode} from './nodetype'
import {Matrix, Vector} from './math'
import Group from './group'
import {Effects} from 'sprite-animator'
import './cross-platform/shim'

registerNodeType('sprite', Sprite)
registerNodeType('label', Label)
registerNodeType('path', Path)
registerNodeType('axis', Axis)
registerNodeType('group', Group)

const Color = parseColor

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
