var spritejs =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paper2D", function() { return Paper2D; });
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "math", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["math"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "use", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["use"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "querySelector", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["querySelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylesheet", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["BaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Path"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNodeType", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["isValidNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["createNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Easings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Timeline"]; });

/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _sprite__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(130);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _resource__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(100);
/* harmony import */ var _platform_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(131);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return _platform_devtools__WEBPACK_IMPORTED_MODULE_7__["_debugger"]; });










class Scene extends _scene__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(container, options = {}) {
    super(container, options);

    if (options.useDocumentCSS) {
      _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["stylesheet"].fromDocumentCSS();
    }
  }

}

const {
  setDeprecation
} = _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["utils"];

if (_platform__WEBPACK_IMPORTED_MODULE_6__["shim"]) {
  Object(_platform__WEBPACK_IMPORTED_MODULE_6__["shim"])();
}

Object(_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"])('layer', _layer__WEBPACK_IMPORTED_MODULE_3__["default"], true);
Object(_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"])('scene', Scene, true);

function Paper2D(...args) {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.');
  return new Scene(...args);
}

const version = "2.29.4";


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Easings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"]; });

/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgPath", function() { return svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "math", function() { return sprite_math__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _core_basesprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _core_basesprite__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _core_sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _core_sprite__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _core_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _core_label__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _core_layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _core_layer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _core_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _core_group__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _core_basenode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _core_basenode__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _core_path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _core_path__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _core_batch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Batch", function() { return _core_batch__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _core_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "use", function() { return _core_use__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47);
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51);
/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "querySelector", function() { return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["querySelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() { return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["querySelectorAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["registerNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNodeType", function() { return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["isValidNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["createNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["createElement"]; });

/* harmony import */ var _modules_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylesheet", function() { return _modules_css__WEBPACK_IMPORTED_MODULE_17__["default"]; });













 // load modules






const Color = _utils__WEBPACK_IMPORTED_MODULE_3__["Color"];


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_timeline__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return _effect__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return _easing__WEBPACK_IMPORTED_MODULE_2__["Easings"]; });

/* harmony import */ var _animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return _animator__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


const _nowtime = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNowTime"])();

const defaultOptions = {
  originTime: 0,
  playbackRate: 1.0
};

const _timeMark = Symbol('timeMark'),
      _playbackRate = Symbol('playbackRate'),
      _timers = Symbol('timers'),
      _originTime = Symbol('originTime'),
      _setTimer = Symbol('setTimer'),
      _parent = Symbol('parent');

class Timeline {
  constructor(options, parent) {
    if (options instanceof Timeline) {
      parent = options;
      options = {};
    }

    options = Object.assign({}, defaultOptions, options);

    if (parent) {
      this[_parent] = parent;
    }

    const nowtime = options.nowtime || _nowtime;

    if (!parent) {
      const createTime = nowtime();
      Object.defineProperty(this, 'globalTime', {
        get() {
          return nowtime() - createTime;
        }

      });
    } else {
      Object.defineProperty(this, 'globalTime', {
        get() {
          return parent.currentTime;
        }

      });
    } // timeMark records the reference points on timeline
    // Each time we change the playbackRate or currentTime or entropy
    // A new timeMark will be generated
    // timeMark sorted by entropy
    // If you reset entropy, all the timeMarks behind the new entropy
    // should be dropped


    this[_timeMark] = [{
      globalTime: this.globalTime,
      localTime: -options.originTime,
      entropy: -options.originTime,
      playbackRate: options.playbackRate,
      globalEntropy: 0
    }];

    if (this[_parent]) {
      this[_timeMark][0].globalEntropy = this[_parent].entropy;
    }

    this[_originTime] = options.originTime;
    this[_playbackRate] = options.playbackRate;
    this[_timers] = new Map();
  }

  get parent() {
    return this[_parent];
  }

  get lastTimeMark() {
    return this[_timeMark][this[_timeMark].length - 1];
  }

  markTime({
    time = this.currentTime,
    entropy = this.entropy,
    playbackRate = this.playbackRate
  } = {}) {
    const timeMark = {
      globalTime: this.globalTime,
      localTime: time,
      entropy,
      playbackRate,
      globalEntropy: this.globalEntropy
    };

    this[_timeMark].push(timeMark);
  }

  get currentTime() {
    const {
      localTime,
      globalTime
    } = this.lastTimeMark;
    return localTime + (this.globalTime - globalTime) * this.playbackRate;
  }

  set currentTime(time) {
    const from = this.currentTime,
          to = time,
          timers = this[_timers];
    this.markTime({
      time
    });
    [...timers].forEach(([id, timer]) => {
      if (!timers.has(id)) return; // Need check because it maybe clearTimeout by former handler().

      const {
        isEntropy,
        delay,
        heading
      } = timer.time,
            {
        handler,
        startTime
      } = timer;

      if (!isEntropy) {
        const endTime = startTime + delay;

        if (delay === 0 || heading !== false && (to - from) * delay <= 0 || from <= endTime && endTime <= to || from >= endTime && endTime >= to) {
          handler();
          this.clearTimeout(id);
        }
      } else if (delay === 0) {
        handler();
        this.clearTimeout(id);
      }
    });
    this.updateTimers();
  } // Both currentTime and entropy should be influenced by playbackRate.
  // If current playbackRate is negative, the currentTime should go backwards
  // while the entropy remain to go forwards.
  // Both of the initial values is set to -originTime


  get entropy() {
    const {
      entropy,
      globalEntropy
    } = this.lastTimeMark;
    return entropy + Math.abs((this.globalEntropy - globalEntropy) * this.playbackRate);
  }

  get globalEntropy() {
    return this[_parent] ? this[_parent].entropy : this.globalTime;
  } // get globalTime() {
  //   if(this[_parent]) {
  //     return this[_parent].currentTime;
  //   }
  //   return nowtime();
  // }
  // change entropy will NOT cause currentTime changing but may influence the pass
  // and the future of the timeline. (It may change the result of seek***Time)
  // While entropy is set, all the marks behind will be droped


  set entropy(entropy) {
    if (this.entropy > entropy) {
      const idx = this.seekTimeMark(entropy);
      this[_timeMark].length = idx + 1;
    }

    this.markTime({
      entropy
    });
    this.updateTimers();
  }

  fork(options) {
    return new Timeline(options, this);
  }

  seekGlobalTime(seekEntropy) {
    const idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];
    const {
      entropy,
      playbackRate,
      globalTime
    } = timeMark;
    return globalTime + (seekEntropy - entropy) / Math.abs(playbackRate);
  }

  seekLocalTime(seekEntropy) {
    const idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];
    const {
      localTime,
      entropy,
      playbackRate
    } = timeMark;

    if (playbackRate > 0) {
      return localTime + (seekEntropy - entropy);
    }

    return localTime - (seekEntropy - entropy);
  }

  seekTimeMark(entropy) {
    const timeMark = this[_timeMark];
    let l = 0,
        r = timeMark.length - 1;

    if (entropy <= timeMark[l].entropy) {
      return l;
    }

    if (entropy >= timeMark[r].entropy) {
      return r;
    }

    let m = Math.floor((l + r) / 2); // binary search

    while (m > l && m < r) {
      if (entropy === timeMark[m].entropy) {
        return m;
      }

      if (entropy < timeMark[m].entropy) {
        r = m;
      } else if (entropy > timeMark[m].entropy) {
        l = m;
      }

      m = Math.floor((l + r) / 2);
    }

    return l;
  }

  get playbackRate() {
    return this[_playbackRate];
  }

  set playbackRate(rate) {
    if (rate !== this.playbackRate) {
      this.markTime({
        playbackRate: rate
      });
      this[_playbackRate] = rate;
      this.updateTimers();
    }
  }

  get paused() {
    if (this.playbackRate === 0) return true;
    let parent = this.parent;

    while (parent) {
      if (parent.playbackRate === 0) return true;
      parent = parent.parent;
    }

    return false;
  }

  updateTimers() {
    const timers = [...this[_timers]];
    timers.forEach(([id, timer]) => {
      this[_setTimer](timer.handler, timer.time, id);
    });
  }

  clearTimeout(id) {
    const timer = this[_timers].get(id);

    if (timer && timer.timerID != null) {
      if (this[_parent]) {
        this[_parent].clearTimeout(timer.timerID);
      } else {
        clearTimeout(timer.timerID);
      }
    }

    this[_timers].delete(id);
  }

  clearInterval(id) {
    return this.clearTimeout(id);
  }

  clear() {
    // clear all running timers
    const timers = this[_timers];
    [...timers.keys()].forEach(id => {
      this.clearTimeout(id);
    });
  }
  /*
    setTimeout(func, {delay: 100, isEntropy: true})
    setTimeout(func, {entropy: 100})
    setTimeout(func, 100})
   */


  setTimeout(handler, time = {
    delay: 0
  }) {
    return this[_setTimer](handler, time);
  }

  setInterval(handler, time = {
    delay: 0
  }) {
    const that = this;

    const id = this[_setTimer](function step() {
      // reset timer before handler cause we may clearTimeout in handler()
      that[_setTimer](step, time, id);

      handler();
    }, time);

    return id;
  }

  [_setTimer](handler, time, id = Symbol('timerID')) {
    time = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatDelay"])(time);

    const timer = this[_timers].get(id);

    let delay,
        timerID = null,
        startTime,
        startEntropy;

    if (timer) {
      this.clearTimeout(id);

      if (time.isEntropy) {
        delay = (time.delay - (this.entropy - timer.startEntropy)) / Math.abs(this.playbackRate);
      } else {
        delay = (time.delay - (this.currentTime - timer.startTime)) / this.playbackRate;
      }

      startTime = timer.startTime;
      startEntropy = timer.startEntropy;
    } else {
      delay = time.delay / (time.isEntropy ? Math.abs(this.playbackRate) : this.playbackRate);
      startTime = this.currentTime;
      startEntropy = this.entropy;
    }

    const parent = this[_parent],
          globalTimeout = parent ? parent.setTimeout.bind(parent) : setTimeout;
    const heading = time.heading; // console.log(heading, parent, delay)

    if (!parent && heading === false && delay < 0) {
      delay = Infinity;
    } // if playbackRate is zero, delay will be infinity.
    // For wxapp bugs, cannot use Number.isFinite yet.


    if (isFinite(delay) || parent) {
      // eslint-disable-line no-restricted-globals
      delay = Math.ceil(delay);

      if (globalTimeout !== setTimeout) {
        delay = {
          delay,
          heading
        };
      }

      timerID = globalTimeout(() => {
        this[_timers].delete(id);

        handler();
      }, delay);
    }

    this[_timers].set(id, {
      timerID,
      handler,
      time,
      startTime,
      startEntropy
    });

    return id;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNowTime", function() { return createNowTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDelay", function() { return formatDelay; });
function createNowTime(syncLocker = true) {
  let nowtime = null;

  if (Date.now) {
    nowtime = Date.now;
  } else {
    nowtime = () => new Date().getTime();
  }

  return nowtime;
}
/*
  delay = 100 -> delay = {delay: 100}
  delay = {entropy: 100} -> delay = {delay: 100, isEntropy: true}
 */

function formatDelay(delay) {
  if (typeof delay === 'number') {
    delay = {
      delay
    };
  } else if ('entropy' in delay) {
    delay = {
      delay: delay.entropy,
      isEntropy: true
    };
  }

  return delay;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // s - startFrame, e - endFrame
  default(from, to, p, s, e) {
    if (typeof from === 'number' && typeof to === 'number') {
      return from + (p - s) / (e - s) * (to - from);
    }

    if (p - s > e - p) {
      return to;
    }

    return from;
  }

});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return Easings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEasing", function() { return parseEasing; });
const BezierEasing = __webpack_require__(7);

const bezierFuncCache = new Map();

function getBezierEasing(...value) {
  let easing = bezierFuncCache.get(value);

  if (easing) {
    return easing;
  }

  easing = BezierEasing(...value);
  bezierFuncCache.set(value, easing);
  return easing;
}

function getStepsEasing(step, pos = 'end') {
  return function (p, frames) {
    for (let i = 1; i < frames.length; i++) {
      const {
        offset
      } = frames[i];

      if (p <= offset) {
        const start = frames[i - 1].offset,
              end = offset;
        const fp = (p - start) / (end - start),
              d = 1 / step;
        let t = fp / d;

        if (pos === 'end') {
          t = Math.floor(t);
        } else {
          t = Math.ceil(t);
        }

        return d * t * (end - start) + start;
      }
    }

    return 0;
  };
}

function parseEasingStr(easingStr) {
  let pattern = /^cubic-bezier\((.*)\)/,
      matched = easingStr.match(pattern);

  if (matched) {
    let value = matched[1].trim();
    value = value.split(',').map(v => parseFloat(v.trim()));
    return getBezierEasing(...value);
  }

  pattern = /^steps\((.*)\)/;
  matched = easingStr.match(pattern);

  if (matched) {
    let value = matched[1].trim();
    value = value.split(',').map(v => v.trim());
    const [step, pos] = value;
    return getStepsEasing(parseInt(step, 10), pos);
  }

  return easingStr;
}

const Easings = {
  linear(p) {
    return p;
  },

  ease: getBezierEasing(0.25, 0.1, 0.25, 1),
  'ease-in': getBezierEasing(0.42, 0, 1, 1),
  'ease-out': getBezierEasing(0, 0, 0.58, 1),
  'ease-in-out': getBezierEasing(0.42, 0, 0.58, 1),
  // 'step-start': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     ret = offset
  //     if(p < offset){
  //       break
  //     }
  //   }
  //   return ret
  // },
  // 'step-end': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     if(p < offset){
  //       break
  //     }
  //     ret = offset
  //   }
  //   return ret
  // }
  'step-start': getStepsEasing(1, 'start'),
  'step-end': getStepsEasing(1, 'end')
};

function parseEasing(easing) {
  if (typeof easing === 'string') {
    if (!Easings[easing]) {
      easing = parseEasingStr(easing);
    } else {
      // load default Easing
      easing = Easings[easing];
    }
  } else if (easing.type === 'cubic-bezier') {
    easing = getBezierEasing(...easing.value);
  } else if (easing.type === 'steps') {
    easing = getStepsEasing(easing.step, easing.pos);
  }

  return easing;
}



/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




const _timing = Symbol('timing'),
      _keyframes = Symbol('keyframes'),
      _initState = Symbol('initState'),
      _readyDefer = Symbol('readyDefer'),
      _finishedDefer = Symbol('finishedDefer'),
      _effects = Symbol('effects'),
      _activeReadyTimer = Symbol('activeReadyTimer'),
      _activeFinishTimer = Symbol('activeFinishTimer'),
      _removeDefer = Symbol('removeDefer');
/**
  easing: {
    type: 'cubic-bezier',
    value: [...]
  }
  easing: {
    type: 'steps',
    step: 1,
    pos: 'end'
  }
 */


const defaultTiming = {
  delay: 0,
  endDelay: 0,
  fill: 'auto',
  iterations: 1.0,
  playbackRate: 1.0,
  direction: 'normal',
  easing: 'linear',
  effect: null
};
/**
  animation: play --> delay --> effect --> endDelay
  playState: idle --> pending --> running --> pending --> finished
 */

/* harmony default export */ __webpack_exports__["default"] = (class {
  constructor(initState, keyframes, timing) {
    if (Array.isArray(initState)) {
      // 如果 initState 缺省，默认 keyframes 的第一帧为 initState
      [initState, keyframes, timing] = [initState[0], initState, keyframes];
    }

    if (typeof timing === 'number') {
      timing = {
        duration: timing
      };
    }

    this[_timing] = Object.assign({}, defaultTiming, timing);
    this[_timing].easing = Object(_easing__WEBPACK_IMPORTED_MODULE_2__["parseEasing"])(this[_timing].easing);
    this[_keyframes] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["calculateFramesOffset"])(keyframes);
    const lastFrame = this[_keyframes][this[_keyframes].length - 1];
    this[_initState] = {}; // 初始状态

    Object.keys(lastFrame).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(initState, key)) {
        if (key !== 'easing' && key !== 'offset') {
          this[_initState][key] = initState[key];
        }
      }
    }); // 补齐参数

    this[_keyframes] = this[_keyframes].map(frame => {
      return Object.assign({}, this[_initState], frame);
    });

    if (this[_keyframes][0].offset !== 0) {
      // 要补第一帧
      this[_keyframes].unshift(Object.assign({}, this[_initState], {
        offset: 0
      }));
    }

    if (lastFrame.offset < 1) {
      // 要补最后一帧
      this[_keyframes].push(Object.assign({}, lastFrame, {
        offset: 1
      }));
    }

    this[_effects] = {};
    this.timeline = null; // idle, no effect
  }

  get playbackRate() {
    return this[_timing].playbackRate;
  }

  set playbackRate(rate) {
    if (this.timeline) {
      this.timeline.playbackRate = rate;
    }

    this[_timing].playbackRate = rate;
  }

  get playState() {
    const timeline = this.timeline,
          {
      iterations,
      duration,
      endDelay
    } = this[_timing];
    let state = 'running';

    if (timeline == null) {
      state = 'idle';
    } else if (timeline.paused) {
      state = 'paused';
    } else if (timeline.currentTime < 0) {
      // 开始 pending
      state = 'pending';
    } else {
      const ed = timeline.currentTime - iterations * duration;

      if (ed > 0 && ed < endDelay) {
        // 结束 pending
        state = 'pending';
      } else if (ed >= endDelay) {
        state = 'finished';
      }
    }

    return state;
  }

  get progress() {
    if (!this.timeline) return 0;
    const {
      duration,
      iterations
    } = this[_timing];
    const timeline = this.timeline,
          playState = this.playState;
    let p;

    if (playState === 'idle') {
      p = 0;
    } else if (playState === 'paused' && timeline.currentTime < 0) {
      p = 0;
    } else if (playState === 'pending') {
      if (timeline.currentTime < 0) {
        p = 0;
      } else {
        const time = timeline.seekLocalTime(iterations * duration);
        p = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["periodicity"])(time, duration)[1] / duration;
      }
    } else if (playState === 'running' || playState === 'paused') {
      p = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["periodicity"])(timeline.currentTime, duration)[1] / duration;
    }

    if (playState === 'finished') {
      p = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["periodicity"])(iterations, 1)[1];
    }

    return p;
  }

  get frame() {
    const playState = this.playState,
          initState = this[_initState],
          {
      fill
    } = this[_timing];

    if (playState === 'idle') {
      return initState;
    }

    const {
      currentTime
    } = this.timeline,
          keyframes = this[_keyframes].slice(0);

    const {
      p,
      inverted
    } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getProgress"])(this.timeline, this[_timing], this.progress);
    let frameState = initState;

    if (currentTime < 0 && playState === 'pending') {
      // 在开始前 delay 阶段
      if (fill === 'backwards' || fill === 'both') {
        frameState = inverted ? keyframes[keyframes.length - 1] : keyframes[0];
      }
    } else if (playState !== 'pending' && playState !== 'finished' || fill === 'forwards' || fill === 'both') {
      // 不在 endDelay 或结束状态，或 forwards
      frameState = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrentFrame"])(this[_timing], keyframes, this[_effects], p);
    }

    return frameState;
  }

  get timing() {
    return this[_timing];
  }

  pause() {
    this.timeline.playbackRate = 0;
  }

  set baseTimeline(timeline) {
    this[_timing].timeline = timeline;
  }

  get baseTimeline() {
    return this[_timing].timeline;
  }

  [_activeReadyTimer]() {
    if (this[_readyDefer] && !this[_readyDefer].timerID) {
      if (this.timeline.currentTime < 0) {
        this[_readyDefer].timerID = this.timeline.setTimeout(() => {
          this[_readyDefer].resolve();

          delete this[_readyDefer];
        }, {
          delay: -this.timeline.currentTime,
          heading: false
        });
      } else {
        this[_readyDefer].timerID = this.timeline.setTimeout(() => {
          this[_readyDefer].resolve();

          delete this[_readyDefer];
        }, {
          delay: 0,
          isEntropy: true
        });
      }
    }
  }

  [_activeFinishTimer]() {
    const {
      duration,
      iterations,
      endDelay
    } = this[_timing];
    const delay = Math.ceil(duration * iterations + endDelay - this.timeline.currentTime) + 1;

    if (this[_finishedDefer] && !this[_finishedDefer].timerID) {
      this[_finishedDefer].timerID = this.timeline.setTimeout(() => {
        this[_finishedDefer].resolve();

        this[_removeDefer](_readyDefer);

        this[_removeDefer](_finishedDefer);
      }, {
        delay,
        heading: false
      });
      this[_finishedDefer].reverseTimerID = this.timeline.setTimeout(() => {
        this[_finishedDefer].resolve();

        this[_removeDefer](_readyDefer);

        this[_removeDefer](_finishedDefer);

        this.timeline = null;
      }, {
        delay: -this[_timing].delay - 1,
        heading: false
      });
    }
  }

  play() {
    if (this.playState === 'finished') {
      this.cancel();
    }

    if (this.playState === 'idle') {
      if (this.playbackRate <= 0) {
        return;
      }

      const {
        delay,
        playbackRate,
        timeline
      } = this[_timing];
      this.timeline = new sprite_timeline__WEBPACK_IMPORTED_MODULE_0__["default"]({
        originTime: delay,
        playbackRate
      }, timeline);

      this[_activeReadyTimer]();

      this[_activeFinishTimer]();
    } else if (this.playState === 'paused') {
      this.timeline.playbackRate = this.playbackRate;

      this[_activeReadyTimer]();
    }
  }

  [_removeDefer](deferID) {
    const defered = this[deferID],
          {
      timeline
    } = this;

    if (defered && timeline) {
      timeline.clearTimeout(defered.timerID);

      if (defered.reverseTimerID) {
        timeline.clearTimeout(defered.reverseTimerID);
      }
    }

    delete this[deferID];
  }

  cancel() {
    this[_removeDefer](_readyDefer);

    this[_removeDefer](_finishedDefer);

    this.timeline = null;
  }

  finish() {
    if (this.timeline) {
      this.timeline.currentTime = Infinity / this.playbackRate;
    }

    this[_removeDefer](_readyDefer);

    this[_removeDefer](_finishedDefer);
  }

  applyEffects(effects) {
    return Object.assign(this[_effects], effects);
  }

  get ready() {
    if (this[_readyDefer]) {
      return this[_readyDefer].promise;
    }

    if (this.timeline && this.timeline.currentTime >= 0) {
      if (this.playState !== 'paused') {
        return Promise.resolve();
      }
    }

    this[_readyDefer] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["defer"])();

    if (this.timeline) {
      // 已经在 pending 状态
      this[_activeReadyTimer]();
    }

    if (this[_readyDefer]) {
      return this[_readyDefer].promise;
    }

    return Promise.resolve();
  }

  get finished() {
    if (this.playState === 'finished') {
      return Promise.resolve();
    }

    if (!this[_finishedDefer]) {
      this[_finishedDefer] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["defer"])();

      if (this.timeline) {
        this[_activeFinishTimer]();
      }
    }

    return this[_finishedDefer].promise;
  }

});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "periodicity", function() { return periodicity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFramesOffset", function() { return calculateFramesOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgress", function() { return getProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentFrame", function() { return getCurrentFrame; });
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


function defer() {
  const ret = {};
  ret.promise = new Promise((resolve, reject) => {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
}
function periodicity(val, dur) {
  let t = Math.floor(val / dur);
  let v = val - t * dur;

  if (v === 0 && t > 0) {
    v = dur;
    t--;
  }

  return [t, v];
}
function calculateFramesOffset(keyframes) {
  keyframes = keyframes.slice(0);
  const firstFrame = keyframes[0],
        lastFrame = keyframes[keyframes.length - 1];
  lastFrame.offset = lastFrame.offset || 1;
  firstFrame.offset = firstFrame.offset || 0;
  let offset = 0,
      offsetFrom = -1;

  for (let i = 0; i < keyframes.length; i++) {
    const frame = keyframes[i];

    if (frame.offset != null) {
      const dis = i - offsetFrom;

      if (dis > 1) {
        const delta = (frame.offset - offset) / dis;

        for (let j = 0; j < dis - 1; j++) {
          keyframes[offsetFrom + j + 1].offset = offset + delta * (j + 1);
        }
      }

      offset = frame.offset;
      offsetFrom = i;
    }

    if (frame.easing != null) {
      frame.easing = Object(_easing__WEBPACK_IMPORTED_MODULE_0__["parseEasing"])(frame.easing);
    }

    if (i > 0) {
      const hasEasing = keyframes[i].easing != null; // 如果中间某个属性没有了，需要从前一帧复制过来

      keyframes[i] = Object.assign({}, keyframes[i - 1], keyframes[i]);

      if (!hasEasing) {
        // easing 不能复制
        delete keyframes[i].easing;
      }
    }
  }

  return keyframes;
}
function getProgress(timeline, timing, p) {
  const {
    currentTime
  } = timeline,
        {
    direction,
    duration
  } = timing;
  let inverted = false;

  if (direction === 'reverse') {
    p = 1 - p;
    inverted = true;
  } else if (direction === 'alternate' || direction === 'alternate-reverse') {
    let period = Math.floor(currentTime / duration);
    if (p === 1) period--; // period = Math.max(0, period)

    if (period % 2 ^ direction === 'alternate-reverse') {
      p = 1 - p;
      inverted = true;
    }
  }

  return {
    p,
    inverted
  };
}

function calculateFrame(previousFrame, nextFrame, effects, p) {
  const ret = {};
  Object.entries(nextFrame).forEach(([key, value]) => {
    if (key !== 'offset' && key !== 'easing') {
      const effect = effects[key] || effects.default;
      const v = effect(previousFrame[key], value, p, previousFrame.offset, nextFrame.offset);

      if (v != null) {
        ret[key] = v;
      }
    }
  });
  return ret;
}

function getCurrentFrame(timing, keyframes, effects, p) {
  const {
    easing,
    effect
  } = timing;

  if (!effect) {
    // timing.effect 会覆盖掉 Effects 和 animator.applyEffects 中定义的 effects
    effects = Object.assign({}, effects, _effect__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }

  let ret = {};
  p = easing(p, keyframes);

  for (let i = 1; i < keyframes.length; i++) {
    const frame = keyframes[i],
          offset = frame.offset;

    if (offset >= p || i === keyframes.length - 1) {
      const previousFrame = keyframes[i - 1],
            previousOffset = previousFrame.offset,
            easing = previousFrame.easing;
      let ep = p;

      if (easing) {
        const d = offset - previousOffset;
        ep = easing((p - previousOffset) / d) * d + previousOffset;
      }

      if (effect) {
        ret = effect(previousFrame, frame, ep, previousOffset, offset);
      } else {
        ret = calculateFrame(previousFrame, frame, effects, ep);
      }

      break;
    }
  }

  return ret;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _parse_svg_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _abs_svg_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _normalize_svg_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _is_svg_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);







const _initialPath = Symbol('initialPath');

const _path = Symbol('path');

const _bounds = Symbol('bounds');

const _savedPaths = Symbol('savedPaths');

const _renderProps = Symbol('renderProps');

const _beginPath = Symbol('beginPath');

class SvgPath {
  constructor(d) {
    if (!Object(_is_svg_path__WEBPACK_IMPORTED_MODULE_5__["default"])(d)) {
      throw new Error('Not an SVG path!');
    }

    this[_initialPath] = Object(_abs_svg_path__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_parse_svg_path__WEBPACK_IMPORTED_MODULE_2__["default"])(d));
    this[_path] = Object(_normalize_svg_path__WEBPACK_IMPORTED_MODULE_4__["default"])(this[_initialPath]);
    this[_bounds] = null;
    this[_savedPaths] = [];
    this[_renderProps] = {};
    this[_beginPath] = false;
  }

  save() {
    this[_savedPaths].push({
      path: this[_path],
      bounds: this[_bounds],
      renderProps: Object.assign({}, this[_renderProps])
    });

    return this;
  }

  restore() {
    if (this[_savedPaths].length) {
      const {
        path,
        bounds,
        renderProps
      } = this[_savedPaths].pop();

      this[_path] = path;
      this[_bounds] = bounds;
      this[_renderProps] = renderProps;
    }

    return this;
  }

  get bounds() {
    if (!this[_bounds]) {
      const path = this[_path];
      this[_bounds] = [0, 0, 0, 0];

      if (path.length) {
        const bounds = [Infinity, Infinity, -Infinity, -Infinity];

        for (let i = 0, l = path.length; i < l; i++) {
          const points = path[i].slice(1);

          for (let j = 0; j < points.length; j += 2) {
            if (points[j + 0] < bounds[0]) bounds[0] = points[j + 0];
            if (points[j + 1] < bounds[1]) bounds[1] = points[j + 1];
            if (points[j + 0] > bounds[2]) bounds[2] = points[j + 0];
            if (points[j + 1] > bounds[3]) bounds[3] = points[j + 1];
          }
        }

        this[_bounds] = bounds;
      }
    }

    return this[_bounds];
  }

  get size() {
    const bounds = this.bounds;
    return [bounds[2] - bounds[0], bounds[3] - bounds[1]];
  }

  get center() {
    const [x0, y0, x1, y1] = this.bounds;
    return [(x0 + x1) / 2, (y0 + y1) / 2];
  }

  get d() {
    let path = this[_path].map(p => {
      const [c, ...points] = p;
      return c + points.join();
    }).join('');

    if (this.isClosed) {
      path += 'Z';
    }

    return path;
  }

  get path() {
    return this[_path];
  }

  get isClosed() {
    const part = this[_initialPath][this[_initialPath].length - 1];
    return part && part[0] === 'Z';
  }

  isPointInPath(x, y) {
    return Object(_platform__WEBPACK_IMPORTED_MODULE_1__["isPointInPath"])(this, x, y);
  }

  isPointInStroke(x, y, {
    lineWidth = 1,
    lineCap = 'butt',
    lineJoin = 'miter'
  }) {
    if (_platform__WEBPACK_IMPORTED_MODULE_1__["isPointInStroke"]) {
      return Object(_platform__WEBPACK_IMPORTED_MODULE_1__["isPointInStroke"])(this, x, y, {
        lineWidth,
        lineCap,
        lineJoin
      });
    } // node-canvas return undefined

  }

  getPointAtLength(len) {
    return Object(_platform__WEBPACK_IMPORTED_MODULE_1__["getPointAtLength"])(this.d, len);
  }

  getTotalLength() {
    return Object(_platform__WEBPACK_IMPORTED_MODULE_1__["getTotalLength"])(this.d);
  }

  transform(...args) {
    this[_bounds] = null;
    const m = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](args);
    const commands = this[_path];
    this[_path] = commands.map(c => {
      const [cmd, ...args] = c;
      const transformed = [cmd];

      for (let i = 0; i < args.length; i += 2) {
        const x0 = args[i],
              y0 = args[i + 1];
        const [x, y] = m.transformPoint(x0, y0);
        transformed.push(x, y);
      }

      return transformed;
    });
    return this;
  }

  translate(x, y) {
    const m = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().translate(x, y);
    return this.transform(...m.m);
  }

  rotate(deg) {
    const m = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().rotate(deg);
    return this.transform(...m.m);
  }

  scale(sx, sy) {
    if (sy == null) sy = sx;
    const m = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().scale(sx, sy);
    return this.transform(...m.m);
  }

  skew(degX, degY) {
    const m = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().skew(degX, degY);
    return this.transform(...m.m);
  }

  trim() {
    const [x, y] = this.bounds;
    this.translate(-x, -y);
    return this;
  }

  beginPath() {
    this[_beginPath] = true;
    return this;
  }

  to(context) {
    const commands = this[_path];
    const renderProps = this[_renderProps];

    if (commands.length) {
      if (this[_beginPath]) {
        context.beginPath();
      }

      commands.forEach(c => {
        const [cmd, ...args] = c;

        if (cmd === 'M') {
          context.moveTo(...args);
        } else {
          context.bezierCurveTo(...args);
        }
      });

      if (this.isClosed) {
        context.closePath();
      }
    }

    Object.assign(context, renderProps);
    return {
      stroke() {
        context.stroke();
        return this;
      },

      fill() {
        context.fill();
        return this;
      }

    };
  }

  strokeStyle(value) {
    this[_renderProps].strokeStyle = value;
    return this;
  }

  fillStyle(value) {
    this[_renderProps].fillStyle = value;
    return this;
  }

  lineWidth(value) {
    this[_renderProps].lineWidth = value;
    return this;
  }

  lineCap(value) {
    this[_renderProps].lineCap = value;
    return this;
  }

  lineJoin(value) {
    this[_renderProps].lineJoin = value;
    return this;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SvgPath);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _vector__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// from https://github.com/chrisaljoudi/transformatrix.js

/**
  default:
          (1, 0, 0)
          (0, 1, 0)
 */
const Matrix = function (m) {
  m = m || [1, 0, 0, 1, 0, 0];
  this.m = [m[0], m[1], m[2], m[3], m[4], m[5]];
};

Matrix.prototype.unit = function () {
  this.m = [1, 0, 0, 1, 0, 0];
  return this;
};

Matrix.prototype.multiply = function (m) {
  const m1 = this.m;
  let m2;

  if (m instanceof Matrix) {
    m2 = m.m;
  } else {
    m2 = m;
  }

  const m11 = m1[0] * m2[0] + m1[2] * m2[1],
        m12 = m1[1] * m2[0] + m1[3] * m2[1],
        m21 = m1[0] * m2[2] + m1[2] * m2[3],
        m22 = m1[1] * m2[2] + m1[3] * m2[3];
  const dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
        dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
  m1[0] = m11;
  m1[1] = m12;
  m1[2] = m21;
  m1[3] = m22;
  m1[4] = dx;
  m1[5] = dy;
  return this;
};

Matrix.prototype.inverse = function () {
  const inv = new Matrix(this.m),
        invm = inv.m;
  const d = 1 / (invm[0] * invm[3] - invm[1] * invm[2]),
        m0 = invm[3] * d,
        m1 = -invm[1] * d,
        m2 = -invm[2] * d,
        m3 = invm[0] * d,
        m4 = d * (invm[2] * invm[5] - invm[3] * invm[4]),
        m5 = d * (invm[1] * invm[4] - invm[0] * invm[5]);
  invm[0] = m0;
  invm[1] = m1;
  invm[2] = m2;
  invm[3] = m3;
  invm[4] = m4;
  invm[5] = m5;
  return inv;
};
/**
  (1, 0, sx)
  (0, 1, sy)
 * */


Matrix.prototype.translate = function (x, y) {
  return this.multiply([1, 0, 0, 1, x, y]);
};
/**
    (cos, -sin, 0)
    (sin, cos, 0)
 */


Matrix.prototype.rotate = function (deg) {
  const rad = deg * Math.PI / 180,
        c = Math.cos(rad),
        s = Math.sin(rad);
  return this.multiply([c, s, -s, c, 0, 0]);
};
/**
    (1, tx, 0)
    (ty, 1, 0)
 */


Matrix.prototype.skew = function (degX, degY) {
  degY |= 0;
  const radX = degX * Math.PI / 180,
        radY = degY * Math.PI / 180;
  const tx = Math.tan(radX),
        ty = Math.tan(radY);
  return this.multiply([1, ty, tx, 1, 0, 0]);
};
/**
  (sx, 0, 0)
  (0, sy, 0)
 */


Matrix.prototype.scale = function (sx, sy) {
  return this.multiply([sx, 0, 0, sy, 0, 0]);
};

Matrix.prototype.transformPoint = function (px, py) {
  const x = px,
        y = py;
  px = x * this.m[0] + y * this.m[2] + this.m[4];
  py = x * this.m[1] + y * this.m[3] + this.m[5];
  return [px, py];
};

Matrix.prototype.transformVector = function (px, py) {
  const x = px,
        y = py;
  px = x * this.m[0] + y * this.m[2];
  py = x * this.m[1] + y * this.m[3];
  return [px, py];
};

/* harmony default export */ __webpack_exports__["default"] = (Matrix);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Vector {
  constructor(p1, p2 = [0, 0, 0]) {
    let [x1, y1, z1] = p1,
        [x2, y2, z2] = p2;
    z1 = z1 || 0;
    z2 = z2 || 0;
    this.x = x1 - x2;
    this.y = y1 - y2;
    this.z = z1 - z2;
  }

  get length() {
    const {
      x,
      y,
      z
    } = this;
    return Math.sqrt(x * x + y * y + z * z);
  }

  unit() {
    const length = this.length;
    return new Vector([this.x / length, this.y / length, this.z / length]);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v) {
    const x1 = this.x,
          y1 = this.y,
          z1 = this.z,
          x2 = v.x,
          y2 = v.y,
          z2 = v.z;
    return new Vector([y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - x2 * y1]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Vector);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointAtLength", function() { return getPointAtLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalLength", function() { return getTotalLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInPath", function() { return isPointInPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInStroke", function() { return isPointInStroke; });
function createSvgPath(d) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  return path;
}

function getPointAtLength(d, len) {
  const path = createSvgPath(d);
  const {
    x,
    y
  } = path.getPointAtLength(len);
  return [x, y];
}
function getTotalLength(d, len) {
  const path = createSvgPath(d);
  return path.getTotalLength(len);
}
let context = null;
function isPointInPath({
  d
}, x, y) {
  if (!context) context = document.createElement('canvas').getContext('2d');
  const path = new Path2D(d);
  return context.isPointInPath(path, x, y);
}
function isPointInStroke({
  d
}, x, y, {
  lineWidth = 1,
  lineCap = 'butt',
  lineJoin = 'miter'
}) {
  if (!context) context = document.createElement('canvas').getContext('2d');

  if (context.isPointInStroke) {
    context.save();
    context.lineWidth = lineWidth;
    context.lineCap = lineCap;
    context.lineJoin = lineJoin;
    const path = new Path2D(d);
    const ret = context.isPointInStroke(path, x, y);
    context.restore();
    return ret;
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parse; });
// https://github.com/jkroso/parse-svg-path

/**
 * expected argument lengths
 * @type {Object}
 */

/* eslint-disable */
var length = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0
  /**
   * segment pattern
   * @type {RegExp}
   */

};
var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
  var data = [];
  path.replace(segment, function (_, command, args) {
    var type = command.toLowerCase();
    args = parseValues(args); // overloaded moveTo

    if (type == 'm' && args.length > 2) {
      data.push([command].concat(args.splice(0, 2)));
      type = 'l';
      command = command == 'm' ? 'l' : 'L';
    }

    while (true) {
      if (args.length == length[type]) {
        args.unshift(command);
        return data.push(args);
      }

      if (args.length < length[type]) throw new Error('malformed path data');
      data.push([command].concat(args.splice(0, length[type])));
    }
  });
  return data;
}
var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

function parseValues(args) {
  var numbers = args.match(number);
  return numbers ? numbers.map(Number) : [];
}
/* eslint-enable */

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absolutize; });
// https://github.com/jkroso/abs-svg-path

/**
 * redefine `path` with absolute coordinates
 *
 * @param {Array} path
 * @return {Array}
 */

/* eslint-disable */
function absolutize(path) {
  var startX = 0;
  var startY = 0;
  var x = 0;
  var y = 0;
  return path.map(function (seg) {
    seg = seg.slice();
    var type = seg[0];
    var command = type.toUpperCase(); // is relative

    if (type != command) {
      seg[0] = command;

      switch (type) {
        case 'a':
          seg[6] += x;
          seg[7] += y;
          break;

        case 'v':
          seg[1] += y;
          break;

        case 'h':
          seg[1] += x;
          break;

        default:
          for (var i = 1; i < seg.length;) {
            seg[i++] += x;
            seg[i++] += y;
          }

      }
    } // update cursor state


    switch (command) {
      case 'Z':
        x = startX;
        y = startY;
        break;

      case 'H':
        x = seg[1];
        break;

      case 'V':
        y = seg[1];
        break;

      case 'M':
        x = startX = seg[1];
        y = startY = seg[2];
        break;

      default:
        x = seg[seg.length - 2];
        y = seg[seg.length - 1];
    }

    return seg;
  });
}
/* eslint-enable */

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalize; });
/* harmony import */ var _a2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
// https://github.com/jkroso/normalize-svg-path

/* eslint-disable */

function normalize(path) {
  // init state
  var prev;
  var result = [];
  var bezierX = 0;
  var bezierY = 0;
  var startX = 0;
  var startY = 0;
  var quadX = null;
  var quadY = null;
  var x = 0;
  var y = 0;

  for (var i = 0, len = path.length; i < len; i++) {
    var seg = path[i];
    var command = seg[0];

    switch (command) {
      case 'M':
        startX = seg[1];
        startY = seg[2];
        break;

      case 'A':
        var curves = Object(_a2c__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y, seg[6], seg[7], seg[4], seg[5], seg[1], seg[2], seg[3]);
        if (!curves.length) continue;
        curves = curves.map(curve => {
          const [x0, y0, x1, y1, x2, y2, x, y] = curve;
          return {
            x1,
            y1,
            x2,
            y2,
            x,
            y
          };
        });

        for (var j = 0, c; j < curves.length; j++) {
          c = curves[j];
          seg = ['C', c.x1, c.y1, c.x2, c.y2, c.x, c.y];
          if (j < curves.length - 1) result.push(seg);
        }

        break;

      case 'S':
        // default control point
        var cx = x;
        var cy = y;

        if (prev == 'C' || prev == 'S') {
          cx += cx - bezierX; // reflect the previous command's control

          cy += cy - bezierY; // point relative to the current point
        }

        seg = ['C', cx, cy, seg[1], seg[2], seg[3], seg[4]];
        break;

      case 'T':
        if (prev == 'Q' || prev == 'T') {
          quadX = x * 2 - quadX; // as with 'S' reflect previous control point

          quadY = y * 2 - quadY;
        } else {
          quadX = x;
          quadY = y;
        }

        seg = quadratic(x, y, quadX, quadY, seg[1], seg[2]);
        break;

      case 'Q':
        quadX = seg[1];
        quadY = seg[2];
        seg = quadratic(x, y, seg[1], seg[2], seg[3], seg[4]);
        break;

      case 'L':
        seg = line(x, y, seg[1], seg[2]);
        break;

      case 'H':
        seg = line(x, y, seg[1], y);
        break;

      case 'V':
        seg = line(x, y, x, seg[1]);
        break;

      case 'Z':
        seg = line(x, y, startX, startY);
        break;
    } // update state


    prev = command;
    x = seg[seg.length - 2];
    y = seg[seg.length - 1];

    if (seg.length > 4) {
      bezierX = seg[seg.length - 4];
      bezierY = seg[seg.length - 3];
    } else {
      bezierX = x;
      bezierY = y;
    }

    result.push(seg);
  }

  return result;
}

function line(x1, y1, x2, y2) {
  return ['C', x1, y1, x2, y2, x2, y2];
}

function quadratic(x1, y1, cx, cy, x2, y2) {
  return ['C', x1 / 3 + 2 / 3 * cx, y1 / 3 + 2 / 3 * cy, x2 / 3 + 2 / 3 * cx, y2 / 3 + 2 / 3 * cy, x2, y2];
}
/* eslint-enable */

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a2c; });
// https://github.com/colinmeinke/svg-arc-to-cubic-bezier
//
// Convert an arc to a sequence of cubic bézier curves
//
const TAU = Math.PI * 2;
/* eslint-disable space-infix-ops */
// Calculate an angle between two unit vectors
//
// Since we measure angle between radii of circular arcs,
// we can use simplified math (without length normalization)
//

function unit_vector_angle(ux, uy, vx, vy) {
  const sign = ux * vy - uy * vx < 0 ? -1 : 1;
  let dot = ux * vx + uy * vy; // Add this to work with arbitrary vectors:
  // dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);
  // rounding errors, e.g. -1.0000000000000002 can screw up this

  if (dot > 1.0) {
    dot = 1.0;
  }

  if (dot < -1.0) {
    dot = -1.0;
  }

  return sign * Math.acos(dot);
} // Convert from endpoint to center parameterization,
// see http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
//
// Return [cx, cy, theta1, delta_theta]
//


function get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
  // Step 1.
  //
  // Moving an ellipse so origin will be the middlepoint between our two
  // points. After that, rotate it to line up ellipse axes with coordinate
  // axes.
  //
  const x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  const y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  const rx_sq = rx * rx;
  const ry_sq = ry * ry;
  const x1p_sq = x1p * x1p;
  const y1p_sq = y1p * y1p; // Step 2.
  //
  // Compute coordinates of the centre of this ellipse (cx', cy')
  // in the new coordinate system.
  //

  let radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;

  if (radicant < 0) {
    // due to rounding errors it might be e.g. -1.3877787807814457e-17
    radicant = 0;
  }

  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);
  const cxp = radicant * rx / ry * y1p;
  const cyp = radicant * -ry / rx * x1p; // Step 3.
  //
  // Transform back to get centre coordinates (cx, cy) in the original
  // coordinate system.
  //

  const cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  const cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2; // Step 4.
  //
  // Compute angles (theta1, delta_theta).
  //

  const v1x = (x1p - cxp) / rx;
  const v1y = (y1p - cyp) / ry;
  const v2x = (-x1p - cxp) / rx;
  const v2y = (-y1p - cyp) / ry;
  const theta1 = unit_vector_angle(1, 0, v1x, v1y);
  let delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);

  if (fs === 0 && delta_theta > 0) {
    delta_theta -= TAU;
  }

  if (fs === 1 && delta_theta < 0) {
    delta_theta += TAU;
  }

  return [cx, cy, theta1, delta_theta];
} //
// Approximate one unit arc segment with bézier curves,
// see http://math.stackexchange.com/questions/873224
//


function approximate_unit_arc(theta1, delta_theta) {
  const alpha = 4 / 3 * Math.tan(delta_theta / 4);
  const x1 = Math.cos(theta1);
  const y1 = Math.sin(theta1);
  const x2 = Math.cos(theta1 + delta_theta);
  const y2 = Math.sin(theta1 + delta_theta);
  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}

function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  const sin_phi = Math.sin(phi * TAU / 360);
  const cos_phi = Math.cos(phi * TAU / 360); // Make sure radii are valid
  //

  const x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  const y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;

  if (x1p === 0 && y1p === 0) {
    // we're asked to draw line to itself
    return [];
  }

  if (rx === 0 || ry === 0) {
    // one of the radii is zero
    return [];
  } // Compensate out-of-range radii
  //


  rx = Math.abs(rx);
  ry = Math.abs(ry);
  const lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);

  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  } // Get center parameters (cx, cy, theta1, delta_theta)
  //


  const cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);
  const result = [];
  let theta1 = cc[2];
  let delta_theta = cc[3]; // Split an arc to multiple segments, so each segment
  // will be less than τ/4 (= 90°)
  //

  const segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;

  for (let i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  } // We have a bezier approximation of a unit circle,
  // now need to transform back to the original ellipse
  //


  return result.map(curve => {
    for (let i = 0; i < curve.length; i += 2) {
      let x = curve[i + 0];
      let y = curve[i + 1]; // scale

      x *= rx;
      y *= ry; // rotate

      const xp = cos_phi * x - sin_phi * y;
      const yp = sin_phi * x + cos_phi * y; // translate

      curve[i + 0] = xp + cc[0];
      curve[i + 1] = yp + cc[1];
    }

    return curve;
  });
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPath; });
// https://github.com/dy/is-svg-path
function isPath(str) {
  if (typeof str !== 'string') return false;
  str = str.trim(); // https://www.w3.org/TR/SVG/paths.html#PathDataBNF

  if (/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(str) && /[\dz]$/i.test(str) && str.length > 4) return true;
  return false;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseFont", function() { return _parse_font__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _svgpath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSvgPath", function() { return _svgpath__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["appendUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["fourValuesShortCut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eightValuesShortCut", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["eightValuesShortCut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["notice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["oneOrTwoValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseColorString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["praseString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["rectVertices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["sortOrderedSprites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateID", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["generateID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeToPixel", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["sizeToPixel"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cachable", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["cachable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composit", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["composit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["attr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["deprecate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["flow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "absolute", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["absolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inheritAttributes", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["inheritAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["setDeprecation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decorators", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["decorators"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attributeNames", function() { return _store__WEBPACK_IMPORTED_MODULE_4__["attributeNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relatedAttributes", function() { return _store__WEBPACK_IMPORTED_MODULE_4__["relatedAttributes"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["findColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["cacheContextPool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawRadiusBox", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["drawRadiusBox"]; });









/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseFont; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
// borrow from node-canvas (https://github.com/Automattic/node-canvas)

/**
 * Font RegExp helpers.
 */

const weights = 'bold|bolder|lighter|[1-9]00',
      styles = 'italic|oblique',
      variants = 'small-caps',
      stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',
      units = 'px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%',
      string = '\'([^\']+)\'|"([^"]+)"|([\\w-]|[\u4e00-\u9fa5])+'; // [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop

const weightRe = new RegExp(`(${weights}) +`, 'i');
const styleRe = new RegExp(`(${styles}) +`, 'i');
const variantRe = new RegExp(`(${variants}) +`, 'i');
const stretchRe = new RegExp(`(${stretches}) +`, 'i');
/* eslint-disable prefer-template */

const sizeFamilyRe = new RegExp('([\\d\\.]+)(' + units + ') *' + '((?:' + string + ')( *, *(?:' + string + '))*)');
/* eslint-enable prefer-template */

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

function parseFont(str, defaultHeight) {
  // Try for required properties first.
  const sizeFamily = sizeFamilyRe.exec(str);
  if (!sizeFamily) return; // invalid
  // Default values and required properties

  const font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/ *, */g, ',')
  }; // Stop search at `sizeFamily.index`

  const substr = str.substring(0, sizeFamily.index); // Optional, unordered properties.

  const weight = weightRe.exec(substr),
        style = styleRe.exec(substr),
        variant = variantRe.exec(substr),
        stretch = stretchRe.exec(substr);
  if (weight) font.weight = weight[1];
  if (style) font.style = style[1];
  if (variant) font.variant = variant[1];
  if (stretch) font.stretch = stretch[1];
  font.size0 = font.size;
  font.size = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sizeToPixel"])({
    size: font.size0,
    unit: font.unit
  }, defaultHeight);

  if (font.unit === 'vw' || font.unit === 'vh') {
    if (typeof document !== 'undefined' && document.documentElement) {
      const {
        clientWidth,
        clientHeight
      } = document.documentElement;
      const val = font.unit === 'vw' ? clientWidth : clientHeight;
      font.size = val * font.size / 100;
    }
  }

  return font;
}
/* eslint-enable */

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return parseColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return parseStringTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValuesString", function() { return parseValuesString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return praseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return parseStringInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return parseStringFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return oneOrTwoValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return fourValuesShortCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eightValuesShortCut", function() { return eightValuesShortCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return rectVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return appendUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return sortOrderedSprites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateID", function() { return generateID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeToPixel", function() { return sizeToPixel; });
const colorString = __webpack_require__(23);

class Color {
  constructor(color) {
    if (typeof color === 'string') {
      const {
        model,
        value
      } = colorString.get(color || 'rgba(0,0,0,1)');
      this.model = model;
      this.value = value;
    } else {
      this.model = color.model;
      this.value = color.value;
    }
  }

  toString() {
    const [a, b, c, d] = this.value;
    const model = this.model;

    if (model === 'rgb') {
      return `${model}a(${a},${b},${c},${d})`;
    }

    return `${model}a(${a},${b}%,${c}%,${d})`;
  }

  get str() {
    return String(this);
  }

}


function parseColor(color) {
  return new Color(color);
}
function parseColorString(color) {
  if (color && typeof color === 'string' && color !== 'inherit') {
    return parseColor(color).toString();
  }

  return color;
}
function parseStringTransform(str) {
  if (typeof str !== 'string') return str;
  const rules = str.match(/(?:^|\s)+((?:scale|rotate|translate|skew|matrix)\([^()]+\))/g);
  const ret = {};

  if (rules) {
    rules.forEach(rule => {
      const matched = rule.match(/(scale|rotate|translate|skew|matrix)\(([^()]+)\)/);
      const [, m, v] = matched;

      if (m === 'rotate') {
        ret[m] = parseStringFloat(v)[0];
      } else {
        ret[m] = parseStringFloat(v);
      }
    });
  }

  return ret;
}
function parseValuesString(str, parser) {
  if (typeof str === 'string' && str !== '' && str !== 'inherit') {
    const values = str.split(/[\s,]+/g);
    return values.map(v => {
      const ret = parser ? parser(v) : v;
      return Number.isNaN(ret) ? v : ret;
    });
  }

  return str;
}
function praseString(str) {
  return parseValuesString(str);
}
function parseStringInt(str) {
  return parseValuesString(str, parseInt);
}
function parseStringFloat(str) {
  return parseValuesString(str, v => {
    if (v === 'center') return 0.5;
    if (v === 'left' || v === 'top') return 0;
    if (v === 'right' || v === 'bottom') return 1;
    return parseFloat(v);
  });
}
function oneOrTwoValues(val) {
  if (!Array.isArray(val)) {
    return [val, val];
  }

  if (val.length === 1) {
    return [val[0], val[0]];
  }

  return val;
}
function fourValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val];
  }

  if (val.length === 1) {
    return [val[0], val[0], val[0], val[0]];
  }

  if (val.length === 2) {
    return [val[0], val[1], val[0], val[1]];
  }

  return [...val, 0, 0, 0, 0].slice(0, 4);
}
function eightValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val, val, val, val, val];
  }

  if (val.length === 1) {
    return eightValuesShortCut(val[0]);
  }

  if (val.length === 2) {
    return [val[0], val[1], val[0], val[1], val[0], val[1], val[0], val[1]];
  }

  if (val.length === 4) {
    return [val[0], val[1], val[2], val[3], val[0], val[1], val[2], val[3]];
  }

  return [...val, 0, 0, 0, 0, 0, 0, 0, 0].slice(0, 8);
}
function rectVertices(rect) {
  const [x, y, w, h] = rect;
  return [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
}
function appendUnit(value, defaultUnit = 'px') {
  if (value === '') {
    return value;
  }

  if (typeof value === 'string' && Number.isNaN(Number(value))) {
    return value;
  }

  return value + defaultUnit;
}
function sortOrderedSprites(sprites, reversed = false) {
  return [...sprites].sort((a, b) => {
    if (reversed) [a, b] = [b, a];

    if (a.zIndex === b.zIndex) {
      return a.zOrder - b.zOrder;
    }

    return a.zIndex - b.zIndex;
  });
}
const noticed = new Set();
function notice(msg, level = 'warn') {
  if (typeof console !== 'undefined' && !noticed.has(msg)) {
    console[level](msg); // eslint-disable-line no-console

    noticed.add(msg);
  }
}
const IDMap = new WeakMap();
function generateID(obj) {
  if (IDMap.has(obj)) {
    return IDMap.get(obj);
  }

  const id = Math.random().toString(36).slice(2);
  IDMap.set(obj, id);
  return id;
}
function sizeToPixel(value, defaultWidth) {
  // eslint-disable-line complexity
  if (typeof value === 'string') {
    const matched = value.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%)$/);

    if (matched) {
      value = {
        size: parseFloat(matched[1]),
        unit: matched[2]
      };
    } else {
      value = {
        size: parseInt(value, 10),
        unit: 'px'
      };
    }
  }

  let {
    size,
    unit
  } = value;

  if (unit === 'pt') {
    size /= 0.75;
  } else if (unit === 'pc') {
    size *= 16;
  } else if (unit === 'in') {
    size *= 96;
  } else if (unit === 'cm') {
    size *= 96.0 / 2.54;
  } else if (unit === 'mm') {
    size *= 96.0 / 25.4;
  } else if (unit === 'em' || unit === 'rem' || unit === 'ex') {
    if (!defaultWidth && typeof getComputedStyle === 'function' && typeof document !== 'undefined') {
      const root = getComputedStyle(document.documentElement).fontSize;
      defaultWidth = sizeToPixel(root, 16);
    }

    size *= defaultWidth;
    if (unit === 'ex') size /= 2;
  } else if (unit === 'q') {
    size *= 96.0 / 25.4 / 4;
  } else if (unit === 'vw' || unit === 'vh') {
    if (typeof document !== 'undefined') {
      const val = unit === 'vw' ? document.documentElement.clientWidth : document.documentElement.clientHeight;
      size *= val / 100;
    }
  } else if (unit === 'vmax' || unit === 'vmin') {
    if (typeof document !== 'undefined') {
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;

      if (unit === 'vmax') {
        size *= Math.max(width, height) / 100;
      } else {
        size *= Math.min(width, height) / 100;
      }
    }
  }

  return size;
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(24);
var swizzle = __webpack_require__(25);

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(26);

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSvgPath; });
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

function createSvgPath(path) {
  if (typeof path === 'string') path = {
    d: path
  };
  const p = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](path.d);

  if (path.transform || path.trim) {
    if (path.transform) {
      Object.entries(path.transform).forEach(([key, value]) => {
        if (!Array.isArray(value)) value = [value];
        p[key](...value);
      });
    }

    if (path.trim) {
      p.trim();
    }
  }

  return p;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composit", function() { return composit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cachable", function() { return cachable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inheritAttributes", function() { return inheritAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absolute", function() { return absolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return setDeprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorators", function() { return decorators; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);



const _attrAbsolute = Symbol('attrAbsolute');
/* eslint-disable prefer-rest-params */


function polyfillLegacy(target, key, descriptor) {
  return {
    target,
    key,
    descriptor
  };
}

function getPV(subject, relative) {
  let parent = subject.parent;
  let pv = null;

  if (parent) {
    let attrSize = parent.attrSize;

    if (attrSize) {
      const attrV = relative === 'pw' ? attrSize[0] : attrSize[1];

      while (attrSize && attrV === '') {
        // flexible value
        parent = parent.parent;
        attrSize = parent.attrSize;
      }
    }

    if (relative === 'pw') {
      pv = attrSize ? parent.contentSize[0] : parent.resolution[0];
    } else if (relative === 'ph') {
      pv = attrSize ? parent.contentSize[1] : parent.resolution[1];
    }
  }

  return pv;
}

function attr(options) {
  let cache = false,
      reflow = false,
      relayout = false,
      quiet = false,
      value = null,
      extra = null;

  const decorator = function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    const {
      key,
      kind
    } = elementDescriptor;
    _store__WEBPACK_IMPORTED_MODULE_1__["attributeNames"].add(key);

    if (quiet && (cache || reflow || relayout)) {
      throw new Error(`${key}: quietSet cannot enable cache or reflow or relayout`);
    }

    let _symbolKey = key,
        defaultValue = value != null ? value : elementDescriptor.value;
    const relativeType = elementDescriptor.descriptor.__relative;
    const inheritValue = elementDescriptor.descriptor.__inherit;
    const composit = elementDescriptor.descriptor.__composit;

    if (kind === 'field') {
      defaultValue = elementDescriptor.initializer ? elementDescriptor.initializer() : value;
      _symbolKey = Symbol(key);
      const setter = quiet ? function (val) {
        this.quietSet(_symbolKey, val);
      } : function (val) {
        this.set(_symbolKey, val);
      };
      elementDescriptor = {
        kind: 'method',
        key,
        placement: 'prototype',
        descriptor: {
          configurable: true,
          enumerable: true,
          set: setter,

          get() {
            return this.get(_symbolKey);
          }

        }
      };
    }

    if (relativeType) {
      elementDescriptor = applyRative(elementDescriptor, relativeType);
    }

    if (inheritValue) {
      elementDescriptor = applyInherit(elementDescriptor, inheritValue.defaultValue);
    }

    const descriptor = elementDescriptor.descriptor;
    let _getter = descriptor.get;

    if (!_getter) {
      _getter = function () {
        const ret = this.get(key);
        return ret != null ? ret : this.getDefaultValue(key, defaultValue);
      };
    }

    if (composit) {
      if (cache || reflow || relayout || quiet || value || extra) {
        throw new Error('Cannot apply state to composit attribute.');
      }

      descriptor.get = _getter;
    } else if (!relativeType && !inheritValue) {
      descriptor.get = function () {
        const ret = _getter.call(this);

        return ret != null ? ret : this.getDefaultValue(key, defaultValue);
      };
    } else if (relativeType) {
      // enable set default to user defined getter
      descriptor.get = function () {
        let ret = _getter.call(this);

        const subject = this.subject;

        if (ret == null) {
          ret = this.getDefaultValue(key, defaultValue);
        } else if (ret.relative) {
          const relative = ret.relative.trim();

          if (relative === 'pw' || relative === 'ph') {
            const pv = getPV(subject, relative);

            if (pv !== ret.pv) {
              this[key] = ret.rv;
              return this[key];
            }

            subject.cache = null;

            if (subject[_attrAbsolute]) {
              return pv * ret.v;
            }

            return ret.rv;
          }

          if (relative === 'rw' || relative === 'rh') {
            const layer = subject.layer;
            let pv = null;

            if (layer) {
              if (relative === 'rw') {
                pv = layer.resolution[0];
              } else if (relative === 'rh') {
                pv = layer.resolution[1];
              }
            }

            if (pv !== ret.pv) {
              this[key] = ret.rv;
              return this[key];
            }

            subject.cache = null;

            if (subject[_attrAbsolute]) {
              return pv * ret.v;
            }

            return ret.rv;
          }
        }

        return ret;
      };
    } else {
      // enable set default to user defined getter
      descriptor.get = function () {
        let ret = _getter.call(this);

        const subject = this.subject;

        if (ret == null) {
          ret = this.getDefaultValue(key, defaultValue);
        }

        if (ret === 'inherit') {
          let value = null;
          let parent = subject.parent;

          while (parent && parent.attr) {
            value = parent.attr(key);
            if (value != null) break;
            parent = parent.parent;
          }

          return value != null ? value : this.__inheritDefaults[key];
        }

        return ret;
      };
    }

    if (!composit) {
      const _setter = descriptor.set;

      const _clearCache = !(descriptor.__cachable || cache);

      descriptor.set = function (val) {
        const subject = this.subject;
        this.__updateTag = false;
        this.__reflowTag = reflow;
        this.__clearLayout = relayout;

        if (!this.__styleTag && val != null && this.__attributesSet) {
          this.__attributesSet.add(key);
        }

        if (!this.__styleTag && val == null && this.__attributesSet) {
          if (this.__attributesSet.has(key)) {
            this.__attributesSet.delete(key);
          }
        }

        _setter.call(this, val);

        if (subject && !this.__quietTag && this.__updateTag) {
          let clearLayout = this.__clearLayout;

          if (this.__reflowTag) {
            // reflow must before clearLayout because boxOffsetSize is also flowed.
            subject.reflow();
          }

          if (subject.hasLayout) {
            const offsetSize = subject.boxOffsetSize,
                  layoutSize = subject.__lastLayout;
            clearLayout |= !layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1];
            subject.__lastLayout = offsetSize;
          }

          if (clearLayout) subject.clearLayout();
          subject.forceUpdate(_clearCache);
        }

        if (this.__updateTag) {
          if (_store__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"].has(key)) {
            subject.updateStyles();
          }

          if (extra) {
            this[extra](key, val);
          }
        }
      }; // delete this.__reflowTag;
      // delete this.__updateTag;

    }

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };

  if (options.descriptor) {
    return decorator(options);
  }

  if (arguments.length === 3) {
    return decorator.apply(this, arguments);
  }

  quiet = !!options.quiet;
  cache = !!options.cache;
  reflow = !!options.reflow;
  relayout = !!options.relayout;
  value = options.value;
  extra = options.extra;
  return decorator;
}
function composit(struct) {
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    const {
      kind,
      key
    } = elementDescriptor;

    if (kind !== 'field') {
      throw new Error(`Invalid composit attribute ${key}`);
    }

    elementDescriptor.kind = 'method';
    let set, get;

    if (typeof struct === 'string') {
      set = function (val) {
        this[struct] = val;
      };

      get = function () {
        return this[struct];
      };
    } else if (Array.isArray(struct)) {
      set = function (val) {
        struct.forEach((key, i) => {
          this[key] = val != null ? val[i] : null;
        });
      };

      get = function () {
        return struct.map(key => this[key]);
      };
    } else {
      struct = Object.entries(struct);

      set = function (val) {
        struct.forEach(([prop, key]) => {
          this[key] = val != null ? val[prop] : null;
        });
      };

      get = function () {
        const ret = {};
        struct.forEach(([prop, key]) => {
          ret[prop] = this[key];
        });
        return ret;
      };
    }

    elementDescriptor.descriptor = {
      get,
      set,
      __composit: true
    };
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
} // after attr

function cachable(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  const {
    descriptor
  } = elementDescriptor;
  descriptor.__cachable = true;
  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
}
const inheritAttributes = new Set(); // after attr

function inherit(defaultValue = '') {
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    const {
      descriptor
    } = elementDescriptor;
    descriptor.__inherit = {
      defaultValue
    };
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
}

function applyInherit(elementDescriptor, defaultValue) {
  const {
    key,
    finisher,
    target
  } = elementDescriptor;
  inheritAttributes.add(key);

  if (target) {
    if (!target.hasOwnProperty('__inheritDefaults')) {
      // eslint-disable-line no-prototype-builtins
      target.__inheritDefaults = Object.create(target.__inheritDefaults || null);
    }

    target.__inheritDefaults[key] = defaultValue;
    return elementDescriptor;
  }

  return { ...elementDescriptor,

    finisher(klass) {
      if (finisher) finisher(klass);
      const {
        prototype: proto
      } = klass;

      if (!proto.hasOwnProperty('__inheritDefaults')) {
        // eslint-disable-line no-prototype-builtins
        proto.__inheritDefaults = Object.create(proto.__inheritDefaults || null);
      }

      proto.__inheritDefaults[key] = defaultValue;
    }

  };
} // after attr
// relative -> width | height


function relative(type = 'width') {
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    const {
      descriptor
    } = elementDescriptor;
    descriptor.__relative = type;
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
}

function applyRative(elementDescriptor, type) {
  const {
    descriptor
  } = elementDescriptor;
  const setter = descriptor.set;

  descriptor.set = function (val) {
    if (typeof val === 'string') {
      val = val.trim();

      if (val.slice(-1) === '%') {
        const relative = type === 'width' ? 'pw' : 'ph';
        const pv = getPV(this.subject, relative);
        val = {
          relative,
          pv,
          v: parseFloat(val) / 100,
          rv: val
        };
      } else {
        const relative = val.slice(-2);

        if (relative === 'rw' || relative === 'rh') {
          let pv = null;
          const layer = this.subject.layer;

          if (layer) {
            pv = layer.resolution[relative === 'rw' ? 0 : 1];
          }

          val = {
            relative,
            pv,
            v: parseFloat(val) / 100,
            rv: val
          };
        } else {
          val = val ? parseFloat(val) : val;
        }
      }
    }

    setter.call(this, val);
  };

  return elementDescriptor;
}

function flow(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  const {
    descriptor,
    key
  } = elementDescriptor;

  if (descriptor.get) {
    const _getter = descriptor.get;

    descriptor.get = function () {
      let ret = this.flow(key);

      if (ret === undefined) {
        ret = _getter.call(this);
        this.flow(key, ret);
      }

      return ret;
    };
  }

  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
} // set tag force to get absolute value from relative attributes

function absolute(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  const {
    descriptor
  } = elementDescriptor;

  if (descriptor.get) {
    const _getter = descriptor.get;

    descriptor.get = function () {
      this[_attrAbsolute] = true;

      const ret = _getter.call(this);

      this[_attrAbsolute] = false;
      return ret;
    };
  }

  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
}
function setDeprecation(apiName, msg = '') {
  msg = `[Deprecation] ${apiName} has been deprecated.${msg}`;
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notice"])(msg);
}
function deprecate(msg, apiName = '') {
  const decorator = function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    const {
      descriptor,
      key
    } = elementDescriptor;
    apiName = apiName || `Method ${key}`;

    if (typeof descriptor.value === 'function') {
      const func = descriptor.value;

      descriptor.value = function (...args) {
        setDeprecation(apiName, msg);
        return func.apply(this, args);
      };
    }

    if (descriptor.set) {
      const setter = descriptor.set;

      descriptor.set = function (val) {
        setDeprecation(apiName, msg);
        return setter.call(this, val);
      };
    }

    if (descriptor.get) {
      const getter = descriptor.get;

      descriptor.get = function () {
        setDeprecation(apiName, msg);
        return getter.call(this);
      };
    }

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };

  if (msg.descriptor) {
    return decorator(msg);
  }

  if (arguments.length === 3) {
    return decorator.apply(this, arguments);
  }

  return decorator;
} // before attr

function parseValue(...parsers) {
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    const {
      descriptor
    } = elementDescriptor;
    const setter = descriptor.set;

    descriptor.set = function (val) {
      if (val != null && val !== '' && val !== 'inherit') {
        val = parsers.reduce((v, parser) => parser(v), val);
      }

      setter.call(this, val);
    };

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
} // return a function to apply any decorators to a descriptor

function decorators(...funcs) {
  return function (key, value, descriptor) {
    let elementDescriptor;

    if (!descriptor) {
      elementDescriptor = key;
    } else {
      elementDescriptor = {
        key,
        descriptor,
        value
      };
    }

    const ret = funcs.reduceRight(function (a, b) {
      return b.call(this, a);
    }, elementDescriptor);
    return ret && ret.descriptor;
  };
}
/* eslint-enable prefer-rest-params */

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeNames", function() { return attributeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relatedAttributes", function() { return relatedAttributes; });
const attributeNames = new Set();
const relatedAttributes = new Set();

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawRadiusBox", function() { return drawRadiusBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return findColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return cacheContextPool; });
// export function drawRadiusBox(context, {x, y, w, h, r}) {
//   // avoid radius larger than width or height
//   r = Math.min(r, Math.floor(Math.min(w, h) / 2));
//   // avoid radius is negative
//   r = Math.max(r, 0);
//   context.beginPath();
//   context.moveTo(x + r, y);
//   context.arcTo(x + w, y, x + w, y + h, r);
//   context.arcTo(x + w, y + h, x, y + h, r);
//   context.arcTo(x, y + h, x, y, r);
//   context.arcTo(x, y, x + w, y, r);
//   context.closePath();
// }
function drawEllipseBorder(ctx, x, y, w, h, pos = 'leftTop') {
  const kappa = 0.5522848,
        ox = w / 2 * kappa,
        // control point offset horizontal
  oy = h / 2 * kappa,
        // control point offset vertical
  xe = x + w,
        // x-end
  ye = y + h,
        // y-end
  xm = x + w / 2,
        // x-middle
  ym = y + h / 2; // y-middle

  if (pos === 'leftTop') {
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  } else if (pos === 'rightTop') {
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  } else if (pos === 'rightBottom') {
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  } else if (pos === 'leftBottom') {
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  }
}

function drawRadiusBox(context, [x, y, w, h], radius) {
  if (!radius) {
    context.beginPath();
    context.rect(x, y, w, h);
  } else {
    if (!radius) radius = [0, 0, 0, 0, 0, 0, 0, 0];
    if (typeof radius === 'number') radius = Array(8).fill(radius);
    const [tl0, tl1, tr0, tr1, br0, br1, bl0, bl1] = radius.map((r, i) => {
      if (i % 2) return Math.min(r, h / 2);
      return Math.min(r, w / 2);
    });
    context.beginPath();
    context.moveTo(x, y + tl1);
    drawEllipseBorder(context, x, y, tl0 * 2, tl1 * 2, 'leftTop');
    context.lineTo(x + w - tr0, y);
    drawEllipseBorder(context, x + w - tr0 * 2, y, tr0 * 2, tr1 * 2, 'rightTop');
    context.lineTo(x + w, y + h - br1);
    drawEllipseBorder(context, x + w - br0 * 2, y + h - br1 * 2, br0 * 2, br1 * 2, 'rightBottom');
    context.lineTo(x + bl0, y + h);
    drawEllipseBorder(context, x, y + h - bl1 * 2, bl0 * 2, bl1 * 2, 'leftBottom');
    context.closePath();
  }
}
/* istanbul ignore next  */

function gradientBox(angle, rect) {
  const [x, y, w, h] = rect;
  angle %= 360;

  if (angle < 0) {
    angle += 360;
  }

  let ret = [x, y, x + w, y + h];

  if (angle >= 0 && angle < 90) {
    const tan = Math.tan(Math.PI * angle / 180);
    let d = tan * w;

    if (d <= h) {
      ret = [x, y, x + w, y + d];
    } else {
      d = h / tan;
      ret = [x, y, x + d, y + h];
    }
  } else if (angle >= 90 && angle < 180) {
    const tan = Math.tan(Math.PI * (angle - 90) / 180);
    let d = tan * h;

    if (d <= w) {
      ret = [x + w, y, x + w - d, y + h];
    } else {
      d = w / tan;
      ret = [x + w, y, x, y + d];
    }
  } else if (angle >= 180 && angle < 270) {
    const tan = Math.tan(Math.PI * (angle - 180) / 180);
    let d = tan * w;

    if (d <= h) {
      ret = [x + w, y + h, x, y + h - d];
    } else {
      d = h / tan;
      ret = [x + w, y + h, x + w - d, y];
    }
  } else if (angle >= 270 && angle < 360) {
    const tan = Math.tan(Math.PI * (angle - 270) / 180);
    let d = tan * h;

    if (d <= w) {
      ret = [x, y + h, x + d, y];
    } else {
      d = w / tan;
      ret = [x, y + h, x + w, y + h - d];
    }
  }

  return ret;
}

function findColor(context, sprite, prop) {
  const gradients = sprite.attr('gradients') || {};
  let color = prop === 'border' ? sprite.attr(prop).color : sprite.attr(prop),
      gradient;

  if (gradients[prop]) {
    /* istanbul ignore next */
    gradient = gradients[prop];
  } else if (typeof color !== 'string') {
    gradient = color;
  }

  if (gradient) {
    let {
      colors,
      vector,
      direction,
      rect
    } = gradient;
    /* istanbul ignore if  */

    if (direction != null) {
      if (prop === 'border') {
        rect = rect || [0, 0, ...sprite.outerSize];
      } else {
        const {
          width: borderWidth
        } = sprite.attr('border');
        rect = rect || [borderWidth, borderWidth, ...sprite.innerSize];
      }

      vector = gradientBox(direction, rect);
    }

    if (vector.length === 4) {
      color = context.createLinearGradient(...vector);
    } else if (vector.length === 6) {
      color = context.createRadialGradient(...vector);
    }
    /* istanbul ignore next  */
    else if (vector.length === 3) {
        // for wxapp
        color = context.createCircularGradient(...vector);
      }
      /* istanbul ignore next  */
      else {
          throw Error('Invalid gradient vector!');
        }

    colors.forEach(o => {
      color.addColorStop(o.offset, o.color);
    });
  }

  return color;
}
const contextPool = [],
      contextReady = [],
      maxPollSize = 50;
const cacheContextPool = {
  get(context) {
    if (contextReady.length > 0) {
      return contextReady.pop();
    }

    const canvas = context.canvas;

    if (!canvas || !canvas.cloneNode) {
      return;
    }

    const copied = canvas.cloneNode();
    return copied.getContext('2d');
  },

  flush() {
    contextReady.push(...contextPool);
    contextPool.length = 0;
  },

  put(...contexts) {
    let size = this.size;
    contexts.every(context => {
      const ret = size++ < maxPollSize;

      if (ret) {
        context.canvas.width = 0;
        context.canvas.height = 0;
        contextPool.push(context);
      }

      return ret;
    });
  },

  get size() {
    return contextPool.length + contextReady.length;
  }

};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseSprite; });
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _baseattr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








const _animations = Symbol('animations'),
      _cachePriority = Symbol('cachePriority'),
      _effects = Symbol('effects'),
      _flow = Symbol('flow'),
      _releaseKeys = Symbol('releaseKeys');

const CACHE_PRIORITY_THRESHOLDS = 6; // const CACHE_PRIORITY_THRESHOLDS = 0; // disable cache_priority, for canvas drawing bug...

let BaseSprite = _decorate(null, function (_initialize, _BaseNode) {
  class BaseSprite extends _BaseNode {
    /**
      new Sprite({
        attr: {
          ...
        }
      })
     */
    constructor(attrs) {
      super(attrs);

      _initialize(this);

      this[_animations] = new Set();
      this[_cachePriority] = 0;
      this[_flow] = {};
      this[_releaseKeys] = new Set();
    }

  }

  return {
    F: BaseSprite,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",

      value() {
        return _baseattr__WEBPACK_IMPORTED_MODULE_3__["default"];
      }

    }, {
      kind: "method",
      static: true,
      key: "setAttributeEffects",

      value(effects = {}) {
        if (this.prototype[_effects] == null) {
          this.prototype[_effects] = effects;
        }

        Object.assign(this.prototype[_effects], effects);
      }

    }, {
      kind: "method",
      static: true,
      key: "addAttributes",

      value(attrs = {}) {
        return this.Attr.addAttributes(attrs);
      }

    }, {
      kind: "method",
      static: true,
      key: "defineAttributes",

      value(attrs, effects) {
        this.Attr = class extends this.Attr {
          constructor(subject) {
            super(subject);

            if (attrs.init) {
              attrs.init.call(this, this, subject);
            }
          }

        };
        if (attrs) this.addAttributes(attrs);
        if (effects) this.setAttributeEffects(effects);
        return this.Attr;
      }

    }, {
      kind: "get",
      key: "effects",

      value() {
        return this[_effects];
      }

    }, {
      kind: "method",
      key: "setReleaseKey",

      value(key) {
        this[_releaseKeys].add(key);
      }

    }, {
      kind: "method",
      key: "reflow",

      value() {
        this[_flow] = {};
      }

    }, {
      kind: "method",
      key: "flow",

      value(prop, value) {
        if (value === undefined) {
          return this[_flow][prop];
        }

        this[_flow][prop] = value;
      }

    }, {
      kind: "get",
      key: "hasLayout",

      value() {
        if (this.attr('position') === 'absolute') return false;

        if (this.parent && this.parent.relayout) {
          const display = this.parent.attr('display');
          return display !== '' && display !== 'static';
        }

        return false;
      }

    }, {
      kind: "set",
      key: "zIndex",

      value(val) {
        this.attr('zIndex', val);
      }

    }, {
      kind: "get",
      key: "zIndex",

      value() {
        return this.attr('zIndex');
      }

    }, {
      kind: "get",
      key: "isVirtual",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "isVisible",

      value() {
        if (!this.parent) return false;
        const display = this.attr('display');

        if (display === 'none') {
          return false;
        }

        const opacity = this.attr('opacity');

        if (opacity <= 0) {
          return false;
        }

        if (this.isVirtual) return true;
        const [width, height] = this.offsetSize;

        if (width <= 0 || height <= 0) {
          return false;
        }

        if (this.parent.isVisible) {
          return this.parent.isVisible();
        }

        return true;
      }

    }, {
      kind: "get",
      key: "transform",

      value() {
        const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](this.attr('transformMatrix'));
        const transformOrigin = this.attr('transformOrigin');

        if (transformOrigin) {
          const t = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();
          t.translate(...transformOrigin);
          t.multiply(transform);
          t.translate(...transformOrigin.map(v => -v));
          return t;
        }

        return transform;
      }

    }, {
      kind: "method",
      key: "connect",

      value(parent, zOrder = 0) {
        if (parent && !(parent instanceof _basenode__WEBPACK_IMPORTED_MODULE_4__["default"])) {
          // directly connect to canvas2d context
          const node = new _basenode__WEBPACK_IMPORTED_MODULE_4__["default"]();
          node.context = parent;
          node.timeline = new sprite_animator__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();

          node.update = function () {
            const currentTime = this.timeline.currentTime;
            node.dispatchEvent('update', {
              target: this,
              timeline: this.timeline,
              renderTime: currentTime
            }, true, true);
          };

          parent = node;
        }

        const ret = _get(_getPrototypeOf(BaseSprite.prototype), "connect", this).call(this, parent, zOrder);

        Object.defineProperty(this, 'context', {
          get: () => parent.cache || parent.context,
          configurable: true
        });

        this[_animations].forEach(animation => {
          if (parent.layer) {
            animation.baseTimeline = parent.layer.timeline;
          }

          animation.play();
          animation.finished.then(() => {
            this[_animations].delete(animation);
          });
        });

        if (this.hasLayout) this.clearLayout();
        this.reflow();
        return ret;
      }

    }, {
      kind: "method",
      key: "disconnect",

      value(parent) {
        this[_animations].forEach(animation => animation.cancel());

        if (this.cache) {
          this.cache = null;
        }

        if (this.hasLayout) this.clearLayout();
        this.reflow();

        const ret = _get(_getPrototypeOf(BaseSprite.prototype), "disconnect", this).call(this, parent);

        delete this.context;
        [...this[_releaseKeys]].forEach(key => delete this[key]);
        return ret;
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"]],
      key: "xy",

      value() {
        let x, y;

        if (this.hasLayout) {
          x = this.attr('layoutX');
          y = this.attr('layoutY');
        } else {
          [x, y] = this.attr('pos');
        }

        return [x, y];
      }

    }, {
      kind: "get",
      key: "animations",

      value() {
        return this[_animations];
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"], _utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],
      key: "attrSize",

      value() {
        let [width, height] = this.attr('size');
        const isBorderBox = this.attr('boxSizing') === 'border-box';

        if (this.hasLayout) {
          const layoutWidth = this.attr('layoutWidth'),
                layoutHeight = this.attr('layoutHeight');
          [width, height] = [layoutWidth !== '' ? layoutWidth : width, layoutHeight !== '' ? layoutHeight : height];
        }

        if (isBorderBox) {
          const borderWidth = this.attr('border').width,
                [paddingTop, paddingRight, paddingBottom, paddingLeft] = this.attr('padding');

          if (width !== '') {
            width = Math.max(0, width - 2 * borderWidth - paddingLeft - paddingRight);
          }

          if (height !== '') {
            height = Math.max(0, height - 2 * borderWidth - paddingTop - paddingBottom);
          }
        }

        return [width, height];
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"], _utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],
      key: "boxOffsetSize",

      value() {
        // get original boxSize, without layout
        if (this.isVirtual) return [0, 0];
        const [width, height] = this.attr('size');
        const [top, right, bottom, left] = this.attr('padding');
        const {
          width: borderWidth
        } = this.attr('border'),
              lw = borderWidth * 2;
        return [left + (width | 0) + right + lw, top + (height | 0) + bottom + lw];
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],
      key: "contentSize",

      value() {
        if (this.isVirtual) return [0, 0];
        const [width, height] = this.attrSize;
        return [width | 0, height | 0];
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],
      key: "clientSize",

      value() {
        const [top, right, bottom, left] = this.attr('padding'),
              [width, height] = this.contentSize;
        return [left + width + right, top + height + bottom];
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],
      key: "offsetSize",

      value() {
        const {
          width: borderWidth
        } = this.attr('border'),
              [width, height] = this.clientSize;
        return [width + 2 * borderWidth, height + 2 * borderWidth];
      }

    }, {
      kind: "get",
      key: "layoutSize",

      value() {
        const size = this.offsetSize;
        const [top, right, bottom, left] = this.attr('margin');
        return [left + size[0] + right, top + size[1] + bottom];
      }

    }, {
      kind: "get",
      key: "innerSize",

      value() {
        return this.contentSize;
      }

    }, {
      kind: "get",
      key: "outerSize",

      value() {
        return this.offsetSize;
      }

    }, {
      kind: "method",
      key: "getParentXY",

      value(lx = 0, ly = 0) {
        const layer = this.layer;
        if (!layer) return [0, 0];
        const parents = [];
        let target = this.parent;

        while (target && target !== layer) {
          parents.push(target);
          target = target.parent;
        }

        parents.reverse();
        let parentX = lx,
            parentY = ly;
        parents.forEach(node => {
          const scrollLeft = node.attr('scrollLeft'),
                scrollTop = node.attr('scrollTop'),
                borderWidth = node.attr('border').width,
                padding = node.attr('padding');
          [parentX, parentY] = node.pointToOffset(parentX, parentY);
          parentX = parentX - node.originalRect[0] - borderWidth - padding[3] + scrollLeft;
          parentY = parentY - node.originalRect[1] - borderWidth - padding[0] + scrollTop;
        });
        return [parentX, parentY];
      }

    }, {
      kind: "method",
      key: "getLayerXY",

      value(dx = 0, dy = 0) {
        const layer = this.layer;
        if (!layer) return [0, 0];
        let target = this;
        let [x, y] = [dx, dy];

        while (target && target !== layer) {
          [x, y] = target.offsetToPoint(x, y);
          const parent = target.parent;

          if (parent !== layer) {
            const borderWidth = parent.attr('border').width;
            const padding = parent.attr('padding'),
                  scrollLeft = parent.attr('scrollLeft') || 0,
                  scrollTop = parent.attr('scrollTop') || 0; // const parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft
            // const parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop

            x = x + parent.originalRect[0] + borderWidth + padding[3] - scrollLeft;
            y = y + parent.originalRect[1] + borderWidth + padding[0] - scrollTop;
          }

          target = parent;
        }

        return [x, y];
      }

    }, {
      kind: "get",
      key: "boundingRect",

      value() {
        const transform = this.transform;
        let [ox, oy, width, height] = this.originalRect;

        if (this.hasLayout) {
          const margin = this.attr('margin');
          width += margin[1];
          height += margin[2];
        }

        const vertexs = [[ox, oy], [width + ox, oy], [ox, height + oy], [width + ox, height + oy]];
        const transformed = vertexs.map(v => {
          return transform.transformPoint(v[0], v[1]);
        });
        const vx = transformed.map(v => v[0]),
              vy = transformed.map(v => v[1]);
        const minX = Math.min(...vx),
              minY = Math.min(...vy),
              maxX = Math.max(...vx),
              maxY = Math.max(...vy);
        return [...[minX, minY], ...[maxX - minX, maxY - minY]];
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],
      key: "originalRect",

      value() {
        const [width, height] = this.offsetSize,
              [anchorX, anchorY] = this.attr('anchor');
        const rect = [-anchorX * width, -anchorY * height, width, height];

        if (this.hasLayout) {
          const margin = this.attr('margin');
          rect[0] += margin[3];
          rect[1] += margin[0];
        }

        return rect;
      }

    }, {
      kind: "get",
      key: "originalRenderRect",

      value() {
        const bound = this.originalRect,
              pos = this.xy;
        return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
      }

    }, {
      kind: "get",
      key: "renderBox",

      value() {
        const bound = this.boundingRect,
              pos = this.xy;
        return [Math.floor(pos[0] + bound[0]), Math.floor(pos[1] + bound[1]), Math.ceil(pos[0] + bound[0] + bound[2]), Math.ceil(pos[1] + bound[1] + bound[3])];
      }

    }, {
      kind: "get",
      key: "renderRect",

      value() {
        const [x0, y0, x1, y1] = this.renderBox;
        return [x0, y0, x1 - x0, y1 - y0];
      }

    }, {
      kind: "get",
      key: "vertices",

      value() {
        const vertices = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["rectVertices"])(this.originalRect),
              transform = this.transform,
              [x0, y0] = this.xy;
        return vertices.map(v => {
          const [x, y] = transform.transformPoint(v[0], v[1]);
          return [x0 + x, y0 + y];
        });
      }

    }, {
      kind: "set",
      key: "cache",

      value(context) {
        if (context == null) {
          this[_cachePriority] = 0;

          if (this.parent && this.parent.cache) {
            this.parent.cache = null;
          }
        }

        if (this.cacheContext && context !== this.cacheContext) {
          _utils__WEBPACK_IMPORTED_MODULE_2__["cacheContextPool"].put(this.cacheContext);
        }

        this.cacheContext = context;
      }

    }, {
      kind: "get",
      key: "cache",

      value() {
        if (this[_cachePriority] >= CACHE_PRIORITY_THRESHOLDS) {
          return this.cacheContext;
        }

        if (this.cacheContext) {
          this.cache = null;
        }

        return false;
      }

    }, {
      kind: "method",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_2__["deprecate"])('Instead use sprite.cache = null')],
      key: "clearCache",

      value() {
        this.cache = null;
      }

    }, {
      kind: "method",
      key: "appendTo",

      value(parent) {
        parent.appendChild(this);
      }

    }, {
      kind: "method",
      key: "forceUpdate",

      value(clearCache = false) {
        if (clearCache) {
          this.cache = null;
        }

        _get(_getPrototypeOf(BaseSprite.prototype), "forceUpdate", this).call(this);
      }

    }, {
      kind: "method",
      key: "pointToOffset",

      value(x, y) {
        const [x0, y0] = this.xy;
        const [dx, dy] = [x - x0, y - y0];
        const transform = this.transform;
        return transform.inverse().transformPoint(dx, dy);
      }

    }, {
      kind: "method",
      key: "offsetToPoint",

      value(dx, dy) {
        const transform = this.transform;
        const [x0, y0] = this.xy;
        const [x, y] = transform.transformPoint(dx, dy);
        return [x + x0, y + y0];
      }

    }, {
      kind: "method",
      key: "getOffsetXY",

      value(evt) {
        let parentX, parentY;

        if (evt.parentX != null) {
          // group
          parentX = evt.parentX;
          parentY = evt.parentY;
        } else {
          parentX = evt.layerX;
          parentY = evt.layerY;
        }

        if (parentX != null && parentY != null) {
          return this.pointToOffset(parentX, parentY);
        }
      }

    }, {
      kind: "method",
      key: "dispatchEvent",

      value(type, evt, collisionState = false, swallow = false, useCapturePhase = null) {
        if (collisionState) {
          const offsetXY = this.getOffsetXY(evt);

          if (offsetXY) {
            evt.offsetX = offsetXY[0];
            evt.offsetY = offsetXY[1];
          }
        }

        return _get(_getPrototypeOf(BaseSprite.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, useCapturePhase);
      }

    }, {
      kind: "method",
      key: "pointCollision",

      value(evt) {
        /* istanbul ignore if */
        if (!this.isVisible()) {
          return false;
        }

        const offsetXY = this.getOffsetXY(evt);
        if (!offsetXY) return true;
        let [nx, ny] = offsetXY;
        evt.offsetX = nx;
        evt.offsetY = ny;
        const [ox, oy, ow, oh] = this.originalRect;

        if (nx >= ox && nx - ox < ow && ny >= oy && ny - oy < oh) {
          if (this.context && this.context.isPointInPath) {
            const borderWidth = this.attr('border').width,
                  borderRadius = this.attr('borderRadius');

            if (borderWidth || borderRadius) {
              const [width, height] = this.outerSize;
              const [x, y, w, h, r] = [0, 0, width, height, borderRadius];
              Object(_utils__WEBPACK_IMPORTED_MODULE_2__["drawRadiusBox"])(this.context, [x, y, w, h], r);

              if (this.layer && this.layer.offset) {
                nx += this.layer.offset[0];
                ny += this.layer.offset[1];
              }

              return this.context.isPointInPath(nx - ox, ny - oy);
            }
          }

          return true;
        }
      }

    }, {
      kind: "method",
      key: "OBBCollision",

      value(sprite) {
        // vertices: [p1, p2, p3, p4]
        const [p11, p12, p13] = this.vertices,
              [p21, p22, p23] = sprite.vertices;
        const a1 = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p12, p11).unit(),
              a2 = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p13, p12).unit(),
              a3 = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p22, p21).unit(),
              a4 = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p23, p22).unit(); // The projection of the axis of a vertex in a certain direction

        function verticesProjection(vertices, axis) {
          const [p1, p2, p3, p4] = vertices.map(v => axis.dot(new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](v)));
          return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)];
        }

        function projectionIntersect(p1, p2) {
          const m1 = (p1[0] + p1[1]) / 2,
                l1 = Math.abs(p1[1] - p1[0]),
                m2 = (p2[0] + p2[1]) / 2,
                l2 = Math.abs(p2[1] - p2[0]);
          return Math.abs(m2 - m1) <= (l1 + l2) / 2;
        }

        return projectionIntersect(verticesProjection(this.vertices, a1), verticesProjection(sprite.vertices, a1)) && projectionIntersect(verticesProjection(this.vertices, a2), verticesProjection(sprite.vertices, a2)) && projectionIntersect(verticesProjection(this.vertices, a3), verticesProjection(sprite.vertices, a3)) && projectionIntersect(verticesProjection(this.vertices, a4), verticesProjection(sprite.vertices, a4));
      }

    }, {
      kind: "method",
      key: "relayout",

      value() {}

    }, {
      kind: "method",
      key: "draw",

      value(t, drawingContext = this.context) {
        // eslint-disable-line complexity
        _get(_getPrototypeOf(BaseSprite.prototype), "draw", this).call(this, t, drawingContext);

        if (!this.isVisible()) {
          return;
        }

        const bound = this.originalRect;
        let cachableContext = !this.isVirtual && this.cache;
        const filter = this.attr('filter'),
              shadow = this.attr('shadow'),
              clipOverflow = this.attr('clipOverflow'),
              enableCache = this.attr('enableCache') === true || this.attr('enableCache') === 'auto' && !this.__labelCount && clipOverflow || shadow || filter;
        const ratio = this.layer ? this.layer.displayRatio || 1.0 : 1.0;

        if (enableCache && (shadow || filter || cachableContext !== false) && !cachableContext) {
          cachableContext = _utils__WEBPACK_IMPORTED_MODULE_2__["cacheContextPool"].get(drawingContext);

          if (cachableContext) {
            // +2 to solve 1px problem
            cachableContext.canvas.width = Math.ceil(bound[2] * ratio) + 2;
            cachableContext.canvas.height = Math.ceil(bound[3] * ratio) + 2;
          }
        }

        const evtArgs = {
          context: drawingContext,
          cacheContext: cachableContext,
          target: this,
          renderTime: t,
          fromCache: !!this.cache
        };
        drawingContext.save();
        drawingContext.translate(...this.xy);
        drawingContext.transform(...this.transform.m); // fix for wxapp

        const alpha = drawingContext.globalAlpha != null ? drawingContext.globalAlpha : 1;
        drawingContext.globalAlpha = alpha * this.attr('opacity');

        if (!cachableContext) {
          drawingContext.translate(bound[0], bound[1]);
        } else {
          cachableContext.save(); // solve 1px problem

          cachableContext.translate(bound[0] - Math.floor(bound[0]) + 1, bound[1] - Math.floor(bound[1]) + 1);

          if (ratio !== 1.0) {
            cachableContext.scale(ratio, ratio);
          }
        }

        this.dispatchEvent('beforedraw', evtArgs, true, true);

        if (cachableContext) {
          // set cache before render for group
          if (!this.cache) {
            this.cache = cachableContext;
            this.render(t, cachableContext);
          }
        } else {
          this.render(t, drawingContext);
        }

        if ((shadow || filter) && !cachableContext) {
          console.warn('No cachable context. Shadows and filters have been ignored.');
        }

        if (!clipOverflow && cachableContext) {
          console.warn('Clip overflow is ignored because of cache enabled.');
        }

        if (cachableContext && cachableContext.canvas.width > 0 && cachableContext.canvas.height > 0) {
          if (filter) {
            drawingContext.filter = _filters__WEBPACK_IMPORTED_MODULE_5__["default"].compile(filter);
          }

          if (shadow) {
            let {
              blur,
              color,
              offset
            } = shadow;
            blur = blur || 1;
            color = color || 'rgba(0,0,0,1)';
            drawingContext.shadowBlur = blur;
            drawingContext.shadowColor = color;

            if (offset) {
              drawingContext.shadowOffsetX = offset[0];
              drawingContext.shadowOffsetY = offset[1];
            }
          }

          drawingContext.drawImage(cachableContext.canvas, Math.floor(bound[0]) - 1, Math.floor(bound[1]) - 1, bound[2] + 2, bound[3] + 2);
        }

        this.dispatchEvent('afterdraw', evtArgs, true, true);

        if (cachableContext) {
          cachableContext.restore();
        }

        drawingContext.restore();
        this[_cachePriority]++;
        return drawingContext;
      }

    }, {
      kind: "get",
      key: "needRender",

      value() {
        if (this.isVirtual) return false;
        const [offsetWidth, offsetHeight] = this.offsetSize;
        if (offsetWidth <= 0 || offsetHeight <= 0) return false;
        const border = this.attr('border');

        if (border.width <= 0 && this.attr('borderRadius') <= 0 && !this.attr('bgcolor') && !this.attr('gradients').bgcolor && !this.attr('bgimage')) {
          return false; // don't need to render
        }

        return true;
      }

    }, {
      kind: "method",
      key: "show",

      value() {
        this.attr('display', this.__originalDisplay || '');
        return this;
      }

    }, {
      kind: "method",
      key: "hide",

      value() {
        const display = this.attr('display');

        if (display !== 'none') {
          this.__originalDisplay = display;
          this.attr('display', 'none');
        }

        return this;
      }

    }, {
      kind: "method",
      key: "render",

      value(t, drawingContext) {
        const border = this.attr('border'),
              borderRadius = this.attr('borderRadius'),
              padding = this.attr('padding'),
              [offsetWidth, offsetHeight] = this.offsetSize,
              [clientWidth, clientHeight] = this.clientSize;

        if (!this.needRender) {
          drawingContext.translate(padding[3], padding[0]);
          return false;
        }

        const borderWidth = border.width;
        let borderStyle = border.style; // draw border

        if (borderWidth) {
          drawingContext.lineWidth = borderWidth;
          const [x, y, w, h, r] = [borderWidth / 2, borderWidth / 2, offsetWidth - borderWidth, offsetHeight - borderWidth, borderRadius];
          Object(_utils__WEBPACK_IMPORTED_MODULE_2__["drawRadiusBox"])(drawingContext, [x, y, w, h], r);
          drawingContext.save();

          if (borderStyle && borderStyle !== 'solid') {
            const dashOffset = this.attr('dashOffset');
            drawingContext.lineDashOffset = dashOffset;

            if (borderStyle === 'dashed') {
              borderStyle = [borderWidth * 3, borderWidth * 3];
            }

            drawingContext.setLineDash(borderStyle);
          }

          drawingContext.strokeStyle = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["findColor"])(drawingContext, this, 'border');
          drawingContext.stroke();
          drawingContext.restore();
        } // draw bgcolor


        const bgcolor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["findColor"])(drawingContext, this, 'bgcolor');
        const bgimage = this.attr('bgimage');

        if (!this.cache || borderWidth || borderRadius || bgcolor || bgimage && bgimage.display !== 'none') {
          let [x, y, w, h, r] = [borderWidth, borderWidth, clientWidth, clientHeight, borderRadius];

          if (Array.isArray(r)) {
            r = r.map(r => r - borderWidth / 2);
          }

          Object(_utils__WEBPACK_IMPORTED_MODULE_2__["drawRadiusBox"])(drawingContext, [x, y, w, h], r);

          if (bgcolor) {
            drawingContext.fillStyle = bgcolor;
            drawingContext.fill();
          } // clip is expensive, we should only perform clip when it has to.


          if (bgimage && bgimage.display !== 'none' || borderRadius && (this.nodeType !== 'sprite' || this.textures && this.textures.length)) {
            drawingContext.clip();
          }

          if (bgimage && bgimage.image && bgimage.display !== 'none') {
            drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
          }
        }

        drawingContext.translate(borderWidth + padding[3], borderWidth + padding[0]);
        return true;
      }

    }]
  };
}, _basenode__WEBPACK_IMPORTED_MODULE_4__["default"]);



function drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  const w = image.width,
        h = image.height;
  const [top, right, bottom, left] = clip9 || [16, 16, 16, 16];
  const leftTop = [0, 0, left, top],
        rightTop = [w - right, 0, right, top],
        rightBottom = [w - right, h - bottom, right, bottom],
        leftBottom = [0, h - bottom, left, bottom];
  const boxRight = offsetWidth - right - borderWidth,
        boxBottom = offsetHeight - borderWidth - bottom; // draw .9 cross

  const midWidth = w - left - right,
        midHeight = h - top - bottom;

  if (midWidth > 0) {
    let midBoxWidth = clientWidth - left - right + 2;
    let leftOffset = borderWidth + left - 1;

    while (midBoxWidth > 0) {
      const ww = Math.min(midBoxWidth, midWidth) + 1;
      const topPiece = [left - 1, 0, ww, top],
            bottomPiece = [left - 1, h - bottom, ww, bottom];
      drawingContext.drawImage(image, ...topPiece, leftOffset, borderWidth, ww, top);
      drawingContext.drawImage(image, ...bottomPiece, leftOffset, boxBottom, ww, bottom);
      midBoxWidth -= midWidth;

      if (midBoxWidth > 0) {
        leftOffset += midWidth;
      }
    }
  }

  if (midHeight > 0) {
    let midBoxHeight = clientHeight - top - bottom + 2;
    let topOffset = borderWidth + top - 1;

    while (midBoxHeight > 0) {
      const hh = Math.min(midBoxHeight, midHeight) + 1;
      const leftPiece = [0, top - 1, left, hh],
            rightPiece = [w - right, top - 1, right, hh];
      drawingContext.drawImage(image, ...leftPiece, borderWidth, topOffset, left, hh);
      drawingContext.drawImage(image, ...rightPiece, boxRight, topOffset, right, hh);
      midBoxHeight -= midHeight;

      if (midBoxHeight > 0) {
        topOffset += midHeight;
      }
    }
  }

  if (midHeight && midWidth > 0) {
    let midBoxWidth = clientWidth - left - right + 2;
    let leftOffset = borderWidth + left - 1;

    while (midBoxWidth > 0) {
      let midBoxHeight = clientHeight - top - bottom + 2;
      let topOffset = borderWidth + top - 1;

      while (midBoxHeight > 0) {
        const ww = Math.min(midBoxWidth, midWidth) + 1,
              hh = Math.min(midBoxHeight, midHeight) + 1;
        const midPiece = [left - 1, top - 1, ww, hh];
        drawingContext.drawImage(image, ...midPiece, leftOffset, topOffset, ww, hh);
        midBoxHeight -= midWidth;

        if (midBoxHeight > 0) {
          topOffset += midHeight;
        }
      }

      midBoxWidth -= midWidth;

      if (midBoxWidth > 0) {
        leftOffset += midWidth;
      }
    }
  } // draw four corners


  drawingContext.drawImage(image, ...leftTop, borderWidth, borderWidth, left, top);
  drawingContext.drawImage(image, ...rightTop, boxRight, borderWidth, right, top);
  drawingContext.drawImage(image, ...rightBottom, boxRight, boxBottom, left, bottom);
  drawingContext.drawImage(image, ...leftBottom, borderWidth, boxBottom, left, bottom);
}

function drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  const {
    image,
    display,
    clip9
  } = bgimage;

  if (display === '.9') {
    drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
  } else {
    let offset = bgimage.offset || [0, 0],
        w = image.width,
        h = image.height;

    if (display === 'center') {
      offset = [(clientWidth - w) * 0.5, (clientHeight - h) * 0.5];
    } else if (display === 'stretch') {
      w = clientWidth - offset[0];
      h = clientHeight - offset[1];
    }

    drawingContext.drawImage(image, borderWidth + offset[0], borderWidth + offset[1], w, h);

    if (w > 0 && (display === 'repeat' || display === 'repeatX')) {
      let cw = clientWidth - borderWidth - offset[0] - w;

      while (cw > borderWidth) {
        drawingContext.drawImage(image, clientWidth - cw, borderWidth + offset[1], w, h);

        if (h > 0 && display === 'repeat') {
          let ch = clientHeight - borderWidth - offset[1] - h;

          while (ch > borderWidth) {
            drawingContext.drawImage(image, clientWidth - cw, clientHeight - ch, w, h);
            ch -= h;
          }
        }

        cw -= w;
      }
    }

    if (h > 0 && (display === 'repeat' || display === 'repeatY')) {
      let ch = clientHeight - borderWidth - offset[1] - h;

      while (ch > borderWidth) {
        drawingContext.drawImage(image, borderWidth + offset[0], clientHeight - ch, w, h);
        ch -= h;
      }
    }
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpriteAttr; });
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





const cache = true,
      reflow = true,
      relayout = true;

function parseBorderValue(val) {
  if (val == null) {
    return null;
  }

  if (typeof val === 'number' || typeof val === 'string') {
    val = {
      width: parseFloat(val)
    };
  } else if (Array.isArray(val)) {
    val = {
      width: parseFloat(val[0]),
      color: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseColorString"])(val[1] || '#000')
    };
  } else {
    val.width = parseFloat(val.width);
    val.color = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseColorString"])(val.color || '#000');
  }

  val = Object.assign({
    width: 1,
    color: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseColorString"])('#000'),
    style: 'solid'
  }, val);
  return val;
}

let SpriteAttr = _decorate(null, function (_initialize, _NodeAttr) {
  class SpriteAttr extends _NodeAttr {
    constructor(subject) {
      super(subject);

      _initialize(this);

      Object.defineProperty(this, '__reflowTag', {
        writable: true,
        value: false
      });
    }

  }

  return {
    F: SpriteAttr,
    d: [{
      kind: "method",
      key: "clearFlow",

      value() {
        this.__reflowTag = true;
        return this;
      }

    }, {
      kind: "method",
      key: "set",

      value(key, value, isQuiet = false) {
        _get(_getPrototypeOf(SpriteAttr.prototype), "set", this).call(this, key, value, isQuiet); // auto reflow


        if (key === 'margin') {
          this.__reflowTag = true;
        }
      }

    }, {
      kind: "method",
      key: "merge",

      value(attrs) {
        if (typeof attrs === 'string') {
          attrs = JSON.parse(attrs);
        }

        Object.entries(attrs).forEach(([key, value]) => {
          if (key !== 'offsetPath' && key !== 'offsetDistance' && key !== 'offsetRotate' && key !== 'offsetAngle' && key !== 'offsetPoint') {
            // this[key] = value;
            this.subject.attr(key, value);
          } else if (key === 'offsetPath') {
            const offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](value);
            this.set('offsetPath', offsetPath.d);
            this.saveObj('offsetPath', offsetPath);
          } else {
            this.set(key, value);
          }
        });
        return this;
      }

    }, {
      kind: "method",
      key: "serialize",

      value() {
        const attrs = this.getAttributes();
        delete attrs.id;
        const offsetAngle = this.get('offsetAngle');
        if (offsetAngle != null) attrs.offsetAngle = offsetAngle;
        const offsetPoint = this.get('offsetPoint');
        if (offsetPoint != null) attrs.offsetPoint = offsetPoint;
        return JSON.stringify(attrs);
      }

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],
      key: "enableCache",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_3__["oneOrTwoValues"]), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        relayout,
        reflow
      })],
      key: "anchor",

      value() {
        return [0, 0];
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "display",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('width')],
      key: "layoutX",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('height')],
      key: "layoutY",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('width')],
      key: "x",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('height')],
      key: "y",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringInt"]), _utils__WEBPACK_IMPORTED_MODULE_3__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])(['x', 'y'])],
      key: "pos",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],
      key: "bgcolor",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      })],
      key: "opacity",

      value() {
        return 1;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('width')],
      key: "width",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('height')],
      key: "height",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('width')],
      key: "layoutWidth",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('height')],
      key: "layoutHeight",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringInt"]), _utils__WEBPACK_IMPORTED_MODULE_3__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])(['width', 'height'])],
      key: "size",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseInt), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "borderWidth",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "borderColor",

      value() {
        return 'rgba(0,0,0,0)';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "borderStyle",

      value() {
        return 'solid';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseBorderValue), _utils__WEBPACK_IMPORTED_MODULE_3__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])({
        width: 'borderWidth',
        color: 'borderColor',
        style: 'borderStyle'
      })],
      key: "border",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "paddingTop",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "paddingRight",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "paddingBottom",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "paddingLeft",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringInt"], _utils__WEBPACK_IMPORTED_MODULE_3__["fourValuesShortCut"]), _utils__WEBPACK_IMPORTED_MODULE_3__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])(['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'])],
      key: "padding",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_3__["eightValuesShortCut"]), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "borderRadius",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow
      })],
      key: "boxSizing",

      value() {
        return 'content-box';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), _utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],
      key: "dashOffset",

      value() {
        return 0;
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringTransform"]), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        value: 'matrix(1,0,0,1,0,0)'
      })],
      key: "transform",

      value(val) {
        /*
          rotate: 0,
          scale: [1, 1],
          translate: [0, 0],
          skew: [0, 0],
          matrix: [1,0,0,1,0,0],
         */
        Object.assign(this.__attr, {
          rotate: 0,
          scale: [1, 1],
          translate: [0, 0],
          skew: [0, 0]
        });

        if (Array.isArray(val)) {
          this.transformMatrix = val;
          this.set('transform', `matrix(${val})`);
        } else {
          this.transformMatrix = [1, 0, 0, 1, 0, 0];
          const transformStr = [];
          Object.entries(val).forEach(([key, value]) => {
            if (key === 'matrix' && Array.isArray(value)) {
              this.transformMatrix = new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](value).m;
            } else {
              this[key] = value;
            }

            transformStr.push(`${key}(${value})`);
          });
          this.set('transform', transformStr.join(' '));
        }
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringFloat"]), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      })],
      key: "transformOrigin",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      })],
      key: "transformMatrix",

      value() {
        return [1, 0, 0, 1, 0, 0];
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        value: 0
      })],
      key: "rotate",

      value(val) {
        const delta = this.rotate - val;
        this.set('rotate', val);
        const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](this.transformMatrix).rotate(-delta);
        this.transformMatrix = transform.m;
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_3__["oneOrTwoValues"]), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        value: [1, 1]
      })],
      key: "scale",

      value(val) {
        val = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["oneOrTwoValues"])(val).map(v => {
          if (Math.abs(v) > 0.001) {
            return v;
          }

          return 1 / v > 0 ? 0.001 : -0.001;
        });
        const oldVal = this.scale || [1, 1];
        const delta = [val[0] / oldVal[0], val[1] / oldVal[1]];
        this.set('scale', val);
        const offsetAngle = this.get('offsetAngle');

        if (offsetAngle) {
          this.rotate -= offsetAngle;
        }

        const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](this.transformMatrix);
        transform.scale(...delta);
        this.transformMatrix = transform.m;

        if (offsetAngle) {
          this.rotate += offsetAngle;
        }
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        value: [0, 0]
      })],
      key: "translate",

      value(val) {
        const oldVal = this.translate || [0, 0];
        const delta = [val[0] - oldVal[0], val[1] - oldVal[1]];
        this.set('translate', val);
        const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](this.transformMatrix);
        transform.translate(...delta);
        this.transformMatrix = transform.m;
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        value: [0, 0]
      })],
      key: "skew",

      value(val) {
        const oldVal = this.skew || [0, 0];
        const invm = new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"]().skew(...oldVal).inverse();
        this.set('skew', val);
        const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](this.transformMatrix);
        transform.multiply(invm).skew(...val);
        this.transformMatrix = transform.m;
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseInt), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        value: 0
      })],
      key: "zIndex",

      value(val) {
        this.set('zIndex', val);
        const subject = this.subject;

        if (subject.parent) {
          subject.parent.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["sortOrderedSprites"])(subject.parent.childNodes);
        }
      }

    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],
      key: "linearGradients",

      value(val)
      /* istanbul ignore next  */
      {
        this.gradients = val;
      }

    }, {
      kind: "get",
      key: "linearGradients",

      value() {
        return this.gradients;
      }

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],
      key: "gradients",

      value() {
        return {};
      }

    }, {
      kind: "method",
      key: "resetOffset",

      value() {
        let offsetPath = this.offsetPath;
        const dis = this.offsetDistance;

        if (offsetPath) {
          const pathObj = this.loadObj('offsetPath');

          if (pathObj) {
            offsetPath = pathObj;
          } else {
            offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](offsetPath);
            this.saveObj('offsetPath', offsetPath);
          }
        }

        if (offsetPath != null) {
          let len = dis * offsetPath.getTotalLength();
          const [x, y] = offsetPath.getPointAtLength(len);
          let angle = this.offsetRotate;

          if (angle === 'auto' || angle === 'reverse') {
            if (angle === 'reverse' && len === 0) {
              len = 1;
            }

            const [x1, y1] = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1);

            if (x1 === x && y1 === y) {
              // last point
              angle = this.get('offsetAngle');
            } else {
              angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI;
            }

            if (this.offsetRotate === 'reverse') {
              angle = -angle;
            }
          }

          const offsetAngle = this.get('offsetAngle');

          if (offsetAngle) {
            this.rotate -= offsetAngle;
          }

          this.set('offsetAngle', angle);
          this.rotate += angle;
          const offsetPoint = this.get('offsetPoint');

          if (offsetPoint) {
            this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]];
          }

          this.set('offsetPoint', [x, y]);
          this.pos = [this.x + x, this.y + y];
        }
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      })],
      key: "offsetPath",

      value(val) {
        const offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](val);
        this.set('offsetPath', offsetPath.d);
        this.saveObj('offsetPath', offsetPath);
        this.resetOffset();
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        value: 0
      })],
      key: "offsetDistance",

      value(val) {
        this.set('offsetDistance', val);
        this.resetOffset();
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        value: 'auto'
      })],
      key: "offsetRotate",

      value(val) {
        if (typeof val === 'string' && val !== 'auto' && val !== 'reverse') {
          val = parseFloat(val);
        }

        this.set('offsetRotate', val);
        this.resetOffset();
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      })],
      key: "filter",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache
      })],
      key: "shadow",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        cache,
        relayout
      })],
      key: "position",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow,
        relayout,
        cache
      })],
      key: "marginTop",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow,
        relayout,
        cache
      })],
      key: "marginRight",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow,
        relayout,
        cache
      })],
      key: "marginBottom",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        reflow,
        relayout,
        cache
      })],
      key: "marginLeft",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringInt"], _utils__WEBPACK_IMPORTED_MODULE_3__["fourValuesShortCut"]), _utils__WEBPACK_IMPORTED_MODULE_3__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])(['marginTop', 'marginRight', 'marginBottom', 'marginLeft'])],
      key: "margin",
      value: void 0
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({
        value: ''
      })],
      key: "bgimage",

      value(val) {
        if (val && val.clip9) val.clip9 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["fourValuesShortCut"])(val.clip9);

        if (val && !val.image && this.subject.loadBgImage) {
          val = this.subject.loadBgImage(val);
        }

        this.set('bgimage', val);
      }

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],
      key: "clipOverflow",

      value() {
        return true;
      }

    }]
  };
}, _attr__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attr; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



const _attr = Symbol('attr'),
      _style = Symbol('style'),
      _temp = Symbol('store'),
      _subject = Symbol('subject'),
      _default = Symbol('default');

let Attr = _decorate(null, function (_initialize) {
  class Attr {
    constructor(subject) {
      _initialize(this);

      this[_subject] = subject;
      this[_default] = {};
      this[_attr] = {};
      this[_style] = {};
      this.__cached = {};
      if (!subject.updateStyles) subject.updateStyles = () => {};
      this[_temp] = new Map(); // save non-serialized values

      Object.defineProperty(this, '__attributesSet', {
        value: new Set()
      });
      Object.defineProperty(this, '__styleTag', {
        writable: true,
        value: false
      });
      Object.defineProperty(this, '__updateTag', {
        writable: true,
        value: false
      });
    }

  }

  return {
    F: Attr,
    d: [{
      kind: "field",
      static: true,
      key: "relatedAttributes",

      value() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__["relatedAttributes"];
      }

    }, {
      kind: "field",
      static: true,
      key: "attributeNames",

      value() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__["attributeNames"];
      }

    }, {
      kind: "method",
      static: true,
      key: "addAttributes",

      value(attrs) {
        const descriptors = {};
        Object.entries(attrs).forEach(([key, v]) => {
          if (typeof v === 'function') {
            const _setter = v;
            v = {
              set(val) {
                _setter(this, val);
              }

            };
          }

          let {
            decorators: wrappers,
            value,
            get,
            set
          } = v;
          wrappers = wrappers || [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]];

          if (set == null) {
            set = function (val) {
              this.set(key, val);
            };
          }

          if (get == null) {
            get = function () {
              return this.get(key);
            };
          }

          const $decorator = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["decorators"])(...wrappers);
          descriptors[key] = $decorator(key, value, {
            set,
            get
          });
        });
        Object.defineProperties(this.prototype, descriptors);
      }

    }, {
      kind: "get",
      key: "__attr",

      value() {
        return this[_attr];
      }

    }, {
      kind: "method",
      key: "setDefault",

      value(attrs) {
        Object.assign(this[_default], attrs);
      }

    }, {
      kind: "method",
      key: "getDefaultValue",

      value(key, defaultValue) {
        if (key in this[_default]) return this[_default][key];
        return defaultValue;
      }

    }, {
      kind: "method",
      key: "saveObj",

      value(key, val) {
        this[_temp].set(key, val);

        this.__updateTag = true;
      }

    }, {
      kind: "method",
      key: "loadObj",

      value(key) {
        return this[_temp].get(key);
      }

    }, {
      kind: "method",
      key: "quietSet",

      value(key, val) {
        this.set(key, val, true);
      }

    }, {
      kind: "method",
      key: "clearStyle",

      value() {
        this[_style] = {};
      }

    }, {
      kind: "method",
      key: "clearLayout",

      value() {
        this.__clearLayout = true;
        return this;
      }

    }, {
      kind: "get",
      key: "style",

      value() {
        return this[_style];
      }

    }, {
      kind: "method",
      key: "set",

      value(key, val, isQuiet = false) {
        this.__quietTag = isQuiet;
        let oldVal;

        if (isQuiet && key.length > 5 && key.indexOf('data-') === 0) {
          const dataKey = key.slice(5);
          oldVal = this.subject.data(dataKey);
          this.subject.data(dataKey, val);
        } else if (this.__styleTag) {
          oldVal = this[_style][key];

          if (val != null) {
            this[_style][key] = val;
          } else {
            delete this[_style][key];
          }
        } else {
          oldVal = this[_attr][key];
        }

        if (val && typeof val === 'object') {
          if (oldVal !== val && JSON.stringify(val) === JSON.stringify(oldVal)) {
            return false;
          }
        } else if (oldVal === val) {
          return false;
        }

        if (!this.__styleTag) {
          this[_attr][key] = val;
        }

        this.__updateTag = true;
        return true;
      }

    }, {
      kind: "method",
      key: "get",

      value(key) {
        if (key.length > 5 && key.indexOf('data-') === 0) {
          return this.subject.data(key.slice(5));
        }

        if (this.__getStyleTag || this[_style][key] != null && !this.__attributesSet.has(key)) {
          return this[_style][key];
        }

        return this[_attr][key];
      }

    }, {
      kind: "method",
      key: "getAttributes",

      value(includeDefault = false) {
        const ret = {};

        if (includeDefault) {
          [..._utils__WEBPACK_IMPORTED_MODULE_0__["attributeNames"]].forEach(key => {
            if (key in this) {
              ret[key] = this[key];
            }
          });
        }

        [...this.__attributesSet].forEach(key => {
          if (key.indexOf('__internal') !== 0) {
            ret[key] = this[key];
          }
        });
        Object.entries(this).forEach(([key, value]) => {
          if (key.indexOf('__') !== 0) {
            ret[key] = value;
          }
        });
        return ret;
      }

    }, {
      kind: "get",
      key: "attrs",

      value() {
        return this.getAttributes(true);
      }

    }, {
      kind: "method",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deprecate"])('You can remove this call.')],
      key: "clearCache",

      value() {
        return this;
      }

    }, {
      kind: "method",
      key: "merge",

      value(attrs) {
        if (typeof attrs === 'string') {
          attrs = JSON.parse(attrs);
        }

        Object.entries(attrs).forEach(([key, value]) => {
          this.subject.attr(key, value);
        });
        return this;
      }

    }, {
      kind: "method",
      key: "serialize",

      value() {
        const attrs = this.getAttributes();
        delete attrs.id;
        return JSON.stringify(attrs);
      }

    }, {
      kind: "get",
      key: "subject",

      value() {
        return this[_subject];
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(String), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        quiet: true
      })],
      key: "id",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(String), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        quiet: true
      })],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(String), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        quiet: true
      })],
      key: "class",
      value: void 0
    }]
  };
});



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseNode; });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import stylesheet from './stylesheet';



function createAttribute(attr, key) {
  Object.defineProperty(attr, key, {
    enumerable: false,
    configurable: true,

    set(value) {
      if (!this.__styleTag && value != null) {
        this.__attributesSet.add(key);
      }

      if (!this.__styleTag && value == null) {
        if (this.__attributesSet.has(key)) {
          this.__attributesSet.delete(key);
        }
      }

      this.quietSet(key, value);
      const subject = this.subject; // fixed color inherit
      // if(key === 'color') {
      //   subject.attr('fillColor', value);
      // }
      // fixed font inherit

      if (key === 'fontSize' || key === 'fontFamily' || key === 'fontStyle' || key === 'fontVariant' || key === 'fontWeight') {
        const font = this.get('font') || 'normal normal normal 16px Arial';
        const parsed = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font);
        parsed.fontSize = parsed.size + parsed.unit;

        if (key === 'fontSize' && (typeof value === 'number' || /[\d.]$/.test(value))) {
          value += 'px';
        }

        parsed[key] = value;
        const {
          style,
          variant,
          weight,
          family,
          fontSize
        } = parsed;
        subject.attr('font', `${style} ${variant} ${weight} ${fontSize} ${family}`);
      }

      if ((key === 'font' || key === 'lineHeight' || key === 'lineBreak' || key === 'wordBreak' || key === 'letterSpacing' || key === 'textIndent') && subject.querySelectorAll) {
        const children = subject.querySelectorAll('*');
        children.forEach(node => {
          if (node.retypesetting) node.retypesetting();
        });
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_1__["inheritAttributes"].has(key)) {
        subject.forceUpdate();
      }
    },

    get() {
      const ret = this.get(key);
      return ret != null ? ret : this.getDefaultValue(key);
    }

  });
}

const _eventHandlers = Symbol('eventHandlers'),
      _collisionState = Symbol('collisionState'),
      _data = Symbol('data'),
      _mouseCapture = Symbol('mouseCapture');

const _attr = Symbol('attr');

class BaseNode {
  constructor(attrs) {
    this[_eventHandlers] = {};
    this[_data] = {};
    this[_attr] = new this.constructor.Attr(this);

    if (attrs) {
      this.attr(attrs);
    }
  }

  serialize() {
    const nodeType = this.nodeType,
          attrs = this[_attr].serialize(),
          dataset = JSON.stringify(this.dataset),
          id = this.id;

    return {
      nodeType,
      attrs,
      dataset,
      id
    };
  }

  clearLayout() {
    if (this.hasLayout) {
      this.parent.clearLayout();
    }
  }

  merge(attrs) {
    this[_attr].merge(attrs);
  }

  cloneNode() {
    const node = new this.constructor();
    node.merge(this[_attr].serialize());
    node.data(this.dataset);
    const bgimage = this.attr('bgimage');

    if (bgimage && bgimage.image) {
      node.attr('bgimage', null);
      node.attr('bgimage', Object.assign({}, bgimage));
    }

    return node;
  }

  attr(props, val) {
    const setVal = (key, value) => {
      if (!(key in this[_attr])) {
        createAttribute(this[_attr], key);
      }

      this[_attr][key] = value;
    };

    if (typeof props === 'object') {
      Object.entries(props).forEach(([prop, value]) => {
        this.attr(prop, value);
      });
      return this;
    }

    if (typeof props === 'string') {
      if (val !== undefined) {
        if (props === 'attrs') {
          if (Array.isArray(val)) {
            val = Object.assign({}, ...val);
          }

          Object.entries(val).forEach(([prop, value]) => {
            this.attr(prop, value);
          });
          return this;
        }

        if (props === 'style') {
          if (Array.isArray(val)) {
            val = Object.assign({}, ...val);
          }

          Object.entries(val).forEach(([prop, value]) => {
            this.style[prop] = value;
          });
          return this;
        }

        if (typeof val === 'function') {
          val = val(this.attr(props));
        }

        if (val && typeof val.then === 'function') {
          return val.then(res => {
            setVal(props, res);
          });
        }

        setVal(props, val);
        return this;
      }

      if (!(props in this[_attr])) {
        createAttribute(this[_attr], props);
      }

      return this[_attr][props];
    }

    return this[_attr].attrs;
  }

  get __attr() {
    return this[_attr];
  }

  forceUpdate(clearCache) {
    const parent = this.parent;

    if (parent) {
      this.parent.update(this);
    }
  }

  restyle() {// stylesheet.computeStyle(this);
  }

  draw() {
    const styleNeedUpdate = this.__styleNeedUpdate;

    if (styleNeedUpdate) {
      this.restyle();

      if (this.querySelectorAll) {
        const children = this.querySelectorAll('*');
        children.forEach(child => child.restyle());
      }

      if (styleNeedUpdate === 'siblings') {
        if (this.parent) {
          const children = this.parent.children;
          const index = children.indexOf(this);
          const len = children.length;

          for (let i = index + 1; i < len; i++) {
            const node = children[i];
            node.restyle();

            if (node.querySelectorAll) {
              const nodes = node.querySelectorAll('*');
              nodes.forEach(child => child.restyle());
            }
          }
        }
      }
    }
  }

  get layer() {
    return this.parent && this.parent.layer;
  }

  data(props, val) {
    const setVal = (key, value) => {
      this[_data][key] = value;

      if (this.attr) {
        const attrKey = `data-${key}`; // this.attr(attrKey, value);

        if (_attr__WEBPACK_IMPORTED_MODULE_0__["default"].relatedAttributes.has(attrKey)) {
          this.updateStyles();
        }
      }

      if (value == null) {
        delete this[_data][key];
      }
    };

    if (typeof props === 'object') {
      Object.entries(props).forEach(([prop, value]) => {
        this.data(prop, value);
      });
      return this;
    }

    if (typeof props === 'string') {
      if (val !== undefined) {
        if (typeof val === 'function') {
          val = val(this[_data][props]);
        }

        if (val && typeof val.then === 'function') {
          return val.then(res => {
            setVal(props, res);
          });
        }

        setVal(props, val);
        return this;
      }

      return this[_data][props];
    }

    return this[_data];
  }

  updateStyles(nextSibling = false) {
    // append to parent & reset name or class or id auto updateStyles
    this.__styleNeedUpdate = nextSibling ? 'siblings' : 'children';
    this.forceUpdate(true);
  }

  get dataset() {
    return this[_data];
  }

  getEventHandlers(type) {
    return type != null ? this[_eventHandlers][type] || [] : this[_eventHandlers];
  }

  on(type, handler, useCapture = false) {
    if (Array.isArray(type)) {
      type.forEach(t => this.on(t, handler));
    } else {
      this[_eventHandlers][type] = this[_eventHandlers][type] || [];

      this[_eventHandlers][type].push({
        handler,
        useCapture
      });
    }

    return this;
  }

  once(type, handler, useCapture = false) {
    if (Array.isArray(type)) {
      type.forEach(t => this.once(t, handler));
    } else {
      this.on(type, function f(...args) {
        this.off(type, f);
        return handler.apply(this, args);
      });
    }

    return this;
  }

  off(type, handler) {
    if (Array.isArray(type)) {
      type.forEach(t => this.off(t, handler));
    } else if (handler && this[_eventHandlers][type]) {
      const handlers = this[_eventHandlers][type];

      if (handlers) {
        for (let i = 0; i < handlers.length; i++) {
          const {
            handler: _handler
          } = handlers[i];

          if (_handler === handler) {
            this[_eventHandlers][type].splice(i, 1);

            break;
          }
        }
      }
    } else {
      delete this[_eventHandlers][type];
    }

    return this;
  }

  remove(exit = true) {
    if (!this.parent) return null;
    return this.parent.removeChild(this, exit);
  }

  pointCollision(evt) {
    throw Error('you must override this method');
  }

  setMouseCapture() {
    this[_mouseCapture] = true;
  }

  releaseMouseCapture() {
    this[_mouseCapture] = false;
  }

  isCaptured(evt) {
    return (evt.type === 'mousemove' || evt.type === 'mousedown' || evt.type === 'mouseup') && this[_mouseCapture];
  }

  dispatchEvent(type, evt, collisionState = false, swallow = false, useCapturePhase = null) {
    // eslint-disable-line complexity
    let handlers = this.getEventHandlers(type);
    if (this.children && useCapturePhase === true) handlers = handlers.filter(handler => handler.useCapture);
    if (this.children && useCapturePhase === false) handlers = handlers.filter(handler => !handler.useCapture);
    evt.returnValue = true;

    if (swallow && handlers.length === 0) {
      return;
    }

    if (!evt.stopDispatch) {
      evt.stopDispatch = () => {
        evt.terminated = true;
      };
    }

    if (!evt.stopPropagation) {
      evt.stopPropagation = () => {
        evt.cancelBubble = true;
      };
    }

    if (!evt.preventDefault) {
      evt.preventDefault = () => {
        evt.returnValue = false;
      };
    }

    if (evt.type !== type) {
      if (evt.type) {
        evt.originalType = evt.type;
      }

      evt.type = type;
    }

    let isCollision = collisionState || this.pointCollision(evt);
    const captured = this.isCaptured(evt);

    if (this[_collisionState] && type === 'mouseleave') {
      // dispatched from group
      evt.target = this;
      this[_collisionState] = false;
      isCollision = true;
      this.attr('__internal_state_hover_', null);
    }

    if (!evt.terminated && (isCollision || captured)) {
      if (!evt.target) evt.target = this;
      const identifier = evt.identifier;

      if (identifier != null) {
        if (type === 'touchstart') {
          const layer = this.layer;
          layer.touchedTargets[identifier] = layer.touchedTargets[identifier] || [];
          layer.touchedTargets[identifier].push(this);
        }

        if (/^touch/.test(type)) {
          const touches = Array.from(evt.originalEvent.touches),
                layer = this.layer;
          evt.targetTouches = [];
          touches.forEach(touch => {
            const identifier = touch.identifier;

            if (layer.touchedTargets[identifier] && layer.touchedTargets[identifier].indexOf(this) >= 0) {
              evt.targetTouches.push(touch);
            }
          });
        }
      }

      if (type === 'mousedown' || type === 'touchstart') {
        this.attr('__internal_state_active_', 'active');
      } else if (type === 'mouseup' || type === 'touchend') {
        this.attr('__internal_state_active_', null);
      }

      [...handlers].forEach(handler => handler.handler.call(this, evt));

      if (!this[_collisionState] && isCollision && type === 'mousemove') {
        const _evt = Object.assign({}, evt);

        _evt.type = 'mouseenter';
        delete _evt.target;
        _evt.terminated = false;
        this.dispatchEvent('mouseenter', _evt, true, true);
        this.attr('__internal_state_hover_', 'hover');
        this[_collisionState] = true;
      }
    }

    if (this[_collisionState] && !isCollision && type === 'mousemove') {
      const _evt = Object.assign({}, evt);

      _evt.type = 'mouseleave';
      delete _evt.target;
      _evt.terminated = false;
      this.dispatchEvent('mouseleave', _evt);
      this.attr('__internal_state_hover_', null); // this[_collisionState] = false;
    }

    return isCollision;
  } // called when layer appendChild


  connect(parent, zOrder = 0) {
    if (this.parent) {
      // throw new Error('This node belongs to another parent node! Remove it first...')
      this.remove();
    }

    Object.defineProperty(this, 'zOrder', {
      value: zOrder,
      writable: false,
      configurable: true
    });
    Object.defineProperty(this, 'parent', {
      get: () => parent,
      configurable: true
    });
    this.dispatchEvent('append', {
      parent,
      zOrder
    }, true, true);
    parent.dispatchEvent('appendChild', {
      child: this,
      zOrder
    }, true, true);

    if (this.layer) {
      this.updateStyles(true);
    }

    return this;
  } // override to recycling resources


  disconnect(parent) {
    if (!this.parent || parent !== this.parent) {
      throw new Error('Invalid node to disconnect');
    }

    if (this.layer) {
      const nextSibling = this.nextElementSilbing;
      if (nextSibling) nextSibling.updateStyles(true);
    }

    const zOrder = this.zOrder;
    delete this.zOrder;
    delete this.parent;
    delete this.isDirty;
    this.dispatchEvent('remove', {
      parent,
      zOrder
    }, true, true);
    parent.dispatchEvent('removeChild', {
      child: this,
      zOrder
    }, true, true);
    return this;
  }

  enter() {
    // override to do atction after connection, can return a promise
    return this;
  }

  exit() {
    // override to do atction before disconnection, can return a promise
    return this;
  }

  set id(val) {
    this.attr('id', val);
  }

  get id() {
    return this.attr('id');
  }

  set name(val) {
    this.attr('name', val);
  }

  get name() {
    return this.attr('name');
  }

  set className(val) {
    this.attr('class', val);
  }

  get className() {
    return this.attr('class');
  }

}

_defineProperty(BaseNode, "Attr", _attr__WEBPACK_IMPORTED_MODULE_0__["default"]);

_defineProperty(BaseNode, "inheritAttributes", _utils__WEBPACK_IMPORTED_MODULE_1__["inheritAttributes"]);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
// http://www.runoob.com/cssref/css3-pr-filter.html

/* harmony default export */ __webpack_exports__["default"] = ({
  blur(px) {
    return `blur(${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(px)})`;
  },

  brightness(percent) {
    return `brightness(${percent})`;
  },

  contrast(percent) {
    return `contrast(${percent})`;
  },

  dropShadow([offsetX, offsetY, shadowRadius, color]) {
    return `drop-shadow(${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(offsetX)} ${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(offsetY)} ${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(shadowRadius)} ${color})`;
  },

  grayscale(percent) {
    return `grayscale(${percent})`;
  },

  hueRotate(value) {
    return `hue-rotate(${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(value, 'deg')})`;
  },

  invert(percent) {
    return `invert(${percent})`;
  },

  opacity(percent) {
    return `opacity(${percent})`;
  },

  saturate(percent) {
    return `saturate(${percent})`;
  },

  sepia(percent) {
    return `sepia(${percent})`;
  },

  url(path) {
    return `url(${path})`;
  },

  compile(filter = {}) {
    return Object.entries(filter).reduce((accumulator, curVal) => {
      return accumulator.concat(this[curVal[0]](curVal[1]));
    }, []).join(' ');
  }

});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





const _texturesCache = Symbol('_texturesCache');

const _images = Symbol('_images');

let TextureAttr = _decorate(null, function (_initialize, _BaseSprite$Attr) {
  class TextureAttr extends _BaseSprite$Attr {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: TextureAttr,
    d: [{
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],
      key: "enableCache",

      value() {
        return true;
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        value: []
      })],
      key: "textures",

      value(textures) {
        if (!Array.isArray(textures)) {
          textures = [textures];
        }

        textures = textures.map(texture => {
          if (!texture.image) {
            texture = {
              image: texture
            };
          }

          texture.__tag = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["generateID"])(texture.image); // prevent JSON.stringify ignorance

          return texture;
        });
        this.loadTextures(textures);
        this.set('textures', textures);
      }

    }, {
      kind: "method",
      key: "loadTextures",

      value(textures) {
        const subject = this.subject; // adaptive textures

        let width = 0,
            height = 0;
        subject.images = textures.map(texture => {
          const {
            image,
            rect,
            srcRect
          } = texture;
          let w, h;

          if (rect) {
            w = rect[2] + rect[0];
            h = rect[3] + rect[1];
          } else if (srcRect) {
            w = srcRect[2];
            h = srcRect[3];
          } else {
            w = image.width;
            h = image.height;
          }

          if (width < w) {
            width = w;
          }

          if (height < h) {
            height = h;
          }

          delete texture.image;
          return image;
        });
        const texturesSize = subject.texturesSize;

        if (!texturesSize || texturesSize[0] !== width || texturesSize[1] !== height) {
          const attrSize = subject.attrSize;

          if (attrSize[0] === '' || attrSize[1] === '') {
            subject.reflow();
            subject.clearLayout();
          }
        }

        subject.texturesSize = [width, height];
        return textures;
      }

    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr);

let Sprite = _decorate(null, function (_initialize2, _BaseSprite) {
  class Sprite extends _BaseSprite {
    /**
      new Sprite({
        attr: {
          ...
        },
        attributeChangedCallback: function(prop, oldValue, newValue){
         }
      })
     */
    constructor(attr) {
      if (attr && attr.constructor !== Object) {
        attr = {
          textures: [attr]
        };
      }

      super();

      _initialize2(this);

      this[_texturesCache] = new Map();

      if (attr) {
        this.attr(attr);
      }
    }

  }

  return {
    F: Sprite,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",

      value() {
        return TextureAttr;
      }

    }, {
      kind: "method",
      key: "cloneNode",

      value() {
        const node = _get(_getPrototypeOf(Sprite.prototype), "cloneNode", this).call(this);

        if (this.images) {
          node.textures = this.textures.map((texture, i) => {
            texture.image = this.images[i];
            return texture;
          });
        }

        return node;
      }

    }, {
      kind: "set",
      key: "images",

      value(images) {
        this[_images] = images;
      }

    }, {
      kind: "get",
      key: "images",

      value() {
        return this[_images];
      }

    }, {
      kind: "set",
      key: "textures",

      value(textures) {
        this.attr('textures', textures);
      }

    }, {
      kind: "get",
      key: "textures",

      value() {
        return this.attr('textures');
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]],
      key: "contentSize",

      value() {
        const [width, height] = this.attrSize;
        const boxSize = this.texturesSize || [0, 0];
        let [w, h] = [width, height];

        if (width === '') {
          w = boxSize[0] | 0;

          if (height !== '' && boxSize[1]) {
            w *= height / boxSize[1];
          }
        }

        if (height === '') {
          h = boxSize[1] | 0;

          if (width !== '' && boxSize[0]) {
            h *= width / boxSize[0];
          }
        }

        return [w, h];
      }

    }, {
      kind: "method",
      key: "pointCollision",

      value(evt) {
        if (_get(_getPrototypeOf(Sprite.prototype), "pointCollision", this).call(this, evt)) {
          const textures = this.textures;

          if (textures) {
            let {
              offsetX,
              offsetY
            } = evt;
            if (offsetX == null && offsetY == null) return true;
            evt.targetTextures = [];
            const [anchorX, anchorY] = this.attr('anchor'),
                  [width, height] = this.contentSize;
            offsetX += width * anchorX;
            offsetY += height * anchorY;
            textures.forEach(texture => {
              const [x, y, w, h] = texture.rect || [0, 0, ...this.innerSize];

              if (offsetX >= x && offsetX - x < w && offsetY >= y && offsetY - y < h) {
                // touched textures
                evt.targetTextures.push(texture);
              }
            });
          }

          return true;
        }

        return false;
      }

    }, {
      kind: "get",
      key: "cache",

      value() {
        const bg = this.attr('bgcolor') || this.attr('gradients').bgcolor;

        if (!bg && this.textures.length <= 1) {
          return false;
        }

        return _get(_getPrototypeOf(Sprite.prototype), "cache", this);
      }

    }, {
      kind: "set",
      key: "cache",

      value(context) {
        _set(_getPrototypeOf(Sprite.prototype), "cache", context, this, true);
      }

    }, {
      kind: "method",
      key: "render",

      value(t, drawingContext) {
        _get(_getPrototypeOf(Sprite.prototype), "render", this).call(this, t, drawingContext);

        const textures = this.textures;
        let cliped = !this.attr('clipOverflow');

        if (this.images && this.images.length) {
          textures.forEach((texture, i) => {
            const img = this.images[i];
            const [w, h] = this.contentSize;
            const rect = texture.rect || [0, 0, w, h];
            const srcRect = texture.srcRect;

            if (!cliped && texture.rect && (rect[2] > w || rect[3] > h)) {
              cliped = true;
              drawingContext.beginPath();
              drawingContext.rect(0, 0, w, h);
              drawingContext.clip();
            }

            drawingContext.save();

            if (texture.filter) {
              Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setDeprecation"])('texture.filter', 'Instead use sprite.attr({filter}).');
              const imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height];
              const sx = rect[2] / imgRect[2],
                    sy = rect[3] / imgRect[3];
              drawingContext.filter = _filters__WEBPACK_IMPORTED_MODULE_2__["default"].compile(texture.filter);

              if (srcRect) {
                drawingContext.drawImage(img, ...srcRect, sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * srcRect[2], sy * srcRect[3]);
              } else {
                drawingContext.drawImage(img, sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * img.width, sy * img.height);
              }
            } else if (srcRect) {
              drawingContext.drawImage(img, ...srcRect, ...rect);
            } else {
              drawingContext.drawImage(img, ...rect);
            }

            drawingContext.restore();
          });
        }
      }

    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






const _boxSize = Symbol('boxSize'),
      _outputText = Symbol('outputText');

const measureText = (node, text, font, lineHeight = '') => {
  const ctx = node.context;

  if (!ctx) {
    return [0, 0];
  }

  ctx.save();
  ctx.font = font;
  let {
    width
  } = ctx.measureText(text);
  ctx.restore();
  const letterSpacing = node.attr('letterSpacing');

  if (letterSpacing) {
    width += letterSpacing * (text.length - 1);
  }

  const {
    size
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font);
  const height = lineHeight || size * 1.2;
  return [width, height].map(Math.round);
};

function calculTextboxSize(node) {
  if (!node.context) return '';
  const text = node.text,
        font = node.attr('font'),
        lineHeight = node.attr('lineHeight'),
        textIndent = node.attr('textIndent');
  let lines = [];
  let width = 0,
      height = 0;
  node[_outputText] = text;
  const lineBreak = node.attr('lineBreak'),
        textboxWidth = node.hasLayout ? node.attr('layoutWidth') : node.attr('width');

  if (lineBreak !== '' && textboxWidth !== '') {
    const wordBreak = node.attr('wordBreak');
    text.split(/\n/).forEach(line => {
      const breaker = Object(css_line_break__WEBPACK_IMPORTED_MODULE_0__["LineBreaker"])(line, {
        lineBreak,
        wordBreak
      });
      const words = [];
      let bk = breaker.next();

      while (!bk.done) {
        words.push(bk.value.slice());
        bk = breaker.next();
      }

      let l = '';
      words.forEach(word => {
        if (!l) {
          l = word;
        } else {
          const ll = `${l}${word}`;
          const [w] = measureText(node, ll, font);

          if (w > (lines.length === 0 ? textboxWidth - textIndent : textboxWidth)) {
            lines.push(l);
            l = word;
          } else {
            l = ll;
          }
        }
      });
      lines.push(l);
    }); // lines = node[_outputText].split(/\n/)

    node[_outputText] = lines.join('\n');
  } else {
    lines = text.split(/\n/);
  }

  lines.forEach((line, idx) => {
    let [w, h] = measureText(node, line, font, lineHeight);
    if (idx === 0) w += textIndent;
    width = Math.max(width, w);
    height += h;
  });
  const boxSize = node[_boxSize];

  if (!boxSize || boxSize[0] !== width || boxSize[1] !== height) {
    const attrSize = node.attrSize;

    if (attrSize[0] === '' || attrSize[1] === '') {
      node.reflow();
      node.clearLayout();
    }
  }

  node[_boxSize] = [width, height];
}

function setFontPart(font, part) {
  const {
    style,
    variant,
    weight,
    size0,
    unit,
    family
  } = Object.assign(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font), part);
  return `${style} ${variant} ${weight} ${size0}${unit} ${family}`;
}

let LabelSpriteAttr = _decorate(null, function (_initialize, _BaseSprite$Attr) {
  class LabelSpriteAttr extends _BaseSprite$Attr {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: LabelSpriteAttr,
    d: [{
      kind: "method",
      key: "retypesetting",

      value() {
        this.subject.retypesetting();
      }

    }, {
      kind: "method",
      key: "widthRetypeseeting",

      value() {
        if (this.lineBreak !== '') this.subject.retypesetting();
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(String), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'retypesetting'
      })],
      key: "text",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('normal normal normal 16px Arial')],
      key: "font",

      value() {
        return 'inherit';
      }

    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],
      key: "fontSize",

      value(val) {
        if (val == null) val = '16px';
        let unit = 'px';

        if (typeof val === 'string') {
          const unitReg = /^([\d.]+)(\w+)/;
          const matches = val.match(unitReg);

          if (!matches) {
            return null;
          }

          val = parseFloat(matches[1]);
          unit = matches[2];
        }

        this.font = setFontPart(this.font, {
          size0: val,
          unit
        });
      }

    }, {
      kind: "get",
      key: "fontSize",

      value() {
        const font = this.font;
        const {
          size0,
          unit
        } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font);
        return `${size0}${unit}`;
      }

    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],
      key: "fontFamily",

      value(val) {
        if (val == null) val = 'Arial';
        this.font = setFontPart(this.font, {
          family: val
        });
      }

    }, {
      kind: "get",
      key: "fontFamily",

      value() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(this.font).family;
      }

    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],
      key: "fontStyle",

      value(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          style: val
        });
      }

    }, {
      kind: "get",
      key: "fontStyle",

      value() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(this.font).style;
      }

    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],
      key: "fontVariant",

      value(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          variant: val
        });
      }

    }, {
      kind: "get",
      key: "fontVariant",

      value() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(this.font).variant;
      }

    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],
      key: "fontWeight",

      value(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          weight: val
        });
      }

    }, {
      kind: "get",
      key: "fontWeight",

      value() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(this.font).weight;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],
      key: "lineHeight",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('left')],
      key: "textAlign",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_1__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],
      key: "strokeColor",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_1__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],
      key: "color",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_1__["composit"])('color')],
      key: "fillColor",
      value: void 0
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],
      key: "flexible",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],
      key: "lineBreak",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],
      key: "wordBreak",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(0)],
      key: "letterSpacing",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(0)],
      key: "textIndent",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'widthRetypeseeting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["relative"])('width')],
      key: "width",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
        extra: 'widthRetypeseeting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["relative"])('width')],
      key: "layoutWidth",

      value() {
        return '';
      }

    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_2__["default"].Attr);

let Label = _decorate(null, function (_initialize2, _BaseSprite) {
  class Label extends _BaseSprite {
    constructor(attr) {
      if (typeof attr !== 'object') {
        attr = {
          text: String(attr)
        };
      }

      super(attr);

      _initialize2(this);
    }

  }

  return {
    F: Label,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",

      value() {
        return LabelSpriteAttr;
      }

    }, {
      kind: "set",
      key: "text",

      value(val) {
        this.attr('text', val);
      }

    }, {
      kind: "get",
      key: "text",

      value() {
        return this.attr('text');
      }

    }, {
      kind: "get",
      key: "textboxSize",

      value() {
        if (!this[_boxSize]) calculTextboxSize(this);
        return this[_boxSize];
      }

    }, {
      kind: "get",
      key: "flexibleFont",

      value() {
        const font = this.attr('font');
        if (this.attr('width') === '' && this.attr('layoutWidth') === '') return font;
        const textboxSize = this.textboxSize,
              contentSize = this.contentSize;
        let {
          style,
          variant,
          weight,
          size,
          family
        } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font);
        size *= contentSize[0] / textboxSize[0];
        return `${style} ${variant} ${weight} ${Math.floor(size)}px "${family}"`;
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_1__["flow"]],
      key: "contentSize",

      value() {
        let [width, height] = this.attrSize;

        if (width === '' || height === '') {
          const textboxSize = this.textboxSize;
          if (!textboxSize) return [0, 0];
          width = width || textboxSize[0];
          height = height || textboxSize[1];
        }

        if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
          height = Math.ceil(height * width / this.textboxSize[0]);
        }

        return [width, height];
      }

    }, {
      kind: "method",
      key: "connect",

      value(parent, zOrder = 0) {
        const ret = _get(_getPrototypeOf(Label.prototype), "connect", this).call(this, parent, zOrder);

        let _p = parent;

        while (_p && _p.__labelCount != null) {
          ++_p.__labelCount;
          _p = _p.parent;
        }

        return ret;
      }

    }, {
      kind: "method",
      key: "disconnect",

      value(parent) {
        const ret = _get(_getPrototypeOf(Label.prototype), "disconnect", this).call(this, parent);

        let _p = parent;

        while (_p && _p.__labelCount != null) {
          --_p.__labelCount;
          _p = _p.parent;
        }

        return ret;
      }

    }, {
      kind: "method",
      key: "retypesetting",

      value() {
        // calculTextboxSize(this);
        this[_boxSize] = false;
        this[_outputText] = null;
        this.reflow();
        this.forceUpdate(true);
      }

    }, {
      kind: "method",
      key: "restyle",

      value() {
        _get(_getPrototypeOf(Label.prototype), "restyle", this).call(this);

        this.retypesetting();
      }

    }, {
      kind: "method",
      key: "render",

      value(t, drawingContext) {
        _get(_getPrototypeOf(Label.prototype), "render", this).call(this, t, drawingContext);

        const textAlign = this.attr('textAlign'),
              flexible = this.attr('flexible'),
              font = flexible ? this.flexibleFont : this.attr('font'),
              lineHeight = this.attr('lineHeight');
        let text = this.text;

        if (text) {
          const [w, h] = this.contentSize;
          if (!this[_outputText]) calculTextboxSize(this);
          text = this[_outputText] || this.text;

          if ((this.textboxSize[0] > w || this.textboxSize[1] > h) && this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, w, h);
            drawingContext.clip();
          }

          drawingContext.font = font;
          const lines = text.split(/\n/);
          drawingContext.textBaseline = 'top';
          const align = textAlign;
          drawingContext.textBaseline = 'middle';
          const strokeColor = Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["findColor"])(drawingContext, this, 'strokeColor');

          if (strokeColor) {
            drawingContext.strokeStyle = strokeColor;
          }

          let fillColor = Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["findColor"])(drawingContext, this, 'fillColor');

          if (!strokeColor && !fillColor) {
            fillColor = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"])('black');
          }

          if (fillColor) {
            drawingContext.fillStyle = fillColor;
          }

          let top = 0;
          const width = this.contentSize[0];
          const letterSpacing = this.attr('letterSpacing'),
                textIndent = this.attr('textIndent');
          lines.forEach((line, idx) => {
            const [w, h] = measureText(this, line, font, lineHeight);
            let left = 0;

            if (align === 'center') {
              left = (width - w) / 2;
            } else if (align === 'right') {
              left = width - w;
            }

            let indent = 0;

            if (textIndent && idx === 0 && align !== 'right') {
              indent = textIndent;
            }

            if (letterSpacing) {
              let l = left;
              [...line].forEach((letter, i) => {
                if (idx === 0 && i === 0) {
                  l += indent;
                }

                if (fillColor) {
                  drawingContext.fillText(letter, l, top + h / 2);
                }

                if (strokeColor) {
                  drawingContext.strokeText(letter, l, top + h / 2);
                }

                l += measureText(this, letter, font)[0] + letterSpacing;
              });
            } else {
              if (fillColor) {
                drawingContext.fillText(line, left + indent, top + h / 2);
              }

              if (strokeColor) {
                drawingContext.strokeText(line, left + indent, top + h / 2);
              }
            }

            top += h;
          });
        }
      }

    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineBreaker", function() { return LineBreaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCodePoint", function() { return fromCodePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCodePoints", function() { return toCodePoints; });
/*
 * css-line-break 1.1.1 <https://github.com/niklasvh/css-line-break#readme>
 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var toCodePoints = function (str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            }
            else {
                codePoints.push(value);
                i--;
            }
        }
        else {
            codePoints.push(value);
        }
    }
    return codePoints;
};
var fromCodePoint = function () {
    var codePoints = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        codePoints[_i] = arguments[_i];
    }
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, codePoints);
    }
    var length = codePoints.length;
    if (!length) {
        return '';
    }
    var codeUnits = [];
    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = codePoints[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        }
        else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
var decode = function (base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var buffer = typeof ArrayBuffer !== 'undefined' &&
        typeof Uint8Array !== 'undefined' &&
        typeof Uint8Array.prototype.slice !== 'undefined'
        ? new ArrayBuffer(bufferLength)
        : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return buffer;
};
var polyUint16Array = function (buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 2) {
        bytes.push((buffer[i + 1] << 8) | buffer[i]);
    }
    return bytes;
};
var polyUint32Array = function (buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 4) {
        bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
    }
    return bytes;
};

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = 5;
/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = 6 + 5;
/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = 2;
/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
var slice16 = function (view, start, end) {
    if (view.slice) {
        return view.slice(start, end);
    }
    return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32 = function (view, start, end) {
    if (view.slice) {
        return view.slice(start, end);
    }
    return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64 = function (base64) {
    var buffer = decode(base64);
    var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = slice16(view16, headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2
        ? slice16(view16, (headerLength + view32[4]) / 2)
        : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie = /** @class */ (function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */
    Trie.prototype.get = function (codePoint) {
        var ix;
        if (codePoint >= 0) {
            if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                // Ordinary BMP code point, excluding leading surrogates.
                // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                // 16 bit data is stored in the index array itself.
                ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint <= 0xffff) {
                // Lead Surrogate Code Point.  A Separate index section is stored for
                // lead surrogate code units and code points.
                //   The main index has the code unit data.
                //   For this function, we need the code point data.
                // Note: this expression could be refactored for slightly improved efficiency, but
                //       surrogate code points will be so rare in practice that it's not worth it.
                ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint < this.highStart) {
                // Supplemental code point, use two-level lookup.
                ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                ix = this.index[ix];
                ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                ix = this.index[ix];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint <= 0x10ffff) {
                return this.data[this.highValueIndex];
            }
        }
        // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
        return this.errorValue;
    };
    return Trie;
}());

var base64 = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/* @flow */
var LETTER_NUMBER_MODIFIER = 50;
// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
var BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = '÷';
var UnicodeTrie = createTrieFromBase64(base64);
var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];
var codePointsToCharacterClasses = function (codePoints, lineBreak) {
    if (lineBreak === void 0) { lineBreak = 'strict'; }
    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        }
        else {
            categories.push(false);
        }
        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }
        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }
            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }
        indicies.push(index);
        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }
        if (classType === SA) {
            return types.push(AL);
        }
        if (classType === AI) {
            return types.push(AL);
        }
        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
                return types.push(ID);
            }
            else {
                return types.push(AL);
            }
        }
        types.push(classType);
    });
    return [indicies, types, categories];
};
var isAdjacentWithSpaceIgnored = function (a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];
            if (next === b) {
                return true;
            }
            if (next !== SP) {
                break;
            }
        }
    }
    if (current === SP) {
        var i = currentIndex;
        while (i > 0) {
            i--;
            var prev = classTypes[i];
            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var next = classTypes[n];
                    if (next === b) {
                        return true;
                    }
                    if (next !== SP) {
                        break;
                    }
                }
            }
            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};
var previousNonSpaceClassType = function (currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        }
        else {
            return type;
        }
    }
    return 0;
};
var _lineBreakAtIndex = function (codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }
    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }
    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];
    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];
    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }
    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }
    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }
    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }
    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }
    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }
    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }
    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }
    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }
    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }
    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }
    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }
    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB23 Do not break between digits and letters.
    if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) ||
        ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) ||
        (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    ([PR, PO].indexOf(current) !== -1 &&
        (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) ||
        // ( OP | HY ) × NU
        ([OP, HY].indexOf(current) !== -1 && next === NU) ||
        // NU ×	(NU | SY | IS)
        (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
        return BREAK_NOT_ALLOWED;
    }
    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            }
            else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            }
            else {
                break;
            }
        }
    }
    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            }
            else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            }
            else {
                break;
            }
        }
    }
    // LB26 Do not break a Korean syllable.
    if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) ||
        ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) ||
        ([JT, H3].indexOf(current) !== -1 && next === JT)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB27 Treat a Korean Syllable Block the same as ID.
    if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) ||
        (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP) ||
        (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            }
            else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }
    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }
    return BREAK_ALLOWED;
};
var cssFormattedClasses = function (codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }
    var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) { return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type); });
    }
    var forbiddenBreakpoints = options.wordBreak === 'keep-all'
        ? isLetterNumber.map(function (letterNumber, i) {
            return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
        })
        : undefined;
    return [indicies, classTypes, forbiddenBreakpoints];
};
var Break = /** @class */ (function () {
    function Break(codePoints, lineBreak, start, end) {
        this.codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }
    Break.prototype.slice = function () {
        return fromCodePoint.apply(void 0, this.codePoints.slice(this.start, this.end));
    };
    return Break;
}());
var LineBreaker = function (str, options) {
    var codePoints = toCodePoints(str);
    var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;
    return {
        next: function () {
            if (nextIndex >= length) {
                return { done: true, value: null };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length &&
                (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) ===
                    BREAK_NOT_ALLOWED) { }
            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }
            return { done: true, value: null };
        },
    };
};


//# sourceMappingURL=css-line-break.es5.js.map


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







 // import stylesheet from './stylesheet';



const _zOrder = Symbol('zOrder'),
      _timeline = Symbol('timeline'),
      _renderDeferer = Symbol('renderDeferrer'),
      _drawTask = Symbol('drawTask'),
      _autoRender = Symbol('autoRender'),
      _adjustTimer = Symbol('adjustTimer');

let LayerAttr = _decorate(null, function (_initialize, _BaseNode$Attr) {
  class LayerAttr extends _BaseNode$Attr {
    constructor(subject) {
      super(subject);

      _initialize(this);

      this.setDefault({
        bgcolor: ''
      });
    }

  }

  return {
    F: LayerAttr,
    d: [{
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_7__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_7__["attr"]],
      key: "bgcolor",

      value(val) {
        this.set('bgcolor', val);
        const subject = this.subject;

        if (subject.canvas && subject.canvas.style) {
          if (val != null) {
            this.quietSet('canvasBgColor', subject.canvas.style.backgroundColor);
            subject.canvas.style.backgroundColor = val;
          } else {
            subject.canvas.style.backgroundColor = this.get('canvasBgColor');
          }
        }
      }

    }]
  };
}, _basenode__WEBPACK_IMPORTED_MODULE_2__["default"].Attr);

class Layer extends _basenode__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor({
    context,

    /* deprecated */
    evaluateFPS = false,

    /* deprecated */
    renderMode = 'repaintAll',
    autoRender = true,
    useDocumentCSS = false
  } = {}) {
    super();
    this[_autoRender] = autoRender; // renderMode: repaintAll | repaintDirty

    if (renderMode === 'repaintDirty') {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setDeprecation"])('renderRepaintDirty');
    }

    if (evaluateFPS !== false) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setDeprecation"])('evaluateFPS');
    }

    this.outputContext = context;
    if (context.canvas) context.canvas.layer_ = this;
    this.childNodes = [];
    this.sortedChildNodes = [];
    this[_zOrder] = 0;
    this[_timeline] = new sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"](_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["timeline"]);
    this[_renderDeferer] = null;
    this.touchedTargets = {}; // auto release

    /* istanbul ignore if  */

    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('DOMNodeRemovedFromDocument', () => {
        this._savePlaybackRate = this.timeline.playbackRate;
        this._saveChildren = [...this.childNodes];
        this.remove(...this.childNodes);
        this.timeline.playbackRate = 0;
      });
      context.canvas.addEventListener('DOMNodeInsertedIntoDocument', () => {
        if (this._saveChildren) {
          this.timeline.playbackRate = this._savePlaybackRate;
          this.append(...this._saveChildren);
          delete this._saveChildren;
        }
      });
    }

    if (useDocumentCSS) {
      this.fromDocumentCSS();
    }
  }

  fromDocumentCSS() {// stylesheet.fromDocumentCSS();
  }

  get resolution() {
    return [this.canvas.width, this.canvas.height];
  }

  set autoRender(value) {
    this[_autoRender] = value;

    if (value) {
      this.draw();
    }
  }

  get autoRender() {
    return this[_autoRender];
  }

  get layer() {
    return this;
  }

  get children() {
    return this.childNodes.filter(child => child instanceof _basesprite__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

  get timeline() {
    return this[_timeline];
  }

  get context() {
    return this.outputContext;
  }

  get canvas() {
    return this.outputContext && this.outputContext.canvas;
  }

  get offset() {
    return [0, 0];
  }

  clearContext(context = this.outputContext) {
    if (context.canvas) {
      const {
        width,
        height
      } = context.canvas;
      context.clearRect(0, 0, width, height);
    }
  }

  prepareRender() {
    if (!this[_renderDeferer]) {
      this[_renderDeferer] = {};
      this[_renderDeferer].promise = new Promise((resolve, reject) => {
        Object.assign(this[_renderDeferer], {
          resolve,
          reject
        });

        if (this.autoRender) {
          this[_drawTask] = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(() => {
            delete this[_drawTask];
            this.draw();
          });
        }
      }); // .catch(ex => console.error(ex.message))
    }

    return this[_renderDeferer] ? this[_renderDeferer].promise : Promise.resolve();
  }

  forceUpdate() {
    return this.prepareRender();
  }

  restyle() {
    const bgcolor = this.style.bgcolor;
    super.restyle();

    if (bgcolor) {
      const color = this.attr('bgcolor');

      if (color !== bgcolor && this.canvas && this.canvas.style) {
        this.canvas.style = color;
      }
    }
  }

  draw(clearContext = true) {
    // if(this.__styleNeedUpdate) {
    //   stylesheet.computeStyle(this);
    // }
    super.draw();
    const renderDeferrer = this[_renderDeferer];
    this[_renderDeferer] = null;

    if (this[_drawTask]) {
      Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["cancelAnimationFrame"])(this[_drawTask]);
      delete this[_drawTask];
    }

    const currentTime = this.timeline.currentTime;
    this.repaint(currentTime, clearContext);
    super.dispatchEvent.call(this, 'update', {
      target: this,
      timeline: this.timeline,
      renderTime: currentTime
    }, true, true);

    if (renderDeferrer) {
      renderDeferrer.resolve();
    }
  }

  update(target) {
    if (target && target.isDirty) return;

    if (target) {
      target.isDirty = true;
    }

    this.prepareRender();
  }

  isVisible() {
    if (this.canvas) {
      return this.canvas.width > 0 && this.canvas.height > 0;
    }

    return true;
  }

  drawSprites(renderEls, t) {
    _utils__WEBPACK_IMPORTED_MODULE_7__["cacheContextPool"].flush();

    if (this.beforeDrawTransform) {
      this.outputContext.save();
      this.beforeDrawTransform();
    }

    for (let i = 0; i < renderEls.length; i++) {
      const child = renderEls[i],
            isDirty = child.isDirty;
      child.isDirty = false;

      if (child.parent === this) {
        child.draw(t);

        if (isDirty) {
          child.dispatchEvent('update', {
            target: child,
            renderTime: t
          }, true, true);
        }
      }
    }

    if (this.beforeDrawTransform) {
      this.outputContext.restore();
    }
  }

  repaint(t, clearContext = true) {
    const renderEls = this.sortedChildNodes;
    const outputContext = this.outputContext;
    if (clearContext) this.clearContext(outputContext);
    this.drawSprites(renderEls, t);
  }

  pointCollision(evt) {
    if (this.outputContext.canvas) {
      const {
        layerX,
        layerY
      } = evt;
      const {
        width,
        height
      } = this.outputContext.canvas;

      if (layerX == null && layerY == null || layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
        return true;
      }

      return false;
    }
    /* istanbul ignore next  */


    return true;
  }

  dispatchEvent(type, evt, collisionState = false, swallow = false, useCapturePhase = null) {
    // eslint-disable-line complexity
    const handlers = this.getEventHandlers(type);

    if (swallow && handlers.length === 0) {
      return;
    }

    let hasCapturePhase = false;

    if (!swallow && !evt.terminated && type !== 'mouseenter') {
      let isCollision = collisionState || this.pointCollision(evt);
      const identifier = evt.identifier;

      if (identifier != null && (type === 'touchend' || type === 'touchmove')) {
        isCollision = true;
      }

      if (isCollision || type === 'mouseleave') {
        const sprites = this.sortedChildNodes.slice(0).reverse();
        const targetSprites = [];

        if (identifier != null && (type === 'touchend' || type === 'touchmove')) {
          const touches = evt.originalEvent.changedTouches;

          for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];

            if (touch.identifier === identifier) {
              const targets = this.layer.touchedTargets[identifier];

              if (targets) {
                targets.forEach(target => {
                  if (target !== this && target.layer === this) {
                    const [parentX, parentY] = target.getParentXY(evt.layerX, evt.layerY);
                    const _parent = [evt.parentX, evt.parentY];
                    evt.parentX = parentX;
                    evt.parentY = parentY;
                    target.dispatchEvent(type, evt, true, true, useCapturePhase);
                    [evt.parentX, evt.parentY] = _parent;
                  }
                });
                if (type === 'touchend') delete this.layer.touchedTargets[identifier];
              }
            }
          }
        } else {
          evt.parentX = evt.layerX;
          evt.parentY = evt.layerY;

          if (isCollision && handlers.length && handlers.some(handler => handler.useCapture)) {
            hasCapturePhase = true;
            if (!evt.target) evt.target = this.getTargetFromXY(evt.parentX, evt.parentY);
            super.dispatchEvent(type, evt, isCollision, swallow, true);
          }

          if (!hasCapturePhase || !evt.cancelBubble) {
            for (let i = 0; i < sprites.length; i++) {
              const sprite = sprites[i];
              const hit = sprite.dispatchEvent(type, evt, collisionState, swallow, useCapturePhase);

              if (hit) {
                if (evt.targetSprites) {
                  targetSprites.push(...evt.targetSprites);
                  delete evt.targetSprites;
                } // detect mouseenter/mouseleave


                targetSprites.push(sprite);
              }

              if (evt.terminated && type !== 'mousemove') {
                break;
              }
            }
          }

          delete evt.parentX;
          delete evt.parentY;
        }

        evt.targetSprites = targetSprites; // stopDispatch can only terminate event in the same level

        evt.terminated = false;
        collisionState = isCollision;
      }
    }

    evt.targetSprites = evt.targetSprites || [];

    if (evt.cancelBubble) {
      // stop bubbling
      return false;
    }

    if (hasCapturePhase) {
      return super.dispatchEvent(type, evt, collisionState, swallow, false);
    }

    if (evt.targetSprites.length > 0) {
      // bubbling
      collisionState = true;
    }

    const {
      layerX,
      layerY
    } = evt;

    if (layerX != null && layerY != null) {
      evt.offsetX = layerX + this.offset[0];
      evt.offsetY = layerY + this.offset[1];
    }

    return super.dispatchEvent(type, evt, collisionState, swallow, useCapturePhase);
  }

  group(...sprites) {
    const group = new _group__WEBPACK_IMPORTED_MODULE_5__["default"]();
    group.append(...sprites);
    this.appendChild(group);
    return group;
  }

  batch(...sprites) {
    sprites.forEach(sprite => {
      if (sprite.layer !== this) {
        this.appendChild(sprite);
      }
    });
    const batch = new _batch__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    batch.add(...sprites);
    return batch;
  }

  adjust(handler, update = true)
  /* istanbul ignore next  */
  {
    if (!update) return;
    const outputContext = this.outputContext;
    const shadowContext = this.adjustContext || outputContext.canvas.cloneNode().getContext('2d');

    if (!this[_adjustTimer]) {
      this.autoRender = false;
      shadowContext.clearRect(0, 0, shadowContext.canvas.width, shadowContext.canvas.height);
      shadowContext._clearTag = false;
      shadowContext.drawImage(outputContext.canvas, 0, 0);
      this.adjustContext = shadowContext;
    } else {
      clearTimeout(this[_adjustTimer]);
    }

    this[_adjustTimer] = setTimeout(() => {
      this.autoRender = true;
      delete this[_adjustTimer];
    }, 100);

    if (shadowContext.canvas.width > 0 && shadowContext.canvas.height > 0) {
      this.clearContext(outputContext);
      outputContext.save();
      handler.call(this, outputContext);
      outputContext.drawImage(shadowContext.canvas, 0, 0);
      outputContext.restore();
    }
  }

}

_defineProperty(Layer, "Attr", LayerAttr);

Object.assign(Layer.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_6__["default"]);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


let _requestAnimationFrame, _cancelAnimationFrame;

if (typeof global.requestAnimationFrame === 'undefined') {
  _requestAnimationFrame = function (fn) {
    return setTimeout(() => {
      fn(Date.now());
    }, 16);
  };

  _cancelAnimationFrame = function (id) {
    return clearTimeout(id);
  };
} else {
  _requestAnimationFrame = global.requestAnimationFrame;
  _cancelAnimationFrame = global.cancelAnimationFrame;
}

const steps = new Map();
let timerId;
let currentTime = Date.now();

const requestAnimationFrame = step => {
  const id = Symbol('requestId');
  steps.set(id, step);

  if (timerId == null) {
    if (steps.size === 1) {
      currentTime = Date.now();
    }

    timerId = _requestAnimationFrame(t => {
      timerId = null;
      currentTime = Date.now();
      [...steps].forEach(([id, callback]) => {
        callback(t);
        steps.delete(id);
      });
    });
  }

  return id;
};

const cancelAnimationFrame = id => {
  steps.delete(id);

  if (!steps.size && timerId) {
    _cancelAnimationFrame(timerId);

    timerId = null;
  }
};

const timeline = new sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"]({
  nowtime() {
    return steps.size ? currentTime : Date.now();
  }

});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Batch; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);


const _batch = Symbol('batch');

class Batch {
  constructor(layer) {
    this.layer = layer;
    this[_batch] = new Set();
    this.cache = null;
  }

  get baseNode() {
    const batchNodes = [...this[_batch]];
    let baseNode = batchNodes[0],
        zOrder = Infinity,
        zIndex = Infinity;

    for (let i = 0; i < batchNodes.length; i++) {
      const node = batchNodes[i];

      if (zIndex > node.zIndex) {
        zIndex = node.zIndex;
        zOrder = node.zOrder;
        baseNode = node;
      } else if (zIndex === node.zIndex && zOrder > node.zOrder) {
        zOrder = node.zOrder;
        baseNode = node;
      }
    }

    return baseNode;
  }

  add(...nodes) {
    nodes.forEach(node => {
      if (!node.layer || node.layer !== this.layer) {
        /* istanbul ignore next  */
        throw new Error('Batch node must append to this layer first!');
      }

      if (node[_batch]) {
        /* istanbul ignore next  */
        throw new Error('Node already batched!');
      }

      node.attr('enableCache', true);
      const that = this;
      Object.defineProperty(node, 'cache', {
        configurable: true,

        get() {
          return that.cache;
        },

        set(context) {
          if (that.baseNode === this) {
            if (that.cache && context !== that.cache) {
              _utils__WEBPACK_IMPORTED_MODULE_0__["cacheContextPool"].put(that.cache);
            }

            that.cache = context;
          } else if (context == null) {
            throw new Error('Cannot set non-cachable attributes to batch members.Use batch.baseNode.attr(...)');
          }
        }

      });
      node[_batch] = this;

      this[_batch].add(node);
    });
  }

  remove(...nodes) {
    nodes.forEach(node => {
      if (this[_batch].has(node)) {
        delete node[_batch];
        delete node.cache;

        this[_batch].delete(node);
      }
    });
  }

}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





const _zOrder = Symbol('zOrder'),
      _layoutTag = Symbol('layoutTag');

const reflow = true,
      relayout = true;

let GroupAttr = _decorate(null, function (_initialize, _BaseSprite$Attr) {
  class GroupAttr extends _BaseSprite$Attr {
    constructor(subject) {
      super(subject);

      _initialize(this);

      GroupAttr.inits.forEach(init => {
        init(this, subject);
      });
    }

  }

  return {
    F: GroupAttr,
    d: [{
      kind: "field",
      static: true,
      key: "inits",

      value() {
        return [];
      }

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],
      key: "enableCache",

      value() {
        return 'auto';
      }

    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        reflow,
        value: null
      })],
      key: "clip",

      value(val) {
        if (val) {
          val = typeof val === 'string' ? {
            d: val
          } : val;
          this.subject.svg = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createSvgPath"])(val);
          this.set('clip', val);
        } else {
          this.subject.svg = null;
          this.set('clip', null);
        }
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        reflow,
        relayout
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('width')],
      key: "layoutWidth",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        reflow,
        relayout
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('height')],
      key: "layoutHeight",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        reflow,
        relayout
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('width')],
      key: "width",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        reflow,
        relayout
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('height')],
      key: "height",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        relayout
      })],
      key: "display",

      value() {
        return '';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],
      key: "scrollLeft",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],
      key: "scrollTop",

      value() {
        return 0;
      }

    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr);

const _layout = Symbol('layout');

let Group = _decorate(null, function (_initialize2, _BaseSprite) {
  class Group extends _BaseSprite {
    constructor(attr = {}) {
      super(attr);

      _initialize2(this);

      this.childNodes = [];
      this.sortedChildNodes = [];
      this[_zOrder] = 0;
      this[_layoutTag] = false;
      this.__labelCount = 0;
    }

  }

  return {
    F: Group,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",

      value() {
        return GroupAttr;
      }

    }, {
      kind: "method",
      static: true,
      key: "applyLayout",

      value(name, layout) {
        this[_layout] = this[_layout] || {};
        const {
          attrs,
          relayout
        } = layout;

        if (attrs.init) {
          GroupAttr.inits.push(attrs.init);
        }

        Group.addAttributes(attrs);
        this[_layout][name] = relayout;
      }

    }, {
      kind: "get",
      key: "isVirtual",

      value() {
        const display = this.attr('display');
        if (display !== '' && display !== 'none') return false;
        const parent = this.parent;
        if (parent && parent instanceof Group && !parent.isVirtual) return false;
        const {
          width: borderWidth
        } = this.attr('border'),
              borderRadius = this.attr('borderRadius'),
              bgcolor = this.attr('bgcolor'),
              {
          bgcolor: bgGradient
        } = this.attr('gradients'),
              [width, height] = this.attrSize,
              [anchorX, anchorY] = this.attr('anchor'),
              bgimage = this.attr('bgimage'),
              [paddingTop, paddingRight, paddingBottom, paddingLeft] = this.attr('padding');
        return !anchorX && !anchorY && !width && !height && !borderRadius && !borderWidth && !bgcolor && !bgGradient && !bgimage && !paddingTop && !paddingRight && !paddingBottom && !paddingLeft;
      }

    }, {
      kind: "method",
      key: "connect",

      value(parent, zOrder = 0) {
        const ret = _get(_getPrototypeOf(Group.prototype), "connect", this).call(this, parent, zOrder);

        const labelCount = this.__labelCount;
        let _p = parent;

        while (_p && _p.__labelCount != null) {
          _p.__labelCount += labelCount;
          _p = _p.parent;
        }

        return ret;
      }

    }, {
      kind: "method",
      key: "disconnect",

      value(parent) {
        const ret = _get(_getPrototypeOf(Group.prototype), "disconnect", this).call(this, parent);

        const labelCount = this.__labelCount;
        let _p = parent;

        while (_p && _p.__labelCount != null) {
          _p.__labelCount -= labelCount;
          _p = _p.parent;
        }

        return ret;
      }

    }, {
      kind: "method",
      key: "scrollTo",

      value(x, y) {
        this.attr('scrollLeft', x);
        this.attr('scrollTop', y);
      }

    }, {
      kind: "method",
      key: "scrollBy",

      value(dx, dy) {
        const x = this.attr('scrollLeft'),
              y = this.attr('scrollTop');
        this.scrollTo(x + dx, y + dy);
      }

    }, {
      kind: "method",
      key: "cloneNode",

      value(deepCopy) {
        const node = _get(_getPrototypeOf(Group.prototype), "cloneNode", this).call(this);

        if (deepCopy) {
          const children = this.childNodes;
          children.forEach(child => {
            const subNode = child.cloneNode(deepCopy);
            node.append(subNode);
          });
        }

        return node;
      }

    }, {
      kind: "get",
      key: "children",

      value() {
        const children = this.childNodes || [];
        return children.filter(child => child instanceof _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]);
      }

    }, {
      kind: "method",
      key: "update",

      value(child) {
        child.isDirty = true;
        const attrSize = this.attrSize;

        if (attrSize[0] === '' || attrSize[1] === '') {
          this.reflow();
        }

        this.forceUpdate(true);
      }

    }, {
      kind: "method",
      key: "pointCollision",

      value(evt) {
        if (_get(_getPrototypeOf(Group.prototype), "pointCollision", this).call(this, evt) || this.isVirtual) {
          if (this.svg) {
            const {
              offsetX,
              offsetY
            } = evt;
            if (offsetX == null && offsetY == null) return true;
            const rect = this.originalRect;
            evt.isInClip = this.svg.isPointInPath(offsetX - rect[0], offsetY - rect[1]);
          }

          return true;
        }

        return false;
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]],
      key: "contentSize",

      value() {
        if (this.isVirtual) return [0, 0];
        let [width, height] = this.attrSize;

        if (width === '' || height === '') {
          if (this.attr('clip')) {
            const svg = this.svg;
            const bounds = svg.bounds;
            width = width || bounds[2];
            height = height || bounds[3];
          } else {
            let right, bottom;
            right = 0;
            bottom = 0;
            this.childNodes.forEach(sprite => {
              if (sprite.attr('display') !== 'none') {
                const renderBox = sprite.renderBox;

                if (renderBox) {
                  right = Math.max(right, renderBox[2]);
                  bottom = Math.max(bottom, renderBox[3]);
                }
              }
            });
            width = width || right;
            height = height || bottom;
          }
        }

        return [width, height];
      }

    }, {
      kind: "method",
      key: "dispatchEvent",

      value(type, evt, collisionState = false, swallow = false, useCapturePhase = null) {
        const handlers = this.getEventHandlers(type);

        if (swallow && handlers.length === 0) {
          return;
        }

        let hasCapturePhase = false;

        if (!swallow && !evt.terminated && type !== 'mouseenter') {
          const isCollision = collisionState || this.pointCollision(evt);

          if (isCollision || type === 'mouseleave' || !this.attr('clipOverflow')) {
            const scrollLeft = this.attr('scrollLeft'),
                  scrollTop = this.attr('scrollTop'),
                  borderWidth = this.attr('border').width,
                  padding = this.attr('padding');
            let parentX, parentY;
            if ('offsetX' in evt) parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft;
            if ('offsetY' in evt) parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop;
            const _parentX = evt.parentX,
                  _parentY = evt.parentY;
            evt.parentX = parentX;
            evt.parentY = parentY;

            if (isCollision && handlers.length && handlers.some(handler => handler.useCapture)) {
              hasCapturePhase = true;
              if (!evt.target) evt.target = this.getTargetFromXY(parentX, parentY);

              _get(_getPrototypeOf(Group.prototype), "dispatchEvent", this).call(this, type, evt, isCollision, swallow, true);
            }

            const targetSprites = [];

            if (!hasCapturePhase || !evt.cancelBubble) {
              const sprites = this.sortedChildNodes.slice(0).reverse();

              for (let i = 0; i < sprites.length && evt.isInClip !== false; i++) {
                const sprite = sprites[i];
                const hit = sprite.dispatchEvent(type, evt, collisionState, swallow, useCapturePhase);

                if (hit) {
                  if (evt.targetSprites) {
                    targetSprites.push(...evt.targetSprites);
                    delete evt.targetSprites;
                  }

                  targetSprites.push(sprite);
                }

                if (evt.terminated && type !== 'mousemove') {
                  break;
                }
              }
            }

            evt.targetSprites = targetSprites; // stopDispatch can only terminate event in the same level

            evt.terminated = false;
            evt.parentX = _parentX;
            evt.parentY = _parentY;
            collisionState = isCollision;
          }
        }

        evt.targetSprites = evt.targetSprites || [];

        if (evt.cancelBubble) {
          // stop bubbling
          return false;
        }

        if (hasCapturePhase) {
          return _get(_getPrototypeOf(Group.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, false);
        }

        if (evt.targetSprites.length > 0) {
          // bubbling
          collisionState = true;
        }

        return _get(_getPrototypeOf(Group.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, useCapturePhase);
      }

    }, {
      kind: "method",
      key: "relayout",

      value() {
        const items = this.childNodes.filter(child => {
          if (child.hasLayout) {
            child.attr('layoutWidth', null);
            child.attr('layoutHeight', null);
            child.attr('layoutX', null);
            child.attr('layoutY', null);
          }

          if (child.relayout) {
            const display = child.attr('display');

            if (display !== '' && display !== 'static') {
              child.relayout();
            }
          }

          return child.hasLayout && child.attr('display') !== 'none';
        });
        const display = this.attr('display');
        const doLayout = Group[_layout][display];

        if (doLayout) {
          doLayout(this, items);
        }
      }

    }, {
      kind: "method",
      key: "clearLayout",

      value() {
        this[_layoutTag] = false;
        if (this.hasLayout) this.parent.clearLayout();
      }

    }, {
      kind: "method",
      key: "draw",

      value(t, drawingContext = this.context) {
        // must relayout before draw
        // prevent originalRect changing when rendering.
        const display = this.attr('display');

        if (display !== '' && display !== 'static' && !this[_layoutTag]) {
          this.relayout();
          this[_layoutTag] = true;
        }

        return _get(_getPrototypeOf(Group.prototype), "draw", this).call(this, t, drawingContext);
      }

    }, {
      kind: "method",
      key: "render",

      value(t, drawingContext) {
        const clipPath = this.attr('clip');

        if (clipPath) {
          this.svg.beginPath().to(drawingContext);
          drawingContext.clip();
        }

        if (!this.isVirtual) {
          _get(_getPrototypeOf(Group.prototype), "render", this).call(this, t, drawingContext);

          if (this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, this.contentSize[0], this.contentSize[1]);
            drawingContext.clip();
          }
        }

        drawingContext.save();
        const scrollLeft = this.attr('scrollLeft'),
              scrollTop = this.attr('scrollTop');
        drawingContext.translate(-scrollLeft, -scrollTop);
        const sprites = this.sortedChildNodes;

        for (let i = 0; i < sprites.length; i++) {
          const child = sprites[i],
                isDirty = child.isDirty;
          child.isDirty = false;
          child.draw(t, drawingContext);

          if (isDirty) {
            child.dispatchEvent('update', {
              target: child,
              renderTime: t
            }, true, true);
          }
        }

        drawingContext.restore();
      }

    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]);


Object.assign(Group.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);


const _zOrder = Symbol('zOrder');

const _removeTask = Symbol('removeTask');

/* harmony default export */ __webpack_exports__["default"] = ({
  getTargetFromXY(x, y) {
    const children = this.children;
    let target = this;
    children.some(child => {
      const evt = {
        parentX: x,
        parentY: y
      };
      const hit = child.pointCollision(evt);

      if (hit) {
        if (child.getTargetFromXY) {
          target = child.getTargetFromXY(evt.offsetX, evt.offsetY);
        } else {
          target = child;
        }
      }

      return hit;
    });
    return target;
  },

  appendChild(sprite, update = true) {
    const _append = () => {
      this[_zOrder] = this[_zOrder] || 0;
      sprite.connect(this, this[_zOrder]++);
      const children = this.childNodes;
      children.push(sprite); // quick insert

      const orderedSprites = this.sortedChildNodes || [];
      const len = orderedSprites.length;
      let i;
      let left = 0,
          right = len - 1;
      const zIndex = sprite.attr('zIndex') | 0;

      for (; i == null && left <= right;) {
        const rightSprite = orderedSprites[right];
        const leftSprite = orderedSprites[left];
        if (zIndex >= rightSprite.zIndex) i = right + 1;else if (zIndex < leftSprite.zIndex) i = left;else if (left >= right - 1) i = right;else {
          // between left & right
          const mid = Math.ceil((left + right) / 2);
          const midSprite = orderedSprites[mid];
          if (zIndex >= midSprite.zIndex) left = mid;else right = mid;
        }
      }

      if (i == null || i === len) orderedSprites.push(sprite);else orderedSprites.splice(i, 0, sprite);
      this.sortedChildNodes = orderedSprites;

      if (update) {
        sprite.forceUpdate();
      }

      if (sprite.layer) {
        return sprite.enter();
      }

      return sprite;
    };

    const _remove = this.removeChild(sprite);

    if (_remove && _remove.promise) {
      // deferred
      if (_remove.resolve) _remove.resolve();

      _remove.promise.then(() => {
        return _append();
      });

      return _remove;
    }

    return _append();
  },

  append(...sprites) {
    sprites.forEach(sprite => {
      this.appendChild(sprite);
    });
    return this;
  },

  removeChild(child) {
    if (child[_removeTask]) return child[_removeTask];
    const idx = this.childNodes.indexOf(child);

    if (idx === -1) {
      return null;
    }

    const that = this;

    function remove(sprite) {
      delete child[_removeTask]; // re-calculate index because it's async...

      const idx = that.childNodes.indexOf(child);

      if (idx === -1) {
        return null;
      }

      that.childNodes.splice(idx, 1);
      that.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(that.childNodes);

      if (sprite.isVisible() || sprite.lastRenderBox) {
        sprite.forceUpdate();
      }

      sprite.disconnect(that);
      return sprite;
    }

    const action = child.exit();

    if (action.promise) {
      child[_removeTask] = action;
      action.promise.then(() => {
        return remove(child);
      });
      return action;
    }

    return remove(child);
  },

  clear() {
    const children = this.childNodes.slice(0);
    children.forEach(child => this.removeChild(child));
    return this;
  },

  remove(...args) {
    if (args.length === 0) {
      if (!this.parent) return null;
      return this.parent.removeChild(this);
    }

    args.forEach(sprite => {
      this.removeChild(sprite);
    });
    return this;
  },

  insertBefore(newchild, refchild) {
    if (refchild == null) {
      return this.appendChild(newchild);
    }

    const idx = this.childNodes.indexOf(refchild);
    const refZOrder = refchild.zOrder;

    if (idx >= 0) {
      const _insert = () => {
        for (let i = 0; i < this.childNodes.length; i++) {
          const child = this.childNodes[i],
                zOrder = child.zOrder;

          if (zOrder >= refZOrder) {
            delete child.zOrder;
            Object.defineProperty(child, 'zOrder', {
              value: zOrder + 1,
              writable: false,
              configurable: true
            });
          }
        }

        this.childNodes.splice(idx, 0, newchild);
        newchild.connect(this, refZOrder);
        this.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(this.childNodes);
        newchild.forceUpdate();
        this[_zOrder] = this[_zOrder] || 0;
        this[_zOrder]++;

        if (this.layer) {
          return newchild.enter();
        }
      };

      const _remove = this.removeChild(newchild);

      if (_remove && _remove.promise) {
        if (_remove.resolve) _remove.resolve();

        _remove.promise.then(() => _insert());

        return _remove;
      }

      return _insert();
    }

    return null;
  },

  replaceChild(newChild, oldChild) {
    Promise.resolve(this.insertBefore(newChild, oldChild)).then(() => {
      this.removeChild(oldChild);
    });
  }

});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



const reflow = true,
      quiet = true;

let PathSpriteAttr = _decorate(null, function (_initialize, _BaseSprite$Attr) {
  class PathSpriteAttr extends _BaseSprite$Attr {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: PathSpriteAttr,
    d: [{
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        reflow
      })],
      key: "path",

      value(val) {
        if (val) {
          val = typeof val === 'string' ? {
            d: val
          } : val;
          this.subject.svg = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createSvgPath"])(val);
          this.set('path', val);
        } else {
          this.subject.svg = null;
          this.set('path', null);
        }
      }

    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],
      key: "d",

      value(val) {
        if (val) {
          const path = this.path;

          if (!path) {
            this.path = {
              d: val
            };
          } else {
            this.path = Object.assign(path, {
              d: val
            });
          }
        } else {
          this.path = null;
        }
      }

    }, {
      kind: "get",
      key: "d",

      value() {
        return this.path ? this.path.d : null;
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat, Math.round), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])(1)],
      key: "lineWidth",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_0__["parseStringFloat"], val => {
        return typeof val === 'number' ? [val] : val;
      }), _utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],
      key: "lineDash",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],
      key: "lineDashOffset",

      value() {
        return 0;
      }

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('butt')],
      key: "lineCap",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('miter')],
      key: "lineJoin",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_0__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('')],
      key: "strokeColor",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_0__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('')],
      key: "fillColor",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        reflow
      })],
      key: "flexible",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({
        quiet
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('auto')],
      key: "bounding",

      value() {
        return 'inherit';
      }

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_0__["composit"])('strokeColor')],
      key: "color",
      value: void 0
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr);

let Path = _decorate(null, function (_initialize2, _BaseSprite) {
  class Path extends _BaseSprite {
    constructor(attr) {
      if (typeof attr === 'string') {
        attr = {
          d: attr
        };
      }

      super(attr);

      _initialize2(this);
    }

  }

  return {
    F: Path,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",

      value() {
        return PathSpriteAttr;
      }

    }, {
      kind: "set",
      key: "path",

      value(val) {
        this.attr('path', val);
      }

    }, {
      kind: "get",
      key: "path",

      value() {
        return this.attr('path');
      }

    }, {
      kind: "method",
      key: "getPointAtLength",

      value(length) {
        if (this.svg) {
          return this.svg.getPointAtLength(length);
        }

        return [0, 0];
      }

    }, {
      kind: "method",
      key: "getPathLength",

      value() {
        if (this.svg) {
          return this.svg.getTotalLength();
        }

        return 0;
      }

    }, {
      kind: "method",
      key: "isClosed",

      value() {
        const d = this.attr('d');

        if (d) {
          return /z$/img.test(d);
        }

        return false;
      }

    }, {
      kind: "method",
      key: "findPath",

      value(offsetX, offsetY) {
        const rect = this.originalRect;
        const pathOffset = this.pathOffset;
        const svg = this.svg;

        if (svg) {
          const x = offsetX - rect[0] - pathOffset[0],
                y = offsetY - rect[1] - pathOffset[1];
          let collision = false;

          if (this.isClosed()) {
            collision = svg.isPointInPath(x, y);
          }

          if (!collision) {
            const lineWidth = this.attr('lineWidth') + (parseFloat(this.attr('bounding')) || 0),
                  lineCap = this.attr('lineCap'),
                  lineJoin = this.attr('lineJoin');
            collision = svg.isPointInStroke(x, y, {
              lineWidth,
              lineCap,
              lineJoin
            });
          }

          if (collision) {
            return [svg];
          }
        }

        return [];
      }

    }, {
      kind: "get",
      key: "lineWidth",

      value() {
        const lineWidth = this.attr('lineWidth'),
              gradients = this.attr('gradients'),
              fillColor = this.attr('fillColor'),
              strokeColor = this.attr('strokeColor');
        const hasStrokeColor = strokeColor || gradients && gradients.strokeColor,
              hasFillColor = fillColor || gradients && gradients.fillColor;

        if (!hasStrokeColor && hasFillColor) {
          // fill: ignore stroke
          return 0;
        }

        return lineWidth;
      }

    }, {
      kind: "get",
      key: "pathOffset",

      value() {
        const lw = Math.round(this.lineWidth);
        return [lw, lw];
      }

    }, {
      kind: "get",
      key: "pathSize",

      value() {
        return this.svg ? this.svg.size : [0, 0];
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]],
      key: "contentSize",

      value() {
        if (!this.svg) return _get(_getPrototypeOf(Path.prototype), "contentSize", this);
        const bounds = this.svg.bounds;
        let [width, height] = this.attrSize;
        const pathOffset = this.pathOffset;

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + 2 * pathOffset[0];
        }

        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + 2 * pathOffset[1];
        }

        if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
          height = Math.ceil(height * width / (bounds[2] - Math.min(0, bounds[0]) + 2 * pathOffset[0]));
        }

        return [width, height].map(Math.ceil);
      }

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]],
      key: "originalRect",

      value() {
        const svg = this.svg;

        if (svg) {
          const bounds = svg.bounds,
                offset = this.pathOffset;
          const [width, height] = this.offsetSize,
                [anchorX, anchorY] = this.attr('anchor');
          const rect = [0, 0, width, height],
                offsetX = Math.min(0, bounds[0]),
                offsetY = Math.min(0, bounds[1]);
          rect[0] = offsetX - offset[0] - anchorX * (width + offsetX - 2 * offset[0]);
          rect[1] = offsetY - offset[1] - anchorY * (height + offsetY - 2 * offset[1]);
          return rect;
        }

        return _get(_getPrototypeOf(Path.prototype), "originalRect", this);
      }

    }, {
      kind: "method",
      key: "pointCollision",

      value(evt) {
        const bounding = this.attr('bounding');

        if (_get(_getPrototypeOf(Path.prototype), "pointCollision", this).call(this, evt) || bounding !== 'auto' && bounding !== 'box' && bounding !== 'path' && bounding !== 0) {
          let {
            offsetX,
            offsetY
          } = evt;
          if (offsetX == null && offsetY == null) return true;
          const svg = this.svg;

          if (svg) {
            const bounds = svg.bounds;
            offsetX += Math.min(0, bounds[0]);
            offsetY += Math.min(0, bounds[1]);
          }

          evt.targetPaths = this.findPath(offsetX, offsetY);

          if (bounding !== 'box' && !(bounding === 'auto' && (this.attr('borderWidth') > 0 || this.attr('bgcolor') || this.attr('gradients').bgcolor))) {
            return evt.targetPaths.length > 0;
          }

          return true;
        }

        return false;
      }

    }, {
      kind: "method",
      key: "render",

      value(t, drawingContext) {
        _get(_getPrototypeOf(Path.prototype), "render", this).call(this, t, drawingContext);

        const d = this.attr('d'),
              lineWidth = this.attr('lineWidth'),
              lineCap = this.attr('lineCap'),
              lineJoin = this.attr('lineJoin'),
              lineDash = this.attr('lineDash'),
              flexible = this.attr('flexible');

        if (d) {
          const svg = this.svg;
          let [ox, oy, ow, oh] = svg.bounds;
          let [px, py] = this.pathOffset;
          const [w, h] = this.contentSize;

          if ((w < ow || h < oh) && this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, w, h);
            drawingContext.clip();
          }

          if (flexible) {
            svg.save();
            const sw = w / (ow - Math.min(0, ox) + 2 * px);
            svg.scale(sw, sw);
            ox *= sw;
            oy *= sw;
            px *= sw;
            py *= sw;
          }

          if (ox < 0 || oy < 0) {
            drawingContext.translate(-Math.min(0, ox), -Math.min(0, oy));
          }

          drawingContext.translate(px, py);
          svg.beginPath().to(drawingContext);

          if (flexible) {
            svg.restore();
          }

          drawingContext.lineWidth = lineWidth;
          drawingContext.lineCap = lineCap;
          drawingContext.lineJoin = lineJoin;

          if (lineDash != null) {
            drawingContext.setLineDash(lineDash);
            const lineDashOffset = this.attr('lineDashOffset');
            drawingContext.lineDashOffset = lineDashOffset;
          }

          const fillColor = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findColor"])(drawingContext, this, 'fillColor');

          if (fillColor) {
            drawingContext.fillStyle = fillColor;
          }

          let strokeColor = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findColor"])(drawingContext, this, 'strokeColor');

          if (!strokeColor && !fillColor) {
            strokeColor = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])('black');
          }

          if (strokeColor) {
            drawingContext.strokeStyle = strokeColor;
          }

          if (fillColor) {
            drawingContext.fill();
          }

          if (strokeColor) {
            drawingContext.stroke();
          }
        }
      }

    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return use; });
const installed = new WeakMap();

const _merged = Symbol('merged');

let target = null;
function use(plugin, options = null, merge = true) {
  if (!target) {
    target = Object.assign({}, this);
    target.__spritejs = this; // target.use = use.bind(target);

    target.use = function (plugin, options = null, merge = false) {
      return use.call(target, plugin, options, merge);
    };
  }

  if (typeof options === 'boolean') {
    merge = options;
    options = null;
  }

  if (installed.has(plugin)) {
    const ret = installed.get(plugin);

    if (merge && !ret[_merged]) {
      Object.assign(target, ret);
      ret[_merged] = true;
    }

    return ret;
  }

  const install = plugin.install || plugin;
  const ret = install.call(plugin, target, options) || {};
  installed.set(plugin, ret);

  if (merge) {
    Object.assign(target.__spritejs, ret);
    ret[_merged] = true;
  }

  return ret;
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_basesprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);


Object.assign(_core_basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, {
  animate(frames, timing, isStyleAnim = false) {
    let setter = null;

    if (isStyleAnim) {
      setter = (frame, target) => {
        target.__attr.__styleTag = true;
        target.attr(frame);
        target.__attr.__styleTag = false;
      };
    }

    const animation = new _animation__WEBPACK_IMPORTED_MODULE_1__["default"](this, frames, timing, setter);
    if (this.effects) animation.applyEffects(this.effects);

    if (this.layer) {
      animation.baseTimeline = this.layer.timeline;
      animation.play();
      animation.finished.then(() => {
        this.animations.delete(animation);
      });
    }

    this.animations.add(animation);
    return animation;
  },

  transition(sec, easing = 'linear', isStyleAnim = false) {
    const that = this,
          _animation = Symbol('animation');

    easing = easing || 'linear';
    let delay = 0;

    if (typeof sec === 'object') {
      delay = sec.delay || 0;
      sec = sec.duration;
    }

    return {
      [_animation]: null,

      cancel(preserveState = false) {
        const animation = this[_animation];

        if (animation) {
          animation.cancel(preserveState);
        }
      },

      end() {
        const animation = this[_animation];

        if (animation && (animation.playState === 'running' || animation.playState === 'pending')) {
          animation.finish();
        }
      },

      reverse() {
        const animation = this[_animation];

        if (animation) {
          if (animation.playState === 'running' || animation.playState === 'pending') {
            animation.playbackRate = -animation.playbackRate;
          } else {
            const direction = animation.timing.direction;
            animation.timing.direction = direction === 'reverse' ? 'normal' : 'reverse';
            animation.play();
          }
        }

        return animation.finished;
      },

      attr(prop, val) {
        this.end();

        if (typeof prop === 'string') {
          prop = {
            [prop]: val
          };
        }

        Object.entries(prop).forEach(([key, value]) => {
          if (typeof value === 'function') {
            prop[key] = value(that.attr(key));
          }
        });
        this[_animation] = that.animate([prop], {
          duration: sec * 1000,
          delay: delay * 1000,
          fill: 'forwards',
          easing
        }, isStyleAnim);
        return this[_animation].finished;
      }

    };
  }

});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _patheffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);





const _defaultEffect = sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"].default;

const defaultEffect = (from, to, p, start, end) => {
  let unitFrom = 'px',
      unitTo = 'px';
  let matchFrom = null,
      matchTo = null;
  const exp = /^([\d.]+)(%|rh|rw)$/i;

  if (typeof from === 'string') {
    matchFrom = exp.exec(from);

    if (matchFrom) {
      unitFrom = matchFrom[2];
    }
  }

  if (typeof to === 'string') {
    matchTo = exp.exec(to);

    if (matchTo) {
      unitTo = matchTo[2];
    }
  }

  if (unitFrom === unitTo) {
    if (matchFrom) from = parseFloat(matchFrom[1]);
    if (matchTo) to = parseFloat(matchTo[1]);
  }

  const v = _defaultEffect(from, to, p, start, end);

  return unitFrom !== 'px' ? `${v}${unitFrom}` : v;
};

sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"].default = defaultEffect;

function arrayEffect(arr1, arr2, p, start, end) {
  if (typeof arr1 === 'string') {
    arr1 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"])(arr1);
  }

  if (typeof arr2 === 'string') {
    arr2 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"])(arr2);
  }

  if (Array.isArray(arr1)) {
    return arr1.map((o, i) => defaultEffect(o, arr2[i] != null ? arr2[i] : arr2, p, start, end));
  }

  return defaultEffect(arr1, arr2, p, start, end);
}

function objectEffect(obj1, obj2, p, start, end) {
  const t1 = Object.assign({}, obj2, obj1),
        t2 = Object.assign({}, obj1, obj2);
  Object.entries(t1).forEach(([key, value]) => {
    t1[key] = arrayEffect(value, t2[key], p, start, end);
  });
  return t1;
}

function getTransformMatrix(trans) {
  let matrix = new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"]();
  Object.entries(trans).forEach(([key, val]) => {
    if (key === 'matrix') {
      matrix = new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](val);
    } else if (Array.isArray(val)) {
      matrix[key](...val);
    } else if (key === 'scale') {
      matrix.scale(val, val);
    } else {
      matrix[key](val);
    }
  });
  return matrix.m;
}

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function transformEffect(trans1, trans2, p, start, end) {
  trans1 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringTransform"])(trans1);
  trans2 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringTransform"])(trans2);

  if (!arrayEqual(Object.keys(trans1), Object.keys(trans2))) {
    trans1 = getTransformMatrix(trans1);
    trans2 = getTransformMatrix(trans2);
  }

  if (Array.isArray(trans1) || Array.isArray(trans2)) {
    return arrayEffect(trans1, trans2, p, start, end);
  }

  return objectEffect(trans1, trans2, p, start, end);
}

function colorEffect(color1, color2, p, start, end) {
  const c1 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseColor"])(color1);
  const c2 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseColor"])(color2);

  if (c1.model === c2.model) {
    c1.value = arrayEffect(c1.value, c2.value, p, start, end).map((c, i) => {
      return i < 3 ? Math.round(c) : Math.round(c * 100) / 100;
    });
    return c1.str;
  }

  return defaultEffect(color1, color2, p, start, end);
}

function pathEffect(path1, path2, p, start, end) {
  path1 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createSvgPath"])(path1);
  path2 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createSvgPath"])(path2);
  return Object(_patheffect__WEBPACK_IMPORTED_MODULE_3__["default"])(path1.d, path2.d, p, start, end);
}

Object.assign(sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"], {
  arrayEffect,
  transformEffect,
  colorEffect,
  pathEffect,
  pos: arrayEffect,
  size: arrayEffect,
  transform: transformEffect,
  bgcolor: colorEffect,

  border(v1, v2, p, start, end) {
    if (Array.isArray(v2)) {
      v2 = {
        width: v2[0],
        color: v2[1],
        style: v2[2] || 'solid'
      };
    }

    return {
      width: defaultEffect(v1.width, v2.width, p, start, end),
      color: colorEffect(v1.color, v2.color, p, start, end),
      style: arrayEffect(v1.style, v2.style, p, start, end)
    };
  },

  scale: arrayEffect,
  translate: arrayEffect,
  skew: arrayEffect,
  padding: arrayEffect,
  margin: arrayEffect,
  color: colorEffect,
  strokeColor: colorEffect,
  fillColor: colorEffect,
  d: _patheffect__WEBPACK_IMPORTED_MODULE_3__["default"],
  path: pathEffect,
  clip: pathEffect
});
/* harmony default export */ __webpack_exports__["default"] = (class extends sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Animator"] {
  constructor(sprite, frames, timing, setter) {
    super(sprite.attr(), frames, timing);
    this.target = sprite;

    this.setter = setter || function (frame, target) {
      target.attr(frame);
    };
  }

  get playState() {
    if (!this.target.parent) {
      return 'idle';
    }

    return super.playState;
  }

  get finished() {
    // set last frame when finished
    // because while the web page is not focused
    // requestAnimationFrame will not trigger while deferTime of
    // the animator is still running
    return super.finished.then(() => {
      const that = this;
      return new Promise(resolve => {
        function update() {
          that.setter(that.frame, that.target);
          const playState = that.playState;

          if (playState === 'finished' || playState === 'idle') {
            Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["cancelAnimationFrame"])(that.requestId);
            resolve();
          } else {
            Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["requestAnimationFrame"])(update);
          }
        }

        update();
      });
    });
  }

  finish() {
    // finish should change attrs synchronously
    super.finish();
    Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["cancelAnimationFrame"])(this.requestId);
    this.setter(this.frame, this.target);
  }

  play() {
    if (!this.target.parent || this.playState === 'running') {
      return;
    }

    super.play();
    this.setter(this.frame, this.target);
    const that = this;
    this.ready.then(() => {
      that.setter(that.frame, that.target);
      that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["requestAnimationFrame"])(function update() {
        const target = that.target;

        if (typeof document !== 'undefined' && document.documentElement && document.documentElement.contains && target.layer && target.layer.canvas && !document.documentElement.contains(target.layer.canvas)) {
          // if dom element has been removed stop animation.
          // it usually occurs in single page applications.
          that.cancel();
          return;
        }

        const playState = that.playState;
        that.setter(that.frame, that.target);
        if (playState === 'idle') return;

        if (playState === 'running') {
          that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["requestAnimationFrame"])(update);
        } else if (playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
          // playbackRate < 0 will cause playState reset to pending...
          that.ready.then(() => {
            that.setter(that.frame, that.target);
            that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["requestAnimationFrame"])(update);
          });
        }
      });
    });
  }

  cancel(preserveState = false) {
    Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["cancelAnimationFrame"])(this.requestId);

    if (preserveState) {
      this.setter(this.frame, this.target);
      super.cancel();
    } else {
      super.cancel();
      this.setter(this.frame, this.target);
    }
  }

});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pathEffect; });
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
// https://github.com/AlloyTeam/pasition



function _subShapes(shapes, count) {
  for (let i = 0; i < count; i++) {
    const shape = shapes[shapes.length - 1];
    const newShape = [];
    const x = shape[0][0],
          y = shape[0][1];
    shape.forEach(() => {
      newShape.push([x, y, x, y, x, y, x, y]);
    });
    shapes.push(newShape);
  }
}

function _upShapes(shapes, count) {
  for (let i = 0; i < count; i++) {
    const shape = shapes[shapes.length - 1];
    const newShape = [];
    shape.forEach(curve => {
      newShape.push(curve.slice(0));
    });
    shapes.push(newShape);
  }
}

function split(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  return {
    left: _split(x1, y1, x2, y2, x3, y3, x4, y4, t),
    right: _split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true)
  };
}

function _split(x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {
  const x12 = (x2 - x1) * t + x1;
  const y12 = (y2 - y1) * t + y1;
  const x23 = (x3 - x2) * t + x2;
  const y23 = (y3 - y2) * t + y2;
  const x34 = (x4 - x3) * t + x3;
  const y34 = (y4 - y3) * t + y3;
  const x123 = (x23 - x12) * t + x12;
  const y123 = (y23 - y12) * t + y12;
  const x234 = (x34 - x23) * t + x23;
  const y234 = (y34 - y23) * t + y23;
  const x1234 = (x234 - x123) * t + x123;
  const y1234 = (y234 - y123) * t + y123;

  if (reverse) {
    return [x1234, y1234, x123, y123, x12, y12, x1, y1];
  }

  return [x1, y1, x12, y12, x123, y123, x1234, y1234];
}

function _splitCurves(curves, count) {
  let i = 0,
      index = 0;

  for (; i < count; i++) {
    const curve = curves[index];
    const cs = split(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], 0.5);
    curves.splice(index, 1);
    curves.splice(index, 0, cs.left, cs.right);
    index += 2;

    if (index >= curves.length - 1) {
      index = 0;
    }
  }
}

function pathToShapes(path) {
  let x = 0,
      y = 0;
  const shapes = [];
  path.forEach(p => {
    const [cmd, ...points] = p;

    if (cmd === 'M') {
      x = points[0];
      y = points[1];
    } else {
      shapes.push([x, y, ...points]);
      x = points[4];
      y = points[5];
    }
  });
  return [shapes];
} // match two path


function match(pathA, pathB, minCurves = 100) {
  let shapesA = pathToShapes(pathA.path);
  const shapesB = pathToShapes(pathB.path);
  const lenA = shapesA.length,
        lenB = shapesB.length;

  if (lenA > lenB) {
    _subShapes(shapesB, lenA - lenB);
  } else if (lenA < lenB) {
    _upShapes(shapesA, lenB - lenA);
  }

  shapesA = Object(_sort__WEBPACK_IMPORTED_MODULE_1__["sort"])(shapesA, shapesB);
  shapesA.forEach((curves, index) => {
    const lenA = curves.length,
          lenB = shapesB[index].length;

    if (lenA > lenB) {
      if (lenA < minCurves) {
        _splitCurves(curves, minCurves - lenA);

        _splitCurves(shapesB[index], minCurves - lenB);
      } else {
        _splitCurves(shapesB[index], lenA - lenB);
      }
    } else if (lenA < lenB) {
      if (lenB < minCurves) {
        _splitCurves(curves, minCurves - lenA);

        _splitCurves(shapesB[index], minCurves - lenB);
      } else {
        _splitCurves(curves, lenB - lenA);
      }
    }
  });
  shapesA.forEach((curves, index) => {
    shapesA[index] = Object(_sort__WEBPACK_IMPORTED_MODULE_1__["sortCurves"])(curves, shapesB[index]);
  });
  return [shapesA, shapesB];
}

function lerpPoints(x1, y1, x2, y2, t) {
  return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
}

function lerpCurve(curveA, curveB, t) {
  return lerpPoints(curveA[0], curveA[1], curveB[0], curveB[1], t).concat(lerpPoints(curveA[2], curveA[3], curveB[2], curveB[3], t)).concat(lerpPoints(curveA[4], curveA[5], curveB[4], curveB[5], t)).concat(lerpPoints(curveA[6], curveA[7], curveB[6], curveB[7], t));
}

function lerp(pathA, pathB, t) {
  const [shapesA, shapesB] = match(pathA, pathB);
  const closed = /z$/img.test(pathB.d) ? 'z' : '';
  return `${shapesA.map((shapeA, i) => {
    const shapeB = shapesB[i];
    return shapeA.map((curveA, i) => {
      const curveB = shapeB[i];
      const curve = lerpCurve(curveA, curveB, t);

      if (i === 0) {
        return `M${curve[0]} ${curve[1]} C${curve[2]} ${curve[3]}, ${curve[4]} ${curve[5]}, ${curve[6]} ${curve[7]}`;
      }

      return `${curve[2]} ${curve[3]}, ${curve[4]} ${curve[5]}, ${curve[6]} ${curve[7]}`;
    });
  }).join(' ')}${closed}`;
}

function pathEffect(pathA, pathB, p, s, e) {
  const ep = (p - s) / (e - s);
  if (ep <= 0) return pathA;
  if (ep >= 1) return pathB;
  pathA = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](pathA);
  pathB = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](pathB);
  return lerp(pathA, pathB, ep);
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCurves", function() { return sortCurves; });
// https://github.com/AlloyTeam/pasition
function shapeBox(shape) {
  let minX = shape[0][0],
      minY = shape[0][1],
      maxX = minX,
      maxY = minY;
  shape.forEach(curve => {
    const x1 = curve[0],
          x2 = curve[2],
          x3 = curve[4],
          x4 = curve[6],
          y1 = curve[1],
          y2 = curve[3],
          y3 = curve[5],
          y4 = curve[7];
    minX = Math.min(minX, x1, x2, x3, x4);
    minY = Math.min(minY, y1, y2, y3, y4);
    maxX = Math.max(maxX, x1, x2, x3, x4);
    maxY = Math.max(maxY, y1, y2, y3, y4);
  });
  return [minX, minY, maxX, maxY];
}

function boxDistance(boxA, boxB) {
  return Math.sqrt((boxA[0] - boxB[0]) ** 2 + (boxA[1] - boxB[1]) ** 2) + Math.sqrt((boxA[2] - boxB[2]) ** 2 + (boxA[3] - boxB[3]) ** 2);
}

function curveDistance(curveA, curveB) {
  const x1 = curveA[0],
        x2 = curveA[2],
        x3 = curveA[4],
        x4 = curveA[6],
        y1 = curveA[1],
        y2 = curveA[3],
        y3 = curveA[5],
        y4 = curveA[7],
        xb1 = curveB[0],
        xb2 = curveB[2],
        xb3 = curveB[4],
        xb4 = curveB[6],
        yb1 = curveB[1],
        yb2 = curveB[3],
        yb3 = curveB[5],
        yb4 = curveB[7];
  return Math.sqrt((xb1 - x1) ** 2 + (yb1 - y1) ** 2) + Math.sqrt((xb2 - x2) ** 2 + (yb2 - y2) ** 2) + Math.sqrt((xb3 - x3) ** 2 + (yb3 - y3) ** 2) + Math.sqrt((xb4 - x4) ** 2 + (yb4 - y4) ** 2);
}

function sortCurves(curvesA, curvesB) {
  const arrList = permuteCurveNum(curvesA.length);
  const list = [];
  arrList.forEach(arr => {
    let distance = 0;
    let i = 0;
    arr.forEach(index => {
      distance += curveDistance(curvesA[index], curvesB[i++]);
    });
    list.push({
      index: arr,
      distance
    });
  });
  list.sort((a, b) => {
    return a.distance - b.distance;
  });
  const result = [];
  list[0].index.forEach(index => {
    result.push(curvesA[index]);
  });
  return result;
}

function sort(pathA, pathB) {
  const arrList = permuteNum(pathA.length);
  const list = [];
  arrList.forEach(arr => {
    let distance = 0;
    arr.forEach(index => {
      distance += boxDistance(shapeBox(pathA[index]), shapeBox(pathB[index]));
    });
    list.push({
      index: arr,
      distance
    });
  });
  list.sort((a, b) => {
    return a.distance - b.distance;
  });
  const result = [];
  list[0].index.forEach(index => {
    result.push(pathA[index]);
  });
  return result;
}

function permuteCurveNum(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    const indexArr = [];

    for (let j = 0; j < num; j++) {
      let index = j + i;
      if (index > num - 1) index -= num;
      indexArr[index] = j;
    }

    arr.push(indexArr);
  }

  return arr;
}

function permuteNum(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return permute(arr);
}

function permute(input) {
  const permArr = [],
        usedChars = [];

  function main(input) {
    let i, ch;

    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);

      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }

      main(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }

    return permArr;
  }

  return main(input);
}



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_baseattr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

const defaultValues = {
  state: 'default',
  states: {},
  actions: {
    'beforeEnter:': {
      duration: 300,
      easing: 'ease-in'
    },
    'beforeExit:': {
      duration: 300,
      easing: 'ease-out'
    },
    'hide:': {
      duration: 300,
      easing: 'ease-in'
    },
    ':hide': {
      duration: 300,
      easing: 'ease-out'
    },
    'hide:beforeShow': 'none',
    'beforeShow:': {
      duration: 300,
      easing: 'ease-in'
    }
  },
  enterMode: 'normal',
  exitMode: 'normal'
};
_core_baseattr__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes({
  states: {
    value: defaultValues.states,

    set(val) {
      val = Object.assign({}, val);
      const states = this.states; // recover __default

      Object.entries(states).forEach(([key, value]) => {
        if (value.__default && !(key in val)) {
          val[key] = value;
        }
      });
      this.quietSet('states', val);
    }

  },
  actions: {
    value: defaultValues.actions,

    set(val) {
      if (Array.isArray(val)) {
        const value = {};
        val.forEach(v => {
          let key;
          let action = v.action;

          if (!action) {
            action = Object.assign({}, v);
            delete action.from;
            delete action.to;
            delete action.both;
          }

          if (v.both) {
            if (!Array.isArray(v.both)) {
              v.both = [v.both];
            }

            if (v.both.length > 1) {
              key = v.both.join(':');
              value[key] = Object.assign({}, action);
              key = v.both.reverse().join(':');
              value[key] = Object.assign({}, action);
            } else {
              value[`${v.both[0]}:`] = Object.assign({}, action);
              value[`:${v.both[0]}`] = Object.assign({}, action);
            }
          } else {
            key = `${v.from || ''}:${v.to || ''}`;
            value[key] = Object.assign({}, action);
          }
        });
        val = value;
      }

      const defaultVal = defaultValues.actions;
      val = Object.assign({}, defaultVal, val);
      this.quietSet('actions', val);
    }

  },
  state: {
    value: defaultValues.state,

    set(val) {
      if (val == null) val = 'default';
      const oldState = this.state;

      if (oldState !== val) {
        this.quietSet('state', val);
        const states = this.states;
        let action = null;
        const toState = states[val] || {};
        const subject = this.subject;

        if (!subject.__ignoreAction && subject.layer) {
          const fromState = states[oldState],
                actions = this.actions;
          action = actions[`${oldState}:${val}`] || actions[`:${val}`] || actions[`${oldState}:`];
          if (!action || action === 'none') action = {
            duration: 0
          };
          const animation = subject.changeState(fromState, toState, action);
          const tag = Symbol('tag');
          animation.tag = tag;

          if (animation.__reversed) {
            subject.dispatchEvent(`state-to-${oldState}`, {
              from: val,
              to: oldState,
              action: animation.__reversed,
              cancelled: true,
              animation
            }, true, true);
          }

          subject.dispatchEvent(`state-from-${oldState}`, {
            from: oldState,
            to: val,
            action,
            animation
          }, true, true);
          animation.finished.then(() => {
            if (animation.tag === tag) {
              subject.dispatchEvent(`state-to-${val}`, {
                from: oldState,
                to: val,
                action,
                animation
              }, true, true);
            }
          });

          if (oldState === 'afterExit') {
            animation.finish();
          }
        } else {
          subject.dispatchEvent(`state-from-${oldState}`, {
            from: oldState,
            to: val
          }, true, true);
          if (toState) subject.attr(toState);
          subject.dispatchEvent(`state-to-${val}`, {
            from: oldState,
            to: val
          }, true, true);
        }
      }
    }

  },
  enterMode: {
    value: defaultValues.enterMode
  },
  exitMode: {
    value: defaultValues.exitMode
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_basesprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);


function doActions(ret, target, act) {
  const actions = target.children.map(c => c[act]()).filter(d => d.promise);

  if (ret.promise) {
    actions.unshift(ret);
  }

  if (actions.length) {
    const deferred = {
      promise: Promise.all(actions.map(d => d.promise)),

      resolve() {
        actions.forEach(d => d.resolve());
        return this.promise;
      }

    };
    return deferred;
  }

  return null;
}

const _resolveState = Symbol('resolveState'),
      _changeStateAction = Symbol('changeStateAction'),
      _show = Symbol('show'),
      _hide = Symbol('hide'),
      _enter = Symbol('enter');

const enter = _core_basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.enter;
const exit = _core_basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.exit;
Object.assign(_core_basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, {
  changeState(fromState, toState, action) {
    let animation;

    if (this[_changeStateAction]) {
      const currentAnim = this[_changeStateAction].animation;

      if (this[_changeStateAction].reversable && (currentAnim.playState === 'running' || currentAnim.playState === 'pending') && this[_changeStateAction].fromState === toState && this[_changeStateAction].toState === fromState) {
        currentAnim.playbackRate = -currentAnim.playbackRate;
        animation = currentAnim;
        animation.__reversed = this[_changeStateAction].action;
      } else {
        currentAnim.finish();
      }
    }

    if (!animation) {
      // const [_fromState, _toState] = [Object.assign({}, fromState), Object.assign({}, toState)];
      // delete _fromState.__default;
      // delete _toState.__default;
      const _fromState = {},
            _toState = {};
      Object.entries(fromState || {}).forEach(([key, value]) => {
        if (key !== '__default') {
          if (typeof value === 'function') {
            _fromState[key] = this.attr(key);
          } else {
            _fromState[key] = value;
          }
        }
      });
      Object.entries(toState || {}).forEach(([key, value]) => {
        if (key !== '__default') {
          if (typeof value === 'function') {
            _toState[key] = value(this.attr(key));
          } else {
            _toState[key] = value;
          }
        }
      });
      animation = this.animate([_fromState, _toState], Object.assign({
        fill: 'forwards'
      }, action));
      animation.finished.then(() => {
        if (this[_changeStateAction] && this[_changeStateAction].animation === animation) delete this[_changeStateAction];
      });
    }

    this[_changeStateAction] = {
      animation,
      fromState,
      toState,
      action,
      reversable: action.reversable !== false
    };
    return animation;
  },

  resolveStates(states, before, after) {
    let currentAnimation = null,
        resolved = false;
    const _states = [];
    let prev = null;

    for (let i = 0; i < states.length; i++) {
      const s = states[i];

      if (prev !== s) {
        prev = s;

        _states.push(s);
      }
    }

    states = _states;

    const _resolveStates = () => {
      this.__ignoreAction = false;
      let fromState = this.attr('state');

      if (fromState === states[0]) {
        states.shift();
      }

      const len = states.length;

      const resolveState = (state, i) => {
        const promise = new Promise(resolve => {
          this.once(`state-to-${state}`, () => {
            fromState = state;

            if (i === len - 1) {
              // lastState
              delete this[_resolveState];
            }

            if (after) after.call(this, states);
            resolve(this);
          });
          this.once(`state-from-${fromState}`, ({
            animation
          }) => {
            if (animation && resolved) animation.finish();else currentAnimation = animation;
          });
          this.attr('state', state);
        });
        return promise;
      };

      let promise = Promise.resolve();
      states.forEach((state, i) => {
        promise = promise.then(() => {
          return resolveState(state, i);
        });
      });
      const ret = {
        get animation() {
          return currentAnimation;
        },

        states,

        resolve() {
          resolved = true;
          if (currentAnimation) currentAnimation.finish();
          return promise;
        },

        promise
      };
      this[_resolveState] = ret;
      return ret;
    };

    const rs = this[_resolveState];

    if (rs) {
      rs.resolve();
      this.__ignoreAction = true;
      const promise = rs.promise.then(() => {
        if (before) before.call(this, states);
        return _resolveStates().promise;
      });
      return {
        promise,

        resolve() {
          resolved = true;
          if (currentAnimation) currentAnimation.finish();
          return promise;
        }

      };
    }

    if (before) before.call(this, states);
    return _resolveStates();
  },

  // state: original -> show -> hide -> show -> original
  show() {
    if (this[_show]) return this[_show];
    const originalDisplay = this.attr('__originalDisplay') || '';
    const originalState = this.attr('__originalState') || 'default';
    const states = this.attr('states');

    if (states.show) {
      const _st = ['show', originalState];

      if (states.beforeShow) {
        _st.unshift('beforeShow');
      }

      const deferred = this.resolveStates(_st, () => {
        const state = this.attr('state');

        if (state === 'hide') {
          this.once('state-from-hide', () => {
            this.attr('display', originalDisplay);
          });
        }
      });
      deferred.promise = deferred.promise.then(() => {
        if (!this[_hide]) {
          delete this.__attr.__originalDisplay;
          delete this.__attr.__originalState;

          if (states.show.__default) {
            delete states.show;
            this.attr('states', states);
          }
        }

        delete this[_show];
      });
      this[_show] = deferred;
      return deferred;
    }

    const rs = this[_resolveState];

    if (rs) {
      rs.resolve();
      rs.promise.then(() => {
        this.attr('state', originalState);
        this.attr('display', originalDisplay);
      });
      return rs;
    }

    this.attr('state', originalState);
    this.attr('display', originalDisplay);
    return this;
  },

  hide() {
    const state = this.attr('state');
    if (this[_hide] || state === 'hide' || state === 'afterExit' || state === 'beforeExit') return this[_hide];

    const __originalDisplay = this.attr('__originalDisplay');

    if (__originalDisplay == null) {
      const display = this.attr('display');
      this.attr({
        __originalDisplay: display !== 'none' ? display : '',
        __originalState: state !== 'hide' ? state : 'default'
      });
    }

    const states = this.attr('states');

    if (states.hide) {
      const deferred = this.resolveStates(['show', 'hide'], () => {
        if (!states.show) {
          const beforeHide = {
            __default: true
          };

          if (states.beforeShow) {
            Object.keys(states.beforeShow).forEach(key => {
              beforeHide[key] = this.attr(key);
            });
          }

          Object.keys(states.hide).forEach(key => {
            beforeHide[key] = this.attr(key);
          });
          states.show = beforeHide;
          this.attr('states', states);
        }
      });
      deferred.promise = deferred.promise.then(() => {
        this.attr('display', 'none');
        delete this[_hide];
        return this;
      });
      this[_hide] = deferred;
      return deferred;
    }

    const rs = this[_resolveState];

    if (rs) {
      rs.resolve();
      rs.promise.then(() => {
        this.attr('state', 'hide');
        this.attr('display', 'none');
      });
      return rs;
    }

    this.attr('state', 'hide');
    this.attr('display', 'none');
    return this;
  },

  enter(toState) {
    const states = this.attr('states');
    let ret;

    if (states && (states.beforeEnter || states.afterEnter)) {
      const deferred = this.resolveStates(['beforeEnter', 'afterEnter'], _states => {
        const state = this.attr('state');

        _states.push(toState || state);

        if (state !== 'beforeEnter' && state !== 'afterEnter' && (!states.afterEnter || states.afterEnter.__default)) {
          const afterEnter = {
            __default: true
          };
          Object.keys(states.beforeEnter).forEach(key => {
            afterEnter[key] = this.attr(key);
          });
          states.afterEnter = afterEnter;
          this.attr('states', states);
        }
      });
      ret = deferred;
    } else {
      ret = enter.call(this);
    }

    this[_enter] = ret;

    if (this.children) {
      const enterMode = this.attr('enterMode');

      if (enterMode === 'onebyone' || enterMode === 'onebyone-reverse') {
        let promise = null;
        let resolved = false;

        if (ret.promise) {
          promise = ret.promise;
        } else {
          promise = Promise.resolve(this);
        }

        let children = this.children;

        if (enterMode === 'onebyone-reverse') {
          children = [...children].reverse();
        }

        let currentTask = ret;
        children.forEach(c => {
          const states = c.attr('states');

          if (states && (states.beforeEnter || states.afterEnter)) {
            if (!states.afterEnter || states.afterEnter.__default) {
              const afterEnter = {
                __default: true
              };
              Object.keys(states.beforeEnter).forEach(key => {
                afterEnter[key] = c.attr(key);
              });
              states.afterEnter = afterEnter;
              c.attr('states', states);
            }
          }

          const toState = c.attr('state');
          c.attr('state', 'beforeEnter');
          promise = promise.then(() => {
            const d = c.enter(toState);

            if (d.promise) {
              currentTask = d;

              if (resolved && d.resolve) {
                d.resolve();
              }

              return d.promise;
            }

            return d;
          });
        });
        this[_enter] = {
          promise,

          resolve() {
            if (currentTask && currentTask.resolve) currentTask.resolve();
            resolved = true;
          }

        };
      } else {
        const deferred = doActions(ret, this, 'enter');
        if (deferred) this[_enter] = deferred;
      }
    }

    return this[_enter];
  },

  exit(toState, onbyone = false) {
    const _exit = () => {
      const states = this.attr('states');
      let ret;
      const afterEnter = states.afterEnter || {};

      if (states && (states.beforeExit || states.afterExit)) {
        let state;
        const deferred = this.resolveStates(['beforeExit', 'afterExit'], () => {
          state = this.attr('state');

          if (state !== 'beforeExit' && state !== 'afterExit' && (!states.beforeExit || states.beforeExit.__default)) {
            states.beforeExit = Object.assign({}, afterEnter);
            states.beforeExit.__default = true;
            this.attr('states', states);
          }
        });
        deferred.promise.then(() => {
          if (!onbyone) {
            this.attr(afterEnter);

            this.__attr.quietSet('state', toState || state);
          }

          return this;
        });
        ret = deferred;
      } else {
        const rs = this[_resolveState];

        if (rs) {
          rs.resolve();
          rs.promise.then(() => {
            this.attr(afterEnter);
            return exit.call(this);
          });
          ret = rs;
        } else {
          ret = exit.call(this);
          this.attr(afterEnter);
        }
      }

      if (this.children) {
        const exitMode = this.attr('exitMode');

        if (exitMode === 'onebyone' || exitMode === 'onebyone-reverse') {
          let promise = Promise.resolve(this);
          let resolved = false;
          let children = this.children;

          if (exitMode === 'onebyone-reverse') {
            children = [...children].reverse();
          }

          let currentTask = null;
          children.forEach(c => {
            const states = c.attr('states');

            if (states && (states.beforeExit || states.afterExit)) {
              if (!states.beforeExit || states.beforeExit.__default) {
                states.beforeExit = Object.assign({}, afterEnter);
                states.beforeExit.__default = true;
                c.attr('states', states);
              }
            }

            const toState = c.attr('state');
            c.attr('state', 'beforeExit');
            promise = promise.then(() => {
              const d = c.exit(toState, true);

              if (d.promise) {
                currentTask = d;
                if (resolved && d.resolve) d.resolve();
                return d.promise;
              }

              return d;
            });
            c.__toState = toState;
          });
          promise = promise.then(() => {
            const p = ret.promise || Promise.resolve(this);
            currentTask = ret;
            return p.then(() => {
              this.children.forEach(c => {
                const states = c.attr('states');
                c.attr(states.afterEnter);

                c.__attr.quietSet('state', c.__toState);

                delete c.__toState;
              });
            });
          });
          return {
            promise,

            resolve() {
              if (currentTask && currentTask.resolve) currentTask.resolve();
              resolved = true;
            }

          };
        }

        const deferred = doActions(ret, this, 'exit');
        if (deferred) return deferred;
      }

      return ret;
    };

    if (this[_enter] && this[_enter].promise) {
      let resolved = false;

      this[_enter].resolve();

      const promise = this[_enter].promise.then(() => {
        const deferred = _exit();

        if (resolved && deferred.resolve) {
          deferred.resolve();
        }

        return deferred.promise;
      });

      return {
        promise,

        resolve() {
          resolved = true;
        }

      };
    }

    return _exit();
  }

});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _core_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);



_core_group__WEBPACK_IMPORTED_MODULE_2__["default"].applyLayout('flex', _flex__WEBPACK_IMPORTED_MODULE_1__);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_baseattr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);


/*
  BaseAttr.addAttributes({
    flexGrow: {
      decorators: [],
      value: ...,
      set: ...,
      get: ...,
    },
  });
*/

const relayout = true,
      reflow = true,
      cache = true;
_core_baseattr__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes({
  flexGrow: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      relayout
    })],
    value: 0
  },
  flexShrink: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      relayout
    })],
    value: 1
  },
  flexBasis: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      relayout,
      reflow
    })],
    value: 'auto'
  },
  order: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseInt), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      cache,
      relayout
    })],
    value: 0
  },
  alignSelf: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      cache,
      relayout
    })],
    value: ''
  },
  flex: {
    set(val) {
      this.clearFlow();

      if (val != null && val !== 'initial') {
        if (val === 'auto') {
          this.flexGrow = 1;
          this.flexShrink = 1;
          this.flexBasis = 'auto';
        } else if (val === 'none') {
          this.flexGrow = 0;
          this.flexShrink = 0;
          this.flexBasis = 'auto';
        } else if (typeof val === 'string') {
          const values = val.trim().split(/\s+/);
          this.flexGrow = values[0];
          this.flexShrink = values[1];
          this.flexBasis = values[2];
        } else {
          this.flexGrow = val;
          this.flexShrink = 1;
          this.flexBasis = 'auto';
        }
      } else {
        this.flexGrow = 0;
        this.flexShrink = 1;
        this.flexBasis = 'auto';
      }
    },

    get() {
      return `${this.flexGrow} ${this.flexShrink} ${this.flexBasis}`;
    }

  }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relayout", function() { return relayout; });
/* harmony import */ var sprite_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);


const attrs = {
  flexDirection: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      relayout
    })],
    value: 'row'
  },
  flexWrap: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      relayout
    })],
    value: 'nowrap'
  },
  justifyContent: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      relayout
    })],
    value: 'flex-start'
  },
  alignItems: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      relayout
    })],
    value: 'stretch'
  },
  alignContent: {
    decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({
      relayout
    })],
    value: 'stretch'
  }
};
function relayout(containerSprite, itemsSprite) {
  itemsSprite.sort((a, b) => {
    const orderA = a.attributes.order | 0,
          orderB = b.attributes.order | 0;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.zOrder - b.zOrder;
  });
  const container = sprite_flex_layout__WEBPACK_IMPORTED_MODULE_0__["Node"].create({
    width: containerSprite.attrSize[0],
    height: containerSprite.attrSize[1],
    flexDirection: containerSprite.attributes.flexDirection,
    alignItems: containerSprite.attributes.alignItems,
    justifyContent: containerSprite.attributes.justifyContent,
    flexWrap: containerSprite.attributes.flexWrap,
    alignContent: containerSprite.attributes.alignContent
  });
  itemsSprite.forEach(item => {
    const [marginTop, marginRight, marginBottom, marginLeft] = item.attr('margin');
    const [paddingTop, paddingRight, paddingBottom, paddingLeft] = item.attr('padding');
    const borderWidth = item.attr('border').width;
    const [width, height] = item.attrSize;
    const config = {
      width,
      height,
      offsetWidth: item.contentSize[0],
      offsetHeight: item.contentSize[1],
      minWidth: item.attributes.minWidth,
      maxWidth: item.attributes.maxWidth,
      minHeight: item.attributes.minHeight,
      maxHeight: item.attributes.maxHeight,
      boxSizing: item.attr('boxSizing'),
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      borderTop: borderWidth,
      borderRight: borderWidth,
      borderBottom: borderWidth,
      borderLeft: borderWidth,
      alignSelf: item.attributes.alignSelf,
      // flex: item.attributes.flex,
      flexBasis: item.attributes.flexBasis,
      flexGrow: item.attributes.flexGrow,
      flexShrink: item.attributes.flexShrink
    };
    const node = sprite_flex_layout__WEBPACK_IMPORTED_MODULE_0__["Node"].create(config);
    container.appendChild(node);
  });
  container.calculateLayout();
  const layout = container.getAllComputedLayout();
  containerSprite.attr({
    layoutWidth: layout.width,
    layoutHeight: layout.height
  });
  layout.children.forEach((item, index) => {
    const sprite = itemsSprite[index];
    const [ox, oy] = sprite.originalRect; // fix anchor

    sprite.attr({
      layoutX: item.left - ox,
      layoutY: item.top - oy,
      layoutWidth: item.width,
      layoutHeight: item.height,
      layoutRight: item.left + item.width,
      layoutBottom: item.top + item.height
    });
  });
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);



let id = 1;

class Node {
  constructor(config) {
    this.config = new _config__WEBPACK_IMPORTED_MODULE_0__["default"](config, this);
    this.parent = null;
    this.children = [];
    this.id = id++;
  }

  appendChild(node) {
    if (!(node instanceof Node)) {
      throw new Error('appended Child must be instance of Node');
    }

    node.parent = this;
    this.children.push(node);
    return this;
  }

  calculateLayout(width, height, direction) {
    if (width) this.width = width;
    if (height) this.height = height;
    if (direction) this.flexDirection = direction;
    const instance = new _compose__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    instance.compose();
  }

  getComputedLayout(props = []) {
    let width = this.computedWidth;

    if (width === undefined) {
      width = this.width;
    }

    let height = this.computedHeight;

    if (height === undefined) {
      height = this.height;
    }

    const layout = {
      left: this.left || 0,
      top: this.top || 0,
      width,
      height
    };
    props.forEach(item => {
      layout[item] = this[item];
    });
    return layout;
  }

  getAllComputedLayout(props) {
    const layout = this.getComputedLayout();
    layout.children = this.children.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    }).map(item => {
      return item.getComputedLayout(props);
    });
    return layout;
  }

  static create(config) {
    return new Node(config);
  }

}

_util__WEBPACK_IMPORTED_MODULE_2__["flexProperties"].forEach(property => {
  Object.defineProperty(Node.prototype, property, {
    get() {
      return this.config[property];
    },

    set(value) {
      this.config[property] = value;
    }

  });
});
/* harmony default export */ __webpack_exports__["default"] = (Node);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);


class Config {
  constructor(config = {}, node) {
    this.config = {};
    this.node = node;
    Object.keys(config).forEach(item => {
      if (_util__WEBPACK_IMPORTED_MODULE_0__["flexProperties"].indexOf(item) === -1) {
        throw new Error(`config ${item} is not valid`);
      }

      this[item] = config[item];
    });
  }

  parse() {
    this.parseBorder();
    this.parsePadding();
    this.parseMargin();
    this.parseFlex();
    this.parseFlexFlow();
    this.parseFlexProps();
    this.parseSize();
    this.parseComputedWidth();
    this.parseComputedHeight();
    this.parseLayoutWidth();
    this.parseLayoutHeight();
  }

  parseNumberValue(value, parentValue) {
    if (value === 'auto' || typeof value === 'number') return value;
    if (!value) return 0;
    const percentValue = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parsePercentValue"])(value);

    if (typeof percentValue === 'number') {
      if (typeof parentValue === 'string') {
        parentValue = this.node.parent[parentValue];
      }

      value = percentValue * parentValue;
    } else if (/^[\d.-]+$/.test(value)) {
      value = parseFloat(value, 10);
    } else {
      throw new Error(`${value} is not a number`);
    }

    return value;
  }

  parseBorder() {
    let border = this.border || [0, 0, 0, 0];

    if (border) {
      border = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseCombineValue"])(border).map(item => {
        return this.parseNumberValue(item);
      });
    }

    const borderList = ['borderTop', 'borderRight', 'borderBottom', 'borderLeft'];
    this.border = borderList.map((item, index) => {
      this[item] = this.parseNumberValue(this[item]) || border[index];

      if (this[item] < 0 || this[item] === 'auto') {
        throw new Error(`${item}:${this[item]} is not valid`);
      }

      return this[item];
    });
  }

  parsePadding() {
    let padding = this.padding || [0, 0, 0, 0];

    if (padding) {
      padding = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseCombineValue"])(padding).map(item => {
        return this.parseNumberValue(item, 'width');
      });
    }

    const paddingList = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
    this.padding = paddingList.map((item, index) => {
      this[item] = this.parseNumberValue(this[item], 'width') || padding[index];

      if (this[item] < 0 || this[item] === 'auto') {
        throw new Error(`${item}:${this[item]} is not valid`);
      }

      return this[item];
    });
  }

  parseMargin() {
    let margin = this.margin || [0, 0, 0, 0];

    if (margin) {
      margin = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseCombineValue"])(margin).map(item => {
        return this.parseNumberValue(item, 'width');
      });
    }

    const marginList = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
    this.margin = marginList.map((item, index) => {
      this[item] = this.parseNumberValue(this[item], 'width') || margin[index];
      return this[item];
    });
  }

  parseFlex() {
    const flex = this.flex;

    if (flex) {
      if (typeof flex === 'number') {
        this.flexGrow = this.flexGrow || flex;
      } else {
        const [flexFlow, flexShrink, flexBasis] = flex.split(/\s+/);

        if (!this.flexFlow) {
          this.flexFlow = flexFlow;
        }

        if (!this.flexShrink) {
          this.flexShrink = flexShrink;
        }

        if (!this.flexBasis) {
          this.flexBasis = flexBasis;
        }
      }
    }

    this.flexShrink = parseFloat(this.flexShrink) || 1;
    this.flexGrow = parseFloat(this.flexGrow) || 0;
    let flexBasis = this.flexBasis;

    if (flexBasis) {
      const flexDirection = this.node.parent.flexDirection;
      const isRow = flexDirection === 'row' || flexDirection === 'row-reverse';
      flexBasis = this.parseNumberValue(flexBasis, isRow ? 'width' : 'height');
      this.flexBasis = flexBasis;
    } else if (this.flexBasis === '') {
      this.flexBasis = undefined;
    }
  }

  parseSize() {
    const widths = ['width', 'minWidth', 'maxWidth'];
    widths.forEach(item => {
      this[item] = this.parseNumberValue(this[item], 'width') || 0;
    });

    if (this.width && !this.offsetWidth) {
      this.offsetWidth = this.width;
    }

    const heights = ['height', 'minHeight', 'maxHeight'];
    heights.forEach(item => {
      this[item] = this.parseNumberValue(this[item], 'height') || 0;
    });

    if (this.height && !this.offsetHeight) {
      this.offsetHeight = this.height;
    }
  }

  parseFlexFlow() {
    const flexFlow = this.flexFlow;

    if (flexFlow) {
      flexFlow.split(/\s+/).forEach(item => {
        if (_util__WEBPACK_IMPORTED_MODULE_0__["flexDirectionValues"].indexOf(item) > -1) {
          this.flexDirection = item;
        } else if (_util__WEBPACK_IMPORTED_MODULE_0__["flexWrapValues"].indexOf(item) > -1) {
          this.flexWrap = item;
        } else {
          throw new Error(`FlexFlow: ${flexFlow} is not valid`);
        }
      });
    }
  }

  parseFlexProps() {
    const props = {
      flexDirection: _util__WEBPACK_IMPORTED_MODULE_0__["flexDirectionValues"],
      flexWrap: _util__WEBPACK_IMPORTED_MODULE_0__["flexWrapValues"],
      justifyContent: _util__WEBPACK_IMPORTED_MODULE_0__["justifyContentValues"],
      alignItems: _util__WEBPACK_IMPORTED_MODULE_0__["alignItemsValues"],
      alignSelf: _util__WEBPACK_IMPORTED_MODULE_0__["alignSelfValues"],
      alignContent: _util__WEBPACK_IMPORTED_MODULE_0__["alignContentValues"]
    };
    Object.keys(props).forEach(item => {
      if (this[item]) {
        const allowValues = props[item];

        if (allowValues.indexOf(this[item]) === -1) {
          throw new Error(`${item} value:${this[item]} is not valid`);
        }
      } else {
        this[item] = props[item][0];
      }
    });
  }

  getFlexBasis(type = 'width') {
    const flexDirection = this.node.parent.flexDirection;
    const flexBasis = this.flexBasis;

    if (flexBasis !== undefined && flexBasis !== 'auto') {
      const isRow = flexDirection === 'row' || flexDirection === 'row-reverse';

      if (type === 'width' && isRow || type === 'height' && !isRow) {
        return this.parseNumberValue(flexBasis, isRow ? 'width' : 'height');
      }
    }
  }

  get computedWidth() {
    return this.config.computedWidth;
  }

  set computedWidth(value) {
    this.config.computedWidth = value;
    this.parseLayoutWidth();
  }

  parseComputedWidth() {
    let width = this.getFlexBasis('width');

    if (width === undefined) {
      width = this.offsetWidth || 0;
    }

    const minWidth = this.minWidth;
    let maxWidth = this.maxWidth;

    if (maxWidth && minWidth && maxWidth < minWidth) {
      maxWidth = minWidth;
    }

    if (minWidth && width < minWidth) {
      width = minWidth;
    }

    if (maxWidth && width > maxWidth) {
      width = maxWidth;
    }

    this.config.computedWidth = width;
  }

  parseLayoutWidth() {
    let width = this.computedWidth;
    const marginLeft = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(this.marginLeft);
    const marginRight = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(this.marginRight);
    width += marginLeft + marginRight;

    if (this.boxSizing !== 'border-box') {
      const props = ['borderLeft', 'borderRight', 'paddingLeft', 'paddingRight'];
      props.forEach(item => {
        width += this[item] || 0;
      });
    }

    this.layoutWidth = width;
  }

  get computedHeight() {
    return this.config.computedHeight;
  }

  set computedHeight(value) {
    this.config.computedHeight = value;
    this.parseLayoutHeight();
  }

  parseComputedHeight() {
    let height = this.getFlexBasis('height');

    if (height === undefined) {
      height = this.offsetHeight || 0;
    }

    const minHeight = this.minHeight;
    let maxHeight = this.maxHeight;

    if (maxHeight && minHeight && maxHeight < minHeight) {
      maxHeight = minHeight;
    }

    if (minHeight && height < minHeight) {
      height = minHeight;
    }

    if (maxHeight && height > maxHeight) {
      height = maxHeight;
    }

    this.config.computedHeight = height;
  }

  parseLayoutHeight() {
    let height = this.computedHeight;
    const marginTop = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(this.marginTop);
    const marginBottom = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(this.marginBottom);
    height += marginTop + marginBottom;

    if (this.boxSizing !== 'border-box') {
      const props = ['borderTop', 'borderBottom', 'paddingTop', 'paddingBottom'];
      props.forEach(item => {
        height += this[item] || 0;
      });
    }

    this.layoutHeight = height;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexProperties", function() { return flexProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirectionValues", function() { return flexDirectionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrapValues", function() { return flexWrapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContentValues", function() { return justifyContentValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItemsValues", function() { return alignItemsValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelfValues", function() { return alignSelfValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContentValues", function() { return alignContentValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCombineValue", function() { return parseCombineValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePercentValue", function() { return parsePercentValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSpaceBetween", function() { return parseSpaceBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProp", function() { return getProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exchangeFlexProp", function() { return exchangeFlexProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMarginAuto", function() { return parseMarginAuto; });
const flexProperties = ['flex', 'flexDirection', 'flexWrap', 'flexFlow', 'justifyContent', 'alignContent', 'alignItems', 'alignSelf', 'flexShrink', 'flexBasis', 'flexGrow', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'height', 'width', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'boxSizing', 'layoutWidth', 'layoutHeight', 'offsetWidth', 'offsetHeight', 'computedWidth', 'computedHeight', 'order'];
const flexDirectionValues = ['row', 'row-reverse', 'column', 'column-reverse'];
const flexWrapValues = ['nowrap', 'wrap', 'wrap-reverse'];
const justifyContentValues = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
const alignItemsValues = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
const alignSelfValues = ['auto', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
const alignContentValues = ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
function parseCombineValue(value) {
  if (!Array.isArray(value)) {
    value = [value, value, value, value];
  } else if (value.length === 1) {
    value = [value[0], value[0], value[0], value[0]];
  } else if (value.length === 2) {
    value = [value[0], value[1], value[0], value[1]];
  } else if (value.length === 3) {
    value[3] = value[1];
  }

  return value;
}
/**
 * parse percent value
 * @param {String} value percent value, like `10%`
 */

function parsePercentValue(value) {
  if (!/%$/.test(value)) return false;
  return 0.01 * parseFloat(value, 10);
}
/**
 * parse space between items
 * @param {Number} space space size
 * @param {String} type flex-start/flex-end/...
 * @param {Number} num array size
 */

function parseSpaceBetween(space, type, num) {
  const marginSize = [];

  const fillFull = (size = 0) => {
    for (let i = marginSize.length; i < num + 1; i++) {
      marginSize[i] = size;
    }
  };

  if (space < 0) {
    if (type === 'space-between' || type === 'stretch') {
      type = 'flex-start';
    } else if (type === 'space-around' || type === 'space-evenly') {
      type = 'center';
    }
  }

  if (type === 'flex-end') {
    marginSize[0] = space;
    fillFull();
  } else if (type === 'center') {
    const itemSize = space / 2;
    marginSize[0] = itemSize;
    fillFull();
    marginSize[num] = itemSize;
  } else if (type === 'space-between') {
    marginSize[0] = 0;

    if (num === 1) {
      fillFull(space);
    } else {
      fillFull(space / (num - 1));
      marginSize[num] = 0;
    }
  } else if (type === 'space-between-reverse') {
    if (num === 1) {
      marginSize[0] = space;
      fillFull(0);
    } else {
      marginSize[0] = 0;
      fillFull(space / (num - 1));
      marginSize[num] = 0;
    }
  } else if (type === 'space-around') {
    const itemSize = space / num;
    marginSize[0] = itemSize / 2;
    fillFull(itemSize);
    marginSize[num] = itemSize / 2;
  } else if (type === 'space-evenly') {
    const itemSize = space / (num + 1);
    fillFull(itemSize);
  } else if (type === 'stretch') {
    const itemSize = space / num;
    marginSize[0] = 0;
    fillFull(itemSize);
  } else {
    // flex-start
    fillFull();
  }

  return marginSize;
}
function getProp(flexDirection) {
  if (flexDirection === 'column' || flexDirection === 'column-reverse') {
    return {
      mainLayoutSize: 'layoutHeight',
      crossLayoutSize: 'layoutWidth',
      mainSize: 'height',
      mainComputedSize: 'computedHeight',
      crossSize: 'width',
      crossComputedSize: 'computedWidth',
      mainPos: 'top',
      mainMaxSize: 'maxHeight',
      mainMinSize: 'minHeight',
      crossPos: 'left',
      crossMaxSize: 'maxWidth',
      mainMarginStart: 'marginTop',
      mainMarginEnd: 'marginBottom',
      crossMarginStart: 'marginLeft',
      crossMarginEnd: 'marginRight'
    };
  }

  return {
    mainLayoutSize: 'layoutWidth',
    crossLayoutSize: 'layoutHeight',
    mainSize: 'width',
    mainComputedSize: 'computedWidth',
    crossSize: 'height',
    crossComputedSize: 'computedHeight',
    mainPos: 'left',
    mainMaxSize: 'maxWidth',
    mainMinSize: 'minWidth',
    crossMaxSize: 'maxHeight',
    crossPos: 'top',
    mainMarginStart: 'marginLeft',
    mainMarginEnd: 'marginRight',
    crossMarginStart: 'marginTop',
    crossMarginEnd: 'marginBottom'
  };
}
function exchangeFlexProp(prop) {
  if (prop === 'flex-start') return 'flex-end';
  if (prop === 'flex-end') return 'flex-start';
  if (prop === 'space-between') return 'space-between-reverse';
  return prop;
}
function parseMarginAuto(value, autoValue = 0) {
  if (value === 'auto') return autoValue;
  return value || 0;
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flexLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);



class Compose {
  constructor(container) {
    this.container = container;
    const props = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getProp"])(container.flexDirection);
    Object.keys(props).forEach(prop => {
      this[prop] = props[prop];
    });
    container.children.forEach(item => {
      item.config.parse();
    });
    container.children = this.parseOrder(container.children);
    this.flexLines = this.parseFlexLines(container.children);
  }

  parseOrder(items) {
    return items.sort((a, b) => {
      const ar = a.order | 0;
      const br = b.order | 0;
      if (a.order && b.order) return ar > br ? 1 : -1;
      if (a.order) return ar > 0 ? 1 : -1;
      if (b.order) return br > 0 ? -1 : 1;
      return a.id > b.id ? 1 : -1;
    });
  }
  /**
   * parse flex lines by flexWrap
   * @param {Array} items flex items
   */


  parseFlexLines(items) {
    const wrap = this.container.flexWrap;
    const flexDirection = this.container.flexDirection;
    const containerPropValue = this.container[this.mainSize];
    let lines = [];

    if (wrap === 'nowrap' || !containerPropValue) {
      lines = [items];
    } else {
      let line = [];
      let propValue = 0;
      items.forEach(item => {
        const value = item[this.mainLayoutSize];

        if (propValue + value > containerPropValue && line.length) {
          lines.push(line);
          propValue = 0;
          line = [];
        }

        propValue += value;
        line.push(item);
      });

      if (line.length) {
        lines.push(line);
        line = [];
      }

      if (wrap === 'wrap-reverse') {
        lines = lines.reverse();
      }
    }

    if (flexDirection === 'row-reverse' || flexDirection === 'column-reverse') {
      lines = lines.map(line => {
        return line.reverse();
      });
    }

    lines = lines.map(line => {
      return new _flexLine__WEBPACK_IMPORTED_MODULE_0__["default"](line, this.container);
    });
    return lines;
  }
  /**
   * parse align-content on multiline flex lines
   */


  parseAlignContent() {
    let alignContent = this.container.alignContent;
    const crossAxisSize = this.container[this.crossSize];
    let space = 0;
    const lineLength = this.flexLines.length;

    if (crossAxisSize) {
      let linesCrossAxisSize = 0;
      this.flexLines.forEach(line => {
        linesCrossAxisSize += line.crossAxisSize;
      }); // margin between lines

      space = crossAxisSize - linesCrossAxisSize;
    }

    let linesMarginSize = [];

    if (lineLength === 1) {
      this.container.alignContent = 'stretch';
      linesMarginSize = [0, space];
    } else {
      if (this.container.flexWrap === 'wrap-reverse') {
        alignContent = Object(_util__WEBPACK_IMPORTED_MODULE_1__["exchangeFlexProp"])(alignContent);
      }

      linesMarginSize = Object(_util__WEBPACK_IMPORTED_MODULE_1__["parseSpaceBetween"])(space, alignContent, lineLength);
    }

    let crossPosition = 0;
    this.flexLines.forEach((line, index) => {
      crossPosition += linesMarginSize[index] || 0;
      line.crossPosition = crossPosition;
      line.crossSpace = linesMarginSize[index + 1] || 0;
      crossPosition += line.crossAxisSize;
    });
  }

  parseAlignSelf() {
    this.flexLines.forEach(line => {
      line.parseAlignSelf(line.crossAxisSize);
    });
  }

  computeContainerSize() {
    const line = this.flexLines[0];

    if (!this.container[this.crossSize]) {
      this.container[this.crossSize] = line.crossAxisSize;
    }

    if (!this.container[this.mainSize]) {
      this.container[this.mainSize] = line.mainAxisSize;
    }
  }

  parseMainAxis() {
    this.flexLines.forEach(line => {
      line.parseMainAxis();
    });
  }

  compose() {
    this.parseAlignContent();
    this.parseAlignSelf();
    this.parseMainAxis();
    this.computeContainerSize();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Compose);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);

const CROSS_AXIS_SIZE = Symbol('crossAxisSize');

class FlexLine {
  constructor(items, container) {
    this.items = items;
    this.container = container;
    this.flexDirection = container.flexDirection;
    this.crossPosition = 0;
    this.crossSpace = 0;
    const props = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getProp"])(this.flexDirection);
    Object.keys(props).forEach(prop => {
      this[prop] = props[prop];
    });
  }
  /**
   * get main axis size base on flex direction
   */


  get mainAxisSize() {
    let value = 0;
    this.items.forEach(item => {
      value += item[this.mainLayoutSize] || 0;
    });
    return value;
  }
  /**
   * get cross axis size based on flex direction
   */


  get crossAxisSize() {
    if (this[CROSS_AXIS_SIZE]) return this[CROSS_AXIS_SIZE];
    const values = this.items.map(item => {
      return item[this.crossLayoutSize] || 0;
    });
    const result = Math.max(...values);
    this[CROSS_AXIS_SIZE] = result;
    return result;
  }

  parseAutoCrossMargin(item, crossSize) {
    const startAuto = item[this.crossMarginStart] === 'auto';
    const endAuto = item[this.crossMarginEnd] === 'auto';

    if (startAuto || endAuto) {
      if (this.container.alignContent === 'stretch') {
        crossSize += this.crossSpace;
      }

      const layoutSize = item[this.crossLayoutSize];
      let size = 0;

      if (startAuto && endAuto) {
        size = (crossSize - layoutSize) / 2;
      } else if (startAuto) {
        size = crossSize - layoutSize;
      } else {
        size = item[this.crossMarginStart];
      }

      item[this.crossPos] = this.crossPosition + size;
      return true;
    }

    return false;
  }

  parseItemAlignSelf(item, crossSize) {
    // has auto value in margin on cross axis
    if (this.parseAutoCrossMargin(item, crossSize)) return;
    let alignSelf = item.alignSelf;

    if (alignSelf === 'auto') {
      alignSelf = item.parent.alignItems;
    }

    const flexWrap = this.container.flexWrap;

    if (flexWrap === 'wrap-reverse') {
      alignSelf = Object(_util__WEBPACK_IMPORTED_MODULE_0__["exchangeFlexProp"])(alignSelf);
    }

    const layoutSize = item[this.crossLayoutSize];
    const itemCrossSize = item[this.crossSize];
    let crossSpace = this.crossSpace;

    if (this.container.alignContent !== 'stretch') {
      crossSpace = 0;
    }

    let crossPosition = 0;

    switch (alignSelf) {
      case 'flex-end':
        crossPosition = crossSpace + crossSize - layoutSize;
        break;

      case 'center':
        crossPosition = (crossSpace + crossSize - layoutSize) / 2;
        break;

      case 'stretch':
        // stretch item cross size
        if (!itemCrossSize) {
          const maxSize = item[this.crossMaxSize] || 0;
          let caculateSize = this.crossAxisSize - item[this.crossLayoutSize] + item[this.crossComputedSize];

          if (this.container.alignContent === 'stretch') {
            caculateSize += this.crossSpace;
          }

          if (maxSize) {
            item[this.crossComputedSize] = Math.min(caculateSize, maxSize);
          } else {
            item[this.crossComputedSize] = caculateSize;
          }
        } else if (flexWrap === 'wrap-reverse') {
          crossPosition = crossSpace + crossSize - layoutSize;
        }

        break;

      case 'baseline':
        throw new Error('align-self:baseline is not support');

      default:
        // default is flex-start
        break;
    }

    const pos = this.crossPosition + crossPosition;
    item[this.crossPos] = pos + Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[this.crossMarginStart]);
  }

  parseAlignSelf(crossSize = 0) {
    this.items.forEach(item => {
      this.parseItemAlignSelf(item, crossSize);
    });
  }

  hasMarginAutoInMainAxis() {
    return this.items.some(item => {
      return item[this.mainMarginStart] === 'auto' || item[this.mainMarginEnd] === 'auto';
    });
  }

  hasFlexGrow() {
    return this.items.some(item => {
      return item.flexGrow;
    });
  }

  parseByFlexGrow(space) {
    let grow = 0;
    let max = 0;
    const items = [];
    this.items.forEach(item => {
      grow += item.flexGrow || 0;
      items.push({
        max: item[this.mainMaxSize],
        grow: item.flexGrow
      });
      if (item[this.mainMaxSize]) max++;
    });

    while (true) {
      const itemSpace = space / Math.max(grow, 1);

      if (!max) {
        items.forEach((item, index) => {
          if (item.grow) {
            const increSpace = item.grow * itemSpace;
            this.items[index][this.mainComputedSize] += increSpace;
            space -= increSpace;
          }
        });
        break;
      }

      let flag = false;
      items.forEach((item, index) => {
        if (item.max && item.grow) {
          const leaveSpace = item.max - this.items[index][this.mainComputedSize];

          if (itemSpace * item.grow > leaveSpace) {
            this.items[index][this.mainComputedSize] = item.max;
            space -= leaveSpace;
            grow -= item.grow;
            delete item.max;
            delete item.grow;
            flag = true;
          }
        }
      });
      if (!grow) break;

      if (!flag) {
        max = 0;
      }
    }

    return space;
  }

  parseByMarginAuto(space) {
    let marginAutoNum = 0;
    this.items.forEach(item => {
      if (item[this.mainMarginStart] === 'auto') {
        marginAutoNum++;
      }

      if (item[this.mainMarginEnd] === 'auto') {
        marginAutoNum++;
      }
    });
    const itemSpace = space / marginAutoNum;
    let pos = 0;
    this.items.forEach(item => {
      pos += Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[this.mainMarginStart], itemSpace);
      item[this.mainPos] = pos;
      pos += item[this.mainLayoutSize] - Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[this.mainMarginStart]);
      pos += Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[this.mainMarginEnd], itemSpace) - Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[this.mainMarginEnd]);
    });
  }

  parseJustifyContent() {
    let justifyContent = this.container.justifyContent;
    const flexDirection = this.container.flexDirection;

    if (flexDirection === 'row-reverse' || flexDirection === 'column-reverse') {
      justifyContent = Object(_util__WEBPACK_IMPORTED_MODULE_0__["exchangeFlexProp"])(justifyContent);
    }

    return justifyContent;
  }

  parseByJustifyContentPositive(space) {
    return this.parseByJustifyContentSpace(space);
  }

  parseByJustifyContentSpace(space) {
    const justifyContent = this.parseJustifyContent();
    const marginSizes = Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseSpaceBetween"])(space, justifyContent, this.items.length);
    let pos = 0;
    this.items.forEach((item, index) => {
      pos += marginSizes[index] || 0;
      item[this.mainPos] = pos + Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[this.mainMarginStart]);
      pos += item[this.mainLayoutSize];
    });
  }

  parseByJustifyContentNegative(space) {
    let shrink = 0;
    let min = 0;
    const items = [];
    this.items.forEach(item => {
      const shrinkItem = item.flexShrink * item[this.mainComputedSize];
      shrink += shrinkItem;
      items.push({
        min: item[this.mainMinSize],
        shrink: shrinkItem
      });
      if (item[this.mainMinSize]) min++;
    });

    while (true) {
      const itemSpace = (0 - space) / shrink;

      if (!min) {
        items.forEach((item, index) => {
          if (item.shrink) {
            const decreSpace = item.shrink * itemSpace;
            const size = this.items[index][this.mainComputedSize] - decreSpace;

            if (size > 0) {
              this.items[index][this.mainComputedSize] -= decreSpace;
              space += decreSpace;
            } else {
              this.items[index][this.mainComputedSize] = 1;
              space += decreSpace + size;
            }
          }
        });
        break;
      }

      let flag = false;
      items.forEach((item, index) => {
        if (item.min) {
          const leaveSpace = this.items[index][this.mainComputedSize] - item.min;

          if (itemSpace * item.shrink > leaveSpace) {
            this.items[index][this.mainComputedSize] = item.min;
            space += leaveSpace;
            shrink -= item.shrink;
            delete item.min;
            delete item.shrink;
            flag = true;
          }
        }
      });

      if (!flag) {
        min = 0;
      }
    }

    this.parseByJustifyContentSpace(space);
  }

  parseMainAxis() {
    const mainSize = this.container[this.mainSize]; // container size is not set

    if (!mainSize) {
      let pos = 0;
      this.items.forEach(item => {
        item[this.mainPos] = pos;
        pos += item[this.mainLayoutSize];
      });
      return;
    }

    let space = mainSize - this.mainAxisSize;

    if (space > 0) {
      if (this.hasFlexGrow()) {
        space = this.parseByFlexGrow(space);
      }

      if (this.hasMarginAutoInMainAxis()) {
        return this.parseByMarginAuto(space);
      }

      return this.parseByJustifyContentPositive(space);
    }

    return this.parseByJustifyContentNegative(space);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FlexLine);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "querySelector", function() { return _selector__WEBPACK_IMPORTED_MODULE_0__["querySelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() { return _selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"]; });

/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_1__["createNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNodeType", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_1__["isValidNodeType"]; });

/* harmony import */ var _core_basenode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _core_basesprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _core_sprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _core_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _core_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _core_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
/* harmony import */ var _core_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);









Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('node', _core_basenode__WEBPACK_IMPORTED_MODULE_2__["default"]);
Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('basesprite', _core_basesprite__WEBPACK_IMPORTED_MODULE_3__["default"]);
Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('sprite', _core_sprite__WEBPACK_IMPORTED_MODULE_4__["default"]);
Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('label', _core_label__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('path', _core_path__WEBPACK_IMPORTED_MODULE_6__["default"]);
Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('group', _core_group__WEBPACK_IMPORTED_MODULE_7__["default"], true);
Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('layer', _core_layer__WEBPACK_IMPORTED_MODULE_8__["default"], true);
Object.defineProperties(_core_basenode__WEBPACK_IMPORTED_MODULE_2__["default"].prototype, {
  attributes: {
    get() {
      if (typeof Proxy === 'function') {
        try {
          return new Proxy(this.__attr, {
            get(target, prop) {
              if (prop in target) return target[prop];
              return target.subject.attr(prop);
            },

            set(target, prop, value) {
              if (typeof prop !== 'string' || /^__/.test(prop)) target[prop] = value;else target.subject.attr(prop, value);
              return true;
            },

            deleteProperty(target, prop) {
              if (typeof prop !== 'string' || /^__/.test(prop)) delete target[prop];else target.subject.attr(prop, null);
              return true;
            }

          });
        } catch (ex) {
          return this.__attr;
        }
      }

      return this.__attr;
    }

  },
  style: {
    get() {
      if (typeof Proxy === 'function') {
        try {
          return new Proxy(this.__attr, {
            get(target, prop) {
              if (prop !== 'id' && prop !== 'name' && prop !== 'class') {
                return target[prop];
              }

              return null;
            },

            set(target, prop, value) {
              if (prop !== 'id' && prop !== 'name' && prop !== 'class') {
                target.subject.attr(prop, value);
              }

              return true;
            },

            deleteProperty(target, prop) {
              if (prop !== 'id' && prop !== 'name' && prop !== 'class') {
                target.subject.attr(prop, null);
                return true;
              }

              return false;
            }

          });
        } catch (ex) {
          return this.__attr;
        }
      }

      return this.__attr;
    }

  },
  parentNode: {
    get() {
      return this.parent;
    }

  },
  nextSibling: {
    get() {
      return this.getNodeNearBy(1);
    }

  },
  previousSibling: {
    get() {
      return this.getNodeNearBy(-1);
    }

  },
  nextElementSibling: {
    get() {
      return this.getNodeNearBy(1, true);
    }

  },
  previousElementSibling: {
    get() {
      return this.getNodeNearBy(-1, true);
    }

  }
});
Object.assign(_core_basenode__WEBPACK_IMPORTED_MODULE_2__["default"].prototype, {
  addEventListener(type, handler) {
    return this.on(type, handler);
  },

  removeEventListener(type, handler) {
    return this.off(type, handler);
  },

  getNodeNearBy(distance = 1, isElement = false) {
    if (!this.parent) return null;
    if (distance === 0) return this;
    const children = isElement ? this.parent.children : this.parent.childNodes;
    const idx = children.indexOf(this);
    return children[idx + distance];
  },

  getAttribute(prop) {
    /* istanbul ignore next */
    return this.attr(prop);
  },

  setAttribute(prop, val) {
    /* istanbul ignore next */
    return this.attr(prop, val);
  },

  removeAttribute(prop) {
    /* istanbul ignore next */
    return this.attr(prop, null);
  },

  contains(node) {
    while (node && this !== node) {
      node = node.parent;
    }

    return !!node;
  }

});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() { return querySelectorAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelector", function() { return querySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatched", function() { return isMatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);


const CSSselect = __webpack_require__(65);

CSSselect.pseudos.hover = next => {
  return !!next.attr('__internal_state_hover_');
};

CSSselect.pseudos.active = next => {
  return !!next.attr('__internal_state_active_');
};

function isTag(elem) {
  return elem.nodeType === 1 || typeof elem.nodeType === 'string';
}

function getChildren(elem) {
  if (elem.scene_) {
    return [elem.scene_];
  }

  if (elem.layer_) {
    return [elem.layer_];
  }

  return Array.from(elem.childNodes || []);
}

function getParent(elem) {
  if (elem.nodeType === 1) return elem.parentElement;

  if (typeof elem.nodeType === 'string') {
    return elem.parent || elem.canvas || elem.container;
  }
}

function removeSubsets(nodes) {
  let idx = nodes.length,
      node,
      ancestor,
      replace; // Check if each node (or one of its ancestors) is already contained in the
  // array.

  while (--idx > -1) {
    node = ancestor = nodes[idx]; // Temporarily remove the node under consideration

    nodes[idx] = null;
    replace = true;

    while (ancestor) {
      if (nodes.indexOf(ancestor) > -1) {
        replace = false;
        nodes.splice(idx, 1);
        break;
      }

      ancestor = getParent(ancestor);
    } // If the node has been found to be unique, re-insert it.


    if (replace) {
      nodes[idx] = node;
    }
  }

  return nodes;
}

const adapter = {
  isTag,

  existsOne(test, elems) {
    return elems.some(elem => {
      return isTag(elem) ? test(elem) || adapter.existsOne(test, getChildren(elem)) : false;
    });
  },

  getSiblings(elem) {
    const parent = getParent(elem);
    return parent && getChildren(parent);
  },

  getChildren,
  getParent,

  getAttributeValue(elem, name) {
    if (elem.nodeType === 1 && name === 'class' || name === 'id') {
      return elem[name];
    }

    if (this.hasAttrib(elem, name)) {
      let val = elem.attributes[name];

      if (Array.isArray(val)) {
        val = `[${val.join()}]`;
      }

      return String(val);
    }
  },

  hasAttrib(elem, name) {
    return elem.attributes[name] != null;
  },

  removeSubsets,

  getName(elem) {
    return elem.tagName ? elem.tagName.toLowerCase() : null;
  },

  findOne: function findOne(test, arr) {
    let elem = null;

    for (let i = 0, l = arr.length; i < l && !elem; i++) {
      if (test(arr[i])) {
        elem = arr[i];
      } else {
        const childs = getChildren(arr[i]);

        if (childs && childs.length > 0) {
          elem = findOne(test, childs);
        }
      }
    }

    return elem;
  },
  findAll: function findAll(test, elems) {
    let result = [];

    for (let i = 0, j = elems.length; i < j; i++) {
      if (!isTag(elems[i])) continue; // eslint-disable-line

      if (test(elems[i])) result.push(elems[i]);
      const childs = getChildren(elems[i]);
      if (childs) result = result.concat(findAll(test, childs));
    }

    return result;
  },
  getText: function getText(elem) {
    if (Array.isArray(elem)) return elem.map(getText).join('');
    if (isTag(elem)) return getText(getChildren(elem));
    if (elem.nodeType === 3) return elem.nodeValue;
    if (typeof elem.nodeType === 'string') return elem.text;
    return '';
  }
};

function resolveQuery(query) {
  if (typeof query !== 'string') return query;
  let matches = query.match(/\[(bgcolor|fillColor|strokeColor|color)\s*=\s*['"]?\w+['"]?\]/g);

  if (matches) {
    matches = matches.map(matched => {
      const kv = matched.slice(1, -1).split('=');
      const color = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])(kv[1].replace(/['"]/g, ''));
      return [matched, `[${kv[0]}="${color}"]`];
    });
    matches.forEach(([r, p]) => {
      query = query.replace(r, p);
    });
  }

  matches = query.match(/\[\w+\s*=\s*['"]\[.+?\]['"]\]/g);

  if (matches) {
    matches = matches.map(matched => {
      const kv = matched.slice(1, -1).split('=');
      const arr = kv[1].slice(2, -2).split(/,/g).map(k => k.trim());
      return [matched, `[${kv[0]}="[${arr}]"]`];
    });
    matches.forEach(([r, p]) => {
      query = query.replace(r, p);
    });
  }

  return query;
}

function querySelectorAll(query, elems) {
  return CSSselect.selectAll(resolveQuery(query), elems, {
    adapter
  });
}
function querySelector(query, elems) {
  return CSSselect.selectOne(resolveQuery(query), elems, {
    adapter
  });
}
function isMatched(elem, query) {
  return CSSselect.is(elem, resolveQuery(query), {
    adapter
  });
}
function compile(query) {
  return CSSselect.compile(resolveQuery(query), {
    adapter
  });
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = CSSselect;

var DomUtils = __webpack_require__(66);
var falseFunc = __webpack_require__(84).falseFunc;
var compileRaw = __webpack_require__(85);

function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        options = options || {};
        options.adapter = options.adapter || DomUtils;

        return func(selector, options, context);
    };
}

var compile = wrapCompile(compileRaw);
var compileUnsafe = wrapCompile(compileRaw.compileUnsafe);

function getSelectorFunc(searchFunc) {
    return function select(query, elems, options) {
        options = options || {};
        options.adapter = options.adapter || DomUtils;

        if (typeof query !== "function") {
            query = compileUnsafe(query, options, elems);
        }
        if (query.shouldTestNextSiblings) {
            elems = appendNextSiblings((options && options.context) || elems, options.adapter);
        }
        if (!Array.isArray(elems)) elems = options.adapter.getChildren(elems);
        else elems = options.adapter.removeSubsets(elems);
        return searchFunc(query, elems, options);
    };
}

function getNextSiblings(elem, adapter) {
    var siblings = adapter.getSiblings(elem);
    if (!Array.isArray(siblings)) return [];
    siblings = siblings.slice(0);
    while (siblings.shift() !== elem);
    return siblings;
}

function appendNextSiblings(elems, adapter) {
    // Order matters because jQuery seems to check the children before the siblings
    if (!Array.isArray(elems)) elems = [elems];
    var newElems = elems.slice(0);

    for (var i = 0, len = elems.length; i < len; i++) {
        var nextSiblings = getNextSiblings(newElems[i], adapter);
        newElems.push.apply(newElems, nextSiblings);
    }
    return newElems;
}

var selectAll = getSelectorFunc(function selectAll(query, elems, options) {
    return query === falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
});

var selectOne = getSelectorFunc(function selectOne(query, elems, options) {
    return query === falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
});

function is(elem, query, options) {
    options = options || {};
    options.adapter = options.adapter || DomUtils;
    return (typeof query === "function" ? query : compile(query, options))(elem);
}

/*
	the exported interface
*/
function CSSselect(query, elems, options) {
    return selectAll(query, elems, options);
}

CSSselect.compile = compile;
CSSselect.filters = compileRaw.Pseudos.filters;
CSSselect.pseudos = compileRaw.Pseudos.pseudos;

CSSselect.selectAll = selectAll;
CSSselect.selectOne = selectOne;

CSSselect.is = is;

//legacy methods (might be removed)
CSSselect.parse = compile;
CSSselect.iterate = selectAll;

//hooks
CSSselect._compileUnsafe = compileUnsafe;
CSSselect._compileToken = compileRaw.compileToken;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var DomUtils = module.exports;

[
	__webpack_require__(67),
	__webpack_require__(79),
	__webpack_require__(80),
	__webpack_require__(81),
	__webpack_require__(82),
	__webpack_require__(83)
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ElementType = __webpack_require__(68),
    getOuterHTML = __webpack_require__(69),
    isTag = ElementType.isTag;

module.exports = {
	getInnerHTML: getInnerHTML,
	getOuterHTML: getOuterHTML,
	getText: getText
};

function getInnerHTML(elem, opts){
	return elem.children ? elem.children.map(function(elem){
		return getOuterHTML(elem, opts);
	}).join("") : "";
}

function getText(elem){
	if(Array.isArray(elem)) return elem.map(getText).join("");
	if(isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
	if(elem.type === ElementType.CDATA) return getText(elem.children);
	if(elem.type === ElementType.Text) return elem.data;
	return "";
}


/***/ }),
/* 68 */
/***/ (function(module, exports) {

//Types of elements found in the DOM
module.exports = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>
	Doctype: "doctype",

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Module dependencies
*/
var ElementType = __webpack_require__(70);
var entities = __webpack_require__(71);

/*
  Boolean Attributes
*/
var booleanAttributes = {
  __proto__: null,
  allowfullscreen: true,
  async: true,
  autofocus: true,
  autoplay: true,
  checked: true,
  controls: true,
  default: true,
  defer: true,
  disabled: true,
  hidden: true,
  ismap: true,
  loop: true,
  multiple: true,
  muted: true,
  open: true,
  readonly: true,
  required: true,
  reversed: true,
  scoped: true,
  seamless: true,
  selected: true,
  typemustmatch: true
};

var unencodedElements = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true
};

/*
  Format attributes
*/
function formatAttrs(attributes, opts) {
  if (!attributes) return;

  var output = '',
      value;

  // Loop through the attributes
  for (var key in attributes) {
    value = attributes[key];
    if (output) {
      output += ' ';
    }

    if (!value && booleanAttributes[key]) {
      output += key;
    } else {
      output += key + '="' + (opts.decodeEntities ? entities.encodeXML(value) : value) + '"';
    }
  }

  return output;
}

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
var singleTag = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
};


var render = module.exports = function(dom, opts) {
  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
  opts = opts || {};

  var output = '';

  for(var i = 0; i < dom.length; i++){
    var elem = dom[i];

    if (elem.type === 'root')
      output += render(elem.children, opts);
    else if (ElementType.isTag(elem))
      output += renderTag(elem, opts);
    else if (elem.type === ElementType.Directive)
      output += renderDirective(elem);
    else if (elem.type === ElementType.Comment)
      output += renderComment(elem);
    else if (elem.type === ElementType.CDATA)
      output += renderCdata(elem);
    else
      output += renderText(elem, opts);
  }

  return output;
};

function renderTag(elem, opts) {
  // Handle SVG
  if (elem.name === "svg") opts = {decodeEntities: opts.decodeEntities, xmlMode: true};

  var tag = '<' + elem.name,
      attribs = formatAttrs(elem.attribs, opts);

  if (attribs) {
    tag += ' ' + attribs;
  }

  if (
    opts.xmlMode
    && (!elem.children || elem.children.length === 0)
  ) {
    tag += '/>';
  } else {
    tag += '>';
    if (elem.children) {
      tag += render(elem.children, opts);
    }

    if (!singleTag[elem.name] || opts.xmlMode) {
      tag += '</' + elem.name + '>';
    }
  }

  return tag;
}

function renderDirective(elem) {
  return '<' + elem.data + '>';
}

function renderText(elem, opts) {
  var data = elem.data || '';

  // if entities weren't decoded, no need to encode them back
  if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
    data = entities.encodeXML(data);
  }

  return data;
}

function renderCdata(elem) {
  return '<![CDATA[' + elem.children[0].data + ']]>';
}

function renderComment(elem) {
  return '<!--' + elem.data + '-->';
}


/***/ }),
/* 70 */
/***/ (function(module, exports) {

//Types of elements found in the DOM
module.exports = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var encode = __webpack_require__(72),
    decode = __webpack_require__(75);

exports.decode = function(data, level){
	return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
};

exports.decodeStrict = function(data, level){
	return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
};

exports.encode = function(data, level){
	return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
};

exports.encodeXML = encode.XML;

exports.encodeHTML4 =
exports.encodeHTML5 =
exports.encodeHTML  = encode.HTML;

exports.decodeXML =
exports.decodeXMLStrict = decode.XML;

exports.decodeHTML4 =
exports.decodeHTML5 =
exports.decodeHTML = decode.HTML;

exports.decodeHTML4Strict =
exports.decodeHTML5Strict =
exports.decodeHTMLStrict = decode.HTMLStrict;

exports.escape = encode.escape;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var inverseXML = getInverseObj(__webpack_require__(73)),
    xmlReplacer = getInverseReplacer(inverseXML);

exports.XML = getInverse(inverseXML, xmlReplacer);

var inverseHTML = getInverseObj(__webpack_require__(74)),
    htmlReplacer = getInverseReplacer(inverseHTML);

exports.HTML = getInverse(inverseHTML, htmlReplacer);

function getInverseObj(obj){
	return Object.keys(obj).sort().reduce(function(inverse, name){
		inverse[obj[name]] = "&" + name + ";";
		return inverse;
	}, {});
}

function getInverseReplacer(inverse){
	var single = [],
	    multiple = [];

	Object.keys(inverse).forEach(function(k){
		if(k.length === 1){
			single.push("\\" + k);
		} else {
			multiple.push(k);
		}
	});

	//TODO add ranges
	multiple.unshift("[" + single.join("") + "]");

	return new RegExp(multiple.join("|"), "g");
}

var re_nonASCII = /[^\0-\x7F]/g,
    re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

function singleCharReplacer(c){
	return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
}

function astralReplacer(c){
	// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	var high = c.charCodeAt(0);
	var low  = c.charCodeAt(1);
	var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
	return "&#x" + codePoint.toString(16).toUpperCase() + ";";
}

function getInverse(inverse, re){
	function func(name){
		return inverse[name];
	}

	return function(data){
		return data
				.replace(re, func)
				.replace(re_astralSymbols, astralReplacer)
				.replace(re_nonASCII, singleCharReplacer);
	};
}

var re_xmlChars = getInverseReplacer(inverseXML);

function escapeXML(data){
	return data
			.replace(re_xmlChars, singleCharReplacer)
			.replace(re_astralSymbols, astralReplacer)
			.replace(re_nonASCII, singleCharReplacer);
}

exports.escape = escapeXML;


/***/ }),
/* 73 */
/***/ (function(module) {

module.exports = {"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""};

/***/ }),
/* 74 */
/***/ (function(module) {

module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var entityMap = __webpack_require__(74),
    legacyMap = __webpack_require__(76),
    xmlMap    = __webpack_require__(73),
    decodeCodePoint = __webpack_require__(77);

var decodeXMLStrict  = getStrictDecoder(xmlMap),
    decodeHTMLStrict = getStrictDecoder(entityMap);

function getStrictDecoder(map){
	var keys = Object.keys(map).join("|"),
	    replace = getReplacer(map);

	keys += "|#[xX][\\da-fA-F]+|#\\d+";

	var re = new RegExp("&(?:" + keys + ");", "g");

	return function(str){
		return String(str).replace(re, replace);
	};
}

var decodeHTML = (function(){
	var legacy = Object.keys(legacyMap)
		.sort(sorter);

	var keys = Object.keys(entityMap)
		.sort(sorter);

	for(var i = 0, j = 0; i < keys.length; i++){
		if(legacy[j] === keys[i]){
			keys[i] += ";?";
			j++;
		} else {
			keys[i] += ";";
		}
	}

	var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
	    replace = getReplacer(entityMap);

	function replacer(str){
		if(str.substr(-1) !== ";") str += ";";
		return replace(str);
	}

	//TODO consider creating a merged map
	return function(str){
		return String(str).replace(re, replacer);
	};
}());

function sorter(a, b){
	return a < b ? 1 : -1;
}

function getReplacer(map){
	return function replace(str){
		if(str.charAt(1) === "#"){
			if(str.charAt(2) === "X" || str.charAt(2) === "x"){
				return decodeCodePoint(parseInt(str.substr(3), 16));
			}
			return decodeCodePoint(parseInt(str.substr(2), 10));
		}
		return map[str.slice(1, -1)];
	};
}

module.exports = {
	XML: decodeXMLStrict,
	HTML: decodeHTML,
	HTMLStrict: decodeHTMLStrict
};

/***/ }),
/* 76 */
/***/ (function(module) {

module.exports = {"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var decodeMap = __webpack_require__(78);

module.exports = decodeCodePoint;

// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint){

	if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
		return "\uFFFD";
	}

	if(codePoint in decodeMap){
		codePoint = decodeMap[codePoint];
	}

	var output = "";

	if(codePoint > 0xFFFF){
		codePoint -= 0x10000;
		output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
		codePoint = 0xDC00 | codePoint & 0x3FF;
	}

	output += String.fromCharCode(codePoint);
	return output;
}


/***/ }),
/* 78 */
/***/ (function(module) {

module.exports = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

var getChildren = exports.getChildren = function(elem){
	return elem.children;
};

var getParent = exports.getParent = function(elem){
	return elem.parent;
};

exports.getSiblings = function(elem){
	var parent = getParent(elem);
	return parent ? getChildren(parent) : [elem];
};

exports.getAttributeValue = function(elem, name){
	return elem.attribs && elem.attribs[name];
};

exports.hasAttrib = function(elem, name){
	return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
};

exports.getName = function(elem){
	return elem.name;
};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

exports.removeElement = function(elem){
	if(elem.prev) elem.prev.next = elem.next;
	if(elem.next) elem.next.prev = elem.prev;

	if(elem.parent){
		var childs = elem.parent.children;
		childs.splice(childs.lastIndexOf(elem), 1);
	}
};

exports.replaceElement = function(elem, replacement){
	var prev = replacement.prev = elem.prev;
	if(prev){
		prev.next = replacement;
	}

	var next = replacement.next = elem.next;
	if(next){
		next.prev = replacement;
	}

	var parent = replacement.parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs[childs.lastIndexOf(elem)] = replacement;
	}
};

exports.appendChild = function(elem, child){
	child.parent = elem;

	if(elem.children.push(child) !== 1){
		var sibling = elem.children[elem.children.length - 2];
		sibling.next = child;
		child.prev = sibling;
		child.next = null;
	}
};

exports.append = function(elem, next){
	var parent = elem.parent,
		currNext = elem.next;

	next.next = currNext;
	next.prev = elem;
	elem.next = next;
	next.parent = parent;

	if(currNext){
		currNext.prev = next;
		if(parent){
			var childs = parent.children;
			childs.splice(childs.lastIndexOf(currNext), 0, next);
		}
	} else if(parent){
		parent.children.push(next);
	}
};

exports.prepend = function(elem, prev){
	var parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs.splice(childs.lastIndexOf(elem), 0, prev);
	}

	if(elem.prev){
		elem.prev.next = prev;
	}
	
	prev.parent = parent;
	prev.prev = elem.prev;
	prev.next = elem;
	elem.prev = prev;
};




/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isTag = __webpack_require__(68).isTag;

module.exports = {
	filter: filter,
	find: find,
	findOneChild: findOneChild,
	findOne: findOne,
	existsOne: existsOne,
	findAll: findAll
};

function filter(test, element, recurse, limit){
	if(!Array.isArray(element)) element = [element];

	if(typeof limit !== "number" || !isFinite(limit)){
		limit = Infinity;
	}
	return find(test, element, recurse !== false, limit);
}

function find(test, elems, recurse, limit){
	var result = [], childs;

	for(var i = 0, j = elems.length; i < j; i++){
		if(test(elems[i])){
			result.push(elems[i]);
			if(--limit <= 0) break;
		}

		childs = elems[i].children;
		if(recurse && childs && childs.length > 0){
			childs = find(test, childs, recurse, limit);
			result = result.concat(childs);
			limit -= childs.length;
			if(limit <= 0) break;
		}
	}

	return result;
}

function findOneChild(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(test(elems[i])) return elems[i];
	}

	return null;
}

function findOne(test, elems){
	var elem = null;

	for(var i = 0, l = elems.length; i < l && !elem; i++){
		if(!isTag(elems[i])){
			continue;
		} else if(test(elems[i])){
			elem = elems[i];
		} else if(elems[i].children.length > 0){
			elem = findOne(test, elems[i].children);
		}
	}

	return elem;
}

function existsOne(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(
			isTag(elems[i]) && (
				test(elems[i]) || (
					elems[i].children.length > 0 &&
					existsOne(test, elems[i].children)
				)
			)
		){
			return true;
		}
	}

	return false;
}

function findAll(test, rootElems){
	var result = [];
	var stack = rootElems.slice();
	while(stack.length){
		var elem = stack.shift();
		if(!isTag(elem)) continue;
		if (elem.children && elem.children.length > 0) {
			stack.unshift.apply(stack, elem.children);
		}
		if(test(elem)) result.push(elem);
	}
	return result;
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var ElementType = __webpack_require__(68);
var isTag = exports.isTag = ElementType.isTag;

exports.testElement = function(options, element){
	for(var key in options){
		if(!options.hasOwnProperty(key));
		else if(key === "tag_name"){
			if(!isTag(element) || !options.tag_name(element.name)){
				return false;
			}
		} else if(key === "tag_type"){
			if(!options.tag_type(element.type)) return false;
		} else if(key === "tag_contains"){
			if(isTag(element) || !options.tag_contains(element.data)){
				return false;
			}
		} else if(!element.attribs || !options[key](element.attribs[key])){
			return false;
		}
	}
	return true;
};

var Checks = {
	tag_name: function(name){
		if(typeof name === "function"){
			return function(elem){ return isTag(elem) && name(elem.name); };
		} else if(name === "*"){
			return isTag;
		} else {
			return function(elem){ return isTag(elem) && elem.name === name; };
		}
	},
	tag_type: function(type){
		if(typeof type === "function"){
			return function(elem){ return type(elem.type); };
		} else {
			return function(elem){ return elem.type === type; };
		}
	},
	tag_contains: function(data){
		if(typeof data === "function"){
			return function(elem){ return !isTag(elem) && data(elem.data); };
		} else {
			return function(elem){ return !isTag(elem) && elem.data === data; };
		}
	}
};

function getAttribCheck(attrib, value){
	if(typeof value === "function"){
		return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
	} else {
		return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
	}
}

function combineFuncs(a, b){
	return function(elem){
		return a(elem) || b(elem);
	};
}

exports.getElements = function(options, element, recurse, limit){
	var funcs = Object.keys(options).map(function(key){
		var value = options[key];
		return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
	});

	return funcs.length === 0 ? [] : this.filter(
		funcs.reduce(combineFuncs),
		element, recurse, limit
	);
};

exports.getElementById = function(id, element, recurse){
	if(!Array.isArray(element)) element = [element];
	return this.findOne(getAttribCheck("id", id), element, recurse !== false);
};

exports.getElementsByTagName = function(name, element, recurse, limit){
	return this.filter(Checks.tag_name(name), element, recurse, limit);
};

exports.getElementsByTagType = function(type, element, recurse, limit){
	return this.filter(Checks.tag_type(type), element, recurse, limit);
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removeSubsets
// Given an array of nodes, remove any member that is contained by another.
exports.removeSubsets = function(nodes) {
	var idx = nodes.length, node, ancestor, replace;

	// Check if each node (or one of its ancestors) is already contained in the
	// array.
	while (--idx > -1) {
		node = ancestor = nodes[idx];

		// Temporarily remove the node under consideration
		nodes[idx] = null;
		replace = true;

		while (ancestor) {
			if (nodes.indexOf(ancestor) > -1) {
				replace = false;
				nodes.splice(idx, 1);
				break;
			}
			ancestor = ancestor.parent;
		}

		// If the node has been found to be unique, re-insert it.
		if (replace) {
			nodes[idx] = node;
		}
	}

	return nodes;
};

// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
var POSITION = {
	DISCONNECTED: 1,
	PRECEDING: 2,
	FOLLOWING: 4,
	CONTAINS: 8,
	CONTAINED_BY: 16
};

// Compare the position of one node against another node in any other document.
// The return value is a bitmask with the following values:
//
// document order:
// > There is an ordering, document order, defined on all the nodes in the
// > document corresponding to the order in which the first character of the
// > XML representation of each node occurs in the XML representation of the
// > document after expansion of general entities. Thus, the document element
// > node will be the first node. Element nodes occur before their children.
// > Thus, document order orders element nodes in order of the occurrence of
// > their start-tag in the XML (after expansion of entities). The attribute
// > nodes of an element occur after the element and before its children. The
// > relative order of attribute nodes is implementation-dependent./
// Source:
// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
//
// @argument {Node} nodaA The first node to use in the comparison
// @argument {Node} nodeB The second node to use in the comparison
//
// @return {Number} A bitmask describing the input nodes' relative position.
//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
//         a description of these values.
var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
	var aParents = [];
	var bParents = [];
	var current, sharedParent, siblings, aSibling, bSibling, idx;

	if (nodeA === nodeB) {
		return 0;
	}

	current = nodeA;
	while (current) {
		aParents.unshift(current);
		current = current.parent;
	}
	current = nodeB;
	while (current) {
		bParents.unshift(current);
		current = current.parent;
	}

	idx = 0;
	while (aParents[idx] === bParents[idx]) {
		idx++;
	}

	if (idx === 0) {
		return POSITION.DISCONNECTED;
	}

	sharedParent = aParents[idx - 1];
	siblings = sharedParent.children;
	aSibling = aParents[idx];
	bSibling = bParents[idx];

	if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
		if (sharedParent === nodeB) {
			return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
		}
		return POSITION.FOLLOWING;
	} else {
		if (sharedParent === nodeA) {
			return POSITION.PRECEDING | POSITION.CONTAINS;
		}
		return POSITION.PRECEDING;
	}
};

// Sort an array of nodes based on their relative position in the document and
// remove any duplicate nodes. If the array contains nodes that do not belong
// to the same document, sort order is unspecified.
//
// @argument {Array} nodes Array of DOM nodes
//
// @returns {Array} collection of unique nodes, sorted in document order
exports.uniqueSort = function(nodes) {
	var idx = nodes.length, node, position;

	nodes = nodes.slice();

	while (--idx > -1) {
		node = nodes[idx];
		position = nodes.indexOf(node);
		if (position > -1 && position < idx) {
			nodes.splice(idx, 1);
		}
	}
	nodes.sort(function(a, b) {
		var relative = comparePos(a, b);
		if (relative & POSITION.PRECEDING) {
			return -1;
		} else if (relative & POSITION.FOLLOWING) {
			return 1;
		}
		return 0;
	});

	return nodes;
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {
	trueFunc: function trueFunc(){
		return true;
	},
	falseFunc: function falseFunc(){
		return false;
	}
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/*
	compiles a selector to an executable function
*/

module.exports = compile;

var parse = __webpack_require__(86);
var BaseFuncs = __webpack_require__(84);
var sortRules = __webpack_require__(87);
var procedure = __webpack_require__(88);
var Rules = __webpack_require__(89);
var Pseudos = __webpack_require__(91);
var trueFunc = BaseFuncs.trueFunc;
var falseFunc = BaseFuncs.falseFunc;

var filters = Pseudos.filters;

function compile(selector, options, context) {
    var next = compileUnsafe(selector, options, context);
    return wrap(next, options);
}

function wrap(next, options) {
    var adapter = options.adapter;

    return function base(elem) {
        return adapter.isTag(elem) && next(elem);
    };
}

function compileUnsafe(selector, options, context) {
    var token = parse(selector, options);
    return compileToken(token, options, context);
}

function includesScopePseudo(t) {
    return (
        t.type === "pseudo" &&
        (t.name === "scope" ||
            (Array.isArray(t.data) &&
                t.data.some(function(data) {
                    return data.some(includesScopePseudo);
                })))
    );
}

var DESCENDANT_TOKEN = { type: "descendant" };
var FLEXIBLE_DESCENDANT_TOKEN = { type: "_flexibleDescendant" };
var SCOPE_TOKEN = { type: "pseudo", name: "scope" };
var PLACEHOLDER_ELEMENT = {};

//CSS 4 Spec (Draft): 3.3.1. Absolutizing a Scope-relative Selector
//http://www.w3.org/TR/selectors4/#absolutizing
function absolutize(token, options, context) {
    var adapter = options.adapter;

    //TODO better check if context is document
    var hasContext =
        !!context &&
        !!context.length &&
        context.every(function(e) {
            return e === PLACEHOLDER_ELEMENT || !!adapter.getParent(e);
        });

    token.forEach(function(t) {
        if (t.length > 0 && isTraversal(t[0]) && t[0].type !== "descendant") {
            //don't return in else branch
        } else if (hasContext && !includesScopePseudo(t)) {
            t.unshift(DESCENDANT_TOKEN);
        } else {
            return;
        }

        t.unshift(SCOPE_TOKEN);
    });
}

function compileToken(token, options, context) {
    token = token.filter(function(t) {
        return t.length > 0;
    });

    token.forEach(sortRules);

    var isArrayContext = Array.isArray(context);

    context = (options && options.context) || context;

    if (context && !isArrayContext) context = [context];

    absolutize(token, options, context);

    var shouldTestNextSiblings = false;

    var query = token
        .map(function(rules) {
            if (rules[0] && rules[1] && rules[0].name === "scope") {
                var ruleType = rules[1].type;
                if (isArrayContext && ruleType === "descendant") {
                    rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
                } else if (ruleType === "adjacent" || ruleType === "sibling") {
                    shouldTestNextSiblings = true;
                }
            }
            return compileRules(rules, options, context);
        })
        .reduce(reduceRules, falseFunc);

    query.shouldTestNextSiblings = shouldTestNextSiblings;

    return query;
}

function isTraversal(t) {
    return procedure[t.type] < 0;
}

function compileRules(rules, options, context) {
    return rules.reduce(function(func, rule) {
        if (func === falseFunc) return func;

        if (!(rule.type in Rules)) {
            throw new Error("Rule type " + rule.type + " is not supported by css-select");
        }

        return Rules[rule.type](func, rule, options, context);
    }, (options && options.rootFunc) || trueFunc);
}

function reduceRules(a, b) {
    if (b === falseFunc || a === trueFunc) {
        return a;
    }
    if (a === falseFunc || b === trueFunc) {
        return b;
    }

    return function combine(elem) {
        return a(elem) || b(elem);
    };
}

function containsTraversal(t) {
    return t.some(isTraversal);
}

//:not, :has and :matches have to compile selectors
//doing this in lib/pseudos.js would lead to circular dependencies,
//so we add them here
filters.not = function(next, token, options, context) {
    var opts = {
        xmlMode: !!(options && options.xmlMode),
        strict: !!(options && options.strict),
        adapter: options.adapter
    };

    if (opts.strict) {
        if (token.length > 1 || token.some(containsTraversal)) {
            throw new Error("complex selectors in :not aren't allowed in strict mode");
        }
    }

    var func = compileToken(token, opts, context);

    if (func === falseFunc) return next;
    if (func === trueFunc) return falseFunc;

    return function not(elem) {
        return !func(elem) && next(elem);
    };
};

filters.has = function(next, token, options) {
    var adapter = options.adapter;
    var opts = {
        xmlMode: !!(options && options.xmlMode),
        strict: !!(options && options.strict),
        adapter: adapter
    };

    //FIXME: Uses an array as a pointer to the current element (side effects)
    var context = token.some(containsTraversal) ? [PLACEHOLDER_ELEMENT] : null;

    var func = compileToken(token, opts, context);

    if (func === falseFunc) return falseFunc;
    if (func === trueFunc) {
        return function hasChild(elem) {
            return adapter.getChildren(elem).some(adapter.isTag) && next(elem);
        };
    }

    func = wrap(func, options);

    if (context) {
        return function has(elem) {
            return next(elem) && ((context[0] = elem), adapter.existsOne(func, adapter.getChildren(elem)));
        };
    }

    return function has(elem) {
        return next(elem) && adapter.existsOne(func, adapter.getChildren(elem));
    };
};

filters.matches = function(next, token, options, context) {
    var opts = {
        xmlMode: !!(options && options.xmlMode),
        strict: !!(options && options.strict),
        rootFunc: next,
        adapter: options.adapter
    };

    return compileToken(token, opts, context);
};

compile.compileToken = compileToken;
compile.compileUnsafe = compileUnsafe;
compile.Pseudos = Pseudos;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse;

var re_name = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/,
    re_escape = /\\([\da-f]{1,6}\s?|(\s)|.)/ig,
    //modified version of https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L87
    re_attr = /^\s*((?:\\.|[\w\u00b0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF\-])*)|)|)\s*(i)?\]/;

var actionTypes = {
	__proto__: null,
	"undefined": "exists",
	"":  "equals",
	"~": "element",
	"^": "start",
	"$": "end",
	"*": "any",
	"!": "not",
	"|": "hyphen"
};

var simpleSelectors = {
	__proto__: null,
	">": "child",
	"<": "parent",
	"~": "sibling",
	"+": "adjacent"
};

var attribSelectors = {
	__proto__: null,
	"#": ["id", "equals"],
	".": ["class", "element"]
};

//pseudos, whose data-property is parsed as well
var unpackPseudos = {
	__proto__: null,
	"has": true,
	"not": true,
	"matches": true
};

var stripQuotesFromPseudos = {
	__proto__: null,
	"contains": true,
	"icontains": true
};

var quotes = {
	__proto__: null,
	"\"": true,
	"'": true
};

//unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L139
function funescape( _, escaped, escapedWhitespace ) {
	var high = "0x" + escaped - 0x10000;
	// NaN means non-codepoint
	// Support: Firefox
	// Workaround erroneous numeric interpretation of +"0x"
	return high !== high || escapedWhitespace ?
		escaped :
		// BMP codepoint
		high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
}

function unescapeCSS(str){
	return str.replace(re_escape, funescape);
}

function isWhitespace(c){
	return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function parse(selector, options){
	var subselects = [];

	selector = parseSelector(subselects, selector + "", options);

	if(selector !== ""){
		throw new SyntaxError("Unmatched selector: " + selector);
	}

	return subselects;
}

function parseSelector(subselects, selector, options){
	var tokens = [],
		sawWS = false,
		data, firstChar, name, quot;

	function getName(){
		var sub = selector.match(re_name)[0];
		selector = selector.substr(sub.length);
		return unescapeCSS(sub);
	}

	function stripWhitespace(start){
		while(isWhitespace(selector.charAt(start))) start++;
		selector = selector.substr(start);
	}

	function isEscaped(pos) {
		var slashCount = 0;

		while (selector.charAt(--pos) === "\\") slashCount++;
		return (slashCount & 1) === 1;
	}

	stripWhitespace(0);

	while(selector !== ""){
		firstChar = selector.charAt(0);

		if(isWhitespace(firstChar)){
			sawWS = true;
			stripWhitespace(1);
		} else if(firstChar in simpleSelectors){
			tokens.push({type: simpleSelectors[firstChar]});
			sawWS = false;

			stripWhitespace(1);
		} else if(firstChar === ","){
			if(tokens.length === 0){
				throw new SyntaxError("empty sub-selector");
			}
			subselects.push(tokens);
			tokens = [];
			sawWS = false;
			stripWhitespace(1);
		} else {
			if(sawWS){
				if(tokens.length > 0){
					tokens.push({type: "descendant"});
				}
				sawWS = false;
			}

			if(firstChar === "*"){
				selector = selector.substr(1);
				tokens.push({type: "universal"});
			} else if(firstChar in attribSelectors){
				selector = selector.substr(1);
				tokens.push({
					type: "attribute",
					name: attribSelectors[firstChar][0],
					action: attribSelectors[firstChar][1],
					value: getName(),
					ignoreCase: false
				});
			} else if(firstChar === "["){
				selector = selector.substr(1);
				data = selector.match(re_attr);
				if(!data){
					throw new SyntaxError("Malformed attribute selector: " + selector);
				}
				selector = selector.substr(data[0].length);
				name = unescapeCSS(data[1]);

				if(
					!options || (
						"lowerCaseAttributeNames" in options ?
							options.lowerCaseAttributeNames :
							!options.xmlMode
					)
				){
					name = name.toLowerCase();
				}

				tokens.push({
					type: "attribute",
					name: name,
					action: actionTypes[data[2]],
					value: unescapeCSS(data[4] || data[5] || ""),
					ignoreCase: !!data[6]
				});

			} else if(firstChar === ":"){
				if(selector.charAt(1) === ":"){
					selector = selector.substr(2);
					tokens.push({type: "pseudo-element", name: getName().toLowerCase()});
					continue;
				}

				selector = selector.substr(1);

				name = getName().toLowerCase();
				data = null;

				if(selector.charAt(0) === "("){
					if(name in unpackPseudos){
						quot = selector.charAt(1);
						var quoted = quot in quotes;

						selector = selector.substr(quoted + 1);

						data = [];
						selector = parseSelector(data, selector, options);

						if(quoted){
							if(selector.charAt(0) !== quot){
								throw new SyntaxError("unmatched quotes in :" + name);
							} else {
								selector = selector.substr(1);
							}
						}

						if(selector.charAt(0) !== ")"){
							throw new SyntaxError("missing closing parenthesis in :" + name + " " + selector);
						}

						selector = selector.substr(1);
					} else {
						var pos = 1, counter = 1;

						for(; counter > 0 && pos < selector.length; pos++){
							if(selector.charAt(pos) === "(" && !isEscaped(pos)) counter++;
							else if(selector.charAt(pos) === ")" && !isEscaped(pos)) counter--;
						}

						if(counter){
							throw new SyntaxError("parenthesis not matched");
						}

						data = selector.substr(1, pos - 2);
						selector = selector.substr(pos);

						if(name in stripQuotesFromPseudos){
							quot = data.charAt(0);

							if(quot === data.slice(-1) && quot in quotes){
								data = data.slice(1, -1);
							}

							data = unescapeCSS(data);
						}
					}
				}

				tokens.push({type: "pseudo", name: name, data: data});
			} else if(re_name.test(selector)){
				name = getName();

				if(!options || ("lowerCaseTags" in options ? options.lowerCaseTags : !options.xmlMode)){
					name = name.toLowerCase();
				}

				tokens.push({type: "tag", name: name});
			} else {
				if(tokens.length && tokens[tokens.length - 1].type === "descendant"){
					tokens.pop();
				}
				addToken(subselects, tokens);
				return selector;
			}
		}
	}

	addToken(subselects, tokens);

	return selector;
}

function addToken(subselects, tokens){
	if(subselects.length > 0 && tokens.length === 0){
		throw new SyntaxError("empty sub-selector");
	}

	subselects.push(tokens);
}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = sortByProcedure;

/*
	sort the parts of the passed selector,
	as there is potential for optimization
	(some types of selectors are faster than others)
*/

var procedure = __webpack_require__(88);

var attributes = {
    __proto__: null,
    exists: 10,
    equals: 8,
    not: 7,
    start: 6,
    end: 6,
    any: 5,
    hyphen: 4,
    element: 4
};

function sortByProcedure(arr) {
    var procs = arr.map(getProcedure);
    for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];

        if (procNew < 0) continue;

        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}

function getProcedure(token) {
    var proc = procedure[token.type];

    if (proc === procedure.attribute) {
        proc = attributes[token.action];

        if (proc === attributes.equals && token.name === "id") {
            //prefer ID selectors (eg. #ID)
            proc = 9;
        }

        if (token.ignoreCase) {
            //ignoreCase adds some overhead, prefer "normal" token
            //this is a binary operation, to ensure it's still an int
            proc >>= 1;
        }
    } else if (proc === procedure.pseudo) {
        if (!token.data) {
            proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
            proc = 0; //expensive in any case
        } else if (token.name === "matches" || token.name === "not") {
            proc = 0;
            for (var i = 0; i < token.data.length; i++) {
                //TODO better handling of complex selectors
                if (token.data[i].length !== 1) continue;
                var cur = getProcedure(token.data[i][0]);
                //avoid executing :has or :contains
                if (cur === 0) {
                    proc = 0;
                    break;
                }
                if (cur > proc) proc = cur;
            }
            if (token.data.length > 1 && proc > 0) proc -= 1;
        } else {
            proc = 1;
        }
    }
    return proc;
}


/***/ }),
/* 88 */
/***/ (function(module) {

module.exports = {"universal":50,"tag":30,"attribute":1,"pseudo":0,"descendant":-1,"child":-1,"parent":-1,"sibling":-1,"adjacent":-1};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var attributes = __webpack_require__(90);
var Pseudos = __webpack_require__(91);

/*
	all available rules
*/
module.exports = {
    __proto__: null,

    attribute: attributes.compile,
    pseudo: Pseudos.compile,

    //tags
    tag: function(next, data, options) {
        var name = data.name;
        var adapter = options.adapter;

        return function tag(elem) {
            return adapter.getName(elem) === name && next(elem);
        };
    },

    //traversal
    descendant: function(next, data, options) {
        // eslint-disable-next-line no-undef
        var isFalseCache = typeof WeakSet !== "undefined" ? new WeakSet() : null;
        var adapter = options.adapter;

        return function descendant(elem) {
            var found = false;

            while (!found && (elem = adapter.getParent(elem))) {
                if (!isFalseCache || !isFalseCache.has(elem)) {
                    found = next(elem);
                    if (!found && isFalseCache) {
                        isFalseCache.add(elem);
                    }
                }
            }

            return found;
        };
    },
    _flexibleDescendant: function(next, data, options) {
        var adapter = options.adapter;

        // Include element itself, only used while querying an array
        return function descendant(elem) {
            var found = next(elem);

            while (!found && (elem = adapter.getParent(elem))) {
                found = next(elem);
            }

            return found;
        };
    },
    parent: function(next, data, options) {
        if (options && options.strict) {
            throw new Error("Parent selector isn't part of CSS3");
        }

        var adapter = options.adapter;

        return function parent(elem) {
            return adapter.getChildren(elem).some(test);
        };

        function test(elem) {
            return adapter.isTag(elem) && next(elem);
        }
    },
    child: function(next, data, options) {
        var adapter = options.adapter;

        return function child(elem) {
            var parent = adapter.getParent(elem);
            return !!parent && next(parent);
        };
    },
    sibling: function(next, data, options) {
        var adapter = options.adapter;

        return function sibling(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var i = 0; i < siblings.length; i++) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    if (next(siblings[i])) return true;
                }
            }

            return false;
        };
    },
    adjacent: function(next, data, options) {
        var adapter = options.adapter;

        return function adjacent(elem) {
            var siblings = adapter.getSiblings(elem),
                lastElement;

            for (var i = 0; i < siblings.length; i++) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    lastElement = siblings[i];
                }
            }

            return !!lastElement && next(lastElement);
        };
    },
    universal: function(next) {
        return next;
    }
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var falseFunc = __webpack_require__(84).falseFunc;

//https://github.com/slevithan/XRegExp/blob/master/src/xregexp.js#L469
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;

/*
	attribute selectors
*/
var attributeRules = {
    __proto__: null,
    equals: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var adapter = options.adapter;

        if (data.ignoreCase) {
            value = value.toLowerCase();

            return function equalsIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.toLowerCase() === value && next(elem);
            };
        }

        return function equals(elem) {
            return adapter.getAttributeValue(elem, name) === value && next(elem);
        };
    },
    hyphen: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var len = value.length;
        var adapter = options.adapter;

        if (data.ignoreCase) {
            value = value.toLowerCase();

            return function hyphenIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (
                    attr != null &&
                    (attr.length === len || attr.charAt(len) === "-") &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem)
                );
            };
        }

        return function hyphen(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (
                attr != null &&
                attr.substr(0, len) === value &&
                (attr.length === len || attr.charAt(len) === "-") &&
                next(elem)
            );
        };
    },
    element: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var adapter = options.adapter;

        if (/\s/.test(value)) {
            return falseFunc;
        }

        value = value.replace(reChars, "\\$&");

        var pattern = "(?:^|\\s)" + value + "(?:$|\\s)",
            flags = data.ignoreCase ? "i" : "",
            regex = new RegExp(pattern, flags);

        return function element(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && regex.test(attr) && next(elem);
        };
    },
    exists: function(next, data, options) {
        var name = data.name;
        var adapter = options.adapter;

        return function exists(elem) {
            return adapter.hasAttrib(elem, name) && next(elem);
        };
    },
    start: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var len = value.length;
        var adapter = options.adapter;

        if (len === 0) {
            return falseFunc;
        }

        if (data.ignoreCase) {
            value = value.toLowerCase();

            return function startIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }

        return function start(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.substr(0, len) === value && next(elem);
        };
    },
    end: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        var adapter = options.adapter;

        if (len === 0) {
            return falseFunc;
        }

        if (data.ignoreCase) {
            value = value.toLowerCase();

            return function endIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.substr(len).toLowerCase() === value && next(elem);
            };
        }

        return function end(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.substr(len) === value && next(elem);
        };
    },
    any: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var adapter = options.adapter;

        if (value === "") {
            return falseFunc;
        }

        if (data.ignoreCase) {
            var regex = new RegExp(value.replace(reChars, "\\$&"), "i");

            return function anyIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && regex.test(attr) && next(elem);
            };
        }

        return function any(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.indexOf(value) >= 0 && next(elem);
        };
    },
    not: function(next, data, options) {
        var name = data.name;
        var value = data.value;
        var adapter = options.adapter;

        if (value === "") {
            return function notEmpty(elem) {
                return !!adapter.getAttributeValue(elem, name) && next(elem);
            };
        } else if (data.ignoreCase) {
            value = value.toLowerCase();

            return function notIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.toLowerCase() !== value && next(elem);
            };
        }

        return function not(elem) {
            return adapter.getAttributeValue(elem, name) !== value && next(elem);
        };
    }
};

module.exports = {
    compile: function(next, data, options) {
        if (options && options.strict && (data.ignoreCase || data.action === "not")) {
            throw new Error("Unsupported attribute selector");
        }
        return attributeRules[data.action](next, data, options);
    },
    rules: attributeRules
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

/*
	pseudo selectors

	---

	they are available in two forms:
	* filters called when the selector
	  is compiled and return a function
	  that needs to return next()
	* pseudos get called on execution
	  they need to return a boolean
*/

var getNCheck = __webpack_require__(92);
var BaseFuncs = __webpack_require__(84);
var attributes = __webpack_require__(90);
var trueFunc = BaseFuncs.trueFunc;
var falseFunc = BaseFuncs.falseFunc;

var checkAttrib = attributes.rules.equals;

function getAttribFunc(name, value) {
    var data = { name: name, value: value };
    return function attribFunc(next, rule, options) {
        return checkAttrib(next, data, options);
    };
}

function getChildFunc(next, adapter) {
    return function(elem) {
        return !!adapter.getParent(elem) && next(elem);
    };
}

var filters = {
    contains: function(next, text, options) {
        var adapter = options.adapter;

        return function contains(elem) {
            return next(elem) && adapter.getText(elem).indexOf(text) >= 0;
        };
    },
    icontains: function(next, text, options) {
        var itext = text.toLowerCase();
        var adapter = options.adapter;

        return function icontains(elem) {
            return (
                next(elem) &&
                adapter
                    .getText(elem)
                    .toLowerCase()
                    .indexOf(itext) >= 0
            );
        };
    },

    //location specific methods
    "nth-child": function(next, rule, options) {
        var func = getNCheck(rule);
        var adapter = options.adapter;

        if (func === falseFunc) return func;
        if (func === trueFunc) return getChildFunc(next, adapter);

        return function nthChild(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var i = 0, pos = 0; i < siblings.length; i++) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    else pos++;
                }
            }

            return func(pos) && next(elem);
        };
    },
    "nth-last-child": function(next, rule, options) {
        var func = getNCheck(rule);
        var adapter = options.adapter;

        if (func === falseFunc) return func;
        if (func === trueFunc) return getChildFunc(next, adapter);

        return function nthLastChild(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var pos = 0, i = siblings.length - 1; i >= 0; i--) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    else pos++;
                }
            }

            return func(pos) && next(elem);
        };
    },
    "nth-of-type": function(next, rule, options) {
        var func = getNCheck(rule);
        var adapter = options.adapter;

        if (func === falseFunc) return func;
        if (func === trueFunc) return getChildFunc(next, adapter);

        return function nthOfType(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var pos = 0, i = 0; i < siblings.length; i++) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    if (adapter.getName(siblings[i]) === adapter.getName(elem)) pos++;
                }
            }

            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type": function(next, rule, options) {
        var func = getNCheck(rule);
        var adapter = options.adapter;

        if (func === falseFunc) return func;
        if (func === trueFunc) return getChildFunc(next, adapter);

        return function nthLastOfType(elem) {
            var siblings = adapter.getSiblings(elem);

            for (var pos = 0, i = siblings.length - 1; i >= 0; i--) {
                if (adapter.isTag(siblings[i])) {
                    if (siblings[i] === elem) break;
                    if (adapter.getName(siblings[i]) === adapter.getName(elem)) pos++;
                }
            }

            return func(pos) && next(elem);
        };
    },

    //TODO determine the actual root element
    root: function(next, rule, options) {
        var adapter = options.adapter;

        return function(elem) {
            return !adapter.getParent(elem) && next(elem);
        };
    },

    scope: function(next, rule, options, context) {
        var adapter = options.adapter;

        if (!context || context.length === 0) {
            //equivalent to :root
            return filters.root(next, rule, options);
        }

        function equals(a, b) {
            if (typeof adapter.equals === "function") return adapter.equals(a, b);

            return a === b;
        }

        if (context.length === 1) {
            //NOTE: can't be unpacked, as :has uses this for side-effects
            return function(elem) {
                return equals(context[0], elem) && next(elem);
            };
        }

        return function(elem) {
            return context.indexOf(elem) >= 0 && next(elem);
        };
    },

    //jQuery extensions (others follow as pseudos)
    checkbox: getAttribFunc("type", "checkbox"),
    file: getAttribFunc("type", "file"),
    password: getAttribFunc("type", "password"),
    radio: getAttribFunc("type", "radio"),
    reset: getAttribFunc("type", "reset"),
    image: getAttribFunc("type", "image"),
    submit: getAttribFunc("type", "submit")
};

//helper methods
function getFirstElement(elems, adapter) {
    for (var i = 0; elems && i < elems.length; i++) {
        if (adapter.isTag(elems[i])) return elems[i];
    }
}

//while filters are precompiled, pseudos get called when they are needed
var pseudos = {
    empty: function(elem, adapter) {
        return !adapter.getChildren(elem).some(function(elem) {
            return adapter.isTag(elem) || elem.type === "text";
        });
    },

    "first-child": function(elem, adapter) {
        return getFirstElement(adapter.getSiblings(elem), adapter) === elem;
    },
    "last-child": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = siblings.length - 1; i >= 0; i--) {
            if (siblings[i] === elem) return true;
            if (adapter.isTag(siblings[i])) break;
        }

        return false;
    },
    "first-of-type": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = 0; i < siblings.length; i++) {
            if (adapter.isTag(siblings[i])) {
                if (siblings[i] === elem) return true;
                if (adapter.getName(siblings[i]) === adapter.getName(elem)) break;
            }
        }

        return false;
    },
    "last-of-type": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = siblings.length - 1; i >= 0; i--) {
            if (adapter.isTag(siblings[i])) {
                if (siblings[i] === elem) return true;
                if (adapter.getName(siblings[i]) === adapter.getName(elem)) break;
            }
        }

        return false;
    },
    "only-of-type": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = 0, j = siblings.length; i < j; i++) {
            if (adapter.isTag(siblings[i])) {
                if (siblings[i] === elem) continue;
                if (adapter.getName(siblings[i]) === adapter.getName(elem)) {
                    return false;
                }
            }
        }

        return true;
    },
    "only-child": function(elem, adapter) {
        var siblings = adapter.getSiblings(elem);

        for (var i = 0; i < siblings.length; i++) {
            if (adapter.isTag(siblings[i]) && siblings[i] !== elem) return false;
        }

        return true;
    },

    //:matches(a, area, link)[href]
    link: function(elem, adapter) {
        return adapter.hasAttrib(elem, "href");
    },
    visited: falseFunc, //Valid implementation
    //TODO: :any-link once the name is finalized (as an alias of :link)

    //forms
    //to consider: :target

    //:matches([selected], select:not([multiple]):not(> option[selected]) > option:first-of-type)
    selected: function(elem, adapter) {
        if (adapter.hasAttrib(elem, "selected")) return true;
        else if (adapter.getName(elem) !== "option") return false;

        //the first <option> in a <select> is also selected
        var parent = adapter.getParent(elem);

        if (!parent || adapter.getName(parent) !== "select" || adapter.hasAttrib(parent, "multiple")) {
            return false;
        }

        var siblings = adapter.getChildren(parent);
        var sawElem = false;

        for (var i = 0; i < siblings.length; i++) {
            if (adapter.isTag(siblings[i])) {
                if (siblings[i] === elem) {
                    sawElem = true;
                } else if (!sawElem) {
                    return false;
                } else if (adapter.hasAttrib(siblings[i], "selected")) {
                    return false;
                }
            }
        }

        return sawElem;
    },
    //https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    //:matches(
    //  :matches(button, input, select, textarea, menuitem, optgroup, option)[disabled],
    //  optgroup[disabled] > option),
    // fieldset[disabled] * //TODO not child of first <legend>
    //)
    disabled: function(elem, adapter) {
        return adapter.hasAttrib(elem, "disabled");
    },
    enabled: function(elem, adapter) {
        return !adapter.hasAttrib(elem, "disabled");
    },
    //:matches(:matches(:radio, :checkbox)[checked], :selected) (TODO menuitem)
    checked: function(elem, adapter) {
        return adapter.hasAttrib(elem, "checked") || pseudos.selected(elem, adapter);
    },
    //:matches(input, select, textarea)[required]
    required: function(elem, adapter) {
        return adapter.hasAttrib(elem, "required");
    },
    //:matches(input, select, textarea):not([required])
    optional: function(elem, adapter) {
        return !adapter.hasAttrib(elem, "required");
    },

    //jQuery extensions

    //:not(:empty)
    parent: function(elem, adapter) {
        return !pseudos.empty(elem, adapter);
    },
    //:matches(h1, h2, h3, h4, h5, h6)
    header: namePseudo(["h1", "h2", "h3", "h4", "h5", "h6"]),

    //:matches(button, input[type=button])
    button: function(elem, adapter) {
        var name = adapter.getName(elem);
        return (
            name === "button" || (name === "input" && adapter.getAttributeValue(elem, "type") === "button")
        );
    },
    //:matches(input, textarea, select, button)
    input: namePseudo(["input", "textarea", "select", "button"]),
    //input:matches(:not([type!='']), [type='text' i])
    text: function(elem, adapter) {
        var attr;
        return (
            adapter.getName(elem) === "input" &&
            (!(attr = adapter.getAttributeValue(elem, "type")) || attr.toLowerCase() === "text")
        );
    }
};

function namePseudo(names) {
    if (typeof Set !== "undefined") {
        // eslint-disable-next-line no-undef
        var nameSet = new Set(names);

        return function(elem, adapter) {
            return nameSet.has(adapter.getName(elem));
        };
    }

    return function(elem, adapter) {
        return names.indexOf(adapter.getName(elem)) >= 0;
    };
}

function verifyArgs(func, name, subselect) {
    if (subselect === null) {
        if (func.length > 2 && name !== "scope") {
            throw new Error("pseudo-selector :" + name + " requires an argument");
        }
    } else {
        if (func.length === 2) {
            throw new Error("pseudo-selector :" + name + " doesn't have any arguments");
        }
    }
}

//FIXME this feels hacky
var re_CSS3 = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;

module.exports = {
    compile: function(next, data, options, context) {
        var name = data.name;
        var subselect = data.data;
        var adapter = options.adapter;

        if (options && options.strict && !re_CSS3.test(name)) {
            throw new Error(":" + name + " isn't part of CSS3");
        }

        if (typeof filters[name] === "function") {
            return filters[name](next, subselect, options, context);
        } else if (typeof pseudos[name] === "function") {
            var func = pseudos[name];
            verifyArgs(func, name, subselect);

            if (func === falseFunc) {
                return func;
            }

            if (next === trueFunc) {
                return function pseudoRoot(elem) {
                    return func(elem, adapter, subselect);
                };
            }

            return function pseudoArgs(elem) {
                return func(elem, adapter, subselect) && next(elem);
            };
        } else {
            throw new Error("unmatched pseudo-class :" + name);
        }
    },
    filters: filters,
    pseudos: pseudos
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(93),
    compile = __webpack_require__(94);

module.exports = function nthCheck(formula){
	return compile(parse(formula));
};

module.exports.parse = parse;
module.exports.compile = compile;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = parse;

//following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo

//[ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
var re_nthElement = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;

/*
	parses a nth-check formula, returns an array of two numbers
*/
function parse(formula){
	formula = formula.trim().toLowerCase();

	if(formula === "even"){
		return [2, 0];
	} else if(formula === "odd"){
		return [2, 1];
	} else {
		var parsed = formula.match(re_nthElement);

		if(!parsed){
			throw new SyntaxError("n-th rule couldn't be parsed ('" + formula + "')");
		}

		var a;

		if(parsed[1]){
			a = parseInt(parsed[1], 10);
			if(isNaN(a)){
				if(parsed[1].charAt(0) === "-") a = -1;
				else a = 1;
			}
		} else a = 0;

		return [
			a,
			parsed[3] ? parseInt((parsed[2] || "") + parsed[3], 10) : 0
		];
	}
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = compile;

var BaseFuncs = __webpack_require__(84),
    trueFunc  = BaseFuncs.trueFunc,
    falseFunc = BaseFuncs.falseFunc;

/*
	returns a function that checks if an elements index matches the given rule
	highly optimized to return the fastest solution
*/
function compile(parsed){
	var a = parsed[0],
	    b = parsed[1] - 1;

	//when b <= 0, a*n won't be possible for any matches when a < 0
	//besides, the specification says that no element is matched when a and b are 0
	if(b < 0 && a <= 0) return falseFunc;

	//when a is in the range -1..1, it matches any element (so only b is checked)
	if(a ===-1) return function(pos){ return pos <= b; };
	if(a === 0) return function(pos){ return pos === b; };
	//when b <= 0 and a === 1, they match any element
	if(a === 1) return b < 0 ? trueFunc : function(pos){ return pos >= b; };

	//when a > 0, modulo can be used to check if there is a match
	var bMod = b % a;
	if(bMod < 0) bMod += a;

	if(a > 1){
		return function(pos){
			return pos >= b && pos % a === bMod;
		};
	}

	a *= -1; //make `a` positive

	return function(pos){
		return pos <= b && pos % a === bMod;
	};
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return registerNodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return createNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNodeType", function() { return isValidNodeType; });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);

const nodeTypes = new Map();
/* istanbul ignore next  */

const ownerDocumentDescriptor = {
  get() {
    return {
      createElementNS(uri, name) {
        return createNode(name);
      }

    };
  }

};
const elementProto = {
  getElementById(id) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelector"])(`#${id}`, this);
  },

  getElementsByName(name) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])(`[name="${name}"]`, this);
  },

  getElementsByClassName(className) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])(`.${className}`, this);
  },

  getElementsByTagName(tagName) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])(tagName, this);
  },

  querySelector(selector) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelector"])(selector, this);
  },

  querySelectorAll(selector) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])(selector, this);
  }

};
function registerNodeType(type, Class, isQuerable = false) {
  const nodeType = type.toLowerCase();
  const tagName = type.toUpperCase();
  Object.defineProperty(Class.prototype, 'nodeType', {
    get() {
      return nodeType;
    }

  }); // friendly to snabbdom

  Object.defineProperty(Class.prototype, 'tagName', {
    get() {
      return tagName;
    }

  });
  Object.defineProperty(Class.prototype, 'nodeName', {
    get() {
      return tagName;
    }

  });
  nodeTypes.set(nodeType, Class);

  if (isQuerable && !Class.prototype.ownerDocument) {
    Object.defineProperty(Class.prototype, 'ownerDocument', ownerDocumentDescriptor);
    Class.prototype.namespaceURI = `http://spritejs.org/${type}`;
    Object.assign(Class.prototype, elementProto);
  }
}
function createNode(type, ...args) {
  const Class = getNodeType(type);

  if (Class) {
    return new Class(...args);
  }

  return null;
}
function createElement(type, attrs, content) {
  const Node = typeof type === 'string' ? getNodeType(type) : type;
  if (!Node) return null;
  const sprite = new Node(typeof content === 'string' ? content : undefined);

  if (attrs !== null) {
    sprite.attr(attrs);
  }

  if (typeof content === 'object' && sprite.append) {
    if (content instanceof Array) {
      sprite.append(...content);
    } else {
      sprite.append(content);
    }
  }

  return sprite;
}

function getNodeType(type) {
  return nodeTypes.get(type.toLowerCase());
}

function isValidNodeType(type) {
  return !!getNodeType(type);
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_basenode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _core_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _stylesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97);



/* istanbul ignore next */

_core_layer__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.fromDocumentCSS = function () {
  _stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].fromDocumentCSS();
};

_core_basenode__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.restyle = function () {
  _stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].computeStyle(this);
};

/* harmony default export */ __webpack_exports__["default"] = (_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



const cssWhat = __webpack_require__(86);

let cssRules = [];
const keyFrames = {};

const _matchedSelectors = Symbol('matchedSelectors');

const _transitions = Symbol('transitions');

const _animation = Symbol('animation');
/* istanbul ignore next */


function parseTransitionValue(values) {
  if (typeof values === 'string') values = values.trim().split(/\s*,\s*/g);
  const ret = [];

  for (let i = 0; i < values.length; i++) {
    let value = values[i].toString();

    if (value === 'initial') {
      value = 0;
    } else if (/ms$/.test(value)) {
      value = parseFloat(value) / 1000;
    } else {
      value = parseFloat(value);
    }

    ret.push(value);
  }

  return ret;
}
/* istanbul ignore next */


function parseAnimationValue(value) {
  value = value.toString();

  if (value === 'initial') {
    value = 0;
  } else if (/ms$/.test(value)) {
    value = parseFloat(value);
  } else {
    value = parseFloat(value) * 1000;
  }

  return value;
}
/* istanbul ignore next */


function toPxValue(value, defaultWidth) {
  // eslint-disable-line complexity
  if (typeof value === 'string') {
    const matched = value.match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin)$/);

    if (matched) {
      // console.log(matched);
      const size = parseFloat(matched[1]);
      const unit = matched[2];
      value = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["sizeToPixel"])({
        size,
        unit
      });
    } else {
      const size = Number(value);

      if (!Number.isNaN(size)) {
        value = size;
      }
    }
  }

  return value;
}
/* istanbul ignore next */


const CSSGetter = {
  opacity: true,
  width: true,
  height: true,
  backgroundColor: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  order: true,
  flexDirection: true,
  flexWrap: true,
  justifyContent: true,
  alignItems: true,
  alignContent: true,
  position: true,
  alignSelf: true,
  transform: true,
  transformOrigin: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  borderTopStyle: true,
  borderRightStyle: true,
  borderBottomStyle: true,
  borderLeftStyle: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomRightRadius: true,
  borderBottomLeftRadius: true,
  boxSizing: true,
  display: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  zIndex: true,
  font: true,
  fontSize: true,
  fontFamily: true,
  fontStyle: true,
  fontVariantCaps: true,
  fontWeight: true,
  color: true,
  textAlign: true,
  lineHeight: true,
  lineBreak: true,
  wordBreak: true,
  letterSpacing: true,
  textIndent: true,
  transitionDuration: parseTransitionValue,

  transitionTimingFunction(values) {
    if (typeof values === 'string') values = values.trim().split(/\s*,\s*/g);
    const ret = [];

    for (let i = 0; i < values.length; i++) {
      let value = values[i].toString();
      if (value === 'initial') value = 'ease';
      ret.push(value);
    }

    return ret;
  },

  transitionDelay: parseTransitionValue,
  transitionProperty: true,
  animationDuration: parseAnimationValue,
  animationDelay: parseAnimationValue,

  animationTimingFunction(value) {
    value = value.toString();
    return value !== 'initial' ? value : 'ease';
  },

  animationIterationCount(value) {
    value = value.toString();
    if (value === 'initial') return 1;
    if (value === 'infinity') return Infinity;
    return parseFloat(value);
  },

  animationDirection(value) {
    value = value.toString();
    return value !== 'initial' ? value : 'normal';
  },

  animationFillMode(value) {
    value = value.toString();
    if (value === 'initial' || value === 'none') value = 'auto';
    return value;
  },

  animationPlayState: true,
  animationName: true
};
/* istanbul ignore next */

function parseRuleAttrs(rule) {
  // eslint-disable-line complexity
  let styleAttrs;
  const isStyleMap = !!rule.styleMap;

  if (!isStyleMap) {
    if (!rule.style) return;
    const props = [...rule.style].map(key => {
      return [key, rule.style[key]];
    }).filter(([key, value]) => value != null);
    const matched = rule.cssText.match(/--sprite-[\w-]+\s*:\s*.+?(;|$)/img);

    if (matched) {
      matched.forEach(rule => {
        const [key, value] = rule.split(':');
        props.push([key, value.trim().replace(/;$/, '')]);
      });
    }

    const isIgnore = props['--sprite-ignore'];

    if (isIgnore && isIgnore !== 'false' && isIgnore !== '0') {
      return;
    }

    styleAttrs = props;
  }

  if (rule.styleMap && rule.styleMap.has('--sprite-ignore')) {
    const isIgnore = rule.styleMap.get('--sprite-ignore')[0].trim();

    if (isIgnore !== 'false' && isIgnore !== '0' && isIgnore !== '') {
      return;
    }
  }

  if (rule.styleMap) {
    styleAttrs = [...rule.styleMap];
  }

  const attrs = {},
        reserved = {};
  let borderRadius = null;
  let transition = null;
  const gradient = {};
  styleAttrs.forEach(([key, value]) => {
    // eslint-disable-line complexity
    if (key === '--sprite-transition') {
      throw new Error('Not support --sprite-transition, instead use transition.');
    }

    if (key === '--sprite-animation') {
      throw new Error('Not support --sprite-animation, instead use animation.');
    }

    if (key.indexOf('--sprite-') === 0) {
      key = key.replace('--sprite-', '');
      key = toCamel(key);
      if (isStyleMap) value = value[0][0].trim();

      if (key === 'gradient') {
        // --sprite-gradient: bgcolor,color vector(0, 150, 150, 0) 0,#fff 0.5,rgba(33, 33, 77, 0.7) 1,rgba(128, 45, 88, 0.5)
        const matched = value.match(/(.+?)vector\((.+?)\)(.+)/);

        if (matched) {
          const properties = matched[1].trim().split(/\s*,\s*/g),
                vector = matched[2].split(',').map(s => Number(s.trim())),
                colors = matched[3].trim().split(/\s+/).map(s => {
            const m = s.match(/^([\d.]+),(.*)/);

            if (m) {
              return {
                offset: Number(m[1].trim()),
                color: m[2].trim()
              };
            }

            return null;
          }).filter(c => c != null);
          properties.forEach(prop => {
            gradient[prop] = {
              vector,
              colors
            };
          });
        }
      }

      if (key === 'border') {
        const values = value.split(/\s+/);
        const [style, width, color] = values;
        reserved.border = {
          style,
          width,
          color
        };
      } else {
        if (key !== 'fontSize' && typeof value === 'string') {
          if (/,/.test(value)) {
            const values = value.split(',');
            value = values.map(v => toPxValue(v.trim()));
          } else {
            value = toPxValue(value);
          }
        }

        reserved[key] = value;
      }
    } else {
      key = toCamel(key);

      if (key in CSSGetter) {
        if (typeof CSSGetter[key] === 'function') {
          value = CSSGetter[key](value);
        } else {
          if (isStyleMap) {
            value = value[0].toString();
          }

          if (key !== 'fontSize') {
            value = toPxValue(value);
          }
        }

        if (/^animation/.test(key)) {
          attrs.animation = attrs.animation || {};
          attrs.animation[key] = value;
          return;
        }

        if (value === 'initial') return;
        if (key === 'backgroundColor') key = 'bgcolor';
        if (key === 'fontVariantCaps') key = 'fontVariant';
        if (key === 'lineHeight' && value === 'normal') value = '';

        if (/Radius$/.test(key)) {
          if (typeof value === 'string') {
            value = value.split(/\s+/).map(v => toPxValue(v));
          } else {
            value = [value, value];
          }

          borderRadius = borderRadius || [0, 0, 0, 0, 0, 0, 0, 0];

          if (key === 'borderTopLeftRadius') {
            borderRadius[0] = value[0];
            borderRadius[1] = value[1];
          } else if (key === 'borderTopRightRadius') {
            borderRadius[2] = value[0];
            borderRadius[3] = value[1];
          } else if (key === 'borderBottomRightRadius') {
            borderRadius[4] = value[0];
            borderRadius[5] = value[1];
          } else if (key === 'borderBottomLeftRadius') {
            borderRadius[6] = value[0];
            borderRadius[7] = value[1];
          }
        } else if (/^border(Left|Right|Top|Bottom)\w+/.test(key)) {
          if (/Color$/.test(key)) {
            attrs.borderColor = value;
          } else if (/Style$/.test(key)) {
            attrs.borderStyle = value;
          } else if (/Width$/.test(key)) {
            attrs.borderWidth = value;
          }
        } else if (key === 'transitionDelay') {
          transition = transition || {};
          transition.delay = value;
        } else if (key === 'transitionDuration') {
          transition = transition || {};
          transition.duration = value;
        } else if (key === 'transitionTimingFunction') {
          transition = transition || {};
          transition.easing = value;
        } else if (key === 'transitionProperty') {
          transition = transition || {};
          transition.properties = value;
        } else {
          attrs[key] = value;
        }
      }
    }
  });

  if (borderRadius) {
    attrs.borderRadius = borderRadius;
  }

  Object.assign(attrs, reserved, gradient);

  if (transition) {
    transition.properties = transition.properties || 'all';
    transition.delay = transition.delay || [0];
    transition.duration = transition.duration || [0];
    transition.easing = transition.easing || ['ease'];
    attrs.transitions = [];
    const properties = transition.properties.split(',').map(p => p.trim());
    properties.forEach((key, i) => {
      let _attrs = null;

      if (key.indexOf('--sprite-') === 0) {
        key = key.replace('--sprite-', '');
      }

      key = toCamel(key);

      if (key !== 'borderRadius' && /^border/.test(key)) {
        key = 'border';
      }

      if (key === 'backgroundColor' || key === 'background') key = 'bgcolor';
      if (key === 'fontVariantCaps') key = 'fontVariant';

      if (key === 'all') {
        _attrs = Object.assign({}, attrs);
        delete _attrs.transitions;
        delete _attrs.animation;
      } else if (key in attrs) {
        _attrs = {
          [key]: attrs[key]
        };
      }

      if (_attrs) {
        attrs.transitions.push({
          easing: transition.easing[i],
          attrs: _attrs,
          delay: transition.delay[i],
          duration: transition.duration[i]
        });
      }
    });
  }

  if ('fontSize' in attrs || 'fontFamily' in attrs || 'fontStyle' in attrs || 'fontVariant' in attrs || 'fontWeight' in attrs) {
    // for font inherit
    const font = attrs.font || 'normal normal normal 16px Arial';
    const {
      style,
      variant,
      weight,
      family,
      size,
      unit
    } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font);
    attrs.font = `${attrs.fontStyle || style} ${attrs.fontVariant || variant} ${attrs.fontWeight || weight} ${attrs.fontSize || size + unit} ${attrs.fontFamily || family}`;
    delete attrs.fontSize;
    delete attrs.fontFamily;
    delete attrs.fontVariant;
    delete attrs.fontWeight;
    delete attrs.fontStyle;
  }

  return attrs;
}

function parseFrames(rule)
/* istanbul ignore next */
{
  const rules = rule.cssRules || rule.rules;

  if (rules && rules.length > 0) {
    const frames = [];

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      const offset = parseFloat(rule.keyText) / 100;
      const frame = parseRuleAttrs(rule);
      frame.offset = offset;
      frames.push(frame);
    }

    return frames;
  }
}
/* istanbul ignore next */


function toCamel(str) {
  return str.replace(/([^-])(?:-+([^-]))/g, ($0, $1, $2) => {
    return $1 + $2.toUpperCase();
  });
}

function resolveToken(token) {
  // eslint-disable-line complexity
  let ret = '',
      priority = 0,
      valid = true;

  if (token.type === 'tag') {
    ret = token.name;
    priority = 1;
  } else if (token.type === 'universal') {
    ret = '*';
    priority = 0;
  } else if (token.type === 'pseudo') {
    const data = token.data;

    if (data != null) {
      if (token.name === 'not') {
        data.forEach(rules => {
          rules.forEach(token => {
            const r = resolveToken(token);
            ret += r.token;
            valid &= r.valid;
          });
        });
        ret = `:${token.name}(${ret})`;
      } else {
        ret = `:${token.name}(${token.data})`;
      }
    } else {
      ret = `:${token.name}`;
    }

    if (token.name === 'hover')
      /* istanbul ignore next */
      {
        _utils__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"].add('__internal_state_hover_');
      } else if (token.name === 'active')
      /* istanbul ignore next */
      {
        _utils__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"].add('__internal_state_active_');
      } // not support yet


    valid = token.name !== 'focus' && token.name !== 'link' && token.name !== 'visited' && token.name !== 'lang';
    priority = token.name !== 'not' ? 1000 : 0;
  } else if (token.type === 'pseudo-element')
    /* istanbul ignore next */
    {
      ret = `::${token.name}`;
      priority = 1;
      valid = false; // pseudo-element not support
    } else if (token.type === 'attribute') {
    const {
      name,
      action,
      value
    } = token;
    _utils__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"].add(name);

    if (action === 'exists') {
      ret = `[${name}]`;
    } else if (action === 'equals') {
      if (name === 'id') {
        ret = `#${value}`;
      } else {
        ret = `[${name}="${value}"]`;
      }
    } else if (action === 'not')
      /* istanbul ignore next */
      {
        throw new Error('Attribute \'not\' action is not allowed.'); // ret = `[${name}!="${value}"]`;
      } else if (action === 'start') {
      ret = `[${name}^="${value}"]`;
    } else if (action === 'end') {
      ret = `[${name}$="${value}"]`;
    } else if (action === 'element') {
      if (name === 'class') {
        ret = `.${value}`;
      } else {
        ret = `[${name}~="${value}"]`;
      }
    } else if (action === 'any') {
      ret = `[${name}*="${value}"]`;
    } else if (action === 'hyphen') {
      ret = `[${name}|="${value}"]`;
    }

    if (name === 'id' && action === 'equals') {
      priority = 1000000;
    } else {
      priority = 1000;
    }
  } else if (token.type === 'child') {
    ret = '>';
    priority = 0;
  } else if (token.type === 'parent')
    /* istanbul ignore next */
    {
      throw new Error('Parent selector is not allowed.'); // ret = '<';
      // priority = 0;
    } else if (token.type === 'sibling') {
    ret = '~';
    priority = 0;
  } else if (token.type === 'adjacent') {
    ret = '+';
    priority = 0;
  } else if (token.type === 'descendant') {
    ret = ' ';
    priority = 0;
  } else
    /* istanbul ignore next */
    {
      throw new Error(`Unknown token ${token}.`);
    }

  return {
    token: ret,
    priority,
    valid
  };
}

let order = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  add(rules, fromDoc = false) {
    Object.entries(rules).forEach(([rule, attributes]) => {
      const selectors = cssWhat(rule);

      for (let i = 0; i < selectors.length; i++) {
        const selector = selectors[i];
        const tokens = selector.map(token => {
          return resolveToken(token);
        }).filter(token => token.valid);
        const r = tokens.reduce((a, b) => {
          a.priority += b.priority;
          a.tokens.push(b.token);
          return a;
        }, {
          tokens: [],
          priority: 0
        });
        const selectorStr = r.tokens.join('');

        try {
          const compiled = Object(_dom_selector__WEBPACK_IMPORTED_MODULE_0__["compile"])(selectorStr);
          const rule = {
            selector: selectorStr,
            compiled,
            priority: r.priority,
            attributes,
            order: order++,
            fromDoc
          };
          cssRules.push(rule);
        } catch (ex)
        /* istanbul ignore next */
        {
          console.warn(ex.message);
        }
      }
    });
    cssRules.sort((a, b) => {
      const d = a.priority - b.priority;
      return d !== 0 ? d : a.order - b.order;
    });
  },

  fromDocumentCSS(stylesheets, override)
  /* istanbul ignore next */
  {
    if (override) {
      cssRules = cssRules.filter(r => !r.fromDoc);
    }

    if (typeof document === 'undefined') return;
    if (!stylesheets) stylesheets = document.styleSheets;

    if (stylesheets) {
      const styleRules = {};

      for (let i = 0; i < stylesheets.length; i++) {
        let rules = null;

        try {
          rules = stylesheets[i].cssRules || stylesheets[i].rules;
        } catch (ex) {
          rules = null;
        }

        if (!rules) continue; // eslint-disable-line no-continue

        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j];
          const selectorText = rule.selectorText;

          if (rule.type !== 1 && rule.type !== 7) {
            // is not style rule or keyframesrule
            continue; // eslint-disable-line no-continue
          }

          if (rule.type === 7) {
            const frames = parseFrames(rule);
            keyFrames[rule.name] = frames;
            continue; // eslint-disable-line no-continue
          }

          const attrs = parseRuleAttrs(rule);

          if (attrs) {
            styleRules[selectorText] = styleRules[selectorText] || {};
            Object.assign(styleRules[selectorText], attrs);
          }
        }
      }

      this.add(styleRules, true);
    }
  },

  computeStyle(el) {
    if (!el.attributes) return {};
    el.__styleNeedUpdate = false;
    if (cssRules.length <= 0) return {};
    const attrs = {};
    const selectors = [];
    const transitions = [];
    cssRules.forEach(rule => {
      const {
        compiled,
        selector,
        attributes
      } = rule;

      if (Object(_dom_selector__WEBPACK_IMPORTED_MODULE_0__["isMatched"])(el, compiled)) {
        Object.assign(attrs, attributes); // console.log(JSON.stringify(attrs.transitions));

        if (attrs.transitions)
          /* istanbul ignore next */
          {
            transitions.push(...attrs.transitions);
            attrs.transitions.forEach(t => {
              Object.keys(t.attrs).forEach(k => {
                // if(k in attrs) delete attrs[k];
                el.attributes.__getStyleTag = true;

                if (el.attributes[k]) {
                  attrs[k] = el.attributes[k];
                }

                el.attributes.__getStyleTag = false; // console.log(el.attributes.style[k]);
              });
            });
            delete attrs.transitions;
          }

        selectors.push(selector);
      }
    }); // if(selectors.length <= 0) return;

    const matchedSelectors = selectors.join();

    if (el[_matchedSelectors] !== matchedSelectors) {
      // console.log(transitions);

      /* istanbul ignore if */
      if (attrs.animation) {
        const animation = attrs.animation;
        const delay = animation.animationDelay,
              direction = animation.animationDirection,
              duration = animation.animationDuration,
              fill = animation.animationFillMode,
              iterations = animation.animationIterationCount,
              name = animation.animationName,
              playState = animation.animationPlayState,
              easing = animation.animationTimingFunction;
        const frames = keyFrames[name];

        if (frames) {
          if (el[_animation]) {
            el[_animation].cancel();
          }

          el[_animation] = el.animate(frames, {
            duration,
            delay,
            fill,
            iterations,
            easing,
            direction
          });
          el.setReleaseKey(_animation);
          if (playState !== 'running') el[_animation].pause();
        } else {
          console.warn(`Unknow animation: ${name}`);
        }

        delete attrs.animation;
      }
      /* istanbul ignore if */


      if (el[_transitions]) {
        el[_transitions].forEach(t => {
          t.cancel(true);
          el.attributes.__styleTag = true;
          el.attr(t.__attrs);
          el.attributes.__styleTag = false;
        });

        delete el[_transitions];
      }
      /* istanbul ignore if */


      if (transitions.length > 0) {
        el[_transitions] = [];
        el.setReleaseKey(_transitions);
        Promise.all(transitions.map(t => {
          const {
            attrs,
            delay,
            duration,
            easing
          } = t;
          const transition = el.transition({
            duration,
            delay
          }, easing, true);
          transition.__attrs = attrs;

          el[_transitions].push(transition);

          return transition.attr(Object.assign({}, attrs));
        })).then(() => {
          el.dispatchEvent('transitionend', {}, true, true);
        });
      }

      el.dispatchEvent('stylechange', {
        oldSelectors: el[_matchedSelectors],
        newSelectors: matchedSelectors
      }, true, true);
      el[_matchedSelectors] = matchedSelectors;
      el.attributes.clearStyle();
      el.attributes.__styleTag = true;
      el.attr(attrs);
      el.attributes.__styleTag = false; // if(el.forceUpdate) el.forceUpdate();
    }

    return attrs;
  },

  get relatedAttributes() {
    return _utils__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"];
  },

  get cssRules() {
    return cssRules;
  }

});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);



const _loadBgImagePassport = Symbol('loadBgImagePassport');

_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"].prototype.loadBgImage = function (val) {
  let res;

  if (val.id) {
    res = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture({
      id: val.id
    });
  } else if (val.src) {
    res = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture(val.src);
  }

  if (res instanceof Promise) {
    const passport = Symbol('passport');
    this[_loadBgImagePassport] = passport;
    res.then(({
      img,
      texture
    }) => {
      if (passport === this[_loadBgImagePassport]) {
        const bgimage = this.attr('bgimage');
        bgimage.image = img;
        this.attr('bgimage', null);
        this.attr('bgimage', bgimage);
      }
    });
  } else if (res) {
    val.image = res.img;
  }

  return val;
};

/* harmony default export */ __webpack_exports__["default"] = (_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"]);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);


const axios = __webpack_require__(101);

const loadedResources = new Map();
/**
  loadTexture({
    id: 'bird1',
    src: 'http://some.path/brid1.png'
  })
 */

const Resource = {
  loadTimeout: 30000,
  loadedResources,

  loadTexture(texture, timeout = Resource.loadTimeout) {
    if (typeof texture === 'string') {
      texture = {
        src: texture
      };
    }

    if (!texture.id) {
      texture.id = texture.src;
    }

    const mapKey = texture.id;

    if (!loadedResources.has(mapKey)) {
      const promise = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(new Error('load img timeout'));
        }, timeout);
        Object(_platform__WEBPACK_IMPORTED_MODULE_0__["loadImage"])(texture.src).then(img => {
          // save image not canvas for svg preserveAspectRatio
          resolve({
            img,
            texture,
            fromCache: false
          });
          loadedResources.set(mapKey, img);
          clearTimeout(timer);
        });
      });
      loadedResources.set(mapKey, promise);
      return promise;
    }

    const img = loadedResources.get(mapKey);

    if (img instanceof Promise) {
      return img.then(res => {
        return {
          img: res.img,
          texture,
          fromCache: false
        };
      });
    }

    return {
      img,
      texture,
      fromCache: true
    };
  },

  /**
    u3d-json compatible: https://www.codeandweb.com/texturepacker
    {
      frames: {
        key: {
          frame: {x, y, w, h},
          trimmed: ...,
          rotated: true|false,
          spriteSourceSize: {x, y, w, h},
          sourceSize: {w, h}
        }
      }
    }
   */
  async loadFrames(src, frameData) {
    if (typeof frameData === 'string') {
      frameData = await axios.get(frameData);
      frameData = frameData.data;
    }

    const texture = await this.loadTexture(src);
    const frames = frameData.frames;
    Object.entries(frames).forEach(([key, frame]) => {
      const {
        w,
        h
      } = frame.sourceSize;
      const canvas = Object(_platform__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])(w, h),
            srcRect = frame.frame,
            rect = frame.spriteSourceSize,
            context = canvas.getContext('2d');
      const rotated = frame.rotated;
      context.save();

      if (rotated) {
        context.translate(0, h);
        context.rotate(-0.5 * Math.PI);
        const tmp = rect.y;
        rect.y = rect.x;
        rect.x = h - srcRect.h - tmp;
        context.drawImage(texture.img, srcRect.x, srcRect.y, srcRect.h, srcRect.w, rect.x, rect.y, rect.h, rect.w);
      } else {
        context.drawImage(texture.img, srcRect.x, srcRect.y, srcRect.w, srcRect.h, rect.x, rect.y, rect.w, rect.h);
      }

      context.restore();
      loadedResources.set(key, canvas);
    });
    return texture;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (Resource);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return getContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shim", function() { return shim; });
function createCanvas(width = 300, height = 150) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
function loadImage(src) {
  const img = document.createElement('img');

  if (typeof src === 'string' && !/^data:image\/(.*);base64/.test(src)) {
    // base64 dont need crossOrigin - fix early webkit cross domain bug
    img.crossOrigin = 'anonymous';
  }

  const promise = new Promise(resolve => {
    img.addEventListener('load', () => {
      resolve(img);
    });
  });
  img.src = src;
  return promise;
}
function getContainer(container) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }

  if (!container) {
    throw new Error('Container is not defined or cannot found.');
  }

  return container;
}
function shim() {
  // CustomEvent polyfill https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent
  try {
    // a : While a window.CustomEvent object exists, it cannot be called as a constructor.
    // b : There is no window.CustomEvent object
    new window.CustomEvent('T');
  } catch (e) {
    const CustomEvent = function (event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      const evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(102);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);
var bind = __webpack_require__(104);
var Axios = __webpack_require__(106);
var mergeConfig = __webpack_require__(124);
var defaults = __webpack_require__(112);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(125);
axios.CancelToken = __webpack_require__(126);
axios.isCancel = __webpack_require__(111);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(127);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(104);
var isBuffer = __webpack_require__(105);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);
var buildURL = __webpack_require__(107);
var InterceptorManager = __webpack_require__(108);
var dispatchRequest = __webpack_require__(109);
var mergeConfig = __webpack_require__(124);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);
var transformData = __webpack_require__(110);
var isCancel = __webpack_require__(111);
var defaults = __webpack_require__(112);
var isAbsoluteURL = __webpack_require__(122);
var combineURLs = __webpack_require__(123);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(103);
var normalizeHeaderName = __webpack_require__(114);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(115);
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(115);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(113)))

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);
var settle = __webpack_require__(116);
var buildURL = __webpack_require__(107);
var parseHeaders = __webpack_require__(119);
var isURLSameOrigin = __webpack_require__(120);
var createError = __webpack_require__(117);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(121);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(117);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(118);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(103);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(125);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



const attr = _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["utils"].attr;
const generateID = _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["utils"].generateID;

const _mapTextures = Symbol('mapTextures'),
      _loadTexturePassport = Symbol('loadTexturePassport');

let ResAttr = _decorate(null, function (_initialize, _Sprite$Attr) {
  class ResAttr extends _Sprite$Attr {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: ResAttr,
    d: [{
      kind: "set",
      decorators: [attr({
        value: []
      })],
      key: "textures",

      value(textures) {
        if (!Array.isArray(textures)) {
          textures = [textures];
        }

        textures = textures.map(texture => {
          if (typeof texture === 'string') {
            texture = {
              src: texture
            };
          } else if (!texture.src && !texture.id && !texture.image) {
            const id = generateID(texture);
            _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadedResources.set(id, texture);
            texture = {
              image: texture,
              id
            };
          } else if (texture.nodeType === 1) {
            texture = {
              image: texture,
              src: texture.src
            };
          }

          return texture;
        });
        this.set('textures', textures);
        this.loadTextures(textures);
      }

    }, {
      kind: "method",
      key: _mapTextures,

      value(textures) {
        let clearCache = false;
        const res = textures.map(({
          img,
          texture,
          fromCache
        }) => {
          if (!fromCache) clearCache = true;
          return Object.assign({}, texture, {
            image: img
          });
        });

        if (clearCache) {
          // async loaded images
          this.subject.forceUpdate(true);
        }

        _get(_getPrototypeOf(ResAttr.prototype), "loadTextures", this).call(this, res);
      }

    }, {
      kind: "method",
      key: "loadTextures",

      value(textures) {
        // adaptive textures
        const passport = Symbol('passport');
        this[_loadTexturePassport] = passport;
        let hasPromise = false;
        const tasks = textures.map(texture => {
          if (texture.image) {
            return {
              img: texture.image,
              texture,
              fromCache: true
            };
          }

          const loadingTexture = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture(texture);

          if (loadingTexture instanceof Promise) {
            hasPromise = true;
          }

          return loadingTexture;
        });

        if (hasPromise) {
          Promise.all(tasks).then(res => {
            if (this[_loadTexturePassport] === passport) {
              // prevent multicall loadTextures
              this[_mapTextures](res);
            }
          });
        } else {
          // if preload image, calculate the size of sprite synchronously
          this[_mapTextures](tasks);
        }
      }

    }]
  };
}, _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"].Attr);

_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"].Attr = ResAttr;
/* harmony default export */ __webpack_exports__["default"] = (_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);



const _resolution = Symbol('resolution');

const _attrs = Symbol('attrs');

const _displayRatio = Symbol('displayRatio');

class ExLayer extends _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  constructor(id, opts = {}) {
    if (typeof id === 'object') {
      opts = id;
      id = opts.id || `id_${Math.random().toString().slice(2, 10)}`;
    }

    let {
      context,
      resolution,
      handleEvent = true,
      evaluateFPS = false,
      renderMode = 'repaintAll',
      autoRender = true,
      useDocumentCSS = false
    } = opts;
    context = context || Object(_platform__WEBPACK_IMPORTED_MODULE_1__["createCanvas"])().getContext('2d');
    const canvas = context.canvas;
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';
    super({
      context,
      evaluateFPS,
      renderMode,
      autoRender,
      useDocumentCSS
    });
    this.handleEvent = handleEvent;

    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('mouseleave', evt => {
        // fixed mouseleave outof range
        const layers = this.parent ? this.parent.sortedChildNodes : [this];
        const {
          left,
          top
        } = evt.target.getBoundingClientRect();
        const {
          clientX,
          clientY
        } = evt;
        const originalX = Math.round((clientX | 0) - left);
        const originalY = Math.round((clientY | 0) - top);
        const [x, y] = this.toLocalPos(originalX, originalY);
        layers.forEach(layer => {
          if (layer.handleEvent) {
            layer.dispatchEvent('mouseleave', {
              originalEvent: evt,
              layerX: x,
              layerY: y,
              originalX,
              originalY,
              x,
              y
            });
          }
        });
      });
    }

    if (resolution) {
      this._userInitResolution = true;
      this.resolution = [...resolution, 0, 0];
    } else {
      this[_resolution] = [this.canvas.width, this.canvas.height, 0, 0];
    }

    this[_attrs] = new Set(['renderMode', 'autoRender', 'evaluateFps', 'handleEvent', 'displayRatio']);
  }

  get id() {
    return this.canvas.dataset.layerId;
  }

  get resolution() {
    return this[_resolution];
  }

  get viewport() {
    const canvas = this.canvas;

    if (canvas) {
      if (canvas.getBoundingClientRect) {
        const {
          width,
          height
        } = canvas.getBoundingClientRect();

        if (width > 0) {
          return [width, height];
        }
      }

      if (canvas.clientWidth) return [canvas.clientWidth, canvas.clientHeight];
    }

    if (this.parent) {
      return this.parent.layerViewport;
    }

    const [width, height] = this[_resolution];
    return [width, height];
  }

  get offset() {
    return [this.resolution[2], this.resolution[3]];
  }

  get center() {
    const [width, height] = this.resolution;
    return [width / 2, height / 2];
  }

  pointCollision(evt) {
    if (this.outputContext.canvas) {
      let layerX = evt.layerX | 0,
          layerY = evt.layerY | 0;
      const [width, height, offsetLeft, offsetTop] = this.resolution;
      layerX += offsetLeft;
      layerY += offsetTop;

      if (layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
        return true;
      }

      return false;
    }
    /* istanbul ignore next  */


    return true;
  }

  setDisplayRatio(ratio, maxDisplayRatio = Infinity, updateDisplay = true) {
    if (typeof ratio === 'string') {
      if (ratio.endsWith('rw')) {
        ratio = parseFloat(ratio);
      } else if (ratio.endsWith('vw')) {
        ratio = parseFloat(ratio) * this.viewport[0] / this.resolution[0];
      } else if (ratio === 'auto') {
        if (typeof window !== 'undefined' && window.devicePixelRatio) {
          ratio = window.devicePixelRatio * this.viewport[0] / this.resolution[0];
        } else {
          ratio = this.viewport[0] / this.resolution[0];
        }
      } else {
        ratio = parseFloat(ratio);
      }
    }

    if (Number.isFinite(ratio)) {
      ratio = Math.min(ratio, maxDisplayRatio);
    } else {
      ratio = 1;
    }

    this[_displayRatio] = ratio;
    if (updateDisplay) this.updateDisplay();
    this.dispatchEvent('ratioChange', {
      target: this
    }, true, true);
  }

  get displayRatio() {
    return this[_displayRatio];
  }

  updateDisplay() {
    const ratio = this[_displayRatio];
    const resolution = this[_resolution];
    const [width, height, offsetLeft, offsetTop] = resolution.map(r => r * ratio);
    const outputCanvas = this.outputContext.canvas;
    outputCanvas.width = width;
    outputCanvas.height = height; // this.outputContext.clearRect(0, 0, width, height);

    if (offsetLeft || offsetTop) {
      this.outputContext.translate(offsetLeft, offsetTop);
    }

    this.beforeDrawTransform = () => {
      this.outputContext.scale(ratio, ratio);
    };

    this.childNodes.forEach(child => {
      delete child.lastRenderBox;
      child.forceUpdate();
    });
  }

  set resolution(resolution) {
    this[_resolution] = [...resolution, 0, 0].slice(0, 4);

    if (this[_displayRatio] == null) {
      if (this.parent && this.parent.displayRatio) {
        this.setDisplayRatio(this.parent.displayRatio, this.parent.maxDisplayRatio, false);
      } else {
        this[_displayRatio] = 1.0;
      }
    }

    this.updateDisplay();
    this.dispatchEvent('resolutionChange', {
      target: this
    }, true, true);
  }

  toLocalPos(x, y) {
    const resolution = this.resolution,
          viewport = this.viewport;
    x = x * resolution[0] / viewport[0] - resolution[2];
    y = y * resolution[1] / viewport[1] - resolution[3];
    return [x, y];
  }

  toGlobalPos(x, y) {
    const resolution = this.resolution,
          viewport = this.viewport;
    x = x * viewport[0] / resolution[0] + resolution[2];
    y = y * viewport[1] / resolution[1] + resolution[3];
    return [x, y];
  }

  clearContext(context = this.outputContext) {
    if (context.canvas) {
      const {
        width,
        height
      } = context.canvas;
      const resolution = this.resolution;
      context.clearRect(-(resolution[2] | 0), -(resolution[3] | 0), width, height);
    }
  }

  async takeSnapshot() {
    await this.prepareRender();
    const snapshotCanvas = this.canvas.cloneNode(true),
          context = snapshotCanvas.getContext('2d');
    context.drawImage(this.canvas, 0, 0);
    const children = this.childNodes.map(child => child.serialize());
    return {
      context,
      children
    };
  }

  putSnapshot(snapshot) {
    const outputContext = this.outputContext;
    this.clearContext(outputContext);
    outputContext.drawImage(snapshot.context.canvas, 0, 0);
    snapshot.children.forEach(child => {
      const node = Object(_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["createNode"])(child.nodeType);

      if (child.id) {
        node.id = child.id;
      }

      node.attr(JSON.parse(child.attrs));
      this.appendChild(node, false);
    });

    for (let i = 0; i < this.childNodes.length; i++) {
      const child = this.childNodes[i];
      child.dispatchEvent('update', {
        target: child,
        context: child.context,
        renderBox: child.renderBox,
        lastRenderBox: child.lastRenderBox
      }, true);
      child.lastRenderBox = child.renderBox;
    }

    return this.childNodes;
  }

  get zIndex() {
    return this.attr('zIndex');
  }

  set zIndex(zIndex) {
    this.attr('zIndex', zIndex);
    this.canvas.style.zIndex = zIndex;
    this.parent.layers.reverse();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ExLayer);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(100);
/* harmony import */ var _platform_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(131);





const {
  setDeprecation,
  sortOrderedSprites
} = _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["utils"];

const _layerMap = Symbol('layerMap'),
      _zOrder = Symbol('zOrder'),
      _layers = Symbol('layers'),
      _snapshot = Symbol('snapshot'),
      _viewport = Symbol('viewport'),
      _resolution = Symbol('resolution'),
      _resizeHandler = Symbol('resizeHandler'),
      _attrs = Symbol('attrs'),
      _events = Symbol('events'),
      _subscribe = Symbol('subscribe'),
      _displayRatio = Symbol('displayRatio');

class Scene extends _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["BaseNode"] {
  constructor(container, options = {}) {
    super();
    container = Object(_platform__WEBPACK_IMPORTED_MODULE_3__["getContainer"])(container);
    this.container = container;
    container.scene_ = this;
    /* istanbul ignore if */

    if (arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */

      options = {
        viewport: [arguments[1], arguments[2]]
      };
      /* eslint-enabel prefer-rest-params */
    }

    this[_zOrder] = 0;
    this[_layerMap] = {};
    this[_layers] = [];
    this[_snapshot] = Object(_platform__WEBPACK_IMPORTED_MODULE_3__["createCanvas"])();
    const viewport = options.viewport || ['', ''];
    this.viewport = viewport; // scale, width, height, top, bottom, left, right
    // width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend

    this.stickMode = options.stickMode || 'scale';
    this.stickExtend = !!options.stickExtend;
    this.stickOffset = [0, 0];
    this.resolution = options.resolution || [...this.viewport];
    this.maxDisplayRatio = options.maxDisplayRatio || Infinity;
    this.displayRatio = options.displayRatio || 1.0; // d3-friendly

    this.namespaceURI = 'http://spritejs.org/scene';
    const that = this;
    Object.defineProperty(this, 'ownerDocument', {
      get() {
        return {
          createElementNS(uri, name) {
            return that.layer(name);
          },

          documentElement: typeof document !== 'undefined' ? document : null
        };
      }

    });
    this[_events] = new Set();
    const events = ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove', 'click', 'dblclick'];
    events.forEach(event => this.delegateEvent(event));
    /* istanbul ignore next */

    container.addEventListener('DOMNodeRemovedFromDocument', () => {
      if (this[_resizeHandler]) {
        window.removeEventListener('resize', this[_resizeHandler]);
        delete this[_resizeHandler];
      }
    });
    this[_attrs] = new Set(['resolution', 'viewport', 'stickMode', 'stickExtend', 'subscribe', 'displayRatio', 'maxDisplayRatio']);
    this[_subscribe] = null;
  } // unit vw、rw (default 1rw ?)


  set displayRatio(value) {
    const oldRatio = this[_displayRatio];
    this[_displayRatio] = value;

    if (oldRatio != null && oldRatio !== value) {
      const layers = this[_layers];
      layers.forEach(layer => {
        if (layer.canvas) {
          layer.setDisplayRatio(this[_displayRatio], this.maxDisplayRatio);
        }
      });
      this.dispatchEvent('ratioChange', {
        target: this,
        layers
      });
    }

    return this;
  }

  get displayRatio() {
    return this[_displayRatio];
  }

  get subscribe() {
    return this[_subscribe];
  }

  set subscribe(events) {
    this[_subscribe] = events;
    events.forEach(event => this.delegateEvent(event));
  }

  get width() {
    return this.viewport[0];
  }

  get height() {
    return this.viewport[1];
  }

  get children() {
    return this.childNodes.filter(layer => layer.canvas);
  }

  get childNodes() {
    return Object.values(this[_layerMap]);
  }

  get sortedChildNodes() {
    return this[_layers];
  }

  insertBefore(newchild, refchild) {
    if (refchild == null) {
      return this.appendLayer(newchild);
    }

    if (!this.hasLayer(refchild)) {
      throw new Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');
    }

    this.appendLayer(newchild, false);
    this.container.insertBefore(newchild.canvas || newchild, refchild.canvas || refchild);
    const els = this.container.children;
    [...els].forEach((el, i) => {
      const id = el.dataset.layerId;

      if (id) {
        const layer = this.layer(id);
        delete layer.zOrder;
        Object.defineProperty(layer, 'zOrder', {
          value: i,
          writable: false,
          configurable: true
        });
      }
    });
    this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
  }

  replaceChild(newLayer, oldLayer) {
    this.insertBefore(newLayer, oldLayer);
    this.removeChild(oldLayer);
  }

  appendChild(layer) {
    return this.appendLayer(layer);
  }

  removeChild(layer) {
    return this.removeLayer(layer);
  }

  get layerViewport() {
    const [rw, rh] = this.resolution,
          [vw, vh] = this.viewport,
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;
    let width = vw,
        height = vh;

    if (!stickExtend) {
      if (stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
        height = vw * rh / rw;
      } else if (stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
        width = vh * rw / rh;
      }
    }

    return [width, height];
  }

  updateViewport(layer) {
    const [width, height] = this.layerViewport,
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;
    let layers = layer ? [layer] : this[_layers];
    layers = layers.filter(layer => {
      const canvas = layer.canvas;
      if (!canvas) return false; // ignore not canvas layer

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      Object.assign(canvas.style, {
        top: '',
        right: '',
        bottom: '',
        left: '',
        transform: ''
      });

      if (!stickExtend && (stickMode === 'width' || stickMode === 'height')) {
        canvas.style.top = '50%';
        canvas.style.left = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
        canvas.style.webkitTransform = 'translate(-50%, -50%)';
      } else if (!stickExtend && (stickMode === 'right' || stickMode === 'bottom')) {
        canvas.style.right = '0';
        canvas.style.bottom = '0';
      } else {
        canvas.style.top = '0';
        canvas.style.left = '0';
      }

      if (stickExtend && !layer._userInitResolution) {
        layer.resolution = this.layerResolution;
      }

      return true;
    });
    this.dispatchEvent('viewportChange', {
      target: this,
      layers
    });
    return this;
  }

  get distortion()
  /* istanbul ignore next */
  {
    if (this.stickMode !== 'scale') {
      return 1.0;
    }

    const [rw, rh] = this.resolution,
          [vw, vh] = this.viewport;
    const dw = rw === 'flex' ? 2 : rw / vw,
          dh = rh === 'flex' ? 2 : rh / vh;
    return dw / dh;
  }

  set viewport(viewport) {
    if (!Array.isArray(viewport)) viewport = [viewport, viewport];
    const [width, height] = viewport;
    this[_viewport] = [width, height];
    /* istanbul ignore next */

    if (width === 'auto' || height === 'auto') {
      if (!this[_resizeHandler]) {
        this[_resizeHandler] = () => {
          this.updateViewport();

          if (this.resolution[0] === 'flex' || this.resolution[1] === 'flex') {
            this.updateResolution();
          }
        };

        window.addEventListener('resize', this[_resizeHandler]);
      }
    } else if (this[_resizeHandler]) {
      window.removeEventListener('resize', this[_resizeHandler]);
      delete this[_resizeHandler];
    }

    if (this[_layers].length) {
      this.updateViewport();
    }
  }

  get viewport() {
    let [width, height] = this[_viewport];

    if (width === '' || Number.isNaN(Number(width))) {
      width = this.container.clientWidth;
    }

    if (height === '' || Number.isNaN(Number(height))) {
      height = this.container.clientHeight;
    }

    return [width, height];
  }

  get layerResolution() {
    let [rw, rh] = this.resolution;
    const [vw, vh] = this.viewport,
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

    if (rw === 'flex') {
      rw = 2 * vw;
    }

    if (rh === 'flex') {
      rh = 2 * vh;
    }

    let width = rw,
        height = rh,
        offsetTop = 0,
        offsetLeft = 0;

    if (stickExtend) {
      if (stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
        const vrh = rw * vh / vw;
        height = vrh;

        if (stickMode === 'width') {
          offsetTop = Math.round((vrh - rh) / 2);
        } else if (stickMode === 'bottom') {
          offsetTop = vrh - rh;
        }
      } else if (stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
        const vrw = rh * vw / vh;
        width = vrw;

        if (stickMode === 'height') {
          offsetLeft = Math.round((vrw - rw) / 2);
        } else if (stickMode === 'right') {
          offsetLeft = vrw - rw;
        }
      }
    }

    this.stickOffset = [offsetLeft, offsetTop];
    return [width, height, offsetLeft, offsetTop];
  }

  updateResolution(layer) {
    const layers = layer ? [layer] : this[_layers];
    layers.forEach(layer => {
      if (layer.canvas && !layer._userInitResolution) {
        layer.resolution = this.layerResolution;
      }
    });
    this.dispatchEvent('resolutionChange', {
      target: this,
      layers
    });
    return this;
  }

  set resolution(resolution) {
    if (!Array.isArray(resolution)) {
      resolution = [resolution, resolution];
    }

    const [width, height] = resolution;
    this[_resolution] = [width, height];
    this.updateResolution();
  }

  get resolution() {
    return this[_resolution];
  }

  setViewport(width, height) {
    this.viewport = [width, height];
    return this;
  }

  setResolution(width, height) {
    this.resolution = [width, height];
    return this;
  }

  delegateEvent(event, receiver = this.container) {
    if (typeof event === 'string') {
      event = {
        type: event,
        passive: true
      };
    }

    if (this[_events].has(event.type)) {
      return false;
    }

    this[_events].add(event.type);

    const {
      type,
      passive
    } = event;
    receiver.addEventListener(type, e => {
      const layers = this[_layers];
      const evtArgs = {
        originalEvent: e,
        type,

        stopDispatch() {
          this.terminated = true;
        }

      }; // mouse event layerX, layerY value change while browser scaled.

      let x, y;
      const originalCoordinates = [];
      /* istanbul ignore else */

      if (e instanceof CustomEvent) {
        Object.assign(evtArgs, e.detail);

        if (evtArgs.x != null && evtArgs.y != null) {
          x = evtArgs.x;
          y = evtArgs.y;
          originalCoordinates.push({
            x: null,
            y: null
          });
        } else if (evtArgs.originalX != null && evtArgs.originalY != null) {
          originalCoordinates.push({
            x: evtArgs.originalX,
            y: evtArgs.originalY
          });
        }
      } else {
        const {
          left,
          top
        } = e.target.getBoundingClientRect();
        const pointers = e.changedTouches || [e];

        for (let i = 0; i < pointers.length; i++) {
          const pointer = pointers[i];
          const identifier = pointer.identifier;
          const {
            clientX,
            clientY
          } = pointer;

          if (clientX != null && clientY != null) {
            originalCoordinates.push({
              x: Math.round((clientX | 0) - left),
              y: Math.round((clientY | 0) - top),
              identifier
            });
          }
        }
      }

      if (originalCoordinates.length <= 0) originalCoordinates.push({
        x,
        y
      });
      originalCoordinates.forEach(originalCoordinate => {
        for (let i = 0; i < layers.length; i++) {
          const layer = layers[i];

          if (layer.handleEvent) {
            if (originalCoordinate.x != null && originalCoordinate.y != null) {
              [x, y] = layer.toLocalPos(originalCoordinate.x, originalCoordinate.y);
            } else if (x != null && y != null) {
              [originalCoordinate.x, originalCoordinate.y] = layer.toGlobalPos(x, y);
            }

            const evt = Object.assign({}, evtArgs, {
              layerX: x,
              layerY: y,
              originalX: originalCoordinate.x,
              originalY: originalCoordinate.y,
              x,
              y,
              identifier: originalCoordinate.identifier
            });
            layer.dispatchEvent(type, evt);
            if (evt.terminated) break;
          }
        }
      });
    }, {
      passive
    });
    return true;
  }

  dispatchEvent(type, evt = {}) {
    const container = this.container;
    container.dispatchEvent(new CustomEvent(type, {
      detail: evt
    }));
    super.dispatchEvent(type, evt, true);
  }

  async preload(...resources) {
    const ret = [],
          tasks = [];

    for (let i = 0; i < resources.length; i++) {
      const res = resources[i];
      let task;

      if (typeof res === 'string') {
        task = _resource__WEBPACK_IMPORTED_MODULE_2__["default"].loadTexture(res);
      } else if (Array.isArray(res)) {
        task = _resource__WEBPACK_IMPORTED_MODULE_2__["default"].loadFrames(...res);
      } else {
        const {
          id,
          src
        } = res;
        task = _resource__WEBPACK_IMPORTED_MODULE_2__["default"].loadTexture({
          id,
          src
        });
      }
      /* istanbul ignore if  */


      if (!(task instanceof Promise)) {
        task = Promise.resolve(task);
      }

      tasks.push(task.then(r => {
        ret.push(r);
        this.dispatchEvent('preload', {
          target: this,
          current: r,
          loaded: ret,
          resources
        });
      }));
    }

    await Promise.all(tasks);
    return ret;
  }

  layer(id = 'default', opts = {
    handleEvent: true
  }) {
    if (!this.hasLayer(id)) {
      /* istanbul ignore if  */
      if (typeof window !== 'undefined' && window.getComputedStyle) {
        const pos = window.getComputedStyle && window.getComputedStyle(this.container).position;

        if (this.container.style && pos !== 'absolute' && pos !== 'fixed') {
          this.container.style.position = 'relative';
        }
      }

      this.appendLayer(new _layer__WEBPACK_IMPORTED_MODULE_1__["default"](id, opts));
    }

    return this[_layerMap][id];
  }

  get layers() {
    return this[_layers];
  }

  appendLayer(layer, appendDOMElement = true) {
    if (!(layer instanceof _layer__WEBPACK_IMPORTED_MODULE_1__["default"])) {
      // append dom element
      layer.id = layer.id || `_layer${Math.random()}`;

      if (!layer.dataset) {
        layer.dataset = {};
      }

      layer.dataset.layerId = layer.id; // fixed layer replacer

      layer.connect = (parent, zOrder) => {
        layer.parent = parent;
        Object.defineProperty(layer, 'zOrder', {
          value: zOrder,
          writable: false,
          configurable: true
        });
      };

      layer.disconnect = parent => {
        delete layer.zOrder;
      };
    }

    const id = layer.id;

    if (this.hasLayer(id) && this[_layerMap][id] !== layer) {
      throw new Error(`layer ${id} already exists! remove first...`);
    }

    this.removeLayer(layer);
    this[_layerMap][id] = layer;
    layer.connect(this, this[_zOrder]++);
    this.updateViewport(layer); // layer.setDisplayRatio(this.displayRatio, this.maxDisplayRatio, false);

    if (!this.stickExtend && !layer._userInitResolution) {
      layer.resolution = this.layerResolution;
    }

    this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
    /* istanbul ignore if  */

    if (_platform_devtools__WEBPACK_IMPORTED_MODULE_4__["setDebugToolsObserver"] && layer.id !== '__debuglayer__') {
      Object(_platform_devtools__WEBPACK_IMPORTED_MODULE_4__["setDebugToolsObserver"])(this, layer);
    }

    if (appendDOMElement) this.container.appendChild(layer.canvas || layer);
    return layer;
  }

  removeLayer(layer) {
    if (typeof layer === 'string') {
      layer = this[_layerMap][layer];
    }

    if (this.hasLayer(layer)) {
      layer.disconnect(this);
      this.container.removeChild(layer.canvas || layer);
      delete this[_layerMap][layer.id];
      this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
      /* istanbul ignore if  */

      if (_platform_devtools__WEBPACK_IMPORTED_MODULE_4__["removeDebugToolsObserver"]) {
        Object(_platform_devtools__WEBPACK_IMPORTED_MODULE_4__["removeDebugToolsObserver"])(layer);
      }

      return layer;
    }

    return null;
  }

  hasLayer(layer) {
    let layerID;

    if (typeof layer === 'string') {
      layerID = layer;
      layer = this[_layerMap][layer];
    } else {
      layerID = layer.id;
    }

    return layer && this[_layerMap][layerID] === layer;
  }

  querySelector(selector) {
    return Object(_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["querySelector"])(selector, this);
  }

  querySelectorAll(selector) {
    return Object(_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])(selector, this);
  }

  async snapshot() {
    const [width, height] = this.viewport;
    const canvas = this[_snapshot];
    canvas.width = width;
    canvas.height = height;
    const [sw, sh] = this.layerViewport;

    const layers = this[_layers].slice(0).reverse();

    const ctx = canvas.getContext('2d');
    const renderTasks = layers.map(layer => layer.prepareRender());
    await Promise.all(renderTasks);
    const rect = [0, 0, sw, sh];

    if (!this.stickExtend) {
      if (this.stickMode === 'width' || this.stickMode === 'height') {
        rect[0] = (width - sw) / 2;
        rect[1] = (height - sh) / 2;
      } else if (this.stickMode === 'bottom' || this.stickMode === 'right') {
        rect[0] = width - sw;
        rect[1] = height - sh;
      }
    }

    layers.forEach(layer => {
      if (layer.canvas) {
        ctx.drawImage(layer.canvas, ...rect);
      }
    });
    return canvas;
  }

}

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return _debugger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDebugToolsObserver", function() { return setDebugToolsObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDebugToolsObserver", function() { return removeDebugToolsObserver; });
const _debugger = null;
const setDebugToolsObserver = null;
const removeDebugToolsObserver = null;

/***/ })
/******/ ]);

export const _debugger = spritejs['_debugger'];
export const version = spritejs['version'];
export const math = spritejs['math'];
export const utils = spritejs['utils'];
export const use = spritejs['use'];
export const querySelector = spritejs['querySelector'];
export const querySelectorAll = spritejs['querySelectorAll'];
export const stylesheet = spritejs['stylesheet'];
export const BaseNode = spritejs['BaseNode'];
export const BaseSprite = spritejs['BaseSprite'];
export const Sprite = spritejs['Sprite'];
export const Label = spritejs['Label'];
export const Path = spritejs['Path'];
export const Group = spritejs['Group'];
export const Layer = spritejs['Layer'];
export const Scene = spritejs['Scene'];
export const Paper2D = spritejs['Paper2D'];
export const registerNodeType = spritejs['registerNodeType'];
export const isValidNodeType = spritejs['isValidNodeType'];
export const createNode = spritejs['createNode'];
export const createElement = spritejs['createElement'];
export const Color = spritejs['Color'];
export const Resource = spritejs['Resource'];
export const Effects = spritejs['Effects'];
export const Easings = spritejs['Easings'];
export const Timeline = spritejs['Timeline'];
