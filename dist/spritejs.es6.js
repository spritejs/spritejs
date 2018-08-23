module.exports =
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paper2D", function() { return Paper2D; });
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "math", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["math"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Path"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["createNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Easings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Timeline"]; });

/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _sprite__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _resource__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return _platform__WEBPACK_IMPORTED_MODULE_6__["_debugger"]; });










const { setDeprecation } = sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"];

if (_platform__WEBPACK_IMPORTED_MODULE_6__["shim"]) {
  Object(_platform__WEBPACK_IMPORTED_MODULE_6__["shim"])();
}

Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"])('layer', _layer__WEBPACK_IMPORTED_MODULE_3__["default"], true);

function Paper2D(...args) {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.');
  return new _scene__WEBPACK_IMPORTED_MODULE_4__["default"](...args);
}

const version = '2.7.9';



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

/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgPath", function() { return svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return sprite_utils__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "math", function() { return sprite_math__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _basesprite__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _sprite__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _basenode__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _path__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Batch", function() { return _batch__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_12__["registerNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_12__["createNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_12__["createElement"]; });

/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36);
















sprite_utils__WEBPACK_IMPORTED_MODULE_2__["findColor"] = _helpers_render__WEBPACK_IMPORTED_MODULE_13__["findColor"];
sprite_utils__WEBPACK_IMPORTED_MODULE_2__["cacheContextPool"] = _helpers_render__WEBPACK_IMPORTED_MODULE_13__["cacheContextPool"];

const Color = sprite_utils__WEBPACK_IMPORTED_MODULE_2__["Color"];



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_timeline__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return _effect__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return _easing__WEBPACK_IMPORTED_MODULE_2__["Easings"]; });

/* harmony import */ var _animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return _animator__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


const defaultOptions = {
  originTime: 0,
  playbackRate: 1.0
};

const _timeMark = Symbol('timeMark'),
      _playbackRate = Symbol('playbackRate'),
      _timers = Symbol('timers'),
      _originTime = Symbol('originTime'),
      _setTimer = Symbol('setTimer'),
      _parent = Symbol('parent'),
      _createTime = Symbol('createTime');

