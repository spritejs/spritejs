'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
                _context.next = 15;
                break;
              }

              letter = text.charAt(i), x = posList[i];
              letterEl = new Sprite('letter-' + letter + '.png');

              letterEl.attr({
                pos: [pos[0] + x, pos[1]],
                translate: [250, 0],
                opacity: 0
              });
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
              letterEl.animate([{
                opacity: 1,
                translate: [0, 0]
              }], {
                duration: 500,
                fill: 'forwards'
              });

            case 12:
              i++;
              _context.next = 2;
              break;

            case 15:
              return _context.abrupt('return', els);

            case 16:
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
                pos: [2160, 918],
                size: [720, 80],
                opacity: 0
                // bgcolor: 'rgba(0, 0, 0, 0.3)',
              });
              fglayer.append(introText);[].concat(_toConsumableArray(text)).forEach(function (char, i) {
                var label = new Label(char);
                label.attr({
                  pos: [i * 80, 0],
                  font: '36px "pfang"',
                  fillColor: '#fff'
                });
                introText.append(label);
              });

              anim = introText.animate([{ x: 2160, opacity: 0 }, { x: 2000, opacity: 0.8 }], {
                duration: 800,
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
      var huanhuanGroup, huanhuan, huanhuanFire, fx, fy, anim2, anim;
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
                pos: [60, 230],
                lineWidth: 6,
                strokeColor: '#FB6F4A',
                zIndex: -1,
                rotate: -5
              });
              huanhuanGroup.append(huanhuanFire);

              // random burn fire
              fx = 5, fy = 6;


              fglayer.timeline.setInterval(function () {
                var deltaX = Math.floor(Math.random() * 5) - 2,
                    // -1 0 1,
                deltaY = Math.floor(Math.random() * 5) - 2;

                fx += deltaX;
                if (fx < 0) fx = 0;
                if (fx > 20) fx = 20;

                fx += deltaY;
                if (fy < 0) fy = 0;
                if (fy > 25) fy = 25;

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
              anim = huanhuanGroup.animate([{ y: 450 }, { y: 460 }, { y: 450 }, { y: 440 }, { y: 450 }], {
                duration: 2000,
                iterations: Infinity
              });


              animations.push(anim);

              return _context3.abrupt('return', huanhuanGroup);

            case 19:
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
      var guanguan, anim3, anim31, anim4;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              guanguan = new Sprite('guanguan3.png');

              guanguan.attr({
                anchor: 0.5,
                scale: [-1, 1],
                pos: [3000, 1140]
              });
              fglayer.append(guanguan);

              anim3 = guanguan.animate([{ x: 3000 }, { x: 2700 }], {
                duration: 400,
                fill: 'forwards'
              });
              _context4.next = 6;
              return anim3.finished;

            case 6:
              guanguan.textures = 'guanguan1.png';

              anim31 = guanguan.animate([{ textures: 'guanguan1.png' }, { textures: 'guanguan2.png' }], {
                duration: 300,
                iterations: 2,
                fill: 'backwards'
              });
              _context4.next = 10;
              return anim31.finished;

            case 10:
              _context4.next = 12;
              return wait(300);

            case 12:
              guanguan.textures = 'guanguan3.png';

              anim4 = guanguan.animate([{ x: 2700 }, { x: 2380 }], {
                duration: 400,
                fill: 'forwards'
              });
              _context4.next = 16;
              return anim4.finished;

            case 16:
              guanguan.textures = 'guanguan1.png';
              _context4.next = 19;
              return wait(300);

            case 19:

              guanguan.animate([{ textures: 'guanguan1.png' }, { textures: 'guanguan2.png' }], {
                duration: 200,
                fill: 'backwards'
              });
              guanguan.attr({
                zIndex: 100
                // rotate: 20,
              });

              guanguan.on('mouseenter', function (evt) {
                if (guanguan.textures[0].id !== 'guanguan3.png') {
                  guanguan.textures = ['guanguan2.png'];
                  guanguan.transition(0.2).attr({ rotate: 30 });
                }
              });
              guanguan.on('mouseleave', function (evt) {
                if (guanguan.textures[0].id !== 'guanguan3.png') {
                  guanguan.textures = ['guanguan1.png'];
                  guanguan.transition(0.2).attr({ rotate: 0 });
                }
              });

              return _context4.abrupt('return', guanguan);

            case 24:
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

  var showMore = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var more, blinkSpots, blinkSpot1, blinkSpotGap, blinkAnimKeyframes, blinkSpot2, blinkSpot3;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              //  小鼠标
              more = new Sprite();

              more.attr({
                textures: 'more.png',
                anchor: 0.5,
                pos: [1920, 1800],
                opacity: 0
              });
              fglayer.append(more);

              _context5.next = 5;
              return more.transition(0.5).attr({ opacity: 1 });

            case 5:

              registerButton(more, function () {});

              document.querySelector('main').style.display = 'block';

              // 呼吸的小圆点
              blinkSpots = new Group();
              blinkSpot1 = new Sprite();
              blinkSpotGap = 30;
              blinkAnimKeyframes = [{
                opacity: 1, offset: 0.25
              }, {
                opacity: 0.2, offset: 0.5
              }];


              blinkSpot1.attr({
                bgcolor: 'white',
                size: [10, 10],
                anchor: 0.5,
                pos: [1918, 1870],
                borderRadius: 5,
                opacity: 0.2
              });
              blinkSpot1.animate(blinkAnimKeyframes, {
                duration: 2000,
                iterations: Infinity,
                easing: 'ease-in-out'
              });
              blinkSpots.append(blinkSpot1);

              blinkSpot2 = blinkSpot1.cloneNode();

              blinkSpot2.attr({
                y: function y(_y) {
                  return _y + blinkSpotGap;
                }
              });
              blinkSpot2.animate(blinkAnimKeyframes, {
                duration: 2000,
                iterations: Infinity,
                delay: 330,
                easing: 'ease-in-out'
              });
              blinkSpots.append(blinkSpot2);

              blinkSpot3 = blinkSpot2.cloneNode();

              blinkSpot3.attr({
                y: function y(_y2) {
                  return _y2 + blinkSpotGap;
                }
              });
              blinkSpot3.animate(blinkAnimKeyframes, {
                duration: 2000,
                iterations: Infinity,
                delay: 660,
                easing: 'ease-in-out'
              });
              blinkSpots.append(blinkSpot3);

              fglayer.append(blinkSpots);

              return _context5.abrupt('return', [more, blinkSpots]);

            case 24:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function showMore() {
      return _ref6.apply(this, arguments);
    };
  }();

  var loadingHint, _onScroll, _spritejs, Scene, Sprite, Group, Label, Path, scene, coverpage, fglayer, maxScroll, fixMobile, _fixMobile, animations, wait, registerButton, showButtons, hideSprites, showSprites, showFeatures, requestId, autoScroll, text, buttons, huanhuan, guanguan, more, featureGroup, scrolled, features, calculateScroll;

  return regeneratorRuntime.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          calculateScroll = function calculateScroll() {
            var r = parseInt(fglayer.canvas.style.width, 10) / scene.resolution[0];
            var a = (coverpage.clientHeight - fglayer.canvas.clientHeight) / 2;
            var b = (440 + 465) * r;
            var c = features.clientHeight / 2;
            return features.getBoundingClientRect().y - a - b + c + window.pageYOffset;
          };

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
              font: '128px "pfang"'
            });
            group.append(label);

            var label2 = new Label('FEATURES');
            label2.attr({
              anchor: [1, 0],
              pos: [800, 320],
              color: '#fff',
              font: '80px "pfang"'
            });
            group.append(label2);

            var label3 = new Label('    \u4F7F\u7528ES6+\uFF0C\u9762\u5411\u5BF9\u8C61\u8BBE\u8BA1\u548C\u5F00\u53D1\n    \u652F\u6301\u5143\u7D20\u5D4C\u5957\u548C\u4E8B\u4EF6\u5206\u53D1\n    \u4F7F\u7528\u7F13\u5B58\u63D0\u5347\u6027\u80FD\n    \u652F\u6301 Web Animation API\n    \u8DE8\u5E73\u53F0\u6E32\u67D3\uFF0C\u652F\u6301\u670D\u52A1\u7AEF\u548C\u5C0F\u7A0B\u5E8F\n    ');
            label3.attr({
              pos: [1000, 150],
              color: '#000',
              font: '50px "pfang"',
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

          showButtons = function showButtons() {
            var githubBtn = new Label('GitHub');
            githubBtn.attr({
              anchor: [0.5, 0],
              size: [350, 100],
              border: [4, '#208b50'],
              pos: [2620, 1500],
              zIndex: 99999,
              borderRadius: 50,
              textAlign: 'center',
              font: '44px Arail',
              lineHeight: 100,
              fillColor: '#11773d',
              opacity: 0
            });
            fglayer.append(githubBtn);
            registerButton(githubBtn, 'https://github.com/spritejs/spritejs');

            githubBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 500,
              fill: 'forwards',
              delay: 1500
            });

            var giteeBtn = githubBtn.cloneNode();
            giteeBtn.attr({
              text: 'Gitee',
              pos: [2170, 1500]
            });
            fglayer.append(giteeBtn);
            registerButton(giteeBtn, 'https://gitee.com/qihoo360/spriteJS');

            giteeBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 500,
              fill: 'forwards',
              delay: 1000
            });

            var getStartBtn = githubBtn.cloneNode();
            getStartBtn.attr({
              text: 'Get Started',
              pos: [1720, 1500]
            });
            fglayer.append(getStartBtn);
            registerButton(getStartBtn, window.location + 'zh-cn/index');

            getStartBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 500,
              fill: 'forwards',
              delay: 500
            });

            var demoBtn = githubBtn.cloneNode();
            demoBtn.attr({
              text: 'Demo',
              pos: [1270, 1500]
            });
            fglayer.append(demoBtn);

            registerButton(demoBtn, '/demo');

            demoBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 500,
              fill: 'forwards'
            });
            return [githubBtn, giteeBtn, getStartBtn, demoBtn];
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
            button.on('touchend', btnPressUp);

            if (typeof link === 'string') {
              button.on('click', function (evt) {
                scene.removeLayer(fglayer);
                coverpage.remove();
                window.removeEventListener('resize', _fixMobile);
                if (scene[_onScroll]) {
                  window.removeEventListener('scroll', scene[_onScroll]);
                }
                document.documentElement.style.cursor = 'default';
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

          fixMobile = function fixMobile() {
            scene.updateViewport();

            var _scene$viewport = _slicedToArray(scene.viewport, 1),
                width = _scene$viewport[0];

            if (width <= 480) {
              var _fglayer$canvas$style = fglayer.canvas.style,
                  w = _fglayer$canvas$style.width,
                  h = _fglayer$canvas$style.height;

              fglayer.canvas.style.width = parseInt(w, 10) * 2 + 'px';
              fglayer.canvas.style.height = parseInt(h, 10) * 2 + 'px';
            }
            if (maxScroll != null) {
              maxScroll = calculateScroll();
            }
          };

          document.querySelector('main').style.display = '';
          loadingHint = document.createElement('div');

          loadingHint.id = 'loadingHint';
          loadingHint.style.color = 'white';
          loadingHint.style.zIndex = '999999';
          loadingHint.innerHTML = 'loading';
          loadingHint.style.position = 'fixed';
          loadingHint.style.top = '50%';
          loadingHint.style.left = '50%';
          loadingHint.style.transform = 'translate(-50%, -50%)';
          document.body.appendChild(loadingHint);

          _onScroll = Symbol('onScroll');
          _spritejs = spritejs, Scene = _spritejs.Scene, Sprite = _spritejs.Sprite, Group = _spritejs.Group, Label = _spritejs.Label, Path = _spritejs.Path;
          scene = new Scene('#coverpage', {
            // viewport: ['auto', 'auto'],
            resolution: [3840, 2160],
            stickMode: 'width'
          });
          coverpage = document.querySelector('#coverpage');
          fglayer = scene.layer('fglayer', {
            renderMode: 'repaintAll'
          });
          maxScroll = null;
          // 适配移动端

          fixMobile();

          _fixMobile = _.debounce(fixMobile, 300);


          window.addEventListener('resize', _fixMobile);

          animations = [];

          // 预加载资源

          _context6.next = 32;
          return scene.preload(['https://p5.ssl.qhimg.com/t01f47a319aebf27174.png', 'https://s3.ssl.qhres.com/static/a6a7509c33a290a6.json']);

        case 32:

          document.body.removeChild(loadingHint);

          requestId = null;
          _context6.next = 36;
          return showLogoText('spritejs', [1108, 482], [0, 256, 500, 760, 848, 1078, 1286, 1488], 200);

        case 36:
          _context6.next = 38;
          return showIntroText('跨平台绘图对象模型');

        case 38:
          text = _context6.sent;
          buttons = showButtons();
          _context6.next = 42;
          return showHuanHuan();

        case 42:
          huanhuan = _context6.sent;
          _context6.next = 45;
          return showGuanGuan();

        case 45:
          guanguan = _context6.sent;
          _context6.next = 48;
          return showMore();

        case 48:
          more = _context6.sent;


          more.c1 = function () {
            this.attr('bgcolor', 'green');
          };
          more.c2 = function () {
            this.attr('bgcolor', 'red');
          };
          featureGroup = showFeatures();
          scrolled = false;
          features = document.getElementById('features');

          maxScroll = calculateScroll();

          more[0].on('mouseenter', function () {
            autoScroll(maxScroll, 1000);
          });

          scene[_onScroll] = _.throttle(function (evt) {
            var yOffset = window.pageYOffset || document.documentElement.scrollTop;
            if (yOffset < 0) return;

            if (!scrolled && yOffset) {
              scrolled = true;
              hideSprites([text].concat(_toConsumableArray(buttons), _toConsumableArray(more)));
              guanguan.attr({
                textures: ['guanguan3.png']
              });
            } else if (scrolled && yOffset === 0) {
              scrolled = false;
              showSprites([text].concat(_toConsumableArray(buttons), _toConsumableArray(more)));
              guanguan.attr({
                textures: ['guanguan1.png']
              });
            }

            if (yOffset >= maxScroll && coverpage.style.position !== 'absolute') {
              coverpage.style.position = 'absolute';
              coverpage.style.top = maxScroll + 'px';
              guanguan.attr({
                textures: ['guanguan1.png']
              });
            } else if (yOffset < maxScroll && coverpage.style.position === 'absolute') {
              coverpage.style.position = 'fixed';
              coverpage.style.top = '0';
              guanguan.attr({
                textures: ['guanguan3.png']
              });
            }

            if (yOffset > coverpage.clientHeight + 0.5 * features.clientHeight) {
              if (fglayer.timeline.playbackRate > 0) {
                fglayer.timeline.playbackRate = 0;
                animations.forEach(function (anim) {
                  anim.pause();
                });
              }
            } else if (fglayer.timeline.playbackRate === 0) {
              fglayer.timeline.playbackRate = 1;
              animations.forEach(function (anim) {
                anim.play();
              });
            }

            var p = Math.min(maxScroll, yOffset) / maxScroll;
            var x1 = 2380 - 1400 * p * p,
                x2 = 1080 + 1900 * p * p;

            if (p < 0 || p > 1) {
              return;
            }

            // p = 0.588
            // x1 = 1896
            // x2 = 1736
            // x2e = 1244
            // x1e = 916

            if (x2 - x1 > 0 && x2 - x1 !== featureGroup._clipDX) {
              featureGroup._clipDX = x2 - x1;
              var l = 916 - (1896 - x1),
                  r = 916 + x2 - 1736;
              var d = 'M' + l + ',0L' + r + ',0L' + r + ',' + 930 + 'L' + l + ',930z';
              featureGroup.attr({
                clip: { d: d }
              });
            } else if (x2 - x1 <= 0) {
              featureGroup.attr({
                clip: { d: 'M0,0L0,0L0,0L0,0z' }
              });
            }
            guanguan.attr({
              x: x1
            });
            huanhuan.attr({
              x: x2
            });
          }, 16);
          window.addEventListener('scroll', scene[_onScroll]);

        case 58:
        case 'end':
          return _context6.stop();
      }
    }
  }, _callee6, this);
}))();