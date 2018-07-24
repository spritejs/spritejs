'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Label = _spritejs.Label,
    Path = _spritejs.Path;
(function () {
  var scene = new Scene('#dom-events', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer('fglayer');

  var s1 = new Sprite();
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [300, 300],
    rotate: 45,
    bgcolor: '#3c7'
  });

  layer.append(s1);

  s1.on('mouseenter', function (evt) {
    s1.attr('border', [4, 'blue']);
  });
  s1.on('mouseleave', function (evt) {
    s1.attr('border', [0, '']);
  });

  var anchorCross = new Path('M0,10H10,20M10,0V10,20');
  anchorCross.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    strokeColor: 'red',
    rotate: 45,
    lineWidth: 4
  });

  layer.append(anchorCross);

  var label = new Label('鼠标位置：');

  label.attr({
    pos: [20, 50],
    font: '32px Arial',
    lineHeight: 56
  });

  layer.append(label);

  layer.on('mousemove', function (evt) {
    var x = evt.x,
        y = evt.y,
        targetSprites = evt.targetSprites;


    label.text = '\u9F20\u6807\u4F4D\u7F6E\uFF1A\n\u76F8\u5BF9\u4E8E layer: ' + Math.round(x) + ', ' + Math.round(y);

    if (targetSprites.length && targetSprites.includes(s1)) {
      var _s1$pointToOffset$map = s1.pointToOffset(x, y).map(Math.round),
          _s1$pointToOffset$map2 = _slicedToArray(_s1$pointToOffset$map, 2),
          offsetX = _s1$pointToOffset$map2[0],
          offsetY = _s1$pointToOffset$map2[1];

      label.text += '\n\u76F8\u5BF9\u4E8E\u5143\u7D20\uFF1A' + offsetX + ', ' + offsetY;
    }
  });
})();(function () {
  var scene = new Scene('#dom-events-stop-dispatch', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer('fglayer');

  var s1 = new Sprite();
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [300, 300],
    rotate: 45,
    bgcolor: '#3c7'
  });

  layer.append(s1);

  s1.on('mouseenter', function (evt) {
    s1.attr('border', [4, 'blue']);
  });
  s1.on('mouseleave', function (evt) {
    s1.attr('border', [0, '']);
  });

  var anchorCross = new Path('M0,10H10,20M10,0V10,20');
  anchorCross.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    strokeColor: 'red',
    rotate: 45,
    lineWidth: 4
  });

  layer.append(anchorCross);

  var label = new Label('鼠标位置：');

  label.attr({
    pos: [20, 50],
    font: '32px Arial',
    lineHeight: 56
  });

  layer.append(label);

  layer.on('mousemove', function (evt) {
    var x = evt.x,
        y = evt.y;


    label.text = '\u9F20\u6807\u4F4D\u7F6E\uFF1A\n\u76F8\u5BF9\u4E8E layer: ' + Math.round(x) + ', ' + Math.round(y);
  });

  s1.on('mousemove', function (evt) {
    var x = evt.x,
        y = evt.y,
        offsetX = evt.offsetX,
        offsetY = evt.offsetY;

    label.text = '\u9F20\u6807\u4F4D\u7F6E\uFF1A\n\u76F8\u5BF9\u4E8E layer: ' + Math.round(x) + ', ' + Math.round(y) + '\n\u76F8\u5BF9\u4E8E\u5143\u7D20\uFF1A' + Math.round(offsetX) + ', ' + Math.round(offsetY);

    evt.stopDispatch();
  });
})();(function () {
  var scene = new Scene('#dragdrop', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer('fglayer');
  var zIndex = 1;

  function draggable(sprite) {
    if (sprite.isDraggable) return;

    sprite.isDraggable = true;

    var x0 = void 0,
        y0 = void 0,
        startPos = void 0;

    function onMouseMove(evt) {
      var dx = evt.x - x0,
          dy = evt.y - y0;

      sprite.attr('pos', [startPos[0] + dx, startPos[1] + dy]);
      evt.stopDispatch();
    }

    sprite.on('mouseenter', function (evt) {
      sprite.attr('border', { width: 6, color: 'blue' });
    });
    sprite.on('mouseleave', function (evt) {
      sprite.attr('border', { width: 0 });
    });

    sprite.on('mousedown', function (evt) {
      x0 = evt.x;
      y0 = evt.y;
      startPos = sprite.attr('pos');
      sprite.attr('zIndex', zIndex++);
      sprite.off('mousemove', onMouseMove);
      sprite.setMouseCapture();
      sprite.on('mousemove', onMouseMove);
      evt.stopDispatch();
    }).on('mouseup', function (evt) {
      sprite.off('mousemove', onMouseMove);
      sprite.releaseMouseCapture();
    });

    return sprite;
  }

  var s1 = new Sprite();
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [200, 200],
    rotate: 45,
    bgcolor: '#3c7'
  });

  var s2 = new Sprite();
  s2.attr({
    anchor: [0.5, 0.5],
    pos: [270, 300],
    size: [200, 200],
    bgcolor: '#c37'
  });

  var s3 = new Sprite();
  s3.attr({
    anchor: [0.5, 0.5],
    pos: [1270, 300],
    size: [200, 200],
    bgcolor: '#73c'
  });

  layer.append.apply(layer, _toConsumableArray([s1, s2, s3].map(draggable)));

  layer.on('mousemove', function (evt) {
    if (evt.targetSprites.some(function (target) {
      return target.isDraggable;
    })) {
      scene.container.style.cursor = 'move';
    } else {
      scene.container.style.cursor = 'default';
    }
  });
})();