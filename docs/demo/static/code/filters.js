(async function () {
  const paper = new spritejs.Scene('#paper', {
      resolution: [1600, 1200],
      stickMode: 'width',
      stickExtend: true,
    }),
    Sprite = spritejs.Sprite,
    Label = spritejs.Label;

  const layer = paper.layer();
  layer.canvas.style.backgroundColor = '#f4f2e6';

  await paper.preload([
    'https://p3.ssl.qhimg.com/t010ded517024020e10.png',
    'https://s1.ssl.qhres.com/static/6ead70a354da7aa4.json',
  ]);

  const generateSpriteWithFilter = (filterMethod, filterParam, labelText, pos) => {
    const guanguan = new Sprite();
    guanguan.attr({
      size: [270, 340],
      textures: [{
        src: 'guanguan1s.png',
        rect: [50, 40, 180, 220],
      }],
      filter: {
        [filterMethod]: filterParam,
      },
      anchor: 0.5,
      pos,
    });
    layer.append(guanguan);

    const label = new Label(labelText);
    label.attr({
      font: 'bold 30px "Arial"',
      fillColor: '#474534',
      anchor: 0.5,
      pos: [pos[0], pos[1] + 120],
    });
    layer.append(label);
  };

  // same filter as in css3
  generateSpriteWithFilter('dropShadow', [2, 2, 10, '#FF6040'], 'dropShadow', [200, 500]);
  generateSpriteWithFilter('blur', '4px', 'blur', [500, 500]);
  generateSpriteWithFilter('brightness', 0.5, 'brightness', [800, 500]);
  generateSpriteWithFilter('contrast', '200%', 'contrast', [1100, 500]);
  generateSpriteWithFilter('grayscale', '100%', 'grayscale', [1400, 500]);
  generateSpriteWithFilter('hueRotate', '90deg', 'hueRotate', [200, 840]);
  generateSpriteWithFilter('invert', '75%', 'brightness', [500, 840]);
  generateSpriteWithFilter('opacity', '0.25', 'opacity', [800, 840]);
  generateSpriteWithFilter('saturate', '30%', 'saturate', [1100, 840]);
  generateSpriteWithFilter('sepia', '100%', 'sepia', [1400, 840]);
}());
