const {Scene, Sprite, Label} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  await scene.preload({
    id: 'robot',
    src: 'https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png',
  });

  const robot = new Sprite('robot');
  robot.attr({
    anchor: [0.5, 0.5],
    pos: [600, 300],
    scale: 0.5,
  });
  layer.append(robot);

  const label = new Label(`图片大小： ${robot.contentSize}`);
  label.attr({
    anchor: [0.5, 0.5],
    pos: [600, 100],
    font: '36px Arial',
  });
  layer.append(label);
}());