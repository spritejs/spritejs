const {Scene, Polyline} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

const line = new Polyline({
  pos: [250, 50],
  points: [0, 0, 100, 100, 200, 0, 300, 100, 400, 0, 500, 100, 600, 0],
  strokeColor: 'blue',
  lineWidth: 3,
});
layer.append(line);

const line2 = line.cloneNode();
line2.attr({
  smooth: true,
  strokeColor: 'red',
});
layer.append(line2);

const polygon = new Polyline({
  pos: [250, 350],
  points: [0, 0, 100, 100, 200, 0, 300, 100, 400, 0, 500, 100, 600, 0],
  fillColor: '#37c',
  lineWidth: 3,
  close: true,
  smooth: true,
});
layer.append(polygon);