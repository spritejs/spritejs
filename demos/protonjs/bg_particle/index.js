/* globals Proton,_ */
const {Scene, Sprite, Arc, ProtonRenderer} = spritejs;
const container = document.getElementById('page');

const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer('bglayer', {
  handleEvent: true,
  autoRender: false,
});

const fglayer = scene.layer('fglayer', {
  handleEvent: false,
  autoRender: false,
  contextType: '2d',
});

scene.addEventListener('resize', _.debounce((evt) => {
  main();
}, 300));

const logo = new Sprite('https://p0.ssl.qhimg.com/t01a72262146b87165f.png');
logo.attr({
  pos: [10, 10],
  scale: 0.5,
});
fglayer.append(logo);


const proton = new Proton();
const R = 280;
let pointZone,
  emitter;

main();
tick();

function main() {
  layer.removeAllChildren();
  layer.removeAllListeners('mousedown');
  layer.removeAllListeners('mouseup');
  layer.removeAllListeners('mousemove');
  const {width} = layer;
  const num = Math.min(parseInt(0.5 * width / (1000 / 145), 10), 300);
  createProton(proton, num);
  setTimeout(addMouseEvent, 200);
  addRenderer();
}

function createProton(proton, num) {
  proton.destroy();
  emitter = new Proton.Emitter();
  emitter.rate = new Proton.Rate(new Proton.Span(num), new Proton.Span(0.1, 0.4));

  emitter.addInitialize(new Proton.Mass(1));
  // emitter.addInitialize(new Proton.Radius(3, 7));
  const circle = new Arc({radius: 5});
  emitter.addInitialize(new Proton.Body(circle));
  emitter.addInitialize(new Proton.Life(Infinity));

  const {width, height} = layer;
  pointZone = new Proton.Position(new Proton.RectZone(0, 0, width, height));

  emitter.addInitialize(pointZone);
  emitter.addInitialize(new Proton.Velocity(new Proton.Span(1.2, 2.0), new Proton.Span(0, 360), 'polar'));

  emitter.addBehaviour(new Proton.Alpha(Proton.getSpan(0.2, 0.9)));
  emitter.addBehaviour(new Proton.Scale(Proton.getSpan(0.2, 1.0)));
  emitter.addBehaviour(new Proton.Color('#ffffff'));
  emitter.addBehaviour(new Proton.CrossZone(new Proton.RectZone(0, 0, width, height), 'cross'));

  emitter.emit('once');
  emitter.damping = 0;
  proton.addEmitter(emitter);

  return proton;
}

function addRenderer() {
  const renderer = new ProtonRenderer(layer);
  renderer.onProtonUpdateAfter = function () {
    fglayer.render();
    const context = fglayer.renderer.canvasRenderer.context;
    context.save();
    // context.scale(fglayer.displayRatio, fglayer.displayRatio);
    const particles = this.parent.emitters[0].particles;

    for(let i = 0; i < particles.length; i++) {
      for(let j = i + 1; j < particles.length; j++) {
        const pA = particles[i];
        const pB = particles[j];
        const dis = pA.p.distanceTo(pB.p);

        if(dis < R) {
          const alpha = (1 - dis / R) * 0.5;
          context.strokeStyle = `rgba(255,255,255,${alpha})`;
          context.beginPath();
          context.lineWidth = 2;
          context.moveTo(pA.p.x * 2, pA.p.y * 2);
          context.lineTo(pB.p.x * 2, pB.p.y * 2);
          context.closePath();
          context.stroke();
        }
      }
    }
    context.restore();
  };

  proton.addRenderer(renderer);
}

function addMouseEvent() {
  emitter.rate = new Proton.Rate(new Proton.Span(3), 0.5);
  emitter.removeInitialize(pointZone);

  layer.addEventListener('mousedown', (e) => {
    for(let i = 0; i < 3; i++) {
      emitter.particles[i].dead = true;
    }

    setTimeout(() => {
      emitter.p.x = e.x;
      emitter.p.y = e.y;
      emitter.emit('once');
    }, 60);
  });

  layer.addEventListener('mouseup', (e) => {
    emitter.stop();
  });

  layer.addEventListener('mousemove', (e) => {
    const p0 = emitter.particles[0];
    p0.radius = 0;

    const ease = 0.3;

    p0.p.x += (e.x - p0.p.x) * ease;
    p0.p.y += (e.y - p0.p.y) * ease;
  });
}

function tick() {
  requestAnimationFrame(tick);
  proton.update();
  proton.stats.update(3);
}