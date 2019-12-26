const {Scene, Rect} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 600,
  height: 600,
  contextType: '2d',
});
const layer = scene.layer({
  autoRender: false,
});

const rect = new Rect({
  normalize: true,
  pos: [300, 300],
  size: [100, 100],
  fillColor: 'red',
  opacity: 0.5,
});
layer.append(rect);

/* globals curvejs */
const {Stage, Curve} = curvejs;
const canvas = layer.canvas;
const stage = new Stage(canvas);
const rd = () => -2 + Math.random() * 2;
const curve = new Curve({
  color: '#00FF00',
  points: [277, 327, 230, 314, 236, 326, 257, 326],
  data: [rd(), rd(), rd(), rd(), rd(), rd(), rd(), rd()],
  motion: function motion(points, data) {
    points.forEach((item, index) => {
      points[index] += data[index];

      if(points[index] < 0) {
        points[index] = 0;
        data[index] *= -1;
      }
      if(index % 2 === 0) {
        if(points[index] > canvas.width) {
          points[index] = canvas.width;
          data[index] *= -1;
        }
      } else if(points[index] > canvas.height) {
        points[index] = canvas.height;
        data[index] *= -1;
      }
    });
  },
});
stage.add(curve);

let ang = 0;
function tick() {
  stage.update();
  rect.attributes.rotate = ang++;
  layer.render({clear: false});
  requestAnimationFrame(tick);
}

tick();