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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "use", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["use"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataNode", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["DataNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Path"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNodeType", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["isValidNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["createNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Easings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Timeline"]; });

/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(153);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(157);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _sprite__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(185);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(154);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _resource__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(155);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return _platform__WEBPACK_IMPORTED_MODULE_6__["_debugger"]; });










const { setDeprecation } = sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"];

if (_platform__WEBPACK_IMPORTED_MODULE_6__["shim"]) {
  Object(_platform__WEBPACK_IMPORTED_MODULE_6__["shim"])();
}

Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"])('layer', _layer__WEBPACK_IMPORTED_MODULE_3__["default"], true);
Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"])('scene', _scene__WEBPACK_IMPORTED_MODULE_4__["default"], true);

function Paper2D(...args) {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.');
  return new _scene__WEBPACK_IMPORTED_MODULE_4__["default"](...args);
}

const version = '2.17.9';



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Easings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"]; });

/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SvgPath", function() { return svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprite_math__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "math", function() { return sprite_math__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(111);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(119);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _basesprite__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _datanode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataNode", function() { return _datanode__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _sprite__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(130);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(139);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _basenode__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _path__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Batch", function() { return _batch__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_13__["registerNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNodeType", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_13__["isValidNodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_13__["createNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _nodetype__WEBPACK_IMPORTED_MODULE_13__["createElement"]; });
















const Color = _utils__WEBPACK_IMPORTED_MODULE_3__["Color"];

const installed = new WeakMap();
const _merged = Symbol('merged');

let target = null;
function use(plugin, options, merge = true) {
  if (!target) {
    target = Object.assign({}, this);
    target.__spritejs = this;
    target.use = use.bind(target);
  }
  if (typeof options === 'boolean') {
    merge = options;
    options = undefined;
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
  const ret = install(target, options) || {};
  installed.set(plugin, ret);
  if (merge) {
    Object.assign(target.__spritejs, ret);
    ret[_merged] = true;
  }
  return ret;
}



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
      if (!timers.has(id)) return; // Need check because it maybe clearTimeout by former handler().
      const { isEntropy, delay, heading } = timer.time,
            { handler, startTime } = timer;

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
    return this[_parent] ? this[_parent].entropy : this.globalTime;
  }

  // get globalTime() {
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
    delay = { delay };
  } else if ('entropy' in delay) {
    delay = { delay: delay.entropy, isEntropy: true };
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
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
};



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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(11);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(65);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toArray2 = __webpack_require__(76);

var _toArray3 = _interopRequireDefault(_toArray2);

var _assign = __webpack_require__(77);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(83);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(84);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(88);

var _symbol2 = _interopRequireDefault(_symbol);

var _spriteMath = __webpack_require__(102);

var _platform = __webpack_require__(105);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var parse = __webpack_require__(106);
var abs = __webpack_require__(107);
var normalize = __webpack_require__(108);
var isSvgPath = __webpack_require__(110);

var _path = (0, _symbol2.default)('path');
var _bounds = (0, _symbol2.default)('bounds');
var _savedPaths = (0, _symbol2.default)('savedPaths');
var _renderProps = (0, _symbol2.default)('renderProps');
var _beginPath = (0, _symbol2.default)('beginPath');

var SvgPath = function () {
  function SvgPath(d) {
    (0, _classCallCheck3.default)(this, SvgPath);

    if (!isSvgPath(d)) {
      throw new Error('Not an SVG path!');
    }

    var path = normalize(abs(parse(d)));

    this[_path] = path;

    this[_bounds] = null;
    this[_savedPaths] = [];
    this[_renderProps] = {};
    this[_beginPath] = false;
  }

  (0, _createClass3.default)(SvgPath, [{
    key: 'save',
    value: function save() {
      this[_savedPaths].push({ path: this[_path],
        bounds: this[_bounds],
        renderProps: (0, _assign2.default)({}, this[_renderProps]) });
      return this;
    }
  }, {
    key: 'restore',
    value: function restore() {
      if (this[_savedPaths].length) {
        var _savedPaths$pop = this[_savedPaths].pop(),
            path = _savedPaths$pop.path,
            bounds = _savedPaths$pop.bounds,
            renderProps = _savedPaths$pop.renderProps;

        this[_path] = path;
        this[_bounds] = bounds;
        this[_renderProps] = renderProps;
      }
      return this;
    }
  }, {
    key: 'isPointInPath',
    value: function isPointInPath(x, y) {
      return (0, _platform.isPointInPath)(this, x, y);
    }
  }, {
    key: 'getPointAtLength',
    value: function getPointAtLength(len) {
      return (0, _platform.getPointAtLength)(this.d, len);
    }
  }, {
    key: 'getTotalLength',
    value: function getTotalLength() {
      return (0, _platform.getTotalLength)(this.d);
    }
  }, {
    key: 'transform',
    value: function transform() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this[_bounds] = null;
      var m = new _spriteMath.Matrix(args);
      var commands = this[_path];
      this[_path] = commands.map(function (c) {
        var _c = (0, _toArray3.default)(c),
            cmd = _c[0],
            args = _c.slice(1);

        var transformed = [cmd];
        for (var i = 0; i < args.length; i += 2) {
          var x0 = args[i],
              y0 = args[i + 1];

          var _m$transformPoint = m.transformPoint(x0, y0),
              _m$transformPoint2 = (0, _slicedToArray3.default)(_m$transformPoint, 2),
              x = _m$transformPoint2[0],
              y = _m$transformPoint2[1];

          transformed.push(x, y);
        }
        return transformed;
      });
      return this;
    }
  }, {
    key: 'translate',
    value: function translate(x, y) {
      var m = new _spriteMath.Matrix().translate(x, y);
      return this.transform.apply(this, (0, _toConsumableArray3.default)(m.m));
    }
  }, {
    key: 'rotate',
    value: function rotate(deg) {
      var m = new _spriteMath.Matrix().rotate(deg);
      return this.transform.apply(this, (0, _toConsumableArray3.default)(m.m));
    }
  }, {
    key: 'scale',
    value: function scale(sx, sy) {
      if (sy == null) sy = sx;
      var m = new _spriteMath.Matrix().scale(sx, sy);
      return this.transform.apply(this, (0, _toConsumableArray3.default)(m.m));
    }
  }, {
    key: 'skew',
    value: function skew(degX, degY) {
      var m = new _spriteMath.Matrix().skew(degX, degY);
      return this.transform.apply(this, (0, _toConsumableArray3.default)(m.m));
    }
  }, {
    key: 'trim',
    value: function trim() {
      var _bounds2 = (0, _slicedToArray3.default)(this.bounds, 2),
          x = _bounds2[0],
          y = _bounds2[1];

      this.translate(-x, -y);
      return this;
    }
  }, {
    key: 'beginPath',
    value: function beginPath() {
      this[_beginPath] = true;
      return this;
    }
  }, {
    key: 'to',
    value: function to(context) {
      var commands = this[_path];
      var renderProps = this[_renderProps];
      if (commands.length) {
        if (this[_beginPath]) {
          context.beginPath();
        }
        commands.forEach(function (c) {
          var _c2 = (0, _toArray3.default)(c),
              cmd = _c2[0],
              args = _c2.slice(1);

          if (cmd === 'M') {
            context.moveTo.apply(context, (0, _toConsumableArray3.default)(args));
          } else {
            context.bezierCurveTo.apply(context, (0, _toConsumableArray3.default)(args));
          }
        });
      }
      (0, _assign2.default)(context, renderProps);
      return {
        stroke: function stroke() {
          context.stroke();
          return this;
        },
        fill: function fill() {
          context.fill();
          return this;
        }
      };
    }
  }, {
    key: 'strokeStyle',
    value: function strokeStyle(value) {
      this[_renderProps].strokeStyle = value;
      return this;
    }
  }, {
    key: 'fillStyle',
    value: function fillStyle(value) {
      this[_renderProps].fillStyle = value;
      return this;
    }
  }, {
    key: 'lineWidth',
    value: function lineWidth(value) {
      this[_renderProps].lineWidth = value;
      return this;
    }
  }, {
    key: 'lineCap',
    value: function lineCap(value) {
      this[_renderProps].lineCap = value;
      return this;
    }
  }, {
    key: 'lineJoin',
    value: function lineJoin(value) {
      this[_renderProps].lineJoin = value;
      return this;
    }
  }, {
    key: 'bounds',
    get: function get() {
      if (!this[_bounds]) {
        var path = this[_path];
        this[_bounds] = [0, 0, 0, 0];
        if (path.length) {
          var bounds = [Infinity, Infinity, -Infinity, -Infinity];

          for (var i = 0, l = path.length; i < l; i++) {
            var points = path[i].slice(1);

            for (var j = 0; j < points.length; j += 2) {
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
  }, {
    key: 'size',
    get: function get() {
      var bounds = this.bounds;
      return [bounds[2] - bounds[0], bounds[3] - bounds[1]];
    }
  }, {
    key: 'center',
    get: function get() {
      var _bounds3 = (0, _slicedToArray3.default)(this.bounds, 4),
          x0 = _bounds3[0],
          y0 = _bounds3[1],
          x1 = _bounds3[2],
          y1 = _bounds3[3];

      return [(x0 + x1) / 2, (y0 + y1) / 2];
    }
  }, {
    key: 'd',
    get: function get() {
      return this[_path].map(function (p) {
        var _p = (0, _toArray3.default)(p),
            c = _p[0],
            points = _p.slice(1);

        return c + points.join();
      }).join('');
    }
  }, {
    key: 'path',
    get: function get() {
      return this[_path];
    }
  }]);
  return SvgPath;
}();

exports.default = SvgPath;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(12);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
__webpack_require__(58);
module.exports = __webpack_require__(22).Array.from;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(15)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(18)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var defined = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(19);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(35);
var hide = __webpack_require__(25);
var has = __webpack_require__(36);
var Iterators = __webpack_require__(37);
var $iterCreate = __webpack_require__(38);
var setToStringTag = __webpack_require__(54);
var getPrototypeOf = __webpack_require__(56);
var ITERATOR = __webpack_require__(55)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var core = __webpack_require__(22);
var ctx = __webpack_require__(23);
var hide = __webpack_require__(25);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(26);
var createDesc = __webpack_require__(34);
module.exports = __webpack_require__(30) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var IE8_DOM_DEFINE = __webpack_require__(29);
var toPrimitive = __webpack_require__(33);
var dP = Object.defineProperty;

exports.f = __webpack_require__(30) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(28);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(30) && !__webpack_require__(31)(function () {
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(31)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(28);
var document = __webpack_require__(21).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(28);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(34);
var setToStringTag = __webpack_require__(54);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(25)(IteratorPrototype, __webpack_require__(55)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(27);
var dPs = __webpack_require__(40);
var enumBugKeys = __webpack_require__(52);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(26);
var anObject = __webpack_require__(27);
var getKeys = __webpack_require__(41);

module.exports = __webpack_require__(30) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(36);
var toIObject = __webpack_require__(43);
var arrayIndexOf = __webpack_require__(46)(false);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(44);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(45);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(43);
var toLength = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(48);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(50)('keys');
var uid = __webpack_require__(51);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(21).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(26).f;
var has = __webpack_require__(36);
var TAG = __webpack_require__(55)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(50)('wks');
var uid = __webpack_require__(51);
var Symbol = __webpack_require__(21).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(36);
var toObject = __webpack_require__(57);
var IE_PROTO = __webpack_require__(49)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(23);
var $export = __webpack_require__(20);
var toObject = __webpack_require__(57);
var call = __webpack_require__(59);
var isArrayIter = __webpack_require__(60);
var toLength = __webpack_require__(47);
var createProperty = __webpack_require__(61);
var getIterFn = __webpack_require__(62);

$export($export.S + $export.F * !__webpack_require__(64)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(27);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(37);
var ITERATOR = __webpack_require__(55)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(26);
var createDesc = __webpack_require__(34);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(63);
var ITERATOR = __webpack_require__(55)('iterator');
var Iterators = __webpack_require__(37);
module.exports = __webpack_require__(22).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(45);
var TAG = __webpack_require__(55)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(55)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(66);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(73);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
__webpack_require__(14);
module.exports = __webpack_require__(72);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var global = __webpack_require__(21);
var hide = __webpack_require__(25);
var Iterators = __webpack_require__(37);
var TO_STRING_TAG = __webpack_require__(55)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(70);
var step = __webpack_require__(71);
var Iterators = __webpack_require__(37);
var toIObject = __webpack_require__(43);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(18)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(63);
var ITERATOR = __webpack_require__(55)('iterator');
var Iterators = __webpack_require__(37);
module.exports = __webpack_require__(22).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
__webpack_require__(14);
module.exports = __webpack_require__(75);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(27);
var get = __webpack_require__(62);
module.exports = __webpack_require__(22).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(12);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
module.exports = __webpack_require__(22).Object.assign;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(20);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(80) });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(41);
var gOPS = __webpack_require__(81);
var pIE = __webpack_require__(82);
var toObject = __webpack_require__(57);
var IObject = __webpack_require__(44);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(31)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(85);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
var $Object = __webpack_require__(22).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(20);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(30), 'Object', { defineProperty: __webpack_require__(26).f });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
module.exports = __webpack_require__(22).Symbol;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(21);
var has = __webpack_require__(36);
var DESCRIPTORS = __webpack_require__(30);
var $export = __webpack_require__(20);
var redefine = __webpack_require__(35);
var META = __webpack_require__(91).KEY;
var $fails = __webpack_require__(31);
var shared = __webpack_require__(50);
var setToStringTag = __webpack_require__(54);
var uid = __webpack_require__(51);
var wks = __webpack_require__(55);
var wksExt = __webpack_require__(92);
var wksDefine = __webpack_require__(93);
var enumKeys = __webpack_require__(94);
var isArray = __webpack_require__(95);
var anObject = __webpack_require__(27);
var toIObject = __webpack_require__(43);
var toPrimitive = __webpack_require__(33);
var createDesc = __webpack_require__(34);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(96);
var $GOPD = __webpack_require__(98);
var $DP = __webpack_require__(26);
var $keys = __webpack_require__(41);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(97).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(82).f = $propertyIsEnumerable;
  __webpack_require__(81).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(19)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(25)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(51)('meta');
var isObject = __webpack_require__(28);
var has = __webpack_require__(36);
var setDesc = __webpack_require__(26).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(31)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(55);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(21);
var core = __webpack_require__(22);
var LIBRARY = __webpack_require__(19);
var wksExt = __webpack_require__(92);
var defineProperty = __webpack_require__(26).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(41);
var gOPS = __webpack_require__(81);
var pIE = __webpack_require__(82);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(45);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(43);
var gOPN = __webpack_require__(97).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(42);
var hiddenKeys = __webpack_require__(52).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(82);
var createDesc = __webpack_require__(34);
var toIObject = __webpack_require__(43);
var toPrimitive = __webpack_require__(33);
var has = __webpack_require__(36);
var IE8_DOM_DEFINE = __webpack_require__(29);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(30) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 99 */
/***/ (function(module, exports) {



/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93)('asyncIterator');


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93)('observable');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = exports.Matrix = undefined;

var _matrix = __webpack_require__(103);

var _matrix2 = _interopRequireDefault(_matrix);

var _vector = __webpack_require__(104);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.Matrix = _matrix2.default;
exports.Vector = _vector2.default;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// from https://github.com/chrisaljoudi/transformatrix.js
/**
  default:
          (1, 0, 0)
          (0, 1, 0)
 */
var Matrix = function Matrix(m) {
  m = m || [1, 0, 0, 1, 0, 0];
  this.m = [m[0], m[1], m[2], m[3], m[4], m[5]];
};

Matrix.prototype.unit = function () {
  this.m = [1, 0, 0, 1, 0, 0];
  return this;
};

Matrix.prototype.multiply = function (m) {
  var m1 = this.m;
  var m2 = void 0;

  if (m instanceof Matrix) {
    m2 = m.m;
  } else {
    m2 = m;
  }

  var m11 = m1[0] * m2[0] + m1[2] * m2[1],
      m12 = m1[1] * m2[0] + m1[3] * m2[1],
      m21 = m1[0] * m2[2] + m1[2] * m2[3],
      m22 = m1[1] * m2[2] + m1[3] * m2[3];

  var dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
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
  var inv = new Matrix(this.m),
      invm = inv.m;

  var d = 1 / (invm[0] * invm[3] - invm[1] * invm[2]),
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
  var rad = deg * Math.PI / 180,
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
  var radX = degX * Math.PI / 180,
      radY = degY * Math.PI / 180;
  var tx = Math.tan(radX),
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
  var x = px,
      y = py;
  px = x * this.m[0] + y * this.m[2] + this.m[4];
  py = x * this.m[1] + y * this.m[3] + this.m[5];

  return [px, py];
};

Matrix.prototype.transformVector = function (px, py) {
  var x = px,
      y = py;
  px = x * this.m[0] + y * this.m[2];
  py = x * this.m[1] + y * this.m[3];

  return [px, py];
};

exports.default = Matrix;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(65);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(83);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(84);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Vector = function () {
  function Vector(p1) {
    var p2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
    (0, _classCallCheck3.default)(this, Vector);

    var _p = (0, _slicedToArray3.default)(p1, 3),
        x1 = _p[0],
        y1 = _p[1],
        z1 = _p[2],
        _p2 = (0, _slicedToArray3.default)(p2, 3),
        x2 = _p2[0],
        y2 = _p2[1],
        z2 = _p2[2];

    z1 = z1 || 0;
    z2 = z2 || 0;

    this.x = x1 - x2;
    this.y = y1 - y2;
    this.z = z1 - z2;
  }

  (0, _createClass3.default)(Vector, [{
    key: "unit",
    value: function unit() {
      var length = this.length;
      return new Vector([this.x / length, this.y / length, this.z / length]);
    }
  }, {
    key: "dot",
    value: function dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
  }, {
    key: "cross",
    value: function cross(v) {
      var x1 = this.x,
          y1 = this.y,
          z1 = this.z,
          x2 = v.x,
          y2 = v.y,
          z2 = v.z;

      return new Vector([y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - x2 * y1]);
    }
  }, {
    key: "length",
    get: function get() {
      var x = this.x,
          y = this.y,
          z = this.z;

      return Math.sqrt(x * x + y * y + z * z);
    }
  }]);
  return Vector;
}();

exports.default = Vector;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPointAtLength = getPointAtLength;
exports.getTotalLength = getTotalLength;
exports.isPointInPath = isPointInPath;
function createSvgPath(d) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  return path;
}

function getPointAtLength(d, len) {
  var path = createSvgPath(d);

  var _path$getPointAtLengt = path.getPointAtLength(len),
      x = _path$getPointAtLengt.x,
      y = _path$getPointAtLengt.y;

  return [x, y];
}

function getTotalLength(d, len) {
  var path = createSvgPath(d);
  return path.getTotalLength(len);
}

function isPointInPath(_ref, x, y) {
  var d = _ref.d;

  var path = new Path2D(d);
  var context = document.createElement('canvas').getContext('2d');
  return context.isPointInPath(path, x, y);
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/jkroso/parse-svg-path

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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/jkroso/abs-svg-path

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray2 = __webpack_require__(65);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// https://github.com/jkroso/normalize-svg-path

module.exports = normalize;

var a2c = __webpack_require__(109);

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

        curves = curves.map(function (curve) {
          var _curve = (0, _slicedToArray3.default)(curve, 8),
              x0 = _curve[0],
              y0 = _curve[1],
              x1 = _curve[2],
              y1 = _curve[3],
              x2 = _curve[4],
              y2 = _curve[5],
              x = _curve[6],
              y = _curve[7];

          return { x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y };
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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/colinmeinke/svg-arc-to-cubic-bezier
//
// Convert an arc to a sequence of cubic bézier curves
//


var TAU = Math.PI * 2;

/* eslint-disable space-infix-ops */

// Calculate an angle between two unit vectors
//
// Since we measure angle between radii of circular arcs,
// we can use simplified math (without length normalization)
//
function unit_vector_angle(ux, uy, vx, vy) {
  var sign = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy;

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
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;

  var rx_sq = rx * rx;
  var ry_sq = ry * ry;
  var x1p_sq = x1p * x1p;
  var y1p_sq = y1p * y1p;

  // Step 2.
  //
  // Compute coordinates of the centre of this ellipse (cx', cy')
  // in the new coordinate system.
  //
  var radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;

  if (radicant < 0) {
    // due to rounding errors it might be e.g. -1.3877787807814457e-17
    radicant = 0;
  }

  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);

  var cxp = radicant * rx / ry * y1p;
  var cyp = radicant * -ry / rx * x1p;

  // Step 3.
  //
  // Transform back to get centre coordinates (cx, cy) in the original
  // coordinate system.
  //
  var cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  var cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2;

  // Step 4.
  //
  // Compute angles (theta1, delta_theta).
  //
  var v1x = (x1p - cxp) / rx;
  var v1y = (y1p - cyp) / ry;
  var v2x = (-x1p - cxp) / rx;
  var v2y = (-y1p - cyp) / ry;

  var theta1 = unit_vector_angle(1, 0, v1x, v1y);
  var delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);

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
  var alpha = 4 / 3 * Math.tan(delta_theta / 4);

  var x1 = Math.cos(theta1);
  var y1 = Math.sin(theta1);
  var x2 = Math.cos(theta1 + delta_theta);
  var y2 = Math.sin(theta1 + delta_theta);

  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}

module.exports = function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  var sin_phi = Math.sin(phi * TAU / 360);
  var cos_phi = Math.cos(phi * TAU / 360);

  // Make sure radii are valid
  //
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;

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

  var lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }

  // Get center parameters (cx, cy, theta1, delta_theta)
  //
  var cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);

  var result = [];
  var theta1 = cc[2];
  var delta_theta = cc[3];

  // Split an arc to multiple segments, so each segment
  // will be less than τ/4 (= 90°)
  //
  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;

  for (var i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  }

  // We have a bezier approximation of a unit circle,
  // now need to transform back to the original ellipse
  //
  return result.map(function (curve) {
    for (var _i = 0; _i < curve.length; _i += 2) {
      var x = curve[_i + 0];
      var y = curve[_i + 1];

      // scale
      x *= rx;
      y *= ry;

      // rotate
      var xp = cos_phi * x - sin_phi * y;
      var yp = sin_phi * x + cos_phi * y;

      // translate
      curve[_i + 0] = xp + cc[0];
      curve[_i + 1] = yp + cc[1];
    }

    return curve;
  });
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/dy/is-svg-path

module.exports = function isPath(str) {
  if (typeof str !== 'string') return false;

  str = str.trim();

  // https://www.w3.org/TR/SVG/paths.html#PathDataBNF
  if (/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(str) && /[\dz]$/i.test(str) && str.length > 4) return true;

  return false;
};

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxEqual", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["boxEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxIntersect", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["boxIntersect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxToRect", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["boxToRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxUnion", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["boxUnion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["fourValuesShortCut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["notice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["oneOrTwoValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["praseString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseStringFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseStringInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["parseStringTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectToBox", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["rectToBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["rectVertices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cachable", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["cachable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["attr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["deprecate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["flow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "absolute", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["absolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return _decorators__WEBPACK_IMPORTED_MODULE_1__["setDeprecation"]; });

/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return _helpers_render__WEBPACK_IMPORTED_MODULE_2__["findColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return _helpers_render__WEBPACK_IMPORTED_MODULE_2__["cacheContextPool"]; });









/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return appendUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxEqual", function() { return boxEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxIntersect", function() { return boxIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxToRect", function() { return boxToRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxUnion", function() { return boxUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return fourValuesShortCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return oneOrTwoValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return parseColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return praseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return parseStringFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return parseStringInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return parseStringTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectToBox", function() { return rectToBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return rectVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return sortOrderedSprites; });
const colorString = __webpack_require__(113);

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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(114);
var swizzle = __webpack_require__(115);

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
/* 114 */
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(116);

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
/* 116 */
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
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cachable", function() { return cachable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absolute", function() { return absolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return setDeprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);


const _attrAbsolute = Symbol('attrAbsolute');

function attr(target, prop, descriptor) {
  if (!target.hasOwnProperty('__attributeNames')) {
    // eslint-disable-line no-prototype-builtins
    target.__attributeNames = new Set(target.__attributeNames);
  }
  target.__attributeNames.add(prop);
  let _getter = descriptor.get;
  if (!_getter) {
    _getter = function () {
      return this.get(prop);
    };
  }
  if (!descriptor.__relative && !descriptor.__inherit) {
    descriptor.get = function () {
      let ret = _getter.call(this);
      if (ret == null) {
        ret = this.get(prop);
      }
      return ret;
    };
  } else if (descriptor.__relative) {
    // enable set default to user defined getter
    descriptor.get = function () {
      let ret = _getter.call(this);
      const subject = this.subject;

      if (ret == null) {
        ret = this.get(prop);
      } else if (ret.relative) {
        const relative = ret.relative.trim();
        if (relative === 'pw' || relative === 'ph') {
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
          if (pv !== ret.pv) {
            this[prop] = ret.rv;
            return this[prop];
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
            this[prop] = ret.rv;
            return this[prop];
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
        ret = this.get(prop);
      } else if (ret.inherit) {
        const parent = subject.parent;
        const pv = parent ? parent.attr(prop) : ret.pv;
        if (pv !== ret.pv) {
          this[prop] = 'inherit';
          return this[prop];
        }
        subject.cache = null;
        return ret.pv;
      }
      return ret;
    };
  }

  const _setter = descriptor.set;
  const _clearCache = !descriptor.__cachable;

  descriptor.set = function (val) {
    const subject = this.subject;
    this.__updateTag = false;
    this.__reflowTag = false;
    _setter.call(this, val);
    if (subject && subject.hasLayout) {
      const offsetSize = subject.boxOffsetSize,
            layoutSize = subject.__lastLayout;

      if (!layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
        subject.parent.clearLayout();
      }
      subject.__lastLayout = offsetSize;
    }
    if (this.subject && this.__updateTag) {
      subject.forceUpdate(_clearCache);
      if (this.__reflowTag) {
        subject.reflow();
      }
    }
    // delete this.__reflowTag;
    // delete this.__updateTag;
  };
  return descriptor;
}

// after attr
function cachable(target, prop, descriptor) {
  descriptor.__cachable = true;
  return descriptor;
}

// after attr
function inherit(defaultValue = '') {
  return function (target, prop, descriptor) {
    if (descriptor.set) {
      const setter = descriptor.set;
      descriptor.__inherit = true;

      descriptor.set = function (val) {
        if (typeof val === 'string') {
          val = val.trim();
          if (val === 'inherit') {
            const parent = this.subject.parent;
            let pv = parent ? parent.attr(prop) : defaultValue;
            if (pv === 'inherit') pv = defaultValue;
            val = {
              inherit: true,
              pv
            };
          }
        }
        setter.call(this, val);
      };

      return descriptor;
    }
  };
}

// after attr
// relative -> width | height
function relative(type = 'width') {
  return function (target, prop, descriptor) {
    if (descriptor.set) {
      const setter = descriptor.set;
      descriptor.__relative = true;

      descriptor.set = function (val) {
        if (typeof val === 'string') {
          val = val.trim();
          if (val.slice(-1) === '%') {
            let parent = this.subject.parent;
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
              if (type === 'width') {
                pv = attrSize ? parent.contentSize[0] : parent.resolution[0];
              } else if (type === 'height') {
                pv = attrSize ? parent.contentSize[1] : parent.resolution[1];
              }
            }
            val = {
              relative: type === 'width' ? 'pw' : 'ph',
              pv,
              v: parseFloat(val) / 100,
              rv: val
            };
          } else if (val.slice(-2) === 'rw') {
            const layer = this.subject.layer;
            let pv = null;
            if (layer) {
              pv = layer.resolution[0];
            }
            val = {
              relative: 'rw',
              pv,
              v: parseFloat(val) / 100,
              rv: val
            };
          } else if (val.slice(-2) === 'rh') {
            const layer = this.subject.layer;
            let pv = null;
            if (layer) {
              pv = layer.resolution[1];
            }
            val = {
              relative: 'rh',
              pv,
              v: parseFloat(val) / 100,
              rv: val
            };
          } else {
            val = val ? parseFloat(val) : val;
          }
        }
        setter.call(this, val);
      };
      return descriptor;
    }
  };
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

// set tag force to get absolute value from relative attributes
function absolute(target, prop, descriptor) {
  if (descriptor.get) {
    const _getter = descriptor.get;
    descriptor.get = function () {
      this[_attrAbsolute] = true;
      const ret = _getter.call(this);
      this[_attrAbsolute] = false;
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

// before attr
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

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawRadiusBox", function() { return drawRadiusBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return findColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return cacheContextPool; });
function drawRadiusBox(context, { x, y, w, h, r }) {
  // avoid radius larger than width or height
  r = Math.min(r, Math.floor(Math.min(w, h) / 2));
  // avoid radius is negative
  r = Math.max(r, 0);

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
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseSprite; });
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sprite_math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(121);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(122);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(123);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(126);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(118);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(127);
var _dec, _desc, _value, _class, _class2, _temp;

const _applyDecoratedDescriptor = __webpack_require__(120);












const _attr = Symbol('attr'),
      _animations = Symbol('animations'),
      _cachePriority = Symbol('cachePriority'),
      _effects = Symbol('effects'),
      _flow = Symbol('flow'),
      _changeStateAction = Symbol('changeStateAction'),
      _resolveState = Symbol('resolveState'),
      _show = Symbol('show'),
      _hide = Symbol('hide'),
      _enter = Symbol('enter');

let BaseSprite = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["deprecate"])('Instead use sprite.cache = null'), (_class = (_temp = _class2 = class BaseSprite extends _basenode__WEBPACK_IMPORTED_MODULE_4__["default"] {

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

    if (attr) {
      this.attr(attr);
    }
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
        this.Attr.prototype.__attributeNames.add(prop);
        Object.defineProperty(this.Attr.prototype, prop, {
          set(val) {
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
              this.subject.forceUpdate(true);
              if (this.__reflowTag) {
                this.subject.reflow();
              }
            }
            // delete this.__reflowTag;
            // delete this.__updateTag;
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
      if (!this[_attr].__attributeNames.has(key)) {
        this[_attr].__extendAttributes.add(key);
        this.forceUpdate(true);
      }
    };
    if (typeof props === 'object') {
      Object.entries(props).forEach(([prop, value]) => {
        this.attr(prop, value);
      });
      return this;
    }if (typeof props === 'string') {
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

  get animations() {
    return this[_animations];
  }

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
      animation = this.animate([_fromState, _toState], Object.assign({ fill: 'forwards' }, action));
      animation.finished.then(() => {
        if (this[_changeStateAction] && this[_changeStateAction].animation === animation) delete this[_changeStateAction];
      });
    }
    this[_changeStateAction] = { animation, fromState, toState, action, reversable: action.reversable !== false };
    return animation;
  }

  connect(parent, zOrder = 0) {
    if (parent && !(parent instanceof _basenode__WEBPACK_IMPORTED_MODULE_4__["default"])) {
      const node = new _basenode__WEBPACK_IMPORTED_MODULE_4__["default"]();
      node.context = parent;
      node.timeline = new sprite_animator__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();
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

  get xy() {
    let x, y;
    if (this.hasLayout) {
      x = this.attr('layoutX');
      y = this.attr('layoutY');
    } else {
      [x, y] = this.attr('pos');
    }
    return [x, y];
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
      }
      if (height !== '') {
        height = Math.max(0, height - 2 * borderWidth - paddingTop - paddingBottom);
      }
    }
    return [width, height];
  }

  get boxOffsetSize() {
    // get original boxSize, without layout
    if (this.isVirtual) return [0, 0];
    const [width, height] = this.attr('size');
    const [top, right, bottom, left] = this.attr('padding');
    const { width: borderWidth } = this.attr('border'),
          lw = borderWidth * 2;

    return [left + (width | 0) + right + lw, top + (height | 0) + bottom + lw];
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
          pos = this.xy;

    return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
  }

  get renderBox() {
    const bound = this.boundingRect,
          pos = this.xy;

    return [Math.floor(pos[0] + bound[0]), Math.floor(pos[1] + bound[1]), Math.ceil(pos[0] + bound[0] + bound[2]), Math.ceil(pos[1] + bound[1] + bound[3])];
  }

  get renderRect() {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["boxToRect"])(this.renderBox);
  }

  get vertices() {
    const vertices = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["rectVertices"])(this.originalRect),
          transform = this.transform,
          [x0, y0] = this.xy;

    return vertices.map(v => {
      const [x, y] = transform.transformPoint(v[0], v[1]);
      return [x0 + x, y0 + y];
    });
  }

  set cache(context) {
    if (context == null) {
      this[_cachePriority] = 0;
      if (this.parent && this.parent.cache) {
        this.parent.cache = null;
      }
    }
    if (this.cacheContext && context !== this.cacheContext) {
      _helpers_render__WEBPACK_IMPORTED_MODULE_7__["cacheContextPool"].put(this.cacheContext);
    }
    this.cacheContext = context;
  }

  get cache() {
    if (this[_cachePriority] >= 6) {
      return this.cacheContext;
    }
    if (this.cacheContext) {
      this.cache = null;
    }
    return false;
  }

  clearCache() {
    this.cache = null;
  }

  appendTo(parent) {
    parent.appendChild(this);
  }

  forceUpdate(clearCache = false) {
    if (clearCache) {
      this.cache = null;
    }
    const parent = this.parent;
    if (parent) {
      this.parent.update(this);
    }
  }

  // layer position to sprite offset
  pointToOffset(x, y) {
    const [x0, y0] = this.xy;
    const [dx, dy] = [x - x0, y - y0];
    const transform = this.transform;
    return transform.inverse().transformPoint(dx, dy);
  }

  offsetToPoint(dx, dy) {
    const transform = this.transform;
    const [x0, y0] = this.xy;
    const [x, y] = transform.transformPoint(dx, dy);
    return [x + x0, y + y0];
  }

  dispatchEvent(type, evt, collisionState = false, swallow = false) {
    let parentX, parentY;

    if (evt.parentX != null) {
      // group
      parentX = evt.parentX;
      parentY = evt.parentY;
    } else {
      parentX = evt.layerX;
      parentY = evt.layerY;
    }

    if (parentX == null && parentY == null) {
      collisionState = true;
    } else {
      const [nx, ny] = this.pointToOffset(parentX, parentY);
      evt.offsetX = nx;
      evt.offsetY = ny;
    }

    return super.dispatchEvent(type, evt, collisionState, swallow);
  }

  pointCollision(evt) {
    /* istanbul ignore if */
    if (!this.isVisible()) {
      return false;
    }

    let nx = evt.offsetX,
        ny = evt.offsetY;

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
    let cachableContext = !this.isVirtual && this.cache;

    const filter = this.attr('filter'),
          shadow = this.attr('shadow'),
          enableCache = this.attr('enableCache');

    const ratio = this.layer ? this.layer.displayRatio || 1.0 : 1.0;

    if (enableCache && (shadow || filter || cachableContext !== false) && !cachableContext) {
      cachableContext = _helpers_render__WEBPACK_IMPORTED_MODULE_7__["cacheContextPool"].get(drawingContext);
      if (cachableContext) {
        // +2 to solve 1px problem
        cachableContext.canvas.width = Math.ceil(bound[2] * ratio) + 2;
        cachableContext.canvas.height = Math.ceil(bound[3] * ratio) + 2;
      }
    }

    const evtArgs = { context: drawingContext, cacheContext: cachableContext, target: this, renderTime: t, fromCache: !!this.cache };

    drawingContext.save();
    drawingContext.translate(...this.xy);
    drawingContext.transform(...this.transform.m);

    // fix for wxapp
    const alpha = drawingContext.globalAlpha != null ? drawingContext.globalAlpha : 1;
    drawingContext.globalAlpha = alpha * this.attr('opacity');

    if (!cachableContext) {
      drawingContext.translate(bound[0], bound[1]);
    } else {
      cachableContext.save();
      // solve 1px problem
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
          this.once(`state-from-${fromState}`, ({ animation }) => {
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
  }

  // state: original -> show -> hide -> show -> original
  show() {
    if (this[_show]) return this[_show];

    const originalDisplay = this.attr('_originalDisplay') || '';
    const originalState = this.attr('_originalState') || 'default';

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
          delete this[_attr]._originalDisplay;
          delete this[_attr]._originalState;
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
  }

  hide() {
    const state = this.attr('state');
    if (this[_hide] || state === 'hide' || state === 'afterExit' || state === 'beforeExit') return this[_hide];
    const _originalDisplay = this.attr('_originalDisplay');
    if (_originalDisplay == null) {
      const display = this.attr('display');

      this.attr({
        _originalDisplay: display !== 'none' ? display : '',
        _originalState: state !== 'hide' ? state : 'default'
      });
    }

    const states = this.attr('states');

    if (states.hide) {
      const deferred = this.resolveStates(['show', 'hide'], () => {
        if (!states.show) {
          const beforeHide = { __default: true };
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
  }

  enter(toState) {
    const states = this.attr('states');
    let ret;
    if (states && (states.beforeEnter || states.afterEnter)) {
      const deferred = this.resolveStates(['beforeEnter', 'afterEnter'], _states => {
        const state = this.attr('state');
        _states.push(toState || state);
        if (state !== 'beforeEnter' && state !== 'afterEnter' && (!states.afterEnter || states.afterEnter.__default)) {
          const afterEnter = { __default: true };
          Object.keys(states.beforeEnter).forEach(key => {
            afterEnter[key] = this.attr(key);
          });
          states.afterEnter = afterEnter;
          this.attr('states', states);
        }
      });
      ret = deferred;
    } else {
      ret = super.enter();
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
              const afterEnter = { __default: true };
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
        const entries = this.children.map(c => c.enter()).filter(d => d.promise);
        if (ret.promise) {
          entries.unshift(ret);
        }
        if (entries.length) {
          const deferred = {
            promise: Promise.all(entries.map(d => d.promise)),
            resolve: () => {
              entries.forEach(d => d.resolve());
              return this.promise;
            }
          };
          this[_enter] = deferred;
        }
      }
    }

    return this[_enter];
  }

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
            this[_attr].quietSet('state', toState || state);
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
            return super.exit();
          });
          ret = rs;
        } else {
          ret = super.exit();
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
                c[_attr].quietSet('state', c.__toState);
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

        const exites = this.children.map(c => c.exit()).filter(d => d.promise);
        if (ret.promise) {
          exites.unshift(ret);
        }
        if (exites.length) {
          const deferred = {
            promise: Promise.all(exites.map(d => d.promise)),
            resolve: () => {
              exites.forEach(d => d.resolve());
              return this.promise;
            }
          };
          return deferred;
        }
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
}, _class2.Attr = _attr__WEBPACK_IMPORTED_MODULE_3__["default"], _temp), (_applyDecoratedDescriptor(_class.prototype, 'xy', [_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"]], Object.getOwnPropertyDescriptor(_class.prototype, 'xy'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'attrSize', [_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"], _utils__WEBPACK_IMPORTED_MODULE_2__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'attrSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'boxOffsetSize', [_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"], _utils__WEBPACK_IMPORTED_MODULE_2__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'boxOffsetSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'contentSize', [_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'contentSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clientSize', [_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'clientSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetSize', [_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'offsetSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'originalRect', [_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, 'originalRect'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clearCache', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'clearCache'), _class.prototype)), _class));



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

  // draw .9 cross
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
  }

  // draw four corners
  drawingContext.drawImage(image, ...leftTop, borderWidth, borderWidth, left, top);
  drawingContext.drawImage(image, ...rightTop, boxRight, borderWidth, right, top);
  drawingContext.drawImage(image, ...rightBottom, boxRight, boxBottom, left, bottom);
  drawingContext.drawImage(image, ...leftBottom, borderWidth, boxBottom, left, bottom);
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
/* 120 */
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
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sprite_math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _desc, _value, _class;

const _applyDecoratedDescriptor = __webpack_require__(120);





const _attr = Symbol('attr'),
      _temp = Symbol('store'),
      _subject = Symbol('subject'),
      _default = Symbol('default'),
      _props = Symbol('props');

let SpriteAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["deprecate"])('You can remove this call.'), _dec2 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_2__["oneOrTwoValues"]), _dec3 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["relative"])('width'), _dec4 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["relative"])('height'), _dec5 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["relative"])('width'), _dec6 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["relative"])('height'), _dec7 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringInt"]), _dec8 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_2__["parseColorString"]), _dec9 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["relative"])('width'), _dec10 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["relative"])('height'), _dec11 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["relative"])('width'), _dec12 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["relative"])('height'), _dec13 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringInt"]), _dec14 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringInt"], _utils__WEBPACK_IMPORTED_MODULE_2__["fourValuesShortCut"]), _dec15 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(parseFloat), _dec16 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(parseFloat), _dec17 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringTransform"]), _dec18 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(parseFloat), _dec19 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_2__["oneOrTwoValues"]), _dec20 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(parseFloat), _dec21 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(parseFloat), _dec22 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(parseFloat), _dec23 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringInt"], _utils__WEBPACK_IMPORTED_MODULE_2__["fourValuesShortCut"]), (_class = class SpriteAttr {
  constructor(subject) {
    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this[_props] = {};

    this.setDefault({
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
      exitMode: 'normal',
      anchor: [0, 0],
      enableCache: true,
      x: 0,
      y: 0,
      opacity: 1,
      width: '',
      height: '',
      layoutX: 0,
      layoutY: 0,
      layoutWidth: '',
      layoutHeight: '',
      bgcolor: '',
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
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
    });
    this[_temp] = new Map(); // save non-serialized values
    this.__extendAttributes = new Set();
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
    if (val == null) {
      val = this[_default][key];
    }
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
    if (key === 'width' || key === 'height' || key === 'layoutWidth' || key === 'layoutHeight' || key === 'display' || key === 'anchor' || key === 'border' || key === 'padding' || key === 'boxSizing' || key === 'margin' || key === 'flexBasis' || key === 'flex') {
      this.__reflowTag = true;
    }
  }

  get(key) {
    return this[_attr][key];
  }

  get attrs() {
    const ret = {};
    [...this.__attributeNames].forEach(key => {
      if (key in this[_props]) {
        Object.defineProperty(ret, key, this[_props][key]);
      } else {
        ret[key] = this[key];
      }
    });
    [...this.__extendAttributes].forEach(key => {
      ret[key] = this[key];
    });
    return ret;
  }

  clearCache() {
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
          const offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1___default.a(value);
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

  set enableCache(val) {
    return this.set('enableCache', val);
  }

  set anchor(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('anchor', val);
  }

  set display(val) {
    this.set('display', val);
  }

  set layoutX(val) {
    this.set('layoutX', val);
  }

  set layoutY(val) {
    this.set('layoutY', val);
  }

  set x(val) {
    this.set('x', val);
  }

  set y(val) {
    this.set('y', val);
  }

  set pos(val) {
    if (val == null) {
      val = [0, 0];
    }
    const [x, y] = val;
    this.x = x;
    this.y = y;
  }

  get pos() {
    return [this.x, this.y];
  }

  set bgcolor(val) {
    this.set('bgcolor', val);
  }

  set opacity(val) {
    this.set('opacity', val);
  }

  set width(val) {
    this.set('width', val);
  }

  set height(val) {
    this.set('height', val);
  }

  set layoutWidth(val) {
    this.set('layoutWidth', val);
  }

  set layoutHeight(val) {
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

  get size() {
    return [this.width, this.height];
  }

  set border(val) {
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
        color: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseColorString"])(val[1] || '#000')
      };
    } else {
      val.width = parseFloat(val.width);
      val.color = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseColorString"])(val.color || '#000');
    }
    val = Object.assign({
      width: 1,
      color: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseColorString"])('#000'),
      style: 'solid'
    }, val);
    this.set('border', val);
  }

  set padding(val) {
    this.set('padding', val);
  }

  set borderRadius(val) {
    this.set('borderRadius', val);
  }

  set boxSizing(val) {
    this.set('boxSizing', val);
  }

  set dashOffset(val) {
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
    val = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["oneOrTwoValues"])(val).map(v => {
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
    const subject = this.subject;
    if (subject.parent) {
      subject.parent.childNodes.sort((a, b) => {
        if (a.zIndex === b.zIndex) {
          return a.zOrder - b.zOrder;
        }
        return a.zIndex - b.zIndex;
      });
    }
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

  get linearGradients() {
    return this.gradients;
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
        offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1___default.a(offsetPath);
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
    const offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1___default.a(val);

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

  set flexGrow(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('flexGrow', val);
  }

  set flexShrink(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('flexShrink', val);
  }

  set flexBasis(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    if (val && val !== 'auto') {
      val = parseFloat(val);
    }
    this.set('flexBasis', val);
  }

  set flex(val) {
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
  }

  get flex() {
    return `${this.flexGrow} ${this.flexShrink} ${this.flexBasis}`;
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
    if (val && val.clip9) val.clip9 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fourValuesShortCut"])(val.clip9);
    if (val && !val.image && this.subject.loadBgImage) {
      val = this.subject.loadBgImage(val);
    }
    this.set('bgimage', val);
  }

  set states(val) {
    val = Object.assign({}, val);
    const states = this.get('states');
    // recover __default
    Object.entries(states).forEach(([key, value]) => {
      if (value.__default && !(key in val)) {
        val[key] = value;
      }
    });
    this.quietSet('states', val);
  }

  set actions(val) {
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
    const defaultVal = this[_default].actions;
    val = Object.assign({}, defaultVal, val);
    this.quietSet('actions', val);
  }

  set state(val) {
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
        if (!action || action === 'none') action = { duration: 0 };

        const animation = subject.changeState(fromState, toState, action);
        const tag = Symbol('tag');
        animation.tag = tag;
        if (animation.__reversed) {
          subject.dispatchEvent(`state-to-${oldState}`, {
            from: val,
            to: oldState,
            action: animation.__reversed,
            cancelled: true,
            animation }, true, true);
        }
        subject.dispatchEvent(`state-from-${oldState}`, { from: oldState, to: val, action, animation }, true, true);
        animation.finished.then(() => {
          if (animation.tag === tag) {
            subject.dispatchEvent(`state-to-${val}`, { from: oldState, to: val, action, animation }, true, true);
          }
        });
        if (oldState === 'afterExit') {
          animation.finish();
        }
      } else {
        subject.dispatchEvent(`state-from-${oldState}`, { from: oldState, to: val }, true, true);
        if (toState) subject.attr(toState);
        subject.dispatchEvent(`state-to-${val}`, { from: oldState, to: val }, true, true);
      }
    }
  }

  set enterMode(val) {
    this.set('enterMode', val);
  }

  set exitMode(val) {
    this.set('exitMode', val);
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'clearCache', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'clearCache'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'id', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'id'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'name', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'name'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'enableCache', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'enableCache'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anchor', [_dec2, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'anchor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'display', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'display'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutX', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _dec3, _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutX'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutY', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _dec4, _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutY'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'x', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _dec5, _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'x'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'y', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _dec6, _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'y'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pos', [_dec7, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'pos'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bgcolor', [_dec8, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'bgcolor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'opacity', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'opacity'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'height', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'height'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutHeight', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _dec12], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'size', [_dec13, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'size'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'border', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'border'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'padding', [_dec14, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'padding'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'borderRadius', [_dec15, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'borderRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'boxSizing', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'boxSizing'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'dashOffset', [_dec16, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'dashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transform', [_dec17, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'transform'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transformOrigin', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'transformOrigin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'rotate', [_dec18, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'rotate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scale', [_dec19, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'scale'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'translate', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'translate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'skew', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'skew'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'zIndex', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'zIndex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'linearGradients', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'linearGradients'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'gradients', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'gradients'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetPath', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'offsetPath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetDistance', [_dec20, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'offsetDistance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetRotate', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'offsetRotate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'filter', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'filter'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'shadow', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'shadow'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexGrow', [_dec21, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flexGrow'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexShrink', [_dec22, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flexShrink'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexBasis', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flexBasis'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flex', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'order', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'order'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'position', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'position'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'alignSelf', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'alignSelf'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'margin', [_dec23, _utils__WEBPACK_IMPORTED_MODULE_2__["attr"], _utils__WEBPACK_IMPORTED_MODULE_2__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, 'margin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bgimage', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'bgimage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'states', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'states'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'actions', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'actions'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'state', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'state'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'enterMode', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'enterMode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'exitMode', [_utils__WEBPACK_IMPORTED_MODULE_2__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'exitMode'), _class.prototype)), _class));


/* harmony default export */ __webpack_exports__["default"] = (SpriteAttr);

/***/ }),
/* 122 */
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

  once(type, handler) {
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

  remove(exit = true) {
    if (!this.parent) return null;
    return this.parent.removeChild(this, exit);
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
    // eslint-disable-line complexity
    const handlers = this.getEventHandlers(type);
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
    }

    if (!evt.terminated && (isCollision || captured)) {
      if (!evt.target) evt.target = this;

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
          evt.touches = touches;
          evt.changedTouches = Array.from(changedTouches);
        }
      }

      [...handlers].forEach(handler => handler.call(this, evt));

      if (!this[_collisionState] && isCollision && type === 'mousemove') {
        const _evt = Object.assign({}, evt);
        _evt.type = 'mouseenter';
        delete _evt.target;
        _evt.terminated = false;
        this.dispatchEvent('mouseenter', _evt, true, true);
        this[_collisionState] = true;
      }
    }

    if (this[_collisionState] && !isCollision && type === 'mousemove') {
      const _evt = Object.assign({}, evt);
      _evt.type = 'mouseleave';
      delete _evt.target;
      _evt.terminated = false;
      this.dispatchEvent('mouseleave', _evt);
      // this[_collisionState] = false;
    }

    return isCollision;
  }

  get parentNode() {
    return this.parent;
  }

  contains(node) {
    while (node && this !== node) {
      node = node.parent;
    }
    return !!node;
  }

  // called when layer appendChild
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

    return this;
  }

  // override to recycling resources
  disconnect(parent) {
    if (!this.parent || parent !== this.parent) {
      throw new Error('Invalid node to disconnect');
    }

    const zOrder = this.zOrder;
    delete this.zOrder;
    delete this.parent;
    delete this.isDirty;

    this.dispatchEvent('remove', {
      parent,
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
};


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprite_math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
/* harmony import */ var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(124);





const _defaultEffect = sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"].default;

const defaultEffect = (from, to, p, start, end) => {
  let unitFrom = 'px',
      unitTo = 'px';
  let matchFrom = null,
      matchTo = null;

  const exp = /^(\d+|\d*\.\d+)(%|rh|rw)$/i;
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
      const that = this;
      return new Promise(resolve => {
        function update() {
          sprite.attr(that.frame);
          const playState = that.playState;
          if (playState === 'finished' || playState === 'idle') {
            Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_3__["cancelAnimationFrame"])(that.requestId);
            resolve();
          } else {
            Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_3__["requestAnimationFrame"])(update);
          }
        }
        update();
      });
    });
  }

  finish() {
    // finish should change attrs synchronously
    super.finish();
    Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_3__["cancelAnimationFrame"])(this.requestId);
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
      that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_3__["requestAnimationFrame"])(function update() {
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
          that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_3__["requestAnimationFrame"])(update);
        } else if (playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
          // playbackRate < 0 will cause playState reset to pending...
          that.ready.then(() => {
            sprite.attr(that.frame);
            that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_3__["requestAnimationFrame"])(update);
          });
        }
      });
    });
  }

  cancel(preserveState = false) {
    Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_3__["cancelAnimationFrame"])(this.requestId);
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
/* 124 */
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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(125)))

