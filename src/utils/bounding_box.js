export default function (boundingBox, m) {
  if(!boundingBox) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
  }

  const [[x1, y1], [x2, y2]] = boundingBox;

  const x11 = x1 * m[0] + y1 * m[2] + m[4];
  const y11 = x1 * m[1] + y1 * m[3] + m[5];

  const x21 = x2 * m[0] + y1 * m[2] + m[4];
  const y21 = x2 * m[1] + y1 * m[3] + m[5];

  const x22 = x2 * m[0] + y2 * m[2] + m[4];
  const y22 = x2 * m[1] + y2 * m[3] + m[5];

  const x12 = x1 * m[0] + y2 * m[2] + m[4];
  const y12 = x1 * m[1] + y2 * m[3] + m[5];

  const left = Math.min(x11, x21, x22, x12);
  const top = Math.min(y11, y21, y22, y12);
  const right = Math.max(x11, x21, x22, x12);
  const bottom = Math.max(y11, y21, y22, y12);

  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
    left,
    top,
    right,
    bottom,
  };
}