const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const images = [
  {id: 'girl1', src: 'https://p5.ssl.qhimg.com/t01feb7d2e05533ca2f.jpg'},
  {id: 'girl2', src: 'https://p5.ssl.qhimg.com/t01deebfb5b3ac6884e.jpg'},
];

(async function () {
  function applyFilters(texture, filters, y, scale = 1) {
    filters.forEach((filter, i) => {
      const s = new Sprite();
      s.attr({
        texture,
        pos: [100 + i * 150, y],
        scale,
        filter,
      });
      layer.append(s);
    });
  }

  await scene.preload(...images);

  applyFilters('girl1', [
    'none',
    'brightness(150%)',
    'grayscale(50%)',
    'blur(12px)',
    'drop-shadow(15, 15, 5, #033)',
    'hue-rotate(45)',
  ], 100, 0.3);

  applyFilters('girl2', [
    'none',
    'invert(100%)',
    'opacity(70%)',
    'saturate(20%)',
    'sepia(100%)',
    'hue-rotate(135)',
  ], 300, 0.6);
}());