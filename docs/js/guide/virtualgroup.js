'use strict';

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Group = _spritejs.Group,
    Sprite = _spritejs.Sprite;
(function () {
  var scene = new Scene('#virtualgroup', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var g1 = new Group(); // virtual group
  g1.attr({
    pos: [500, 200],
    rotate: 45
  });
  layer.append(g1);

  var c1 = new Sprite();
  c1.attr({
    pos: [0, 0],
    size: [80, 80],
    borderRadius: 40,
    bgcolor: 'red'
  });
  var c2 = c1.cloneNode();
  c2.attr({
    x: function x(_x) {
      return _x + 100;
    },
    bgcolor: 'blue'
  });
  var c3 = c1.cloneNode();
  c3.attr({
    y: function y(_y) {
      return _y + 100;
    },
    bgcolor: 'green'
  });
  g1.append(c1, c2, c3);

  var g2 = g1.cloneNode(true);
  g2.attr({
    pos: [1000, 200],
    rotate: 45,
    size: [150, 150],
    padding: 10,
    bgcolor: 'grey'
  });
  layer.append(g2);
})();