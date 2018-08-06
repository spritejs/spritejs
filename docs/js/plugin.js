'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var level = 0;
function parseApi(content) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  level++;
  var pattern = /([+-.])\s*(attribute|property|get|function|async)\s*(\w+)(?:\((.*?)\))?(?::((?:\w|\|)+))?\s(.*?)\n([\s\S]*?)\n---/img;
  var matched = pattern.exec(content);
  var api = {
    attributes: [],
    properties: [],
    methods: []
  };

  var _loop = function _loop() {
    var _matched$map = matched.map(function (m) {
      return m && m.trim();
    }),
        _matched$map2 = _slicedToArray(_matched$map, 8),
        text = _matched$map2[0],
        access = _matched$map2[1],
        type = _matched$map2[2],
        name = _matched$map2[3],
        params = _matched$map2[4],
        returnType = _matched$map2[5],
        returnComment = _matched$map2[6],
        details = _matched$map2[7];

    if (params) {
      params = params.split(/\s*,\s*/g).map(function (p) {
        if (p.startsWith('...')) {
          p = p + ':Array';
        }
        return p.split(/\s*:\s*/);
      });
      params.forEach(function (param) {
        var pattern = new RegExp('\\* ' + param[0] + ' - (.+?)?(\n|$)', 'im');

        var m = details.match(pattern);

        if (m) {
          details = details.replace(pattern, '');
          param.push(m[1]);
        } else {
          param.push('&nbsp;');
        }
        if (param[1].endsWith(' optional')) {
          param.push('No');
          param[1] = param[1].replace(' optional', '');
        } else {
          var _matched = param[1].match(/ = (.+)/);
          if (_matched) {
            param.push('No');
            param.push(_matched[1]);
            param[1] = param[1].replace(_matched[0], '');
          } else {
            param.push('Yes');
          }
        }
      });
    } else {
      params = [];
    }

    if (returnType) {
      returnType = returnType.replace(/\|/g, '<span class="or">or</span>');
    }

    if (access === '+') {
      access = 'public';
    } else if (access === '.') {
      access = 'static';
    } else {
      access = 'private';
    }
    var inheritance = base || '';
    var item = { text: text, inheritance: inheritance, access: access, type: type, name: name, params: params, returnType: returnType, returnComment: returnComment, details: details, level: level };

    if (type === 'attribute') {
      api.attributes.push(item);
    } else if (type === 'function' || type === 'async') {
      api.methods.push(item);
    } else {
      api.properties.push(item);
    }

    matched = pattern.exec(content);
  };

  while (matched) {
    _loop();
  }

  return { api: api, text: content.replace(pattern, '') };
}

function generateHtml(context, searchIndex) {
  var api = context.api,
      text = context.text;

  text = format('attributes', api.attributes, text);
  text = format('properties', api.properties, text);
  text = format('methods', api.methods, text);
  createSearchIndex('attributes', api.attributes, searchIndex);
  createSearchIndex('properties', api.properties, searchIndex);
  createSearchIndex('methods', api.methods, searchIndex);
  return text;
}

function createSearchIndex(region, list, searchIndex) {
  if (region === 'attributes') {
    var sIdx = {};
    sIdx.slug = '?id=attributes';
    sIdx.body = list.map(function (item) {
      return item.text;
    }).join('');
    sIdx.title = 'attributes';
    searchIndex.push(sIdx);
    return searchIndex;
  }
  if (region === 'properties') {
    list.forEach(function (_ref) {
      var text = _ref.text,
          inheritance = _ref.inheritance,
          access = _ref.access,
          type = _ref.type,
          name = _ref.name,
          params = _ref.params,
          returnType = _ref.returnType,
          returnComment = _ref.returnComment,
          details = _ref.details,
          level = _ref.level;

      var sIdx = {};
      // privatereadonly-boundrect-array-basesprite
      sIdx.slug = ('?id=' + access + (type === 'get' ? 'readonly' : '') + '-' + name + '-' + returnType + '-' + inheritance).toLowerCase();
      sIdx.body = text;
      sIdx.title = name;
      searchIndex.push(sIdx);
    });
    return searchIndex;
  }
  if (region === 'methods') {
    list.forEach(function (_ref2) {
      var text = _ref2.text,
          inheritance = _ref2.inheritance,
          access = _ref2.access,
          type = _ref2.type,
          name = _ref2.name,
          params = _ref2.params,
          returnType = _ref2.returnType,
          returnComment = _ref2.returnComment,
          details = _ref2.details,
          level = _ref2.level;

      var sIdx = {};
      var paramList = '';
      if (params.length) {
        /* eslint-disable no-confusing-arrow */
        paramList = '' + params.map(function (a) {
          return a[4] ? a[0] + ' = ' + a[4] : a[0];
        }).join(', ');
        /* eslint-enable no-confusing-arrow */
      }
      sIdx.slug = ('?id=' + access + '-' + name + paramList.replace(/\s*[,=]\s*/g, '-') + '-' + inheritance).toLowerCase();
      sIdx.body = text;
      sIdx.title = name;
      searchIndex.push(sIdx);
    });
    return searchIndex;
  }
}

