(function(global){'use strict'
  function exec(code){
    const script = document.createElement('script')
    script.innerHTML = code
    document.body.appendChild(script)
  }

  function makeOutput(logger, level="info"){
    const output = parent.document.getElementById('output')
    return (...args) => {
      output.innerHTML += `<div class="${level}">&gt; ${args.map(arg => {
        try {
          return JSON.stringify(arg)
        } catch(ex) {
          return arg
        }
      }).join(' ')}</div>`

      return logger(...args)
    }
  }

  console.log = makeOutput(console.log)
  console.warn = makeOutput(console.warn, 'warn')
  console.error = makeOutput(console.error, 'error')

  global.exec = exec
})(this)
