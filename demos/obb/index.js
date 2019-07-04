document.getElementById('paper').style.background = '#009446';

const paper = new spritejs.Scene('#paper', {
    resolution: [1600, 1200],
    stickMode: 'width',
  }),
  bglayer = paper.layer('bglayer'),
  fglayer = paper.layer('fglayer'),
  Sprite = spritejs.Sprite,
  Path = spritejs.Path;

function randomBlock() {
  const s = new Sprite();
  const i = Math.floor(12 * Math.random()),
    j = Math.floor(8 * Math.random()),
    r = Math.random() * 360;

  s.attr({
    pos: [400 + i * 100, 300 + j * 100],
    size: [80, 80],
    bgcolor: '#fff',
    opacity: 0.8,
    rotate: r,
  });

  bglayer.appendChild(s);

  return s;
}

const bullets = new Set();
function randomBullet() {
  const path = 'M235.946483,75.0041277 C229.109329,53.4046689 214.063766,34.845093 195.469876,22.3846101 C175.428247,8.9577702 151.414895,2 127.314132,2 C75.430432,2 31.6212932,32.8626807 18.323944,74.9130141 C8.97646468,77.1439182 2,85.5871171 2,95.7172992 C2,104.709941 7.49867791,112.371771 15.2700334,115.546944 C15.8218133,115.773348 16.6030463,122.336292 16.8270361,123.236385 C22.1235768,144.534892 35.4236577,163.530709 52.5998558,176.952027 C52.6299032,176.976876 52.6626822,177.001726 52.6954612,177.026575 C72.5513428,192.535224 98.5478246,202 127.043705,202 C152.034964,202 176.867791,194.597706 197.428422,180.146527 C215.659011,167.335395 230.201962,148.621202 236.52831,126.969284 C237.566312,123.421373 238.549682,119.685713 239.038636,116.019079 C239.044099,115.983185 239.074146,115.444787 239.082341,115.442025 C246.673412,112.184022 252,104.580173 252,95.7172992 C252,85.6892748 245.15192,77.3371896 235.946483,75.0041277';
  const p = new Path(path);
  const x0 = 100 + Math.floor(250 * Math.random()),
    y0 = 100 + Math.floor(200 * Math.random()),
    deltaX = 500 + Math.floor(1500 * Math.random()),
    deltaY = 1500;

  p.attr({
    pos: [x0, y0],
    fillColor: '#ffeb3b',
    renderMode: 'fill',
    scale: 0.3,
  });

  const animation = p.animate(
    [{x: x0, y: y0}, {x: x0 + deltaX, y: y0 + deltaY}], {
      duration: 5000,
      fill: 'forwards',
      effect: (from, to, p) => {
        const deltaX = to.x - from.x,
          deltaY = to.y - from.y;

        const x = from.x + deltaX * p,
          y = from.y + deltaY * p * p;

        const rotate = 180 * Math.atan(2 * x * deltaY / (deltaX * deltaX)) / Math.PI;

        return {x, y, rotate};
      },
    }
  );

  animation.finished.then(() => {
    fglayer.removeChild(p);
    bullets.delete(p);
  });

  fglayer.appendChild(p);
  bullets.add(p);
}

const blocks = [];
for(let i = 0; i < 50; i++) {
  blocks.push(randomBlock());
}

setInterval(randomBullet, 500);

fglayer.on('update', () => {
  const bulletList = [...bullets];
  blocks.forEach((block) => {
    if(bulletList.some(bullet => block.OBBCollision(bullet))) {
      block.attr('bgcolor', '#3ae153');
    } else {
      block.attr('bgcolor', '#fff');
    }
  });
});

window.addEventListener('resize', (evt) => {
  paper.setViewport('auto', 'auto');
});