let Timeline = class Timeline {
  constructor(options, parent) {
    if (options instanceof Timeline) {
      parent = options;
      options = {};
    }

    options = Object.assign({}, defaultOptions, options);

    if (parent) {
      this[_parent] = parent;
    }

    // timeMark records the reference points on timeline
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

    this[_createTime] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nowtime"])();

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

  markTime({ time = this.currentTime, entropy = this.entropy, playbackRate = this.playbackRate } = {}) {
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
    const { localTime, globalTime } = this.lastTimeMark;
    return localTime + (this.globalTime - globalTime) * this.playbackRate;
  }

  set currentTime(time) {
    const from = this.currentTime,
          to = time,
          timers = this[_timers];

    this.markTime({ time });[...timers].forEach(([id, timer]) => {
      const { isEntropy, delay, heading } = timer.time,
            { handler, startTime } = timer;

      if (!isEntropy) {
        const endTime = startTime + delay;
        if (delay === 0 || heading !== false && (to - from) * delay < 0 || from < endTime && endTime < to || from > endTime && endTime > to) {
          handler();
          this.clearTimeout(id);
        }
      } else if (delay === 0) {
        handler();
        this.clearTimeout(id);
      }
    });
    this.updateTimers();
  }

  // Both currentTime and entropy should be influenced by playbackRate.
  // If current playbackRate is negative, the currentTime should go backwards
  // while the entropy remain to go forwards.
  // Both of the initial values is set to -originTime
  get entropy() {
    const { entropy, globalEntropy } = this.lastTimeMark;
    return entropy + Math.abs((this.globalEntropy - globalEntropy) * this.playbackRate);
  }

  get globalEntropy() {
    return this[_parent] ? this[_parent].entropy : Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nowtime"])() - this[_createTime];
  }

  get globalTime() {
    if (this[_parent]) {
      return this[_parent].currentTime;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nowtime"])();
  }

  // change entropy will NOT cause currentTime changing but may influence the pass
  // and the future of the timeline. (It may change the result of seek***Time)
  // While entropy is set, all the marks behind will be droped
  set entropy(entropy) {
    if (this.entropy > entropy) {
      const idx = this.seekTimeMark(entropy);
      this[_timeMark].length = idx + 1;
    }
    this.markTime({ entropy });
    this.updateTimers();
  }

  fork(options) {
    return new Timeline(options, this);
  }

  seekGlobalTime(seekEntropy) {
    const idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];

    const { entropy, playbackRate, globalTime } = timeMark;

    return globalTime + (seekEntropy - entropy) / Math.abs(playbackRate);
  }

  seekLocalTime(seekEntropy) {
    const idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];

    const { localTime, entropy, playbackRate } = timeMark;

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
      }if (entropy < timeMark[m].entropy) {
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
      this.markTime({ playbackRate: rate });
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
    const timers = this[_timers];[...timers.keys()].forEach(id => {
      this.clearTimeout(id);
    });
  }

  /*
    setTimeout(func, {delay: 100, isEntropy: true})
    setTimeout(func, {entropy: 100})
    setTimeout(func, 100})
   */
  setTimeout(handler, time = { delay: 0 }) {
    return this[_setTimer](handler, time);
  }

  setInterval(handler, time = { delay: 0 }) {
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

    const heading = time.heading;
    // console.log(heading, parent, delay)
    if (!parent && heading === false && delay < 0) {
      delay = Infinity;
    }

    // if playbackRate is zero, delay will be infinity.
    // For wxapp bugs, cannot use Number.isFinite yet.
    if (isFinite(delay) || parent) {
      // eslint-disable-line no-restricted-globals
      delay = Math.ceil(delay);
      if (globalTimeout !== setTimeout) {
        delay = { delay, heading };
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
};


/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowtime", function() { return nowtime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDelay", function() { return formatDelay; });
function nowtime() {
  if (typeof performance !== 'undefined' && performance.now) {
    return performance.now();
  }if (typeof process !== 'undefined' && process.hrtime) {
    const [s, ns] = process.hrtime();
    return s * 1e3 + ns * 1e-6;
  }
  return Date.now ? Date.now() : new Date().getTime();
}

/*
  delay = 100 -> delay = {delay: 100}
  delay = {entropy: 100} -> delay = {delay: 100, isEntropy: true}
 */
function formatDelay(delay) {
  if (typeof delay === 'number') {
    delay = { delay };
  } else if ('entropy' in delay) {
    delay = { delay: delay.entropy, isEntropy: true };
  }
  return delay;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return Easings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEasing", function() { return parseEasing; });
const BezierEasing = __webpack_require__(8);
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
      const { offset } = frames[i];
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var sprite_timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);





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

let _default = class _default {
  constructor(initState, keyframes, timing) {
    if (Array.isArray(initState)) {
      // 如果 initState 缺省，默认 keyframes 的第一帧为 initState
      [initState, keyframes, timing] = [initState[0], initState, keyframes];
    }

    if (typeof timing === 'number') {
      timing = { duration: timing };
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
    });

    // 补齐参数
    this[_keyframes] = this[_keyframes].map(frame => {
      return Object.assign({}, this[_initState], frame);
    });

    if (this[_keyframes][0].offset !== 0) {
      // 要补第一帧
      this[_keyframes].unshift(Object.assign({}, this[_initState], { offset: 0 }));
    }
    if (lastFrame.offset < 1) {
      // 要补最后一帧
      this[_keyframes].push(Object.assign({}, lastFrame, { offset: 1 }));
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
          { iterations, duration, endDelay } = this[_timing];
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

    const { duration, iterations } = this[_timing];
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
          { fill } = this[_timing];

    if (playState === 'idle') {
      return initState;
    }

    const { currentTime } = this.timeline,
          keyframes = this[_keyframes].slice(0);

    const { p, inverted } = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getProgress"])(this.timeline, this[_timing], this.progress);

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
        }, { delay: -this.timeline.currentTime, heading: false });
      } else {
        this[_readyDefer].timerID = this.timeline.setTimeout(() => {
          this[_readyDefer].resolve();
          delete this[_readyDefer];
        }, { delay: 0, isEntropy: true });
      }
    }
  }

  [_activeFinishTimer]() {
    const { duration, iterations, endDelay } = this[_timing];
    const delay = Math.ceil(duration * iterations + endDelay - this.timeline.currentTime) + 1;
    if (this[_finishedDefer] && !this[_finishedDefer].timerID) {
      this[_finishedDefer].timerID = this.timeline.setTimeout(() => {
        this[_finishedDefer].resolve();
        this[_removeDefer](_readyDefer);
        this[_removeDefer](_finishedDefer);
      }, { delay, heading: false });
      this[_finishedDefer].reverseTimerID = this.timeline.setTimeout(() => {
        this[_finishedDefer].resolve();
        this[_removeDefer](_readyDefer);
        this[_removeDefer](_finishedDefer);
        this.timeline = null;
      }, { delay: -this[_timing].delay - 1, heading: false });
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
      const { delay, playbackRate, timeline } = this[_timing];
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
          { timeline } = this;

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
    this.timeline.currentTime = Infinity / this.playbackRate;
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
};



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "periodicity", function() { return periodicity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFramesOffset", function() { return calculateFramesOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgress", function() { return getProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentFrame", function() { return getCurrentFrame; });
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);




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
      const hasEasing = keyframes[i].easing != null;
      // 如果中间某个属性没有了，需要从前一帧复制过来
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
  const { currentTime } = timeline,
        { direction, duration } = timing;
  let inverted = false;
  if (direction === 'reverse') {
    p = 1 - p;
    inverted = true;
  } else if (direction === 'alternate' || direction === 'alternate-reverse') {
    let period = Math.floor(currentTime / duration);

    if (p === 1) period--;
    // period = Math.max(0, period)

    if (period % 2 ^ direction === 'alternate-reverse') {
      p = 1 - p;
      inverted = true;
    }
  }
  return { p, inverted };
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
  const { easing, effect } = timing;

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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


const parse = __webpack_require__(16);
const abs = __webpack_require__(17);
const normalize = __webpack_require__(18);
const isSvgPath = __webpack_require__(20);

const _path = Symbol('path');
const _bounds = Symbol('bounds');
const _savedPaths = Symbol('savedPaths');
const _renderProps = Symbol('renderProps');
const _beginPath = Symbol('beginPath');

let SvgPath = class SvgPath {
  constructor(d) {
    if (!isSvgPath(d)) {
      throw new Error('Not an SVG path!');
    }

    const path = normalize(abs(parse(d)));

    this[_path] = path;

    this[_bounds] = null;
    this[_savedPaths] = [];
    this[_renderProps] = {};
    this[_beginPath] = false;
  }

  save() {
    this[_savedPaths].push({ path: this[_path],
      bounds: this[_bounds],
      renderProps: Object.assign({}, this[_renderProps]) });
    return this;
  }

  restore() {
    if (this[_savedPaths].length) {
      const { path, bounds, renderProps } = this[_savedPaths].pop();
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
    return this[_path].map(p => {
      const [c, ...points] = p;
      return c + points.join();
    }).join('');
  }

  get path() {
    return this[_path];
  }

  isPointInPath(x, y) {
    return Object(_platform__WEBPACK_IMPORTED_MODULE_1__["isPointInPath"])(this, x, y);
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
};


/* harmony default export */ __webpack_exports__["default"] = (SvgPath);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _vector__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let Vector = class Vector {
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
    const { x, y, z } = this;
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
};


/* harmony default export */ __webpack_exports__["default"] = (Vector);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointAtLength", function() { return getPointAtLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalLength", function() { return getTotalLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInPath", function() { return isPointInPath; });
function createSvgPath(d) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  return path;
}

function getPointAtLength(d, len) {
  const path = createSvgPath(d);
  const { x, y } = path.getPointAtLength(len);
  return [x, y];
}

function getTotalLength(d, len) {
  const path = createSvgPath(d);
  return path.getTotalLength(len);
}

function isPointInPath({ d }, x, y) {
  const path = new Path2D(d);
  const context = document.createElement('canvas').getContext('2d');
  return context.isPointInPath(path, x, y);
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = parse;

/**
 * expected argument lengths
 * @type {Object}
 */
/* eslint-disable */
var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0

	/**
  * segment pattern
  * @type {RegExp}
  */

};var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

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
		args = parseValues(args);

		// overloaded moveTo
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
/* 17 */
/***/ (function(module, exports) {

module.exports = absolutize;

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
		var command = type.toUpperCase();

		// is relative
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
		}

		// update cursor state
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = normalize;

const a2c = __webpack_require__(19);

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
        var curves = a2c(x, y, seg[6], seg[7], seg[4], seg[5], seg[1], seg[2], seg[3]);

        if (!curves.length) continue;

        curves = curves.map(curve => {
          const [x0, y0, x1, y1, x2, y2, x, y] = curve;
          return { x1, y1, x2, y2, x, y };
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
    }

    // update state
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
/* 19 */
/***/ (function(module, exports) {

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
  let dot = ux * vx + uy * vy;

  // Add this to work with arbitrary vectors:
  // dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);

  // rounding errors, e.g. -1.0000000000000002 can screw up this
  if (dot > 1.0) {
    dot = 1.0;
  }
  if (dot < -1.0) {
    dot = -1.0;
  }

  return sign * Math.acos(dot);
}

// Convert from endpoint to center parameterization,
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
  const y1p_sq = y1p * y1p;

  // Step 2.
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
  const cyp = radicant * -ry / rx * x1p;

  // Step 3.
  //
  // Transform back to get centre coordinates (cx, cy) in the original
  // coordinate system.
  //
  const cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  const cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2;

  // Step 4.
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
}

//
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

module.exports = function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  const sin_phi = Math.sin(phi * TAU / 360);
  const cos_phi = Math.cos(phi * TAU / 360);

  // Make sure radii are valid
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
  }

  // Compensate out-of-range radii
  //
  rx = Math.abs(rx);
  ry = Math.abs(ry);

  const lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }

  // Get center parameters (cx, cy, theta1, delta_theta)
  //
  const cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);

  const result = [];
  let theta1 = cc[2];
  let delta_theta = cc[3];

  // Split an arc to multiple segments, so each segment
  // will be less than τ/4 (= 90°)
  //
  const segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;

  for (let i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  }

  // We have a bezier approximation of a unit circle,
  // now need to transform back to the original ellipse
  //
  return result.map(curve => {
    for (let i = 0; i < curve.length; i += 2) {
      let x = curve[i + 0];
      let y = curve[i + 1];

      // scale
      x *= rx;
      y *= ry;

      // rotate
      const xp = cos_phi * x - sin_phi * y;
      const yp = sin_phi * x + cos_phi * y;

      // translate
      curve[i + 0] = xp + cc[0];
      curve[i + 1] = yp + cc[1];
    }

    return curve;
  });
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {


module.exports = function isPath(str) {
  if (typeof str !== 'string') return false;

  str = str.trim();

  // https://www.w3.org/TR/SVG/paths.html#PathDataBNF
  if (/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(str) && /[\dz]$/i.test(str) && str.length > 4) return true;

  return false;
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["notice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["oneOrTwoValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["praseString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseStringInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseStringFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["fourValuesShortCut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseStringTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxIntersect", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["boxIntersect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxToRect", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["boxToRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["boxEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxUnion", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["boxUnion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectToBox", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["rectToBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["rectVertices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["attr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["flow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["setDeprecation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["deprecate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveValue", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["resolveValue"]; });







/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return oneOrTwoValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return praseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return parseStringInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return parseStringFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return parseColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return fourValuesShortCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return parseStringTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxIntersect", function() { return boxIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxToRect", function() { return boxToRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxEqual", function() { return boxEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxUnion", function() { return boxUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectToBox", function() { return rectToBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return rectVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return appendUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return sortOrderedSprites; });
const colorString = __webpack_require__(23);

let Color = class Color {
  constructor(color) {
    if (typeof color === 'string') {
      const { model, value } = colorString.get(color || 'rgba(0,0,0,0)');
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
};




const parseColor = color => {
  return new Color(color);
};

function parseColorString(color) {
  if (color && typeof color === 'string') {
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
  if (typeof str === 'string') {
    const values = str.split(/[\s,]+/g);
    return values.map(v => {
      return parser ? parser(v) : v;
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
  return parseValuesString(str, parseFloat);
}

function oneOrTwoValues(val) {
  if (!Array.isArray(val)) {
    return [val, val];
  }if (val.length === 1) {
    return [val[0], val[0]];
  }
  return val;
}

function fourValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val];
  }if (val.length === 1) {
    return [val[0], val[0], val[0], val[0]];
  }if (val.length === 2) {
    return [val[0], val[1], val[0], val[1]];
  }
  return [...val, 0, 0, 0, 0].slice(0, 4);
}

function boxIntersect(box1, box2) {
  // left, top, right, buttom
  const [l1, t1, r1, b1] = [box1[0], box1[1], box1[2], box1[3]],
        [l2, t2, r2, b2] = [box2[0], box2[1], box2[2], box2[3]];

  const t = Math.max(t1, t2),
        r = Math.min(r1, r2),
        b = Math.min(b1, b2),
        l = Math.max(l1, l2);

  if (b >= t && r >= l) {
    return [l, t, r, b];
  }
  return null;
}

function boxToRect(box) {
  return [box[0], box[1], box[2] - box[0], box[3] - box[1]];
}

function boxEqual(box1, box2) {
  return box1[0] === box2[0] && box1[1] === box2[1] && box1[2] === box2[2] && box1[3] === box2[3];
}

function rectToBox(rect) {
  return [rect[0], rect[1], rect[0] + rect[2], rect[1] + rect[3]];
}

function rectVertices(rect) {
  const [x1, y1, x2, y2] = rectToBox(rect);

  return [[x1, y1], [x2, y1], [x2, y2], [x1, y2]];
}

function boxUnion(box1, box2) {
  if (!box1) return box2;
  if (!box2) return box1;

  return [Math.min(box1[0], box2[0]), Math.min(box1[1], box2[1]), Math.max(box1[2], box2[2]), Math.max(box1[3], box2[3])];
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
  return sprites.sort((a, b) => {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return setDeprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValue", function() { return resolveValue; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);


function attr(target, prop, descriptor) {
  target.__attributeNames = target.__attributeNames || [];
  target.__attributeNames.push(prop);
  if (!descriptor.get) {
    descriptor.get = function () {
      return this.get(prop);
    };
  } else {
    // enable set default to user defined getter
    const _getter = descriptor.get;
    descriptor.get = function () {
      let ret = _getter.call(this);
      if (ret == null) {
        ret = this.get(prop);
      }
      return ret;
    };
  }
  const _setter = descriptor.set;
  descriptor.set = function (val) {
    this.__clearCacheTag = false;
    this.__updateTag = false;
    this.__reflowTag = false;
    _setter.call(this, val);
    if (this.subject && this.subject.hasLayout) {
      const offsetSize = this.subject.offsetSize,
            layoutSize = this.subject.__layoutSize;

      if (!layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
        this.subject.parent.clearLayout();
      }
      this.subject.__lastLayout = offsetSize;
    }
    if (this.subject && this.__updateTag) {
      this.subject.forceUpdate(this.__clearCacheTag);
      if (this.__reflowTag) {
        this.subject.reflow();
      }
    }
    delete this.__reflowTag;
    delete this.__updateTag;
    delete this.__clearCacheTag;
  };
  return descriptor;
}

function flow(target, prop, descriptor) {
  if (descriptor.get) {
    const _getter = descriptor.get;
    descriptor.get = function () {
      let ret = this.flow(prop);
      if (ret === undefined) {
        ret = _getter.call(this);
        this.flow(prop, ret);
      }
      return ret;
    };
  }
  return descriptor;
}

function setDeprecation(apiName, msg = '') {
  msg = `[Deprecation] ${apiName} has been deprecated.${msg}`;
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notice"])(msg);
}

function deprecate(...args) {
  let msg = '',
      apiName = '';
  function decorator(target, prop, descriptor) {
    apiName = apiName || `${target.constructor.name}#${prop}`;
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
  }
  if (args.length === 1) {
    msg = args[0];
    return decorator;
  }
  if (args.length === 2) {
    apiName = args[0];
    msg = args[1];
    return decorator;
  }
  return decorator(...args);
}

function parseValue(...parsers) {
  return function (target, prop, descriptor) {
    const setter = descriptor.set;

    descriptor.set = function (val) {
      val = parsers.reduce((v, parser) => parser(v), val);

      setter.call(this, val);
    };

    return descriptor;
  };
}

function resolveValue(...resolvers) {
  return function (target, prop, descriptor) {
    const getter = descriptor.get;

    descriptor.get = function (val) {
      val = getter.call(this);
      val = resolvers.reduce((v, resolver) => resolver(v), val);
      return val;
    };
  };
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseSprite; });
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
var _desc, _value, _class, _class2, _temp;

const _applyDecoratedDescriptor = __webpack_require__(29);












const _attr = Symbol('attr'),
      _animations = Symbol('animations'),
      _cachePriority = Symbol('cachePriority'),
      _effects = Symbol('effects'),
      _flow = Symbol('flow');

let BaseSprite = (_class = (_temp = _class2 = class BaseSprite extends _basenode__WEBPACK_IMPORTED_MODULE_4__["default"] {

  /**
    new Sprite({
      attr: {
        ...
      }
    })
   */
  constructor(attr) {
    super();

    this[_attr] = new this.constructor.Attr(this);
    this[_animations] = new Set();
    this[_cachePriority] = 0;
    this[_flow] = {};
    this.__cachePolicyThreshold = 6;

    if (attr) {
      this.attr(attr);
    }
  }

  get cachePriority() {
    if (this.isVirtual) return -1;
    return this[_cachePriority];
  }

  set cachePriority(priority) {
    this[_cachePriority] = priority;
  }

  static setAttributeEffects(effects = {}) {
    if (this.prototype[_effects] == null) {
      this.prototype[_effects] = effects;
    }
    Object.assign(this.prototype[_effects], effects);
  }

  static addAttributes(attrs = {}) {
    Object.entries(attrs).forEach(([prop, handler]) => {
      let getter = function () {
        return this.get(prop);
      };
      if (typeof handler !== 'function' && handler.set) {
        getter = handler.get || getter;
        handler = handler.set;
      }
      if (prop !== 'init') {
        this.Attr.prototype.__attributeNames.push(prop);
        Object.defineProperty(this.Attr.prototype, prop, {
          set(val) {
            this.__clearCacheTag = false;
            this.__updateTag = false;
            this.__reflowTag = false;
            handler(this, val);
            if (this.subject && this.subject.hasLayout) {
              const offsetSize = this.subject.offsetSize,
                    layoutSize = this.subject.__layoutSize;

              if (!layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
                this.subject.parent.clearLayout();
              }
              this.subject.__lastLayout = offsetSize;
            }
            if (this.subject && this.__updateTag) {
              this.subject.forceUpdate(this.__clearCacheTag);
              if (this.__reflowTag) {
                this.subject.reflow();
              }
            }
            delete this.__reflowTag;
            delete this.__updateTag;
            delete this.__clearCacheTag;
          },
          get: getter
        });
      }
    });
  }

  static defineAttributes(attrs, effects) {
    this.Attr = class extends this.Attr {
      constructor(subject) {
        super(subject);
        if (attrs.init) attrs.init(this, subject);
      }
    };
    if (attrs) this.addAttributes(attrs);
    if (effects) this.setAttributeEffects(effects);
    return this.Attr;
  }

  get layer() {
    return this.parent && this.parent.layer;
  }

  reflow() {
    this[_flow] = {};
    // let parent = this.parent
    // while(parent) {
    //   if(parent.reflow) parent.reflow()
    //   parent = parent.parent
    // }
  }

  flow(prop, value) {
    if (value === undefined) {
      return this[_flow][prop];
    }
    this[_flow][prop] = value;
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

  get hasLayout() {
    if (this.attr('position') === 'absolute') return false;
    if (this.parent && this.parent.relayout) {
      const display = this.parent.attr('display');
      return display !== '' && display !== 'static';
    }
    return false;
  }

  set zIndex(val) {
    this.attr('zIndex', val);
  }

  get zIndex() {
    return this.attr('zIndex');
  }

  getAttribute(prop) {
    /* istanbul ignore next */
    return this.attr(prop);
  }

  setAttribute(prop, val) {
    /* istanbul ignore next */
    return this.attr(prop, val);
  }

  removeAttribute(prop) {
    /* istanbul ignore next */
    return this.attr(prop, null);
  }

  attr(props, val) {
    const setVal = (key, value) => {
      this[_attr][key] = value;
      if (key === 'zIndex' && this.parent) {
        this.parent.children.sort((a, b) => {
          if (a.zIndex === b.zIndex) {
            return a.zOrder - b.zOrder;
          }
          return a.zIndex - b.zIndex;
        });
      }
    };
    if (typeof props === 'object') {
      Object.entries(props).forEach(([prop, value]) => {
        this.attr(prop, value);
      });
      return this;
    }if (typeof props === 'string') {
      if (val !== undefined) {
        if (typeof val === 'function') {
          val = val(this[_attr][props]);
        }
        if (val && typeof val.then === 'function') {
          return val.then(res => {
            setVal(props, res);
          });
        }
        setVal(props, val);
        return this;
      }
      return this[_attr][props];
    }

    return this[_attr].attrs;
  }

  get attributes() {
    return this[_attr];
  }

  get isVirtual() {
    return false;
  }

  isVisible() {
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

  get transform() {
    const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](this[_attr].get('transformMatrix'));
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

  transition(sec, easing = 'linear') {
    const that = this,
          _animation = Symbol('animation');

    return {
      [_animation]: null,
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
          prop = { [prop]: val };
        }
        Object.entries(prop).forEach(([key, value]) => {
          if (typeof value === 'function') {
            prop[key] = value(that.attr(key));
          }
        });
        this[_animation] = that.animate([prop], {
          duration: sec * 1000,
          fill: 'forwards',
          easing
        });
        return this[_animation].finished;
      }
    };
  }

  animate(frames, timing) {
    const animation = new _animation__WEBPACK_IMPORTED_MODULE_5__["default"](this, frames, timing);
    if (this[_effects]) animation.applyEffects(this[_effects]);
    if (this.layer) {
      animation.baseTimeline = this.layer.timeline;
      animation.play();
      animation.finished.then(() => {
        this[_animations].delete(animation);
      });
    }
    this[_animations].add(animation);
    return animation;
  }

  connect(parent, zOrder = 0) {
    if (parent && !(parent instanceof _basenode__WEBPACK_IMPORTED_MODULE_4__["default"])) {
      const node = new _basenode__WEBPACK_IMPORTED_MODULE_4__["default"]();
      node.context = parent;
      node.timeline = new sprite_animator__WEBPACK_IMPORTED_MODULE_2__["Timeline"]();
      node.update = function () {
        const currentTime = this.timeline.currentTime;
        node.dispatchEvent('update', { target: this, timeline: this.timeline, renderTime: currentTime }, true, true);
      };
      parent = node;
    }
    const ret = super.connect(parent, zOrder);
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
    if (this.hasLayout) parent.clearLayout();
    this.reflow();
    return ret;
  }

  disconnect(parent) {
    this[_animations].forEach(animation => animation.cancel());
    if (this.cache) {
      this.cache = null;
    }
    if (this.hasLayout) parent.clearLayout();
    this.reflow();
    const ret = super.disconnect(parent);
    delete this.context;
    return ret;
  }

  get attrSize() {
    let [width, height] = this.attr('size');
    const isBorderBox = this.attr('boxSizing') === 'border-box';

    if (this.hasLayout) {
      const layoutWidth = this.attr('layoutWidth'),
            layoutHeight = this.attr('layoutHeight');[width, height] = [layoutWidth !== '' ? layoutWidth : width, layoutHeight !== '' ? layoutHeight : height];
    }
    if (isBorderBox) {
      const borderWidth = this.attr('border').width,
            [paddingTop, paddingRight, paddingBottom, paddingLeft] = this.attr('padding');

      if (width !== '') {
        width = Math.max(0, width - 2 * borderWidth - paddingLeft - paddingRight);
      }if (width !== '') {
        height = Math.max(0, height - 2 * borderWidth - paddingTop - paddingBottom);
      }
    }

    return [width, height];
  }

  // content width / height

  get contentSize() {
    if (this.isVirtual) return [0, 0];
    const [width, height] = this.attrSize;
    return [width | 0, height | 0];
  }

  // content + padding

  get clientSize() {
    const [top, right, bottom, left] = this.attr('padding'),
          [width, height] = this.contentSize;

    return [left + width + right, top + height + bottom];
  }

  // content + padding + border

  get offsetSize() {
    const { width: borderWidth } = this.attr('border'),
          [width, height] = this.clientSize;

    return [width + 2 * borderWidth, height + 2 * borderWidth];
  }

  get layoutSize() {
    const size = this.offsetSize;
    const [top, right, bottom, left] = this.attr('margin');
    return [left + size[0] + right, top + size[1] + bottom];
  }

  get innerSize() {
    return this.contentSize;
  }

  get outerSize() {
    return this.offsetSize;
  }

  getLayerXY(dx = 0, dy = 0) {
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
              scrollTop = parent.attr('scrollTop') || 0;

        // const parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft
        // const parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop

        x = x + parent.originalRect[0] + borderWidth + padding[3] - scrollLeft;
        y = y + parent.originalRect[1] + borderWidth + padding[0] - scrollTop;
      }
      target = parent;
    }
    return [x, y];
  }

  get boundingRect() {
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

  // rect before transform

  get originalRect() {
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

  get originalRenderRect() {
    const bound = this.originalRect,
          pos = this.attr('pos');

    return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
  }

  get renderBox() {
    const bound = this.boundingRect,
          pos = this.attr('pos');

    return [Math.floor(pos[0] + bound[0]), Math.floor(pos[1] + bound[1]), Math.ceil(pos[0] + bound[0] + bound[2]), Math.ceil(pos[1] + bound[1] + bound[3])];
  }

  get renderRect() {
    return Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["boxToRect"])(this.renderBox);
  }

  get vertices() {
    const vertices = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["rectVertices"])(this.originalRect),
          transform = this.transform,
          [x0, y0] = this.attr('pos');

    return vertices.map(v => {
      const [x, y] = transform.transformPoint(v[0], v[1]);
      return [x0 + x, y0 + y];
    });
  }

  set cache(context) {
    if (this.cacheContext && context !== this.cacheContext) {
      _helpers_render__WEBPACK_IMPORTED_MODULE_7__["cacheContextPool"].put(this.cacheContext);
    }
    this.cacheContext = context;
  }

  get cache() {
    return this.cacheContext;
  }

  clearCache() {
    this[_cachePriority] = 0;
    this.cache = null;
    if (this.parent && this.parent.cache) {
      this.parent[_cachePriority] = 0;
      this.parent.cache = null;
    }
  }

  remove() {
    if (!this.parent) return false;
    this.parent.removeChild(this);
    return true;
  }

  appendTo(parent) {
    parent.appendChild(this);
  }

  forceUpdate(clearCache = false) {
    if (clearCache) {
      this.clearCache();
    }
    const parent = this.parent;
    if (parent) {
      this.parent.update(this);
    }
  }

  // layer position to sprite offset
  pointToOffset(x, y) {
    const [x0, y0] = this.attr('pos');
    const [dx, dy] = [x - x0, y - y0];
    const transform = this.transform;
    return transform.inverse().transformPoint(dx, dy);
  }

  offsetToPoint(dx, dy) {
    const transform = this.transform;
    const [x0, y0] = this.attr('pos');
    const [x, y] = transform.transformPoint(dx, dy);
    return [x + x0, y + y0];
  }

  pointCollision(evt) {
    /* istanbul ignore if */
    if (!this.isVisible()) {
      return false;
    }

    let parentX, parentY;

    if (evt.parentX != null) {
      // group
      parentX = evt.parentX;
      parentY = evt.parentY;
    } else {
      parentX = evt.layerX;
      parentY = evt.layerY;
    }

    let [nx, ny] = this.pointToOffset(parentX, parentY);
    evt.offsetX = nx;
    evt.offsetY = ny;

    const [ox, oy, ow, oh] = this.originalRect;

    if (nx >= ox && nx - ox < ow && ny >= oy && ny - oy < oh) {
      if (this.context && this.context.isPointInPath) {
        const borderWidth = this.attr('border').width,
              borderRadius = this.attr('borderRadius');
        if (borderWidth || borderRadius) {
          const [width, height] = this.outerSize;
          const [x, y, w, h, r] = [0, 0, width, height, Math.max(0, borderRadius + borderWidth / 2)];
          Object(_helpers_render__WEBPACK_IMPORTED_MODULE_7__["drawRadiusBox"])(this.context, { x, y, w, h, r });
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

  // OBB: http://blog.csdn.net/silangquan/article/details/50812425
  OBBCollision(sprite) {
    // vertices: [p1, p2, p3, p4]
    const [p11, p12, p13] = this.vertices,
          [p21, p22, p23] = sprite.vertices;

    const a1 = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p12, p11).unit(),
          a2 = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p13, p12).unit(),
          a3 = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p22, p21).unit(),
          a4 = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p23, p22).unit();

    // The projection of the axis of a vertex in a certain direction
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

  relayout() {}

  draw(t, drawingContext = this.context) {
    const bound = this.originalRect;
    let cachableContext = this.cache;

    const filter = this.attr('filter'),
          shadow = this.attr('shadow');

    // filter & shadow require cachableContext
    if (!cachableContext && (filter || shadow || this.cachePriority > this.__cachePolicyThreshold)) {
      cachableContext = _helpers_render__WEBPACK_IMPORTED_MODULE_7__["cacheContextPool"].get(drawingContext);
      if (cachableContext) {
        // +2 to solve 1px problem
        cachableContext.canvas.width = Math.ceil(bound[2]) + 2;
        cachableContext.canvas.height = Math.ceil(bound[3]) + 2;
      } else {
        this.__cachePolicyThreshold = Infinity;
      }
    }

    this[_cachePriority] = Math.min(this[_cachePriority] + 1, 10);
    const evtArgs = { context: drawingContext, cacheContext: cachableContext, target: this, renderTime: t, fromCache: !!this.cache };

    drawingContext.save();
    drawingContext.translate(...this.attr('pos'));
    drawingContext.transform(...this.transform.m);

    // fix for wxapp
    const alpha = drawingContext.globalAlpha != null ? drawingContext.globalAlpha : 1;
    drawingContext.globalAlpha = alpha * this.attr('opacity');

    if (!cachableContext) {
      drawingContext.translate(bound[0], bound[1]);
    } else {
      // solve 1px problem
      cachableContext.translate(bound[0] - Math.floor(bound[0]) + 1, bound[1] - Math.floor(bound[1]) + 1);
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

    if (cachableContext && cachableContext.canvas.width > 0 && cachableContext.canvas.height > 0) {
      if (filter) {
        drawingContext.filter = _filters__WEBPACK_IMPORTED_MODULE_8__["default"].compile(filter);
      }
      if (shadow) {
        let { blur, color, offset } = shadow;
        blur = blur || 1;
        color = color || 'rgba(0,0,0,1)';
        drawingContext.shadowBlur = blur;
        drawingContext.shadowColor = color;
        if (offset) {
          drawingContext.shadowOffsetX = offset[0];
          drawingContext.shadowOffsetY = offset[1];
        }
      }
      drawingContext.drawImage(cachableContext.canvas, Math.floor(bound[0]) - 1, Math.floor(bound[1]) - 1);
    }

    this.dispatchEvent('afterdraw', evtArgs, true, true);

    drawingContext.restore();

    return drawingContext;
  }

  get needRender() {
    if (this.isVirtual) return false;

    const [offsetWidth, offsetHeight] = this.offsetSize;
    if (offsetWidth <= 0 || offsetHeight <= 0) return false;

    const border = this.attr('border');

    if (border.width <= 0 && this.attr('borderRadius') <= 0 && !this.attr('bgcolor') && !this.attr('gradients').bgcolor && !this.attr('bgimage')) {
      return false; // don't need to render
    }

    return true;
  }

  render(t, drawingContext) {
    const border = this.attr('border'),
          borderRadius = this.attr('borderRadius'),
          padding = this.attr('padding'),
          [offsetWidth, offsetHeight] = this.offsetSize,
          [clientWidth, clientHeight] = this.clientSize;

    if (!this.needRender) {
      return false;
    }

    const borderWidth = border.width;
    let borderStyle = border.style;

    // draw border
    if (borderWidth) {
      drawingContext.lineWidth = borderWidth;

      const [x, y, w, h, r] = [borderWidth / 2, borderWidth / 2, offsetWidth - borderWidth, offsetHeight - borderWidth, borderRadius];

      Object(_helpers_render__WEBPACK_IMPORTED_MODULE_7__["drawRadiusBox"])(drawingContext, { x, y, w, h, r });

      if (borderStyle && borderStyle !== 'solid') {
        const dashOffset = this.attr('dashOffset');
        drawingContext.lineDashOffset = dashOffset;
        if (borderStyle === 'dashed') {
          borderStyle = [borderWidth * 3, borderWidth * 3];
        }
        drawingContext.setLineDash(borderStyle);
      }
      drawingContext.strokeStyle = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_7__["findColor"])(drawingContext, this, 'border');
      drawingContext.stroke();
    }

    // draw bgcolor
    const bgcolor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_7__["findColor"])(drawingContext, this, 'bgcolor');
    const bgimage = this.attr('bgimage');

    if (this.cache == null || borderWidth || borderRadius || bgcolor || bgimage && bgimage.display !== 'none') {
      const [x, y, w, h, r] = [borderWidth, borderWidth, clientWidth, clientHeight, Math.max(0, borderRadius - borderWidth / 2)];

      Object(_helpers_render__WEBPACK_IMPORTED_MODULE_7__["drawRadiusBox"])(drawingContext, { x, y, w, h, r });

      if (bgcolor) {
        drawingContext.fillStyle = bgcolor;
        drawingContext.fill();
      }

      // clip is expensive, we should only perform clip when it has to.
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
}, _class2.Attr = _attr__WEBPACK_IMPORTED_MODULE_3__["default"], _temp), (_applyDecoratedDescriptor(_class.prototype, 'attrSize', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'attrSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'contentSize', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'contentSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clientSize', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'clientSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetSize', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'offsetSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'originalRect', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'originalRect'), _class.prototype)), _class);



function drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  const w = image.width,
        h = image.height;

  const [top, right, bottom, left] = clip9 || [16, 16, 16, 16];
  const leftTop = [0, 0, left, top],
        rightTop = [w - right, 0, right, top],
        rightBottom = [w - right, h - bottom, right, bottom],
        leftBottom = [0, h - bottom, left, bottom];

  const boxRight = offsetWidth - right - borderWidth,
        boxBottom = offsetHeight - borderWidth - bottom;

  // draw four corners
  drawingContext.drawImage(image, ...leftTop, borderWidth, borderWidth, left, top);
  drawingContext.drawImage(image, ...rightTop, boxRight, borderWidth, right, top);
  drawingContext.drawImage(image, ...rightBottom, boxRight, boxBottom, left, bottom);
  drawingContext.drawImage(image, ...leftBottom, borderWidth, boxBottom, left, bottom);

  // draw .9 cross
  const midWidth = w - left - right,
        midHeight = h - top - bottom;

  if (midWidth > 0) {
    let midBoxWidth = clientWidth - left - right;
    let leftOffset = borderWidth + left;
    while (midBoxWidth > 0) {
      const ww = Math.min(midBoxWidth, midWidth);
      const topPiece = [left, 0, ww, top],
            bottomPiece = [left, h - bottom, ww, bottom];

      drawingContext.drawImage(image, ...topPiece, leftOffset, borderWidth, ww, top);
      drawingContext.drawImage(image, ...bottomPiece, leftOffset, boxBottom, ww, bottom);
      midBoxWidth -= midWidth;
      if (midBoxWidth > 0) {
        leftOffset += midWidth;
      }
    }
  }

  if (midHeight > 0) {
    let midBoxHeight = clientHeight - top - bottom;
    let topOffset = borderWidth + top;
    while (midBoxHeight > 0) {
      const hh = Math.min(midBoxHeight, midHeight);
      const leftPiece = [0, top, left, hh],
            rightPiece = [w - right, top, right, hh];

      drawingContext.drawImage(image, ...leftPiece, borderWidth, topOffset, left, hh);
      drawingContext.drawImage(image, ...rightPiece, boxRight, topOffset, right, hh);
      midBoxHeight -= midHeight;
      if (midBoxHeight > 0) {
        topOffset += midHeight;
      }
    }
  }

  if (midHeight && midWidth > 0) {
    let midBoxWidth = clientWidth - left - right;
    let leftOffset = borderWidth + left;

    while (midBoxWidth > 0) {
      let midBoxHeight = clientHeight - top - bottom;
      let topOffset = borderWidth + top;
      while (midBoxHeight > 0) {
        const ww = Math.min(midBoxWidth, midWidth),
              hh = Math.min(midBoxHeight, midHeight);
        const midPiece = [left, top, ww, hh];
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
  }
}

function drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  const { image, display, clip9 } = bgimage;

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

Object(_nodetype__WEBPACK_IMPORTED_MODULE_6__["registerNodeType"])('basesprite', BaseSprite);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _desc, _value, _class;

const _applyDecoratedDescriptor = __webpack_require__(29);





const _attr = Symbol('attr'),
      _temp = Symbol('store'),
      _subject = Symbol('subject'),
      _default = Symbol('default'),
      _props = Symbol('props');

let SpriteAttr = (_dec = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseStringFloat"], sprite_utils__WEBPACK_IMPORTED_MODULE_1__["oneOrTwoValues"]), _dec2 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), _dec3 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), _dec4 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseStringInt"]), _dec5 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"]), _dec6 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(val => {
  return val ? parseFloat(val) : val;
}), _dec7 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(val => {
  return val ? parseFloat(val) : val;
}), _dec8 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(val => {
  return val ? parseFloat(val) : val;
}), _dec9 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(val => {
  return val ? parseFloat(val) : val;
}), _dec10 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseStringInt"]), _dec11 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseStringInt"], sprite_utils__WEBPACK_IMPORTED_MODULE_1__["fourValuesShortCut"]), _dec12 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), _dec13 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), _dec14 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseStringTransform"]), _dec15 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), _dec16 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseStringFloat"], sprite_utils__WEBPACK_IMPORTED_MODULE_1__["oneOrTwoValues"]), _dec17 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["deprecate"])('Instead use attr.gradients.'), _dec18 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), _dec19 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), (_class = class SpriteAttr {
  constructor(subject) {
    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this[_props] = {};

    this.setDefault({
      anchor: [0, 0],
      x: 0,
      y: 0,
      opacity: 1,
      width: '',
      height: '',
      layoutWidth: '',
      layoutHeight: '',
      bgcolor: '',
      flex: '',
      order: 0,
      position: '',
      alignSelf: '',
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      transform: 'matrix(1,0,0,1,0,0)',
      transformOrigin: '',
      transformMatrix: [1, 0, 0, 1, 0, 0],
      border: {
        width: 0,
        color: 'rgba(0,0,0,0)',
        style: 'solid'
      },
      // border: [0, 'rgba(0,0,0,0)'],
      borderRadius: 0,
      boxSizing: 'content-box',
      dashOffset: 0,
      display: '',
      padding: [0, 0, 0, 0],
      margin: [0, 0, 0, 0],
      zIndex: 0,
      offsetRotate: 'auto',
      gradients: {},
      offsetDistance: 0,
      filter: '', // filter: {blur, ...}
      shadow: '', // shadow: {color = 'rgba(0,0,0,1)', blur = 1[, offset]}
      bgimage: ''
    }, {
      pos() {
        return [this.x, this.y];
      },
      size() {
        return [this.width, this.height];
      },
      linearGradients() {
        /* istanbul ignore next  */
        return this.gradients;
      }
    });
    this[_temp] = new Map(); // save non-serialized values
  }

  setDefault(attrs, props = {}) {
    Object.assign(this[_default], attrs);
    Object.assign(this[_attr], attrs);
    const _p = {};
    Object.entries(props).forEach(([prop, getter]) => {
      _p[prop] = {
        get: getter.bind(this)
      };
    });
    Object.defineProperties(this[_attr], _p);
    Object.assign(this[_props], _p);
  }

  saveObj(key, val) {
    this[_temp].set(key, val);
    this.__updateTag = true;
  }

  loadObj(key) {
    return this[_temp].get(key);
  }

  quietSet(key, val) {
    this[_attr][key] = val;
  }

  set(key, val) {
    if (val == null) {
      val = this[_default][key];
    }
    if (typeof val === 'object') {
      const oldVal = this[_attr][key];
      if (oldVal !== val && JSON.stringify(val) === JSON.stringify(oldVal)) {
        return;
      }
    }
    this[_attr][key] = val;
    this.__updateTag = true;
    // auto reflow
    if (key === 'width' || key === 'height' || key === 'layoutWidth' || key === 'layoutHeight' || key === 'display' || key === 'anchor' || key === 'border' || key === 'padding' || key === 'boxSizing' || key === 'margin' || key === 'flex') {
      this.__reflowTag = true;
    }
  }

  get(key) {
    return this[_attr][key];
  }

  get attrs() {
    const ret = {};
    this.__attributeNames.forEach(key => {
      if (key in this[_props]) {
        Object.defineProperty(ret, key, this[_props][key]);
      } else if (key !== 'x' && key !== 'y' && key !== 'width' && key !== 'height') {
        ret[key] = this[key];
      } else {
        ret[key] = this.get(key);
      }
    });
    return ret;
  }

  clearCache() {
    this.__clearCacheTag = true;
    return this;
  }

  clearFlow() {
    this.__reflowTag = true;
    return this;
  }

  merge(attrs) {
    if (typeof attrs === 'string') {
      attrs = JSON.parse(attrs);
    }
    Object.entries(attrs).forEach(([key, value]) => {
      if (this[_default][key] !== value) {
        if (key !== 'offsetPath' && key !== 'offsetDistance' && key !== 'offsetRotate' && key !== 'offsetAngle' && key !== 'offsetPoint') {
          this[key] = value;
        } else if (key === 'offsetPath') {
          const offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_2__["default"](value);
          this.set('offsetPath', offsetPath.d);
          this.saveObj('offsetPath', offsetPath);
        } else {
          this.set(key, value);
        }
      }
    });

    return this;
  }

  serialize() {
    const attrs = this.attrs;
    delete attrs.id;
    const offsetAngle = this.get('offsetAngle');
    if (offsetAngle != null) attrs.offsetAngle = offsetAngle;
    const offsetPoint = this.get('offsetPoint');
    if (offsetPoint != null) attrs.offsetPoint = offsetPoint;
    return JSON.stringify(attrs);
  }

  get subject() {
    return this[_subject];
  }

  /* ------------------- define attributes ----------------------- */

  set id(val) {
    return this.quietSet('id', String(val));
  }

  set name(val) {
    return this.quietSet('name', String(val));
  }

  set anchor(val) {
    this.set('anchor', val);
  }

  set display(val) {
    this.clearCache();
    this.set('display', val);
  }

  set x(val) {
    if (this.subject.hasLayout) {
      this.set('layoutX', val);
    } else {
      this.set('x', val);
    }
  }

  get x() {
    if (this.subject.hasLayout) {
      const layoutX = this.get('layoutX');
      return layoutX !== '' ? layoutX : this.get('x');
    }
    return this.get('x');
  }

  set y(val) {
    if (this.subject.hasLayout) {
      this.set('layoutY', val);
    } else {
      this.set('y', val);
    }
  }

  get y() {
    if (this.subject.hasLayout) {
      const layoutY = this.get('layoutY');
      return layoutY !== '' ? layoutY : this.get('y');
    }
    return this.get('y');
  }

  set pos(val) {
    if (val == null) {
      val = [0, 0];
    }
    const [x, y] = val;
    this.x = x;
    this.y = y;
  }

  set bgcolor(val) {
    this.clearCache();
    this.set('bgcolor', val);
  }

  set opacity(val) {
    this.set('opacity', val);
  }

  set width(val) {
    this.clearCache();
    this.set('width', val);
  }

  set height(val) {
    this.clearCache();
    this.set('height', val);
  }

  set layoutWidth(val) {
    this.clearCache();
    this.set('layoutWidth', val);
  }

  set layoutHeight(val) {
    this.clearCache();
    this.set('layoutHeight', val);
  }

  set size(val) {
    if (val == null) {
      val = ['', ''];
    }
    const [width, height] = val;
    this.width = width;
    this.height = height;
  }

  set border(val) {
    this.clearCache();
    if (val == null) {
      this.set('border', null);
      return;
    }
    if (typeof val === 'number' || typeof val === 'string') {
      val = {
        width: parseFloat(val)
      };
    } else if (Array.isArray(val)) {
      val = {
        width: parseFloat(val[0]),
        color: Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"])(val[1] || '#000')
      };
    } else {
      val.width = parseFloat(val.width);
      val.color = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"])(val.color || '#000');
    }
    val = Object.assign({
      width: 1,
      color: Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"])('#000'),
      style: 'solid'
    }, val);
    this.set('border', val);
  }

  set padding(val) {
    this.clearCache();
    this.set('padding', val);
  }

  set borderRadius(val) {
    this.clearCache();
    this.set('borderRadius', val);
  }

  set boxSizing(val) {
    this.clearCache();
    this.set('boxSizing', val);
  }

  set dashOffset(val) {
    this.clearCache();
    this.set('dashOffset', val);
  }

  // transform attributes

  set transform(val) {
    /*
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      matrix: [1,0,0,1,0,0],
     */
    Object.assign(this[_attr], {
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0]
    });

    if (Array.isArray(val)) {
      this.set('transformMatrix', val);
      this.set('transform', `matrix(${val})`);
    } else {
      this.set('transformMatrix', [1, 0, 0, 1, 0, 0]);
      const transformStr = [];

      Object.entries(val).forEach(([key, value]) => {
        if (key === 'matrix' && Array.isArray(value)) {
          this.set('transformMatrix', new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](value).m);
        } else {
          this[key] = value;
        }
        transformStr.push(`${key}(${value})`);
      });

      this.set('transform', transformStr.join(' '));
    }
  }

  set transformOrigin(val) {
    this.set('transformOrigin', val);
  }

  set rotate(val) {
    const delta = this.get('rotate') - val;
    this.set('rotate', val);
    const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](this.get('transformMatrix')).rotate(-delta);
    this.set('transformMatrix', transform.m);
  }

  set scale(val) {
    val = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["oneOrTwoValues"])(val).map(v => {
      if (Math.abs(v) > 0.001) {
        return v;
      }
      return 1 / v > 0 ? 0.001 : -0.001;
    });
    const oldVal = this.get('scale') || [1, 1];
    const delta = [val[0] / oldVal[0], val[1] / oldVal[1]];
    this.set('scale', val);

    const offsetAngle = this.get('offsetAngle');
    if (offsetAngle) {
      this.rotate -= offsetAngle;
    }

    const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](this.get('transformMatrix'));
    transform.scale(...delta);
    this.set('transformMatrix', transform.m);

    if (offsetAngle) {
      this.rotate += offsetAngle;
    }
  }

  set translate(val) {
    const oldVal = this.get('translate') || [0, 0];
    const delta = [val[0] - oldVal[0], val[1] - oldVal[1]];
    this.set('translate', val);
    const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](this.get('transformMatrix'));
    transform.translate(...delta);
    this.set('transformMatrix', transform.m);
  }

  set skew(val) {
    const oldVal = this.get('skew') || [0, 0];
    const invm = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().skew(...oldVal).inverse();
    this.set('skew', val);
    const transform = new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](this.get('transformMatrix'));
    transform.multiply(invm).skew(...val);
    this.set('transformMatrix', transform.m);
  }

  set zIndex(val) {
    this.set('zIndex', val);
  }

  /**
    linearGradients : {
      bgcolor: {
        direction: 30,  //angle，[0,360)
        rect: [x, y, w, h],
        vector: [x1, y1, x2, y2], // direction/rect or from/to
        colors: [
          {offset: 0, color: 'red'},
          {offset: 1, color: 'black'}
        ]
      }
    }
   */

  set linearGradients(val) /* istanbul ignore next  */{
    this.gradients = val;
  }

  /**
    gradients : {
      bgcolor: {
        direction: 30,  //angle，[0,360)
        rect: [x, y, w, h],  // rect + direction or vector
        vector: [x1, y1, r1, x2, y2, r2], // vector.length -> linear or radial
        colors: [
          {offset: 0, color: 'red'},
          {offset: 1, color: 'black'}
        ]
      }
    }
   */

  set gradients(val) {
    this.clearCache();
    this.set('gradients', val);
  }

  resetOffset() {
    let offsetPath = this.get('offsetPath');
    const dis = this.offsetDistance;

    if (offsetPath) {
      const pathObj = this.loadObj('offsetPath');
      if (pathObj) {
        offsetPath = pathObj;
      } else {
        offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_2__["default"](offsetPath);
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

  set offsetPath(val) {
    const offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_2__["default"](val);

    this.set('offsetPath', offsetPath.d);
    this.saveObj('offsetPath', offsetPath);
    this.resetOffset();
  }

  set offsetDistance(val) {
    this.set('offsetDistance', val);
    this.resetOffset();
  }

  set offsetRotate(val) {
    if (typeof val === 'string' && val !== 'auto' && val !== 'reverse') {
      val = parseFloat(val);
    }
    this.set('offsetRotate', val);
    this.resetOffset();
  }

  set filter(val) {
    this.set('filter', val);
  }

  set shadow(val) {
    this.set('shadow', val);
  }

  set flex(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('flex', val);
  }

  set order(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('order', val);
  }

  set position(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('position', val);
  }

  set alignSelf(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('alignSelf', val);
  }

  set margin(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('margin', val);
  }

  /*
    {
      src: image | url,
      display: 'none' | 'repeatX' | 'repeatY' | 'repeat' | 'stretch' | 'center' | '.9',
      offset: [x, y],
      clip9: [paddingTop, paddingRight, paddingBottom, paddingLeft],
    }
  */

  set bgimage(val) {
    this.clearCache();
    if (val && val.clip9) val.clip9 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_1__["fourValuesShortCut"])(val.clip9);
    if (val && !val.image && this.subject.loadBgImage) {
      val = this.subject.loadBgImage(val);
    }
    this.set('bgimage', val);
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'id', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'id'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'name', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'name'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anchor', [_dec, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'anchor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'display', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'display'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'x', [_dec2, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'x'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'y', [_dec3, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'y'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pos', [_dec4, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'pos'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bgcolor', [_dec5, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'bgcolor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'opacity', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'opacity'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [_dec6, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'height', [_dec7, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'height'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [_dec8, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutHeight', [_dec9, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'size', [_dec10, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'size'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'border', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'border'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'padding', [_dec11, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'padding'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'borderRadius', [_dec12, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'borderRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'boxSizing', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'boxSizing'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'dashOffset', [_dec13, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'dashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transform', [_dec14, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'transform'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transformOrigin', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'transformOrigin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'rotate', [_dec15, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'rotate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scale', [_dec16, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'scale'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'translate', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'translate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'skew', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'skew'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'zIndex', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'zIndex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'linearGradients', [_dec17, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'linearGradients'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'gradients', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'gradients'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetPath', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'offsetPath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetDistance', [_dec18, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'offsetDistance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetRotate', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'offsetRotate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'filter', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'filter'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'shadow', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'shadow'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flex', [_dec19, sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'order', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'order'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'position', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'position'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'alignSelf', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'alignSelf'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'margin', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'margin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bgimage', [sprite_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'bgimage'), _class.prototype)), _class));


/* harmony default export */ __webpack_exports__["default"] = (SpriteAttr);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseNode; });
const _eventHandlers = Symbol('eventHandlers'),
      _collisionState = Symbol('collisionState'),
      _data = Symbol('data'),
      _mouseCapture = Symbol('mouseCapture');

let BaseNode = class BaseNode {
  constructor() {
    this[_eventHandlers] = {};
    this[_data] = {};
  }

  get dataset() {
    return this[_data];
  }

  data(props, val) {
    if (typeof props === 'object') {
      Object.entries(props).forEach(([prop, value]) => {
        this.data(prop, value);
      });
      return this;
    }if (typeof props === 'string') {
      if (val !== undefined) {
        if (typeof val === 'function') {
          val = val(this[_data][props]);
        }
        if (val && typeof val.then === 'function') {
          return val.then(res => {
            this[_data][props] = res;
          });
        }
        this[_data][props] = val;
        return this;
      }
      return this[_data][props];
    }
    return this[_data];
  }

  getEventHandlers(type) {
    return type != null ? this[_eventHandlers][type] || [] : this[_eventHandlers];
  }

  on(type, handler) {
    if (Array.isArray(type)) {
      type.forEach(t => this.on(t, handler));
    } else {
      this[_eventHandlers][type] = this[_eventHandlers][type] || [];
      this[_eventHandlers][type].push(handler);
    }
    return this;
  }

  off(type, handler) {
    if (Array.isArray(type)) {
      type.forEach(t => this.off(t, handler));
    } else if (handler && this[_eventHandlers][type]) {
      const idx = this[_eventHandlers][type].indexOf(handler);

      if (idx >= 0) {
        this[_eventHandlers][type].splice(idx, 1);
      }
    } else {
      delete this[_eventHandlers][type];
    }
    return this;
  }

  // d3-friendly
  addEventListener(type, handler) {
    return this.on(type, handler);
  }

  removeEventListener(type, handler) {
    return this.off(type, handler);
  }

  pointCollision(evt) {
    throw Error('you mast override this method');
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

  dispatchEvent(type, evt, collisionState = false, swallow = false) {
    const handlers = this.getEventHandlers(type);
    if (swallow && handlers.length === 0) {
      return;
    }
    if (!evt.stopDispatch) {
      evt.stopDispatch = () => {
        evt.terminated = true;
      };
    }
    if (evt.type !== type) {
      if (evt.type) {
        evt.originalType = evt.type;
      }
      evt.type = type;
    }

    const isCollision = collisionState || this.pointCollision(evt);
    const captured = this.isCaptured(evt);

    if (!evt.terminated && (isCollision || captured)) {
      evt.target = this;

      const changedTouches = evt.originalEvent && evt.originalEvent.changedTouches;
      if (changedTouches) {
        if (type === 'touchstart') {
          const touch = changedTouches[0],
                layer = this.layer;
          if (touch && touch.identifier != null) {
            layer.touchedTargets[touch.identifier] = layer.touchedTargets[touch.identifier] || [];
            layer.touchedTargets[touch.identifier].push(this);
          }
        }
        if (type.startsWith('touch')) {
          const touches = Array.from(evt.originalEvent.touches),
                layer = this.layer;
          evt.targetTouches = [];

          touches.forEach(touch => {
            const identifier = touch.identifier;
            if (layer.touchedTargets[identifier] && layer.touchedTargets[identifier].indexOf(this) >= 0) {
              evt.targetTouches.push(touch);
            }
          });
          evt.touches = touches;
          evt.changedTouches = Array.from(changedTouches);
        }
      }

      handlers.forEach(handler => handler.call(this, evt));

      if (!this[_collisionState] && isCollision && type === 'mousemove') {
        const _evt = Object.assign({}, evt);
        _evt.type = 'mouseenter';
        _evt.terminated = false;
        this.dispatchEvent('mouseenter', _evt, true);
        this[_collisionState] = true;
      }
    }

    if (this[_collisionState] && !isCollision && type === 'mousemove') {
      const _evt = Object.assign({}, evt);
      _evt.type = 'mouseleave';
      _evt.target = this;
      _evt.terminated = false;
      this.dispatchEvent('mouseleave', _evt, true);
      this[_collisionState] = false;
    }

    return isCollision;
  }

  get parentNode() {
    return this.parent;
  }

  // called when layer appendChild
  connect(parent, zOrder = 0) {
    if (this.parent) {
      // throw new Error('This node belongs to another parent node! Remove it first...')
      this.disconnect(this.parent);
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

    const handlers = this[_eventHandlers].append;
    if (handlers && handlers.length) {
      this.dispatchEvent('append', {
        parent,
        zOrder
      }, true, true);
    }

    return this;
  }

  // override to recycling resources
  disconnect(parent) {
    if (!this.parent || parent !== this.parent) {
      throw new Error('Invalid node to disconnect');
    }

    const zOrder = this.zOrder;
    delete this.zOrder;

    const handlers = this[_eventHandlers].remove;
    if (handlers && handlers.length) {
      this.dispatchEvent('remove', {
        parent,
        zOrder
      }, true, true);
    }

    delete this.parent;
    delete this.isDirty;

    return this;
  }
};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);





const defaultEffect = sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"].default;

function arrayEffect(arr1, arr2, p, start, end) {
  if (Array.isArray(arr1)) {
    return arr1.map((o, i) => defaultEffect(o, arr2[i], p, start, end));
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
  let matrix = new sprite_math__WEBPACK_IMPORTED_MODULE_2__["Matrix"]();
  Object.entries(trans).forEach(([key, val]) => {
    if (key === 'matrix') {
      matrix = new sprite_math__WEBPACK_IMPORTED_MODULE_2__["Matrix"](val);
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
  trans1 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringTransform"])(trans1);
  trans2 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringTransform"])(trans2);

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
  const c1 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_3__["parseColor"])(color1);
  const c2 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_3__["parseColor"])(color2);

  if (c1.model === c2.model) {
    c1.value = arrayEffect(c1.value, c2.value, p, start, end).map((c, i) => {
      return i < 3 ? Math.round(c) : Math.round(c * 100) / 100;
    });
    return c1.str;
  }

  return defaultEffect(color1, color2, p, start, end);
}

Object.assign(sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"], {
  arrayEffect,
  transformEffect,
  colorEffect,
  pos: arrayEffect,
  size: arrayEffect,
  transform: transformEffect,
  bgcolor: colorEffect,
  border(v1, v2, p, start, end) {
    return {
      width: defaultEffect(v1.width, v2.width, p, start, end),
      color: colorEffect(v1.color, v2.color, p, start, end),
      style: arrayEffect(v1.style, v2.style, p, start, end)
    };
  },
  scale: arrayEffect,
  translate: arrayEffect,
  skew: arrayEffect,
  color: colorEffect,
  strokeColor: colorEffect,
  fillColor: colorEffect
});

let _default = class _default extends sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Animator"] {
  constructor(sprite, frames, timing) {
    super(sprite.attr(), frames, timing);
    this.target = sprite;
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
    const sprite = this.target;
    return super.finished.then(() => {
      sprite.attr(this.frame);
      Object(fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["cancelAnimationFrame"])(this.requestId);
    });
  }

  finish() {
    super.finish();
    Object(fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["cancelAnimationFrame"])(this.requestId);
    const sprite = this.target;
    sprite.attr(this.frame);
  }

  play() {
    if (!this.target.parent || this.playState === 'running') {
      return;
    }

    super.play();

    const sprite = this.target;

    sprite.attr(this.frame);

    const that = this;
    this.ready.then(() => {
      sprite.attr(that.frame);
      that.requestId = Object(fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(function update() {
        const target = that.target;
        if (typeof document !== 'undefined' && document.documentElement && document.documentElement.contains && target.layer && target.layer.canvas && !document.documentElement.contains(target.layer.canvas)) {
          // if dom element has been removed stop animation.
          // it usually occurs in single page applications.
          that.cancel();
          return;
        }
        const playState = that.playState;
        sprite.attr(that.frame);
        if (playState === 'idle') return;
        if (playState === 'running') {
          that.requestId = Object(fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(update);
        } else if (playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
          // playbackRate < 0 will cause playState reset to pending...
          that.ready.then(() => {
            sprite.attr(that.frame);
            that.requestId = Object(fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(update);
          });
        }
      });
    });
  }

  cancel(preserveState = false) {
    Object(fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["cancelAnimationFrame"])(this.requestId);
    if (preserveState) {
      this.target.attr(this.frame);
      super.cancel();
    } else {
      super.cancel();
      this.target.attr(this.frame);
    }
  }
};



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
/* eslint-disable no-undef */
function nowtime() {
  if (typeof performance !== 'undefined' && performance.now) {
    return performance.now();
  }if (typeof process !== 'undefined' && process.hrtime) {
    const [s, ns] = process.hrtime();
    return s * 1e3 + ns * 1e-6;
  }
  return Date.now ? Date.now() : new Date().getTime();
}
/* eslint-enable no-undef */

let _requestAnimationFrame, _cancelAnimationFrame;

if (typeof global.requestAnimationFrame === 'undefined') {
  _requestAnimationFrame = function (fn) {
    return setTimeout(() => {
      fn(nowtime());
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

const requestAnimationFrame = step => {
  const id = Symbol('requestId');
  steps.set(id, step);

  if (timerId == null) {
    timerId = _requestAnimationFrame(t => {
      timerId = null;[...steps].forEach(([id, callback]) => {
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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(34)))

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return registerNodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return createNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const nodeTypes = new Map();

/* istanbul ignore next  */
const ownerDocumentDescriptor = {
  get() {
    const that = this;
    return {
      createElementNS(uri, name) {
        const sprite = createNode(name);
        if (sprite) {
          return that.appendChild(sprite);
        }
        return null;
      }
    };
  }
};

function getAllSubNodes(parent) {
  const children = parent.children;
  return children.reduce((list, child) => {
    if (child.children) {
      return [...list, child, ...getAllSubNodes(child)];
    }
    return [...list, child];
  }, []);
}

function querySelectorLimits(node, functor, limits = Infinity) {
  const nodeList = [];
  const elements = getAllSubNodes(node);
  for (let i = 0; i < elements.length; i++) {
    const node = elements[i];
    if (functor(node)) {
      nodeList.push(node);
      if (limits === nodeList.length) {
        break;
      }
    }
  }
  return nodeList;
}

const elementProto = {
  getElementById(id) {
    const children = getAllSubNodes(this);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.id === id) {
        return child;
      }
    }
    return null;
  },
  getElementsByName(name) {
    return getAllSubNodes(this).filter(c => c.name === name);
  },
  /*
    d3-friendly
    *, nodeType, #id, :name, {nodeType: checker}
  */
  querySelector(selector) {
    let ret = null;

    if (!selector || selector === '*') {
      ret = this.children[0];
    } else if (typeof selector === 'string') {
      // querySelector('nodeType')
      // querySelector('#id')
      // querySelector(':name')
      if (selector.startsWith('#')) {
        ret = this.getElementById(selector.slice(1));
      } else if (selector.startsWith(':')) {
        const name = selector.slice(1);
        const nodeList = querySelectorLimits(this, c => c.name === name, 1);
        if (nodeList.length) ret = nodeList[0];
      } else {
        const nodeType = getNodeType(selector);
        if (nodeType) {
          const nodeList = querySelectorLimits(this, c => c instanceof nodeType, 1);
          if (nodeList.length) ret = nodeList[0];
        }
      }
    } else {
      /*
        {
          nodeType: () => {...},   //checker
        }
      */
      const nodeList = querySelectorLimits(this, child => {
        return Object.entries(selector).some(([type, checker]) => {
          const nodeType = getNodeType(type);
          return nodeType && child instanceof nodeType && checker.call(this, child);
        });
      }, 1);
      if (nodeList.length) ret = nodeList[0];
    }
    return ret;
  },
  querySelectorAll(selector) {
    let ret = [];

    if (!selector || selector === '*') {
      ret = getAllSubNodes(this);
    } else if (typeof selector === 'string') {
      if (selector.startsWith('#')) {
        const sprite = this.getElementById(selector.slice(1));
        ret = sprite ? [sprite] : [];
      }
      if (selector.startsWith(':')) {
        ret = this.getElementsByName(selector.slice(1));
      }
      const nodeType = getNodeType(selector);
      if (nodeType) {
        ret = querySelectorLimits(this, c => c instanceof nodeType);
      }
    } else {
      ret = querySelectorLimits(this, child => {
        return Object.entries(selector).some(([type, checker]) => {
          const nodeType = getNodeType(type);
          if (!nodeType || !(child instanceof nodeType)) {
            return false;
          }
          return checker.call(this, child);
        });
      });
    }
    return ret;
  }
};

function registerNodeType(type, Class, isQuerable = false) {
  const nodeType = type.toLowerCase();
  const tagName = type.toUpperCase();
  Object.defineProperty(Class.prototype, 'nodeType', {
    get() {
      return nodeType;
    }
  });
  // friendly to snabbdom
  Object.defineProperty(Class.prototype, 'tagName', {
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

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawRadiusBox", function() { return drawRadiusBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return findColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return cacheContextPool; });
function drawRadiusBox(context, { x, y, w, h, r }) {
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + w, y, x + w, y + h, r);
  context.arcTo(x + w, y + h, x, y + h, r);
  context.arcTo(x, y + h, x, y, r);
  context.arcTo(x, y, x + w, y, r);
  context.closePath();
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
    let { colors, vector, direction, rect } = gradient;

    /* istanbul ignore if  */
    if (direction != null) {
      if (prop === 'border') {
        rect = rect || [0, 0, ...sprite.outerSize];
      } else {
        const { width: borderWidth } = sprite.attr('border');
        rect = rect || [borderWidth, borderWidth, ...sprite.innerSize];
      }
      vector = gradientBox(direction, rect);
    }

    if (vector.length === 4) {
      color = context.createLinearGradient(...vector);
    } else if (vector.length === 6) {
      color = context.createRadialGradient(...vector);
    } /* istanbul ignore next  */else if (vector.length === 3) {
        // for wxapp
        color = context.createCircularGradient(...vector);
      } /* istanbul ignore next  */else {
          throw Error('Invalid gradient vector!');
        }

    colors.forEach(o => {
      color.addColorStop(o.offset, o.color);
    });
  }

  return color;
}

const contextPool = [],
      maxPollSize = 20;

const cacheContextPool = {
  get(context) {
    if (contextPool.length > 0) {
      return contextPool.pop();
    }

    const canvas = context.canvas;
    if (!canvas || !canvas.cloneNode) {
      return;
    }
    const copied = canvas.cloneNode();
    return copied.getContext('2d');
  },
  put(...contexts) {
    contexts.every(context => {
      context.canvas.width = 0;
      context.canvas.height = 0;
      contextPool.push(context);
      return contextPool.length < maxPollSize;
    });
  },
  get size() {
    return contextPool.length;
  }
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
// http://www.runoob.com/cssref/css3-pr-filter.html

/* harmony default export */ __webpack_exports__["default"] = ({
  blur(px) {
    return `blur(${Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(px)})`;
  },
  brightness(percent) {
    return `brightness(${percent})`;
  },
  contrast(percent) {
    return `contrast(${percent})`;
  },

  dropShadow([offsetX, offsetY, shadowRadius, color]) {
    return `drop-shadow(${Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(offsetX)} ${Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(offsetY)} ${Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(shadowRadius)} ${color})`;
  },

  grayscale(percent) {
    return `grayscale(${percent})`;
  },
  hueRotate(value) {
    return `hue-rotate(${Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(value, 'deg')})`;
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

const _applyDecoratedDescriptor = __webpack_require__(29);








const _texturesCache = Symbol('_texturesCache');
const _images = Symbol('_images');

let TextureAttr = (_class = class TextureAttr extends _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      textures: []
    });
  }

  /*
    {
      image: ...,  //texture resource
      srcRect: ..., //texture clip
      rect: ....,  //texture in sprite offset
      filter: ...  //texture filters
    }
   */

  set textures(textures) {
    if (!Array.isArray(textures)) {
      textures = [textures];
    }

    textures = textures.map(texture => {
      if (!texture.image) {
        texture = { image: texture };
      }
      return texture;
    });

    this.loadTextures(textures);
    this.set('textures', textures);
  }

  loadTextures(textures) {
    const subject = this.subject;

    // adaptive textures
    let width = 0,
        height = 0;

    subject.images = textures.map(texture => {
      const { image, rect, srcRect } = texture;
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
      }
    }
    subject.texturesSize = [width, height];
    return textures;
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'textures', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'textures'), _class.prototype)), _class);
let Sprite = (_class2 = (_temp = _class3 = class Sprite extends _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"] {

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
      attr = { textures: [attr] };
    }
    super();
    this[_texturesCache] = new Map();
    if (attr) {
      this.attr(attr);
    }
  }

  cloneNode() {
    const node = super.cloneNode();
    if (this.images) {
      node.textures = this.textures.map((texture, i) => {
        texture.image = this.images[i];
        return texture;
      });
    }
    return node;
  }

  set images(images) {
    this[_images] = images;
  }

  get images() {
    return this[_images];
  }

  set textures(textures) {
    this.attr('textures', textures);
  }

  get textures() {
    return this.attr('textures');
  }

  // override to adapt textures' size

  get contentSize() {
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

  pointCollision(evt) {
    if (super.pointCollision(evt)) {
      const textures = this.textures;

      if (textures) {
        let { offsetX, offsetY } = evt;
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

  set cache(context) {
    if (context == null) {
      _helpers_render__WEBPACK_IMPORTED_MODULE_4__["cacheContextPool"].put(...this[_texturesCache].values());
      this[_texturesCache].clear();
      return;
    }
    const key = JSON.stringify(this.textures),
          cacheMap = this[_texturesCache];

    if (!cacheMap.has(key)) {
      cacheMap.set(key, context);
    }
  }

  get cache() {
    const key = JSON.stringify(this.textures),
          cacheMap = this[_texturesCache];
    if (cacheMap.has(key)) {
      return cacheMap.get(key);
    }
    return null;
  }

  render(t, drawingContext) {
    super.render(t, drawingContext);
    const bg = this.attr('bgcolor') || this.attr('gradients').bgcolor;
    if (!bg && this.textures.length <= 1) {
      this.cachePriority = 0;
    }
    const textures = this.textures;
    let cliped = false;
    if (this.images && this.images.length) {
      textures.forEach((texture, i) => {
        const img = this.images[i];
        const [w, h] = this.contentSize;
        const rect = texture.rect || [0, 0, w, h];
        const srcRect = texture.srcRect;

        if (!cliped && texture.rect && (rect[2] - rect[0] > w || rect[3] - rect[1] > h)) {
          cliped = true;
          drawingContext.beginPath();
          drawingContext.rect(0, 0, w, h);
          drawingContext.clip();
        }

        drawingContext.save();

        if (texture.filter) {
          Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["setDeprecation"])('texture.filter', 'Instead use sprite.attr({filter}).');
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
}, _class3.Attr = TextureAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'contentSize'), _class2.prototype)), _class2);



Object(_nodetype__WEBPACK_IMPORTED_MODULE_3__["registerNodeType"])('sprite', Sprite);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(css_line_break__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
var _dec, _dec2, _dec3, _dec4, _dec5, _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

const _applyDecoratedDescriptor = __webpack_require__(29);








const parseFont = __webpack_require__(45);
const _boxSize = Symbol('boxSize'),
      _outputText = Symbol('outputText');

const measureText = (node, text, font, lineHeight = '') => {
  const ctx = node.context;
  if (!ctx) {
    return [0, 0];
  }
  ctx.save();
  ctx.font = font;
  let { width } = ctx.measureText(text);
  ctx.restore();

  const letterSpacing = node.attr('letterSpacing');
  if (letterSpacing) {
    width += letterSpacing * (text.length - 1);
  }

  const { size } = parseFont(font);
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
      const breaker = Object(css_line_break__WEBPACK_IMPORTED_MODULE_1__["LineBreaker"])(line, { lineBreak, wordBreak });
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
    });
    // lines = node[_outputText].split(/\n/)
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
    }
  }
  node[_boxSize] = [width, height];
}

let LabelSpriteAttr = (_dec = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _dec2 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"]), _dec3 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"]), _dec4 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _dec5 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), (_class = class LabelSpriteAttr extends _basesprite__WEBPACK_IMPORTED_MODULE_2__["default"].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      font: '16px Arial',
      textAlign: 'left',
      strokeColor: '',
      fillColor: '',
      lineHeight: '',
      text: '',
      flexible: false,
      lineBreak: '',
      wordBreak: 'normal',
      letterSpacing: 0,
      textIndent: 0
    }, {
      color() {
        return this.fillColor;
      }
    });
  }

  set text(val) {
    this.clearCache();
    val = String(val);
    this.set('text', val);
    calculTextboxSize(this.subject);
  }

  set font(val) {
    this.clearCache();
    this.set('font', val);
    calculTextboxSize(this.subject);
  }

  set lineHeight(val) {
    this.clearCache();
    this.set('lineHeight', val);
    calculTextboxSize(this.subject);
  }

  set textAlign(val) {
    this.clearCache();
    this.set('textAlign', val);
    calculTextboxSize(this.subject);
  }

  set color(val) {
    this.fillColor = val;
  }

  set strokeColor(val) {
    this.clearCache();
    this.set('strokeColor', val);
  }

  set fillColor(val) {
    this.clearCache();
    this.set('fillColor', val);
  }

  set flexible(val) {
    this.clearCache();
    this.set('flexible', val);
  }

  set lineBreak(val) {
    // normal, strict, none
    this.clearCache();
    this.set('lineBreak', val);
    calculTextboxSize(this.subject);
  }

  set wordBreak(val) {
    // normal | break-all | break-word | keep-all
    this.clearCache();
    this.set('wordBreak', val);
    calculTextboxSize(this.subject);
  }

  set letterSpacing(value) {
    this.clearCache();
    this.set('letterSpacing', value);
    calculTextboxSize(this.subject);
  }

  set textIndent(value) {
    this.clearCache();
    this.set('textIndent', value);
    calculTextboxSize(this.subject);
  }

  set width(val) {
    if (this.lineBreak !== '') calculTextboxSize(this.subject);
    super.width = val;
  }

  set layoutWidth(val) {
    if (this.lineBreak !== '') calculTextboxSize(this.subject);
    super.layoutWidth = val;
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'text', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'text'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'font', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'font'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineHeight', [_dec, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textAlign', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'textAlign'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'strokeColor', [_dec2, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'strokeColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [_dec3, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexible', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flexible'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineBreak', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineBreak'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'wordBreak', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'wordBreak'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'letterSpacing', [_dec4, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'letterSpacing'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textIndent', [_dec5, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'textIndent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutWidth'), _class.prototype)), _class));
let Label = (_class2 = (_temp = _class3 = class Label extends _basesprite__WEBPACK_IMPORTED_MODULE_2__["default"] {

  constructor(attr) {
    if (typeof attr === 'string') {
      attr = { text: attr };
    }
    super(attr);
  }

  set text(val) {
    this.attr('text', val);
  }

  get text() {
    return this.attr('text');
  }

  get textboxSize() {
    if (!this[_boxSize]) calculTextboxSize(this);
    return this[_boxSize];
  }

  get flexibleFont() {
    const font = this.attr('font');
    if (this.attr('width') === '' && this.attr('layoutWidth') === '') return font;
    const textboxSize = this.textboxSize,
          contentSize = this.contentSize;
    let { style, variant, weight, size, family } = parseFont(font);
    size *= contentSize[0] / textboxSize[0];
    return `${style} ${variant} ${weight} ${Math.floor(size)}px "${family}"`;
  }

  // override to adapt content size

  get contentSize() {
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

  render(t, drawingContext) {
    super.render(t, drawingContext);

    const textAlign = this.attr('textAlign'),
          flexible = this.attr('flexible'),
          font = flexible ? this.flexibleFont : this.attr('font'),
          lineHeight = this.attr('lineHeight');

    let text = this.text;

    if (text) {
      const [w, h] = this.contentSize;
      if (!this[_outputText]) calculTextboxSize(this);
      text = this[_outputText] || this.text;

      if (this.textboxSize[0] > w || this.textboxSize[1] > h) {
        drawingContext.beginPath();
        drawingContext.rect(0, 0, w, h);
        drawingContext.clip();
      }
      drawingContext.font = font;
      const lines = text.split(/\n/);

      drawingContext.textBaseline = 'top';

      const align = textAlign;

      drawingContext.textBaseline = 'middle';

      const strokeColor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_4__["findColor"])(drawingContext, this, 'strokeColor');
      if (strokeColor) {
        drawingContext.strokeStyle = strokeColor;
      }

      let fillColor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_4__["findColor"])(drawingContext, this, 'fillColor');

      if (!strokeColor && !fillColor) {
        fillColor = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])('black');
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
          let l = left;[...line].forEach((letter, i) => {
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
}, _class3.Attr = LabelSpriteAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'contentSize'), _class2.prototype)), _class2);



Object(_nodetype__WEBPACK_IMPORTED_MODULE_3__["registerNodeType"])('label', Label);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(41);

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(42);

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
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

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(43);

var _linebreakTrie = __webpack_require__(44);

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
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

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
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
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
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
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
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

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
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
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
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
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
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
            } else {
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

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(41);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
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
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

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


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
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
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
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
        }
    }]);

    return Trie;
}();

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/* eslint-disable */

// borrow from node-canvas (https://github.com/Automattic/node-canvas)

/**
 * Font RegExp helpers.
 */

const weights = 'bold|bolder|lighter|[1-9]00',
      styles = 'italic|oblique',
      variants = 'small-caps',
      stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',
      units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q|vw|vh',
      string = '\'([^\']+)\'|"([^"]+)"|[\\w-]+';

// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
const weightRe = new RegExp(`(${weights}) +`, 'i');
const styleRe = new RegExp(`(${styles}) +`, 'i');
const variantRe = new RegExp(`(${variants}) +`, 'i');
const stretchRe = new RegExp(`(${stretches}) +`, 'i');
const sizeFamilyRe = new RegExp('([\\d\\.]+)(' + units + ') *' + '((?:' + string + ')( *, *(?:' + string + '))*)');

/**
 * Cache font parsing.
 */

const cache = {};

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

module.exports = function f(str, defaultHeight) {
  if (defaultHeight == null) {
    if (typeof window !== 'undefined' && window.getComputedStyle) {
      const root = window.getComputedStyle(document.documentElement).fontSize;
      defaultHeight = f(`${root} Arial`, 16).size;
    } else {
      defaultHeight = 16;
    }
  }

  // Cached
  if (cache[str]) return cache[str];

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
    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')

    // Optional, unordered properties.
  };let weight, style, variant, stretch;
  // Stop search at `sizeFamily.index`
  let substr = str.substring(0, sizeFamily.index);
  if (weight = weightRe.exec(substr)) font.weight = weight[1];
  if (style = styleRe.exec(substr)) font.style = style[1];
  if (variant = variantRe.exec(substr)) font.variant = variant[1];
  if (stretch = stretchRe.exec(substr)) font.stretch = stretch[1];

  // Convert to device units. (`font.unit` is the original unit)
  // TODO: ch, ex
  switch (font.unit) {
    case 'pt':
      font.size /= 0.75;
      break;
    case 'pc':
      font.size *= 16;
      break;
    case 'in':
      font.size *= 96;
      break;
    case 'cm':
      font.size *= 96.0 / 2.54;
      break;
    case 'mm':
      font.size *= 96.0 / 25.4;
      break;
    case '%':
      // TODO disabled because existing unit tests assume 100
      // font.size *= defaultHeight / 100 / 0.75
      break;
    case 'em':
    case 'rem':
      font.size *= defaultHeight;
      break;
    case 'q':
      font.size *= 96 / 25.4 / 4;
      break;
  }

  if (font.unit === 'vw') {
    if (typeof document !== 'undefined' && document.documentElement) {
      const width = document.documentElement.clientWidth;
      font.size = width * font.size / 100;
    }
  } else if (font.unit === 'vh') {
    if (typeof document !== 'undefined' && document.documentElement) {
      const height = document.documentElement.clientHeight;
      font.size = height * font.size / 100;
    }
  }

  return cache[str] = font;
};

/* eslint-enable */

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var _helpers_dirty_check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);












const _children = Symbol('children'),
      _updateSet = Symbol('updateSet'),
      _zOrder = Symbol('zOrder'),
      _tRecord = Symbol('tRecord'),
      _timeline = Symbol('timeline'),
      _renderDeferer = Symbol('renderDeferrer'),
      _drawTask = Symbol('drawTask'),
      _autoRender = Symbol('autoRender'),
      _adjustTimer = Symbol('adjustTimer');

let Layer = class Layer extends _basenode__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor({
    context,
    handleEvent = true,
    evaluateFPS = false,
    renderMode = 'repaintAll',
    autoRender = true
  } = {}) {
    super();

    this.handleEvent = handleEvent;
    this.evaluateFPS = evaluateFPS;
    this[_autoRender] = autoRender;

    // renderMode: repaintAll | repaintDirty
    this.renderMode = renderMode;

    this.outputContext = context;

    // auto release
    /* istanbul ignore if  */
    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('DOMNodeRemovedFromDocument', () => {
        this.timeline.clear();
        this.clear();
      });
    }

    this[_children] = [];
    this[_updateSet] = new Set();
    this[_zOrder] = 0;
    this[_tRecord] = []; // calculate FPS
    this[_timeline] = new sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"]();
    this[_renderDeferer] = null;

    this.touchedTargets = {};
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
    return this[_children];
  }

  get timeline() {
    return this[_timeline];
  }

  get context() {
    return this.outputContext;
  }

  get canvas() {
    return this.outputContext.canvas;
  }

  get offset() {
    return [0, 0];
  }

  clearContext(context) {
    if (context.canvas) {
      const { width, height } = context.canvas;
      context.clearRect(0, 0, width, height);
    }
  }

  remove(...args) {
    if (args.length === 0) {
      Object(sprite_utils__WEBPACK_IMPORTED_MODULE_2__["setDeprecation"])('layer.remove()', 'Instead use layer.clear().');
      return this.clear();
    }
    return args.map(child => this.removeChild(child));
  }

  prepareRender() {
    if (!this[_renderDeferer]) {
      this[_renderDeferer] = {};
      this[_renderDeferer].promise = new Promise((resolve, reject) => {
        Object.assign(this[_renderDeferer], { resolve, reject });
        if (this.autoRender) {
          this[_drawTask] = Object(fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(() => {
            delete this[_drawTask];
            this.draw();
          });
        }
      });
      // .catch(ex => console.error(ex.message))
    }
    return this[_renderDeferer] ? this[_renderDeferer].promise : Promise.resolve();
  }

  draw(clearContext = true) {
    const renderDeferrer = this[_renderDeferer];
    this[_renderDeferer] = null;
    if (this[_drawTask]) {
      Object(fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["cancelAnimationFrame"])(this[_drawTask]);
      delete this[_drawTask];
    }
    /* istanbul ignore if  */
    if (this.evaluateFPS) {
      this[_tRecord].push(Date.now());
      this[_tRecord] = this[_tRecord].slice(-10);
    }

    let renderer;
    if (this.renderMode === 'repaintDirty') {
      renderer = this.renderRepaintDirty.bind(this);
    } else if (this.renderMode === 'repaintAll') {
      renderer = this.renderRepaintAll.bind(this);
    } else {
      /* istanbul ignore next  */
      throw new Error('unknown render mode!');
    }
    const currentTime = this.timeline.currentTime;
    renderer(currentTime, clearContext);

    super.dispatchEvent.call(this, 'update', { target: this, timeline: this.timeline, renderTime: currentTime }, true);

    if (renderDeferrer) {
      renderDeferrer.resolve();
    }
  }

  update(target) {
    if (target && target.isDirty) return;
    if (target) {
      this[_updateSet].add(target);
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

  get fps() /* istanbul ignore next  */{
    if (!this.evaluateFPS) {
      return NaN;
    }
    let sum = 0;
    const tr = this[_tRecord].slice(-10);
    const len = tr.length;

    if (len <= 5) {
      return NaN;
    }
    tr.reduceRight((a, b, i) => {
      sum += a - b;return b;
    });

    return Math.round(1000 * (len - 1) / sum);
  }

  drawSprites(renderEls, t) {
    this[_updateSet].clear();
    for (let i = 0; i < renderEls.length; i++) {
      const child = renderEls[i],
            isDirty = child.isDirty;
      child.isDirty = false;

      if (child.parent === this) {
        const isVisible = child.isVisible();
        if (isVisible) {
          child.draw(t);
          if (this.renderMode === 'repaintDirty') {
            child.lastRenderBox = child.renderBox;
          } else {
            child.lastRenderBox = 'no-calc';
          }
        } else {
          // invisible, only need to remove lastRenderBox
          delete child.lastRenderBox;
        }
        if (isDirty) {
          child.dispatchEvent('update', { target: child, renderTime: t, isVisible }, true, true);
        }
      }
    }
  }

  renderRepaintAll(t, clearContext = true) {
    const renderEls = this[_children];
    const outputContext = this.outputContext;
    if (clearContext) this.clearContext(outputContext);
    this.drawSprites(renderEls, t);
  }

  renderRepaintDirty(t, clearContext = true) {
    const updateEls = [...this[_updateSet]];
    if (updateEls.some(el => !!el.attr('filter') || el.isVirtual || el.lastRenderBox === 'no-calc')) {
      return this.renderRepaintAll(t, clearContext);
    }

    const outputContext = this.outputContext;

    const renderEls = this[_children];

    outputContext.save();
    outputContext.beginPath();

    Object(_helpers_dirty_check__WEBPACK_IMPORTED_MODULE_7__["clearDirtyRects"])(outputContext, updateEls, true);

    if (clearContext) this.clearContext(outputContext);

    this.drawSprites(renderEls, t);

    outputContext.restore();
  }

  pointCollision(evt) {
    if (this.outputContext.canvas) {
      const { layerX, layerY } = evt;
      const { width, height } = this.outputContext.canvas;

      if (layerX == null && layerY == null || layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
        return true;
      }
      return false;
    }
    /* istanbul ignore next  */
    return true;
  }

  dispatchEvent(type, evt, collisionState = false, swallow = false) {
    if (swallow && this.getEventHandlers(type).length === 0) {
      return;
    }
    if (!swallow && !evt.terminated && type !== 'mouseenter' && type !== 'mouseleave') {
      let isCollision = collisionState || this.pointCollision(evt);
      const changedTouches = evt.originalEvent && evt.originalEvent.changedTouches;
      if (changedTouches && type === 'touchend') {
        isCollision = true;
      }
      if (isCollision) {
        const sprites = this[_children].slice(0).reverse(),
              targetSprites = [];

        if (changedTouches && type === 'touchend') {
          const touch = changedTouches[0];
          if (touch && touch.identifier != null) {
            const targets = this.layer.touchedTargets[touch.identifier];
            if (targets) {
              targets.forEach(target => {
                if (target !== this && target.layer === this) {
                  target.dispatchEvent(type, evt, true);
                }
              });
              delete this.layer.touchedTargets[touch.identifier];
            }
          }
        } else {
          for (let i = 0; i < sprites.length; i++) {
            const sprite = sprites[i];
            const hit = sprite.dispatchEvent(type, evt, collisionState, swallow);
            if (hit) {
              // detect mouseenter/mouseleave
              targetSprites.push(sprite);
            }
            if (evt.terminated && !type.startsWith('mouse')) {
              break;
            }
          }
        }
        evt.targetSprites = targetSprites;
        // stopDispatch can only terminate event in the same level
        evt.terminated = false;
        return super.dispatchEvent(type, evt, isCollision, swallow);
      }
    }
    evt.targetSprites = evt.targetSprites || [];
    return super.dispatchEvent(type, evt, collisionState, swallow);
  }

  connect(parent, zOrder, zIndex) /* istanbul ignore next  */{
    super.connect(parent, zOrder);
    this.zIndex = zIndex;
    if (parent && parent.container) {
      parent.container.appendChild(this.outputContext.canvas);
    }
    return this;
  }

  disconnect(parent) /* istanbul ignore next  */{
    if (this.canvas && this.canvas.remove) {
      this.canvas.remove();
    }
    return super.disconnect(parent);
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

  adjust(handler, update = true) /* istanbul ignore next  */{
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

  clearUpdate() {
    /* istanbul ignore next  */
    this[_updateSet].clear();
  }
};



Object.assign(Layer.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_8__["default"]);

Object(_nodetype__WEBPACK_IMPORTED_MODULE_6__["registerNodeType"])('layer', Layer, true);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Batch; });
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);


const _batch = Symbol('batch');

let Batch = class Batch {
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
      const that = this;
      Object.defineProperty(node, 'cache', {
        configurable: true,
        get() {
          return that.cache;
        },
        set(context) {
          if (that.baseNode === this) {
            if (that.cache && context !== that.cache) {
              _helpers_render__WEBPACK_IMPORTED_MODULE_0__["cacheContextPool"].put(that.cache);
            }
            that.cache = context;
          } else if (context == null) {
            throw new Error('Cannot set non-cachable attributes to batch members.Use batch.baseNode.attr(...)');
          }
        }
      });
      Object.defineProperty(node, 'cachePriority', {
        configurable: true,
        get() {
          return Infinity;
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
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _helpers_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
var _dec, _dec2, _desc, _value, _class, _class2, _temp, _desc2, _value2, _class3, _class4, _temp2;

const _applyDecoratedDescriptor = __webpack_require__(29);









const _children = Symbol('children'),
      _zOrder = Symbol('zOrder'),
      _layoutTag = Symbol('layoutTag');

let GroupAttr = (_dec = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _dec2 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), (_class = (_temp = _class2 = class GroupAttr extends _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr {

  constructor(subject) {
    super(subject);
    this.setDefault({
      clip: null,
      scrollTop: 0,
      scrollLeft: 0
    });

    GroupAttr.inits.forEach(init => {
      init(this, subject);
    });
  }

  set clip(val) {
    this.clearCache();
    this.clearFlow();
    if (val) {
      val = typeof val === 'string' ? { d: val } : val;
      this.subject.svg = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_3__["createSvgPath"])(val);
      this.set('clip', val);
    } else {
      this.subject.svg = null;
      this.set('clip', null);
    }
  }

  set width(value) {
    this.subject.clearLayout();
    super.width = value;
  }

  set height(value) {
    this.subject.clearLayout();
    super.height = value;
  }

  set layoutWidth(value) {
    this.subject.clearLayout();
    super.layoutWidth = value;
  }

  set layoutHeight(value) {
    this.subject.clearLayout();
    super.layoutHeight = value;
  }

  set display(value) {
    this.subject.clearLayout();
    super.display = value;
  }

  set scrollLeft(value) {
    this.clearCache();
    this.set('scrollLeft', value);
  }

  set scrollTop(value) {
    this.clearCache();
    this.set('scrollTop', value);
  }
}, _class2.inits = [], _temp), (_applyDecoratedDescriptor(_class.prototype, 'clip', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'clip'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'height', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'height'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutHeight', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'display', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'display'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scrollLeft', [_dec, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'scrollLeft'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scrollTop', [_dec2, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'scrollTop'), _class.prototype)), _class));


const _layout = Symbol('layout');

let Group = (_class3 = (_temp2 = _class4 = class Group extends _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"] {

  static applyLayout(name, layout) {
    this[_layout] = this[_layout] || {};
    const { attrs, relayout } = layout;
    if (attrs.init) {
      GroupAttr.inits.push(attrs.init);
    }
    Group.addAttributes(attrs);
    this[_layout][name] = relayout;
  }

  constructor(attr = {}) {
    super(attr);
    this[_children] = [];
    this[_zOrder] = 0;
    this[_layoutTag] = false;
  }

  get isVirtual() {
    const display = this.attr('display');
    if (display !== '') return false;
    const { width: borderWidth } = this.attr('border'),
          borderRadius = this.attr('borderRadius'),
          bgcolor = this.attr('bgcolor'),
          { bgcolor: bgGradient } = this.attr('gradients'),
          [width, height] = this.attrSize,
          [anchorX, anchorY] = this.attr('anchor'),
          bgimage = this.attr('bgimage');

    return !anchorX && !anchorY && !width && !height && !borderRadius && !borderWidth && !bgcolor && !bgGradient && !bgimage;
  }

  scrollTo(x, y) {
    this.attr('scrollLeft', x);
    this.attr('scrollTop', y);
  }

  scrollBy(dx, dy) {
    const x = this.attr('scrollLeft'),
          y = this.attr('scrollTop');

    this.scrollTo(x + dx, y + dy);
  }

  cloneNode(deepCopy) {
    const node = super.cloneNode();
    if (deepCopy) {
      const children = this.children;
      children.forEach(child => {
        const subNode = child.cloneNode(deepCopy);
        node.append(subNode);
      });
    }
    return node;
  }

  get children() {
    return this[_children];
  }

  get childNodes() {
    return this[_children];
  }

  update(child) {
    child.isDirty = true;
    const attrSize = this.attrSize;
    if (attrSize[0] === '' || attrSize[1] === '') {
      this.reflow();
    }
    this.forceUpdate(true);
  }

  pointCollision(evt) {
    if (super.pointCollision(evt) || this.isVirtual) {
      if (this.svg) {
        const { offsetX, offsetY } = evt;
        const rect = this.originalRect;
        evt.isInClip = this.svg.isPointInPath(offsetX - rect[0], offsetY - rect[1]);
      }
      return true;
    }
    return false;
  }

  get contentSize() {
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
        this[_children].forEach(sprite => {
          const renderBox = sprite.renderBox;
          right = Math.max(right, renderBox[2]);
          bottom = Math.max(bottom, renderBox[3]);
        });
        width = width || right;
        height = height || bottom;
      }
    }
    return [width, height];
  }

  dispatchEvent(type, evt, collisionState = false, swallow = false) {
    if (swallow && this.getEventHandlers(type).length === 0) {
      return;
    }
    if (!swallow && !evt.terminated && type !== 'mouseenter' && type !== 'mouseleave') {
      const isCollision = collisionState || this.pointCollision(evt);
      if (isCollision) {
        const scrollLeft = this.attr('scrollLeft'),
              scrollTop = this.attr('scrollTop'),
              borderWidth = this.attr('border').width,
              padding = this.attr('padding');

        const parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft;
        const parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop;
        // console.log(evt.parentX, evt.parentY)

        const _evt = Object.assign({}, evt);
        _evt.parentX = parentX;
        _evt.parentY = parentY;

        const sprites = this[_children].slice(0).reverse();

        const targetSprites = [];

        for (let i = 0; i < sprites.length && evt.isInClip !== false; i++) {
          const sprite = sprites[i];
          const hit = sprite.dispatchEvent(type, _evt, collisionState, swallow);
          if (hit) {
            targetSprites.push(sprite);
          }
          if (evt.terminated && !type.startsWith('mouse')) {
            break;
          }
        }

        evt.targetSprites = targetSprites;
        // stopDispatch can only terminate event in the same level
        evt.terminated = false;
        return super.dispatchEvent(type, evt, isCollision, swallow);
      }
    }
    evt.targetSprites = evt.targetSprites || [];
    return super.dispatchEvent(type, evt, collisionState, swallow);
  }

  relayout() {
    const items = this.children.filter(child => {
      if (child.hasLayout) {
        child.attr('layoutWidth', null);
        child.attr('layoutHeight', null);
      }
      if (child.relayout) {
        const display = child.attr('display');
        if (display !== '' && display !== 'static') {
          child.relayout();
        }
      }
      return child.hasLayout;
    });

    const display = this.attr('display');
    const doLayout = Group[_layout][display];
    if (doLayout) {
      doLayout(this, items);
    }
  }

  clearLayout() {
    this[_layoutTag] = false;
    let parent = this.parent;
    while (parent) {
      if (parent[_layoutTag]) parent[_layoutTag] = false;
      parent = parent.parent;
    }
  }

  render(t, drawingContext) {
    const display = this.attr('display');
    if (display !== '' && display !== 'static' && !this[_layoutTag]) {
      this.relayout();
    }

    const clipPath = this.attr('clip');
    if (clipPath) {
      this.svg.beginPath().to(drawingContext);
      drawingContext.clip();
    }

    if (!this.isVirtual) {
      super.render(t, drawingContext);
      const [w, h] = this.attrSize;
      if (w !== '' || h !== '') {
        drawingContext.beginPath();
        drawingContext.rect(0, 0, this.contentSize[0], this.contentSize[1]);
        drawingContext.clip();
      }
    }

    drawingContext.save();
    const scrollLeft = this.attr('scrollLeft'),
          scrollTop = this.attr('scrollTop');

    drawingContext.translate(-scrollLeft, -scrollTop);
    const sprites = this[_children];

    for (let i = 0; i < sprites.length; i++) {
      const child = sprites[i],
            isDirty = child.isDirty;
      child.isDirty = false;

      if (child.isVisible()) {
        child.draw(t, drawingContext);
      }
      if (isDirty) {
        child.dispatchEvent('update', { target: child, renderTime: t }, true, true);
      }
    }
    drawingContext.restore();

    if (display !== '' && display !== 'static') {
      this[_layoutTag] = true;
    }
  }
}, _class4.Attr = GroupAttr, _temp2), (_applyDecoratedDescriptor(_class3.prototype, 'contentSize', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class3.prototype, 'contentSize'), _class3.prototype)), _class3);


Object.assign(Group.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_5__["default"]);
Group.applyLayout('flex', _layout__WEBPACK_IMPORTED_MODULE_4__["flexLayout"]);

Object(_nodetype__WEBPACK_IMPORTED_MODULE_2__["registerNodeType"])('group', Group, true);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathEffect", function() { return pathEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgPath", function() { return createSvgPath; });
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
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
}

// match two path
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
  }).join(' ')}z`;
}

function pathEffect(pathA, pathB, p, s, e) {
  const ep = (p - s) / (e - s);
  if (ep <= 0) return pathA;
  if (ep >= 1) return pathB;
  pathA = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](pathA);
  pathB = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](pathB);
  return lerp(pathA, pathB, ep);
}

function createSvgPath(path) {
  if (typeof path === 'string') path = { d: path };
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
    list.push({ index: arr, distance });
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
    list.push({ index: arr, distance });
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
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "flexLayout", function() { return _flex__WEBPACK_IMPORTED_MODULE_0__; });




/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relayout", function() { return relayout; });
const attrs = {
  init(attr) {
    attr.setDefault({
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
      alignContent: 'stretch'
    });
  },
  flexDirection(attr, value) {
    attr.clearCache();
    attr.subject.clearLayout();
    attr.set('flexDirection', value);
  },
  flexWrap(attr, value) {
    attr.clearCache();
    attr.subject.clearLayout();
    attr.set('flexWrap', value);
  },
  justifyContent(attr, value) {
    attr.clearCache();
    attr.subject.clearLayout();
    attr.set('justifyContent', value);
  },
  alignItems(attr, value) {
    attr.clearCache();
    attr.subject.clearLayout();
    attr.set('alignItems', value);
  },
  alignContent(attr, value) {
    attr.clearCache();
    attr.subject.clearLayout();
    attr.set('alignContent', value);
  }
};

function relayout(container, items) {
  items.sort((a, b) => {
    return (a.attributes.order || 0) - (b.attributes.order || 0);
  });

  function getSize(node, key) {
    return key === 'width' ? node.attrSize[0] : node.attrSize[1];
  }
  const style = container.attributes;

  let mainSize = 'width',
      mainStart = 'x',
      mainEnd = 'layoutRight',
      mainSign = +1,
      mainBase = 0,
      crossSize = 'height',
      crossStart = 'y',
      crossEnd = 'layoutBottom',
      crossSign,
      crossBase;

  const flexDirection = style.flexDirection;

  if (flexDirection === 'row-reverse') {
    mainSize = 'width';
    mainStart = 'layoutRight';
    mainEnd = 'x';
    mainSign = -1;
    mainBase = getSize(container, 'width');

    crossSize = 'height';
    crossStart = 'y';
    crossEnd = 'layoutBottom';
  } else if (flexDirection === 'column') {
    mainSize = 'height';
    mainStart = 'y';
    mainEnd = 'layoutBottom';
    mainSign = +1;
    mainBase = 0;

    crossSize = 'width';
    crossStart = 'x';
    crossEnd = 'layoutRight';
  } else if (flexDirection === 'column-reverse') {
    mainSize = 'height';
    mainStart = 'layoutBottom';
    mainEnd = 'y';
    mainSign = -1;
    mainBase = getSize(container, 'height');

    crossSize = 'width';
    crossStart = 'x';
    crossEnd = 'layoutRight';
  }

  if (style.flexWrap === 'wrap-reverse') {
    [crossStart, crossEnd] = [crossEnd, crossStart];
    crossSign = -1;
  } else {
    crossBase = 0;
    crossSign = 1;
  }

  function isAutoSize(size) {
    return size == null || size === '';
  }

  const isAutoMainSize = isAutoSize(getSize(container, mainSize));

  let groupMainSize;

  if (isAutoMainSize) {
    // auto sizing
    let maxSize = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i],
            [width, height] = item.layoutSize;
      const size = mainSize === 'width' ? width : height;
      maxSize += size;
    }
    if (flexDirection === 'row-reverse' || flexDirection === 'column-reverse') {
      mainBase = maxSize;
    }
    groupMainSize = maxSize;
  } else {
    groupMainSize = mainSize === 'width' ? container.layoutSize[0] : container.layoutSize[1];
  }

  let flexLine = [];
  const flexLines = [flexLine];

  let mainSpace = groupMainSize,
      crossSpace = 0;

  function setBoxLayoutSize(item, axis, size) {
    const isBorderBox = item.attr('boxSizing') === 'border-box';
    const [marginTop, marginRight, marginBottom, marginLeft] = item.attr('margin');
    if (isBorderBox) {
      if (axis === 'width') {
        size = Math.max(0, size - marginRight - marginLeft);
        item.attr({ layoutWidth: size });
      } else if (axis === 'height') {
        size = Math.max(0, size - marginTop - marginBottom);
        item.attr({ layoutHeight: size });
      }
    } else {
      const borderWidth = item.attr('border').width,
            [paddingTop, paddingRight, paddingBottom, paddingLeft] = item.attr('padding');

      if (axis === 'width') {
        size = Math.max(0, size - 2 * borderWidth - paddingRight - paddingLeft - marginRight - marginLeft);
        item.attr({ layoutWidth: size });
      } else if (axis === 'height') {
        size = Math.max(0, size - 2 * borderWidth - paddingTop - paddingBottom - marginTop - marginBottom);
        item.attr({ layoutHeight: size });
      }
    }
  }
  // collect items into lines

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemStyle = item.attributes;

    let [itemMainSize, itemCrossSize] = item.layoutSize;

    if (mainSize === 'height') [itemMainSize, itemCrossSize] = [itemCrossSize, itemMainSize];

    if (itemStyle.flex !== '') {
      flexLine.push(item);
    } else if (style.flexWrap === 'nowrap' || isAutoMainSize) {
      mainSpace -= itemMainSize;
      crossSpace = Math.max(crossSpace, itemCrossSize);
      flexLine.push(item);
    } else {
      if (itemMainSize > groupMainSize) {
        setBoxLayoutSize(item, mainSize, groupMainSize);
        itemMainSize = groupMainSize;
        itemCrossSize = mainSize === 'width' ? item.layoutSize[1] : item.layoutSize[0];
      }
      if (mainSpace < itemMainSize) {
        flexLine.mainSpace = mainSpace;
        flexLine.crossSpace = crossSpace;
        flexLine = [item];
        flexLines.push(flexLine);
        mainSpace = groupMainSize;
        crossSpace = 0;
      } else {
        flexLine.push(item);
      }
      crossSpace = Math.max(crossSpace, itemCrossSize);
      mainSpace -= itemMainSize;
    }
  }
  flexLine.mainSpace = mainSpace;

  if (style.flexWrap === 'nowrap' || isAutoMainSize) {
    const size = getSize(container, crossSize);
    flexLine.crossSpace = !isAutoSize(size) ? size : crossSpace;
  } else {
    flexLine.crossSpace = crossSpace;
  }

  function fixAnchor(item) {
    const [left, top] = item.originalRect,
          margin = item.attr('margin');
    // console.log(margin[3])
    item.attr({ x: x => x - left + margin[3] });
    item.attr({ y: y => y - top + margin[0] });
  }

  if (mainSpace < 0) {
    // overflow (happens only if container is single line), scale every item
    const scale = groupMainSize / (groupMainSize - mainSpace);
    let currentMain = mainBase;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemStyle = item.attributes;
      let boxSize = mainSize === 'width' ? item.layoutSize[0] : item.layoutSize[1];

      if (itemStyle.flex !== '') {
        boxSize = 0;
      }

      boxSize *= scale;

      item.attr(mainStart, currentMain);
      item.attr(mainEnd, currentMain + mainSign * boxSize);
      setBoxLayoutSize(item, mainSize, boxSize);
      currentMain = item.attr(mainEnd);
    }
  } else {
    // process each flex line
    flexLines.forEach(items => {
      const mainSpace = items.mainSpace;
      let flexTotal = 0;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemStyle = item.attributes;

        flexTotal += itemStyle.flex === '' ? 0 : parseInt(itemStyle.flex, 10);
      }

      if (flexTotal > 0) {
        // There is flexible flex items
        let currentMain = mainBase;
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const itemStyle = item.attributes;
          let boxSize = mainSize === 'width' ? item.layoutSize[0] : item.layoutSize[1];

          if (itemStyle.flex !== '') {
            boxSize = mainSpace / flexTotal * parseInt(itemStyle.flex, 10);
          }

          item.attr(mainStart, currentMain);
          item.attr(mainEnd, currentMain + mainSign * boxSize);
          setBoxLayoutSize(item, mainSize, boxSize);
          currentMain = item.attr(mainEnd);
        }
      } else {
        let currentMain = mainBase,
            step = 0;
        // There is *NO* flexible flex items, which means, justifyContent shoud work
        const justifyContent = style.justifyContent;

        if (justifyContent === 'flex-end') {
          currentMain = mainSpace * mainSign + mainBase;
          step = 0;
        } else if (justifyContent === 'center') {
          currentMain = mainSpace / 2 * mainSign + mainBase;
          step = 0;
        } else if (justifyContent === 'space-between') {
          step = mainSpace / (items.length - 1) * mainSign;
          currentMain = mainBase;
        } else if (justifyContent === 'space-around') {
          step = mainSpace / items.length * mainSign;
          currentMain = step / 2 + mainBase;
        }

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const boxSize = mainSize === 'width' ? item.layoutSize[0] : item.layoutSize[1];

          item.attr(mainStart, currentMain);
          item.attr(mainEnd, item.attr(mainStart) + mainSign * boxSize);
          setBoxLayoutSize(item, mainSize, boxSize);
          currentMain = item.attr(mainEnd) + step;
        }
      }
    });
  }

  // compute the cross axis sizes
  // align-items, align-self
  let crossSizeValue;
  const size = getSize(container, crossSize);
  if (isAutoSize(size)) {
    // auto sizing
    crossSpace = 0;
    crossSizeValue = 0;
    for (let i = 0; i < flexLines.length; i++) {
      crossSizeValue += flexLines[i].crossSpace;
    }
    // setBoxSize(container, crossSize, crossSizeValue)
  } else {
    crossSpace = size;
    for (let i = 0; i < flexLines.length; i++) {
      crossSpace -= flexLines[i].crossSpace;
    }
  }

  if (style.flexWrap === 'wrap-reverse') {
    crossBase = isAutoSize(size) ? crossSizeValue : size;
  } else {
    crossBase = 0;
  }

  let step = 0;
  const alignContent = style.alignContent;

  if (alignContent === 'flex-end') {
    crossBase += crossSign * crossSpace;
  } else if (alignContent === 'center') {
    crossBase += crossSign * crossSpace / 2;
  } else if (alignContent === 'space-between') {
    step = crossSpace / (flexLines.length - 1);
  } else if (alignContent === 'space-around') {
    step = crossSpace / flexLines.length;
    crossBase += crossSign * step / 2;
  }

  flexLines.forEach(items => {
    const lineCrossSize = style.alignContent === 'stretch' ? items.crossSpace + crossSpace / flexLines.length : items.crossSpace;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      const align = item.attributes.alignSelf || style.alignItems;

      const size = crossSize === 'width' ? item.offsetSize[0] : item.offsetSize[1];

      if (align === 'flex-start') {
        item.attr(crossStart, crossBase);
        item.attr(crossEnd, item.attr(crossStart) + crossSign * size);
      }

      if (align === 'flex-end') {
        item.attr(crossEnd, crossBase + crossSign * lineCrossSize);
        item.attr(crossStart, item.attr(crossEnd) - crossSign * size);
      }

      if (align === 'center') {
        item.attr(crossStart, crossBase + crossSign * (lineCrossSize - size) / 2);
        item.attr(crossEnd, item.attr(crossStart) + crossSign * size);
      }

      if (align === 'stretch') {
        item.attr(crossStart, crossBase);
        item.attr(crossEnd, crossBase + crossSign * (!isAutoSize(getSize(item, crossSize)) ? size : lineCrossSize));
        // setBoxLayoutSize(item, crossSize, crossSign * (item.attr(crossEnd) - item.attr(crossStart)))
        const crossAttr = crossSize === 'width' ? 'layoutWidth' : 'layoutHeight';
        item.attr(crossAttr, crossSign * (item.attr(crossEnd) - item.attr(crossStart)));
      }

      fixAnchor(item);
    }
    crossBase += crossSign * (lineCrossSize + step);
  });
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _zOrder = Symbol('zOrder');

/* harmony default export */ __webpack_exports__["default"] = ({
  appendChild(sprite, update = true) {
    sprite.remove();

    const children = this.children;
    children.push(sprite);

    this[_zOrder] = this[_zOrder] || 0;
    sprite.connect(this, this[_zOrder]++);

    for (let i = children.length - 1; i > 0; i--) {
      const a = children[i],
            b = children[i - 1];

      if (a.zIndex < b.zIndex) {
        children[i] = b;
        children[i - 1] = a;
      }
    }

    if (update) {
      sprite.forceUpdate();
    }
    return sprite;
  },
  append(...sprites) {
    sprites.forEach(sprite => this.appendChild(sprite));
  },
  removeChild(sprite) {
    const idx = this.children.indexOf(sprite);
    if (idx === -1) {
      return null;
    }
    this.children.splice(idx, 1);
    if (sprite.isVisible() || sprite.lastRenderBox) {
      sprite.forceUpdate();
    }
    sprite.disconnect(this);
    return sprite;
  },
  clear() {
    const children = this.children.slice(0);
    return children.map(child => this.removeChild(child));
  },
  insertBefore(newchild, refchild) {
    if (refchild == null) {
      return this.appendChild(newchild);
    }
    const idx = this.children.indexOf(refchild);
    if (idx >= 0) {
      this.removeChild(newchild);
      this.children.splice(idx, 0, newchild);
      const refZOrder = refchild.zOrder;
      newchild.connect(this, refZOrder);
      newchild.forceUpdate();

      for (let i = 0; i < this.children.length; i++) {
        if (i !== idx) {
          const child = this.children[i],
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
      }

      this[_zOrder] = this[_zOrder] || 0;
      this[_zOrder]++;
    }

    return newchild;
  }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDirtyRect", function() { return clearDirtyRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDirtyRects", function() { return clearDirtyRects; });
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);



// export function isSpriteDirty(sprite, dirtyEls, isUpdateEl = false) {
//   for(let i = 0; i < dirtyEls.length; i++) {
//     const dirtyEl = dirtyEls[i]
//     const box1 = dirtyEl.renderBox,
//       box2 = sprite.renderBox,
//       box3 = dirtyEl.lastRenderBox

//     if(boxIntersect(box1, box2) || isUpdateEl && box3 && boxIntersect(box3, box2)) {
//       return true
//     }
//   }
//   return false
// }

function clearDirtyRect(outputContext, box, width, height) {
  box = box.map((b, i) => {
    return i < 2 ? b - 1 : b + 1;
  });
  const dirtyBox = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["boxIntersect"])(box, [0, 0, width, height]);

  if (dirtyBox) {
    const dirtyRect = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["boxToRect"])(dirtyBox);
    outputContext.rect(...dirtyRect);
  }
}

function clearDirtyRects(outputContext, dirtyEls, isUpdateEl = false) {
  const { width, height } = outputContext.canvas;

  outputContext.beginPath();
  for (let i = 0; i < dirtyEls.length; i++) {
    const dirtyEl = dirtyEls[i];
    const box = dirtyEl.renderBox;

    clearDirtyRect(outputContext, box, width, height);

    if (isUpdateEl) {
      const lastRenderBox = dirtyEl.lastRenderBox;
      if (lastRenderBox && !Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["boxEqual"])(lastRenderBox, box)) {
        clearDirtyRect(outputContext, lastRenderBox, width, height);
      }
    }
  }
  outputContext.clip();
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var sprite_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _helpers_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
var _dec, _dec2, _dec3, _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

const _applyDecoratedDescriptor = __webpack_require__(29);







let PathSpriteAttr = (_dec = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _dec2 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _dec3 = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["deprecate"])('Instead use strokeColor.'), (_class = class PathSpriteAttr extends _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      lineWidth: 1,
      lineDash: null,
      lineDashOffset: 0,
      lineCap: 'butt',
      lineJoin: 'miter',
      strokeColor: '',
      fillColor: '',
      bounding: 'box'
    }, {
      color() {
        return this.strokeColor;
      },
      d() {
        return this.path ? this.path.d : null;
      }
    });
  }

  set path(val) {
    this.clearCache();
    this.clearFlow();
    if (val) {
      val = typeof val === 'string' ? { d: val } : val;
      this.subject.svg = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_3__["createSvgPath"])(val);
      this.set('path', val);
    } else {
      this.subject.svg = null;
      this.set('path', null);
    }
  }

  set d(val) {
    if (val) {
      const path = this.get('path');
      if (!path) {
        this.path = { d: val };
      } else {
        this.path = Object.assign(path, { d: val });
      }
    } else {
      this.path = null;
    }
  }

  set lineWidth(val) {
    this.clearCache();
    this.clearFlow();
    this.set('lineWidth', Math.round(val));
  }

  set lineDash(val) {
    this.clearCache();
    this.set('lineDash', val);
  }

  set lineDashOffset(val) {
    this.clearCache();
    this.set('lineDashOffset', val);
  }

  /**
    lineCap: butt|round|square
   */

  set lineCap(val) {
    this.clearCache();
    this.set('lineCap', val);
  }

  /**
    lineJoin: miter|round|bevel
   */

  set lineJoin(val) {
    this.clearCache();
    this.set('lineJoin', val);
  }

  set strokeColor(val) {
    this.clearCache();
    this.set('strokeColor', Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])(val));
  }

  set fillColor(val) {
    this.clearCache();
    this.set('fillColor', Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])(val));
  }

  set flexible(val) {
    this.clearCache();
    this.clearFlow();
    this.set('flexible', val);
  }

  set bounding(val) {
    // box | path
    this.set('bounding', val);
  }

  set color(val) {
    this.strokeColor = val;
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'path', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'path'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'd', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [_dec, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDash', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineDash'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDashOffset', [_dec2, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineDashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineJoin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'strokeColor', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'strokeColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexible', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flexible'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bounding', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'bounding'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_dec3, sprite_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'color'), _class.prototype)), _class));
let Path = (_class2 = (_temp = _class3 = class Path extends _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"] {

  constructor(attr) {
    if (typeof attr === 'string') {
      attr = { d: attr };
    }
    super(attr);
  }

  set path(val) {
    this.attr('path', val);
  }

  get path() {
    return this.attr('path');
  }

  getPointAtLength(length) {
    if (this.svg) {
      return this.svg.getPointAtLength(length);
    }
    return [0, 0];
  }

  getPathLength() {
    if (this.svg) {
      return this.svg.getTotalLength();
    }
    return 0;
  }

  findPath(offsetX, offsetY) {
    const rect = this.originalRect;
    const pathOffset = this.pathOffset;
    if (this.svg && this.svg.isPointInPath(offsetX - rect[0] - pathOffset[0], offsetY - rect[1] - pathOffset[1])) {
      return [this.svg];
    }
    return [];
  }

  get lineWidth() {
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

  get pathOffset() {
    const lw = Math.round(this.lineWidth);
    return [lw, lw];
  }

  get pathSize() {
    return this.svg ? this.svg.size : [0, 0];
  }

  get contentSize() {
    if (!this.svg) return super.contentSize;

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

  get originalRect() {
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

    return super.originalRect;
  }

  pointCollision(evt) {
    if (super.pointCollision(evt)) {
      let { offsetX, offsetY } = evt;
      const svg = this.svg;
      if (svg) {
        const bounds = svg.bounds;
        offsetX += Math.min(0, bounds[0]);
        offsetY += Math.min(0, bounds[1]);
      }
      evt.targetPaths = this.findPath(offsetX, offsetY);
      if (this.attr('bounding') === 'path') {
        return evt.targetPaths.length > 0;
      }
      return true;
    }
    return false;
  }

  render(t, drawingContext) {
    super.render(t, drawingContext);
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
      if (w < ow || h < oh) {
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

      const fillColor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_2__["findColor"])(drawingContext, this, 'fillColor');
      if (fillColor) {
        drawingContext.fillStyle = fillColor;
      }

      let strokeColor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_2__["findColor"])(drawingContext, this, 'strokeColor');

      if (!strokeColor && !fillColor) {
        strokeColor = Object(sprite_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])('black');
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
}, _class3.Attr = PathSpriteAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [sprite_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);



Path.setAttributeEffects({
  d: _helpers_path__WEBPACK_IMPORTED_MODULE_3__["pathEffect"],
  path(path1, path2, p, start, end) {
    path1 = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_3__["createSvgPath"])(path1);
    path2 = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_3__["createSvgPath"])(path2);
    return Object(_helpers_path__WEBPACK_IMPORTED_MODULE_3__["pathEffect"])(path1.d, path2.d, p, start, end);
  }
});

Object(_nodetype__WEBPACK_IMPORTED_MODULE_4__["registerNodeType"])('path', Path);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);



const _loadBgImagePassport = Symbol('loadBgImagePassport');

let passport;

sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"].prototype.loadBgImage = function (val) {
  let res;
  if (val.id) {
    res = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture({ id: val.id });
  } else if (val.src) {
    res = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture(val.src);
  }
  if (res instanceof Promise) {
    passport = Symbol('passport');
    this[_loadBgImagePassport] = passport;
    res.then(({ img, texture }) => {
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

/* harmony default export */ __webpack_exports__["default"] = (sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"]);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);


const axios = __webpack_require__(61);

const loadedResources = new Map();

/**
  loadTexture({
    id: 'bird1',
    src: 'http://some.path/brid1.png'
  })
 */

const Resource = {
  loadTexture(texture, timeout = 30000) {
    if (typeof texture === 'string') {
      texture = { src: texture };
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
          resolve({ img, texture, fromCache: false });
          loadedResources.set(mapKey, img);
          clearTimeout(timer);
        });
      });
      loadedResources.set(mapKey, promise);
      return promise;
    }
    const img = loadedResources.get(mapKey);
    if (img instanceof Promise) {
      return img;
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
      const { w, h } = frame.sourceSize;

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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return getContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shim", function() { return shim; });
/* harmony import */ var _devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return _devtools__WEBPACK_IMPORTED_MODULE_0__["_debugger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDebugToolsObserver", function() { return _devtools__WEBPACK_IMPORTED_MODULE_0__["setDebugToolsObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDebugToolsObserver", function() { return _devtools__WEBPACK_IMPORTED_MODULE_0__["removeDebugToolsObserver"]; });



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
      params = params || { bubbles: false, cancelable: false, detail: undefined };

      const evt = document.createEvent('CustomEvent');

      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  }
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return _debugger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDebugToolsObserver", function() { return setDebugToolsObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDebugToolsObserver", function() { return removeDebugToolsObserver; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);

const _debugToolsHandler = Symbol('debugToolsHandler');
let _debugToolsOpened = false;

const _debugger = {
  selectedSprite: null
};

function setDebugToolsObserver(scene, layer) {
  let observer, mouseTip, tipEl, debugLayer;

  layer[_debugToolsHandler] = layer[_debugToolsHandler] || {};
  layer[_debugToolsHandler].initObserver = () => {
    let handler;

    debugLayer = scene.layer('__debuglayer__');
    debugLayer.canvas.style.background = 'transparent';
    debugLayer.zIndex = 2147483647;

    function hideMouseTip() {
      if (_debugger.selectedSprite) {
        _debugger.selectedSprite.off('update', handler);
        _debugger.selectedSprite = null;
        const event = new CustomEvent('spritejs: observer', { detail: '' });
        document.dispatchEvent(event);
        if (tipEl) {
          tipEl.attr('opacity', 0);
        }
      }
    }

    observer = evt => {
      const sprites = evt.targetSprites;
      if (sprites.length) {
        const sprite = sprites[0];
        if (sprite) {
          if (_debugger.selectedSprite === sprite) {
            return;
          }if (_debugger.selectedSprite) {
            const event = new CustomEvent('spritejs: observer', { detail: '' });
            document.dispatchEvent(event);
            _debugger.selectedSprite.off('update', handler);
          }

          const event = new CustomEvent('spritejs: observer', { detail: sprite.attr() });
          document.dispatchEvent(event);

          const applyObserver = sprite => {
            const event = new CustomEvent('spritejs: observer', { detail: sprite.attr() });
            document.dispatchEvent(event);
            setMouseTip(sprite);
          };

          handler = evt => {
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
      if (!tipEl) {
        tipEl = new _sprite__WEBPACK_IMPORTED_MODULE_0__["default"]();
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

    mouseTip = evt => {
      if (_debugger.selectedSprite) {
        return;
      }

      const sprite = evt.targetSprites[0];
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

  layer[_debugToolsHandler].removeObserver = () => {
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

  layer[_debugToolsHandler].attrChange = evt => {
    const { key, value } = evt.detail;
    if (_debugger.selectedSprite) {
      const sprite = _debugger.selectedSprite;
      const keys = key.split('.');
      const prop = keys[1];

      if (keys.length === 2) {
        /* eslint-disable no-empty */
        try {
          sprite.attr(prop, value);
        } catch (ex) {}
        /* eslint-enable no-empty */
      } else {
        const attr = sprite.attr(prop);
        for (let i = 2; i < keys.length - 1; i++) {
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

  const debugToolsHandler = layer[_debugToolsHandler];
  document.addEventListener('spritejs: devtools-opened', debugToolsHandler.initObserver);
  document.addEventListener('spritejs: devtools-closed', debugToolsHandler.removeObserver);
  document.addEventListener('spritejs: attr-change', debugToolsHandler.attrChange);
}

function removeDebugToolsObserver(layer) {
  const debugToolsHandler = layer[_debugToolsHandler];
  if (debugToolsHandler) {
    document.removeEventListener('spritejs: devtools-opened', debugToolsHandler.initObserver);
    document.removeEventListener('spritejs: devtools-closed', debugToolsHandler.removeObserver);
    document.removeEventListener('spritejs: attr-change', debugToolsHandler.attrChange);
  }
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
var _desc, _value, _class;

const _applyDecoratedDescriptor = __webpack_require__(29);




const attr = sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"].attr;
const _mapTextures = Symbol('mapTextures'),
      _loadTexturePassport = Symbol('loadTexturePassport');

let ResAttr = (_class = class ResAttr extends sprite_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"].Attr {
  set textures(textures) {
    if (!Array.isArray(textures)) {
      textures = [textures];
    }

    textures = textures.map(texture => {
      if (typeof texture === 'string') {
        texture = { src: texture };
      } else if (!texture.src && !texture.id && !texture.image) {
        texture = { image: texture };
      }

      return texture;
    });

    this.set('textures', textures);
    this.loadTextures(textures);
  }

  [_mapTextures](textures) {
    let clearCache = false;
    const res = textures.map(({ img, texture, fromCache }) => {
      if (!fromCache) clearCache = true;
      return Object.assign({}, texture, { image: img });
    });
    if (clearCache) {
      this.subject.forceUpdate(true);
    }
    super.loadTextures(res);
  }

  loadTextures(textures) {
    // adaptive textures
    const passport = Symbol('passport');
    this[_loadTexturePassport] = passport;
    let hasPromise = false;
    const tasks = textures.map(texture => {
      if (texture.image) {
        return { img: texture.image, texture };
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
}, (_applyDecoratedDescriptor(_class.prototype, 'textures', [attr], Object.getOwnPropertyDescriptor(_class.prototype, 'textures'), _class.prototype)), _class);


sprite_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"].Attr = ResAttr;

/* harmony default export */ __webpack_exports__["default"] = (sprite_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);
var bind = __webpack_require__(64);
var Axios = __webpack_require__(66);
var defaults = __webpack_require__(67);

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
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(84);
axios.CancelToken = __webpack_require__(85);
axios.isCancel = __webpack_require__(81);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(86);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(64);
var isBuffer = __webpack_require__(65);

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
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
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
  if (typeof obj !== 'object' && !isArray(obj)) {
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
  extend: extend,
  trim: trim
};


/***/ }),
/* 64 */
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
/* 65 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(67);
var utils = __webpack_require__(63);
var InterceptorManager = __webpack_require__(78);
var dispatchRequest = __webpack_require__(79);
var isAbsoluteURL = __webpack_require__(82);
var combineURLs = __webpack_require__(83);

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
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(63);
var normalizeHeaderName = __webpack_require__(68);

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
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(69);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(69);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);
var settle = __webpack_require__(70);
var buildURL = __webpack_require__(73);
var parseHeaders = __webpack_require__(74);
var isURLSameOrigin = __webpack_require__(75);
var createError = __webpack_require__(71);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(76);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("none" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

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
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
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
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

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
      var cookies = __webpack_require__(77);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(71);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(72);

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
/* 72 */
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
  return error;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);

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
      }

      if (!utils.isArray(val)) {
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
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);

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
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);

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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);
var transformData = __webpack_require__(80);
var isCancel = __webpack_require__(81);
var defaults = __webpack_require__(67);

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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(63);

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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 82 */
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
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(84);

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
/* 86 */
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
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);



const _resolution = Symbol('resolution');

let ExLayer = class ExLayer extends sprite_core__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  constructor(id, opts = {}) {
    if (typeof id === 'object') {
      opts = id;
      id = opts.id || `id_${Math.random().toString().slice(2, 10)}`;
    }
    let { context,
      resolution,
      handleEvent = true,
      evaluateFPS = false,
      renderMode = 'repaintAll',
      autoRender = true } = opts;

    context = context || Object(_platform__WEBPACK_IMPORTED_MODULE_1__["createCanvas"])().getContext('2d');
    const canvas = context.canvas;
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';

    super({ context, handleEvent, evaluateFPS, renderMode, autoRender });

    if (resolution) {
      this.resolution = resolution;
    } else {
      this[_resolution] = [this.canvas.width, this.canvas.height, 0, 0];
    }
  }

  get id() {
    return this.canvas.dataset.layerId;
  }

  get resolution() {
    return this[_resolution];
  }

  get viewport() {
    const canvas = this.canvas;
    if (canvas && canvas.clientWidth) {
      return [canvas.clientWidth, canvas.clientHeight];
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

  set resolution(resolution) {
    const [width, height, offsetLeft, offsetTop] = resolution;
    const outputCanvas = this.outputContext.canvas;
    outputCanvas.width = width;
    outputCanvas.height = height;
    this.outputContext.clearRect(0, 0, width, height);

    if (offsetLeft || offsetTop) {
      this.outputContext.translate(offsetLeft, offsetTop);
    }

    this.children.forEach(child => {
      delete child.lastRenderBox;
      child.forceUpdate();
    });

    this[_resolution] = resolution;
    this.dispatchEvent('resolutionChange', { target: this }, true, true);
  }

  clearContext(context = this.outputContext) {
    if (context.canvas) {
      const resolution = this.resolution,
            offsetTop = resolution[3],
            offsetLeft = resolution[2];

      context.clearRect(-offsetLeft, -offsetTop, context.canvas.width, context.canvas.height);
    }
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

  async takeSnapshot() {
    await this.prepareRender();
    const snapshotCanvas = this.canvas.cloneNode(true),
          context = snapshotCanvas.getContext('2d');

    context.drawImage(this.canvas, 0, 0);
    const children = this.children.map(child => child.serialize());
    return { context, children };
  }

  putSnapshot(snapshot) {
    const outputContext = this.outputContext;

    this.clearContext(outputContext);
    outputContext.drawImage(snapshot.context.canvas, 0, 0);

    this.clearUpdate();

    snapshot.children.forEach(child => {
      const node = Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["createNode"])(child.nodeType);
      if (child.id) {
        node.id = child.id;
      }
      node.attr(JSON.parse(child.attrs));
      this.appendChild(node, false);
    });

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.dispatchEvent('update', {
        target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox
      }, true);

      child.lastRenderBox = child.renderBox;
    }

    return this.children;
  }

  get zIndex() {
    return this.canvas.style.zIndex;
  }

  set zIndex(zIndex) {
    this.canvas.style.zIndex = zIndex;
  }
};


/* harmony default export */ __webpack_exports__["default"] = (ExLayer);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);





const { setDeprecation, sortOrderedSprites } = sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"];

const _layerMap = Symbol('layerMap'),
      _zOrder = Symbol('zOrder'),
      _layers = Symbol('layers'),
      _snapshot = Symbol('snapshot'),
      _viewport = Symbol('viewport'),
      _resolution = Symbol('resolution'),
      _resizeHandler = Symbol('resizeHandler');

let _default = class _default extends sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseNode"] {
  constructor(container, options = {}) {
    super();

    container = Object(_platform__WEBPACK_IMPORTED_MODULE_3__["getContainer"])(container);

    this.container = container;

    /* istanbul ignore if */
    if (arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */
      options = { viewport: [arguments[1], arguments[2]] };
      /* eslint-enabel prefer-rest-params */
    }

    this[_zOrder] = 0;
    this[_layerMap] = {};
    this[_layers] = [];
    this[_snapshot] = Object(_platform__WEBPACK_IMPORTED_MODULE_3__["createCanvas"])();

    const viewport = options.viewport || ['', ''];
    this.viewport = viewport;

    // scale, width, height, top, bottom, left, right
    // width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend
    this.stickMode = options.stickMode || 'scale';
    this.stickExtend = !!options.stickExtend;
    this.stickOffset = [0, 0];
    this.resolution = options.resolution || [...this.viewport];

    // d3-friendly
    this.namespaceURI = 'http://spritejs.org/scene';
    const that = this;
    this.ownerDocument = {
      createElementNS(uri, name) {
        return that.layer(name);
      }
    };

    const events = ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove', 'click', 'dblclick'];

    events.forEach(event => this.delegateEvent(event));

    /* istanbul ignore next */
    container.addEventListener('DOMNodeRemovedFromDocument', () => {
      if (this[_resizeHandler]) {
        window.removeEventListener('resize', this[_resizeHandler]);
        delete this[_resizeHandler];
      }
    });
  }

  get width() {
    return this.viewport[0];
  }

  get height() {
    return this.viewport[1];
  }

  insertBefore(newchild, refchild) {
    if (!this.hasLayer(refchild)) {
      throw new Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');
    }
    this.appendLayer(newchild);
    this.container.insertBefore(newchild.canvas, refchild.canvas);
    let els;
    /* istanbul ignore if */
    if (this.container.querySelectorAll) {
      els = this.container.querySelectorAll('canvas');
    } else {
      els = this.container.children;
    }
    els.forEach((el, i) => {
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
          layers = layer ? [layer] : this[_layers],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

    layers.forEach(layer => {
      const canvas = layer.canvas;
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
      } else if (!stickExtend && (stickMode === 'right' || stickMode === 'bottom')) {
        canvas.style.right = '0';
        canvas.style.bottom = '0';
      } else {
        canvas.style.top = '0';
        canvas.style.left = '0';
      }
      if (stickExtend) {
        layer.resolution = this.layerResolution;
      }
    });

    this.dispatchEvent('viewportChange', { target: this, layers });
    return this;
  }

  get distortion() /* istanbul ignore next */{
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
      layer.resolution = this.layerResolution;
    });
    this.dispatchEvent('resolutionChange', { target: this, layers });
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
      event = { type: event, passive: true };
    }

    const { type, passive } = event;

    receiver.addEventListener(type, e => {
      const layers = this[_layers];
      const evtArgs = {
        originalEvent: e,
        type,
        stopDispatch() {
          this.terminated = true;
        }
      };

      // mouse event layerX, layerY value change while browser scaled.
      let originalX, originalY, x, y;

      /* istanbul ignore else */
      if (e instanceof CustomEvent) {
        Object.assign(evtArgs, e.detail);
        if (evtArgs.x != null && evtArgs.y != null) {
          x = evtArgs.x;
          y = evtArgs.y;
        } else if (evtArgs.originalX != null && evtArgs.originalY != null) {
          originalX = evtArgs.originalX;
          originalY = evtArgs.originalY;
        }
      } else if (e.target.dataset.layerId && this[_layerMap][e.target.dataset.layerId]) {
        const { left, top } = e.target.getBoundingClientRect();
        const { clientX, clientY } = e.changedTouches ? e.changedTouches[0] : e;

        originalX = Math.round((clientX | 0) - left);
        originalY = Math.round((clientY | 0) - top);
      }

      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if (originalX != null && originalY != null) {
          [x, y] = layer.toLocalPos(originalX, originalY);
        } else if (x != null && y != null) {
          [originalX, originalY] = layer.toGlobalPos(x, y);
        }
        Object.assign(evtArgs, {
          layerX: x, layerY: y, originalX, originalY, x, y
        });

        if (layer.handleEvent) {
          layer.dispatchEvent(type, evtArgs);
        }
      }
    }, { passive });
  }

  dispatchEvent(type, evt) {
    const container = this.container;
    container.dispatchEvent(new CustomEvent(type, { detail: evt }));
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
        const { id, src } = res;
        task = _resource__WEBPACK_IMPORTED_MODULE_2__["default"].loadTexture({ id, src });
      }
      /* istanbul ignore if  */
      if (!(task instanceof Promise)) {
        task = Promise.resolve(task);
      }

      tasks.push(task.then(r => {
        ret.push(r);
        this.dispatchEvent('preload', {
          target: this, current: r, loaded: ret, resources
        });
      }));
    }

    await Promise.all(tasks);
    return ret;
  }

  layer(id = 'default', opts = { handleEvent: true }) {
    if (typeof opts === 'number') {
      opts = { zIndex: opts };
    }
    if (!this.hasLayer(id)) {
      let zIndex = 0;
      if (opts.zIndex != null) {
        zIndex = opts.zIndex;
        delete opts.zIndex;
      }

      /* istanbul ignore if  */
      if (typeof window !== 'undefined' && window.getComputedStyle) {
        const pos = window.getComputedStyle && window.getComputedStyle(this.container).position;

        if (this.container.style && pos !== 'absolute' && pos !== 'fixed') {
          this.container.style.position = 'relative';
        }
      }

      this.appendLayer(new _layer__WEBPACK_IMPORTED_MODULE_1__["default"](id, opts), zIndex);
    }

    return this[_layerMap][id];
  }

  get layers() {
    return this[_layers];
  }

  appendLayer(layer, zIndex = 0) {
    const id = layer.id;

    if (this.hasLayer(id) && this[_layerMap][id] !== layer) {
      throw new Error(`layer ${id} already exists! remove first...`);
    }

    this.removeLayer(layer);

    this[_layerMap][id] = layer;
    layer.connect(this, this[_zOrder]++, zIndex);
    this.updateViewport(layer);
    if (!this.stickExtend) {
      layer.resolution = this.layerResolution;
    }

    this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
    /* istanbul ignore if  */
    if (_platform__WEBPACK_IMPORTED_MODULE_3__["setDebugToolsObserver"] && layer.id !== '__debuglayer__') {
      Object(_platform__WEBPACK_IMPORTED_MODULE_3__["setDebugToolsObserver"])(this, layer);
    }
    return layer;
  }

  removeLayer(layer) {
    if (typeof layer === 'string') {
      layer = this[_layerMap][layer];
    }
    if (this.hasLayer(layer)) {
      layer.disconnect(this);
      delete this[_layerMap][layer.id];
      this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
      /* istanbul ignore if  */
      if (_platform__WEBPACK_IMPORTED_MODULE_3__["removeDebugToolsObserver"]) {
        Object(_platform__WEBPACK_IMPORTED_MODULE_3__["removeDebugToolsObserver"])(layer);
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
      ctx.drawImage(layer.canvas, ...rect);
    });

    return canvas;
  }
};



/***/ })
/******/ ]);