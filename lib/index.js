import BaseSprite from './basesprite'
import Sprite from './sprite'
import Label from './label'
import paper from './paper'
import Resource from './resource'
import Path from './path'
import {parseColor} from './utils'
import Axis from './axis'
import {registerNodeType, createNode} from './nodetype'
import Matrix from './matrix'

import {Effects} from 'sprite-animator'

const {Paper2D} = paper,
  Color = parseColor

export {
  BaseSprite,
  Sprite,
  Paper2D,
  Resource,
  Label,
  Path,
  Color,
  Axis,
  registerNodeType,
  createNode,
  Effects,
  Matrix,
}
