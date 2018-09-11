'use strict';

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Label = _spritejs.Label,
    Sprite = _spritejs.Sprite,
    Group = _spritejs.Group;

/* demo: state-basic */

(function () {
  var scene = new Scene('#state-basic', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var states = {
    stateA: {
      bgcolor: 'red',
      scale: 0.5,
      rotate: 45
    },
    stateB: {
      scale: 1.0,
      bgcolor: 'green',
      rotate: 0
    },
    stateC: {
      scale: 0.8,
      bgcolor: 'blue',
      rotate: 60
    }
  };

  var stateNames = Object.keys(states);

  var s = new Label(stateNames[0]);
  s.attr({
    anchor: 0.5,
    size: [200, 200],
    pos: [770, 300],
    font: '64px Arial',
    lineHeight: 200,
    textAlign: 'center',
    fillColor: 'white',
    states: states,
    state: stateNames[0]
  });
  layer.append(s);

  var i = 0;
  setInterval(function () {
    s.attr({ state: stateNames[++i % 3] });
  }, 1000);
})();

/* demo: state-actions */
(function () {
  var scene = new Scene('#state-actions', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var states = {
    stateA: {
      bgcolor: 'red',
      scale: 0.5,
      rotate: 45
    },
    stateB: {
      scale: 1.0,
      bgcolor: 'green',
      rotate: 0
    },
    stateC: {
      scale: 0.8,
      bgcolor: 'blue',
      rotate: 60
    }
  };

  var stateNames = Object.keys(states);

  var actions = [{
    from: 'stateA',
    to: 'stateB',
    action: {
      duration: 500,
      easing: 'ease-in-out'
    }
  }, {
    both: ['stateB', 'stateC'],
    action: {
      duration: 800,
      easing: 'cubic-bezier(0.26, 0.09, 0.37, 0.18)'
    }
  }, {
    from: 'stateC',
    action: {
      duration: 1000
    }
  }, {
    to: 'stateC',
    action: {
      duration: 500
    }
  }];

  var s = new Label(stateNames[0]);
  s.attr({
    anchor: 0.5,
    size: [200, 200],
    pos: [770, 300],
    font: '64px Arial',
    lineHeight: 200,
    textAlign: 'center',
    fillColor: 'white',
    states: states,
    actions: actions,
    // state: stateNames[0],
    state: 'stateC'
  });
  layer.append(s);

  s.attr('state', 'stateA');

  var i = 0;
  setInterval(function () {
    s.attr({ state: stateNames[++i % 3] });
  }, 1000);
})();

/* demo: state-reversable */
(function () {
  var scene = new Scene('#state-reversable', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var button1 = new Label('reversable');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 300],
    state: 'normal',
    states: {
      hover: {
        scale: 1.2
      },
      normal: {
        scale: 1
      }
    },
    actions: [{
      both: ['hover', 'normal'],
      duration: 500
    }]
  });
  layer.append(button1);

  button1.on('mouseenter', function () {
    this.attr('state', 'hover');
  });

  button1.on('mouseleave', function () {
    this.attr('state', 'normal');
  });

  var button2 = button1.cloneNode();
  button2.attr({
    text: 'not reversable',
    x: function x(_x) {
      return _x + 500;
    },
    actions: [{
      both: ['hover', 'normal'],
      duration: 500,
      reversable: false
    }]
  });

  layer.append(button2);

  button2.on('mouseenter', function () {
    this.attr('state', 'hover');
  });

  button2.on('mouseleave', function () {
    this.attr('state', 'normal');
  });
})();

/* demo: state-resolveStates */
(function () {
  var scene = new Scene('#state-resolveStates', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var button1 = new Label('动作 1');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 300]
  });
  layer.append(button1);

  var button2 = button1.cloneNode();
  button2.attr({
    text: '动作 2',
    y: function y(_y) {
      return _y + 100;
    }
  });
  layer.append(button2);

  button1.on('mouseenter', function () {
    layer.style.cursor = 'pointer';
  });
  button1.on('mouseleave', function () {
    layer.style.cursor = '';
  });

  button2.on('mouseenter', function () {
    layer.style.cursor = 'pointer';
  });
  button2.on('mouseleave', function () {
    layer.style.cursor = '';
  });

  var block = new Sprite({
    pos: [800, 300],
    size: [100, 100],
    bgcolor: 'red',
    state: 'a',
    states: {
      a: {
        scale: 1.0,
        rotate: 0
      },
      b: {
        scale: 1.5,
        rotate: 0
      },
      c: {
        scale: 1.2,
        rotate: 180
      },
      d: {
        scale: 1.0,
        rotate: -45
      }
    },
    actions: [{
      both: ['a', 'b'],
      duration: 1000
    }, {
      both: ['b', 'c'],
      duration: 1000
    }, {
      both: ['c', 'd'],
      duration: 1000
    }, {
      both: ['d', 'a'],
      duration: 1000
    }]
  });
  layer.append(block);

  button1.on('click', function () {
    block.resolveStates(['a', 'b', 'c', 'd', 'a']);
  });

  button2.on('click', function () {
    block.resolveStates(['a', 'd', 'c', 'b', 'a']);
  });
})();

