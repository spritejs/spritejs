/* globals Proton */
const {Scene, Block, ProtonRenderer} = spritejs;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  autoRender: false,
  handleEvent: false,
  preserveDrawingBuffer: true,
});

const layer = scene.layer();

const mask = new Block();
mask.setResolution(layer.getResolution());
mask.attributes.width = layer.width;
mask.attributes.height = layer.height;
mask.attributes.bgcolor = 'rgba(0, 0, 0, 0.03)';


function createRender() {
  const renderer = new ProtonRenderer(layer);
  renderer.onProtonUpdate = function () {
    // context.fillStyle = "rgba(0, 0, 0, 0.03)";
    // context.fillRect(0, 0, canvas.width, canvas.height);
    layer.renderer.drawMeshes(mask.draw());
    layer.render({clear: false});
  };
  return renderer;
}

function createProton() {
  let _over = false,
    _currentBehaviour;

  const proton = new Proton();
  const emitter = new Proton.Emitter();
  emitter.rate = new Proton.Rate(1, 0.3);
  emitter.addInitialize(new Proton.Mass(1));
  emitter.addInitialize(new Proton.Radius(3));
  emitter.addBehaviour(new Proton.Alpha(1, 0));
  let hcolor = 0;
  const color = Color.parse(`hsl(${hcolor}, 100%, 50%)`).hexTriplet(); // eslint-disable-line no-undef
  const colorBehaviour = new Proton.Color(color);
  emitter.addBehaviour(colorBehaviour);

  function changeBehaviour(be) {
    if(_over) {
      emitter.removeAllParticles();
      emitter.removeBehaviour(_currentBehaviour);
      emitter.addBehaviour(be);
      _currentBehaviour = be;
      _over = false;
    }
  }
  let rouletteBehaviour; // eslint-disable-line prefer-const
  const circleBehaviour = {
    dead: false,
    initialize(particle) {
      particle.theta = 0;
    },
    applyBehaviour(particle) {
      if(!this.dead) {
        particle.theta += Math.PI / 200;
        const b = 100;
        const a = 62.5;
        particle.p.x = emitter.p.x + (a + b) * Math.cos(particle.theta) - b * Math.cos((a / b + 1) * particle.theta);
        particle.p.y = emitter.p.y + (a + b) * Math.sin(particle.theta) - b * Math.sin((a / b + 1) * particle.theta);
        if(particle.theta > Math.PI * 16 * 3) {
          particle.dead = true;
          _over = true;
          changeBehaviour(rouletteBehaviour);
        }
      }
    },
  };
  rouletteBehaviour = {
    dead: false,
    initialize(particle) {
      particle.theta = 0;
    },
    applyBehaviour(particle) {
      if(!this.dead) {
        particle.theta += Math.PI / 150;
        const a = 280;
        const b = 392;
        const c = 124;
        particle.p.x = emitter.p.x + (a - b) * Math.cos(particle.theta) + c * Math.cos((a / b - 1) * particle.theta);
        particle.p.y = emitter.p.y + (a - b) * Math.sin(particle.theta) - c * Math.sin((a / b - 1) * particle.theta);
        if(particle.theta > Math.PI * 14 * 2) {
          particle.dead = true;
          _over = true;
          changeBehaviour(circleBehaviour);
        }
      }
    },
  };

  emitter.addBehaviour(circleBehaviour);
  _currentBehaviour = circleBehaviour;
  emitter.p.x = layer.canvas.width / 2;
  emitter.p.y = layer.canvas.height / 2;
  emitter.emit();
  proton.addEmitter(emitter);
  setInterval(() => {
    hcolor++;
    const color = Color.parse(`hsl(${hcolor % 360}, 100%, 50%)`).hexTriplet(); // eslint-disable-line no-undef
    colorBehaviour.reset(color);
  }, 100);
  proton.addRenderer(createRender());
  proton.addEmitter(addDot());

  return proton;
}

function addDot() {
  const emitter = new Proton.Emitter();
  emitter.rate = new Proton.Rate(new Proton.Span(2, 4), new Proton.Span(0.05, 0.2));
  emitter.addInitialize(new Proton.Mass(1));
  emitter.addInitialize(new Proton.Radius(10, 30));
  emitter.addInitialize(new Proton.Life(2, 4));
  emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, layer.canvas.width, layer.canvas.height)));
  emitter.addBehaviour(new Proton.Alpha(0, 0.4, Infinity, Proton.easeOutCubic));
  emitter.addBehaviour(new Proton.Scale(1, 0, Infinity, Proton.easeOutCubic));
  emitter.addBehaviour(new Proton.Color('random'));
  emitter.emit();
  return emitter;
}

const proton = createProton();
function tick() {
  requestAnimationFrame(tick);
  proton.update();
}
tick(proton);