const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 600,
  height: 600,
});
const layer = scene.layer();

for(let i = 0; i < 8; i++) {
  for(let j = 0; j < 8; j++) {
    const brick = new Sprite();
    const bgcolor = (i + j) % 2 ? 'black' : 'white';
    brick.attr({
      size: [100, 100],
      pos: [i * 100 - 50, j * 100 - 50],
      bgcolor,
    });

    layer.append(brick);
  }
}

/* globals dat */
const gui = new dat.GUI();
const config = {
  mode: 'scale',
};
gui.add(config, 'mode', ['scale', 'stickyHeight', 'stickyRight', 'stickyLeft']).onChange((val) => {
  scene.options.mode = val;
  scene.resize();
});