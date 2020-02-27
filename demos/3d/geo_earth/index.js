const {Scene} = spritejs;
const {Sphere, Vec3, Curve, Polyline3d, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});

const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
  },
});
layer.camera.attributes.pos = [0, 0, 4];
layer.camera.lookAt([0, 0, 0]);

/* globals d3,topojson */
(async function () {
  const data = await (await fetch('https://s0.ssl.qhres.com/static/6a08177cb2f066a5.json')).json();
  const countries = topojson.feature(data, data.objects.countries);

  // 默认宽高 960 X 500，默认 translate 是 480 X 250
  const projection = d3.geoEquirectangular();
  projection.scale(projection.scale() * 2).translate([960, 500]);

  const canvas = new OffscreenCanvas(1920, 1000);
  const context = canvas.getContext('2d');
  const path = d3.geoPath(projection).context(context);

  context.strokeStyle = '#fff';
  context.lineWidth = 0.25;
  context.fillStyle = '#000';
  context.beginPath();
  path(countries);
  context.fill();
  context.stroke();

  const texture = layer.createTexture({image: canvas});

  const program = layer.createProgram({
    ...shaders.GEOMETRY_WITH_TEXTURE,
    cullFace: null,
    texture,
  });

  const s = new Sphere(program);
  s.attr({
    radius: 1,
    colors: '#7cf',
  });

  function get_coordinate(latitude, longitude, radius = 1) {
    const [a, b] = projection([longitude, latitude]);
    const u = a / 1920;
    const v = b / 1000;
    const pLength = Math.PI * 2;
    const tLength = Math.PI;
    const x = -radius * Math.cos(u * pLength) * Math.sin(v * tLength);
    const y = radius * Math.cos(v * tLength);
    const z = radius * Math.sin(u * pLength) * Math.sin(v * tLength);
    return new Vec3(x, y, z);
  }

  function mix(v1, v2, p) {
    const t1 = new Vec3();
    const t2 = new Vec3();
    t1.copy(v1).scale(1 - p);
    t2.copy(v2).scale(p);
    return t1.add(t2);
  }

  // 北京市区坐标为:北纬39.9”,东经116. 3”。
  // 上海位于北纬31度11分,东经121度29分。
  const beijingLoc = get_coordinate(39.9, 116.3);
  const shanghaiLoc = get_coordinate(31.11, 121.29);

  const mid1 = mix(beijingLoc, shanghaiLoc, 0.333); // 取北京、上海中间点
  const mid2 = mix(beijingLoc, shanghaiLoc, 0.667); // 取北京、上海中间点
  mid1.normalize().scale(1.1); // 中间点
  mid2.normalize().scale(1.1);

  const curve = new Curve({
    points: [
      beijingLoc,
      mid1,
      mid2,
      shanghaiLoc,
    ],
    type: Curve.CUBICBEZIER,
  });

  const points = curve.getPoints(50);
  const curveProgram = layer.createProgram({
    // ...shaders.POLYLINE,
    ...shaders.DASHLINE,
    transparent: true,
    uniforms: {
      uThickness: {value: 3},
      uDashLength: {value: 0.02},
      uDashOffset: {value: 0},
    },
  });

  const p = new Polyline3d(curveProgram, {
    points,
    colors: 'orange',
  });
  layer.append(s);
  s.append(p);

  s.attributes.rotateY = 210;
  s.attributes.rotateX = -30;

  layer.setOrbit();

  layer.tick(() => {
    s.attributes.rotateY -= 0.1;
    curveProgram.uniforms.uDashOffset.value -= 0.001;
  });
}());