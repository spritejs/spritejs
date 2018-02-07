const { Image, document  } = require('../lib/node-context')

const img = new Image()
img.src = 'http://qiwoo.org/static/img/knowl.png'

img.onload = function() {
  console.log('loaded')
  const canvas = document.createElement('canvas')
  const canvas2 = canvas.cloneNode(true)
  const ctx = canvas.getContext('2d')
  const ctx2 = canvas2.getContext('2d')
  
  const fs = require('fs')
  
  // Write "Awesome!"
  ctx.font = '30px Impact'
  ctx.rotate(0.1)
  ctx.fillText('Awesome!', 50, 100)
  
  // Draw line under text
  var text = ctx.measureText('Awesome!')
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath()
  ctx.lineTo(50, 102)
  ctx.lineTo(50 + text.width, 102)
  ctx.stroke()
  
  ctx2.drawImage(img, 0, 0, 200, 200);
  ctx2.drawImage(canvas, 0, 0, 200, 200);
  
  function saveTo(canvas, file) {
    const imgData = canvas.toDataURL()
    return new Promise((resolve, reject) => {
      var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "")
      var dataBuffer = new Buffer(base64Data, 'base64')
      fs.writeFile(file, dataBuffer, function(err) {
        if(err){
          reject(err)
        }else{
          resolve("保存成功！")
        }
      })
    }) 
  }
  
  // canvas2.width = 0
  saveTo(canvas2, './test2.png')
  // console.log('<img src="' + canvas.toDataURL() + '" />')
}
