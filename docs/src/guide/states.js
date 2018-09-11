const {Scene, Label, Sprite, Group} = spritejs;

/* demo: state-basic */
(function () {
  const scene = new Scene('#state-basic', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const states = {
    stateA: {
      bgcolor: 'red',
      scale: 0.5,
      rotate: 45,
    },
    stateB: {
      scale: 1.0,
      bgcolor: 'green',
      rotate: 0,
    },
    stateC: {
      scale: 0.8,
      bgcolor: 'blue',
      rotate: 60,
    },
  };

  const stateNames = Object.keys(states);

  const s = new Label(stateNames[0]);
  s.attr({
    anchor: 0.5,
    size: [200, 200],
    pos: [770, 300],
    font: '64px Arial',
    lineHeight: 200,
    textAlign: 'center',
    fillColor: 'white',
    states,
    state: stateNames[0],
  });
  layer.append(s);

  let i = 0;
  setInterval(() => {
    s.attr({state: stateNames[++i % 3]});
  }, 1000);
}());

/* demo: state-actions */
(function () {
  const scene = new Scene('#state-actions', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const states = {
    stateA: {
      bgcolor: 'red',
      scale: 0.5,
      rotate: 45,
    },
    stateB: {
      scale: 1.0,
      bgcolor: 'green',
      rotate: 0,
    },
    stateC: {
      scale: 0.8,
      bgcolor: 'blue',
      rotate: 60,
    },
  };

  const stateNames = Object.keys(states);

  const actions = [
    {
      from: 'stateA',
      to: 'stateB',
      action: {
        duration: 500,
        easing: 'ease-in-out',
      },
    },
    {
      both: ['stateB', 'stateC'],
      action: {
        duration: 800,
        easing: 'cubic-bezier(0.26, 0.09, 0.37, 0.18)',
      },
    },
    {
      from: 'stateC',
      action: {
        duration: 1000,
      },
    },
    {
      to: 'stateC',
      action: {
        duration: 500,
      },
    },
  ];

  const s = new Label(stateNames[0]);
  s.attr({
    anchor: 0.5,
    size: [200, 200],
    pos: [770, 300],
    font: '64px Arial',
    lineHeight: 200,
    textAlign: 'center',
    fillColor: 'white',
    states,
    actions,
    // state: stateNames[0],
    state: 'stateC',
  });
  layer.append(s);

  s.attr('state', 'stateA');

  let i = 0;
  setInterval(() => {
    s.attr({state: stateNames[++i % 3]});
  }, 1000);
}());


/* demo: state-reversable */
(function () {
  const scene = new Scene('#state-reversable', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const button1 = new Label('reversable');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 300],
    state: 'normal',
    states: {
      hover: {
        scale: 1.2,
      },
      normal: {
        scale: 1,
      },
    },
    actions: [
      {
        both: ['hover', 'normal'],
        duration: 500,
      },
    ],
  });
  layer.append(button1);

  button1.on('mouseenter', function () {
    this.attr('state', 'hover');
  });

  button1.on('mouseleave', function () {
    this.attr('state', 'normal');
  });

  const button2 = button1.cloneNode();
  button2.attr({
    text: 'not reversable',
    x: x => x + 500,
    actions: [
      {
        both: ['hover', 'normal'],
        duration: 500,
        reversable: false,
      },
    ],
  });

  layer.append(button2);

  button2.on('mouseenter', function () {
    this.attr('state', 'hover');
  });

  button2.on('mouseleave', function () {
    this.attr('state', 'normal');
  });
}());

/* demo: state-resolveStates */
(function () {
  const scene = new Scene('#state-resolveStates', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const button1 = new Label('动作 1');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 300],
  });
  layer.append(button1);


  const button2 = button1.cloneNode();
  button2.attr({
    text: '动作 2',
    y: y => y + 100,
  });
  layer.append(button2);

  button1.on('mouseenter', () => {
    layer.style.cursor = 'pointer';
  });
  button1.on('mouseleave', () => {
    layer.style.cursor = '';
  });

  button2.on('mouseenter', () => {
    layer.style.cursor = 'pointer';
  });
  button2.on('mouseleave', () => {
    layer.style.cursor = '';
  });

  const block = new Sprite({
    pos: [800, 300],
    size: [100, 100],
    bgcolor: 'red',
    state: 'a',
    states: {
      a: {
        scale: 1.0,
        rotate: 0,
      },
      b: {
        scale: 1.5,
        rotate: 0,
      },
      c: {
        scale: 1.2,
        rotate: 180,
      },
      d: {
        scale: 1.0,
        rotate: -45,
      },
    },
    actions: [
      {
        both: ['a', 'b'],
        duration: 1000,
      },
      {
        both: ['b', 'c'],
        duration: 1000,
      },
      {
        both: ['c', 'd'],
        duration: 1000,
      },
      {
        both: ['d', 'a'],
        duration: 1000,
      },
    ],
  });
  layer.append(block);

  button1.on('click', () => {
    block.resolveStates(['a', 'b', 'c', 'd', 'a']);
  });

  button2.on('click', () => {
    block.resolveStates(['a', 'd', 'c', 'b', 'a']);
  });
}());

