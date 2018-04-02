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
  const fglayer = scene.layer('fglayer')
  
  const logo = new Sprite('../res/logo-nolemon.png')
  logo.attr({
    anchor: [0.5, 0.5],
    pos: [layerWidth / 2, layerHeight - 150],
    scale: 1.5,
  })
  fglayer.append(logo)

  const logoLemon = new Sprite('../res/logo-lemon.png')
  logoLemon.attr({
    anchor: [0.5, 0.5],
    pos: [layerWidth / 2 - 30, 30],
    scale: 1.5,
    rotate: 90,
  })
  fglayer.append(logoLemon)
  logoLemon.animate([
    {y: 30},
    {y: layerHeight - 202},
  ], {
    duration: 1000,
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
    logoLemon.attr('x', layerWidth / 2 - 30)
  }

  window.onresize = updateLogo
</script>