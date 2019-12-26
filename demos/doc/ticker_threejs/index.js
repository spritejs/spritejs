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