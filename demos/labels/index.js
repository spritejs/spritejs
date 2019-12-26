const {Scene, Label, Group} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 1200,
});

const fglayer = scene.layer('fglayer');
fglayer.canvas.style.backgroundColor = '#3f097a';

const group = new Group();
group.attr({
  pos: [600, 540],
});

fglayer.append(group);

const text1 = new Label('Hello World !');

text1.attr({
  anchor: [0.5, 0.5],
  font: 'bold 48px Arial',
  fillColor: '#ffdc45',
});

const text2 = new Label('SpriteJS.org');
text2.attr({
  anchor: [0.5, 0.5],
  y: 60,
  font: 'bold 48px Arial',
  fillColor: '#ffdc45',
});

group.animate([
  {scale: 1.5, rotate: -30},
  {scale: 1, rotate: 0},
  {scale: 1.5, rotate: 30},
], {
  duration: 3000,
  iterations: Infinity,
  direction: 'alternate',
});

group.append(text1, text2);