const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

(async function () {
  const timeline = layer.timeline;

  const playbackRate = document.getElementById('playbackRate');
  const speedUp = document.getElementById('speedUp');
  const slowDown = document.getElementById('slowDown');
  const pause = document.getElementById('pause');
  const resume = document.getElementById('resume');

  function updateSpeed() {
    playbackRate.innerHTML = `playbackRate: ${timeline.playbackRate.toFixed(1)}`;
  }
  speedUp.addEventListener('click', () => {
    timeline.playbackRate += 0.5;
    updateSpeed();
  });
  slowDown.addEventListener('click', () => {
    timeline.playbackRate -= 0.5;
    updateSpeed();
  });
  pause.addEventListener('click', () => {
    timeline.playbackRate = 0;
    updateSpeed();
  });
  resume.addEventListener('click', () => {
    timeline.playbackRate = 1.0;
    updateSpeed();
  });

  await scene.preload([birdsRes, birdsJsonUrl]);

  for(let i = 0; i < 10; i++) {
    if(i !== 5 && i !== 9) {
      const bird = new Sprite('bird1.png');
      bird.attr({
        anchor: [0.5, 0.5],
        pos: [-50, 100 + (i % 5) * 80],
        scale: 0.6,
      });
      layer.append(bird);

      bird.animate([
        {texture: 'bird1.png'},
        {texture: 'bird2.png'},
        {texture: 'bird3.png'},
        {texture: 'bird1.png'},
      ], {
        duration: 500,
        iterations: Infinity,
        easing: 'step-end',
      });

      const delay = i < 5 ? Math.abs(2 - i) * 300 : (4 - Math.abs(7 - i)) * 300;
      bird.animate([
        {x: -50},
        {x: 1100},
        {x: -50},
      ], {
        delay,
        duration: 6000,
        // direction: 'alternate',
        iterations: Infinity,
      });

      bird.animate([
        {scale: [0.6, 0.6]},
        {scale: [-0.6, 0.6]},
        {scale: [0.6, 0.6]},
      ], {
        delay,
        duration: 6000,
        iterations: Infinity,
        easing: 'step-end',
      });
    }
  }
}());