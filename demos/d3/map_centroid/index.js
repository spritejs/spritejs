const width = 1000,
  height = 750;

const paper = new spritejs.Scene('#paper', {
  viewport: ['auto', 'auto'],
  resolution: [width, height],
  stickMode: 'width',
  stickExtend: true,
});


let centered;
const projection = d3.geoAlbersUsa()
  .scale(1070)
  .translate([width / 2, height / 2]);

const path = d3.geoPath()
  .projection(projection);

const layer = paper.layer('fglayer', {
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
    .attr('fillColor', '#70A556')
    .on('click', (d) => {
      const paths = d3.event.targetPaths;

      if(paths.length) {
        clicked(d);
      }
    });
});

function clicked(d) {
  // If the click was on the centered state or the background, re-center.
  // Otherwise, center the clicked-on state.
  let translate = [0, 0],
    centroid = [0, 0];

  if(d && centered !== d) {
    centroid = path.centroid(d);
    translate = projection.translate();
  }

  d3.select(layer).selectAll('path')
    .transition()
    .duration(750)
    .attr('pos', [translate[0] - centroid[0],
      translate[1] - centroid[1]]);
}
