import Sprite from '../../sprite';
const _debugToolsHandler = Symbol('debugToolsHandler');
let _debugToolsOpened = false;

export const _debugger = {
  selectedSprite: null,
};

export function setDebugToolsObserver(scene, layer) {
  let observer,
    mouseTip,
    tipEl,
    debugLayer;

  layer[_debugToolsHandler] = layer[_debugToolsHandler] || {};
  layer[_debugToolsHandler].initObserver = () => {
    let handler;

    debugLayer = scene.layer('__debuglayer__');
    debugLayer.canvas.style.background = 'transparent';
    debugLayer.zIndex = 2147483647;

    function hideMouseTip() {
      if(_debugger.selectedSprite) {
        _debugger.selectedSprite.off('update', handler);
        _debugger.selectedSprite = null;
        const event = new CustomEvent('spritejs: observer', {detail: ''});
        document.dispatchEvent(event);
        if(tipEl) {
          tipEl.attr('opacity', 0);
        }
      }
    }

    observer = (evt) => {
      const sprites = evt.targetSprites;
      if(sprites.length) {
        const sprite = sprites[0];
        if(sprite) {
          if(_debugger.selectedSprite === sprite) {
            return;
          } if(_debugger.selectedSprite) {
            const event = new CustomEvent('spritejs: observer', {detail: ''});
            document.dispatchEvent(event);
            _debugger.selectedSprite.off('update', handler);
          }

          const event = new CustomEvent('spritejs: observer', {detail: sprite.attr()});
          document.dispatchEvent(event);

          const applyObserver = (sprite) => {
            const event = new CustomEvent('spritejs: observer', {detail: sprite.attr()});
            document.dispatchEvent(event);
            setMouseTip(sprite);
          };

          handler = (evt) => {
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
      const renderRect = sprite.renderRect;
      if(!tipEl) {
        tipEl = new Sprite();
        tipEl.attr({
          zIndex: Infinity,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
        });
        debugLayer.append(tipEl);
      }
      tipEl.attr({
        pos: [renderRect[0], renderRect[1]],
        size: [renderRect[2], renderRect[3]],
      });
    }

    mouseTip = (evt) => {
      if(_debugger.selectedSprite) {
        return;
      }

      const sprite = evt.targetSprites[0];
      if(sprite) {
        setMouseTip(sprite);
      } else {
        debugLayer.remove(tipEl);
        tipEl = null;
      }
    };
    layer.on('mousemove', mouseTip);
    _debugToolsOpened = true;
  };

  layer[_debugToolsHandler].removeObserver = () => {
    if(observer) {
      layer.off('click', observer);
      observer = null;
    }
    if(mouseTip) {
      layer.off('mousemove', mouseTip);
      mouseTip = null;
    }
    if(tipEl) {
      layer.remove(tipEl);
      tipEl = null;
    }
    if(debugLayer) {
      scene.removeLayer(debugLayer);
    }
    _debugger.selectedSprite = null;
    _debugToolsOpened = false;
  };

  if(_debugToolsOpened) {
    layer[_debugToolsHandler].initObserver();
  }

  layer[_debugToolsHandler].attrChange = (evt) => {
    const {key, value} = evt.detail;
    if(_debugger.selectedSprite) {
      const sprite = _debugger.selectedSprite;
      const keys = key.split('.');
      const prop = keys[1];

      if(keys.length === 2) {
        /* eslint-disable no-empty */
        try {
          sprite.attr(prop, value);
        } catch (ex) {

        }
        /* eslint-enable no-empty */
      } else {
        const attr = sprite.attr(prop);
        for(let i = 2; i < keys.length - 1; i++) {
          attr[keys[i]] = attr[keys[i]] || {};
        }
        attr[keys[keys.length - 1]] = value;
        /* eslint-disable no-empty */
        try {
          sprite.attr(prop, attr);
        } catch (ex) {

        }
        /* eslint-enable no-empty */
      }
    }
  };

  const debugToolsHandler = layer[_debugToolsHandler];
  document.addEventListener('spritejs: devtools-opened', debugToolsHandler.initObserver);
  document.addEventListener('spritejs: devtools-closed', debugToolsHandler.removeObserver);
  document.addEventListener('spritejs: attr-change', debugToolsHandler.attrChange);
}

export function removeDebugToolsObserver(layer) {
  const debugToolsHandler = layer[_debugToolsHandler];
  if(debugToolsHandler) {
    document.removeEventListener('spritejs: devtools-opened', debugToolsHandler.initObserver);
    document.removeEventListener('spritejs: devtools-closed', debugToolsHandler.removeObserver);
    document.removeEventListener('spritejs: attr-change', debugToolsHandler.attrChange);
  }
}