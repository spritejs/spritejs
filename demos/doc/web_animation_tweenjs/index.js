const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

const sprite = new Sprite();
sprite.attr({
  anchor: [0.5, 0.5],
  pos: [600, 300],
  bgcolor: 'rgb(128, 0, 255)',
  size: [100, 100],
});
layer.append(sprite);

const coords = {rotate: 0};

/* globals TWEEN */
new TWEEN.Tween(coords)
  .to({rotate: 360}, 5000)
  .easing(TWEEN.Easing.Quadratic.Out)
  .onUpdate(() => {
    const rotate = coords.rotate,
      radian = Math.PI * rotate / 180,
      red = 128 + Math.round(127 * Math.sin(radian)),
      green = Math.round(rotate) % 128,
      blue = 128 + Math.round(127 * Math.cos(radian));

    const bgcolor = `rgb(${red}, ${green}, ${blue})`;
    sprite.attr({rotate, bgcolor});
  })
  .repeat(Infinity)
  .start();

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update(layer.timeline.currentTime);
}
requestAnimationFrame(animate);

const [speed1, speed2, speed4, halfSpeed, pause, reversePlay]
  = document.querySelectorAll('#tweenjs-speed1, #tweenjs-speed2, #tweenjs-speed4, #tweenjs-halfSpeed, #tweenjs-pause, #tweenjs-reversePlay');

const timeline = layer.timeline;

speed1.addEventListener('click', (evt) => {
  timeline.playbackRate = 1.0;
});

speed2.addEventListener('click', (evt) => {
  timeline.playbackRate = 2.0;
});

speed4.addEventListener('click', (evt) => {
  timeline.playbackRate = 4.0;
});

halfSpeed.addEventListener('click', (evt) => {
  timeline.playbackRate = 0.5;
});

pause.addEventListener('click', (evt) => {
  timeline.playbackRate = 0;
});

reversePlay.addEventListener('click', (evt) => {
  timeline.playbackRate = -1;
});