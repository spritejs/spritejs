const paper = spritejs.Paper2D('#paper'),
      fglayer = paper.layer('fglayer'),
      Label = spritejs.Label  

paper.setResolution(1600, 1200) 

const text1 = new Label('Hello World !\nSpriteJS.org')

text1.attr({
  anchor: [0.5, 0.5],
  pos: [800, 600],
  font: 'bold 48px Arial',
  color: '#fff',
})

text1.animate([
  {scale: 1.5, rotate: -30},
  {scale: 1, rotate: 0},
  {scale: 1.5, rotate: 30}
], {
  duration: 3000,
  iterations: Infinity,
  direction: 'alternate',
})

fglayer.appendChild(text1)

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})

