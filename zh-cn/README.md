<style>
  main {
    display: none;
  }
</style>
<script>
document.querySelector('.cover.show').style.background = 'linear-gradient(to left bottom, hsl(101, 100%, 85%) 0%,hsl(21, 100%, 85%) 100%)'

const {Scene, Sprite} = spritejs
const scene = new Scene('#coverpage')
let [layerWidth, layerHeight] = scene.viewport.map(function(i){return i * 2})
scene.resolution = [layerWidth, layerHeight]

scene.preload({
  id: 'logo',
  src: 'https://p5.ssl.qhimg.com/t01a738735f0acfa768.png',
}, {
  id: 'logo-lemon',
  src: 'https://p3.ssl.qhimg.com/t0147c02fa0b9fb9bb5.png',
}).then(function() {
  const fglayer = scene.layer('fglayer')
  const logo = new Sprite('logo')
  logo.attr({
    anchor: [0.5, 0.5],
    pos: [layerWidth / 2, layerHeight - 150],
    scale: 1.0,
  })
  fglayer.append(logo)

  const logoLemon = new Sprite('logo-lemon')
  logoLemon.attr({
    anchor: [0.5, 0.5],
    pos: [layerWidth / 2 - 36, 30],
    scale: 1.0,
    rotate: 90,
  })
  fglayer.append(logoLemon)
  logoLemon.animate([
    {y: 30},
    {y: layerHeight - 196},
  ], {
    duration: 800,
    fill: 'forwards',
    easing: 'ease-in',
  }).finished
  .then(function(){
    logoLemon.animate([
      {rotate: 90},
      {rotate: 360},
    ], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in',      
    })
  })

  function updateLogo() {
    scene.viewport = ['auto', 'auto']
    const [layerWidth, layerHeight] = scene.viewport.map(function(i){return i * 2})
    scene.resolution = [layerWidth, layerHeight]
    logo.attr('pos', [layerWidth / 2, layerHeight - 150])
    logoLemon.attr('x', layerWidth / 2 - 36)
  }

  window.onresize = updateLogo
})
</script>