import {mockDOM} from 'node-canvas-webgl';

mockDOM(window);

const container = document.createElement('div');
container.id = 'stage';
document.body.appendChild(container);