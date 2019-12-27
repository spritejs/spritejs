import {Figure2D, Mesh2D} from '@mesh.js/core';
import Node from './node';
import Attr from '../attribute/block';
import {setFillColor, setStrokeColor} from '../utils/color';
import {createRadiusBox} from '../utils/border_radius';
import {applyFilters} from '../utils/filter';
import ownerDocument from '../document';
import getBoundingBox from '../utils/bounding_box';
import applyRenderEvent from '../utils/render_event';

const _mesh = Symbol('mesh');

export default class Block extends Node {
  static Attr = Attr;

  constructor(attrs = {}) {
    super(attrs);
  }

  get borderSize() {
    const {paddingTop, paddingRight, paddingBottom, paddingLeft, borderWidth} = this.attributes;
    const [width, height] = this.contentSize;
    return [paddingLeft + width + paddingRight + borderWidth,
      paddingTop + height + paddingBottom + borderWidth];
  }

  // content + padding
  get clientSize() {
    const {paddingTop, paddingRight, paddingBottom, paddingLeft} = this.attributes;
    const [width, height] = this.contentSize;
    return [paddingLeft + width + paddingRight,
      paddingTop + height + paddingBottom];
  }

  get contentSize() {
    let {width, height, boxSizing} = this.attributes;
    width = width || 0;
    height = height || 0;
    if(boxSizing === 'border-box') {
      const bw = 2 * this.attributes.borderWidth;
      width -= bw;
      height -= bw;
      width = Math.max(0, width);
      height = Math.max(0, height);
    }
    return [width, height];
  }

  get hasBackground() {
    return !!this.attributes.bgcolor;
  }

  get hasBorder() {
    const borderWidth = this.attributes.borderWidth;
    return borderWidth > 0;
  }

  /* override */
  get isVisible() {
    const [width, height] = this.borderSize;
    return width > 0 && height > 0;
  }

  get mesh() {
    if(this.attributes.display === 'none') return null;
    const box = this.clientBox;
    if(box) {
      let mesh = this[_mesh];
      if(!mesh) {
        mesh = new Mesh2D(box, this.getResolution());
        mesh.box = box;
        const fillColor = this.attributes.bgcolor;
        if(this.hasBackground) {
          setFillColor(mesh, {color: fillColor});
        }
        if(this.hasBorder) {
          const {borderColor, borderWidth, borderDash, borderDashOffset} = this.attributes;
          setStrokeColor(mesh,
            {color: borderColor, lineWidth: borderWidth, lineDash: borderDash, lineDashOffset: borderDashOffset});
        }
        mesh.setOpacity(this.attributes.opacity);
        this[_mesh] = mesh;
      } else if(mesh.box !== box) {
        mesh.contours = box.contours;
        mesh.path = box;
      }
      mesh.setTransform(...this.renderMatrix);
      return mesh;
    }
    return null;
  }

  // content + padding + border
  get offsetSize() {
    const {paddingTop, paddingRight, paddingBottom, paddingLeft, borderWidth} = this.attributes;
    const [width, height] = this.contentSize;
    const bw2 = 2 * borderWidth;
    return [paddingLeft + width + paddingRight + bw2,
      paddingTop + height + paddingBottom + bw2];
  }

  get originalClientRect() {
    if(this.clientBox) {
      const boundingBox = this.mesh.boundingBox;
      return [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0] - boundingBox[0][0], boundingBox[1][1] - boundingBox[0][1]];
    }
    return [0, 0, 0, 0];
  }

  get originalContentRect() {
    const [left, top, width, height] = this.originalClientRect;
    const padding = this.attributes.padding;
    return [left + padding[0], top + padding[1], width - padding[0] - padding[2], height - padding[1] - padding[3]];
  }

  getBoundingClientRect() {
    let boundingBox = null;
    if(this.mesh) {
      boundingBox = [...this.mesh.boundingBox];
      const borderWidth = this.attributes.borderWidth;
      if(borderWidth) {
        boundingBox[0] = [boundingBox[0][0] - borderWidth, boundingBox[0][1] - borderWidth];
        boundingBox[1] = [boundingBox[1][0] + borderWidth, boundingBox[1][1] + borderWidth];
      }
    }
    return getBoundingBox(boundingBox, this.renderMatrix);
  }

  // transformPoint(x, y) {
  //   const m = mat2d.invert(this.renderMatrix);
  //   const newX = x * m[0] + y * m[2] + m[4];
  //   const newY = x * m[1] + y * m[3] + m[5];
  //   return [newX, newY];
  // }

  /* override */
  draw(meshes = []) {
    // if(!this.isVisible) return meshes;

    const mesh = this.mesh;
    if(mesh) {
      applyFilters(mesh, this.filters);
      meshes.push(mesh);
      applyRenderEvent(this, mesh);
    }

    return meshes;
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) { // eslint-disable-line complexity
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'anchorX' || key === 'anchorY' || key === 'boxSizing' || key === 'width' || key === 'height' || key === 'borderWidth'
      || key === 'paddingLeft' || key === 'paddingRight' || key === 'paddingTop' || key === 'paddingBottom'
      || /^border(TopLeft|TopRight|BottomRight|BottomLeft)Radius$/.test(key)) {
      this.updateContours();
    }
    if(key === 'opacity') {
      if(this[_mesh]) this[_mesh].setOpacity(newValue);
    }
    // if(key === 'anchorX' || key === 'anchorY' || key === 'boxSizing') {
    //   if(this[_mesh]) {
    //     const bgcolor = this.attributes.bgcolor;
    //     if(bgcolor && bgcolor.vector) {
    //       setFillColor(this[_mesh], {color: bgcolor});
    //     }
    //     const borderColor = this.attributes.borderColor;
    //     if(borderColor && borderColor.vector) {
    //       const {borderWidth, borderDash, borderDashOffset} = this.attributes;
    //       setStrokeColor(this[_mesh],
    //         {color: borderColor, lineWidth: borderWidth, lineDash: borderDash, lineDashOffset: borderDashOffset});
    //     }
    //   }
    // }
    if(this[_mesh] && key === 'bgcolor') {
      setFillColor(this[_mesh], {color: newValue});
    }
    if(this[_mesh]
      && (key === 'borderColor'
      || key === 'borderWidth'
      || key === 'borderDash'
      || key === 'borderDashOffset')) {
      const {borderColor, borderWidth, borderDash, borderDashOffset} = this.attributes;
      setStrokeColor(this[_mesh],
        {color: borderColor, lineWidth: borderWidth, lineDash: borderDash, lineDashOffset: borderDashOffset});
    }
    if(key === 'zIndex' && this.parent) {
      this.parent.reorder();
    }
  }

  /* override */
  updateContours() {
    const {anchorX, anchorY, borderWidth, borderRadius} = this.attributes;
    const [width, height] = this.borderSize;
    const offsetSize = this.offsetSize;

    const bw = 0.5 * borderWidth;

    const left = -anchorX * offsetSize[0] + bw;
    const top = -anchorY * offsetSize[1] + bw;

    this.clientBox = new Figure2D();
    createRadiusBox(this.clientBox, [left, top, width, height], borderRadius);
  }
}

ownerDocument.registerNode(Block, 'block');