/***/ }),
/* 125 */
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
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return registerNodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return createNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNodeType", function() { return isValidNodeType; });
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
      if (selector.charAt(0) === '#') {
        ret = this.getElementById(selector.slice(1));
      } else if (selector.charAt(0) === ':') {
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
      if (selector.charAt(0) === '#') {
        const sprite = this.getElementById(selector.slice(1));
        ret = sprite ? [sprite] : [];
      }
      if (selector.charAt(0) === ':') {
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

function isValidNodeType(type) {
  return !!getNodeType(type);
}

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
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
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(126);
var _class, _temp;




let DataAttr = class DataAttr extends _basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      display: 'none'
    });
  }
};
let DataNode = (_temp = _class = class DataNode extends _basesprite__WEBPACK_IMPORTED_MODULE_0__["default"] {}, _class.Attr = DataAttr, _temp);


Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('data', DataNode, true);

/* harmony default export */ __webpack_exports__["default"] = (DataNode);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(126);
var _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

const _applyDecoratedDescriptor = __webpack_require__(120);







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
}, (_applyDecoratedDescriptor(_class.prototype, 'textures', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'textures'), _class.prototype)), _class);
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

  // set cache(context) {
  //   if(context == null) {
  //     cacheContextPool.put(...this[_texturesCache].values());
  //     this[_texturesCache].clear();
  //     return;
  //   }
  //   const key = JSON.stringify(this.textures),
  //     cacheMap = this[_texturesCache];

  //   if(!cacheMap.has(key)) {
  //     cacheMap.set(key, context);
  //   }
  // }

  // get cache() {
  //   const key = JSON.stringify(this.textures),
  //     cacheMap = this[_texturesCache];
  //   if(cacheMap.has(key)) {
  //     return cacheMap.get(key);
  //   }
  //   return null;
  // }

  get cache() {
    const bg = this.attr('bgcolor') || this.attr('gradients').bgcolor;
    if (!bg && this.textures.length <= 1) {
      return false;
    }
    return super.cache;
  }

  set cache(context) {
    super.cache = context;
  }

  render(t, drawingContext) {
    super.render(t, drawingContext);
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
}, _class3.Attr = TextureAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'contentSize'), _class2.prototype)), _class2);



