'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;
(function () {
  var scene = new Scene('#point-collision', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var c1 = new Sprite();
  c1.attr({
    anchor: [0.5, 0.5],
    border: [100, 'red'],
    pos: [770, 300],
    borderRadius: 50,
    opacity: 0.5
  });
  layer.append(c1);

  var c2 = new Sprite();
  c2.attr({
    anchor: [0.5, 0.5],
    border: [50, 'rgb(192, 128, 0)'],
    size: [100, 100],
    pos: [470, 300],
    borderRadius: 75,
    opacity: 0.5
  });
  layer.append(c2);

  var c3 = new Sprite();
  c3.attr({
    anchor: [0.5, 0.5],
    border: [20, 'green'],
    pos: [1070, 300],
    size: [160, 160],
    borderRadius: 90,
    opacity: 0.5
  });
  layer.append(c3);

  function isPointCollision(sprite, x, y) {
    var _sprite$attr = sprite.attr('border'),
        _sprite$attr2 = _slicedToArray(_sprite$attr, 1),
        borderWidth = _sprite$attr2[0],
        width = sprite.contentSize[0];

    var bounds = sprite.boundingRect,
        cx = bounds[0] + bounds[2] / 2,
        cy = bounds[1] + bounds[3] / 2;


    var distance = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    return distance >= width / 2 && distance <= width / 2 + borderWidth;
  }

  [c1, c2, c3].forEach(function (c) {
    c.on('mousemove', function (evt) {
      var target = evt.target,
          offsetX = evt.offsetX,
          offsetY = evt.offsetY;


      if (isPointCollision(target, offsetX, offsetY)) {
        target.attr('opacity', 1);
      } else {
        target.attr('opacity', 0.5);
      }
    });
    c.on('mouseleave', function (evt) {
      var target = evt.target;
      target.attr('opacity', 0.5);
    });
  });
})();