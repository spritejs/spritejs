const vertex = `#version 300 es
  in vec3 a_vertexPosition;

  uniform mat3 viewMatrix;
  uniform mat3 projectionMatrix;

  void main() {
    gl_PointSize = 1.0;
    vec3 pos = projectionMatrix * viewMatrix * vec3(a_vertexPosition.xy, 1.0);
    gl_Position = vec4(pos.xy, 1.0, 1.0);
  }
`;

const fragment = `#version 300 es
  precision highp float;
  precision highp int;

  uniform float u_time;
  uniform samplerCube iChannel0;
  uniform sampler2D iChannel1;
  uniform sampler2D iChannel2;
  uniform vec2 u_resolution;

  float rand(vec2 n) { return 0.5 + 0.5 * fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453); }

  float water(vec3 p) {
    float t = u_time / 3.;
    p.z += t * 2.; p.x += t * 2.;
    vec3 c1 = texture(iChannel2, p.xz / 30.).xyz;
    p.z += t * 3.; p.x += t * 0.52;
    vec3 c2 = texture(iChannel2, p.xz / 30.).xyz;
    p.z += t * 4.; p.x += t * 0.8;
    vec3 c3 = texture(iChannel2, p.xz / 30.).xyz;
    c1 += c2 - c3;
    float z = (c1.x + c1.y + c1.z) / 3.;
    return p.y + z / 4.;
  }


  float map(vec3 p) {
    float d = 100.0;
    d = water(p);
    return d;
  }

  float intersect(vec3 ro, vec3 rd) {
    float d = 0.0;
    for (int i = 0; i <= 100; i++) {
      float h = map(ro + rd * d);
      if (h < 0.1) return  d;
      d += h;
    }
    return 0.0;
  }

  vec3 norm(vec3 p) {
    float eps = .1;
    return normalize(vec3(
      map(p + vec3(eps, 0, 0)) - map(p + vec3(-eps, 0, 0)),
      map(p + vec3(0, eps, 0)) - map(p + vec3(0, -eps, 0)),
      map(p + vec3(0, 0, eps)) - map(p + vec3(0, 0, -eps))
    ));
  }

  void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord.xy / u_resolution.xy - 0.5;
    uv.x *= u_resolution.x / u_resolution.y;
    vec3 l1 = normalize(vec3(1, 1, 1));
    vec3 ro = vec3(-3, 7, -5);
    vec3 rc = vec3(0, 0, 0);
    vec3 ww = normalize(rc - ro);
    vec3 uu = normalize(cross(vec3(0,1,0), ww));
    vec3 vv = normalize(cross(rc - ro, uu));
    vec3 rd = normalize(uu * uv.x + vv * uv.y + ww);
    float d = intersect(ro, rd);
    vec3 c = vec3(0.0);
    if (d > 0.0) {
      vec3 p = ro + rd * d;
      vec3 n = norm(p);
      float spc = pow(max(0.0, dot(reflect(l1, n), rd)), 30.0);
      vec4 ref = texture(iChannel0, normalize(reflect(rd, n)));
      vec3 rfa = texture(iChannel1, (p+n).xz / 6.0).xyz * (8./d);
      c = rfa.xyz + (ref.xyz * 0.5)+ spc;
    }
    fragColor = vec4((c - 0.5) * 1.1 + 0.5, 1.0 );
  }

  out vec4 FragColor;

  void main() {
    vec4 color;
    mainImage(color, gl_FragCoord.xy);
    FragColor = color;
  }
`;

const birdsJsonUrl = 'https://s5.ssl.qhres2.com/static/5f6911b7b91c88da.json';
const birdsRes = 'https://p.ssl.qhimg.com/d/inn/c886d09f/birds.png';

(async function () {
  const container = document.getElementById('stage');
  const scene = new spritejs.Scene({
    container,
    displayRatio: 2,
    width: 640,
    height: 360,
    // mode: 'stickyHeight',
    // contextType: '2d',
  });

  const fglayer = scene.layer('fglayer', {autoRender: false});
  const res = await scene.preload(
    [birdsRes, birdsJsonUrl],
    'https://p2.ssl.qhimg.com/t01ee6bf7dc26e0ebe8.png',
    'https://p2.ssl.qhimg.com/t017a9e777ad5cc3ea7.png',
    'https://p5.ssl.qhimg.com/t014d0ce5af45a44700.png',
    'https://p3.ssl.qhimg.com/t0149f6a639f851ddcc.png',
    'https://p1.ssl.qhimg.com/t01c273ff89bd766fa8.png',
    'https://p1.ssl.qhimg.com/t019da184b79bec3b4f.png',

    // 'https://p2.ssl.qhimg.com/t01993a03539dd34042.jpg',
    'https://p4.ssl.qhimg.com/t01d677560390610d5f.jpg',

    'https://p4.ssl.qhimg.com/t016323fa653ff2eaf9.png',
  );

  const options = {
    wrapS: fglayer.gl.REPEAT,
    wrapT: fglayer.gl.REPEAT,
    minFilter: fglayer.gl.LINEAR,
    magFilter: fglayer.gl.GL_NEAREST_MIPMAP_LINEAR,
  };

  const channel0 = fglayer.renderer.createTexture(res.slice(1, 7), options);
  const channel1 = fglayer.renderer.createTexture(res[7], options);
  const channel2 = fglayer.renderer.createTexture(res[8], options);

  const program = fglayer.renderer.createProgram({vertex, fragment});

  const sky = new spritejs.Block();
  sky.attr({
    size: [640, 360],
  });
  sky.setProgram(program);
  const {width, height} = fglayer.getResolution();

  sky.setUniforms({
    u_time: 0,
    u_resolution: [width, height],
    iChannel0: channel0,
    iChannel1: channel1,
    iChannel2: channel2,
  });
  window.program = program;

  fglayer.append(sky);

  // const bird = new spritejs.Sprite('bird1.png');
  // bird.attr({
  //   anchor: 0.5,
  //   pos: [300, 300],
  //   scale: 0.5,
  // });
  // fglayer.append(bird);

  // let idx = 0;
  // setInterval(() => {
  //   // bird.forceUpdate();
  //   bird.attributes.texture = `bird${++idx % 3 + 1}.png`;
  // }, 100);

  requestAnimationFrame(function update(t) {
    sky.setUniforms({
      u_time: 2.0 * t / 1000,
    });
    fglayer.render();
    requestAnimationFrame(update);
  });
}());