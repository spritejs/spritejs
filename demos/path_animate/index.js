const {Scene, Polyline} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 1200,
});

const layer = scene.layer('fglayer');
layer.canvas.style.backgroundColor = '#fff';

const radius = 200;
let points = [];
for(let i = 0; i < 5; i++) {
  const angle = i * Math.PI * 0.4;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  points.push([x, y]);
}
points = [points[0], points[2], points[4], points[1], points[3]];

const polyline = new Polyline({points});
polyline.attr({
  pos: [600, 600],
  strokeColor: 'red',
  lineWidth: 6,
  close: true,
  lineDash: [5000, 5000],
  lineDashOffset: 5000,
});

setTimeout(() => {
  polyline.animate([
    {lineDashOffset: 5000},
    {lineDashOffset: 3000},
  ], {
    duration: 3000,
    iterations: Infinity,
  });
}, 500);

layer.append(polyline);