const d3Url = '//lib.baomitu.com/d3/4.10.2/d3.min.js',
      topojsonUrl = '//d3js.org/topojson.v1.min.js'

function loadScript(url) {
  let script = document.createElement('script')
  script.type = "text/javascript"
  script.src = url
  document.body.appendChild(script)

  return new Promise(resolve => {
    script.onload = () => {
      resolve()
    }
  }) 
}

Promise.all([loadScript(d3Url), loadScript(topojsonUrl)]).then(function(){

  var width = 1000,
      height = 750,
      centered;

  var projection = d3.geoAlbersUsa()
      .scale(1070)
      .translate([width / 2, height / 2]);

  var path = d3.geoPath()
      .projection(projection);

  const paper = spritejs.Paper2D('#paper').setResolution(width, height)

  const layer = paper.layer('fglayer', {
    handleEvent: true
  })

  d3.json("/static/data/us.json", function(error, us) {
    if (error) throw error

    d3.select(layer).selectAll('path')
      .data(topojson.feature(us, us.objects.states).features)
      .enter().append('path')
      .attr('d', path)
      .attr('renderMode', 'fill')
      .attr('fillColor', '#666')
      .on("click", d => {
        const paths = d3.event.target.findPath(d3.event.offsetX, d3.event.offsetY)
        
        if(paths.length) {
          clicked(d)
        }
      })
  });

  function clicked(d) {

    // If the click was on the centered state or the background, re-center.
    // Otherwise, center the clicked-on state.
    let translate = [0, 0],
        centroid = [0, 0]

    if (d && centered !== d) {
      centroid = path.centroid(d)
      translate = projection.translate()
    }

    d3.select(layer).selectAll('path')
      .transition()
      .duration(750)
      .attr('pos', [translate[0] - centroid[0], 
        translate[1] - centroid[1]])
  }
})

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})


