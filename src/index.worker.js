import {Renderer} from '@mesh.js/core';

import Node from './node/node';
import Block from './node/block';
import Sprite from './node/sprite';
import Path from './node/path';
import Rect from './node/rect';
import Ellipse from './node/ellipse';
import Label from './node/label';
import Group from './node/group';
import Layer from './node/layer';

import {parseColor, Gradient} from './utils/color';

const layerCreated = new Promise((resolve) => {
  let layer = null;
  self.addEventListener('message', (evt) => {
    if(evt.data.type === 'create') {
      const options = evt.data.options;
      layer = new Layer(options);
      resolve(layer);
    } else if(layer && evt.data.type === 'event') {
      layer.dispatchPointerEvent(evt.data.event);
    } else if(evt.data.type === 'resolution_change') {
      const {width, height} = evt.data;
      layer.setResolution({width, height});
    }
  });
});


export {
  Renderer,
  Node,
  Block,
  Sprite,
  Path,
  Rect,
  Ellipse,
  Label,
  Group,
  Layer,
  Gradient,
  parseColor,
  layerCreated,
};