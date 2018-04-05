const paper = spritejs.Paper2D('#paper'),
      bglayer = paper.layer('bglayer'),
      fglayer = paper.layer('fglayer'),
      Sprite = spritejs.Sprite  

paper.setResolution(1600, 1200)

const s1 = new Sprite()
s1.attr({
  anchor: [0.5, 0.5],
  pos: [400, 400],
  size: [200, 200],
  border: [6, '#77cc33'],
  borderRadius: 5,
  bgcolor: '#fff',
})

const s2 = new Sprite()
s2.attr({
  anchor: [0.5, 0.5],
  pos: [400, 400],
  size: [200, 200],
  border: [6, '#77cc33'],
  borderRadius: 5,
  rotate: 45,
  bgcolor: 'rgba(255, 133, 77, 0.5)',
  rotate: 45,
})

s1.on('click', evt => {
  console.log('click s1')
  evt.stopDispatch()
})

s2.on('click', evt => {
  console.log('click s2')
})

fglayer.append(s1, s2)

const s3 = new Sprite()
s3.attr({
  anchor: [0, 0.5],
  pos: [100, 400],
  size: [800, 100],
  border: [6, '#73c'],
  bgcolor: '#007',
  zIndex: 10,
})

s3.on('click', evt => {
  console.log('click s3')
})

const s4 = new Sprite()
s4.attr({
  anchor: [0, 0.5],
  pos: [600, 700],
  size: [200, 100],
  border: [6, '#c37'],
  bgcolor: '#007',
  transform: {
    skew: [30, 0],
    rotate: 90,
  }
})

bglayer.append(s3, s4)

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})
