const fs = require('fs')

function saveTo(base64Data, file) {
  return new Promise((resolve, reject) => {
    base64Data = base64Data.replace(/^data:image\/\w+;base64,/, "")
    const dataBuffer = new Buffer(base64Data, 'base64')
    fs.writeFile(file, dataBuffer, function(err) {
      if(err){
        reject(err)
      }else{
        resolve("保存成功！")
      }
    })
  }) 
}

const {Scene, Layer, Sprite, Label} = require('../lib')
const scene = new Scene('#test')

scene.setResolution(1600, 1200)

;(async function(){

const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

await scene.preload(
  [birdsRes, birdsJsonUrl]   
) 

const layer = scene.layer('fglayer', {handleEvent: false})

const sprite = new Sprite()
sprite.attr({
  pos: [100, 100],
  size: [100, 100],
  bgcolor: 'red'
})

const bird = new Sprite('bird1.png') 

bird.attr({
  anchor: [0.5, 0.5],
  pos: [800, 600],
  transform: {
    rotate: 0,
  }
})

layer.append(sprite, bird)

const text1 = new Label('中国')

text1.attr({
  anchor: "0.5",
  pos: [400, 300],
  font: '64px Arial',
  color: '#fff',
  bgcolor: 'blue',
  renderMode: 'stroke',
  lineHeight: 200,
  scale: [scene.distortion, 1]
})

layer.append(text1)

await layer.prepareRender()
let base64Data = await scene.snapshot()
saveTo(base64Data, 'test3.png')
})()
