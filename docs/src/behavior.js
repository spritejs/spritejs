const {Scene, Sprite, Label, Path} = spritejs

/* demo: dom-events */
;(function () {
  const scene = new Scene('#dom-events', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');

  const s1 = new Sprite();
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [300, 300],
    rotate: 45,
    bgcolor: '#3c7',
  });

  layer.append(s1);

  s1.on('mouseenter', (evt) => {
    s1.attr('border', [4, 'blue']);
  });
  s1.on('mouseleave', (evt) => {
    s1.attr('border', [0, '']);
  });

  const anchorCross = new Path('M0,10H10,20M10,0V10,20');
  anchorCross.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    strokeColor: 'red',
    rotate: 45,
    lineWidth: 4,
  });

  layer.append(anchorCross);

  const label = new Label('鼠标位置：');

  label.attr({
    pos: [20, 50],
    font: '32px Arial',
    lineHeight: 56,
  });

  layer.append(label);

  layer.on('mousemove', (evt) => {
    const {x, y, targetSprites} = evt;

    label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}`;

    if(targetSprites.length && targetSprites.includes(s1)) {
      const [offsetX, offsetY] = s1.pointToOffset(x, y).map(Math.round);
      label.text += `\n相对于元素：${offsetX}, ${offsetY}`;
    }
  });
}())

/* demo: dom-events-stop-dispatch */
;(function () {
  const scene = new Scene('#dom-events-stop-dispatch', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');

  const s1 = new Sprite();
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [300, 300],
    rotate: 45,
    bgcolor: '#3c7',
  });

  layer.append(s1);

  s1.on('mouseenter', (evt) => {
    s1.attr('border', [4, 'blue']);
  });
  s1.on('mouseleave', (evt) => {
    s1.attr('border', [0, '']);
  });

  const anchorCross = new Path('M0,10H10,20M10,0V10,20');
  anchorCross.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    strokeColor: 'red',
    rotate: 45,
    lineWidth: 4,
  });

  layer.append(anchorCross);

  const label = new Label('鼠标位置：');

  label.attr({
    pos: [20, 50],
    font: '32px Arial',
    lineHeight: 56,
  });

  layer.append(label);

  layer.on('mousemove', (evt) => {
    const {x, y} = evt;

    label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}`;
  });

  s1.on('mousemove', (evt) => {
    const {x, y, offsetX, offsetY} = evt;
    label.text = `鼠标位置：\n相对于 layer: ${Math.round(x)}, ${Math.round(y)}\n相对于元素：${Math.round(offsetX)}, ${Math.round(offsetY)}`;

    evt.stopDispatch();
  });
}())

/* demo: dragdrop */
;(function () {
  const scene = new Scene('#dragdrop', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer('fglayer');
  let zIndex = 1;

  function draggable(sprite) {
    if(sprite.isDraggable) return;

    sprite.isDraggable = true;

    let x0,
      y0,
      startPos;

    function onMouseMove(evt) {
      const dx = evt.x - x0,
        dy = evt.y - y0;

      sprite.attr('pos', [startPos[0] + dx, startPos[1] + dy]);
      evt.stopDispatch();
    }

    sprite.on('mouseenter', (evt) => {
      sprite.attr('border', {width: 6, color: 'blue'});
    });
    sprite.on('mouseleave', (evt) => {
      sprite.attr('border', {width: 0});
    });

    sprite.on('mousedown', (evt) => {
      x0 = evt.x;
      y0 = evt.y;
      startPos = sprite.attr('pos');
      sprite.attr('zIndex', zIndex++);
      sprite.off('mousemove', onMouseMove);
      sprite.setMouseCapture();
      sprite.on('mousemove', onMouseMove);
      evt.stopDispatch();
    }).on('mouseup', (evt) => {
      sprite.off('mousemove', onMouseMove);
      sprite.releaseMouseCapture();
    });

    return sprite;
  }

  const s1 = new Sprite();
  s1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    size: [200, 200],
    rotate: 45,
    bgcolor: '#3c7',
  });

  const s2 = new Sprite();
  s2.attr({
    anchor: [0.5, 0.5],
    pos: [270, 300],
    size: [200, 200],
    bgcolor: '#c37',
  });

  const s3 = new Sprite();
  s3.attr({
    anchor: [0.5, 0.5],
    pos: [1270, 300],
    size: [200, 200],
    bgcolor: '#73c',
  });


  layer.append(...[s1, s2, s3].map(draggable));

  layer.on('mousemove', (evt) => {
    if(evt.targetSprites.some(target => target.isDraggable)) {
      scene.container.style.cursor = 'move';
    } else {
      scene.container.style.cursor = 'default';
    }
  });
}());