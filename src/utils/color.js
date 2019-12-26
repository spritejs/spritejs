import rgba from 'color-rgba';

class Gradient {
  constructor({vector, colors}) {
    if(!Array.isArray(vector) || (vector.length !== 4 && vector.length !== 6 && vector.length !== 3)) {
      throw new TypeError('Invalid gradient');
    }
    this.vector = vector;
    this.colors = colors.map(({offset, color}) => {
      return {offset, color: parseColor(color)};
    });
  }

  toString() {
    return JSON.stringify({vector: this.vector, colors: this.colors});
  }
}

export function isTransparent(color) {
  if(color instanceof Gradient) return false;
  if(color == null) return true;
  return rgba(color)[3] === 0;
}

export function parseColor(color) {
  // if(Array.isArray(color)) return color;
  if(color == null) return color;
  if(!color) color = 'transparent';
  if(color instanceof Gradient) return color;
  const ret = rgba(color);
  if(!ret || !ret.length) throw new TypeError('Invalid color value.');
  return `rgba(${ret.join()})`;
}

export {Gradient};

function applyMeshGradient(mesh, type, color) {
  const vectorOffset = mesh.boundingBox[0];
  if(color.vector) {
    let {vector, colors} = color;
    if(vector.length === 4) {
      vector = [vector[0] + vectorOffset[0],
        vector[1] + vectorOffset[1],
        vector[2] + vectorOffset[0],
        vector[3] + vectorOffset[1]];
      mesh.setLinearGradient({vector, colors, type});
    } else if(vector.length === 3) {
      vector = [vector[0] + vectorOffset[0],
        vector[1] + vectorOffset[1],
        vector[2]];
      mesh.setCircularGradient({vector, colors, type});
    } else {
      vector = [vector[0] + vectorOffset[0],
        vector[1] + vectorOffset[1],
        vector[2],
        vector[3] + vectorOffset[0],
        vector[4] + vectorOffset[1],
        vector[5]];
      mesh.setRadialGradient({vector, colors, type});
    }
  } else if(mesh.gradient && mesh.gradient[type]) {
    delete mesh.gradient[type];
    delete mesh.uniforms.u_radialGradientVector;
  }
}

export function setFillColor(mesh, {color: fillColor}) {
  applyMeshGradient(mesh, 'fill', fillColor);
  if(!fillColor.vector) {
    mesh.setFill({color: fillColor});
  }
  return mesh;
}

export function setStrokeColor(mesh,
  {color: strokeColor, lineWidth, lineCap, lineJoin, lineDash, lineDashOffset, miterLimit}) {
  applyMeshGradient(mesh, 'stroke', strokeColor);
  if(strokeColor.vector) {
    strokeColor = [0, 0, 0, 1];
  }
  mesh.setStroke({
    color: strokeColor,
    thickness: lineWidth,
    cap: lineCap,
    join: lineJoin,
    miterLimit,
    lineDash,
    lineDashOffset,
  });
}