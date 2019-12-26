const {Scene, Path} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();
const imgUrl = 'https://p4.ssl.qhimg.com/t01423053c4cb748581.jpg';

const path = new Path({
  d: 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z',
  normalize: true,
  scale: 15,
  pos: [600, 300],
  fillColor: 'red',
  texture: imgUrl,
  textureRect: [0, 0, 48, 30],
  rotate: 15,
});

layer.append(path);