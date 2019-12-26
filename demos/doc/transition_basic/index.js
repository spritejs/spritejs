const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  const sprite = new Sprite({
    anchor: 0.5,
    bgcolor: 'red',
    pos: [500, 300],
    size: [200, 200],
    borderRadius: 50,
  });

  layer.append(sprite);

  await sprite.transition(2.0)
    .attr({
      bgcolor: 'green',
      width: width => width + 100,
    });

  await sprite.transition(1.0)
    .attr({
      bgcolor: 'orange',
      height: height => height + 100,
    });
}());