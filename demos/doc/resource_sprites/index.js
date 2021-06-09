const {Scene, Sprite, Group} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  const earthPNG = 'https://p3.ssl.qhimg.com/t01806718065fe97c65.png',
    earthJSON = 'https://s3.ssl.qhres2.com/static/d479c28f553c6cff.json';

  await scene.preload([earthPNG, earthJSON]);

  const group = new Group();
  group.attr({
    pos: [455, 215],
  });

  const earth = new Sprite();
  earth.attr({
    texture: 'earth_blue.png',
    pos: [115, 115],
    anchor: [0.5, 0.5],
  });
  const earthShadow = new Sprite();
  earthShadow.attr({
    texture: 'earth_shadow2.png',
    pos: [0, 0],
  });

  group.append(earth, earthShadow);
  layer.append(group);

  earth.animate([
    {rotate: 0, texture: 'earth_blue.png'},
    {rotate: 360, texture: 'earth_yellow.png'},
    {rotate: 720, texture: 'earth_green.png'},
    {rotate: 1080, texture: 'earth_white.png'},
    {rotate: 1440, texture: 'earth_blue.png'},
  ], {
    duration: 20000,
    iterations: Infinity,
  });
}());