Object(_nodetype__WEBPACK_IMPORTED_MODULE_3__["registerNodeType"])('sprite', Sprite);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_line_break__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(111);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(126);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(118);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

const _applyDecoratedDescriptor = __webpack_require__(120);








const parseFont = __webpack_require__(136);
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
      const breaker = Object(css_line_break__WEBPACK_IMPORTED_MODULE_0__["LineBreaker"])(line, { lineBreak, wordBreak });
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

let LabelSpriteAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('normal normal normal 16px Arial'), _dec2 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat), _dec3 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"]), _dec4 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(''), _dec5 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"]), _dec6 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(''), _dec7 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(''), _dec8 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(''), _dec9 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(''), _dec10 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(''), _dec11 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["relative"])('width'), _dec12 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["relative"])('height'), (_class = class LabelSpriteAttr extends _basesprite__WEBPACK_IMPORTED_MODULE_2__["default"].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      font: 'normal normal normal 16px Arial',
      textAlign: 'left',
      strokeColor: '',
      fillColor: '',
      lineHeight: '',
      text: '',
      flexible: false,
      lineBreak: '',
      wordBreak: 'normal',
      letterSpacing: 0,
      textIndent: 0,
      enableCache: false
    });
  }

  set text(val) {
    val = String(val);
    this.set('text', val);
    calculTextboxSize(this.subject);
  }

  set font(val) {
    this.set('font', val);
    calculTextboxSize(this.subject);
  }

  set fontSize(val) {
    if (val == null) val = '16px';
    let unit = 'px';
    if (typeof val === 'string') {
      const unitReg = /^(\d+)(\w+)/;
      const matches = val.match(unitReg);
      if (!matches) {
        return null;
      }
      val = parseInt(matches[1], 10);
      unit = matches[2];
    }
    const font = this.font;
    const { style, variant, weight, family } = parseFont(font);
    const fontValue = `${style} ${variant} ${weight} ${val}${unit} ${family}`;
    this.font = fontValue;
  }

  get fontSize() {
    const font = this.font;
    const { size0, unit } = parseFont(font);
    return `${size0}${unit}`;
  }

  set fontFamily(val) {
    if (val == null) val = 'Arial';
    const font = this.font;
    const { style, variant, weight, size0, unit } = parseFont(font);
    const fontValue = `${style} ${variant} ${weight} ${size0}${unit} ${val}`;
    this.font = fontValue;
  }

  get fontFamily() {
    return parseFont(this.font).family;
  }

  set fontStyle(val) {
    if (val == null) val = 'normal';
    const font = this.font;
    const { variant, weight, size0, unit, family } = parseFont(font);
    const fontValue = `${val} ${variant} ${weight} ${size0}${unit} ${family}`;
    this.font = fontValue;
  }

  get fontStyle() {
    return parseFont(this.font).style;
  }

  set fontVariant(val) {
    if (val == null) val = 'normal';
    const font = this.font;
    const { style, weight, size0, unit, family } = parseFont(font);
    const fontValue = `${style} ${val} ${weight} ${size0}${unit} ${family}`;
    this.font = fontValue;
  }

  get fontVariant() {
    return parseFont(this.font).variant;
  }

  set fontWeight(val) {
    if (val == null) val = 'normal';
    const font = this.font;
    const { style, variant, size0, unit, family } = parseFont(font);
    const fontValue = `${style} ${variant} ${val} ${size0}${unit} ${family}`;
    this.font = fontValue;
  }

  get fontWeight() {
    return parseFont(this.font).weight;
  }

  set lineHeight(val) {
    this.set('lineHeight', val);
    calculTextboxSize(this.subject);
  }

  set textAlign(val) {
    this.set('textAlign', val);
    calculTextboxSize(this.subject);
  }

  set color(val) {
    this.fillColor = val;
  }

  get color() {
    return this.fillColor;
  }

  set strokeColor(val) {
    this.set('strokeColor', val);
  }

  set fillColor(val) {
    this.set('fillColor', val);
  }

  set flexible(val) {
    this.set('flexible', val);
  }

  set lineBreak(val) {
    // normal, strict, none
    this.set('lineBreak', val);
    calculTextboxSize(this.subject);
  }

  set wordBreak(val) {
    // normal | break-all | break-word | keep-all
    this.set('wordBreak', val);
    calculTextboxSize(this.subject);
  }

  set letterSpacing(value) {
    if (typeof value === 'string') value = parseFloat(value);
    this.set('letterSpacing', value);
    calculTextboxSize(this.subject);
  }

  set textIndent(value) {
    if (typeof value === 'string') value = parseFloat(value);
    this.set('textIndent', value);
    calculTextboxSize(this.subject);
  }

  set width(val) {
    if (this.lineBreak !== '') calculTextboxSize(this.subject);
    this.set('width', val);
  }

  set layoutWidth(val) {
    if (this.lineBreak !== '') calculTextboxSize(this.subject);
    this.set('layoutWidth', val);
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'text', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'text'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'font', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec], Object.getOwnPropertyDescriptor(_class.prototype, 'font'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontSize', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'fontSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontFamily', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'fontFamily'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontStyle', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'fontStyle'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontVariant', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'fontVariant'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fontWeight', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'fontWeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineHeight', [_dec2, _utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textAlign', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'textAlign'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'strokeColor', [_dec3, _utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'strokeColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [_dec5, _utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexible', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flexible'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineBreak', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'lineBreak'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'wordBreak', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'wordBreak'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'letterSpacing', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'letterSpacing'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textIndent', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'textIndent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [_utils__WEBPACK_IMPORTED_MODULE_1__["attr"], _dec12], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutWidth'), _class.prototype)), _class));
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
}, _class3.Attr = LabelSpriteAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [_utils__WEBPACK_IMPORTED_MODULE_1__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'contentSize'), _class2.prototype)), _class2);



