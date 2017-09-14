const paper = spritejs.Paper2D('#paper'),
      fglayer = paper.layer('fglayer'),
      Label = spritejs.Label  

paper.setResolution(1600, 1200) 

const button = new Label('Click Me')

button.attr({
  anchor: [0.5, 0.5],
  pos: [800, 600],
  font: 'bold 48px Arial',
  color: '#fff',
  padding: 15,
  border: [1, '#fff'],
  borderRadius: 15,
})

fglayer.appendChild(button)

button.on('mouseenter', evt => {
  button.attr({
    bgcolor: 'rgba(233,233,233,0.1)',
    color: '#f70',
  })
})

button.on('mousedown', evt => {
  button.attr({
    bgcolor: 'transparent',
  })
})

button.on('mouseup', evt => {
  button.attr({
    bgcolor: 'rgba(233,233,233,0.1)',
  })
  console.log('button clicked!')
})

button.on('mouseleave', evt => {
  button.attr({
    bgcolor: 'transparent',
    color: '#fff',
  })
})

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})
