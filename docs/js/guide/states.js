'use strict';

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Label = _spritejs.Label;

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