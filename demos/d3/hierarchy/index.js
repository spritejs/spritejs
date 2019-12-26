/* globals d3 */
const {Scene} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1600,
  height: 1200,
  mode: 'stickyWidth',
});

const layer = d3.select(scene.layer('fglayer'));

document.querySelector('#stage canvas').style.backgroundColor = '#151718';

layer.append('label')
  .attr('pos', [1100, 150])
  .attr('name', 'region')
  .attr('font', '42px Arial')
  .attr('text', '中国')
  .attr('fillColor', '#fff');

d3.json('https://s5.ssl.qhres.com/static/b0695e2dd30daa64.json', (err, data) => {
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

  layer.selectAll('label[name!="region"]')
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
    .on('mousemove', function (d) {
      // console.log(d.data.name)
      layer.selectAll('label[name="region"]')
        .attr('text', d.data.name);
      layer.selectAll('label[name!="region"]')
        .attr('border', null);
      this.attr('border', [3, 'red']);
    })
    .on('mouseleave', function (d) {
      this.attr('border', null);
    });
});