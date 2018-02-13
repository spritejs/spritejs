import * as spritejs from './entrance'

spritejs.serverRenderer = function () {
  const {document, requestAnimationFrame} = require('./node-context')
  global.document = document
  global.requestAnimationFrame = requestAnimationFrame
  global.IS_NODE_ENV = true
  const {Sprite, Resource, Label, Color, Matrix, Group, Scene, Paper2D} = this

  return {
    Sprite,
    Resource,
    Label,
    Color,
    Matrix,
    Group,
    Scene,
    Paper2D,
  }
}

module.exports = spritejs
