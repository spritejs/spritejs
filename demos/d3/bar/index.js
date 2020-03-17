/* globals d3 */
const {Scene, Sprite} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 1200,
});

const dataset = [125, 121, 127, 193, 309];

const scale = d3.scaleLinear()
  .domain([100, d3.max(dataset)])
  .range([0, 500]);

const colors = ['#fe645b', '#feb050', '#c2af87', '#81b848', '#55abf8'];

const fglayer = scene.layer('fglayer');
const s = d3.select(fglayer);

document.querySelector('#stage canvas').style.backgroundColor = '#eee';

const chart = s.selectAll('sprite')
  .data(dataset)
  .enter()
  .append('sprite')
  .attr('x', 450)
  .attr('y', (d, i) => {
    return 200 + i * 95;
  })
  .attr('width', 0)
  .attr('height', 80)
  .attr('bgcolor', '#ccc');

chart.transition()
  .duration(2000)
  .attr('width', (d, i) => {
    return scale(d);
  })
  .attr('bgcolor', (d, i) => {
    return colors[i];
  });

const axis = d3.axisBottom(scale).tickValues([100, 200, 300, 400]);
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
d3.select(svg)
  .attr('width', 600)
  .attr('height', 60)
  .append('g')
  .attr('transform', 'translate(30, 0)')
  .call(axis);
svg.children[0].setAttribute('font-size', 20);
const blob = new Blob([svg.outerHTML], {type: 'image/svg+xml'});
const textureURL = URL.createObjectURL(blob);
const axisNode = new Sprite(textureURL);
axisNode.attr({
  x: 420,
  y: 680,
});
fglayer.append(axisNode);

chart.on('click', (data) => {
  /* eslint-disable no-console */
  console.log(data, d3.event);
  /* eslint-enable no-console */
});