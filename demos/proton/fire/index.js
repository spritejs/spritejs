const {Scene, ProtonRenderer} = spritejs;
const scene = new Scene('#paper', {
  viewport: ['auto', 'auto'],
  resolution: [800, 600],
  stickMode: 'width',
  stickExtend: true,
});
const layer = scene.layer('fglayer');
scene.container.style.backgroundColor = '#000';

layer.on('resolutionChange', (evt) => {
  layer.context.globalCompositeOperation = 'screen';
});

function loadImage() {
  const image = new Image();
  image.onload = function (e) {
    createProton(e.target);
    tick();
  };
  image.src = 'https://p0.ssl.qhimg.com/t018109a4ae06d3e4d0.png';
}

let proton;
function createProton(image) {
  proton = new Proton();
  const emitter = new Proton.Emitter();
  emitter.rate = new Proton.Rate(new Proton.Span(5, 13), 0.1);

  emitter.addInitialize(new Proton.Mass(1));
  emitter.addInitialize(new Proton.Body(image));
  emitter.addInitialize(new Proton.P(new Proton.CircleZone(400, 500, 10)));
  emitter.addInitialize(new Proton.Life(5, 7));
  emitter.addInitialize(new Proton.V(new Proton.Span(2, 3), new Proton.Span(0, 30, true), 'polar'));

  emitter.addBehaviour(new Proton.Scale(1, 0.2));
  emitter.addBehaviour(new Proton.Alpha(1, 0.2));
  emitter.emit();
  proton.addEmitter(emitter);

  layer.context.globalCompositeOperation = 'screen';
  const renderer = new ProtonRenderer(layer);
  // const renderer = new Proton.CanvasRenderer(layer.canvas)
  proton.addRenderer(renderer);
}

function tick() {
  requestAnimationFrame(tick);
  proton.update();
}

loadImage();