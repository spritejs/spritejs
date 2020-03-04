/* istanbul ignore file */
/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} points 绘制点
 */
export function makeSmoothCurveLine(points, smoothRange = [0]) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i, a = 0.168, b = 0.168) {
    let x0;
    let y0;
    let x1;
    let y1;

    if(points[i].x === points[i + 1].x || points[i].y === points[i + 1].y) {
      a = 0;
      b = 0;
    }

    if(i < 1) {
      x0 = points[0].x + (points[1].x - points[0].x) * a;
      y0 = points[0].y + (points[1].y - points[0].y) * a;
    } else {
      x0 = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
      y0 = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
    }

    if(i > points.length - 3) {
      const last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{x: x0, y: y0}, {x: x1, y: y1}];
  }

  points = points.map(([x, y]) => ({x, y}));

  let d = '';

  let j = 0;

  points.forEach((point, i) => {
    if(i === 0) {
      d += `M${point.x} ${point.y}`;
    } else {
      while(i > smoothRange[j]) {
        j++;
      }
      if(j % 2) {
        const [A, B] = getCtrlPoint(i - 1);
        d += `C${[A.x, A.y, B.x, B.y, point.x, point.y].join(' ')}`;
      } else {
        d += `L${point.x} ${point.y}`;
      }
    }
  });
  return d;
}
