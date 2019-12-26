const {Scene, Ring} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const ring = new Ring({
  pos: [300, 300],
  innerRadius: 50,
  outerRadius: 100,
  fillColor: 'blue',
});
layer.append(ring);

const ring2 = ring.cloneNode();
ring2.attr({
  pos: [700, 300],
  startAngle: 0,
  endAngle: 180,
  fillColor: 'red',
});
layer.append(ring2);