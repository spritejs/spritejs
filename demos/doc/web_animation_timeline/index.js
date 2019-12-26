const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  await scene.preload({id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'});

  const [speed1, speed2, speed4, halfSpeed, pause, reversePlay]
    = document.querySelectorAll('#speed1, #speed2, #speed4, #halfSpeed, #pause, #reversePlay');

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
    timeline.playbackRate = -1.0;
  });


  function addRandomSnow() {
    const snow = new Sprite('snow');
    const x0 = 20 + Math.random() * 1100,
      y0 = -100;

    snow.attr({
      anchor: [0.5, 0.5],
      pos: [x0, y0],
      size: [50, 50],
    });

    snow.animate([
      {x: x0 - 10},
      {x: x0 + 10},
    ], {
      duration: 1000,
      fill: 'forwards',
      direction: 'alternate',
      iterations: Infinity,
      easing: 'ease-in-out',
    });

    const dropAnim = snow.animate([
      {y: -100, rotate: 0},
      {y: 700, rotate: 360},
    ], {
      duration: 10000,
      fill: 'forwards',
    });

    dropAnim.finished.then(() => {
      snow.remove();
    });

    layer.append(snow);
  }

  setInterval(addRandomSnow, 200);
}());