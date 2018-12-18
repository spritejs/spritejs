"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDebugToolsObserver = setDebugToolsObserver;
exports.removeDebugToolsObserver = removeDebugToolsObserver;
exports._debugger = void 0;

var _sprite = _interopRequireDefault(require("../../sprite"));

var _debugToolsHandler = Symbol('debugToolsHandler');

var _debugToolsOpened = false;
var _debugger = {
  selectedSprite: null
};
exports._debugger = _debugger;

function setDebugToolsObserver(scene, layer) {
  var observer, mouseTip, tipEl, debugLayer;
  layer[_debugToolsHandler] = layer[_debugToolsHandler] || {};

  layer[_debugToolsHandler].initObserver = function () {
    var handler;
    debugLayer = scene.layer('__debuglayer__');
    debugLayer.canvas.style.background = 'transparent';
    debugLayer.zIndex = 2147483647;

    function hideMouseTip() {
      if (_debugger.selectedSprite) {
        _debugger.selectedSprite.off('update', handler);

        _debugger.selectedSprite = null;
        var event = new CustomEvent('spritejs: observer', {
          detail: ''
        });
        document.dispatchEvent(event);

        if (tipEl) {
          tipEl.attr('opacity', 0);
        }
      }
    }

    observer = function observer(evt) {
      var sprites = evt.targetSprites;

      if (sprites.length) {
        var sprite = sprites[0];

        if (sprite) {
          if (_debugger.selectedSprite === sprite) {
            return;
          }

          if (_debugger.selectedSprite) {
            var _event = new CustomEvent('spritejs: observer', {
              detail: ''
            });

            document.dispatchEvent(_event);

            _debugger.selectedSprite.off('update', handler);
          }

          var event = new CustomEvent('spritejs: observer', {
            detail: sprite.attr()
          });
          document.dispatchEvent(event);

          var applyObserver = function applyObserver(sprite) {
            var event = new CustomEvent('spritejs: observer', {
              detail: sprite.attr()
            });
            document.dispatchEvent(event);
            setMouseTip(sprite);
          };

          handler = function handler(evt) {
            applyObserver(evt.target);
          };

          applyObserver(sprite);
          sprite.on('update', handler);
          _debugger.selectedSprite = sprite;
          evt.stopDispatch();
        }
      } else {
        hideMouseTip();
      }
    };

    layer.on('click', observer);

    function setMouseTip(sprite) {
      var renderRect = sprite.renderRect;

      if (!tipEl) {
        tipEl = new _sprite.default();
        tipEl.attr({
          zIndex: Infinity,
          bgcolor: 'rgba(0, 0, 0, 0.3)'
        });
        debugLayer.append(tipEl);
      }

      tipEl.attr({
        pos: [renderRect[0], renderRect[1]],
        size: [renderRect[2], renderRect[3]]
      });
    }

    mouseTip = function mouseTip(evt) {
      if (_debugger.selectedSprite) {
        return;
      }

      var sprite = evt.targetSprites[0];

      if (sprite) {
        setMouseTip(sprite);
      } else {
        debugLayer.remove(tipEl);
        tipEl = null;
      }
    };

    layer.on('mousemove', mouseTip);
    _debugToolsOpened = true;
  };

  layer[_debugToolsHandler].removeObserver = function () {
    if (observer) {
      layer.off('click', observer);
      observer = null;
    }

    if (mouseTip) {
      layer.off('mousemove', mouseTip);
      mouseTip = null;
    }

    if (tipEl) {
      layer.remove(tipEl);
      tipEl = null;
    }

    if (debugLayer) {
      scene.removeLayer(debugLayer);
    }

    _debugger.selectedSprite = null;
    _debugToolsOpened = false;
  };

  if (_debugToolsOpened) {
    layer[_debugToolsHandler].initObserver();
  }

  layer[_debugToolsHandler].attrChange = function (evt) {
    var _evt$detail = evt.detail,
        key = _evt$detail.key,
        value = _evt$detail.value;

    if (_debugger.selectedSprite) {
      var sprite = _debugger.selectedSprite;
      var keys = key.split('.');
      var prop = keys[1];

      if (keys.length === 2) {
        /* eslint-disable no-empty */
        try {
          sprite.attr(prop, value);
        } catch (ex) {}
        /* eslint-enable no-empty */

      } else {
        var attr = sprite.attr(prop);

        for (var i = 2; i < keys.length - 1; i++) {
          attr[keys[i]] = attr[keys[i]] || {};
        }

        attr[keys[keys.length - 1]] = value;
        /* eslint-disable no-empty */

        try {
          sprite.attr(prop, attr);
        } catch (ex) {}
        /* eslint-enable no-empty */

      }
    }
  };

  var debugToolsHandler = layer[_debugToolsHandler];
  document.addEventListener('spritejs: devtools-opened', debugToolsHandler.initObserver);
  document.addEventListener('spritejs: devtools-closed', debugToolsHandler.removeObserver);
  document.addEventListener('spritejs: attr-change', debugToolsHandler.attrChange);
}

function removeDebugToolsObserver(layer) {
  var debugToolsHandler = layer[_debugToolsHandler];

  if (debugToolsHandler) {
    document.removeEventListener('spritejs: devtools-opened', debugToolsHandler.initObserver);
    document.removeEventListener('spritejs: devtools-closed', debugToolsHandler.removeObserver);
    document.removeEventListener('spritejs: attr-change', debugToolsHandler.attrChange);
  }
}