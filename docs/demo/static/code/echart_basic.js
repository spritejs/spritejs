const {Scene, EChart} = spritejs;

const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]});

const layer = scene.layer('fglayer');

const chart = new EChart({
  anchor: [0.5, 0.5],
  size: [700, 700],
  pos: [600, 600],
  // bgcolor: 'red',
});

chart.setOption({
  title: {
    text: 'ECharts 示例',
  },
  tooltip: {},
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20],
  }],
});

layer.append(chart);