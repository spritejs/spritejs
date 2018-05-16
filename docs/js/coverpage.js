'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
  var showLogoText = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(text, pos, posList) {
      var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var els, i, letter, x, letterEl;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              els = [];
              i = 0;

            case 2:
              if (!(i < text.length)) {
                _context.next = 14;
                break;
              }

              letter = text.charAt(i), x = posList[i];
              letterEl = new Sprite('letter-' + letter + '.png');

              letterEl.attr({ pos: [pos[0] + x, pos[1]] });
              if (letter === 'j') {
                letterEl.attr({ zIndex: 20 });
              }
              els.push(letterEl);
              /* eslint-disable no-await-in-loop */
              _context.next = 10;
              return wait(delay);

            case 10:
              /* eslint-enable no-await-in-loop */
              fglayer.append(letterEl);

            case 11:
              i++;
              _context.next = 2;
              break;

            case 14:
              return _context.abrupt('return', els);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function showLogoText(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var showIntroText = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(text) {
      var introText, anim;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              introText = new Group();

              introText.attr({
                anchor: 0.5,
                pos: [2160, 910],
                size: [720, 80],
                opacity: 0
                // bgcolor: 'rgba(0, 0, 0, 0.3)',
              });
              fglayer.append(introText);[].concat(_toConsumableArray(text)).forEach(function (char, i) {
                var label = new Label(char);
                label.attr({
                  pos: [i * 80, 0],
                  font: '54px "宋体"',
                  fillColor: '#fff'
                });
                introText.append(label);
              });

              anim = introText.animate([{ x: 2160, opacity: 0 }, { x: 2000, opacity: 0.8 }], {
                duration: 500,
                fill: 'forwards',
                easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              });
              _context2.next = 7;
              return anim.finished;

            case 7:
              return _context2.abrupt('return', introText);

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function showIntroText(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  var showHuanHuan = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var huanhuanGroup, huanhuan, huanhuanFire, fx, fy, anim2;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              huanhuanGroup = new Group();

              huanhuanGroup.attr({
                anchor: 0.5,
                pos: [980, 744],
                rotate: 30,
                size: [200, 320],
                opacity: 0,
                zIndex: 100
                // bgcolor: 'red',
              });
              fglayer.append(huanhuanGroup);

              huanhuan = new Sprite('huanhuan.png');

              huanhuan.attr({
                pos: [0, 0]
              });
              huanhuanGroup.append(huanhuan);

              huanhuanFire = new Path();

              huanhuanFire.attr({
                path: { d: 'M0,0Q-1,12,5,36Q30,22,30,0z', transform: { scale: 2 } },
                anchor: [0, 0],
                fillColor: '#FEE139',
                pos: [46, 220],
                lineWidth: 6,
                strokeColor: '#FB6F4A',
                zIndex: -1,
                rotate: -5
              });
              huanhuanGroup.append(huanhuanFire);

              // random burn fire
              fx = 5, fy = 6;


              fglayer.timeline.setInterval(function () {
                var deltaX = Math.floor(Math.random() * 3) - 1,
                    // -1 0 1,
                deltaY = Math.floor(Math.random() * 3) - 1;

                fx += deltaX;
                if (fx < 0) fx = 0;
                if (fx > 15) fx = 15;

                fx += deltaY;
                if (fy < 0) fy = 0;
                if (fy > 20) fy = 20;

                var q1 = [-1, 12, -5 + fx, 30 + fy];
                var q2 = [30, 22, 30, 0];
                var d = 'M0,0Q' + q1 + 'Q' + q2 + 'z';
                huanhuanFire.attr({
                  path: { d: d, transform: { scale: 2 } }
                });
              }, 100);

              anim2 = huanhuanGroup.animate([{ pos: [980, 744], opacity: 0 }, { pos: [1080, 450], opacity: 1 }], {
                duration: 500,
                fill: 'forwards'
              });


              huanhuanGroup.on('mouseenter', function (evt) {
                huanhuan.textures = 'huanhuan2.png';
              });

              huanhuanGroup.on('mouseleave', function (evt) {
                huanhuan.textures = 'huanhuan.png';
              });

              _context3.next = 16;
              return anim2.finished;

            case 16:

              huanhuanGroup.animate([{ y: 450 }, { y: 460 }, { y: 450 }, { y: 440 }, { y: 450 }], {
                duration: 2000,
                iterations: Infinity
              });

              return _context3.abrupt('return', huanhuanGroup);

            case 18:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function showHuanHuan() {
      return _ref4.apply(this, arguments);
    };
  }();

  var showGuanGuan = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var guanguan, anim3, anim4;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              guanguan = new Sprite('guanguan3.png');

              guanguan.attr({
                anchor: 0.5,
                scale: [-1, 1],
                pos: [3200, 1150]
              });
              fglayer.append(guanguan);

              anim3 = guanguan.animate([{ x: 3200 }, { x: 3000 }], {
                duration: 500,
                fill: 'forwards'
              });
              _context4.next = 6;
              return anim3.finished;

            case 6:
              guanguan.textures = 'guanguan1.png';

              _context4.next = 9;
              return wait(800);

            case 9:
              guanguan.textures = 'guanguan3.png';

              anim4 = guanguan.animate([{ x: 3000 }, { x: 2380 }], {
                duration: 500,
                fill: 'forwards'
              });
              _context4.next = 13;
              return anim4.finished;

            case 13:
              guanguan.textures = 'guanguan1.png';
              guanguan.attr({
                zIndex: 100
                // rotate: 20,
              });

              guanguan.on('mouseenter', function (evt) {
                if (guanguan.textures[0].id !== 'guanguan3.png') {
                  guanguan.textures = ['guanguan2.png'];
                  guanguan.attr({ rotate: 30 });
                }
              });
              guanguan.on('mouseleave', function (evt) {
                if (guanguan.textures[0].id !== 'guanguan3.png') {
                  guanguan.textures = ['guanguan1.png'];
                  guanguan.attr({ rotate: 0 });
                }
              });

              return _context4.abrupt('return', guanguan);

            case 18:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function showGuanGuan() {
      return _ref5.apply(this, arguments);
    };
  }();

  var showButtons = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var githubBtn, anim5, getStartBtn, anim6, demoBtn, anim7;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              githubBtn = new Label('GitHub');

              githubBtn.attr({
                anchor: [0.5, 0],
                size: [520, 120],
                border: [2, '#208b50'],
                pos: [1320, 1456],
                zIndex: 99999,
                borderRadius: 30,
                textAlign: 'center',
                font: '72px "宋体"',
                lineHeight: 120,
                fillColor: '#11773d',
                opacity: 0
              });
              fglayer.append(githubBtn);
              registerButton(githubBtn, 'https://github.com/spritejs/spritejs');

              anim5 = githubBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 500,
                fill: 'forwards'
              });
              _context5.next = 7;
              return anim5.finished;

            case 7:
              getStartBtn = githubBtn.cloneNode();

              getStartBtn.attr({
                text: 'Get Started',
                pos: [1920, 1456]
              });
              fglayer.append(getStartBtn);
              registerButton(getStartBtn, window.location + 'zh-cn/index');

              anim6 = getStartBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 500,
                fill: 'forwards'
              });
              _context5.next = 14;
              return anim6.finished;

            case 14:
              demoBtn = githubBtn.cloneNode();

              demoBtn.attr({
                text: 'Demo',
                pos: [2520, 1456]
              });
              fglayer.append(demoBtn);

              registerButton(demoBtn, '/demo');
              anim7 = demoBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 500,
                fill: 'forwards'
              });
              _context5.next = 21;
              return anim7.finished;

            case 21:
              return _context5.abrupt('return', [githubBtn, getStartBtn, demoBtn]);

            case 22:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function showButtons() {
      return _ref6.apply(this, arguments);
    };
  }();

  var _spritejs, Scene, Sprite, Group, Label, Path, scene, coverpage, fglayer, wait, registerButton, showMore, hideSprites, showSprites, showFeatures, requestId, autoScroll, more, scrolled;

  return regeneratorRuntime.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          autoScroll = function autoScroll(scrollBy) {
            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

            if (requestId !== null) return;
            var startTime = Date.now();
            requestId = requestAnimationFrame(function step() {
              var p = (Date.now() - startTime) / time,
                  scrollY = Math.min(1, p) * scrollBy;
              window.scrollTo(0, scrollY);
              if (p < 1) {
                requestId = requestAnimationFrame(step);
              } else {
                requestId = null;
              }
            });
          };

          showFeatures = function showFeatures() {
            var group = new Group();
            group.attr({
              size: [2160, 930],
              pos: [850, 440],
              clip: {
                d: 'M0,0L0,0L0,0L0,0z'
              },
              zIndex: 99
            });
            fglayer.append(group);
            var features = new Sprite();
            features.attr({
              size: [2160, 930],
              pos: [0, 0],
              bgcolor: {
                vector: [0, 0, 2160, 0],
                colors: [{ offset: 0, color: '#1EAC61' }, { offset: 0.4, color: '#1EAC61' }, { offset: 0.4, color: '#FFF' }, { offset: 1, color: '#FFF' }]
              }
            });
            group.append(features);

            var label = new Label('特点');
            label.attr({
              anchor: [1, 0],
              pos: [800, 150],
              color: '#fff',
              font: 'bold 128px "宋体"'
            });
            group.append(label);

            var label2 = new Label('FEATURES');
            label2.attr({
              anchor: [1, 0],
              pos: [800, 320],
              color: '#fff',
              font: '80px Arial'
            });
            group.append(label2);

            var label3 = new Label('- \u4F7F\u7528ES6+\uFF0C\u9762\u5411\u5BF9\u8C61\u8BBE\u8BA1\u548C\u5F00\u53D1\n- \u652F\u6301\u5143\u7D20\u5D4C\u5957\u548C\u4E8B\u4EF6\u5206\u53D1\n- \u4F7F\u7528\u7F13\u5B58\u63D0\u5347\u6027\u80FD\n- \u652F\u6301 Web Animation API\n- \u8DE8\u5E73\u53F0\u6E32\u67D3\uFF0C\u652F\u6301\u670D\u52A1\u7AEF\u548C\u5C0F\u7A0B\u5E8F\n    ');
            label3.attr({
              pos: [1000, 150],
              color: '#000',
              font: '64px "宋体"',
              lineHeight: 120
            });
            group.append(label3);

            return group;
          };

          showSprites = function showSprites(sprites) {
            sprites.forEach(function (sprite) {
              sprite.attr({ opacity: 1 });
            });
          };

          hideSprites = function hideSprites(sprites) {
            sprites.forEach(function (sprite) {
              sprite.attr({ opacity: 0 });
            });
          };

          showMore = function showMore() {
            var more = new Sprite();
            more.attr({
              textures: 'more.png',
              anchor: 0.5,
              pos: [1920, 1800],
              bgcolor: 'red'
            });
            fglayer.append(more);

            // more.animate([
            //   {scale: 1},
            //   {scale: 1.2},
            // ], {
            //   duration: 1000,
            //   iterations: Infinity,
            //   direction: 'alternate',
            // })

            var startTime = Date.now();
            requestAnimationFrame(function step() {
              var p = (startTime - Date.now()) / 1000;
              p -= Math.floor(p);
              // more.attr('scale', 1 + 0.5 * p)
              try {
                more.attr({
                  pos: [100 + 200 * p, 100]
                  // bgcolor: 'blue',
                });
                console.log(more.attr('bgcolor'));
                more.cache = null;
              } catch (ex) {}
              requestAnimationFrame(step);
            });

            // registerButton(more, () => {})

            document.querySelector('.wrap').style.display = 'block';
            return more;
          };

          registerButton = function registerButton(button, link) {
            button.on('mouseenter', function (evt) {
              document.documentElement.style.cursor = 'pointer';
            });
            button.on('mouseleave', function (evt) {
              document.documentElement.style.cursor = 'default';
            });
            var btnPressDown = function btnPressDown(evt) {
              button.attr({
                bgcolor: '#1e9d5a',
                fillColor: '#fff'
              });
            };
            button.on('mouseenter', btnPressDown);
            button.on('touchstart', btnPressDown);

            var btnPressUp = function btnPressUp(evt) {
              button.attr({
                bgcolor: '',
                fillColor: '#11773d'
              });
            };

            button.on('mouseleave', btnPressUp);
            document.documentElement.addEventListener('touchend', btnPressUp);

            if (typeof link === 'string') {
              button.on('click', function (evt) {
                scene.removeLayer(fglayer);
                coverpage.remove();
                window.location.href = link;
              });
            } else if (typeof link === 'function') {
              button.on('click', link);
            }
          };

          wait = function wait(ms) {
            return new Promise(function (resolve) {
              setTimeout(resolve, ms);
            });
          };

          _spritejs = spritejs, Scene = _spritejs.Scene, Sprite = _spritejs.Sprite, Group = _spritejs.Group, Label = _spritejs.Label, Path = _spritejs.Path;
          scene = new Scene('#coverpage', {
            viewport: ['auto', 'auto'],
            resolution: [3840, 2160],
            stickMode: 'width'
          });
          coverpage = document.querySelector('#coverpage');

          // 适配移动端
          // const [width] = scene.viewport
          // if(width <= 480) {
          //   scene.container.style.transform = 'scale(2)'
          // }

          // window.addEventListener('resize', (evt) => {
          //   const [width] = scene.viewport
          //   if(width <= 480) {
          //     scene.container.style.transform = 'scale(2)'
          //   } else {
          //     scene.container.style.transform = ''
          //   }
          // })

          // 预加载资源

          _context6.next = 12;
          return scene.preload(['https://p5.ssl.qhimg.com/t01f47a319aebf27174.png', 'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json']);

        case 12:
          fglayer = scene.layer('fglayer');
          requestId = null;


          // await showLogoText('spritejs', [1108, 482], [0, 256, 500, 760, 848, 1078, 1286, 1488], 200)
          // const text = await showIntroText('跨平台绘图对象模型')
          // const huanhuan = await showHuanHuan()
          // const guanguan = await showGuanGuan()
          // const buttons = await showButtons()
          more = showMore();

          window.more = more;

          // const featureGroup = showFeatures()

          scrolled = false;
          // const features = document.getElementById('features')
          // const maxScroll = coverpage.clientHeight * 0.5 + features.clientHeight * 0.65

          // more.on('mouseenter', () => {
          //   autoScroll(maxScroll, 1000)
          // })

          // window.addEventListener('scroll', _.throttle((evt) => {
          // const yOffset = window.pageYOffset || document.documentElement.scrollTop
          // if(yOffset < 0) return

          // console.log(yOffset)
          // if(!scrolled && yOffset) {
          //   scrolled = true
          //   hideSprites([text, ...buttons, more])
          //   guanguan.attr({
          //     textures: ['guanguan3.png'],
          //   })
          // } else if(scrolled && yOffset === 0) {
          //   scrolled = false
          //   showSprites([text, ...buttons, more])
          //   guanguan.attr({
          //     textures: ['guanguan1.png'],
          //   })
          // }

          // if(yOffset >= maxScroll && coverpage.style.position !== 'absolute') {
          // coverpage.style.position = 'absolute'
          // coverpage.style.top = `${maxScroll}px`
          // guanguan.attr({
          //   textures: ['guanguan1.png'],
          // })
          // } else if(yOffset < maxScroll && coverpage.style.position === 'absolute') {
          // coverpage.style.position = 'fixed'
          // coverpage.style.top = '0'
          // guanguan.attr({
          //   textures: ['guanguan3.png'],
          // })
          // }

          // const p = Math.min(maxScroll, yOffset) / maxScroll
          // const x1 = 2380 - 1400 * p * p,
          //   x2 = 1080 + 1900 * p * p

          // if(p < 0 || p > 1) {
          //   return
          // }

          // p = 0.588
          // x1 = 1896
          // x2 = 1736
          // x2e = 1244
          // x1e = 916

          // if(x2 - x1 > 0 && x2 - x1 !== featureGroup._clipDX) {
          //   featureGroup._clipDX = x2 - x1
          //   const l = 916 - (1896 - x1),
          //     r = 916 + x2 - 1736
          //   const d = `M${l},0L${r},0L${r},${930}L${l},930z`
          //   featureGroup.attr({
          //     clip: {d},
          //   })
          // } else if(x2 - x1 <= 0) {
          //   featureGroup.attr({
          //     clip: {d: 'M0,0L0,0L0,0L0,0z'},
          //   })
          // }
          // guanguan.attr({
          //   x: x1,
          // })
          // huanhuan.attr({
          //   x: x2,
          // })
          // }, 16))

        case 17:
        case 'end':
          return _context6.stop();
      }
    }
  }, _callee6, this);
}))();