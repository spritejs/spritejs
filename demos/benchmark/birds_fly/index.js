const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json';
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';
const container = document.getElementById('paper');
const spriteCount = document.getElementById('spriteCount');
const drawCalls = document.getElementById('drawCalls');

/* globals Animator */
const paper = new spritejs.Scene({
  container,
  width: 800,
  height: 800,
});

(async function () {
  class Bird extends spritejs.Sprite {
    constructor() {
      super('bird1.png');
    }
  }

  await paper.preload([birdsRes, birdsJsonUrl]);

  const bglayer = paper.layer('bg'), // 背景层
    // 前景层
    // 不代理事件，提升性能
    fglayer = paper.layer('fg', {
      handleEvent: false,
    });

  const axisZero = [400, 400];
  const circle = new spritejs.Sprite();

  circle.attr({
    anchor: [0.5, 0.5],
    size: [800, 800],
    pos: axisZero,
    bgcolor: '#139',
    opacity: 0.5,
    borderRadius: 400,
  });

  bglayer.appendChild(circle);

  function pointAdd(p1, p2 = [0, 0]) {
    return [p1[0] + p2[0], p1[1] + p2[1]].map(Math.round);
  }

  function pointSub(p1, p2 = [0, 0]) {
    return [p1[0] - p2[0], p1[1] - p2[1]].map(Math.round);
  }

  function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  async function randomAnimate(bird) {
    const birdPoint = bird.attr('pos');
    const randomArc = Math.random() * 2 * Math.PI;
    const randomPoint = pointAdd([350 * Math.cos(randomArc),
      350 * Math.sin(randomArc)], axisZero);

    const dist = pointSub(randomPoint, birdPoint);
    const distance = Math.round(Math.sqrt(dist[0] * dist[0] + dist[1] * dist[1]));
    const flip = dist[0] < 0 ? -1 : 1;
    const duration = 5 * distance + 100;

    bird.attr('scale', [flip, 1]); // scale 放在外面，触发缓存

    const anim = new Animator(duration, (p) => {
      const pos = pointAdd(birdPoint, [p * dist[0], p * dist[1]]);
      bird.attr({pos});
    });
    await anim.animate();

    // const anim = bird.animate([
    //   {pos: birdPoint},
    //   {pos: pointAdd(birdPoint, dist)}
    // ], {
    //   duration,
    //   fill: "forwards",
    // })
    // await anim.finished

    // await sleep(500);
  }

  let birdCount = 0;
  async function addBird() {
    spriteCount.innerHTML = ++birdCount;
    const bird = new Bird();

    bird.attr({
      anchor: [0.5, 0.5],
      pos: axisZero,
      size: [86, 60],
      // bgcolor: 'red',
    });
    window.bird = bird;

    fglayer.appendChild(bird);

    let idx = 0;
    setInterval(() => {
      // bird.forceUpdate();
      bird.attributes.texture = `bird${++idx % 3 + 1}.png`;
    }, 100);

    randomAnimate(bird);
    // noprotect
    do {
      await randomAnimate(bird); // eslint-disable-line no-await-in-loop
    } while(1);
  }

  addBird();

  circle.addEventListener('click', (evt) => {
    addBird();
  });

  requestAnimationFrame(function f() {
    if(birdCount < 500) {
      addBird();
      requestAnimationFrame(f);
    }
  });

  setInterval(() => {
    // console.log('tick');
    drawCalls.innerHTML = fglayer.renderer._drawCalls;
  }, 100);
}());