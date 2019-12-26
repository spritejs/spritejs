const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const s1 = new Sprite({
  pos: [600, 300],
  size: [200, 200],
  anchor: 0.5,
  bgcolor: 'red',
});
const s2 = new Sprite({
  pos: [600, 300],
  size: [200, 200],
  anchor: 0.5,
  bgcolor: 'blue',
  rotate: 45,
});

s2.addEventListener('beforerender', ({detail}) => {
  const gl = detail.context;
  gl.blendFuncSeparate(gl.ONE, gl.ZERO, gl.ZERO, gl.ONE);
});

s2.addEventListener('afterrender', ({detail}) => {
  const gl = detail.context;
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
});

layer.append(s1, s2);