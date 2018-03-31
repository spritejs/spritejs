const paper = spritejs.Paper2D('#paper'),
      fglayer = paper.layer('fglayer'),
      Sprite = spritejs.Sprite,
      Group = spritejs.Group

paper.setResolution(800, 600) 

const s1 = new Sprite()
s1.attr({
  pos: [100, 100],
  size: [50, 50],
  bgcolor: 'red',
  rotate: 90,
})

const s2 = new Sprite()
s2.attr({
  pos: [100, 100],
  size: [50, 50],
  bgcolor: 'green',
  rotate: 180,
})

const s3 = new Sprite()
s3.attr({
  pos: [100, 100],
  size: [50, 50],
  bgcolor: 'blue',
})

const group = new Group()

group.append(s1, s2, s3)

fglayer.append(group)

group.attr({
  anchor: 0.5,
  pos: [200, 200],
  rotate: 0, 
  border: [1, 'red'],
})

s1.on('click', evt => {
  console.log(evt)
})

group.animate([
  {rotate: 360}
], {
  duration: 2000,
  iterations: Infinity,
  direction: 'reverse',
})

s1.animate([
  {rotate: 450}
], {
  duration: 1000,
  iterations: Infinity,
})

s2.animate([
  {rotate: 540}
], {
  duration: 1000,
  iterations: Infinity,
})

s3.animate([
  {rotate: 360}
], {
  duration: 1000,
  iterations: Infinity,
})


window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})
