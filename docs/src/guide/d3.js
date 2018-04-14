const {Scene} = spritejs

/* demo: d3-linear */
;(function () {
  const scene = new Scene('#d3-linear', {viewport: ['auto', 'auto'], resolution: [1540, 600]})

  const dataset = [125, 121, 127, 193, 309]

  const linear = d3.scaleLinear()
    .domain([100, d3.max(dataset)])
    .range([0, 500])

  const colors = ['#f00', '#0a0', '#00a', '#3ca', '#7ac']

  const s = d3.select(scene).append('fglayer')

  const chart = s.selectAll('sprite')
    .data(dataset)
    .enter()
    .append('sprite')
    .attr('x', 300)
    .attr('y', (d, i) => {
      return 200 + i * 55
    })
    .attr('width', 0)
    .attr('height', 50)
    .attr('bgcolor', 'black')

  chart
    .transition()
    .duration(2000)
    .attr('width', (d, i) => {
      return linear(d)
    })
    .attr('bgcolor', (d, i) => {
      return colors[i]
    })

  s.append('axis')
    .attr('ticks', [100, 200, 300, 400])
    .attr('axisScales', [linear])
    .attr('direction', 'bottom')
    .attr('pos', [300, 500])
    .attr('color', 'blue')

  chart.on('click', (data) => {
    /* eslint-disable no-console */
    console.log(data, d3.event)
    /* eslint-enable no-console */
  })
}())

/* demo: d3-hierarchy */
;(function () {
  const scene = new Scene('#d3-hierarchy', {viewport: ['auto', 'auto'], resolution: [1540, 1200]})
  const layer = d3.select(scene).append('fglayer')

  d3.json('/res/data/city.json', (err, data) => {
    const root = d3.hierarchy(data)
      .sum(d => 1)
      .sort((a, b) => b.value - a.value)

    const pack = d3.pack()
      .size([1180, 1180])
      .padding(3)

    const nodes = pack(root)

    layer.append('label')
      .attr('pos', [1170, 50])
      .attr('name', 'region')
      .attr('font', '42px Arial')
      .attr('text', '中国')

    layer.selectAll({label: s => s.name !== 'region'})
      .data(nodes.descendants())
      .enter()
      .append('label')
      .attr('anchor', 0.5)
      .attr('pos', (d) => {
        const x = Math.round(d.x),
          y = Math.round(d.y)

        return [170 + x, 10 + y]
      })
      .attr('size', (d) => {
        const r = Math.round(d.r)
        return [2 * r, 2 * r]
      })
      .attr('fillColor', 'black')
      .attr('bgcolor', 'rgba(31, 119, 180, 0.4)')
      .attr('borderRadius', (d) => {
        return d.r
      })
      .attr('font', (d) => {
        return `${16 + Math.round(10 * Math.log2(d.value))}px Arial`
      })
      .attr('lineHeight', (d) => {
        return Math.round(2 * d.r)
      })
      .attr('textAlign', 'center')
      .attr('text', d => d.data.name)
      .on('mousemove', (d) => {
        d3.event.stopDispatch()

        const {offsetX, offsetY} = d3.event,
          r = Math.round(d.r)

        if(offsetX ** 2 + offsetY ** 2 < r ** 2) {
          layer.selectAll({label: s => s.name === 'region'})
            .attr('text', d.data.name)
        }
      })
      .on('mouseenter', (d) => {
        d3.event.target.attr('border', [3, 'red'])
      })
      .on('mouseleave', (d) => {
        d3.event.target.attr('border', [0, 'transparent'])
      })
  })
}())

