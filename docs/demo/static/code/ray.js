const animatorjs = 'https://s2.ssl.qhres.com/!87edaa34/animator-0.3.1.min.js';

function loadScript(url) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.body.appendChild(script);

  return new Promise((resolve) => {
    script.onload = () => {
      resolve();
    };
  });
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async function () {
  await loadScript(animatorjs);

  const paper = new spritejs.Scene('#paper', {
      resolution: [1600, 1200],
      stickMode: 'width',
    }),
    Path = spritejs.Path;

  async function ray() {
    const s = new Path();

    const pos = [200 + 1200 * Math.random(), 200 + 800 * Math.random()];
    const rotate = 360 * Math.random();
    const controller = Math.random() * 340 + 10;

    const color = [127 + 128 * Math.random(), 255 * Math.random(), 128 * Math.random()].map(Math.round);

    s.attr({
      anchor: [0, 0],
      pos,
      rotate,
      lineWidth: 6,
      lineCap: 'round',
      d: `M10,80 q${controller},-80 350,0`,
      linearGradients: {
        strokeColor: {
          vector: [10, 30, 180, 90],
          colors: [{
            offset: 0,
            color: `rgba(${color[0]},${color[1]},${color[2]},0)`,
          }, {
            offset: 1,
            color: `rgba(${color[0]},${color[1]},${color[2]},0)`,
          }],
        },
      },
    });

    paper.layer().append(s);


    const a1 = new Animator(3000, (p) => {
      let q = 0;

      if(p > 0.618) {
        q = 1 - (1 - p) / 0.382;
      }

      p = Math.min(p / 0.7, 1);

      const colors = [
        {offset: 0, color: `rgba(${color[0]},${color[1]},${color[2]},0)`},
        {offset: q, color: `rgba(${color[0]},${color[1]},${color[2]},0)`},
        {offset: p, color: `rgba(${color[0]},${color[1]},${color[2]},1)`},
        {offset: Math.min(p + 0.06, 1), color: `rgba(${color[0]},${color[1]},${color[2]},0)`},
      ];

      const linearGradients = s.attr('linearGradients');
      linearGradients.strokeColor.colors = colors;

      const len = s.getPathLength();
      const [x, y] = s.getPointAtLength(p * len);

      linearGradients.strokeColor.vector = [10, 30, x + 5, y];

      s.attr({linearGradients});
    });

    await a1.animate();
    paper.layer().remove(s);
  }

  do {
    ray();
    const delay = Math.random() * 500 + 200;
    await sleep(delay); // eslint-disable-line no-await-in-loop
  } while(1);
}());
