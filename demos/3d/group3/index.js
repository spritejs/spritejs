const {Scene} = spritejs;
const {Sphere, Cube} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  autoRender: false,
  camera: {
    fov: 35,
  },
  ambientColor: 'white',
});

layer.camera.attributes.pos = [1, 7, 0];
layer.camera.lookAt([0, 0, 0]);

const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat3 normalMatrix;

    varying vec3 vNormal;
    varying vec4 vMVPos;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        
        vMVPos = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * vMVPos;
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;
    varying vec4 vMVPos;

    void main() {
        vec3 normal = normalize(vNormal);
        float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
        vec3 color = vec3(1.0, 0.5, 0.2) * (1.0 - 0.5 * lighting) + vMVPos.xzy * 0.1;
        
        float dist = length(vMVPos);
        float fog = smoothstep(4.0, 10.0, dist);
        color = mix(color, vec3(1.0), fog);
        
        gl_FragColor.rgb = color;
        gl_FragColor.a = 1.0;
    }
`;

const program = layer.createProgram({
  vertex,
  fragment,
});

const sphere = new Sphere(program, {
  radius: 0.15,
});

const cube = new Cube(program, {
  width: 0.3,
  height: 0.3,
  depth: 0.3});
const shapes = [cube];

cube.speed = -0.5;
layer.append(cube);

// Create random array of shapes
for(let i = 0; i < 50; i++) {
  const mesh = Math.random() > 0.5 ? cube : sphere;
  const shape = mesh.cloneNode();
  shape.attr({
    scale: Math.random() * 0.3 + 0.7,
    x: (Math.random() - 0.5) * 3,
    y: (Math.random() - 0.5) * 3,
    z: (Math.random() - 0.5) * 3,
  });
  shape.speed = (Math.random() - 0.5) * 0.7;

  // Attach them to a random, previously created shape
  const parent = shapes[Math.floor(Math.random() * shapes.length)];
  parent.append(shape);
  shapes.push(shape);
}

layer.tick((t) => {
  shapes.forEach((shape) => {
    shape.attributes.rotateY += 2 * shape.speed;
    shape.attributes.rotateX += 1.5 * shape.speed;
    shape.attributes.rotateZ += shape.speed;
  });
});