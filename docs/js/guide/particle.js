'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    ProtonRenderer = _spritejs.ProtonRenderer;
(function () {
  var scene = new Scene('#particle', {
    viewport: 'auto',
    resolution: 'flex'
  });
  scene.container.style.background = '#16a085';

  var layer = scene.layer('bglayer', {
    handleEvent: true,
    autoRender: false
  });

  var fglayer = scene.layer('fglayer', {
    handleEvent: false
  });

  var logo = new Sprite('https://p0.ssl.qhimg.com/t01a72262146b87165f.png');
  scene.on('resolutionChange', _.debounce(function (evt) {
    logo.attr({
      pos: layer.center
    });
    main();
  }, 300));
  logo.attr({
    anchor: 0.5,
    pos: layer.center,
    scale: 0.5
  });
  fglayer.append(logo);

  var proton = new Proton();
  var R = 280;
  var pointZone = void 0,
      emitter = void 0;

  main();
  tick();

  function main() {
    layer.clear();
    layer.off(['mousedown', 'mouseup', 'mousemove']);
    var num = Math.min(parseInt(0.5 * layer.resolution[0] / (1000 / 145), 10), 300);
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

    var _layer$resolution = _slicedToArray(layer.resolution, 2),
        width = _layer$resolution[0],
        height = _layer$resolution[1];

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
    var renderer = new ProtonRenderer(layer);
    renderer.onProtonUpdateAfter = function () {
      var context = layer.context;
      context.save();
      var particles = this.parent.emitters[0].particles;

      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var pA = particles[i];
          var pB = particles[j];
          var dis = pA.p.distanceTo(pB.p);

          if (dis < R) {
            var alpha = (1 - dis / R) * 0.5;
            context.strokeStyle = 'rgba(255,255,255,' + alpha + ')';
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

    layer.on('mousedown', function (e) {
      for (var i = 0; i < 3; i++) {
        emitter.particles[i].dead = true;
      }

      setTimeout(function () {
        emitter.p.x = e.x;
        emitter.p.y = e.y;
        emitter.emit('once');
      }, 60);
    });

    layer.on('mouseup', function (e) {
      emitter.stop();
    });

    layer.on('mousemove', function (e) {
      var p0 = emitter.particles[0];
      p0.radius = 0;

      var ease = 0.3;

      p0.p.x += (e.x - p0.p.x) * ease;
      p0.p.y += (e.y - p0.p.y) * ease;
    });
  }

  function tick() {
    requestAnimationFrame(tick);
    proton.update();
  }
})();