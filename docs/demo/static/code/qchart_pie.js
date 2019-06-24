/* global qcharts */
const data = [
  {value: 204, name: '图例一'},
  {value: 451, name: '图例二'},
  {value: 347, name: '图例三'},
  {value: 256, name: '图例四'},

  {value: 2790, name: '图例1'},
  {value: 2548, name: '图例2'},
  {value: 1350, name: '图例3'},
  {value: 3100, name: '图例4'},
  {value: 2340, name: '图例5'},
  {value: 1350, name: '图例6'},
  {value: 2450, name: '图例7'},
  {value: 1550, name: '图例8'},
  {value: 3450, name: '图例9'},
  {value: 2750, name: '图例10'},
];

const {Chart, Pie, Legend} = qcharts;

const chart = new Chart({
  container: '#app',
});

chart.source(data, {
  row: 'name',
  value: 'value',
});

const ds = chart.dataset;

const pie = new Pie({
  radius: 0.4,
  pos: [0, 0],
  size: ['80%', '100%'],
}).source(ds.selectRows(data.slice(0, 4).map(d => d.name)));
pie.color(['#5982F6', '#59CB74', '#DA65CC', '#FC6980']);
pie.style('text', attrs => ({color: '#fff', text: attrs.name}));

const pie2 = new Pie({
  innerRadius: 0.5,
  radius: 0.7,
  pos: [0, 0],
  size: ['80%', '100%'],
}).source(ds.selectRows(data.slice(4).map(d => d.name)));
pie2.color([
  '#47A1FF',
  '#6CD3FF',
  '#A2E5FF',
  '#4DCCCB',
  '#3FDDC7',
  '#ADDF84',
  '#FBD54A',
  '#FFB952',
  '#F79452',
  '#E37474',
]);
pie2.style('guideLine', true);
pie2.style('guideText', {fontSize: '12px'});

const legend = new Legend({orient: 'vertical', align: ['right', 'center']});
legend.color([].concat(pie.color(), pie2.color()));

legend.style('icon', (attrs, d, i) => ({
  marginTop: i > 0 ? 10 : 0,
}));
legend.style('text', (attrs, d, i) => ({
  marginTop: i > 0 ? 10 : 0,
}));

chart.add([pie, pie2, legend]);

chart.render();
