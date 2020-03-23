import {ENV} from '@mesh.js/core';
/**
  ENV: {
    Container,
    createCanvas,
    loadImage,
  }
 */
import {requestAnimationFrame, cancelAnimationFrame} from './utils/animation-frame';
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
import SpriteSvg from './node/spritesvg';
import LayerWorker from './node/layer-worker';
import Scene from './node/scene';
import ownerDocument from './document';

import {parseColor, Gradient, Color} from './utils/color';
import {sizeToPixel, toArray, toString, toNumber} from './utils/attribute_value';

const createElement = ownerDocument.createElement;
const isSpriteNode = ownerDocument.isSpriteNode;
const registerNode = ownerDocument.registerNode;

const helpers = {parseColor, sizeToPixel, toArray, toString, toNumber};

export {
  Arc,
  Block,
  Cloud,
  Color,
  Ellipse,
  Gradient,
  Group,
  Label,
  Layer,
  LayerWorker,
  Node,
  Parallel,
  Path,
  Polyline,
  Rect,
  Regular,
  Ring,
  Scene,
  Sprite,
  SpriteSvg,
  Star,
  Triangle,

  helpers,

  createElement,
  isSpriteNode,
  registerNode,
  requestAnimationFrame,
  cancelAnimationFrame,

  ENV,
};