const {Scene, Sprite} = spritejs

/* demo: normal-cach */
;(function () {
  const scene = new Scene('#normal-cache', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const colors = ['red', 'blue', 'green'];

  function randomBlock() {
    const block = new Sprite();
    block.attr({
      x: 1540 * Math.random(),
      y: 600 * Math.random(),
      size: [10, 10],
      bgcolor: colors[0],
      opacity: 0.5,
      rotate: Math.random() * 360,
    });
    return block;
  }

  const blocks = [];
  for(let i = 0; i < 2000; i++) {
    blocks.push(randomBlock());
  }
  layer.append(...blocks);

  const ctrlBtn = document.getElementById('toggle-normal-cache');

  let timerId;

  ctrlBtn.addEventListener('click', () => {
    if(timerId) return;
    let i = 0;
    timerId = setInterval(() => {
      i++;
      blocks.forEach((block) => {
        block.attr('bgcolor', colors[i % 3]);
      });
      if(timerId && i >= 12) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 100);
  });
}())

/* demo: user-cach */
;(function () {
  const scene = new Scene('#user-cache', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const colors = ['red', 'blue', 'green'];

  const cacheMap = {};

  class Block extends Sprite {
    get cache() {
      return cacheMap[this.attr('bgcolor')];
    }

    set cache(cacheContext) {
      if(cacheContext) {
        cacheMap[this.attr('bgcolor')] = cacheContext;
      }
    }
  }

  function randomBlock() {
    const block = new Block();
    block.attr({
      x: 1540 * Math.random(),
      y: 600 * Math.random(),
      size: [10, 10],
      bgcolor: colors[0],
      opacity: 0.5,
      rotate: Math.random() * 360,
    });
    return block;
  }

  const blocks = [];
  for(let i = 0; i < 2000; i++) {
    blocks.push(randomBlock());
  }
  layer.append(...blocks);

  const ctrlBtn = document.getElementById('toggle-user-cache');

  let timerId;

  ctrlBtn.addEventListener('click', () => {
    if(timerId) return;
    let i = 0;
    timerId = setInterval(() => {
      i++;
      blocks.forEach((block) => {
        block.attr('bgcolor', colors[i % 3]);
      });
      if(timerId && i >= 12) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 100);
  });
}())

/* demo: use-batch */
;(function () {
  const scene = new Scene('#use-batch', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const colors = ['red', 'blue', 'green'];

  function randomBlock() {
    const block = new Sprite();
    block.attr({
      x: 1540 * Math.random(),
      y: 600 * Math.random(),
      size: [10, 10],
      bgcolor: colors[0],
      opacity: 0.5,
      rotate: Math.random() * 360,
    });
    return block;
  }

  const blocks = [];
  for(let i = 0; i < 2000; i++) {
    blocks.push(randomBlock());
  }
  const batch = layer.batch(...blocks);

  const ctrlBtn = document.getElementById('toggle-use-batch');

  let timerId;

  ctrlBtn.addEventListener('click', () => {
    if(timerId) return;
    let i = 0;
    timerId = setInterval(() => {
      i++;
      batch.baseNode.attr('bgcolor', colors[i % 3]);
      if(timerId && i >= 12) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 100);
  });
}());