function format(region, list, content) {
  if (!list.length) {
    return content;
  }
  list.sort(function (a, b) {
    if (a.name === 'constructor' && b.name !== 'constructor') {
      return -1;
    }if (b.name === 'constructor' && a.name !== 'constructor') {
      return 1;
    }
    if (a.access === 'private' && b.access === 'public') {
      return -1;
    }if (a.access === 'public' && b.access === 'private') {
      return 1;
    }if (a.name > b.name) {
      return 1;
    }if (a.name < b.name) {
      return -1;
    }if (a.level !== b.level) {
      return a.level - b.level < 0 ? -1 : 1;
    }if (a.params.join('') > b.params.join('')) {
      return 1;
    }
    return -1;
  });
  for (var i = list.length - 1; i > 0; i--) {
    if (list[i - 1].name === list[i].name && (list[i - 1].level !== list[i].level || list[i - 1].params.join('') === list[i].params.join(''))) {
      list.splice(i, 1);
      if (!list[i - 1].inheritance) {
        list[i - 1].inheritance = 'override';
      }
    }
  }
  var text = void 0;
  /* eslint-disable */
  if (region === 'attributes') {
    text = '\n## ' + region + '\n\n<table>\n    <thead>\n      <tr>\n        <th> Name </th><th> Type </th><th> Default Value </th><th> Description </th>\n      </tr>\n    </thead>\n    <tbody>\n    ' + (list = list.map(function (item) {
      var access = item.access,
          inheritance = item.inheritance,
          type = item.type,
          name = item.name,
          params = item.params,
          returnType = item.returnType,
          returnComment = item.returnComment,
          details = item.details;

      var defaultPattern = /\* default: (.*)/im;
      var matched = details.match(defaultPattern);
      var defaultValue = '';
      if (matched) {
        defaultValue = matched[1];
        details = details.replace(defaultPattern, '');
      }
      return '<tr><td class="' + access + '" title="' + access + ' ' + name + '"> ' + name + ' </td><td> ' + returnType + ' </td><td> ' + defaultValue + ' </td><td> ' + details + ' </td></tr>';
    }).join('')) + '\n    </tbody>\n</table>\n';
  } else {
    list = list.map(function (item) {
      var access = item.access,
          inheritance = item.inheritance,
          type = item.type,
          name = item.name,
          params = item.params,
          returnType = item.returnType,
          returnComment = item.returnComment,
          details = item.details;

      var paramList = '( )',
          paramTable = '';

      if (params.length) {
        paramList = '(' + params.map(function (a) {
          return a[4] ? a[0] + ' = ' + a[4] : a[0];
        }).join(', ') + ')';
        paramTable = '\n* **Paramaters:**\n\n| Name | Type | Required | Description |\n| --- | --- | --- | --- |\n' + params.map(function (param) {
          return '| ' + param[0].replace(/^\.\.\./, '') + ' | ' + param[1].replace(/\|/g, '<span class="or">or</span>') + ' | ' + param[3] + ' | ' + param[2] + ' |\n';
        }).join('') + '\n';
      }
      return '\n### ' + (type !== 'attribute' ? '<span class="access">' + access + '</span>' : '') + (type === 'get' ? '<span class="readonly">readonly</span>' : '') + (type === 'async' ? '<span class="async">async</span>' : '') + ' ' + name + (type === 'function' || type === 'async' ? paramList : returnType ? ': ' + returnType : '') + ' <span class="inheritance">' + inheritance + '</span>\n\n' + (type === 'function' || type === 'async' ? paramTable : '') + '\n\n\n' + (type === 'function' || type === 'async' ? '* **Returns:** ' + returnType + (returnComment ? ' - ' : '') + returnComment : '') + '\n\n' + details + '\n\n';
    });
    text = '\n## ' + region + '\n\n' + list.join('\n\n') + '\n\n';
  }
  /* eslint-enable */
  var pattern = new RegExp('<!--' + region + '-->', 'img');
  if (pattern.test(content)) {
    content = content.replace(pattern, text);
  } else {
    content += text;
  }
  return content;
}

