'use strict';

function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, wait);
  };
}

var editor = CodeMirror.fromTextArea(document.querySelector('#code textarea'), {
  lineNumbers: true,
  styleActiveLine: true,
  matchBrackets: true,
  theme: 'seti'
});

var output = document.getElementById('output');
editor.on('change', debounce(function (evt) {
  output.innerHTML = '';
  var hash = Date.now();
  if (window.location.hash.startsWith('#d3_')) {
    window.frames[0].location.href = '/demo/sendbox2.html?t=' + hash;
  } else if (window.location.hash.startsWith('#matterjs_')) {
    window.frames[0].location.href = '/demo/sendbox3.html?t=' + hash;
  } else if (window.location.hash.startsWith('#proton')) {
    window.frames[0].location.href = '/demo/sendbox4.html?t=' + hash;
  } else if (window.location.hash.startsWith('#curvejs')) {
    window.frames[0].location.href = '/demo/sendboxCurvejs.html?t=' + hash;
  } else {
    window.frames[0].location.href = '/demo/sendbox.html?t=' + hash;
  }
}));

var loadingState = document.querySelector('#paper .loading');
window.codeChange = function () {
  window.frames[0].exec(editor.getValue());

  // const scriptPath = frames[0].document.querySelector('script').src
  // let versionInfo = frames[0].spritejs.version
  // if(versionInfo){
  // versionInfo = versionInfo.replace(/-.*$/g, '')
  //   libVersion.innerHTML = 'v' + versionInfo
  //   libVersion.href = scriptPath
  // }
  loadingState.className = 'loading hide';
  setTimeout(function () {
    loadingState.style.display = 'none';
  }, 500);
  menuFade();
};

var clearBtn = document.querySelector('#console-panel a');
clearBtn.addEventListener('click', function (evt) {
  output.innerHTML = '';
});

var menu = document.getElementById('menu');
function menuFade() {
  menu.className = 'fade';
  menu.timer = setTimeout(function () {
    menu.className = 'hide';
  }, 500);
}

var menuWrap = menu.querySelector('.wrap');
var i = 0;
menu.addEventListener('mouseenter', function (evt) {
  clearTimeout(menu.timer);
  menu.className = '';
  menuWrap.className = 'wrap d' + ++i % 4;
});
menu.addEventListener('mouseleave', function (evt) {
  clearTimeout(menu.timer);
  menuFade();
});

var menuLinks = document.querySelectorAll('#menu a');
function updateMenuState() {
  menuLinks.forEach(function (link) {
    if (!link.parentElement.className) {
      if (link.hash === window.location.hash) {
        link.className = 'selected';
        var codefile = link.hash ? link.hash.slice(1) : 'index';
        loadingState.style.display = 'block';
        loadingState.className = 'loading';

        fetch('/demo/static/code/' + codefile + '.js').then(function (res) {
          return res.text();
        }).then(function (code) {
          editor.setValue(code);
        });
      } else {
        link.className = '';
      }
    }
  });
}

updateMenuState();

window.addEventListener('hashchange', function (evt) {
  // console.log(evt)
  updateMenuState();
});