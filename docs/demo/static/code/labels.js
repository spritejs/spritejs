(function () {
  const {Scene, Label} = spritejs;
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]});
  const fglayer = scene.layer('fglayer');
  fglayer.canvas.style.backgroundColor = '#3f097a';

  const text1 = new Label('Hello World !\nSpriteJS.org');

  text1.attr({
    anchor: [0.5, 0.5],
    pos: [600, 600],
    font: 'bold 48px Arial',
    color: '#ffdc45',
  });

  text1.animate([
    {scale: 1.5, rotate: -30},
    {scale: 1, rotate: 0},
    {scale: 1.5, rotate: 30},
  ], {
    duration: 3000,
    iterations: Infinity,
    direction: 'alternate',
  });

  fglayer.append(text1);
}());
