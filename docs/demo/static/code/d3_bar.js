(function () {
  const paper = new spritejs.Scene('#paper', {
    viewport: ['auto', 'auto'],
    resolution: [1600, 1200],
    stickMode: 'width',
  });

  const dataset = [125, 121, 127, 193, 309];

  const linear = d3.scaleLinear()
    .domain([100, d3.max(dataset)])
    .range([0, 500]);

  const colors = ['#fe645b', '#feb050', '#c2af87', '#81b848', '#55abf8'];

  const s = d3.select(paper).append('fglayer');

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
      return linear(d);
    })
    .attr('bgcolor', (d, i) => {
      return colors[i];
    });

  s.append('axis')
    .attr('ticks', [100, 200, 300, 400])
    .attr('axisScales', [linear])
    .attr('direction', 'bottom')
    .attr('pos', [450, 700])
    .attr('color', '#666');

  chart.on('click', (data) => {
    /* eslint-disable no-console */
    console.log(data, d3.event);
    /* eslint-enable no-console */
  });
}());