Object(_nodetype__WEBPACK_IMPORTED_MODULE_3__["registerNodeType"])('label', Label);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(132);

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

var _LineBreak = __webpack_require__(133);

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),
/* 132 */
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(134);

var _linebreakTrie = __webpack_require__(135);

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(132);

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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(132);

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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),
/* 136 */
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
    family: sizeFamily[3].replace(/ *, */g, ',')

    // Optional, unordered properties.
  };let weight, style, variant, stretch;
  // Stop search at `sizeFamily.index`
  let substr = str.substring(0, sizeFamily.index);
  if (weight = weightRe.exec(substr)) font.weight = weight[1];
  if (style = styleRe.exec(substr)) font.style = style[1];
  if (variant = variantRe.exec(substr)) font.variant = variant[1];
  if (stretch = stretchRe.exec(substr)) font.stretch = stretch[1];

  font.size0 = font.size;

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
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(122);
/* harmony import */ var _datanode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(139);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(126);
/* harmony import */ var _helpers_dirty_check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(151);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(150);












const _children = Symbol('children'),
      _updateSet = Symbol('updateSet'),
      _zOrder = Symbol('zOrder'),
      _tRecord = Symbol('tRecord'),
      _timeline = Symbol('timeline'),
      _renderDeferer = Symbol('renderDeferrer'),
      _drawTask = Symbol('drawTask'),
      _autoRender = Symbol('autoRender'),
      _adjustTimer = Symbol('adjustTimer'),
      _node = Symbol('node');

