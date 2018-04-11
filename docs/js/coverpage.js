'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

document.querySelector('.cover.show').style.background = 'linear-gradient(to left bottom, hsl(101, 100%, 85%) 0%,hsl(21, 100%, 85%) 100%)';

var _spritejs = spritejs,
    Scene = _spritejs.Scene,
    Sprite = _spritejs.Sprite;

var scene = new Scene('#coverpage', { viewport: ['auto', 'auto'] });

var _scene$viewport$map = scene.viewport.map(function (i) {
  return i * 2;
}),
    _scene$viewport$map2 = _slicedToArray(_scene$viewport$map, 2),
    layerWidth = _scene$viewport$map2[0],
    layerHeight = _scene$viewport$map2[1];

scene.resolution = [layerWidth, layerHeight];

scene.preload({
  id: 'logo',
  src: 'https://p0.ssl.qhimg.com/t01303199a8936edb79.png'
}, {
  id: 'logo-lemon',
  src: 'https://p4.ssl.qhimg.com/t01b299bd5c2ef4b627.png'
}).then(function () {
  function getScale(width) {
    return Math.min(1.5, width * 0.8 / 510);
  }

  var fglayer = scene.layer('fglayer');
  var logo = new Sprite('logo');
  logo.attr({
    anchor: [0.5, 1],
    pos: [layerWidth / 2, layerHeight - 30],
    scale: getScale(layerWidth)
  });
  fglayer.append(logo);

  var _logo$renderRect = _slicedToArray(logo.renderRect, 4),
      left = _logo$renderRect[0],
      top = _logo$renderRect[1],
      width = _logo$renderRect[2],
      height = _logo$renderRect[3];

  var logoLemon = new Sprite('logo-lemon');
  logoLemon.attr({
    anchor: [0.5, 0.5],
    pos: [left + 0.458 * width, 30],
    scale: getScale(layerWidth),
    rotate: 90
  });

  fglayer.append(logoLemon);
  logoLemon.animate([{ y: 30 }, { y: top + 0.23 * height }], {
    duration: 800,
    fill: 'forwards',
    easing: 'ease-in'
  }).finished.then(function () {
    logoLemon.animate([{ rotate: 90 }, { rotate: 360 }], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in'
    });
  });

  function updateLogo() {
    var _scene$viewport$map3 = scene.viewport.map(function (i) {
      return i * 2;
    }),
        _scene$viewport$map4 = _slicedToArray(_scene$viewport$map3, 2),
        layerWidth = _scene$viewport$map4[0],
        layerHeight = _scene$viewport$map4[1];

    scene.resolution = [layerWidth, layerHeight];
    var scale = getScale(layerWidth);
    logo.attr({
      pos: [layerWidth / 2, layerHeight - 30],
      scale: scale
    });

    var _logo$renderRect2 = _slicedToArray(logo.renderRect, 4),
        left = _logo$renderRect2[0],
        top = _logo$renderRect2[1],
        width = _logo$renderRect2[2],
        height = _logo$renderRect2[3];

    logoLemon.attr({
      pos: [left + 0.458 * width, top + 0.23 * height],
      scale: scale
    });
  }

  window.onresize = updateLogo;
});