const fs = require('fs')
const {Scene} = require('../../lib')
const d3 = Object.assign({}, require('d3-scale'), require('d3-array'), require('d3-selection'))

const scene = new Scene('#paper', 600, 400)
scene.setResolution(1200, 800)

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

chart.attr('width', (d, i) => {
  return linear(d)
}).attr('bgcolor', (d, i) => {
  return colors[i]
})

s.append('axis').attr('ticks', [100, 200, 300, 400])
  .attr('axisScales', [linear])
  .attr('direction', 'bottom')
  .attr('pos', [270, 500])
  .attr('color', 'white')

;(async function () {
  const canvas = await scene.snapshot()
  fs.writeFileSync('snap.png', canvas.toBuffer())
}())
