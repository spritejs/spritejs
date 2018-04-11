'use strict';

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

  function updateState() {
    contentSize.innerHTML = s1.contentSize;
    clientSize.innerHTML = s1.clientSize;
    offsetSize.innerHTML = s1.offsetSize;
    originalRect.innerHTML = s1.originalRect;
    boundingRect.innerHTML = s1.boundingRect;
    originalRenderRect.innerHTML = s1.originalRenderRect;
    renderRect.innerHTML = s1.renderRect;
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