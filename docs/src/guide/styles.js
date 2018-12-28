const {Scene, Sprite} = spritejs;

/* demo: css-basic */
(function () {
  const scene = new Scene('#css-basic', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600],
    useDocumentCSS: true,
  });
  const layer = scene.layer();

  const s1 = new Sprite({
    class: 'red circle',
  });

  const s2 = new Sprite({
    class: 'blue circle',
  });

  layer.append(s1, s2);
}());

/* demo: css-transition */
(function () {
  const scene = new Scene('#css-transition', {
    viewport: ['auto', 'auto'],
    resolution: [1540, 600],
    useDocumentCSS: true,
  });
  const layer = scene.layer();

  const s1 = new Sprite({
    class: 'red circle',
  });

  const s2 = new Sprite({
    class: 'blue circle',
  });

  layer.append(s1, s2);

  s1.on('mouseenter', () => {
    s1.attr('class', 'orange circle');
  });
  s1.on('mouseleave', () => {
    s1.attr('class', 'red circle');
  });
  window.s1 = s1;
  s2.on('mouseenter', () => {
    s2.attr('class', 'cyan circle');
  });
  s2.on('mouseleave', () => {
    s2.attr('class', 'blue circle');
  });
}());
