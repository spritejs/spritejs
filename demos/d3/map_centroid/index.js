/* globals d3, topojson */
const {Scene} = spritejs;
const container = document.getElementById('stage');
const width = 1000,
  height = 750;

const scene = new Scene({
  container,
  width,
  height,
  mode: 'stickyWidth',
});

let centered;
const projection = d3.geoAlbersUsa()
  .scale(1070)
  .translate([width / 2, height / 2]);

const path = d3.geoPath()
  .projection(projection);

const layer = scene.layer('fglayer', {
  handleEvent: true,
});

layer.canvas.style.backgroundColor = '#8DBF59';

d3.json('https://s4.ssl.qhres.com/static/4e8ebcccf5b5ea78.json', (error, us) => {
  if(error) throw error;

  d3.select(layer).selectAll('path')
    .data(topojson.feature(us, us.objects.states).features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('strokeColor', '#618F4A')
    .attr('lineWidth', 1)
    .attr('fillColor', '#70A556')
    .on('click', clicked);
});

function clicked(d) {
  // If the click was on the centered state or the background, re-center.
  // Otherwise, center the clicked-on state.
  let translate = [0, 0],
    centroid = [0, 0];

  if(d && centered !== d) {
    centroid = path.centroid(d);
    translate = projection.translate();
    centered = d;
  }

  d3.select(layer).selectAll('path')
    .transition()
    .duration(750)
    .attr('pos', [translate[0] - centroid[0],
      translate[1] - centroid[1]]);
}