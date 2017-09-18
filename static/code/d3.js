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

loadScript(d3Url).then(function(){
  const paper = spritejs.Paper2D('#paper', 600, 400).setResolution(1200, 800)
  const Sprite = spritejs.Sprite,
        Path = spritejs.Path,
        Label = spritejs.Label,
        Axis = spritejs.Axis

  const dataset = [ 125 , 121 , 127 , 193 , 309 ];  //数据（表示矩形的宽度）

  //定义比例尺
  var linear = d3.scaleLinear()
      .domain([100, d3.max(dataset)])
      .range([0, 500]);

  //console.log(linear.domain(), dataset.map(linear))

  const colors = ['#f00', '#0a0', '#00a', '#3ca', '#7ac']

  let s = d3.select(paper).append('fglayer')

  let chart = s.selectAll('sprite')
    .data(dataset)
    .enter()
    .append('sprite')
    .attr('x', 300)
    .attr('y', function(d,i){
      return 200 + i * 55;
    })
    .attr('width', 0)
    .attr('height', 50)
    .attr('bgcolor', 'white')

  chart.transition()
       .duration(2000)
       .attr('width',function(d, i){
          return linear(d);
       })
       .attr('bgcolor', function(d, i){
          return colors[i]
       })

  s.append('axis')
   .attr('ticks', [100,200,300,400])
   .attr('axisScales', [linear])
   .attr('direction', 'bottom')
   .attr('pos', [270, 500])
   .attr('color', 'white')

  chart.on('click', data => {
    console.log(data, d3.event)
  })
})
