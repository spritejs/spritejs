/* globals Proton */
(async function () {
  const {Scene, Sprite, ProtonRenderer} = spritejs;
  const container = document.getElementById('container');

  const scene = new Scene({
    container,
    width: 800,
    height: 800,
    autoRender: false,
    handleEvent: false,
    preserveDrawingBuffer: true,
  });

  const layer = scene.layer();

  function loadImage(src) {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    const promise = new Promise((resolve) => {
      image.onload = function (e) {
        resolve(e.target);
      };
    });

    image.src = src;
    return promise;
  }
  const image = await loadImage('https://p0.ssl.qhimg.com/t018109a4ae06d3e4d0.png');

  const sprite = new Sprite({
    texture: image,
  });

  const gl = layer.renderer.glRenderer.gl;
  gl.blendFunc(gl.ONE, gl.ONE);

  function createProton() {
    const proton = new Proton();
    const emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(new Proton.Span(5, 13), 0.1);

    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Body(sprite));
    emitter.addInitialize(new Proton.P(new Proton.CircleZone(300, 500, 10)));
    emitter.addInitialize(new Proton.Life(5, 7));
    emitter.addInitialize(new Proton.V(new Proton.Span(2, 3), new Proton.Span(0, 30, true), 'polar'));

    emitter.addBehaviour(new Proton.Scale(1, 0.2));
    emitter.addBehaviour(new Proton.Alpha(1, 0.2));

    // emitter.addBehaviour(new Proton.Color('#ff0000'))

    emitter.emit();
    proton.addEmitter(emitter);

    const renderer = new ProtonRenderer(layer);
    proton.addRenderer(renderer);
    return proton;
  }

  const proton = createProton();

  function tick() {
    requestAnimationFrame(tick);
    proton.update();
  }
  tick();
  window.layer = layer;
}());