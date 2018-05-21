const birdsJsonUrl = 'https://s5.ssl.qhres.com/static/5f6911b7b91c88da.json'
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png'

// '#60b4f9'

const paper = new spritejs.Scene('#paper', {
    resolution: [800, 600],
    stickMode: 'width',
  }),
  Sprite = spritejs.Sprite

const box1 = new Sprite()
box1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  size: [212, 188],
  border: [10, 'red'],
  borderRadius: 25,
  bgcolor: '#7fc',
  padding: 10
})

box1.textures = [{
  src: birdsRes,
  srcRect: [2, 64, 86, 60],
  rect: [64, 64, 86, 60],
  filter: {
    dropShadow: [2, 2, 10, 'black'],
  }    
},{
  src: birdsRes,
  srcRect: [2, 2, 86, 60],
  rect: [2, 2, 86, 60],
  filter: {
    opacity: 0.5,
  }    
},{
  src: birdsRes,
  srcRect: [2, 126, 86, 60],
  rect: [126, 126, 86, 60] ,
}]

paper.layer().appendChild(box1)
