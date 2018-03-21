var cc = cc || {};
cc._tmp = cc._tmp || {};
cc._LogInfos = {};
var _p = window;
_p.gl;
_p.WebGLRenderingContext;
_p.DeviceOrientationEvent;
_p.DeviceMotionEvent;
_p.AudioContext;
if (!_p.AudioContext) {
    _p.webkitAudioContext;
}
_p.mozAudioContext;
_p = Object.prototype;
_p._super;
_p.ctor;
_p = null;
cc.ORIENTATION_PORTRAIT = 0;
cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1;
cc.ORIENTATION_LANDSCAPE_LEFT = 2;
cc.ORIENTATION_LANDSCAPE_RIGHT = 3;
cc._drawingUtil = null;
cc._renderContext = null;
cc._supportRender = false;
cc._canvas = null;
cc.container = null;
cc._gameDiv = null;
cc.newElement = function (x) {
    return document.createElement(x);
};
cc.each = function (obj, iterator, context) {
    if (!obj)
        return;
    if (obj instanceof Array) {
        for (var i = 0, li = obj.length; i < li; i++) {
            if (iterator.call(context, obj[i], i) === false)
                return;
        }
    } else {
        for (var key in obj) {
            if (iterator.call(context, obj[key], key) === false)
                return;
        }
    }
};
cc.extend = function(target) {
    var sources = arguments.length >= 2 ? Array.prototype.slice.call(arguments, 1) : [];
    cc.each(sources, function(src) {
        for(var key in src) {
            if (src.hasOwnProperty(key)) {
                target[key] = src[key];
            }
        }
    });
    return target;
};
cc.isFunction = function(obj) {
    return typeof obj === 'function';
};
cc.isNumber = function(obj) {
    return typeof obj === 'number' || Object.prototype.toString.call(obj) === '[object Number]';
};
cc.isString = function(obj) {
    return typeof obj === 'string' || Object.prototype.toString.call(obj) === '[object String]';
};
cc.isArray = function(obj) {
    return Array.isArray(obj) ||
        (typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Array]');
};
cc.isUndefined = function(obj) {
    return typeof obj === 'undefined';
};
cc.isObject = function(obj) {
    return typeof obj === "object" && Object.prototype.toString.call(obj) === '[object Object]';
};
cc.isCrossOrigin = function (url) {
    if (!url) {
        cc.log("invalid URL");
        return false;
    }
    var startIndex = url.indexOf("://");
    if (startIndex === -1)
        return false;
    var endIndex = url.indexOf("/", startIndex + 3);
    var urlOrigin = (endIndex === -1) ? url : url.substring(0, endIndex);
    return urlOrigin !== location.origin;
};
cc.AsyncPool = function(srcObj, limit, iterator, onEnd, target){
    var self = this;
    self._srcObj = srcObj;
    self._limit = limit;
    self._pool = [];
    self._iterator = iterator;
    self._iteratorTarget = target;
    self._onEnd = onEnd;
    self._onEndTarget = target;
    self._results = srcObj instanceof Array ? [] : {};
    self._errors = srcObj instanceof Array ? [] : {};
    cc.each(srcObj, function(value, index){
        self._pool.push({index : index, value : value});
    });
    self.size = self._pool.length;
    self.finishedSize = 0;
    self._workingSize = 0;
    self._limit = self._limit || self.size;
    self.onIterator = function(iterator, target){
        self._iterator = iterator;
        self._iteratorTarget = target;
    };
    self.onEnd = function(endCb, endCbTarget){
        self._onEnd = endCb;
        self._onEndTarget = endCbTarget;
    };
    self._handleItem = function(){
        var self = this;
        if(self._pool.length === 0 || self._workingSize >= self._limit)
            return;
        var item = self._pool.shift();
        var value = item.value, index = item.index;
        self._workingSize++;
        self._iterator.call(self._iteratorTarget, value, index,
            function(err, result) {
                self.finishedSize++;
                self._workingSize--;
                if (err) {
                    self._errors[this.index] = err;
                }
                else {
                    self._results[this.index] = result;
                }
                if (self.finishedSize === self.size) {
                    if (self._onEnd) {
                        var errors = self._errors.length === 0 ? null : self._errors;
                        self._onEnd.call(self._onEndTarget, errors, self._results);
                    }
                    return;
                }
                self._handleItem();
            }.bind(item),
            self);
    };
    self.flow = function(){
        var self = this;
        if(self._pool.length === 0) {
            if(self._onEnd)
                self._onEnd.call(self._onEndTarget, null, []);
            return;
        }
        for(var i = 0; i < self._limit; i++)
            self._handleItem();
    };
};
cc.async = {
    series : function(tasks, cb, target){
        var asyncPool = new cc.AsyncPool(tasks, 1, function(func, index, cb1){
            func.call(target, cb1);
        }, cb, target);
        asyncPool.flow();
        return asyncPool;
    },
    parallel : function(tasks, cb, target){
        var asyncPool = new cc.AsyncPool(tasks, 0, function(func, index, cb1){
            func.call(target, cb1);
        }, cb, target);
        asyncPool.flow();
        return asyncPool;
    },
    waterfall : function(tasks, cb, target){
        var args = [];
        var lastResults = [null];//the array to store the last results
        var asyncPool = new cc.AsyncPool(tasks, 1,
            function (func, index, cb1) {
                args.push(function (err) {
                    args = Array.prototype.slice.call(arguments, 1);
                    if(tasks.length - 1 === index) lastResults = lastResults.concat(args);//while the last task
                    cb1.apply(null, arguments);
                });
                func.apply(target, args);
            }, function (err) {
                if (!cb)
                    return;
                if (err)
                    return cb.call(target, err);
                cb.apply(target, lastResults);
            });
        asyncPool.flow();
        return asyncPool;
    },
    map : function(tasks, iterator, callback, target){
        var locIterator = iterator;
        if(typeof(iterator) === "object"){
            callback = iterator.cb;
            target = iterator.iteratorTarget;
            locIterator = iterator.iterator;
        }
        var asyncPool = new cc.AsyncPool(tasks, 0, locIterator, callback, target);
        asyncPool.flow();
        return asyncPool;
    },
    mapLimit : function(tasks, limit, iterator, cb, target){
        var asyncPool = new cc.AsyncPool(tasks, limit, iterator, cb, target);
        asyncPool.flow();
        return asyncPool;
    }
};
cc.path = {
    normalizeRE: /[^\.\/]+\/\.\.\//,
    join: function () {
        var l = arguments.length;
        var result = "";
        for (var i = 0; i < l; i++) {
            result = (result + (result === "" ? "" : "/") + arguments[i]).replace(/(\/|\\\\)$/, "");
        }
        return result;
    },
    extname: function (pathStr) {
        var temp = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(pathStr);
        return temp ? temp[1] : null;
    },
    mainFileName: function(fileName){
        if(fileName){
            var idx = fileName.lastIndexOf(".");
            if(idx !== -1)
                return fileName.substring(0,idx);
        }
        return fileName;
    },
    basename: function (pathStr, extname) {
        var index = pathStr.indexOf("?");
        if (index > 0) pathStr = pathStr.substring(0, index);
        var reg = /(\/|\\\\)([^(\/|\\\\)]+)$/g;
        var result = reg.exec(pathStr.replace(/(\/|\\\\)$/, ""));
        if (!result) return null;
        var baseName = result[2];
        if (extname && pathStr.substring(pathStr.length - extname.length).toLowerCase() === extname.toLowerCase())
            return baseName.substring(0, baseName.length - extname.length);
        return baseName;
    },
    dirname: function (pathStr) {
        return pathStr.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, '$2');
    },
    changeExtname: function (pathStr, extname) {
        extname = extname || "";
        var index = pathStr.indexOf("?");
        var tempStr = "";
        if (index > 0) {
            tempStr = pathStr.substring(index);
            pathStr = pathStr.substring(0, index);
        }
        index = pathStr.lastIndexOf(".");
        if (index < 0) return pathStr + extname + tempStr;
        return pathStr.substring(0, index) + extname + tempStr;
    },
    changeBasename: function (pathStr, basename, isSameExt) {
        if (basename.indexOf(".") === 0) return this.changeExtname(pathStr, basename);
        var index = pathStr.indexOf("?");
        var tempStr = "";
        var ext = isSameExt ? this.extname(pathStr) : "";
        if (index > 0) {
            tempStr = pathStr.substring(index);
            pathStr = pathStr.substring(0, index);
        }
        index = pathStr.lastIndexOf("/");
        index = index <= 0 ? 0 : index + 1;
        return pathStr.substring(0, index) + basename + ext + tempStr;
    },
    _normalize: function(url){
        var oldUrl = url = String(url);
        do {
            oldUrl = url;
            url = url.replace(this.normalizeRE, "");
        } while(oldUrl.length !== url.length);
        return url;
    }
};
cc.loader = (function () {
    var _jsCache = {},
        _register = {},
        _langPathCache = {},
        _aliases = {},
        _queue = {},
        _urlRegExp = new RegExp(
            "^" +
                "(?:(?:https?|ftp)://)" +
                "(?:\\S+(?::\\S*)?@)?" +
                "(?:" +
                    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                "|" +
                    "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
                    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
                    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                "|" +
                    "(?:localhost)" +
                ")" +
                "(?::\\d{2,5})?" +
                "(?:/\\S*)?" +
            "$", "i"
        );
    return {
        resPath: "",
        audioPath: "",
        cache: {},
        getXMLHttpRequest: function () {
            return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
        },
        _getArgs4Js: function (args) {
            var a0 = args[0], a1 = args[1], a2 = args[2], results = ["", null, null];
            if (args.length === 1) {
                results[1] = a0 instanceof Array ? a0 : [a0];
            } else if (args.length === 2) {
                if (typeof a1 === "function") {
                    results[1] = a0 instanceof Array ? a0 : [a0];
                    results[2] = a1;
                } else {
                    results[0] = a0 || "";
                    results[1] = a1 instanceof Array ? a1 : [a1];
                }
            } else if (args.length === 3) {
                results[0] = a0 || "";
                results[1] = a1 instanceof Array ? a1 : [a1];
                results[2] = a2;
            } else throw new Error("arguments error to load js!");
            return results;
        },
        isLoading: function (url) {
            return (_queue[url] !== undefined);
        },
        loadJs: function (baseDir, jsList, cb) {
            var self = this,
                args = self._getArgs4Js(arguments);
            var preDir = args[0], list = args[1], callback = args[2];
            if (navigator.userAgent.indexOf("Trident/5") > -1) {
                self._loadJs4Dependency(preDir, list, 0, callback);
            } else {
                cc.async.map(list, function (item, index, cb1) {
                    var jsPath = cc.path.join(preDir, item);
                    if (_jsCache[jsPath]) return cb1(null);
                    self._createScript(jsPath, false, cb1);
                }, callback);
            }
        },
        loadJsWithImg: function (baseDir, jsList, cb) {
            var self = this, jsLoadingImg = self._loadJsImg(),
                args = self._getArgs4Js(arguments);
            this.loadJs(args[0], args[1], function (err) {
                if (err) throw new Error(err);
                jsLoadingImg.parentNode.removeChild(jsLoadingImg);//remove loading gif
                if (args[2]) args[2]();
            });
        },
        _createScript: function (jsPath, isAsync, cb) {
            var d = document, self = this, s = document.createElement('script');
            s.async = isAsync;
            _jsCache[jsPath] = true;
            if(cc.game.config["noCache"] && typeof jsPath === "string"){
                if(self._noCacheRex.test(jsPath))
                    s.src = jsPath + "&_t=" + (new Date() - 0);
                else
                    s.src = jsPath + "?_t=" + (new Date() - 0);
            }else{
                s.src = jsPath;
            }
            s.addEventListener('load', function () {
                s.parentNode.removeChild(s);
                this.removeEventListener('load', arguments.callee, false);
                cb();
            }, false);
            s.addEventListener('error', function () {
                s.parentNode.removeChild(s);
                cb("Load " + jsPath + " failed!");
            }, false);
            d.body.appendChild(s);
        },
        _loadJs4Dependency: function (baseDir, jsList, index, cb) {
            if (index >= jsList.length) {
                if (cb) cb();
                return;
            }
            var self = this;
            self._createScript(cc.path.join(baseDir, jsList[index]), false, function (err) {
                if (err) return cb(err);
                self._loadJs4Dependency(baseDir, jsList, index + 1, cb);
            });
        },
        _loadJsImg: function () {
            var d = document, jsLoadingImg = d.getElementById("cocos2d_loadJsImg");
            if (!jsLoadingImg) {
                jsLoadingImg = document.createElement('img');
                if (cc._loadingImage)
                    jsLoadingImg.src = cc._loadingImage;
                var canvasNode = d.getElementById(cc.game.config["id"]);
                canvasNode.style.backgroundColor = "transparent";
                canvasNode.parentNode.appendChild(jsLoadingImg);
                var canvasStyle = getComputedStyle ? getComputedStyle(canvasNode) : canvasNode.currentStyle;
                if (!canvasStyle)
                    canvasStyle = {width: canvasNode.width, height: canvasNode.height};
                jsLoadingImg.style.left = canvasNode.offsetLeft + (parseFloat(canvasStyle.width) - jsLoadingImg.width) / 2 + "px";
                jsLoadingImg.style.top = canvasNode.offsetTop + (parseFloat(canvasStyle.height) - jsLoadingImg.height) / 2 + "px";
                jsLoadingImg.style.position = "absolute";
            }
            return jsLoadingImg;
        },
        loadTxt: function (url, cb) {
            if (!cc._isNodeJs) {
                var xhr = this.getXMLHttpRequest(),
                    errInfo = "load " + url + " failed!";
                xhr.open("GET", url, true);
                if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
                    xhr.setRequestHeader("Accept-Charset", "utf-8");
                    xhr.onreadystatechange = function () {
                        if(xhr.readyState === 4)
                            xhr.status === 200 ? cb(null, xhr.responseText) : cb({status:xhr.status, errorMessage:errInfo}, null);
                    };
                } else {
                    if (xhr.overrideMimeType) xhr.overrideMimeType("text\/plain; charset=utf-8");
                    xhr.onload = function () {
                        if(xhr.readyState === 4)
                            xhr.status === 200 ? cb(null, xhr.responseText) : cb({status:xhr.status, errorMessage:errInfo}, null);
                    };
                    xhr.onerror = function(){
                        cb({status:xhr.status, errorMessage:errInfo}, null);
                    };
                }
                xhr.send(null);
            } else {
                var fs = require("fs");
                fs.readFile(url, function (err, data) {
                    err ? cb(err) : cb(null, data.toString());
                });
            }
        },
        _loadTxtSync: function (url) {
            if (!cc._isNodeJs) {
                var xhr = this.getXMLHttpRequest();
                xhr.open("GET", url, false);
                if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
                    xhr.setRequestHeader("Accept-Charset", "utf-8");
                } else {
                    if (xhr.overrideMimeType) xhr.overrideMimeType("text\/plain; charset=utf-8");
                }
                xhr.send(null);
                if (!xhr.readyState === 4 || xhr.status !== 200) {
                    return null;
                }
                return xhr.responseText;
            } else {
                var fs = require("fs");
                return fs.readFileSync(url).toString();
            }
        },
        loadCsb: function(url, cb){
            var xhr = new XMLHttpRequest(),
                errInfo = "load " + url + " failed!";
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function () {
                var arrayBuffer = xhr.response;
                if (arrayBuffer) {
                    window.msg = arrayBuffer;
                }
                if(xhr.readyState === 4)
                    xhr.status === 200 ? cb(null, xhr.response) : cb({status:xhr.status, errorMessage:errInfo}, null);
            };
            xhr.onerror = function(){
                cb({status:xhr.status, errorMessage:errInfo}, null);
            };
            xhr.send(null);
        },
        loadJson: function (url, cb) {
            this.loadTxt(url, function (err, txt) {
                if (err) {
                    cb(err);
                }
                else {
                    try {
                        var result = JSON.parse(txt);
                    }
                    catch (e) {
                        throw new Error("parse json [" + url + "] failed : " + e);
                        return;
                    }
                    cb(null, result);
                }
            });
        },
        _checkIsImageURL: function (url) {
            var ext = /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(url);
            return (ext != null);
        },
        loadImg: function (url, option, callback) {
            var opt = {
                isCrossOrigin: true
            };
            if (callback !== undefined)
                opt.isCrossOrigin = option.isCrossOrigin === undefined ? opt.isCrossOrigin : option.isCrossOrigin;
            else if (option !== undefined)
                callback = option;
            var img = this.getRes(url);
            if (img) {
                callback && callback(null, img);
                return img;
            }
            var queue = _queue[url];
            if (queue) {
                queue.callbacks.push(callback);
                return queue.img;
            }
            img = new Image();
            if (opt.isCrossOrigin && location.origin !== "file://")
                img.crossOrigin = "Anonymous";
            var loadCallback = function () {
                this.removeEventListener('load', loadCallback, false);
                this.removeEventListener('error', errorCallback, false);
                if (!_urlRegExp.test(url)) {
                    cc.loader.cache[url] = img;
                }
                var queue = _queue[url];
                if (queue) {
                    var callbacks = queue.callbacks;
                    for (var i = 0; i < callbacks.length; ++i) {
                        var cb = callbacks[i];
                        if (cb) {
                            cb(null, img);
                        }
                    }
                    queue.img = null;
                    delete _queue[url];
                }
            };
            var self = this;
            var errorCallback = function () {
                this.removeEventListener('error', errorCallback, false);
                if (img.crossOrigin && img.crossOrigin.toLowerCase() === "anonymous") {
                    opt.isCrossOrigin = false;
                    self.release(url);
                    cc.loader.loadImg(url, opt, callback);
                } else {
                    var queue = _queue[url];
                    if (queue) {
                        var callbacks = queue.callbacks;
                        for (var i = 0; i < callbacks.length; ++i) {
                            var cb = callbacks[i];
                            if (cb) {
                                cb("load image failed");
                            }
                        }
                        queue.img = null;
                        delete _queue[url];
                    }
                }
            };
            _queue[url] = {
                img: img,
                callbacks: callback ? [callback] : []
            };
            img.addEventListener("load", loadCallback);
            img.addEventListener("error", errorCallback);
            img.src = url;
            return img;
        },
        _loadResIterator: function (item, index, cb) {
            var self = this, url = null;
            var type = item.type;
            if (type) {
                type = "." + type.toLowerCase();
                url = item.src ? item.src : item.name + type;
            } else {
                url = item;
                type = cc.path.extname(url);
            }
            var obj = self.getRes(url);
            if (obj)
                return cb(null, obj);
            var loader = null;
            if (type) {
                loader = _register[type.toLowerCase()];
            }
            if (!loader) {
                cc.error("loader for [" + type + "] not exists!");
                return cb();
            }
            var realUrl = url;
            if (!_urlRegExp.test(url))
            {
                var basePath = loader.getBasePath ? loader.getBasePath() : self.resPath;
                realUrl = self.getUrl(basePath, url);
            }
            if(cc.game.config["noCache"] && typeof realUrl === "string"){
                if(self._noCacheRex.test(realUrl))
                    realUrl += "&_t=" + (new Date() - 0);
                else
                    realUrl += "?_t=" + (new Date() - 0);
            }
            loader.load(realUrl, url, item, function (err, data) {
                if (err) {
                    cc.log(err);
                    self.cache[url] = null;
                    delete self.cache[url];
                    cb({status:520, errorMessage:err}, null);
                } else {
                    self.cache[url] = data;
                    cb(null, data);
                }
            });
        },
        _noCacheRex: /\?/,
        getUrl: function (basePath, url) {
            var self = this, path = cc.path;
            if (basePath !== undefined && url === undefined) {
                url = basePath;
                var type = path.extname(url);
                type = type ? type.toLowerCase() : "";
                var loader = _register[type];
                if (!loader)
                    basePath = self.resPath;
                else
                    basePath = loader.getBasePath ? loader.getBasePath() : self.resPath;
            }
            url = cc.path.join(basePath || "", url);
            if (url.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
                if (_langPathCache[url])
                    return _langPathCache[url];
                var extname = path.extname(url) || "";
                url = _langPathCache[url] = url.substring(0, url.length - extname.length) + "_" + cc.sys.language + extname;
            }
            return url;
        },
        load : function(resources, option, loadCallback){
            var self = this;
            var len = arguments.length;
            if(len === 0)
                throw new Error("arguments error!");
            if(len === 3){
                if(typeof option === "function"){
                    if(typeof loadCallback === "function")
                        option = {trigger : option, cb : loadCallback };
                    else
                        option = { cb : option, cbTarget : loadCallback};
                }
            }else if(len === 2){
                if(typeof option === "function")
                    option = {cb : option};
            }else if(len === 1){
                option = {};
            }
            if(!(resources instanceof Array))
                resources = [resources];
            var asyncPool = new cc.AsyncPool(
                resources, 0,
                function (value, index, AsyncPoolCallback, aPool) {
                    self._loadResIterator(value, index, function (err) {
                        var arr = Array.prototype.slice.call(arguments, 1);
                        if (option.trigger)
                            option.trigger.call(option.triggerTarget, arr[0], aPool.size, aPool.finishedSize);
                        AsyncPoolCallback(err, arr[0]);
                    });
                },
                option.cb, option.cbTarget);
            asyncPool.flow();
            return asyncPool;
        },
        _handleAliases: function (fileNames, cb) {
            var self = this;
            var resList = [];
            for (var key in fileNames) {
                var value = fileNames[key];
                _aliases[key] = value;
                resList.push(value);
            }
            this.load(resList, cb);
        },
        loadAliases: function (url, callback) {
            var self = this, dict = self.getRes(url);
            if (!dict) {
                self.load(url, function (err, results) {
                    self._handleAliases(results[0]["filenames"], callback);
                });
            } else
                self._handleAliases(dict["filenames"], callback);
        },
        register: function (extNames, loader) {
            if (!extNames || !loader) return;
            var self = this;
            if (typeof extNames === "string")
                return _register[extNames.trim().toLowerCase()] = loader;
            for (var i = 0, li = extNames.length; i < li; i++) {
                _register["." + extNames[i].trim().toLowerCase()] = loader;
            }
        },
        getRes: function (url) {
            return this.cache[url] || this.cache[_aliases[url]];
        },
        _getAliase: function (url) {
            return _aliases[url];
        },
        release: function (url) {
            var cache = this.cache;
            var queue = _queue[url];
            if (queue) {
                queue.img = null;
                delete _queue[url];
            }
            delete cache[url];
            delete cache[_aliases[url]];
            delete _aliases[url];
        },
        releaseAll: function () {
            var locCache = this.cache;
            for (var key in locCache)
                delete locCache[key];
            for (var key in _aliases)
                delete _aliases[key];
        }
    };
})();
cc.formatStr = function(){
    var args = arguments;
    var l = args.length;
    if(l < 1)
        return "";
    var str = args[0];
    var needToFormat = true;
    if(typeof str === "object"){
        needToFormat = false;
    }
    for(var i = 1; i < l; ++i){
        var arg = args[i];
        if(needToFormat){
            while(true){
                var result = null;
                if(typeof arg === "number"){
                    result = str.match(/(%d)|(%s)/);
                    if(result){
                        str = str.replace(/(%d)|(%s)/, arg);
                        break;
                    }
                }
                result = str.match(/%s/);
                if(result)
                    str = str.replace(/%s/, arg);
                else
                    str += "    " + arg;
                break;
            }
        }else
            str += "    " + arg;
    }
    return str;
};
(function () {
var _tmpCanvas1 = document.createElement("canvas"),
    _tmpCanvas2 = document.createElement("canvas");
cc.create3DContext = function (canvas, opt_attribs) {
    var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    var context = null;
    for (var ii = 0; ii < names.length; ++ii) {
        try {
            context = canvas.getContext(names[ii], opt_attribs);
        } catch (e) {
        }
        if (context) {
            break;
        }
    }
    return context;
};
var _initSys = function () {
    cc.sys = {};
    var sys = cc.sys;
    sys.LANGUAGE_ENGLISH = "en";
    sys.LANGUAGE_CHINESE = "zh";
    sys.LANGUAGE_FRENCH = "fr";
    sys.LANGUAGE_ITALIAN = "it";
    sys.LANGUAGE_GERMAN = "de";
    sys.LANGUAGE_SPANISH = "es";
    sys.LANGUAGE_DUTCH = "du";
    sys.LANGUAGE_RUSSIAN = "ru";
    sys.LANGUAGE_KOREAN = "ko";
    sys.LANGUAGE_JAPANESE = "ja";
    sys.LANGUAGE_HUNGARIAN = "hu";
    sys.LANGUAGE_PORTUGUESE = "pt";
    sys.LANGUAGE_ARABIC = "ar";
    sys.LANGUAGE_NORWEGIAN = "no";
    sys.LANGUAGE_POLISH = "pl";
    sys.LANGUAGE_UNKNOWN = "unkonwn";
    sys.OS_IOS = "iOS";
    sys.OS_ANDROID = "Android";
    sys.OS_WINDOWS = "Windows";
    sys.OS_MARMALADE = "Marmalade";
    sys.OS_LINUX = "Linux";
    sys.OS_BADA = "Bada";
    sys.OS_BLACKBERRY = "Blackberry";
    sys.OS_OSX = "OS X";
    sys.OS_WP8 = "WP8";
    sys.OS_WINRT = "WINRT";
    sys.OS_UNKNOWN = "Unknown";
    sys.UNKNOWN = -1;
    sys.WIN32 = 0;
    sys.LINUX = 1;
    sys.MACOS = 2;
    sys.ANDROID = 3;
    sys.IPHONE = 4;
    sys.IPAD = 5;
    sys.BLACKBERRY = 6;
    sys.NACL = 7;
    sys.EMSCRIPTEN = 8;
    sys.TIZEN = 9;
    sys.WINRT = 10;
    sys.WP8 = 11;
    sys.MOBILE_BROWSER = 100;
    sys.DESKTOP_BROWSER = 101;
    sys.BROWSER_TYPE_WECHAT = "wechat";
    sys.BROWSER_TYPE_ANDROID = "androidbrowser";
    sys.BROWSER_TYPE_IE = "ie";
    sys.BROWSER_TYPE_QQ = "qqbrowser";
    sys.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
    sys.BROWSER_TYPE_UC = "ucbrowser";
    sys.BROWSER_TYPE_360 = "360browser";
    sys.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
    sys.BROWSER_TYPE_BAIDU = "baidubrowser";
    sys.BROWSER_TYPE_MAXTHON = "maxthon";
    sys.BROWSER_TYPE_OPERA = "opera";
    sys.BROWSER_TYPE_OUPENG = "oupeng";
    sys.BROWSER_TYPE_MIUI = "miuibrowser";
    sys.BROWSER_TYPE_FIREFOX = "firefox";
    sys.BROWSER_TYPE_SAFARI = "safari";
    sys.BROWSER_TYPE_CHROME = "chrome";
    sys.BROWSER_TYPE_LIEBAO = "liebao";
    sys.BROWSER_TYPE_QZONE = "qzone";
    sys.BROWSER_TYPE_SOUGOU = "sogou";
    sys.BROWSER_TYPE_UNKNOWN = "unknown";
    sys.isNative = false;
    var win = window, nav = win.navigator, doc = document, docEle = doc.documentElement;
    var ua = nav.userAgent.toLowerCase();
    sys.isMobile = ua.indexOf('mobile') !== -1 || ua.indexOf('android') !== -1;
    sys.platform = sys.isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
    var currLanguage = nav.language;
    currLanguage = currLanguage ? currLanguage : nav.browserLanguage;
    currLanguage = currLanguage ? currLanguage.split("-")[0] : sys.LANGUAGE_ENGLISH;
    sys.language = currLanguage;
    var isAndroid = false, iOS = false, osVersion = '', osMainVersion = 0;
    var uaResult = /android (\d+(?:\.\d+)+)/i.exec(ua) || /android (\d+(?:\.\d+)+)/i.exec(nav.platform);
    if (uaResult) {
        isAndroid = true;
        osVersion = uaResult[1] || '';
        osMainVersion = parseInt(osVersion) || 0;
    }
    uaResult = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(ua);
    if (uaResult) {
        iOS = true;
        osVersion = uaResult[2] || '';
        osMainVersion = parseInt(osVersion) || 0;
    }
    var osName = sys.OS_UNKNOWN;
    if (nav.appVersion.indexOf("Win") !== -1) osName = sys.OS_WINDOWS;
    else if (iOS) osName = sys.OS_IOS;
    else if (nav.appVersion.indexOf("Mac") !== -1) osName = sys.OS_OSX;
    else if (nav.appVersion.indexOf("X11") !== -1 && nav.appVersion.indexOf("Linux") === -1) osName = sys.OS_UNIX;
    else if (isAndroid) osName = sys.OS_ANDROID;
    else if (nav.appVersion.indexOf("Linux") !== -1) osName = sys.OS_LINUX;
    sys.os = osName;
    sys.osVersion = osVersion;
    sys.osMainVersion = osMainVersion;
    sys.browserType = sys.BROWSER_TYPE_UNKNOWN;
    (function(){
        var typeReg1 = /mqqbrowser|sogou|qzone|liebao|micromessenger|ucbrowser|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|trident|miuibrowser/i;
        var typeReg2 = /qqbrowser|chrome|safari|firefox|opr|oupeng|opera/i;
        var browserTypes = typeReg1.exec(ua);
        if(!browserTypes) browserTypes = typeReg2.exec(ua);
        var browserType = browserTypes ? browserTypes[0] : sys.BROWSER_TYPE_UNKNOWN;
        if (browserType === 'micromessenger')
            browserType = sys.BROWSER_TYPE_WECHAT;
        else if (browserType === "safari" && (ua.match(/android.*applewebkit/)))
            browserType = sys.BROWSER_TYPE_ANDROID;
        else if (browserType === "trident")
            browserType = sys.BROWSER_TYPE_IE;
        else if (browserType === "360 aphone")
            browserType = sys.BROWSER_TYPE_360;
        else if (browserType === "mxbrowser")
            browserType = sys.BROWSER_TYPE_MAXTHON;
        else if (browserType === "opr")
            browserType = sys.BROWSER_TYPE_OPERA;
        sys.browserType = browserType;
    })();
    sys.browserVersion = "";
    (function(){
        var versionReg1 = /(micromessenger|qq|mx|maxthon|baidu|sogou)(mobile)?(browser)?\/?([\d.]+)/i;
        var versionReg2 = /(msie |rv:|firefox|chrome|ucbrowser|oupeng|opera|opr|safari|miui)(mobile)?(browser)?\/?([\d.]+)/i;
        var tmp = ua.match(versionReg1);
        if(!tmp) tmp = ua.match(versionReg2);
        sys.browserVersion = tmp ? tmp[4] : "";
    })();
    var w = window.innerWidth || document.documentElement.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight;
    var ratio = window.devicePixelRatio || 1;
    sys.windowPixelResolution = {
        width: ratio * w,
        height: ratio * h
    };
    sys._checkWebGLRenderMode = function () {
        if (cc._renderType !== cc.game.RENDER_TYPE_WEBGL)
            throw new Error("This feature supports WebGL render mode only.");
    };
    sys._supportCanvasNewBlendModes = (function(){
        var canvas = _tmpCanvas1;
        canvas.width = 1;
        canvas.height = 1;
        var context = canvas.getContext('2d');
        context.fillStyle = '#000';
        context.fillRect(0,0,1,1);
        context.globalCompositeOperation = 'multiply';
        var canvas2 = _tmpCanvas2;
        canvas2.width = 1;
        canvas2.height = 1;
        var context2 = canvas2.getContext('2d');
        context2.fillStyle = '#fff';
        context2.fillRect(0,0,1,1);
        context.drawImage(canvas2, 0, 0, 1, 1);
        return context.getImageData(0,0,1,1).data[0] === 0;
    })();
    if (cc.sys.isMobile) {
        var fontStyle = document.createElement("style");
        fontStyle.type = "text/css";
        document.body.appendChild(fontStyle);
        fontStyle.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;"
                                + "-webkit-tap-highlight-color:rgba(0,0,0,0);}";
    }
    try {
        var localStorage = sys.localStorage = win.localStorage;
        localStorage.setItem("storage", "");
        localStorage.removeItem("storage");
        localStorage = null;
    } catch (e) {
        var warn = function () {
            cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option");
        };
        sys.localStorage = {
            getItem : warn,
            setItem : warn,
            removeItem : warn,
            clear : warn
        };
    }
    var _supportCanvas = !!_tmpCanvas1.getContext("2d");
    var _supportWebGL = false;
    if (win.WebGLRenderingContext) {
        var tmpCanvas = document.createElement("CANVAS");
        try{
            var context = cc.create3DContext(tmpCanvas, {'stencil': true});
            if(context) {
                _supportWebGL = true;
            }
            if (_supportWebGL && sys.os === sys.OS_ANDROID) {
                var browserVer = parseFloat(sys.browserVersion);
                switch (sys.browserType) {
                case sys.BROWSER_TYPE_MOBILE_QQ:
                case sys.BROWSER_TYPE_BAIDU:
                case sys.BROWSER_TYPE_BAIDU_APP:
                    if (browserVer >= 6.2) {
                        _supportWebGL = true;
                    }
                    else {
                        _supportWebGL = false;
                    }
                    break;
                case sys.BROWSER_TYPE_CHROME:
                    if(browserVer >= 30.0) {
                      _supportWebGL = true;
                    } else {
                      _supportWebGL = false;
                    }
                    break;
                case sys.BROWSER_TYPE_ANDROID:
                    if (sys.osMainVersion && sys.osMainVersion >= 5) {
                        _supportWebGL = true;
                    }
                    break;
                case sys.BROWSER_TYPE_UNKNOWN:
                case sys.BROWSER_TYPE_360:
                case sys.BROWSER_TYPE_MIUI:
                case sys.BROWSER_TYPE_UC:
                    _supportWebGL = false;
                }
            }
        }
        catch (e) {}
        tmpCanvas = null;
    }
    var capabilities = sys.capabilities = {
        "canvas": _supportCanvas,
        "opengl": _supportWebGL
    };
    if (docEle['ontouchstart'] !== undefined || doc['ontouchstart'] !== undefined || nav.msPointerEnabled)
        capabilities["touches"] = true;
    if (docEle['onmouseup'] !== undefined)
        capabilities["mouse"] = true;
    if (docEle['onkeyup'] !== undefined)
        capabilities["keyboard"] = true;
    if (win.DeviceMotionEvent || win.DeviceOrientationEvent)
        capabilities["accelerometer"] = true;
    sys.garbageCollect = function () {
    };
    sys.dumpRoot = function () {
    };
    sys.restartVM = function () {
    };
    sys.cleanScript = function (jsfile) {
    };
    sys.isObjectValid = function (obj) {
        if (obj) return true;
        else return false;
    };
    sys.dump = function () {
        var self = this;
        var str = "";
        str += "isMobile : " + self.isMobile + "\r\n";
        str += "language : " + self.language + "\r\n";
        str += "browserType : " + self.browserType + "\r\n";
        str += "browserVersion : " + self.browserVersion + "\r\n";
        str += "capabilities : " + JSON.stringify(self.capabilities) + "\r\n";
        str += "os : " + self.os + "\r\n";
        str += "osVersion : " + self.osVersion + "\r\n";
        str += "platform : " + self.platform + "\r\n";
        str += "Using " + (cc._renderType === cc.game.RENDER_TYPE_WEBGL ? "WEBGL" : "CANVAS") + " renderer." + "\r\n";
        cc.log(str);
    };
    sys.openURL = function(url){
        window.open(url);
    };
};
_initSys();
_tmpCanvas1 = null;
_tmpCanvas2 = null;
cc.log = cc.warn = cc.error = cc.assert = function () {
};
var _config = null,
    _jsAddedCache = {},
    _engineInitCalled = false,
    _engineLoadedCallback = null;
cc._engineLoaded = false;
function _determineRenderType(config) {
    var CONFIG_KEY = cc.game.CONFIG_KEY,
        userRenderMode = parseInt(config[CONFIG_KEY.renderMode]) || 0;
    if (isNaN(userRenderMode) || userRenderMode > 2 || userRenderMode < 0)
        config[CONFIG_KEY.renderMode] = 0;
    cc._renderType = cc.game.RENDER_TYPE_CANVAS;
    cc._supportRender = false;
    if (userRenderMode === 0) {
        if (cc.sys.capabilities["opengl"]) {
            cc._renderType = cc.game.RENDER_TYPE_WEBGL;
            cc._supportRender = true;
        }
        else if (cc.sys.capabilities["canvas"]) {
            cc._renderType = cc.game.RENDER_TYPE_CANVAS;
            cc._supportRender = true;
        }
    }
    else if (userRenderMode === 1 && cc.sys.capabilities["canvas"]) {
        cc._renderType = cc.game.RENDER_TYPE_CANVAS;
        cc._supportRender = true;
    }
    else if (userRenderMode === 2 && cc.sys.capabilities["opengl"]) {
        cc._renderType = cc.game.RENDER_TYPE_WEBGL;
        cc._supportRender = true;
    }
}
function _getJsListOfModule(moduleMap, moduleName, dir) {
    if (_jsAddedCache[moduleName]) return null;
    dir = dir || "";
    var jsList = [];
    var tempList = moduleMap[moduleName];
    if (!tempList) throw new Error("can not find module [" + moduleName + "]");
    var ccPath = cc.path;
    for (var i = 0, li = tempList.length; i < li; i++) {
        var item = tempList[i];
        if (_jsAddedCache[item]) continue;
        var extname = ccPath.extname(item);
        if (!extname) {
            var arr = _getJsListOfModule(moduleMap, item, dir);
            if (arr) jsList = jsList.concat(arr);
        } else if (extname.toLowerCase() === ".js") jsList.push(ccPath.join(dir, item));
        _jsAddedCache[item] = 1;
    }
    return jsList;
}
function _afterEngineLoaded(config) {
    if (cc._initDebugSetting)
        cc._initDebugSetting(config[cc.game.CONFIG_KEY.debugMode]);
    cc._engineLoaded = true;
    cc.log(cc.ENGINE_VERSION);
    if (_engineLoadedCallback) _engineLoadedCallback();
}
function _load(config) {
    var self = this;
    var CONFIG_KEY = cc.game.CONFIG_KEY, engineDir = config[CONFIG_KEY.engineDir], loader = cc.loader;
    if (cc.Class) {
        _afterEngineLoaded(config);
    } else {
        var ccModulesPath = cc.path.join(engineDir, "moduleConfig.json");
        loader.loadJson(ccModulesPath, function (err, modulesJson) {
            if (err) throw new Error(err);
            var modules = config["modules"] || [];
            var moduleMap = modulesJson["module"];
            var jsList = [];
            if (cc.sys.capabilities["opengl"] && modules.indexOf("base4webgl") < 0) modules.splice(0, 0, "base4webgl");
            else if (modules.indexOf("core") < 0) modules.splice(0, 0, "core");
            for (var i = 0, li = modules.length; i < li; i++) {
                var arr = _getJsListOfModule(moduleMap, modules[i], engineDir);
                if (arr) jsList = jsList.concat(arr);
            }
            cc.loader.loadJsWithImg(jsList, function (err) {
                if (err) throw err;
                _afterEngineLoaded(config);
            });
        });
    }
}
function _windowLoaded() {
    this.removeEventListener('load', _windowLoaded, false);
    _load(cc.game.config);
}
cc.initEngine = function (config, cb) {
    if (_engineInitCalled) {
        var previousCallback = _engineLoadedCallback;
        _engineLoadedCallback = function () {
            previousCallback && previousCallback();
            cb && cb();
        }
        return;
    }
    _engineLoadedCallback = cb;
    if (!cc.game.config && config) {
        cc.game.config = config;
    }
    else if (!cc.game.config) {
        cc.game._loadConfig();
    }
    config = cc.game.config;
    _determineRenderType(config);
    document.body ? _load(config) : cc._addEventListener(window, 'load', _windowLoaded, false);
    _engineInitCalled = true;
};
})();
cc.game = {
    DEBUG_MODE_NONE: 0,
    DEBUG_MODE_INFO: 1,
    DEBUG_MODE_WARN: 2,
    DEBUG_MODE_ERROR: 3,
    DEBUG_MODE_INFO_FOR_WEB_PAGE: 4,
    DEBUG_MODE_WARN_FOR_WEB_PAGE: 5,
    DEBUG_MODE_ERROR_FOR_WEB_PAGE: 6,
    EVENT_HIDE: "game_on_hide",
    EVENT_SHOW: "game_on_show",
    EVENT_RESIZE: "game_on_resize",
    EVENT_RENDERER_INITED: "renderer_inited",
    RENDER_TYPE_CANVAS: 0,
    RENDER_TYPE_WEBGL: 1,
    RENDER_TYPE_OPENGL: 2,
    _eventHide: null,
    _eventShow: null,
    CONFIG_KEY: {
        width: "width",
        height: "height",
        engineDir: "engineDir",
        modules: "modules",
        debugMode: "debugMode",
        showFPS: "showFPS",
        frameRate: "frameRate",
        id: "id",
        renderMode: "renderMode",
        jsList: "jsList"
    },
    _paused: true,//whether the game is paused
    _prepareCalled: false,//whether the prepare function has been called
    _prepared: false,//whether the engine has prepared
    _rendererInitialized: false,
    _renderContext: null,
    _intervalId: null,//interval target of main
    _lastTime: null,
    _frameTime: null,
    frame: null,
    container: null,
    canvas: null,
    config: null,
    onStart: null,
    onStop: null,
    setFrameRate: function (frameRate) {
        var self = this, config = self.config, CONFIG_KEY = self.CONFIG_KEY;
        config[CONFIG_KEY.frameRate] = frameRate;
        if (self._intervalId)
            window.cancelAnimationFrame(self._intervalId);
        self._paused = true;
        self._setAnimFrame();
        self._runMainLoop();
    },
    step: function () {
        cc.director.mainLoop();
    },
    pause: function () {
        if (this._paused) return;
        this._paused = true;
        if (cc.audioEngine) {
            cc.audioEngine.stopAllEffects();
            cc.audioEngine.pauseMusic();
        }
        if (this._intervalId)
            window.cancelAnimationFrame(this._intervalId);
        this._intervalId = 0;
    },
    resume: function () {
        if (!this._paused) return;
        this._paused = false;
        if (cc.audioEngine) {
            cc.audioEngine.resumeMusic();
        }
        this._runMainLoop();
    },
    isPaused: function () {
        return this._paused;
    },
    restart: function () {
        cc.director.popToSceneStackLevel(0);
        cc.audioEngine && cc.audioEngine.end();
        cc.game.onStart();
    },
    end: function () {
        close();
    },
    prepare: function (cb) {
        var self = this,
            config = self.config,
            CONFIG_KEY = self.CONFIG_KEY;
        this._loadConfig();
        if (this._prepared) {
            if (cb) cb();
            return;
        }
        if (this._prepareCalled) {
            return;
        }
        if (cc._engineLoaded) {
            this._prepareCalled = true;
            this._initRenderer(config[CONFIG_KEY.width], config[CONFIG_KEY.height]);
            cc.view = cc.EGLView._getInstance();
            cc.director = cc.Director._getInstance();
            if (cc.director.setOpenGLView)
                cc.director.setOpenGLView(cc.view);
            cc.winSize = cc.director.getWinSize();
            this._initEvents();
            this._setAnimFrame();
            this._runMainLoop();
            var jsList = config[CONFIG_KEY.jsList];
            if (jsList) {
                cc.loader.loadJsWithImg(jsList, function (err) {
                    if (err) throw new Error(err);
                    self._prepared = true;
                    if (cb) cb();
                });
            }
            else {
                if (cb) cb();
            }
            return;
        }
        cc.initEngine(this.config, function () {
            self.prepare(cb);
        });
    },
    run: function (config, onStart) {
        if (typeof config === 'function') {
            cc.game.onStart = config;
        }
        else {
            if (config) {
                if (typeof config === 'string') {
                    if (!cc.game.config) this._loadConfig();
                    cc.game.config[cc.game.CONFIG_KEY.id] = config;
                } else {
                    cc.game.config = config;
                }
            }
            if (typeof onStart === 'function') {
                cc.game.onStart = onStart;
            }
        }
        this.prepare(cc.game.onStart && cc.game.onStart.bind(cc.game));
    },
    _setAnimFrame: function () {
        this._lastTime = new Date();
        this._frameTime = 1000 / cc.game.config[cc.game.CONFIG_KEY.frameRate];
        if((cc.sys.os === cc.sys.OS_IOS && cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT) || cc.game.config[cc.game.CONFIG_KEY.frameRate] !== 60) {
            window.requestAnimFrame = this._stTime;
            window.cancelAnimationFrame = this._ctTime;
        }
        else {
            window.requestAnimFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            this._stTime;
            window.cancelAnimationFrame = window.cancelAnimationFrame ||
            window.cancelRequestAnimationFrame ||
            window.msCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame ||
            window.oCancelRequestAnimationFrame ||
            window.webkitCancelRequestAnimationFrame ||
            window.msCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            this._ctTime;
        }
    },
    _stTime: function(callback){
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, cc.game._frameTime - (currTime - cc.game._lastTime));
        var id = window.setTimeout(function() { callback(); },
            timeToCall);
        cc.game._lastTime = currTime + timeToCall;
        return id;
    },
    _ctTime: function(id){
        window.clearTimeout(id);
    },
    _runMainLoop: function () {
        var self = this, callback, config = self.config, CONFIG_KEY = self.CONFIG_KEY,
            director = cc.director;
        director.setDisplayStats(config[CONFIG_KEY.showFPS]);
        callback = function () {
            if (!self._paused) {
                director.mainLoop();
                if(self._intervalId)
                    window.cancelAnimationFrame(self._intervalId);
                self._intervalId = window.requestAnimFrame(callback);
            }
        };
        window.requestAnimFrame(callback);
        self._paused = false;
    },
    _loadConfig: function () {
        if (this.config) {
            this._initConfig(this.config);
            return;
        }
        if (document["ccConfig"]) {
            this._initConfig(document["ccConfig"]);
        }
        else {
            var data = {};
            try {
                var cocos_script = document.getElementsByTagName('script');
                for(var i = 0; i < cocos_script.length; i++){
                    var _t = cocos_script[i].getAttribute('cocos');
                    if(_t === '' || _t) {
                        break;
                    }
                }
                var _src, txt, _resPath;
                if(i < cocos_script.length){
                    _src = cocos_script[i].src;
                    if(_src){
                        _resPath = /(.*)\//.exec(_src)[0];
                        cc.loader.resPath = _resPath;
                        _src = cc.path.join(_resPath, 'project.json');
                    }
                    txt = cc.loader._loadTxtSync(_src);
                }
                if(!txt){
                    txt = cc.loader._loadTxtSync("project.json");
                }
                data = JSON.parse(txt);
            } catch (e) {
                cc.log("Failed to read or parse project.json");
            }
            this._initConfig(data);
        }
    },
    _initConfig: function (config) {
        var CONFIG_KEY = this.CONFIG_KEY,
            modules = config[CONFIG_KEY.modules];
        config[CONFIG_KEY.showFPS] = typeof config[CONFIG_KEY.showFPS] === 'undefined' ? true : config[CONFIG_KEY.showFPS];
        config[CONFIG_KEY.engineDir] = config[CONFIG_KEY.engineDir] || "frameworks/cocos2d-html5";
        if (config[CONFIG_KEY.debugMode] == null)
            config[CONFIG_KEY.debugMode] = 0;
        config[CONFIG_KEY.frameRate] = config[CONFIG_KEY.frameRate] || 60;
        if (config[CONFIG_KEY.renderMode] == null)
            config[CONFIG_KEY.renderMode] = 0;
        if (config[CONFIG_KEY.registerSystemEvent] == null)
            config[CONFIG_KEY.registerSystemEvent] = true;
        if (modules && modules.indexOf("core") < 0) modules.splice(0, 0, "core");
        modules && (config[CONFIG_KEY.modules] = modules);
        this.config = config;
    },
    _initRenderer: function (width, height) {
        if (this._rendererInitialized) return;
        if (!cc._supportRender) {
            throw new Error("The renderer doesn't support the renderMode " + this.config[this.CONFIG_KEY.renderMode]);
        }
        var el = this.config[cc.game.CONFIG_KEY.id],
            win = window,
            element = cc.$(el) || cc.$('#' + el),
            localCanvas, localContainer, localConStyle;
        if (element.tagName === "CANVAS") {
            width = width || element.width;
            height = height || element.height;
            this.canvas = cc._canvas = localCanvas = element;
            this.container = cc.container = localContainer = document.createElement("DIV");
            if (localCanvas.parentNode)
                localCanvas.parentNode.insertBefore(localContainer, localCanvas);
        } else {
            if (element.tagName !== "DIV") {
                cc.log("Warning: target element is not a DIV or CANVAS");
            }
            width = width || element.clientWidth;
            height = height || element.clientHeight;
            this.canvas = cc._canvas = localCanvas = document.createElement("CANVAS");
            this.container = cc.container = localContainer = document.createElement("DIV");
            element.appendChild(localContainer);
        }
        localContainer.setAttribute('id', 'Cocos2dGameContainer');
        localContainer.appendChild(localCanvas);
        this.frame = (localContainer.parentNode === document.body) ? document.documentElement : localContainer.parentNode;
        localCanvas.addClass("gameCanvas");
        localCanvas.setAttribute("width", width || 480);
        localCanvas.setAttribute("height", height || 320);
        localCanvas.setAttribute("tabindex", 99);
        if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
            this._renderContext = cc._renderContext = cc.webglContext
             = cc.create3DContext(localCanvas, {
                'stencil': true,
                'antialias': !cc.sys.isMobile,
                'alpha': false
            });
        }
        if (this._renderContext) {
            cc.renderer = cc.rendererWebGL;
            win.gl = this._renderContext;
            cc.renderer.init();
            cc.shaderCache._init();
            cc._drawingUtil = new cc.DrawingPrimitiveWebGL(this._renderContext);
            cc.textureCache._initializingRenderer();
            cc.glExt = {};
            cc.glExt.instanced_arrays = win.gl.getExtension("ANGLE_instanced_arrays");
            cc.glExt.element_uint = win.gl.getExtension("OES_element_index_uint");
        } else {
            cc._renderType = cc.game.RENDER_TYPE_CANVAS;
            cc.renderer = cc.rendererCanvas;
            this._renderContext = cc._renderContext = new cc.CanvasContextWrapper(localCanvas.getContext("2d"));
            cc._drawingUtil = cc.DrawingPrimitiveCanvas ? new cc.DrawingPrimitiveCanvas(this._renderContext) : null;
        }
        cc._gameDiv = localContainer;
        cc.game.canvas.oncontextmenu = function () {
            if (!cc._isContextMenuEnable) return false;
        };
        this.dispatchEvent(this.EVENT_RENDERER_INITED, true);
        this._rendererInitialized = true;
    },
    _initEvents: function () {
        var win = window, self = this, hidden, visibilityChange, _undef = "undefined";
        this._eventHide = this._eventHide || new cc.EventCustom(this.EVENT_HIDE);
        this._eventHide.setUserData(this);
        this._eventShow = this._eventShow || new cc.EventCustom(this.EVENT_SHOW);
        this._eventShow.setUserData(this);
        if (this.config[this.CONFIG_KEY.registerSystemEvent])
            cc.inputManager.registerSystemEvent(this.canvas);
        if (!cc.isUndefined(document.hidden)) {
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if (!cc.isUndefined(document.mozHidden)) {
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
        } else if (!cc.isUndefined(document.msHidden)) {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (!cc.isUndefined(document.webkitHidden)) {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }
        var onHidden = function () {
            if (cc.eventManager && cc.game._eventHide)
                cc.eventManager.dispatchEvent(cc.game._eventHide);
        };
        var onShow = function () {
            if (cc.eventManager && cc.game._eventShow)
                cc.eventManager.dispatchEvent(cc.game._eventShow);
        };
        if (hidden) {
            document.addEventListener(visibilityChange, function () {
                if (document[hidden]) onHidden();
                else onShow();
            }, false);
        } else {
            win.addEventListener("blur", onHidden, false);
            win.addEventListener("focus", onShow, false);
        }
        if(navigator.userAgent.indexOf("MicroMessenger") > -1){
            win.onfocus = function(){ onShow() };
        }
        if ("onpageshow" in window && "onpagehide" in window) {
            win.addEventListener("pagehide", onHidden, false);
            win.addEventListener("pageshow", onShow, false);
        }
        cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function () {
            cc.game.pause();
        });
        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
            cc.game.resume();
        });
    }
};
Function.prototype.bind = Function.prototype.bind || function (oThis) {
    if (!cc.isFunction(this)) {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis
                ? this
                : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
        };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
};
cc._urlRegExp = new RegExp(
    "^" +
        "(?:(?:https?|ftp)://)" +
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:" +
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
            "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
            "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
            "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
            "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
            "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
        "|" +
            "(?:localhost)" +
        ")" +
        "(?::\\d{2,5})?" +
        "(?:/\\S*)?" +
    "$", "i"
);
cc.SimplePool = function () {
    this._pool = [];
};
cc.SimplePool.prototype = {
    constructor: cc.SimplePool,
    size: function () {
        return this._pool.length;
    },
    put: function (obj) {
        if (obj && this._pool.indexOf(obj) === -1) {
            this._pool.unshift(obj);
        }
    },
    get: function () {
        var last = this._pool.length-1;
        if (last < 0) {
            return null;
        }
        else {
            var obj = this._pool[last];
            this._pool.length = last;
            return obj;
        }
    },
    find: function (finder, end) {
        var found, i, obj, pool = this._pool, last = pool.length-1;
        for (i = pool.length; i >= 0; --i) {
            obj = pool[i];
            found = finder(i, obj);
            if (found) {
                pool[i] = pool[last];
                pool.length = last;
                return obj;
            }
        }
        if (end) {
            var index = end();
            if (index >= 0) {
                pool[index] = pool[last];
                pool.length = last;
                return obj;
            }
        }
        return null;
    }
};
cc.EventHelper = function(){};
cc.EventHelper.prototype = {
    constructor: cc.EventHelper,
    apply: function ( object ) {
        object.addEventListener = cc.EventHelper.prototype.addEventListener;
        object.hasEventListener = cc.EventHelper.prototype.hasEventListener;
        object.removeEventListener = cc.EventHelper.prototype.removeEventListener;
        object.dispatchEvent = cc.EventHelper.prototype.dispatchEvent;
    },
    addEventListener: function ( type, listener, target ) {
        if(type === "load" && this._textureLoaded){
            setTimeout(function(){
                listener.call(target);
            }, 0);
            return;
        }
        if ( this._listeners === undefined )
            this._listeners = {};
        var listeners = this._listeners;
        if ( listeners[ type ] === undefined )
            listeners[ type ] = [];
        if ( !this.hasEventListener(type, listener, target))
            listeners[ type ].push( {callback:listener, eventTarget: target} );
    },
    hasEventListener: function ( type, listener, target ) {
        if ( this._listeners === undefined )
            return false;
        var listeners = this._listeners;
        if ( listeners[ type ] !== undefined ) {
            for(var i = 0, len = listeners.length; i < len ; i++){
                var selListener = listeners[i];
                if(selListener.callback === listener && selListener.eventTarget === target)
                    return true;
            }
        }
        return false;
    },
    removeEventListener: function( type, listener, target){
        if ( this._listeners === undefined )
            return;
        var listeners = this._listeners;
        var listenerArray = listeners[ type ];
        if ( listenerArray !== undefined ) {
            for(var i = 0; i < listenerArray.length ; ){
                var selListener = listenerArray[i];
                if(selListener.eventTarget === target && selListener.callback === listener)
                    listenerArray.splice( i, 1 );
                else
                    i++
            }
        }
    },
    removeEventTarget: function( type, listener, target){
        if ( this._listeners === undefined )
            return;
        var listeners = this._listeners;
        var listenerArray = listeners[ type ];
        if ( listenerArray !== undefined ) {
            for(var i = 0; i < listenerArray.length ; ){
                var selListener = listenerArray[i];
                if(selListener.eventTarget === target)
                    listenerArray.splice( i, 1 );
                else
                    i++
            }
        }
    },
    dispatchEvent: function ( event, clearAfterDispatch ) {
        if ( this._listeners === undefined )
            return;
        if(clearAfterDispatch == null)
            clearAfterDispatch = true;
        var listeners = this._listeners;
        var listenerArray = listeners[ event];
        if ( listenerArray !== undefined ) {
            var array = [];
            var length = listenerArray.length;
            for ( var i = 0; i < length; i ++ ) {
                array[ i ] = listenerArray[ i ];
            }
            for ( i = 0; i < length; i ++ ) {
                array[ i ].callback.call( array[i].eventTarget, this );
            }
            if(clearAfterDispatch)
                listenerArray.length = 0;
        }
    }
};
cc.EventHelper.prototype.apply(cc.game);
var cc = cc || {};
cc._loadingImage = "data:image/gif;base64,R0lGODlhEAAQALMNAD8/P7+/vyoqKlVVVX9/fxUVFUBAQGBgYMDAwC8vL5CQkP///wAAAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAANACwAAAAAEAAQAAAEO5DJSau9OOvNex0IMnDIsiCkiW6g6BmKYlBFkhSUEgQKlQCARG6nEBwOgl+QApMdCIRD7YZ5RjlGpCUCACH5BAUAAA0ALAAAAgAOAA4AAAQ6kLGB0JA4M7QW0hrngRllkYyhKAYqKUGguAws0ypLS8JxCLQDgXAIDg+FRKIA6v0SAECCBpXSkstMBAAh+QQFAAANACwAAAAACgAQAAAEOJDJORAac6K1kDSKYmydpASBUl0mqmRfaGTCcQgwcxDEke+9XO2WkxQSiUIuAQAkls0n7JgsWq8RACH5BAUAAA0ALAAAAAAOAA4AAAQ6kMlplDIzTxWC0oxwHALnDQgySAdBHNWFLAvCukc215JIZihVIZEogDIJACBxnCSXTcmwGK1ar1hrBAAh+QQFAAANACwAAAAAEAAKAAAEN5DJKc4RM+tDyNFTkSQF5xmKYmQJACTVpQSBwrpJNteZSGYoFWjIGCAQA2IGsVgglBOmEyoxIiMAIfkEBQAADQAsAgAAAA4ADgAABDmQSVZSKjPPBEDSGucJxyGA1XUQxAFma/tOpDlnhqIYN6MEAUXvF+zldrMBAjHoIRYLhBMqvSmZkggAIfkEBQAADQAsBgAAAAoAEAAABDeQyUmrnSWlYhMASfeFVbZdjHAcgnUQxOHCcqWylKEohqUEAYVkgEAMfkEJYrFA6HhKJsJCNFoiACH5BAUAAA0ALAIAAgAOAA4AAAQ3kMlJq704611SKloCAEk4lln3DQgyUMJxCBKyLAh1EMRR3wiDQmHY9SQslyIQUMRmlmVTIyRaIgA7";
cc._fpsImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII=";
cc._loaderImage = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAlAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4MDBEMDY2QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MDBEMDY1QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RTk0OEM4OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2RTk0OEM5OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQADQkJCQoJDQoKDRMMCwwTFhENDREWGhUVFhUVGhkUFhUVFhQZGR0fIB8dGScnKionJzk4ODg5QEBAQEBAQEBAQAEODAwOEA4RDw8RFA4RDhQVERISERUfFRUXFRUfKB0ZGRkZHSgjJiAgICYjLCwoKCwsNzc1NzdAQEBAQEBAQEBA/8AAEQgAyACgAwEiAAIRAQMRAf/EALAAAAEFAQEAAAAAAAAAAAAAAAQAAgMFBgcBAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgUQAAIBAgIEBwoLBgQGAwAAAAECAwAEEQUhMRIGQVFxsTITFGGBwdEiQlKSMzWRoeFicqKyI1NzFYJjJDQWB9KjVCbxwkNkJWXik3QRAAIBAgMFBQcDBQEAAAAAAAABAhEDIRIEMUFRcTJhwVIUBZGhsSJyEzOB0ULhYpIjUxX/2gAMAwEAAhEDEQA/AMJSpUqAVKlXuFAeUq9wpUB5XuFe4V6ooDzZHDox0CnGMinzwl7Z8NajaHeoO3vmTBZBtp9YUIqTEV5ROxHKnWRnaU8VRMhFBUjpV7hSoSeUq9pUB5Sr2lhQHlKvcK8oBV7hSFSRrtaKAZs07YNPM1pG2xJIAw1jSeandry/8X4m8VCKkWwaWwam7Xl/4v1W8VLtmX/i/VbxUoKkWwakSM407tmX/i/VbxUmzGwjQsjdY41IARie/U0IbZO0kNtCXnOCkEBeFu4KI3Bs7DNb27ya+jDx3kJeEnpJJEcQVbWDsk17u5urd591ucZkWhym2Vnd9RkCDEpFxDRpbw0bunu5mlp2De2FMLYXOD2wB2xbOeraUcYGJ72mlSUiqzzdzMd3Z3mixltA2yzcK/NlHM1DQyRXce1HocdNOEfJXZ88y9ZojOqhiBszIRiHQ8Y4cK5TvHuzLljHNMqxNoDjLFraHHnjPxcNCGVbxEUzYNTx5jZSxhpW6qTzlwJ+DCvO2Zf+L9VvFSgqyHYNLYNTdssPxfibxUu15f8Ai/VPiqCakOwa82DU/a8v/F+JvFTDdWPBL8R8VKCvYRYV5UzoMAy6QdIIqI0B4KJtxiRQwou16QoGUkntH5Tz0RbZbmF2hktraSVBo2lUkY8tDye0flPPXTslVUyiyVRsjqUOA4yMT8dW2ram2m6UVTNq9S7EIyUVJydMTn/6DnP+im9Wl+g5z/opvVrpteEhQWY4AaSTwAVf5WPiZh/9S5/zj7zltzlmYWkfWXNvJDGTgGcYDHirR7i7mSbwXParsFMrgb7w6jKw/wCmnc9I14kF3vpvCljbMyWMOJL4aEiB8qU/ObUK7HYWVrl1pFZWiCOCBQqKOLjPGTrNZZqKbUXVHq2nNwTuJRk1VpbgXN8s7Rk5ym0UQQzhIG2NAjhxHWbI+gCBVjBBFbwxwQqEiiUJGg1BVGAFe7dV28WYLYZFmF2Th1UD7JGjymGyn1iK5OyzIBGB1HgrLZhamzumQAGJwSqnSCh1q3GOCodxt4cxurdcpzuN4cyhiWaF5Bg09udUmnWw1H/jV9nFuJ7Quo+8h8peThFA+047vduyMtk7fYqTl07YFdfUufMPzT5p71UdtlmYXaGS2t3mQHAsgxANdadYJopLe4QS2867EsZ4QfCNYrCFbjdDPmgkYyWFxgVf04ifJf6ScNdRUW1XBb6FU5TjF5EpSSrGu/s5lN+g5z/opvVpfoOc/wCim9WtdHnatvObJXDW7xLGhB8nrPaY9/HCr+tEdPCVaSeDoYLnqF63lzW4/PFSW3ecxbI84VSzWUwUaSdg0DXXK5nvAipnd6qgKvWnQO7pri9ZUEmm3Vl2j1kr8pRlFRyquBNZjGxQ/S56Y1S2fu9OVueon11Szahoou06QoQUXadIVCD2FJJ7R+U89dMydv8Axdn+TH9muZye0flPPXQstlK5Tbka1gUjlC1q0vVLkeb6r+O3Tx9xcY1nt8c0NrZCyiOE1108NYjGv1joo7Js1jzKyScYLIvkzL6LDwHXVJksH9Sb49dKNq0tj1jA6uriOCL+02FWX7iVtZX1/AzaHTyeoauKn2MX9W79zebiZCuR5MjSrhfXuEtwTrUeZH+yNfdrRNcxI6IzhXlJEak6WIGJ2Rw4ChWnChndtlVBLMdQA0k1gbXNMzzDfDLs6mjaPKppJbWwJ1bOwwxw43OnHh71YT3DpfWUJmFlb5jHHDdeXBHIsrRea5TSqvxqG04cNN62vetoCS4tre5mgnkGE9q+3DKOkuI2WX6LDQRRHWDh1UCtwj7QRg2wdl8Djgw1qe7XvW0BQ3kfZ7mSLgU+T9E6RVbnuVrnWVSWqj+Lt8ZbRuHEdKPkYVcZ2MJY5fSGyeVar45+rkWQHAqccalPE5km1htWK5nK4Wnt5FuUBUwOMG4nGkA/BXUrW4S6torlOjMgcd/xVn7rLo7zKs0uEjCNeSvdwoBhgsZxX1l2j36k3Lu+uyprdj5Vs5A+i/lD48a0aaVJOPi7jB6lbzWozpjB48pf1NDXNN4vfl7+Z4BXS65pvF78vfzPAK71XTHmZ/S/yT+jvJ7L3fHytz1E+upbL+Qj5W56jfXWRnsIYKLtekKEFGWvSFQgyjk9o/Keet3YthlMP/5x9msJJ7R+U89biyb/AMXEv7gD6tadL1T+kwepRrC39ZkLDMbiwMvUHRPG0bjlGg8ore/23sxBldxfMPLupNhT8yL/AORNZbdzJ484scytxgLqJY5LZj6Q2sV5G1Vud1mjjyG0ij0NEGSZToKyhjtqw4waztuiXA3qKTbSxltfGhbZlE95ZtZqxVbgiOZhrER9ph3Svk9+pJILZ4Y4DGBFCUMKjRsGPobPFhUfW0NJmljE2xJcIrcI2vFUEln1lRXd6lrazXT9GCNpD+yNqoI7mOVduNw6nzlOIoPOUa6yye1XXcbMR5GdQ3xY0BSbj31/FcTQZirJ+q431q7anbHCTZ72Bw7lbPrKBMcBWNNgbMBBh+bsjBdni0VJ1lARZs6yWiupxCuMDy6KpS2IwOo6DTr3Mre3e5tZZVUM4ZBjqOOJoWO4jkXajcOOMHGgDISvWIrdAkKR80+TzVl908bPPL3LzxOuHdifxVfiTAg92qI/w+/8gGgSyN/mR7XPVlp0lF/3L3mbVKtu5Hjbk/8AHE2Fc03i9+Xv5ngFdKNc13i9+Xv5ngFaNV0x5nn+l/kn9HeEWXu+PlbnqJ9dS2Xu9OVueon11kZ7CGCjLXpCgxRlr0hUIPYUcntH5Tz1s8vb+Bt1/dqPirGSe0flPPWusG/g4Py15q06XqlyMWvVYQ+ruI9xJOqzO9hOto/sP8tbGOFIrmWeM7IuMDMnAXXQJOUjQeOsJk0nY96ip0CYunrjaHx1t+srPJUbXBm2LrFPikwTOb+T+VhbZxGMrDXp83x1QSy2tucJpUjPETp+Cn5/ftaRvKvtp3Kx48HG3erHMzOxZiWZtLMdJNQSbbL71Vk6yynViOkqnEEfOWtPbXi3EQkGg6mXiNckjeSJxJGxR10qw0GtxuxmvbImD4CZMFlA4fRfv0BqesqqzTMZNMEDbIHtHH2QeCiZJSqMQdOGiue53mz3czQwsRbIcNHnkec3c4qAMuriz68gTIToxwOOnlp0MjxMJYW741Gs3RVldtbygE/dMcHX/moDaxTiWNZB53B3arb8/wC+4SOF4sf/AKxU9kcBsfOGHfoUHtG/RbzY5Die5HHhXdvavqiZ9Q8Jdlq4/gbKua7xe/L38zwCuhpf2Uk/Zo50kmwJKIdogDjw1VzzeL35e/meAVp1LTgqY4nn+mRauzqmqwrjzCLL3fHytz1E+upLL+Qj5W56jfXWRnroYKLtekKEFF2vSFQg9hSSe0flPPWosm/hIfoLzVl5PaPynnrRWb/w0X0F5q06XqlyM2sVYx5gmbFre/t71NY2T+0h8VbSO5SWNJUOKSAMp7jDGspmMPaLRlXS6eWve1/FRO7WYdbZm1Y/eW/R7qHxHRXGojlm3ulid6aVbaW+OALvgCLq2Hm9WxHKWqjhj6xsK1e8dm15l4niG1LZkswGsxtrPeOmsvayBJA1VItlWjptLuTdPMo7LtjRDq9naK4+WF9IrUW7BaHOljGqVHB7w2hzVoZt87d8vaNYSLl02CcRsDEbJbj71Uu7UBkvJ7/D7q2QoDxySaAO8MTXdxRVMpRp5XZOWdF/ms7R5XdyKfKWJsO/5PhrG5XlNxmEywW6bTnTxAAcJNbGSMXkM1pjgbiNo1PziPJ+Os7u7m/6ReM00ZOgxSpqYYHT3wRXMKN4ll9zUG4bQfNshu8sZVuEA2hirA4qe/VOwwrVbzbww5mI44UKRRYkbWG0S3JWctbd7u5WFfOOLHiUdJqmaipfLsIsObhWe001lMkMVvJNjhghIALMcBxCs7fxXQmkupx1bXDswGPlaTidVaEyKNXkoo4eBV+Sq7L7Vs9zcBgeyQ4GQ/MB1crmoim2orezqcowTuSeEY48jQ7oZX2PLzdyLhNd6RjrEY6I7+uspvH78vfzPAK6UAAAFGAGgAcArmu8Xvy9/M8ArTfio24RW5nnaG67uou3H/KPuqT2X8hHytz1G+upLL3enK3PUb66ys9RDBRdr0hQgou06QqEGUkntH5Tz1e238vF9BeaqKT2j8p56vbb+Xi+gvNWjTdUuRn1XTHmTh8KrJTJlt8t1CPIY44cGnpJVjTJYkmjaN9Ib4u7V923njTethRauZJV3PaW1rfLIiXEDYg6R4VYc9CXW7thfOZbKdbGZtLW8uPVY/u3GrkNUkM9zlcxUjbhfWOA90cRq4gv4LhdqN+VToNYWmnRm9NNVWNTyHc6VWBv8wt4YeHqm6xyPmroq1Z7WGFLSxTq7WLSuPSdjrkfumq5yHXDUeA92oO2SKpVumNAaoJLMXH3myp0rpJ4uKhc3tbDM5BMri1zAj79j7KTiY8TcdBpcsith0286o+sPCagEX9Pzg4zXUCp6QYse8oouCG3tk6m1BYv05W6T+IdyolxbHDAAa2OgDlNCz3ryN2WxBd5PJMg1t81eId2ukqnLlTBbfcuY+9uJLiRcvtPvHdsHK+cfRHcHDWsyawjyy0WBcDI3lTP6TeIcFV+S5OmXx9bJg1048o8Cj0V8Jq2DVu09nL80up7OxHi+oal3P8AXB/IsZS8T/YOV65zvCcc7vfzPAK3ivWCz445zeH954BXOr6I8yfSfyz+jvCLP3fHytz1G+upLP3fHytz1E+usbPaQ0UXadIUIKLtekKhB7Ckk9o/Keer22/l4/oLzVRSe0flPPV7b/y8X0F5q0abqlyM+q6Y8yQsBTDMor1o8aiaE1pbluMqS3sbLLHIhSRQyngqukhaJ9uBjo+H5aOa3ao2t34qouRlLajTalGP8v0IY8ylXQ+PKPFU/bYXOLPge6CKia0LaxTOxHu1Q7cuBd9yPEJ7TbjXKO8CajbMIF6CNIeNvJHjqIWJ7tSpYkalqVblwIdyG+RGXur0hXYJFxal+Dhq5y3slkv3Y2pD0pTr+QUClpJRUdo9XW4OLrTHtM16cZLLWkeC7y4jvlNEpcRtw1Ux27Ci448NZrTFy3nn3IQWxlgGrDZ3pza7/M8ArZo+ArF5171uvp+CqdV0R5l/psUrs2vB3hdl7vTlbnqJ9dS2Xu+PlbnqJ9dY2eshooq16QoQUXa9IVCD2FLJ7RuU89WNtmUSQqkgYMgw0accKrpPaPynnrZWG4Vi+VWmY5tnMWXG+XrIYnA0rhj0mdcTgdNdwnKDqjmduM1SRR/qlr8/4KX6pa8T/BVzDuLZXudRZblmbxXcPUNPc3KqCIwrbOzgrHEnHjoyD+3eSXkht7DeKG4umDGOJVUklfouThXfmbnZ7Cvy1vt9pmv1W1+d8FL9VteJvgq5yrcOGfLmzHN80iyyETPbptAEFo2ZG8pmUa1OFNn3Ky6W/sbDKM5hv5bx2WTZA+7RF2y52WOPJTzE+z2Dy1vt9pT/AKpacTerS/U7Tib1a04/t7kDXPY03jhN0W6sQ7K7W3q2dnrMccaDy/8At80kuZfqWYxWNtlcvUPPhiGYhWDeUy7IwYU8xPs9g8tb7faUn6pacTerTxm9oOBvVq3v9z927aynuId44LiWKNnjhAXF2UYhRg516qpsryjLr21665zFLSTaK9U2GOA87SwqY37knRU+BzOzags0s1Oyr+BKM6sxwP6tSDPLMen6vy0rvdm3Sxlu7K/S7WDDrFUDUTxgnTU826eXW7KlxmqQuwDBXUKcD+1Xee/wXuKX5XDGWLapSVcOyhEM/seJ/V+WnjeGx4pPV+Wkm6kKZlFay3Jlt7iFpYZY8ASVK6DjtDDA0f8A0Tl340/1f8Ndx8xJVWXB0KbktFFpNzdVXAC/qOwA0CQni2flrO3Vwbm5lnI2TKxbDirX/wBE5d+NcfV/wVR7xZPa5U9utvI8nWhmbbw0YEAYYAVxfhfy5rlKR4Fulu6X7mW1mzT8S4Yis/5CPlbnqJ9dSWfu9OVueon11mZvQ2i7XpChKKtekKhBlNJ7R+U89bDfGTb3a3ZX0Lcj6kdY+T2j8p560288m1kWQr6MJ+ylSAr+2cnV5renjs3H1loX+3j9XvbbtxLN9lqW4UnV5jdnjtXHxihtyZNjeSBu5J9k1BJe7xy7W5CJ/wCzuD/mTVTf2+fq97LJuLrPsNRueS7W6aJ/38x+vLVXuY+xvHaNxbf2GoCezf8A36j/APsSf8w1sLnqczTefJluYoLm5uo5F61sBshItP1cNFYe1f8A3ir/APfE/wCZUe9bB94r5jwuPsrQFhmG4l/Z2M17HdW90tuu3IkTHaCjWdIw0VVZdks9/C06yJFEp2dp+E1bbqybGTZ8vpQD7L1XRv8A7blT96Oda7tpNuuNE37Cq9KSisjyuUoxrStKllHbLlWTXsMs8chuSuwEPDqwoLe5y+YRE/gLzmqRekvKKtd4327yM/ulHxmrHJStySWVRyrjxKI2XC/CTlnlPPKTpTdFbP0L1bgrf5Lp0G3dPhQHwV0S1lzBsns3sESR8Crh9WAJGjSOKuU3E+zdZQ3oJh8IArdZXFDmOTpHa3i2+YrI2KtKy4ricBsBuHHgFXSo440+Wa2qqxjvM9uMoy+WvzWpLCWWWE28HxL6e43ojgkeSCBY1Ri5BGIUDT51cl3vm276BBqSEH4WbxV0tlkyXJcxTMb+OW6uY9mGHrCzDQwwAbTp2uKuTZ9N1uYsfRRR8WPhrm419mSSjRyiqxVK7y23B/ftuTm2oSdJyzNVw3BFn7vTlbnqF9dS2fu9OVueon11lZuQ2iLdsGFD05H2dNQGV0ntG5Tz1dWm9N1b2kVq8EVwsI2UaQaQOKhmitZGLOmk68DhSFvY+gfWNSAg7z3Qvo7yKCKIohiaNR5LKxx8qpxvjcqS0VpbxvwOAcRQPZ7D0G9Y0uz2HoH1jUCpLY7zXlpbm3eKO5QuzjrBqZji3x17PvNcyT288VvDBJbMWUovS2hslW7mFQ9nsPQPrGl2ew9A+saCod/WNxtbYsrfb17WBxx5ddD2281xC88klvDcSXEnWuzrqOGGC9zRUPZ7D0G9Y0uzWHoH1jQVCLreq6ntZbaO3it1mGy7RjTs1X2mYy20ZiCq8ZOODcdEdmsPQb1jS7PYegfWNdJuLqnQiSUlRqpFLmryxtH1Ma7Qw2gNNPOdSt0oI27p007s9h6B9Y0uz2HoH1jXX3Z+I4+1b8IJdX89xLHKQFMXQUahpxoiPN5P+onfU+A0/s9h6DesaXZ7D0D6xpG7OLbUtu0StW5JJx2bBsmbtiSiEk+cxoCWWSaVpZOk2vDVo0VYdnsPQb1jSNvZcCH1jSd2c+p1XAmFqEOmOPEfaH+BQd1ueo211IzrgFUYKNAAqI1WztCpUqVCRUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoD/9k=";
cc.loader.loadBinary = function (url, cb) {
    var self = this;
    var xhr = this.getXMLHttpRequest(),
        errInfo = "load " + url + " failed!";
    xhr.open("GET", url, true);
    if (cc.loader.loadBinary._IEFilter) {
        xhr.setRequestHeader("Accept-Charset", "x-user-defined");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var fileContents = cc._convertResponseBodyToText(xhr["responseBody"]);
                cb(null, self._str2Uint8Array(fileContents));
            } else cb(errInfo);
        };
    } else {
        if (xhr.overrideMimeType) xhr.overrideMimeType("text\/plain; charset=x-user-defined");
        xhr.onload = function () {
            xhr.readyState === 4 && xhr.status === 200 ? cb(null, self._str2Uint8Array(xhr.responseText)) : cb(errInfo);
        };
    }
    xhr.send(null);
};
cc.loader.loadBinary._IEFilter = (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) && window.IEBinaryToArray_ByteStr && window.IEBinaryToArray_ByteStr_Last);
cc.loader._str2Uint8Array = function (strData) {
    if (!strData)
        return null;
    var arrData = new Uint8Array(strData.length);
    for (var i = 0; i < strData.length; i++) {
        arrData[i] = strData.charCodeAt(i) & 0xff;
    }
    return arrData;
};
cc.loader.loadBinarySync = function (url) {
    var self = this;
    var req = this.getXMLHttpRequest();
    var errInfo = "load " + url + " failed!";
    req.open('GET', url, false);
    var arrayInfo = null;
    if (cc.loader.loadBinary._IEFilter) {
        req.setRequestHeader("Accept-Charset", "x-user-defined");
        req.send(null);
        if (req.status !== 200) {
            cc.log(errInfo);
            return null;
        }
        var fileContents = cc._convertResponseBodyToText(req["responseBody"]);
        if (fileContents) {
            arrayInfo = self._str2Uint8Array(fileContents);
        }
    } else {
        if (req.overrideMimeType)
            req.overrideMimeType('text\/plain; charset=x-user-defined');
        req.send(null);
        if (req.status !== 200) {
            cc.log(errInfo);
            return null;
        }
        arrayInfo = this._str2Uint8Array(req.responseText);
    }
    return arrayInfo;
};
window.Uint8Array = window.Uint8Array || window.Array;
if (cc.loader.loadBinary._IEFilter) {
    var IEBinaryToArray_ByteStr_Script =
        "<!-- IEBinaryToArray_ByteStr -->\r\n" +
            "Function IEBinaryToArray_ByteStr(Binary)\r\n" +
            "   IEBinaryToArray_ByteStr = CStr(Binary)\r\n" +
            "End Function\r\n" +
            "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n" +
            "   Dim lastIndex\r\n" +
            "   lastIndex = LenB(Binary)\r\n" +
            "   if lastIndex mod 2 Then\r\n" +
            "       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n" +
            "   Else\r\n" +
            "       IEBinaryToArray_ByteStr_Last = " + '""' + "\r\n" +
            "   End If\r\n" +
            "End Function\r\n";// +
    var myVBScript = document.createElement('script');
    myVBScript.type = "text/vbscript";
    myVBScript.textContent = IEBinaryToArray_ByteStr_Script;
    document.body.appendChild(myVBScript);
    cc._convertResponseBodyToText = function (binary) {
        var byteMapping = {};
        for (var i = 0; i < 256; i++) {
            for (var j = 0; j < 256; j++) {
                byteMapping[ String.fromCharCode(i + j * 256) ] =
                    String.fromCharCode(i) + String.fromCharCode(j);
            }
        }
        var rawBytes = IEBinaryToArray_ByteStr(binary);
        var lastChr = IEBinaryToArray_ByteStr_Last(binary);
        return rawBytes.replace(/[\s\S]/g,
            function (match) {
                return byteMapping[match];
            }) + lastChr;
    };
}
var cc = cc || {};
var ClassManager = {
    id : (0|(Math.random()*998)),
    instanceId : (0|(Math.random()*998)),
    getNewID : function(){
        return this.id++;
    },
    getNewInstanceId : function(){
        return this.instanceId++;
    }
};
(function () {
    var fnTest = /\b_super\b/;
    cc.Class = function () {
    };
    cc.Class.extend = function (props) {
        var _super = this.prototype;
        var prototype = Object.create(_super);
        var classId = ClassManager.getNewID();
        ClassManager[classId] = _super;
        var desc = { writable: true, enumerable: false, configurable: true };
	    prototype.__instanceId = null;
	    function Class() {
		    this.__instanceId = ClassManager.getNewInstanceId();
		    if (this.ctor)
			    this.ctor.apply(this, arguments);
	    }
	    Class.id = classId;
	    desc.value = classId;
	    Object.defineProperty(prototype, '__pid', desc);
	    Class.prototype = prototype;
	    desc.value = Class;
	    Object.defineProperty(Class.prototype, 'constructor', desc);
	    this.__getters__ && (Class.__getters__ = cc.clone(this.__getters__));
	    this.__setters__ && (Class.__setters__ = cc.clone(this.__setters__));
        for(var idx = 0, li = arguments.length; idx < li; ++idx) {
            var prop = arguments[idx];
            for (var name in prop) {
                var isFunc = (typeof prop[name] === "function");
                var override = (typeof _super[name] === "function");
                var hasSuperCall = fnTest.test(prop[name]);
                if (isFunc && override && hasSuperCall) {
                    desc.value = (function (name, fn) {
                        return function () {
                            var tmp = this._super;
                            this._super = _super[name];
                            var ret = fn.apply(this, arguments);
                            this._super = tmp;
                            return ret;
                        };
                    })(name, prop[name]);
                    Object.defineProperty(prototype, name, desc);
                } else if (isFunc) {
                    desc.value = prop[name];
                    Object.defineProperty(prototype, name, desc);
                } else {
                    prototype[name] = prop[name];
                }
                if (isFunc) {
                    var getter, setter, propertyName;
                    if (this.__getters__ && this.__getters__[name]) {
                        propertyName = this.__getters__[name];
                        for (var i in this.__setters__) {
                            if (this.__setters__[i] === propertyName) {
                                setter = i;
                                break;
                            }
                        }
                        cc.defineGetterSetter(prototype, propertyName, prop[name], prop[setter] ? prop[setter] : prototype[setter], name, setter);
                    }
                    if (this.__setters__ && this.__setters__[name]) {
                        propertyName = this.__setters__[name];
                        for (var i in this.__getters__) {
                            if (this.__getters__[i] === propertyName) {
                                getter = i;
                                break;
                            }
                        }
                        cc.defineGetterSetter(prototype, propertyName, prop[getter] ? prop[getter] : prototype[getter], prop[name], getter, name);
                    }
                }
            }
        }
        Class.extend = cc.Class.extend;
        Class.implement = function (prop) {
            for (var name in prop) {
                prototype[name] = prop[name];
            }
        };
        return Class;
    };
})();
cc.defineGetterSetter = function (proto, prop, getter, setter, getterName, setterName){
    if (proto.__defineGetter__) {
        getter && proto.__defineGetter__(prop, getter);
        setter && proto.__defineSetter__(prop, setter);
    } else if (Object.defineProperty) {
        var desc = { enumerable: false, configurable: true };
        getter && (desc.get = getter);
        setter && (desc.set = setter);
        Object.defineProperty(proto, prop, desc);
    } else {
        throw new Error("browser does not support getters");
    }
    if(!getterName && !setterName) {
        var hasGetter = (getter != null), hasSetter = (setter != undefined), props = Object.getOwnPropertyNames(proto);
        for (var i = 0; i < props.length; i++) {
            var name = props[i];
            if( (proto.__lookupGetter__ ? proto.__lookupGetter__(name)
                                        : Object.getOwnPropertyDescriptor(proto, name))
                || typeof proto[name] !== "function" )
                continue;
            var func = proto[name];
            if (hasGetter && func === getter) {
                getterName = name;
                if(!hasSetter || setterName) break;
            }
            if (hasSetter && func === setter) {
                setterName = name;
                if(!hasGetter || getterName) break;
            }
        }
    }
    var ctor = proto.constructor;
    if (getterName) {
        if (!ctor.__getters__) {
            ctor.__getters__ = {};
        }
        ctor.__getters__[getterName] = prop;
    }
    if (setterName) {
        if (!ctor.__setters__) {
            ctor.__setters__ = {};
        }
        ctor.__setters__[setterName] = prop;
    }
};
cc.clone = function (obj) {
    var newObj = (obj.constructor) ? new obj.constructor : {};
    for (var key in obj) {
        var copy = obj[key];
        if (((typeof copy) === "object") && copy &&
            !(copy instanceof cc.Node) && !(copy instanceof HTMLElement)) {
            newObj[key] = cc.clone(copy);
        } else {
            newObj[key] = copy;
        }
    }
    return newObj;
};
cc.inject = function(srcPrototype, destPrototype){
    for(var key in srcPrototype)
        destPrototype[key] = srcPrototype[key];
};
cc.Point = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
};
cc.p = function (x, y) {
    if (x === undefined)
        return {x: 0, y: 0};
    if (y === undefined)
        return {x: x.x, y: x.y};
    return {x: x, y: y};
};
cc.pointEqualToPoint = function (point1, point2) {
    return point1 && point2 && (point1.x === point2.x) && (point1.y === point2.y);
};
cc.Size = function (width, height) {
    this.width = width || 0;
    this.height = height || 0;
};
cc.size = function (w, h) {
    if (w === undefined)
        return {width: 0, height: 0};
    if (h === undefined)
        return {width: w.width, height: w.height};
    return {width: w, height: h};
};
cc.sizeEqualToSize = function (size1, size2) {
    return (size1 && size2 && (size1.width === size2.width) && (size1.height === size2.height));
};
cc.Rect = function (x, y, width, height) {
    this.x = x||0;
    this.y = y||0;
    this.width = width||0;
    this.height = height||0;
};
cc.rect = function (x, y, w, h) {
    if (x === undefined)
        return {x: 0, y: 0, width: 0, height: 0};
    if (y === undefined)
        return {x: x.x, y: x.y, width: x.width, height: x.height};
    return {x: x, y: y, width: w, height: h };
};
cc.rectEqualToRect = function (rect1, rect2) {
    return rect1 && rect2 && (rect1.x === rect2.x) && (rect1.y === rect2.y) && (rect1.width === rect2.width) && (rect1.height === rect2.height);
};
cc._rectEqualToZero = function(rect){
    return rect && (rect.x === 0) && (rect.y === 0) && (rect.width === 0) && (rect.height === 0);
};
cc.rectContainsRect = function (rect1, rect2) {
    if (!rect1 || !rect2)
        return false;
    return !((rect1.x >= rect2.x) || (rect1.y >= rect2.y) ||
        ( rect1.x + rect1.width <= rect2.x + rect2.width) ||
        ( rect1.y + rect1.height <= rect2.y + rect2.height));
};
cc.rectGetMaxX = function (rect) {
    return (rect.x + rect.width);
};
cc.rectGetMidX = function (rect) {
    return (rect.x + rect.width / 2.0);
};
cc.rectGetMinX = function (rect) {
    return rect.x;
};
cc.rectGetMaxY = function (rect) {
    return(rect.y + rect.height);
};
cc.rectGetMidY = function (rect) {
    return rect.y + rect.height / 2.0;
};
cc.rectGetMinY = function (rect) {
    return rect.y;
};
cc.rectContainsPoint = function (rect, point) {
    return (point.x >= cc.rectGetMinX(rect) && point.x <= cc.rectGetMaxX(rect) &&
        point.y >= cc.rectGetMinY(rect) && point.y <= cc.rectGetMaxY(rect)) ;
};
cc.rectIntersectsRect = function (ra, rb) {
    var maxax = ra.x + ra.width,
        maxay = ra.y + ra.height,
        maxbx = rb.x + rb.width,
        maxby = rb.y + rb.height;
    return !(maxax < rb.x || maxbx < ra.x || maxay < rb.y || maxby < ra.y);
};
cc.rectOverlapsRect = function (rectA, rectB) {
    return !((rectA.x + rectA.width < rectB.x) ||
        (rectB.x + rectB.width < rectA.x) ||
        (rectA.y + rectA.height < rectB.y) ||
        (rectB.y + rectB.height < rectA.y));
};
cc.rectUnion = function (rectA, rectB) {
    var rect = cc.rect(0, 0, 0, 0);
    rect.x = Math.min(rectA.x, rectB.x);
    rect.y = Math.min(rectA.y, rectB.y);
    rect.width = Math.max(rectA.x + rectA.width, rectB.x + rectB.width) - rect.x;
    rect.height = Math.max(rectA.y + rectA.height, rectB.y + rectB.height) - rect.y;
    return rect;
};
cc.rectIntersection = function (rectA, rectB) {
    var intersection = cc.rect(
        Math.max(cc.rectGetMinX(rectA), cc.rectGetMinX(rectB)),
        Math.max(cc.rectGetMinY(rectA), cc.rectGetMinY(rectB)),
        0, 0);
    intersection.width = Math.min(cc.rectGetMaxX(rectA), cc.rectGetMaxX(rectB)) - cc.rectGetMinX(intersection);
    intersection.height = Math.min(cc.rectGetMaxY(rectA), cc.rectGetMaxY(rectB)) - cc.rectGetMinY(intersection);
    return intersection;
};
cc.SAXParser = cc.Class.extend({
    _parser: null,
    _isSupportDOMParser: null,
    ctor: function () {
        if (window.DOMParser) {
            this._isSupportDOMParser = true;
            this._parser = new DOMParser();
        } else {
            this._isSupportDOMParser = false;
        }
    },
    parse : function(xmlTxt){
        return this._parseXML(xmlTxt);
    },
    _parseXML: function (textxml) {
        var xmlDoc;
        if (this._isSupportDOMParser) {
            xmlDoc = this._parser.parseFromString(textxml, "text/xml");
        } else {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = "false";
            xmlDoc.loadXML(textxml);
        }
        return xmlDoc;
    }
});
cc.PlistParser = cc.SAXParser.extend({
    parse : function (xmlTxt) {
        var xmlDoc = this._parseXML(xmlTxt);
        var plist = xmlDoc.documentElement;
        if (plist.tagName !== 'plist') {
            cc.warn("Not a plist file!");
            return {};
        }
        var node = null;
        for (var i = 0, len = plist.childNodes.length; i < len; i++) {
            node = plist.childNodes[i];
            if (node.nodeType === 1)
                break;
        }
        xmlDoc = null;
        return this._parseNode(node);
    },
    _parseNode: function (node) {
        var data = null, tagName = node.tagName;
        if(tagName === "dict"){
            data = this._parseDict(node);
        }else if(tagName === "array"){
            data = this._parseArray(node);
        }else if(tagName === "string"){
            if (node.childNodes.length === 1)
                data = node.firstChild.nodeValue;
            else {
                data = "";
                for (var i = 0; i < node.childNodes.length; i++)
                    data += node.childNodes[i].nodeValue;
            }
        }else if(tagName === "false"){
            data = false;
        }else if(tagName === "true"){
            data = true;
        }else if(tagName === "real"){
            data = parseFloat(node.firstChild.nodeValue);
        }else if(tagName === "integer"){
            data = parseInt(node.firstChild.nodeValue, 10);
        }
        return data;
    },
    _parseArray: function (node) {
        var data = [];
        for (var i = 0, len = node.childNodes.length; i < len; i++) {
            var child = node.childNodes[i];
            if (child.nodeType !== 1)
                continue;
            data.push(this._parseNode(child));
        }
        return data;
    },
    _parseDict: function (node) {
        var data = {};
        var key = null;
        for (var i = 0, len = node.childNodes.length; i < len; i++) {
            var child = node.childNodes[i];
            if (child.nodeType !== 1)
                continue;
            if (child.tagName === 'key')
                key = child.firstChild.nodeValue;
            else
                data[key] = this._parseNode(child);
        }
        return data;
    }
});
cc.saxParser = new cc.SAXParser();
cc.plistParser = new cc.PlistParser();
cc._txtLoader = {
    load : function(realUrl, url, res, cb){
        cc.loader.loadTxt(realUrl, cb);
    }
};
cc.loader.register(["txt", "xml", "vsh", "fsh", "atlas"], cc._txtLoader);
cc._jsonLoader = {
    load : function(realUrl, url, res, cb){
        cc.loader.loadJson(realUrl, cb);
    }
};
cc.loader.register(["json", "ExportJson"], cc._jsonLoader);
cc._jsLoader = {
    load : function(realUrl, url, res, cb){
        cc.loader.loadJs(realUrl, cb);
    }
};
cc.loader.register(["js"], cc._jsLoader);
cc._imgLoader = {
    load : function(realUrl, url, res, cb){
        var callback;
        if (cc.loader.isLoading(realUrl)) {
            callback = cb;
        }
        else {
            callback = function(err, img){
                if(err)
                    return cb(err);
                cc.loader.cache[url] = img;
                cc.textureCache.handleLoadedTexture(url);
                cb(null, img);
            };
        }
        cc.loader.loadImg(realUrl, callback);
    }
};
cc.loader.register(["png", "jpg", "bmp","jpeg","gif", "ico", "tiff", "webp"], cc._imgLoader);
cc._serverImgLoader = {
    load : function(realUrl, url, res, cb){
        cc._imgLoader.load(res.src, url, res, cb);
    }
};
cc.loader.register(["serverImg"], cc._serverImgLoader);
cc._plistLoader = {
    load : function(realUrl, url, res, cb){
        cc.loader.loadTxt(realUrl, function(err, txt){
            if(err)
                return cb(err);
            cb(null, cc.plistParser.parse(txt));
        });
    }
};
cc.loader.register(["plist"], cc._plistLoader);
cc._fontLoader = {
    TYPE : {
        ".eot" : "embedded-opentype",
        ".ttf" : "truetype",
        ".ttc" : "truetype",
        ".woff" : "woff",
        ".svg" : "svg"
    },
    _loadFont : function(name, srcs, type){
        var doc = document, path = cc.path, TYPE = this.TYPE, fontStyle = document.createElement("style");
        fontStyle.type = "text/css";
        doc.body.appendChild(fontStyle);
        var fontStr = "";
        if(isNaN(name - 0))
            fontStr += "@font-face { font-family:" + name + "; src:";
        else
            fontStr += "@font-face { font-family:'" + name + "'; src:";
        if(srcs instanceof Array){
            for(var i = 0, li = srcs.length; i < li; i++){
                var src = srcs[i];
                type = path.extname(src).toLowerCase();
                fontStr += "url('" + srcs[i] + "') format('" + TYPE[type] + "')";
                fontStr += (i === li - 1) ? ";" : ",";
            }
        }else{
            type = type.toLowerCase();
            fontStr += "url('" + srcs + "') format('" + TYPE[type] + "');";
        }
        fontStyle.textContent += fontStr + "}";
        var preloadDiv = document.createElement("div");
        var _divStyle =  preloadDiv.style;
        _divStyle.fontFamily = name;
        preloadDiv.innerHTML = ".";
        _divStyle.position = "absolute";
        _divStyle.left = "-100px";
        _divStyle.top = "-100px";
        doc.body.appendChild(preloadDiv);
    },
    load : function(realUrl, url, res, cb){
        var self = this;
        var type = res.type, name = res.name, srcs = res.srcs;
        if(cc.isString(res)){
            type = cc.path.extname(res);
            name = cc.path.basename(res, type);
            self._loadFont(name, res, type);
        }else{
            self._loadFont(name, srcs);
        }
        if(document.fonts){
            document.fonts.load("1em " + name).then(function(){
                cb(null, true);
            }, function(err){
                cb(err);
            });
        }else{
            cb(null, true);
        }
    }
};
cc.loader.register(["font", "eot", "ttf", "woff", "svg", "ttc"], cc._fontLoader);
cc._binaryLoader = {
    load : function(realUrl, url, res, cb){
        cc.loader.loadBinary(realUrl, cb);
    }
};
cc._csbLoader = {
    load: function(realUrl, url, res, cb){
        cc.loader.loadCsb(realUrl, cb);
    }
};
cc.loader.register(["csb"], cc._csbLoader);
window["CocosEngine"] = cc.ENGINE_VERSION = "Cocos2d-JS v3.13";
cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0;
cc.DIRECTOR_STATS_POSITION = cc.p(0, 0);
cc.DIRECTOR_FPS_INTERVAL = 0.5;
cc.COCOSNODE_RENDER_SUBPIXEL = 1;
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1;
cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 1;
cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0;
cc.TEXTURE_ATLAS_USE_VAO = 0;
cc.TEXTURE_NPOT_SUPPORT = 0;
cc.RETINA_DISPLAY_SUPPORT = 1;
cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd";
cc.USE_LA88_LABELS = 1;
cc.SPRITE_DEBUG_DRAW = 0;
cc.SPRITEBATCHNODE_DEBUG_DRAW = 0;
cc.LABELBMFONT_DEBUG_DRAW = 0;
cc.LABELATLAS_DEBUG_DRAW = 0;
cc.IS_RETINA_DISPLAY_SUPPORTED = 1;
cc.DEFAULT_ENGINE = cc.ENGINE_VERSION + "-canvas";
cc.ENABLE_STACKABLE_ACTIONS = 1;
cc.ENABLE_GL_STATE_CACHE = 1;
cc.$ = function (x) {
    var parent = (this === cc) ? document : this;
    var el = (x instanceof HTMLElement) ? x : parent.querySelector(x);
    if (el) {
        el.find = el.find || cc.$;
        el.hasClass = el.hasClass || function (cls) {
            return this.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        };
        el.addClass = el.addClass || function (cls) {
            if (!this.hasClass(cls)) {
                if (this.className) {
                    this.className += " ";
                }
                this.className += cls;
            }
            return this;
        };
        el.removeClass = el.removeClass || function (cls) {
            if (this.hasClass(cls)) {
                this.className = this.className.replace(cls, '');
            }
            return this;
        };
        el.remove = el.remove || function () {
            if (this.parentNode)
                this.parentNode.removeChild(this);
            return this;
        };
        el.appendTo = el.appendTo || function (x) {
            x.appendChild(this);
            return this;
        };
        el.prependTo = el.prependTo || function (x) {
            ( x.childNodes[0]) ? x.insertBefore(this, x.childNodes[0]) : x.appendChild(this);
            return this;
        };
        el.transforms = el.transforms || function () {
            this.style[cc.$.trans] = cc.$.translate(this.position) + cc.$.rotate(this.rotation) + cc.$.scale(this.scale) + cc.$.skew(this.skew);
            return this;
        };
        el.position = el.position || {x: 0, y: 0};
        el.rotation = el.rotation || 0;
        el.scale = el.scale || {x: 1, y: 1};
        el.skew = el.skew || {x: 0, y: 0};
        el.translates = function (x, y) {
            this.position.x = x;
            this.position.y = y;
            this.transforms();
            return this
        };
        el.rotate = function (x) {
            this.rotation = x;
            this.transforms();
            return this
        };
        el.resize = function (x, y) {
            this.scale.x = x;
            this.scale.y = y;
            this.transforms();
            return this
        };
        el.setSkew = function (x, y) {
            this.skew.x = x;
            this.skew.y = y;
            this.transforms();
            return this
        };
    }
    return el;
};
switch (cc.sys.browserType) {
    case cc.sys.BROWSER_TYPE_FIREFOX:
        cc.$.pfx = "Moz";
        cc.$.hd = true;
        break;
    case cc.sys.BROWSER_TYPE_CHROME:
    case cc.sys.BROWSER_TYPE_SAFARI:
        cc.$.pfx = "webkit";
        cc.$.hd = true;
        break;
    case cc.sys.BROWSER_TYPE_OPERA:
        cc.$.pfx = "O";
        cc.$.hd = false;
        break;
    case cc.sys.BROWSER_TYPE_IE:
        cc.$.pfx = "ms";
        cc.$.hd = false;
        break;
    default:
        cc.$.pfx = "webkit";
        cc.$.hd = true;
}
cc.$.trans = cc.$.pfx + "Transform";
cc.$.translate = (cc.$.hd) ? function (a) {
    return "translate3d(" + a.x + "px, " + a.y + "px, 0) "
} : function (a) {
    return "translate(" + a.x + "px, " + a.y + "px) "
};
cc.$.rotate = (cc.$.hd) ? function (a) {
    return "rotateZ(" + a + "deg) ";
} : function (a) {
    return "rotate(" + a + "deg) ";
};
cc.$.scale = function (a) {
    return "scale(" + a.x + ", " + a.y + ") "
};
cc.$.skew = function (a) {
    return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)";
};
cc.$new = function (x) {
    return cc.$(document.createElement(x))
};
cc.$.findpos = function (obj) {
    var curleft = 0;
    var curtop = 0;
    do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return {x: curleft, y: curtop};
};
cc.INVALID_INDEX = -1;
cc.PI = Math.PI;
cc.FLT_MAX = parseFloat('3.402823466e+38F');
cc.FLT_MIN = parseFloat("1.175494351e-38F");
cc.RAD = cc.PI / 180;
cc.DEG = 180 / cc.PI;
cc.UINT_MAX = 0xffffffff;
cc.swap = function (x, y, ref) {
    if (cc.isObject(ref) && !cc.isUndefined(ref.x) && !cc.isUndefined(ref.y)) {
        var tmp = ref[x];
        ref[x] = ref[y];
        ref[y] = tmp;
    } else
        cc.log(cc._LogInfos.swap);
};
cc.lerp = function (a, b, r) {
    return a + (b - a) * r;
};
cc.rand = function () {
	return Math.random() * 0xffffff;
};
cc.randomMinus1To1 = function () {
    return (Math.random() - 0.5) * 2;
};
cc.random0To1 = Math.random;
cc.degreesToRadians = function (angle) {
    return angle * cc.RAD;
};
cc.radiansToDegrees = function (angle) {
    return angle * cc.DEG;
};
cc.radiansToDegress = function (angle) {
    cc.log(cc._LogInfos.radiansToDegress);
    return angle * cc.DEG;
};
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1;
cc.nodeDrawSetup = function (node) {
    if (node._shaderProgram) {
        node._shaderProgram.use();
        node._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4();
    }
};
cc.enableDefaultGLStates = function () {
};
cc.disableDefaultGLStates = function () {
};
cc.incrementGLDraws = function (addNumber) {
    cc.g_NumberOfDraws += addNumber;
};
cc.FLT_EPSILON = 0.0000001192092896;
cc.contentScaleFactor = cc.IS_RETINA_DISPLAY_SUPPORTED ? function () {
    return cc.director.getContentScaleFactor();
} : function () {
    return 1;
};
cc.pointPointsToPixels = function (points) {
    var scale = cc.contentScaleFactor();
    return cc.p(points.x * scale, points.y * scale);
};
cc.pointPixelsToPoints = function (pixels) {
	var scale = cc.contentScaleFactor();
	return cc.p(pixels.x / scale, pixels.y / scale);
};
cc._pointPixelsToPointsOut = function(pixels, outPoint){
	var scale = cc.contentScaleFactor();
	outPoint.x = pixels.x / scale;
	outPoint.y = pixels.y / scale;
};
cc.sizePointsToPixels = function (sizeInPoints) {
    var scale = cc.contentScaleFactor();
    return cc.size(sizeInPoints.width * scale, sizeInPoints.height * scale);
};
cc.sizePixelsToPoints = function (sizeInPixels) {
    var scale = cc.contentScaleFactor();
    return cc.size(sizeInPixels.width / scale, sizeInPixels.height / scale);
};
cc._sizePixelsToPointsOut = function (sizeInPixels, outSize) {
    var scale = cc.contentScaleFactor();
    outSize.width = sizeInPixels.width / scale;
    outSize.height = sizeInPixels.height / scale;
};
cc.rectPixelsToPoints = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (pixel) {
    var scale = cc.contentScaleFactor();
    return cc.rect(pixel.x / scale, pixel.y / scale,
        pixel.width / scale, pixel.height / scale);
} : function (p) {
    return p;
};
cc.rectPointsToPixels = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (point) {
   var scale = cc.contentScaleFactor();
    return cc.rect(point.x * scale, point.y * scale,
        point.width * scale, point.height * scale);
} : function (p) {
    return p;
};
cc.ONE = 1;
cc.ZERO = 0;
cc.SRC_ALPHA = 0x0302;
cc.SRC_ALPHA_SATURATE = 0x308;
cc.SRC_COLOR = 0x300;
cc.DST_ALPHA = 0x304;
cc.DST_COLOR = 0x306;
cc.ONE_MINUS_SRC_ALPHA = 0x0303;
cc.ONE_MINUS_SRC_COLOR = 0x301;
cc.ONE_MINUS_DST_ALPHA = 0x305;
cc.ONE_MINUS_DST_COLOR = 0x0307;
cc.ONE_MINUS_CONSTANT_ALPHA	= 0x8004;
cc.ONE_MINUS_CONSTANT_COLOR	= 0x8002;
cc.LINEAR	= 0x2601;
cc.REPEAT	= 0x2901;
cc.CLAMP_TO_EDGE	= 0x812f;
cc.MIRRORED_REPEAT   = 0x8370;
cc.BLEND_SRC = cc.SRC_ALPHA;
cc.game.addEventListener(cc.game.EVENT_RENDERER_INITED, function () {
    if (cc._renderType === cc.game.RENDER_TYPE_WEBGL
         && cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA) {
        cc.BLEND_SRC = cc.ONE;
    }
});
cc.BLEND_DST = cc.ONE_MINUS_SRC_ALPHA;
cc.checkGLErrorDebug = function () {
    if (cc.renderMode === cc.game.RENDER_TYPE_WEBGL) {
        var _error = cc._renderContext.getError();
        if (_error) {
            cc.log(cc._LogInfos.checkGLErrorDebug, _error);
        }
    }
};
cc.ORIENTATION_PORTRAIT = 1;
cc.ORIENTATION_LANDSCAPE = 2;
cc.ORIENTATION_AUTO = 3;
cc.VERTEX_ATTRIB_FLAG_NONE = 0;
cc.VERTEX_ATTRIB_FLAG_POSITION = 1 << 0;
cc.VERTEX_ATTRIB_FLAG_COLOR = 1 << 1;
cc.VERTEX_ATTRIB_FLAG_TEX_COORDS = 1 << 2;
cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = ( cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS );
cc.GL_ALL = 0;
cc.VERTEX_ATTRIB_POSITION = 0;
cc.VERTEX_ATTRIB_COLOR = 1;
cc.VERTEX_ATTRIB_TEX_COORDS = 2;
cc.VERTEX_ATTRIB_MAX = 7;
cc.UNIFORM_PMATRIX = 0;
cc.UNIFORM_MVMATRIX = 1;
cc.UNIFORM_MVPMATRIX = 2;
cc.UNIFORM_TIME = 3;
cc.UNIFORM_SINTIME = 4;
cc.UNIFORM_COSTIME = 5;
cc.UNIFORM_RANDOM01 = 6;
cc.UNIFORM_SAMPLER = 7;
cc.UNIFORM_MAX = 8;
cc.SHADER_POSITION_TEXTURECOLOR = "ShaderPositionTextureColor";
cc.SHADER_SPRITE_POSITION_TEXTURECOLOR = "ShaderSpritePositionTextureColor";
cc.SHADER_POSITION_TEXTURECOLORALPHATEST = "ShaderPositionTextureColorAlphaTest";
cc.SHADER_SPRITE_POSITION_TEXTURECOLORALPHATEST = "ShaderSpritePositionTextureColorAlphaTest";
cc.SHADER_POSITION_COLOR = "ShaderPositionColor";
cc.SHADER_SPRITE_POSITION_COLOR = "ShaderSpritePositionColor";
cc.SHADER_POSITION_TEXTURE = "ShaderPositionTexture";
cc.SHADER_POSITION_TEXTURE_UCOLOR = "ShaderPositionTexture_uColor";
cc.SHADER_POSITION_TEXTUREA8COLOR = "ShaderPositionTextureA8Color";
cc.SHADER_POSITION_UCOLOR = "ShaderPosition_uColor";
cc.SHADER_POSITION_LENGTHTEXTURECOLOR = "ShaderPositionLengthTextureColor";
cc.UNIFORM_PMATRIX_S = "CC_PMatrix";
cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix";
cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix";
cc.UNIFORM_TIME_S = "CC_Time";
cc.UNIFORM_SINTIME_S = "CC_SinTime";
cc.UNIFORM_COSTIME_S = "CC_CosTime";
cc.UNIFORM_RANDOM01_S = "CC_Random01";
cc.UNIFORM_SAMPLER_S = "CC_Texture0";
cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value";
cc.ATTRIBUTE_NAME_COLOR = "a_color";
cc.ATTRIBUTE_NAME_POSITION = "a_position";
cc.ATTRIBUTE_NAME_TEX_COORD = "a_texCoord";
cc.ATTRIBUTE_NAME_MVMAT = "a_mvMatrix";
cc.ITEM_SIZE = 32;
cc.CURRENT_ITEM = 0xc0c05001;
cc.ZOOM_ACTION_TAG = 0xc0c05002;
cc.NORMAL_TAG = 8801;
cc.SELECTED_TAG = 8802;
cc.DISABLE_TAG = 8803;
cc.arrayVerifyType = function (arr, type) {
    if (arr && arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (!(arr[i] instanceof  type)) {
                cc.log("element type is wrong!");
                return false;
            }
        }
    }
    return true;
};
cc.arrayRemoveObject = function (arr, delObj) {
    for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === delObj) {
            arr.splice(i, 1);
            break;
        }
    }
};
cc.arrayRemoveArray = function (arr, minusArr) {
    for (var i = 0, l = minusArr.length; i < l; i++) {
        cc.arrayRemoveObject(arr, minusArr[i]);
    }
};
cc.arrayAppendObjectsToIndex = function(arr, addObjs,index){
    arr.splice.apply(arr, [index, 0].concat(addObjs));
    return arr;
};
cc.copyArray = function(arr){
    var i, len = arr.length, arr_clone = new Array(len);
    for (i = 0; i < len; i += 1)
        arr_clone[i] = arr[i];
    return arr_clone;
};
cc._tmp.PrototypeColor = function () {
    var _p = cc.color;
    _p._getWhite = function () {
        return _p(255, 255, 255);
    };
    _p._getYellow = function () {
        return _p(255, 255, 0);
    };
    _p._getBlue = function () {
        return  _p(0, 0, 255);
    };
    _p._getGreen = function () {
        return _p(0, 255, 0);
    };
    _p._getRed = function () {
        return _p(255, 0, 0);
    };
    _p._getMagenta = function () {
        return _p(255, 0, 255);
    };
    _p._getBlack = function () {
        return _p(0, 0, 0);
    };
    _p._getOrange = function () {
        return _p(255, 127, 0);
    };
    _p._getGray = function () {
        return _p(166, 166, 166);
    };
    _p.WHITE;
    cc.defineGetterSetter(_p, "WHITE", _p._getWhite);
    _p.YELLOW;
    cc.defineGetterSetter(_p, "YELLOW", _p._getYellow);
    _p.BLUE;
    cc.defineGetterSetter(_p, "BLUE", _p._getBlue);
    _p.GREEN;
    cc.defineGetterSetter(_p, "GREEN", _p._getGreen);
    _p.RED;
    cc.defineGetterSetter(_p, "RED", _p._getRed);
    _p.MAGENTA;
    cc.defineGetterSetter(_p, "MAGENTA", _p._getMagenta);
    _p.BLACK;
    cc.defineGetterSetter(_p, "BLACK", _p._getBlack);
    _p.ORANGE;
    cc.defineGetterSetter(_p, "ORANGE", _p._getOrange);
    _p.GRAY;
    cc.defineGetterSetter(_p, "GRAY", _p._getGray);
    cc.BlendFunc._disable = function(){
        return new cc.BlendFunc(cc.ONE, cc.ZERO);
    };
    cc.BlendFunc._alphaPremultiplied = function(){
        return new cc.BlendFunc(cc.ONE, cc.ONE_MINUS_SRC_ALPHA);
    };
    cc.BlendFunc._alphaNonPremultiplied = function(){
        return new cc.BlendFunc(cc.SRC_ALPHA, cc.ONE_MINUS_SRC_ALPHA);
    };
    cc.BlendFunc._additive = function(){
        return new cc.BlendFunc(cc.SRC_ALPHA, cc.ONE);
    };
    cc.BlendFunc.DISABLE;
    cc.defineGetterSetter(cc.BlendFunc, "DISABLE", cc.BlendFunc._disable);
    cc.BlendFunc.ALPHA_PREMULTIPLIED;
    cc.defineGetterSetter(cc.BlendFunc, "ALPHA_PREMULTIPLIED", cc.BlendFunc._alphaPremultiplied);
    cc.BlendFunc.ALPHA_NON_PREMULTIPLIED;
    cc.defineGetterSetter(cc.BlendFunc, "ALPHA_NON_PREMULTIPLIED", cc.BlendFunc._alphaNonPremultiplied);
    cc.BlendFunc.ADDITIVE;
    cc.defineGetterSetter(cc.BlendFunc, "ADDITIVE", cc.BlendFunc._additive);
};
var cc = cc || {};
cc._tmp = cc._tmp || {};
cc.game.addEventListener(cc.game.EVENT_RENDERER_INITED, function () {
    if (cc._renderType !== cc.game.RENDER_TYPE_WEBGL) {
        return;
    }
    cc.color = function (r, g, b, a, arrayBuffer, offset) {
        if (r === undefined)
            return new cc.Color(0, 0, 0, 255, arrayBuffer, offset);
        if (cc.isString(r)) {
            var color = cc.hexToColor(r);
            return new cc.Color(color.r, color.g, color.b, color.a);
        }
        if (cc.isObject(r))
            return new cc.Color(r.r, r.g, r.b, r.a, r.arrayBuffer, r.offset);
        return new cc.Color(r, g, b, a, arrayBuffer, offset);
    };
    cc.Color = function (r, g, b, a, arrayBuffer, offset) {
        this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Color.BYTES_PER_ELEMENT);
        this._offset = offset || 0;
        var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
        this._view = new Uint8Array(locArrayBuffer, locOffset, 4);
        this._view[0] = r || 0;
        this._view[1] = g || 0;
        this._view[2] = b || 0;
        this._view[3] = (a == null) ? 255 : a;
        if (a === undefined)
            this.a_undefined = true;
    };
    cc.Color.BYTES_PER_ELEMENT = 4;
    var _p = cc.Color.prototype;
    _p._getR = function () {
        return this._view[0];
    };
    _p._setR = function (value) {
        this._view[0] = value < 0 ? 0 : value;
    };
    _p._getG = function () {
        return this._view[1];
    };
    _p._setG = function (value) {
        this._view[1] = value < 0 ? 0 : value;
    };
    _p._getB = function () {
        return this._view[2];
    };
    _p._setB = function (value) {
        this._view[2] = value < 0 ? 0 : value;
    };
    _p._getA = function () {
        return this._view[3];
    };
    _p._setA = function (value) {
        this._view[3] = value < 0 ? 0 : value;
    };
    _p.r;
    cc.defineGetterSetter(_p, "r", _p._getR, _p._setR);
    _p.g;
    cc.defineGetterSetter(_p, "g", _p._getG, _p._setG);
    _p.b;
    cc.defineGetterSetter(_p, "b", _p._getB, _p._setB);
    _p.a;
    cc.defineGetterSetter(_p, "a", _p._getA, _p._setA);
    cc.assert(cc.isFunction(cc._tmp.PrototypeColor), cc._LogInfos.MissingFile, "CCTypesPropertyDefine.js");
    cc._tmp.PrototypeColor();
    delete cc._tmp.PrototypeColor;
});
cc.Color = function (r, g, b, a) {
    this.r = r || 0;
    this.g = g || 0;
    this.b = b || 0;
    this.a = (a == null) ? 255 : a;
};
cc.color = function (r, g, b, a) {
    if (r === undefined)
        return {r: 0, g: 0, b: 0, a: 255};
    if (cc.isString(r))
        return cc.hexToColor(r);
    if (cc.isObject(r))
        return {r: r.r, g: r.g, b: r.b, a: (r.a == null) ? 255 : r.a};
    return  {r: r, g: g, b: b, a: (a == null ? 255 : a)};
};
cc.colorEqual = function (color1, color2) {
    return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
};
cc.Acceleration = function (x, y, z, timestamp) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.timestamp = timestamp || 0;
};
cc.Vertex2F = function (x, y, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex2F.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    this._view = new Float32Array(this._arrayBuffer, this._offset, 2);
    this._view[0] = x || 0;
    this._view[1] = y || 0;
};
cc.Vertex2F.BYTES_PER_ELEMENT = 8;
_p = cc.Vertex2F.prototype;
_p._getX = function () {
    return this._view[0];
};
_p._setX = function (xValue) {
    this._view[0] = xValue;
};
_p._getY = function () {
    return this._view[1];
};
_p._setY = function (yValue) {
    this._view[1] = yValue;
};
_p.x;
cc.defineGetterSetter(_p, "x", _p._getX, _p._setX);
_p.y;
cc.defineGetterSetter(_p, "y", _p._getY, _p._setY);
cc.Vertex3F = function (x, y, z, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Vertex3F.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
    this._view = new Float32Array(locArrayBuffer, locOffset, 3);
    this._view[0] = x || 0;
    this._view[1] = y || 0;
    this._view[2] = z || 0;
};
cc.Vertex3F.BYTES_PER_ELEMENT = 12;
_p = cc.Vertex3F.prototype;
_p._getX = function () {
    return this._view[0];
};
_p._setX = function (xValue) {
    this._view[0] = xValue;
};
_p._getY = function () {
    return this._view[1];
};
_p._setY = function (yValue) {
    this._view[1] = yValue;
};
_p._getZ = function () {
    return this._view[2];
};
_p._setZ = function (zValue) {
    this._view[2] = zValue;
};
_p.x;
cc.defineGetterSetter(_p, "x", _p._getX, _p._setX);
_p.y;
cc.defineGetterSetter(_p, "y", _p._getY, _p._setY);
_p.z;
cc.defineGetterSetter(_p, "z", _p._getZ, _p._setZ);
cc.Tex2F = function (u, v, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Tex2F.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    this._view = new Float32Array(this._arrayBuffer, this._offset, 2);
    this._view[0] = u || 0;
    this._view[1] = v || 0;
};
cc.Tex2F.BYTES_PER_ELEMENT = 8;
_p = cc.Tex2F.prototype;
_p._getU = function () {
    return this._view[0];
};
_p._setU = function (xValue) {
    this._view[0] = xValue;
};
_p._getV = function () {
    return this._view[1];
};
_p._setV = function (yValue) {
    this._view[1] = yValue;
};
_p.u;
cc.defineGetterSetter(_p, "u", _p._getU, _p._setU);
_p.v;
cc.defineGetterSetter(_p, "v", _p._getV, _p._setV);
cc.Quad2 = function (tl, tr, bl, br, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Quad2.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.Vertex2F.BYTES_PER_ELEMENT;
    this._tl = tl ? new cc.Vertex2F(tl.x, tl.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this._tr = tr ? new cc.Vertex2F(tr.x, tr.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this._bl = bl ? new cc.Vertex2F(bl.x, bl.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this._br = br ? new cc.Vertex2F(br.x, br.y, locArrayBuffer, locOffset) : new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
};
cc.Quad2.BYTES_PER_ELEMENT = 32;
_p = cc.Quad2.prototype;
_p._getTL = function () {
    return this._tl;
};
_p._setTL = function (tlValue) {
    this._tl._view[0] = tlValue.x;
    this._tl._view[1] = tlValue.y;
};
_p._getTR = function () {
    return this._tr;
};
_p._setTR = function (trValue) {
    this._tr._view[0] = trValue.x;
    this._tr._view[1] = trValue.y;
};
_p._getBL = function() {
    return this._bl;
};
_p._setBL = function (blValue) {
    this._bl._view[0] = blValue.x;
    this._bl._view[1] = blValue.y;
};
_p._getBR = function () {
    return this._br;
};
_p._setBR = function (brValue) {
    this._br._view[0] = brValue.x;
    this._br._view[1] = brValue.y;
};
_p.tl;
cc.defineGetterSetter(_p, "tl", _p._getTL, _p._setTL);
_p.tr;
cc.defineGetterSetter(_p, "tr", _p._getTR, _p._setTR);
_p.bl;
cc.defineGetterSetter(_p, "bl", _p._getBL, _p._setBL);
_p.br;
cc.defineGetterSetter(_p, "br", _p._getBR, _p._setBR);
cc.Quad3 = function (bl, br, tl, tr, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.Quad3.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.Vertex3F.BYTES_PER_ELEMENT;
    this.bl = bl ? new cc.Vertex3F(bl.x, bl.y, bl.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this.br = br ? new cc.Vertex3F(br.x, br.y, br.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this.tl = tl ? new cc.Vertex3F(tl.x, tl.y, tl.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this.tr = tr ? new cc.Vertex3F(tr.x, tr.y, tr.z, locArrayBuffer, locOffset) : new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
};
cc.Quad3.BYTES_PER_ELEMENT = 48;
cc.V3F_C4B_T2F = function (vertices, colors, texCoords, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V3F_C4B_T2F.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
    this._vertices = vertices ? new cc.Vertex3F(vertices.x, vertices.y, vertices.z, locArrayBuffer, locOffset) :
        new cc.Vertex3F(0, 0, 0, locArrayBuffer, locOffset);
    locOffset += cc.Vertex3F.BYTES_PER_ELEMENT;
    this._colors = colors ? new cc.Color(colors.r, colors.g, colors.b, colors.a, locArrayBuffer, locOffset) :
        new cc.Color(0, 0, 0, 0, locArrayBuffer, locOffset);
    locOffset += cc.Color.BYTES_PER_ELEMENT;
    this._texCoords = texCoords ? new cc.Tex2F(texCoords.u, texCoords.v, locArrayBuffer, locOffset) :
        new cc.Tex2F(0, 0, locArrayBuffer, locOffset);
};
cc.V3F_C4B_T2F.BYTES_PER_ELEMENT = 24;
_p = cc.V3F_C4B_T2F.prototype;
_p._getVertices = function () {
    return this._vertices;
};
_p._setVertices = function (verticesValue) {
    var locVertices = this._vertices;
    locVertices._view[0] = verticesValue.x;
    locVertices._view[1] = verticesValue.y;
    locVertices._view[2] = verticesValue.z;
};
_p._getColor = function () {
    return this._colors;
};
_p._setColor = function (colorValue) {
    var locColors = this._colors;
    locColors._view[0] = colorValue.r;
    locColors._view[1] = colorValue.g;
    locColors._view[2] = colorValue.b;
    locColors._view[3] = colorValue.a;
};
_p._getTexCoords = function () {
    return this._texCoords;
};
_p._setTexCoords = function (texValue) {
    this._texCoords._view[0] = texValue.u;
    this._texCoords._view[1] = texValue.v;
};
_p.vertices;
cc.defineGetterSetter(_p, "vertices", _p._getVertices, _p._setVertices);
_p.colors;
cc.defineGetterSetter(_p, "colors", _p._getColor, _p._setColor);
_p.texCoords;
cc.defineGetterSetter(_p, "texCoords", _p._getTexCoords, _p._setTexCoords);
cc.V3F_C4B_T2F_Quad = function (tl, bl, tr, br, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.V3F_C4B_T2F.BYTES_PER_ELEMENT;
    this._tl = tl ? new cc.V3F_C4B_T2F(tl.vertices, tl.colors, tl.texCoords, locArrayBuffer, locOffset) :
        new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this._bl = bl ? new cc.V3F_C4B_T2F(bl.vertices, bl.colors, bl.texCoords, locArrayBuffer, locOffset) :
        new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this._tr = tr ? new cc.V3F_C4B_T2F(tr.vertices, tr.colors, tr.texCoords, locArrayBuffer, locOffset) :
        new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this._br = br ? new cc.V3F_C4B_T2F(br.vertices, br.colors, br.texCoords, locArrayBuffer, locOffset) :
        new cc.V3F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
};
cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT = 96;
_p = cc.V3F_C4B_T2F_Quad.prototype;
_p._getTL = function () {
    return this._tl;
};
_p._setTL = function (tlValue) {
    var locTl = this._tl;
    locTl.vertices = tlValue.vertices;
    locTl.colors = tlValue.colors;
    locTl.texCoords = tlValue.texCoords;
};
_p._getBL = function () {
    return this._bl;
};
_p._setBL = function (blValue) {
    var locBl = this._bl;
    locBl.vertices = blValue.vertices;
    locBl.colors = blValue.colors;
    locBl.texCoords = blValue.texCoords;
};
_p._getTR = function () {
    return this._tr;
};
_p._setTR = function (trValue) {
    var locTr = this._tr;
    locTr.vertices = trValue.vertices;
    locTr.colors = trValue.colors;
    locTr.texCoords = trValue.texCoords;
};
_p._getBR = function () {
    return this._br;
};
_p._setBR = function (brValue) {
    var locBr = this._br;
    locBr.vertices = brValue.vertices;
    locBr.colors = brValue.colors;
    locBr.texCoords = brValue.texCoords;
};
_p._getArrayBuffer = function () {
    return this._arrayBuffer;
};
_p.tl;
cc.defineGetterSetter(_p, "tl", _p._getTL, _p._setTL);
_p.tr;
cc.defineGetterSetter(_p, "tr", _p._getTR, _p._setTR);
_p.bl;
cc.defineGetterSetter(_p, "bl", _p._getBL, _p._setBL);
_p.br;
cc.defineGetterSetter(_p, "br", _p._getBR, _p._setBR);
_p.arrayBuffer;
cc.defineGetterSetter(_p, "arrayBuffer", _p._getArrayBuffer, null);
cc.V3F_C4B_T2F_QuadZero = function () {
    return new cc.V3F_C4B_T2F_Quad();
};
cc.V3F_C4B_T2F_QuadCopy = function (sourceQuad) {
    if (!sourceQuad)
        return  cc.V3F_C4B_T2F_QuadZero();
    var srcTL = sourceQuad.tl, srcBL = sourceQuad.bl, srcTR = sourceQuad.tr, srcBR = sourceQuad.br;
    return {
        tl: {vertices: {x: srcTL.vertices.x, y: srcTL.vertices.y, z: srcTL.vertices.z},
            colors: {r: srcTL.colors.r, g: srcTL.colors.g, b: srcTL.colors.b, a: srcTL.colors.a},
            texCoords: {u: srcTL.texCoords.u, v: srcTL.texCoords.v}},
        bl: {vertices: {x: srcBL.vertices.x, y: srcBL.vertices.y, z: srcBL.vertices.z},
            colors: {r: srcBL.colors.r, g: srcBL.colors.g, b: srcBL.colors.b, a: srcBL.colors.a},
            texCoords: {u: srcBL.texCoords.u, v: srcBL.texCoords.v}},
        tr: {vertices: {x: srcTR.vertices.x, y: srcTR.vertices.y, z: srcTR.vertices.z},
            colors: {r: srcTR.colors.r, g: srcTR.colors.g, b: srcTR.colors.b, a: srcTR.colors.a},
            texCoords: {u: srcTR.texCoords.u, v: srcTR.texCoords.v}},
        br: {vertices: {x: srcBR.vertices.x, y: srcBR.vertices.y, z: srcBR.vertices.z},
            colors: {r: srcBR.colors.r, g: srcBR.colors.g, b: srcBR.colors.b, a: srcBR.colors.a},
            texCoords: {u: srcBR.texCoords.u, v: srcBR.texCoords.v}}
    };
};
cc.V3F_C4B_T2F_QuadsCopy = function (sourceQuads) {
    if (!sourceQuads)
        return [];
    var retArr = [];
    for (var i = 0; i < sourceQuads.length; i++) {
        retArr.push(cc.V3F_C4B_T2F_QuadCopy(sourceQuads[i]));
    }
    return retArr;
};
cc.V2F_C4B_T2F = function (vertices, colors, texCoords, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V2F_C4B_T2F.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    var locArrayBuffer = this._arrayBuffer, locOffset = this._offset;
    this._vertices = vertices ? new cc.Vertex2F(vertices.x, vertices.y, locArrayBuffer, locOffset) :
        new cc.Vertex2F(0, 0, locArrayBuffer, locOffset);
    locOffset += cc.Vertex2F.BYTES_PER_ELEMENT;
    this._colors = colors ? cc.color(colors.r, colors.g, colors.b, colors.a, locArrayBuffer, locOffset) :
        cc.color(0, 0, 0, 0, locArrayBuffer, locOffset);
    locOffset += cc.Color.BYTES_PER_ELEMENT;
    this._texCoords = texCoords ? new cc.Tex2F(texCoords.u, texCoords.v, locArrayBuffer, locOffset) :
        new cc.Tex2F(0, 0, locArrayBuffer, locOffset);
};
cc.V2F_C4B_T2F.BYTES_PER_ELEMENT = 20;
_p = cc.V2F_C4B_T2F.prototype;
_p._getVertices = function () {
    return this._vertices;
};
_p._setVertices = function (verticesValue) {
    this._vertices._view[0] = verticesValue.x;
    this._vertices._view[1] = verticesValue.y;
};
_p._getColor = function () {
    return this._colors;
};
_p._setColor = function (colorValue) {
    var locColors = this._colors;
    locColors._view[0] = colorValue.r;
    locColors._view[1] = colorValue.g;
    locColors._view[2] = colorValue.b;
    locColors._view[3] = colorValue.a;
};
_p._getTexCoords = function () {
    return this._texCoords;
};
_p._setTexCoords = function (texValue) {
    this._texCoords._view[0] = texValue.u;
    this._texCoords._view[1] = texValue.v;
};
_p.vertices;
cc.defineGetterSetter(_p, "vertices", _p._getVertices, _p._setVertices);
_p.colors;
cc.defineGetterSetter(_p, "colors", _p._getColor, _p._setColor);
_p.texCoords;
cc.defineGetterSetter(_p, "texCoords", _p._getTexCoords, _p._setTexCoords);
cc.V2F_C4B_T2F_Triangle = function (a, b, c, arrayBuffer, offset) {
    this._arrayBuffer = arrayBuffer || new ArrayBuffer(cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT);
    this._offset = offset || 0;
    var locArrayBuffer = this._arrayBuffer, locOffset = this._offset, locElementLen = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
    this._a = a ? new cc.V2F_C4B_T2F(a.vertices, a.colors, a.texCoords, locArrayBuffer, locOffset) :
        new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this._b = b ? new cc.V2F_C4B_T2F(b.vertices, b.colors, b.texCoords, locArrayBuffer, locOffset) :
        new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
    locOffset += locElementLen;
    this._c = c ? new cc.V2F_C4B_T2F(c.vertices, c.colors, c.texCoords, locArrayBuffer, locOffset) :
        new cc.V2F_C4B_T2F(null, null, null, locArrayBuffer, locOffset);
};
cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT = 60;
_p = cc.V2F_C4B_T2F_Triangle.prototype;
_p._getA = function () {
    return this._a;
};
_p._setA = function (aValue) {
    var locA = this._a;
    locA.vertices = aValue.vertices;
    locA.colors = aValue.colors;
    locA.texCoords = aValue.texCoords;
};
_p._getB = function () {
    return this._b;
};
_p._setB = function (bValue) {
    var locB = this._b;
    locB.vertices = bValue.vertices;
    locB.colors = bValue.colors;
    locB.texCoords = bValue.texCoords;
};
_p._getC = function () {
    return this._c;
};
_p._setC = function (cValue) {
    var locC = this._c;
    locC.vertices = cValue.vertices;
    locC.colors = cValue.colors;
    locC.texCoords = cValue.texCoords;
};
_p.a;
cc.defineGetterSetter(_p, "a", _p._getA, _p._setA);
_p.b;
cc.defineGetterSetter(_p, "b", _p._getB, _p._setB);
_p.c;
cc.defineGetterSetter(_p, "c", _p._getC, _p._setC);
cc.vertex2 = function (x, y) {
    return new cc.Vertex2F(x, y);
};
cc.vertex3 = function (x, y, z) {
    return new cc.Vertex3F(x, y, z);
};
cc.tex2 = function (u, v) {
    return new cc.Tex2F(u, v);
};
cc.BlendFunc = function (src1, dst1) {
    this.src = src1;
    this.dst = dst1;
};
cc.blendFuncDisable = function () {
    return new cc.BlendFunc(cc.ONE, cc.ZERO);
};
cc.hexToColor = function (hex) {
    hex = hex.replace(/^#?/, "0x");
    var c = parseInt(hex);
    var r = c >> 16;
    var g = (c >> 8) % 256;
    var b = c % 256;
    return cc.color(r, g, b);
};
cc.colorToHex = function (color) {
    var hR = color.r.toString(16), hG = color.g.toString(16), hB = color.b.toString(16);
    return "#" + (color.r < 16 ? ("0" + hR) : hR) + (color.g < 16 ? ("0" + hG) : hG) + (color.b < 16 ? ("0" + hB) : hB);
};
cc.TEXT_ALIGNMENT_LEFT = 0;
cc.TEXT_ALIGNMENT_CENTER = 1;
cc.TEXT_ALIGNMENT_RIGHT = 2;
cc.VERTICAL_TEXT_ALIGNMENT_TOP = 0;
cc.VERTICAL_TEXT_ALIGNMENT_CENTER = 1;
cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2;
cc._Dictionary = cc.Class.extend({
    _keyMapTb: null,
    _valueMapTb: null,
    __currId: 0,
    ctor: function () {
        this._keyMapTb = {};
        this._valueMapTb = {};
        this.__currId = 2 << (0 | (Math.random() * 10));
    },
    __getKey: function () {
        this.__currId++;
        return "key_" + this.__currId;
    },
    setObject: function (value, key) {
        if (key == null)
            return;
        var keyId = this.__getKey();
        this._keyMapTb[keyId] = key;
        this._valueMapTb[keyId] = value;
    },
    objectForKey: function (key) {
        if (key == null)
            return null;
        var locKeyMapTb = this._keyMapTb;
        for (var keyId in locKeyMapTb) {
            if (locKeyMapTb[keyId] === key)
                return this._valueMapTb[keyId];
        }
        return null;
    },
    valueForKey: function (key) {
        return this.objectForKey(key);
    },
    removeObjectForKey: function (key) {
        if (key == null)
            return;
        var locKeyMapTb = this._keyMapTb;
        for (var keyId in locKeyMapTb) {
            if (locKeyMapTb[keyId] === key) {
                delete this._valueMapTb[keyId];
                delete locKeyMapTb[keyId];
                return;
            }
        }
    },
    removeObjectsForKeys: function (keys) {
        if (keys == null)
            return;
        for (var i = 0; i < keys.length; i++)
            this.removeObjectForKey(keys[i]);
    },
    allKeys: function () {
        var keyArr = [], locKeyMapTb = this._keyMapTb;
        for (var key in locKeyMapTb)
            keyArr.push(locKeyMapTb[key]);
        return keyArr;
    },
    removeAllObjects: function () {
        this._keyMapTb = {};
        this._valueMapTb = {};
    },
    count: function () {
        return this.allKeys().length;
    }
});
cc.FontDefinition = function (properties) {
    var _t = this;
    _t.fontName = "Arial";
    _t.fontSize = 12;
    _t.textAlign = cc.TEXT_ALIGNMENT_CENTER;
    _t.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
    _t.fillStyle = cc.color(255, 255, 255, 255);
    _t.boundingWidth = 0;
    _t.boundingHeight = 0;
    _t.strokeEnabled = false;
    _t.strokeStyle = cc.color(255, 255, 255, 255);
    _t.lineWidth = 1;
    _t.lineHeight = "normal";
    _t.fontStyle = "normal";
    _t.fontWeight = "normal";
    _t.shadowEnabled = false;
    _t.shadowOffsetX = 0;
    _t.shadowOffsetY = 0;
    _t.shadowBlur = 0;
    _t.shadowOpacity = 1.0;
    if(properties && properties instanceof Object){
         for(var key in properties){
             _t[key] = properties[key];
         }
    }
};
cc.FontDefinition.prototype._getCanvasFontStr = function(){
    var lineHeight = !this.lineHeight.charAt ? this.lineHeight+"px" : this.lineHeight;
    return this.fontStyle + " " + this.fontWeight + " " + this.fontSize + "px/"+lineHeight+" '" + this.fontName + "'";
};
cc.game.addEventListener(cc.game.EVENT_RENDERER_INITED, function () {
    if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
        cc.assert(cc.isFunction(cc._tmp.PrototypeColor), cc._LogInfos.MissingFile, "CCTypesPropertyDefine.js");
        cc._tmp.PrototypeColor();
        delete cc._tmp.PrototypeColor;
    }
});
cc.Touches = [];
cc.TouchesIntergerDict = {};
cc.DENSITYDPI_DEVICE = "device-dpi";
cc.DENSITYDPI_HIGH = "high-dpi";
cc.DENSITYDPI_MEDIUM = "medium-dpi";
cc.DENSITYDPI_LOW = "low-dpi";
var __BrowserGetter = {
    init: function(){
        this.html = document.getElementsByTagName("html")[0];
    },
    availWidth: function(frame){
        if(!frame || frame === this.html)
            return window.innerWidth;
        else
            return frame.clientWidth;
    },
    availHeight: function(frame){
        if(!frame || frame === this.html)
            return window.innerHeight;
        else
            return frame.clientHeight;
    },
    meta: {
        "width": "device-width"
    },
    adaptationType: cc.sys.browserType
};
if(window.navigator.userAgent.indexOf("OS 8_1_") > -1)
    __BrowserGetter.adaptationType = cc.sys.BROWSER_TYPE_MIUI;
if(cc.sys.os === cc.sys.OS_IOS)
    __BrowserGetter.adaptationType = cc.sys.BROWSER_TYPE_SAFARI;
switch(__BrowserGetter.adaptationType){
    case cc.sys.BROWSER_TYPE_SAFARI:
        __BrowserGetter.meta["minimal-ui"] = "true";
        __BrowserGetter.availWidth = function(frame){
            return frame.clientWidth;
        };
        __BrowserGetter.availHeight = function(frame){
            return frame.clientHeight;
        };
        break;
    case cc.sys.BROWSER_TYPE_CHROME:
        __BrowserGetter.__defineGetter__("target-densitydpi", function(){
            return cc.view._targetDensityDPI;
        });
    case cc.sys.BROWSER_TYPE_SOUGOU:
    case cc.sys.BROWSER_TYPE_UC:
        __BrowserGetter.availWidth = function(frame){
            return frame.clientWidth;
        };
        __BrowserGetter.availHeight = function(frame){
            return frame.clientHeight;
        };
        break;
    case cc.sys.BROWSER_TYPE_MIUI:
        __BrowserGetter.init = function(view){
            if(view.__resizeWithBrowserSize) return;
            var resize = function(){
                view.setDesignResolutionSize(
                    view._designResolutionSize.width,
                    view._designResolutionSize.height,
                    view._resolutionPolicy
                );
                window.removeEventListener("resize", resize, false);
            };
            window.addEventListener("resize", resize, false);
        };
        break;
}
var _scissorRect = cc.rect();
cc.EGLView = cc.Class.extend({
    _delegate: null,
    _frameSize: null,
    _designResolutionSize: null,
    _originalDesignResolutionSize: null,
    _viewPortRect: null,
    _visibleRect: null,
    _retinaEnabled: false,
    _autoFullScreen: false,
    _devicePixelRatio: 1,
    _viewName: "",
    _resizeCallback: null,
    _scaleX: 1,
    _originalScaleX: 1,
    _scaleY: 1,
    _originalScaleY: 1,
    _isRotated: false,
    _orientation: 3,
    _resolutionPolicy: null,
    _rpExactFit: null,
    _rpShowAll: null,
    _rpNoBorder: null,
    _rpFixedHeight: null,
    _rpFixedWidth: null,
    _initialized: false,
    _contentTranslateLeftTop: null,
    _frame: null,
    _frameZoomFactor: 1.0,
    __resizeWithBrowserSize: false,
    _isAdjustViewPort: true,
    _targetDensityDPI: null,
    ctor: function () {
        var _t = this, d = document, _strategyer = cc.ContainerStrategy, _strategy = cc.ContentStrategy;
        __BrowserGetter.init(this);
        _t._frame = (cc.container.parentNode === d.body) ? d.documentElement : cc.container.parentNode;
        _t._frameSize = cc.size(0, 0);
        _t._initFrameSize();
        var w = cc._canvas.width, h = cc._canvas.height;
        _t._designResolutionSize = cc.size(w, h);
        _t._originalDesignResolutionSize = cc.size(w, h);
        _t._viewPortRect = cc.rect(0, 0, w, h);
        _t._visibleRect = cc.rect(0, 0, w, h);
        _t._contentTranslateLeftTop = {left: 0, top: 0};
        _t._viewName = "Cocos2dHTML5";
        var sys = cc.sys;
        _t.enableRetina(sys.os === sys.OS_IOS || sys.os === sys.OS_OSX);
        _t.enableAutoFullScreen(sys.isMobile && sys.browserType !== sys.BROWSER_TYPE_BAIDU);
        cc.visibleRect && cc.visibleRect.init(_t._visibleRect);
        _t._rpExactFit = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.EXACT_FIT);
        _t._rpShowAll = new cc.ResolutionPolicy(_strategyer.PROPORTION_TO_FRAME, _strategy.SHOW_ALL);
        _t._rpNoBorder = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.NO_BORDER);
        _t._rpFixedHeight = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_HEIGHT);
        _t._rpFixedWidth = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_WIDTH);
        _t._targetDensityDPI = cc.DENSITYDPI_HIGH;
    },
    _resizeEvent: function () {
        var view;
        if (this.setDesignResolutionSize) {
            view = this;
        } else {
            view = cc.view;
        }
        var prevFrameW = view._frameSize.width, prevFrameH = view._frameSize.height, prevRotated = view._isRotated;
        view._initFrameSize();
        if (view._isRotated === prevRotated && view._frameSize.width === prevFrameW && view._frameSize.height === prevFrameH)
            return;
        if (view._resizeCallback) {
            view._resizeCallback.call();
        }
        var width = view._originalDesignResolutionSize.width;
        var height = view._originalDesignResolutionSize.height;
        if (width > 0) {
            view.setDesignResolutionSize(width, height, view._resolutionPolicy);
        }
    },
    setTargetDensityDPI: function(densityDPI){
        this._targetDensityDPI = densityDPI;
        this._adjustViewportMeta();
    },
    getTargetDensityDPI: function(){
        return this._targetDensityDPI;
    },
    resizeWithBrowserSize: function (enabled) {
        if (enabled) {
            if (!this.__resizeWithBrowserSize) {
                this.__resizeWithBrowserSize = true;
                window.addEventListener('resize', this._resizeEvent);
                window.addEventListener('orientationchange', this._resizeEvent);
            }
        } else {
            if (this.__resizeWithBrowserSize) {
                this.__resizeWithBrowserSize = false;
                window.removeEventListener('resize', this._resizeEvent);
                window.removeEventListener('orientationchange', this._resizeEvent);
            }
        }
    },
    setResizeCallback: function (callback) {
        if (cc.isFunction(callback) || callback == null) {
            this._resizeCallback = callback;
        }
    },
    setOrientation: function (orientation) {
        orientation = orientation & cc.ORIENTATION_AUTO;
        if (orientation) {
            this._orientation = orientation;
        }
    },
    _initFrameSize: function () {
        var locFrameSize = this._frameSize;
        var w = __BrowserGetter.availWidth(this._frame);
        var h = __BrowserGetter.availHeight(this._frame);
        var isLandscape = w >= h;
        if (!cc.sys.isMobile ||
            (isLandscape && this._orientation & cc.ORIENTATION_LANDSCAPE) ||
            (!isLandscape && this._orientation & cc.ORIENTATION_PORTRAIT)) {
            locFrameSize.width = w;
            locFrameSize.height = h;
            cc.container.style['-webkit-transform'] = 'rotate(0deg)';
            cc.container.style.transform = 'rotate(0deg)';
            this._isRotated = false;
        }
        else {
            locFrameSize.width = h;
            locFrameSize.height = w;
            cc.container.style['-webkit-transform'] = 'rotate(90deg)';
            cc.container.style.transform = 'rotate(90deg)';
            cc.container.style['-webkit-transform-origin'] = '0px 0px 0px';
            cc.container.style.transformOrigin = '0px 0px 0px';
            this._isRotated = true;
        }
    },
    _adjustSizeKeepCanvasSize: function () {
        var designWidth = this._originalDesignResolutionSize.width;
        var designHeight = this._originalDesignResolutionSize.height;
        if (designWidth > 0)
            this.setDesignResolutionSize(designWidth, designHeight, this._resolutionPolicy);
    },
    _setViewportMeta: function (metas, overwrite) {
        var vp = document.getElementById("cocosMetaElement");
        if(vp && overwrite){
            document.head.removeChild(vp);
        }
        var elems = document.getElementsByName("viewport"),
            currentVP = elems ? elems[0] : null,
            content, key, pattern;
        content = currentVP ? currentVP.content : "";
        vp = vp || document.createElement("meta");
        vp.id = "cocosMetaElement";
        vp.name = "viewport";
        vp.content = "";
        for (key in metas) {
            if (content.indexOf(key) == -1) {
                content += "," + key + "=" + metas[key];
            }
            else if (overwrite) {
                pattern = new RegExp(key+"\s*=\s*[^,]+");
                content.replace(pattern, key + "=" + metas[key]);
            }
        }
        if(/^,/.test(content))
            content = content.substr(1);
        vp.content = content;
        if (currentVP)
            currentVP.content = content;
        document.head.appendChild(vp);
    },
    _adjustViewportMeta: function () {
        if (this._isAdjustViewPort) {
            this._setViewportMeta(__BrowserGetter.meta, false);
            this._isAdjustViewPort = false;
        }
    },
    _setScaleXYForRenderTexture: function () {
        var scaleFactor = cc.contentScaleFactor();
        this._scaleX = scaleFactor;
        this._scaleY = scaleFactor;
    },
    _resetScale: function () {
        this._scaleX = this._originalScaleX;
        this._scaleY = this._originalScaleY;
    },
    _adjustSizeToBrowser: function () {
    },
    initialize: function () {
        this._initialized = true;
    },
    adjustViewPort: function (enabled) {
        this._isAdjustViewPort = enabled;
    },
    enableRetina: function(enabled) {
        this._retinaEnabled = enabled ? true : false;
    },
    isRetinaEnabled: function() {
        return this._retinaEnabled;
    },
    enableAutoFullScreen: function(enabled) {
        if (enabled && enabled !== this._autoFullScreen && cc.sys.isMobile && this._frame === document.documentElement) {
            this._autoFullScreen = true;
            cc.screen.autoFullScreen(this._frame);
        }
        else {
            this._autoFullScreen = false;
        }
    },
    isAutoFullScreenEnabled: function() {
        return this._autoFullScreen;
    },
    end: function () {
    },
    isOpenGLReady: function () {
        return (cc.game.canvas && cc._renderContext);
    },
    setFrameZoomFactor: function (zoomFactor) {
        this._frameZoomFactor = zoomFactor;
        this.centerWindow();
        cc.director.setProjection(cc.director.getProjection());
    },
    swapBuffers: function () {
    },
    setIMEKeyboardState: function (isOpen) {
    },
    setContentTranslateLeftTop: function (offsetLeft, offsetTop) {
        this._contentTranslateLeftTop = {left: offsetLeft, top: offsetTop};
    },
    getContentTranslateLeftTop: function () {
        return this._contentTranslateLeftTop;
    },
    getCanvasSize: function () {
        return cc.size(cc._canvas.width, cc._canvas.height);
    },
    getFrameSize: function () {
        return cc.size(this._frameSize.width, this._frameSize.height);
    },
    setFrameSize: function (width, height) {
        this._frameSize.width = width;
        this._frameSize.height = height;
        this._frame.style.width = width + "px";
        this._frame.style.height = height + "px";
        this._resizeEvent();
        cc.director.setProjection(cc.director.getProjection());
    },
    centerWindow: function () {
    },
    getVisibleSize: function () {
        return cc.size(this._visibleRect.width,this._visibleRect.height);
    },
    getVisibleSizeInPixel: function () {
        return cc.size( this._visibleRect.width * this._scaleX,
                        this._visibleRect.height * this._scaleY );
    },
    getVisibleOrigin: function () {
        return cc.p(this._visibleRect.x,this._visibleRect.y);
    },
    getVisibleOriginInPixel: function () {
        return cc.p(this._visibleRect.x * this._scaleX,
                    this._visibleRect.y * this._scaleY);
    },
    canSetContentScaleFactor: function () {
        return true;
    },
    getResolutionPolicy: function () {
        return this._resolutionPolicy;
    },
    setResolutionPolicy: function (resolutionPolicy) {
        var _t = this;
        if (resolutionPolicy instanceof cc.ResolutionPolicy) {
            _t._resolutionPolicy = resolutionPolicy;
        }
        else {
            var _locPolicy = cc.ResolutionPolicy;
            if(resolutionPolicy === _locPolicy.EXACT_FIT)
                _t._resolutionPolicy = _t._rpExactFit;
            if(resolutionPolicy === _locPolicy.SHOW_ALL)
                _t._resolutionPolicy = _t._rpShowAll;
            if(resolutionPolicy === _locPolicy.NO_BORDER)
                _t._resolutionPolicy = _t._rpNoBorder;
            if(resolutionPolicy === _locPolicy.FIXED_HEIGHT)
                _t._resolutionPolicy = _t._rpFixedHeight;
            if(resolutionPolicy === _locPolicy.FIXED_WIDTH)
                _t._resolutionPolicy = _t._rpFixedWidth;
        }
    },
    setDesignResolutionSize: function (width, height, resolutionPolicy) {
        if( !(width > 0 || height > 0) ){
            cc.log(cc._LogInfos.EGLView_setDesignResolutionSize);
            return;
        }
        this.setResolutionPolicy(resolutionPolicy);
        var policy = this._resolutionPolicy;
        if (!policy){
            cc.log(cc._LogInfos.EGLView_setDesignResolutionSize_2);
            return;
        }
        policy.preApply(this);
        if(cc.sys.isMobile)
            this._adjustViewportMeta();
        this._initFrameSize();
        this._originalDesignResolutionSize.width = this._designResolutionSize.width = width;
        this._originalDesignResolutionSize.height = this._designResolutionSize.height = height;
        var result = policy.apply(this, this._designResolutionSize);
        if(result.scale && result.scale.length === 2){
            this._scaleX = result.scale[0];
            this._scaleY = result.scale[1];
        }
        if(result.viewport){
            var vp = this._viewPortRect,
                vb = this._visibleRect,
                rv = result.viewport;
            vp.x = rv.x;
            vp.y = rv.y;
            vp.width = rv.width;
            vp.height = rv.height;
            vb.x = -vp.x / this._scaleX;
            vb.y = -vp.y / this._scaleY;
            vb.width = cc._canvas.width / this._scaleX;
            vb.height = cc._canvas.height / this._scaleY;
            cc._renderContext.setOffset && cc._renderContext.setOffset(vp.x, -vp.y);
        }
        var director = cc.director;
        director._winSizeInPoints.width = this._designResolutionSize.width;
        director._winSizeInPoints.height = this._designResolutionSize.height;
        policy.postApply(this);
        cc.winSize.width = director._winSizeInPoints.width;
        cc.winSize.height = director._winSizeInPoints.height;
        if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
            director.setGLDefaultValues();
        }
        this._originalScaleX = this._scaleX;
        this._originalScaleY = this._scaleY;
        if (cc.DOM)
            cc.DOM._resetEGLViewDiv();
        cc.visibleRect && cc.visibleRect.init(this._visibleRect);
    },
    getDesignResolutionSize: function () {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height);
    },
    setRealPixelResolution: function (width, height, resolutionPolicy) {
        this._setViewportMeta({"width": width, "target-densitydpi": cc.DENSITYDPI_DEVICE}, true);
        document.body.style.width = width + "px";
        document.body.style.left = "0px";
        document.body.style.top = "0px";
        this.setDesignResolutionSize(width, height, resolutionPolicy);
    },
    setViewPortInPoints: function (x, y, w, h) {
        var locFrameZoomFactor = this._frameZoomFactor, locScaleX = this._scaleX, locScaleY = this._scaleY;
        cc._renderContext.viewport((x * locScaleX * locFrameZoomFactor + this._viewPortRect.x * locFrameZoomFactor),
            (y * locScaleY * locFrameZoomFactor + this._viewPortRect.y * locFrameZoomFactor),
            (w * locScaleX * locFrameZoomFactor),
            (h * locScaleY * locFrameZoomFactor));
    },
    setScissorInPoints: function (x, y, w, h) {
        var zoomFactor = this._frameZoomFactor, scaleX = this._scaleX, scaleY = this._scaleY;
        _scissorRect.x = x;
        _scissorRect.y = y;
        _scissorRect.width = w;
        _scissorRect.height = h;
        cc._renderContext.scissor(x * scaleX * zoomFactor + this._viewPortRect.x * zoomFactor,
                                  y * scaleY * zoomFactor + this._viewPortRect.y * zoomFactor,
                                  w * scaleX * zoomFactor,
                                  h * scaleY * zoomFactor);
    },
    isScissorEnabled: function () {
        return cc._renderContext.isEnabled(gl.SCISSOR_TEST);
    },
    getScissorRect: function () {
        return cc.rect(_scissorRect);
    },
    setViewName: function (viewName) {
        if (viewName != null && viewName.length > 0) {
            this._viewName = viewName;
        }
    },
    getViewName: function () {
        return this._viewName;
    },
    getViewPortRect: function () {
        return this._viewPortRect;
    },
    getScaleX: function () {
        return this._scaleX;
    },
    getScaleY: function () {
        return this._scaleY;
    },
    getDevicePixelRatio: function() {
        return this._devicePixelRatio;
    },
    convertToLocationInView: function (tx, ty, relatedPos) {
        var x = this._devicePixelRatio * (tx - relatedPos.left);
        var y = this._devicePixelRatio * (relatedPos.top + relatedPos.height - ty);
        return this._isRotated ? {x: this._viewPortRect.width - y, y: x} : {x: x, y: y};
    },
    _convertMouseToLocationInView: function(point, relatedPos) {
        var locViewPortRect = this._viewPortRect, _t = this;
        point.x = ((_t._devicePixelRatio * (point.x - relatedPos.left)) - locViewPortRect.x) / _t._scaleX;
        point.y = (_t._devicePixelRatio * (relatedPos.top + relatedPos.height - point.y) - locViewPortRect.y) / _t._scaleY;
    },
    _convertPointWithScale: function (point) {
        var viewport = this._viewPortRect;
        point.x = (point.x - viewport.x) / this._scaleX;
        point.y = (point.y - viewport.y) / this._scaleY;
    },
    _convertTouchesWithScale: function (touches) {
        var viewport = this._viewPortRect, scaleX = this._scaleX, scaleY = this._scaleY,
            selTouch, selPoint, selPrePoint;
        for( var i = 0; i < touches.length; i++){
            selTouch = touches[i];
            selPoint = selTouch._point;
            selPrePoint = selTouch._prevPoint;
            selPoint.x = (selPoint.x - viewport.x) / scaleX;
            selPoint.y = (selPoint.y - viewport.y) / scaleY;
            selPrePoint.x = (selPrePoint.x - viewport.x) / scaleX;
            selPrePoint.y = (selPrePoint.y - viewport.y) / scaleY;
        }
    }
});
cc.EGLView._getInstance = function () {
    if (!this._instance) {
        this._instance = this._instance || new cc.EGLView();
        this._instance.initialize();
    }
    return this._instance;
};
cc.ContainerStrategy = cc.Class.extend({
    preApply: function (view) {
    },
    apply: function (view, designedResolution) {
    },
    postApply: function (view) {
    },
    _setupContainer: function (view, w, h) {
        var locCanvas = cc.game.canvas, locContainer = cc.game.container;
        locContainer.style.width = locCanvas.style.width = w + 'px';
        locContainer.style.height = locCanvas.style.height = h + 'px';
        var devicePixelRatio = view._devicePixelRatio = 1;
        if (view.isRetinaEnabled())
            devicePixelRatio = view._devicePixelRatio = Math.min(2, window.devicePixelRatio || 1);
        locCanvas.width = w * devicePixelRatio;
        locCanvas.height = h * devicePixelRatio;
        cc._renderContext.resetCache && cc._renderContext.resetCache();
    },
    _fixContainer: function () {
        document.body.insertBefore(cc.container, document.body.firstChild);
        var bs = document.body.style;
        bs.width = window.innerWidth + "px";
        bs.height = window.innerHeight + "px";
        bs.overflow = "hidden";
        var contStyle = cc.container.style;
        contStyle.position = "fixed";
        contStyle.left = contStyle.top = "0px";
        document.body.scrollTop = 0;
    }
});
cc.ContentStrategy = cc.Class.extend({
    _result: {
        scale: [1, 1],
        viewport: null
    },
    _buildResult: function (containerW, containerH, contentW, contentH, scaleX, scaleY) {
        Math.abs(containerW - contentW) < 2 && (contentW = containerW);
        Math.abs(containerH - contentH) < 2 && (contentH = containerH);
        var viewport = cc.rect(Math.round((containerW - contentW) / 2),
                               Math.round((containerH - contentH) / 2),
                               contentW, contentH);
        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS){
        }
        this._result.scale = [scaleX, scaleY];
        this._result.viewport = viewport;
        return this._result;
    },
    preApply: function (view) {
    },
    apply: function (view, designedResolution) {
        return {"scale": [1, 1]};
    },
    postApply: function (view) {
    }
});
(function () {
    var EqualToFrame = cc.ContainerStrategy.extend({
        apply: function (view) {
            var frameH = view._frameSize.height, containerStyle = cc.container.style;
            this._setupContainer(view, view._frameSize.width, view._frameSize.height);
            if (view._isRotated) {
                containerStyle.marginLeft = frameH + 'px';
            }
            else {
                containerStyle.margin = '0px';
            }
        }
    });
    var ProportionalToFrame = cc.ContainerStrategy.extend({
        apply: function (view, designedResolution) {
            var frameW = view._frameSize.width, frameH = view._frameSize.height, containerStyle = cc.container.style,
                designW = designedResolution.width, designH = designedResolution.height,
                scaleX = frameW / designW, scaleY = frameH / designH,
                containerW, containerH;
            scaleX < scaleY ? (containerW = frameW, containerH = designH * scaleX) : (containerW = designW * scaleY, containerH = frameH);
            var offx = Math.round((frameW - containerW) / 2);
            var offy = Math.round((frameH - containerH) / 2);
            containerW = frameW - 2 * offx;
            containerH = frameH - 2 * offy;
            this._setupContainer(view, containerW, containerH);
            if (view._isRotated) {
                containerStyle.marginLeft = frameH + 'px';
            }
            else {
                containerStyle.margin = '0px';
            }
            containerStyle.paddingLeft = offx + "px";
            containerStyle.paddingRight = offx + "px";
            containerStyle.paddingTop = offy + "px";
            containerStyle.paddingBottom = offy + "px";
        }
    });
    var EqualToWindow = EqualToFrame.extend({
        preApply: function (view) {
            this._super(view);
            view._frame = document.documentElement;
        },
        apply: function (view) {
            this._super(view);
            this._fixContainer();
        }
    });
    var ProportionalToWindow = ProportionalToFrame.extend({
        preApply: function (view) {
            this._super(view);
            view._frame = document.documentElement;
        },
        apply: function (view, designedResolution) {
            this._super(view, designedResolution);
            this._fixContainer();
        }
    });
    var OriginalContainer = cc.ContainerStrategy.extend({
        apply: function (view) {
            this._setupContainer(view, cc._canvas.width, cc._canvas.height);
        }
    });
    cc.ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame();
    cc.ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame();
    cc.ContainerStrategy.ORIGINAL_CONTAINER = new OriginalContainer();
    var ExactFit = cc.ContentStrategy.extend({
        apply: function (view, designedResolution) {
            var containerW = cc._canvas.width, containerH = cc._canvas.height,
                scaleX = containerW / designedResolution.width, scaleY = containerH / designedResolution.height;
            return this._buildResult(containerW, containerH, containerW, containerH, scaleX, scaleY);
        }
    });
    var ShowAll = cc.ContentStrategy.extend({
        apply: function (view, designedResolution) {
            var containerW = cc._canvas.width, containerH = cc._canvas.height,
                designW = designedResolution.width, designH = designedResolution.height,
                scaleX = containerW / designW, scaleY = containerH / designH, scale = 0,
                contentW, contentH;
            scaleX < scaleY ? (scale = scaleX, contentW = containerW, contentH = designH * scale)
                : (scale = scaleY, contentW = designW * scale, contentH = containerH);
            return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
        }
    });
    var NoBorder = cc.ContentStrategy.extend({
        apply: function (view, designedResolution) {
            var containerW = cc._canvas.width, containerH = cc._canvas.height,
                designW = designedResolution.width, designH = designedResolution.height,
                scaleX = containerW / designW, scaleY = containerH / designH, scale,
                contentW, contentH;
            scaleX < scaleY ? (scale = scaleY, contentW = designW * scale, contentH = containerH)
                : (scale = scaleX, contentW = containerW, contentH = designH * scale);
            return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
        }
    });
    var FixedHeight = cc.ContentStrategy.extend({
        apply: function (view, designedResolution) {
            var containerW = cc._canvas.width, containerH = cc._canvas.height,
                designH = designedResolution.height, scale = containerH / designH,
                contentW = containerW, contentH = containerH;
            return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
        },
        postApply: function (view) {
            cc.director._winSizeInPoints = view.getVisibleSize();
        }
    });
    var FixedWidth = cc.ContentStrategy.extend({
        apply: function (view, designedResolution) {
            var containerW = cc._canvas.width, containerH = cc._canvas.height,
                designW = designedResolution.width, scale = containerW / designW,
                contentW = containerW, contentH = containerH;
            return this._buildResult(containerW, containerH, contentW, contentH, scale, scale);
        },
        postApply: function (view) {
            cc.director._winSizeInPoints = view.getVisibleSize();
        }
    });
    cc.ContentStrategy.EXACT_FIT = new ExactFit();
    cc.ContentStrategy.SHOW_ALL = new ShowAll();
    cc.ContentStrategy.NO_BORDER = new NoBorder();
    cc.ContentStrategy.FIXED_HEIGHT = new FixedHeight();
    cc.ContentStrategy.FIXED_WIDTH = new FixedWidth();
})();
cc.ResolutionPolicy = cc.Class.extend({
    _containerStrategy: null,
    _contentStrategy: null,
    ctor: function (containerStg, contentStg) {
        this.setContainerStrategy(containerStg);
        this.setContentStrategy(contentStg);
    },
    preApply: function (view) {
        this._containerStrategy.preApply(view);
        this._contentStrategy.preApply(view);
    },
    apply: function (view, designedResolution) {
        this._containerStrategy.apply(view, designedResolution);
        return this._contentStrategy.apply(view, designedResolution);
    },
    postApply: function (view) {
        this._containerStrategy.postApply(view);
        this._contentStrategy.postApply(view);
    },
    setContainerStrategy: function (containerStg) {
        if (containerStg instanceof cc.ContainerStrategy)
            this._containerStrategy = containerStg;
    },
    setContentStrategy: function (contentStg) {
        if (contentStg instanceof cc.ContentStrategy)
            this._contentStrategy = contentStg;
    }
});
cc.ResolutionPolicy.EXACT_FIT = 0;
cc.ResolutionPolicy.NO_BORDER = 1;
cc.ResolutionPolicy.SHOW_ALL = 2;
cc.ResolutionPolicy.FIXED_HEIGHT = 3;
cc.ResolutionPolicy.FIXED_WIDTH = 4;
cc.ResolutionPolicy.UNKNOWN = 5;
cc.screen = {
    _supportsFullScreen: false,
    _preOnFullScreenChange: null,
    _touchEvent: "",
    _fn: null,
    _fnMap: [
        [
            'requestFullscreen',
            'exitFullscreen',
            'fullscreenchange',
            'fullscreenEnabled',
            'fullscreenElement'
        ],
        [
            'requestFullScreen',
            'exitFullScreen',
            'fullScreenchange',
            'fullScreenEnabled',
            'fullScreenElement'
        ],
        [
            'webkitRequestFullScreen',
            'webkitCancelFullScreen',
            'webkitfullscreenchange',
            'webkitIsFullScreen',
            'webkitCurrentFullScreenElement'
        ],
        [
            'mozRequestFullScreen',
            'mozCancelFullScreen',
            'mozfullscreenchange',
            'mozFullScreen',
            'mozFullScreenElement'
        ],
        [
            'msRequestFullscreen',
            'msExitFullscreen',
            'MSFullscreenChange',
            'msFullscreenEnabled',
            'msFullscreenElement'
        ]
    ],
    init: function () {
        this._fn = {};
        var i, val, map = this._fnMap, valL;
        for (i = 0, l = map.length; i < l; i++) {
            val = map[i];
            if (val && val[1] in document) {
                for (i = 0, valL = val.length; i < valL; i++) {
                    this._fn[map[0][i]] = val[i];
                }
                break;
            }
        }
        this._supportsFullScreen = (typeof this._fn.requestFullscreen !== 'undefined');
        this._touchEvent = ('ontouchstart' in window) ? 'touchstart' : 'mousedown';
    },
    fullScreen: function () {
        if(!this._supportsFullScreen)   return false;
        else if( document[this._fn.fullscreenElement] === undefined || document[this._fn.fullscreenElement] === null )
            return false;
        else
            return true;
    },
    requestFullScreen: function (element, onFullScreenChange) {
        if (!this._supportsFullScreen) {
            return;
        }
        element = element || document.documentElement;
        if (onFullScreenChange) {
            var eventName = this._fn.fullscreenchange;
            if (this._preOnFullScreenChange) {
                document.removeEventListener(eventName, this._preOnFullScreenChange);
            }
            this._preOnFullScreenChange = onFullScreenChange;
            document.addEventListener(eventName, onFullScreenChange, false);
        }
        return element[this._fn.requestFullscreen]();
    },
    exitFullScreen: function () {
        return this._supportsFullScreen ? document[this._fn.exitFullscreen]() : true;
    },
    autoFullScreen: function (element, onFullScreenChange) {
        element = element || document.body;
        var touchTarget = cc.game.canvas || element;
        var theScreen = this;
        function callback() {
            touchTarget.removeEventListener(theScreen._touchEvent, callback);
            theScreen.requestFullScreen(element, onFullScreenChange);
        }
        this.requestFullScreen(element, onFullScreenChange);
        touchTarget.addEventListener(this._touchEvent, callback);
    }
};
cc.screen.init();
cc.visibleRect = {
    topLeft:cc.p(0,0),
    topRight:cc.p(0,0),
    top:cc.p(0,0),
    bottomLeft:cc.p(0,0),
    bottomRight:cc.p(0,0),
    bottom:cc.p(0,0),
    center:cc.p(0,0),
    left:cc.p(0,0),
    right:cc.p(0,0),
    width:0,
    height:0,
    init:function(visibleRect){
        var w = this.width = visibleRect.width;
        var h = this.height = visibleRect.height;
        var l = visibleRect.x,
            b = visibleRect.y,
            t = b + h,
            r = l + w;
        this.topLeft.x = l;
        this.topLeft.y = t;
        this.topRight.x = r;
        this.topRight.y = t;
        this.top.x = l + w/2;
        this.top.y = t;
        this.bottomLeft.x = l;
        this.bottomLeft.y = b;
        this.bottomRight.x = r;
        this.bottomRight.y = b;
        this.bottom.x = l + w/2;
        this.bottom.y = b;
        this.center.x = l + w/2;
        this.center.y = b + h/2;
        this.left.x = l;
        this.left.y = b + h/2;
        this.right.x = r;
        this.right.y = b + h/2;
    }
};
cc.UIInterfaceOrientationLandscapeLeft = -90;
cc.UIInterfaceOrientationLandscapeRight = 90;
cc.UIInterfaceOrientationPortraitUpsideDown = 180;
cc.UIInterfaceOrientationPortrait = 0;
cc.inputManager = {
    _mousePressed: false,
    _isRegisterEvent: false,
    _preTouchPoint: cc.p(0,0),
    _prevMousePoint: cc.p(0,0),
    _preTouchPool: [],
    _preTouchPoolPointer: 0,
    _touches: [],
    _touchesIntegerDict:{},
    _indexBitsUsed: 0,
    _maxTouches: 5,
    _accelEnabled: false,
    _accelInterval: 1/30,
    _accelMinus: 1,
    _accelCurTime: 0,
    _acceleration: null,
    _accelDeviceEvent: null,
    _getUnUsedIndex: function () {
        var temp = this._indexBitsUsed;
        for (var i = 0; i < this._maxTouches; i++) {
            if (!(temp & 0x00000001)) {
                this._indexBitsUsed |= (1 << i);
                return i;
            }
            temp >>= 1;
        }
        return -1;
    },
    _removeUsedIndexBit: function (index) {
        if (index < 0 || index >= this._maxTouches)
            return;
        var temp = 1 << index;
        temp = ~temp;
        this._indexBitsUsed &= temp;
    },
    _glView: null,
    handleTouchesBegin: function (touches) {
        var selTouch, index, curTouch, touchID, handleTouches = [], locTouchIntDict = this._touchesIntegerDict;
        for(var i = 0, len = touches.length; i< len; i ++){
            selTouch = touches[i];
            touchID = selTouch.getID();
            index = locTouchIntDict[touchID];
            if(index == null){
                var unusedIndex = this._getUnUsedIndex();
                if (unusedIndex === -1) {
                    cc.log(cc._LogInfos.inputManager_handleTouchesBegin, unusedIndex);
                    continue;
                }
                curTouch = this._touches[unusedIndex] = new cc.Touch(selTouch._point.x, selTouch._point.y, selTouch.getID());
                curTouch._setPrevPoint(selTouch._prevPoint);
                locTouchIntDict[touchID] = unusedIndex;
                handleTouches.push(curTouch);
            }
        }
        if(handleTouches.length > 0){
            this._glView._convertTouchesWithScale(handleTouches);
            var touchEvent = new cc.EventTouch(handleTouches);
            touchEvent._eventCode = cc.EventTouch.EventCode.BEGAN;
            cc.eventManager.dispatchEvent(touchEvent);
        }
    },
    handleTouchesMove: function(touches){
        var selTouch, index, touchID, handleTouches = [], locTouches = this._touches;
        for(var i = 0, len = touches.length; i< len; i ++){
            selTouch = touches[i];
            touchID = selTouch.getID();
            index = this._touchesIntegerDict[touchID];
            if(index == null){
                continue;
            }
            if(locTouches[index]){
                locTouches[index]._setPoint(selTouch._point);
                locTouches[index]._setPrevPoint(selTouch._prevPoint);
                handleTouches.push(locTouches[index]);
            }
        }
        if(handleTouches.length > 0){
            this._glView._convertTouchesWithScale(handleTouches);
            var touchEvent = new cc.EventTouch(handleTouches);
            touchEvent._eventCode = cc.EventTouch.EventCode.MOVED;
            cc.eventManager.dispatchEvent(touchEvent);
        }
    },
    handleTouchesEnd: function(touches){
        var handleTouches = this.getSetOfTouchesEndOrCancel(touches);
        if(handleTouches.length > 0) {
            this._glView._convertTouchesWithScale(handleTouches);
            var touchEvent = new cc.EventTouch(handleTouches);
            touchEvent._eventCode = cc.EventTouch.EventCode.ENDED;
            cc.eventManager.dispatchEvent(touchEvent);
        }
    },
    handleTouchesCancel: function(touches){
        var handleTouches = this.getSetOfTouchesEndOrCancel(touches);
        if(handleTouches.length > 0) {
            this._glView._convertTouchesWithScale(handleTouches);
            var touchEvent = new cc.EventTouch(handleTouches);
            touchEvent._eventCode = cc.EventTouch.EventCode.CANCELLED;
            cc.eventManager.dispatchEvent(touchEvent);
        }
    },
    getSetOfTouchesEndOrCancel: function(touches) {
        var selTouch, index, touchID, handleTouches = [], locTouches = this._touches, locTouchesIntDict = this._touchesIntegerDict;
        for(var i = 0, len = touches.length; i< len; i ++){
            selTouch = touches[i];
            touchID = selTouch.getID();
            index = locTouchesIntDict[touchID];
            if(index == null){
                continue;
            }
            if(locTouches[index]){
                locTouches[index]._setPoint(selTouch._point);
                locTouches[index]._setPrevPoint(selTouch._prevPoint);
                handleTouches.push(locTouches[index]);
                this._removeUsedIndexBit(index);
                delete locTouchesIntDict[touchID];
            }
        }
        return handleTouches;
    },
    getHTMLElementPosition: function (element) {
        var docElem = document.documentElement;
        var win = window;
        var box = null;
        if (cc.isFunction(element.getBoundingClientRect)) {
            box = element.getBoundingClientRect();
        } else {
            box = {
                left: 0,
                top: 0,
                width: parseInt(element.style.width),
                height: parseInt(element.style.height)
            };
        }
        return {
            left: box.left + win.pageXOffset - docElem.clientLeft,
            top: box.top + win.pageYOffset - docElem.clientTop,
            width: box.width,
            height: box.height
        };
    },
    getPreTouch: function(touch){
        var preTouch = null;
        var locPreTouchPool = this._preTouchPool;
        var id = touch.getID();
        for (var i = locPreTouchPool.length - 1; i >= 0; i--) {
            if (locPreTouchPool[i].getID() === id) {
                preTouch = locPreTouchPool[i];
                break;
            }
        }
        if (!preTouch)
            preTouch = touch;
        return preTouch;
    },
    setPreTouch: function(touch){
        var find = false;
        var locPreTouchPool = this._preTouchPool;
        var id = touch.getID();
        for (var i = locPreTouchPool.length - 1; i >= 0; i--) {
            if (locPreTouchPool[i].getID() === id) {
                locPreTouchPool[i] = touch;
                find = true;
                break;
            }
        }
        if (!find) {
            if (locPreTouchPool.length <= 50) {
                locPreTouchPool.push(touch);
            } else {
                locPreTouchPool[this._preTouchPoolPointer] = touch;
                this._preTouchPoolPointer = (this._preTouchPoolPointer + 1) % 50;
            }
        }
    },
    getTouchByXY: function(tx, ty, pos){
        var locPreTouch = this._preTouchPoint;
        var location = this._glView.convertToLocationInView(tx, ty, pos);
        var touch = new cc.Touch(location.x,  location.y);
        touch._setPrevPoint(locPreTouch.x, locPreTouch.y);
        locPreTouch.x = location.x;
        locPreTouch.y = location.y;
        return touch;
    },
    getMouseEvent: function(location, pos, eventType){
        var locPreMouse = this._prevMousePoint;
        this._glView._convertMouseToLocationInView(location, pos);
        var mouseEvent = new cc.EventMouse(eventType);
        mouseEvent.setLocation(location.x, location.y);
        mouseEvent._setPrevCursor(locPreMouse.x, locPreMouse.y);
        locPreMouse.x = location.x;
        locPreMouse.y = location.y;
        return mouseEvent;
    },
    getPointByEvent: function(event, pos){
        if (event.pageX != null)
            return {x: event.pageX, y: event.pageY};
        pos.left -= document.body.scrollLeft;
        pos.top -= document.body.scrollTop;
        return {x: event.clientX, y: event.clientY};
    },
    getTouchesByEvent: function(event, pos){
        var touchArr = [], locView = this._glView;
        var touch_event, touch, preLocation;
        var locPreTouch = this._preTouchPoint;
        var length = event.changedTouches.length;
        for (var i = 0; i < length; i++) {
            touch_event = event.changedTouches[i];
            if (touch_event) {
                var location;
                if (cc.sys.BROWSER_TYPE_FIREFOX === cc.sys.browserType)
                    location = locView.convertToLocationInView(touch_event.pageX, touch_event.pageY, pos);
                else
                    location = locView.convertToLocationInView(touch_event.clientX, touch_event.clientY, pos);
                if (touch_event.identifier != null) {
                    touch = new cc.Touch(location.x, location.y, touch_event.identifier);
                    preLocation = this.getPreTouch(touch).getLocation();
                    touch._setPrevPoint(preLocation.x, preLocation.y);
                    this.setPreTouch(touch);
                } else {
                    touch = new cc.Touch(location.x, location.y);
                    touch._setPrevPoint(locPreTouch.x, locPreTouch.y);
                }
                locPreTouch.x = location.x;
                locPreTouch.y = location.y;
                touchArr.push(touch);
            }
        }
        return touchArr;
    },
    registerSystemEvent: function(element){
        if(this._isRegisterEvent) return;
        var locView = this._glView = cc.view;
        var selfPointer = this;
        var supportMouse = ('mouse' in cc.sys.capabilities), supportTouches = ('touches' in cc.sys.capabilities);
        var prohibition = false;
        if( cc.sys.isMobile)
            prohibition = true;
        if (supportMouse) {
            window.addEventListener('mousedown', function () {
                selfPointer._mousePressed = true;
            }, false);
            window.addEventListener('mouseup', function (event) {
                if(prohibition) return;
                var savePressed = selfPointer._mousePressed;
                selfPointer._mousePressed = false;
                if(!savePressed)
                    return;
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                if (!cc.rectContainsPoint(new cc.Rect(pos.left, pos.top, pos.width, pos.height), location)){
                    selfPointer.handleTouchesEnd([selfPointer.getTouchByXY(location.x, location.y, pos)]);
                    var mouseEvent = selfPointer.getMouseEvent(location,pos,cc.EventMouse.UP);
                    mouseEvent.setButton(event.button);
                    cc.eventManager.dispatchEvent(mouseEvent);
                }
            }, false);
            element.addEventListener("mousedown", function (event) {
                if(prohibition) return;
                selfPointer._mousePressed = true;
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                selfPointer.handleTouchesBegin([selfPointer.getTouchByXY(location.x, location.y, pos)]);
                var mouseEvent = selfPointer.getMouseEvent(location,pos,cc.EventMouse.DOWN);
                mouseEvent.setButton(event.button);
                cc.eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
                element.focus();
            }, false);
            element.addEventListener("mouseup", function (event) {
                if(prohibition) return;
                selfPointer._mousePressed = false;
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                selfPointer.handleTouchesEnd([selfPointer.getTouchByXY(location.x, location.y, pos)]);
                var mouseEvent = selfPointer.getMouseEvent(location,pos,cc.EventMouse.UP);
                mouseEvent.setButton(event.button);
                cc.eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
            }, false);
            element.addEventListener("mousemove", function (event) {
                if(prohibition) return;
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                selfPointer.handleTouchesMove([selfPointer.getTouchByXY(location.x, location.y, pos)]);
                var mouseEvent = selfPointer.getMouseEvent(location,pos,cc.EventMouse.MOVE);
                if(selfPointer._mousePressed)
                    mouseEvent.setButton(event.button);
                else
                    mouseEvent.setButton(null);
                cc.eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
            }, false);
            element.addEventListener("mousewheel", function (event) {
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                var mouseEvent = selfPointer.getMouseEvent(location,pos,cc.EventMouse.SCROLL);
                mouseEvent.setButton(event.button);
                mouseEvent.setScrollData(0, event.wheelDelta);
                cc.eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
            }, false);
            element.addEventListener("DOMMouseScroll", function(event) {
                var pos = selfPointer.getHTMLElementPosition(element);
                var location = selfPointer.getPointByEvent(event, pos);
                var mouseEvent = selfPointer.getMouseEvent(location,pos,cc.EventMouse.SCROLL);
                mouseEvent.setButton(event.button);
                mouseEvent.setScrollData(0, event.detail * -120);
                cc.eventManager.dispatchEvent(mouseEvent);
                event.stopPropagation();
                event.preventDefault();
            }, false);
        }
        if(window.navigator.msPointerEnabled){
            var _pointerEventsMap = {
                "MSPointerDown"     : selfPointer.handleTouchesBegin,
                "MSPointerMove"     : selfPointer.handleTouchesMove,
                "MSPointerUp"       : selfPointer.handleTouchesEnd,
                "MSPointerCancel"   : selfPointer.handleTouchesCancel
            };
            for(var eventName in _pointerEventsMap){
                (function(_pointerEvent, _touchEvent){
                    element.addEventListener(_pointerEvent, function (event){
                        var pos = selfPointer.getHTMLElementPosition(element);
                        pos.left -= document.documentElement.scrollLeft;
                        pos.top -= document.documentElement.scrollTop;
                        _touchEvent.call(selfPointer, [selfPointer.getTouchByXY(event.clientX, event.clientY, pos)]);
                        event.stopPropagation();
                    }, false);
                })(eventName, _pointerEventsMap[eventName]);
            }
        }
        if(supportTouches) {
            element.addEventListener("touchstart", function (event) {
                if (!event.changedTouches) return;
                var pos = selfPointer.getHTMLElementPosition(element);
                pos.left -= document.body.scrollLeft;
                pos.top -= document.body.scrollTop;
                selfPointer.handleTouchesBegin(selfPointer.getTouchesByEvent(event, pos));
                event.stopPropagation();
                event.preventDefault();
                element.focus();
            }, false);
            element.addEventListener("touchmove", function (event) {
                if (!event.changedTouches) return;
                var pos = selfPointer.getHTMLElementPosition(element);
                pos.left -= document.body.scrollLeft;
                pos.top -= document.body.scrollTop;
                selfPointer.handleTouchesMove(selfPointer.getTouchesByEvent(event, pos));
                event.stopPropagation();
                event.preventDefault();
            }, false);
            element.addEventListener("touchend", function (event) {
                if (!event.changedTouches) return;
                var pos = selfPointer.getHTMLElementPosition(element);
                pos.left -= document.body.scrollLeft;
                pos.top -= document.body.scrollTop;
                selfPointer.handleTouchesEnd(selfPointer.getTouchesByEvent(event, pos));
                event.stopPropagation();
                event.preventDefault();
            }, false);
            element.addEventListener("touchcancel", function (event) {
                if (!event.changedTouches) return;
                var pos = selfPointer.getHTMLElementPosition(element);
                pos.left -= document.body.scrollLeft;
                pos.top -= document.body.scrollTop;
                selfPointer.handleTouchesCancel(selfPointer.getTouchesByEvent(event, pos));
                event.stopPropagation();
                event.preventDefault();
            }, false);
        }
        this._registerKeyboardEvent();
        this._registerAccelerometerEvent();
        this._isRegisterEvent = true;
    },
    _registerKeyboardEvent: function(){},
    _registerAccelerometerEvent: function(){},
    update:function(dt){
        if(this._accelCurTime > this._accelInterval){
            this._accelCurTime -= this._accelInterval;
            cc.eventManager.dispatchEvent(new cc.EventAcceleration(this._acceleration));
        }
        this._accelCurTime += dt;
    }
};
cc.AffineTransform = function (a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
};
cc.affineTransformMake = function (a, b, c, d, tx, ty) {
    return {a: a, b: b, c: c, d: d, tx: tx, ty: ty};
};
cc.pointApplyAffineTransform = function (point, transOrY, t) {
    var x, y;
    if (t === undefined) {
        t = transOrY;
        x = point.x;
        y = point.y;
    } else {
        x = point;
        y = transOrY;
    }
    return {x: t.a * x + t.c * y + t.tx, y: t.b * x + t.d * y + t.ty};
};
cc._pointApplyAffineTransform = function (x, y, t) {
    return cc.pointApplyAffineTransform(x, y, t);
};
cc.sizeApplyAffineTransform = function (size, t) {
    return {width: t.a * size.width + t.c * size.height, height: t.b * size.width + t.d * size.height};
};
cc.affineTransformMakeIdentity = function () {
    return {a: 1.0, b: 0.0, c: 0.0, d: 1.0, tx: 0.0, ty: 0.0};
};
cc.affineTransformIdentity = function () {
    return {a: 1.0, b: 0.0, c: 0.0, d: 1.0, tx: 0.0, ty: 0.0};
};
cc.rectApplyAffineTransform = function (rect, anAffineTransform) {
    var top = cc.rectGetMinY(rect);
    var left = cc.rectGetMinX(rect);
    var right = cc.rectGetMaxX(rect);
    var bottom = cc.rectGetMaxY(rect);
    var topLeft = cc.pointApplyAffineTransform(left, top, anAffineTransform);
    var topRight = cc.pointApplyAffineTransform(right, top, anAffineTransform);
    var bottomLeft = cc.pointApplyAffineTransform(left, bottom, anAffineTransform);
    var bottomRight = cc.pointApplyAffineTransform(right, bottom, anAffineTransform);
    var minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    return cc.rect(minX, minY, (maxX - minX), (maxY - minY));
};
cc._rectApplyAffineTransformIn = function(rect, anAffineTransform){
    var top = cc.rectGetMinY(rect);
    var left = cc.rectGetMinX(rect);
    var right = cc.rectGetMaxX(rect);
    var bottom = cc.rectGetMaxY(rect);
    var topLeft = cc.pointApplyAffineTransform(left, top, anAffineTransform);
    var topRight = cc.pointApplyAffineTransform(right, top, anAffineTransform);
    var bottomLeft = cc.pointApplyAffineTransform(left, bottom, anAffineTransform);
    var bottomRight = cc.pointApplyAffineTransform(right, bottom, anAffineTransform);
    var minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    rect.x = minX;
    rect.y = minY;
    rect.width = maxX - minX;
    rect.height = maxY - minY;
    return rect;
};
cc.affineTransformTranslate = function (t, tx, ty) {
    return {
        a: t.a,
        b: t.b,
        c: t.c,
        d: t.d,
        tx: t.tx + t.a * tx + t.c * ty,
        ty: t.ty + t.b * tx + t.d * ty
    };
};
cc.affineTransformScale = function (t, sx, sy) {
    return {a: t.a * sx, b: t.b * sx, c: t.c * sy, d: t.d * sy, tx: t.tx, ty: t.ty};
};
cc.affineTransformRotate = function (aTransform, anAngle) {
    var fSin = Math.sin(anAngle);
    var fCos = Math.cos(anAngle);
    return {a: aTransform.a * fCos + aTransform.c * fSin,
        b: aTransform.b * fCos + aTransform.d * fSin,
        c: aTransform.c * fCos - aTransform.a * fSin,
        d: aTransform.d * fCos - aTransform.b * fSin,
        tx: aTransform.tx,
        ty: aTransform.ty};
};
cc.affineTransformConcat = function (t1, t2) {
    return {a: t1.a * t2.a + t1.b * t2.c,
        b: t1.a * t2.b + t1.b * t2.d,
        c: t1.c * t2.a + t1.d * t2.c,
        d: t1.c * t2.b + t1.d * t2.d,
        tx: t1.tx * t2.a + t1.ty * t2.c + t2.tx,
        ty: t1.tx * t2.b + t1.ty * t2.d + t2.ty};
};
cc.affineTransformConcatIn = function (t1, t2) {
    var a = t1.a, b = t1.b, c = t1.c, d = t1.d, tx = t1.tx, ty = t1.ty;
    t1.a = a * t2.a + b * t2.c;
    t1.b = a * t2.b + b * t2.d;
    t1.c = c * t2.a + d * t2.c;
    t1.d = c * t2.b + d * t2.d;
    t1.tx = tx * t2.a + ty * t2.c + t2.tx;
    t1.ty = tx * t2.b + ty * t2.d + t2.ty;
    return t1;
};
cc.affineTransformEqualToTransform = function (t1, t2) {
    return ((t1.a === t2.a) && (t1.b === t2.b) && (t1.c === t2.c) && (t1.d === t2.d) && (t1.tx === t2.tx) && (t1.ty === t2.ty));
};
cc.affineTransformInvert = function (t) {
    var determinant = 1 / (t.a * t.d - t.b * t.c);
    return {a: determinant * t.d, b: -determinant * t.b, c: -determinant * t.c, d: determinant * t.a,
        tx: determinant * (t.c * t.ty - t.d * t.tx), ty: determinant * (t.b * t.tx - t.a * t.ty)};
};
cc.POINT_EPSILON = parseFloat('1.192092896e-07F');
cc.pNeg = function (point) {
    return cc.p(-point.x, -point.y);
};
cc.pAdd = function (v1, v2) {
    return cc.p(v1.x + v2.x, v1.y + v2.y);
};
cc.pSub = function (v1, v2) {
    return cc.p(v1.x - v2.x, v1.y - v2.y);
};
cc.pMult = function (point, floatVar) {
    return cc.p(point.x * floatVar, point.y * floatVar);
};
cc.pMidpoint = function (v1, v2) {
    return cc.pMult(cc.pAdd(v1, v2), 0.5);
};
cc.pDot = function (v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
};
cc.pCross = function (v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
};
cc.pPerp = function (point) {
    return cc.p(-point.y, point.x);
};
cc.pRPerp = function (point) {
    return cc.p(point.y, -point.x);
};
cc.pProject = function (v1, v2) {
    return cc.pMult(v2, cc.pDot(v1, v2) / cc.pDot(v2, v2));
};
cc.pRotate = function (v1, v2) {
    return cc.p(v1.x * v2.x - v1.y * v2.y, v1.x * v2.y + v1.y * v2.x);
};
cc.pUnrotate = function (v1, v2) {
    return cc.p(v1.x * v2.x + v1.y * v2.y, v1.y * v2.x - v1.x * v2.y);
};
cc.pLengthSQ = function (v) {
    return cc.pDot(v, v);
};
cc.pDistanceSQ = function(point1, point2){
    return cc.pLengthSQ(cc.pSub(point1,point2));
};
cc.pLength = function (v) {
    return Math.sqrt(cc.pLengthSQ(v));
};
cc.pDistance = function (v1, v2) {
    return cc.pLength(cc.pSub(v1, v2));
};
cc.pNormalize = function (v) {
    var n = cc.pLength(v);
    return n === 0 ? cc.p(v) : cc.pMult(v, 1.0 / n);
};
cc.pForAngle = function (a) {
    return cc.p(Math.cos(a), Math.sin(a));
};
cc.pToAngle = function (v) {
    return Math.atan2(v.y, v.x);
};
cc.clampf = function (value, min_inclusive, max_inclusive) {
    if (min_inclusive > max_inclusive) {
        var temp = min_inclusive;
        min_inclusive = max_inclusive;
        max_inclusive = temp;
    }
    return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
};
cc.pClamp = function (p, min_inclusive, max_inclusive) {
    return cc.p(cc.clampf(p.x, min_inclusive.x, max_inclusive.x), cc.clampf(p.y, min_inclusive.y, max_inclusive.y));
};
cc.pFromSize = function (s) {
    return cc.p(s.width, s.height);
};
cc.pCompOp = function (p, opFunc) {
    return cc.p(opFunc(p.x), opFunc(p.y));
};
cc.pLerp = function (a, b, alpha) {
    return cc.pAdd(cc.pMult(a, 1 - alpha), cc.pMult(b, alpha));
};
cc.pFuzzyEqual = function (a, b, variance) {
    if (a.x - variance <= b.x && b.x <= a.x + variance) {
        if (a.y - variance <= b.y && b.y <= a.y + variance)
            return true;
    }
    return false;
};
cc.pCompMult = function (a, b) {
    return cc.p(a.x * b.x, a.y * b.y);
};
cc.pAngleSigned = function (a, b) {
    var a2 = cc.pNormalize(a);
    var b2 = cc.pNormalize(b);
    var angle = Math.atan2(a2.x * b2.y - a2.y * b2.x, cc.pDot(a2, b2));
    if (Math.abs(angle) < cc.POINT_EPSILON)
        return 0.0;
    return angle;
};
cc.pAngle = function (a, b) {
    var angle = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
    if (Math.abs(angle) < cc.POINT_EPSILON) return 0.0;
    return angle;
};
cc.pRotateByAngle = function (v, pivot, angle) {
    var r = cc.pSub(v, pivot);
    var cosa = Math.cos(angle), sina = Math.sin(angle);
    var t = r.x;
    r.x = t * cosa - r.y * sina + pivot.x;
    r.y = t * sina + r.y * cosa + pivot.y;
    return r;
};
cc.pLineIntersect = function (A, B, C, D, retP) {
    if ((A.x === B.x && A.y === B.y) || (C.x === D.x && C.y === D.y)) {
        return false;
    }
    var BAx = B.x - A.x;
    var BAy = B.y - A.y;
    var DCx = D.x - C.x;
    var DCy = D.y - C.y;
    var ACx = A.x - C.x;
    var ACy = A.y - C.y;
    var denom = DCy * BAx - DCx * BAy;
    retP.x = DCx * ACy - DCy * ACx;
    retP.y = BAx * ACy - BAy * ACx;
    if (denom === 0) {
        if (retP.x === 0 || retP.y === 0) {
            return true;
        }
        return false;
    }
    retP.x = retP.x / denom;
    retP.y = retP.y / denom;
    return true;
};
cc.pSegmentIntersect = function (A, B, C, D) {
    var retP = cc.p(0, 0);
    if (cc.pLineIntersect(A, B, C, D, retP))
        if (retP.x >= 0.0 && retP.x <= 1.0 && retP.y >= 0.0 && retP.y <= 1.0)
            return true;
    return false;
};
cc.pIntersectPoint = function (A, B, C, D) {
    var retP = cc.p(0, 0);
    if (cc.pLineIntersect(A, B, C, D, retP)) {
        var P = cc.p(0, 0);
        P.x = A.x + retP.x * (B.x - A.x);
        P.y = A.y + retP.x * (B.y - A.y);
        return P;
    }
    return cc.p(0,0);
};
cc.pSameAs = function (A, B) {
    if ((A != null) && (B != null)) {
        return (A.x === B.x && A.y === B.y);
    }
    return false;
};
cc.pZeroIn = function(v) {
    v.x = 0;
    v.y = 0;
};
cc.pIn = function(v1, v2) {
    v1.x = v2.x;
    v1.y = v2.y;
};
cc.pMultIn = function(point, floatVar) {
    point.x *= floatVar;
    point.y *= floatVar;
};
cc.pSubIn = function(v1, v2) {
    v1.x -= v2.x;
    v1.y -= v2.y;
};
cc.pAddIn = function(v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y;
};
cc.pNormalizeIn = function(v) {
    cc.pMultIn(v, 1.0 / Math.sqrt(v.x * v.x + v.y * v.y));
};
cc.Touch = cc.Class.extend({
    _point:null,
    _prevPoint:null,
    _id:0,
    _startPointCaptured: false,
    _startPoint:null,
    ctor:function (x, y, id) {
        this.setTouchInfo(id, x, y);
    },
    getLocation:function () {
        return {x: this._point.x, y: this._point.y};
    },
	getLocationX: function () {
		return this._point.x;
	},
	getLocationY: function () {
		return this._point.y;
	},
    getPreviousLocation:function () {
        return {x: this._prevPoint.x, y: this._prevPoint.y};
    },
    getStartLocation: function() {
        return {x: this._startPoint.x, y: this._startPoint.y};
    },
    getDelta:function () {
        return cc.pSub(this._point, this._prevPoint);
    },
    getLocationInView: function() {
        return {x: this._point.x, y: this._point.y};
    },
    getPreviousLocationInView: function(){
        return {x: this._prevPoint.x, y: this._prevPoint.y};
    },
    getStartLocationInView: function(){
        return {x: this._startPoint.x, y: this._startPoint.y};
    },
    getID:function () {
        return this._id;
    },
    getId:function () {
        cc.log("getId is deprecated. Please use getID instead.");
        return this._id;
    },
    setTouchInfo:function (id, x, y) {
        this._prevPoint = this._point;
        this._point = cc.p(x || 0, y || 0);
        this._id = id;
        if (!this._startPointCaptured) {
            this._startPoint = cc.p(this._point);
            cc.view._convertPointWithScale(this._startPoint);
            this._startPointCaptured = true;
        }
    },
    _setPoint: function(x, y){
        if(y === undefined){
            this._point.x = x.x;
            this._point.y = x.y;
        }else{
            this._point.x = x;
            this._point.y = y;
        }
    },
    _setPrevPoint:function (x, y) {
        if(y === undefined)
            this._prevPoint = cc.p(x.x, x.y);
        else
            this._prevPoint = cc.p(x || 0, y || 0);
    }
});
cc.Event = cc.Class.extend({
    _type: 0,
    _isStopped: false,
    _currentTarget: null,
    _setCurrentTarget: function (target) {
        this._currentTarget = target;
    },
    ctor: function (type) {
        this._type = type;
    },
    getType: function () {
        return this._type;
    },
    stopPropagation: function () {
        this._isStopped = true;
    },
    isStopped: function () {
        return this._isStopped;
    },
    getCurrentTarget: function () {
        return this._currentTarget;
    }
});
cc.Event.TOUCH = 0;
cc.Event.KEYBOARD = 1;
cc.Event.ACCELERATION = 2;
cc.Event.MOUSE = 3;
cc.Event.FOCUS = 4;
cc.Event.CUSTOM = 6;
cc.EventCustom = cc.Event.extend({
    _eventName: null,
    _userData: null,
    ctor: function (eventName) {
        cc.Event.prototype.ctor.call(this, cc.Event.CUSTOM);
        this._eventName = eventName;
    },
    setUserData: function (data) {
        this._userData = data;
    },
    getUserData: function () {
        return this._userData;
    },
    getEventName: function () {
        return this._eventName;
    }
});
cc.EventMouse = cc.Event.extend({
    _eventType: 0,
    _button: 0,
    _x: 0,
    _y: 0,
    _prevX: 0,
    _prevY: 0,
    _scrollX: 0,
    _scrollY: 0,
    ctor: function (eventType) {
        cc.Event.prototype.ctor.call(this, cc.Event.MOUSE);
        this._eventType = eventType;
    },
    setScrollData: function (scrollX, scrollY) {
        this._scrollX = scrollX;
        this._scrollY = scrollY;
    },
    getScrollX: function () {
        return this._scrollX;
    },
    getScrollY: function () {
        return this._scrollY;
    },
    setLocation: function (x, y) {
        this._x = x;
        this._y = y;
    },
    getLocation: function () {
        return {x: this._x, y: this._y};
    },
	getLocationInView: function() {
		return {x: this._x, y: cc.view._designResolutionSize.height - this._y};
	},
    _setPrevCursor: function (x, y) {
        this._prevX = x;
        this._prevY = y;
    },
    getDelta: function () {
        return {x: this._x - this._prevX, y: this._y - this._prevY};
    },
    getDeltaX: function () {
        return this._x - this._prevX;
    },
    getDeltaY: function () {
        return this._y - this._prevY;
    },
    setButton: function (button) {
        this._button = button;
    },
    getButton: function () {
        return this._button;
    },
    getLocationX: function () {
        return this._x;
    },
    getLocationY: function () {
        return this._y;
    }
});
cc.EventMouse.NONE = 0;
cc.EventMouse.DOWN = 1;
cc.EventMouse.UP = 2;
cc.EventMouse.MOVE = 3;
cc.EventMouse.SCROLL = 4;
cc.EventMouse.BUTTON_LEFT = 0;
cc.EventMouse.BUTTON_RIGHT = 2;
cc.EventMouse.BUTTON_MIDDLE = 1;
cc.EventMouse.BUTTON_4 = 3;
cc.EventMouse.BUTTON_5 = 4;
cc.EventMouse.BUTTON_6 = 5;
cc.EventMouse.BUTTON_7 = 6;
cc.EventMouse.BUTTON_8 = 7;
cc.EventTouch = cc.Event.extend({
    _eventCode: 0,
    _touches: null,
    ctor: function (arr) {
        cc.Event.prototype.ctor.call(this, cc.Event.TOUCH);
        this._touches = arr || [];
    },
    getEventCode: function () {
        return this._eventCode;
    },
    getTouches: function () {
        return this._touches;
    },
    _setEventCode: function (eventCode) {
        this._eventCode = eventCode;
    },
    _setTouches: function (touches) {
        this._touches = touches;
    }
});
cc.EventTouch.MAX_TOUCHES = 5;
cc.EventTouch.EventCode = {BEGAN: 0, MOVED: 1, ENDED: 2, CANCELLED: 3};
cc.EventFocus = cc.Event.extend({
    _widgetGetFocus: null,
    _widgetLoseFocus: null,
    ctor: function(widgetLoseFocus, widgetGetFocus){
        cc.Event.prototype.ctor.call(this, cc.Event.FOCUS);
        this._widgetGetFocus = widgetGetFocus;
        this._widgetLoseFocus = widgetLoseFocus;
    }
});
cc.EventListener = cc.Class.extend({
    _onEvent: null,
    _type: 0,
    _listenerID: null,
    _registered: false,
    _fixedPriority: 0,
    _node: null,
    _paused: true,
    _isEnabled: true,
    ctor: function (type, listenerID, callback) {
        this._onEvent = callback;
        this._type = type || 0;
        this._listenerID = listenerID || "";
    },
    _setPaused: function (paused) {
        this._paused = paused;
    },
    _isPaused: function () {
        return this._paused;
    },
    _setRegistered: function (registered) {
        this._registered = registered;
    },
    _isRegistered: function () {
        return this._registered;
    },
    _getType: function () {
        return this._type;
    },
    _getListenerID: function () {
        return this._listenerID;
    },
    _setFixedPriority: function (fixedPriority) {
        this._fixedPriority = fixedPriority;
    },
    _getFixedPriority: function () {
        return this._fixedPriority;
    },
    _setSceneGraphPriority: function (node) {
        this._node = node;
    },
    _getSceneGraphPriority: function () {
        return this._node;
    },
    checkAvailable: function () {
        return this._onEvent !== null;
    },
    clone: function () {
        return null;
    },
    setEnabled: function(enabled){
        this._isEnabled = enabled;
    },
    isEnabled: function(){
        return this._isEnabled;
    },
    retain:function () {
    },
    release:function () {
    }
});
cc.EventListener.UNKNOWN = 0;
cc.EventListener.TOUCH_ONE_BY_ONE = 1;
cc.EventListener.TOUCH_ALL_AT_ONCE = 2;
cc.EventListener.KEYBOARD = 3;
cc.EventListener.MOUSE = 4;
cc.EventListener.ACCELERATION = 6;
cc.EventListener.FOCUS = 7;
cc.EventListener.CUSTOM = 8;
cc._EventListenerCustom = cc.EventListener.extend({
    _onCustomEvent: null,
    ctor: function (listenerId, callback) {
        this._onCustomEvent = callback;
        var selfPointer = this;
        var listener = function (event) {
            if (selfPointer._onCustomEvent !== null)
                selfPointer._onCustomEvent(event);
        };
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.CUSTOM, listenerId, listener);
    },
    checkAvailable: function () {
        return (cc.EventListener.prototype.checkAvailable.call(this) && this._onCustomEvent !== null);
    },
    clone: function () {
        return new cc._EventListenerCustom(this._listenerID, this._onCustomEvent);
    }
});
cc._EventListenerCustom.create = function (eventName, callback) {
    return new cc._EventListenerCustom(eventName, callback);
};
cc._EventListenerMouse = cc.EventListener.extend({
    onMouseDown: null,
    onMouseUp: null,
    onMouseMove: null,
    onMouseScroll: null,
    ctor: function () {
        var selfPointer = this;
        var listener = function (event) {
            var eventType = cc.EventMouse;
            switch (event._eventType) {
                case eventType.DOWN:
                    if (selfPointer.onMouseDown)
                        selfPointer.onMouseDown(event);
                    break;
                case eventType.UP:
                    if (selfPointer.onMouseUp)
                        selfPointer.onMouseUp(event);
                    break;
                case eventType.MOVE:
                    if (selfPointer.onMouseMove)
                        selfPointer.onMouseMove(event);
                    break;
                case eventType.SCROLL:
                    if (selfPointer.onMouseScroll)
                        selfPointer.onMouseScroll(event);
                    break;
                default:
                    break;
            }
        };
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.MOUSE, cc._EventListenerMouse.LISTENER_ID, listener);
    },
    clone: function () {
        var eventListener = new cc._EventListenerMouse();
        eventListener.onMouseDown = this.onMouseDown;
        eventListener.onMouseUp = this.onMouseUp;
        eventListener.onMouseMove = this.onMouseMove;
        eventListener.onMouseScroll = this.onMouseScroll;
        return eventListener;
    },
    checkAvailable: function () {
        return true;
    }
});
cc._EventListenerMouse.LISTENER_ID = "__cc_mouse";
cc._EventListenerMouse.create = function () {
    return new cc._EventListenerMouse();
};
cc._EventListenerTouchOneByOne = cc.EventListener.extend({
    _claimedTouches: null,
    swallowTouches: false,
    onTouchBegan: null,
    onTouchMoved: null,
    onTouchEnded: null,
    onTouchCancelled: null,
    ctor: function () {
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ONE_BY_ONE, cc._EventListenerTouchOneByOne.LISTENER_ID, null);
        this._claimedTouches = [];
    },
    setSwallowTouches: function (needSwallow) {
        this.swallowTouches = needSwallow;
    },
    isSwallowTouches: function(){
        return this.swallowTouches;
    },
    clone: function () {
        var eventListener = new cc._EventListenerTouchOneByOne();
        eventListener.onTouchBegan = this.onTouchBegan;
        eventListener.onTouchMoved = this.onTouchMoved;
        eventListener.onTouchEnded = this.onTouchEnded;
        eventListener.onTouchCancelled = this.onTouchCancelled;
        eventListener.swallowTouches = this.swallowTouches;
        return eventListener;
    },
    checkAvailable: function () {
        if(!this.onTouchBegan){
            cc.log(cc._LogInfos._EventListenerTouchOneByOne_checkAvailable);
            return false;
        }
        return true;
    }
});
cc._EventListenerTouchOneByOne.LISTENER_ID = "__cc_touch_one_by_one";
cc._EventListenerTouchOneByOne.create = function () {
    return new cc._EventListenerTouchOneByOne();
};
cc._EventListenerTouchAllAtOnce = cc.EventListener.extend({
    onTouchesBegan: null,
    onTouchesMoved: null,
    onTouchesEnded: null,
    onTouchesCancelled: null,
    ctor: function(){
       cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ALL_AT_ONCE, cc._EventListenerTouchAllAtOnce.LISTENER_ID, null);
    },
    clone: function(){
        var eventListener = new cc._EventListenerTouchAllAtOnce();
        eventListener.onTouchesBegan = this.onTouchesBegan;
        eventListener.onTouchesMoved = this.onTouchesMoved;
        eventListener.onTouchesEnded = this.onTouchesEnded;
        eventListener.onTouchesCancelled = this.onTouchesCancelled;
        return eventListener;
    },
    checkAvailable: function(){
        if (this.onTouchesBegan === null && this.onTouchesMoved === null
            && this.onTouchesEnded === null && this.onTouchesCancelled === null) {
            cc.log(cc._LogInfos._EventListenerTouchAllAtOnce_checkAvailable);
            return false;
        }
        return true;
    }
});
cc._EventListenerTouchAllAtOnce.LISTENER_ID = "__cc_touch_all_at_once";
cc._EventListenerTouchAllAtOnce.create = function(){
     return new cc._EventListenerTouchAllAtOnce();
};
cc.EventListener.create = function(argObj){
    cc.assert(argObj&&argObj.event, cc._LogInfos.EventListener_create);
    var listenerType = argObj.event;
    delete argObj.event;
    var listener = null;
    if(listenerType === cc.EventListener.TOUCH_ONE_BY_ONE)
        listener = new cc._EventListenerTouchOneByOne();
    else if(listenerType === cc.EventListener.TOUCH_ALL_AT_ONCE)
        listener = new cc._EventListenerTouchAllAtOnce();
    else if(listenerType === cc.EventListener.MOUSE)
        listener = new cc._EventListenerMouse();
    else if(listenerType === cc.EventListener.CUSTOM){
        listener = new cc._EventListenerCustom(argObj.eventName, argObj.callback);
        delete argObj.eventName;
        delete argObj.callback;
    } else if(listenerType === cc.EventListener.KEYBOARD)
        listener = new cc._EventListenerKeyboard();
    else if(listenerType === cc.EventListener.ACCELERATION){
        listener = new cc._EventListenerAcceleration(argObj.callback);
        delete argObj.callback;
    } else if(listenerType === cc.EventListener.FOCUS)
        listener = new cc._EventListenerFocus();
    for(var key in argObj) {
        listener[key] = argObj[key];
    }
    return listener;
};
cc._EventListenerFocus = cc.EventListener.extend({
    clone: function(){
        var listener = new cc._EventListenerFocus();
        listener.onFocusChanged = this.onFocusChanged;
        return listener;
    },
    checkAvailable: function(){
        if(!this.onFocusChanged){
            cc.log("Invalid EventListenerFocus!");
            return false;
        }
        return true;
    },
    onFocusChanged: null,
    ctor: function(){
        var listener = function(event){
            if(this.onFocusChanged)
                this.onFocusChanged(event._widgetLoseFocus, event._widgetGetFocus);
        };
        cc.EventListener.prototype.ctor.call(this, cc.EventListener.FOCUS, cc._EventListenerFocus.LISTENER_ID, listener);
    }
});
cc._EventListenerFocus.LISTENER_ID = "__cc_focus_event";
cc._EventListenerVector = cc.Class.extend({
    _fixedListeners: null,
    _sceneGraphListeners: null,
    gt0Index: 0,
    ctor: function () {
        this._fixedListeners = [];
        this._sceneGraphListeners = [];
    },
    size: function () {
        return this._fixedListeners.length + this._sceneGraphListeners.length;
    },
    empty: function () {
        return (this._fixedListeners.length === 0) && (this._sceneGraphListeners.length === 0);
    },
    push: function (listener) {
        if (listener._getFixedPriority() === 0)
            this._sceneGraphListeners.push(listener);
        else
            this._fixedListeners.push(listener);
    },
    clearSceneGraphListeners: function () {
        this._sceneGraphListeners.length = 0;
    },
    clearFixedListeners: function () {
        this._fixedListeners.length = 0;
    },
    clear: function () {
        this._sceneGraphListeners.length = 0;
        this._fixedListeners.length = 0;
    },
    getFixedPriorityListeners: function () {
        return this._fixedListeners;
    },
    getSceneGraphPriorityListeners: function () {
        return this._sceneGraphListeners;
    }
});
cc.__getListenerID = function (event) {
    var eventType = cc.Event, getType = event.getType();
    if(getType === eventType.ACCELERATION)
        return cc._EventListenerAcceleration.LISTENER_ID;
    if(getType === eventType.CUSTOM)
        return event.getEventName();
    if(getType === eventType.KEYBOARD)
        return cc._EventListenerKeyboard.LISTENER_ID;
    if(getType === eventType.MOUSE)
        return cc._EventListenerMouse.LISTENER_ID;
    if(getType === eventType.FOCUS)
        return cc._EventListenerFocus.LISTENER_ID;
    if(getType === eventType.TOUCH){
        cc.log(cc._LogInfos.__getListenerID);
    }
    return "";
};
cc.eventManager = {
    DIRTY_NONE:0,
    DIRTY_FIXED_PRIORITY:1 <<0,
    DIRTY_SCENE_GRAPH_PRIORITY : 1<< 1,
    DIRTY_ALL: 3,
    _listenersMap: {},
    _priorityDirtyFlagMap: {},
    _nodeListenersMap: {},
    _nodePriorityMap: {},
    _globalZOrderNodeMap: {},
    _toAddedListeners: [],
    _toRemovedListeners: [],
    _dirtyNodes: [],
    _inDispatch: 0,
    _isEnabled: false,
    _nodePriorityIndex: 0,
    _internalCustomListenerIDs:[cc.game.EVENT_HIDE, cc.game.EVENT_SHOW],
    _setDirtyForNode: function (node) {
        if (this._nodeListenersMap[node.__instanceId] != null)
            this._dirtyNodes.push(node);
        var _children = node.getChildren();
        for(var i = 0, len = _children.length; i < len; i++)
            this._setDirtyForNode(_children[i]);
    },
    pauseTarget: function (node, recursive) {
        var listeners = this._nodeListenersMap[node.__instanceId], i, len;
        if (listeners) {
            for ( i = 0, len = listeners.length; i < len; i++)
                listeners[i]._setPaused(true);
        }
        if (recursive === true) {
            var locChildren = node.getChildren();
            for ( i = 0, len = locChildren.length; i< len; i++)
                this.pauseTarget(locChildren[i], true);
        }
    },
    resumeTarget: function (node, recursive) {
        var listeners = this._nodeListenersMap[node.__instanceId], i, len;
        if (listeners){
            for ( i = 0, len = listeners.length; i < len; i++)
                listeners[i]._setPaused(false);
        }
        this._setDirtyForNode(node);
        if (recursive === true) {
            var locChildren = node.getChildren();
            for ( i = 0, len = locChildren.length; i< len; i++)
                this.resumeTarget(locChildren[i], true);
        }
    },
    _addListener: function (listener) {
        if (this._inDispatch === 0)
            this._forceAddEventListener(listener);
        else
            this._toAddedListeners.push(listener);
    },
    _forceAddEventListener: function (listener) {
        var listenerID = listener._getListenerID();
        var listeners = this._listenersMap[listenerID];
        if (!listeners) {
            listeners = new cc._EventListenerVector();
            this._listenersMap[listenerID] = listeners;
        }
        listeners.push(listener);
        if (listener._getFixedPriority() === 0) {
            this._setDirty(listenerID, this.DIRTY_SCENE_GRAPH_PRIORITY);
            var node = listener._getSceneGraphPriority();
            if (node === null)
                cc.log(cc._LogInfos.eventManager__forceAddEventListener);
            this._associateNodeAndEventListener(node, listener);
            if (node.isRunning())
                this.resumeTarget(node);
        } else
            this._setDirty(listenerID, this.DIRTY_FIXED_PRIORITY);
    },
    _getListeners: function (listenerID) {
        return this._listenersMap[listenerID];
    },
    _updateDirtyFlagForSceneGraph: function () {
        if (this._dirtyNodes.length === 0)
            return;
        var locDirtyNodes = this._dirtyNodes, selListeners, selListener, locNodeListenersMap = this._nodeListenersMap;
        for (var i = 0, len = locDirtyNodes.length; i < len; i++) {
            selListeners = locNodeListenersMap[locDirtyNodes[i].__instanceId];
            if (selListeners) {
                for (var j = 0, listenersLen = selListeners.length; j < listenersLen; j++) {
                    selListener = selListeners[j];
                    if (selListener)
                        this._setDirty(selListener._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY);
                }
            }
        }
        this._dirtyNodes.length = 0;
    },
    _removeAllListenersInVector: function (listenerVector) {
        if (!listenerVector)
            return;
        var selListener;
        for (var i = 0; i < listenerVector.length;) {
            selListener = listenerVector[i];
            selListener._setRegistered(false);
            if (selListener._getSceneGraphPriority() != null){
                this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);
                selListener._setSceneGraphPriority(null);
            }
            if (this._inDispatch === 0)
                cc.arrayRemoveObject(listenerVector, selListener);
            else
                ++i;
        }
    },
    _removeListenersForListenerID: function (listenerID) {
        var listeners = this._listenersMap[listenerID], i;
        if (listeners) {
            var fixedPriorityListeners = listeners.getFixedPriorityListeners();
            var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
            this._removeAllListenersInVector(sceneGraphPriorityListeners);
            this._removeAllListenersInVector(fixedPriorityListeners);
            delete this._priorityDirtyFlagMap[listenerID];
            if (!this._inDispatch) {
                listeners.clear();
                delete this._listenersMap[listenerID];
            }
        }
        var locToAddedListeners = this._toAddedListeners, listener;
        for (i = 0; i < locToAddedListeners.length;) {
            listener = locToAddedListeners[i];
            if (listener && listener._getListenerID() === listenerID)
                cc.arrayRemoveObject(locToAddedListeners, listener);
            else
                ++i;
        }
    },
    _sortEventListeners: function (listenerID) {
        var dirtyFlag = this.DIRTY_NONE,  locFlagMap = this._priorityDirtyFlagMap;
        if (locFlagMap[listenerID])
            dirtyFlag = locFlagMap[listenerID];
        if (dirtyFlag !== this.DIRTY_NONE) {
            locFlagMap[listenerID] = this.DIRTY_NONE;
            if (dirtyFlag & this.DIRTY_FIXED_PRIORITY)
                this._sortListenersOfFixedPriority(listenerID);
            if (dirtyFlag & this.DIRTY_SCENE_GRAPH_PRIORITY){
                var rootNode = cc.director.getRunningScene();
                if(rootNode)
                    this._sortListenersOfSceneGraphPriority(listenerID, rootNode);
                else
                    locFlagMap[listenerID] = this.DIRTY_SCENE_GRAPH_PRIORITY;
            }
        }
    },
    _sortListenersOfSceneGraphPriority: function (listenerID, rootNode) {
        var listeners = this._getListeners(listenerID);
        if (!listeners)
            return;
        var sceneGraphListener = listeners.getSceneGraphPriorityListeners();
        if(!sceneGraphListener || sceneGraphListener.length === 0)
            return;
        this._nodePriorityIndex = 0;
        this._nodePriorityMap = {};
        this._visitTarget(rootNode, true);
        listeners.getSceneGraphPriorityListeners().sort(this._sortEventListenersOfSceneGraphPriorityDes);
    },
    _sortEventListenersOfSceneGraphPriorityDes : function(l1, l2){
        var locNodePriorityMap = cc.eventManager._nodePriorityMap, node1 = l1._getSceneGraphPriority(),
            node2 = l2._getSceneGraphPriority();
        if( !l2 || !node2 || !locNodePriorityMap[node2.__instanceId] )
            return -1;
        else if( !l1 || !node1 || !locNodePriorityMap[node1.__instanceId] )
            return 1;
        return locNodePriorityMap[l2._getSceneGraphPriority().__instanceId] - locNodePriorityMap[l1._getSceneGraphPriority().__instanceId];
    },
    _sortListenersOfFixedPriority: function (listenerID) {
        var listeners = this._listenersMap[listenerID];
        if (!listeners)
            return;
        var fixedListeners = listeners.getFixedPriorityListeners();
        if(!fixedListeners || fixedListeners.length === 0)
            return;
        fixedListeners.sort(this._sortListenersOfFixedPriorityAsc);
        var index = 0;
        for (var len = fixedListeners.length; index < len;) {
            if (fixedListeners[index]._getFixedPriority() >= 0)
                break;
            ++index;
        }
        listeners.gt0Index = index;
    },
    _sortListenersOfFixedPriorityAsc: function (l1, l2) {
        return l1._getFixedPriority() - l2._getFixedPriority();
    },
    _onUpdateListeners: function (listenerID) {
        var listeners = this._listenersMap[listenerID];
        if (!listeners)
            return;
        var fixedPriorityListeners = listeners.getFixedPriorityListeners();
        var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
        var i, selListener, idx, toRemovedListeners = this._toRemovedListeners;
        if (sceneGraphPriorityListeners) {
            for (i = 0; i < sceneGraphPriorityListeners.length;) {
                selListener = sceneGraphPriorityListeners[i];
                if (!selListener._isRegistered()) {
                    cc.arrayRemoveObject(sceneGraphPriorityListeners, selListener);
                    idx = toRemovedListeners.indexOf(selListener);
                    if(idx !== -1)
                        toRemovedListeners.splice(idx, 1);
                } else
                    ++i;
            }
        }
        if (fixedPriorityListeners) {
            for (i = 0; i < fixedPriorityListeners.length;) {
                selListener = fixedPriorityListeners[i];
                if (!selListener._isRegistered()) {
                    cc.arrayRemoveObject(fixedPriorityListeners, selListener);
                    idx = toRemovedListeners.indexOf(selListener);
                    if(idx !== -1)
                        toRemovedListeners.splice(idx, 1);
                } else
                    ++i;
            }
        }
        if (sceneGraphPriorityListeners && sceneGraphPriorityListeners.length === 0)
            listeners.clearSceneGraphListeners();
        if (fixedPriorityListeners && fixedPriorityListeners.length === 0)
            listeners.clearFixedListeners();
    },
    _updateListeners: function (event) {
        var locInDispatch = this._inDispatch;
        cc.assert(locInDispatch > 0, cc._LogInfos.EventManager__updateListeners);
        if(locInDispatch > 1)
            return;
        if (event.getType() === cc.Event.TOUCH) {
            this._onUpdateListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
            this._onUpdateListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        } else
            this._onUpdateListeners(cc.__getListenerID(event));
        cc.assert(locInDispatch === 1, cc._LogInfos.EventManager__updateListeners_2);
        var locListenersMap = this._listenersMap, locPriorityDirtyFlagMap = this._priorityDirtyFlagMap;
        for (var selKey in locListenersMap) {
            if (locListenersMap[selKey].empty()) {
                delete locPriorityDirtyFlagMap[selKey];
                delete locListenersMap[selKey];
            }
        }
        var locToAddedListeners = this._toAddedListeners;
        if (locToAddedListeners.length !== 0) {
            for (var i = 0, len = locToAddedListeners.length; i < len; i++)
                this._forceAddEventListener(locToAddedListeners[i]);
            this._toAddedListeners.length = 0;
        }
        if(this._toRemovedListeners.length !== 0)
            this._cleanToRemovedListeners();
    },
    _cleanToRemovedListeners: function(){
        var toRemovedListeners = this._toRemovedListeners;
        for(var i = 0; i< toRemovedListeners.length; i++){
            var selListener = toRemovedListeners[i];
            var listeners = this._listenersMap[selListener._getListenerID()];
            if(!listeners)
                continue;
            var idx, fixedPriorityListeners = listeners.getFixedPriorityListeners(),
                sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
            if(sceneGraphPriorityListeners){
                idx = sceneGraphPriorityListeners.indexOf(selListener);
                if (idx !== -1) {
                    sceneGraphPriorityListeners.splice(idx, 1);
                }
            }
            if(fixedPriorityListeners){
                idx = fixedPriorityListeners.indexOf(selListener);
                if (idx !== -1) {
                    fixedPriorityListeners.splice(idx, 1);
                }
            }
        }
        toRemovedListeners.length = 0;
    },
    _onTouchEventCallback: function(listener, argsObj){
        if (!listener._isRegistered)
            return false;
        var event = argsObj.event, selTouch = argsObj.selTouch;
        event._setCurrentTarget(listener._node);
        var isClaimed = false, removedIdx;
        var getCode = event.getEventCode(), eventCode = cc.EventTouch.EventCode;
        if (getCode === eventCode.BEGAN) {
            if (listener.onTouchBegan) {
                isClaimed = listener.onTouchBegan(selTouch, event);
                if (isClaimed && listener._registered)
                    listener._claimedTouches.push(selTouch);
            }
        } else if (listener._claimedTouches.length > 0
            && ((removedIdx = listener._claimedTouches.indexOf(selTouch)) !== -1)) {
            isClaimed = true;
            if(getCode === eventCode.MOVED && listener.onTouchMoved){
                listener.onTouchMoved(selTouch, event);
            } else if(getCode === eventCode.ENDED){
                if (listener.onTouchEnded)
                    listener.onTouchEnded(selTouch, event);
                if (listener._registered)
                    listener._claimedTouches.splice(removedIdx, 1);
            } else if(getCode === eventCode.CANCELLED){
                if (listener.onTouchCancelled)
                    listener.onTouchCancelled(selTouch, event);
                if (listener._registered)
                    listener._claimedTouches.splice(removedIdx, 1);
            }
        }
        if (event.isStopped()) {
            cc.eventManager._updateListeners(event);
            return true;
        }
        if (isClaimed && listener._registered && listener.swallowTouches) {
            if (argsObj.needsMutableSet)
                argsObj.touches.splice(selTouch, 1);
            return true;
        }
        return false;
    },
    _dispatchTouchEvent: function (event) {
        this._sortEventListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
        this._sortEventListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        var oneByOneListeners = this._getListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
        var allAtOnceListeners = this._getListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        if (null === oneByOneListeners && null === allAtOnceListeners)
            return;
        var originalTouches = event.getTouches(), mutableTouches = cc.copyArray(originalTouches);
        var oneByOneArgsObj = {event: event, needsMutableSet: (oneByOneListeners && allAtOnceListeners), touches: mutableTouches, selTouch: null};
        if (oneByOneListeners) {
            for (var i = 0; i < originalTouches.length; i++) {
                oneByOneArgsObj.selTouch = originalTouches[i];
                this._dispatchEventToListeners(oneByOneListeners, this._onTouchEventCallback, oneByOneArgsObj);
                if (event.isStopped())
                    return;
            }
        }
        if (allAtOnceListeners && mutableTouches.length > 0) {
            this._dispatchEventToListeners(allAtOnceListeners, this._onTouchesEventCallback, {event: event, touches: mutableTouches});
            if (event.isStopped())
                return;
        }
        this._updateListeners(event);
    },
    _onTouchesEventCallback: function (listener, callbackParams) {
        if (!listener._registered)
            return false;
        var eventCode = cc.EventTouch.EventCode, event = callbackParams.event, touches = callbackParams.touches, getCode = event.getEventCode();
        event._setCurrentTarget(listener._node);
        if(getCode === eventCode.BEGAN && listener.onTouchesBegan)
            listener.onTouchesBegan(touches, event);
        else if(getCode === eventCode.MOVED && listener.onTouchesMoved)
            listener.onTouchesMoved(touches, event);
        else if(getCode === eventCode.ENDED && listener.onTouchesEnded)
            listener.onTouchesEnded(touches, event);
        else if(getCode === eventCode.CANCELLED && listener.onTouchesCancelled)
            listener.onTouchesCancelled(touches, event);
        if (event.isStopped()) {
            cc.eventManager._updateListeners(event);
            return true;
        }
        return false;
    },
    _associateNodeAndEventListener: function (node, listener) {
        var listeners = this._nodeListenersMap[node.__instanceId];
        if (!listeners) {
            listeners = [];
            this._nodeListenersMap[node.__instanceId] = listeners;
        }
        listeners.push(listener);
    },
    _dissociateNodeAndEventListener: function (node, listener) {
        var listeners = this._nodeListenersMap[node.__instanceId];
        if (listeners) {
            cc.arrayRemoveObject(listeners, listener);
            if (listeners.length === 0)
                delete this._nodeListenersMap[node.__instanceId];
        }
    },
    _dispatchEventToListeners: function (listeners, onEvent, eventOrArgs) {
        var shouldStopPropagation = false;
        var fixedPriorityListeners = listeners.getFixedPriorityListeners();
        var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
        var i = 0, j, selListener;
        if (fixedPriorityListeners) {
            if (fixedPriorityListeners.length !== 0) {
                for (; i < listeners.gt0Index; ++i) {
                    selListener = fixedPriorityListeners[i];
                    if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
                        shouldStopPropagation = true;
                        break;
                    }
                }
            }
        }
        if (sceneGraphPriorityListeners && !shouldStopPropagation) {
            for (j = 0; j < sceneGraphPriorityListeners.length; j++) {
                selListener = sceneGraphPriorityListeners[j];
                if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
                    shouldStopPropagation = true;
                    break;
                }
            }
        }
        if (fixedPriorityListeners && !shouldStopPropagation) {
            for (; i < fixedPriorityListeners.length; ++i) {
                selListener = fixedPriorityListeners[i];
                if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
                    shouldStopPropagation = true;
                    break;
                }
            }
        }
    },
    _setDirty: function (listenerID, flag) {
        var locDirtyFlagMap = this._priorityDirtyFlagMap;
        if (locDirtyFlagMap[listenerID] == null)
            locDirtyFlagMap[listenerID] = flag;
        else
            locDirtyFlagMap[listenerID] = flag | locDirtyFlagMap[listenerID];
    },
    _visitTarget: function (node, isRootNode) {
        var children = node.getChildren(), i = 0;
        var childrenCount = children.length, locGlobalZOrderNodeMap = this._globalZOrderNodeMap, locNodeListenersMap = this._nodeListenersMap;
        if (childrenCount > 0) {
            var child;
            for (; i < childrenCount; i++) {
                child = children[i];
                if (child && child.getLocalZOrder() < 0)
                    this._visitTarget(child, false);
                else
                    break;
            }
            if (locNodeListenersMap[node.__instanceId] != null) {
                if (!locGlobalZOrderNodeMap[node.getGlobalZOrder()])
                    locGlobalZOrderNodeMap[node.getGlobalZOrder()] = [];
                locGlobalZOrderNodeMap[node.getGlobalZOrder()].push(node.__instanceId);
            }
            for (; i < childrenCount; i++) {
                child = children[i];
                if (child)
                    this._visitTarget(child, false);
            }
        } else {
            if (locNodeListenersMap[node.__instanceId] != null) {
                if (!locGlobalZOrderNodeMap[node.getGlobalZOrder()])
                    locGlobalZOrderNodeMap[node.getGlobalZOrder()] = [];
                locGlobalZOrderNodeMap[node.getGlobalZOrder()].push(node.__instanceId);
            }
        }
        if (isRootNode) {
            var globalZOrders = [];
            for (var selKey in locGlobalZOrderNodeMap)
                globalZOrders.push(selKey);
            globalZOrders.sort(this._sortNumberAsc);
            var zOrdersLen = globalZOrders.length, selZOrders, j, locNodePriorityMap = this._nodePriorityMap;
            for (i = 0; i < zOrdersLen; i++) {
                selZOrders = locGlobalZOrderNodeMap[globalZOrders[i]];
                for (j = 0; j < selZOrders.length; j++)
                    locNodePriorityMap[selZOrders[j]] = ++this._nodePriorityIndex;
            }
            this._globalZOrderNodeMap = {};
        }
    },
    _sortNumberAsc : function (a, b) {
        return a - b;
    },
    addListener: function (listener, nodeOrPriority) {
        cc.assert(listener && nodeOrPriority, cc._LogInfos.eventManager_addListener_2);
        if(!(listener instanceof cc.EventListener)){
            cc.assert(!cc.isNumber(nodeOrPriority), cc._LogInfos.eventManager_addListener_3);
            listener = cc.EventListener.create(listener);
        } else {
            if(listener._isRegistered()){
                cc.log(cc._LogInfos.eventManager_addListener_4);
                return;
            }
        }
        if (!listener.checkAvailable())
            return;
        if (cc.isNumber(nodeOrPriority)) {
            if (nodeOrPriority === 0) {
                cc.log(cc._LogInfos.eventManager_addListener);
                return;
            }
            listener._setSceneGraphPriority(null);
            listener._setFixedPriority(nodeOrPriority);
            listener._setRegistered(true);
            listener._setPaused(false);
            this._addListener(listener);
        } else {
            listener._setSceneGraphPriority(nodeOrPriority);
            listener._setFixedPriority(0);
            listener._setRegistered(true);
            this._addListener(listener);
        }
        return listener;
    },
    addCustomListener: function (eventName, callback) {
        var listener = new cc._EventListenerCustom(eventName, callback);
        this.addListener(listener, 1);
        return listener;
    },
    removeListener: function (listener) {
        if (listener == null)
            return;
        var isFound, locListener = this._listenersMap;
        for (var selKey in locListener) {
            var listeners = locListener[selKey];
            var fixedPriorityListeners = listeners.getFixedPriorityListeners(), sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
            isFound = this._removeListenerInVector(sceneGraphPriorityListeners, listener);
            if (isFound){
               this._setDirty(listener._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY);
            }else{
                isFound = this._removeListenerInVector(fixedPriorityListeners, listener);
                if (isFound)
                    this._setDirty(listener._getListenerID(), this.DIRTY_FIXED_PRIORITY);
            }
            if (listeners.empty()) {
                delete this._priorityDirtyFlagMap[listener._getListenerID()];
                delete locListener[selKey];
            }
            if (isFound)
                break;
        }
        if (!isFound) {
            var locToAddedListeners = this._toAddedListeners;
            for (var i = 0, len = locToAddedListeners.length; i < len; i++) {
                var selListener = locToAddedListeners[i];
                if (selListener === listener) {
                    cc.arrayRemoveObject(locToAddedListeners, selListener);
                    selListener._setRegistered(false);
                    break;
                }
            }
        }
    },
    _removeListenerInCallback: function(listeners, callback){
        if (listeners == null)
            return false;
        for (var i = 0, len = listeners.length; i < len; i++) {
            var selListener = listeners[i];
            if (selListener._onCustomEvent === callback || selListener._onEvent === callback) {
                selListener._setRegistered(false);
                if (selListener._getSceneGraphPriority() != null){
                    this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);
                    selListener._setSceneGraphPriority(null);
                }
                if (this._inDispatch === 0)
                    cc.arrayRemoveObject(listeners, selListener);
                return true;
            }
        }
        return false;
    },
    _removeListenerInVector : function(listeners, listener){
        if (listeners == null)
            return false;
        for (var i = 0, len = listeners.length; i < len; i++) {
            var selListener = listeners[i];
            if (selListener === listener) {
                selListener._setRegistered(false);
                if (selListener._getSceneGraphPriority() != null){
                    this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);
                    selListener._setSceneGraphPriority(null);
                }
                if (this._inDispatch === 0)
                    cc.arrayRemoveObject(listeners, selListener);
                else
                    this._toRemovedListeners.push(selListener);
                return true;
            }
        }
        return false;
    },
    removeListeners: function (listenerType, recursive) {
        var _t = this;
        if (listenerType instanceof cc.Node) {
            delete _t._nodePriorityMap[listenerType.__instanceId];
            cc.arrayRemoveObject(_t._dirtyNodes, listenerType);
            var listeners = _t._nodeListenersMap[listenerType.__instanceId], i;
            if (listeners) {
                var listenersCopy = cc.copyArray(listeners);
                for (i = 0; i < listenersCopy.length; i++)
                    _t.removeListener(listenersCopy[i]);
                listenersCopy.length = 0;
            }
            var locToAddedListeners = _t._toAddedListeners;
            for (i = 0; i < locToAddedListeners.length; ) {
                var listener = locToAddedListeners[i];
                if (listener._getSceneGraphPriority() === listenerType) {
                    listener._setSceneGraphPriority(null);
                    listener._setRegistered(false);
                    locToAddedListeners.splice(i, 1);
                } else
                    ++i;
            }
            if (recursive === true) {
                var locChildren = listenerType.getChildren(), len;
                for (i = 0, len = locChildren.length; i< len; i++)
                    _t.removeListeners(locChildren[i], true);
            }
        } else {
            if (listenerType === cc.EventListener.TOUCH_ONE_BY_ONE)
                _t._removeListenersForListenerID(cc._EventListenerTouchOneByOne.LISTENER_ID);
            else if (listenerType === cc.EventListener.TOUCH_ALL_AT_ONCE)
                _t._removeListenersForListenerID(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
            else if (listenerType === cc.EventListener.MOUSE)
                _t._removeListenersForListenerID(cc._EventListenerMouse.LISTENER_ID);
            else if (listenerType === cc.EventListener.ACCELERATION)
                _t._removeListenersForListenerID(cc._EventListenerAcceleration.LISTENER_ID);
            else if (listenerType === cc.EventListener.KEYBOARD)
                _t._removeListenersForListenerID(cc._EventListenerKeyboard.LISTENER_ID);
            else
                cc.log(cc._LogInfos.eventManager_removeListeners);
        }
    },
    removeCustomListeners: function (customEventName) {
        this._removeListenersForListenerID(customEventName);
    },
    removeAllListeners: function () {
        var locListeners = this._listenersMap, locInternalCustomEventIDs = this._internalCustomListenerIDs;
        for (var selKey in locListeners){
            if(locInternalCustomEventIDs.indexOf(selKey) === -1)
                this._removeListenersForListenerID(selKey);
        }
    },
    setPriority: function (listener, fixedPriority) {
        if (listener == null)
            return;
        var locListeners = this._listenersMap;
        for (var selKey in locListeners) {
            var selListeners = locListeners[selKey];
            var fixedPriorityListeners = selListeners.getFixedPriorityListeners();
            if (fixedPriorityListeners) {
                var found = fixedPriorityListeners.indexOf(listener);
                if (found !== -1) {
                    if(listener._getSceneGraphPriority() != null)
                        cc.log(cc._LogInfos.eventManager_setPriority);
                    if (listener._getFixedPriority() !== fixedPriority) {
                        listener._setFixedPriority(fixedPriority);
                        this._setDirty(listener._getListenerID(), this.DIRTY_FIXED_PRIORITY);
                    }
                    return;
                }
            }
        }
    },
    setEnabled: function (enabled) {
        this._isEnabled = enabled;
    },
    isEnabled: function () {
        return this._isEnabled;
    },
    dispatchEvent: function (event) {
        if (!this._isEnabled)
            return;
        this._updateDirtyFlagForSceneGraph();
        this._inDispatch++;
        if(!event || !event.getType)
            throw new Error("event is undefined");
        if (event.getType() === cc.Event.TOUCH) {
            this._dispatchTouchEvent(event);
            this._inDispatch--;
            return;
        }
        var listenerID = cc.__getListenerID(event);
        this._sortEventListeners(listenerID);
        var selListeners = this._listenersMap[listenerID];
        if (selListeners != null)
            this._dispatchEventToListeners(selListeners, this._onListenerCallback, event);
        this._updateListeners(event);
        this._inDispatch--;
    },
    _onListenerCallback: function(listener, event){
        event._setCurrentTarget(listener._getSceneGraphPriority());
        listener._onEvent(event);
        return event.isStopped();
    },
    dispatchCustomEvent: function (eventName, optionalUserData) {
        var ev = new cc.EventCustom(eventName);
        ev.setUserData(optionalUserData);
        this.dispatchEvent(ev);
    }
};
cc._tmp.PrototypeCCNode = function () {
    var _p = cc.Node.prototype;
    cc.defineGetterSetter(_p, "x", _p.getPositionX, _p.setPositionX);
    cc.defineGetterSetter(_p, "y", _p.getPositionY, _p.setPositionY);
    _p.width;
    cc.defineGetterSetter(_p, "width", _p._getWidth, _p._setWidth);
    _p.height;
    cc.defineGetterSetter(_p, "height", _p._getHeight, _p._setHeight);
    _p.anchorX;
    cc.defineGetterSetter(_p, "anchorX", _p._getAnchorX, _p._setAnchorX);
    _p.anchorY;
    cc.defineGetterSetter(_p, "anchorY", _p._getAnchorY, _p._setAnchorY);
    _p.skewX;
    cc.defineGetterSetter(_p, "skewX", _p.getSkewX, _p.setSkewX);
    _p.skewY;
    cc.defineGetterSetter(_p, "skewY", _p.getSkewY, _p.setSkewY);
    _p.zIndex;
    cc.defineGetterSetter(_p, "zIndex", _p.getLocalZOrder, _p.setLocalZOrder);
    _p.vertexZ;
    cc.defineGetterSetter(_p, "vertexZ", _p.getVertexZ, _p.setVertexZ);
    _p.rotation;
    cc.defineGetterSetter(_p, "rotation", _p.getRotation, _p.setRotation);
    _p.rotationX;
    cc.defineGetterSetter(_p, "rotationX", _p.getRotationX, _p.setRotationX);
    _p.rotationY;
    cc.defineGetterSetter(_p, "rotationY", _p.getRotationY, _p.setRotationY);
    _p.scale;
    cc.defineGetterSetter(_p, "scale", _p.getScale, _p.setScale);
    _p.scaleX;
    cc.defineGetterSetter(_p, "scaleX", _p.getScaleX, _p.setScaleX);
    _p.scaleY;
    cc.defineGetterSetter(_p, "scaleY", _p.getScaleY, _p.setScaleY);
    _p.children;
    cc.defineGetterSetter(_p, "children", _p.getChildren);
    _p.childrenCount;
    cc.defineGetterSetter(_p, "childrenCount", _p.getChildrenCount);
    _p.parent;
    cc.defineGetterSetter(_p, "parent", _p.getParent, _p.setParent);
    _p.visible;
    cc.defineGetterSetter(_p, "visible", _p.isVisible, _p.setVisible);
    _p.running;
    cc.defineGetterSetter(_p, "running", _p.isRunning);
    _p.ignoreAnchor;
    cc.defineGetterSetter(_p, "ignoreAnchor", _p.isIgnoreAnchorPointForPosition, _p.ignoreAnchorPointForPosition);
    _p.tag;
    _p.userData;
    _p.userObject;
    _p.arrivalOrder;
    _p.actionManager;
    cc.defineGetterSetter(_p, "actionManager", _p.getActionManager, _p.setActionManager);
    _p.scheduler;
    cc.defineGetterSetter(_p, "scheduler", _p.getScheduler, _p.setScheduler);
    _p.shaderProgram;
    cc.defineGetterSetter(_p, "shaderProgram", _p.getShaderProgram, _p.setShaderProgram);
    _p.opacity;
    cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
    _p.opacityModifyRGB;
    cc.defineGetterSetter(_p, "opacityModifyRGB", _p.isOpacityModifyRGB);
    _p.cascadeOpacity;
    cc.defineGetterSetter(_p, "cascadeOpacity", _p.isCascadeOpacityEnabled, _p.setCascadeOpacityEnabled);
    _p.color;
    cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
    _p.cascadeColor;
    cc.defineGetterSetter(_p, "cascadeColor", _p.isCascadeColorEnabled, _p.setCascadeColorEnabled);
};
cc.NODE_TAG_INVALID = -1;
cc.s_globalOrderOfArrival = 1;
cc.Node = cc.Class.extend({
    _localZOrder: 0,
    _globalZOrder: 0,
    _vertexZ: 0.0,
    _customZ: NaN,
    _rotationX: 0,
    _rotationY: 0.0,
    _scaleX: 1.0,
    _scaleY: 1.0,
    _position: null,
    _normalizedPosition:null,
    _usingNormalizedPosition: false,
    _normalizedPositionDirty: false,
    _skewX: 0.0,
    _skewY: 0.0,
    _children: null,
    _visible: true,
    _anchorPoint: null,
    _contentSize: null,
    _running: false,
    _parent: null,
    _ignoreAnchorPointForPosition: false,
    tag: cc.NODE_TAG_INVALID,
    userData: null,
    userObject: null,
    _reorderChildDirty: false,
    _shaderProgram: null,
    arrivalOrder: 0,
    _actionManager: null,
    _scheduler: null,
    _eventDispatcher: null,
    _additionalTransformDirty: false,
    _additionalTransform: null,
    _componentContainer: null,
    _isTransitionFinished: false,
    _className: "Node",
    _showNode: false,
    _name: "",
    _realOpacity: 255,
    _realColor: null,
    _cascadeColorEnabled: false,
    _cascadeOpacityEnabled: false,
    _renderCmd:null,
    ctor: function(){
        this._initNode();
        this._initRendererCmd();
    },
    _initNode: function () {
        var _t = this;
        _t._anchorPoint = cc.p(0, 0);
        _t._contentSize = cc.size(0, 0);
        _t._position = cc.p(0, 0);
        _t._normalizedPosition = cc.p(0,0);
        _t._children = [];
        var director = cc.director;
        _t._actionManager = director.getActionManager();
        _t._scheduler = director.getScheduler();
        _t._additionalTransform = cc.affineTransformMakeIdentity();
        if (cc.ComponentContainer) {
            _t._componentContainer = new cc.ComponentContainer(_t);
        }
        this._realOpacity = 255;
        this._realColor = cc.color(255, 255, 255, 255);
        this._cascadeColorEnabled = false;
        this._cascadeOpacityEnabled = false;
    },
    init: function () {
        return true;
    },
    _arrayMakeObjectsPerformSelector: function (array, callbackType) {
        if (!array || array.length === 0)
            return;
        var i, len = array.length, node;
        var nodeCallbackType = cc.Node._stateCallbackType;
        switch (callbackType) {
            case nodeCallbackType.onEnter:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)
                        node.onEnter();
                }
                break;
            case nodeCallbackType.onExit:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)
                        node.onExit();
                }
                break;
            case nodeCallbackType.onEnterTransitionDidFinish:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)
                        node.onEnterTransitionDidFinish();
                }
                break;
            case nodeCallbackType.cleanup:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)
                        node.cleanup();
                }
                break;
            case nodeCallbackType.updateTransform:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)
                        node.updateTransform();
                }
                break;
            case nodeCallbackType.onExitTransitionDidStart:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)
                        node.onExitTransitionDidStart();
                }
                break;
            case nodeCallbackType.sortAllChildren:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)
                        node.sortAllChildren();
                }
                break;
            default :
                cc.assert(0, cc._LogInfos.Node__arrayMakeObjectsPerformSelector);
                break;
        }
    },
    attr: function (attrs) {
        for (var key in attrs) {
            this[key] = attrs[key];
        }
    },
    getSkewX: function () {
        return this._skewX;
    },
    setSkewX: function (newSkewX) {
        this._skewX = newSkewX;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getSkewY: function () {
        return this._skewY;
    },
    setSkewY: function (newSkewY) {
        this._skewY = newSkewY;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    setLocalZOrder: function (localZOrder) {
        this._localZOrder = localZOrder;
        if (this._parent)
            this._parent.reorderChild(this, localZOrder);
        cc.eventManager._setDirtyForNode(this);
    },
    _setLocalZOrder: function (localZOrder) {
        this._localZOrder = localZOrder;
    },
    getLocalZOrder: function () {
        return this._localZOrder;
    },
    getZOrder: function () {
        cc.log(cc._LogInfos.Node_getZOrder);
        return this.getLocalZOrder();
    },
    setZOrder: function (z) {
        cc.log(cc._LogInfos.Node_setZOrder);
        this.setLocalZOrder(z);
    },
    setGlobalZOrder: function (globalZOrder) {
        if (this._globalZOrder !== globalZOrder) {
            this._globalZOrder = globalZOrder;
            cc.eventManager._setDirtyForNode(this);
        }
    },
    getGlobalZOrder: function () {
        return this._globalZOrder;
    },
    getVertexZ: function () {
        return this._vertexZ;
    },
    setVertexZ: function (Var) {
        this._customZ = this._vertexZ = Var;
    },
    getRotation: function () {
        if (this._rotationX !== this._rotationY)
            cc.log(cc._LogInfos.Node_getRotation);
        return this._rotationX;
    },
    setRotation: function (newRotation) {
        this._rotationX = this._rotationY = newRotation;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getRotationX: function () {
        return this._rotationX;
    },
    setRotationX: function (rotationX) {
        this._rotationX = rotationX;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getRotationY: function () {
        return this._rotationY;
    },
    setRotationY: function (rotationY) {
        this._rotationY = rotationY;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getScale: function () {
        if (this._scaleX !== this._scaleY)
            cc.log(cc._LogInfos.Node_getScale);
        return this._scaleX;
    },
    setScale: function (scale, scaleY) {
        this._scaleX = scale;
        this._scaleY = (scaleY || scaleY === 0) ? scaleY : scale;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getScaleX: function () {
        return this._scaleX;
    },
    setScaleX: function (newScaleX) {
        this._scaleX = newScaleX;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getScaleY: function () {
        return this._scaleY;
    },
    setScaleY: function (newScaleY) {
        this._scaleY = newScaleY;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    setPosition: function (newPosOrxValue, yValue) {
        var locPosition = this._position;
        if (yValue === undefined) {
            if(locPosition.x === newPosOrxValue.x && locPosition.y === newPosOrxValue.y)
                return;
            locPosition.x = newPosOrxValue.x;
            locPosition.y = newPosOrxValue.y;
        } else {
            if(locPosition.x === newPosOrxValue && locPosition.y === yValue)
                return;
            locPosition.x = newPosOrxValue;
            locPosition.y = yValue;
        }
        this._usingNormalizedPosition = false;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    setNormalizedPosition: function(posOrX, y){
        var locPosition = this._normalizedPosition;
        if (y === undefined) {
            locPosition.x = posOrX.x;
            locPosition.y = posOrX.y;
        } else {
            locPosition.x = posOrX;
            locPosition.y = y;
        }
        this._normalizedPositionDirty = this._usingNormalizedPosition = true;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getPosition: function () {
        return cc.p(this._position);
    },
    getNormalizedPosition: function(){
        return cc.p(this._normalizedPosition);
    },
    getPositionX: function () {
        return this._position.x;
    },
    setPositionX: function (x) {
        this._position.x = x;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getPositionY: function () {
        return  this._position.y;
    },
    setPositionY: function (y) {
        this._position.y = y;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getChildrenCount: function () {
        return this._children.length;
    },
    getChildren: function () {
        return this._children;
    },
    isVisible: function () {
        return this._visible;
    },
    setVisible: function (visible) {
        if(this._visible !== visible){
            this._visible = visible;
            this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
            cc.renderer.childrenOrderDirty = true;
        }
    },
    getAnchorPoint: function () {
        return cc.p(this._anchorPoint);
    },
    setAnchorPoint: function (point, y) {
        var locAnchorPoint = this._anchorPoint;
        if (y === undefined) {
            if ((point.x === locAnchorPoint.x) && (point.y === locAnchorPoint.y))
                return;
            locAnchorPoint.x = point.x;
            locAnchorPoint.y = point.y;
        } else {
            if ((point === locAnchorPoint.x) && (y === locAnchorPoint.y))
                return;
            locAnchorPoint.x = point;
            locAnchorPoint.y = y;
        }
        this._renderCmd._updateAnchorPointInPoint();
    },
    _getAnchorX: function () {
        return this._anchorPoint.x;
    },
    _setAnchorX: function (x) {
        if (this._anchorPoint.x === x) return;
        this._anchorPoint.x = x;
        this._renderCmd._updateAnchorPointInPoint();
    },
    _getAnchorY: function () {
        return this._anchorPoint.y;
    },
    _setAnchorY: function (y) {
        if (this._anchorPoint.y === y) return;
        this._anchorPoint.y = y;
        this._renderCmd._updateAnchorPointInPoint();
    },
    getAnchorPointInPoints: function () {
        return this._renderCmd.getAnchorPointInPoints();
    },
    _getWidth: function () {
        return this._contentSize.width;
    },
    _setWidth: function (width) {
        this._contentSize.width = width;
        this._renderCmd._updateAnchorPointInPoint();
    },
    _getHeight: function () {
        return this._contentSize.height;
    },
    _setHeight: function (height) {
        this._contentSize.height = height;
        this._renderCmd._updateAnchorPointInPoint();
    },
    getContentSize: function () {
        return cc.size(this._contentSize);
    },
    setContentSize: function (size, height) {
        var locContentSize = this._contentSize;
        if (height === undefined) {
            if ((size.width === locContentSize.width) && (size.height === locContentSize.height))
                return;
            locContentSize.width = size.width;
            locContentSize.height = size.height;
        } else {
            if ((size === locContentSize.width) && (height === locContentSize.height))
                return;
            locContentSize.width = size;
            locContentSize.height = height;
        }
        this._renderCmd._updateAnchorPointInPoint();
    },
    isRunning: function () {
        return this._running;
    },
    getParent: function () {
        return this._parent;
    },
    setParent: function (parent) {
        this._parent = parent;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    isIgnoreAnchorPointForPosition: function () {
        return this._ignoreAnchorPointForPosition;
    },
    ignoreAnchorPointForPosition: function (newValue) {
        if (newValue !== this._ignoreAnchorPointForPosition) {
            this._ignoreAnchorPointForPosition = newValue;
            this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        }
    },
    getTag: function () {
        return this.tag;
    },
    setTag: function (tag) {
        this.tag = tag;
    },
    setName: function(name){
         this._name = name;
    },
    getName: function(){
        return this._name;
    },
    getUserData: function () {
        return this.userData;
    },
    setUserData: function (Var) {
        this.userData = Var;
    },
    getUserObject: function () {
        return this.userObject;
    },
    setUserObject: function (newValue) {
        if (this.userObject !== newValue)
            this.userObject = newValue;
    },
    getOrderOfArrival: function () {
        return this.arrivalOrder;
    },
    setOrderOfArrival: function (Var) {
        this.arrivalOrder = Var;
    },
    getActionManager: function () {
        if (!this._actionManager)
            this._actionManager = cc.director.getActionManager();
        return this._actionManager;
    },
    setActionManager: function (actionManager) {
        if (this._actionManager !== actionManager) {
            this.stopAllActions();
            this._actionManager = actionManager;
        }
    },
    getScheduler: function () {
        if (!this._scheduler)
            this._scheduler = cc.director.getScheduler();
        return this._scheduler;
    },
    setScheduler: function (scheduler) {
        if (this._scheduler !== scheduler) {
            this.unscheduleAllCallbacks();
            this._scheduler = scheduler;
        }
    },
    boundingBox: function(){
        cc.log(cc._LogInfos.Node_boundingBox);
        return this.getBoundingBox();
    },
    getBoundingBox: function () {
        var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        return cc._rectApplyAffineTransformIn(rect, this.getNodeToParentTransform());
    },
    cleanup: function () {
        this.stopAllActions();
        this.unscheduleAllCallbacks();
        cc.eventManager.removeListeners(this);
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.cleanup);
    },
    getChildByTag: function (aTag) {
        var __children = this._children;
        if (__children !== null) {
            for (var i = 0; i < __children.length; i++) {
                var node = __children[i];
                if (node && node.tag === aTag)
                    return node;
            }
        }
        return null;
    },
    getChildByName: function(name){
        if(!name){
            cc.log("Invalid name");
            return null;
        }
        var locChildren = this._children;
        for(var i = 0, len = locChildren.length; i < len; i++){
           if(locChildren[i]._name === name)
            return locChildren[i];
        }
        return null;
    },
    addChild: function (child, localZOrder, tag) {
        localZOrder = localZOrder === undefined ? child._localZOrder : localZOrder;
        var name, setTag = false;
        if(cc.isUndefined(tag)){
            tag = undefined;
            name = child._name;
        } else if(cc.isString(tag)){
            name = tag;
            tag = undefined;
        } else if(cc.isNumber(tag)){
            setTag = true;
            name = "";
        }
        cc.assert(child, cc._LogInfos.Node_addChild_3);
        cc.assert(child._parent === null, "child already added. It can't be added again");
        this._addChildHelper(child, localZOrder, tag, name, setTag);
    },
    _addChildHelper: function(child, localZOrder, tag, name, setTag){
        if(!this._children)
            this._children = [];
        this._insertChild(child, localZOrder);
        if(setTag)
            child.setTag(tag);
        else
            child.setName(name);
        child.setParent(this);
        child.setOrderOfArrival(cc.s_globalOrderOfArrival++);
        if( this._running ){
            child.onEnter();
            if (this._isTransitionFinished)
                child.onEnterTransitionDidFinish();
        }
        child._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        if (this._cascadeColorEnabled)
            child._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty);
        if (this._cascadeOpacityEnabled)
            child._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty);
    },
    removeFromParent: function (cleanup) {
        if (this._parent) {
            if (cleanup === undefined)
                cleanup = true;
            this._parent.removeChild(this, cleanup);
        }
    },
    removeFromParentAndCleanup: function (cleanup) {
        cc.log(cc._LogInfos.Node_removeFromParentAndCleanup);
        this.removeFromParent(cleanup);
    },
    removeChild: function (child, cleanup) {
        if (this._children.length === 0)
            return;
        if (cleanup === undefined)
            cleanup = true;
        if (this._children.indexOf(child) > -1)
            this._detachChild(child, cleanup);
        cc.renderer.childrenOrderDirty = true;
    },
    removeChildByTag: function (tag, cleanup) {
        if (tag === cc.NODE_TAG_INVALID)
            cc.log(cc._LogInfos.Node_removeChildByTag);
        var child = this.getChildByTag(tag);
        if (!child)
            cc.log(cc._LogInfos.Node_removeChildByTag_2, tag);
        else
            this.removeChild(child, cleanup);
    },
    removeAllChildrenWithCleanup: function (cleanup) {
        this.removeAllChildren(cleanup);
    },
    removeAllChildren: function (cleanup) {
        var __children = this._children;
        if (__children !== null) {
            if (cleanup === undefined)
                cleanup = true;
            for (var i = 0; i < __children.length; i++) {
                var node = __children[i];
                if (node) {
                    if (this._running) {
                        node.onExitTransitionDidStart();
                        node.onExit();
                    }
                    if (cleanup)
                        node.cleanup();
                    node.parent = null;
                    node._renderCmd.detachFromParent();
                }
            }
            this._children.length = 0;
            cc.renderer.childrenOrderDirty = true;
        }
    },
    _detachChild: function (child, doCleanup) {
        if (this._running) {
            child.onExitTransitionDidStart();
            child.onExit();
        }
        if (doCleanup)
            child.cleanup();
        child.parent = null;
        child._renderCmd.detachFromParent();
        cc.arrayRemoveObject(this._children, child);
    },
    _insertChild: function (child, z) {
        cc.renderer.childrenOrderDirty = this._reorderChildDirty = true;
        this._children.push(child);
        child._setLocalZOrder(z);
    },
    setNodeDirty: function(){
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    reorderChild: function (child, zOrder) {
        cc.assert(child, cc._LogInfos.Node_reorderChild);
        cc.renderer.childrenOrderDirty = this._reorderChildDirty = true;
        child.arrivalOrder = cc.s_globalOrderOfArrival;
        cc.s_globalOrderOfArrival++;
        child._setLocalZOrder(zOrder);
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.orderDirty);
    },
    sortAllChildren: function () {
        if (this._reorderChildDirty) {
            var _children = this._children;
            var len = _children.length, i, j, tmp;
            for(i=1; i<len; i++){
                tmp = _children[i];
                j = i - 1;
                while(j >= 0){
                    if(tmp._localZOrder < _children[j]._localZOrder){
                        _children[j+1] = _children[j];
                    }else if(tmp._localZOrder === _children[j]._localZOrder && tmp.arrivalOrder < _children[j].arrivalOrder){
                        _children[j+1] = _children[j];
                    }else{
                        break;
                    }
                    j--;
                }
                _children[j+1] = tmp;
            }
            this._reorderChildDirty = false;
        }
    },
    draw: function (ctx) {
    },
    transformAncestors: function () {
        if (this._parent !== null) {
            this._parent.transformAncestors();
            this._parent.transform();
        }
    },
    onEnter: function () {
        this._isTransitionFinished = false;
        this._running = true;//should be running before resumeSchedule
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.onEnter);
        this.resume();
    },
    onEnterTransitionDidFinish: function () {
        this._isTransitionFinished = true;
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.onEnterTransitionDidFinish);
    },
    onExitTransitionDidStart: function () {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.onExitTransitionDidStart);
    },
    onExit: function () {
        this._running = false;
        this.pause();
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.onExit);
        this.removeAllComponents();
    },
    runAction: function (action) {
        cc.assert(action, cc._LogInfos.Node_runAction);
        this.actionManager.addAction(action, this, !this._running);
        return action;
    },
    stopAllActions: function () {
        this.actionManager && this.actionManager.removeAllActionsFromTarget(this);
    },
    stopAction: function (action) {
        this.actionManager.removeAction(action);
    },
    stopActionByTag: function (tag) {
        if (tag === cc.ACTION_TAG_INVALID) {
            cc.log(cc._LogInfos.Node_stopActionByTag);
            return;
        }
        this.actionManager.removeActionByTag(tag, this);
    },
    getActionByTag: function (tag) {
        if (tag === cc.ACTION_TAG_INVALID) {
            cc.log(cc._LogInfos.Node_getActionByTag);
            return null;
        }
        return this.actionManager.getActionByTag(tag, this);
    },
    getNumberOfRunningActions: function () {
        return this.actionManager.numberOfRunningActionsInTarget(this);
    },
    scheduleUpdate: function () {
        this.scheduleUpdateWithPriority(0);
    },
    scheduleUpdateWithPriority: function (priority) {
        this.scheduler.scheduleUpdate(this, priority, !this._running);
    },
    unscheduleUpdate: function () {
        this.scheduler.unscheduleUpdate(this);
    },
    schedule: function (callback, interval, repeat, delay, key) {
        var len = arguments.length;
        if(typeof callback === "function"){
            if(len === 1){
                interval = 0;
                repeat = cc.REPEAT_FOREVER;
                delay = 0;
                key = this.__instanceId;
            }else if(len === 2){
                if(typeof interval === "number"){
                    repeat = cc.REPEAT_FOREVER;
                    delay = 0;
                    key = this.__instanceId;
                }else{
                    key = interval;
                    interval = 0;
                    repeat = cc.REPEAT_FOREVER;
                    delay = 0;
                }
            }else if(len === 3){
                if(typeof repeat === "string"){
                    key = repeat;
                    repeat = cc.REPEAT_FOREVER;
                }else{
                    key = this.__instanceId;
                }
                delay = 0;
            }else if(len === 4){
                key = this.__instanceId;
            }
        }else{
            if(len === 1){
                interval = 0;
                repeat = cc.REPEAT_FOREVER;
                delay = 0;
            }else if(len === 2){
                repeat = cc.REPEAT_FOREVER;
                delay = 0;
            }
        }
        cc.assert(callback, cc._LogInfos.Node_schedule);
        cc.assert(interval >= 0, cc._LogInfos.Node_schedule_2);
        interval = interval || 0;
        repeat = (repeat == null) ? cc.REPEAT_FOREVER : repeat;
        delay = delay || 0;
        this.scheduler.schedule(callback, this, interval, repeat, delay, !this._running, key);
    },
    scheduleOnce: function (callback, delay, key) {
        if(key === undefined)
            key = this.__instanceId;
        this.schedule(callback, 0, 0, delay, key);
    },
    unschedule: function (callback_fn) {
        if (!callback_fn)
            return;
        this.scheduler.unschedule(callback_fn, this);
    },
    unscheduleAllCallbacks: function () {
        this.scheduler.unscheduleAllForTarget(this);
    },
    resumeSchedulerAndActions: function () {
        cc.log(cc._LogInfos.Node_resumeSchedulerAndActions);
        this.resume();
    },
    resume: function () {
        this.scheduler.resumeTarget(this);
        this.actionManager && this.actionManager.resumeTarget(this);
        cc.eventManager.resumeTarget(this);
    },
    pauseSchedulerAndActions: function () {
        cc.log(cc._LogInfos.Node_pauseSchedulerAndActions);
        this.pause();
    },
    pause: function () {
        this.scheduler.pauseTarget(this);
        this.actionManager && this.actionManager.pauseTarget(this);
        cc.eventManager.pauseTarget(this);
    },
    setAdditionalTransform: function (additionalTransform) {
        if(additionalTransform === undefined)
            return this._additionalTransformDirty = false;
        this._additionalTransform = additionalTransform;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        this._additionalTransformDirty = true;
    },
    getParentToNodeTransform: function () {
       return this._renderCmd.getParentToNodeTransform();
    },
    parentToNodeTransform: function () {
        return this.getParentToNodeTransform();
    },
    getNodeToWorldTransform: function () {
        var t = this.getNodeToParentTransform();
        for (var p = this._parent; p !== null; p = p.parent)
            t = cc.affineTransformConcat(t, p.getNodeToParentTransform());
        return t;
    },
    nodeToWorldTransform: function(){
        return this.getNodeToWorldTransform();
    },
    getWorldToNodeTransform: function () {
        return cc.affineTransformInvert(this.getNodeToWorldTransform());
    },
    worldToNodeTransform: function () {
        return this.getWorldToNodeTransform();
    },
    convertToNodeSpace: function (worldPoint) {
        return cc.pointApplyAffineTransform(worldPoint, this.getWorldToNodeTransform());
    },
    convertToWorldSpace: function (nodePoint) {
        nodePoint = nodePoint || cc.p(0,0);
        return cc.pointApplyAffineTransform(nodePoint, this.getNodeToWorldTransform());
    },
    convertToNodeSpaceAR: function (worldPoint) {
        return cc.pSub(this.convertToNodeSpace(worldPoint), this._renderCmd.getAnchorPointInPoints());
    },
    convertToWorldSpaceAR: function (nodePoint) {
        nodePoint = nodePoint || cc.p(0,0);
        var pt = cc.pAdd(nodePoint, this._renderCmd.getAnchorPointInPoints());
        return this.convertToWorldSpace(pt);
    },
    _convertToWindowSpace: function (nodePoint) {
        var worldPoint = this.convertToWorldSpace(nodePoint);
        return cc.director.convertToUI(worldPoint);
    },
    convertTouchToNodeSpace: function (touch) {
        var point = touch.getLocation();
        return this.convertToNodeSpace(point);
    },
    convertTouchToNodeSpaceAR: function (touch) {
        var point = cc.director.convertToGL(touch.getLocation());
        return this.convertToNodeSpaceAR(point);
    },
    update: function (dt) {
        if (this._componentContainer && !this._componentContainer.isEmpty())
            this._componentContainer.visit(dt);
    },
    updateTransform: function () {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node._stateCallbackType.updateTransform);
    },
    retain: function () {
    },
    release: function () {
    },
    getComponent: function (name) {
        if(this._componentContainer)
            return this._componentContainer.getComponent(name);
        return null;
    },
    addComponent: function (component) {
        if(this._componentContainer)
            this._componentContainer.add(component);
    },
    removeComponent: function (component) {
        if(this._componentContainer)
            return this._componentContainer.remove(component);
        return false;
    },
    removeAllComponents: function () {
        if(this._componentContainer)
            this._componentContainer.removeAll();
    },
    grid: null,
    visit: function(parentCmd){
        this._renderCmd.visit(parentCmd);
    },
    transform: function(parentCmd, recursive){
        this._renderCmd.transform(parentCmd, recursive);
    },
    nodeToParentTransform: function(){
        return this.getNodeToParentTransform();
    },
    getNodeToParentTransform: function(ancestor){
        var t = this._renderCmd.getNodeToParentTransform();
        if(ancestor){
            var T = {a: t.a, b: t.b, c: t.c, d: t.d, tx: t.tx, ty: t.ty};
            for(var p = this._parent;  p != null && p != ancestor ; p = p.getParent()){
                cc.affineTransformConcatIn(T, p.getNodeToParentTransform());
            }
            return T;
        }else{
            return t;
        }
    },
    getNodeToParentAffineTransform: function(ancestor){
        return this.getNodeToParentTransform(ancestor);
    },
    getCamera: function () {
        return null;
    },
    getGrid: function () {
        return this.grid;
    },
    setGrid: function (grid) {
        this.grid = grid;
    },
    getShaderProgram: function () {
        return this._renderCmd.getShaderProgram();
    },
    setShaderProgram: function (newShaderProgram) {
        this._renderCmd.setShaderProgram(newShaderProgram);
    },
    getGLServerState: function () {
        return 0;
    },
    setGLServerState: function (state) {
    },
    getBoundingBoxToWorld: function () {
        var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        var trans = this.getNodeToWorldTransform();
        rect = cc.rectApplyAffineTransform(rect, trans);
        if (!this._children)
            return rect;
        var locChildren = this._children;
        for (var i = 0; i < locChildren.length; i++) {
            var child = locChildren[i];
            if (child && child._visible) {
                var childRect = child._getBoundingBoxToCurrentNode(trans);
                if (childRect)
                    rect = cc.rectUnion(rect, childRect);
            }
        }
        return rect;
    },
    _getBoundingBoxToCurrentNode: function (parentTransform) {
        var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        var trans = (parentTransform === undefined) ? this.getNodeToParentTransform() : cc.affineTransformConcat(this.getNodeToParentTransform(), parentTransform);
        rect = cc.rectApplyAffineTransform(rect, trans);
        if (!this._children)
            return rect;
        var locChildren = this._children;
        for (var i = 0; i < locChildren.length; i++) {
            var child = locChildren[i];
            if (child && child._visible) {
                var childRect = child._getBoundingBoxToCurrentNode(trans);
                if (childRect)
                    rect = cc.rectUnion(rect, childRect);
            }
        }
        return rect;
    },
    getOpacity: function () {
        return this._realOpacity;
    },
    getDisplayedOpacity: function () {
        return this._renderCmd.getDisplayedOpacity();
    },
    setOpacity: function (opacity) {
        this._realOpacity = opacity;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty);
    },
    updateDisplayedOpacity: function (parentOpacity) {
        this._renderCmd._updateDisplayOpacity(parentOpacity);
    },
    isCascadeOpacityEnabled: function () {
        return this._cascadeOpacityEnabled;
    },
    setCascadeOpacityEnabled: function (cascadeOpacityEnabled) {
        if (this._cascadeOpacityEnabled === cascadeOpacityEnabled)
            return;
        this._cascadeOpacityEnabled = cascadeOpacityEnabled;
        this._renderCmd.setCascadeOpacityEnabledDirty();
    },
    getColor: function () {
        var locRealColor = this._realColor;
        return cc.color(locRealColor.r, locRealColor.g, locRealColor.b, locRealColor.a);
    },
    getDisplayedColor: function () {
        return this._renderCmd.getDisplayedColor();
    },
    setColor: function (color) {
        var locRealColor = this._realColor;
        locRealColor.r = color.r;
        locRealColor.g = color.g;
        locRealColor.b = color.b;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty);
    },
    updateDisplayedColor: function (parentColor) {
        this._renderCmd._updateDisplayColor(parentColor);
    },
    isCascadeColorEnabled: function () {
        return this._cascadeColorEnabled;
    },
    setCascadeColorEnabled: function (cascadeColorEnabled) {
        if (this._cascadeColorEnabled === cascadeColorEnabled)
            return;
        this._cascadeColorEnabled = cascadeColorEnabled;
        this._renderCmd.setCascadeColorEnabledDirty();
    },
    setOpacityModifyRGB: function (opacityValue) {
    },
    isOpacityModifyRGB: function () {
        return false;
    },
    _initRendererCmd: function(){
        this._renderCmd = cc.renderer.getRenderCmd(this);
    },
    _createRenderCmd: function(){
        if(cc._renderType === cc.game.RENDER_TYPE_CANVAS)
            return new cc.Node.CanvasRenderCmd(this);
        else
            return new cc.Node.WebGLRenderCmd(this);
    },
    enumerateChildren: function(name, callback){
        cc.assert(name && name.length != 0, "Invalid name");
        cc.assert(callback != null, "Invalid callback function");
        var length = name.length;
        var subStrStartPos = 0;
        var subStrlength = length;
        var searchRecursively = false;
        if(length > 2 && name[0] === "/" && name[1] === "/"){
            searchRecursively = true;
            subStrStartPos = 2;
            subStrlength -= 2;
        }
        var searchFromParent = false;
        if(length > 3 && name[length-3] === "/" && name[length-2] === "." && name[length-1] === "."){
            searchFromParent = true;
            subStrlength -= 3;
        }
        var newName = name.substr(subStrStartPos, subStrlength);
        if(searchFromParent)
            newName = "[[:alnum:]]+/" + newName;
        if(searchRecursively)
            this.doEnumerateRecursive(this, newName, callback);
        else
            this.doEnumerate(newName, callback);
    },
    doEnumerateRecursive: function(node, name, callback){
        var ret = false;
        if(node.doEnumerate(name,callback)){
            ret = true;
        }else{
            var child,
                children = node.getChildren(),
                length = children.length;
            for (var i=0; i<length; i++) {
                child = children[i];
                if (this.doEnumerateRecursive(child, name, callback)) {
                    ret = true;
                    break;
                }
            }
        }
    },
    doEnumerate: function(name, callback){
        var pos = name.indexOf('/');
        var searchName = name;
        var needRecursive = false;
        if (pos !== -1){
            searchName = name.substr(0, pos);
            needRecursive = true;
        }
        var ret = false;
        var child,
            children = this._children,
            length = children.length;
        for (var i=0; i<length; i++){
            child = children[i];
            if (child._name.indexOf(searchName) !== -1){
                if (!needRecursive){
                    if (callback(child)){
                        ret = true;
                        break;
                    }
                }else{
                    ret = child.doEnumerate(name, callback);
                    if (ret)
                        break;
                }
            }
        }
        return ret;
    }
});
cc.Node.create = function () {
    return new cc.Node();
};
cc.Node._stateCallbackType = {onEnter: 1, onExit: 2, cleanup: 3, onEnterTransitionDidFinish: 4, updateTransform: 5, onExitTransitionDidStart: 6, sortAllChildren: 7};
cc.assert(cc.isFunction(cc._tmp.PrototypeCCNode), cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNode();
delete cc._tmp.PrototypeCCNode;
cc.CustomRenderCmd = function (target, func) {
    this._needDraw = true;
    this._target = target;
    this._callback = func;
    this.rendering = function (ctx, scaleX, scaleY) {
        if (!this._callback)
            return;
        this._callback.call(this._target, ctx, scaleX, scaleY);
    };
    this.needDraw = function () {
        return this._needDraw;
    };
};
cc.Node._dirtyFlags = {
    transformDirty: 1 << 0, visibleDirty: 1 << 1, colorDirty: 1 << 2, opacityDirty: 1 << 3, cacheDirty: 1 << 4,
    orderDirty: 1 << 5, textDirty: 1 << 6, gradientDirty: 1 << 7, textureDirty: 1 << 8,
    contentDirty: 1 << 9,
    COUNT: 10,
    all: (1 << 10) - 1
};
cc.Node.RenderCmd = function (renderable) {
    this._dirtyFlag = 1;
    this._savedDirtyFlag = true;
    this._node = renderable;
    this._needDraw = false;
    this._anchorPointInPoints = new cc.Point(0, 0);
    this._transform = {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0};
    this._worldTransform = {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0};
    this._inverse = {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0};
    this._displayedOpacity = 255;
    this._displayedColor = cc.color(255, 255, 255, 255);
    this._cascadeColorEnabledDirty = false;
    this._cascadeOpacityEnabledDirty = false;
    this._curLevel = -1;
};
cc.Node.RenderCmd.prototype = {
    constructor: cc.Node.RenderCmd,
    needDraw: function () {
        return this._needDraw;
    },
    getAnchorPointInPoints: function () {
        return cc.p(this._anchorPointInPoints);
    },
    getDisplayedColor: function () {
        var tmpColor = this._displayedColor;
        return cc.color(tmpColor.r, tmpColor.g, tmpColor.b, tmpColor.a);
    },
    getDisplayedOpacity: function () {
        return this._displayedOpacity;
    },
    setCascadeColorEnabledDirty: function () {
        this._cascadeColorEnabledDirty = true;
        this.setDirtyFlag(cc.Node._dirtyFlags.colorDirty);
    },
    setCascadeOpacityEnabledDirty: function () {
        this._cascadeOpacityEnabledDirty = true;
        this.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty);
    },
    getParentToNodeTransform: function () {
        if (this._dirtyFlag & cc.Node._dirtyFlags.transformDirty)
            this._inverse = cc.affineTransformInvert(this.getNodeToParentTransform());
        return this._inverse;
    },
    detachFromParent: function () {
    },
    _updateAnchorPointInPoint: function () {
        var locAPP = this._anchorPointInPoints, locSize = this._node._contentSize, locAnchorPoint = this._node._anchorPoint;
        locAPP.x = locSize.width * locAnchorPoint.x;
        locAPP.y = locSize.height * locAnchorPoint.y;
        this.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    setDirtyFlag: function (dirtyFlag) {
        if (this._dirtyFlag === 0 && dirtyFlag !== 0)
            cc.renderer.pushDirtyNode(this);
        this._dirtyFlag |= dirtyFlag;
    },
    getParentRenderCmd: function () {
        if (this._node && this._node._parent && this._node._parent._renderCmd)
            return this._node._parent._renderCmd;
        return null;
    },
    transform: function (parentCmd, recursive) {
        var node = this._node,
            pt = parentCmd ? parentCmd._worldTransform : null,
            t = this._transform,
            wt = this._worldTransform;
        if (node._usingNormalizedPosition && node._parent) {
            var conSize = node._parent._contentSize;
            node._position.x = node._normalizedPosition.x * conSize.width;
            node._position.y = node._normalizedPosition.y * conSize.height;
            node._normalizedPositionDirty = false;
        }
        var hasRotation = node._rotationX || node._rotationY;
        var hasSkew = node._skewX || node._skewY;
        var sx = node._scaleX, sy = node._scaleY;
        var appX = this._anchorPointInPoints.x, appY = this._anchorPointInPoints.y;
        var a = 1, b = 0, c = 0, d = 1;
        if (hasRotation || hasSkew) {
            t.tx = node._position.x;
            t.ty = node._position.y;
            if (hasRotation) {
                var rotationRadiansX = node._rotationX * 0.017453292519943295;
                c = Math.sin(rotationRadiansX);
                d = Math.cos(rotationRadiansX);
                if (node._rotationY === node._rotationX) {
                    a = d;
                    b = -c;
                }
                else {
                    var rotationRadiansY = node._rotationY * 0.017453292519943295;
                    a = Math.cos(rotationRadiansY);
                    b = -Math.sin(rotationRadiansY);
                }
            }
            t.a = a *= sx;
            t.b = b *= sx;
            t.c = c *= sy;
            t.d = d *= sy;
            if (hasSkew) {
                var skx = Math.tan(node._skewX * Math.PI / 180);
                var sky = Math.tan(node._skewY * Math.PI / 180);
                if (skx === Infinity)
                    skx = 99999999;
                if (sky === Infinity)
                    sky = 99999999;
                t.a = a + c * sky;
                t.b = b + d * sky;
                t.c = c + a * skx;
                t.d = d + b * skx;
            }
            if (appX || appY) {
                t.tx -= t.a * appX + t.c * appY;
                t.ty -= t.b * appX + t.d * appY;
                if (node._ignoreAnchorPointForPosition) {
                    t.tx += appX;
                    t.ty += appY;
                }
            }
            if (pt) {
                wt.a = t.a * pt.a + t.b * pt.c;
                wt.b = t.a * pt.b + t.b * pt.d;
                wt.c = t.c * pt.a + t.d * pt.c;
                wt.d = t.c * pt.b + t.d * pt.d;
                wt.tx = pt.a * t.tx + pt.c * t.ty + pt.tx;
                wt.ty = pt.d * t.ty + pt.ty + pt.b * t.tx;
            } else {
                wt.a = t.a;
                wt.b = t.b;
                wt.c = t.c;
                wt.d = t.d;
                wt.tx = t.tx;
                wt.ty = t.ty;
            }
        }
        else {
            t.a = sx;
            t.b = 0;
            t.c = 0;
            t.d = sy;
            t.tx = node._position.x;
            t.ty = node._position.y;
            if (appX || appY) {
                t.tx -= t.a * appX;
                t.ty -= t.d * appY;
                if (node._ignoreAnchorPointForPosition) {
                    t.tx += appX;
                    t.ty += appY;
                }
            }
            if (pt) {
                wt.a = t.a * pt.a + t.b * pt.c;
                wt.b = t.a * pt.b + t.b * pt.d;
                wt.c = t.c * pt.a + t.d * pt.c;
                wt.d = t.c * pt.b + t.d * pt.d;
                wt.tx = t.tx * pt.a + t.ty * pt.c + pt.tx;
                wt.ty = t.tx * pt.b + t.ty * pt.d + pt.ty;
            } else {
                wt.a = t.a;
                wt.b = t.b;
                wt.c = t.c;
                wt.d = t.d;
                wt.tx = t.tx;
                wt.ty = t.ty;
            }
        }
        if (node._additionalTransformDirty) {
            this._transform = cc.affineTransformConcat(t, node._additionalTransform);
        }
        this._updateCurrentRegions && this._updateCurrentRegions();
        this._notifyRegionStatus && this._notifyRegionStatus(cc.Node.CanvasRenderCmd.RegionStatus.DirtyDouble);
        if (recursive) {
            var locChildren = this._node._children;
            if (!locChildren || locChildren.length === 0)
                return;
            var i, len;
            for (i = 0, len = locChildren.length; i < len; i++) {
                locChildren[i]._renderCmd.transform(this, recursive);
            }
        }
        this._cacheDirty = true;
    },
    getNodeToParentTransform: function () {
        if (this._dirtyFlag & cc.Node._dirtyFlags.transformDirty) {
            this.transform();
        }
        return this._transform;
    },
    visit: function (parentCmd) {
        var node = this._node, renderer = cc.renderer;
        if (!node._visible)
            return;
        parentCmd = parentCmd || this.getParentRenderCmd();
        if (parentCmd)
            this._curLevel = parentCmd._curLevel + 1;
        if (isNaN(node._customZ)) {
            node._vertexZ = renderer.assignedZ;
            renderer.assignedZ += renderer.assignedZStep;
        }
        this._syncStatus(parentCmd);
        this.visitChildren();
    },
    _updateDisplayColor: function (parentColor) {
        var node = this._node;
        var locDispColor = this._displayedColor, locRealColor = node._realColor;
        var i, len, selChildren, item;
        this._notifyRegionStatus && this._notifyRegionStatus(cc.Node.CanvasRenderCmd.RegionStatus.Dirty);
        if (this._cascadeColorEnabledDirty && !node._cascadeColorEnabled) {
            locDispColor.r = locRealColor.r;
            locDispColor.g = locRealColor.g;
            locDispColor.b = locRealColor.b;
            var whiteColor = new cc.Color(255, 255, 255, 255);
            selChildren = node._children;
            for (i = 0, len = selChildren.length; i < len; i++) {
                item = selChildren[i];
                if (item && item._renderCmd)
                    item._renderCmd._updateDisplayColor(whiteColor);
            }
            this._cascadeColorEnabledDirty = false;
        } else {
            if (parentColor === undefined) {
                var locParent = node._parent;
                if (locParent && locParent._cascadeColorEnabled)
                    parentColor = locParent.getDisplayedColor();
                else
                    parentColor = cc.color.WHITE;
            }
            locDispColor.r = 0 | (locRealColor.r * parentColor.r / 255.0);
            locDispColor.g = 0 | (locRealColor.g * parentColor.g / 255.0);
            locDispColor.b = 0 | (locRealColor.b * parentColor.b / 255.0);
            if (node._cascadeColorEnabled) {
                selChildren = node._children;
                for (i = 0, len = selChildren.length; i < len; i++) {
                    item = selChildren[i];
                    if (item && item._renderCmd) {
                        item._renderCmd._updateDisplayColor(locDispColor);
                        item._renderCmd._updateColor();
                    }
                }
            }
        }
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.colorDirty ^ this._dirtyFlag;
    },
    _updateDisplayOpacity: function (parentOpacity) {
        var node = this._node;
        var i, len, selChildren, item;
        this._notifyRegionStatus && this._notifyRegionStatus(cc.Node.CanvasRenderCmd.RegionStatus.Dirty);
        if (this._cascadeOpacityEnabledDirty && !node._cascadeOpacityEnabled) {
            this._displayedOpacity = node._realOpacity;
            selChildren = node._children;
            for (i = 0, len = selChildren.length; i < len; i++) {
                item = selChildren[i];
                if (item && item._renderCmd)
                    item._renderCmd._updateDisplayOpacity(255);
            }
            this._cascadeOpacityEnabledDirty = false;
        } else {
            if (parentOpacity === undefined) {
                var locParent = node._parent;
                parentOpacity = 255;
                if (locParent && locParent._cascadeOpacityEnabled)
                    parentOpacity = locParent.getDisplayedOpacity();
            }
            this._displayedOpacity = node._realOpacity * parentOpacity / 255.0;
            if (node._cascadeOpacityEnabled) {
                selChildren = node._children;
                for (i = 0, len = selChildren.length; i < len; i++) {
                    item = selChildren[i];
                    if (item && item._renderCmd) {
                        item._renderCmd._updateDisplayOpacity(this._displayedOpacity);
                        item._renderCmd._updateColor();
                    }
                }
            }
        }
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.opacityDirty ^ this._dirtyFlag;
    },
    _syncDisplayColor: function (parentColor) {
        var node = this._node, locDispColor = this._displayedColor, locRealColor = node._realColor;
        if (parentColor === undefined) {
            var locParent = node._parent;
            if (locParent && locParent._cascadeColorEnabled)
                parentColor = locParent.getDisplayedColor();
            else
                parentColor = cc.color.WHITE;
        }
        locDispColor.r = 0 | (locRealColor.r * parentColor.r / 255.0);
        locDispColor.g = 0 | (locRealColor.g * parentColor.g / 255.0);
        locDispColor.b = 0 | (locRealColor.b * parentColor.b / 255.0);
    },
    _syncDisplayOpacity: function (parentOpacity) {
        var node = this._node;
        if (parentOpacity === undefined) {
            var locParent = node._parent;
            parentOpacity = 255;
            if (locParent && locParent._cascadeOpacityEnabled)
                parentOpacity = locParent.getDisplayedOpacity();
        }
        this._displayedOpacity = node._realOpacity * parentOpacity / 255.0;
    },
    _updateColor: function () {
    },
    updateStatus: function () {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        var colorDirty = locFlag & flags.colorDirty,
            opacityDirty = locFlag & flags.opacityDirty;
        this._savedDirtyFlag = this._savedDirtyFlag || locFlag;
        if (colorDirty)
            this._updateDisplayColor();
        if (opacityDirty)
            this._updateDisplayOpacity();
        if (colorDirty || opacityDirty)
            this._updateColor();
        if (locFlag & flags.transformDirty) {
            this.transform(this.getParentRenderCmd(), true);
            this._dirtyFlag = this._dirtyFlag & flags.transformDirty ^ this._dirtyFlag;
        }
        if (locFlag & flags.orderDirty)
            this._dirtyFlag = this._dirtyFlag & flags.orderDirty ^ this._dirtyFlag;
    },
    _syncStatus: function (parentCmd) {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag, parentNode = null;
        if (parentCmd) {
            parentNode = parentCmd._node;
            this._savedDirtyFlag = this._savedDirtyFlag || parentCmd._savedDirtyFlag || locFlag;
        }
        else {
            this._savedDirtyFlag = this._savedDirtyFlag || locFlag;
        }
        if (parentNode && parentNode._cascadeColorEnabled && (parentCmd._dirtyFlag & flags.colorDirty))
            locFlag |= flags.colorDirty;
        if (parentNode && parentNode._cascadeOpacityEnabled && (parentCmd._dirtyFlag & flags.opacityDirty))
            locFlag |= flags.opacityDirty;
        if (parentCmd && (parentCmd._dirtyFlag & flags.transformDirty))
            locFlag |= flags.transformDirty;
        var colorDirty = locFlag & flags.colorDirty,
            opacityDirty = locFlag & flags.opacityDirty;
        this._dirtyFlag = locFlag;
        if (colorDirty)
            this._syncDisplayColor();
        if (opacityDirty)
            this._syncDisplayOpacity();
        if (colorDirty || opacityDirty)
            this._updateColor();
        if (locFlag & flags.transformDirty)
            this.transform(parentCmd);
        if (locFlag & flags.orderDirty)
            this._dirtyFlag = this._dirtyFlag & flags.orderDirty ^ this._dirtyFlag;
    },
    visitChildren: function () {
        var renderer = cc.renderer;
        var node = this._node;
        var i, children = node._children, child;
        var len = children.length;
        if (len > 0) {
            node.sortAllChildren();
            for (i = 0; i < len; i++) {
                child = children[i];
                if (child._localZOrder < 0) {
                    child._renderCmd.visit(this);
                }
                else {
                    break;
                }
            }
            renderer.pushRenderCommand(this);
            for (; i < len; i++) {
                children[i]._renderCmd.visit(this);
            }
        } else {
            renderer.pushRenderCommand(this);
        }
        this._dirtyFlag = 0;
    }
};
cc.Node.RenderCmd.prototype.originVisit = cc.Node.RenderCmd.prototype.visit;
cc.Node.RenderCmd.prototype.originTransform = cc.Node.RenderCmd.prototype.transform;
(function () {
    cc.Node.CanvasRenderCmd = function (renderable) {
        cc.Node.RenderCmd.call(this, renderable);
        this._cachedParent = null;
        this._cacheDirty = false;
        this._currentRegion = new cc.Region();
        this._oldRegion = new cc.Region();
        this._regionFlag = 0;
        this._canUseDirtyRegion = false;
    };
    cc.Node.CanvasRenderCmd.RegionStatus = {
        NotDirty: 0,
        Dirty: 1,
        DirtyDouble: 2
    };
    var proto = cc.Node.CanvasRenderCmd.prototype = Object.create(cc.Node.RenderCmd.prototype);
    proto.constructor = cc.Node.CanvasRenderCmd;
    proto._notifyRegionStatus = function (status) {
        if (this._needDraw && this._regionFlag < status) {
            this._regionFlag = status;
        }
    };
    var localBB = new cc.Rect();
    proto.getLocalBB = function () {
        var node = this._node;
        localBB.x = localBB.y = 0;
        localBB.width = node._contentSize.width;
        localBB.height = node._contentSize.height;
        return localBB;
    };
    proto._updateCurrentRegions = function () {
        var temp = this._currentRegion;
        this._currentRegion = this._oldRegion;
        this._oldRegion = temp;
        if (cc.Node.CanvasRenderCmd.RegionStatus.DirtyDouble === this._regionFlag && (!this._currentRegion.isEmpty())) {
            this._oldRegion.union(this._currentRegion);
        }
        this._currentRegion.updateRegion(this.getLocalBB(), this._worldTransform);
    };
    proto.setDirtyFlag = function (dirtyFlag, child) {
        cc.Node.RenderCmd.prototype.setDirtyFlag.call(this, dirtyFlag, child);
        this._setCacheDirty(child);
        if (this._cachedParent)
            this._cachedParent.setDirtyFlag(dirtyFlag, true);
    };
    proto._setCacheDirty = function () {
        if (this._cacheDirty === false) {
            this._cacheDirty = true;
            var cachedP = this._cachedParent;
            cachedP && cachedP !== this && cachedP._setNodeDirtyForCache && cachedP._setNodeDirtyForCache();
        }
    };
    proto._setCachedParent = function (cachedParent) {
        if (this._cachedParent === cachedParent)
            return;
        this._cachedParent = cachedParent;
        var children = this._node._children;
        for (var i = 0, len = children.length; i < len; i++)
            children[i]._renderCmd._setCachedParent(cachedParent);
    };
    proto.detachFromParent = function () {
        this._cachedParent = null;
        var selChildren = this._node._children, item;
        for (var i = 0, len = selChildren.length; i < len; i++) {
            item = selChildren[i];
            if (item && item._renderCmd)
                item._renderCmd.detachFromParent();
        }
    };
    proto.setShaderProgram = function (shaderProgram) {
    };
    proto.getShaderProgram = function () {
        return null;
    };
    cc.Node.CanvasRenderCmd._getCompositeOperationByBlendFunc = function (blendFunc) {
        if (!blendFunc)
            return "source-over";
        else {
            if (( blendFunc.src === cc.SRC_ALPHA && blendFunc.dst === cc.ONE) || (blendFunc.src === cc.ONE && blendFunc.dst === cc.ONE))
                return "lighter";
            else if (blendFunc.src === cc.ZERO && blendFunc.dst === cc.SRC_ALPHA)
                return "destination-in";
            else if (blendFunc.src === cc.ZERO && blendFunc.dst === cc.ONE_MINUS_SRC_ALPHA)
                return "destination-out";
            else
                return "source-over";
        }
    };
})();
cc._tmp.PrototypeTexture2D = function () {
    var _c = cc.Texture2D;
    _c.PVRImagesHavePremultipliedAlpha = function (haveAlphaPremultiplied) {
        cc.PVRHaveAlphaPremultiplied_ = haveAlphaPremultiplied;
    };
    _c.PIXEL_FORMAT_RGBA8888 = 2;
    _c.PIXEL_FORMAT_RGB888 = 3;
    _c.PIXEL_FORMAT_RGB565 = 4;
    _c.PIXEL_FORMAT_A8 = 5;
    _c.PIXEL_FORMAT_I8 = 6;
    _c.PIXEL_FORMAT_AI88 = 7;
    _c.PIXEL_FORMAT_RGBA4444 = 8;
    _c.PIXEL_FORMAT_RGB5A1 = 7;
    _c.PIXEL_FORMAT_PVRTC4 = 9;
    _c.PIXEL_FORMAT_PVRTC2 = 10;
    _c.PIXEL_FORMAT_DEFAULT = _c.PIXEL_FORMAT_RGBA8888;
    _c.defaultPixelFormat = _c.PIXEL_FORMAT_DEFAULT;
    var _M = cc.Texture2D._M = {};
    _M[_c.PIXEL_FORMAT_RGBA8888] = "RGBA8888";
    _M[_c.PIXEL_FORMAT_RGB888] = "RGB888";
    _M[_c.PIXEL_FORMAT_RGB565] = "RGB565";
    _M[_c.PIXEL_FORMAT_A8] = "A8";
    _M[_c.PIXEL_FORMAT_I8] = "I8";
    _M[_c.PIXEL_FORMAT_AI88] = "AI88";
    _M[_c.PIXEL_FORMAT_RGBA4444] = "RGBA4444";
    _M[_c.PIXEL_FORMAT_RGB5A1] = "RGB5A1";
    _M[_c.PIXEL_FORMAT_PVRTC4] = "PVRTC4";
    _M[_c.PIXEL_FORMAT_PVRTC2] = "PVRTC2";
    var _B = cc.Texture2D._B = {};
    _B[_c.PIXEL_FORMAT_RGBA8888] = 32;
    _B[_c.PIXEL_FORMAT_RGB888] = 24;
    _B[_c.PIXEL_FORMAT_RGB565] = 16;
    _B[_c.PIXEL_FORMAT_A8] = 8;
    _B[_c.PIXEL_FORMAT_I8] = 8;
    _B[_c.PIXEL_FORMAT_AI88] = 16;
    _B[_c.PIXEL_FORMAT_RGBA4444] = 16;
    _B[_c.PIXEL_FORMAT_RGB5A1] = 16;
    _B[_c.PIXEL_FORMAT_PVRTC4] = 4;
    _B[_c.PIXEL_FORMAT_PVRTC2] = 3;
    var _p = cc.Texture2D.prototype;
    _p.name;
    cc.defineGetterSetter(_p, "name", _p.getName);
    _p.pixelFormat;
    cc.defineGetterSetter(_p, "pixelFormat", _p.getPixelFormat);
    _p.pixelsWidth;
    cc.defineGetterSetter(_p, "pixelsWidth", _p.getPixelsWide);
    _p.pixelsHeight;
    cc.defineGetterSetter(_p, "pixelsHeight", _p.getPixelsHigh);
    _p.width;
    cc.defineGetterSetter(_p, "width", _p._getWidth);
    _p.height;
    cc.defineGetterSetter(_p, "height", _p._getHeight);
};
cc._tmp.PrototypeTextureAtlas = function () {
    var _p = cc.TextureAtlas.prototype;
    _p.totalQuads;
    cc.defineGetterSetter(_p, "totalQuads", _p.getTotalQuads);
    _p.capacity;
    cc.defineGetterSetter(_p, "capacity", _p.getCapacity);
    _p.quads;
    cc.defineGetterSetter(_p, "quads", _p.getQuads, _p.setQuads);
};
cc._tmp.WebGLTexture2D = function () {
    cc.Texture2D = cc.Class.extend({
        _pVRHaveAlphaPremultiplied: true,
        _pixelFormat: null,
        _pixelsWide: 0,
        _pixelsHigh: 0,
        _name: "",
        _contentSize: null,
        maxS: 0,
        maxT: 0,
        _hasPremultipliedAlpha: false,
        _hasMipmaps: false,
        shaderProgram: null,
        _textureLoaded: false,
        _htmlElementObj: null,
        _webTextureObj: null,
        url: null,
        ctor: function () {
            this._contentSize = cc.size(0, 0);
            this._pixelFormat = cc.Texture2D.defaultPixelFormat;
        },
        releaseTexture: function () {
            if (this._webTextureObj)
                cc._renderContext.deleteTexture(this._webTextureObj);
            cc.loader.release(this.url);
        },
        getPixelFormat: function () {
            return this._pixelFormat;
        },
        getPixelsWide: function () {
            return this._pixelsWide;
        },
        getPixelsHigh: function () {
            return this._pixelsHigh;
        },
        getName: function () {
            return this._webTextureObj;
        },
        getContentSize: function () {
            return cc.size(this._contentSize.width / cc.contentScaleFactor(), this._contentSize.height / cc.contentScaleFactor());
        },
        _getWidth: function () {
            return this._contentSize.width / cc.contentScaleFactor();
        },
        _getHeight: function () {
            return this._contentSize.height / cc.contentScaleFactor();
        },
        getContentSizeInPixels: function () {
            return this._contentSize;
        },
        getMaxS: function () {
            return this.maxS;
        },
        setMaxS: function (maxS) {
            this.maxS = maxS;
        },
        getMaxT: function () {
            return this.maxT;
        },
        setMaxT: function (maxT) {
            this.maxT = maxT;
        },
        getShaderProgram: function () {
            return this.shaderProgram;
        },
        setShaderProgram: function (shaderProgram) {
            this.shaderProgram = shaderProgram;
        },
        hasPremultipliedAlpha: function () {
            return this._hasPremultipliedAlpha;
        },
        hasMipmaps: function () {
            return this._hasMipmaps;
        },
        description: function () {
            var _t = this;
            return "<cc.Texture2D | Name = " + _t._name + " | Dimensions = " + _t._pixelsWide + " x " + _t._pixelsHigh
                + " | Coordinates = (" + _t.maxS + ", " + _t.maxT + ")>";
        },
        releaseData: function (data) {
            data = null;
        },
        keepData: function (data, length) {
            return data;
        },
        initWithData: function (data, pixelFormat, pixelsWide, pixelsHigh, contentSize) {
            var self = this, tex2d = cc.Texture2D;
            var gl = cc._renderContext;
            var format = gl.RGBA, type = gl.UNSIGNED_BYTE;
            var bitsPerPixel = cc.Texture2D._B[pixelFormat];
            var bytesPerRow = pixelsWide * bitsPerPixel / 8;
            if (bytesPerRow % 8 === 0) {
                gl.pixelStorei(gl.UNPACK_ALIGNMENT, 8);
            } else if (bytesPerRow % 4 === 0) {
                gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
            } else if (bytesPerRow % 2 === 0) {
                gl.pixelStorei(gl.UNPACK_ALIGNMENT, 2);
            } else {
                gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
            }
            self._webTextureObj = gl.createTexture();
            cc.glBindTexture2D(self);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            switch (pixelFormat) {
                case tex2d.PIXEL_FORMAT_RGBA8888:
                    format = gl.RGBA;
                    break;
                case tex2d.PIXEL_FORMAT_RGB888:
                    format = gl.RGB;
                    break;
                case tex2d.PIXEL_FORMAT_RGBA4444:
                    type = gl.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case tex2d.PIXEL_FORMAT_RGB5A1:
                    type = gl.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case tex2d.PIXEL_FORMAT_RGB565:
                    type = gl.UNSIGNED_SHORT_5_6_5;
                    break;
                case tex2d.PIXEL_FORMAT_AI88:
                    format = gl.LUMINANCE_ALPHA;
                    break;
                case tex2d.PIXEL_FORMAT_A8:
                    format = gl.ALPHA;
                    break;
                case tex2d.PIXEL_FORMAT_I8:
                    format = gl.LUMINANCE;
                    break;
                default:
                    cc.assert(0, cc._LogInfos.Texture2D_initWithData);
            }
            gl.texImage2D(gl.TEXTURE_2D, 0, format, pixelsWide, pixelsHigh, 0, format, type, data);
            self._contentSize.width = contentSize.width;
            self._contentSize.height = contentSize.height;
            self._pixelsWide = pixelsWide;
            self._pixelsHigh = pixelsHigh;
            self._pixelFormat = pixelFormat;
            self.maxS = contentSize.width / pixelsWide;
            self.maxT = contentSize.height / pixelsHigh;
            self._hasPremultipliedAlpha = false;
            self._hasMipmaps = false;
            self.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE);
            self._textureLoaded = true;
            return true;
        },
        drawAtPoint: function (point) {
            var self = this;
            var coordinates = [
                0.0, self.maxT,
                self.maxS, self.maxT,
                0.0, 0.0,
                self.maxS, 0.0 ],
                gl = cc._renderContext;
            var width = self._pixelsWide * self.maxS,
                height = self._pixelsHigh * self.maxT;
            var vertices = [
                point.x, point.y, 0.0,
                width + point.x, point.y, 0.0,
                point.x, height + point.y, 0.0,
                width + point.x, height + point.y, 0.0 ];
            self._shaderProgram.use();
            self._shaderProgram.setUniformsForBuiltins();
            cc.glBindTexture2D(self);
            gl.enableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION);
            gl.enableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS);
            gl.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, gl.FLOAT, false, 0, vertices);
            gl.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, gl.FLOAT, false, 0, coordinates);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        },
        drawInRect: function (rect) {
            var self = this;
            var coordinates = [
                0.0, self.maxT,
                self.maxS, self.maxT,
                0.0, 0.0,
                self.maxS, 0.0];
            var vertices = [    rect.x, rect.y,
                rect.x + rect.width, rect.y,
                rect.x, rect.y + rect.height,
                rect.x + rect.width, rect.y + rect.height         ];
            self._shaderProgram.use();
            self._shaderProgram.setUniformsForBuiltins();
            cc.glBindTexture2D(self);
            var gl = cc._renderContext;
            gl.enableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION);
            gl.enableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS);
            gl.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, gl.FLOAT, false, 0, vertices);
            gl.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, gl.FLOAT, false, 0, coordinates);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        },
        initWithImage: function (uiImage) {
            if (uiImage == null) {
                cc.log(cc._LogInfos.Texture2D_initWithImage);
                return false;
            }
            var imageWidth = uiImage.getWidth();
            var imageHeight = uiImage.getHeight();
            var maxTextureSize = cc.configuration.getMaxTextureSize();
            if (imageWidth > maxTextureSize || imageHeight > maxTextureSize) {
                cc.log(cc._LogInfos.Texture2D_initWithImage_2, imageWidth, imageHeight, maxTextureSize, maxTextureSize);
                return false;
            }
            this._textureLoaded = true;
            return this._initPremultipliedATextureWithImage(uiImage, imageWidth, imageHeight);
        },
        initWithElement: function (element) {
            if (!element)
                return;
            this._webTextureObj = cc._renderContext.createTexture();
            this._htmlElementObj = element;
            this._textureLoaded = true;
            this._hasPremultipliedAlpha = true;
        },
        getHtmlElementObj: function () {
            return this._htmlElementObj;
        },
        isLoaded: function () {
            return this._textureLoaded;
        },
        handleLoadedTexture: function (premultiplied) {
            var self = this;
            premultiplied =
              (premultiplied !== undefined)
                ? premultiplied
                : self._hasPremultipliedAlpha;
            if (!cc.game._rendererInitialized)
                return;
            if (!self._htmlElementObj) {
                var img = cc.loader.getRes(self.url);
                if (!img) return;
                self.initWithElement(img);
            }
            if (!self._htmlElementObj.width || !self._htmlElementObj.height)
                return;
            var gl = cc._renderContext;
            cc.glBindTexture2D(self);
            gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
            if(premultiplied)
                gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self._htmlElementObj);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            self.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE);
            cc.glBindTexture2D(null);
            if(premultiplied)
                gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
            var pixelsWide = self._htmlElementObj.width;
            var pixelsHigh = self._htmlElementObj.height;
            self._pixelsWide = self._contentSize.width = pixelsWide;
            self._pixelsHigh = self._contentSize.height = pixelsHigh;
            self._pixelFormat = cc.Texture2D.PIXEL_FORMAT_RGBA8888;
            self.maxS = 1;
            self.maxT = 1;
            self._hasPremultipliedAlpha = premultiplied;
            self._hasMipmaps = false;
            self.dispatchEvent("load");
        },
        initWithString: function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
            cc.log(cc._LogInfos.Texture2D_initWithString);
            return null;
        },
        initWithETCFile: function (file) {
            cc.log(cc._LogInfos.Texture2D_initWithETCFile_2);
            return false;
        },
        initWithPVRFile: function (file) {
            cc.log(cc._LogInfos.Texture2D_initWithPVRFile_2);
            return false;
        },
        initWithPVRTCData: function (data, level, bpp, hasAlpha, length, pixelFormat) {
            cc.log(cc._LogInfos.Texture2D_initWithPVRTCData_2);
            return false;
        },
        setTexParameters: function (texParams, magFilter, wrapS, wrapT) {
            var _t = this;
            var gl = cc._renderContext;
            if(magFilter !== undefined)
                texParams = {minFilter: texParams, magFilter: magFilter, wrapS: wrapS, wrapT: wrapT};
            cc.assert((_t._pixelsWide === cc.NextPOT(_t._pixelsWide) && _t._pixelsHigh === cc.NextPOT(_t._pixelsHigh)) ||
                (texParams.wrapS === gl.CLAMP_TO_EDGE && texParams.wrapT === gl.CLAMP_TO_EDGE),
                "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures");
            cc.glBindTexture2D(_t);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texParams.minFilter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texParams.magFilter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, texParams.wrapS);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, texParams.wrapT);
        },
        setAntiAliasTexParameters: function () {
            var gl = cc._renderContext;
            cc.glBindTexture2D(this);
            if (!this._hasMipmaps)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            else
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        },
        setAliasTexParameters: function () {
            var gl = cc._renderContext;
            cc.glBindTexture2D(this);
            if (!this._hasMipmaps)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            else
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        },
        generateMipmap: function () {
            var _t = this;
            cc.assert(_t._pixelsWide === cc.NextPOT(_t._pixelsWide) && _t._pixelsHigh === cc.NextPOT(_t._pixelsHigh), "Mimpap texture only works in POT textures");
            cc.glBindTexture2D(_t);
            cc._renderContext.generateMipmap(cc._renderContext.TEXTURE_2D);
            _t._hasMipmaps = true;
        },
        stringForFormat: function () {
            return cc.Texture2D._M[this._pixelFormat];
        },
        bitsPerPixelForFormat: function (format) {//TODO I want to delete the format argument, use this._pixelFormat
            format = format || this._pixelFormat;
            var value = cc.Texture2D._B[format];
            if (value != null) return value;
            cc.log(cc._LogInfos.Texture2D_bitsPerPixelForFormat, format);
            return -1;
        },
        _initPremultipliedATextureWithImage: function (uiImage, width, height) {
            var tex2d = cc.Texture2D;
            var tempData = uiImage.getData();
            var inPixel32 = null;
            var inPixel8 = null;
            var outPixel16 = null;
            var hasAlpha = uiImage.hasAlpha();
            var imageSize = cc.size(uiImage.getWidth(), uiImage.getHeight());
            var pixelFormat = tex2d.defaultPixelFormat;
            var bpp = uiImage.getBitsPerComponent();
            var i;
            if (!hasAlpha) {
                if (bpp >= 8) {
                    pixelFormat = tex2d.PIXEL_FORMAT_RGB888;
                } else {
                    cc.log(cc._LogInfos.Texture2D__initPremultipliedATextureWithImage);
                    pixelFormat = tex2d.PIXEL_FORMAT_RGB565;
                }
            }
            var length = width * height;
            if (pixelFormat === tex2d.PIXEL_FORMAT_RGB565) {
                if (hasAlpha) {
                    tempData = new Uint16Array(width * height);
                    inPixel32 = uiImage.getData();
                    for (i = 0; i < length; ++i) {
                        tempData[i] =
                            ((((inPixel32[i] >> 0) & 0xFF) >> 3) << 11) |
                                ((((inPixel32[i] >> 8) & 0xFF) >> 2) << 5) |
                                ((((inPixel32[i] >> 16) & 0xFF) >> 3) << 0);
                    }
                } else {
                    tempData = new Uint16Array(width * height);
                    inPixel8 = uiImage.getData();
                    for (i = 0; i < length; ++i) {
                        tempData[i] =
                            (((inPixel8[i] & 0xFF) >> 3) << 11) |
                                (((inPixel8[i] & 0xFF) >> 2) << 5) |
                                (((inPixel8[i] & 0xFF) >> 3) << 0);
                    }
                }
            } else if (pixelFormat === tex2d.PIXEL_FORMAT_RGBA4444) {
                tempData = new Uint16Array(width * height);
                inPixel32 = uiImage.getData();
                for (i = 0; i < length; ++i) {
                    tempData[i] =
                        ((((inPixel32[i] >> 0) & 0xFF) >> 4) << 12) |
                            ((((inPixel32[i] >> 8) & 0xFF) >> 4) << 8) |
                            ((((inPixel32[i] >> 16) & 0xFF) >> 4) << 4) |
                            ((((inPixel32[i] >> 24) & 0xFF) >> 4) << 0);
                }
            } else if (pixelFormat === tex2d.PIXEL_FORMAT_RGB5A1) {
                tempData = new Uint16Array(width * height);
                inPixel32 = uiImage.getData();
                for (i = 0; i < length; ++i) {
                    tempData[i] =
                        ((((inPixel32[i] >> 0) & 0xFF) >> 3) << 11) |
                            ((((inPixel32[i] >> 8) & 0xFF) >> 3) << 6) |
                            ((((inPixel32[i] >> 16) & 0xFF) >> 3) << 1) |
                            ((((inPixel32[i] >> 24) & 0xFF) >> 7) << 0);
                }
            } else if (pixelFormat === tex2d.PIXEL_FORMAT_A8) {
                tempData = new Uint8Array(width * height);
                inPixel32 = uiImage.getData();
                for (i = 0; i < length; ++i) {
                    tempData[i] = (inPixel32 >> 24) & 0xFF;
                }
            }
            if (hasAlpha && pixelFormat === tex2d.PIXEL_FORMAT_RGB888) {
                inPixel32 = uiImage.getData();
                tempData = new Uint8Array(width * height * 3);
                for (i = 0; i < length; ++i) {
                    tempData[i * 3] = (inPixel32 >> 0) & 0xFF;
                    tempData[i * 3 + 1] = (inPixel32 >> 8) & 0xFF;
                    tempData[i * 3 + 2] = (inPixel32 >> 16) & 0xFF;
                }
            }
            this.initWithData(tempData, pixelFormat, width, height, imageSize);
            if (tempData != uiImage.getData())
                tempData = null;
            this._hasPremultipliedAlpha = uiImage.isPremultipliedAlpha();
            return true;
        },
        addLoadedEventListener: function (callback, target) {
            this.addEventListener("load", callback, target);
        },
        removeLoadedEventListener: function (target) {
            this.removeEventTarget("load", target);
        }
    });
};
cc._tmp.WebGLTextureAtlas = function () {
    var _p = cc.TextureAtlas.prototype;
    _p._setupVBO = function () {
        var _t = this;
        var gl = cc._renderContext;
        _t._buffersVBO[0] = gl.createBuffer();
        _t._buffersVBO[1] = gl.createBuffer();
        _t._quadsWebBuffer = gl.createBuffer();
        _t._mapBuffers();
    };
    _p._mapBuffers = function () {
        var _t = this;
        var gl = cc._renderContext;
        gl.bindBuffer(gl.ARRAY_BUFFER, _t._quadsWebBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, _t._quadsArrayBuffer, gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _t._buffersVBO[1]);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, _t._indices, gl.STATIC_DRAW);
    };
    _p.drawNumberOfQuads = function (n, start) {
        var _t = this;
        start = start || 0;
        if (0 === n || !_t.texture || !_t.texture.isLoaded())
            return;
        var gl = cc._renderContext;
        cc.glBindTexture2D(_t.texture);
        gl.bindBuffer(gl.ARRAY_BUFFER, _t._quadsWebBuffer);
        if (_t.dirty){
            gl.bufferData(gl.ARRAY_BUFFER, _t._quadsArrayBuffer, gl.DYNAMIC_DRAW);
            _t.dirty = false;
        }
        gl.enableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION);
        gl.enableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR);
        gl.enableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS);
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, gl.FLOAT, false, 24, 0);
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, gl.UNSIGNED_BYTE, true, 24, 12);
        gl.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, gl.FLOAT, false, 24, 16);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _t._buffersVBO[1]);
        if (cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP)
            gl.drawElements(gl.TRIANGLE_STRIP, n * 6, gl.UNSIGNED_SHORT, start * 6 * _t._indices.BYTES_PER_ELEMENT);
        else
            gl.drawElements(gl.TRIANGLES, n * 6, gl.UNSIGNED_SHORT, start * 6 * _t._indices.BYTES_PER_ELEMENT);
        cc.g_NumberOfDraws++;
    };
};
cc._tmp.WebGLTextureCache = function () {
    var _p = cc.textureCache;
    _p.handleLoadedTexture = function (url) {
        var locTexs = this._textures, tex, ext;
        if (!cc.game._rendererInitialized) {
            locTexs = this._loadedTexturesBefore;
        }
        tex = locTexs[url];
        if (!tex) {
            tex = locTexs[url] = new cc.Texture2D();
            tex.url = url;
        }
        ext = cc.path.extname(url);
        if (ext === ".png") {
            tex.handleLoadedTexture(true);
        }
        else {
            tex.handleLoadedTexture();
        }
    };
    _p.addImage = function (url, cb, target) {
        cc.assert(url, cc._LogInfos.Texture2D_addImage_2);
        var locTexs = this._textures;
        if (!cc.game._rendererInitialized) {
            locTexs = this._loadedTexturesBefore;
        }
        var tex = locTexs[url] || locTexs[cc.loader._getAliase(url)];
        if (tex) {
            if(tex.isLoaded()) {
                cb && cb.call(target, tex);
                return tex;
            }
            else
            {
                tex.addEventListener("load", function(){
                   cb && cb.call(target, tex);
                }, target);
                return tex;
            }
        }
        tex = locTexs[url] = new cc.Texture2D();
        tex.url = url;
        var basePath = cc.loader.getBasePath ? cc.loader.getBasePath() : cc.loader.resPath;
        cc.loader.loadImg(cc.path.join(basePath || "", url), function (err, img) {
            if (err)
                return cb && cb.call(target, err);
            if (!cc.loader.cache[url]) {
                cc.loader.cache[url] = img;
            }
            cc.textureCache.handleLoadedTexture(url);
            var texResult = locTexs[url];
            cb && cb.call(target, texResult);
        });
        return tex;
    };
    _p.addImageAsync = _p.addImage;
    _p = null;
};
cc.ALIGN_CENTER = 0x33;
cc.ALIGN_TOP = 0x13;
cc.ALIGN_TOP_RIGHT = 0x12;
cc.ALIGN_RIGHT = 0x32;
cc.ALIGN_BOTTOM_RIGHT = 0x22;
cc.ALIGN_BOTTOM = 0x23;
cc.ALIGN_BOTTOM_LEFT = 0x21;
cc.ALIGN_LEFT = 0x31;
cc.ALIGN_TOP_LEFT = 0x11;
cc.PVRHaveAlphaPremultiplied_ = false;
cc.game.addEventListener(cc.game.EVENT_RENDERER_INITED, function () {
    if(cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
        var proto = {
            _contentSize: null,
            _textureLoaded: false,
            _htmlElementObj: null,
            url: null,
            _pattern: null,
            ctor: function () {
                this._contentSize = cc.size(0, 0);
                this._textureLoaded = false;
                this._htmlElementObj = null;
                this._pattern = "";
            },
            getPixelsWide: function () {
                return this._contentSize.width;
            },
            getPixelsHigh: function () {
                return this._contentSize.height;
            },
            getContentSize: function () {
                var locScaleFactor = cc.contentScaleFactor();
                return cc.size(this._contentSize.width / locScaleFactor, this._contentSize.height / locScaleFactor);
            },
            _getWidth: function () {
                return this._contentSize.width / cc.contentScaleFactor();
            },
            _getHeight: function () {
                return this._contentSize.height / cc.contentScaleFactor();
            },
            getContentSizeInPixels: function () {
                return this._contentSize;
            },
            initWithElement: function (element) {
                if (!element)
                    return;
                this._htmlElementObj = element;
                this._contentSize.width = element.width;
                this._contentSize.height = element.height;
                this._textureLoaded = true;
            },
            getHtmlElementObj: function () {
                return this._htmlElementObj;
            },
            isLoaded: function () {
                return this._textureLoaded;
            },
            handleLoadedTexture: function () {
                var self = this;
                if (self._textureLoaded) return;
                if (!self._htmlElementObj) {
                    var img = cc.loader.getRes(self.url);
                    if (!img) return;
                    self.initWithElement(img);
                }
                var locElement = self._htmlElementObj;
                self._contentSize.width = locElement.width;
                self._contentSize.height = locElement.height;
                self.dispatchEvent("load");
            },
            description: function () {
                return "<cc.Texture2D | width = " + this._contentSize.width + " height " + this._contentSize.height + ">";
            },
            initWithData: function (data, pixelFormat, pixelsWide, pixelsHigh, contentSize) {
                return false;
            },
            initWithImage: function (uiImage) {
                return false;
            },
            initWithString: function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
                return false;
            },
            releaseTexture: function () {
                cc.loader.release(this.url);
            },
            getName: function () {
                return null;
            },
            getMaxS: function () {
                return 1;
            },
            setMaxS: function (maxS) {
            },
            getMaxT: function () {
                return 1;
            },
            setMaxT: function (maxT) {
            },
            getPixelFormat: function () {
                return null;
            },
            getShaderProgram: function () {
                return null;
            },
            setShaderProgram: function (shaderProgram) {
            },
            hasPremultipliedAlpha: function () {
                return false;
            },
            hasMipmaps: function () {
                return false;
            },
            releaseData: function (data) {
                data = null;
            },
            keepData: function (data, length) {
                return data;
            },
            drawAtPoint: function (point) {
            },
            drawInRect: function (rect) {
            },
            initWithETCFile: function (file) {
                cc.log(cc._LogInfos.Texture2D_initWithETCFile);
                return false;
            },
            initWithPVRFile: function (file) {
                cc.log(cc._LogInfos.Texture2D_initWithPVRFile);
                return false;
            },
            initWithPVRTCData: function (data, level, bpp, hasAlpha, length, pixelFormat) {
                cc.log(cc._LogInfos.Texture2D_initWithPVRTCData);
                return false;
            },
            setTexParameters: function (texParams, magFilter, wrapS, wrapT) {
                if(magFilter !== undefined)
                    texParams = {minFilter: texParams, magFilter: magFilter, wrapS: wrapS, wrapT: wrapT};
                if(texParams.wrapS === cc.REPEAT && texParams.wrapT === cc.REPEAT){
                    this._pattern = "repeat";
                    return;
                }
                if(texParams.wrapS === cc.REPEAT ){
                    this._pattern = "repeat-x";
                    return;
                }
                if(texParams.wrapT === cc.REPEAT){
                    this._pattern = "repeat-y";
                    return;
                }
                this._pattern = "";
            },
            setAntiAliasTexParameters: function () {
            },
            setAliasTexParameters: function () {
            },
            generateMipmap: function () {
            },
            stringForFormat: function () {
                return "";
            },
            bitsPerPixelForFormat: function (format) {
                return -1;
            },
            addLoadedEventListener: function (callback, target) {
                this.addEventListener("load", callback, target);
            },
            removeLoadedEventListener: function (target) {
                this.removeEventTarget("load", target);
            },
            _generateColorTexture: function(){},
            _generateTextureCacheForColor: function(){
                if (this.channelCache)
                    return this.channelCache;
                var textureCache = [
                    document.createElement("canvas"),
                    document.createElement("canvas"),
                    document.createElement("canvas"),
                    document.createElement("canvas")
                ];
                renderToCache(this._htmlElementObj, textureCache);
                return this.channelCache = textureCache;
            },
            _grayElementObj: null,
            _backupElement: null,
            _isGray: false,
            _switchToGray: function(toGray){
                if(!this._textureLoaded || this._isGray === toGray)
                    return;
                this._isGray = toGray;
                if(this._isGray){
                    this._backupElement = this._htmlElementObj;
                    if(!this._grayElementObj)
                        this._grayElementObj = cc.Texture2D._generateGrayTexture(this._htmlElementObj);
                    this._htmlElementObj = this._grayElementObj;
                } else {
                    if(this._backupElement !== null)
                        this._htmlElementObj = this._backupElement;
                }
            }
        };
        var renderToCache = function(image, cache){
            var w = image.width;
            var h = image.height;
            cache[0].width = w;
            cache[0].height = h;
            cache[1].width = w;
            cache[1].height = h;
            cache[2].width = w;
            cache[2].height = h;
            cache[3].width = w;
            cache[3].height = h;
            var cacheCtx = cache[3].getContext("2d");
            cacheCtx.drawImage(image, 0, 0);
            var pixels = cacheCtx.getImageData(0, 0, w, h).data;
            var ctx;
            for (var rgbI = 0; rgbI < 4; rgbI++) {
                ctx = cache[rgbI].getContext("2d");
                var to = ctx.getImageData(0, 0, w, h);
                var data = to.data;
                for (var i = 0; i < pixels.length; i += 4) {
                    data[i  ] = (rgbI === 0) ? pixels[i  ] : 0;
                    data[i + 1] = (rgbI === 1) ? pixels[i + 1] : 0;
                    data[i + 2] = (rgbI === 2) ? pixels[i + 2] : 0;
                    data[i + 3] = pixels[i + 3];
                }
                ctx.putImageData(to, 0, 0);
            }
            image.onload = null;
        };
        if(cc.sys._supportCanvasNewBlendModes){
            proto._generateColorTexture = function(r, g, b, rect, canvas){
                var onlyCanvas = false;
                if(canvas)
                    onlyCanvas = true;
                else
                    canvas = document.createElement("canvas");
                var textureImage = this._htmlElementObj;
                if(!rect)
                    rect = cc.rect(0, 0, textureImage.width, textureImage.height);
                canvas.width = rect.width;
                canvas.height = rect.height;
                var context = canvas.getContext("2d");
                context.globalCompositeOperation = "source-over";
                context.fillStyle = "rgb(" + (r|0) + "," + (g|0) + "," + (b|0) + ")";
                context.fillRect(0, 0, rect.width, rect.height);
                context.globalCompositeOperation = "multiply";
                context.drawImage(
                    textureImage,
                    rect.x, rect.y, rect.width, rect.height,
                    0, 0, rect.width, rect.height
                );
                context.globalCompositeOperation = "destination-atop";
                context.drawImage(
                    textureImage,
                    rect.x, rect.y, rect.width, rect.height,
                    0, 0, rect.width, rect.height
                );
                if(onlyCanvas)
                    return canvas;
                var newTexture = new cc.Texture2D();
                newTexture.initWithElement(canvas);
                newTexture.handleLoadedTexture();
                return newTexture;
            };
        }else{
            proto._generateColorTexture = function(r, g, b, rect, canvas){
                var onlyCanvas = false;
                if(canvas)
                    onlyCanvas = true;
                else
                    canvas = document.createElement("canvas");
                var textureImage = this._htmlElementObj;
                if(!rect)
                    rect = cc.rect(0, 0, textureImage.width, textureImage.height);
                var x, y, w, h;
                x = rect.x; y = rect.y; w = rect.width; h = rect.height;
                if(!w || !h)
                    return;
                canvas.width = w;
                canvas.height = h;
                var context = canvas.getContext("2d");
                var tintedImgCache = cc.textureCache.getTextureColors(this);
                context.globalCompositeOperation = 'lighter';
                context.drawImage(
                    tintedImgCache[3],
                    x, y, w, h,
                    0, 0, w, h
                );
                if (r > 0) {
                    context.globalAlpha = r / 255;
                    context.drawImage(
                        tintedImgCache[0],
                        x, y, w, h,
                        0, 0, w, h
                    );
                }
                if (g > 0) {
                    context.globalAlpha = g / 255;
                    context.drawImage(
                        tintedImgCache[1],
                        x, y, w, h,
                        0, 0, w, h
                    );
                }
                if (b > 0) {
                    context.globalAlpha = b / 255;
                    context.drawImage(
                        tintedImgCache[2],
                        x, y, w, h,
                        0, 0, w, h
                    );
                }
                if(onlyCanvas)
                    return canvas;
                var newTexture = new cc.Texture2D();
                newTexture.initWithElement(canvas);
                newTexture.handleLoadedTexture();
                return newTexture;
            };
        }
        cc.Texture2D = cc.Class.extend(proto);
        cc.Texture2D._generateGrayTexture = function(texture, rect, renderCanvas){
            if (texture === null)
                return null;
            renderCanvas = renderCanvas || document.createElement("canvas");
            rect = rect || cc.rect(0, 0, texture.width, texture.height);
            renderCanvas.width = rect.width;
            renderCanvas.height = rect.height;
            var context = renderCanvas.getContext("2d");
            context.drawImage(texture, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
            var imgData = context.getImageData(0, 0, rect.width, rect.height);
            var data = imgData.data;
            for (var i = 0, len = data.length; i < len; i += 4) {
                data[i] = data[i + 1] = data[i + 2] = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
            }
            context.putImageData(imgData, 0, 0);
            return renderCanvas;
        };
    } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
        cc.assert(cc.isFunction(cc._tmp.WebGLTexture2D), cc._LogInfos.MissingFile, "TexturesWebGL.js");
        cc._tmp.WebGLTexture2D();
        delete cc._tmp.WebGLTexture2D;
    }
    cc.EventHelper.prototype.apply(cc.Texture2D.prototype);
    cc.assert(cc.isFunction(cc._tmp.PrototypeTexture2D), cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
    cc._tmp.PrototypeTexture2D();
    delete cc._tmp.PrototypeTexture2D;
});
cc.textureCache = {
    _textures: {},
    _textureColorsCache: {},
    _textureKeySeq: (0 | Math.random() * 1000),
    _loadedTexturesBefore: {},
    _initializingRenderer: function () {
        var selPath;
        var locLoadedTexturesBefore = this._loadedTexturesBefore, locTextures = this._textures;
        for (selPath in locLoadedTexturesBefore) {
            var tex2d = locLoadedTexturesBefore[selPath];
            tex2d.handleLoadedTexture();
            locTextures[selPath] = tex2d;
        }
        this._loadedTexturesBefore = {};
    },
    addPVRTCImage: function (filename) {
        cc.log(cc._LogInfos.textureCache_addPVRTCImage);
    },
    addETCImage: function (filename) {
        cc.log(cc._LogInfos.textureCache_addETCImage);
    },
    description: function () {
        return "<TextureCache | Number of textures = " + this._textures.length + ">";
    },
    textureForKey: function (textureKeyName) {
        cc.log(cc._LogInfos.textureCache_textureForKey);
        return this.getTextureForKey(textureKeyName);
    },
    getTextureForKey: function(textureKeyName){
        return this._textures[textureKeyName] || this._textures[cc.loader._getAliase(textureKeyName)];
    },
    getKeyByTexture: function (texture) {
        for (var key in this._textures) {
            if (this._textures[key] === texture) {
                return key;
            }
        }
        return null;
    },
    _generalTextureKey: function (id) {
        return "_textureKey_" + id;
    },
    getTextureColors: function (texture) {
        var image = texture._htmlElementObj;
        var key = this.getKeyByTexture(image);
        if (!key) {
            if (image instanceof HTMLImageElement)
                key = image.src;
            else
                key = this._generalTextureKey(texture.__instanceId);
        }
        if (!this._textureColorsCache[key])
            this._textureColorsCache[key] = texture._generateTextureCacheForColor();
        return this._textureColorsCache[key];
    },
    addPVRImage: function (path) {
        cc.log(cc._LogInfos.textureCache_addPVRImage);
    },
    removeAllTextures: function () {
        var locTextures = this._textures;
        for (var selKey in locTextures) {
            if (locTextures[selKey])
                locTextures[selKey].releaseTexture();
        }
        this._textures = {};
    },
    removeTexture: function (texture) {
        if (!texture)
            return;
        var locTextures = this._textures;
        for (var selKey in locTextures) {
            if (locTextures[selKey] === texture) {
                locTextures[selKey].releaseTexture();
                delete(locTextures[selKey]);
            }
        }
    },
    removeTextureForKey: function (textureKeyName) {
        if (textureKeyName == null)
            return;
        if (this._textures[textureKeyName])
            delete(this._textures[textureKeyName]);
    },
    cacheImage: function (path, texture) {
        if (texture instanceof  cc.Texture2D) {
            this._textures[path] = texture;
            return;
        }
        var texture2d = new cc.Texture2D();
        texture2d.initWithElement(texture);
        texture2d.handleLoadedTexture();
        this._textures[path] = texture2d;
    },
    addUIImage: function (image, key) {
        cc.assert(image, cc._LogInfos.textureCache_addUIImage_2);
        if (key) {
            if (this._textures[key])
                return this._textures[key];
        }
        var texture = new cc.Texture2D();
        texture.initWithImage(image);
        if (key != null)
            this._textures[key] = texture;
        else
            cc.log(cc._LogInfos.textureCache_addUIImage);
        return texture;
    },
    dumpCachedTextureInfo: function () {
        var count = 0;
        var totalBytes = 0, locTextures = this._textures;
        for (var key in locTextures) {
            var selTexture = locTextures[key];
            count++;
            if (selTexture.getHtmlElementObj() instanceof  HTMLImageElement)
                cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo, key, selTexture.getHtmlElementObj().src, selTexture.pixelsWidth, selTexture.pixelsHeight);
            else {
                cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, key, selTexture.pixelsWidth, selTexture.pixelsHeight);
            }
            totalBytes += selTexture.pixelsWidth * selTexture.pixelsHeight * 4;
        }
        var locTextureColorsCache = this._textureColorsCache;
        for (key in locTextureColorsCache) {
            var selCanvasColorsArr = locTextureColorsCache[key];
            for (var selCanvasKey in selCanvasColorsArr) {
                var selCanvas = selCanvasColorsArr[selCanvasKey];
                count++;
                cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, key, selCanvas.width, selCanvas.height);
                totalBytes += selCanvas.width * selCanvas.height * 4;
            }
        }
        cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_3, count, totalBytes / 1024, (totalBytes / (1024.0 * 1024.0)).toFixed(2));
    },
    _clear: function () {
        this._textures = {};
        this._textureColorsCache = {};
        this._textureKeySeq = (0 | Math.random() * 1000);
        this._loadedTexturesBefore = {};
    }
};
cc.game.addEventListener(cc.game.EVENT_RENDERER_INITED, function () {
    if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
        var _p = cc.textureCache;
        _p.handleLoadedTexture = function (url) {
            var locTexs = this._textures;
            var tex = locTexs[url];
            if (!tex) {
                tex = locTexs[url] = new cc.Texture2D();
                tex.url = url;
            }
            tex.handleLoadedTexture();
        };
        _p.addImage = function (url, cb, target) {
            cc.assert(url, cc._LogInfos.Texture2D_addImage);
            var locTexs = this._textures;
            var tex = locTexs[url] || locTexs[cc.loader._getAliase(url)];
            if (tex) {
                if(tex.isLoaded()) {
                    cb && cb.call(target, tex);
                    return tex;
                }
                else
                {
                    tex.addEventListener("load", function(){
                        cb && cb.call(target, tex);
                    }, target);
                    return tex;
                }
            }
            tex = locTexs[url] = new cc.Texture2D();
            tex.url = url;
            var basePath = cc.loader.getBasePath ? cc.loader.getBasePath() : cc.loader.resPath;
            cc.loader.loadImg(cc.path.join(basePath || "", url), function (err, img) {
                if (err)
                    return cb && cb.call(target, err);
                if (!cc.loader.cache[url]) {
                    cc.loader.cache[url] = img;
                }
                cc.textureCache.handleLoadedTexture(url);
                var texResult = locTexs[url];
                cb && cb.call(target, texResult);
            });
            return tex;
        };
        _p.addImageAsync = _p.addImage;
        _p = null;
    } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
        cc.assert(cc.isFunction(cc._tmp.WebGLTextureCache), cc._LogInfos.MissingFile, "TexturesWebGL.js");
        cc._tmp.WebGLTextureCache();
        delete cc._tmp.WebGLTextureCache;
    }
});
cc.Scene = cc.Node.extend({
    _className:"Scene",
    ctor:function () {
        cc.Node.prototype.ctor.call(this);
        this._ignoreAnchorPointForPosition = true;
        this.setAnchorPoint(0.5, 0.5);
        this.setContentSize(cc.director.getWinSize());
    }
});
cc.Scene.create = function () {
    return new cc.Scene();
};
cc.LoaderScene = cc.Scene.extend({
    _interval : null,
    _label : null,
    _className:"LoaderScene",
    cb: null,
    target: null,
    init : function(){
        var self = this;
        var logoWidth = 160;
        var logoHeight = 200;
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(32, 32, 32, 255));
        self.addChild(bgLayer, 0);
        var fontSize = 24, lblHeight =  -logoHeight / 2 + 100;
        if(cc._loaderImage){
            cc.loader.loadImg(cc._loaderImage, {isCrossOrigin : false }, function(err, img){
                logoWidth = img.width;
                logoHeight = img.height;
                self._initStage(img, cc.visibleRect.center);
            });
            fontSize = 14;
            lblHeight = -logoHeight / 2 - 10;
        }
        var label = self._label = new cc.LabelTTF("Loading... 0%", "Arial", fontSize);
        label.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, lblHeight)));
        label.setColor(cc.color(180, 180, 180));
        bgLayer.addChild(this._label, 10);
        return true;
    },
    _initStage: function (img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = new cc.Sprite(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },
    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },
    onExit: function () {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "Loading... 0%";
        this._label.setString(tmpStr);
    },
    initWithResources: function (resources, cb, target) {
        if(cc.isString(resources))
            resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
        this.target = target;
    },
    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                self._label.setString("Loading... " + percent + "%");
            }, function () {
                if (self.cb)
                    self.cb.call(self.target);
            });
    },
    _updateTransform: function(){
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        this._bgLayer._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        this._label._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        this._logo._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    }
});
cc.LoaderScene.preload = function(resources, cb, target){
    var _cc = cc;
    if(!_cc.loaderScene) {
        _cc.loaderScene = new cc.LoaderScene();
        _cc.loaderScene.init();
        cc.eventManager.addCustomListener(cc.Director.EVENT_PROJECTION_CHANGED, function(){
            _cc.loaderScene._updateTransform();
        });
    }
    _cc.loaderScene.initWithResources(resources, cb, target);
    cc.director.runScene(_cc.loaderScene);
    return _cc.loaderScene;
};
cc.Layer = cc.Node.extend({
    _className: "Layer",
    ctor: function () {
        cc.Node.prototype.ctor.call(this);
        this._ignoreAnchorPointForPosition = true;
        this.setAnchorPoint(0.5, 0.5);
        this.setContentSize(cc.winSize);
    },
    init: function(){
        var _t = this;
        _t._ignoreAnchorPointForPosition = true;
        _t.setAnchorPoint(0.5, 0.5);
        _t.setContentSize(cc.winSize);
        _t._cascadeColorEnabled = false;
        _t._cascadeOpacityEnabled = false;
        return true;
    },
    bake: function(){
        this._renderCmd.bake();
    },
    unbake: function(){
        this._renderCmd.unbake();
    },
    isBaked: function(){
        return this._renderCmd._isBaked;
    },
    addChild: function(child, localZOrder, tag){
        cc.Node.prototype.addChild.call(this, child, localZOrder, tag);
        this._renderCmd._bakeForAddChild(child);
    },
    _createRenderCmd: function(){
        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS)
            return new cc.Layer.CanvasRenderCmd(this);
        else
            return new cc.Layer.WebGLRenderCmd(this);
    }
});
cc.Layer.create = function () {
    return new cc.Layer();
};
cc.LayerColor = cc.Layer.extend({
    _blendFunc: null,
    _className: "LayerColor",
    getBlendFunc: function () {
        return this._blendFunc;
    },
    changeWidthAndHeight: function (w, h) {
        this.width = w;
        this.height = h;
    },
    changeWidth: function (w) {
        this.width = w;
    },
    changeHeight: function (h) {
        this.height = h;
    },
    setOpacityModifyRGB: function (value) {
    },
    isOpacityModifyRGB: function () {
        return false;
    },
    ctor: function(color, width, height){
        cc.Layer.prototype.ctor.call(this);
        this._blendFunc = cc.BlendFunc._alphaNonPremultiplied();
        cc.LayerColor.prototype.init.call(this, color, width, height);
    },
    init: function (color, width, height) {
        var winSize = cc.director.getWinSize();
        color = color || cc.color(0, 0, 0, 255);
        width = width === undefined ? winSize.width : width;
        height = height === undefined ? winSize.height : height;
        var locRealColor = this._realColor;
        locRealColor.r = color.r;
        locRealColor.g = color.g;
        locRealColor.b = color.b;
        this._realOpacity = color.a;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty|cc.Node._dirtyFlags.opacityDirty);
        cc.LayerColor.prototype.setContentSize.call(this, width, height);
        return true;
    },
    setBlendFunc: function (src, dst) {
        var locBlendFunc = this._blendFunc;
        if (dst === undefined) {
            locBlendFunc.src = src.src;
            locBlendFunc.dst = src.dst;
        } else {
            locBlendFunc.src = src;
            locBlendFunc.dst = dst;
        }
        this._renderCmd.updateBlendFunc(locBlendFunc);
    },
    _createRenderCmd: function(){
        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS)
            return new cc.LayerColor.CanvasRenderCmd(this);
        else
            return new cc.LayerColor.WebGLRenderCmd(this);
    }
});
cc.LayerColor.create = function (color, width, height) {
    return new cc.LayerColor(color, width, height);
};
(function(){
    var proto = cc.LayerColor.prototype;
    cc.defineGetterSetter(proto, "width", proto._getWidth, proto._setWidth);
    cc.defineGetterSetter(proto, "height", proto._getHeight, proto._setHeight);
})();
cc.LayerGradient = cc.LayerColor.extend({
    _endColor: null,
    _startOpacity: 255,
    _endOpacity: 255,
    _alongVector: null,
    _compressedInterpolation: false,
    _className: "LayerGradient",
    _colorStops: [],
    ctor: function (start, end, v, stops) {
        cc.LayerColor.prototype.ctor.call(this);
        this._endColor = cc.color(0, 0, 0, 255);
        this._alongVector = cc.p(0, -1);
        this._startOpacity = 255;
        this._endOpacity = 255;
        if(stops && stops instanceof Array){
            this._colorStops = stops;
            stops.splice(0, 0, {p:0, color: start || cc.color.BLACK});
            stops.push({p:1, color: end || cc.color.BLACK});
        } else
            this._colorStops = [{p:0, color: start || cc.color.BLACK}, {p:1, color: end || cc.color.BLACK}];
        cc.LayerGradient.prototype.init.call(this, start, end, v, stops);
    },
    init: function (start, end, v, stops) {
        start = start || cc.color(0, 0, 0, 255);
        end = end || cc.color(0, 0, 0, 255);
        v = v || cc.p(0, -1);
        var _t = this;
        var locEndColor = _t._endColor;
        _t._startOpacity = start.a;
        locEndColor.r = end.r;
        locEndColor.g = end.g;
        locEndColor.b = end.b;
        _t._endOpacity = end.a;
        _t._alongVector = v;
        _t._compressedInterpolation = true;
        cc.LayerColor.prototype.init.call(_t, cc.color(start.r, start.g, start.b, 255));
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty|cc.Node._dirtyFlags.opacityDirty|cc.Node._dirtyFlags.gradientDirty);
        return true;
    },
    setContentSize: function (size, height) {
        cc.LayerColor.prototype.setContentSize.call(this, size, height);
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.gradientDirty);
    },
    _setWidth: function (width) {
        cc.LayerColor.prototype._setWidth.call(this, width);
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.gradientDirty);
    },
    _setHeight: function (height) {
        cc.LayerColor.prototype._setHeight.call(this, height);
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.gradientDirty);
    },
    getStartColor: function () {
        return cc.color(this._realColor);
    },
    setStartColor: function (color) {
        this.color = color;
        var stops = this._colorStops;
        if(stops && stops.length > 0){
            var selColor = stops[0].color;
            selColor.r = color.r;
            selColor.g = color.g;
            selColor.b = color.b;
        }
    },
    setEndColor: function (color) {
        var locColor = this._endColor;
        locColor.r = color.r;
        locColor.g = color.g;
        locColor.b = color.b;
        var stops = this._colorStops;
        if(stops && stops.length > 0){
            var selColor = stops[stops.length -1].color;
            selColor.r = color.r;
            selColor.g = color.g;
            selColor.b = color.b;
        }
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty);
    },
    getEndColor: function () {
        return cc.color(this._endColor);
    },
    setStartOpacity: function (o) {
        this._startOpacity = o;
        var stops = this._colorStops;
        if(stops && stops.length > 0)
            stops[0].color.a = o;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty);
    },
    getStartOpacity: function () {
        return this._startOpacity;
    },
    setEndOpacity: function (o) {
        this._endOpacity = o;
        var stops = this._colorStops;
        if(stops && stops.length > 0)
            stops[stops.length -1].color.a = o;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty);
    },
    getEndOpacity: function () {
        return this._endOpacity;
    },
    setVector: function (Var) {
        this._alongVector.x = Var.x;
        this._alongVector.y = Var.y;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.gradientDirty);
    },
    getVector: function () {
        return cc.p(this._alongVector.x, this._alongVector.y);
    },
    isCompressedInterpolation: function () {
        return this._compressedInterpolation;
    },
    setCompressedInterpolation: function (compress) {
        this._compressedInterpolation = compress;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.gradientDirty);
    },
    getColorStops: function(){
        return this._colorStops;
    },
    setColorStops: function(colorStops){
        this._colorStops = colorStops;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty|cc.Node._dirtyFlags.opacityDirty|cc.Node._dirtyFlags.gradientDirty);
    },
    _createRenderCmd: function(){
        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS)
            return new cc.LayerGradient.CanvasRenderCmd(this);
        else
            return new cc.LayerGradient.WebGLRenderCmd(this);
    }
});
cc.LayerGradient.create = function (start, end, v, stops) {
    return new cc.LayerGradient(start, end, v, stops);
};
(function(){
    var proto = cc.LayerGradient.prototype;
    proto.startColor;
    cc.defineGetterSetter(proto, "startColor", proto.getStartColor, proto.setStartColor);
    proto.endColor;
    cc.defineGetterSetter(proto, "endColor", proto.getEndColor, proto.setEndColor);
    proto.startOpacity;
    cc.defineGetterSetter(proto, "startOpacity", proto.getStartOpacity, proto.setStartOpacity);
    proto.endOpacity;
    cc.defineGetterSetter(proto, "endOpacity", proto.getEndOpacity, proto.setEndOpacity);
    proto.vector;
    cc.defineGetterSetter(proto, "vector", proto.getVector, proto.setVector);
    proto.colorStops;
    cc.defineGetterSetter(proto, "colorStops", proto.getColorStops, proto.setColorStops);
})();
cc.LayerMultiplex = cc.Layer.extend({
    _enabledLayer: 0,
    _layers: null,
    _className: "LayerMultiplex",
    ctor: function (layers) {
        cc.Layer.prototype.ctor.call(this);
        if (layers instanceof Array)
            cc.LayerMultiplex.prototype.initWithLayers.call(this, layers);
        else
            cc.LayerMultiplex.prototype.initWithLayers.call(this, Array.prototype.slice.call(arguments));
    },
    initWithLayers: function (layers) {
        if ((layers.length > 0) && (layers[layers.length - 1] == null))
            cc.log(cc._LogInfos.LayerMultiplex_initWithLayers);
        this._layers = layers;
        this._enabledLayer = 0;
        this.addChild(this._layers[this._enabledLayer]);
        return true;
    },
    switchTo: function (n) {
        if (n >= this._layers.length) {
            cc.log(cc._LogInfos.LayerMultiplex_switchTo);
            return;
        }
        this.removeChild(this._layers[this._enabledLayer], true);
        this._enabledLayer = n;
        this.addChild(this._layers[n]);
    },
    switchToAndReleaseMe: function (n) {
        if (n >= this._layers.length) {
            cc.log(cc._LogInfos.LayerMultiplex_switchToAndReleaseMe);
            return;
        }
        this.removeChild(this._layers[this._enabledLayer], true);
        this._layers[this._enabledLayer] = null;
        this._enabledLayer = n;
        this.addChild(this._layers[n]);
    },
    addLayer: function (layer) {
        if (!layer) {
            cc.log(cc._LogInfos.LayerMultiplex_addLayer);
            return;
        }
        this._layers.push(layer);
    }
});
cc.LayerMultiplex.create = function () {
    return new cc.LayerMultiplex(Array.prototype.slice.call(arguments));
};
(function(){
    cc.Layer.CanvasRenderCmd = function(renderable){
        cc.Node.CanvasRenderCmd.call(this, renderable);
        this._isBaked = false;
        this._bakeSprite = null;
        this._canUseDirtyRegion = true;
        this._updateCache = 2;
    };
    var proto = cc.Layer.CanvasRenderCmd.prototype = Object.create(cc.Node.CanvasRenderCmd.prototype);
    proto.constructor = cc.Layer.CanvasRenderCmd;
    proto._setCacheDirty = function(child){
        if(child && this._updateCache === 0)
            this._updateCache = 2;
        if (this._cacheDirty === false) {
            this._cacheDirty = true;
            var cachedP = this._cachedParent;
            cachedP && cachedP !== this && cachedP._setNodeDirtyForCache && cachedP._setNodeDirtyForCache();
        }
    };
    proto.updateStatus = function () {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        if (locFlag & flags.orderDirty) {
            this._cacheDirty = true;
            if(this._updateCache === 0)
                this._updateCache = 2;
            this._dirtyFlag = locFlag & flags.orderDirty ^ locFlag;
        }
        cc.Node.RenderCmd.prototype.updateStatus.call(this);
    };
    proto._syncStatus = function (parentCmd) {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        if (locFlag & flags.orderDirty) {
            this._cacheDirty = true;
            if(this._updateCache === 0)
                this._updateCache = 2;
            this._dirtyFlag = locFlag & flags.orderDirty ^ locFlag;
        }
        cc.Node.RenderCmd.prototype._syncStatus.call(this, parentCmd);
    };
    proto.transform = function (parentCmd, recursive) {
        var wt = this._worldTransform;
        var a = wt.a, b = wt.b, c = wt.c, d = wt.d, tx = wt.tx, ty = wt.ty;
        cc.Node.CanvasRenderCmd.prototype.transform.call(this, parentCmd, recursive);
        if(( wt.a !== a || wt.b !== b || wt.c !== c || wt.d !== d ) && this._updateCache === 0)
            this._updateCache = 2;
    };
    proto.bake = function(){
        if (!this._isBaked) {
            this._needDraw = true;
            cc.renderer.childrenOrderDirty = true;
            this._isBaked = this._cacheDirty = true;
            if(this._updateCache === 0)
                this._updateCache = 2;
            var children = this._node._children;
            for(var i = 0, len = children.length; i < len; i++)
                children[i]._renderCmd._setCachedParent(this);
            if (!this._bakeSprite) {
                this._bakeSprite = new cc.BakeSprite();
                this._bakeSprite.setAnchorPoint(0,0);
            }
        }
    };
    proto.unbake = function(){
        if (this._isBaked) {
            cc.renderer.childrenOrderDirty = true;
            this._needDraw = false;
            this._isBaked = false;
            this._cacheDirty = true;
            if(this._updateCache === 0)
                this._updateCache = 2;
            var children = this._node._children;
            for(var i = 0, len = children.length; i < len; i++)
                children[i]._renderCmd._setCachedParent(null);
        }
    };
    proto.isBaked = function(){
        return this._isBaked;
    };
    proto.rendering = function(){
        if(this._cacheDirty){
            var node = this._node;
            var children = node._children, locBakeSprite = this._bakeSprite;
            this.transform(this.getParentRenderCmd(), true);
            var boundingBox = this._getBoundingBoxForBake();
            boundingBox.width = 0|(boundingBox.width+0.5);
            boundingBox.height = 0|(boundingBox.height+0.5);
            var bakeContext = locBakeSprite.getCacheContext();
            var ctx = bakeContext.getContext();
            locBakeSprite.setPosition(boundingBox.x, boundingBox.y);
            if(this._updateCache > 0){
                locBakeSprite.resetCanvasSize(boundingBox.width, boundingBox.height);
                bakeContext.setOffset(0 - boundingBox.x, ctx.canvas.height - boundingBox.height + boundingBox.y );
                node.sortAllChildren();
                cc.renderer._turnToCacheMode(this.__instanceId);
                for (var i = 0, len = children.length; i < len; i++) {
                    children[i].visit(this);
                }
                cc.renderer._renderingToCacheCanvas(bakeContext, this.__instanceId);
                locBakeSprite.transform();
                this._updateCache--;
            }
            this._cacheDirty = false;
        }
    };
    proto.visit = function(parentCmd){
        if(!this._isBaked){
            this.originVisit(parentCmd);
            return;
        }
        var node = this._node, children = node._children;
        var len = children.length;
        if (!node._visible || len === 0)
            return;
        this._syncStatus(parentCmd);
        cc.renderer.pushRenderCommand(this);
        this._bakeSprite.visit(this);
        this._dirtyFlag = 0;
    };
    proto._bakeForAddChild = function(child){
        if(child._parent === this._node && this._isBaked)
            child._renderCmd._setCachedParent(this);
    };
    proto._getBoundingBoxForBake = function(){
        var rect = null, node = this._node;
        if (!node._children || node._children.length === 0)
            return cc.rect(0, 0, 10, 10);
        var trans = node.getNodeToWorldTransform();
        var locChildren = node._children;
        for (var i = 0, len = locChildren.length; i < len; i++) {
            var child = locChildren[i];
            if (child && child._visible) {
                if(rect){
                    var childRect = child._getBoundingBoxToCurrentNode(trans);
                    if (childRect)
                        rect = cc.rectUnion(rect, childRect);
                }else{
                    rect = child._getBoundingBoxToCurrentNode(trans);
                }
            }
        }
        return rect;
    };
})();
(function(){
    cc.LayerColor.CanvasRenderCmd = function(renderable){
        cc.Layer.CanvasRenderCmd.call(this, renderable);
        this._needDraw = true;
        this._blendFuncStr = "source-over";
        this._bakeRenderCmd = new cc.CustomRenderCmd(this, this._bakeRendering);
    };
    var proto = cc.LayerColor.CanvasRenderCmd.prototype = Object.create(cc.Layer.CanvasRenderCmd.prototype);
    proto.constructor = cc.LayerColor.CanvasRenderCmd;
    proto.unbake = function(){
        cc.Layer.CanvasRenderCmd.prototype.unbake.call(this);
        this._needDraw = true;
    };
    proto.rendering = function (ctx, scaleX, scaleY) {
        var wrapper = ctx || cc._renderContext, context = wrapper.getContext(),
            node = this._node,
            curColor = this._displayedColor,
            opacity = this._displayedOpacity / 255,
            locWidth = node._contentSize.width,
            locHeight = node._contentSize.height;
        if (opacity === 0)
            return;
        wrapper.setCompositeOperation(this._blendFuncStr);
        wrapper.setGlobalAlpha(opacity);
        wrapper.setFillStyle("rgba(" + (0 | curColor.r) + "," + (0 | curColor.g) + ","
            + (0 | curColor.b) + ", 1)");
        wrapper.setTransform(this._worldTransform, scaleX, scaleY);
        context.fillRect(0, 0, locWidth , -locHeight );
        cc.g_NumberOfDraws++;
    };
    proto.updateBlendFunc = function(blendFunc){
        this._blendFuncStr = cc.Node.CanvasRenderCmd._getCompositeOperationByBlendFunc(blendFunc);
    };
    proto._updateSquareVertices =
    proto._updateSquareVerticesWidth =
    proto._updateSquareVerticesHeight = function(){};
    proto._bakeRendering = function(){
        if(this._cacheDirty){
            var node = this._node;
            var locBakeSprite = this._bakeSprite, children = node._children;
            var len = children.length, i;
            this.transform(this.getParentRenderCmd(), true);
            var boundingBox = this._getBoundingBoxForBake();
            boundingBox.width = 0|(boundingBox.width+0.5);
            boundingBox.height = 0|(boundingBox.height+0.5);
            var bakeContext = locBakeSprite.getCacheContext();
            var ctx = bakeContext.getContext();
            locBakeSprite.setPosition(boundingBox.x, boundingBox.y);
            if(this._updateCache > 0) {
                ctx.fillStyle = bakeContext._currentFillStyle;
                locBakeSprite.resetCanvasSize(boundingBox.width, boundingBox.height);
                bakeContext.setOffset(0 - boundingBox.x, ctx.canvas.height - boundingBox.height + boundingBox.y );
                var child;
                cc.renderer._turnToCacheMode(this.__instanceId);
                if (len > 0) {
                    node.sortAllChildren();
                    for (i = 0; i < len; i++) {
                        child = children[i];
                        if (child._localZOrder < 0)
                            child._renderCmd.visit(this);
                        else
                            break;
                    }
                    cc.renderer.pushRenderCommand(this);
                    for (; i < len; i++) {
                        children[i]._renderCmd.visit(this);
                    }
                } else
                    cc.renderer.pushRenderCommand(this);
                cc.renderer._renderingToCacheCanvas(bakeContext, this.__instanceId);
                locBakeSprite.transform();
                this._updateCache--;
            }
            this._cacheDirty = false;
        }
    };
    proto.visit = function(parentCmd){
        if(!this._isBaked){
            this.originVisit();
            return;
        }
        var node = this._node;
        if (!node._visible)
            return;
        this._syncStatus(parentCmd);
        cc.renderer.pushRenderCommand(this._bakeRenderCmd);
        this._bakeSprite._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        this._bakeSprite.visit(this);
        this._dirtyFlag = 0;
    };
    proto._getBoundingBoxForBake = function(){
        var node = this._node;
        var rect = cc.rect(0, 0, node._contentSize.width, node._contentSize.height);
        var trans = node.getNodeToWorldTransform();
        rect = cc.rectApplyAffineTransform(rect, node.getNodeToWorldTransform());
        if (!node._children || node._children.length === 0)
            return rect;
        var locChildren = node._children;
        for (var i = 0; i < locChildren.length; i++) {
            var child = locChildren[i];
            if (child && child._visible) {
                var childRect = child._getBoundingBoxToCurrentNode(trans);
                rect = cc.rectUnion(rect, childRect);
            }
        }
        return rect;
    };
})();
(function(){
    cc.LayerGradient.CanvasRenderCmd = function(renderable){
        cc.LayerColor.CanvasRenderCmd.call(this, renderable);
        this._needDraw = true;
        this._startPoint = cc.p(0, 0);
        this._endPoint = cc.p(0, 0);
        this._startStopStr = null;
        this._endStopStr = null;
    };
    var proto = cc.LayerGradient.CanvasRenderCmd.prototype = Object.create(cc.LayerColor.CanvasRenderCmd.prototype);
    proto.constructor = cc.LayerGradient.CanvasRenderCmd;
    proto.rendering = function (ctx, scaleX, scaleY) {
        var wrapper = ctx || cc._renderContext, context = wrapper.getContext(),
            node = this._node,
            opacity = this._displayedOpacity / 255;
        if (opacity === 0)
            return;
        var locWidth = node._contentSize.width, locHeight = node._contentSize.height;
        wrapper.setCompositeOperation(this._blendFuncStr);
        wrapper.setGlobalAlpha(opacity);
        var gradient = context.createLinearGradient(this._startPoint.x, this._startPoint.y, this._endPoint.x, this._endPoint.y);
        if(node._colorStops){
             for(var i=0; i < node._colorStops.length; i++) {
                 var stop = node._colorStops[i];
                 gradient.addColorStop(stop.p, this._colorStopsStr[i]);
             }
        }else{
            gradient.addColorStop(0, this._startStopStr);
            gradient.addColorStop(1, this._endStopStr);
        }
        wrapper.setFillStyle(gradient);
        wrapper.setTransform(this._worldTransform, scaleX, scaleY);
        context.fillRect(0, 0, locWidth , -locHeight );
        cc.g_NumberOfDraws++;
    };
    proto.updateStatus = function () {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        if (locFlag & flags.gradientDirty) {
            this._dirtyFlag |= flags.colorDirty;
            this._dirtyFlag = locFlag & flags.gradientDirty ^ locFlag;
        }
        cc.Node.RenderCmd.prototype.updateStatus.call(this);
    };
    proto._syncStatus = function (parentCmd) {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        if (locFlag & flags.gradientDirty) {
            this._dirtyFlag |= flags.colorDirty;
            this._dirtyFlag = locFlag & flags.gradientDirty ^ locFlag;
        }
        cc.Node.RenderCmd.prototype._syncStatus.call(this, parentCmd);
    };
    proto._updateColor = function() {
        var node = this._node;
        var contentSize = node._contentSize;
        var tWidth = contentSize.width * 0.5, tHeight = contentSize.height * 0.5;
        var angle = cc.pAngleSigned(cc.p(0, -1), node._alongVector);
        var p1 = cc.pRotateByAngle(cc.p(0, -1), cc.p(0,0), angle);
        var factor = Math.min(Math.abs(1 / p1.x), Math.abs(1/ p1.y));
        this._startPoint.x = tWidth * (-p1.x * factor) + tWidth;
        this._startPoint.y = tHeight * (p1.y * factor) - tHeight;
        this._endPoint.x = tWidth * (p1.x * factor) + tWidth;
        this._endPoint.y = tHeight * (-p1.y * factor) - tHeight;
        var locStartColor = this._displayedColor, locEndColor = node._endColor;
        var startOpacity = node._startOpacity/255, endOpacity = node._endOpacity/255;
        this._startStopStr = "rgba(" + Math.round(locStartColor.r) + "," + Math.round(locStartColor.g) + ","
            + Math.round(locStartColor.b) + "," + startOpacity.toFixed(4) + ")";
        this._endStopStr = "rgba(" + Math.round(locEndColor.r) + "," + Math.round(locEndColor.g) + ","
            + Math.round(locEndColor.b) + "," + endOpacity.toFixed(4) + ")";
        if( node._colorStops){
            this._startOpacity = 0;
            this._endOpacity = 0;
            this._colorStopsStr = [];
            for(var i =0; i < node._colorStops.length; i++){
                var stopColor = node._colorStops[i].color;
                var stopOpacity = stopColor.a == null ? 1 : stopColor.a / 255;
                this._colorStopsStr.push("rgba(" + Math.round(stopColor.r) + "," + Math.round(stopColor.g) + ","
                    + Math.round(stopColor.b) + "," + stopOpacity.toFixed(4) + ")");
            }
        }
    };
})();
cc._tmp.PrototypeSprite = function () {
    var _p = cc.Sprite.prototype;
    cc.defineGetterSetter(_p, "opacityModifyRGB", _p.isOpacityModifyRGB, _p.setOpacityModifyRGB);
    cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
    cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
    _p.dirty;
    _p.flippedX;
    cc.defineGetterSetter(_p, "flippedX", _p.isFlippedX, _p.setFlippedX);
    _p.flippedY;
    cc.defineGetterSetter(_p, "flippedY", _p.isFlippedY, _p.setFlippedY);
    _p.offsetX;
    cc.defineGetterSetter(_p, "offsetX", _p._getOffsetX);
    _p.offsetY;
    cc.defineGetterSetter(_p, "offsetY", _p._getOffsetY);
    _p.atlasIndex;
    _p.texture;
    cc.defineGetterSetter(_p, "texture", _p.getTexture, _p.setTexture);
    _p.textureRectRotated;
    cc.defineGetterSetter(_p, "textureRectRotated", _p.isTextureRectRotated);
    _p.textureAtlas;
    _p.batchNode;
    cc.defineGetterSetter(_p, "batchNode", _p.getBatchNode, _p.setBatchNode);
    _p.quad;
    cc.defineGetterSetter(_p, "quad", _p.getQuad);
};
cc.Sprite = cc.Node.extend({
    dirty:false,
    atlasIndex:0,
    textureAtlas:null,
    _batchNode:null,
    _recursiveDirty:null,
    _hasChildren:null,
    _shouldBeHidden:false,
    _transformToBatch:null,
    _blendFunc:null,
    _texture:null,
    _rect:null,
    _rectRotated:false,
    _offsetPosition:null,
    _unflippedOffsetPositionFromCenter:null,
    _opacityModifyRGB:false,
    _flippedX:false,
    _flippedY:false,
    _textureLoaded:false,
    _className:"Sprite",
    ctor: function (fileName, rect, rotated) {
        var self = this;
        cc.Node.prototype.ctor.call(self);
        this.setAnchorPoint(0.5, 0.5);
        self._loader = new cc.Sprite.LoadManager();
        self._shouldBeHidden = false;
        self._offsetPosition = cc.p(0, 0);
        self._unflippedOffsetPositionFromCenter = cc.p(0, 0);
        self._blendFunc = {src: cc.BLEND_SRC, dst: cc.BLEND_DST};
        self._rect = cc.rect(0, 0, 0, 0);
        self._softInit(fileName, rect, rotated);
    },
    textureLoaded:function(){
        return this._textureLoaded;
    },
    addLoadedEventListener:function(callback, target){
        this.addEventListener("load", callback, target);
    },
    isDirty:function () {
        return this.dirty;
    },
    setDirty:function (bDirty) {
        this.dirty = bDirty;
    },
    isTextureRectRotated:function () {
        return this._rectRotated;
    },
    getAtlasIndex:function () {
        return this.atlasIndex;
    },
    setAtlasIndex:function (atlasIndex) {
        this.atlasIndex = atlasIndex;
    },
    getTextureRect:function () {
        return cc.rect(this._rect);
    },
    getTextureAtlas:function () {
        return this.textureAtlas;
    },
    setTextureAtlas:function (textureAtlas) {
        this.textureAtlas = textureAtlas;
    },
    getOffsetPosition:function () {
        return cc.p(this._offsetPosition);
    },
    _getOffsetX: function () {
        return this._offsetPosition.x;
    },
    _getOffsetY: function () {
        return this._offsetPosition.y;
    },
    getBlendFunc:function () {
        return this._blendFunc;
    },
    initWithSpriteFrame:function (spriteFrame) {
        cc.assert(spriteFrame, cc._LogInfos.Sprite_initWithSpriteFrame);
        return this.setSpriteFrame(spriteFrame);
    },
    initWithSpriteFrameName:function (spriteFrameName) {
        cc.assert(spriteFrameName, cc._LogInfos.Sprite_initWithSpriteFrameName);
        var frame = cc.spriteFrameCache.getSpriteFrame(spriteFrameName);
        cc.assert(frame, spriteFrameName + cc._LogInfos.Sprite_initWithSpriteFrameName1);
        return this.initWithSpriteFrame(frame);
    },
    useBatchNode:function (batchNode) {
        this.textureAtlas = batchNode.getTextureAtlas();
        this._batchNode = batchNode;
    },
    setVertexRect:function (rect) {
        var locRect = this._rect;
        locRect.x = rect.x;
        locRect.y = rect.y;
        locRect.width = rect.width;
        locRect.height = rect.height;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    sortAllChildren:function () {
        if (this._reorderChildDirty) {
            var _children = this._children;
            cc.Node.prototype.sortAllChildren.call(this);
            if (this._batchNode) {
                this._arrayMakeObjectsPerformSelector(_children, cc.Node._stateCallbackType.sortAllChildren);
            }
            this._reorderChildDirty = false;
        }
    },
    reorderChild:function (child, zOrder) {
        cc.assert(child, cc._LogInfos.Sprite_reorderChild_2);
        if(this._children.indexOf(child) === -1){
            cc.log(cc._LogInfos.Sprite_reorderChild);
            return;
        }
        if (zOrder === child.zIndex)
            return;
        if (this._batchNode && !this._reorderChildDirty) {
            this._setReorderChildDirtyRecursively();
            this._batchNode.reorderBatch(true);
        }
        cc.Node.prototype.reorderChild.call(this, child, zOrder);
    },
    removeChild:function (child, cleanup) {
        if (this._batchNode)
            this._batchNode.removeSpriteFromAtlas(child);
        cc.Node.prototype.removeChild.call(this, child, cleanup);
    },
    setVisible:function (visible) {
        cc.Node.prototype.setVisible.call(this, visible);
        this._renderCmd.setDirtyRecursively(true);
    },
    removeAllChildren:function (cleanup) {
        var locChildren = this._children, locBatchNode = this._batchNode;
        if (locBatchNode && locChildren != null) {
            for (var i = 0, len = locChildren.length; i < len; i++)
                locBatchNode.removeSpriteFromAtlas(locChildren[i]);
        }
        cc.Node.prototype.removeAllChildren.call(this, cleanup);
        this._hasChildren = false;
    },
    ignoreAnchorPointForPosition:function (relative) {
        if(this._batchNode){
            cc.log(cc._LogInfos.Sprite_ignoreAnchorPointForPosition);
            return;
        }
        cc.Node.prototype.ignoreAnchorPointForPosition.call(this, relative);
    },
    setFlippedX:function (flippedX) {
        if (this._flippedX !== flippedX) {
            this._flippedX = flippedX;
            this.setTextureRect(this._rect, this._rectRotated, this._contentSize);
            this.setNodeDirty(true);
        }
    },
    setFlippedY:function (flippedY) {
        if (this._flippedY !== flippedY) {
            this._flippedY = flippedY;
            this.setTextureRect(this._rect, this._rectRotated, this._contentSize);
            this.setNodeDirty(true);
        }
    },
    isFlippedX:function () {
        return this._flippedX;
    },
    isFlippedY:function () {
        return this._flippedY;
    },
    setOpacityModifyRGB: function (modify) {
        if (this._opacityModifyRGB !== modify) {
            this._opacityModifyRGB = modify;
            this._renderCmd._setColorDirty();
        }
    },
    isOpacityModifyRGB:function () {
        return this._opacityModifyRGB;
    },
    setDisplayFrameWithAnimationName:function (animationName, frameIndex) {
        cc.assert(animationName, cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_3);
        var cache = cc.animationCache.getAnimation(animationName);
        if(!cache){
            cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName);
            return;
        }
        var animFrame = cache.getFrames()[frameIndex];
        if(!animFrame){
            cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_2);
            return;
        }
        this.setSpriteFrame(animFrame.getSpriteFrame());
    },
    getBatchNode:function () {
        return this._batchNode;
    },
    _setReorderChildDirtyRecursively:function () {
        if (!this._reorderChildDirty) {
            this._reorderChildDirty = true;
            var pNode = this._parent;
            while (pNode && pNode !== this._batchNode) {
                pNode._setReorderChildDirtyRecursively();
                pNode = pNode.parent;
            }
        }
    },
    getTexture:function () {
        return this._texture;
    },
    _softInit: function (fileName, rect, rotated) {
        if (fileName === undefined)
            cc.Sprite.prototype.init.call(this);
        else if (cc.isString(fileName)) {
            if (fileName[0] === "#") {
                var frameName = fileName.substr(1, fileName.length - 1);
                var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
                if (spriteFrame)
                    this.initWithSpriteFrame(spriteFrame);
                else
                    cc.log("%s does not exist", fileName);
            } else {
                cc.Sprite.prototype.init.call(this, fileName, rect);
            }
        } else if (typeof fileName === "object") {
            if (fileName instanceof cc.Texture2D) {
                this.initWithTexture(fileName, rect, rotated);
            } else if (fileName instanceof cc.SpriteFrame) {
                this.initWithSpriteFrame(fileName);
            } else if ((fileName instanceof HTMLImageElement) || (fileName instanceof HTMLCanvasElement)) {
                var texture2d = new cc.Texture2D();
                texture2d.initWithElement(fileName);
                texture2d.handleLoadedTexture();
                this.initWithTexture(texture2d);
            }
        }
    },
    getQuad:function () {
        return null;
    },
    setBlendFunc: function (src, dst) {
        var locBlendFunc = this._blendFunc;
        if (dst === undefined) {
            locBlendFunc.src = src.src;
            locBlendFunc.dst = src.dst;
        } else {
            locBlendFunc.src = src;
            locBlendFunc.dst = dst;
        }
        this._renderCmd.updateBlendFunc(locBlendFunc);
    },
    init: function () {
        var _t = this;
        if (arguments.length > 0)
            return _t.initWithFile(arguments[0], arguments[1]);
        cc.Node.prototype.init.call(_t);
        _t.dirty = _t._recursiveDirty = false;
        _t._blendFunc.src = cc.BLEND_SRC;
        _t._blendFunc.dst = cc.BLEND_DST;
        _t.texture = null;
        _t._flippedX = _t._flippedY = false;
        _t.anchorX = 0.5;
        _t.anchorY = 0.5;
        _t._offsetPosition.x = 0;
        _t._offsetPosition.y = 0;
        _t._hasChildren = false;
        _t.setTextureRect(cc.rect(0, 0, 0, 0), false, cc.size(0, 0));
        return true;
    },
    initWithFile:function (filename, rect) {
        cc.assert(filename, cc._LogInfos.Sprite_initWithFile);
        var tex = cc.textureCache.getTextureForKey(filename);
        if (!tex) {
            tex = cc.textureCache.addImage(filename);
        }
        if (!tex.isLoaded()) {
            this._loader.clear();
            this._loader.once(tex, function () {
                this.initWithFile(filename, rect);
                this.dispatchEvent("load");
            }, this);
            return false;
        }
        if (!rect) {
            var size = tex.getContentSize();
            rect = cc.rect(0, 0, size.width, size.height);
        }
        return this.initWithTexture(tex, rect);
    },
    initWithTexture: function (texture, rect, rotated, counterclockwise) {
        var _t = this;
        cc.assert(arguments.length !== 0, cc._LogInfos.CCSpriteBatchNode_initWithTexture);
        this._loader.clear();
        _t._textureLoaded = texture.isLoaded();
        if (!_t._textureLoaded) {
            this._loader.once(texture, function () {
                this.initWithTexture(texture, rect, rotated, counterclockwise);
                this.dispatchEvent("load");
            }, this);
            return false;
        }
        rotated = rotated || false;
        texture = this._renderCmd._handleTextureForRotatedTexture(texture, rect, rotated, counterclockwise);
        if (!cc.Node.prototype.init.call(_t))
            return false;
        _t._batchNode = null;
        _t._recursiveDirty = false;
        _t.dirty = false;
        _t._opacityModifyRGB = true;
        _t._blendFunc.src = cc.BLEND_SRC;
        _t._blendFunc.dst = cc.BLEND_DST;
        _t._flippedX = _t._flippedY = false;
        _t._offsetPosition.x = 0;
        _t._offsetPosition.y = 0;
        _t._hasChildren = false;
        _t._rectRotated = rotated;
        if (rect) {
            _t._rect.x = rect.x;
            _t._rect.y = rect.y;
            _t._rect.width = rect.width;
            _t._rect.height = rect.height;
        }
        if (!rect)
            rect = cc.rect(0, 0, texture.width, texture.height);
        this._renderCmd._checkTextureBoundary(texture, rect, rotated);
        _t.setTexture(texture);
        _t.setTextureRect(rect, rotated);
        _t.setBatchNode(null);
        return true;
    },
    setTextureRect: function (rect, rotated, untrimmedSize, needConvert) {
        var _t = this;
        _t._rectRotated = rotated || false;
        _t.setContentSize(untrimmedSize || rect);
        _t.setVertexRect(rect);
        _t._renderCmd._setTextureCoords(rect, needConvert);
        var relativeOffsetX = _t._unflippedOffsetPositionFromCenter.x, relativeOffsetY = _t._unflippedOffsetPositionFromCenter.y;
        if (_t._flippedX)
            relativeOffsetX = -relativeOffsetX;
        if (_t._flippedY)
            relativeOffsetY = -relativeOffsetY;
        var locRect = _t._rect;
        _t._offsetPosition.x = relativeOffsetX + (_t._contentSize.width - locRect.width) / 2;
        _t._offsetPosition.y = relativeOffsetY + (_t._contentSize.height - locRect.height) / 2;
    },
    addChild: function (child, localZOrder, tag) {
        cc.assert(child, cc._LogInfos.CCSpriteBatchNode_addChild_2);
        if (localZOrder == null)
            localZOrder = child._localZOrder;
        if (tag == null)
            tag = child.tag;
        if(this._renderCmd._setBatchNodeForAddChild(child)){
            cc.Node.prototype.addChild.call(this, child, localZOrder, tag);
            this._hasChildren = true;
        }
    },
    setSpriteFrame: function (newFrame) {
        var _t = this;
        if(cc.isString(newFrame)){
            newFrame = cc.spriteFrameCache.getSpriteFrame(newFrame);
            cc.assert(newFrame, cc._LogInfos.Sprite_setSpriteFrame)
        }
        this._loader.clear();
        this.setNodeDirty(true);
        var pNewTexture = newFrame.getTexture();
        _t._textureLoaded = newFrame.textureLoaded();
        this._loader.clear();
        if (!_t._textureLoaded) {
            this._loader.once(pNewTexture, function () {
                this.setSpriteFrame(newFrame);
                this.dispatchEvent("load");
            }, this);
            return false;
        }
        var frameOffset = newFrame.getOffset();
        _t._unflippedOffsetPositionFromCenter.x = frameOffset.x;
        _t._unflippedOffsetPositionFromCenter.y = frameOffset.y;
        if (pNewTexture !== _t._texture) {
            this._renderCmd._setTexture(pNewTexture);
            _t.setColor(_t._realColor);
        }
        _t.setTextureRect(newFrame.getRect(), newFrame.isRotated(), newFrame.getOriginalSize());
    },
    setDisplayFrame: function(newFrame){
        cc.log(cc._LogInfos.Sprite_setDisplayFrame);
        this.setSpriteFrame(newFrame);
    },
    isFrameDisplayed: function(frame){
        return this._renderCmd.isFrameDisplayed(frame);
    },
    displayFrame: function () {
        return this.getSpriteFrame();
    },
    getSpriteFrame: function () {
        return new cc.SpriteFrame(this._texture,
            cc.rectPointsToPixels(this._rect),
            this._rectRotated,
            cc.pointPointsToPixels(this._unflippedOffsetPositionFromCenter),
            cc.sizePointsToPixels(this._contentSize));
    },
    setBatchNode:function (spriteBatchNode) {
        var _t = this;
        _t._batchNode = spriteBatchNode;
        if (!_t._batchNode) {
            _t.atlasIndex = cc.Sprite.INDEX_NOT_INITIALIZED;
            _t.textureAtlas = null;
            _t._recursiveDirty = false;
            _t.dirty = false;
        } else {
            _t._transformToBatch = cc.affineTransformIdentity();
            _t.textureAtlas = _t._batchNode.getTextureAtlas();
        }
    },
    setTexture: function (texture) {
        if(!texture)
            return this._renderCmd._setTexture(null);
        var isFileName = cc.isString(texture);
        if(isFileName)
            texture = cc.textureCache.addImage(texture);
        this._loader.clear();
        if (!texture._textureLoaded) {
            this._loader.once(texture, function () {
                this.setTexture(texture);
                this.dispatchEvent("load");
            }, this);
            return false;
        }
        this._renderCmd._setTexture(texture);
        if (isFileName)
            this._changeRectWithTexture(texture);
        this.setColor(this._realColor);
        this._textureLoaded = true;
    },
    _changeRectWithTexture: function(texture){
        var contentSize = texture._contentSize;
        var rect = cc.rect(
            0, 0,
            contentSize.width, contentSize.height
        );
        this.setTextureRect(rect);
    },
    _createRenderCmd: function(){
        if(cc._renderType === cc.game.RENDER_TYPE_CANVAS)
            return new cc.Sprite.CanvasRenderCmd(this);
        else
            return new cc.Sprite.WebGLRenderCmd(this);
    }
});
cc.Sprite.create = function (fileName, rect, rotated) {
    return new cc.Sprite(fileName, rect, rotated);
};
cc.Sprite.createWithTexture = cc.Sprite.create;
cc.Sprite.createWithSpriteFrameName = cc.Sprite.create;
cc.Sprite.createWithSpriteFrame = cc.Sprite.create;
cc.Sprite.INDEX_NOT_INITIALIZED = -1;
cc.EventHelper.prototype.apply(cc.Sprite.prototype);
cc.assert(cc.isFunction(cc._tmp.PrototypeSprite), cc._LogInfos.MissingFile, "SpritesPropertyDefine.js");
cc._tmp.PrototypeSprite();
delete cc._tmp.PrototypeSprite;
(function () {
    var manager = cc.Sprite.LoadManager = function () {
        this.list = [];
    };
    manager.prototype.add = function (source, callback, target) {
        if (!source || !source.addEventListener) return;
        source.addEventListener('load', callback, target);
        this.list.push({
            source: source,
            listener: callback,
            target: target
        });
    };
    manager.prototype.once = function (source, callback, target) {
        if (!source || !source.addEventListener) return;
        var tmpCallback = function (event) {
            source.removeEventListener('load', tmpCallback, target);
            callback.call(target, event);
        };
        source.addEventListener('load', tmpCallback, target);
        this.list.push({
            source: source,
            listener: tmpCallback,
            target: target
        });
    };
    manager.prototype.clear = function () {
        while (this.list.length > 0) {
            var item = this.list.pop();
            item.source.removeEventListener('load', item.listener, item.target);
        }
    };
})();
(function() {
    cc.Sprite.CanvasRenderCmd = function (renderable) {
        cc.Node.CanvasRenderCmd.call(this, renderable);
        this._needDraw = true;
        this._textureCoord = {
            renderX: 0,
            renderY: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            validRect: false
        };
        this._blendFuncStr = "source-over";
        this._colorized = false;
        this._canUseDirtyRegion = true;
        this._textureToRender = null;
    };
    var proto = cc.Sprite.CanvasRenderCmd.prototype = Object.create(cc.Node.CanvasRenderCmd.prototype);
    proto.constructor = cc.Sprite.CanvasRenderCmd;
    proto.setDirtyRecursively = function (value) {};
    proto._setTexture = function (texture) {
        var node = this._node;
        if (node._texture !== texture) {
            if (texture) {
                node._textureLoaded = texture._textureLoaded;
            }else{
                node._textureLoaded = false;
            }
            node._texture = texture;
            this._updateColor();
        }
    };
    proto._setColorDirty = function () {
        this.setDirtyFlag(cc.Node._dirtyFlags.colorDirty | cc.Node._dirtyFlags.opacityDirty);
    };
    proto.isFrameDisplayed = function (frame) {
        var node = this._node;
        if (frame.getTexture() !== node._texture)
            return false;
        return cc.rectEqualToRect(frame.getRect(), node._rect);
    };
    proto.updateBlendFunc = function (blendFunc) {
        this._blendFuncStr = cc.Node.CanvasRenderCmd._getCompositeOperationByBlendFunc(blendFunc);
    };
    proto._setBatchNodeForAddChild = function (child) {
        return true;
    };
    proto._handleTextureForRotatedTexture = function (texture, rect, rotated, counterclockwise) {
        if (rotated && texture.isLoaded()) {
            var tempElement = texture.getHtmlElementObj();
            tempElement = cc.Sprite.CanvasRenderCmd._cutRotateImageToCanvas(tempElement, rect, counterclockwise);
            var tempTexture = new cc.Texture2D();
            tempTexture.initWithElement(tempElement);
            tempTexture.handleLoadedTexture();
            texture = tempTexture;
            rect.x = rect.y = 0;
            this._node._rect = cc.rect(0, 0, rect.width, rect.height);
        }
        return texture;
    };
    proto._checkTextureBoundary = function (texture, rect, rotated) {
        if (texture && texture.url) {
            var _x = rect.x + rect.width, _y = rect.y + rect.height;
            if (_x > texture.width)
                cc.error(cc._LogInfos.RectWidth, texture.url);
            if (_y > texture.height)
                cc.error(cc._LogInfos.RectHeight, texture.url);
        }
    };
    proto.rendering = function (ctx, scaleX, scaleY) {
        var node = this._node;
        var locTextureCoord = this._textureCoord, alpha = (this._displayedOpacity / 255);
        var texture = this._textureToRender || node._texture;
        if ((texture && (locTextureCoord.width === 0 || locTextureCoord.height === 0|| !texture._textureLoaded)) || alpha === 0)
            return;
        var wrapper = ctx || cc._renderContext, context = wrapper.getContext();
        var locX = node._offsetPosition.x, locHeight = node._rect.height, locWidth = node._rect.width,
            locY = -node._offsetPosition.y - locHeight, image;
        wrapper.setTransform(this._worldTransform, scaleX, scaleY);
        wrapper.setCompositeOperation(this._blendFuncStr);
        wrapper.setGlobalAlpha(alpha);
        if(node._flippedX || node._flippedY)
            wrapper.save();
        if (node._flippedX) {
            locX = -locX - locWidth;
            context.scale(-1, 1);
        }
        if (node._flippedY) {
            locY = node._offsetPosition.y;
            context.scale(1, -1);
        }
        var sx, sy, sw, sh, x, y, w, h;
        if (this._colorized) {
            sx = 0;
            sy = 0;
        }else{
            sx = locTextureCoord.renderX;
            sy = locTextureCoord.renderY;
        }
        sw = locTextureCoord.width;
        sh = locTextureCoord.height;
        x = locX;
        y = locY;
        w = locWidth;
        h = locHeight;
        if (texture && texture._htmlElementObj) {
            image = texture._htmlElementObj;
            if (texture._pattern !== "") {
                wrapper.setFillStyle(context.createPattern(image, texture._pattern));
                context.fillRect(x, y, w, h);
            } else {
                context.drawImage(image,
                    sx, sy, sw, sh,
                    x, y, w, h);
            }
        } else {
            var contentSize = node._contentSize;
            if (locTextureCoord.validRect) {
                var curColor = this._displayedColor;
                wrapper.setFillStyle("rgba(" + curColor.r + "," + curColor.g + "," + curColor.b + ",1)");
                context.fillRect(x, y, contentSize.width * scaleX, contentSize.height * scaleY);
            }
        }
        if(node._flippedX || node._flippedY)
            wrapper.restore();
        cc.g_NumberOfDraws++;
    };
    proto._updateColor = function(){
        var node = this._node;
        var texture = node._texture, rect = this._textureCoord;
        var dColor = this._displayedColor;
        if(texture){
            if(dColor.r !== 255 || dColor.g !== 255 || dColor.b !== 255){
                this._textureToRender = texture._generateColorTexture(dColor.r, dColor.g, dColor.b, rect);
                this._colorized = true;
            }else if(texture){
                this._textureToRender = texture;
                this._colorized = false;
            }
        }
    };
    proto._textureLoadedCallback = function (sender) {
        var node = this;
        if (node._textureLoaded)
            return;
        node._textureLoaded = true;
        var locRect = node._rect, locRenderCmd = this._renderCmd;
        if (!locRect) {
            locRect = cc.rect(0, 0, sender.width, sender.height);
        } else if (cc._rectEqualToZero(locRect)) {
            locRect.width = sender.width;
            locRect.height = sender.height;
        }
        node.texture = sender;
        node.setTextureRect(locRect, node._rectRotated);
        var locColor = locRenderCmd._displayedColor;
        if (locColor.r !== 255 || locColor.g !== 255 || locColor.b !== 255)
            locRenderCmd._updateColor();
        node.setBatchNode(node._batchNode);
        node.dispatchEvent("load");
    };
    proto._setTextureCoords = function (rect, needConvert) {
        if (needConvert === undefined)
            needConvert = true;
        var locTextureRect = this._textureCoord,
            scaleFactor = needConvert ? cc.contentScaleFactor() : 1;
        locTextureRect.renderX = locTextureRect.x = 0 | (rect.x * scaleFactor);
        locTextureRect.renderY = locTextureRect.y = 0 | (rect.y * scaleFactor);
        locTextureRect.width = 0 | (rect.width * scaleFactor);
        locTextureRect.height = 0 | (rect.height * scaleFactor);
        locTextureRect.validRect = !(locTextureRect.width === 0 || locTextureRect.height === 0 || locTextureRect.x < 0 || locTextureRect.y < 0);
    };
    cc.Sprite.CanvasRenderCmd._cutRotateImageToCanvas = function (texture, rect, counterclockwise) {
        if (!texture)
            return null;
        if (!rect)
            return texture;
        counterclockwise = counterclockwise == null? true: counterclockwise;
        var nCanvas = document.createElement("canvas");
        nCanvas.width = rect.width;
        nCanvas.height = rect.height;
        var ctx = nCanvas.getContext("2d");
        ctx.translate(nCanvas.width / 2, nCanvas.height / 2);
        if(counterclockwise)
            ctx.rotate(-1.5707963267948966);
        else
            ctx.rotate(1.5707963267948966);
        ctx.drawImage(texture, rect.x, rect.y, rect.height, rect.width, -rect.height / 2, -rect.width / 2, rect.height, rect.width);
        return nCanvas;
    };
})();
cc.BakeSprite = cc.Sprite.extend({
    _cacheCanvas: null,
    _cacheContext: null,
    ctor: function(){
        cc.Sprite.prototype.ctor.call(this);
        var canvasElement = document.createElement("canvas");
        canvasElement.width = canvasElement.height = 10;
        this._cacheCanvas = canvasElement;
        this._cacheContext = new cc.CanvasContextWrapper(canvasElement.getContext("2d"));
        var texture = new cc.Texture2D();
        texture.initWithElement(canvasElement);
        texture.handleLoadedTexture();
        this.setTexture(texture);
    },
    getCacheContext: function(){
        return this._cacheContext;
    },
    getCacheCanvas: function(){
        return this._cacheCanvas;
    },
    resetCanvasSize: function(sizeOrWidth, height){
        var locCanvas = this._cacheCanvas,
            locContext = this._cacheContext,
            strokeStyle = locContext._context.strokeStyle,
            fillStyle = locContext._context.fillStyle;
        if(height === undefined){
            height = sizeOrWidth.height;
            sizeOrWidth = sizeOrWidth.width;
        }
        locCanvas.width = sizeOrWidth;
        locCanvas.height = height;
        if(strokeStyle !== locContext._context.strokeStyle)
            locContext._context.strokeStyle = strokeStyle;
        if(fillStyle !== locContext._context.fillStyle)
            locContext._context.fillStyle = fillStyle;
        this.getTexture().handleLoadedTexture();
        this.setTextureRect(cc.rect(0,0, sizeOrWidth, height), false, null, false);
    }
});
cc.AnimationFrame = cc.Class.extend({
    _spriteFrame:null,
    _delayPerUnit:0,
    _userInfo:null,
    ctor:function (spriteFrame, delayUnits, userInfo) {
        this._spriteFrame = spriteFrame || null;
        this._delayPerUnit = delayUnits || 0;
        this._userInfo = userInfo || null;
    },
    clone: function(){
        var frame = new cc.AnimationFrame();
        frame.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
        return frame;
    },
    copyWithZone:function (pZone) {
        return cc.clone(this);
    },
    copy:function (pZone) {
        var newFrame = new cc.AnimationFrame();
        newFrame.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
        return newFrame;
    },
    initWithSpriteFrame:function (spriteFrame, delayUnits, userInfo) {
        this._spriteFrame = spriteFrame;
        this._delayPerUnit = delayUnits;
        this._userInfo = userInfo;
        return true;
    },
    getSpriteFrame:function () {
        return this._spriteFrame;
    },
    setSpriteFrame:function (spriteFrame) {
        this._spriteFrame = spriteFrame;
    },
    getDelayUnits:function () {
        return this._delayPerUnit;
    },
    setDelayUnits:function (delayUnits) {
        this._delayPerUnit = delayUnits;
    },
    getUserInfo:function () {
        return this._userInfo;
    },
    setUserInfo:function (userInfo) {
        this._userInfo = userInfo;
    }
});
cc.AnimationFrame.create = function(spriteFrame,delayUnits,userInfo){
    return new cc.AnimationFrame(spriteFrame,delayUnits,userInfo);
};
cc.Animation = cc.Class.extend({
    _frames:null,
    _loops:0,
    _restoreOriginalFrame:false,
    _duration:0,
    _delayPerUnit:0,
    _totalDelayUnits:0,
    ctor:function (frames, delay, loops) {
        this._frames = [];
		if (frames === undefined) {
			this.initWithSpriteFrames(null, 0);
		} else {
			var frame0 = frames[0];
			if(frame0){
				if (frame0 instanceof cc.SpriteFrame) {
					this.initWithSpriteFrames(frames, delay, loops);
				}else if(frame0 instanceof cc.AnimationFrame) {
					this.initWithAnimationFrames(frames, delay, loops);
				}
			}
		}
    },
    getFrames:function () {
        return this._frames;
    },
    setFrames:function (frames) {
        this._frames = frames;
    },
    addSpriteFrame:function (frame) {
        var animFrame = new cc.AnimationFrame();
        animFrame.initWithSpriteFrame(frame, 1, null);
        this._frames.push(animFrame);
        this._totalDelayUnits++;
    },
    addSpriteFrameWithFile:function (fileName) {
        var texture = cc.textureCache.addImage(fileName);
        var rect = cc.rect(0, 0, 0, 0);
        rect.width = texture.width;
        rect.height = texture.height;
        var frame = new cc.SpriteFrame(texture, rect);
        this.addSpriteFrame(frame);
    },
    addSpriteFrameWithTexture:function (texture, rect) {
        var pFrame = new cc.SpriteFrame(texture, rect);
        this.addSpriteFrame(pFrame);
    },
    initWithAnimationFrames:function (arrayOfAnimationFrames, delayPerUnit, loops) {
        cc.arrayVerifyType(arrayOfAnimationFrames, cc.AnimationFrame);
        this._delayPerUnit = delayPerUnit;
        this._loops = loops === undefined ? 1 : loops;
        this._totalDelayUnits = 0;
        var locFrames = this._frames;
        locFrames.length = 0;
        for (var i = 0; i < arrayOfAnimationFrames.length; i++) {
            var animFrame = arrayOfAnimationFrames[i];
            locFrames.push(animFrame);
            this._totalDelayUnits += animFrame.getDelayUnits();
        }
        return true;
    },
    clone: function(){
        var animation = new cc.Animation();
        animation.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
        animation.setRestoreOriginalFrame(this._restoreOriginalFrame);
        return animation;
    },
    copyWithZone:function (pZone) {
        var pCopy = new cc.Animation();
        pCopy.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
        pCopy.setRestoreOriginalFrame(this._restoreOriginalFrame);
        return pCopy;
    },
    _copyFrames:function(){
       var copyFrames = [];
        for(var i = 0; i< this._frames.length;i++)
            copyFrames.push(this._frames[i].clone());
        return copyFrames;
    },
    copy:function (pZone) {
        return this.copyWithZone(null);
    },
    getLoops:function () {
        return this._loops;
    },
    setLoops:function (value) {
        this._loops = value;
    },
    setRestoreOriginalFrame:function (restOrigFrame) {
        this._restoreOriginalFrame = restOrigFrame;
    },
    getRestoreOriginalFrame:function () {
        return this._restoreOriginalFrame;
    },
    getDuration:function () {
        return this._totalDelayUnits * this._delayPerUnit;
    },
    getDelayPerUnit:function () {
        return this._delayPerUnit;
    },
    setDelayPerUnit:function (delayPerUnit) {
        this._delayPerUnit = delayPerUnit;
    },
    getTotalDelayUnits:function () {
        return this._totalDelayUnits;
    },
    initWithSpriteFrames:function (frames, delay, loops) {
        cc.arrayVerifyType(frames, cc.SpriteFrame);
        this._loops = loops === undefined ? 1 : loops;
        this._delayPerUnit = delay || 0;
        this._totalDelayUnits = 0;
        var locFrames = this._frames;
        locFrames.length = 0;
        if (frames) {
            for (var i = 0; i < frames.length; i++) {
                var frame = frames[i];
                var animFrame = new cc.AnimationFrame();
                animFrame.initWithSpriteFrame(frame, 1, null);
                locFrames.push(animFrame);
            }
            this._totalDelayUnits += frames.length;
        }
        return true;
    },
    retain:function () {
    },
    release:function () {
    }
});
cc.Animation.create = function (frames, delay, loops) {
    return new cc.Animation(frames, delay, loops);
};
cc.Animation.createWithAnimationFrames = cc.Animation.create;
cc.animationCache = {
	_animations: {},
    addAnimation:function (animation, name) {
        this._animations[name] = animation;
    },
    removeAnimation:function (name) {
        if (!name) {
            return;
        }
        if (this._animations[name]) {
            delete this._animations[name];
        }
    },
    getAnimation:function (name) {
        if (this._animations[name])
            return this._animations[name];
        return null;
    },
    _addAnimationsWithDictionary:function (dictionary,plist) {
        var animations = dictionary["animations"];
        if (!animations) {
            cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary);
            return;
        }
        var version = 1;
        var properties = dictionary["properties"];
        if (properties) {
            version = (properties["format"] != null) ? parseInt(properties["format"]) : version;
            var spritesheets = properties["spritesheets"];
            var spriteFrameCache = cc.spriteFrameCache;
            var path = cc.path;
            for (var i = 0; i < spritesheets.length; i++) {
                spriteFrameCache.addSpriteFrames(path.changeBasename(plist, spritesheets[i]));
            }
        }
        switch (version) {
            case 1:
                this._parseVersion1(animations);
                break;
            case 2:
                this._parseVersion2(animations);
                break;
            default :
                cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary_2);
                break;
        }
    },
    addAnimations:function (plist) {
        cc.assert(plist, cc._LogInfos.animationCache_addAnimations_2);
        var dict = cc.loader.getRes(plist);
        if(!dict){
            cc.log(cc._LogInfos.animationCache_addAnimations);
            return;
        }
        this._addAnimationsWithDictionary(dict,plist);
    },
    _parseVersion1:function (animations) {
        var frameCache = cc.spriteFrameCache;
        for (var key in animations) {
            var animationDict = animations[key];
            var frameNames = animationDict["frames"];
            var delay = parseFloat(animationDict["delay"]) || 0;
            var animation = null;
            if (!frameNames) {
                cc.log(cc._LogInfos.animationCache__parseVersion1, key);
                continue;
            }
            var frames = [];
            for (var i = 0; i < frameNames.length; i++) {
                var spriteFrame = frameCache.getSpriteFrame(frameNames[i]);
                if (!spriteFrame) {
                    cc.log(cc._LogInfos.animationCache__parseVersion1_2, key, frameNames[i]);
                    continue;
                }
                var animFrame = new cc.AnimationFrame();
                animFrame.initWithSpriteFrame(spriteFrame, 1, null);
                frames.push(animFrame);
            }
            if (frames.length === 0) {
                cc.log(cc._LogInfos.animationCache__parseVersion1_3, key);
                continue;
            } else if (frames.length !== frameNames.length) {
                cc.log(cc._LogInfos.animationCache__parseVersion1_4, key);
            }
            animation = new cc.Animation(frames, delay, 1);
            cc.animationCache.addAnimation(animation, key);
        }
    },
    _parseVersion2:function (animations) {
        var frameCache = cc.spriteFrameCache;
        for (var key in animations) {
            var animationDict = animations[key];
            var isLoop = animationDict["loop"];
            var loopsTemp = parseInt(animationDict["loops"]);
            var loops = isLoop ? cc.REPEAT_FOREVER : ((isNaN(loopsTemp)) ? 1 : loopsTemp);
            var restoreOriginalFrame = (animationDict["restoreOriginalFrame"] && animationDict["restoreOriginalFrame"] == true) ? true : false;
            var frameArray = animationDict["frames"];
            if (!frameArray) {
                cc.log(cc._LogInfos.animationCache__parseVersion2, key);
                continue;
            }
            var arr = [];
            for (var i = 0; i < frameArray.length; i++) {
                var entry = frameArray[i];
                var spriteFrameName = entry["spriteframe"];
                var spriteFrame = frameCache.getSpriteFrame(spriteFrameName);
                if (!spriteFrame) {
                    cc.log(cc._LogInfos.animationCache__parseVersion2_2, key, spriteFrameName);
                    continue;
                }
                var delayUnits = parseFloat(entry["delayUnits"]) || 0;
                var userInfo = entry["notification"];
                var animFrame = new cc.AnimationFrame();
                animFrame.initWithSpriteFrame(spriteFrame, delayUnits, userInfo);
                arr.push(animFrame);
            }
            var delayPerUnit = parseFloat(animationDict["delayPerUnit"]) || 0;
            var animation = new cc.Animation();
            animation.initWithAnimationFrames(arr, delayPerUnit, loops);
            animation.setRestoreOriginalFrame(restoreOriginalFrame);
            cc.animationCache.addAnimation(animation, key);
        }
    },
	_clear: function () {
		this._animations = {};
	}
};
cc.SpriteFrame = cc.Class.extend({
    _offset:null,
    _originalSize:null,
    _rectInPixels:null,
    _rotated:false,
    _rect:null,
    _offsetInPixels:null,
    _originalSizeInPixels:null,
    _texture:null,
    _textureFilename:"",
    _textureLoaded:false,
    ctor:function (filename, rect, rotated, offset, originalSize) {
        this._offset = cc.p(0, 0);
        this._offsetInPixels = cc.p(0, 0);
        this._originalSize = cc.size(0, 0);
        this._rotated = false;
        this._originalSizeInPixels = cc.size(0, 0);
        this._textureFilename = "";
        this._texture = null;
        this._textureLoaded = false;
        if(filename !== undefined && rect !== undefined ){
            if(rotated === undefined || offset === undefined || originalSize === undefined)
                this.initWithTexture(filename, rect);
            else
                this.initWithTexture(filename, rect, rotated, offset, originalSize)
        }
    },
    textureLoaded:function(){
        return this._textureLoaded;
    },
    addLoadedEventListener:function(callback, target){
        this.addEventListener("load", callback, target);
    },
    getRectInPixels:function () {
        var locRectInPixels = this._rectInPixels;
        return cc.rect(locRectInPixels.x, locRectInPixels.y, locRectInPixels.width, locRectInPixels.height);
    },
    setRectInPixels:function (rectInPixels) {
        if (!this._rectInPixels){
            this._rectInPixels = cc.rect(0,0,0,0);
        }
        this._rectInPixels.x = rectInPixels.x;
        this._rectInPixels.y = rectInPixels.y;
        this._rectInPixels.width = rectInPixels.width;
        this._rectInPixels.height = rectInPixels.height;
        this._rect = cc.rectPixelsToPoints(rectInPixels);
    },
    isRotated:function () {
        return this._rotated;
    },
    setRotated:function (bRotated) {
        this._rotated = bRotated;
    },
    getRect:function () {
        var locRect = this._rect;
        return cc.rect(locRect.x, locRect.y, locRect.width, locRect.height);
    },
    setRect:function (rect) {
        if (!this._rect){
            this._rect = cc.rect(0,0,0,0);
        }
        this._rect.x = rect.x;
        this._rect.y = rect.y;
        this._rect.width = rect.width;
        this._rect.height = rect.height;
        this._rectInPixels = cc.rectPointsToPixels(this._rect);
    },
    getOffsetInPixels:function () {
        return cc.p(this._offsetInPixels);
    },
    setOffsetInPixels:function (offsetInPixels) {
        this._offsetInPixels.x = offsetInPixels.x;
        this._offsetInPixels.y = offsetInPixels.y;
        cc._pointPixelsToPointsOut(this._offsetInPixels, this._offset);
    },
    getOriginalSizeInPixels:function () {
        return cc.size(this._originalSizeInPixels);
    },
    setOriginalSizeInPixels:function (sizeInPixels) {
        this._originalSizeInPixels.width = sizeInPixels.width;
        this._originalSizeInPixels.height = sizeInPixels.height;
    },
    getOriginalSize:function () {
        return cc.size(this._originalSize);
    },
    setOriginalSize:function (sizeInPixels) {
        this._originalSize.width = sizeInPixels.width;
        this._originalSize.height = sizeInPixels.height;
    },
    getTexture:function () {
        if (this._texture)
            return this._texture;
        if (this._textureFilename !== "") {
            var locTexture = cc.textureCache.addImage(this._textureFilename);
            if (locTexture)
                this._textureLoaded = locTexture.isLoaded();
            return locTexture;
        }
        return null;
    },
    setTexture:function (texture) {
        if (this._texture !== texture) {
            var locLoaded = texture.isLoaded();
            this._textureLoaded = locLoaded;
            this._texture = texture;
            if(!locLoaded){
                texture.addEventListener("load", function(sender){
                    this._textureLoaded = true;
                    if(this._rotated && cc._renderType === cc.game.RENDER_TYPE_CANVAS){
                        var tempElement = sender.getHtmlElementObj();
                        tempElement = cc.Sprite.CanvasRenderCmd._cutRotateImageToCanvas(tempElement, this.getRect());
                        var tempTexture = new cc.Texture2D();
                        tempTexture.initWithElement(tempElement);
                        tempTexture.handleLoadedTexture();
                        this.setTexture(tempTexture);
                        var rect = this.getRect();
                        this.setRect(cc.rect(0, 0, rect.width, rect.height));
                    }
                    var locRect = this._rect;
                    if(locRect.width === 0 && locRect.height === 0){
                        var w = sender.width, h = sender.height;
                        this._rect.width = w;
                        this._rect.height = h;
                        this._rectInPixels = cc.rectPointsToPixels(this._rect);
                        this._originalSizeInPixels.width = this._rectInPixels.width;
                        this._originalSizeInPixels.height = this._rectInPixels.height;
                        this._originalSize.width =  w;
                        this._originalSize.height =  h;
                    }
                    this.dispatchEvent("load");
                }, this);
            }
        }
    },
    getOffset:function () {
        return cc.p(this._offset);
    },
    setOffset:function (offsets) {
        this._offset.x = offsets.x;
        this._offset.y = offsets.y;
    },
    clone: function(){
        var frame = new cc.SpriteFrame();
        frame.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
        frame.setTexture(this._texture);
        return frame;
    },
    copyWithZone:function () {
        var copy = new cc.SpriteFrame();
        copy.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
        copy.setTexture(this._texture);
        return copy;
    },
    copy:function () {
        return this.copyWithZone();
    },
    initWithTexture:function (texture, rect, rotated, offset, originalSize) {
        if(arguments.length === 2)
            rect = cc.rectPointsToPixels(rect);
        offset = offset || cc.p(0, 0);
        originalSize = originalSize || rect;
        rotated = rotated || false;
        if (cc.isString(texture)){
            this._texture = null;
            this._textureFilename = texture;
        } else if (texture instanceof cc.Texture2D){
            this.setTexture(texture);
        }
        texture = this.getTexture();
        this._rectInPixels = rect;
        this._rect = cc.rectPixelsToPoints(rect);
        if(texture && texture.url && texture.isLoaded()) {
            var _x, _y;
            if(rotated){
                _x = rect.x + rect.height;
                _y = rect.y + rect.width;
            }else{
                _x = rect.x + rect.width;
                _y = rect.y + rect.height;
            }
            if(_x > texture.getPixelsWide()){
                cc.error(cc._LogInfos.RectWidth, texture.url);
            }
            if(_y > texture.getPixelsHigh()){
                cc.error(cc._LogInfos.RectHeight, texture.url);
            }
        }
        this._offsetInPixels.x = offset.x;
        this._offsetInPixels.y = offset.y;
        cc._pointPixelsToPointsOut(offset, this._offset);
        this._originalSizeInPixels.width = originalSize.width;
        this._originalSizeInPixels.height = originalSize.height;
        cc._sizePixelsToPointsOut(originalSize, this._originalSize);
        this._rotated = rotated;
        return true;
    }
});
cc.EventHelper.prototype.apply(cc.SpriteFrame.prototype);
cc.SpriteFrame.create = function (filename, rect, rotated, offset, originalSize) {
    return new cc.SpriteFrame(filename,rect,rotated,offset,originalSize);
};
cc.SpriteFrame.createWithTexture = cc.SpriteFrame.create;
cc.SpriteFrame._frameWithTextureForCanvas = function (texture, rect, rotated, offset, originalSize) {
    var spriteFrame = new cc.SpriteFrame();
    spriteFrame._texture = texture;
    spriteFrame._rectInPixels = rect;
    spriteFrame._rect = cc.rectPixelsToPoints(rect);
    spriteFrame._offsetInPixels.x = offset.x;
    spriteFrame._offsetInPixels.y = offset.y;
    cc._pointPixelsToPointsOut(spriteFrame._offsetInPixels, spriteFrame._offset);
    spriteFrame._originalSizeInPixels.width = originalSize.width;
    spriteFrame._originalSizeInPixels.height = originalSize.height;
    cc._sizePixelsToPointsOut(spriteFrame._originalSizeInPixels, spriteFrame._originalSize);
    spriteFrame._rotated = rotated;
    return spriteFrame;
};
cc.spriteFrameCache = {
    _CCNS_REG1 : /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/,
    _CCNS_REG2 : /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/,
    _spriteFrames: {},
    _spriteFramesAliases: {},
    _frameConfigCache : {},
    _rectFromString :  function (content) {
        var result = this._CCNS_REG2.exec(content);
        if(!result) return cc.rect(0, 0, 0, 0);
        return cc.rect(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]), parseFloat(result[4]));
    },
    _pointFromString : function (content) {
        var result = this._CCNS_REG1.exec(content);
        if(!result) return cc.p(0,0);
        return cc.p(parseFloat(result[1]), parseFloat(result[2]));
    },
    _sizeFromString : function (content) {
        var result = this._CCNS_REG1.exec(content);
        if(!result) return cc.size(0, 0);
        return cc.size(parseFloat(result[1]), parseFloat(result[2]));
    },
    _getFrameConfig : function(url){
        var dict = cc.loader.getRes(url);
        cc.assert(dict, cc._LogInfos.spriteFrameCache__getFrameConfig_2, url);
        cc.loader.release(url);//release it in loader
        if(dict._inited){
            this._frameConfigCache[url] = dict;
            return dict;
        }
        this._frameConfigCache[url] = this._parseFrameConfig(dict);
        return this._frameConfigCache[url];
    },
    _getFrameConfigByJsonObject: function(url, jsonObject) {
        cc.assert(jsonObject, cc._LogInfos.spriteFrameCache__getFrameConfig_2, url);
        this._frameConfigCache[url] = this._parseFrameConfig(jsonObject);
        return this._frameConfigCache[url];
    },
    _parseFrameConfig: function(dict) {
        var tempFrames = dict["frames"], tempMeta = dict["metadata"] || dict["meta"];
        var frames = {}, meta = {};
        var format = 0;
        if(tempMeta){//init meta
            var tmpFormat = tempMeta["format"];
            format = (tmpFormat.length <= 1) ? parseInt(tmpFormat) : tmpFormat;
            meta.image = tempMeta["textureFileName"] || tempMeta["textureFileName"] || tempMeta["image"];
        }
        for (var key in tempFrames) {
            var frameDict = tempFrames[key];
            if(!frameDict) continue;
            var tempFrame = {};
            if (format == 0) {
                tempFrame.rect = cc.rect(frameDict["x"], frameDict["y"], frameDict["width"], frameDict["height"]);
                tempFrame.rotated = false;
                tempFrame.offset = cc.p(frameDict["offsetX"], frameDict["offsetY"]);
                var ow = frameDict["originalWidth"];
                var oh = frameDict["originalHeight"];
                if (!ow || !oh) {
                    cc.log(cc._LogInfos.spriteFrameCache__getFrameConfig);
                }
                ow = Math.abs(ow);
                oh = Math.abs(oh);
                tempFrame.size = cc.size(ow, oh);
            } else if (format == 1 || format == 2) {
                tempFrame.rect = this._rectFromString(frameDict["frame"]);
                tempFrame.rotated = frameDict["rotated"] || false;
                tempFrame.offset = this._pointFromString(frameDict["offset"]);
                tempFrame.size = this._sizeFromString(frameDict["sourceSize"]);
            } else if (format == 3) {
                var spriteSize = this._sizeFromString(frameDict["spriteSize"]);
                var textureRect = this._rectFromString(frameDict["textureRect"]);
                if (spriteSize) {
                    textureRect = cc.rect(textureRect.x, textureRect.y, spriteSize.width, spriteSize.height);
                }
                tempFrame.rect = textureRect;
                tempFrame.rotated = frameDict["textureRotated"] || false;
                tempFrame.offset = this._pointFromString(frameDict["spriteOffset"]);
                tempFrame.size = this._sizeFromString(frameDict["spriteSourceSize"]);
                tempFrame.aliases = frameDict["aliases"];
            } else {
                var tmpFrame = frameDict["frame"], tmpSourceSize = frameDict["sourceSize"];
                key = frameDict["filename"] || key;
                tempFrame.rect = cc.rect(tmpFrame["x"], tmpFrame["y"], tmpFrame["w"], tmpFrame["h"]);
                tempFrame.rotated = frameDict["rotated"] || false;
                tempFrame.offset = cc.p(0, 0);
                tempFrame.size = cc.size(tmpSourceSize["w"], tmpSourceSize["h"]);
            }
            frames[key] = tempFrame;
        }
        return {_inited: true, frames: frames, meta: meta};
    },
    _addSpriteFramesByObject: function(url, jsonObject, texture) {
        cc.assert(url, cc._LogInfos.spriteFrameCache_addSpriteFrames_2);
        if(!jsonObject || !jsonObject["frames"])
            return;
        var frameConfig = this._frameConfigCache[url] || this._getFrameConfigByJsonObject(url, jsonObject);
        this._createSpriteFrames(url, frameConfig, texture);
    },
    _createSpriteFrames: function(url, frameConfig, texture) {
        var frames = frameConfig.frames, meta = frameConfig.meta;
        if(!texture){
            var texturePath = cc.path.changeBasename(url, meta.image || ".png");
            texture = cc.textureCache.addImage(texturePath);
        }else if(texture instanceof cc.Texture2D){
        }else if(cc.isString(texture)){//string
            texture = cc.textureCache.addImage(texture);
        }else{
            cc.assert(0, cc._LogInfos.spriteFrameCache_addSpriteFrames_3);
        }
        var spAliases = this._spriteFramesAliases, spriteFrames = this._spriteFrames;
        for (var key in frames) {
            var frame = frames[key];
            var spriteFrame = spriteFrames[key];
            if (!spriteFrame) {
                spriteFrame = new cc.SpriteFrame(texture, frame.rect, frame.rotated, frame.offset, frame.size);
                var aliases = frame.aliases;
                if(aliases){//set aliases
                    for(var i = 0, li = aliases.length; i < li; i++){
                        var alias = aliases[i];
                        if (spAliases[alias])
                            cc.log(cc._LogInfos.spriteFrameCache_addSpriteFrames, alias);
                        spAliases[alias] = key;
                    }
                }
                if (cc._renderType === cc.game.RENDER_TYPE_CANVAS && spriteFrame.isRotated()) {
                    var locTexture = spriteFrame.getTexture();
                    if (locTexture.isLoaded()) {
                        var tempElement = spriteFrame.getTexture().getHtmlElementObj();
                        tempElement = cc.Sprite.CanvasRenderCmd._cutRotateImageToCanvas(tempElement, spriteFrame.getRectInPixels());
                        var tempTexture = new cc.Texture2D();
                        tempTexture.initWithElement(tempElement);
                        tempTexture.handleLoadedTexture();
                        spriteFrame.setTexture(tempTexture);
                        var rect = spriteFrame._rect;
                        spriteFrame.setRect(cc.rect(0, 0, rect.width, rect.height));
                    }
                }
                spriteFrames[key] = spriteFrame;
            }
        }
    },
    addSpriteFrames: function (url, texture) {
        cc.assert(url, cc._LogInfos.spriteFrameCache_addSpriteFrames_2);
        var dict = this._frameConfigCache[url] || cc.loader.getRes(url);
        if(!dict || !dict["frames"])
            return;
        var frameConfig = this._frameConfigCache[url] || this._getFrameConfig(url);
        this._createSpriteFrames(url, frameConfig, texture);
    },
    _checkConflict: function (dictionary) {
        var framesDict = dictionary["frames"];
        for (var key in framesDict) {
            if (this._spriteFrames[key]) {
                cc.log(cc._LogInfos.spriteFrameCache__checkConflict, key);
            }
        }
    },
    addSpriteFrame: function (frame, frameName) {
        this._spriteFrames[frameName] = frame;
    },
    removeSpriteFrames: function () {
        this._spriteFrames = {};
        this._spriteFramesAliases = {};
    },
    removeSpriteFrameByName: function (name) {
        if (!name) {
            return;
        }
        if (this._spriteFramesAliases[name]) {
            delete(this._spriteFramesAliases[name]);
        }
        if (this._spriteFrames[name]) {
            delete(this._spriteFrames[name]);
        }
    },
    removeSpriteFramesFromFile: function (url) {
        var self = this, spriteFrames = self._spriteFrames,
            aliases = self._spriteFramesAliases, cfg = self._frameConfigCache[url];
        if(!cfg) return;
        var frames = cfg.frames;
        for (var key in frames) {
            if (spriteFrames[key]) {
                delete(spriteFrames[key]);
                for (var alias in aliases) {//remove alias
                    if(aliases[alias] === key) delete aliases[alias];
                }
            }
        }
    },
    removeSpriteFramesFromTexture: function (texture) {
        var self = this, spriteFrames = self._spriteFrames, aliases = self._spriteFramesAliases;
        for (var key in spriteFrames) {
            var frame = spriteFrames[key];
            if (frame && (frame.getTexture() === texture)) {
                delete(spriteFrames[key]);
                for (var alias in aliases) {//remove alias
                    if(aliases[alias] === key) delete aliases[alias];
                }
            }
        }
    },
    getSpriteFrame: function (name) {
        var self = this, frame = self._spriteFrames[name];
        if (!frame) {
            var key = self._spriteFramesAliases[name];
            if (key) {
                frame = self._spriteFrames[key.toString()];
                if(!frame) delete self._spriteFramesAliases[name];
            }
        }
        return frame;
    },
	_clear: function () {
		this._spriteFrames = {};
		this._spriteFramesAliases = {};
		this._frameConfigCache = {};
	}
};
cc.g_NumberOfDraws = 0;
cc.Director = cc.Class.extend({
    _landscape: false,
    _nextDeltaTimeZero: false,
    _paused: false,
    _purgeDirectorInNextLoop: false,
    _sendCleanupToScene: false,
    _animationInterval: 0.0,
    _oldAnimationInterval: 0.0,
    _projection: 0,
    _contentScaleFactor: 1.0,
    _deltaTime: 0.0,
    _winSizeInPoints: null,
    _lastUpdate: null,
    _nextScene: null,
    _notificationNode: null,
    _openGLView: null,
    _scenesStack: null,
    _projectionDelegate: null,
    _runningScene: null,
    _totalFrames: 0,
    _secondsPerFrame: 0,
    _dirtyRegion: null,
    _scheduler: null,
    _actionManager: null,
    _eventProjectionChanged: null,
    _eventAfterUpdate: null,
    _eventAfterVisit: null,
    _eventAfterDraw: null,
    ctor: function () {
        var self = this;
        self._lastUpdate = Date.now();
        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
            self._lastUpdate = Date.now();
        });
    },
    init: function () {
        this._oldAnimationInterval = this._animationInterval = 1.0 / cc.defaultFPS;
        this._scenesStack = [];
        this._projection = cc.Director.PROJECTION_DEFAULT;
        this._projectionDelegate = null;
        this._totalFrames = 0;
        this._lastUpdate = Date.now();
        this._paused = false;
        this._purgeDirectorInNextLoop = false;
        this._winSizeInPoints = cc.size(0, 0);
        this._openGLView = null;
        this._contentScaleFactor = 1.0;
        this._scheduler = new cc.Scheduler();
        if(cc.ActionManager){
            this._actionManager = new cc.ActionManager();
            this._scheduler.scheduleUpdate(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
        }else{
            this._actionManager = null;
        }
        this._eventAfterUpdate = new cc.EventCustom(cc.Director.EVENT_AFTER_UPDATE);
        this._eventAfterUpdate.setUserData(this);
        this._eventAfterVisit = new cc.EventCustom(cc.Director.EVENT_AFTER_VISIT);
        this._eventAfterVisit.setUserData(this);
        this._eventAfterDraw = new cc.EventCustom(cc.Director.EVENT_AFTER_DRAW);
        this._eventAfterDraw.setUserData(this);
        this._eventProjectionChanged = new cc.EventCustom(cc.Director.EVENT_PROJECTION_CHANGED);
        this._eventProjectionChanged.setUserData(this);
        return true;
    },
    calculateDeltaTime: function () {
        var now = Date.now();
        if (this._nextDeltaTimeZero) {
            this._deltaTime = 0;
            this._nextDeltaTimeZero = false;
        } else {
            this._deltaTime = (now - this._lastUpdate) / 1000;
        }
        if ((cc.game.config[cc.game.CONFIG_KEY.debugMode] > 0) && (this._deltaTime > 0.2))
            this._deltaTime = 1 / 60.0;
        this._lastUpdate = now;
    },
    convertToGL: function (uiPoint) {
        var docElem = document.documentElement;
        var view = cc.view;
        var box = element.getBoundingClientRect();
        box.left += window.pageXOffset - docElem.clientLeft;
        box.top += window.pageYOffset - docElem.clientTop;
        var x = view._devicePixelRatio * (uiPoint.x - box.left);
        var y = view._devicePixelRatio * (box.top + box.height - uiPoint.y);
        return view._isRotated ? {x: view._viewPortRect.width - y, y: x} : {x: x, y: y};
    },
    convertToUI: function (glPoint) {
        var docElem = document.documentElement;
        var view = cc.view;
        var box = element.getBoundingClientRect();
        box.left += window.pageXOffset - docElem.clientLeft;
        box.top += window.pageYOffset - docElem.clientTop;
        var uiPoint = {x: 0, y: 0};
        if (view._isRotated) {
            uiPoint.x = box.left + glPoint.y / view._devicePixelRatio;
            uiPoint.y = box.top + box.height - (view._viewPortRect.width - glPoint.x) / view._devicePixelRatio;
        }
        else {
            uiPoint.x = box.left + glPoint.x / view._devicePixelRatio;
            uiPoint.y = box.top + box.height - glPoint.y / view._devicePixelRatio;
        }
        return uiPoint;
    },
    drawScene: function () {
        var renderer = cc.renderer;
        this.calculateDeltaTime();
        if (!this._paused) {
            this._scheduler.update(this._deltaTime);
            cc.eventManager.dispatchEvent(this._eventAfterUpdate);
        }
        if (this._nextScene) {
            this.setNextScene();
        }
        if (this._beforeVisitScene)
            this._beforeVisitScene();
        if (this._runningScene) {
            if (renderer.childrenOrderDirty) {
                cc.renderer.clearRenderCommands();
                cc.renderer.assignedZ = 0;
                this._runningScene._renderCmd._curLevel = 0;
                this._runningScene.visit();
                renderer.resetFlag();
            }
            else if (renderer.transformDirty()) {
                renderer.transform();
            }
        }
        renderer.clear();
        if (this._notificationNode)
            this._notificationNode.visit();
        cc.eventManager.dispatchEvent(this._eventAfterVisit);
        cc.g_NumberOfDraws = 0;
        if (this._afterVisitScene)
            this._afterVisitScene();
        renderer.rendering(cc._renderContext);
        this._totalFrames++;
        cc.eventManager.dispatchEvent(this._eventAfterDraw);
        this._calculateMPF();
    },
    _beforeVisitScene: null,
    _afterVisitScene: null,
    end: function () {
        this._purgeDirectorInNextLoop = true;
    },
    getContentScaleFactor: function () {
        return this._contentScaleFactor;
    },
    getNotificationNode: function () {
        return this._notificationNode;
    },
    getWinSize: function () {
        return cc.size(this._winSizeInPoints);
    },
    getWinSizeInPixels: function () {
        return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor);
    },
    getVisibleSize: null,
    getVisibleOrigin: null,
    getZEye: null,
    pause: function () {
        if (this._paused)
            return;
        this._oldAnimationInterval = this._animationInterval;
        this.setAnimationInterval(1 / 4.0);
        this._paused = true;
    },
    popScene: function () {
        cc.assert(this._runningScene, cc._LogInfos.Director_popScene);
        this._scenesStack.pop();
        var c = this._scenesStack.length;
        if (c === 0)
            this.end();
        else {
            this._sendCleanupToScene = true;
            this._nextScene = this._scenesStack[c - 1];
        }
    },
    purgeCachedData: function () {
        cc.animationCache._clear();
        cc.spriteFrameCache._clear();
        cc.textureCache._clear();
    },
    purgeDirector: function () {
        this.getScheduler().unscheduleAll();
        if (cc.eventManager)
            cc.eventManager.setEnabled(false);
        if (this._runningScene) {
            this._runningScene.onExitTransitionDidStart();
            this._runningScene.onExit();
            this._runningScene.cleanup();
        }
        this._runningScene = null;
        this._nextScene = null;
        this._scenesStack.length = 0;
        this.stopAnimation();
        this.purgeCachedData();
        cc.checkGLErrorDebug();
    },
    pushScene: function (scene) {
        cc.assert(scene, cc._LogInfos.Director_pushScene);
        this._sendCleanupToScene = false;
        this._scenesStack.push(scene);
        this._nextScene = scene;
    },
    runScene: function (scene) {
        cc.assert(scene, cc._LogInfos.Director_pushScene);
        if (!this._runningScene) {
            this.pushScene(scene);
            this.startAnimation();
        } else {
            var i = this._scenesStack.length;
            if (i === 0) {
                this._sendCleanupToScene = true;
                this._scenesStack[i] = scene;
                this._nextScene = scene;
            } else {
                this._sendCleanupToScene = true;
                this._scenesStack[i - 1] = scene;
                this._nextScene = scene;
            }
        }
    },
    resume: function () {
        if (!this._paused) {
            return;
        }
        this.setAnimationInterval(this._oldAnimationInterval);
        this._lastUpdate = Date.now();
        if (!this._lastUpdate) {
            cc.log(cc._LogInfos.Director_resume);
        }
        this._paused = false;
        this._deltaTime = 0;
    },
    setContentScaleFactor: function (scaleFactor) {
        if (scaleFactor !== this._contentScaleFactor) {
            this._contentScaleFactor = scaleFactor;
        }
    },
    setDepthTest: null,
    setClearColor: null,
    setDefaultValues: function () {
    },
    setNextDeltaTimeZero: function (nextDeltaTimeZero) {
        this._nextDeltaTimeZero = nextDeltaTimeZero;
    },
    setNextScene: function () {
        var runningIsTransition = false, newIsTransition = false;
        if (cc.TransitionScene) {
            runningIsTransition = this._runningScene ? this._runningScene instanceof cc.TransitionScene : false;
            newIsTransition = this._nextScene ? this._nextScene instanceof cc.TransitionScene : false;
        }
        if (!newIsTransition) {
            var locRunningScene = this._runningScene;
            if (locRunningScene) {
                locRunningScene.onExitTransitionDidStart();
                locRunningScene.onExit();
            }
            if (this._sendCleanupToScene && locRunningScene)
                locRunningScene.cleanup();
        }
        this._runningScene = this._nextScene;
        cc.renderer.childrenOrderDirty = true;
        this._nextScene = null;
        if ((!runningIsTransition) && (this._runningScene !== null)) {
            this._runningScene.onEnter();
            this._runningScene.onEnterTransitionDidFinish();
        }
    },
    setNotificationNode: function (node) {
        cc.renderer.childrenOrderDirty = true;
        if(this._notificationNode){
            this._notificationNode.onExitTransitionDidStart();
            this._notificationNode.onExit();
            this._notificationNode.cleanup();
        }
        this._notificationNode = node;
        if(!node)
            return;
        this._notificationNode.onEnter();
        this._notificationNode.onEnterTransitionDidFinish();
    },
    getDelegate: function () {
        return this._projectionDelegate;
    },
    setDelegate: function (delegate) {
        this._projectionDelegate = delegate;
    },
    setOpenGLView: null,
    setProjection: null,
    setViewport: null,
    getOpenGLView: null,
    getProjection: null,
    setAlphaBlending: null,
    isSendCleanupToScene: function () {
        return this._sendCleanupToScene;
    },
    getRunningScene: function () {
        return this._runningScene;
    },
    getAnimationInterval: function () {
        return this._animationInterval;
    },
    isDisplayStats: function () {
        return cc.profiler ? cc.profiler.isShowingStats() : false;
    },
    setDisplayStats: function (displayStats) {
        if (cc.profiler) {
            displayStats ? cc.profiler.showStats() : cc.profiler.hideStats();
        }
    },
    getSecondsPerFrame: function () {
        return this._secondsPerFrame;
    },
    isNextDeltaTimeZero: function () {
        return this._nextDeltaTimeZero;
    },
    isPaused: function () {
        return this._paused;
    },
    getTotalFrames: function () {
        return this._totalFrames;
    },
    popToRootScene: function () {
        this.popToSceneStackLevel(1);
    },
    popToSceneStackLevel: function (level) {
        cc.assert(this._runningScene, cc._LogInfos.Director_popToSceneStackLevel_2);
        var locScenesStack = this._scenesStack;
        var c = locScenesStack.length;
        if (level === 0) {
            this.end();
            return;
        }
        if (level >= c)
            return;
        while (c > level) {
            var current = locScenesStack.pop();
            if (current.running) {
                current.onExitTransitionDidStart();
                current.onExit();
            }
            current.cleanup();
            c--;
        }
        this._nextScene = locScenesStack[locScenesStack.length - 1];
        this._sendCleanupToScene = true;
    },
    getScheduler: function () {
        return this._scheduler;
    },
    setScheduler: function (scheduler) {
        if (this._scheduler !== scheduler) {
            this._scheduler = scheduler;
        }
    },
    getActionManager: function () {
        return this._actionManager;
    },
    setActionManager: function (actionManager) {
        if (this._actionManager !== actionManager) {
            this._actionManager = actionManager;
        }
    },
    getDeltaTime: function () {
        return this._deltaTime;
    },
    _calculateMPF: function () {
        var now = Date.now();
        this._secondsPerFrame = (now - this._lastUpdate) / 1000;
    }
});
cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
cc.DisplayLinkDirector = cc.Director.extend({
    invalid: false,
    startAnimation: function () {
        this._nextDeltaTimeZero = true;
        this.invalid = false;
    },
    mainLoop: function () {
        if (this._purgeDirectorInNextLoop) {
            this._purgeDirectorInNextLoop = false;
            this.purgeDirector();
        }
        else if (!this.invalid) {
            this.drawScene();
        }
    },
    stopAnimation: function () {
        this.invalid = true;
    },
    setAnimationInterval: function (value) {
        this._animationInterval = value;
        if (!this.invalid) {
            this.stopAnimation();
            this.startAnimation();
        }
    }
});
cc.Director.sharedDirector = null;
cc.Director.firstUseDirector = true;
cc.Director._getInstance = function () {
    if (cc.Director.firstUseDirector) {
        cc.Director.firstUseDirector = false;
        cc.Director.sharedDirector = new cc.DisplayLinkDirector();
        cc.Director.sharedDirector.init();
    }
    return cc.Director.sharedDirector;
};
cc.defaultFPS = 60;
cc.Director.PROJECTION_2D = 0;
cc.Director.PROJECTION_3D = 1;
cc.Director.PROJECTION_CUSTOM = 3;
cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_2D;
cc.game.addEventListener(cc.game.EVENT_RENDERER_INITED, function () {
    if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
        var _p = cc.Director.prototype;
        _p.getProjection = function (projection) {
            return this._projection;
        };
        _p.setProjection = function (projection) {
            this._projection = projection;
            cc.eventManager.dispatchEvent(this._eventProjectionChanged);
        };
        _p.setDepthTest = function () {
        };
        _p.setClearColor = function (clearColor) {
            cc.renderer._clearColor = clearColor;
            cc.renderer._clearFillStyle = 'rgb(' + clearColor.r + ',' + clearColor.g + ',' + clearColor.b +')' ;
        };
        _p.setOpenGLView = function (openGLView) {
            this._winSizeInPoints.width = cc._canvas.width;
            this._winSizeInPoints.height = cc._canvas.height;
            this._openGLView = openGLView || cc.view;
            if (cc.eventManager)
                cc.eventManager.setEnabled(true);
        };
        _p.getVisibleSize = function () {
            return this.getWinSize();
        };
        _p.getVisibleOrigin = function () {
            return cc.p(0, 0);
        };
    } else {
        cc.Director._fpsImage = new Image();
        cc.Director._fpsImage.addEventListener("load", function () {
            cc.Director._fpsImageLoaded = true;
        });
        if (cc._fpsImage) {
            cc.Director._fpsImage.src = cc._fpsImage;
        }
    }
});
cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1;
cc.ListEntry = function (prev, next, callback, target, priority, paused, markedForDeletion) {
    this.prev = prev;
    this.next = next;
    this.callback = callback;
    this.target = target;
    this.priority = priority;
    this.paused = paused;
    this.markedForDeletion = markedForDeletion;
};
cc.HashUpdateEntry = function (list, entry, target, callback, hh) {
    this.list = list;
    this.entry = entry;
    this.target = target;
    this.callback = callback;
    this.hh = hh;
};
cc.HashTimerEntry = cc.hashSelectorEntry = function (timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused, hh) {
    var _t = this;
    _t.timers = timers;
    _t.target = target;
    _t.timerIndex = timerIndex;
    _t.currentTimer = currentTimer;
    _t.currentTimerSalvaged = currentTimerSalvaged;
    _t.paused = paused;
    _t.hh = hh;
};
cc.Timer = cc.Class.extend({
    _scheduler: null,
    _elapsed:0.0,
    _runForever:false,
    _useDelay:false,
    _timesExecuted:0,
    _repeat:0,
    _delay:0,
    _interval:0.0,
    getInterval : function(){return this._interval;},
    setInterval : function(interval){this._interval = interval;},
    setupTimerWithInterval: function(seconds, repeat, delay){
        this._elapsed = -1;
        this._interval = seconds;
        this._delay = delay;
        this._useDelay = (this._delay > 0);
        this._repeat = repeat;
        this._runForever = (this._repeat === cc.REPEAT_FOREVER);
    },
    trigger: function(){
        return 0;
    },
    cancel: function(){
        return 0;
    },
    ctor:function () {
        this._scheduler = null;
        this._elapsed = -1;
        this._runForever = false;
        this._useDelay = false;
        this._timesExecuted = 0;
        this._repeat = 0;
        this._delay = 0;
        this._interval = 0;
    },
    update:function (dt) {
        if (this._elapsed === -1) {
            this._elapsed = 0;
            this._timesExecuted = 0;
        } else {
            this._elapsed += dt;
            if (this._runForever && !this._useDelay) {//standard timer usage
                if (this._elapsed >= this._interval) {
                    this.trigger();
                    this._elapsed = 0;
                }
            } else {//advanced usage
                if (this._useDelay) {
                    if (this._elapsed >= this._delay) {
                        this.trigger();
                        this._elapsed -= this._delay;
                        this._timesExecuted += 1;
                        this._useDelay = false;
                    }
                } else {
                    if (this._elapsed >= this._interval) {
                        this.trigger();
                        this._elapsed = 0;
                        this._timesExecuted += 1;
                    }
                }
                if (!this._runForever && this._timesExecuted > this._repeat)
                    this.cancel();
            }
        }
    }
});
cc.TimerTargetSelector = cc.Timer.extend({
    _target: null,
    _selector: null,
    ctor: function(){
        this._target = null;
        this._selector = null;
    },
    initWithSelector: function(scheduler, selector, target, seconds, repeat, delay){
        this._scheduler = scheduler;
        this._target = target;
        this._selector = selector;
        this.setupTimerWithInterval(seconds, repeat, delay);
        return true;
    },
    getSelector: function(){
        return this._selector;
    },
    trigger: function(){
        if (this._target && this._selector){
            this._target.call(this._selector, this._elapsed);
        }
    },
    cancel: function(){
        this._scheduler.unschedule(this._selector, this._target);
    }
});
cc.TimerTargetCallback = cc.Timer.extend({
    _target: null,
    _callback: null,
    _key: null,
    ctor: function(){
        this._target = null;
        this._callback = null;
    },
    initWithCallback: function(scheduler, callback, target, key, seconds, repeat, delay){
        this._scheduler = scheduler;
        this._target = target;
        this._callback = callback;
        this._key = key;
        this.setupTimerWithInterval(seconds, repeat, delay);
        return true;
    },
    getCallback: function(){
        return this._callback;
    },
    getKey: function(){
        return this._key;
    },
    trigger: function(){
        if(this._callback)
            this._callback.call(this._target, this._elapsed);
    },
    cancel: function(){
        this._scheduler.unschedule(this._callback, this._target);
    }
});
cc.Scheduler = cc.Class.extend({
    _timeScale:1.0,
    _updatesNegList: null,
    _updates0List: null,
    _updatesPosList: null,
    _hashForTimers:null,
    _arrayForTimers:null,
    _hashForUpdates:null,
    _currentTarget:null,
    _currentTargetSalvaged:false,
    _updateHashLocked:false,
    ctor:function () {
        this._timeScale = 1.0;
        this._updatesNegList = [];
        this._updates0List = [];
        this._updatesPosList = [];
        this._hashForUpdates = {};
        this._hashForTimers = {};
        this._currentTarget = null;
        this._currentTargetSalvaged = false;
        this._updateHashLocked = false;
        this._arrayForTimers = [];
    },
    _schedulePerFrame: function(callback, target, priority, paused){
        var hashElement = this._hashForUpdates[target.__instanceId];
        if (hashElement && hashElement.entry){
            if (hashElement.entry.priority !== priority){
                if (this._updateHashLocked){
                    cc.log("warning: you CANNOT change update priority in scheduled function");
                    hashElement.entry.markedForDeletion = false;
                    hashElement.entry.paused = paused;
                    return;
                }else{
                    this.unscheduleUpdate(target);
                }
            }else{
                hashElement.entry.markedForDeletion = false;
                hashElement.entry.paused = paused;
                return;
            }
        }
        if (priority === 0){
            this._appendIn(this._updates0List, callback, target, paused);
        }else if (priority < 0){
            this._priorityIn(this._updatesNegList, callback, target, priority, paused);
        }else{
            this._priorityIn(this._updatesPosList, callback, target, priority, paused);
        }
    },
    _removeHashElement:function (element) {
        delete this._hashForTimers[element.target.__instanceId];
        cc.arrayRemoveObject(this._arrayForTimers, element);
        element.Timer = null;
        element.target = null;
        element = null;
    },
    _removeUpdateFromHash:function (entry) {
        var self = this, element = self._hashForUpdates[entry.target.__instanceId];
        if (element) {
            cc.arrayRemoveObject(element.list, element.entry);
            delete self._hashForUpdates[element.target.__instanceId];
            element.entry = null;
            element.target = null;
        }
    },
    _priorityIn:function (ppList, callback,  target, priority, paused) {
        var self = this,
            listElement = new cc.ListEntry(null, null, callback, target, priority, paused, false);
        if (!ppList) {
            ppList = [];
            ppList.push(listElement);
        } else {
            var index2Insert = ppList.length - 1;
            for(var i = 0; i <= index2Insert; i++){
                if (priority < ppList[i].priority) {
                    index2Insert = i;
                    break;
                }
            }
            ppList.splice(i, 0, listElement);
        }
        self._hashForUpdates[target.__instanceId] = new cc.HashUpdateEntry(ppList, listElement, target, null);
        return ppList;
    },
    _appendIn:function (ppList, callback, target, paused) {
        var self = this, listElement = new cc.ListEntry(null, null, callback, target, 0, paused, false);
        ppList.push(listElement);
        self._hashForUpdates[target.__instanceId] = new cc.HashUpdateEntry(ppList, listElement, target, null, null);
    },
    setTimeScale:function (timeScale) {
        this._timeScale = timeScale;
    },
    getTimeScale:function () {
        return this._timeScale;
    },
    update:function (dt) {
        this._updateHashLocked = true;
        if(this._timeScale !== 1)
            dt *= this._timeScale;
        var i, list, len, entry;
        for(i=0,list=this._updatesNegList, len = list.length; i<len; i++){
            entry = list[i];
            if(!entry.paused && !entry.markedForDeletion)
                entry.callback(dt);
        }
        for(i=0, list=this._updates0List, len=list.length; i<len; i++){
            entry = list[i];
            if (!entry.paused && !entry.markedForDeletion)
                entry.callback(dt);
        }
        for(i=0, list=this._updatesPosList, len=list.length; i<len; i++){
            entry = list[i];
            if (!entry.paused && !entry.markedForDeletion)
                entry.callback(dt);
        }
        var elt, arr = this._arrayForTimers;
        for(i=0; i<arr.length; i++){
            elt = arr[i];
            this._currentTarget = elt;
            this._currentTargetSalvaged = false;
            if (!elt.paused){
                for (elt.timerIndex = 0; elt.timerIndex < elt.timers.length; ++(elt.timerIndex)){
                    elt.currentTimer = elt.timers[elt.timerIndex];
                    elt.currentTimerSalvaged = false;
                    elt.currentTimer.update(dt);
                    elt.currentTimer = null;
                }
            }
            if (this._currentTargetSalvaged && this._currentTarget.timers.length === 0)
                this._removeHashElement(this._currentTarget);
        }
        for(i=0,list=this._updatesNegList; i<list.length; ){
            entry = list[i];
            if(entry.markedForDeletion)
                this._removeUpdateFromHash(entry);
            else
                i++;
        }
        for(i=0, list=this._updates0List; i<list.length; ){
            entry = list[i];
            if (entry.markedForDeletion)
                this._removeUpdateFromHash(entry);
            else
                i++;
        }
        for(i=0, list=this._updatesPosList; i<list.length; ){
            entry = list[i];
            if (entry.markedForDeletion)
                this._removeUpdateFromHash(entry);
            else
                i++;
        }
        this._updateHashLocked = false;
        this._currentTarget = null;
    },
    scheduleCallbackForTarget: function(target, callback_fn, interval, repeat, delay, paused){
        this.schedule(callback_fn, target, interval, repeat, delay, paused, target.__instanceId + "");
    },
    schedule: function(callback, target, interval, repeat, delay, paused, key){
        var isSelector = false;
        if(typeof callback !== "function"){
            var selector = callback;
            isSelector = true;
        }
        if(isSelector === false){
            if(arguments.length === 4 || arguments.length === 5){
                key = delay;
                paused = repeat;
                delay = 0;
                repeat = cc.REPEAT_FOREVER;
            }
        }else{
            if(arguments.length === 4){
                paused = repeat;
                repeat = cc.REPEAT_FOREVER;
                delay = 0;
            }
        }
        if (key === undefined) {
            key = target.__instanceId + "";
        }
        cc.assert(target, cc._LogInfos.Scheduler_scheduleCallbackForTarget_3);
        var element = this._hashForTimers[target.__instanceId];
        if(!element){
            element = new cc.HashTimerEntry(null, target, 0, null, null, paused, null);
            this._arrayForTimers.push(element);
            this._hashForTimers[target.__instanceId] = element;
        }else{
            cc.assert(element.paused === paused, "");
        }
        var timer, i;
        if (element.timers == null) {
            element.timers = [];
        } else if(isSelector === false) {
            for (i = 0; i < element.timers.length; i++) {
                timer = element.timers[i];
                if (callback === timer._callback) {
                    cc.log(cc._LogInfos.Scheduler_scheduleCallbackForTarget, timer.getInterval().toFixed(4), interval.toFixed(4));
                    timer._interval = interval;
                    return;
                }
            }
        }else{
            for (i = 0; i < element.timers.length; ++i){
                timer =element.timers[i];
                if (timer && selector === timer.getSelector()){
                    cc.log("CCScheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f", timer.getInterval(), interval);
                    timer.setInterval(interval);
                    return;
                }
            }
        }
        if(isSelector === false){
            timer = new cc.TimerTargetCallback();
            timer.initWithCallback(this, callback, target, key, interval, repeat, delay);
            element.timers.push(timer);
        }else{
            timer = new cc.TimerTargetSelector();
            timer.initWithSelector(this, selector, target, interval, repeat, delay);
            element.timers.push(timer);
        }
    },
    scheduleUpdate: function(target, priority, paused){
        this._schedulePerFrame(function(dt){
            target.update(dt);
        }, target, priority, paused);
    },
    _getUnscheduleMark: function(key, timer){
        switch (typeof key){
            case "number":
            case "string":
                return key === timer.getKey();
            case "function":
                return key === timer._callback;
            default:
                return key === timer.getSelector();
        }
    },
    unschedule: function(key, target){
        if (!target || !key)
            return;
        var self = this, element = self._hashForTimers[target.__instanceId];
        if (element) {
            var timers = element.timers;
            for(var i = 0, li = timers.length; i < li; i++){
                var timer = timers[i];
                if (this._getUnscheduleMark(key, timer)) {
                    if ((timer === element.currentTimer) && (!element.currentTimerSalvaged)) {
                        element.currentTimerSalvaged = true;
                    }
                    timers.splice(i, 1);
                    if (element.timerIndex >= i) {
                        element.timerIndex--;
                    }
                    if (timers.length === 0) {
                        if (self._currentTarget === element) {
                            self._currentTargetSalvaged = true;
                        } else {
                            self._removeHashElement(element);
                        }
                    }
                    return;
                }
            }
        }
    },
    unscheduleUpdate: function(target){
        if (target == null)
            return;
        var element = this._hashForUpdates[target.__instanceId];
        if (element){
            if (this._updateHashLocked){
                element.entry.markedForDeletion = true;
            }else{
                this._removeUpdateFromHash(element.entry);
            }
        }
    },
    unscheduleAllForTarget: function(target){
        if (target == null){
            return;
        }
        var element = this._hashForTimers[target.__instanceId];
        if (element){
            if (element.timers.indexOf(element.currentTimer) > -1
                && (! element.currentTimerSalvaged)){
                element.currentTimerSalvaged = true;
            }
            element.timers.length = 0;
            if (this._currentTarget === element){
                this._currentTargetSalvaged = true;
            }else{
                this._removeHashElement(element);
            }
        }
        this.unscheduleUpdate(target);
    },
    unscheduleAll: function(){
        this.unscheduleAllWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM);
    },
    unscheduleAllWithMinPriority: function(minPriority){
        var i, element, arr = this._arrayForTimers;
        for(i=arr.length-1; i>=0; i--){
            element = arr[i];
            this.unscheduleAllForTarget(element.target);
        }
        var entry;
        var temp_length = 0;
        if(minPriority < 0){
            for(i=0; i<this._updatesNegList.length; ){
                temp_length = this._updatesNegList.length;
                entry = this._updatesNegList[i];
                if(entry && entry.priority >= minPriority)
                    this.unscheduleUpdate(entry.target);
                if (temp_length == this._updatesNegList.length)
                    i++;
            }
        }
        if(minPriority <= 0){
            for(i=0; i<this._updates0List.length; ){
                temp_length = this._updates0List.length;
                entry = this._updates0List[i];
                if (entry)
                    this.unscheduleUpdate(entry.target);
                if (temp_length == this._updates0List.length)
                    i++;
            }
        }
        for(i=0; i<this._updatesPosList.length; ){
            temp_length = this._updatesPosList.length;
            entry = this._updatesPosList[i];
            if(entry && entry.priority >= minPriority)
                this.unscheduleUpdate(entry.target);
            if (temp_length == this._updatesPosList.length)
                i++;
        }
    },
    isScheduled: function(key, target){
        cc.assert(key, "Argument key must not be empty");
        cc.assert(target, "Argument target must be non-nullptr");
        var element = this._hashForUpdates[target.__instanceId];
        if (!element){
            return false;
        }
        if (element.timers == null){
            return false;
        }else{
            var timers = element.timers;
            for (var i = 0; i < timers.length; ++i){
                var timer =  timers[i];
                if (key === timer.getKey()){
                    return true;
                }
            }
            return false;
        }
    },
    pauseAllTargets:function () {
        return this.pauseAllTargetsWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM);
    },
    pauseAllTargetsWithMinPriority:function (minPriority) {
        var idsWithSelectors = [];
        var self = this, element, locArrayForTimers = self._arrayForTimers;
        var i, li;
        for(i = 0, li = locArrayForTimers.length; i < li; i++){
            element = locArrayForTimers[i];
            if (element) {
                element.paused = true;
                idsWithSelectors.push(element.target);
            }
        }
        var entry;
        if(minPriority < 0){
            for(i=0; i<this._updatesNegList.length; i++){
                entry = this._updatesNegList[i];
                if (entry) {
                    if(entry.priority >= minPriority){
						entry.paused = true;
                        idsWithSelectors.push(entry.target);
                    }
                }
            }
        }
        if(minPriority <= 0){
            for(i=0; i<this._updates0List.length; i++){
                entry = this._updates0List[i];
                if (entry) {
					entry.paused = true;
                    idsWithSelectors.push(entry.target);
                }
            }
        }
        for(i=0; i<this._updatesPosList.length; i++){
            entry = this._updatesPosList[i];
            if (entry) {
                if(entry.priority >= minPriority){
					entry.paused = true;
                    idsWithSelectors.push(entry.target);
                }
            }
        }
        return idsWithSelectors;
    },
    resumeTargets:function (targetsToResume) {
        if (!targetsToResume)
            return;
        for (var i = 0; i < targetsToResume.length; i++) {
            this.resumeTarget(targetsToResume[i]);
        }
    },
    pauseTarget:function (target) {
        cc.assert(target, cc._LogInfos.Scheduler_pauseTarget);
        var self = this, element = self._hashForTimers[target.__instanceId];
        if (element) {
            element.paused = true;
        }
        var elementUpdate = self._hashForUpdates[target.__instanceId];
        if (elementUpdate) {
            elementUpdate.entry.paused = true;
        }
    },
    resumeTarget:function (target) {
        cc.assert(target, cc._LogInfos.Scheduler_resumeTarget);
        var self = this, element = self._hashForTimers[target.__instanceId];
        if (element) {
            element.paused = false;
        }
        var elementUpdate = self._hashForUpdates[target.__instanceId];
        if (elementUpdate) {
            elementUpdate.entry.paused = false;
        }
    },
    isTargetPaused:function (target) {
        cc.assert(target, cc._LogInfos.Scheduler_isTargetPaused);
        var element = this._hashForTimers[target.__instanceId];
        if (element) {
            return element.paused;
        }
        var elementUpdate = this._hashForUpdates[target.__instanceId];
        if (elementUpdate) {
            return elementUpdate.entry.paused;
        }
        return false;
    },
    scheduleUpdateForTarget: function(target, priority, paused){
        this.scheduleUpdate(target, priority, paused);
    },
    unscheduleCallbackForTarget:function (target, callback) {
        this.unschedule(callback, target);
    },
    unscheduleUpdateForTarget:function (target) {
        this.unscheduleUpdate(target);
    },
    unscheduleAllCallbacksForTarget: function(target){
        this.unschedule(target.__instanceId + "", target);
    },
    unscheduleAllCallbacks: function(){
        this.unscheduleAllWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM);
    },
    unscheduleAllCallbacksWithMinPriority:function (minPriority) {
        this.unscheduleAllWithMinPriority(minPriority);
    }
});
cc.Scheduler.PRIORITY_SYSTEM = (-2147483647 - 1);
cc._tmp.PrototypeLabelTTF = function () {
    var _p = cc.LabelTTF.prototype;
    cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
    cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
    _p.string;
    cc.defineGetterSetter(_p, "string", _p.getString, _p.setString);
    _p.textAlign;
    cc.defineGetterSetter(_p, "textAlign", _p.getHorizontalAlignment, _p.setHorizontalAlignment);
    _p.verticalAlign;
    cc.defineGetterSetter(_p, "verticalAlign", _p.getVerticalAlignment, _p.setVerticalAlignment);
    _p.fontSize;
    cc.defineGetterSetter(_p, "fontSize", _p.getFontSize, _p.setFontSize);
    _p.fontName;
    cc.defineGetterSetter(_p, "fontName", _p.getFontName, _p.setFontName);
    _p.font;
    cc.defineGetterSetter(_p, "font", _p._getFont, _p._setFont);
    _p.boundingSize;
    _p.boundingWidth;
    cc.defineGetterSetter(_p, "boundingWidth", _p._getBoundingWidth, _p._setBoundingWidth);
    _p.boundingHeight;
    cc.defineGetterSetter(_p, "boundingHeight", _p._getBoundingHeight, _p._setBoundingHeight);
    _p.fillStyle;
    cc.defineGetterSetter(_p, "fillStyle", _p._getFillStyle, _p.setFontFillColor);
    _p.strokeStyle;
    cc.defineGetterSetter(_p, "strokeStyle", _p._getStrokeStyle, _p._setStrokeStyle);
    _p.lineWidth;
    cc.defineGetterSetter(_p, "lineWidth", _p._getLineWidth, _p._setLineWidth);
    _p.shadowOffset;
    _p.shadowOffsetX;
    cc.defineGetterSetter(_p, "shadowOffsetX", _p._getShadowOffsetX, _p._setShadowOffsetX);
    _p.shadowOffsetY;
    cc.defineGetterSetter(_p, "shadowOffsetY", _p._getShadowOffsetY, _p._setShadowOffsetY);
    _p.shadowOpacity;
    cc.defineGetterSetter(_p, "shadowOpacity", _p._getShadowOpacity, _p._setShadowOpacity);
    _p.shadowBlur;
    cc.defineGetterSetter(_p, "shadowBlur", _p._getShadowBlur, _p._setShadowBlur);
};
cc.LabelTTF = cc.Sprite.extend({
    _dimensions: null,
    _hAlignment: cc.TEXT_ALIGNMENT_CENTER,
    _vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
    _fontName: null,
    _fontSize: 0.0,
    _string: "",
    _originalText: null,
    _onCacheCanvasMode: true,
    _shadowEnabled: false,
    _shadowOffset: null,
    _shadowOpacity: 0,
    _shadowBlur: 0,
    _shadowColor: null,
    _strokeEnabled: false,
    _strokeColor: null,
    _strokeSize: 0,
    _textFillColor: null,
    _strokeShadowOffsetX: 0,
    _strokeShadowOffsetY: 0,
    _needUpdateTexture: false,
    _lineWidths: null,
    _className: "LabelTTF",
    _fontStyle: "normal",
    _fontWeight: "normal",
    _lineHeight: "normal",
    initWithString: function (label, fontName, fontSize, dimensions, hAlignment, vAlignment) {
        var strInfo;
        if (label)
            strInfo = label + "";
        else
            strInfo = "";
        fontSize = fontSize || 16;
        dimensions = dimensions || cc.size(0, 0);
        hAlignment = hAlignment || cc.TEXT_ALIGNMENT_LEFT;
        vAlignment = vAlignment || cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = false;
        this._dimensions = cc.size(dimensions.width, dimensions.height);
        this._fontName = fontName || "Arial";
        this._hAlignment = hAlignment;
        this._vAlignment = vAlignment;
        this._fontSize = fontSize;
        this._renderCmd._setFontStyle(this._fontName, fontSize, this._fontStyle, this._fontWeight);
        this.string = strInfo;
        this._renderCmd._setColorsString();
        this._renderCmd._updateTexture();
        this._setUpdateTextureDirty();
        this._scaleX = this._scaleY = 1 / cc.view.getDevicePixelRatio();
        return true;
    },
    _setUpdateTextureDirty: function () {
        this._needUpdateTexture = true;
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.textDirty);
    },
    ctor: function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
        cc.Sprite.prototype.ctor.call(this);
        this._dimensions = cc.size(0, 0);
        this._hAlignment = cc.TEXT_ALIGNMENT_LEFT;
        this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = false;
        this._fontName = "Arial";
        this._shadowEnabled = false;
        this._shadowOffset = cc.p(0, 0);
        this._shadowOpacity = 0;
        this._shadowBlur = 0;
        this._strokeEnabled = false;
        this._strokeColor = cc.color(255, 255, 255, 255);
        this._strokeSize = 0;
        this._textFillColor = cc.color(255, 255, 255, 255);
        this._strokeShadowOffsetX = 0;
        this._strokeShadowOffsetY = 0;
        this._needUpdateTexture = false;
        this._lineWidths = [];
        this._renderCmd._setColorsString();
        this._textureLoaded = true;
        if (fontName && fontName instanceof cc.FontDefinition) {
            this.initWithStringAndTextDefinition(text, fontName);
        } else {
            cc.LabelTTF.prototype.initWithString.call(this, text, fontName, fontSize, dimensions, hAlignment, vAlignment);
        }
    },
    init: function () {
        return this.initWithString(" ", this._fontName, this._fontSize);
    },
    description: function () {
        return "<cc.LabelTTF | FontName =" + this._fontName + " FontSize = " + this._fontSize.toFixed(1) + ">";
    },
    getLineHeight: function () {
        return !this._lineHeight || this._lineHeight.charAt ?
            this._renderCmd._getFontClientHeight() :
            this._lineHeight || this._renderCmd._getFontClientHeight();
    },
    setLineHeight: function (lineHeight) {
        this._lineHeight = lineHeight;
    },
    getString: function () {
        return this._string;
    },
    getHorizontalAlignment: function () {
        return this._hAlignment;
    },
    getVerticalAlignment: function () {
        return this._vAlignment;
    },
    getDimensions: function () {
        return cc.size(this._dimensions);
    },
    getFontSize: function () {
        return this._fontSize;
    },
    getFontName: function () {
        return this._fontName;
    },
    initWithStringAndTextDefinition: function (text, textDefinition) {
        this._updateWithTextDefinition(textDefinition, false);
        this.string = text;
        return true;
    },
    setTextDefinition: function (theDefinition) {
        if (theDefinition)
            this._updateWithTextDefinition(theDefinition, true);
    },
    getTextDefinition: function () {
        return this._prepareTextDefinition(false);
    },
    enableShadow: function (a, b, c, d) {
        if (a.r != null && a.g != null && a.b != null && a.a != null) {
            this._enableShadow(a, b, c);
        } else {
            this._enableShadowNoneColor(a, b, c, d);
        }
    },
    _enableShadowNoneColor: function (shadowOffsetX, shadowOffsetY, shadowOpacity, shadowBlur) {
        shadowOpacity = shadowOpacity || 0.5;
        if (false === this._shadowEnabled)
            this._shadowEnabled = true;
        var locShadowOffset = this._shadowOffset;
        if (locShadowOffset && (locShadowOffset.x !== shadowOffsetX) || (locShadowOffset._y !== shadowOffsetY)) {
            locShadowOffset.x = shadowOffsetX;
            locShadowOffset.y = shadowOffsetY;
        }
        if (this._shadowOpacity !== shadowOpacity) {
            this._shadowOpacity = shadowOpacity;
        }
        this._renderCmd._setColorsString();
        if (this._shadowBlur !== shadowBlur)
            this._shadowBlur = shadowBlur;
        this._setUpdateTextureDirty();
    },
    _enableShadow: function (shadowColor, offset, blurRadius) {
        if (!this._shadowColor) {
            this._shadowColor = cc.color(255, 255, 255, 128);
        }
        this._shadowColor.r = shadowColor.r;
        this._shadowColor.g = shadowColor.g;
        this._shadowColor.b = shadowColor.b;
        var x, y, a, b;
        x = offset.width || offset.x || 0;
        y = offset.height || offset.y || 0;
        a = (shadowColor.a != null) ? (shadowColor.a / 255) : 0.5;
        b = blurRadius;
        this._enableShadowNoneColor(x, y, a, b);
    },
    _getShadowOffsetX: function () {
        return this._shadowOffset.x;
    },
    _setShadowOffsetX: function (x) {
        if (false === this._shadowEnabled)
            this._shadowEnabled = true;
        if (this._shadowOffset.x !== x) {
            this._shadowOffset.x = x;
            this._setUpdateTextureDirty();
        }
    },
    _getShadowOffsetY: function () {
        return this._shadowOffset._y;
    },
    _setShadowOffsetY: function (y) {
        if (false === this._shadowEnabled)
            this._shadowEnabled = true;
        if (this._shadowOffset._y !== y) {
            this._shadowOffset._y = y;
            this._setUpdateTextureDirty();
        }
    },
    _getShadowOffset: function () {
        return cc.p(this._shadowOffset.x, this._shadowOffset.y);
    },
    _setShadowOffset: function (offset) {
        if (false === this._shadowEnabled)
            this._shadowEnabled = true;
        if (this._shadowOffset.x !== offset.x || this._shadowOffset.y !== offset.y) {
            this._shadowOffset.x = offset.x;
            this._shadowOffset.y = offset.y;
            this._setUpdateTextureDirty();
        }
    },
    _getShadowOpacity: function () {
        return this._shadowOpacity;
    },
    _setShadowOpacity: function (shadowOpacity) {
        if (false === this._shadowEnabled)
            this._shadowEnabled = true;
        if (this._shadowOpacity !== shadowOpacity) {
            this._shadowOpacity = shadowOpacity;
            this._renderCmd._setColorsString();
            this._setUpdateTextureDirty();
        }
    },
    _getShadowBlur: function () {
        return this._shadowBlur;
    },
    _setShadowBlur: function (shadowBlur) {
        if (false === this._shadowEnabled)
            this._shadowEnabled = true;
        if (this._shadowBlur !== shadowBlur) {
            this._shadowBlur = shadowBlur;
            this._setUpdateTextureDirty();
        }
    },
    disableShadow: function () {
        if (this._shadowEnabled) {
            this._shadowEnabled = false;
            this._setUpdateTextureDirty();
        }
    },
    enableStroke: function (strokeColor, strokeSize) {
        if (this._strokeEnabled === false)
            this._strokeEnabled = true;
        var locStrokeColor = this._strokeColor;
        if ((locStrokeColor.r !== strokeColor.r) || (locStrokeColor.g !== strokeColor.g) || (locStrokeColor.b !== strokeColor.b)) {
            locStrokeColor.r = strokeColor.r;
            locStrokeColor.g = strokeColor.g;
            locStrokeColor.b = strokeColor.b;
            this._renderCmd._setColorsString();
        }
        if (this._strokeSize !== strokeSize)
            this._strokeSize = strokeSize || 0;
        this._setUpdateTextureDirty();
    },
    _getStrokeStyle: function () {
        return this._strokeColor;
    },
    _setStrokeStyle: function (strokeStyle) {
        if (this._strokeEnabled === false)
            this._strokeEnabled = true;
        var locStrokeColor = this._strokeColor;
        if ((locStrokeColor.r !== strokeStyle.r) || (locStrokeColor.g !== strokeStyle.g) || (locStrokeColor.b !== strokeStyle.b)) {
            locStrokeColor.r = strokeStyle.r;
            locStrokeColor.g = strokeStyle.g;
            locStrokeColor.b = strokeStyle.b;
            this._renderCmd._setColorsString();
            this._setUpdateTextureDirty();
        }
    },
    _getLineWidth: function () {
        return this._strokeSize;
    },
    _setLineWidth: function (lineWidth) {
        if (this._strokeEnabled === false)
            this._strokeEnabled = true;
        if (this._strokeSize !== lineWidth) {
            this._strokeSize = lineWidth || 0;
            this._setUpdateTextureDirty();
        }
    },
    disableStroke: function () {
        if (this._strokeEnabled) {
            this._strokeEnabled = false;
            this._setUpdateTextureDirty();
        }
    },
    setFontFillColor: function (fillColor) {
        var locTextFillColor = this._textFillColor;
        if (locTextFillColor.r !== fillColor.r || locTextFillColor.g !== fillColor.g || locTextFillColor.b !== fillColor.b) {
            locTextFillColor.r = fillColor.r;
            locTextFillColor.g = fillColor.g;
            locTextFillColor.b = fillColor.b;
            this._renderCmd._setColorsString();
            this._needUpdateTexture = true;
        }
    },
    _getFillStyle: function () {
        return this._textFillColor;
    },
    _updateWithTextDefinition: function (textDefinition, mustUpdateTexture) {
        if (textDefinition.fontDimensions) {
            this._dimensions.width = textDefinition.boundingWidth;
            this._dimensions.height = textDefinition.boundingHeight;
        } else {
            this._dimensions.width = 0;
            this._dimensions.height = 0;
        }
        this._hAlignment = textDefinition.textAlign;
        this._vAlignment = textDefinition.verticalAlign;
        this._fontName = textDefinition.fontName;
        this._fontSize = textDefinition.fontSize || 12;
        if(textDefinition.lineHeight)
            this._lineHeight = textDefinition.lineHeight
        else
            this._lineHeight = this._fontSize;
        this._renderCmd._setFontStyle(textDefinition);
        if (textDefinition.shadowEnabled)
            this.enableShadow(textDefinition.shadowOffsetX,
                textDefinition.shadowOffsetY,
                textDefinition.shadowOpacity,
                textDefinition.shadowBlur);
        if (textDefinition.strokeEnabled)
            this.enableStroke(textDefinition.strokeStyle, textDefinition.lineWidth);
        this.setFontFillColor(textDefinition.fillStyle);
        if (mustUpdateTexture)
            this._renderCmd._updateTexture();
        var flags = cc.Node._dirtyFlags;
        this._renderCmd.setDirtyFlag(flags.colorDirty|flags.opacityDirty|flags.textDirty);
    },
    _prepareTextDefinition: function (adjustForResolution) {
        var texDef = new cc.FontDefinition();
        if (adjustForResolution) {
            texDef.fontSize = this._fontSize;
            texDef.boundingWidth = cc.contentScaleFactor() * this._dimensions.width;
            texDef.boundingHeight = cc.contentScaleFactor() * this._dimensions.height;
        } else {
            texDef.fontSize = this._fontSize;
            texDef.boundingWidth = this._dimensions.width;
            texDef.boundingHeight = this._dimensions.height;
        }
        texDef.fontName = this._fontName;
        texDef.textAlign = this._hAlignment;
        texDef.verticalAlign = this._vAlignment;
        if (this._strokeEnabled) {
            texDef.strokeEnabled = true;
            var locStrokeColor = this._strokeColor;
            texDef.strokeStyle = cc.color(locStrokeColor.r, locStrokeColor.g, locStrokeColor.b);
            texDef.lineWidth = this._strokeSize;
        } else
            texDef.strokeEnabled = false;
        if (this._shadowEnabled) {
            texDef.shadowEnabled = true;
            texDef.shadowBlur = this._shadowBlur;
            texDef.shadowOpacity = this._shadowOpacity;
            texDef.shadowOffsetX = (adjustForResolution ? cc.contentScaleFactor() : 1) * this._shadowOffset.x;
            texDef.shadowOffsetY = (adjustForResolution ? cc.contentScaleFactor() : 1) * this._shadowOffset.y;
        } else
            texDef._shadowEnabled = false;
        var locTextFillColor = this._textFillColor;
        texDef.fillStyle = cc.color(locTextFillColor.r, locTextFillColor.g, locTextFillColor.b);
        return texDef;
    },
    getScale: function () {
        if (this._scaleX !== this._scaleY)
            cc.log(cc._LogInfos.Node_getScale);
        return this._scaleX * cc.view.getDevicePixelRatio();
    },
    setScale: function (scale, scaleY) {
        this._scaleX = scale / cc.view.getDevicePixelRatio();
        this._scaleY = ((scaleY || scaleY === 0) ? scaleY : scale) /
            cc.view.getDevicePixelRatio();
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getScaleX: function () {
        return this._scaleX * cc.view.getDevicePixelRatio();
    },
    setScaleX: function (newScaleX) {
        this._scaleX = newScaleX / cc.view.getDevicePixelRatio();
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    getScaleY: function () {
        return this._scaleY * cc.view.getDevicePixelRatio();
    },
    setScaleY: function (newScaleY) {
        this._scaleY = newScaleY / cc.view.getDevicePixelRatio();
        this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
    },
    setString: function (text) {
        text = String(text);
        if (this._originalText !== text) {
            this._originalText = text + "";
            this._updateString();
            this._setUpdateTextureDirty();
            this._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.transformDirty);
        }
    },
    _updateString: function () {
        if ((!this._string || this._string === "") && this._string !== this._originalText)
            cc.renderer.childrenOrderDirty = true;
        this._string = this._originalText;
    },
    setHorizontalAlignment: function (alignment) {
        if (alignment !== this._hAlignment) {
            this._hAlignment = alignment;
            this._setUpdateTextureDirty();
        }
    },
    setVerticalAlignment: function (verticalAlignment) {
        if (verticalAlignment !== this._vAlignment) {
            this._vAlignment = verticalAlignment;
            this._setUpdateTextureDirty();
        }
    },
    setDimensions: function (dim, height) {
        var width;
        if (height === undefined) {
            width = dim.width;
            height = dim.height;
        } else
            width = dim;
        if (width !== this._dimensions.width || height !== this._dimensions.height) {
            this._dimensions.width = width;
            this._dimensions.height = height;
            this._updateString();
            this._setUpdateTextureDirty();
        }
    },
    _getBoundingWidth: function () {
        return this._dimensions.width;
    },
    _setBoundingWidth: function (width) {
        if (width !== this._dimensions.width) {
            this._dimensions.width = width;
            this._updateString();
            this._setUpdateTextureDirty();
        }
    },
    _getBoundingHeight: function () {
        return this._dimensions.height;
    },
    _setBoundingHeight: function (height) {
        if (height !== this._dimensions.height) {
            this._dimensions.height = height;
            this._updateString();
            this._setUpdateTextureDirty();
        }
    },
    setFontSize: function (fontSize) {
        if (this._fontSize !== fontSize) {
            this._fontSize = fontSize;
            this._renderCmd._setFontStyle(this._fontName, this._fontSize, this._fontStyle, this._fontWeight);
            this._setUpdateTextureDirty();
        }
    },
    setFontName: function (fontName) {
        if (this._fontName && this._fontName !== fontName) {
            this._fontName = fontName;
            this._renderCmd._setFontStyle(this._fontName, this._fontSize, this._fontStyle, this._fontWeight);
            this._setUpdateTextureDirty();
        }
    },
    _getFont: function () {
        return this._renderCmd._getFontStyle();
    },
    _setFont: function (fontStyle) {
        var res = cc.LabelTTF._fontStyleRE.exec(fontStyle);
        if (res) {
            this._fontSize = parseInt(res[1]);
            this._fontName = res[2];
            this._renderCmd._setFontStyle(this._fontName, this._fontSize, this._fontStyle, this._fontWeight);
            this._setUpdateTextureDirty();
        }
    },
    getContentSize: function () {
        if (this._needUpdateTexture)
            this._renderCmd._updateTTF();
        return cc.size(this._contentSize);
    },
    _getWidth: function () {
        if (this._needUpdateTexture)
            this._renderCmd._updateTTF();
        return this._contentSize.width;
    },
    _getHeight: function () {
        if (this._needUpdateTexture)
            this._renderCmd._updateTTF();
        return this._contentSize.height;
    },
    setTextureRect: function (rect, rotated, untrimmedSize) {
        cc.Sprite.prototype.setTextureRect.call(this, rect, rotated, untrimmedSize, false);
    },
    setDrawMode: function (onCacheMode) {
        this._onCacheCanvasMode = onCacheMode;
    },
    _createRenderCmd: function () {
        if (cc._renderType === cc.game.RENDER_TYPE_WEBGL)
            return new cc.LabelTTF.WebGLRenderCmd(this);
        else if (this._onCacheCanvasMode)
            return new cc.LabelTTF.CacheCanvasRenderCmd(this);
        else
            return new cc.LabelTTF.CanvasRenderCmd(this);
    },
    _setFontStyle: function(fontStyle){
        if (this._fontStyle !== fontStyle) {
            this._fontStyle = fontStyle;
            this._renderCmd._setFontStyle(this._fontName, this._fontSize, this._fontStyle, this._fontWeight);
            this._setUpdateTextureDirty();
        }
    },
    _getFontStyle: function(){
        return this._fontStyle;
    },
    _setFontWeight: function(fontWeight){
        if (this._fontWeight !== fontWeight) {
            this._fontWeight = fontWeight;
            this._renderCmd._setFontStyle(this._fontName, this._fontSize, this._fontStyle, this._fontWeight);
            this._setUpdateTextureDirty();
        }
    },
    _getFontWeight: function(){
        return this._fontWeight;
    }
});
cc.assert(cc.isFunction(cc._tmp.PrototypeLabelTTF), cc._LogInfos.MissingFile, "LabelTTFPropertyDefine.js");
cc._tmp.PrototypeLabelTTF();
delete cc._tmp.PrototypeLabelTTF;
cc.LabelTTF._fontStyleRE = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/;
cc.LabelTTF.create = function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
    return new cc.LabelTTF(text, fontName, fontSize, dimensions, hAlignment, vAlignment);
};
cc.LabelTTF.createWithFontDefinition = cc.LabelTTF.create;
cc.LabelTTF.__labelHeightDiv = document.createElement("div");
cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial";
cc.LabelTTF.__labelHeightDiv.style.position = "absolute";
cc.LabelTTF.__labelHeightDiv.style.left = "-100px";
cc.LabelTTF.__labelHeightDiv.style.top = "-100px";
cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal";
document.body ?
    document.body.appendChild(cc.LabelTTF.__labelHeightDiv) :
    window.addEventListener('load', function () {
        this.removeEventListener('load', arguments.callee, false);
        document.body.appendChild(cc.LabelTTF.__labelHeightDiv);
    }, false);
cc.LabelTTF.__getFontHeightByDiv = function (fontName, fontSize) {
    var clientHeight, labelDiv = cc.LabelTTF.__labelHeightDiv;
    if(fontName instanceof cc.FontDefinition){
        var fontDef = fontName;
        clientHeight = cc.LabelTTF.__fontHeightCache[fontDef._getCanvasFontStr()];
        if (clientHeight > 0) return clientHeight;
        labelDiv.innerHTML = "ajghl~!";
        labelDiv.style.fontFamily = fontDef.fontName;
        labelDiv.style.fontSize = fontDef.fontSize + "px";
        labelDiv.style.fontStyle = fontDef.fontStyle;
        labelDiv.style.fontWeight = fontDef.fontWeight;
        clientHeight = labelDiv.clientHeight;
        cc.LabelTTF.__fontHeightCache[fontDef._getCanvasFontStr()] = clientHeight;
        labelDiv.innerHTML = "";
    }
    else {
        clientHeight = cc.LabelTTF.__fontHeightCache[fontName + "." + fontSize];
        if (clientHeight > 0) return clientHeight;
        labelDiv.innerHTML = "ajghl~!";
        labelDiv.style.fontFamily = fontName;
        labelDiv.style.fontSize = fontSize + "px";
        clientHeight = labelDiv.clientHeight;
        cc.LabelTTF.__fontHeightCache[fontName + "." + fontSize] = clientHeight;
        labelDiv.innerHTML = "";
    }
    return clientHeight;
};
cc.LabelTTF.__fontHeightCache = {};
cc.LabelTTF._textAlign = ["left", "center", "right"];
cc.LabelTTF._textBaseline = ["top", "middle", "bottom"];
cc.LabelTTF.wrapInspection = true;
cc.LabelTTF._wordRex = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôû]+|\S)/;
cc.LabelTTF._symbolRex = /^[!,.:;}\]%\?>、‘“》？。，！]/;
cc.LabelTTF._lastWordRex = /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôû]+|\S)$/;
cc.LabelTTF._lastEnglish = /[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôû]+$/;
cc.LabelTTF._firsrEnglish = /^[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôû]/;
(function() {
    cc.LabelTTF.RenderCmd = function () {
        this._fontClientHeight = 18;
        this._fontStyleStr = "";
        this._shadowColorStr = "rgba(128, 128, 128, 0.5)";
        this._strokeColorStr = "";
        this._fillColorStr = "rgba(255,255,255,1)";
        this._labelCanvas = null;
        this._labelContext = null;
        this._lineWidths = [];
        this._strings = [];
        this._isMultiLine = false;
        this._status = [];
        this._renderingIndex = 0;
        this._texRect = cc.rect();
        this._canUseDirtyRegion = true;
    };
    var proto = cc.LabelTTF.RenderCmd.prototype;
    proto.constructor = cc.LabelTTF.RenderCmd;
    proto._setFontStyle = function (fontNameOrFontDef, fontSize, fontStyle, fontWeight) {
        if(fontNameOrFontDef instanceof cc.FontDefinition){
            this._fontStyleStr = fontNameOrFontDef._getCanvasFontStr();
            this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(fontNameOrFontDef);
        }else {
            var deviceFontSize = fontSize * cc.view.getDevicePixelRatio();
            this._fontStyleStr = fontStyle + " " + fontWeight + " " + deviceFontSize + "px '" + fontNameOrFontDef + "'";
            this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(fontNameOrFontDef, fontSize);
        }
    };
    proto._getFontStyle = function () {
        return this._fontStyleStr;
    };
    proto._getFontClientHeight = function () {
        return this._fontClientHeight;
    };
    proto._updateColor = function(){
        this._setColorsString();
        this._updateTexture();
    };
    proto._setColorsString = function () {
        var locDisplayColor = this._displayedColor, node = this._node,
            locShadowColor = node._shadowColor || this._displayedColor;
        var locStrokeColor = node._strokeColor, locFontFillColor = node._textFillColor;
        var dr = locDisplayColor.r / 255, dg = locDisplayColor.g / 255, db = locDisplayColor.b / 255;
        this._shadowColorStr = "rgba(" + (0 | (dr * locShadowColor.r)) + "," + (0 | ( dg * locShadowColor.g)) + ","
            + (0 | (db * locShadowColor.b)) + "," + node._shadowOpacity + ")";
        this._fillColorStr = "rgba(" + (0 | (dr * locFontFillColor.r)) + "," + (0 | (dg * locFontFillColor.g)) + ","
            + (0 | (db * locFontFillColor.b)) + ", 1)";
        this._strokeColorStr = "rgba(" + (0 | (dr * locStrokeColor.r)) + "," + (0 | (dg * locStrokeColor.g)) + ","
            + (0 | (db * locStrokeColor.b)) + ", 1)";
    };
    var localBB = new cc.Rect();
    proto.getLocalBB = function () {
        var node = this._node;
        localBB.x = localBB.y = 0;
        var pixelRatio = cc.view.getDevicePixelRatio();
        localBB.width = node._getWidth() * pixelRatio;
        localBB.height = node._getHeight() * pixelRatio;
        return localBB;
    };
    proto._updateTTF = function () {
        var node = this._node;
        var pixelRatio = cc.view.getDevicePixelRatio();
        var locDimensionsWidth = node._dimensions.width * pixelRatio, i, strLength;
        var locLineWidth = this._lineWidths;
        locLineWidth.length = 0;
        this._isMultiLine = false;
        this._measureConfig();
        if (locDimensionsWidth !== 0) {
            this._strings = node._string.split('\n');
            for (i = 0; i < this._strings.length; i++) {
                this._checkWarp(this._strings, i, locDimensionsWidth);
            }
        } else {
            this._strings = node._string.split('\n');
            for (i = 0, strLength = this._strings.length; i < strLength; i++) {
                locLineWidth.push(this._measure(this._strings[i]));
            }
        }
        if (this._strings.length > 1)
            this._isMultiLine = true;
        var locSize, locStrokeShadowOffsetX = 0, locStrokeShadowOffsetY = 0;
        if (node._strokeEnabled)
            locStrokeShadowOffsetX = locStrokeShadowOffsetY = node._strokeSize * 2;
        if (node._shadowEnabled) {
            var locOffsetSize = node._shadowOffset;
            locStrokeShadowOffsetX += Math.abs(locOffsetSize.x) * 2;
            locStrokeShadowOffsetY += Math.abs(locOffsetSize.y) * 2;
        }
        if (locDimensionsWidth === 0) {
            if (this._isMultiLine)
                locSize = cc.size(
                    Math.ceil(Math.max.apply(Math, locLineWidth) + locStrokeShadowOffsetX),
                    Math.ceil((this._fontClientHeight * pixelRatio * this._strings.length) + locStrokeShadowOffsetY));
            else
                locSize = cc.size(
                    Math.ceil(this._measure(node._string) + locStrokeShadowOffsetX),
                    Math.ceil(this._fontClientHeight * pixelRatio + locStrokeShadowOffsetY));
        } else {
            if (node._dimensions.height === 0) {
                if (this._isMultiLine)
                    locSize = cc.size(
                        Math.ceil(locDimensionsWidth + locStrokeShadowOffsetX),
                        Math.ceil((node.getLineHeight() * pixelRatio * this._strings.length) + locStrokeShadowOffsetY));
                else
                    locSize = cc.size(
                        Math.ceil(locDimensionsWidth + locStrokeShadowOffsetX),
                        Math.ceil(node.getLineHeight() * pixelRatio + locStrokeShadowOffsetY));
            } else {
                locSize = cc.size(
                    Math.ceil(locDimensionsWidth + locStrokeShadowOffsetX),
                    Math.ceil(node._dimensions.height * pixelRatio + locStrokeShadowOffsetY));
            }
        }
        if (node._getFontStyle() !== "normal") {
            locSize.width = Math.ceil(locSize.width + node._fontSize * 0.3);
        }
        if (this._strings.length === 0) {
            this._texRect.width = 1;
            this._texRect.height = locSize.height || 1;
        }
        else {
            this._texRect.width = locSize.width;
            this._texRect.height = locSize.height;
        }
        var nodeW = locSize.width / pixelRatio, nodeH = locSize.height / pixelRatio;
        node.setContentSize(nodeW, nodeH);
        node._strokeShadowOffsetX = locStrokeShadowOffsetX;
        node._strokeShadowOffsetY = locStrokeShadowOffsetY;
        var locAP = node._anchorPoint;
        this._anchorPointInPoints.x = (locStrokeShadowOffsetX * 0.5) + ((locSize.width - locStrokeShadowOffsetX) * locAP.x);
        this._anchorPointInPoints.y = (locStrokeShadowOffsetY * 0.5) + ((locSize.height - locStrokeShadowOffsetY) * locAP.y);
    };
    proto._saveStatus = function () {
        var node = this._node;
        var scale = cc.view.getDevicePixelRatio();
        var locStrokeShadowOffsetX = node._strokeShadowOffsetX, locStrokeShadowOffsetY = node._strokeShadowOffsetY;
        var locContentSizeHeight = node._contentSize.height * scale - locStrokeShadowOffsetY, locVAlignment = node._vAlignment,
            locHAlignment = node._hAlignment;
        var dx = locStrokeShadowOffsetX * 0.5,
            dy = locContentSizeHeight + locStrokeShadowOffsetY * 0.5;
        var xOffset = 0, yOffset = 0, OffsetYArray = [];
        var locContentWidth = node._contentSize.width * scale - locStrokeShadowOffsetX;
        var lineHeight = node.getLineHeight() * scale;
        var transformTop = (lineHeight - this._fontClientHeight * scale) / 2;
        if (locHAlignment === cc.TEXT_ALIGNMENT_RIGHT)
            xOffset += locContentWidth;
        else if (locHAlignment === cc.TEXT_ALIGNMENT_CENTER)
            xOffset += locContentWidth / 2;
        else
            xOffset += 0;
        if (this._isMultiLine) {
            var locStrLen = this._strings.length;
            if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM)
                yOffset = lineHeight - transformTop * 2 + locContentSizeHeight - lineHeight * locStrLen;
            else if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_CENTER)
                yOffset = (lineHeight - transformTop * 2) / 2 + (locContentSizeHeight - lineHeight * locStrLen) / 2;
            for (var i = 0; i < locStrLen; i++) {
                var tmpOffsetY = -locContentSizeHeight + (lineHeight * i + transformTop) + yOffset;
                OffsetYArray.push(tmpOffsetY);
            }
        } else {
            if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM) {
            } else if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_TOP) {
                yOffset -= locContentSizeHeight;
            } else {
                yOffset -= locContentSizeHeight * 0.5;
            }
            OffsetYArray.push(yOffset);
        }
        var tmpStatus = {
            contextTransform:cc.p(dx,dy),
            xOffset:xOffset,
            OffsetYArray:OffsetYArray
        };
        this._status.push(tmpStatus);
    };
    proto._drawTTFInCanvas = function (context) {
        if (!context)
            return;
        var locStatus = this._status.pop();
        context.setTransform(1, 0, 0, 1, locStatus.contextTransform.x, locStatus.contextTransform.y);
        var xOffset = locStatus.xOffset;
        var yOffsetArray = locStatus.OffsetYArray;
        this.drawLabels(context, xOffset, yOffsetArray);
    };
    proto._checkWarp = function (strArr, i, maxWidth) {
        var text = strArr[i];
        var allWidth = this._measure(text);
        if (allWidth > maxWidth && text.length > 1) {
            var fuzzyLen = text.length * ( maxWidth / allWidth ) | 0;
            var tmpText = text.substr(fuzzyLen);
            var width = allWidth - this._measure(tmpText);
            var sLine;
            var pushNum = 0;
            var checkWhile = 0;
            while (width > maxWidth && checkWhile++ < 100) {
                fuzzyLen *= maxWidth / width;
                fuzzyLen = fuzzyLen | 0;
                tmpText = text.substr(fuzzyLen);
                width = allWidth - this._measure(tmpText);
            }
            checkWhile = 0;
            while (width < maxWidth && checkWhile++ < 100) {
                if (tmpText) {
                    var exec = cc.LabelTTF._wordRex.exec(tmpText);
                    pushNum = exec ? exec[0].length : 1;
                    sLine = tmpText;
                }
                fuzzyLen = fuzzyLen + pushNum;
                tmpText = text.substr(fuzzyLen);
                width = allWidth - this._measure(tmpText);
            }
            fuzzyLen -= pushNum;
            if (fuzzyLen === 0) {
                fuzzyLen = 1;
                sLine = sLine.substr(1);
            }
            var sText = text.substr(0, fuzzyLen), result;
            if (cc.LabelTTF.wrapInspection) {
                if (cc.LabelTTF._symbolRex.test(sLine || tmpText)) {
                    result = cc.LabelTTF._lastWordRex.exec(sText);
                    fuzzyLen -= result ? result[0].length : 0;
                    if (fuzzyLen === 0) fuzzyLen = 1;
                    sLine = text.substr(fuzzyLen);
                    sText = text.substr(0, fuzzyLen);
                }
            }
            if (cc.LabelTTF._firsrEnglish.test(sLine)) {
                result = cc.LabelTTF._lastEnglish.exec(sText);
                if (result && sText !== result[0]) {
                    fuzzyLen -= result[0].length;
                    sLine = text.substr(fuzzyLen);
                    sText = text.substr(0, fuzzyLen);
                }
            }
            strArr[i] = sLine || tmpText;
            strArr.splice(i, 0, sText);
        }
    };
    proto.updateStatus = function () {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        if (locFlag & flags.textDirty)
            this._updateTexture();
        cc.Node.RenderCmd.prototype.updateStatus.call(this);
        if (this._dirtyFlag & flags.transformDirty){
            this.transform(this.getParentRenderCmd(), true);
            this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.transformDirty ^ this._dirtyFlag;
        }
    };
    proto._syncStatus = function (parentCmd) {
        var flags = cc.Node._dirtyFlags, locFlag = this._dirtyFlag;
        if (locFlag & flags.textDirty)
            this._updateTexture();
        cc.Node.RenderCmd.prototype._syncStatus.call(this, parentCmd);
        if (cc._renderType === cc.game.RENDER_TYPE_WEBGL || locFlag & flags.transformDirty)
            this.transform(parentCmd);
    };
    proto.drawLabels = function (context, xOffset, yOffsetArray) {
        var node = this._node;
        if (node._shadowEnabled) {
            var locShadowOffset = node._shadowOffset;
            context.shadowColor = this._shadowColorStr;
            context.shadowOffsetX = locShadowOffset.x;
            context.shadowOffsetY = -locShadowOffset.y;
            context.shadowBlur = node._shadowBlur;
        }
        var locHAlignment = node._hAlignment,
            locVAlignment = node._vAlignment,
            locStrokeSize = node._strokeSize;
        if (context.font !== this._fontStyleStr)
            context.font = this._fontStyleStr;
        context.fillStyle = this._fillColorStr;
        var locStrokeEnabled = node._strokeEnabled;
        if (locStrokeEnabled) {
            context.lineWidth = locStrokeSize * 2;
            context.strokeStyle = this._strokeColorStr;
        }
        context.textBaseline = cc.LabelTTF._textBaseline[locVAlignment];
        context.textAlign = cc.LabelTTF._textAlign[locHAlignment];
        var locStrLen = this._strings.length;
        for (var i = 0; i < locStrLen; i++) {
            var line = this._strings[i];
            if (locStrokeEnabled)
                context.strokeText(line, xOffset, yOffsetArray[i]);
            context.fillText(line, xOffset, yOffsetArray[i]);
        }
        cc.g_NumberOfDraws++;
    };
})();
(function(){
    cc.LabelTTF.CacheRenderCmd = function (renderable) {
        cc.LabelTTF.RenderCmd.call(this,renderable);
        var locCanvas = this._labelCanvas = document.createElement("canvas");
        locCanvas.width = 1;
        locCanvas.height = 1;
        this._labelContext = locCanvas.getContext("2d");
        this._texRect = cc.rect();
    };
    cc.LabelTTF.CacheRenderCmd.prototype = Object.create( cc.LabelTTF.RenderCmd.prototype);
    cc.inject(cc.LabelTTF.RenderCmd.prototype, cc.LabelTTF.CacheRenderCmd.prototype);
    var proto = cc.LabelTTF.CacheRenderCmd.prototype;
    proto.constructor = cc.LabelTTF.CacheRenderCmd;
    proto._updateTexture = function () {
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.textDirty ^ this._dirtyFlag;
        var node = this._node;
        this._updateTTF();
        var width = this._texRect.width, height = this._texRect.height;
        var locContext = this._labelContext, locLabelCanvas = this._labelCanvas;
        if(!node._texture){
            var labelTexture = new cc.Texture2D();
            labelTexture.initWithElement(this._labelCanvas);
            node.setTexture(labelTexture);
        }
        if (node._string.length === 0) {
            locLabelCanvas.width = width;
            locLabelCanvas.height = height;
            node._texture && node._texture.handleLoadedTexture();
            node.setTextureRect(this._texRect);
            return true;
        }
        locContext.font = this._fontStyleStr;
        var flag = locLabelCanvas.width === width && locLabelCanvas.height === height;
        locLabelCanvas.width = this._texRect.width;
        locLabelCanvas.height = this._texRect.height;
        if (flag) locContext.clearRect(0, 0, width, height);
        this._saveStatus();
        this._drawTTFInCanvas(locContext);
        node._texture && node._texture.handleLoadedTexture();
        node.setTextureRect(this._texRect);
        return true;
    };
    proto._measureConfig = function () {
        this._labelContext.font = this._fontStyleStr;
    };
    proto._measure = function (text) {
        return this._labelContext.measureText(text).width;
    };
})();
(function(){
    cc.LabelTTF.CacheCanvasRenderCmd = function (renderable) {
        cc.Sprite.CanvasRenderCmd.call(this, renderable);
        cc.LabelTTF.CacheRenderCmd.call(this);
    };
    var proto = cc.LabelTTF.CacheCanvasRenderCmd.prototype = Object.create(cc.Sprite.CanvasRenderCmd.prototype);
    cc.inject(cc.LabelTTF.CacheRenderCmd.prototype, proto);
    proto.constructor = cc.LabelTTF.CacheCanvasRenderCmd;
})();
(function(){
    cc.LabelTTF.CanvasRenderCmd = function (renderable) {
        cc.Sprite.CanvasRenderCmd.call(this, renderable);
        cc.LabelTTF.RenderCmd.call(this);
    };
    cc.LabelTTF.CanvasRenderCmd.prototype = Object.create(cc.Sprite.CanvasRenderCmd.prototype);
    cc.inject(cc.LabelTTF.RenderCmd.prototype, cc.LabelTTF.CanvasRenderCmd.prototype);
    var proto = cc.LabelTTF.CanvasRenderCmd.prototype;
    proto.constructor = cc.LabelTTF.CanvasRenderCmd;
    proto._measureConfig = function () {};
    proto._measure = function (text) {
        var context = cc._renderContext.getContext();
        context.font = this._fontStyleStr;
        return context.measureText(text).width;
    };
    proto._updateTexture = function () {
        this._dirtyFlag = this._dirtyFlag & cc.Node._dirtyFlags.textDirty ^ this._dirtyFlag;
        var node = this._node;
        var scale = cc.view.getDevicePixelRatio();
        this._updateTTF();
        if (node._string.length === 0) {
            node.setTextureRect(this._texRect);
            return true;
        }
        this._saveStatus();
        node.setTextureRect(this._texRect);
        return true;
    };
    proto.rendering = function(ctx) {
        var scaleX = cc.view.getScaleX(),
            scaleY = cc.view.getScaleY();
        var wrapper = ctx || cc._renderContext, context = wrapper.getContext();
        if (!context)
            return;
        var node = this._node;
        wrapper.computeRealOffsetY();
        if(this._status.length <= 0)
            return;
        var locIndex = (this._renderingIndex >= this._status.length)? this._renderingIndex-this._status.length:this._renderingIndex;
        var status = this._status[locIndex];
        this._renderingIndex = locIndex+1;
        var locHeight = node._rect.height,
            locX = node._offsetPosition.x,
            locY = -node._offsetPosition.y - locHeight;
        var alpha = (this._displayedOpacity / 255);
        wrapper.setTransform(this._worldTransform, scaleX, scaleY);
        wrapper.setCompositeOperation(this._blendFuncStr);
        wrapper.setGlobalAlpha(alpha);
        wrapper.save();
        if (node._flippedX) {
            locX = -locX - node._rect.width;
            context.scale(-1, 1);
        }
        if (node._flippedY) {
            locY = node._offsetPosition.y;
            context.scale(1, -1);
        }
        var xOffset = status.xOffset + status.contextTransform.x + locX * scaleX;
        var yOffsetArray = [];
        var locStrLen = this._strings.length;
        for (var i = 0; i < locStrLen; i++)
            yOffsetArray.push(status.OffsetYArray[i] + status.contextTransform.y + locY * scaleY);
        this.drawLabels(context, xOffset, yOffsetArray);
        wrapper.restore();
    };
})();
var cc = cc || {};
cc._tmp = cc._tmp || {};
cc.associateWithNative = function (jsObj, superclass) {
};
cc.KEY = {
    none:0,
    back:6,
    menu:18,
    backspace:8,
    tab:9,
    enter:13,
    shift:16,
    ctrl:17,
    alt:18,
    pause:19,
    capslock:20,
    escape:27,
    space:32,
    pageup:33,
    pagedown:34,
    end:35,
    home:36,
    left:37,
    up:38,
    right:39,
    down:40,
    select:41,
    insert:45,
    Delete:46,
    0:48,
    1:49,
    2:50,
    3:51,
    4:52,
    5:53,
    6:54,
    7:55,
    8:56,
    9:57,
    a:65,
    b:66,
    c:67,
    d:68,
    e:69,
    f:70,
    g:71,
    h:72,
    i:73,
    j:74,
    k:75,
    l:76,
    m:77,
    n:78,
    o:79,
    p:80,
    q:81,
    r:82,
    s:83,
    t:84,
    u:85,
    v:86,
    w:87,
    x:88,
    y:89,
    z:90,
    num0:96,
    num1:97,
    num2:98,
    num3:99,
    num4:100,
    num5:101,
    num6:102,
    num7:103,
    num8:104,
    num9:105,
    '*':106,
    '+':107,
    '-':109,
    'numdel':110,
    '/':111,
    f1:112,
    f2:113,
    f3:114,
    f4:115,
    f5:116,
    f6:117,
    f7:118,
    f8:119,
    f9:120,
    f10:121,
    f11:122,
    f12:123,
    numlock:144,
    scrolllock:145,
    ';':186,
    semicolon:186,
    equal:187,
    '=':187,
    ',':188,
    comma:188,
    dash:189,
    '.':190,
    period:190,
    forwardslash:191,
    grave:192,
    '[':219,
    openbracket:219,
    backslash:220,
    ']':221,
    closebracket:221,
    quote:222,
    dpadLeft:1000,
    dpadRight:1001,
    dpadUp:1003,
    dpadDown:1004,
    dpadCenter:1005
};
cc.FMT_JPG = 0;
cc.FMT_PNG = 1;
cc.FMT_TIFF = 2;
cc.FMT_RAWDATA = 3;
cc.FMT_WEBP = 4;
cc.FMT_UNKNOWN = 5;
cc.getImageFormatByData = function (imgData) {
    if (imgData.length > 8 && imgData[0] === 0x89
        && imgData[1] === 0x50
        && imgData[2] === 0x4E
        && imgData[3] === 0x47
        && imgData[4] === 0x0D
        && imgData[5] === 0x0A
        && imgData[6] === 0x1A
        && imgData[7] === 0x0A) {
        return cc.FMT_PNG;
    }
    if (imgData.length > 2 && ((imgData[0] === 0x49 && imgData[1] === 0x49)
        || (imgData[0] === 0x4d && imgData[1] === 0x4d)
        || (imgData[0] === 0xff && imgData[1] === 0xd8))) {
        return cc.FMT_TIFF;
    }
	return cc.FMT_UNKNOWN;
};
cc.inherits = function (childCtor, parentCtor) {
    function tempCtor() {}
    tempCtor.prototype = parentCtor.prototype;
    childCtor.superClass_ = parentCtor.prototype;
    childCtor.prototype = new tempCtor();
    childCtor.prototype.constructor = childCtor;
};
cc.base = function(me, opt_methodName, var_args) {
    var caller = arguments.callee.caller;
    if (caller.superClass_) {
        ret = caller.superClass_.constructor.apply( me, Array.prototype.slice.call(arguments, 1));
        return ret;
    }
    var args = Array.prototype.slice.call(arguments, 2);
    var foundCaller = false;
    for (var ctor = me.constructor; ctor; ctor = ctor.superClass_ && ctor.superClass_.constructor) {
        if (ctor.prototype[opt_methodName] === caller) {
            foundCaller = true;
        } else if (foundCaller) {
            return ctor.prototype[opt_methodName].apply(me, args);
        }
    }
    if (me[opt_methodName] === caller) {
        return me.constructor.prototype[opt_methodName].apply(me, args);
    } else {
        throw Error(
            'cc.base called from a method of one name ' +
                'to a method of a different name');
    }
};
var GlobalVertexBuffer = (function () {
var VERTICES_SIZE = 888;
var GlobalVertexBuffer = function (gl) {
    this.gl = gl;
    this.vertexBuffer = gl.createBuffer();
    this.size = VERTICES_SIZE;
    this.byteLength = VERTICES_SIZE * 4 * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
    this.data = new ArrayBuffer(this.byteLength);
    this.dataArray = new Float32Array(this.data);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.dataArray, gl.DYNAMIC_DRAW);
    this._dirty = false;
    this._spaces = {
        0: this.byteLength
    };
};
GlobalVertexBuffer.prototype = {
    constructor: GlobalVertexBuffer,
    allocBuffer: function (offset, size) {
        var space = this._spaces[offset];
        if (space && space >= size) {
            delete this._spaces[offset];
            if (space > size) {
                var newOffset = offset + size;
                this._spaces[newOffset] = space - size;
            }
            return true;
        }
        else {
            return false;
        }
    },
    requestBuffer: function (size) {
        var key, offset, available;
        for (key in this._spaces) {
            offset = parseInt(key);
            available = this._spaces[key];
            if (available >= size && this.allocBuffer(offset, size)) {
                return {
                    buffer: this,
                    offset: offset,
                    size: size
                };
            }
        }
        return null;
    },
    freeBuffer: function (offset, size) {
        var spaces = this._spaces;
        var i, key, end;
        for (key in spaces) {
            i = parseInt(key);
            if (i > offset) {
                break;
            }
            if (i + spaces[key] >= offset) {
                size = size + offset - i;
                offset = i;
                break;
            }
        }
        end = offset + size;
        if (this._spaces[end]) {
            size += this._spaces[end];
            delete this._spaces[end];
        }
        this._spaces[offset] = size;
    },
    setDirty: function () {
        this._dirty = true;
    },
    update: function () {
        if (this._dirty) {
            this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
            this.gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.dataArray);
            this._dirty = false;
        }
    },
    destroy: function () {
        this.gl.deleteBuffer(this.vertexBuffer);
        this.data = null;
        this.positions = null;
        this.colors = null;
        this.texCoords = null;
        this.vertexBuffer = null;
    }
};
return GlobalVertexBuffer;
})();
cc.rendererCanvas = {
    childrenOrderDirty: true,
    assignedZ: 0,
    assignedZStep: 1 / 10000,
    _transformNodePool: [],
    _renderCmds: [],
    _isCacheToCanvasOn: false,
    _cacheToCanvasCmds: {},
    _cacheInstanceIds: [],
    _currentID: 0,
    _clearColor: cc.color(),
    _clearFillStyle: "rgb(0, 0, 0)",
    _dirtyRegion: null,
    _allNeedDraw: true,
    _enableDirtyRegion: false,
    _debugDirtyRegion: false,
    _canUseDirtyRegion: false,
    _dirtyRegionCountThreshold: 10,
    getRenderCmd: function (renderableObject) {
        return renderableObject._createRenderCmd();
    },
    enableDirtyRegion: function (enabled) {
        this._enableDirtyRegion = enabled;
    },
    isDirtyRegionEnabled: function () {
        return this._enableDirtyRegion;
    },
    setDirtyRegionCountThreshold: function(threshold) {
        this._dirtyRegionCountThreshold = threshold;
    },
    _collectDirtyRegion: function () {
        var locCmds = this._renderCmds, i, len;
        var dirtyRegion = this._dirtyRegion;
        var dirtryRegionCount = 0;
        var result = true;
        var localStatus = cc.Node.CanvasRenderCmd.RegionStatus;
        for (i = 0, len = locCmds.length; i < len; i++) {
            var cmd = locCmds[i];
            var regionFlag = cmd._regionFlag;
            var oldRegion = cmd._oldRegion;
            var currentRegion = cmd._currentRegion;
            if (regionFlag > localStatus.NotDirty) {
                ++dirtryRegionCount;
                if(dirtryRegionCount > this._dirtyRegionCountThreshold)
                    result = false;
                if(result) {
                    (!currentRegion.isEmpty()) && dirtyRegion.addRegion(currentRegion);
                    if (cmd._regionFlag > localStatus.Dirty) {
                        (!oldRegion.isEmpty()) && dirtyRegion.addRegion(oldRegion);
                    }
                }
                cmd._regionFlag = localStatus.NotDirty;
            }
        }
        return result;
    },
    _beginDrawDirtyRegion: function (ctxWrapper) {
        var ctx = ctxWrapper.getContext();
        var dirtyList = this._dirtyRegion.getDirtyRegions();
        ctx.save();
        var scaleX = ctxWrapper._scaleX;
        var scaleY = ctxWrapper._scaleY;
        ctxWrapper.setTransform({a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0}, scaleX, scaleY);
        ctx.beginPath();
        for (var index = 0, count = dirtyList.length; index < count; ++index) {
            var region = dirtyList[index];
            ctx.rect(region._minX , -region._maxY , region._width , region._height );
        }
        ctx.clip();
    },
    _endDrawDirtyRegion: function (ctx) {
        ctx.restore();
    },
    _debugDrawDirtyRegion: function (ctxWrapper) {
        if (!this._debugDirtyRegion) return;
        var ctx = ctxWrapper.getContext();
        var dirtyList = this._dirtyRegion.getDirtyRegions();
        var scaleX = ctxWrapper._scaleX;
        var scaleY = ctxWrapper._scaleY;
        ctxWrapper.setTransform({a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0}, scaleX, scaleY);
        ctx.beginPath();
        for (var index = 0, count = dirtyList.length; index < count; ++index) {
            var region = dirtyList[index];
            ctx.rect(region._minX, -region._maxY , region._width , region._height );
        }
        var oldstyle = ctx.fillStyle;
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.fillStyle = oldstyle;
    },
    rendering: function (ctxWrapper) {
        var dirtyRegion = this._dirtyRegion = this._dirtyRegion || new cc.DirtyRegion();
        var viewport = cc._canvas;
        var wrapper = ctxWrapper || cc._renderContext;
        var ctx = wrapper.getContext();
        var scaleX = cc.view.getScaleX(),
            scaleY = cc.view.getScaleY();
        wrapper.setViewScale(scaleX, scaleY);
        wrapper.computeRealOffsetY();
        var dirtyList = this._dirtyRegion.getDirtyRegions();
        var locCmds = this._renderCmds, i, len;
        var allNeedDraw = this._allNeedDraw || !this._enableDirtyRegion || !this._canUseDirtyRegion;
        var collectResult = true;
        if (!allNeedDraw) {
            collectResult = this._collectDirtyRegion();
        }
        allNeedDraw = allNeedDraw || (!collectResult);
        if(!allNeedDraw) {
            this._beginDrawDirtyRegion(wrapper);
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, viewport.width, viewport.height);
        if (this._clearColor.r !== 0 ||
            this._clearColor.g !== 0 ||
            this._clearColor.b !== 0) {
            wrapper.setFillStyle(this._clearFillStyle);
            wrapper.setGlobalAlpha(this._clearColor.a);
            ctx.fillRect(0, 0, viewport.width, viewport.height);
        }
        for (i = 0, len = locCmds.length; i < len; i++) {
            var cmd = locCmds[i];
            var needRendering = false;
            var cmdRegion = cmd._currentRegion;
            if (!cmdRegion || allNeedDraw) {
                needRendering = true;
            } else {
                for (var index = 0, count = dirtyList.length; index < count; ++index) {
                    if (dirtyList[index].intersects(cmdRegion)) {
                        needRendering = true;
                        break;
                    }
                }
            }
            if (needRendering) {
                cmd.rendering(wrapper, scaleX, scaleY);
            }
        }
        if (!allNeedDraw) {
            this._debugDrawDirtyRegion(wrapper);
            this._endDrawDirtyRegion(ctx);
        }
        dirtyRegion.clear();
        this._allNeedDraw = false;
    },
    _renderingToCacheCanvas: function (ctx, instanceID, scaleX, scaleY) {
        if (!ctx)
            cc.log("The context of RenderTexture is invalid.");
        scaleX = cc.isUndefined(scaleX) ? 1 : scaleX;
        scaleY = cc.isUndefined(scaleY) ? 1 : scaleY;
        instanceID = instanceID || this._currentID;
        var locCmds = this._cacheToCanvasCmds[instanceID], i, len;
        ctx.computeRealOffsetY();
        for (i = 0, len = locCmds.length; i < len; i++) {
            locCmds[i].rendering(ctx, scaleX, scaleY);
        }
        this._removeCache(instanceID);
        var locIDs = this._cacheInstanceIds;
        if (locIDs.length === 0)
            this._isCacheToCanvasOn = false;
        else
            this._currentID = locIDs[locIDs.length - 1];
    },
    _turnToCacheMode: function (renderTextureID) {
        this._isCacheToCanvasOn = true;
        renderTextureID = renderTextureID || 0;
        this._cacheToCanvasCmds[renderTextureID] = [];
        if (this._cacheInstanceIds.indexOf(renderTextureID) === -1)
            this._cacheInstanceIds.push(renderTextureID);
        this._currentID = renderTextureID;
    },
    _turnToNormalMode: function () {
        this._isCacheToCanvasOn = false;
    },
    _removeCache: function (instanceID) {
        instanceID = instanceID || this._currentID;
        var cmds = this._cacheToCanvasCmds[instanceID];
        if (cmds) {
            cmds.length = 0;
            delete this._cacheToCanvasCmds[instanceID];
        }
        var locIDs = this._cacheInstanceIds;
        cc.arrayRemoveObject(locIDs, instanceID);
    },
    resetFlag: function () {
        this.childrenOrderDirty = false;
        this._transformNodePool.length = 0;
    },
    transform: function () {
        var locPool = this._transformNodePool;
        locPool.sort(this._sortNodeByLevelAsc);
        for (var i = 0, len = locPool.length; i < len; i++) {
            if (locPool[i]._dirtyFlag !== 0)
                locPool[i].updateStatus();
        }
        locPool.length = 0;
    },
    transformDirty: function () {
        return this._transformNodePool.length > 0;
    },
    _sortNodeByLevelAsc: function (n1, n2) {
        return n1._curLevel - n2._curLevel;
    },
    pushDirtyNode: function (node) {
        this._transformNodePool.push(node);
    },
    clear: function () {
    },
    clearRenderCommands: function () {
        this._renderCmds.length = 0;
        this._cacheInstanceIds.length = 0;
        this._isCacheToCanvasOn = false;
        this._allNeedDraw = true;
        this._canUseDirtyRegion = true;
    },
    pushRenderCommand: function (cmd) {
        if (!cmd.needDraw())
            return;
        if (!cmd._canUseDirtyRegion) {
            this._canUseDirtyRegion = false;
        }
        if (this._isCacheToCanvasOn) {
            var currentId = this._currentID, locCmdBuffer = this._cacheToCanvasCmds;
            var cmdList = locCmdBuffer[currentId];
            if (cmdList.indexOf(cmd) === -1)
                cmdList.push(cmd);
        } else {
            if (this._renderCmds.indexOf(cmd) === -1)
                this._renderCmds.push(cmd);
        }
    }
};
(function () {
    cc.CanvasContextWrapper = function (context) {
        this._context = context;
        this._saveCount = 0;
        this._currentAlpha = context.globalAlpha;
        this._currentCompositeOperation = context.globalCompositeOperation;
        this._currentFillStyle = context.fillStyle;
        this._currentStrokeStyle = context.strokeStyle;
        this._offsetX = 0;
        this._offsetY = 0;
        this._realOffsetY = this.height;
        this._armatureMode = 0;
    };
    var proto = cc.CanvasContextWrapper.prototype;
    proto.resetCache = function () {
        var context = this._context;
        this._currentAlpha = context.globalAlpha;
        this._currentCompositeOperation = context.globalCompositeOperation;
        this._currentFillStyle = context.fillStyle;
        this._currentStrokeStyle = context.strokeStyle;
        this._realOffsetY = this._context.canvas.height + this._offsetY;
    };
    proto.setOffset = function (x, y) {
        this._offsetX = x;
        this._offsetY = y;
        this._realOffsetY = this._context.canvas.height + this._offsetY;
    };
    proto.computeRealOffsetY = function () {
        this._realOffsetY = this._context.canvas.height + this._offsetY;
    };
    proto.setViewScale = function (scaleX, scaleY) {
        this._scaleX = scaleX;
        this._scaleY = scaleY;
    };
    proto.getContext = function () {
        return this._context;
    };
    proto.save = function () {
        this._context.save();
        this._saveCount++;
    };
    proto.restore = function () {
        this._context.restore();
        this._saveCount--;
    };
    proto.setGlobalAlpha = function (alpha) {
        if (this._saveCount > 0) {
            this._context.globalAlpha = alpha;
        } else {
            if (this._currentAlpha !== alpha) {
                this._currentAlpha = alpha;
                this._context.globalAlpha = alpha;
            }
        }
    };
    proto.setCompositeOperation = function (compositionOperation) {
        if (this._saveCount > 0) {
            this._context.globalCompositeOperation = compositionOperation;
        } else {
            if (this._currentCompositeOperation !== compositionOperation) {
                this._currentCompositeOperation = compositionOperation;
                this._context.globalCompositeOperation = compositionOperation;
            }
        }
    };
    proto.setFillStyle = function (fillStyle) {
        if (this._saveCount > 0) {
            this._context.fillStyle = fillStyle;
        } else {
            if (this._currentFillStyle !== fillStyle) {
                this._currentFillStyle = fillStyle;
                this._context.fillStyle = fillStyle;
            }
        }
    };
    proto.setStrokeStyle = function (strokeStyle) {
        if (this._saveCount > 0) {
            this._context.strokeStyle = strokeStyle;
        } else {
            if (this._currentStrokeStyle !== strokeStyle) {
                this._currentStrokeStyle = strokeStyle;
                this._context.strokeStyle = strokeStyle;
            }
        }
    };
    proto.setTransform = function (t, scaleX, scaleY) {
        if (this._armatureMode > 0) {
            this.restore();
            this.save();
            this._context.transform(t.a * scaleX, -t.b * scaleY, -t.c * scaleX, t.d * scaleY, t.tx * scaleX, -(t.ty * scaleY));
        } else {
            this._context.setTransform(t.a * scaleX, -t.b * scaleY, -t.c * scaleX, t.d * scaleY, this._offsetX + t.tx * scaleX, this._realOffsetY - (t.ty * scaleY));
        }
    };
    proto._switchToArmatureMode = function (enable, t, scaleX, scaleY) {
        if (enable) {
            this._armatureMode++;
            this._context.setTransform(t.a, t.c, t.b, t.d, this._offsetX + t.tx * scaleX, this._realOffsetY - (t.ty * scaleY));
            this.save();
        } else {
            this._armatureMode--;
            this.restore();
        }
    };
})();
var Region = function () {
    this._minX = 0;
    this._minY = 0;
    this._maxX = 0;
    this._maxY = 0;
    this._width = 0;
    this._height = 0;
    this._area = 0;
};
var regionProto = Region.prototype;
var regionPool = [];
function regionCreate() {
    var region = regionPool.pop();
    if (!region) {
        region = new Region();
    }
    return region;
}
function regionRelease(region) {
    regionPool.push(region);
}
regionProto.setTo = function (minX, minY, maxX, maxY) {
    this._minX = minX;
    this._minY = minY;
    this._maxX = maxX;
    this._maxY = maxY;
    this.updateArea();
    return this;
};
regionProto.intValues = function () {
    this._minX = Math.floor(this._minX);
    this._minY = Math.floor(this._minY);
    this._maxX = Math.ceil(this._maxX);
    this._maxY = Math.ceil(this._maxY);
    this.updateArea();
};
regionProto.updateArea = function () {
    this._width = this._maxX - this._minX;
    this._height = this._maxY - this._minY;
    this._area = this._width * this._height;
};
regionProto.union = function (target) {
    if(this._width <= 0 || this._height <= 0) {
        this.setTo(target._minX, target._minY, target._maxX, target._maxY);
        return;
    }
    if (this._minX > target._minX) {
        this._minX = target._minX;
    }
    if (this._minY > target._minY) {
        this._minY = target._minY;
    }
    if (this._maxX < target._maxX) {
        this._maxX = target._maxX;
    }
    if (this._maxY < target._maxY) {
        this._maxY = target._maxY;
    }
    this.updateArea();
};
regionProto.setEmpty = function () {
    this._minX = 0;
    this._minY = 0;
    this._maxX = 0;
    this._maxY = 0;
    this._width = 0;
    this._height = 0;
    this._area = 0;
};
regionProto.isEmpty = function () {
    return this._width <= 0 || this._height <= 0;
};
regionProto.intersects = function (target) {
    if (this._width <= 0 || this._height <= 0 || target._width <= 0 || target._height <= 0) {
        return false;
    }
    var max = this._minX > target._minX ? this._minX : target._minX;
    var min = this._maxX < target._maxX ? this._maxX : target._maxX;
    if (max > min) {
        return false;
    }
    max = this._minY > target._minY ? this._minY : target._minY;
    min = this._maxY < target._maxY ? this._maxY : target._maxY;
    return max <= min;
};
regionProto.updateRegion = function (bounds, matrix) {
    if (bounds.width == 0 || bounds.height == 0) {
        this.setEmpty();
        return;
    }
    var m = matrix;
    var a = m.a;
    var b = m.b;
    var c = m.c;
    var d = m.d;
    var tx = m.tx;
    var ty = m.ty;
    var x = bounds.x;
    var y = bounds.y;
    var xMax = x + bounds.width;
    var yMax = y + bounds.height;
    var minX, minY, maxX, maxY;
    if (a == 1.0 && b == 0.0 && c == 0.0 && d == 1.0) {
        minX = x + tx - 1;
        minY = y + ty - 1;
        maxX = xMax + tx + 1;
        maxY = yMax + ty + 1;
    }
    else {
        var x0 = a * x + c * y + tx;
        var y0 = b * x + d * y + ty;
        var x1 = a * xMax + c * y + tx;
        var y1 = b * xMax + d * y + ty;
        var x2 = a * xMax + c * yMax + tx;
        var y2 = b * xMax + d * yMax + ty;
        var x3 = a * x + c * yMax + tx;
        var y3 = b * x + d * yMax + ty;
        var tmp = 0;
        if (x0 > x1) {
            tmp = x0;
            x0 = x1;
            x1 = tmp;
        }
        if (x2 > x3) {
            tmp = x2;
            x2 = x3;
            x3 = tmp;
        }
        minX = (x0 < x2 ? x0 : x2) - 1;
        maxX = (x1 > x3 ? x1 : x3) + 1;
        if (y0 > y1) {
            tmp = y0;
            y0 = y1;
            y1 = tmp;
        }
        if (y2 > y3) {
            tmp = y2;
            y2 = y3;
            y3 = tmp;
        }
        minY = (y0 < y2 ? y0 : y2) - 1;
        maxY = (y1 > y3 ? y1 : y3) + 1;
    }
    this._minX = minX;
    this._minY = minY;
    this._maxX = maxX;
    this._maxY = maxY;
    this._width = maxX - minX;
    this._height = maxY - minY;
    this._area = this._width * this._height;
};
function unionArea(r1, r2) {
    var minX = r1._minX < r2._minX ? r1._minX : r2._minX;
    var minY = r1._minY < r2._minY ? r1._minY : r2._minY;
    var maxX = r1._maxX > r2._maxX ? r1._maxX : r2._maxX;
    var maxY = r1._maxY > r2._maxY ? r1._maxY : r2._maxY;
    return (maxX - minX) * (maxY - minY);
}
var DirtyRegion = function() {
    this.dirtyList = [];
    this.hasClipRect = false;
    this.clipWidth = 0;
    this.clipHeight = 0;
    this.clipArea = 0;
    this.clipRectChanged = false;
};
var dirtyRegionProto = DirtyRegion.prototype;
dirtyRegionProto.setClipRect = function(width, height) {
    this.hasClipRect = true;
    this.clipRectChanged = true;
    this.clipWidth = Math.ceil(width);
    this.clipHeight = Math.ceil(height);
    this.clipArea = this.clipWidth * this.clipHeight;
};
dirtyRegionProto.addRegion = function(target) {
    var minX = target._minX, minY = target._minY, maxX = target._maxX, maxY = target._maxY;
    if (this.hasClipRect) {
        if (minX < 0) {
            minX = 0;
        }
        if (minY < 0) {
            minY = 0;
        }
        if (maxX > this.clipWidth) {
            maxX = this.clipWidth;
        }
        if (maxY > this.clipHeight) {
            maxY = this.clipHeight;
        }
    }
    if (minX >= maxX || minY >= maxY) {
        return false;
    }
    if (this.clipRectChanged) {
        return true;
    }
    var dirtyList = this.dirtyList;
    var region = regionCreate();
    dirtyList.push(region.setTo(minX, minY, maxX, maxY));
    this.mergeDirtyList(dirtyList);
    return true;
};
dirtyRegionProto.clear = function() {
    var dirtyList = this.dirtyList;
    var length = dirtyList.length;
    for (var i = 0; i < length; i++) {
        regionRelease(dirtyList[i]);
    }
    dirtyList.length = 0;
};
dirtyRegionProto.getDirtyRegions = function() {
    var dirtyList = this.dirtyList;
    if (this.clipRectChanged) {
        this.clipRectChanged = false;
        this.clear();
        var region = regionCreate();
        dirtyList.push(region.setTo(0, 0, this.clipWidth, this.clipHeight));
    }
    else {
        while (this.mergeDirtyList(dirtyList)) {
        }
    }
    var numDirty = this.dirtyList.length;
    if (numDirty > 0) {
        for (var i = 0; i < numDirty; i++) {
            this.dirtyList[i].intValues();
        }
    }
    return this.dirtyList;
};
dirtyRegionProto.mergeDirtyList = function(dirtyList) {
    var length = dirtyList.length;
    if (length < 2) {
        return false;
    }
    var hasClipRect = this.hasClipRect;
    var bestDelta = length > 3 ? Number.POSITIVE_INFINITY : 0;
    var mergeA = 0;
    var mergeB = 0;
    var totalArea = 0;
    for (var i = 0; i < length - 1; i++) {
        var regionA = dirtyList[i];
        hasClipRect && (totalArea += regionA.area);
        for (var j = i + 1; j < length; j++) {
            var regionB = dirtyList[j];
            var delta = unionArea(regionA, regionB) - regionA.area - regionB.area;
            if (bestDelta > delta) {
                mergeA = i;
                mergeB = j;
                bestDelta = delta;
            }
        }
    }
    if (hasClipRect && (totalArea / this.clipArea) > 0.95) {
        this.clipRectChanged = true;
    }
    if (mergeA != mergeB) {
        var region = dirtyList[mergeB];
        dirtyList[mergeA].union(region);
        regionRelease(region);
        dirtyList.splice(mergeB, 1);
        return true;
    }
    return false;
};
cc.Region = Region;
cc.DirtyRegion = DirtyRegion;
cc.profiler = (function () {
    var _showFPS = false;
    var _inited = false;
    var _frames = 0, _frameRate = 0, _lastSPF = 0, _accumDt = 0;
    var _afterVisitListener = null,
        _FPSLabel = document.createElement('div'),
        _SPFLabel = document.createElement('div'),
        _drawsLabel = document.createElement('div'),
        _fps = document.createElement('div');
    var LEVEL_DET_FACTOR = 0.6, _levelDetCycle = 10;
    var LEVELS = [0, 10, 20, 30];
    var _fpsCount = [0, 0, 0, 0];
    var _currLevel = 3, _analyseCount = 0, _totalFPS = 0;
    _fps.id = 'fps';
    _fps.style.position = 'absolute';
    _fps.style.padding = '3px';
    _fps.style.textAlign = 'left';
    _fps.style.backgroundColor = 'rgb(0, 0, 34)';
    _fps.style.bottom = cc.DIRECTOR_STATS_POSITION.y + '0px';
    _fps.style.left = cc.DIRECTOR_STATS_POSITION.x + 'px';
    _fps.style.width = '45px';
    _fps.style.height = '60px';
    var labels = [_drawsLabel, _SPFLabel, _FPSLabel];
    for (var i = 0; i < 3; ++i) {
        var style = labels[i].style;
        style.color = 'rgb(0, 255, 255)';
        style.font = 'bold 12px Helvetica, Arial';
        style.lineHeight = '20px';
        style.width = '100%';
        _fps.appendChild(labels[i]);
    }
    var analyseFPS = function (fps) {
        var lastId = LEVELS.length - 1, i = lastId, ratio, average = 0;
        _analyseCount++;
        _totalFPS += fps;
        for (; i >= 0; i--) {
            if (fps >= LEVELS[i]) {
                _fpsCount[i]++;
                break;
            }
        }
        if (_analyseCount >= _levelDetCycle) {
            average = _totalFPS / _levelDetCycle;
            for (i = lastId; i >0; i--) {
                ratio = _fpsCount[i] / _levelDetCycle;
                if (ratio >= LEVEL_DET_FACTOR && average >= LEVELS[i]) {
                    if (i != _currLevel) {
                        _currLevel = i;
                        profiler.onFrameRateChange && profiler.onFrameRateChange(average.toFixed(2));
                    }
                    break;
                }
            }
            _changeCount = 0;
            _analyseCount = 0;
            _totalFPS = 0;
            for (i = lastId; i > 0; i--) {
                _fpsCount[i] = 0;
            }
        }
    };
    var afterVisit = function () {
        _lastSPF = cc.director.getSecondsPerFrame();
        _frames++;
        _accumDt += cc.director.getDeltaTime();
        if (_accumDt > cc.DIRECTOR_FPS_INTERVAL) {
            _frameRate = _frames / _accumDt;
            _frames = 0;
            _accumDt = 0;
            if (profiler.onFrameRateChange) {
                analyseFPS(_frameRate);
            }
            if (_showFPS) {
                _SPFLabel.innerText = _lastSPF.toFixed(3);
                _FPSLabel.innerText = _frameRate.toFixed(1);
                _drawsLabel.innerText = (0 | cc.g_NumberOfDraws).toString();
            }
        }
    };
    var profiler = {
        onFrameRateChange: null,
        getSecondsPerFrame: function () {
            return _lastSPF;
        },
        getFrameRate: function () {
            return _frameRate;
        },
        setProfileDuration: function (duration) {
            if (!isNaN(duration) && duration > 0) {
                _levelDetCycle = duration / cc.DIRECTOR_FPS_INTERVAL;
            }
        },
        resumeProfiling: function () {
            cc.eventManager.addListener(_afterVisitListener, 1);
        },
        stopProfiling: function () {
            cc.eventManager.removeListener(_afterVisitListener);
        },
        isShowingStats: function () {
            return _showFPS;
        },
        showStats: function () {
            if (!_inited) {
                this.init();
            }
            if (_fps.parentElement === null) {
                cc.container.appendChild(_fps);
            }
            _showFPS = true;
        },
        hideStats: function () {
            _showFPS = false;
            if (_fps.parentElement === cc.container) {
                cc.container.removeChild(_fps);
            }
        },
        init: function () {
            if (!_inited) {
                _afterVisitListener = cc.eventManager.addCustomListener(cc.Director.EVENT_AFTER_VISIT, afterVisit);
                _inited = true;
            }
        }
    };
    return profiler;
})();
cc._LogInfos = {
    ActionManager_addAction: "cc.ActionManager.addAction(): action must be non-null",
    ActionManager_removeAction: "cocos2d: removeAction: Target not found",
    ActionManager_removeActionByTag: "cc.ActionManager.removeActionByTag(): an invalid tag",
    ActionManager_removeActionByTag_2: "cc.ActionManager.removeActionByTag(): target must be non-null",
    ActionManager_getActionByTag: "cc.ActionManager.getActionByTag(): an invalid tag",
    ActionManager_getActionByTag_2: "cocos2d : getActionByTag(tag = %s): Action not found",
    configuration_dumpInfo: "cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)",
    configuration_loadConfigFile: "Expected 'data' dict, but not found. Config file: %s",
    configuration_loadConfigFile_2: "Please load the resource first : %s",
    Director_resume: "cocos2d: Director: Error in gettimeofday",
    Director_setProjection: "cocos2d: Director: unrecognized projection",
    Director_popToSceneStackLevel: "cocos2d: Director: unrecognized projection",
    Director_popToSceneStackLevel_2: "cocos2d: Director: Error in gettimeofday",
    Director_popScene: "running scene should not null",
    Director_pushScene: "the scene should not null",
    arrayVerifyType: "element type is wrong!",
    Scheduler_scheduleCallbackForTarget: "CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:%s to %s",
    Scheduler_scheduleCallbackForTarget_2: "cc.scheduler.scheduleCallbackForTarget(): callback_fn should be non-null.",
    Scheduler_scheduleCallbackForTarget_3: "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
    Scheduler_pauseTarget: "cc.Scheduler.pauseTarget():target should be non-null",
    Scheduler_resumeTarget: "cc.Scheduler.resumeTarget():target should be non-null",
    Scheduler_isTargetPaused: "cc.Scheduler.isTargetPaused():target should be non-null",
    Node_getZOrder: "getZOrder is deprecated. Please use getLocalZOrder instead.",
    Node_setZOrder: "setZOrder is deprecated. Please use setLocalZOrder instead.",
    Node_getRotation: "RotationX != RotationY. Don't know which one to return",
    Node_getScale: "ScaleX != ScaleY. Don't know which one to return",
    Node_addChild: "An Node can't be added as a child of itself.",
    Node_addChild_2: "child already added. It can't be added again",
    Node_addChild_3: "child must be non-null",
    Node_removeFromParentAndCleanup: "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
    Node_boundingBox: "boundingBox is deprecated. Use getBoundingBox instead",
    Node_removeChildByTag: "argument tag is an invalid tag",
    Node_removeChildByTag_2: "cocos2d: removeChildByTag(tag = %s): child not found!",
    Node_removeAllChildrenWithCleanup: "removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead",
    Node_stopActionByTag: "cc.Node.stopActionBy(): argument tag an invalid tag",
    Node_getActionByTag: "cc.Node.getActionByTag(): argument tag is an invalid tag",
    Node_resumeSchedulerAndActions: "resumeSchedulerAndActions is deprecated, please use resume instead.",
    Node_pauseSchedulerAndActions: "pauseSchedulerAndActions is deprecated, please use pause instead.",
    Node__arrayMakeObjectsPerformSelector: "Unknown callback function",
    Node_reorderChild: "child must be non-null",
    Node_runAction: "cc.Node.runAction(): action must be non-null",
    Node_schedule: "callback function must be non-null",
    Node_schedule_2: "interval must be positive",
    Node_initWithTexture: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
    AtlasNode_updateAtlasValues: "cc.AtlasNode.updateAtlasValues(): Shall be overridden in subclasses",
    AtlasNode_initWithTileFile: "",
    AtlasNode__initWithTexture: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.",
    _EventListenerKeyboard_checkAvailable: "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
    _EventListenerTouchOneByOne_checkAvailable: "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
    _EventListenerTouchAllAtOnce_checkAvailable: "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
    _EventListenerAcceleration_checkAvailable: "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil",
    EventListener_create: "Invalid parameter.",
    __getListenerID: "Don't call this method if the event is for touch.",
    eventManager__forceAddEventListener: "Invalid scene graph priority!",
    eventManager_addListener: "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
    eventManager_removeListeners: "Invalid listener type!",
    eventManager_setPriority: "Can't set fixed priority with scene graph based listener.",
    eventManager_addListener_2: "Invalid parameters.",
    eventManager_addListener_3: "listener must be a cc.EventListener object when adding a fixed priority listener",
    eventManager_addListener_4: "The listener has been registered, please don't register it again.",
    LayerMultiplex_initWithLayers: "parameters should not be ending with null in Javascript",
    LayerMultiplex_switchTo: "Invalid index in MultiplexLayer switchTo message",
    LayerMultiplex_switchToAndReleaseMe: "Invalid index in MultiplexLayer switchTo message",
    LayerMultiplex_addLayer: "cc.Layer.addLayer(): layer should be non-null",
    EGLView_setDesignResolutionSize: "Resolution not valid",
    EGLView_setDesignResolutionSize_2: "should set resolutionPolicy",
    inputManager_handleTouchesBegin: "The touches is more than MAX_TOUCHES, nUnusedIndex = %s",
    swap: "cc.swap is being modified from original macro, please check usage",
    checkGLErrorDebug: "WebGL error %s",
    animationCache__addAnimationsWithDictionary: "cocos2d: cc.AnimationCache: No animations were found in provided dictionary.",
    animationCache__addAnimationsWithDictionary_2: "cc.AnimationCache. Invalid animation format",
    animationCache_addAnimations: "cc.AnimationCache.addAnimations(): File could not be found",
    animationCache__parseVersion1: "cocos2d: cc.AnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
    animationCache__parseVersion1_2: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
    animationCache__parseVersion1_3: "cocos2d: cc.AnimationCache: None of the frames for animation '%s' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.",
    animationCache__parseVersion1_4: "cocos2d: cc.AnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '%s' may be missing.",
    animationCache__parseVersion2: "cocos2d: CCAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
    animationCache__parseVersion2_2: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
    animationCache_addAnimations_2: "cc.AnimationCache.addAnimations(): Invalid texture file name",
    Sprite_reorderChild: "cc.Sprite.reorderChild(): this child is not in children list",
    Sprite_ignoreAnchorPointForPosition: "cc.Sprite.ignoreAnchorPointForPosition(): it is invalid in cc.Sprite when using SpriteBatchNode",
    Sprite_setDisplayFrameWithAnimationName: "cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found",
    Sprite_setDisplayFrameWithAnimationName_2: "cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index",
    Sprite_setDisplayFrame: "setDisplayFrame is deprecated, please use setSpriteFrame instead.",
    Sprite__updateBlendFunc: "cc.Sprite._updateBlendFunc(): _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode",
    Sprite_initWithSpriteFrame: "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null",
    Sprite_initWithSpriteFrameName: "cc.Sprite.initWithSpriteFrameName(): spriteFrameName should be non-null",
    Sprite_initWithSpriteFrameName1: " is null, please check.",
    Sprite_initWithFile: "cc.Sprite.initWithFile(): filename should be non-null",
    Sprite_setDisplayFrameWithAnimationName_3: "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null",
    Sprite_reorderChild_2: "cc.Sprite.reorderChild(): child should be non-null",
    Sprite_addChild: "cc.Sprite.addChild(): cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode",
    Sprite_addChild_2: "cc.Sprite.addChild(): cc.Sprite only supports a sprite using same texture as children when using cc.SpriteBatchNode",
    Sprite_addChild_3: "cc.Sprite.addChild(): child should be non-null",
    Sprite_setTexture: "cc.Sprite.texture setter: Batched sprites should use the same texture as the batchnode",
    Sprite_updateQuadFromSprite: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
    Sprite_insertQuadFromSprite: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
    Sprite_addChild_4: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
    Sprite_addChild_5: "cc.SpriteBatchNode.addChild(): cc.Sprite is not using the same texture",
    Sprite_initWithTexture: "Sprite.initWithTexture(): Argument must be non-nil ",
    Sprite_setSpriteFrame: "Invalid spriteFrameName",
    Sprite_setTexture_2: "Invalid argument: cc.Sprite.texture setter expects a CCTexture2D.",
    Sprite_updateQuadFromSprite_2: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
    Sprite_insertQuadFromSprite_2: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
    SpriteBatchNode_addSpriteWithoutQuad: "cc.SpriteBatchNode.addQuadFromSprite(): SpriteBatchNode only supports cc.Sprites as children",
    SpriteBatchNode_increaseAtlasCapacity: "cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from %s to %s.",
    SpriteBatchNode_increaseAtlasCapacity_2: "cocos2d: WARNING: Not enough memory to resize the atlas",
    SpriteBatchNode_reorderChild: "cc.SpriteBatchNode.addChild(): Child doesn't belong to Sprite",
    SpriteBatchNode_removeChild: "cc.SpriteBatchNode.addChild(): sprite batch node should contain the child",
    SpriteBatchNode_addSpriteWithoutQuad_2: "cc.SpriteBatchNode.addQuadFromSprite(): child should be non-null",
    SpriteBatchNode_reorderChild_2: "cc.SpriteBatchNode.addChild(): child should be non-null",
    spriteFrameCache__getFrameConfig: "cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist",
    spriteFrameCache_addSpriteFrames: "cocos2d: WARNING: an alias with name %s already exists",
    spriteFrameCache__checkConflict: "cocos2d: WARNING: Sprite frame: %s has already been added by another source, please fix name conflit",
    spriteFrameCache_getSpriteFrame: "cocos2d: cc.SpriteFrameCahce: Frame %s not found",
    spriteFrameCache__getFrameConfig_2: "Please load the resource first : %s",
    spriteFrameCache_addSpriteFrames_2: "cc.SpriteFrameCache.addSpriteFrames(): plist should be non-null",
    spriteFrameCache_addSpriteFrames_3: "Argument must be non-nil",
    CCSpriteBatchNode_updateQuadFromSprite: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
    CCSpriteBatchNode_insertQuadFromSprite: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
    CCSpriteBatchNode_addChild: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children",
    CCSpriteBatchNode_initWithTexture: "Sprite.initWithTexture(): Argument must be non-nil ",
    CCSpriteBatchNode_addChild_2: "cc.Sprite.addChild(): child should be non-null",
    CCSpriteBatchNode_setSpriteFrame: "Invalid spriteFrameName",
    CCSpriteBatchNode_setTexture: "Invalid argument: cc.Sprite texture setter expects a CCTexture2D.",
    CCSpriteBatchNode_updateQuadFromSprite_2: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
    CCSpriteBatchNode_insertQuadFromSprite_2: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null",
    CCSpriteBatchNode_addChild_3: "cc.SpriteBatchNode.addChild(): child should be non-null",
    TextureAtlas_initWithFile: "cocos2d: Could not open file: %s",
    TextureAtlas_insertQuad: "cc.TextureAtlas.insertQuad(): invalid totalQuads",
    TextureAtlas_initWithTexture: "cc.TextureAtlas.initWithTexture():texture should be non-null",
    TextureAtlas_updateQuad: "cc.TextureAtlas.updateQuad(): quad should be non-null",
    TextureAtlas_updateQuad_2: "cc.TextureAtlas.updateQuad(): Invalid index",
    TextureAtlas_insertQuad_2: "cc.TextureAtlas.insertQuad(): Invalid index",
    TextureAtlas_insertQuads: "cc.TextureAtlas.insertQuad(): Invalid index + amount",
    TextureAtlas_insertQuadFromIndex: "cc.TextureAtlas.insertQuadFromIndex(): Invalid newIndex",
    TextureAtlas_insertQuadFromIndex_2: "cc.TextureAtlas.insertQuadFromIndex(): Invalid fromIndex",
    TextureAtlas_removeQuadAtIndex: "cc.TextureAtlas.removeQuadAtIndex(): Invalid index",
    TextureAtlas_removeQuadsAtIndex: "cc.TextureAtlas.removeQuadsAtIndex(): index + amount out of bounds",
    TextureAtlas_moveQuadsFromIndex: "cc.TextureAtlas.moveQuadsFromIndex(): move is out of bounds",
    TextureAtlas_moveQuadsFromIndex_2: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid newIndex",
    TextureAtlas_moveQuadsFromIndex_3: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid oldIndex",
    textureCache_addPVRTCImage: "TextureCache:addPVRTCImage does not support on HTML5",
    textureCache_addETCImage: "TextureCache:addPVRTCImage does not support on HTML5",
    textureCache_textureForKey: "textureForKey is deprecated. Please use getTextureForKey instead.",
    textureCache_addPVRImage: "addPVRImage does not support on HTML5",
    textureCache_addUIImage: "cocos2d: Couldn't add UIImage in TextureCache",
    textureCache_dumpCachedTextureInfo: "cocos2d: '%s' id=%s %s x %s",
    textureCache_dumpCachedTextureInfo_2: "cocos2d: '%s' id= HTMLCanvasElement %s x %s",
    textureCache_dumpCachedTextureInfo_3: "cocos2d: TextureCache dumpDebugInfo: %s textures, HTMLCanvasElement for %s KB (%s MB)",
    textureCache_addUIImage_2: "cc.Texture.addUIImage(): image should be non-null",
    Texture2D_initWithETCFile: "initWithETCFile does not support on HTML5",
    Texture2D_initWithPVRFile: "initWithPVRFile does not support on HTML5",
    Texture2D_initWithPVRTCData: "initWithPVRTCData does not support on HTML5",
    Texture2D_addImage: "cc.Texture.addImage(): path should be non-null",
    Texture2D_initWithImage: "cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil",
    Texture2D_initWithImage_2: "cocos2d: WARNING: Image (%s x %s) is bigger than the supported %s x %s",
    Texture2D_initWithString: "initWithString isn't supported on cocos2d-html5",
    Texture2D_initWithETCFile_2: "initWithETCFile does not support on HTML5",
    Texture2D_initWithPVRFile_2: "initWithPVRFile does not support on HTML5",
    Texture2D_initWithPVRTCData_2: "initWithPVRTCData does not support on HTML5",
    Texture2D_bitsPerPixelForFormat: "bitsPerPixelForFormat: %s, cannot give useful result, it's a illegal pixel format",
    Texture2D__initPremultipliedATextureWithImage: "cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha",
    Texture2D_addImage_2: "cc.Texture.addImage(): path should be non-null",
    Texture2D_initWithData: "NSInternalInconsistencyException",
    MissingFile: "Missing file: %s",
    radiansToDegress: "cc.radiansToDegress() should be called cc.radiansToDegrees()",
    RectWidth: "Rect width exceeds maximum margin: %s",
    RectHeight: "Rect height exceeds maximum margin: %s",
    EventManager__updateListeners: "If program goes here, there should be event in dispatch.",
    EventManager__updateListeners_2: "_inDispatch should be 1 here."
};
cc._logToWebPage = function (msg) {
    if (!cc._canvas)
        return;
    var logList = cc._logList;
    var doc = document;
    if (!logList) {
        var logDiv = doc.createElement("Div");
        var logDivStyle = logDiv.style;
        logDiv.setAttribute("id", "logInfoDiv");
        cc._canvas.parentNode.appendChild(logDiv);
        logDiv.setAttribute("width", "200");
        logDiv.setAttribute("height", cc._canvas.height);
        logDivStyle.zIndex = "99999";
        logDivStyle.position = "absolute";
        logDivStyle.top = "0";
        logDivStyle.left = "0";
        logList = cc._logList = doc.createElement("textarea");
        var logListStyle = logList.style;
        logList.setAttribute("rows", "20");
        logList.setAttribute("cols", "30");
        logList.setAttribute("disabled", true);
        logDiv.appendChild(logList);
        logListStyle.backgroundColor = "transparent";
        logListStyle.borderBottom = "1px solid #cccccc";
        logListStyle.borderRightWidth = "0px";
        logListStyle.borderLeftWidth = "0px";
        logListStyle.borderTopWidth = "0px";
        logListStyle.borderTopStyle = "none";
        logListStyle.borderRightStyle = "none";
        logListStyle.borderLeftStyle = "none";
        logListStyle.padding = "0px";
        logListStyle.margin = 0;
    }
    logList.value = logList.value + msg + "\r\n";
    logList.scrollTop = logList.scrollHeight;
};
cc._formatString = function (arg) {
    if (cc.isObject(arg)) {
        try {
            return JSON.stringify(arg);
        } catch (err) {
            return "";
        }
    } else
        return arg;
};
cc._initDebugSetting = function (mode) {
    var ccGame = cc.game;
    if(mode === ccGame.DEBUG_MODE_NONE)
        return;
    var locLog;
    if(mode > ccGame.DEBUG_MODE_ERROR){
        locLog = cc._logToWebPage.bind(cc);
        cc.error = function(){
            locLog("ERROR :  " + cc.formatStr.apply(cc, arguments));
        };
        cc.assert = function(cond, msg) {
            if (!cond && msg) {
                for (var i = 2; i < arguments.length; i++)
                    msg = msg.replace(/(%s)|(%d)/, cc._formatString(arguments[i]));
                locLog("Assert: " + msg);
            }
        };
        if(mode !== ccGame.DEBUG_MODE_ERROR_FOR_WEB_PAGE){
            cc.warn = function(){
                locLog("WARN :  " + cc.formatStr.apply(cc, arguments));
            };
        }
        if(mode === ccGame.DEBUG_MODE_INFO_FOR_WEB_PAGE){
            cc.log = function(){
                locLog(cc.formatStr.apply(cc, arguments));
            };
        }
    } else if(console && console.log.apply){//console is null when user doesn't open dev tool on IE9
        cc.error = Function.prototype.bind.call(console.error, console);
        if (console.assert) {
            cc.assert = Function.prototype.bind.call(console.assert, console);
        } else {
            cc.assert = function (cond, msg) {
                if (!cond && msg) {
                    for (var i = 2; i < arguments.length; i++)
                        msg = msg.replace(/(%s)|(%d)/, cc._formatString(arguments[i]));
                    throw new Error(msg);
                }
            };
        }
        if (mode !== ccGame.DEBUG_MODE_ERROR)
            cc.warn = Function.prototype.bind.call(console.warn, console);
        if (mode === ccGame.DEBUG_MODE_INFO)
            cc.log = Function.prototype.bind.call(console.log, console);
    }
};
cc.HashElement = cc.Class.extend({
    actions:null,
    target:null,
    actionIndex:0,
    currentAction:null,
    currentActionSalvaged:false,
    paused:false,
    hh:null,
    ctor:function () {
        this.actions = [];
        this.target = null;
        this.actionIndex = 0;
        this.currentAction = null;
        this.currentActionSalvaged = false;
        this.paused = false;
        this.hh = null;
    }
});
cc.ActionManager = cc.Class.extend({
    _hashTargets:null,
    _arrayTargets:null,
    _currentTarget:null,
    _currentTargetSalvaged:false,
    _searchElementByTarget:function (arr, target) {
        for (var k = 0; k < arr.length; k++) {
            if (target === arr[k].target)
                return arr[k];
        }
        return null;
    },
    ctor:function () {
        this._hashTargets = {};
        this._arrayTargets = [];
        this._currentTarget = null;
        this._currentTargetSalvaged = false;
    },
    addAction:function (action, target, paused) {
        if(!action)
            throw new Error("cc.ActionManager.addAction(): action must be non-null");
        if(!target)
            throw new Error("cc.ActionManager.addAction(): action must be non-null");
        var element = this._hashTargets[target.__instanceId];
        if (!element) {
            element = new cc.HashElement();
            element.paused = paused;
            element.target = target;
            this._hashTargets[target.__instanceId] = element;
            this._arrayTargets.push(element);
        }
        this._actionAllocWithHashElement(element);
        element.actions.push(action);
        action.startWithTarget(target);
    },
    removeAllActions:function () {
        var locTargets = this._arrayTargets;
        for (var i = 0; i < locTargets.length; i++) {
            var element = locTargets[i];
            if (element)
                this.removeAllActionsFromTarget(element.target, true);
        }
    },
    removeAllActionsFromTarget:function (target, forceDelete) {
        if (target == null)
            return;
        var element = this._hashTargets[target.__instanceId];
        if (element) {
            if (element.actions.indexOf(element.currentAction) !== -1 && !(element.currentActionSalvaged))
                element.currentActionSalvaged = true;
            element.actions.length = 0;
            if (this._currentTarget === element && !forceDelete) {
                this._currentTargetSalvaged = true;
            } else {
                this._deleteHashElement(element);
            }
        }
    },
    removeAction:function (action) {
        if (action == null)
            return;
        var target = action.getOriginalTarget();
        var element = this._hashTargets[target.__instanceId];
        if (element) {
            for (var i = 0; i < element.actions.length; i++) {
                if (element.actions[i] === action) {
                    element.actions.splice(i, 1);
                    break;
                }
            }
        } else {
            cc.log(cc._LogInfos.ActionManager_removeAction);
        }
    },
    removeActionByTag:function (tag, target) {
        if(tag === cc.ACTION_TAG_INVALID)
            cc.log(cc._LogInfos.ActionManager_addAction);
        cc.assert(target, cc._LogInfos.ActionManager_addAction);
        var element = this._hashTargets[target.__instanceId];
        if (element) {
            var limit = element.actions.length;
            for (var i = 0; i < limit; ++i) {
                var action = element.actions[i];
                if (action && action.getTag() === tag && action.getOriginalTarget() === target) {
                    this._removeActionAtIndex(i, element);
                    break;
                }
            }
        }
    },
    getActionByTag:function (tag, target) {
        if(tag === cc.ACTION_TAG_INVALID)
            cc.log(cc._LogInfos.ActionManager_getActionByTag);
        var element = this._hashTargets[target.__instanceId];
        if (element) {
            if (element.actions != null) {
                for (var i = 0; i < element.actions.length; ++i) {
                    var action = element.actions[i];
                    if (action && action.getTag() === tag)
                        return action;
                }
            }
            cc.log(cc._LogInfos.ActionManager_getActionByTag_2, tag);
        }
        return null;
    },
    numberOfRunningActionsInTarget:function (target) {
        var element = this._hashTargets[target.__instanceId];
        if (element)
            return (element.actions) ? element.actions.length : 0;
        return 0;
    },
    pauseTarget:function (target) {
        var element = this._hashTargets[target.__instanceId];
        if (element)
            element.paused = true;
    },
    resumeTarget:function (target) {
        var element = this._hashTargets[target.__instanceId];
        if (element)
            element.paused = false;
    },
    pauseAllRunningActions:function(){
        var idsWithActions = [];
        var locTargets = this._arrayTargets;
        for(var i = 0; i< locTargets.length; i++){
            var element = locTargets[i];
            if(element && !element.paused){
                element.paused = true;
                idsWithActions.push(element.target);
            }
        }
        return idsWithActions;
    },
    resumeTargets:function(targetsToResume){
        if(!targetsToResume)
            return;
        for(var i = 0 ; i< targetsToResume.length; i++){
            if(targetsToResume[i])
                this.resumeTarget(targetsToResume[i]);
        }
    },
    purgeSharedManager:function () {
        cc.director.getScheduler().unscheduleUpdate(this);
    },
    _removeActionAtIndex:function (index, element) {
        var action = element.actions[index];
        if ((action === element.currentAction) && (!element.currentActionSalvaged))
            element.currentActionSalvaged = true;
        element.actions.splice(index, 1);
        if (element.actionIndex >= index)
            element.actionIndex--;
        if (element.actions.length === 0) {
            if (this._currentTarget === element) {
                this._currentTargetSalvaged = true;
            } else {
                this._deleteHashElement(element);
            }
        }
    },
    _deleteHashElement:function (element) {
        var ret = false;
        if (element) {
            if(this._hashTargets[element.target.__instanceId]){
                delete this._hashTargets[element.target.__instanceId];
                cc.arrayRemoveObject(this._arrayTargets, element);
                ret = true;
            }
            element.actions = null;
            element.target = null;
        }
        return ret;
    },
    _actionAllocWithHashElement:function (element) {
        if (element.actions == null) {
            element.actions = [];
        }
    },
    update:function (dt) {
        var locTargets = this._arrayTargets , locCurrTarget;
        for (var elt = 0; elt < locTargets.length; elt++) {
            this._currentTarget = locTargets[elt];
            locCurrTarget = this._currentTarget;
            if (!locCurrTarget.paused) {
                for (locCurrTarget.actionIndex = 0;
                     locCurrTarget.actionIndex < (locCurrTarget.actions ? locCurrTarget.actions.length : 0);
                     locCurrTarget.actionIndex++) {
                    locCurrTarget.currentAction = locCurrTarget.actions[locCurrTarget.actionIndex];
                    if (!locCurrTarget.currentAction)
                        continue;
                    locCurrTarget.currentActionSalvaged = false;
                    locCurrTarget.currentAction.step(dt * ( locCurrTarget.currentAction._speedMethod ? locCurrTarget.currentAction._speed : 1 ) );
                    if (locCurrTarget.currentActionSalvaged) {
                        locCurrTarget.currentAction = null;//release
                    } else if (locCurrTarget.currentAction.isDone()) {
                        locCurrTarget.currentAction.stop();
                        var action = locCurrTarget.currentAction;
                        locCurrTarget.currentAction = null;
                        this.removeAction(action);
                    }
                    locCurrTarget.currentAction = null;
                }
            }
            if (this._currentTargetSalvaged && locCurrTarget.actions.length === 0) {
                this._deleteHashElement(locCurrTarget) && elt--;
            }
        }
    }
});
cc.ACTION_TAG_INVALID = -1;
cc.Action = cc.Class.extend({
    originalTarget:null,
    target:null,
    tag:cc.ACTION_TAG_INVALID,
    ctor:function () {
        this.originalTarget = null;
        this.target = null;
        this.tag = cc.ACTION_TAG_INVALID;
    },
    copy:function () {
        cc.log("copy is deprecated. Please use clone instead.");
        return this.clone();
    },
    clone:function () {
        var action = new cc.Action();
        action.originalTarget = null;
        action.target = null;
        action.tag = this.tag;
        return action;
    },
    isDone:function () {
        return true;
    },
    startWithTarget:function (target) {
        this.originalTarget = target;
        this.target = target;
    },
    stop:function () {
        this.target = null;
    },
    step:function (dt) {
        cc.log("[Action step]. override me");
    },
    update:function (dt) {
        cc.log("[Action update]. override me");
    },
    getTarget:function () {
        return this.target;
    },
    setTarget:function (target) {
        this.target = target;
    },
    getOriginalTarget:function () {
        return this.originalTarget;
    },
    setOriginalTarget:function (originalTarget) {
        this.originalTarget = originalTarget;
    },
    getTag:function () {
        return this.tag;
    },
    setTag:function (tag) {
        this.tag = tag;
    },
    retain:function () {
    },
    release:function () {
    }
});
cc.action = function () {
    return new cc.Action();
};
cc.Action.create = cc.action;
cc.FiniteTimeAction = cc.Action.extend({
    _duration:0,
    ctor:function () {
        cc.Action.prototype.ctor.call(this);
        this._duration = 0;
    },
    getDuration:function () {
        return this._duration * (this._timesForRepeat || 1);
    },
    setDuration:function (duration) {
        this._duration = duration;
    },
    reverse:function () {
        cc.log("cocos2d: FiniteTimeAction#reverse: Implement me");
        return null;
    },
    clone:function () {
        return new cc.FiniteTimeAction();
    }
});
cc.Speed = cc.Action.extend({
    _speed:0.0,
    _innerAction:null,
    ctor:function (action, speed) {
        cc.Action.prototype.ctor.call(this);
        this._speed = 0;
        this._innerAction = null;
		action && this.initWithAction(action, speed);
    },
    getSpeed:function () {
        return this._speed;
    },
    setSpeed:function (speed) {
        this._speed = speed;
    },
    initWithAction:function (action, speed) {
        if(!action)
            throw new Error("cc.Speed.initWithAction(): action must be non nil");
        this._innerAction = action;
        this._speed = speed;
        return true;
    },
    clone:function () {
        var action = new cc.Speed();
        action.initWithAction(this._innerAction.clone(), this._speed);
        return action;
    },
    startWithTarget:function (target) {
        cc.Action.prototype.startWithTarget.call(this, target);
        this._innerAction.startWithTarget(target);
    },
    stop:function () {
        this._innerAction.stop();
        cc.Action.prototype.stop.call(this);
    },
    step:function (dt) {
        this._innerAction.step(dt * this._speed);
    },
    isDone:function () {
        return this._innerAction.isDone();
    },
    reverse:function () {
        return new cc.Speed(this._innerAction.reverse(), this._speed);
    },
    setInnerAction:function (action) {
        if (this._innerAction !== action) {
            this._innerAction = action;
        }
    },
    getInnerAction:function () {
        return this._innerAction;
    }
});
cc.speed = function (action, speed) {
    return new cc.Speed(action, speed);
};
cc.Speed.create = cc.speed;
cc.Follow = cc.Action.extend({
    _followedNode:null,
    _boundarySet:false,
    _boundaryFullyCovered:false,
    _halfScreenSize:null,
    _fullScreenSize:null,
    _worldRect:null,
    leftBoundary:0.0,
    rightBoundary:0.0,
    topBoundary:0.0,
    bottomBoundary:0.0,
    ctor:function (followedNode, rect) {
        cc.Action.prototype.ctor.call(this);
        this._followedNode = null;
        this._boundarySet = false;
        this._boundaryFullyCovered = false;
        this._halfScreenSize = null;
        this._fullScreenSize = null;
        this.leftBoundary = 0.0;
        this.rightBoundary = 0.0;
        this.topBoundary = 0.0;
        this.bottomBoundary = 0.0;
        this._worldRect = cc.rect(0, 0, 0, 0);
		if(followedNode)
			rect ? this.initWithTarget(followedNode, rect)
				 : this.initWithTarget(followedNode);
    },
    clone:function () {
        var action = new cc.Follow();
        var locRect = this._worldRect;
        var rect = new cc.Rect(locRect.x, locRect.y, locRect.width, locRect.height);
        action.initWithTarget(this._followedNode, rect);
        return action;
    },
    isBoundarySet:function () {
        return this._boundarySet;
    },
    setBoudarySet:function (value) {
        this._boundarySet = value;
    },
    initWithTarget:function (followedNode, rect) {
        if(!followedNode)
            throw new Error("cc.Follow.initWithAction(): followedNode must be non nil");
        var _this = this;
        rect = rect || cc.rect(0, 0, 0, 0);
        _this._followedNode = followedNode;
        _this._worldRect = rect;
        _this._boundarySet = !cc._rectEqualToZero(rect);
        _this._boundaryFullyCovered = false;
        var winSize = cc.director.getWinSize();
        _this._fullScreenSize = cc.p(winSize.width, winSize.height);
        _this._halfScreenSize = cc.pMult(_this._fullScreenSize, 0.5);
        if (_this._boundarySet) {
            _this.leftBoundary = -((rect.x + rect.width) - _this._fullScreenSize.x);
            _this.rightBoundary = -rect.x;
            _this.topBoundary = -rect.y;
            _this.bottomBoundary = -((rect.y + rect.height) - _this._fullScreenSize.y);
            if (_this.rightBoundary < _this.leftBoundary) {
                _this.rightBoundary = _this.leftBoundary = (_this.leftBoundary + _this.rightBoundary) / 2;
            }
            if (_this.topBoundary < _this.bottomBoundary) {
                _this.topBoundary = _this.bottomBoundary = (_this.topBoundary + _this.bottomBoundary) / 2;
            }
            if ((_this.topBoundary === _this.bottomBoundary) && (_this.leftBoundary === _this.rightBoundary))
                _this._boundaryFullyCovered = true;
        }
        return true;
    },
    step:function (dt) {
        var tempPosX = this._followedNode.x;
        var tempPosY = this._followedNode.y;
        tempPosX = this._halfScreenSize.x - tempPosX;
        tempPosY = this._halfScreenSize.y - tempPosY;
        this.target._renderCmd._dirtyFlag = 0;
        if (this._boundarySet) {
            if (this._boundaryFullyCovered)
                return;
	        this.target.setPosition(cc.clampf(tempPosX, this.leftBoundary, this.rightBoundary), cc.clampf(tempPosY, this.bottomBoundary, this.topBoundary));
        } else {
            this.target.setPosition(tempPosX, tempPosY);
        }
    },
    isDone:function () {
        return ( !this._followedNode.running );
    },
    stop:function () {
        this.target = null;
        cc.Action.prototype.stop.call(this);
    }
});
cc.follow = function (followedNode, rect) {
    return new cc.Follow(followedNode, rect);
};
cc.Follow.create = cc.follow;
cc.ActionInterval = cc.FiniteTimeAction.extend({
    _elapsed:0,
    _firstTick:false,
    _easeList: null,
    _timesForRepeat:1,
    _repeatForever: false,
    _repeatMethod: false,//Compatible with repeat class, Discard after can be deleted
    _speed: 1,
    _speedMethod: false,//Compatible with speed class, Discard after can be deleted
    ctor:function (d) {
        this._speed = 1;
        this._timesForRepeat = 1;
        this._repeatForever = false;
        this.MAX_VALUE = 2;
        this._repeatMethod = false;//Compatible with repeat class, Discard after can be deleted
        this._speedMethod = false;//Compatible with repeat class, Discard after can be deleted
        cc.FiniteTimeAction.prototype.ctor.call(this);
		d !== undefined && this.initWithDuration(d);
    },
    getElapsed:function () {
        return this._elapsed;
    },
    initWithDuration:function (d) {
        this._duration = (d === 0) ? cc.FLT_EPSILON : d;
        this._elapsed = 0;
        this._firstTick = true;
        return true;
    },
    isDone:function () {
        return (this._elapsed >= this._duration);
    },
    _cloneDecoration: function(action){
        action._repeatForever = this._repeatForever;
        action._speed = this._speed;
        action._timesForRepeat = this._timesForRepeat;
        action._easeList = this._easeList;
        action._speedMethod = this._speedMethod;
        action._repeatMethod = this._repeatMethod;
    },
    _reverseEaseList: function(action){
        if(this._easeList){
            action._easeList = [];
            for(var i=0; i<this._easeList.length; i++){
                action._easeList.push(this._easeList[i].reverse());
            }
        }
    },
    clone:function () {
        var action = new cc.ActionInterval(this._duration);
        this._cloneDecoration(action);
        return action;
    },
    easing: function (easeObj) {
        if (this._easeList)
            this._easeList.length = 0;
        else
            this._easeList = [];
        for (var i = 0; i < arguments.length; i++)
            this._easeList.push(arguments[i]);
        return this;
    },
    _computeEaseTime: function (dt) {
        var locList = this._easeList;
        if ((!locList) || (locList.length === 0))
            return dt;
        for (var i = 0, n = locList.length; i < n; i++)
            dt = locList[i].easing(dt);
        return dt;
    },
    step:function (dt) {
        if (this._firstTick) {
            this._firstTick = false;
            this._elapsed = 0;
        } else
            this._elapsed += dt;
        var t = this._elapsed / (this._duration > 0.0000001192092896 ? this._duration : 0.0000001192092896);
        t = (1 > t ? t : 1);
        this.update(t > 0 ? t : 0);
        if(this._repeatMethod && this._timesForRepeat > 1 && this.isDone()){
            if(!this._repeatForever){
                this._timesForRepeat--;
            }
            this.startWithTarget(this.target);
            this.step(this._elapsed - this._duration);
        }
    },
    startWithTarget:function (target) {
        cc.Action.prototype.startWithTarget.call(this, target);
        this._elapsed = 0;
        this._firstTick = true;
    },
    reverse:function () {
        cc.log("cc.IntervalAction: reverse not implemented.");
        return null;
    },
    setAmplitudeRate:function (amp) {
        cc.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.");
    },
    getAmplitudeRate:function () {
        cc.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.");
        return 0;
    },
    speed: function(speed){
        if(speed <= 0){
            cc.log("The speed parameter error");
            return this;
        }
        this._speedMethod = true;//Compatible with repeat class, Discard after can be deleted
        this._speed *= speed;
        return this;
    },
    getSpeed: function(){
        return this._speed;
    },
    setSpeed: function(speed){
        this._speed = speed;
        return this;
    },
    repeat: function(times){
        times = Math.round(times);
        if(isNaN(times) || times < 1){
            cc.log("The repeat parameter error");
            return this;
        }
        this._repeatMethod = true;//Compatible with repeat class, Discard after can be deleted
        this._timesForRepeat *= times;
        return this;
    },
    repeatForever: function(){
        this._repeatMethod = true;//Compatible with repeat class, Discard after can be deleted
        this._timesForRepeat = this.MAX_VALUE;
        this._repeatForever = true;
        return this;
    }
});
cc.actionInterval = function (d) {
    return new cc.ActionInterval(d);
};
cc.ActionInterval.create = cc.actionInterval;
cc.Sequence = cc.ActionInterval.extend({
    _actions:null,
    _split:null,
    _last:0,
    ctor:function (tempArray) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._actions = [];
		var paramArray = (tempArray instanceof Array) ? tempArray : arguments;
		var last = paramArray.length - 1;
		if ((last >= 0) && (paramArray[last] == null))
			cc.log("parameters should not be ending with null in Javascript");
        if (last >= 0) {
            var prev = paramArray[0], action1;
            for (var i = 1; i < last; i++) {
                if (paramArray[i]) {
                    action1 = prev;
                    prev = cc.Sequence._actionOneTwo(action1, paramArray[i]);
                }
            }
            this.initWithTwoActions(prev, paramArray[last]);
        }
    },
    initWithTwoActions:function (actionOne, actionTwo) {
        if(!actionOne || !actionTwo)
            throw new Error("cc.Sequence.initWithTwoActions(): arguments must all be non nil");
        var d = actionOne._duration + actionTwo._duration;
        this.initWithDuration(d);
        this._actions[0] = actionOne;
        this._actions[1] = actionTwo;
        return true;
    },
    clone:function () {
        var action = new cc.Sequence();
        this._cloneDecoration(action);
        action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._split = this._actions[0]._duration / this._duration;
        this._last = -1;
    },
    stop:function () {
        if (this._last !== -1)
            this._actions[this._last].stop();
        cc.Action.prototype.stop.call(this);
    },
    update:function (dt) {
        var new_t, found = 0;
        var locSplit = this._split, locActions = this._actions, locLast = this._last, actionFound;
        dt = this._computeEaseTime(dt);
        if (dt < locSplit) {
            new_t = (locSplit !== 0) ? dt / locSplit : 1;
            if (found === 0 && locLast === 1) {
                locActions[1].update(0);
                locActions[1].stop();
            }
        } else {
            found = 1;
            new_t = (locSplit === 1) ? 1 : (dt - locSplit) / (1 - locSplit);
            if (locLast === -1) {
                locActions[0].startWithTarget(this.target);
                locActions[0].update(1);
                locActions[0].stop();
            }
            if (!locLast) {
                locActions[0].update(1);
                locActions[0].stop();
            }
        }
        actionFound = locActions[found];
        if (locLast === found && actionFound.isDone())
            return;
        if (locLast !== found)
            actionFound.startWithTarget(this.target);
        new_t = new_t * actionFound._timesForRepeat;
        actionFound.update(new_t > 1 ? new_t % 1 : new_t);
        this._last = found;
    },
    reverse:function () {
        var action = cc.Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.sequence = function (tempArray) {
    var paramArray = (tempArray instanceof Array) ? tempArray : arguments;
    if ((paramArray.length > 0) && (paramArray[paramArray.length - 1] == null))
        cc.log("parameters should not be ending with null in Javascript");
    var result, current, i, repeat;
    while(paramArray && paramArray.length > 0){
        current = Array.prototype.shift.call(paramArray);
        repeat = current._timesForRepeat || 1;
        current._repeatMethod = false;
        current._timesForRepeat = 1;
        i = 0;
        if(!result){
            result = current;
            i = 1;
        }
        for(i; i<repeat; i++){
            result = cc.Sequence._actionOneTwo(result, current);
        }
    }
    return result;
};
cc.Sequence.create = cc.sequence;
cc.Sequence._actionOneTwo = function (actionOne, actionTwo) {
    var sequence = new cc.Sequence();
    sequence.initWithTwoActions(actionOne, actionTwo);
    return sequence;
};
cc.Repeat = cc.ActionInterval.extend({
    _times:0,
    _total:0,
    _nextDt:0,
    _actionInstant:false,
    _innerAction:null,
    ctor: function (action, times) {
        cc.ActionInterval.prototype.ctor.call(this);
		times !== undefined && this.initWithAction(action, times);
    },
    initWithAction:function (action, times) {
        var duration = action._duration * times;
        if (this.initWithDuration(duration)) {
            this._times = times;
            this._innerAction = action;
            if (action instanceof cc.ActionInstant){
                this._actionInstant = true;
                this._times -= 1;
            }
            this._total = 0;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.Repeat();
        this._cloneDecoration(action);
        action.initWithAction(this._innerAction.clone(), this._times);
        return action;
    },
    startWithTarget:function (target) {
        this._total = 0;
        this._nextDt = this._innerAction._duration / this._duration;
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._innerAction.startWithTarget(target);
    },
    stop:function () {
        this._innerAction.stop();
        cc.Action.prototype.stop.call(this);
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        var locInnerAction = this._innerAction;
        var locDuration = this._duration;
        var locTimes = this._times;
        var locNextDt = this._nextDt;
        if (dt >= locNextDt) {
            while (dt > locNextDt && this._total < locTimes) {
                locInnerAction.update(1);
                this._total++;
                locInnerAction.stop();
                locInnerAction.startWithTarget(this.target);
                locNextDt += locInnerAction._duration / locDuration;
                this._nextDt = locNextDt;
            }
            if (dt >= 1.0 && this._total < locTimes)
                this._total++;
            if (!this._actionInstant) {
                if (this._total === locTimes) {
                    locInnerAction.update(1);
                    locInnerAction.stop();
                } else {
                    locInnerAction.update(dt - (locNextDt - locInnerAction._duration / locDuration));
                }
            }
        } else {
            locInnerAction.update((dt * locTimes) % 1.0);
        }
    },
    isDone:function () {
        return this._total === this._times;
    },
    reverse:function () {
        var action = new cc.Repeat(this._innerAction.reverse(), this._times);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    },
    setInnerAction:function (action) {
        if (this._innerAction !== action) {
            this._innerAction = action;
        }
    },
    getInnerAction:function () {
        return this._innerAction;
    }
});
cc.repeat = function (action, times) {
    return new cc.Repeat(action, times);
};
cc.Repeat.create = cc.repeat;
cc.RepeatForever = cc.ActionInterval.extend({
    _innerAction:null,
    ctor:function (action) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._innerAction = null;
		action && this.initWithAction(action);
    },
    initWithAction:function (action) {
        if(!action)
            throw new Error("cc.RepeatForever.initWithAction(): action must be non null");
        this._innerAction = action;
        return true;
    },
    clone:function () {
        var action = new cc.RepeatForever();
        this._cloneDecoration(action);
        action.initWithAction(this._innerAction.clone());
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._innerAction.startWithTarget(target);
    },
    step:function (dt) {
        var locInnerAction = this._innerAction;
        locInnerAction.step(dt);
        if (locInnerAction.isDone()) {
            locInnerAction.startWithTarget(this.target);
            locInnerAction.step(locInnerAction.getElapsed() - locInnerAction._duration);
        }
    },
    isDone:function () {
        return false;
    },
    reverse:function () {
        var action = new cc.RepeatForever(this._innerAction.reverse());
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    },
    setInnerAction:function (action) {
        if (this._innerAction !== action) {
            this._innerAction = action;
        }
    },
    getInnerAction:function () {
        return this._innerAction;
    }
});
cc.repeatForever = function (action) {
    return new cc.RepeatForever(action);
};
cc.RepeatForever.create = cc.repeatForever;
cc.Spawn = cc.ActionInterval.extend({
    _one:null,
    _two:null,
    ctor:function (tempArray) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._one = null;
        this._two = null;
		var paramArray = (tempArray instanceof Array) ? tempArray : arguments;
		var last = paramArray.length - 1;
		if ((last >= 0) && (paramArray[last] == null))
			cc.log("parameters should not be ending with null in Javascript");
        if (last >= 0) {
            var prev = paramArray[0], action1;
            for (var i = 1; i < last; i++) {
                if (paramArray[i]) {
                    action1 = prev;
                    prev = cc.Spawn._actionOneTwo(action1, paramArray[i]);
                }
            }
            this.initWithTwoActions(prev, paramArray[last]);
        }
    },
    initWithTwoActions:function (action1, action2) {
        if(!action1 || !action2)
            throw new Error("cc.Spawn.initWithTwoActions(): arguments must all be non null");
        var ret = false;
        var d1 = action1._duration;
        var d2 = action2._duration;
        if (this.initWithDuration(Math.max(d1, d2))) {
            this._one = action1;
            this._two = action2;
            if (d1 > d2) {
                this._two = cc.Sequence._actionOneTwo(action2, cc.delayTime(d1 - d2));
            } else if (d1 < d2) {
                this._one = cc.Sequence._actionOneTwo(action1, cc.delayTime(d2 - d1));
            }
            ret = true;
        }
        return ret;
    },
    clone:function () {
        var action = new cc.Spawn();
        this._cloneDecoration(action);
        action.initWithTwoActions(this._one.clone(), this._two.clone());
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._one.startWithTarget(target);
        this._two.startWithTarget(target);
    },
    stop:function () {
        this._one.stop();
        this._two.stop();
        cc.Action.prototype.stop.call(this);
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this._one)
            this._one.update(dt);
        if (this._two)
            this._two.update(dt);
    },
    reverse:function () {
        var action = cc.Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.spawn = function (tempArray) {
    var paramArray = (tempArray instanceof Array) ? tempArray : arguments;
    if ((paramArray.length > 0) && (paramArray[paramArray.length - 1] == null))
        cc.log("parameters should not be ending with null in Javascript");
    var prev = paramArray[0];
    for (var i = 1; i < paramArray.length; i++) {
        if (paramArray[i] != null)
            prev = cc.Spawn._actionOneTwo(prev, paramArray[i]);
    }
    return prev;
};
cc.Spawn.create = cc.spawn;
cc.Spawn._actionOneTwo = function (action1, action2) {
    var pSpawn = new cc.Spawn();
    pSpawn.initWithTwoActions(action1, action2);
    return pSpawn;
};
cc.RotateTo = cc.ActionInterval.extend({
    _dstAngleX:0,
    _startAngleX:0,
    _diffAngleX:0,
    _dstAngleY:0,
    _startAngleY:0,
    _diffAngleY:0,
    ctor:function (duration, deltaAngleX, deltaAngleY) {
        cc.ActionInterval.prototype.ctor.call(this);
		deltaAngleX !== undefined && this.initWithDuration(duration, deltaAngleX, deltaAngleY);
    },
    initWithDuration:function (duration, deltaAngleX, deltaAngleY) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this._dstAngleX = deltaAngleX || 0;
            this._dstAngleY = deltaAngleY || this._dstAngleX;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.RotateTo();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._dstAngleX, this._dstAngleY);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        var locStartAngleX = target.rotationX % 360.0;
        var locDiffAngleX = this._dstAngleX - locStartAngleX;
        if (locDiffAngleX > 180)
            locDiffAngleX -= 360;
        if (locDiffAngleX < -180)
            locDiffAngleX += 360;
        this._startAngleX = locStartAngleX;
        this._diffAngleX = locDiffAngleX;
        this._startAngleY = target.rotationY % 360.0;
        var locDiffAngleY = this._dstAngleY - this._startAngleY;
        if (locDiffAngleY > 180)
            locDiffAngleY -= 360;
        if (locDiffAngleY < -180)
            locDiffAngleY += 360;
        this._diffAngleY = locDiffAngleY;
    },
    reverse:function () {
        cc.log("cc.RotateTo.reverse(): it should be overridden in subclass.");
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this.target) {
            this.target.rotationX = this._startAngleX + this._diffAngleX * dt;
            this.target.rotationY = this._startAngleY + this._diffAngleY * dt;
        }
    }
});
cc.rotateTo = function (duration, deltaAngleX, deltaAngleY) {
    return new cc.RotateTo(duration, deltaAngleX, deltaAngleY);
};
cc.RotateTo.create = cc.rotateTo;
cc.RotateBy = cc.ActionInterval.extend({
    _angleX:0,
    _startAngleX:0,
    _angleY:0,
    _startAngleY:0,
    ctor: function (duration, deltaAngleX, deltaAngleY) {
        cc.ActionInterval.prototype.ctor.call(this);
		deltaAngleX !== undefined && this.initWithDuration(duration, deltaAngleX, deltaAngleY);
    },
    initWithDuration:function (duration, deltaAngleX, deltaAngleY) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this._angleX = deltaAngleX || 0;
            this._angleY = deltaAngleY || this._angleX;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.RotateBy();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._angleX, this._angleY);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._startAngleX = target.rotationX;
        this._startAngleY = target.rotationY;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this.target) {
            this.target.rotationX = this._startAngleX + this._angleX * dt;
            this.target.rotationY = this._startAngleY + this._angleY * dt;
        }
    },
    reverse:function () {
        var action = new cc.RotateBy(this._duration, -this._angleX, -this._angleY);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.rotateBy = function (duration, deltaAngleX, deltaAngleY) {
    return new cc.RotateBy(duration, deltaAngleX, deltaAngleY);
};
cc.RotateBy.create = cc.rotateBy;
cc.MoveBy = cc.ActionInterval.extend({
    _positionDelta:null,
    _startPosition:null,
    _previousPosition:null,
    ctor:function (duration, deltaPos, deltaY) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._positionDelta = cc.p(0, 0);
        this._startPosition = cc.p(0, 0);
        this._previousPosition = cc.p(0, 0);
		deltaPos !== undefined && this.initWithDuration(duration, deltaPos, deltaY);
    },
    initWithDuration:function (duration, position, y) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
	        if(position.x !== undefined) {
		        y = position.y;
		        position = position.x;
	        }
            this._positionDelta.x = position;
            this._positionDelta.y = y;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.MoveBy();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._positionDelta);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        var locPosX = target.getPositionX();
        var locPosY = target.getPositionY();
        this._previousPosition.x = locPosX;
        this._previousPosition.y = locPosY;
        this._startPosition.x = locPosX;
        this._startPosition.y = locPosY;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this.target) {
            var x = this._positionDelta.x * dt;
            var y = this._positionDelta.y * dt;
            var locStartPosition = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var targetX = this.target.getPositionX();
                var targetY = this.target.getPositionY();
                var locPreviousPosition = this._previousPosition;
                locStartPosition.x = locStartPosition.x + targetX - locPreviousPosition.x;
                locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
                x = x + locStartPosition.x;
                y = y + locStartPosition.y;
	            locPreviousPosition.x = x;
	            locPreviousPosition.y = y;
	            this.target.setPosition(x, y);
            } else {
                this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y);
            }
        }
    },
    reverse:function () {
        var action = new cc.MoveBy(this._duration, cc.p(-this._positionDelta.x, -this._positionDelta.y));
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.moveBy = function (duration, deltaPos, deltaY) {
    return new cc.MoveBy(duration, deltaPos, deltaY);
};
cc.MoveBy.create = cc.moveBy;
cc.MoveTo = cc.MoveBy.extend({
    _endPosition:null,
    ctor:function (duration, position, y) {
        cc.MoveBy.prototype.ctor.call(this);
        this._endPosition = cc.p(0, 0);
		position !== undefined && this.initWithDuration(duration, position, y);
    },
    initWithDuration:function (duration, position, y) {
        if (cc.MoveBy.prototype.initWithDuration.call(this, duration, position, y)) {
	        if(position.x !== undefined) {
		        y = position.y;
		        position = position.x;
	        }
            this._endPosition.x = position;
            this._endPosition.y = y;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.MoveTo();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._endPosition);
        return action;
    },
    startWithTarget:function (target) {
        cc.MoveBy.prototype.startWithTarget.call(this, target);
        this._positionDelta.x = this._endPosition.x - target.getPositionX();
        this._positionDelta.y = this._endPosition.y - target.getPositionY();
    }
});
cc.moveTo = function (duration, position, y) {
    return new cc.MoveTo(duration, position, y);
};
cc.MoveTo.create = cc.moveTo;
cc.SkewTo = cc.ActionInterval.extend({
    _skewX:0,
    _skewY:0,
    _startSkewX:0,
    _startSkewY:0,
    _endSkewX:0,
    _endSkewY:0,
    _deltaX:0,
    _deltaY:0,
    ctor: function (t, sx, sy) {
        cc.ActionInterval.prototype.ctor.call(this);
		sy !== undefined && this.initWithDuration(t, sx, sy);
    },
    initWithDuration:function (t, sx, sy) {
        var ret = false;
        if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
            this._endSkewX = sx;
            this._endSkewY = sy;
            ret = true;
        }
        return ret;
    },
    clone:function () {
        var action = new cc.SkewTo();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._endSkewX, this._endSkewY);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._startSkewX = target.skewX % 180;
        this._deltaX = this._endSkewX - this._startSkewX;
        if (this._deltaX > 180)
            this._deltaX -= 360;
        if (this._deltaX < -180)
            this._deltaX += 360;
        this._startSkewY = target.skewY % 360;
        this._deltaY = this._endSkewY - this._startSkewY;
        if (this._deltaY > 180)
            this._deltaY -= 360;
        if (this._deltaY < -180)
            this._deltaY += 360;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        this.target.skewX = this._startSkewX + this._deltaX * dt;
        this.target.skewY = this._startSkewY + this._deltaY * dt;
    }
});
cc.skewTo = function (t, sx, sy) {
    return new cc.SkewTo(t, sx, sy);
};
cc.SkewTo.create = cc.skewTo;
cc.SkewBy = cc.SkewTo.extend({
	ctor: function(t, sx, sy) {
		cc.SkewTo.prototype.ctor.call(this);
		sy !== undefined && this.initWithDuration(t, sx, sy);
	},
    initWithDuration:function (t, deltaSkewX, deltaSkewY) {
        var ret = false;
        if (cc.SkewTo.prototype.initWithDuration.call(this, t, deltaSkewX, deltaSkewY)) {
            this._skewX = deltaSkewX;
            this._skewY = deltaSkewY;
            ret = true;
        }
        return ret;
    },
    clone:function () {
        var action = new cc.SkewBy();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._skewX, this._skewY);
        return action;
    },
    startWithTarget:function (target) {
        cc.SkewTo.prototype.startWithTarget.call(this, target);
        this._deltaX = this._skewX;
        this._deltaY = this._skewY;
        this._endSkewX = this._startSkewX + this._deltaX;
        this._endSkewY = this._startSkewY + this._deltaY;
    },
    reverse:function () {
        var action = new cc.SkewBy(this._duration, -this._skewX, -this._skewY);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.skewBy = function (t, sx, sy) {
    return new cc.SkewBy(t, sx, sy);
};
cc.SkewBy.create = cc.skewBy;
cc.JumpBy = cc.ActionInterval.extend({
    _startPosition:null,
    _delta:null,
    _height:0,
    _jumps:0,
    _previousPosition:null,
    ctor:function (duration, position, y, height, jumps) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._startPosition = cc.p(0, 0);
        this._previousPosition = cc.p(0, 0);
        this._delta = cc.p(0, 0);
		height !== undefined && this.initWithDuration(duration, position, y, height, jumps);
    },
    initWithDuration:function (duration, position, y, height, jumps) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
	        if (jumps === undefined) {
		        jumps = height;
		        height = y;
		        y = position.y;
		        position = position.x;
	        }
            this._delta.x = position;
            this._delta.y = y;
            this._height = height;
            this._jumps = jumps;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.JumpBy();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._delta, this._height, this._jumps);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        var locPosX = target.getPositionX();
        var locPosY = target.getPositionY();
        this._previousPosition.x = locPosX;
        this._previousPosition.y = locPosY;
        this._startPosition.x = locPosX;
        this._startPosition.y = locPosY;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this.target) {
            var frac = dt * this._jumps % 1.0;
            var y = this._height * 4 * frac * (1 - frac);
            y += this._delta.y * dt;
            var x = this._delta.x * dt;
            var locStartPosition = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var targetX = this.target.getPositionX();
                var targetY = this.target.getPositionY();
                var locPreviousPosition = this._previousPosition;
                locStartPosition.x = locStartPosition.x + targetX - locPreviousPosition.x;
                locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
                x = x + locStartPosition.x;
                y = y + locStartPosition.y;
	            locPreviousPosition.x = x;
	            locPreviousPosition.y = y;
	            this.target.setPosition(x, y);
            } else {
                this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y);
            }
        }
    },
    reverse:function () {
        var action = new cc.JumpBy(this._duration, cc.p(-this._delta.x, -this._delta.y), this._height, this._jumps);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.jumpBy = function (duration, position, y, height, jumps) {
    return new cc.JumpBy(duration, position, y, height, jumps);
};
cc.JumpBy.create = cc.jumpBy;
cc.JumpTo = cc.JumpBy.extend({
    _endPosition:null,
    ctor:function (duration, position, y, height, jumps) {
        cc.JumpBy.prototype.ctor.call(this);
        this._endPosition = cc.p(0, 0);
        height !== undefined && this.initWithDuration(duration, position, y, height, jumps);
    },
    initWithDuration:function (duration, position, y, height, jumps) {
        if (cc.JumpBy.prototype.initWithDuration.call(this, duration, position, y, height, jumps)) {
            if (jumps === undefined) {
                y = position.y;
                position = position.x;
            }
            this._endPosition.x = position;
            this._endPosition.y = y;
            return true;
        }
        return false;
    },
    startWithTarget:function (target) {
        cc.JumpBy.prototype.startWithTarget.call(this, target);
        this._delta.x = this._endPosition.x - this._startPosition.x;
        this._delta.y = this._endPosition.y - this._startPosition.y;
    },
    clone:function () {
        var action = new cc.JumpTo();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._endPosition, this._height, this._jumps);
        return action;
    }
});
cc.jumpTo = function (duration, position, y, height, jumps) {
    return new cc.JumpTo(duration, position, y, height, jumps);
};
cc.JumpTo.create = cc.jumpTo;
cc.bezierAt = function (a, b, c, d, t) {
    return (Math.pow(1 - t, 3) * a +
        3 * t * (Math.pow(1 - t, 2)) * b +
        3 * Math.pow(t, 2) * (1 - t) * c +
        Math.pow(t, 3) * d );
};
cc.BezierBy = cc.ActionInterval.extend({
    _config:null,
    _startPosition:null,
    _previousPosition:null,
    ctor:function (t, c) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._config = [];
        this._startPosition = cc.p(0, 0);
        this._previousPosition = cc.p(0, 0);
		c && this.initWithDuration(t, c);
    },
    initWithDuration:function (t, c) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
            this._config = c;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.BezierBy();
        this._cloneDecoration(action);
        var newConfigs = [];
        for (var i = 0; i < this._config.length; i++) {
            var selConf = this._config[i];
            newConfigs.push(cc.p(selConf.x, selConf.y));
        }
        action.initWithDuration(this._duration, newConfigs);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        var locPosX = target.getPositionX();
        var locPosY = target.getPositionY();
        this._previousPosition.x = locPosX;
        this._previousPosition.y = locPosY;
        this._startPosition.x = locPosX;
        this._startPosition.y = locPosY;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this.target) {
            var locConfig = this._config;
            var xa = 0;
            var xb = locConfig[0].x;
            var xc = locConfig[1].x;
            var xd = locConfig[2].x;
            var ya = 0;
            var yb = locConfig[0].y;
            var yc = locConfig[1].y;
            var yd = locConfig[2].y;
            var x = cc.bezierAt(xa, xb, xc, xd, dt);
            var y = cc.bezierAt(ya, yb, yc, yd, dt);
            var locStartPosition = this._startPosition;
            if (cc.ENABLE_STACKABLE_ACTIONS) {
                var targetX = this.target.getPositionX();
                var targetY = this.target.getPositionY();
                var locPreviousPosition = this._previousPosition;
                locStartPosition.x = locStartPosition.x + targetX - locPreviousPosition.x;
                locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
                x = x + locStartPosition.x;
                y = y + locStartPosition.y;
	            locPreviousPosition.x = x;
	            locPreviousPosition.y = y;
	            this.target.setPosition(x, y);
            } else {
                this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y);
            }
        }
    },
    reverse:function () {
        var locConfig = this._config;
        var r = [
            cc.pAdd(locConfig[1], cc.pNeg(locConfig[2])),
            cc.pAdd(locConfig[0], cc.pNeg(locConfig[2])),
            cc.pNeg(locConfig[2]) ];
        var action = new cc.BezierBy(this._duration, r);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.bezierBy = function (t, c) {
    return new cc.BezierBy(t, c);
};
cc.BezierBy.create = cc.bezierBy;
cc.BezierTo = cc.BezierBy.extend({
    _toConfig:null,
    ctor:function (t, c) {
        cc.BezierBy.prototype.ctor.call(this);
        this._toConfig = [];
		c && this.initWithDuration(t, c);
    },
    initWithDuration:function (t, c) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
            this._toConfig = c;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.BezierTo();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._toConfig);
        return action;
    },
    startWithTarget:function (target) {
        cc.BezierBy.prototype.startWithTarget.call(this, target);
        var locStartPos = this._startPosition;
        var locToConfig = this._toConfig;
        var locConfig = this._config;
        locConfig[0] = cc.pSub(locToConfig[0], locStartPos);
        locConfig[1] = cc.pSub(locToConfig[1], locStartPos);
        locConfig[2] = cc.pSub(locToConfig[2], locStartPos);
    }
});
cc.bezierTo = function (t, c) {
    return new cc.BezierTo(t, c);
};
cc.BezierTo.create = cc.bezierTo;
cc.ScaleTo = cc.ActionInterval.extend({
    _scaleX:1,
    _scaleY:1,
    _startScaleX:1,
    _startScaleY:1,
    _endScaleX:0,
    _endScaleY:0,
    _deltaX:0,
    _deltaY:0,
    ctor:function (duration, sx, sy) {
        cc.ActionInterval.prototype.ctor.call(this);
		sx !== undefined && this.initWithDuration(duration, sx, sy);
    },
    initWithDuration:function (duration, sx, sy) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this._endScaleX = sx;
            this._endScaleY = (sy != null) ? sy : sx;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.ScaleTo();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._endScaleX, this._endScaleY);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._startScaleX = target.scaleX;
        this._startScaleY = target.scaleY;
        this._deltaX = this._endScaleX - this._startScaleX;
        this._deltaY = this._endScaleY - this._startScaleY;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this.target) {
            this.target.scaleX = this._startScaleX + this._deltaX * dt;
	        this.target.scaleY = this._startScaleY + this._deltaY * dt;
        }
    }
});
cc.scaleTo = function (duration, sx, sy) {
    return new cc.ScaleTo(duration, sx, sy);
};
cc.ScaleTo.create = cc.scaleTo;
cc.ScaleBy = cc.ScaleTo.extend({
    startWithTarget:function (target) {
        cc.ScaleTo.prototype.startWithTarget.call(this, target);
        this._deltaX = this._startScaleX * this._endScaleX - this._startScaleX;
        this._deltaY = this._startScaleY * this._endScaleY - this._startScaleY;
    },
    reverse:function () {
        var action = new cc.ScaleBy(this._duration, 1 / this._endScaleX, 1 / this._endScaleY);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    },
    clone:function () {
        var action = new cc.ScaleBy();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._endScaleX, this._endScaleY);
        return action;
    }
});
cc.scaleBy = function (duration, sx, sy) {
    return new cc.ScaleBy(duration, sx, sy);
};
cc.ScaleBy.create = cc.scaleBy;
cc.Blink = cc.ActionInterval.extend({
    _times:0,
    _originalState:false,
    ctor:function (duration, blinks) {
        cc.ActionInterval.prototype.ctor.call(this);
		blinks !== undefined && this.initWithDuration(duration, blinks);
    },
    initWithDuration:function (duration, blinks) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this._times = blinks;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.Blink();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._times);
        return action;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this.target && !this.isDone()) {
            var slice = 1.0 / this._times;
            var m = dt % slice;
            this.target.visible = (m > (slice / 2));
        }
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._originalState = target.visible;
    },
    stop:function () {
        this.target.visible = this._originalState;
        cc.ActionInterval.prototype.stop.call(this);
    },
    reverse:function () {
        var action = new cc.Blink(this._duration, this._times);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.blink = function (duration, blinks) {
    return new cc.Blink(duration, blinks);
};
cc.Blink.create = cc.blink;
cc.FadeTo = cc.ActionInterval.extend({
    _toOpacity:0,
    _fromOpacity:0,
    ctor:function (duration, opacity) {
        cc.ActionInterval.prototype.ctor.call(this);
		opacity !== undefined && this.initWithDuration(duration, opacity);
    },
    initWithDuration:function (duration, opacity) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this._toOpacity = opacity;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.FadeTo();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._toOpacity);
        return action;
    },
    update:function (time) {
        time = this._computeEaseTime(time);
        var fromOpacity = this._fromOpacity !== undefined ? this._fromOpacity : 255;
        this.target.opacity = fromOpacity + (this._toOpacity - fromOpacity) * time;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._fromOpacity = target.opacity;
    }
});
cc.fadeTo = function (duration, opacity) {
    return new cc.FadeTo(duration, opacity);
};
cc.FadeTo.create = cc.fadeTo;
cc.FadeIn = cc.FadeTo.extend({
    _reverseAction: null,
    ctor:function (duration) {
        cc.FadeTo.prototype.ctor.call(this);
        if (duration == null)
            duration = 0;
        this.initWithDuration(duration, 255);
    },
    reverse:function () {
        var action = new cc.FadeOut();
        action.initWithDuration(this._duration, 0);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    },
    clone:function () {
        var action = new cc.FadeIn();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._toOpacity);
        return action;
    },
    startWithTarget:function (target) {
        if(this._reverseAction)
            this._toOpacity = this._reverseAction._fromOpacity;
        cc.FadeTo.prototype.startWithTarget.call(this, target);
    }
});
cc.fadeIn = function (duration) {
    return new cc.FadeIn(duration);
};
cc.FadeIn.create = cc.fadeIn;
cc.FadeOut = cc.FadeTo.extend({
    ctor:function (duration) {
        cc.FadeTo.prototype.ctor.call(this);
        if (duration == null)
            duration = 0;
        this.initWithDuration(duration, 0);
    },
    reverse:function () {
        var action = new cc.FadeIn();
        action._reverseAction = this;
        action.initWithDuration(this._duration, 255);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    },
    clone:function () {
        var action = new cc.FadeOut();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._toOpacity);
        return action;
    }
});
cc.fadeOut = function (d) {
    return new cc.FadeOut(d);
};
cc.FadeOut.create = cc.fadeOut;
cc.TintTo = cc.ActionInterval.extend({
    _to:null,
    _from:null,
    ctor:function (duration, red, green, blue) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._to = cc.color(0, 0, 0);
        this._from = cc.color(0, 0, 0);
		blue !== undefined && this.initWithDuration(duration, red, green, blue);
    },
    initWithDuration:function (duration, red, green, blue) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this._to = cc.color(red, green, blue);
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.TintTo();
        this._cloneDecoration(action);
        var locTo = this._to;
        action.initWithDuration(this._duration, locTo.r, locTo.g, locTo.b);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._from = this.target.color;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        var locFrom = this._from, locTo = this._to;
        if (locFrom) {
            this.target.setColor(
                cc.color(
                    locFrom.r + (locTo.r - locFrom.r) * dt,
                    locFrom.g + (locTo.g - locFrom.g) * dt,
                    locFrom.b + (locTo.b - locFrom.b) * dt)
            );
        }
    }
});
cc.tintTo = function (duration, red, green, blue) {
    return new cc.TintTo(duration, red, green, blue);
};
cc.TintTo.create = cc.tintTo;
cc.TintBy = cc.ActionInterval.extend({
    _deltaR:0,
    _deltaG:0,
    _deltaB:0,
    _fromR:0,
    _fromG:0,
    _fromB:0,
    ctor:function (duration, deltaRed, deltaGreen, deltaBlue) {
        cc.ActionInterval.prototype.ctor.call(this);
		deltaBlue !== undefined && this.initWithDuration(duration, deltaRed, deltaGreen, deltaBlue);
    },
    initWithDuration:function (duration, deltaRed, deltaGreen, deltaBlue) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this._deltaR = deltaRed;
            this._deltaG = deltaGreen;
            this._deltaB = deltaBlue;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.TintBy();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._deltaR, this._deltaG, this._deltaB);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        var color = target.color;
        this._fromR = color.r;
        this._fromG = color.g;
        this._fromB = color.b;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        this.target.color = cc.color(this._fromR + this._deltaR * dt,
                                    this._fromG + this._deltaG * dt,
                                    this._fromB + this._deltaB * dt);
    },
    reverse:function () {
        var action = new cc.TintBy(this._duration, -this._deltaR, -this._deltaG, -this._deltaB);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    }
});
cc.tintBy = function (duration, deltaRed, deltaGreen, deltaBlue) {
    return new cc.TintBy(duration, deltaRed, deltaGreen, deltaBlue);
};
cc.TintBy.create = cc.tintBy;
cc.DelayTime = cc.ActionInterval.extend({
    update:function (dt) {},
    reverse:function () {
        var action = new cc.DelayTime(this._duration);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    },
    clone:function () {
        var action = new cc.DelayTime();
        this._cloneDecoration(action);
        action.initWithDuration(this._duration);
        return action;
    }
});
cc.delayTime = function (d) {
    return new cc.DelayTime(d);
};
cc.DelayTime.create = cc.delayTime;
cc.ReverseTime = cc.ActionInterval.extend({
    _other:null,
    ctor:function (action) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._other = null;
		action && this.initWithAction(action);
    },
    initWithAction:function (action) {
        if(!action)
            throw new Error("cc.ReverseTime.initWithAction(): action must be non null");
        if(action === this._other)
            throw new Error("cc.ReverseTime.initWithAction(): the action was already passed in.");
        if (cc.ActionInterval.prototype.initWithDuration.call(this, action._duration)) {
            this._other = action;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.ReverseTime();
        this._cloneDecoration(action);
        action.initWithAction(this._other.clone());
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._other.startWithTarget(target);
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (this._other)
            this._other.update(1 - dt);
    },
    reverse:function () {
        return this._other.clone();
    },
    stop:function () {
        this._other.stop();
        cc.Action.prototype.stop.call(this);
    }
});
cc.reverseTime = function (action) {
    return new cc.ReverseTime(action);
};
cc.ReverseTime.create = cc.reverseTime;
cc.Animate = cc.ActionInterval.extend({
    _animation:null,
    _nextFrame:0,
    _origFrame:null,
    _executedLoops:0,
    _splitTimes: null,
    _currFrameIndex:0,
    ctor:function (animation) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._splitTimes = [];
		animation && this.initWithAnimation(animation);
    },
    getAnimation:function () {
        return this._animation;
    },
    setAnimation:function (animation) {
        this._animation = animation;
    },
    getCurrentFrameIndex: function () {
        return this._currFrameIndex;
    },
    initWithAnimation:function (animation) {
        if(!animation)
            throw new Error("cc.Animate.initWithAnimation(): animation must be non-NULL");
        var singleDuration = animation.getDuration();
        if (this.initWithDuration(singleDuration * animation.getLoops())) {
            this._nextFrame = 0;
            this.setAnimation(animation);
            this._origFrame = null;
            this._executedLoops = 0;
            var locTimes = this._splitTimes;
            locTimes.length = 0;
            var accumUnitsOfTime = 0;
            var newUnitOfTimeValue = singleDuration / animation.getTotalDelayUnits();
            var frames = animation.getFrames();
            cc.arrayVerifyType(frames, cc.AnimationFrame);
            for (var i = 0; i < frames.length; i++) {
                var frame = frames[i];
                var value = (accumUnitsOfTime * newUnitOfTimeValue) / singleDuration;
                accumUnitsOfTime += frame.getDelayUnits();
                locTimes.push(value);
            }
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.Animate();
        this._cloneDecoration(action);
        action.initWithAnimation(this._animation.clone());
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        if (this._animation.getRestoreOriginalFrame())
            this._origFrame = target.displayFrame();
        this._nextFrame = 0;
        this._executedLoops = 0;
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        if (dt < 1.0) {
            dt *= this._animation.getLoops();
            var loopNumber = 0 | dt;
            if (loopNumber > this._executedLoops) {
                this._nextFrame = 0;
                this._executedLoops++;
            }
            dt = dt % 1.0;
        }
        var frames = this._animation.getFrames();
        var numberOfFrames = frames.length, locSplitTimes = this._splitTimes;
        for (var i = this._nextFrame; i < numberOfFrames; i++) {
            if (locSplitTimes[i] <= dt) {
                _currFrameIndex = i;
                this.target.setSpriteFrame(frames[_currFrameIndex].getSpriteFrame());
                this._nextFrame = i + 1;
            } else {
                break;
            }
        }
    },
    reverse:function () {
        var locAnimation = this._animation;
        var oldArray = locAnimation.getFrames();
        var newArray = [];
        cc.arrayVerifyType(oldArray, cc.AnimationFrame);
        if (oldArray.length > 0) {
            for (var i = oldArray.length - 1; i >= 0; i--) {
                var element = oldArray[i];
                if (!element)
                    break;
                newArray.push(element.clone());
            }
        }
        var newAnim = new cc.Animation(newArray, locAnimation.getDelayPerUnit(), locAnimation.getLoops());
        newAnim.setRestoreOriginalFrame(locAnimation.getRestoreOriginalFrame());
        var action = new cc.Animate(newAnim);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action;
    },
    stop:function () {
        if (this._animation.getRestoreOriginalFrame() && this.target)
            this.target.setSpriteFrame(this._origFrame);
        cc.Action.prototype.stop.call(this);
    }
});
cc.animate = function (animation) {
    return new cc.Animate(animation);
};
cc.Animate.create = cc.animate;
cc.TargetedAction = cc.ActionInterval.extend({
    _action:null,
    _forcedTarget:null,
    ctor: function (target, action) {
        cc.ActionInterval.prototype.ctor.call(this);
		action && this.initWithTarget(target, action);
    },
    initWithTarget:function (target, action) {
        if (this.initWithDuration(action._duration)) {
            this._forcedTarget = target;
            this._action = action;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.TargetedAction();
        this._cloneDecoration(action);
        action.initWithTarget(this._forcedTarget, this._action.clone());
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._action.startWithTarget(this._forcedTarget);
    },
    stop:function () {
        this._action.stop();
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        this._action.update(dt);
    },
    getForcedTarget:function () {
        return this._forcedTarget;
    },
    setForcedTarget:function (forcedTarget) {
        if (this._forcedTarget !== forcedTarget)
            this._forcedTarget = forcedTarget;
    }
});
cc.targetedAction = function (target, action) {
    return new cc.TargetedAction(target, action);
};
cc.TargetedAction.create = cc.targetedAction;
cc.ActionInstant = cc.FiniteTimeAction.extend({
    isDone:function () {
        return true;
    },
    step:function (dt) {
        this.update(1);
    },
    update:function (dt) {
    },
    reverse:function(){
        return this.clone();
    },
    clone:function(){
        return new cc.ActionInstant();
    }
});
cc.Show = cc.ActionInstant.extend({
    update:function (dt) {
        this.target.visible = true;
    },
    reverse:function () {
        return new cc.Hide();
    },
    clone:function(){
        return new cc.Show();
    }
});
cc.show = function () {
    return new cc.Show();
};
cc.Show.create = cc.show;
cc.Hide = cc.ActionInstant.extend({
    update:function (dt) {
        this.target.visible = false;
    },
    reverse:function () {
        return new cc.Show();
    },
    clone:function(){
        return new cc.Hide();
    }
});
cc.hide = function () {
    return new cc.Hide();
};
cc.Hide.create = cc.hide;
cc.ToggleVisibility = cc.ActionInstant.extend({
    update:function (dt) {
        this.target.visible = !this.target.visible;
    },
    reverse:function () {
        return new cc.ToggleVisibility();
    },
    clone:function(){
        return new cc.ToggleVisibility();
    }
});
cc.toggleVisibility = function () {
    return new cc.ToggleVisibility();
};
cc.ToggleVisibility.create = cc.toggleVisibility;
cc.RemoveSelf = cc.ActionInstant.extend({
     _isNeedCleanUp: true,
    ctor:function(isNeedCleanUp){
        cc.FiniteTimeAction.prototype.ctor.call(this);
	    isNeedCleanUp !== undefined && this.init(isNeedCleanUp);
    },
    update:function(dt){
        this.target.removeFromParent(this._isNeedCleanUp);
    },
    /**
     * Initialization of the node, please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
     * @param isNeedCleanUp
     * @returns {boolean}
     */
    init:function(isNeedCleanUp){
        this._isNeedCleanUp = isNeedCleanUp;
        return true;
    },
    reverse:function(){
        return new cc.RemoveSelf(this._isNeedCleanUp);
    },
    clone:function(){
        return new cc.RemoveSelf(this._isNeedCleanUp);
    }
});
cc.removeSelf = function(isNeedCleanUp){
    return new cc.RemoveSelf(isNeedCleanUp);
};
cc.RemoveSelf.create = cc.removeSelf;
cc.FlipX = cc.ActionInstant.extend({
    _flippedX:false,
    ctor:function(flip){
        cc.FiniteTimeAction.prototype.ctor.call(this);
        this._flippedX = false;
		flip !== undefined && this.initWithFlipX(flip);
    },
    initWithFlipX:function (flip) {
        this._flippedX = flip;
        return true;
    },
    update:function (dt) {
        this.target.flippedX = this._flippedX;
    },
    reverse:function () {
        return new cc.FlipX(!this._flippedX);
    },
    clone:function(){
        var action = new cc.FlipX();
        action.initWithFlipX(this._flippedX);
        return action;
    }
});
cc.flipX = function (flip) {
    return new cc.FlipX(flip);
};
cc.FlipX.create = cc.flipX;
cc.FlipY = cc.ActionInstant.extend({
    _flippedY:false,
    ctor: function(flip){
        cc.FiniteTimeAction.prototype.ctor.call(this);
        this._flippedY = false;
		flip !== undefined && this.initWithFlipY(flip);
    },
    initWithFlipY:function (flip) {
        this._flippedY = flip;
        return true;
    },
    update:function (dt) {
        this.target.flippedY = this._flippedY;
    },
    reverse:function () {
        return new cc.FlipY(!this._flippedY);
    },
    clone:function(){
        var action = new cc.FlipY();
        action.initWithFlipY(this._flippedY);
        return action;
    }
});
cc.flipY = function (flip) {
    return new cc.FlipY(flip);
};
cc.FlipY.create = cc.flipY;
cc.Place = cc.ActionInstant.extend({
    _x: 0,
	_y: 0,
    ctor:function(pos, y){
        cc.FiniteTimeAction.prototype.ctor.call(this);
        this._x = 0;
	    this._y = 0;
		if (pos !== undefined) {
			if (pos.x !== undefined) {
				y = pos.y;
				pos = pos.x;
			}
			this.initWithPosition(pos, y);
		}
    },
    initWithPosition: function (x, y) {
        this._x = x;
        this._y = y;
        return true;
    },
    update:function (dt) {
        this.target.setPosition(this._x, this._y);
    },
    clone:function(){
        var action = new cc.Place();
        action.initWithPosition(this._x, this._y);
        return action;
    }
});
cc.place = function (pos, y) {
    return new cc.Place(pos, y);
};
cc.Place.create = cc.place;
cc.CallFunc = cc.ActionInstant.extend({
    _selectorTarget:null,
    _function:null,
    _data:null,
    ctor:function(selector, selectorTarget, data){
        cc.FiniteTimeAction.prototype.ctor.call(this);
        this.initWithFunction(selector, selectorTarget, data);
    },
    initWithFunction:function (selector, selectorTarget, data) {
        if (selector) {
            this._function = selector;
        }
        if (selectorTarget) {
            this._selectorTarget = selectorTarget;
        }
        if (data !== undefined) {
            this._data = data;
        }
        return true;
    },
    execute:function () {
        if (this._function) {
            this._function.call(this._selectorTarget, this.target, this._data);
        }
    },
    update:function (dt) {
        this.execute();
    },
    getTargetCallback:function () {
        return this._selectorTarget;
    },
    setTargetCallback:function (sel) {
        if (sel !== this._selectorTarget) {
            if (this._selectorTarget)
                this._selectorTarget = null;
            this._selectorTarget = sel;
        }
    },
    clone:function(){
        var action = new cc.CallFunc();
        action.initWithFunction(this._function, this._selectorTarget, this._data);
        return action;
    }
});
cc.callFunc = function (selector, selectorTarget, data) {
    return new cc.CallFunc(selector, selectorTarget, data);
};
cc.CallFunc.create = cc.callFunc;
cc.ActionEase = cc.ActionInterval.extend({
    _inner:null,
    ctor: function (action) {
        cc.ActionInterval.prototype.ctor.call(this);
        action && this.initWithAction(action);
    },
    initWithAction:function (action) {
        if(!action)
            throw new Error("cc.ActionEase.initWithAction(): action must be non nil");
        if (this.initWithDuration(action.getDuration())) {
            this._inner = action;
            return true;
        }
        return false;
    },
    clone:function(){
       var action = new cc.ActionEase();
        action.initWithAction(this._inner.clone());
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._inner.startWithTarget(this.target);
    },
    stop:function () {
        this._inner.stop();
        cc.ActionInterval.prototype.stop.call(this);
    },
    update:function (dt) {
        this._inner.update(dt);
    },
    reverse:function () {
        return new cc.ActionEase(this._inner.reverse());
    },
    getInnerAction:function(){
       return this._inner;
    }
});
cc.actionEase = function (action) {
    return new cc.ActionEase(action);
};
cc.ActionEase.create = cc.actionEase;
cc.EaseRateAction = cc.ActionEase.extend({
    _rate:0,
    ctor: function(action, rate){
        cc.ActionEase.prototype.ctor.call(this);
		rate !== undefined && this.initWithAction(action, rate);
    },
    setRate:function (rate) {
        this._rate = rate;
    },
    getRate:function () {
        return this._rate;
    },
    initWithAction:function (action, rate) {
        if (cc.ActionEase.prototype.initWithAction.call(this, action)) {
            this._rate = rate;
            return true;
        }
        return false;
    },
    clone:function(){
        var action = new cc.EaseRateAction();
        action.initWithAction(this._inner.clone(), this._rate);
        return action;
    },
    reverse:function () {
        return new cc.EaseRateAction(this._inner.reverse(), 1 / this._rate);
    }
});
cc.easeRateAction = function (action, rate) {
    return new cc.EaseRateAction(action, rate);
};
cc.EaseRateAction.create = cc.easeRateAction;
cc.EaseIn = cc.EaseRateAction.extend({
    update:function (dt) {
        this._inner.update(Math.pow(dt, this._rate));
    },
    reverse:function () {
        return new cc.EaseIn(this._inner.reverse(), 1 / this._rate);
    },
    clone:function(){
        var action = new cc.EaseIn();
        action.initWithAction(this._inner.clone(), this._rate);
        return action;
    }
});
cc.EaseIn.create = function (action, rate) {
    return new cc.EaseIn(action, rate);
};
cc.easeIn = function (rate) {
    return {
        _rate: rate,
        easing: function (dt) {
            return Math.pow(dt, this._rate);
        },
        reverse: function(){
            return cc.easeIn(1 / this._rate);
        }
    };
};
cc.EaseOut = cc.EaseRateAction.extend({
    update:function (dt) {
        this._inner.update(Math.pow(dt, 1 / this._rate));
    },
    reverse:function () {
        return new cc.EaseOut(this._inner.reverse(), 1 / this._rate);
    },
    clone:function(){
        var action = new cc.EaseOut();
        action.initWithAction(this._inner.clone(),this._rate);
        return action;
    }
});
cc.EaseOut.create = function (action, rate) {
    return new cc.EaseOut(action, rate);
};
cc.easeOut = function (rate) {
    return {
        _rate: rate,
        easing: function (dt) {
            return Math.pow(dt, 1 / this._rate);
        },
        reverse: function(){
            return cc.easeOut(1 / this._rate)
        }
    };
};
cc.EaseInOut = cc.EaseRateAction.extend({
    update:function (dt) {
        dt *= 2;
        if (dt < 1)
            this._inner.update(0.5 * Math.pow(dt, this._rate));
        else
            this._inner.update(1.0 - 0.5 * Math.pow(2 - dt, this._rate));
    },
    clone:function(){
        var action = new cc.EaseInOut();
        action.initWithAction(this._inner.clone(), this._rate);
        return action;
    },
    reverse:function () {
        return new cc.EaseInOut(this._inner.reverse(), this._rate);
    }
});
cc.EaseInOut.create = function (action, rate) {
    return new cc.EaseInOut(action, rate);
};
cc.easeInOut = function (rate) {
    return {
        _rate: rate,
        easing: function (dt) {
            dt *= 2;
            if (dt < 1)
                return 0.5 * Math.pow(dt, this._rate);
            else
                return 1.0 - 0.5 * Math.pow(2 - dt, this._rate);
        },
        reverse: function(){
            return cc.easeInOut(this._rate);
        }
    };
};
cc.EaseExponentialIn = cc.ActionEase.extend({
    update:function (dt) {
        this._inner.update(dt === 0 ? 0 : Math.pow(2, 10 * (dt - 1)));
    },
    reverse:function () {
        return new cc.EaseExponentialOut(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseExponentialIn();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseExponentialIn.create = function (action) {
    return new cc.EaseExponentialIn(action);
};
cc._easeExponentialInObj = {
    easing: function(dt){
        return dt === 0 ? 0 : Math.pow(2, 10 * (dt - 1));
    },
    reverse: function(){
        return cc._easeExponentialOutObj;
    }
};
cc.easeExponentialIn = function(){
    return cc._easeExponentialInObj;
};
cc.EaseExponentialOut = cc.ActionEase.extend({
    update:function (dt) {
        this._inner.update(dt === 1 ? 1 : (-(Math.pow(2, -10 * dt)) + 1));
    },
    reverse:function () {
        return new cc.EaseExponentialIn(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseExponentialOut();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseExponentialOut.create = function (action) {
    return new cc.EaseExponentialOut(action);
};
cc._easeExponentialOutObj = {
    easing: function(dt){
        return dt === 1 ? 1 : (-(Math.pow(2, -10 * dt)) + 1);
    },
    reverse: function(){
        return cc._easeExponentialInObj;
    }
};
cc.easeExponentialOut = function(){
    return cc._easeExponentialOutObj;
};
cc.EaseExponentialInOut = cc.ActionEase.extend({
    update:function (dt) {
        if( dt !== 1 && dt !== 0) {
            dt *= 2;
            if (dt < 1)
                dt = 0.5 * Math.pow(2, 10 * (dt - 1));
            else
                dt = 0.5 * (-Math.pow(2, -10 * (dt - 1)) + 2);
        }
        this._inner.update(dt);
    },
    reverse:function () {
        return new cc.EaseExponentialInOut(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseExponentialInOut();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseExponentialInOut.create = function (action) {
    return new cc.EaseExponentialInOut(action);
};
cc._easeExponentialInOutObj = {
    easing: function(dt){
        if( dt !== 1 && dt !== 0) {
            dt *= 2;
            if (dt < 1)
                return 0.5 * Math.pow(2, 10 * (dt - 1));
            else
                return 0.5 * (-Math.pow(2, -10 * (dt - 1)) + 2);
        }
        return dt;
    },
    reverse: function(){
        return cc._easeExponentialInOutObj;
    }
};
cc.easeExponentialInOut = function(){
    return cc._easeExponentialInOutObj;
};
cc.EaseSineIn = cc.ActionEase.extend({
    update:function (dt) {
        dt = dt===0 || dt===1 ? dt : -1 * Math.cos(dt * Math.PI / 2) + 1;
        this._inner.update(dt);
    },
    reverse:function () {
        return new cc.EaseSineOut(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseSineIn();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseSineIn.create = function (action) {
    return new cc.EaseSineIn(action);
};
cc._easeSineInObj = {
    easing: function(dt){
        return (dt===0 || dt===1) ? dt : -1 * Math.cos(dt * Math.PI / 2) + 1;
    },
    reverse: function(){
        return cc._easeSineOutObj;
    }
};
cc.easeSineIn = function(){
    return cc._easeSineInObj;
};
cc.EaseSineOut = cc.ActionEase.extend({
    update:function (dt) {
        dt = dt===0 || dt===1 ? dt : Math.sin(dt * Math.PI / 2);
        this._inner.update(dt);
    },
    reverse:function () {
        return new cc.EaseSineIn(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseSineOut();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseSineOut.create = function (action) {
    return new cc.EaseSineOut(action);
};
cc._easeSineOutObj = {
    easing: function(dt){
        return (dt===0 || dt===1) ? dt : Math.sin(dt * Math.PI / 2);
    },
    reverse: function(){
        return cc._easeSineInObj;
    }
};
cc.easeSineOut = function(){
    return cc._easeSineOutObj;
};
cc.EaseSineInOut = cc.ActionEase.extend({
    update:function (dt) {
        dt = dt===0 || dt===1 ? dt : -0.5 * (Math.cos(Math.PI * dt) - 1);
        this._inner.update(dt);
    },
    clone:function(){
        var action = new cc.EaseSineInOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse:function () {
        return new cc.EaseSineInOut(this._inner.reverse());
    }
});
cc.EaseSineInOut.create = function (action) {
    return new cc.EaseSineInOut(action);
};
cc._easeSineInOutObj = {
    easing: function(dt){
        return (dt === 0 || dt === 1) ? dt : -0.5 * (Math.cos(Math.PI * dt) - 1);
    },
    reverse: function(){
        return cc._easeSineInOutObj;
    }
};
cc.easeSineInOut = function(){
    return cc._easeSineInOutObj;
};
cc.EaseElastic = cc.ActionEase.extend({
    _period: 0.3,
    ctor:function(action, period){
        cc.ActionEase.prototype.ctor.call(this);
		action && this.initWithAction(action, period);
    },
    getPeriod:function () {
        return this._period;
    },
    setPeriod:function (period) {
        this._period = period;
    },
    initWithAction:function (action, period) {
        cc.ActionEase.prototype.initWithAction.call(this, action);
        this._period = (period == null) ? 0.3 : period;
        return true;
    },
    reverse:function () {
        cc.log("cc.EaseElastic.reverse(): it should be overridden in subclass.");
        return null;
    },
    clone:function(){
        var action = new cc.EaseElastic();
        action.initWithAction(this._inner.clone(), this._period);
        return action;
    }
});
cc.EaseElastic.create = function (action, period) {
    return new cc.EaseElastic(action, period);
};
cc.EaseElasticIn = cc.EaseElastic.extend({
    update:function (dt) {
        var newT = 0;
        if (dt === 0 || dt === 1) {
            newT = dt;
        } else {
            var s = this._period / 4;
            dt = dt - 1;
            newT = -Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / this._period);
        }
        this._inner.update(newT);
    },
    reverse:function () {
        return new cc.EaseElasticOut(this._inner.reverse(), this._period);
    },
    clone:function(){
        var action = new cc.EaseElasticIn();
        action.initWithAction(this._inner.clone(), this._period);
        return action;
    }
});
cc.EaseElasticIn.create = function (action, period) {
    return new cc.EaseElasticIn(action, period);
};
cc._easeElasticInObj = {
   easing:function(dt){
       if (dt === 0 || dt === 1)
           return dt;
       dt = dt - 1;
       return -Math.pow(2, 10 * dt) * Math.sin((dt - (0.3 / 4)) * Math.PI * 2 / 0.3);
   },
    reverse:function(){
        return cc._easeElasticOutObj;
    }
};
cc.easeElasticIn = function (period) {
    if(period && period !== 0.3){
        return {
            _period: period,
            easing: function (dt) {
                if (dt === 0 || dt === 1)
                    return dt;
                dt = dt - 1;
                return -Math.pow(2, 10 * dt) * Math.sin((dt - (this._period / 4)) * Math.PI * 2 / this._period);
            },
            reverse:function () {
                return cc.easeElasticOut(this._period);
            }
        };
    }
    return cc._easeElasticInObj;
};
cc.EaseElasticOut = cc.EaseElastic.extend({
    update:function (dt) {
        var newT = 0;
        if (dt === 0 || dt === 1) {
            newT = dt;
        } else {
            var s = this._period / 4;
            newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / this._period) + 1;
        }
        this._inner.update(newT);
    },
    reverse:function () {
        return new cc.EaseElasticIn(this._inner.reverse(), this._period);
    },
    clone:function(){
        var action = new cc.EaseElasticOut();
        action.initWithAction(this._inner.clone(), this._period);
        return action;
    }
});
cc.EaseElasticOut.create = function (action, period) {
    return new cc.EaseElasticOut(action, period);
};
cc._easeElasticOutObj = {
    easing: function (dt) {
        return (dt === 0 || dt === 1) ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - (0.3 / 4)) * Math.PI * 2 / 0.3) + 1;
    },
    reverse:function(){
        return cc._easeElasticInObj;
    }
};
cc.easeElasticOut = function (period) {
    if(period && period !== 0.3){
        return {
            _period: period,
            easing: function (dt) {
                return (dt === 0 || dt === 1) ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - (this._period / 4)) * Math.PI * 2 / this._period) + 1;
            },
            reverse:function(){
                return cc.easeElasticIn(this._period);
            }
        };
    }
    return cc._easeElasticOutObj;
};
cc.EaseElasticInOut = cc.EaseElastic.extend({
    update:function (dt) {
        var newT = 0;
        var locPeriod = this._period;
        if (dt === 0 || dt === 1) {
            newT = dt;
        } else {
            dt = dt * 2;
            if (!locPeriod)
                locPeriod = this._period = 0.3 * 1.5;
            var s = locPeriod / 4;
            dt = dt - 1;
            if (dt < 0)
                newT = -0.5 * Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod);
            else
                newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod) * 0.5 + 1;
        }
        this._inner.update(newT);
    },
    reverse:function () {
        return new cc.EaseElasticInOut(this._inner.reverse(), this._period);
    },
    clone:function(){
        var action = new cc.EaseElasticInOut();
        action.initWithAction(this._inner.clone(), this._period);
        return action;
    }
});
cc.EaseElasticInOut.create = function (action, period) {
    return new cc.EaseElasticInOut(action, period);
};
cc.easeElasticInOut = function (period) {
    period = period || 0.3;
    return {
        _period: period,
        easing: function (dt) {
            var newT = 0;
            var locPeriod = this._period;
            if (dt === 0 || dt === 1) {
                newT = dt;
            } else {
                dt = dt * 2;
                if (!locPeriod)
                    locPeriod = this._period = 0.3 * 1.5;
                var s = locPeriod / 4;
                dt = dt - 1;
                if (dt < 0)
                    newT = -0.5 * Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod);
                else
                    newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod) * 0.5 + 1;
            }
            return newT;
        },
        reverse: function(){
            return cc.easeElasticInOut(this._period);
        }
    };
};
cc.EaseBounce = cc.ActionEase.extend({
    bounceTime:function (time1) {
        if (time1 < 1 / 2.75) {
            return 7.5625 * time1 * time1;
        } else if (time1 < 2 / 2.75) {
            time1 -= 1.5 / 2.75;
            return 7.5625 * time1 * time1 + 0.75;
        } else if (time1 < 2.5 / 2.75) {
            time1 -= 2.25 / 2.75;
            return 7.5625 * time1 * time1 + 0.9375;
        }
        time1 -= 2.625 / 2.75;
        return 7.5625 * time1 * time1 + 0.984375;
    },
    clone:function(){
        var action = new cc.EaseBounce();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse:function () {
        return new cc.EaseBounce(this._inner.reverse());
    }
});
cc.EaseBounce.create = function (action) {
    return new cc.EaseBounce(action);
};
cc.EaseBounceIn = cc.EaseBounce.extend({
    update:function (dt) {
        var newT = 1 - this.bounceTime(1 - dt);
        this._inner.update(newT);
    },
    reverse:function () {
        return new cc.EaseBounceOut(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseBounceIn();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseBounceIn.create = function (action) {
    return new cc.EaseBounceIn(action);
};
cc._bounceTime = function (time1) {
    if (time1 < 1 / 2.75) {
        return 7.5625 * time1 * time1;
    } else if (time1 < 2 / 2.75) {
        time1 -= 1.5 / 2.75;
        return 7.5625 * time1 * time1 + 0.75;
    } else if (time1 < 2.5 / 2.75) {
        time1 -= 2.25 / 2.75;
        return 7.5625 * time1 * time1 + 0.9375;
    }
    time1 -= 2.625 / 2.75;
    return 7.5625 * time1 * time1 + 0.984375;
};
cc._easeBounceInObj = {
    easing: function(dt){
        return 1 - cc._bounceTime(1 - dt);
    },
    reverse: function(){
        return cc._easeBounceOutObj;
    }
};
cc.easeBounceIn = function(){
    return cc._easeBounceInObj;
};
cc.EaseBounceOut = cc.EaseBounce.extend({
    update:function (dt) {
        var newT = this.bounceTime(dt);
        this._inner.update(newT);
    },
    reverse:function () {
        return new cc.EaseBounceIn(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseBounceOut();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseBounceOut.create = function (action) {
    return new cc.EaseBounceOut(action);
};
cc._easeBounceOutObj = {
    easing: function(dt){
        return cc._bounceTime(dt);
    },
    reverse:function () {
        return cc._easeBounceInObj;
    }
};
cc.easeBounceOut = function(){
    return cc._easeBounceOutObj;
};
cc.EaseBounceInOut = cc.EaseBounce.extend({
    update:function (dt) {
        var newT = 0;
        if (dt < 0.5) {
            dt = dt * 2;
            newT = (1 - this.bounceTime(1 - dt)) * 0.5;
        } else {
            newT = this.bounceTime(dt * 2 - 1) * 0.5 + 0.5;
        }
        this._inner.update(newT);
    },
    clone:function(){
        var action = new cc.EaseBounceInOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse:function () {
        return new cc.EaseBounceInOut(this._inner.reverse());
    }
});
cc.EaseBounceInOut.create = function (action) {
    return new cc.EaseBounceInOut(action);
};
cc._easeBounceInOutObj = {
    easing: function (time1) {
        var newT;
        if (time1 < 0.5) {
            time1 = time1 * 2;
            newT = (1 - cc._bounceTime(1 - time1)) * 0.5;
        } else {
            newT = cc._bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
        }
        return newT;
    },
    reverse: function(){
        return cc._easeBounceInOutObj;
    }
};
cc.easeBounceInOut = function(){
    return cc._easeBounceInOutObj;
};
cc.EaseBackIn = cc.ActionEase.extend({
    update:function (dt) {
        var overshoot = 1.70158;
        dt = dt===0 || dt===1 ? dt : dt * dt * ((overshoot + 1) * dt - overshoot);
        this._inner.update(dt);
    },
    reverse:function () {
        return new cc.EaseBackOut(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseBackIn();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseBackIn.create = function (action) {
    return new cc.EaseBackIn(action);
};
cc._easeBackInObj = {
    easing: function (time1) {
        var overshoot = 1.70158;
        return (time1===0 || time1===1) ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot);
    },
    reverse: function(){
        return cc._easeBackOutObj;
    }
};
cc.easeBackIn = function(){
    return cc._easeBackInObj;
};
cc.EaseBackOut = cc.ActionEase.extend({
    update:function (dt) {
        var overshoot = 1.70158;
        dt = dt - 1;
        this._inner.update(dt * dt * ((overshoot + 1) * dt + overshoot) + 1);
    },
    reverse:function () {
        return new cc.EaseBackIn(this._inner.reverse());
    },
    clone:function(){
        var action = new cc.EaseBackOut();
        action.initWithAction(this._inner.clone());
        return action;
    }
});
cc.EaseBackOut.create = function (action) {
    return new cc.EaseBackOut(action);
};
cc._easeBackOutObj = {
    easing: function (time1) {
        var overshoot = 1.70158;
        time1 = time1 - 1;
        return time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1;
    },
    reverse: function(){
        return cc._easeBackInObj;
    }
};
cc.easeBackOut = function(){
    return cc._easeBackOutObj;
};
cc.EaseBackInOut = cc.ActionEase.extend({
    update:function (dt) {
        var overshoot = 1.70158 * 1.525;
        dt = dt * 2;
        if (dt < 1) {
            this._inner.update((dt * dt * ((overshoot + 1) * dt - overshoot)) / 2);
        } else {
            dt = dt - 2;
            this._inner.update((dt * dt * ((overshoot + 1) * dt + overshoot)) / 2 + 1);
        }
    },
    clone:function(){
        var action = new cc.EaseBackInOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse:function () {
        return new cc.EaseBackInOut(this._inner.reverse());
    }
});
cc.EaseBackInOut.create = function (action) {
    return new cc.EaseBackInOut(action);
};
cc._easeBackInOutObj = {
    easing: function (time1) {
        var overshoot = 1.70158 * 1.525;
        time1 = time1 * 2;
        if (time1 < 1) {
            return (time1 * time1 * ((overshoot + 1) * time1 - overshoot)) / 2;
        } else {
            time1 = time1 - 2;
            return (time1 * time1 * ((overshoot + 1) * time1 + overshoot)) / 2 + 1;
        }
    },
    reverse: function(){
        return cc._easeBackInOutObj;
    }
};
cc.easeBackInOut = function(){
    return cc._easeBackInOutObj;
};
cc.EaseBezierAction = cc.ActionEase.extend({
    _p0: null,
    _p1: null,
    _p2: null,
    _p3: null,
    ctor: function(action){
        cc.ActionEase.prototype.ctor.call(this, action);
    },
    _updateTime: function(a, b, c, d, t){
        return (Math.pow(1-t,3) * a + 3*t*(Math.pow(1-t,2))*b + 3*Math.pow(t,2)*(1-t)*c + Math.pow(t,3)*d );
    },
    update: function(dt){
        var t = this._updateTime(this._p0, this._p1, this._p2, this._p3, dt);
        this._inner.update(t);
    },
    clone: function(){
        var action = new cc.EaseBezierAction();
        action.initWithAction(this._inner.clone());
        action.setBezierParamer(this._p0, this._p1, this._p2, this._p3);
        return action;
    },
    reverse: function(){
        var action = new cc.EaseBezierAction(this._inner.reverse());
        action.setBezierParamer(this._p3, this._p2, this._p1, this._p0);
        return action;
    },
    setBezierParamer: function(p0, p1, p2, p3){
        this._p0 = p0 || 0;
        this._p1 = p1 || 0;
        this._p2 = p2 || 0;
        this._p3 = p3 || 0;
    }
});
cc.EaseBezierAction.create = function(action){
    return new cc.EaseBezierAction(action);
};
cc.easeBezierAction = function(p0, p1, p2, p3){
    return {
        easing: function(time){
            return cc.EaseBezierAction.prototype._updateTime(p0, p1, p2, p3, time);
        },
        reverse: function(){
            return cc.easeBezierAction(p3, p2, p1, p0);
        }
    };
};
cc.EaseQuadraticActionIn = cc.ActionEase.extend({
    _updateTime: function(time){
        return Math.pow(time, 2);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuadraticActionIn();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseQuadraticActionIn(this._inner.reverse());
    }
});
cc.EaseQuadraticActionIn.create = function(action){
    return new cc.EaseQuadraticActionIn(action);
};
cc._easeQuadraticActionIn = {
    easing: cc.EaseQuadraticActionIn.prototype._updateTime,
    reverse: function(){
        return cc._easeQuadraticActionIn;
    }
};
cc.easeQuadraticActionIn = function(){
    return cc._easeQuadraticActionIn;
};
cc.EaseQuadraticActionOut = cc.ActionEase.extend({
    _updateTime: function(time){
        return -time*(time-2);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuadraticActionOut();
        action.initWithAction();
        return action;
    },
    reverse: function(){
        return new cc.EaseQuadraticActionOut(this._inner.reverse());
    }
});
cc.EaseQuadraticActionOut.create = function(action){
    return new cc.EaseQuadraticActionOut(action);
};
cc._easeQuadraticActionOut = {
    easing: cc.EaseQuadraticActionOut.prototype._updateTime,
    reverse: function(){
        return cc._easeQuadraticActionOut;
    }
};
cc.easeQuadraticActionOut = function(){
    return cc._easeQuadraticActionOut;
};
cc.EaseQuadraticActionInOut = cc.ActionEase.extend({
    _updateTime: function(time){
        var resultTime = time;
        time *= 2;
        if(time < 1){
            resultTime = time * time * 0.5;
        }else{
            --time;
            resultTime = -0.5 * ( time * ( time - 2 ) - 1)
        }
        return resultTime;
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuadraticActionInOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseQuadraticActionInOut(this._inner.reverse());
    }
});
cc.EaseQuadraticActionInOut.create = function(action){
    return new cc.EaseQuadraticActionInOut(action);
};
cc._easeQuadraticActionInOut = {
    easing: cc.EaseQuadraticActionInOut.prototype._updateTime,
    reverse: function(){
        return cc._easeQuadraticActionInOut;
    }
};
cc.easeQuadraticActionInOut = function(){
    return cc._easeQuadraticActionInOut;
};
cc.EaseQuarticActionIn = cc.ActionEase.extend({
    _updateTime: function(time){
        return time * time * time * time;
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuarticActionIn();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseQuarticActionIn(this._inner.reverse());
    }
});
cc.EaseQuarticActionIn.create = function(action){
    return new cc.EaseQuarticActionIn(action);
};
cc._easeQuarticActionIn = {
    easing: cc.EaseQuarticActionIn.prototype._updateTime,
    reverse: function(){
        return cc._easeQuarticActionIn;
    }
};
cc.easeQuarticActionIn = function(){
    return cc._easeQuarticActionIn;
};
cc.EaseQuarticActionOut = cc.ActionEase.extend({
    _updateTime: function(time){
        time -= 1;
        return -(time * time * time * time - 1);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuarticActionOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseQuarticActionOut(this._inner.reverse());
    }
});
cc.EaseQuarticActionOut.create = function(action){
    return new cc.EaseQuarticActionOut(action);
};
cc._easeQuarticActionOut = {
    easing: cc.EaseQuarticActionOut.prototype._updateTime,
    reverse: function(){
        return cc._easeQuarticActionOut;
    }
};
cc.easeQuarticActionOut = function(){
    return cc._easeQuarticActionOut;
};
cc.EaseQuarticActionInOut = cc.ActionEase.extend({
    _updateTime: function(time){
        time = time*2;
        if (time < 1)
            return 0.5 * time * time * time * time;
        time -= 2;
        return -0.5 * (time * time * time * time - 2);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuarticActionInOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseQuarticActionInOut(this._inner.reverse());
    }
});
cc.EaseQuarticActionInOut.create = function(action){
    return new cc.EaseQuarticActionInOut(action);
};
cc._easeQuarticActionInOut = {
    easing: cc.EaseQuarticActionInOut.prototype._updateTime,
    reverse: function(){
        return cc._easeQuarticActionInOut;
    }
};
cc.easeQuarticActionInOut = function(){
    return cc._easeQuarticActionInOut;
};
cc.EaseQuinticActionIn = cc.ActionEase.extend({
    _updateTime: function(time){
        return time * time * time * time * time;
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuinticActionIn();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseQuinticActionIn(this._inner.reverse());
    }
});
cc.EaseQuinticActionIn.create = function(action){
    return new cc.EaseQuinticActionIn(action);
};
cc._easeQuinticActionIn = {
    easing: cc.EaseQuinticActionIn.prototype._updateTime,
    reverse: function(){
        return cc._easeQuinticActionIn;
    }
};
cc.easeQuinticActionIn = function(){
    return cc._easeQuinticActionIn;
};
cc.EaseQuinticActionOut = cc.ActionEase.extend({
    _updateTime: function(time){
        time -=1;
        return (time * time * time * time * time + 1);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuinticActionOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseQuinticActionOut(this._inner.reverse());
    }
});
cc.EaseQuinticActionOut.create = function(action){
    return new cc.EaseQuinticActionOut(action);
};
cc._easeQuinticActionOut = {
    easing: cc.EaseQuinticActionOut.prototype._updateTime,
    reverse: function(){
        return cc._easeQuinticActionOut;
    }
};
cc.easeQuinticActionOut = function(){
    return cc._easeQuinticActionOut;
};
cc.EaseQuinticActionInOut = cc.ActionEase.extend({
    _updateTime: function(time){
        time = time*2;
        if (time < 1)
            return 0.5 * time * time * time * time * time;
        time -= 2;
        return 0.5 * (time * time * time * time * time + 2);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseQuinticActionInOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseQuinticActionInOut(this._inner.reverse());
    }
});
cc.EaseQuinticActionInOut.create = function(action){
    return new cc.EaseQuinticActionInOut(action);
};
cc._easeQuinticActionInOut = {
    easing: cc.EaseQuinticActionInOut.prototype._updateTime,
    reverse: function(){
        return cc._easeQuinticActionInOut;
    }
};
cc.easeQuinticActionInOut = function(){
    return cc._easeQuinticActionInOut;
};
cc.EaseCircleActionIn = cc.ActionEase.extend({
    _updateTime: function(time){
        return -1 * (Math.sqrt(1 - time * time) - 1);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseCircleActionIn();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseCircleActionIn(this._inner.reverse());
    }
});
cc.EaseCircleActionIn.create = function(action){
    return new cc.EaseCircleActionIn(action);
};
cc._easeCircleActionIn = {
    easing: cc.EaseCircleActionIn.prototype._updateTime,
    reverse: function(){
        return cc._easeCircleActionIn;
    }
};
cc.easeCircleActionIn = function(){
    return cc._easeCircleActionIn;
};
cc.EaseCircleActionOut = cc.ActionEase.extend({
    _updateTime: function(time){
        time = time - 1;
        return Math.sqrt(1 - time * time);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseCircleActionOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseCircleActionOut(this._inner.reverse());
    }
});
cc.EaseCircleActionOut.create = function(action){
    return new cc.EaseCircleActionOut(action);
};
cc._easeCircleActionOut = {
    easing: cc.EaseCircleActionOut.prototype._updateTime,
    reverse: function(){
        return cc._easeCircleActionOut;
    }
};
cc.easeCircleActionOut = function(){
    return cc._easeCircleActionOut;
};
cc.EaseCircleActionInOut = cc.ActionEase.extend({
    _updateTime: function(time){
        time = time * 2;
        if (time < 1)
            return -0.5 * (Math.sqrt(1 - time * time) - 1);
        time -= 2;
        return 0.5 * (Math.sqrt(1 - time * time) + 1);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseCircleActionInOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseCircleActionInOut(this._inner.reverse());
    }
});
cc.EaseCircleActionInOut.create = function(action){
    return new cc.EaseCircleActionInOut(action);
};
cc._easeCircleActionInOut = {
    easing: cc.EaseCircleActionInOut.prototype._updateTime,
    reverse: function(){
        return cc._easeCircleActionInOut;
    }
};
cc.easeCircleActionInOut = function(){
    return cc._easeCircleActionInOut;
};
cc.EaseCubicActionIn = cc.ActionEase.extend({
    _updateTime: function(time){
        return time * time * time;
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseCubicActionIn();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseCubicActionIn(this._inner.reverse());
    }
});
cc.EaseCubicActionIn.create = function(action){
    return new cc.EaseCubicActionIn(action);
};
cc._easeCubicActionIn = {
    easing: cc.EaseCubicActionIn.prototype._updateTime,
    reverse: function(){
        return cc._easeCubicActionIn;
    }
};
cc.easeCubicActionIn = function(){
    return cc._easeCubicActionIn;
};
cc.EaseCubicActionOut = cc.ActionEase.extend({
    _updateTime: function(time){
        time -= 1;
        return (time * time * time + 1);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseCubicActionOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseCubicActionOut(this._inner.reverse());
    }
});
cc.EaseCubicActionOut.create = function(action){
    return new cc.EaseCubicActionOut(action);
};
cc._easeCubicActionOut = {
    easing: cc.EaseCubicActionOut.prototype._updateTime,
    reverse: function(){
        return cc._easeCubicActionOut;
    }
};
cc.easeCubicActionOut = function(){
    return cc._easeCubicActionOut;
};
cc.EaseCubicActionInOut = cc.ActionEase.extend({
    _updateTime: function(time){
        time = time*2;
        if (time < 1)
            return 0.5 * time * time * time;
        time -= 2;
        return 0.5 * (time * time * time + 2);
    },
    update: function(dt){
        this._inner.update(this._updateTime(dt));
    },
    clone: function(){
        var action = new cc.EaseCubicActionInOut();
        action.initWithAction(this._inner.clone());
        return action;
    },
    reverse: function(){
        return new cc.EaseCubicActionInOut(this._inner.reverse());
    }
});
cc.EaseCubicActionInOut.create = function(action){
    return new cc.EaseCubicActionInOut(action);
};
cc._easeCubicActionInOut = {
    easing: cc.EaseCubicActionInOut.prototype._updateTime,
    reverse: function(){
        return cc._easeCubicActionInOut;
    }
};
cc.easeCubicActionInOut = function(){
    return cc._easeCubicActionInOut;
};
cc.cardinalSplineAt = function (p0, p1, p2, p3, tension, t) {
    var t2 = t * t;
    var t3 = t2 * t;
    var s = (1 - tension) / 2;
    var b1 = s * ((-t3 + (2 * t2)) - t);
    var b2 = s * (-t3 + t2) + (2 * t3 - 3 * t2 + 1);
    var b3 = s * (t3 - 2 * t2 + t) + (-2 * t3 + 3 * t2);
    var b4 = s * (t3 - t2);
    var x = (p0.x * b1 + p1.x * b2 + p2.x * b3 + p3.x * b4);
    var y = (p0.y * b1 + p1.y * b2 + p2.y * b3 + p3.y * b4);
    return cc.p(x, y);
};
cc.reverseControlPoints = function (controlPoints) {
    var newArray = [];
    for (var i = controlPoints.length - 1; i >= 0; i--) {
        newArray.push(cc.p(controlPoints[i].x, controlPoints[i].y));
    }
    return newArray;
};
cc.cloneControlPoints = function (controlPoints) {
    var newArray = [];
    for (var i = 0; i < controlPoints.length; i++)
        newArray.push(cc.p(controlPoints[i].x, controlPoints[i].y));
    return newArray;
};
cc.copyControlPoints = cc.cloneControlPoints;
cc.getControlPointAt = function (controlPoints, pos) {
    var p = Math.min(controlPoints.length - 1, Math.max(pos, 0));
    return controlPoints[p];
};
cc.reverseControlPointsInline = function (controlPoints) {
    var len = controlPoints.length;
    var mid = 0 | (len / 2);
    for (var i = 0; i < mid; ++i) {
        var temp = controlPoints[i];
        controlPoints[i] = controlPoints[len - i - 1];
        controlPoints[len - i - 1] = temp;
    }
};
cc.CardinalSplineTo = cc.ActionInterval.extend({
    _points:null,
    _deltaT:0,
    _tension:0,
    _previousPosition:null,
    _accumulatedDiff:null,
    ctor: function (duration, points, tension) {
        cc.ActionInterval.prototype.ctor.call(this);
        this._points = [];
		tension !== undefined && this.initWithDuration(duration, points, tension);
    },
    initWithDuration:function (duration, points, tension) {
        if(!points || points.length === 0)
            throw new Error("Invalid configuration. It must at least have one control point");
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this.setPoints(points);
            this._tension = tension;
            return true;
        }
        return false;
    },
    clone:function () {
        var action = new cc.CardinalSplineTo();
        action.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension);
        return action;
    },
    startWithTarget:function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._deltaT = 1 / (this._points.length - 1);
        this._previousPosition = cc.p(this.target.getPositionX(), this.target.getPositionY());
        this._accumulatedDiff = cc.p(0, 0);
    },
    update:function (dt) {
        dt = this._computeEaseTime(dt);
        var p, lt;
        var ps = this._points;
        if (dt === 1) {
            p = ps.length - 1;
            lt = 1;
        } else {
            var locDT = this._deltaT;
            p = 0 | (dt / locDT);
            lt = (dt - locDT * p) / locDT;
        }
        var newPos = cc.cardinalSplineAt(
            cc.getControlPointAt(ps, p - 1),
            cc.getControlPointAt(ps, p - 0),
            cc.getControlPointAt(ps, p + 1),
            cc.getControlPointAt(ps, p + 2),
            this._tension, lt);
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var tempX, tempY;
            tempX = this.target.getPositionX() - this._previousPosition.x;
            tempY = this.target.getPositionY() - this._previousPosition.y;
            if (tempX !== 0 || tempY !== 0) {
                var locAccDiff = this._accumulatedDiff;
                tempX = locAccDiff.x + tempX;
                tempY = locAccDiff.y + tempY;
                locAccDiff.x = tempX;
                locAccDiff.y = tempY;
                newPos.x += tempX;
                newPos.y += tempY;
            }
        }
        this.updatePosition(newPos);
    },
    reverse:function () {
        var reversePoints = cc.reverseControlPoints(this._points);
        return cc.cardinalSplineTo(this._duration, reversePoints, this._tension);
    },
    updatePosition:function (newPos) {
        this.target.setPosition(newPos);
        this._previousPosition = newPos;
    },
    getPoints:function () {
        return this._points;
    },
    setPoints:function (points) {
        this._points = points;
    }
});
cc.cardinalSplineTo = function (duration, points, tension) {
    return new cc.CardinalSplineTo(duration, points, tension);
};
cc.CardinalSplineTo.create = cc.cardinalSplineTo;
cc.CardinalSplineBy = cc.CardinalSplineTo.extend({
    _startPosition:null,
    ctor:function (duration, points, tension) {
        cc.CardinalSplineTo.prototype.ctor.call(this);
        this._startPosition = cc.p(0, 0);
		tension !== undefined && this.initWithDuration(duration, points, tension);
    },
    startWithTarget:function (target) {
        cc.CardinalSplineTo.prototype.startWithTarget.call(this, target);
        this._startPosition.x = target.getPositionX();
        this._startPosition.y = target.getPositionY();
    },
    reverse:function () {
        var copyConfig = this._points.slice();
        var current;
        var p = copyConfig[0];
        for (var i = 1; i < copyConfig.length; ++i) {
            current = copyConfig[i];
            copyConfig[i] = cc.pSub(current, p);
            p = current;
        }
        var reverseArray = cc.reverseControlPoints(copyConfig);
        p = reverseArray[ reverseArray.length - 1 ];
        reverseArray.pop();
        p.x = -p.x;
        p.y = -p.y;
        reverseArray.unshift(p);
        for (var i = 1; i < reverseArray.length; ++i) {
            current = reverseArray[i];
            current.x = -current.x;
            current.y = -current.y;
            current.x += p.x;
            current.y += p.y;
            reverseArray[i] = current;
            p = current;
        }
        return cc.cardinalSplineBy(this._duration, reverseArray, this._tension);
    },
    updatePosition:function (newPos) {
        var pos = this._startPosition;
        var posX = newPos.x + pos.x;
        var posY = newPos.y + pos.y;
	    this._previousPosition.x = posX;
	    this._previousPosition.y = posY;
	    this.target.setPosition(posX, posY);
    },
    clone:function () {
        var a = new cc.CardinalSplineBy();
        a.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension);
        return a;
    }
});
cc.cardinalSplineBy = function (duration, points, tension) {
    return new cc.CardinalSplineBy(duration, points, tension);
};
cc.CardinalSplineBy.create = cc.cardinalSplineBy;
cc.CatmullRomTo = cc.CardinalSplineTo.extend({
	ctor: function(dt, points) {
		points && this.initWithDuration(dt, points);
	},
    initWithDuration:function (dt, points) {
        return cc.CardinalSplineTo.prototype.initWithDuration.call(this, dt, points, 0.5);
    },
    clone:function () {
        var action = new cc.CatmullRomTo();
        action.initWithDuration(this._duration, cc.copyControlPoints(this._points));
        return action;
    }
});
cc.catmullRomTo = function (dt, points) {
    return new cc.CatmullRomTo(dt, points);
};
cc.CatmullRomTo.create = cc.catmullRomTo;
cc.CatmullRomBy = cc.CardinalSplineBy.extend({
	ctor: function(dt, points) {
		cc.CardinalSplineBy.prototype.ctor.call(this);
		points && this.initWithDuration(dt, points);
	},
    initWithDuration:function (dt, points) {
        return cc.CardinalSplineTo.prototype.initWithDuration.call(this, dt, points, 0.5);
    },
    clone:function () {
        var action = new cc.CatmullRomBy();
        action.initWithDuration(this._duration, cc.copyControlPoints(this._points));
        return action;
    }
});
cc.catmullRomBy = function (dt, points) {
    return new cc.CatmullRomBy(dt, points);
};
cc.CatmullRomBy.create = cc.catmullRomBy;
cc.ActionTweenDelegate = cc.Class.extend({
    updateTweenAction:function(value, key){}
});
cc.ActionTween = cc.ActionInterval.extend({
    key:"",
    from:0,
    to:0,
    delta:0,
    ctor:function(duration, key, from, to){
        cc.ActionInterval.prototype.ctor.call(this);
        this.key = "";
		to !== undefined && this.initWithDuration(duration, key, from, to);
    },
    initWithDuration:function (duration, key, from, to) {
        if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
            this.key = key;
            this.to = to;
            this.from = from;
            return true;
        }
        return false;
    },
    startWithTarget:function (target) {
        if(!target || !target.updateTweenAction)
            throw new Error("cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function");
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this.delta = this.to - this.from;
    },
    update:function (dt) {
        this.target.updateTweenAction(this.to - this.delta * (1 - dt), this.key);
    },
    reverse:function () {
        return new cc.ActionTween(this.duration, this.key, this.to, this.from);
    },
    clone:function(){
        var action = new cc.ActionTween();
        action.initWithDuration(this._duration, this.key, this.from, this.to);
        return action;
    }
});
cc.actionTween = function (duration, key, from, to) {
    return new cc.ActionTween(duration, key, from, to);
};
cc.ActionTween.create = cc.actionTween;
(function(){
    var DEBUG = false;
    var sys = cc.sys;
    var version = sys.browserVersion;
    var supportWebAudio = !!(window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
    var support = {ONLY_ONE: false, WEB_AUDIO: supportWebAudio, DELAY_CREATE_CTX: false, ONE_SOURCE: false };
    if (sys.browserType === sys.BROWSER_TYPE_FIREFOX) {
        support.DELAY_CREATE_CTX = true;
        support.USE_LOADER_EVENT = 'canplay';
    }
    if (sys.os === sys.OS_IOS) {
        support.USE_LOADER_EVENT = 'loadedmetadata';
    }
    if (sys.os === sys.OS_ANDROID) {
        if (sys.browserType === sys.BROWSER_TYPE_UC) {
            support.ONE_SOURCE = true;
        }
    }
    window.__audioSupport = support;
    if(DEBUG){
        setTimeout(function(){
            cc.log("browse type: " + sys.browserType);
            cc.log("browse version: " + version);
            cc.log("MULTI_CHANNEL: " + window.__audioSupport.MULTI_CHANNEL);
            cc.log("WEB_AUDIO: " + window.__audioSupport.WEB_AUDIO);
            cc.log("AUTOPLAY: " + window.__audioSupport.AUTOPLAY);
        }, 0);
    }
})();
cc.Audio = cc.Class.extend({
    src: null,
    _element: null,
    _AUDIO_TYPE: "AUDIO",
    ctor: function(url){
        this.src = url;
    },
    setBuffer: function (buffer) {
        this._AUDIO_TYPE = "WEBAUDIO";
        this._element = new cc.Audio.WebAudio(buffer);
    },
    setElement: function (element) {
        this._AUDIO_TYPE = "AUDIO";
        this._element = element;
        element.addEventListener('ended', function () {
            if (!element.loop) {
                element.paused = true;
            }
        });
    },
    play: function (offset, loop) {
        if (!this._element) return;
        this._element.loop = loop;
        this._element.play();
        if (this._AUDIO_TYPE === 'AUDIO' && this._element.paused) {
            this.stop();
            cc.Audio.touchPlayList.push({ loop: loop, offset: offset, audio: this._element });
        }
        if (cc.Audio.bindTouch === false) {
            cc.Audio.bindTouch = true;
            cc.game.canvas.addEventListener('touchstart', cc.Audio.touchStart);
        }
    },
    getPlaying: function () {
        if (!this._element) return true;
        return !this._element.paused;
    },
    stop: function () {
        if (!this._element) return;
        this._element.pause();
        try{
            this._element.currentTime = 0;
        } catch (err) {}
    },
    pause: function () {
        if (!this._element) return;
        this._element.pause();
    },
    resume: function () {
        if (!this._element) return;
        this._element.play();
    },
    setVolume: function (volume) {
        if (!this._element) return;
        this._element.volume = volume;
    },
    getVolume: function () {
        if (!this._element) return;
        return this._element.volume;
    },
    cloneNode: function () {
        var audio = new cc.Audio(this.src);
        if (this._AUDIO_TYPE === "AUDIO") {
            var elem = document.createElement("audio");
            var sources = elem.getElementsByTagName('source');
            for (var i=0; i<sources.length; i++) {
                elem.appendChild(sources[i]);
            }
            elem.src = this.src;
            audio.setElement(elem);
        } else {
            audio.setBuffer(this._element.buffer);
        }
        return audio;
    }
});
cc.Audio.touchPlayList = [
];
cc.Audio.bindTouch = false;
cc.Audio.touchStart = function () {
    var list = cc.Audio.touchPlayList;
    var item = null;
    while (item = list.pop()) {
        item.audio.loop = !!item.loop;
        item.audio.play(item.offset);
    }
};
cc.Audio.WebAudio = function (buffer) {
    this.buffer = buffer;
    this.context = cc.Audio._context;
    var volume = this.context['createGain']();
    volume['gain'].value = 1;
    volume['connect'](this.context['destination']);
    this._volume = volume;
    this._loop = false;
    this._startTime = -1;
    this._currentSource = null;
    this.playedLength = 0;
    this._currextTimer = null;
};
cc.Audio.WebAudio.prototype = {
    constructor: cc.Audio.WebAudio,
    get paused () {
        if (this._currentSource && this._currentSource.loop)
            return false;
        if (this._startTime === -1)
            return true;
        return this.context.currentTime - this._startTime > this.buffer.duration;
    },
    set paused (bool) {},
    get loop () { return this._loop; },
    set loop (bool) { return this._loop = bool; },
    get volume () { return this._volume['gain'].value; },
    set volume (num) { return this._volume['gain'].value = num; },
    get currentTime () { return this.playedLength; },
    set currentTime (num) { return this.playedLength = num; },
    play: function (offset) {
        if (this._currentSource && !this.paused) {
            this._currentSource.stop(0);
            this.playedLength = 0;
        }
        var audio = this.context["createBufferSource"]();
        audio.buffer = this.buffer;
        audio["connect"](this._volume);
        audio.loop = this._loop;
        this._startTime = this.context.currentTime;
        offset = offset || this.playedLength;
        var duration = this.buffer.duration;
        if (!this._loop) {
            if (audio.start)
                audio.start(0, offset, duration - offset);
            else if (audio["notoGrainOn"])
                audio["noteGrainOn"](0, offset, duration - offset);
            else
                audio["noteOn"](0, offset, duration - offset);
        } else {
            if (audio.start)
                audio.start(0);
            else if (audio["notoGrainOn"])
                audio["noteGrainOn"](0);
            else
                audio["noteOn"](0);
        }
        this._currentSource = audio;
        if (this.context.currentTime === 0) {
            var self = this;
            clearTimeout(this._currextTimer);
            this._currextTimer = setTimeout(function () {
                if (self.context.currentTime === 0) {
                    cc.Audio.touchPlayList.push({
                        offset: offset,
                        audio: self
                    });
                }
            }, 10);
        }
    },
    pause: function () {
        this.playedLength = this.context.currentTime - this._startTime;
        this.playedLength %= this.buffer.duration;
        var audio = this._currentSource;
        this._currentSource = null;
        this._startTime = -1;
        if (audio)
            audio.stop(0);
    }
};
(function(polyfill){
    var SWA = polyfill.WEB_AUDIO, SWB = polyfill.ONLY_ONE;
    var support = [];
    (function(){
        var audio = document.createElement("audio");
        if(audio.canPlayType) {
            var ogg = audio.canPlayType('audio/ogg; codecs="vorbis"');
            if (ogg && ogg !== "") support.push(".ogg");
            var mp3 = audio.canPlayType("audio/mpeg");
            if (mp3 && mp3 !== "") support.push(".mp3");
            var wav = audio.canPlayType('audio/wav; codecs="1"');
            if (wav && wav !== "") support.push(".wav");
            var mp4 = audio.canPlayType("audio/mp4");
            if (mp4 && mp4 !== "") support.push(".mp4");
            var m4a = audio.canPlayType("audio/x-m4a");
            if (m4a && m4a !== "") support.push(".m4a");
        }
    })();
    try{
        if(SWA){
            var context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
            cc.Audio._context = context;
            if(polyfill.DELAY_CREATE_CTX)
                setTimeout(function(){
                    context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
                    cc.Audio._context = context;
                }, 0);
        }
    }catch(error){
        SWA = false;
        cc.log("browser don't support web audio");
    }
    var loader = {
        cache: {},
        useWebAudio: false,
        loadBuffer: function (url, cb) {
            if (!SWA) return;
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";
            request.onload = function () {
                context["decodeAudioData"](request.response, function(buffer){
                    cb(null, buffer);
                }, function(){
                    cb('decode error - ' + url);
                });
            };
            request.onerror = function(){
                cb('request error - ' + url);
            };
            request.send();
        },
        load: function(realUrl, url, res, cb){
            if(support.length === 0)
                return cb("can not support audio!");
            var audio = cc.loader.getRes(url);
            if (audio)
                return cb(null, audio);
            var i;
            if(cc.loader.audioPath)
                realUrl = cc.path.join(cc.loader.audioPath, realUrl);
            var extname = cc.path.extname(realUrl);
            var typeList = [extname];
            for(i=0; i<support.length; i++){
                if(extname !== support[i]){
                    typeList.push(support[i]);
                }
            }
            audio = new cc.Audio(realUrl);
            cc.loader.cache[url] = audio;
            this.loadAudioFromExtList(realUrl, typeList, audio, cb);
            return audio;
        },
        loadAudioFromExtList: function(realUrl, typeList, audio, cb){
            if(typeList.length === 0){
                var ERRSTR = "can not found the resource of audio! Last match url is : ";
                ERRSTR += realUrl.replace(/\.(.*)?$/, "(");
                support.forEach(function(ext){
                    ERRSTR += ext + "|";
                });
                ERRSTR = ERRSTR.replace(/\|$/, ")");
                return cb({status:520, errorMessage:ERRSTR}, null);
            }
            if (SWA && this.useWebAudio) {
                this.loadBuffer(realUrl, function (error, buffer) {
                    if (error)
                        cc.log(error);
                    if (buffer)
                        audio.setBuffer(buffer);
                    cb(null, audio);
                });
                return;
            }
            var num = polyfill.ONE_SOURCE ? 1 : typeList.length;
            var dom = document.createElement('audio');
            for (var i=0; i<num; i++) {
                var source = document.createElement('source');
                source.src = cc.path.changeExtname(realUrl, typeList[i]);
                dom.appendChild(source);
            }
            audio.setElement(dom);
            var timer = setTimeout(function(){
                if (dom.readyState === 0) {
                    failure();
                } else {
                    success();
                }
            }, 8000);
            var success = function () {
                dom.removeEventListener("canplaythrough", success, false);
                dom.removeEventListener("error", failure, false);
                dom.removeEventListener("emptied", success, false);
                if (polyfill.USE_LOADER_EVENT)
                    dom.removeEventListener(polyfill.USE_LOADER_EVENT, success, false);
                clearTimeout(timer);
                cb(null, audio);
            };
            var failure = function () {
                cc.log('load audio failure - ' + realUrl);
                success();
            };
            dom.addEventListener("canplaythrough", success, false);
            dom.addEventListener("error", failure, false);
            if(polyfill.USE_LOADER_EVENT)
                dom.addEventListener(polyfill.USE_LOADER_EVENT, success, false);
        }
    };
    cc.loader.register(["mp3", "ogg", "wav", "mp4", "m4a"], loader);
    cc.audioEngine = {
        _currMusic: null,
        _musicVolume: 1,
        features: polyfill,
        willPlayMusic: function(){return false;},
        playMusic: function(url, loop){
            var bgMusic = this._currMusic;
            if (bgMusic && bgMusic.getPlaying()) {
                bgMusic.stop();
            }
            var audio = cc.loader.getRes(url);
            if (!audio) {
                cc.loader.load(url);
                audio = cc.loader.getRes(url);
            }
            audio.setVolume(this._musicVolume);
            audio.play(0, loop || false);
            this._currMusic = audio;
        },
        stopMusic: function(releaseData){
            var audio = this._currMusic;
            if (audio) {
                audio.stop();
                this._currMusic = null;
                if (releaseData)
                    cc.loader.release(audio.src);
            }
        },
        pauseMusic: function(){
            var audio = this._currMusic;
            if (audio)
                audio.pause();
        },
        resumeMusic: function(){
            var audio = this._currMusic;
            if (audio)
                audio.resume();
        },
        rewindMusic: function(){
            var audio = this._currMusic;
            if (audio){
                audio.stop();
                audio.play();
            }
        },
        getMusicVolume: function(){
            return this._musicVolume;
        },
        setMusicVolume: function(volume){
            volume = volume - 0;
            if (isNaN(volume)) volume = 1;
            if (volume > 1) volume = 1;
            if (volume < 0) volume = 0;
            this._musicVolume = volume;
            var audio = this._currMusic;
            if (audio) {
                audio.setVolume(volume);
            }
        },
        isMusicPlaying: function(){
            var audio = this._currMusic;
            if (audio) {
                return audio.getPlaying();
            } else {
                return false;
            }
        },
        _audioPool: {},
        _maxAudioInstance: 10,
        _effectVolume: 1,
        playEffect: function(url, loop){
            if (SWB && this._currMusic && this._currMusic.getPlaying()) {
                cc.log('Browser is only allowed to play one audio');
                return null;
            }
            var effectList = this._audioPool[url];
            if (!effectList) {
                effectList = this._audioPool[url] = [];
            }
            var i;
            for (i = 0; i < effectList.length; i++) {
                if (!effectList[i].getPlaying()) {
                    break;
                }
            }
            if (!SWA && i > this._maxAudioInstance) {
                var first = effectList.shift();
                first.stop();
                effectList.push(first);
                i = effectList.length - 1;
            }
            var audio;
            if (effectList[i]) {
                audio = effectList[i];
                audio.setVolume(this._effectVolume);
                audio.play(0, loop || false);
                return audio;
            }
            audio = cc.loader.getRes(url);
            if (audio && SWA && audio._AUDIO_TYPE === 'AUDIO') {
                cc.loader.release(url);
                audio = null;
            }
            if (audio) {
                if (SWA && audio._AUDIO_TYPE === 'AUDIO') {
                    loader.loadBuffer(url, function (error, buffer) {
                        audio.setBuffer(buffer);
                        audio.setVolume(cc.audioEngine._effectVolume);
                        if (!audio.getPlaying())
                            audio.play(0, loop || false);
                    });
                } else {
                    audio = audio.cloneNode();
                    audio.setVolume(this._effectVolume);
                    audio.play(0, loop || false);
                    effectList.push(audio);
                    return audio;
                }
            }
            loader.useWebAudio = true;
            cc.loader.load(url, function (audio) {
                audio = cc.loader.getRes(url);
                audio = audio.cloneNode();
                audio.setVolume(cc.audioEngine._effectVolume);
                audio.play(0, loop || false);
                effectList.push(audio);
            });
            loader.useWebAudio = false;
            return audio;
        },
        setEffectsVolume: function(volume){
            volume = volume - 0;
            if(isNaN(volume)) volume = 1;
            if(volume > 1) volume = 1;
            if(volume < 0) volume = 0;
            this._effectVolume = volume;
            var audioPool = this._audioPool;
            for(var p in audioPool){
                var audioList = audioPool[p];
                if(Array.isArray(audioList))
                    for(var i=0; i<audioList.length; i++){
                        audioList[i].setVolume(volume);
                    }
            }
        },
        getEffectsVolume: function(){
            return this._effectVolume;
        },
        pauseEffect: function(audio){
            if(audio){
                audio.pause();
            }
        },
        pauseAllEffects: function(){
            var ap = this._audioPool;
            for(var p in ap){
                var list = ap[p];
                for(var i=0; i<ap[p].length; i++){
                    if(list[i].getPlaying()){
                        list[i].pause();
                    }
                }
            }
        },
        resumeEffect: function(audio){
            if(audio)
                audio.resume();
        },
        resumeAllEffects: function(){
            var ap = this._audioPool;
            for(var p in ap){
                var list = ap[p];
                for(var i=0; i<ap[p].length; i++){
                    list[i].resume();
                }
            }
        },
        stopEffect: function(audio){
            if(audio) {
                audio.stop();
            }
        },
        stopAllEffects: function(){
            var ap = this._audioPool;
            for(var p in ap){
                var list = ap[p];
                for(var i=0; i<list.length; i++){
                    list[i].stop();
                }
                list.length = 0;
            }
        },
        unloadEffect: function(url){
            if(!url){
                return;
            }
            cc.loader.release(url);
            var pool = this._audioPool[url];
            if(pool) pool.length = 0;
            delete this._audioPool[url];
        },
        end: function(){
            this.stopMusic();
            this.stopAllEffects();
        },
        _pauseCache: [],
        _pausePlaying: function(){
            var bgMusic = this._currMusic;
            if(bgMusic && bgMusic.getPlaying()){
                bgMusic.pause();
                this._pauseCache.push(bgMusic);
            }
            var ap = this._audioPool;
            for(var p in ap){
                var list = ap[p];
                for(var i=0; i<ap[p].length; i++){
                    if(list[i].getPlaying()){
                        list[i].pause();
                        this._pauseCache.push(list[i]);
                    }
                }
            }
        },
        _resumePlaying: function(){
            var list = this._pauseCache;
            for(var i=0; i<list.length; i++){
                list[i].resume();
            }
            list.length = 0;
        }
    };
})(window.__audioSupport);
cc._globalFontSize = cc.ITEM_SIZE;
cc._globalFontName = "Arial";
cc._globalFontNameRelease = false;
cc.MenuItem = cc.Node.extend({
    _enabled: false,
    _target: null,
    _callback: null,
    _isSelected: false,
    _className: "MenuItem",
    ctor: function (callback, target) {
        var nodeP = cc.Node.prototype;
        nodeP.ctor.call(this);
        this._target = null;
        this._callback = null;
        this._isSelected = false;
        this._enabled = false;
        nodeP.setAnchorPoint.call(this, 0.5, 0.5);
        this._target = target || null;
        this._callback = callback || null;
        if (this._callback) {
            this._enabled = true;
        }
    },
    isSelected: function () {
        return this._isSelected;
    },
    setOpacityModifyRGB: function (value) {
    },
    isOpacityModifyRGB: function () {
        return false;
    },
    setTarget: function (selector, rec) {
        this._target = rec;
        this._callback = selector;
    },
    isEnabled: function () {
        return this._enabled;
    },
    setEnabled: function (enable) {
        this._enabled = enable;
    },
    initWithCallback: function (callback, target) {
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this._target = target;
        this._callback = callback;
        this._enabled = true;
        this._isSelected = false;
        return true;
    },
    rect: function () {
        var locPosition = this._position, locContentSize = this._contentSize, locAnchorPoint = this._anchorPoint;
        return cc.rect(locPosition.x - locContentSize.width * locAnchorPoint.x,
            locPosition.y - locContentSize.height * locAnchorPoint.y,
            locContentSize.width, locContentSize.height);
    },
    selected: function () {
        this._isSelected = true;
    },
    unselected: function () {
        this._isSelected = false;
    },
    setCallback: function (callback, target) {
        this._target = target;
        this._callback = callback;
    },
    activate: function () {
        if (this._enabled) {
            var locTarget = this._target, locCallback = this._callback;
            if (!locCallback)
                return;
            if (locTarget && cc.isString(locCallback)) {
                locTarget[locCallback](this);
            } else if (locTarget && cc.isFunction(locCallback)) {
                locCallback.call(locTarget, this);
            } else
                locCallback(this);
        }
    }
});
var _p = cc.MenuItem.prototype;
_p.enabled;
cc.defineGetterSetter(_p, "enabled", _p.isEnabled, _p.setEnabled);
cc.MenuItem.create = function (callback, target) {
    return new cc.MenuItem(callback, target);
};
cc.MenuItemLabel = cc.MenuItem.extend({
    _disabledColor: null,
    _label: null,
    _originalScale: 0,
    _colorBackup: null,
    ctor: function (label, selector, target) {
        cc.MenuItem.prototype.ctor.call(this, selector, target);
        this._disabledColor = null;
        this._label = null;
        this._colorBackup = null;
        if (label) {
            this._originalScale = 1.0;
            this._colorBackup = cc.color.WHITE;
            this._disabledColor = cc.color(126, 126, 126);
            this.setLabel(label);
            if (label.textureLoaded && !label.textureLoaded()) {
                label.addEventListener("load", function (sender) {
                    this.width = sender.width;
                    this.height = sender.height;
                    if (this.parent instanceof cc.Menu) {
                        this.parent.updateAlign();
                    }
                }, this);
            }
            this.setCascadeColorEnabled(true);
            this.setCascadeOpacityEnabled(true);
        }
    },
    getDisabledColor: function () {
        return this._disabledColor;
    },
    setDisabledColor: function (color) {
        this._disabledColor = color;
    },
    getLabel: function () {
        return this._label;
    },
    setLabel: function (label) {
        if (label) {
            this.addChild(label);
            label.anchorX = 0;
            label.anchorY = 0;
            this.width = label.width;
            this.height = label.height;
            label.setCascadeColorEnabled(true);
        }
        if (this._label) {
            this.removeChild(this._label, true);
        }
        this._label = label;
    },
    setEnabled: function (enabled) {
        if (this._enabled !== enabled) {
            if (!enabled) {
                this._colorBackup = this.color;
                this.setColor(this._disabledColor);
            } else {
                this.setColor(this._colorBackup);
            }
        }
        cc.MenuItem.prototype.setEnabled.call(this, enabled);
    },
    initWithLabel: function (label, selector, target) {
        this.initWithCallback(selector, target);
        this._originalScale = 1.0;
        this._colorBackup = cc.color.WHITE;
        this._disabledColor = cc.color(126, 126, 126);
        this.setLabel(label);
        this.setCascadeColorEnabled(true);
        this.setCascadeOpacityEnabled(true);
        return true;
    },
    setString: function (label) {
        this._label.string = label;
        this.width = this._label.width;
        this.height = this._label.height;
    },
    getString: function () {
        return this._label.string;
    },
    activate: function () {
        if (this._enabled) {
            this.stopAllActions();
            this.scale = this._originalScale;
            cc.MenuItem.prototype.activate.call(this);
        }
    },
    selected: function () {
        if (this._enabled) {
            cc.MenuItem.prototype.selected.call(this);
            var action = this.getActionByTag(cc.ZOOM_ACTION_TAG);
            if (action)
                this.stopAction(action);
            else
                this._originalScale = this.scale;
            var zoomAction = cc.scaleTo(0.1, this._originalScale * 1.2);
            zoomAction.setTag(cc.ZOOM_ACTION_TAG);
            this.runAction(zoomAction);
        }
    },
    unselected: function () {
        if (this._enabled) {
            cc.MenuItem.prototype.unselected.call(this);
            this.stopActionByTag(cc.ZOOM_ACTION_TAG);
            var zoomAction = cc.scaleTo(0.1, this._originalScale);
            zoomAction.setTag(cc.ZOOM_ACTION_TAG);
            this.runAction(zoomAction);
        }
    }
});
var _p = cc.MenuItemLabel.prototype;
_p.string;
cc.defineGetterSetter(_p, "string", _p.getString, _p.setString);
_p.disabledColor;
cc.defineGetterSetter(_p, "disabledColor", _p.getDisabledColor, _p.setDisabledColor);
_p.label;
cc.defineGetterSetter(_p, "label", _p.getLabel, _p.setLabel);
cc.MenuItemLabel.create = function (label, selector, target) {
    return new cc.MenuItemLabel(label, selector, target);
};
cc.MenuItemAtlasFont = cc.MenuItemLabel.extend({
    ctor: function (value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target) {
        var label;
        if (value && value.length > 0) {
            label = new cc.LabelAtlas(value, charMapFile, itemWidth, itemHeight, startCharMap);
        }
        cc.MenuItemLabel.prototype.ctor.call(this, label, callback, target);
    },
    initWithString: function (value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target) {
        if (!value || value.length === 0)
            throw new Error("cc.MenuItemAtlasFont.initWithString(): value should be non-null and its length should be greater than 0");
        var label = new cc.LabelAtlas();
        label.initWithString(value, charMapFile, itemWidth, itemHeight, startCharMap);
        if (this.initWithLabel(label, callback, target)) {
        }
        return true;
    }
});
cc.MenuItemAtlasFont.create = function (value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target) {
    return new cc.MenuItemAtlasFont(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target);
};
cc.MenuItemFont = cc.MenuItemLabel.extend({
    _fontSize: null,
    _fontName: null,
    ctor: function (value, callback, target) {
        var label;
        if (value && value.length > 0) {
            this._fontName = cc._globalFontName;
            this._fontSize = cc._globalFontSize;
            label = new cc.LabelTTF(value, this._fontName, this._fontSize);
        }
        else {
            this._fontSize = 0;
            this._fontName = "";
        }
        cc.MenuItemLabel.prototype.ctor.call(this, label, callback, target);
    },
    initWithString: function (value, callback, target) {
        if (!value || value.length === 0)
            throw new Error("Value should be non-null and its length should be greater than 0");
        this._fontName = cc._globalFontName;
        this._fontSize = cc._globalFontSize;
        var label = new cc.LabelTTF(value, this._fontName, this._fontSize);
        if (this.initWithLabel(label, callback, target)) {
        }
        return true;
    },
    setFontSize: function (s) {
        this._fontSize = s;
        this._recreateLabel();
    },
    getFontSize: function () {
        return this._fontSize;
    },
    setFontName: function (name) {
        this._fontName = name;
        this._recreateLabel();
    },
    getFontName: function () {
        return this._fontName;
    },
    _recreateLabel: function () {
        var label = new cc.LabelTTF(this._label.string, this._fontName, this._fontSize);
        this.setLabel(label);
    }
});
cc.MenuItemFont.setFontSize = function (fontSize) {
    cc._globalFontSize = fontSize;
};
cc.MenuItemFont.fontSize = function () {
    return cc._globalFontSize;
};
cc.MenuItemFont.setFontName = function (name) {
    if (cc._globalFontNameRelease) {
        cc._globalFontName = '';
    }
    cc._globalFontName = name;
    cc._globalFontNameRelease = true;
};
var _p = cc.MenuItemFont.prototype;
_p.fontSize;
cc.defineGetterSetter(_p, "fontSize", _p.getFontSize, _p.setFontSize);
_p.fontName;
cc.defineGetterSetter(_p, "fontName", _p.getFontName, _p.setFontName);
cc.MenuItemFont.fontName = function () {
    return cc._globalFontName;
};
cc.MenuItemFont.create = function (value, callback, target) {
    return new cc.MenuItemFont(value, callback, target);
};
cc.MenuItemSprite = cc.MenuItem.extend({
    _normalImage: null,
    _selectedImage: null,
    _disabledImage: null,
    ctor: function (normalSprite, selectedSprite, three, four, five) {
        cc.MenuItem.prototype.ctor.call(this);
        this._normalImage = null;
        this._selectedImage = null;
        this._disabledImage = null;
        this._loader = new cc.Sprite.LoadManager();
        if (normalSprite !== undefined) {
            selectedSprite = selectedSprite || null;
            var disabledImage, target, callback;
            if (five !== undefined) {
                disabledImage = three;
                callback = four;
                target = five;
            } else if (four !== undefined && cc.isFunction(four)) {
                disabledImage = three;
                callback = four;
            } else if (four !== undefined && cc.isFunction(three)) {
                target = four;
                callback = three;
                disabledImage = null;
            } else if (three === undefined) {
                disabledImage = null;
            }
            this._loader.clear();
            if (normalSprite.textureLoaded && !normalSprite.textureLoaded()) {
                this._loader.once(normalSprite, function () {
                    this.initWithNormalSprite(normalSprite, selectedSprite, disabledImage, callback, target);
                }, this);
                return false;
            }
            this.initWithNormalSprite(normalSprite, selectedSprite, disabledImage, callback, target);
            return true;
        }
    },
    getNormalImage: function () {
        return this._normalImage;
    },
    setNormalImage: function (normalImage) {
        if (this._normalImage === normalImage) {
            return;
        }
        if (normalImage) {
            this.addChild(normalImage, 0, cc.NORMAL_TAG);
            normalImage.anchorX = 0;
            normalImage.anchorY = 0;
        }
        if (this._normalImage) {
            this.removeChild(this._normalImage, true);
        }
        this._normalImage = normalImage;
        if(!this._normalImage)
            return;
        this.width = this._normalImage.width;
        this.height = this._normalImage.height;
        this._updateImagesVisibility();
        if (normalImage.textureLoaded && !normalImage.textureLoaded()) {
            normalImage.addEventListener("load", function (sender) {
                this.width = sender.width;
                this.height = sender.height;
                if (this.parent instanceof cc.Menu) {
                    this.parent.updateAlign();
                }
            }, this);
        }
    },
    getSelectedImage: function () {
        return this._selectedImage;
    },
    setSelectedImage: function (selectedImage) {
        if (this._selectedImage === selectedImage)
            return;
        if (selectedImage) {
            this.addChild(selectedImage, 0, cc.SELECTED_TAG);
            selectedImage.anchorX = 0;
            selectedImage.anchorY = 0;
        }
        if (this._selectedImage) {
            this.removeChild(this._selectedImage, true);
        }
        this._selectedImage = selectedImage;
        this._updateImagesVisibility();
    },
    getDisabledImage: function () {
        return this._disabledImage;
    },
    setDisabledImage: function (disabledImage) {
        if (this._disabledImage === disabledImage)
            return;
        if (disabledImage) {
            this.addChild(disabledImage, 0, cc.DISABLE_TAG);
            disabledImage.anchorX = 0;
            disabledImage.anchorY = 0;
        }
        if (this._disabledImage)
            this.removeChild(this._disabledImage, true);
        this._disabledImage = disabledImage;
        this._updateImagesVisibility();
    },
    initWithNormalSprite: function (normalSprite, selectedSprite, disabledSprite, callback, target) {
        this._loader.clear();
        if (normalSprite.textureLoaded && !normalSprite.textureLoaded()) {
            this._loader.once(normalSprite, function () {
                this.initWithNormalSprite(normalSprite, selectedSprite, disabledSprite, callback, target);
            }, this);
            return false;
        }
        this.initWithCallback(callback, target);
        this.setNormalImage(normalSprite);
        this.setSelectedImage(selectedSprite);
        this.setDisabledImage(disabledSprite);
        var locNormalImage = this._normalImage;
        if (locNormalImage) {
            this.width = locNormalImage.width;
            this.height = locNormalImage.height;
        }
        this.setCascadeColorEnabled(true);
        this.setCascadeOpacityEnabled(true);
        return true;
    },
    selected: function () {
        cc.MenuItem.prototype.selected.call(this);
        if (this._normalImage) {
            if (this._disabledImage)
                this._disabledImage.visible = false;
            if (this._selectedImage) {
                this._normalImage.visible = false;
                this._selectedImage.visible = true;
            } else
                this._normalImage.visible = true;
        }
    },
    unselected: function () {
        cc.MenuItem.prototype.unselected.call(this);
        if (this._normalImage) {
            this._normalImage.visible = true;
            if (this._selectedImage)
                this._selectedImage.visible = false;
            if (this._disabledImage)
                this._disabledImage.visible = false;
        }
    },
    setEnabled: function (bEnabled) {
        if (this._enabled !== bEnabled) {
            cc.MenuItem.prototype.setEnabled.call(this, bEnabled);
            this._updateImagesVisibility();
        }
    },
    _updateImagesVisibility: function () {
        var locNormalImage = this._normalImage, locSelImage = this._selectedImage, locDisImage = this._disabledImage;
        if (this._enabled) {
            if (locNormalImage)
                locNormalImage.visible = true;
            if (locSelImage)
                locSelImage.visible = false;
            if (locDisImage)
                locDisImage.visible = false;
        } else {
            if (locDisImage) {
                if (locNormalImage)
                    locNormalImage.visible = false;
                if (locSelImage)
                    locSelImage.visible = false;
                if (locDisImage)
                    locDisImage.visible = true;
            } else {
                if (locNormalImage)
                    locNormalImage.visible = true;
                if (locSelImage)
                    locSelImage.visible = false;
            }
        }
    }
});
var _p = cc.MenuItemSprite.prototype;
_p.normalImage;
cc.defineGetterSetter(_p, "normalImage", _p.getNormalImage, _p.setNormalImage);
_p.selectedImage;
cc.defineGetterSetter(_p, "selectedImage", _p.getSelectedImage, _p.setSelectedImage);
_p.disabledImage;
cc.defineGetterSetter(_p, "disabledImage", _p.getDisabledImage, _p.setDisabledImage);
cc.MenuItemSprite.create = function (normalSprite, selectedSprite, three, four, five) {
    return new cc.MenuItemSprite(normalSprite, selectedSprite, three, four, five || undefined);
};
cc.MenuItemImage = cc.MenuItemSprite.extend({
    ctor: function (normalImage, selectedImage, three, four, five) {
        var normalSprite = null,
            selectedSprite = null,
            disabledSprite = null,
            callback = null,
            target = null;
        if (normalImage === undefined || normalImage === null) {
            cc.MenuItemSprite.prototype.ctor.call(this);
        }
        else {
            normalSprite = new cc.Sprite(normalImage);
            selectedImage &&
            (selectedSprite = new cc.Sprite(selectedImage));
            if (four === undefined) {
                callback = three;
            }
            else if (five === undefined) {
                callback = three;
                target = four;
            }
            else if (five) {
                disabledSprite = new cc.Sprite(three);
                callback = four;
                target = five;
            }
            cc.MenuItemSprite.prototype.ctor.call(this, normalSprite, selectedSprite, disabledSprite, callback, target);
        }
    },
    setNormalSpriteFrame: function (frame) {
        this.setNormalImage(new cc.Sprite(frame));
    },
    setSelectedSpriteFrame: function (frame) {
        this.setSelectedImage(new cc.Sprite(frame));
    },
    setDisabledSpriteFrame: function (frame) {
        this.setDisabledImage(new cc.Sprite(frame));
    },
    initWithNormalImage: function (normalImage, selectedImage, disabledImage, callback, target) {
        var normalSprite = null;
        var selectedSprite = null;
        var disabledSprite = null;
        if (normalImage) {
            normalSprite = new cc.Sprite(normalImage);
        }
        if (selectedImage) {
            selectedSprite = new cc.Sprite(selectedImage);
        }
        if (disabledImage) {
            disabledSprite = new cc.Sprite(disabledImage);
        }
        return this.initWithNormalSprite(normalSprite, selectedSprite, disabledSprite, callback, target);
    }
});
cc.MenuItemImage.create = function (normalImage, selectedImage, three, four, five) {
    return new cc.MenuItemImage(normalImage, selectedImage, three, four, five);
};
cc.MenuItemToggle = cc.MenuItem.extend({
    subItems: null,
    _selectedIndex: 0,
    _opacity: null,
    _color: null,
    ctor: function () {
        cc.MenuItem.prototype.ctor.call(this);
        this._selectedIndex = 0;
        this.subItems = [];
        this._opacity = 0;
        this._color = cc.color.WHITE;
        if(arguments.length > 0)
            this.initWithItems(Array.prototype.slice.apply(arguments));
    },
    getOpacity: function () {
        return this._opacity;
    },
    setOpacity: function (opacity) {
        this._opacity = opacity;
        if (this.subItems && this.subItems.length > 0) {
            for (var it = 0; it < this.subItems.length; it++) {
                this.subItems[it].opacity = opacity;
            }
        }
        this._color.a = opacity;
    },
    getColor: function () {
        var locColor = this._color;
        return cc.color(locColor.r, locColor.g, locColor.b, locColor.a);
    },
    setColor: function (color) {
        var locColor = this._color;
        locColor.r = color.r;
        locColor.g = color.g;
        locColor.b = color.b;
        if (this.subItems && this.subItems.length > 0) {
            for (var it = 0; it < this.subItems.length; it++) {
                this.subItems[it].setColor(color);
            }
        }
        if (color.a !== undefined && !color.a_undefined) {
            this.setOpacity(color.a);
        }
    },
    getSelectedIndex: function () {
        return this._selectedIndex;
    },
    setSelectedIndex: function (SelectedIndex) {
        if (SelectedIndex !== this._selectedIndex) {
            this._selectedIndex = SelectedIndex;
            var currItem = this.getChildByTag(cc.CURRENT_ITEM);
            if (currItem)
                currItem.removeFromParent(false);
            var item = this.subItems[this._selectedIndex];
            this.addChild(item, 0, cc.CURRENT_ITEM);
            var w = item.width, h = item.height;
            this.width = w;
            this.height = h;
            item.setPosition(w / 2, h / 2);
        }
    },
    getSubItems: function () {
        return this.subItems;
    },
    setSubItems: function (subItems) {
        this.subItems = subItems;
    },
    initWithItems: function (args) {
        var l = args.length;
        if (cc.isFunction(args[args.length - 2])) {
            this.initWithCallback(args[args.length - 2], args[args.length - 1]);
            l = l - 2;
        } else if (cc.isFunction(args[args.length - 1])) {
            this.initWithCallback(args[args.length - 1], null);
            l = l - 1;
        } else {
            this.initWithCallback(null, null);
        }
        var locSubItems = this.subItems;
        locSubItems.length = 0;
        for (var i = 0; i < l; i++) {
            if (args[i])
                locSubItems.push(args[i]);
        }
        this._selectedIndex = cc.UINT_MAX;
        this.setSelectedIndex(0);
        this.setCascadeColorEnabled(true);
        this.setCascadeOpacityEnabled(true);
        return true;
    },
    addSubItem: function (item) {
        this.subItems.push(item);
    },
    activate: function () {
        if (this._enabled) {
            var newIndex = (this._selectedIndex + 1) % this.subItems.length;
            this.setSelectedIndex(newIndex);
        }
        cc.MenuItem.prototype.activate.call(this);
    },
    selected: function () {
        cc.MenuItem.prototype.selected.call(this);
        this.subItems[this._selectedIndex].selected();
    },
    unselected: function () {
        cc.MenuItem.prototype.unselected.call(this);
        this.subItems[this._selectedIndex].unselected();
    },
    setEnabled: function (enabled) {
        if (this._enabled !== enabled) {
            cc.MenuItem.prototype.setEnabled.call(this, enabled);
            var locItems = this.subItems;
            if (locItems && locItems.length > 0) {
                for (var it = 0; it < locItems.length; it++)
                    locItems[it].enabled = enabled;
            }
        }
    },
    selectedItem: function () {
        return this.subItems[this._selectedIndex];
    },
    getSelectedItem: function() {
        return this.subItems[this._selectedIndex];
    },
    onEnter: function () {
        cc.Node.prototype.onEnter.call(this);
        this.setSelectedIndex(this._selectedIndex);
    }
});
var _p = cc.MenuItemToggle.prototype;
_p.selectedIndex;
cc.defineGetterSetter(_p, "selectedIndex", _p.getSelectedIndex, _p.setSelectedIndex);
cc.MenuItemToggle.create = function () {
    if ((arguments.length > 0) && (arguments[arguments.length - 1] == null))
        cc.log("parameters should not be ending with null in Javascript");
    var ret = new cc.MenuItemToggle();
    ret.initWithItems(Array.prototype.slice.apply(arguments));
    return ret;
};
cc.MENU_STATE_WAITING = 0;
cc.MENU_STATE_TRACKING_TOUCH = 1;
cc.MENU_HANDLER_PRIORITY = -128;
cc.DEFAULT_PADDING = 5;
cc.Menu = cc.Layer.extend({
    enabled: false,
    _selectedItem: null,
    _state: -1,
    _touchListener: null,
    _className: "Menu",
    ctor: function (menuItems) {
        cc.Layer.prototype.ctor.call(this);
        this._color = cc.color.WHITE;
        this.enabled = false;
        this._opacity = 255;
        this._selectedItem = null;
        this._state = -1;
        this._touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this._onTouchBegan,
            onTouchMoved: this._onTouchMoved,
            onTouchEnded: this._onTouchEnded,
            onTouchCancelled: this._onTouchCancelled
        });
        if ((arguments.length > 0) && (arguments[arguments.length - 1] == null))
            cc.log("parameters should not be ending with null in Javascript");
        var argc = arguments.length, items;
        if (argc === 0) {
            items = [];
        } else if (argc === 1) {
            if (menuItems instanceof Array) {
                items = menuItems;
            }
            else items = [menuItems];
        }
        else if (argc > 1) {
            items = [];
            for (var i = 0; i < argc; i++) {
                if (arguments[i])
                    items.push(arguments[i]);
            }
        }
        this.initWithArray(items);
    },
    onEnter: function () {
        var locListener = this._touchListener;
        if (!locListener._isRegistered())
            cc.eventManager.addListener(locListener, this);
        cc.Node.prototype.onEnter.call(this);
    },
    isEnabled: function () {
        return this.enabled;
    },
    setEnabled: function (enabled) {
        this.enabled = enabled;
    },
    initWithItems: function (args) {
        var pArray = [];
        if (args) {
            for (var i = 0; i < args.length; i++) {
                if (args[i])
                    pArray.push(args[i]);
            }
        }
        return this.initWithArray(pArray);
    },
    initWithArray: function (arrayOfItems) {
        if (cc.Layer.prototype.init.call(this)) {
            this.enabled = true;
            var winSize = cc.winSize;
            this.setPosition(winSize.width / 2, winSize.height / 2);
            this.setContentSize(winSize);
            this.setAnchorPoint(0.5, 0.5);
            this.ignoreAnchorPointForPosition(true);
            if (arrayOfItems) {
                for (var i = 0; i < arrayOfItems.length; i++)
                    this.addChild(arrayOfItems[i], i);
            }
            this._selectedItem = null;
            this._state = cc.MENU_STATE_WAITING;
            this.cascadeColor = true;
            this.cascadeOpacity = true;
            return true;
        }
        return false;
    },
    addChild: function (child, zOrder, tag) {
        if (!(child instanceof cc.MenuItem))
            throw new Error("cc.Menu.addChild() : Menu only supports MenuItem objects as children");
        cc.Layer.prototype.addChild.call(this, child, zOrder, tag);
    },
    updateAlign: function () {
        switch (this._align) {
            case 'vertically':
                this.alignItemsVertically();
                break;
            case 'horizontally':
                this.alignItemsHorizontally();
                break;
        }
    },
    alignItemsVertically: function () {
        this.alignItemsVerticallyWithPadding(cc.DEFAULT_PADDING);
    },
    alignItemsVerticallyWithPadding: function (padding) {
        this._align = 'vertically';
        var height = -padding, locChildren = this._children, len, i, locScaleY, locHeight, locChild;
        if (locChildren && locChildren.length > 0) {
            for (i = 0, len = locChildren.length; i < len; i++)
                height += locChildren[i].height * locChildren[i].scaleY + padding;
            var y = height / 2.0;
            for (i = 0, len = locChildren.length; i < len; i++) {
                locChild = locChildren[i];
                locHeight = locChild.height;
                locScaleY = locChild.scaleY;
                locChild.setPosition(0, y - locHeight * locScaleY / 2);
                y -= locHeight * locScaleY + padding;
            }
        }
    },
    alignItemsHorizontally: function () {
        this.alignItemsHorizontallyWithPadding(cc.DEFAULT_PADDING);
    },
    alignItemsHorizontallyWithPadding: function (padding) {
        this._align = 'horizontally';
        var width = -padding, locChildren = this._children, i, len, locScaleX, locWidth, locChild;
        if (locChildren && locChildren.length > 0) {
            for (i = 0, len = locChildren.length; i < len; i++)
                width += locChildren[i].width * locChildren[i].scaleX + padding;
            var x = -width / 2.0;
            for (i = 0, len = locChildren.length; i < len; i++) {
                locChild = locChildren[i];
                locScaleX = locChild.scaleX;
                locWidth = locChildren[i].width;
                locChild.setPosition(x + locWidth * locScaleX / 2, 0);
                x += locWidth * locScaleX + padding;
            }
        }
    },
    alignItemsInColumns: function () {
        if ((arguments.length > 0) && (arguments[arguments.length - 1] == null))
            cc.log("parameters should not be ending with null in Javascript");
        var rows = [];
        for (var i = 0; i < arguments.length; i++) {
            rows.push(arguments[i]);
        }
        var height = -5;
        var row = 0;
        var rowHeight = 0;
        var columnsOccupied = 0;
        var rowColumns, tmp, len;
        var locChildren = this._children;
        if (locChildren && locChildren.length > 0) {
            for (i = 0, len = locChildren.length; i < len; i++) {
                if (row >= rows.length)
                    continue;
                rowColumns = rows[row];
                if (!rowColumns)
                    continue;
                tmp = locChildren[i].height;
                rowHeight = ((rowHeight >= tmp || isNaN(tmp)) ? rowHeight : tmp);
                ++columnsOccupied;
                if (columnsOccupied >= rowColumns) {
                    height += rowHeight + 5;
                    columnsOccupied = 0;
                    rowHeight = 0;
                    ++row;
                }
            }
        }
        var winSize = cc.director.getWinSize();
        row = 0;
        rowHeight = 0;
        rowColumns = 0;
        var w = 0.0;
        var x = 0.0;
        var y = (height / 2);
        if (locChildren && locChildren.length > 0) {
            for (i = 0, len = locChildren.length; i < len; i++) {
                var child = locChildren[i];
                if (rowColumns === 0) {
                    rowColumns = rows[row];
                    w = winSize.width / (1 + rowColumns);
                    x = w;
                }
                tmp = child._getHeight();
                rowHeight = ((rowHeight >= tmp || isNaN(tmp)) ? rowHeight : tmp);
                child.setPosition(x - winSize.width / 2, y - tmp / 2);
                x += w;
                ++columnsOccupied;
                if (columnsOccupied >= rowColumns) {
                    y -= rowHeight + 5;
                    columnsOccupied = 0;
                    rowColumns = 0;
                    rowHeight = 0;
                    ++row;
                }
            }
        }
    },
    alignItemsInRows: function () {
        if ((arguments.length > 0) && (arguments[arguments.length - 1] == null))
            cc.log("parameters should not be ending with null in Javascript");
        var columns = [], i;
        for (i = 0; i < arguments.length; i++) {
            columns.push(arguments[i]);
        }
        var columnWidths = [];
        var columnHeights = [];
        var width = -10;
        var columnHeight = -5;
        var column = 0;
        var columnWidth = 0;
        var rowsOccupied = 0;
        var columnRows, child, len, tmp;
        var locChildren = this._children;
        if (locChildren && locChildren.length > 0) {
            for (i = 0, len = locChildren.length; i < len; i++) {
                child = locChildren[i];
                if (column >= columns.length)
                    continue;
                columnRows = columns[column];
                if (!columnRows)
                    continue;
                tmp = child.width;
                columnWidth = ((columnWidth >= tmp || isNaN(tmp)) ? columnWidth : tmp);
                columnHeight += (child.height + 5);
                ++rowsOccupied;
                if (rowsOccupied >= columnRows) {
                    columnWidths.push(columnWidth);
                    columnHeights.push(columnHeight);
                    width += columnWidth + 10;
                    rowsOccupied = 0;
                    columnWidth = 0;
                    columnHeight = -5;
                    ++column;
                }
            }
        }
        var winSize = cc.director.getWinSize();
        column = 0;
        columnWidth = 0;
        columnRows = 0;
        var x = -width / 2;
        var y = 0.0;
        if (locChildren && locChildren.length > 0) {
            for (i = 0, len = locChildren.length; i < len; i++) {
                child = locChildren[i];
                if (columnRows === 0) {
                    columnRows = columns[column];
                    y = columnHeights[column];
                }
                tmp = child._getWidth();
                columnWidth = ((columnWidth >= tmp || isNaN(tmp)) ? columnWidth : tmp);
                child.setPosition(x + columnWidths[column] / 2, y - winSize.height / 2);
                y -= child.height + 10;
                ++rowsOccupied;
                if (rowsOccupied >= columnRows) {
                    x += columnWidth + 5;
                    rowsOccupied = 0;
                    columnRows = 0;
                    columnWidth = 0;
                    ++column;
                }
            }
        }
    },
    removeChild: function (child, cleanup) {
        if (child == null)
            return;
        if (!(child instanceof cc.MenuItem)) {
            cc.log("cc.Menu.removeChild():Menu only supports MenuItem objects as children");
            return;
        }
        if (this._selectedItem === child)
            this._selectedItem = null;
        cc.Node.prototype.removeChild.call(this, child, cleanup);
    },
    _onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget();
        if (target._state !== cc.MENU_STATE_WAITING || !target._visible || !target.enabled)
            return false;
        for (var c = target.parent; c != null; c = c.parent) {
            if (!c.isVisible())
                return false;
        }
        target._selectedItem = target._itemForTouch(touch);
        if (target._selectedItem) {
            target._state = cc.MENU_STATE_TRACKING_TOUCH;
            target._selectedItem.selected();
            target._selectedItem.setNodeDirty();
            return true;
        }
        return false;
    },
    _onTouchEnded: function (touch, event) {
        var target = event.getCurrentTarget();
        if (target._state !== cc.MENU_STATE_TRACKING_TOUCH) {
            cc.log("cc.Menu.onTouchEnded(): invalid state");
            return;
        }
        if (target._selectedItem) {
            target._selectedItem.unselected();
            target._selectedItem.setNodeDirty();
            target._selectedItem.activate();
        }
        target._state = cc.MENU_STATE_WAITING;
    },
    _onTouchCancelled: function (touch, event) {
        var target = event.getCurrentTarget();
        if (target._state !== cc.MENU_STATE_TRACKING_TOUCH) {
            cc.log("cc.Menu.onTouchCancelled(): invalid state");
            return;
        }
        if (target._selectedItem) {
            target._selectedItem.unselected();
            target._selectedItem.setNodeDirty();
        }
        target._state = cc.MENU_STATE_WAITING;
    },
    _onTouchMoved: function (touch, event) {
        var target = event.getCurrentTarget();
        if (target._state !== cc.MENU_STATE_TRACKING_TOUCH) {
            cc.log("cc.Menu.onTouchMoved(): invalid state");
            return;
        }
        var currentItem = target._itemForTouch(touch);
        if (currentItem !== target._selectedItem) {
            if (target._selectedItem) {
                target._selectedItem.unselected();
                target._selectedItem.setNodeDirty();
            }
            target._selectedItem = currentItem;
            if (target._selectedItem) {
                target._selectedItem.selected();
                target._selectedItem.setNodeDirty();
            }
        }
    },
    onExit: function () {
        if (this._state === cc.MENU_STATE_TRACKING_TOUCH) {
            if (this._selectedItem) {
                this._selectedItem.unselected();
                this._selectedItem = null;
            }
            this._state = cc.MENU_STATE_WAITING;
        }
        cc.Node.prototype.onExit.call(this);
    },
    setOpacityModifyRGB: function (value) {
    },
    isOpacityModifyRGB: function () {
        return false;
    },
    _itemForTouch: function (touch) {
        var touchLocation = touch.getLocation();
        var itemChildren = this._children, locItemChild;
        if (itemChildren && itemChildren.length > 0) {
            for (var i = itemChildren.length - 1; i >= 0; i--) {
                locItemChild = itemChildren[i];
                if (locItemChild.isVisible() && locItemChild.isEnabled()) {
                    var local = locItemChild.convertToNodeSpace(touchLocation);
                    var r = locItemChild.rect();
                    r.x = 0;
                    r.y = 0;
                    if (cc.rectContainsPoint(r, local))
                        return locItemChild;
                }
            }
        }
        return null;
    }
});
var _p = cc.Menu.prototype;
_p.enabled;
cc.Menu.create = function (menuItems) {
    var argc = arguments.length;
    if ((argc > 0) && (arguments[argc - 1] == null))
        cc.log("parameters should not be ending with null in Javascript");
    var ret;
    if (argc === 0)
        ret = new cc.Menu();
    else if (argc === 1)
        ret = new cc.Menu(menuItems);
    else
        ret = new cc.Menu(Array.prototype.slice.call(arguments, 0));
    return ret;
};
