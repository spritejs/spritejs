const {Scene, Path} = spritejs

/* demo: box-rect */
;(function () {
  const scene = new Scene('#box-rect', {viewport: ['auto', 'auto'], resolution: [770, 600]});
  const layer = scene.layer('fglayer');

  const s1 = new Path();
  s1.attr({
    path: {
      d: 'M0,0L0,1L1,1L1,0z',
      transform: {scale: 100},
    },
    anchor: [0.5, 0.5],
    fillColor: '#f77',
    pos: [385, 300],
    padding: [20, 20, 20, 20],
    bgcolor: 'rgba(0, 0, 0, 0.3)',
    border: [5, 'black'],
    borderRadius: 10,
  });

  layer.append(s1);

  const contentSize = document.getElementById('contentSize'),
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
    const [x, y, w, h] = rect;
    return [...[x, y].map(Math.floor), ...[w, h].map(Math.ceil)];
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

  paddingCtl.addEventListener('change', (evt) => {
    const value = evt.target.value;
    s1.attr('padding', value);
    paddingValue.innerHTML = value;
    updateState();
  });

  borderCtl.addEventListener('change', (evt) => {
    const value = evt.target.value;
    s1.attr('border', [value]);
    borderValue.innerHTML = value;
    updateState();
  });

  rotateCtl.addEventListener('change', (evt) => {
    const value = evt.target.value;
    s1.attr('rotate', [value]);
    rotateValue.innerHTML = value;
    updateState();
  });

  sizeCtl.addEventListener('change', (evt) => {
    const value = evt.target.value;
    const path = s1.attr('path');
    path.transform.scale = value;
    s1.attr({path});
    sizeValue.innerHTML = value;
    updateState();
  });
}());