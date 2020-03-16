/* globals d3 */
const vertex = `
  precision highp float;
  precision highp int;

  attribute vec3 position;
  attribute vec4 color;
  attribute vec2 uv;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  varying vec4 vColor;
  varying vec2 vUv;

  void main() {        
  vColor = color;
  vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }    
`;

const fragment = `
  precision highp float;
  precision highp int;

  varying vec4 vColor;
  varying vec2 vUv;

  void main() {
    float x = fract(vUv.x * 53.0);
    float y = fract(vUv.y * 7.0);
    x = smoothstep(0.0, 0.1, x) - smoothstep(0.9, 1.0, x);
    y = smoothstep(0.0, 0.1, y) - smoothstep(0.9, 1.0, y);
    gl_FragColor = vColor * (x + y);
  }    
`;

function getWeeksContributions(svg) {
  const datas = svg.querySelectorAll('g > g');
  const ret = [];
  for(let i = 0; i < datas.length; i++) {
    const data = datas[i].querySelectorAll('rect');
    for(let j = 0; j < data.length; j++) {
      const rect = data[j];
      ret.push({count: Number(rect.dataset.count), color: rect.getAttribute('fill')});
    }
  }
  return ret;
}
const dataSVG = document.querySelector('svg');
const dataset = getWeeksContributions(dataSVG);

const {Scene} = spritejs;
const {Cube, shaders} = spritejs.ext3d;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  displayRatio: 2,
});

const layer = scene.layer3d('fglayer', {
  directionalLight: [1, 0, 0, 0.3],
  pointLightColor: 'white',
  pointLightPosition: [5, 3, -6],
  camera: {
    fov: 35,
  },
});
layer.camera.attributes.pos = [2, 6, 9];
layer.camera.lookAt([0, 0, 0]);

const selection = d3.select(layer);

const program = layer.createProgram({
  vertex: shaders.NORMAL_GEOMETRY.vertex,
  fragment: shaders.NORMAL_GEOMETRY.fragment,
  cullFace: null,
});

const axisProgram = layer.createProgram({
  vertex,
  fragment,
  // ...shaders.NORMAL_GEOMETRY,
  cullFace: null,
});

const ground = new Cube(axisProgram, {
  width: 7.6,
  height: 0.1,
  y: -0.049,
  depth: 1,
  colors: 'rgba(0, 0, 0, 0.1)',
});

layer.append(ground);

const chart = selection.selectAll('cube.day')
  .data(dataset)
  .enter()
  .append(() => {
    return new Cube(program);
  })
  .attr('class', 'day')
  .attr('width', 0.14)
  .attr('depth', 0.14)
  .attr('height', 1)
  // Note: use scaleY. DONT use height directly because the change of height
  // will rebuild geometry(much slower).
  .attr('scaleY', 0.001)
  .attr('pos', (d, i) => {
    const x0 = -3.8 + 0.0717 + 0.0015;
    const z0 = -0.5 + 0.05 + 0.0015;
    const x = x0 + 0.143 * Math.floor(i / 7);
    const z = z0 + 0.143 * (i % 7);
    return [x, 0, z];
  })
  .attr('colors', (d, i) => {
    return d.color;
  });

const max = d3.max(dataset, (a) => {
  return a.count;
});

const linear = d3.scaleLinear()
  .domain([0, max])
  .range([0, 1.0]);

chart.transition()
  .duration(2000)
  .attr('scaleY', (d, i) => {
    return linear(d.count);
  })
  .attr('y', (d, i) => {
    return 0.5 * linear(d.count);
  });

layer.setOrbit();