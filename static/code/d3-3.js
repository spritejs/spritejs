const d3Url = 'http://lib.baomitu.com/d3/4.10.2/d3.min.js'

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

const paper = spritejs.Paper2D('#paper').setResolution(800, 600)

loadScript(d3Url).then(function(){

  const layer = d3.select(paper).append('fglayer')

  const width  = 1330;
  const height = 520;

  const projection = d3.geoMercator()
    .center([107, 38])
    .scale(width / 2 - 40)
    .translate([width / 4 + 80, height / 2]);

  const path = d3.geoPath().projection(projection);

  d3.json('/static/data/china.json', (err, data) => {
    if(err) throw new Error(err)

    //console.log(data, path)
    let selectedTarget = null

    layer.selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('color', 'black')
        .attr('lineWidth', 1)
        .attr('d', path)
        .attr('renderMode', 'fill')
        .attr('fillColor', '#d1eeee')
        .on('click', d => {
          if(d3.event.pointInPath){
            console.log(d.properties.name)
          }
        })
        .on('mousemove', d => {
          const event = d3.event
          if(event.target !== selectedTarget){
            if(event.pointInPath){
              if(selectedTarget){
                selectedTarget.attr('fillColor', '#d1eeee')
              }
              selectedTarget = event.target
              event.target.attr('fillColor', '#c73')
            }
          }
        })
  })
})

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})
