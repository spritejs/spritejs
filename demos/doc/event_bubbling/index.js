const {Scene, Sprite, Label, Path} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const s1 = new Sprite();
s1.attr({
  anchor: [0.5, 0.5],
  pos: [770, 300],
  size: [300, 300],
  rotate: 45,
  bgcolor: '#3c7',
});

layer.append(s1);

s1.addEventListener('mouseenter', (evt) => {
  s1.attr('border', [4, 'blue']);
});
s1.addEventListener('mouseleave', (evt) => {
  s1.attr('border', [0, '']);
});

const anchorCross = new Path('M-10,0H10M0,-10V10');
anchorCross.attr({
  pos: [770, 300],
  strokeColor: 'red',
  rotate: 45,
  lineWidth: 4,
  pointerEvents: 'none',
});

layer.append(anchorCross);

const label = new Label('鼠标位置：');

label.attr({
  pos: [20, 50],
  font: '24px Arial',
  lineHeight: 56,
});

layer.append(label);

s1.addEventListener('mousemove', (evt) => {
  const {x, y} = evt;
  label.text = `鼠标位置：\n相对于锚点: ${s1.getOffsetPosition(x, y).map(Math.round)}`;
  evt.stopPropagation();
});

layer.addEventListener('mousemove', (evt) => {
  const {x, y} = evt;
  label.text = `鼠标位置：\n相对于 Layer: ${[Math.round(x), Math.round(y)]}`;
});