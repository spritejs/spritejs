const paper = spritejs.Paper2D('#paper').setResolution(1600, 1200)

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
  
  const layer = d3.select(paper).append('fglayer')
  
  layer.append('label')
        .attr('pos', [1100, 150])
        .attr('name', 'region')
        .attr('font', '42px Arial')
        .attr('text', '中国')
        .attr('color', '#fff')

  d3.json('/static/data/city.json', (err, data) => {
    if(err) throw new Error(err)

    const root = d3.hierarchy(data)
        .sum(function(d) { return 1 })
        .sort(function(a, b) { return b.value - a.value; });

    const pack = d3.pack()
              .size([1000, 1000])
              .padding(3)

    const nodes = pack(root)

    const color = d3.scaleSequential(d3.interpolateMagma)
          .domain([-4, 4]);

    const s = layer.selectAll({label: s => s.name !== 'region'})
         .data(nodes.descendants())
         .enter()
         .append('label')
         .attr('translate', [300, 150])
         .attr('anchor', 0.5)
         .attr('pos', d => {
            const x = Math.round(d.x),
                  y = Math.round(d.y)

            return [x, y] 
         })
         .attr('size', d => {
            const r = Math.round(d.r)
            return [2 * r, 2 * r]
         })
         .attr('bgcolor', d => color(d.depth))
         .attr('borderRadius', d => {
            return d.r
         })
         .attr('font', d => {
            return `${16 + Math.round(10 * Math.log2(d.value))}px Arial`
         })
         .attr('lineHeight', d => {
            return Math.round(2 * d.r)
         })
         .attr('textAlign', 'center')
         .attr('text', d => {
            if(!d.children) return d.data.name
            else return ''
         })
         .on('mousemove', d => {
            d3.event.stopDispatch()
            
            const {offsetX, offsetY} = d3.event,
                  r = Math.round(d.r)

            if(offsetX ** 2 + offsetY ** 2 < r ** 2) {
              //console.log(d.data.name)
              layer.selectAll({label: s => s.name === 'region'})
                  .attr('text', d.data.name)
            }
         })
         .on('mouseenter', d => {
            d3.event.target.attr('border', [3, 'red'])
         })
         .on('mouseleave', d => {
            d3.event.target.attr('border', [0, 'transparent'])
         })
  })
})

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})
