const {Scene, Sprite, Label} = spritejs

/* demo: point-collision */
;(function () {
  const scene = new Scene('#point-collision', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const c1 = new Sprite();
  c1.attr({
    anchor: [0.5, 0.5],
    border: [100, 'red'],
    pos: [770, 300],
    borderRadius: 50,
    opacity: 0.5,
  });
  layer.append(c1);

  const c2 = new Sprite();
  c2.attr({
    anchor: [0.5, 0.5],
    border: [50, 'rgb(192, 128, 0)'],
    size: [100, 100],
    pos: [470, 300],
    borderRadius: 75,
    opacity: 0.5,
  });
  layer.append(c2);

  const c3 = new Sprite();
  c3.attr({
    anchor: [0.5, 0.5],
    border: [20, 'green'],
    pos: [1070, 300],
    size: [160, 160],
    borderRadius: 90,
    opacity: 0.5,
  });
  layer.append(c3);

  function isPointCollision(sprite, x, y) {
    const {width: borderWidth} = sprite.attr('border'),
      width = sprite.contentSize[0];

    const bounds = sprite.boundingRect,
      [cx, cy] = [bounds[0] + bounds[2] / 2, bounds[1] + bounds[3] / 2];

    const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    return distance >= width / 2 && distance <= width / 2 + borderWidth;
  }

  [c1, c2, c3].forEach((c) => {
    c.on('mousemove', (evt) => {
      const target = evt.target,
        {offsetX, offsetY} = evt;

      if(isPointCollision(target, offsetX, offsetY)) {
        target.attr('opacity', 1);
      } else {
        target.attr('opacity', 0.5);
      }
    });
    c.on('mouseleave', (evt) => {
      const target = evt.target;
      target.attr('opacity', 0.5);
    });
  });
}())

/* demo: point-collision-override */
;(function () {
  const scene = new Scene('#point-collision-override', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  function isPointCollision(circle, x, y) {
    const [r1, r2] = circle.attr('r'),
      width = circle.contentSize[0];

    const bounds = circle.boundingRect,
      [cx, cy] = [bounds[0] + bounds[2] / 2, bounds[1] + bounds[3] / 2];

    const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    return distance >= width / 2 && distance <= width / 2 + r1 - r2;
  }

  class Circle extends Sprite {
    pointCollision(evt) {
      if(!super.pointCollision(evt)) {
        return false;
      }
      const {offsetX, offsetY} = evt;
      return isPointCollision(this, offsetX, offsetY);
    }
  }

  Circle.defineAttributes({
    init(attr) {
      attr.setDefault({
        r: [100, 0],
        color: 'black',
      }, {
        borderRadius() {
          const [r1, r2] = this.r;
          return (r1 + r2) / 2;
        },
        width() {
          const r2 = this.r[1];
          return 2 * r2;
        },
        height() {
          const r2 = this.r[1];
          return 2 * r2;
        },
        border() {
          const [r1, r2] = this.r;
          return {width: r1 - r2, color: this.color, style: 'solid'};
        },
      });
    },
    r(attr, val) { // 定义半径属性 [外环，内环]
      attr.clearCache();
      if(!Array.isArray(val)) {
        val = [val, 0];
      }
      attr.set('r', val);
    },
    color(attr, val) {
      attr.clearCache();
      attr.set('color', val);
    },
  });

  const c1 = new Circle();
  c1.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    opacity: 0.5,
    r: 100,
    color: 'red',
  });
  layer.append(c1);

  const c2 = new Circle();
  c2.attr({
    anchor: [0.5, 0.5],
    color: 'rgb(192, 128, 0)',
    r: [100, 50],
    pos: [470, 300],
    opacity: 0.5,
  });
  layer.append(c2);

  const c3 = new Circle();
  c3.attr({
    anchor: [0.5, 0.5],
    color: 'green',
    pos: [1070, 300],
    r: [100, 80],
    opacity: 0.5,
  });
  layer.append(c3)

  ;[c1, c2, c3].forEach((c) => {
    c.on('mouseenter', (evt) => {
      evt.target.attr('opacity', 1);
    });
    c.on('mouseleave', (evt) => {
      evt.target.attr('opacity', 0.5);
    });
  });
}())