let Layer = class Layer extends _basenode__WEBPACK_IMPORTED_MODULE_2__["default"] {
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

    this[_children] = [];
    this[_updateSet] = new Set();
    this[_zOrder] = 0;
    this[_tRecord] = []; // calculate FPS
    this[_timeline] = new sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"](_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["timeline"]);
    this[_renderDeferer] = null;

    this[_node] = new _datanode__WEBPACK_IMPORTED_MODULE_3__["default"]();

    this.touchedTargets = {};

    // auto release
    /* istanbul ignore if  */
    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('DOMNodeRemovedFromDocument', () => {
        this._savePlaybackRate = this.timeline.playbackRate;
        this._saveChildren = [...this[_children]];
        this.remove(...this[_children]);
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
  }

  attr(...args) {
    this.prepareRender();
    return this[_node].attr(...args);
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
    return this[_children].filter(child => child instanceof _basenode__WEBPACK_IMPORTED_MODULE_2__["default"] && !(child instanceof _datanode__WEBPACK_IMPORTED_MODULE_3__["default"]));
  }

  get childNodes() {
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

  clearContext(context = this.outputContext) {
    if (context.canvas) {
      const { width, height } = context.canvas;
      context.clearRect(0, 0, width, height);
    }
  }

  prepareRender() {
    if (!this[_renderDeferer]) {
      this[_renderDeferer] = {};
      this[_renderDeferer].promise = new Promise((resolve, reject) => {
        Object.assign(this[_renderDeferer], { resolve, reject });
        if (this.autoRender) {
          this[_drawTask] = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(() => {
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
      Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["cancelAnimationFrame"])(this[_drawTask]);
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

    super.dispatchEvent.call(this, 'update', { target: this, timeline: this.timeline, renderTime: currentTime }, true, true);

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
    if (this.beforeDrawTransform) {
      this.outputContext.save();
      this.beforeDrawTransform();
    }
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
    if (this.beforeDrawTransform) {
      this.outputContext.restore();
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
    if (this.beforeDrawTransform) {
      this.beforeDrawTransform();
    }
    outputContext.beginPath();
    Object(_helpers_dirty_check__WEBPACK_IMPORTED_MODULE_7__["clearDirtyRects"])(outputContext, updateEls, true);
    outputContext.restore();
    if (clearContext) this.clearContext(outputContext);
    this.drawSprites(renderEls, t);
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
    if (!swallow && !evt.terminated && type !== 'mouseenter') {
      let isCollision = collisionState || this.pointCollision(evt);
      const changedTouches = evt.originalEvent && evt.originalEvent.changedTouches;
      if (changedTouches && type === 'touchend') {
        isCollision = true;
      }
      if (isCollision || type === 'mouseleave') {
        const sprites = this[_children].slice(0).reverse(),
              targetSprites = [];

        if (changedTouches && type === 'touchend') {
          const touch = changedTouches[0];
          if (touch && touch.identifier != null) {
            const targets = this.layer.touchedTargets[touch.identifier];
            if (targets) {
              targets.forEach(target => {
                if (target !== this && target.layer === this) {
                  target.dispatchEvent(type, evt, true, true);
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
              if (evt.targetSprites) {
                targetSprites.push(...evt.targetSprites);
                delete evt.targetSprites;
              }
              // detect mouseenter/mouseleave
              targetSprites.push(sprite);
            }
            if (evt.terminated && type !== 'mousemove') {
              break;
            }
          }
        }
        evt.targetSprites = targetSprites;
        // stopDispatch can only terminate event in the same level
        evt.terminated = false;
        collisionState = isCollision;
      }
    }
    evt.targetSprites = evt.targetSprites || [];
    if (evt.cancelBubble) {
      // stop bubbling
      return false;
    }
    if (evt.targetSprites.length > 0) {
      // bubbling
      collisionState = true;
    }
    return super.dispatchEvent(type, evt, collisionState, swallow);
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
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Batch; });
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);


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
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(126);
/* harmony import */ var _helpers_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(140);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(122);
/* harmony import */ var _datanode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(128);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(142);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(150);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class, _class2, _temp, _desc2, _value2, _class3, _class4, _temp2;

const _applyDecoratedDescriptor = __webpack_require__(120);













const _children = Symbol('children'),
      _zOrder = Symbol('zOrder'),
      _layoutTag = Symbol('layoutTag');

let GroupAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('width'), _dec2 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('height'), _dec3 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('width'), _dec4 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('height'), _dec5 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _dec6 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), (_class = (_temp = _class2 = class GroupAttr extends _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr {

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
    this.set('width', value);
  }

  set height(value) {
    this.subject.clearLayout();
    this.set('height', value);
  }

  set layoutWidth(value) {
    this.subject.clearLayout();
    this.set('layoutWidth', value);
  }

  set layoutHeight(value) {
    this.subject.clearLayout();
    this.set('layoutHeight', value);
  }

  set display(value) {
    this.subject.clearLayout();
    this.set('display', value);
  }

  set scrollLeft(value) {
    this.set('scrollLeft', value);
  }

  set scrollTop(value) {
    this.set('scrollTop', value);
  }
}, _class2.inits = [], _temp), (_applyDecoratedDescriptor(_class.prototype, 'clip', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'clip'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec], Object.getOwnPropertyDescriptor(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'height', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'height'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutHeight', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'layoutHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'display', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'display'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scrollLeft', [_dec5, _utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'scrollLeft'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scrollTop', [_dec6, _utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'scrollTop'), _class.prototype)), _class));


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
    if (display !== '' && display !== 'none') return false;
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
      const children = this[_children];
      children.forEach(child => {
        const subNode = child.cloneNode(deepCopy);
        node.append(subNode);
      });
    }
    return node;
  }

  get children() {
    return this[_children].filter(child => child instanceof _basenode__WEBPACK_IMPORTED_MODULE_4__["default"] && !(child instanceof _datanode__WEBPACK_IMPORTED_MODULE_5__["default"]));
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
        if (offsetX == null && offsetY == null) return true;
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

  dispatchEvent(type, evt, collisionState = false, swallow = false) {
    if (swallow && this.getEventHandlers(type).length === 0) {
      return;
    }
    if (!swallow && !evt.terminated && type !== 'mouseenter') {
      const isCollision = collisionState || this.pointCollision(evt);
      if (isCollision || type === 'mouseleave') {
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

        const sprites = this[_children].slice(0).reverse();

        const targetSprites = [];

        for (let i = 0; i < sprites.length && evt.isInClip !== false; i++) {
          const sprite = sprites[i];
          const hit = sprite.dispatchEvent(type, evt, collisionState, swallow);
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

        evt.targetSprites = targetSprites;
        // stopDispatch can only terminate event in the same level
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
    if (evt.targetSprites.length > 0) {
      // bubbling
      collisionState = true;
    }
    return super.dispatchEvent(type, evt, collisionState, swallow);
  }

  relayout() {
    const items = this[_children].filter(child => {
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
      drawingContext.beginPath();
      drawingContext.rect(0, 0, this.contentSize[0], this.contentSize[1]);
      drawingContext.clip();
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
}, _class4.Attr = GroupAttr, _temp2), (_applyDecoratedDescriptor(_class3.prototype, 'contentSize', [_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class3.prototype, 'contentSize'), _class3.prototype)), _class3);


Object.assign(Group.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_7__["default"]);
Group.applyLayout('flex', _layout__WEBPACK_IMPORTED_MODULE_6__["flexLayout"]);

Object(_nodetype__WEBPACK_IMPORTED_MODULE_2__["registerNodeType"])('group', Group, true);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathEffect", function() { return pathEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgPath", function() { return createSvgPath; });
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141);
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
  pathA = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0___default.a(pathA);
  pathB = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0___default.a(pathB);
  return lerp(pathA, pathB, ep);
}

function createSvgPath(path) {
  if (typeof path === 'string') path = { d: path };
  const p = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0___default.a(path.d);
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
/* 141 */
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
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "flexLayout", function() { return _flex__WEBPACK_IMPORTED_MODULE_0__; });




/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relayout", function() { return relayout; });
/* harmony import */ var sprite_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);


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
    attr.subject.clearLayout();
    attr.set('flexDirection', value);
  },
  flexWrap(attr, value) {
    attr.subject.clearLayout();
    attr.set('flexWrap', value);
  },
  justifyContent(attr, value) {
    attr.subject.clearLayout();
    attr.set('justifyContent', value);
  },
  alignItems(attr, value) {
    attr.subject.clearLayout();
    attr.set('alignItems', value);
  },
  alignContent(attr, value) {
    attr.subject.clearLayout();
    attr.set('alignContent', value);
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
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return _node__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(147);




let id = 1;
let Node = class Node {
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
    const layout = { left: this.left || 0, top: this.top || 0, width, height };
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
};


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
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);


let Config = class Config {
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
};


/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),
/* 147 */
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
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flexLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);



let Compose = class Compose {
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
      });
      // margin between lines
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
};


