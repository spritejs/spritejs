## 外部时钟

SpriteJS <sup>Next</sup> 有自己的内容更新机制，只要layer中的元素的属性有变化，layer就会将该元素放到等待刷新的列表中，在下一个渲染周期内刷新。

不过，SpriteJS可以使用外部时钟进行更新。这使得它对很多第三方库非常友好。

SpriteJS要指定layer使用外部时钟，可以手动调用layer的`render`方法，同时要屏蔽掉layer自己的更新机制，可以在创建layer的时候指定选项`{autoRender:false}`。

比如下面的例子将一个layer的canvas给ThreeJS：

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

再比如下面的例子将一个layer的canvas给ClayGL：

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