/* globals Proton */
const {Scene, Block, ProtonRenderer} = spritejs;
const container = document.getElementById('container');

const scene = new Scene({
  container,
  width: 600,
  height: 600,
});

const layer = scene.layer('fglayer', {autoRender: false});

const proton = new Proton();
const emitter = new Proton.Emitter();

// set Rate
emitter.rate = new Proton.Rate(Proton.getSpan(10, 20), 0.1);

// add Initialize
const block = new Block({
  size: [20, 20],
  bgcolor: 'red',
});
emitter.addInitialize(new Proton.Body(block));
// emitter.addInitialize(new Proton.Radius(1, 12));
emitter.addInitialize(new Proton.Life(2, 4));
emitter.addInitialize(new Proton.Velocity(3, Proton.getSpan(0, 360), 'polar'));

// add Behaviour
emitter.addBehaviour(new Proton.Color('#0000ff', 'random'));
emitter.addBehaviour(new Proton.Scale(1, 0));
emitter.addBehaviour(new Proton.Alpha(1, 0));

// set emitter position
emitter.p.x = layer.canvas.width / 2;
emitter.p.y = layer.canvas.height / 2;
emitter.emit(5);

// add emitter to the proton
proton.addEmitter(emitter);

// add canvas renderer
const renderer = new ProtonRenderer(layer);
proton.addRenderer(renderer);

// use Euler integration calculation is more accurate (default false)
Proton.USE_CLOCK = false;
// proton.update()
function tick() {
  requestAnimationFrame(tick);
  proton.update();
}
tick();