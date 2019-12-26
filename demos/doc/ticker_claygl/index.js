const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const spriteScene = new Scene({
  container,
  width: 600,
  height: 600,
  autoRender: false,
  contextType: 'webgl',
});
const bglayer = spriteScene.layer('bglayer');
const fglayer = spriteScene.layer('fglayer', {
  handleEvent: false,
});

const imgUrl = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png';
const sprite = new Sprite({
  texture: imgUrl,
  pos: [300, 300],
  anchor: 0.5,
});
bglayer.append(sprite);

/* globals clay */
const app = clay.application.create(fglayer.canvas, {

  // Enable event. Or the mouseover, mouseout events will not be triggered.
  event: true,

  init(app) {
    // Create camera
    this._camera = app.createCamera([0, 0.5, 7], [0, 0, 0]);

    function makeRandomColor() {
      return [Math.random(), Math.random(), Math.random()];
    }
    function createCube() {
      const randomColor = makeRandomColor();
      const cube = app.createCube({
        color: randomColor,
      });
      cube.on('mouseover', () => {
        cube.material.set('color', [1, 0, 0]);
      }, this).on('mouseout', () => {
        cube.material.set('color', randomColor);
      }, this);
      return cube;
    }

    this._cubes = [];
    // Create cube
    for(let i = 0; i < 3; i++) {
      for(let k = 0; k < 3; k++) {
        const cube = createCube();
        cube.scale.set(0.5, 0.5, 0.5);
        cube.position.set((i - 1) * 2, (k - 1) * 2, 0);
        this._cubes.push(cube);
      }
    }

    // Create light
    this._mainLight = app.createDirectionalLight([-1, -1, -1]);
    app.createAmbientLight('#fff', 0.3);
  },

  loop(app) {
    this._cubes.forEach((cube) => {
      bglayer.render();
      cube.rotation.rotateY(app.frameTime / 1000);
    });
  },
});