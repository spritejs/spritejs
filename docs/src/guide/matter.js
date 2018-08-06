const {Scene, Sprite, Matter} = spritejs

/* demo: simple-demo */
;(function () {
  // module aliases
  const {Engine, World, Composites, Composite, Bodies} = Matter;

  // create an engine
  const engine = Engine.create();
  // engine.world.gravity.scale = 0; //turn off gravity (it's added back in later)

  const stackA = Composites.stack(100, 100, 6, 6, 0, 0, (x, y) => {
    return Bodies.rectangle(x, y, 15, 15, {
      // friction: 0,
      // frictionAir: 0,
      // frictionStatic: 0,
      // restitution: 1
    });
  });

  const wall = Bodies.rectangle(400, 300, 500, 20, {
    isStatic: true,
  });

  World.add(engine.world, [stackA, wall]);

  const offset = 5;
  World.add(engine.world, [
    Bodies.rectangle(400, -offset, 800 + 2 * offset, 50, {
      isStatic: true,
    }),
    Bodies.rectangle(400, 600 + offset, 800 + 2 * offset, 50, {
      isStatic: true,
    }),
    Bodies.rectangle(800 + offset, 300, 50, 600 + 2 * offset, {
      isStatic: true,
    }),
    Bodies.rectangle(-offset, 300, 50, 600 + 2 * offset, {
      isStatic: true,
    }),
  ]);

  const scene = new Scene('#simple-demo', {viewport: ['auto', 'auto'], resolution: [800, 600]});
  const fglayer = scene.layer('fglayer');

  const blocks = [];

  function render() {
    Engine.update(engine, 16);
    const bodies = Composite.allBodies(engine.world);
    // console.log(bodies)
    for(let i = 0; i < bodies.length; i++) {
      const body = bodies[i],
        {position, angle} = body;
      const pos = [
          Math.round(position.x * 10) / 10,
          Math.round(position.y * 10) / 10,
        ],
        rotate = Math.round(180 * angle * 10 / Math.PI) / 10;

      let block = blocks[i];
      if(!block) {
        const {min, max} = body.bounds;
        block = new Sprite();
        block.attr({
          anchor: 0.5,
          size: [max.x - min.x, max.y - min.y],
          pos,
          rotate,
          bgcolor: body.render.fillStyle,
        });
        blocks[i] = block;
        fglayer.append(block);
      } else {
        block.attr({
          pos,
          rotate,
        });
      }
    }
    window.requestAnimationFrame(render);
  }

  render();
}())

/* demo: render-demo */
;(function () {
  const scene = new Scene('#render-demo', {viewport: ['auto', 'auto'], resolution: [800, 600]});
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
