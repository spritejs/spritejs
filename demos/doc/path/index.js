const {Scene, Path} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();
const p1 = new Path();
p1.attr({
  d: 'M0,0A200,200,0,1,1,400,0A200,200,0,1,1,0,0Z',
  scale: 0.5,
  strokeColor: '#033',
  fillColor: '#839',
  lineWidth: 12,
  pos: [100, 150],
});

layer.appendChild(p1);

const p2 = new Path();
p2.attr({
  d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
  normalize: true,
  rotate: 45,
  fillColor: '#ed8',
  pos: [500, 300],
});
layer.appendChild(p2);

const p3 = new Path();
p3.attr({
  d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
  normalize: true,
  strokeColor: '#f37',
  lineWidth: 20,
  pos: [950, 300],
});
layer.appendChild(p3);