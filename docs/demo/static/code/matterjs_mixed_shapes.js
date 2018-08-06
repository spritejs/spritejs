(function () {
  const {Scene, Matter} = spritejs;
  const scene = new Scene('#paper', {
    viewport: ['auto', 'auto'],
    resolution: [800, 600],
    stickMode: 'width',
  });
  const fglayer = scene.layer('fglayer');

  const {Engine, World, Render, Runner, Common, Composites, Mouse, MouseConstraint, Bodies} = Matter;

  // create engine
  const engine = Engine.create(),
    world = engine.world;

  // create renderer
  const render = Render.create({
    layer: fglayer,
    engine,
    options: {
      showAngleIndicator: true,
      background: '#fff',
      wireframes: false,
    },
  });

  Render.run(render);

  // create runner
  const runner = Runner.create();
  Runner.run(runner, engine);

  // add bodies
  const stack = Composites.stack(20, 20, 10, 5, 0, 0, (x, y) => {
    let sides = Math.round(Common.random(1, 8));

    // triangles can be a little unstable, so avoid until fixed
    sides = (sides === 3) ? 4 : sides;

    // round the edges of some bodies
    let chamfer = null;
    if(sides > 2 && Common.random() > 0.7) {
      chamfer = {
        radius: 10,
      };
    }

    const width = 64;
    switch (Math.round(Common.random(0, 1))) {
      case 0:
        if(Common.random() < 0.6) {
          return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), {chamfer});
        } if(Common.random() < 0.8) {
          return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), {chamfer});
        }

        return Bodies.rectangle(x, y, width, width, {
          chamfer,
          render: {
            sprite: {
              attrs: {
                textures: {
                  src: 'https://p5.ssl.qhimg.com/t01bd0523f7bc9241c2.png',
                  srcRect: [32, 32, 64, 64],
                },
                size: [width, width],
              },
            },
          },
        });
      case 1:
        return Bodies.polygon(x, y, sides, Common.random(25, 50), {chamfer});
      default:
        break;
    }
  });

  World.add(world, stack);

  World.add(world, [
    // walls
    Bodies.rectangle(400, 0, 800, 50, {isStatic: true}),
    Bodies.rectangle(400, 600, 800, 50, {isStatic: true}),
    Bodies.rectangle(800, 300, 50, 600, {isStatic: true}),
    Bodies.rectangle(0, 300, 50, 600, {isStatic: true}),
  ]);

  // add mouse control
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;
}());
