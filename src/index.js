const {document, requestAnimationFrame} = require('./node-context')
global.document = document
global.requestAnimationFrame = requestAnimationFrame
global.IS_NODE_ENV = true

import {BaseSprite, Sprite, Resource, Label, Color, Matrix, Group, Scene, Paper2D} from './entrance'

module.exports = {
  BaseSprite,
  Sprite,
  Resource,
  Label,
  Color,
  Matrix,
  Group,
  Scene,
  Paper2D,
}
