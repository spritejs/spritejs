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

const {Chart, Line, Legend, Tooltip, Axis} = qcharts;

const chart = new Chart({
  container: '#app',
  forceFit: true,
});

chart.source(data, {
  row: 'year',
  value: 'sales',
  text: 'product',
});

const line = new Line({smooth: true});

const tooltip = new Tooltip({
  formatter(data) {
    return `${data.product} ${data.year} ${data.sales}`;
  },
});

const axisBottom = new Axis();

const axisLeft = new Axis({orient: 'left'})
  .style('axis', false).style('scale', false);

line.style('point', {pointType: 'star', size: 8});
line.style('point:hover', (attrs, data, i, j) => { // 设置symbol样式
  if(data.sales > 60) {
    return {scale: 1.4};
  } if(data.sales > 30) {
    return {fillColor: '#0ff'};
  }
  return {fillColor: '#0f0'};
})
  .style('guideline', {fillColor: '#ff0'})
  .style('line', (attrs, data, i) => {
    if(i === 1) {
      return {strokeColor: '#00fafc'};
    }
  })
  .style('line:hover', (attrs, data, i) => {
    return {strokeColor: '#fa3300'};
  });

const legend = new Legend({align: ['center', 'bottom']});

chart.add([line, tooltip, axisBottom, axisLeft, legend]);
chart.render();
