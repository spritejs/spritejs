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
  src: 'https://p0.ssl.qhimg.com/t01303199a8936edb79.png',
}, {
  id: 'logo-lemon',
  src: 'https://p4.ssl.qhimg.com/t01b299bd5c2ef4b627.png',
}).then(function() {
  function getScale(width){
    return Math.min(1.5, width * 0.8 / 510)
  }

  const fglayer = scene.layer('fglayer')
  const logo = new Sprite('logo')
  logo.attr({
    anchor: [0.5, 1],
    pos: [layerWidth / 2, layerHeight - 30],
    scale: getScale(layerWidth),
  })
  fglayer.append(logo)
  
  const [left, top, width, height] = logo.renderRect

  const logoLemon = new Sprite('logo-lemon')
  logoLemon.attr({
    anchor: [0.5, 0.5],
    pos: [left + 0.458 * width, 30],
    scale: getScale(layerWidth),
    rotate: 90,
  })

  fglayer.append(logoLemon)
  logoLemon.animate([
    {y: 30},
    {y: top + 0.23 * height},
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
    const scale = getScale(layerWidth)
    logo.attr({
      pos: [layerWidth / 2, layerHeight - 30],
      scale,
    })
    const [left, top, width, height] = logo.renderRect
    logoLemon.attr({
      pos: [left + 0.458 * width, top + 0.23 * height],
      scale,
    })
  }

  window.onresize = updateLogo
})
</script>