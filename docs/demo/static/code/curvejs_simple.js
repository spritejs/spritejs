const {Scene, Curvejs} = spritejs;

const scene = new Scene('#paper', {
  resolution: [1000, 1000],
  viewport: ['auto', 'auto'],
});

const layer = scene.layer('fglayer');
const canvas = layer.canvas;
layer.canvas.style.backgroundColor = '#000000';


const stage = new Curvejs.Stage(layer);

const rd = () => {
  return -2 + Math.random() * 2;
};

const curve = new Curvejs.Curve({
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

function tick() {
  stage.update();
  requestAnimationFrame(tick);
}

tick();
