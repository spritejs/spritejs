function createEllipseBorder(figure, x, y, w, h, pos = 'leftTop') {
  const kappa = 0.5522848,
    ox = (w / 2) * kappa, // control point offset horizontal
    oy = (h / 2) * kappa, // control point offset vertical
    xe = x + w, // x-end
    ye = y + h, // y-end
    xm = x + w / 2, // x-middle
    ym = y + h / 2; // y-middle

  if(pos === 'leftTop') {
    figure.moveTo(x, ym);
    figure.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  } else if(pos === 'rightTop') {
    figure.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  } else if(pos === 'rightBottom') {
    figure.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  } else if(pos === 'leftBottom') {
    figure.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  }
}

export function createRadiusBox(figure, [x, y, w, h], radius) {
  if(!radius || Array.isArray(radius) && radius.every(r => r === 0)) {
    figure.beginPath();
    figure.rect(x, y, w, h);
  } else {
    if(typeof radius === 'number') radius = Array(8).fill(radius);

    const [tl0, tl1, tr0, tr1, br0, br1, bl0, bl1] = radius.map((r, i) => {
      if(i % 2) return Math.min(r, h / 2);
      return Math.min(r, w / 2);
    });

    figure.beginPath();
    figure.moveTo(x, y + tl1);
    createEllipseBorder(figure, x, y, tl0 * 2, tl1 * 2, 'leftTop');
    figure.lineTo(x + w - tr0, y);
    createEllipseBorder(figure, x + w - tr0 * 2, y, tr0 * 2, tr1 * 2, 'rightTop');
    figure.lineTo(x + w, y + h - br1);
    createEllipseBorder(figure, x + w - br0 * 2, y + h - br1 * 2, br0 * 2, br1 * 2, 'rightBottom');
    figure.lineTo(x + bl0, y + h);
    createEllipseBorder(figure, x, y + h - bl1 * 2, bl0 * 2, bl1 * 2, 'leftBottom');
    figure.closePath();
  }
  return figure;
}