function getBase(base, res) {
  return fetch('/api/' + base + '.md').then(function (res) {
    return res.text();
  }).then(function (baseContent) {
    var _res$api$attributes, _res$api$properties, _res$api$methods;

    var r = parseApi(baseContent, base);

    (_res$api$attributes = res.api.attributes).push.apply(_res$api$attributes, _toConsumableArray(r.api.attributes));
    (_res$api$properties = res.api.properties).push.apply(_res$api$properties, _toConsumableArray(r.api.properties));
    (_res$api$methods = res.api.methods).push.apply(_res$api$methods, _toConsumableArray(r.api.methods));

    var basePattern = /\+ extends (\w+)/im;
    var extendList = baseContent.match(basePattern);
    if (extendList) {
      var _base = extendList[1].trim().toLowerCase();
      return getBase(_base, res);
    }

    return Promise.resolve(res);
  });
}

window.generateApiPlugin = function (hook, vm) {
  var searchIndex = [];
  hook.beforeEach(function (content, next) {
    if (vm.route.path.startsWith('/api/')) {
      var basePattern = /\+ extends (\w+)/im;
      var extendList = content.match(basePattern);
      content = content.replace(basePattern, '<span class="extends">extends</span> $1');
      var res = parseApi(content);

      if (extendList) {
        var base = extendList[1].trim().toLowerCase();
        getBase(base, res).then(function (res) {
          next(generateHtml(res, searchIndex));
        });
      } else {
        next(generateHtml(res, searchIndex));
      }
    } else {
      var externalJS = content.match(/\n<script src="\/js\/(.*?)">/);
      if (externalJS) {
        var jsFile = '/src/' + externalJS[1];
        var matched = content.match(/<!-- demo: .*? -->/g);
        if (matched) {
          axios.get(jsFile).then(function (res) {
            var jsContent = res.data;
            matched.forEach(function (mark) {
              var jsMark = mark.replace(/<!--/, '/*').replace(/-->/, '*/');
              var parts = jsContent.split(jsMark);
              if (parts[1]) {
                var m = parts[1].match(/\n;?\((async )?function \(\) \{\n([\s\S]*?)\}\(\)\)/im);
                if (m && m[2]) {
                  if (!m[1]) {
                    var code = m[2].replace(/^ {2}/mg, '');
                    content = content.replace(mark, '```js\n' + code + '\n```');
                  } else {
                    content = content.replace(mark, '```js\n' + m[0].slice(1) + '\n```');
                  }
                }
              }
            });
            next(content);
          });
        } else {
          next(content);
        }
      } else {
        next(content);
      }
    }
  });
  hook.afterEach(function (content, next) {
    var path = vm.route.path;
    var pageId = path.replace(/.*\//g, '') || 'index';

    if (path.startsWith('/api/')) {
      var searchIndexData = JSON.parse(localStorage.getItem('docsify.search.index'));
      if (searchIndexData) {
        searchIndexData[path] = searchIndexData[path] || {};
        searchIndex.forEach(function (_ref3, i) {
          var slug = _ref3.slug,
              body = _ref3.body,
              title = _ref3.title;

          slug = '#' + path + slug;
          searchIndexData[path][slug] = { slug: slug, body: body, title: title };
        });
        localStorage.setItem('docsify.search.index', JSON.stringify(searchIndexData));
      }
      next('<div id="api-doc">' + content + '</div>');
    } else {
      var _content$split = content.split('<script>'),
          _content$split2 = _slicedToArray(_content$split, 2),
          doc = _content$split2[0],
          js = _content$split2[1];

      if (!js) {
        js = '';
      } else {
        js = '<script>' + js;
      }
      next('<div id="page-' + pageId + '">' + doc + '</div>' + js);
    }
  });
};