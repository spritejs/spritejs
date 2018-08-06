const {Scene, Group, Sprite} = spritejs

/* demo: virtualgroup */
;(function () {
  const scene = new Scene('#virtualgroup', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const g1 = new Group(); // virtual group
  g1.attr({
    pos: [500, 200],
    rotate: 45,
  });
  layer.append(g1);

  const c1 = new Sprite();
  c1.attr({
    pos: [0, 0],
    size: [80, 80],
    borderRadius: 40,
    bgcolor: 'red',
  });
  const c2 = c1.cloneNode();
  c2.attr({
    x: x => x + 100,
    bgcolor: 'blue',
  });
  const c3 = c1.cloneNode();
  c3.attr({
    y: y => y + 100,
    bgcolor: 'green',
  });
  g1.append(c1, c2, c3);

  const g2 = g1.cloneNode(true);
  g2.attr({
    pos: [1000, 200],
    rotate: 45,
    size: [150, 150],
    padding: 10,
    bgcolor: 'grey',
  });
  layer.append(g2);
}());