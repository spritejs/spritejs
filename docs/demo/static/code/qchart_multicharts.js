/* global qcharts */
const data = [
  {product: '茶叶', year: '2016', sales: 81.2},
  {product: '茶叶', year: '2017', sales: 121.2},
  {product: '茶叶', year: '2018', sales: 41.2},
  {product: '牛奶', year: '2016', sales: 89.2},
  {product: '牛奶', year: '2017', sales: 50.6},
  {product: '牛奶', year: '2018', sales: 80.2},
  {product: '咖啡', year: '2016', sales: 35.2},
  {product: '咖啡', year: '2017', sales: 79.6},
  {product: '咖啡', year: '2018', sales: 61.2},
  {product: '椰汁', year: '2016', sales: 55.2},
  {product: '椰汁', year: '2017', sales: 69.6},
  {product: '椰汁', year: '2018', sales: 21.2},
];

const {Chart, Line, Bar, Legend, Tooltip, Axis} = qcharts;

const chart = new Chart({
  container: '#app',
});

chart.source(data, {
  row: 'year',
  value: 'sales',
  text: 'product',
});

const bar = new Bar();
const line = new Line({axisGap: true});

const tooltip = new Tooltip({
  formatter(data) {
    return `${data.product} ${data.year} ${data.sales}`;
  },
});

const axisBottom = new Axis();

const axisLeft = new Axis({orient: 'left'})
  .style('axis', false).style('scale', false);

line.style('symbol:hover', {fillColor: '#f00'}).style('point', {color: '#fff'});

const legend = new Legend({align: ['center', 'bottom']});

chart.add([bar, line, tooltip, axisBottom, axisLeft, legend]);
chart.render();