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
    //console.log(evt.getValue())
    sandbox.src = '/sendbox.html'
    output.innerHTML = ''
    sandbox.onload = function(){
      frames[0].exec(evt.getValue())

      const scriptPath = frames[0].document.querySelector('script').src
      const versionInfo = scriptPath.match(/spritejs-(\d+\.\d+\.\d+)/)
      if(versionInfo){
        libVersion.innerHTML = 'v' + versionInfo[1]
        libVersion.href = scriptPath
      }

      menuFade()
    }
  }))
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

