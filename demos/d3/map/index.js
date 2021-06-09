/* globals d3 */
const {Scene} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 800,
  height: 600,
  mode: 'stickyWidth',
});

const layer = d3.select(scene.layer('fglayer'));
document.querySelector('#stage canvas').style.backgroundColor = '#222830';

const width = 1330;
const height = 520;

const projection = d3.geoMercator()
  .center([107, 38])
  .scale(width / 2 - 40)
  .translate([width / 4 + 80, height / 2]);

const path = d3.geoPath().projection(projection);

d3.json('https://s1.ssl.qhres2.com/static/6c6d50baf39026d5.json', (err, data) => {
  if(err) throw new Error(err);

  layer.selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('strokeColor', 'rgba(0,0,0,0.4)')
    .attr('lineWidth', 1)
    .attr('d', path)
    .attr('fillColor', '#2f3644')
    .on('click', (d) => {
      /* eslint-disable no-console */
      console.log(d.properties.name);
      /* eslint-enable no-console */
    })
    .on('mouseenter', function (d) {
      this.attr('fillColor', '#00c2ff');
    })
    .on('mouseleave', function (d) {
      this.attr('fillColor', '#2f3644');
    });
});