import {Figure2D, Mesh2D} from '@mesh.js/core';
import pasition from 'pasition';
import Node from './node';
import Attr from '../attribute/path';
import {setFillColor, setStrokeColor} from '../utils/color';
import {applyTexture, drawTexture} from '../utils/texture';
import {applyFilters} from '../utils/filter';
import ownerDocument from '../document';
import getBoundingBox from '../utils/bounding_box';
import applyRenderEvent from '../utils/render_event';

const _mesh = Symbol('mesh');

export default class Path extends Node {
  static Attr = Attr;

  constructor(attrs = {}) {
    if(typeof attrs === 'string') attrs = {d: attrs};
    super(attrs);
    this.effects = {
      d(from, to, p, s, e) {
        const ep = (p - s) / (e - s);
        if(ep <= 0) return from;
        if(ep >= 1) return to;
        const shapes = pasition._preprocessing(pasition.path2shapes(from), pasition.path2shapes(to));
        const shape = pasition._lerp(...shapes, ep)[0];
        const path = shape.reduce((str, c) => {
          return `${str}${c.slice(2).join(' ')} `;
        }, `M${shape[0][0]} ${shape[0][1]}C`).trim();
        return path;
      },
    };
  }

  /* override */
  get isVisible() {
    return !!this.d;
  }

  get mesh() {
    if(this.attributes.display === 'none') return null;
    const path = this.path;
    if(path) {
      let mesh = this[_mesh];
      if(!mesh) {
        mesh = new Mesh2D(this.path, this.getResolution());
        mesh.path = path;
        const fillColor = this.attributes.fillColor;
        if(fillColor) {
          setFillColor(mesh, {color: fillColor});
        }
        const lineWidth = this.attributes.lineWidth;
        const strokeColor = this.attributes.strokeColor;
        if(strokeColor && lineWidth > 0) {
          const {lineCap, lineJoin, miterLimit} = this.attributes;
          setStrokeColor(mesh, {
            color: strokeColor,
            lineWidth,
            lineCap,
            lineJoin,
            miterLimit,
          });
        }
        mesh.setOpacity(this.attributes.opacity);
        this[_mesh] = mesh;
      } else if(mesh.path !== path) {
        mesh.contours = path.contours;
        mesh.path = path;
      }
      mesh.setTransform(...this.renderMatrix);
      return mesh;
    }
    return null;
  }

  get originalContentRect() {
    if(this.path) {
      const boundingBox = this.path.boundingBox;
      return [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0] - boundingBox[0][0], boundingBox[1][1] - boundingBox[0][1]];
    }
    return [0, 0, 0, 0];
  }

  get originalClientRect() {
    if(this.mesh) {
      const boundingBox = this.mesh.boundingBox;
      return [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0] - boundingBox[0][0], boundingBox[1][1] - boundingBox[0][1]];
    }
    return [0, 0, 0, 0];
  }

  get originalClientCenter() {
    if(this.mesh) {
      return this.mesh.boundingCenter;
    }
    return [0, 0];
  }

  set d(value) {
    this.attributes.d = value;
  }

  get d() {
    return this.attributes.d;
  }

  /* override */
  draw(meshes = []) {
    const mesh = this.mesh;
    if(mesh) {
      applyFilters(mesh, this.filters);
      drawTexture(this, mesh);
      applyRenderEvent(this, mesh);
      meshes.push(mesh);
    }

    return meshes;
  }

  getBoundingClientRect() {
    let boundingBox = null;
    if(this.mesh) boundingBox = this.mesh.boundingBox;
    return getBoundingBox(boundingBox, this.renderMatrix);
  }

  getPathLength() {
    if(this.mesh) {
      return this.mesh.getTotalLength();
    }
    return 0;
  }

  getPointAtLength(len) {
    if(this.mesh) {
      const point = this.mesh.getPointAtLength(len);
      if(point) {
        return [point.x, point.y];
      }
    }
    return [0, 0];
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'd' || key === 'normalize') {
      this.updateContours();
    }
    if(key === 'opacity') {
      if(this[_mesh]) this[_mesh].setOpacity(newValue);
    }
    if(this[_mesh] && key === 'fillColor') {
      setFillColor(this[_mesh], {color: newValue});
    }
    if(this[_mesh] && (key === 'strokeColor' || key === 'lineWidth' || key === 'lineCap' || key === 'lineJoin'
      || key === 'lineDash' || key === 'lineDashOffset')) {
      const {strokeColor, lineWidth} = this.attributes;
      if(strokeColor && lineWidth > 0) {
        const {lineCap, lineJoin, lineDash, lineDashOffset, miterLimit} = this.attributes;
        setStrokeColor(this[_mesh], {color: strokeColor, lineCap, lineJoin, lineWidth, lineDash, lineDashOffset, miterLimit});
      }
    }
    if(key === 'texture') {
      applyTexture(this, newValue);
    }
  }

  /* override */
  updateContours() {
    this.path = new Figure2D();
    this.path.addPath(this.attributes.d);
    if(this.attributes.normalize) {
      this.path.normalize(...this.path.boundingCenter);
    }
  }
}

ownerDocument.registerNode(Path, 'path');