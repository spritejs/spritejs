const {Scene, ProtonRenderer} = spritejs;
const scene = new Scene('#paper', {
  viewport: ['auto', 'auto'],
  resolution: [800, 600],
  stickMode: 'width',
});
const fglayer = scene.layer('fglayer', {
  autoRender: false,
});
scene.container.style.backgroundColor = '#000';

function createRender() {
  fglayer.clearContext = function (context) {
    const [width, height, offsetLeft, offsetTop] = this.resolution;
    context.fillStyle = 'rgba(0, 0, 0, 0.09)';
    context.fillRect(offsetLeft, offsetTop, width, height);
  };
  const renderer = new ProtonRenderer(fglayer);
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
  emitter.p.x = scene.resolution[0] / 2;
  emitter.p.y = scene.resolution[1] / 2;
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
  emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, ...scene.resolution)));
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
