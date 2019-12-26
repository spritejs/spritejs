const {Scene, Arc, Ellipse} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const fan = new Arc({
  pos: [300, 300],
  radius: 100,
  startAngle: 0,
  endAngle: 120,
  fillColor: 'blue',
});
layer.append(fan);

const fan2 = fan.cloneNode();
fan2.attr({
  pos: [300, 150],
  closeType: 'sector',
});

layer.append(fan2);

const ellipse = new Ellipse({
  pos: [700, 300],
  radiusX: 150,
  radiusY: 100,
  startAngle: 0,
  endAngle: 240,
  lineWidth: 6,
  strokeColor: 'red',
  fillColor: 'green',
  closeType: 'sector',
});
layer.append(ellipse);