/* demo: state-toggleEnterExit */
(function () {
  var scene = new Scene('#state-toggleEnterExit', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var group = new Group({
    display: 'flex',
    size: [700, 100],
    pos: [770, 300],
    anchor: 0.5,
    bgcolor: 'grey'
  });

  layer.append(group);

  function addBlock() {
    var block = new Sprite({
      bgcolor: 'red',
      margin: [0, 10, 0, 10],
      size: [100, 100],
      states: {
        beforeEnter: {
          translate: [500, 0]
        },
        afterExit: {
          translate: [500, 0]
        }
      }
    });
    group.append(block);
  }

  function removeBlock() {
    var children = group.children;
    if (children.length > 0) {
      var child = children[children.length - 1];
      child.remove();
    }
  }

  var button1 = new Label('添加元素');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 200],
    states: {
      beforeEnter: {
        translate: [-1000, 0]
      }
    }
  });
  layer.append(button1);

  var button2 = button1.cloneNode();
  button2.attr({
    text: '删除元素',
    x: function x(_x2) {
      return _x2 + 300;
    }
  });
  layer.append(button2);

  button1.on('mouseenter', function () {
    layer.style.cursor = 'pointer';
  });
  button1.on('mouseleave', function () {
    layer.style.cursor = '';
  });

  button2.on('mouseenter', function () {
    layer.style.cursor = 'pointer';
  });
  button2.on('mouseleave', function () {
    layer.style.cursor = '';
  });

  button1.on('click', function () {
    addBlock();
  });

  button2.on('click', function () {
    removeBlock();
  });
})();

/* demo: state-fade */
(function () {
  var scene = new Scene('#state-fade', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var sprite = new Sprite({
    display: 'flex',
    size: [700, 100],
    pos: [770, 300],
    anchor: 0.5,
    bgcolor: 'grey',
    states: {
      hide: {
        opacity: 0
      }
    }
  });

  layer.append(sprite);

  var button1 = new Label('显示');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 200],
    states: {
      beforeEnter: {
        translate: [-1000, 0]
      }
    }
  });
  layer.append(button1);

  var button2 = button1.cloneNode();
  button2.attr({
    text: '隐藏',
    x: function x(_x3) {
      return _x3 + 300;
    }
  });
  layer.append(button2);

  button1.on('mouseenter', function () {
    layer.style.cursor = 'pointer';
  });
  button1.on('mouseleave', function () {
    layer.style.cursor = '';
  });

  button2.on('mouseenter', function () {
    layer.style.cursor = 'pointer';
  });
  button2.on('mouseleave', function () {
    layer.style.cursor = '';
  });

  button1.on('click', function () {
    sprite.show();
  });

  button2.on('click', function () {
    sprite.hide();
  });
})();

/* demo: state-mode */
(function () {
  var scene = new Scene('#state-mode', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var group = new Group({
    display: 'flex',
    size: [700, 100],
    pos: [770, 300],
    anchor: 0.5,
    bgcolor: 'grey',
    enterMode: 'onebyone',
    exitMode: 'onebyone-reverse'
  });

  for (var i = 0; i < 5; i++) {
    var block = new Sprite({
      size: [100, 100],
      bgcolor: 'red',
      margin: [0, 10, 0, 10],
      states: {
        beforeEnter: {
          translate: [500, 0]
        },
        afterExit: {
          translate: [500, 0]
        }
      }
    });
    group.append(block);
  }

  var button1 = new Label('批量添加');
  button1.attr({
    anchor: 0.5,
    font: '32px Arial',
    border: [3, 'blue'],
    padding: 10,
    pos: [500, 200],
    states: {
      beforeEnter: {
        translate: [-1000, 0]
      }
    }
  });
  layer.append(button1);

  var button2 = button1.cloneNode();
  button2.attr({
    text: '批量移除',
    x: function x(_x4) {
      return _x4 + 300;
    }
  });
  layer.append(button2);

  button1.on('mouseenter', function () {
    layer.style.cursor = 'pointer';
  });
  button1.on('mouseleave', function () {
    layer.style.cursor = '';
  });

  button2.on('mouseenter', function () {
    layer.style.cursor = 'pointer';
  });
  button2.on('mouseleave', function () {
    layer.style.cursor = '';
  });

  button1.on('click', function () {
    layer.append(group);
  });

  button2.on('click', function () {
    group.remove();
  });
})();