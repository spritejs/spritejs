const {Scene, Sprite, ProtonRenderer} = spritejs

/* demo: particle */
;(function () {
  const scene = new Scene('#particle', {
    viewport: 'auto',
    resolution: 'flex',
  });
  scene.container.style.background = '#16a085';

  const layer = scene.layer('bglayer', {
    handleEvent: true,
    autoRender: false,
  });

  const fglayer = scene.layer('fglayer', {
    handleEvent: false,
  });

  const logo = new Sprite('https://p0.ssl.qhimg.com/t01a72262146b87165f.png');
  scene.on('resolutionChange', _.debounce((evt) => {
    logo.attr({
      pos: layer.center,
    });
    main();
  }, 300));
  logo.attr({
    anchor: 0.5,
    pos: layer.center,
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
    layer.clear();
    layer.off(['mousedown', 'mouseup', 'mousemove']);
    const num = Math.min(parseInt(0.5 * layer.resolution[0] / (1000 / 145), 10), 300);
    createProton(proton, num);
    setTimeout(addMouseEvent, 200);
    addRenderer();
  }

  function createProton(proton, num) {
    proton.destroy();
    emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(new Proton.Span(num), new Proton.Span(0.1, 0.4));

    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(1, 5));
    emitter.addInitialize(new Proton.Life(Infinity));

    const [width, height] = layer.resolution;
    pointZone = new Proton.Position(new Proton.RectZone(0, 0, width, height));

    emitter.addInitialize(pointZone);
    emitter.addInitialize(new Proton.Velocity(new Proton.Span(1.2, 2.0), new Proton.Span(0, 360), 'polar'));

    emitter.addBehaviour(new Proton.Alpha(Proton.getSpan(0.2, 0.9)));
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
      const context = layer.context;
      context.save();
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
            context.moveTo(pA.p.x, pA.p.y);
            context.lineTo(pB.p.x, pB.p.y);
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

    layer.on('mousedown', (e) => {
      for(let i = 0; i < 3; i++) {
        emitter.particles[i].dead = true;
      }

      setTimeout(() => {
        emitter.p.x = e.x;
        emitter.p.y = e.y;
        emitter.emit('once');
      }, 60);
    });

    layer.on('mouseup', (e) => {
      emitter.stop();
    });

    layer.on('mousemove', (e) => {
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
  }
}());