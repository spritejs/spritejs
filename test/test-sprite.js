const fs = require('fs')
const GIFEncoder = require('gifencoder');

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
const width = 800, height = 600
const scene = new Scene('#test', width, height)
scene.setResolution(width * 2, height * 2)

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

// let canvas = await scene.snapshot()
// saveTo(canvas.toDataURL(), 'test3.png')

const encoder = new GIFEncoder(width, height)
// stream the results as they are available into myanimated.gif
encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'))

encoder.start()
encoder.setRepeat(0)   // 0 for repeat, -1 for no-repeat
encoder.setDelay(500)  // frame delay in ms
encoder.setQuality(10) // image quality. 10 is default.

for(let i = 0; i < 51; i++) {
  console.log(`recording... frame ${i + 1} of 51`)
  bird.textures = [`bird${i % 3 + 1}.png`]
  const canvas = await scene.snapshot(),
    ctx = canvas.getContext('2d')
  
    encoder.addFrame(ctx)
}
})()
