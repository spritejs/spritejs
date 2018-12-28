function debounce(fn, wait = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

const editor = CodeMirror.fromTextArea(document.querySelector('#code textarea'), {
  lineNumbers: true,
  styleActiveLine: true,
  matchBrackets: true,
  theme: 'seti',
});

const output = document.getElementById('output');
editor.on('change', debounce((evt) => {
  output.innerHTML = '';
  const hash = Date.now();
  if(window.location.hash.startsWith('#d3_')) {
    window.frames[0].location.href = `/demo/sendbox2.html?t=${hash}`;
  } else if(window.location.hash.startsWith('#matterjs_')) {
    window.frames[0].location.href = `/demo/sendbox3.html?t=${hash}`;
  } else if(window.location.hash.startsWith('#proton')) {
    window.frames[0].location.href = `/demo/sendbox4.html?t=${hash}`;
  } else if(window.location.hash.startsWith('#curvejs')) {
    window.frames[0].location.href = `/demo/sendboxCurvejs.html?t=${hash}`;
  } else {
    window.frames[0].location.href = `/demo/sendbox.html?t=${hash}`;
  }
}));

const loadingState = document.querySelector('#paper .loading');
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
  setTimeout(() => {
    loadingState.style.display = 'none';
  }, 500);
  menuFade();
};

const clearBtn = document.querySelector('#console-panel a');
clearBtn.addEventListener('click', (evt) => {
  output.innerHTML = '';
});

const menu = document.getElementById('menu');
function menuFade() {
  menu.className = 'fade';
  menu.timer = setTimeout(() => {
    menu.className = 'hide';
  }, 500);
}

const menuWrap = menu.querySelector('.wrap');
let i = 0;
menu.addEventListener('mouseenter', (evt) => {
  clearTimeout(menu.timer);
  menu.className = '';
  menuWrap.className = `wrap d${++i % 4}`;
});
menu.addEventListener('mouseleave', (evt) => {
  clearTimeout(menu.timer);
  menuFade();
});

const menuLinks = document.querySelectorAll('#menu a');
function updateMenuState() {
  menuLinks.forEach((link) => {
    if(!link.parentElement.className) {
      if(link.hash === window.location.hash) {
        link.className = 'selected';
        const codefile = link.hash ? link.hash.slice(1) : 'index';
        loadingState.style.display = 'block';
        loadingState.className = 'loading';

        fetch(`/demo/static/code/${codefile}.js`)
          .then(res => res.text())
          .then((code) => {
            editor.setValue(code);
          });
      } else {
        link.className = '';
      }
    }
  });
}

updateMenuState();

window.addEventListener('hashchange', (evt) => {
  // console.log(evt)
  updateMenuState();
});
