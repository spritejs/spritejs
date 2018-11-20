'use strict';

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;

/* demo: css-basic */

(function () {
  var scene = new Scene('#css-basic', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600],
    useDocumentCSS: true
  });
  var layer = scene.layer();

  var s1 = new Sprite({
    class: 'red circle'
  });

  var s2 = new Sprite({
    class: 'blue circle'
  });

  layer.append(s1, s2);
})();

/* demo: css-transition */
(function () {
  var scene = new Scene('#css-transition', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600],
    useDocumentCSS: true
  });
  var layer = scene.layer();

  var s1 = new Sprite({
    class: 'red circle'
  });

  var s2 = new Sprite({
    class: 'blue circle'
  });

  layer.append(s1, s2);

  s1.on('mouseenter', function () {
    s1.attr('class', 'orange circle');
  });
  s1.on('mouseleave', function () {
    s1.attr('class', 'red circle');
  });
  window.s1 = s1;
  s2.on('mouseenter', function () {
    s2.attr('class', 'cyan circle');
  });
  s2.on('mouseleave', function () {
    s2.attr('class', 'blue circle');
  });
})();