const {document, requestAnimationFrame} = require('./node-context')
global.document = document
global.requestAnimationFrame = requestAnimationFrame
global.IS_NODE_ENV = true

module.exports = require('./entrance')