/* demo: custom-event */
;(async function () {
  const chickRes = 'https://p5.ssl.qhimg.com/t01acd5010cb5a500d5.png',
    chickJSON = 'https://s2.ssl.qhres.com/static/930e3b2e60496c6e.json';
  const scene = new Scene('#custom-event', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  await scene.preload([chickRes, chickJSON]);

  const claw = new Sprite('chickclaw.png');
  claw.attr({
    anchor: [0.5, 0],
    pos: [770, 0],
    zIndex: 100,
  });
  layer.append(claw);

  for(let i = 1; i <= 4; i++) {
    const chick = new Sprite(`chick0${i}.png`);
    chick.attr({
      anchor: [0.5, 1],
      pos: [300 + (i - 1) * 350, 600],
      scale: 0.5,
    });
    layer.append(chick);
  }

  let pressed = false;
  let moving;

  async function moveClaw(speed) {
    while(pressed) {
      const x0 = claw.attr('x');
      const anim = claw.animate([
        {x: x0},
        {x: x0 + speed},
      ], {
        duration: 500,
        fill: 'forwards',
      });
      /* eslint-disable no-await-in-loop */
      await anim.finished;
      /* eslint-enable no-await-in-loop */
    }
    const x0 = claw.attr('x');
    await claw.animate([
      {x: x0},
      {x: x0 + speed / 5},
    ], {
      duration: 100,
      fill: 'forwards',
      easing: 'ease-out',
    }).finished;
    moving = null;
  }

  layer.on('buttonDown', async (evt) => {
    pressed = true;
    const buttonId = evt.buttonId;
    if(!moving && buttonId === 'leftBtn') {
      moving = moveClaw(-50);
    } else if(!moving && buttonId === 'rightBtn') {
      moving = moveClaw(50);
    } else if(buttonId === 'downBtn') {
      await moving;
      moving = (async () => {
        await claw.animate([
          {y: 0},
          {y: 400},
        ], {
          duration: 2000,
          fill: 'forwards',
        }).finished;
        layer.children.forEach((child) => {
          if(child !== claw && claw.OBBCollision(child)) {
            child.attr('zIndex', 200);
            child.animate([
              {y: 600},
              {y: 200},
            ], {
              duration: 3000,
              fill: 'forwards',
            }).finished.then(() => child.remove());
          }
        });
        await claw.animate([
          {y: 400},
          {y: 0},
        ], {
          duration: 3000,
          fill: 'forwards',
        }).finished;
        moving = null;
      })();
    }
  });
  layer.on('buttonUp', (evt) => {
    pressed = false;
  });

  const ctrl = document.querySelector('#zwwctrl');
  ctrl.addEventListener('mousedown', (evt) => {
    const target = evt.target;
    if(target.tagName === 'BUTTON') {
      layer.dispatchEvent('buttonDown', {buttonId: target.id}, true, true);
    }
  });
  document.documentElement.addEventListener('mouseup', (evt) => {
    layer.dispatchEvent('buttonUp', {}, true, true);
  });
}())

/* demo: afterdraw */
;(async function () {
  const scene = new Scene('#afterdraw', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  await scene.preload({
    id: 'beauty',
    src: 'https://p0.ssl.qhimg.com/t01300d8189b2edf8ca.jpg',
  });

  const image = new Sprite('beauty');
  image.attr({
    anchor: [0.5, 0.5],
    pos: [770, 300],
    scale: [-0.8, 0.8],
    // bgcolor: 'red',
  });
  layer.append(image);

  image.on('afterdraw', ({target, context}) => {
    const [x, y, width, height] = target.renderRect;
    const imageData = context.getImageData(x, y, width, height);
    const [cx, cy] = [width / 2, height / 2];

    for(let i = 0; i < imageData.data.length; i += 4) {
      const x = (i / 4) % width,
        y = Math.floor((i / 4) / width);

      const dist = Math.sqrt((cx - x) ** 2 + (cy - y) ** 2);
      imageData.data[i + 3] = 255 - Math.round(255 * dist / 600);
    }
    context.putImageData(imageData, x, y);
  });
}())

/* demo: event-delegate */
;(function () {
  const scene = new Scene('#event-delegate', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  class KeyButton extends Label {
    pointCollision(evt) {
      return evt.originalEvent.key === this.text;
    }
  }
  KeyButton.defineAttributes({
    init(attr) {
      attr.setDefault({
        font: '42px Arial',
        border: {width: 4, color: 'black', style: 'solid'},
        width: 50,
        height: 50,
        anchor: [0.5, 0.5],
        textAlign: 'center',
        lineHeight: 50,
      });
    },
  });

  const keys = [
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm',
  ];
  for(let i = 0; i < 3; i++) {
    const keyButtons = [...keys[i]];
    for(let j = 0; j < keyButtons.length; j++) {
      const key = new KeyButton(keyButtons[j]);
      key.attr({
        pos: [250 + j * 80, 200 + i * 100],
      });
      key.on('keydown', (evt) => {
        key.attr({
          bgcolor: 'grey',
          fillColor: 'white',
        });
      });
      key.on('keyup', (evt) => {
        key.attr({
          bgcolor: 'transparent',
          fillColor: 'black',
        });
      });
      layer.append(key);
    }
  }

  const label = new Label('轻敲键盘');
  label.attr({
    anchor: [0.5, 0],
    pos: [770, 50],
    font: '42px Arial',
  });
  layer.append(label);

  scene.delegateEvent('keydown', document);
  scene.delegateEvent('keyup', document);
}());