/* harmony default export */ __webpack_exports__["default"] = (Compose);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);


const CROSS_AXIS_SIZE = Symbol('crossAxisSize');

let FlexLine = class FlexLine {
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
      items.push({ max: item[this.mainMaxSize], grow: item.flexGrow });
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
      items.push({ min: item[this.mainMinSize], shrink: shrinkItem });
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
    const mainSize = this.container[this.mainSize];
    // container size is not set
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
};


/* harmony default export */ __webpack_exports__["default"] = (FlexLine);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);

const _zOrder = Symbol('zOrder');
const _removeTask = Symbol('removeTask');

/* harmony default export */ __webpack_exports__["default"] = ({
  appendChild(sprite, update = true) {
    const _append = () => {
      const children = this.childNodes;
      children.push(sprite);

      this[_zOrder] = this[_zOrder] || 0;
      sprite.connect(this, this[_zOrder]++);
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(this.childNodes);

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

      if (sprite.layer) {
        return sprite.enter();
      }
      return sprite;
    };

    const _remove = sprite.remove();
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
      delete child[_removeTask];
      // re-calculate index because it's async...
      const idx = that.childNodes.indexOf(child);
      if (idx === -1) {
        return null;
      }
      that.childNodes.splice(idx, 1);
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

        this.childNodes.push(newchild);
        newchild.connect(this, refZOrder);
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(this.childNodes);
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
  }
});

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDirtyRect", function() { return clearDirtyRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDirtyRects", function() { return clearDirtyRects; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);



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
  const dirtyBox = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["boxIntersect"])(box, [0, 0, width, height]);

  if (dirtyBox) {
    const dirtyRect = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["boxToRect"])(dirtyBox);
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
      if (lastRenderBox && !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["boxEqual"])(lastRenderBox, box)) {
        clearDirtyRect(outputContext, lastRenderBox, width, height);
      }
    }
  }
  outputContext.clip();
}

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(119);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);
/* harmony import */ var _helpers_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(140);
/* harmony import */ var _nodetype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(126);
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _desc, _value, _class, _desc2, _value2, _class2, _class3, _temp;

