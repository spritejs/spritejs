'use strict';

var _spritejs = spritejs,
    Scene = _spritejs.Scene;
(function () {
  var scene = new Scene('#d3-linear', { viewport: ['auto', 'auto'], resolution: [1540, 600] });

  var dataset = [125, 121, 127, 193, 309];

  var linear = d3.scaleLinear().domain([100, d3.max(dataset)]).range([0, 500]);

  var colors = ['#f00', '#0a0', '#00a', '#3ca', '#7ac'];

  var s = d3.select(scene).append('fglayer');

  var chart = s.selectAll('sprite').data(dataset).enter().append('sprite').attr('x', 300).attr('y', function (d, i) {
    return 200 + i * 55;
  }).attr('width', 0).attr('height', 50).attr('bgcolor', 'black');

  chart.transition().duration(2000).attr('width', function (d, i) {
    return linear(d);
  }).attr('bgcolor', function (d, i) {
    return colors[i];
  });

  s.append('axis').attr('ticks', [100, 200, 300, 400]).attr('axisScales', [linear]).attr('direction', 'bottom').attr('pos', [300, 500]).attr('color', 'blue');

  chart.on('click', function (data) {
    /* eslint-disable no-console */
    console.log(data, d3.event);
    /* eslint-enable no-console */
  });
})();(function () {
  var scene = new Scene('#d3-hierarchy', { viewport: ['auto', 'auto'], resolution: [1540, 1200] });
  var layer = d3.select(scene).append('fglayer');

  d3.json('/res/data/city.json', function (err, data) {
    var root = d3.hierarchy(data).sum(function (d) {
      return 1;
    }).sort(function (a, b) {
      return b.value - a.value;
    });

    var pack = d3.pack().size([1180, 1180]).padding(3);

    var nodes = pack(root);

    layer.append('label').attr('pos', [1170, 50]).attr('name', 'region').attr('font', '42px Arial').attr('text', '中国');

    layer.selectAll({ label: function label(s) {
        return s.name !== 'region';
      } }).data(nodes.descendants()).enter().append('label').attr('anchor', 0.5).attr('pos', function (d) {
      var x = Math.round(d.x),
          y = Math.round(d.y);

      return [170 + x, 10 + y];
    }).attr('size', function (d) {
      var r = Math.round(d.r);
      return [2 * r, 2 * r];
    }).attr('fillColor', 'black').attr('bgcolor', 'rgba(31, 119, 180, 0.4)').attr('borderRadius', function (d) {
      return d.r;
    }).attr('font', function (d) {
      return 16 + Math.round(10 * Math.log2(d.value)) + 'px Arial';
    }).attr('lineHeight', function (d) {
      return Math.round(2 * d.r);
    }).attr('textAlign', 'center').attr('text', function (d) {
      return d.data.name;
    }).on('mousemove', function (d) {
      d3.event.stopDispatch();

      var _d3$event = d3.event,
          offsetX = _d3$event.offsetX,
          offsetY = _d3$event.offsetY,
          r = Math.round(d.r);


      if (Math.pow(offsetX, 2) + Math.pow(offsetY, 2) < Math.pow(r, 2)) {
        layer.selectAll({ label: function label(s) {
            return s.name === 'region';
          } }).attr('text', d.data.name);
      }
    }).on('mouseenter', function (d) {
      d3.event.target.attr('border', [3, 'red']);
    }).on('mouseleave', function (d) {
      d3.event.target.attr('border', [0, 'transparent']);
    });
  });
})();