/* demo: state-toggleEnterExit */
(function () {
  const scene = new Scene('#state-toggleEnterExit', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const group = new Group({
    display: 'flex',
    size: [700, 100],
    pos: [770, 300],
    anchor: 0.5,
    bgcolor: 'grey',
  });

  layer.append(group);

  function addBlock() {
    const block = new Sprite({
      bgcolor: 'red',
      margin: [0, 10, 0, 10],
      size: [100, 100],
      states: {
        beforeEnter: {
          translate: [500, 0],
        },
        afterExit: {
          translate: [500, 0],
        },
      },
    });
    group.append(block);
  }

  function removeBlock() {
    const children = group.children;
    if(children.length > 0) {
      const child = children[children.length - 1];
      child.remove();
    }
  }

  const button1 = new Label('添加元素');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 200],
    states: {
      beforeEnter: {
        translate: [-1000, 0],
      },
    },
  });
  layer.append(button1);


  const button2 = button1.cloneNode();
  button2.attr({
    text: '删除元素',
    x: x => x + 300,
  });
  layer.append(button2);

  button1.on('mouseenter', () => {
    layer.style.cursor = 'pointer';
  });
  button1.on('mouseleave', () => {
    layer.style.cursor = '';
  });

  button2.on('mouseenter', () => {
    layer.style.cursor = 'pointer';
  });
  button2.on('mouseleave', () => {
    layer.style.cursor = '';
  });

  button1.on('click', () => {
    addBlock();
  });

  button2.on('click', () => {
    removeBlock();
  });
}());

/* demo: state-fade */
(function () {
  const scene = new Scene('#state-fade', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const sprite = new Sprite({
    display: 'flex',
    size: [700, 100],
    pos: [770, 300],
    anchor: 0.5,
    bgcolor: 'grey',
    states: {
      hide: {
        opacity: 0,
      },
    },
  });

  layer.append(sprite);

  const button1 = new Label('显示');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 200],
    states: {
      beforeEnter: {
        translate: [-1000, 0],
      },
    },
  });
  layer.append(button1);


  const button2 = button1.cloneNode();
  button2.attr({
    text: '隐藏',
    x: x => x + 300,
  });
  layer.append(button2);

  button1.on('mouseenter', () => {
    layer.style.cursor = 'pointer';
  });
  button1.on('mouseleave', () => {
    layer.style.cursor = '';
  });

  button2.on('mouseenter', () => {
    layer.style.cursor = 'pointer';
  });
  button2.on('mouseleave', () => {
    layer.style.cursor = '';
  });

  button1.on('click', () => {
    sprite.show();
  });

  button2.on('click', () => {
    sprite.hide();
  });
}());

/* demo: state-mode */
(function () {
  const scene = new Scene('#state-mode', {viewport: ['auto', 'auto'], resolution: [1540, 600]});
  const layer = scene.layer();

  const group = new Group({
    display: 'flex',
    size: [700, 100],
    pos: [770, 300],
    anchor: 0.5,
    bgcolor: 'grey',
    enterMode: 'onebyone',
    exitMode: 'onebyone-reverse',
  });

  for(let i = 0; i < 5; i++) {
    const block = new Sprite({
      size: [100, 100],
      bgcolor: 'red',
      margin: [0, 10, 0, 10],
      states: {
        beforeEnter: {
          translate: [500, 0],
        },
        afterExit: {
          translate: [500, 0],
        },
      },
    });
    group.append(block);
  }

  const button1 = new Label('批量添加');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 200],
    states: {
      beforeEnter: {
        translate: [-1000, 0],
      },
    },
  });
  layer.append(button1);


  const button2 = button1.cloneNode();
  button2.attr({
    text: '批量移除',
    x: x => x + 300,
  });
  layer.append(button2);

  button1.on('mouseenter', () => {
    layer.style.cursor = 'pointer';
  });
  button1.on('mouseleave', () => {
    layer.style.cursor = '';
  });

  button2.on('mouseenter', () => {
    layer.style.cursor = 'pointer';
  });
  button2.on('mouseleave', () => {
    layer.style.cursor = '';
  });

  button1.on('click', () => {
    layer.append(group);
  });

  button2.on('click', () => {
    group.remove();
  });
}());
