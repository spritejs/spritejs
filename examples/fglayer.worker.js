importScripts('/js/spritejs.worker.js');

const textureURL = 'https://p4.ssl.qhimg.com/t012170360e1552ce17.png';

spritejs.layerCreated.then((layer) => {
  const {Sprite} = spritejs;

  const s = new Sprite();
  s.attr({
    size: [50, 50],
    pos: [100, 100],
    bgcolor: 'red',
    texture: textureURL,
  });

  layer.append(s);

  s.addEventListener('click', (evt) => {
    console.log(evt);
  });
});