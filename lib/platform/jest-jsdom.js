"use strict";

var _nodeCanvasWebgl = require("node-canvas-webgl");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

(0, _nodeCanvasWebgl.mockDOM)(window);
var container = document.createElement('div');
container.id = 'stage';
document.body.appendChild(container);