const _applyDecoratedDescriptor = __webpack_require__(120);







let PathSpriteAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])(1), _dec2 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_0__["parseStringFloat"]), _dec3 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat), _dec4 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('butt'), _dec5 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('miter'), _dec6 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])(''), _dec7 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])(''), _dec8 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('box'), (_class = class PathSpriteAttr extends _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr {
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
      }
    });
  }

  set path(val) {
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

  get d() {
    return this.path ? this.path.d : null;
  }

  set lineWidth(val) {
    if (typeof val === 'string') val = parseFloat(val);
    this.clearFlow();
    this.set('lineWidth', Math.round(val));
  }

  set lineDash(val) {
    if (typeof val === 'number') val = [val];
    this.set('lineDash', val);
  }

  set lineDashOffset(val) {
    this.set('lineDashOffset', val);
  }

  /**
    lineCap: butt|round|square
   */

  set lineCap(val) {
    this.set('lineCap', val);
  }

  /**
    lineJoin: miter|round|bevel
   */

  set lineJoin(val) {
    this.set('lineJoin', val);
  }

  set strokeColor(val) {
    this.set('strokeColor', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])(val));
  }

  set fillColor(val) {
    this.set('fillColor', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])(val));
  }

  set flexible(val) {
    this.clearFlow();
    this.set('flexible', val);
  }

  set bounding(val) {
    // box | path
    this.quietSet('bounding', val);
  }

  set color(val) {
    this.strokeColor = val;
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'path', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'path'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'd', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec], Object.getOwnPropertyDescriptor(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDash', [_dec2, _utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineDash'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDashOffset', [_dec3, _utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'lineDashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'lineJoin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'strokeColor', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'strokeColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexible', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'flexible'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bounding', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"], _dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'bounding'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, 'color'), _class.prototype)), _class));
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
      if (offsetX == null && offsetY == null) return true;

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
}, _class3.Attr = PathSpriteAttr, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'contentSize', [_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'contentSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'originalRect', [_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, 'originalRect'), _class2.prototype)), _class2);



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
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154);



