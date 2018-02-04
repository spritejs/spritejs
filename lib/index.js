import BaseSprite from './basesprite'
import Sprite from './sprite'
import Label from './label'
import Scene from './scene'
import Resource from './resource'
import Path from './path'
import {parseColor} from './utils'
import Axis from './axis'
import {registerNodeType, createNode} from './nodetype'
import Matrix from './matrix'
import Group from './group'
import {Effects} from 'sprite-animator'

const Color = parseColor

function Paper2D(...args) {
  console.warn(`Paper2D has been deprecated. Use new sprite.Scene instead.`)
  return new Scene(...args)
}

export {
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
}
