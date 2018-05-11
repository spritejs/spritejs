'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Path = _spritejs.Path;
(function () {
  var scene = new Scene('#box-rect', { viewport: ['auto', 'auto'], resolution: [770, 600] });
  var layer = scene.layer('fglayer');

  var s1 = new Path();
  s1.attr({
    path: {
      d: 'M0,0L0,1L1,1L1,0z',
      transform: { scale: 100 }
    },
    anchor: [0.5, 0.5],
    fillColor: '#f77',
    pos: [385, 300],
    padding: [20, 20, 20, 20],
    bgcolor: 'rgba(0, 0, 0, 0.3)',
    border: [5, 'black'],
    borderRadius: 10
  });

  layer.append(s1);

  var contentSize = document.getElementById('contentSize'),
      clientSize = document.getElementById('clientSize'),
      offsetSize = document.getElementById('offsetSize'),
      originalRect = document.getElementById('originalRect'),
      boundingRect = document.getElementById('boundingRect'),
      originalRenderRect = document.getElementById('originalRenderRect'),
      renderRect = document.getElementById('renderRect'),
      paddingCtl = document.getElementById('paddingCtl'),
      borderCtl = document.getElementById('borderCtl'),
      rotateCtl = document.getElementById('rotateCtl'),
      sizeCtl = document.getElementById('sizeCtl'),
      paddingValue = document.getElementById('paddingValue'),
      rotateValue = document.getElementById('rotateValue'),
      sizeValue = document.getElementById('sizeValue'),
      borderValue = document.getElementById('borderValue');

  function box(rect) {
    var _rect = _slicedToArray(rect, 4),
        x = _rect[0],
        y = _rect[1],
        w = _rect[2],
        h = _rect[3];

    return [].concat(_toConsumableArray([x, y].map(Math.floor)), _toConsumableArray([w, h].map(Math.ceil)));
  }

  function updateState() {
    contentSize.innerHTML = s1.contentSize;
    clientSize.innerHTML = s1.clientSize;
    offsetSize.innerHTML = s1.offsetSize;
    originalRect.innerHTML = box(s1.originalRect);
    boundingRect.innerHTML = box(s1.boundingRect);
    originalRenderRect.innerHTML = box(s1.originalRenderRect);
    renderRect.innerHTML = box(s1.renderRect);
  }
  updateState();

  paddingCtl.addEventListener('change', function (evt) {
    var value = evt.target.value;
    s1.attr('padding', value);
    paddingValue.innerHTML = value;
    updateState();
  });

  borderCtl.addEventListener('change', function (evt) {
    var value = evt.target.value;
    s1.attr('border', [value]);
    borderValue.innerHTML = value;
    updateState();
  });

  rotateCtl.addEventListener('change', function (evt) {
    var value = evt.target.value;
    s1.attr('rotate', [value]);
    rotateValue.innerHTML = value;
    updateState();
  });

  sizeCtl.addEventListener('change', function (evt) {
    var value = evt.target.value;
    var path = s1.attr('path');
    path.transform.scale = value;
    s1.attr({ path: path });
    sizeValue.innerHTML = value;
    updateState();
  });
})();