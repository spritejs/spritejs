(function(global){'use strict'

  function debounce(fn, wait = 300){
    let timer = null
    return function(...args){
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }

  const editor = CodeMirror.fromTextArea(document.querySelector("#code textarea"), {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: "seti",
  });
  editor.on('change', debounce(evt => {    
    output.innerHTML = ''
    if(location.hash === '#d3-6') {
      frames[0].location.href = '/sendbox2.html'
    } else {
      frames[0].location.href = '/sendbox.html'
    }
  }))

  global.codeChange = function(){
    frames[0].exec(editor.getValue())

    const scriptPath = frames[0].document.querySelector('script').src
    const versionInfo = frames[0].spritejs.version
    if(versionInfo){
      libVersion.innerHTML = 'v' + versionInfo
      libVersion.href = scriptPath
    }

    menuFade()
  }

  const clearBtn = document.querySelector('#console-panel a')
  clearBtn.addEventListener('click', evt => {
    output.innerHTML = ''
  })

  function menuFade(){
    menu.className = 'fade'
    menu.timer = setTimeout(() => {
      menu.className = 'hide'
    }, 500)
  }

  menu.addEventListener('mouseover', evt => {
    clearTimeout(menu.timer)
    menu.className = ''
  })
  menu.addEventListener('mouseout', evt => {
    clearTimeout(menu.timer)
    menuFade()
  })

  const menuLinks = document.querySelectorAll('#menu a')
  function updateMenuState(){
    menuLinks.forEach(link => {
      if(!link.parentElement.className){
        if(link.hash === location.hash){
          link.className = 'selected'
          const codefile = link.hash ? link.hash.slice(1) : 'index'

          fetch(`/static/code/${codefile}.js`)
            .then(res => res.text())
            .then(code => {
              editor.setValue(code)
            })
        } else {
          link.className = ''
        }
      }
    })
  }

  updateMenuState()

  global.addEventListener('hashchange', evt => {
    //console.log(evt)
    updateMenuState()
  })

})(this)

