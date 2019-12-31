import {ENV} from '@mesh.js/core';
/**
  ENV: {
    Container,
    createCanvas,
    loadImage,
  }
 */
import Node from './node/node';
import Cloud from './node/cloud';
import Block from './node/block';
import Sprite from './node/sprite';
import Path from './node/path';
import Rect from './node/rect';
import Triangle from './node/triangle';
import Parallel from './node/parallel';
import Regular from './node/regular';
import Star from './node/star';
import Ellipse from './node/ellipse';
import Arc from './node/arc';
import Ring from './node/ring';
import Polyline from './node/polyline';
import Label from './node/label';
import Group from './node/group';
import Layer from './node/layer';
import ownerDocument from './document';

import {parseColor, Gradient} from './utils/color';
import {sizeToPixel, toArray, toString, toNumber} from './utils/attribute_value';

const helpers = {parseColor, sizeToPixel, toArray, toString, toNumber};

const createElement = ownerDocument.createElement;
const isSpriteNode = ownerDocument.isSpriteNode;
const registerNode = ownerDocument.registerNode;

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
  Arc,
  Block,
  Cloud,
  Ellipse,
  Gradient,
  Group,
  Label,
  Layer,
  Node,
  Parallel,
  Path,
  Polyline,
  Rect,
  Regular,
  Ring,
  Sprite,
  Star,
  Triangle,

  createElement,
  isSpriteNode,
  registerNode,

  helpers,

  layerCreated,

  ENV,
};