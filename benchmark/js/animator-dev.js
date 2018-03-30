(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Animator"] = factory();
	else
		root["Animator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function nowtime() {
  /* eslint-disable no-undef */
  if(typeof performance !== 'undefined' && performance.now) {
    return performance.now()
  }
  /* eslint-enable no-undef */
  return Date.now ? Date.now() : (new Date()).getTime()
}

if(typeof global.requestAnimationFrame === 'undefined') {
  global.requestAnimationFrame = function (callback) {
    return setTimeout(function () { // polyfill
      callback.call(this, nowtime())
    }, 1000 / 60)
  }
  global.cancelAnimationFrame = function (qId) {
    return clearTimeout(qId)
  }
}

const FrameManager = {
  steps: new Set(),
  add(step) {
    const steps = this.steps,
      timerId = this.timerId
    if(steps.has(step)) {
      return false
    }
    steps.add(step)
    const that = this
    if(timerId == null) {
      this.timerId = requestAnimationFrame(function step(t) {
        [...steps].forEach((step) => {
          if(step(t)) {
            steps.delete(step)
          }
        })
        if(steps.size) {
          requestAnimationFrame(step)
        } else {
          that.timerId = null
        }
      })
    }
  },
  remove(step) {
    const steps = this.steps
    if(steps.has(step)) {
      steps.delete(step)
    }
  },
  timerId: null,
}

class Animator {
  constructor(duration, update, easing) {
    this.duration = duration
    this.update = update
    this.easing = easing
  }
  animate(startTime) {
    startTime = startTime || 0

    const duration = this.duration,
      update = this.update,
      easing = this.easing,
      self = this

    return new Promise(((resolve, reject) => {
      function step(timestamp) {
        startTime = startTime || timestamp
        const p = Math.min(1.0, (timestamp - startTime) / duration)

        update.call(self, easing ? easing(p) : p, p)

        if(p < 1.0) {
          return false
        }

        resolve(startTime + duration)
        return true
      }

      FrameManager.add(step)

      self.cancel = function () {
        FrameManager.remove(step)
        update.call(self, 0, 0)
        resolve(startTime + duration)
      }
    }))
  }
  ease(easing) {
    return new Animator(this.duration, this.update, easing)
  }
}

module.exports = Animator

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
});