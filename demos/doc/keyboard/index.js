const {Scene, Label} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();
const keys = [
  'qwertyuiop',
  'asdfghjkl',
  'zxcvbnm',
];
for(let i = 0; i < 3; i++) {
  const keyButtons = [...keys[i]];
  for(let j = 0; j < keyButtons.length; j++) {
    const key = new Label({
      id: keyButtons[j],
      text: keyButtons[j],
      pos: [250 + j * 80, 200 + i * 100],
      font: '42px Arial',
      borderWidth: 4,
      borderColor: 'black',
      size: [50, 50],
      anchor: [0.5, 0.5],
      textAlign: 'center',
      lineHeight: 50,
    });

    layer.append(key);
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const button = scene.getElementById(key);
  button.attr({
    bgcolor: 'grey',
    fillColor: 'white',
  });
});

document.addEventListener('keyup', (event) => {
  const key = event.key;
  const button = scene.getElementById(key);
  button.attr({
    bgcolor: '',
    fillColor: 'black',
  });
});