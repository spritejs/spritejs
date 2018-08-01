'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
        layer.selectAll({ label: function label(s) {
            return s.name !== 'region';
          } }).attr('border', null);
        d3.event.target.attr('border', [3, 'red']);
      }
    }).on('mouseleave', function (d) {
      d3.event.target.attr('border', null);
    });
  });
})();(function () {
  var scene = new Scene('#d3-map', { viewport: ['auto', 'auto'], resolution: [1540, 600] });

  var layer = d3.select(scene).append('fglayer');

  var width = 1540;
  var height = 600;

  var projection = d3.geoMercator().center([107, 38]).scale(width / 2 - 40).translate([width / 4 + 80, height / 2]);

  var path = d3.geoPath().projection(projection);

  d3.json('/res/data/china.json', function (err, data) {
    if (err) throw new Error(err);

    var selectedTarget = null;

    layer.selectAll('path').data(data.features).enter().append('path').attr('color', 'black').attr('lineWidth', 1).attr('d', path).attr('renderMode', 'fill').attr('fillColor', '#d1eeee').on('click', function (d) {
      var paths = d3.event.target.findPath(d3.event.offsetX, d3.event.offsetY);

      if (paths.length) {
        /* eslint-disable no-console */
        console.log(d.properties.name);
        /* eslint-enable no-console */
      }
    }).on('mousemove', function (d) {
      var event = d3.event;
      if (event.target !== selectedTarget) {
        var paths = event.target.findPath(event.offsetX, event.offsetY);

        if (paths.length) {
          if (selectedTarget) {
            selectedTarget.attr('fillColor', '#d1eeee');
          }
          selectedTarget = event.target;
          event.target.attr('fillColor', '#c73');
        }
      }
    });
  });
})();(function () {
  var scene = new Scene('#d3-link', { viewport: ['auto', 'auto'], resolution: [1540, 600] });

  var layer = scene.layer('fglayer', {
    handleEvent: false
  });

  var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
    return d.id;
  })).force('charge', d3.forceManyBody()).force('center', d3.forceCenter(400, 300));

  d3.json('/res/data/miserables.json', function (error, graph) {
    if (error) throw error;

    simulation.nodes(graph.nodes).on('tick', ticked);

    simulation.force('link').links(graph.links);

    var path = new spritejs.Path();

    path.attr({
      size: [1200, 800],
      pos: [0, 100]
    });
    layer.appendChild(path);

    d3.select(layer.canvas).call(d3.drag().container(layer.canvas).subject(dragsubject).on('start', dragstarted).on('drag', dragged).on('end', dragended));

    path.on('afterdraw', function (_ref) {
      var context = _ref.context;

      context.beginPath();
      graph.links.forEach(function (d) {
        var _ref2 = [d.source.x, d.source.y],
            sx = _ref2[0],
            sy = _ref2[1],
            _ref3 = [d.target.x, d.target.y],
            tx = _ref3[0],
            ty = _ref3[1];


        context.moveTo(sx, sy);
        context.lineTo(tx, ty);
      });
      context.strokeStyle = '#aaa';
      context.stroke();

      context.beginPath();
      graph.nodes.forEach(function (d) {
        var _ref4 = [d.x, d.y],
            x = _ref4[0],
            y = _ref4[1];


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
      var _layer$toLocalPos = layer.toLocalPos(d3.event.x, d3.event.y),
          _layer$toLocalPos2 = _slicedToArray(_layer$toLocalPos, 2),
          x = _layer$toLocalPos2[0],
          y = _layer$toLocalPos2[1];

      return simulation.find(x, y - 100);
    }
  });

  function dragstarted() {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();

    var _ref5 = [d3.event.subject.x, d3.event.subject.y],
        x = _ref5[0],
        y = _ref5[1];


    d3.event.subject.fx = x;
    d3.event.subject.fy = y;

    d3.event.subject.x0 = x;
    d3.event.subject.y0 = y;
  }

  function dragged() {
    var _ref6 = [d3.event.x, d3.event.y],
        x = _ref6[0],
        y = _ref6[1],
        _d3$event$subject = d3.event.subject,
        x0 = _d3$event$subject.x0,
        y0 = _d3$event$subject.y0;

    var _layer$toLocalPos3 = layer.toLocalPos(x - x0, y - y0),
        _layer$toLocalPos4 = _slicedToArray(_layer$toLocalPos3, 2),
        dx = _layer$toLocalPos4[0],
        dy = _layer$toLocalPos4[1];

    d3.event.subject.fx = x0 + dx;
    d3.event.subject.fy = y0 + dy;
  }

  function dragended() {
    if (!d3.event.active) simulation.alphaTarget(0);
    d3.event.subject.fx = null;
    d3.event.subject.fy = null;
  }
})();