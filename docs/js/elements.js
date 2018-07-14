'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite,
    Label = _spritejs.Label,
    Path = _spritejs.Path,
    Group = _spritejs.Group;
(function () {
  var scene = new Scene('#border-and-size', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var box1 = new Sprite({
    size: [100, 100],
    pos: [100, 100],
    border: [2, '#f77']
  });
  var box2 = new Sprite({
    size: [200, 200],
    pos: [300, 100],
    border: [4, '#7c7'],
    borderRadius: 20
  });
  var box3 = new Sprite({
    size: [300, 300],
    pos: [600, 100],
    border: [6, '#77c'],
    borderRadius: 50
  });
  var box4 = new Sprite({
    size: [400, 400],
    pos: [1000, 100],
    border: [8, '#c7c'],
    borderRadius: 200
  });
  layer.append(box1, box2, box3, box4);
})();(function () {
  var scene = new Scene('#bgcolor', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();

  var box1 = new Sprite({
    size: [100, 100],
    pos: [100, 100],
    bgcolor: 'red'
  });
  var box2 = new Sprite({
    size: [200, 200],
    pos: [300, 100],
    bgcolor: '#7c7',
    borderRadius: 20
  });
  var box3 = new Sprite({
    size: [300, 300],
    pos: [600, 100],
    bgcolor: 'rgba(192, 128, 192, 0.5)',
    borderRadius: 50
  });
  var box4 = new Sprite({
    size: [400, 400],
    pos: [1000, 100],
    bgcolor: 'hsl(180,50%,50%)',
    borderRadius: 200
  });
  layer.append(box1, box2, box3, box4);
})();(function () {
  var scene = new Scene('#textures', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer();
  var texture = 'https://p5.ssl.qhimg.com/t01a2bd87890397464a.png';

  var s1 = new Sprite(texture);
  s1.attr({
    pos: [100, 20],
    border: [2, 'grey']
  });

  var s2 = new Sprite(texture);
  s2.attr({
    size: [190, 269],
    border: [2, 'grey'],
    pos: [500, 20]
  });

  var s3 = new Sprite();
  s3.attr({
    textures: [{ src: texture, rect: [0, 0, 190, 268] }, { src: texture, rect: [192, 0, 190, 268] }],
    border: [2, 'grey'],
    pos: [500, 300]
  });

  var s4 = new Sprite();
  s4.attr({
    textures: [{ src: texture, rect: [0, 0, 190, 268], srcRect: [0, 0, 190, 268] }, { src: texture, rect: [200, 278, 190, 268], srcRect: [191, 269, 190, 268] }, { src: texture, rect: [0, 278, 190, 268], srcRect: [0, 269, 190, 268] }, { src: texture, rect: [200, 0, 190, 268], srcRect: [191, 0, 190, 268] }],
    border: [2, 'grey'],
    pos: [1000, 20]
  });

  layer.append(s1, s2, s3, s4);
})();(function () {
  var scene = new Scene('#label-text', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer('fglayer');

  var text1 = new Label('SpriteJS.org');
  text1.attr({
    pos: [100, 40],
    fillColor: '#707',
    font: 'oblique small-caps bold 56px Arial',
    border: [2.5, '#ccc']
  });
  layer.append(text1);

  var text2 = new Label('从前有座\n灵剑山');
  text2.attr({
    pos: [500, 40],
    fillColor: '#077',
    font: '64px "宋体"',
    lineHeight: 112,
    textAlign: 'center',
    padding: [0, 30],
    border: [2.5, '#ccc']
  });
  layer.append(text2);

  var text3 = new Label('Hello');
  text3.attr({
    pos: [100, 240],
    strokeColor: '#fc7',
    font: 'bold italic 70px Microsoft Yahei',
    textAlign: 'center',
    padding: [0, 30],
    border: [2.5, '#ccc']
  });
  layer.append(text3);

  function createClockTexts(text, x, y) {
    var len = text.length;

    for (var i = 0; i < len; i++) {
      var char = text.charAt(i);
      var label = new Label(char);
      label.attr({
        anchor: [0.5, 4.5],
        pos: [x, y],
        font: 'bold 44px Arial',
        fillColor: '#37c',
        rotate: i * 360 / len
      });

      layer.append(label);
    }
  }
  createClockTexts('Sprite.js JavaScript Canvas...', 1200, 300);
})();(function () {
  var scene = new Scene('#svgpath', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer('fglayer');

  var p1 = new Path();
  p1.attr({
    path: {
      d: 'M280,250A200,200,0,1,1,680,250A200,200,0,1,1,280,250Z',
      transform: {
        scale: 0.5
      },
      trim: true
    },
    strokeColor: '#033',
    fillColor: '#839',
    lineWidth: 12,
    pos: [100, 50]
  });

  layer.appendChild(p1);

  var p2 = new Path();
  p2.attr({
    path: {
      d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
      transform: {
        rotate: 45
      },
      trim: true
    },
    fillColor: '#ed8',
    pos: [450, 100]
  });
  layer.appendChild(p2);

  var p3 = new Path();
  p3.attr({
    path: {
      d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
      trim: true
    },
    strokeColor: '#f37',
    lineWidth: 20,
    lineJoin: 'round',
    lineCap: 'round',
    pos: [1000, 100]
  });
  layer.appendChild(p3);
})();(function () {
  var scene = new Scene('#svgpath-transform', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer('fglayer');
  var d = 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z';

  var heart1 = new Path();
  heart1.attr({
    anchor: [0.5, 0.5],
    path: {
      d: d,
      transform: {
        rotate: 45
      },
      trim: true
    },
    fillColor: '#f33',
    pos: [300, 300]
  });
  layer.appendChild(heart1);

  heart1.animate([{ scale: 1 }, { scale: 10 }], {
    duration: 5000,
    iterations: Infinity,
    direction: 'alternate'
  });

  var heart2 = new Path();
  heart2.attr({
    anchor: [0.5, 0.5],
    path: {
      d: d,
      transform: {
        rotate: 45
      },
      trim: true
    },
    fillColor: '#f33',
    pos: [900, 300]
  });
  heart2.animate([{ path: { d: d, trim: true, transform: { rotate: 45, scale: 1 } } }, { path: { d: d, trim: true, transform: { rotate: 45, scale: 10 } } }], {
    duration: 5000,
    iterations: Infinity,
    direction: 'alternate'
  });
  layer.appendChild(heart2);
})();(function () {
  var scene = new Scene('#group', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
  var layer = scene.layer('fglayer');
  var group = new Group();
  var arcD = 'M0 0L 50 0A50 50 0 0 1 43.3 25z';

  group.attr({
    size: [300, 300],
    pos: [770, 300],
    anchor: [0.5, 0.5]
  });
  layer.append(group);

  for (var i = 0; i < 6; i++) {
    var arc = new Path();
    arc.attr({
      path: {
        d: arcD,
        transform: { scale: 3, rotate: -15 },
        trim: true
      },
      pos: [150, 150],
      anchor: [0, 0.5],
      strokeColor: 'red',
      rotate: i * 60
    });
    arc.attr('fillColor', 'rgb(' + i * 139 % 255 + ', 0, 0)');
    group.append(arc);
  }

  group.animate([{ rotate: 0 }, { rotate: 360 }], {
    duration: 3000,
    iterations: Infinity
  });
})();_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var imgUrl, scene, layer, group, sprite;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          imgUrl = 'https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg';
          scene = new Scene('#group-clip', { viewport: ['auto', 'auto'], resolution: [1540, 600] });
          _context.next = 4;
          return scene.preload({ id: 'beauty', src: imgUrl });

        case 4:
          layer = scene.layer('fglayer');
          group = new Group();

          group.attr({
            pos: [770, 300],
            anchor: [0.5, 0.5],
            clip: { d: 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z', transform: { scale: 15 } }
          });
          layer.append(group);

          sprite = new Sprite('beauty');

          sprite.attr({
            pos: [-10, 0],
            scale: 0.75
          });
          group.append(sprite);

        case 11:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}))();