const _loadBgImagePassport = Symbol('loadBgImagePassport');

sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"].prototype.loadBgImage = function (val) {
  let res;
  if (val.id) {
    res = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture({ id: val.id });
  } else if (val.src) {
    res = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture(val.src);
  }
  if (res instanceof Promise) {
    const passport = Symbol('passport');
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
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);


const axios = __webpack_require__(158);

const loadedResources = new Map();

/**
  loadTexture({
    id: 'bird1',
    src: 'http://some.path/brid1.png'
  })
 */

const Resource = {
  loadTimeout: 30000,
  loadTexture(texture, timeout = Resource.loadTimeout) {
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
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return getContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shim", function() { return shim; });
/* harmony import */ var _devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
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
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return _debugger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDebugToolsObserver", function() { return setDebugToolsObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDebugToolsObserver", function() { return removeDebugToolsObserver; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);

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
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154);
var _desc, _value, _class;

const _applyDecoratedDescriptor = __webpack_require__(120);




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
      // async loaded images
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(159);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);
var bind = __webpack_require__(161);
var Axios = __webpack_require__(163);
var defaults = __webpack_require__(164);

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
axios.Cancel = __webpack_require__(182);
axios.CancelToken = __webpack_require__(183);
axios.isCancel = __webpack_require__(179);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(184);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(161);
var isBuffer = __webpack_require__(162);

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
/* 161 */
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
/* 162 */
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(164);
var utils = __webpack_require__(160);
var InterceptorManager = __webpack_require__(176);
var dispatchRequest = __webpack_require__(177);
var isAbsoluteURL = __webpack_require__(180);
var combineURLs = __webpack_require__(181);

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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(160);
var normalizeHeaderName = __webpack_require__(166);

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
    adapter = __webpack_require__(167);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(167);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(165)))

/***/ }),
/* 165 */
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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);
var settle = __webpack_require__(168);
var buildURL = __webpack_require__(171);
var parseHeaders = __webpack_require__(172);
var isURLSameOrigin = __webpack_require__(173);
var createError = __webpack_require__(169);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(174);

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
      var cookies = __webpack_require__(175);

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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(169);

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
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(170);

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
/* 170 */
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);

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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);

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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);

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
/* 174 */
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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);

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
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);

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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);
var transformData = __webpack_require__(178);
var isCancel = __webpack_require__(179);
var defaults = __webpack_require__(164);

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
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(160);

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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 180 */
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
/* 181 */
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
/* 182 */
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
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(182);

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
/* 184 */
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
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(155);



const _resolution = Symbol('resolution');
const _attrs = Symbol('attrs');
const _displayRatio = Symbol('displayRatio');

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

    this[_attrs] = new Set(['renderMode', 'autoRender', 'evaluateFps', 'handleEvent', 'displayRatio']);
  }

  get id() {
    return this.canvas.dataset.layerId;
  }

  get style() {
    return this.canvas.style;
  }

  setAttribute(name, value) {
    if (this[_attrs].has(name)) {
      this[name] = value;
    } else {
      this.canvas.setAttribute(name, value);
    }
  }

  getAttribute(name) {
    if (this[_attrs].has(name)) {
      return this[name];
    }
    return this.canvas.getAttribute(name);
  }

  removeAttribute(name) {
    if (this[_attrs].has(name)) {
      this[name] = null;
    } else {
      this.canvas.removeAttribute(name);
    }
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
    this.dispatchEvent('ratioChange', { target: this }, true, true);
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
    outputCanvas.height = height;
    // this.outputContext.clearRect(0, 0, width, height);

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
    this[_resolution] = resolution;
    if (this[_displayRatio] == null) {
      this.setDisplayRatio(this.parent.displayRatio, this.parent.maxDisplayRatio, false);
    }
    this.updateDisplay();
    this.dispatchEvent('resolutionChange', { target: this }, true, true);
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
      const { width, height } = context.canvas;
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

    for (let i = 0; i < this.childNodes.length; i++) {
      const child = this.childNodes[i];
      child.dispatchEvent('update', {
        target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox
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
};


/* harmony default export */ __webpack_exports__["default"] = (ExLayer);

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(154);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(155);





const { setDeprecation, sortOrderedSprites } = sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"];

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

    this.maxDisplayRatio = options.maxDisplayRatio || Infinity;
    this.displayRatio = options.displayRatio || 1.0;

    // d3-friendly
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
  }

  // unit vw、rw (default 1rw ?)
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
      this.dispatchEvent('ratioChange', { target: this, layers });
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
    return this.layers.filter(layer => layer.canvas);
  }

  get childNodes() {
    return this.layers;
  }

  get id() {
    if (this.container) {
      return this.container.id;
    }
    return undefined;
  }

  get style() {
    return this.container.style;
  }

  setAttribute(name, value) {
    if (this[_attrs].has(name)) {
      this[name] = value;
    } else {
      this.container.setAttribute(name, value);
    }
  }

  getAttribute(name) {
    if (this[_attrs].has(name)) {
      return this[name];
    }
    return this.container.getAttribute(name);
  }

  removeAttribute(name) {
    if (this[_attrs].has(name)) {
      this[name] = null;
    } else {
      this.container.removeAttribute(name);
    }
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
      return true;
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
      if (layer.canvas) {
        layer.resolution = this.layerResolution;
      }
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

    if (this[_events].has(event.type)) {
      return false;
    }

    this[_events].add(event.type);

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
      } else {
        originalX = NaN;
        originalY = NaN;
      }

      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if (layer.handleEvent) {
          if (originalX != null && originalY != null) {
            [x, y] = layer.toLocalPos(originalX, originalY);
          } else if (x != null && y != null) {
            [originalX, originalY] = layer.toGlobalPos(x, y);
          }
          Object.assign(evtArgs, {
            layerX: x, layerY: y, originalX, originalY, x, y
          });
          layer.dispatchEvent(type, evtArgs);
        }
      }
    }, { passive });

    return true;
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
      layer.dataset.layerId = layer.id;
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
    this.updateViewport(layer);
    // layer.setDisplayRatio(this.displayRatio, this.maxDisplayRatio, false);
    if (!this.stickExtend) {
      layer.resolution = this.layerResolution;
    }

    this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
    /* istanbul ignore if  */
    if (_platform__WEBPACK_IMPORTED_MODULE_3__["setDebugToolsObserver"] && layer.id !== '__debuglayer__') {
      Object(_platform__WEBPACK_IMPORTED_MODULE_3__["setDebugToolsObserver"])(this, layer);
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
      if (layer.canvas) {
        ctx.drawImage(layer.canvas, ...rect);
      }
    });

    return canvas;
  }
};



/***/ })
/******/ ]);