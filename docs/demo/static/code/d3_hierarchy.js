(function () {
  const paper = new spritejs.Scene('#paper', {
    viewport: ['auto', 'auto'],
    resolution: [1600, 1200],
    stickMode: 'width',
    stickExtend: true,
  });

  const layer = d3.select(paper).append('fglayer');

  document.querySelector('#paper canvas').style.backgroundColor = '#151718';

  layer.append('label')
    .attr('pos', [1100, 150])
    .attr('name', 'region')
    .attr('font', '42px Arial')
    .attr('text', '中国')
    .attr('color', '#fff');

  d3.json('/res/data/city.json', (err, data) => {
    if(err) throw new Error(err);

    const root = d3.hierarchy(data)
      .sum(d => 1)
      .sort((a, b) => b.value - a.value);

    const pack = d3.pack()
      .size([1000, 1000])
      .padding(3);

    const nodes = pack(root);

    const color = d3.scaleSequential(d3.interpolateMagma)
      .domain([-4, 4]);

    layer.selectAll({label: s => s.name !== 'region'})
      .data(nodes.descendants())
      .enter()
      .append('label')
      .attr('translate', [300, 150])
      .attr('anchor', 0.5)
      .attr('pos', (d) => {
        const x = Math.round(d.x),
          y = Math.round(d.y);

        return [x, y];
      })
      .attr('size', (d) => {
        const r = Math.round(d.r);
        return [2 * r, 2 * r];
      })
      .attr('bgcolor', d => color(d.depth))
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
      .attr('text', (d) => {
        if(!d.children) return d.data.name;
        return '';
      })
      .on('mousemove', (d) => {
        d3.event.stopDispatch();

        const {offsetX, offsetY} = d3.event,
          r = Math.round(d.r);

        if(offsetX ** 2 + offsetY ** 2 < r ** 2) {
          // console.log(d.data.name)
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
}());
