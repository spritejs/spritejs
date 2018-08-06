const {Scene} = spritejs

/* demo: d3-linear */
;(function () {
  const scene = new Scene('#d3-linear', {viewport: ['auto', 'auto'], resolution: [1540, 600]});

  const dataset = [125, 121, 127, 193, 309];

  const linear = d3.scaleLinear()
    .domain([100, d3.max(dataset)])
    .range([0, 500]);

  const colors = ['#f00', '#0a0', '#00a', '#3ca', '#7ac'];

  const s = d3.select(scene).append('fglayer');

  const chart = s.selectAll('sprite')
    .data(dataset)
    .enter()
    .append('sprite')
    .attr('x', 300)
    .attr('y', (d, i) => {
      return 200 + i * 55;
    })
    .attr('width', 0)
    .attr('height', 50)
    .attr('bgcolor', 'black');

  chart
    .transition()
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
    .attr('pos', [300, 500])
    .attr('color', 'blue');

  chart.on('click', (data) => {
    /* eslint-disable no-console */
    console.log(data, d3.event);
    /* eslint-enable no-console */
  });
}())

/* demo: d3-hierarchy */
;(function () {
  const scene = new Scene('#d3-hierarchy', {viewport: ['auto', 'auto'], resolution: [1540, 1200]});
  const layer = d3.select(scene).append('fglayer');

  d3.json('/res/data/city.json', (err, data) => {
    const root = d3.hierarchy(data)
      .sum(d => 1)
      .sort((a, b) => b.value - a.value);

    const pack = d3.pack()
      .size([1180, 1180])
      .padding(3);

    const nodes = pack(root);

    layer.append('label')
      .attr('pos', [1170, 50])
      .attr('name', 'region')
      .attr('font', '42px Arial')
      .attr('text', '中国');

    layer.selectAll({label: s => s.name !== 'region'})
      .data(nodes.descendants())
      .enter()
      .append('label')
      .attr('anchor', 0.5)
      .attr('pos', (d) => {
        const x = Math.round(d.x),
          y = Math.round(d.y);

        return [170 + x, 10 + y];
      })
      .attr('size', (d) => {
        const r = Math.round(d.r);
        return [2 * r, 2 * r];
      })
      .attr('fillColor', 'black')
      .attr('bgcolor', 'rgba(31, 119, 180, 0.4)')
      .attr('borderRadius', (d) => {
        return d.r;
      })
      .attr('font', (d) => {
        return `${16 + Math.round(10 * Math.log2(d.value))}px Arial`;
      })
      .attr('lineHeight', (d) => {
        return Math.round(2 * d.r);
      })
      .attr('textAlign', 'center')
      .attr('text', d => d.data.name)
      .on('mousemove', (d) => {
        d3.event.stopDispatch();

        const {offsetX, offsetY} = d3.event,
          r = Math.round(d.r);

        if(offsetX ** 2 + offsetY ** 2 < r ** 2) {
          layer.selectAll({label: s => s.name === 'region'})
            .attr('text', d.data.name);
          layer.selectAll({label: s => s.name !== 'region'})
            .attr('border', null);
          d3.event.target.attr('border', [3, 'red']);
        }
      })
      .on('mouseleave', (d) => {
        d3.event.target.attr('border', null);
      });
  });
}())


/* demo: d3-map */
;(function () {
  const scene = new Scene('#d3-map', {viewport: ['auto', 'auto'], resolution: [1540, 600]});

  const layer = d3.select(scene).append('fglayer');

  const width = 1540;
  const height = 600;

  const projection = d3.geoMercator()
    .center([107, 38])
    .scale(width / 2 - 40)
    .translate([width / 4 + 80, height / 2]);

  const path = d3.geoPath().projection(projection);

  d3.json('/res/data/china.json', (err, data) => {
    if(err) throw new Error(err);

    let selectedTarget = null;

    layer.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('color', 'black')
      .attr('lineWidth', 1)
      .attr('d', path)
      .attr('renderMode', 'fill')
      .attr('fillColor', '#d1eeee')
      .on('click', (d) => {
        const paths = d3.event.target.findPath(d3.event.offsetX, d3.event.offsetY);

        if(paths.length) {
          /* eslint-disable no-console */
          console.log(d.properties.name);
          /* eslint-enable no-console */
        }
      })
      .on('mousemove', (d) => {
        const event = d3.event;
        if(event.target !== selectedTarget) {
          const paths = event.target.findPath(event.offsetX, event.offsetY);

          if(paths.length) {
            if(selectedTarget) {
              selectedTarget.attr('fillColor', '#d1eeee');
            }
            selectedTarget = event.target;
            event.target.attr('fillColor', '#c73');
          }
        }
      });
  });
}())

/* demo: d3-link */
;(function () {
  const scene = new Scene('#d3-link', {viewport: ['auto', 'auto'], resolution: [1540, 600]});

  const layer = scene.layer('fglayer', {
    handleEvent: false,
  });

  const simulation = d3.forceSimulation()
    .force('link', d3.forceLink().id(d => d.id))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(400, 300));

  d3.json('/res/data/miserables.json', (error, graph) => {
    if(error) throw error;

    simulation
      .nodes(graph.nodes)
      .on('tick', ticked);

    simulation.force('link')
      .links(graph.links);

    const path = new spritejs.Path();

    path.attr({
      size: [1200, 800],
      pos: [0, 100],
    });
    layer.appendChild(path);

    d3.select(layer.canvas)
      .call(d3.drag()
        .container(layer.canvas)
        .subject(dragsubject)
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));


    path.on('afterdraw', ({context}) => {
      context.beginPath();
      graph.links.forEach((d) => {
        const [sx, sy] = [d.source.x, d.source.y],
          [tx, ty] = [d.target.x, d.target.y];

        context.moveTo(sx, sy);
        context.lineTo(tx, ty);
      });
      context.strokeStyle = '#aaa';
      context.stroke();

      context.beginPath();
      graph.nodes.forEach((d) => {
        const [x, y] = [d.x, d.y];

        context.moveTo(x + 3, y);
        context.arc(x, y, 3, 0, 2 * Math.PI);
      });
      context.fill();
      context.strokeStyle = '#fff';
      context.stroke();
    });

    function ticked() {
      path.forceUpdate(true);
    }

    function dragsubject() {
      const [x, y] = layer.toLocalPos(d3.event.x, d3.event.y);
      return simulation.find(x, y - 100);
    }
  });

  function dragstarted() {
    if(!d3.event.active) simulation.alphaTarget(0.3).restart();

    const [x, y] = [d3.event.subject.x, d3.event.subject.y];

    d3.event.subject.fx = x;
    d3.event.subject.fy = y;

    d3.event.subject.x0 = x;
    d3.event.subject.y0 = y;
  }

  function dragged() {
    const [x, y] = [d3.event.x, d3.event.y],
      {x0, y0} = d3.event.subject;

    const [dx, dy] = layer.toLocalPos((x - x0), (y - y0));

    d3.event.subject.fx = x0 + dx;
    d3.event.subject.fy = y0 + dy;
  }

  function dragended() {
    if(!d3.event.active) simulation.alphaTarget(0);
    d3.event.subject.fx = null;
    d3.event.subject.fy = null;
  }
}());
