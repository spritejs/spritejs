const {Scene, Label, Resource} = spritejs

/* demo: bgimage */
;(async function () {
  const scene = new Scene('#bgimage', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();
  await Resource.loadTexture({id: '9scale', src: 'https://p2.ssl.qhimg.com/t01c18f4e677c09a87e.jpg'});

  const s = new Label('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试');
  s.attr({
    textAlign: 'center',
    font: '34px "宋体"',
    anchor: 0.5,
    border: [6, 'black'],
    pos: [770, 300],
    size: [250, 300],
    bgcolor: 'blue',
    lineBreak: 'normal',
    bgimage: {
      id: '9scale',
      display: '.9',
      clip9: 60,
      // offset: [0, 50],
    },
    padding: 60,
  });
  layer.append(s);

  s.animate([
    {width: 250},
    {width: 500},
  ], {
    duration: 5000,
    iterations: Infinity,
    direction: 'alternate',
  });
}());
