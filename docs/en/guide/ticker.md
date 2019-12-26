## External ticker

SpriteJS<sup>Next</sup> has its own content update mechanism. As long as the attributes of the element changes, the layer will put the element in the list waiting to be refreshed and refresh in the next rendering cycle.

However, spritejs can be updated using an external ticker. This makes it easy to work with many third-party libraries.

You can manually call the 'render' method of the layer. At the same time, you must specify the option `{autorender: false}` when creating the layer.

The following example gives a layer's canvas to ThreeJS:

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const spriteScene = new Scene({
  container,
  width: 600,
  height: 600,
  autoRender: false,
  // contextType: '2d',
});
const bglayer = spriteScene.layer('bglayer');
const fglayer = spriteScene.layer('fglayer');

const imgUrl = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png';
const sprite = new Sprite({
  texture: imgUrl,
  pos: [300, 300],
  anchor: 0.5,
});
bglayer.append(sprite);

/* globals THREE */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: fglayer.canvas,
});

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function update() {
  bglayer.render();
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}
update();
```

<iframe src="/demo/#/doc/ticker_threejs" height="450"></iframe>

The following example gives a layer's canvas to ClayGL:

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const spriteScene = new Scene({
  container,
  width: 600,
  height: 600,
  autoRender: false,
  // contextType: '2d',
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
```

<iframe src="/demo/#/doc/ticker_claygl" height="450"></iframe>