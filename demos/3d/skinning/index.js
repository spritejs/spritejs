const vertex = /* glsl */ `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec2 uv;
    attribute vec4 skinIndex;
    attribute vec4 skinWeight;

    uniform mat3 normalMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    uniform sampler2D boneTexture;
    uniform int boneTextureSize;

    mat4 getBoneMatrix(const in float i) {
        float j = i * 4.0;
        float x = mod(j, float(boneTextureSize));
        float y = floor(j / float(boneTextureSize));

        float dx = 1.0 / float(boneTextureSize);
        float dy = 1.0 / float(boneTextureSize);

        y = dy * (y + 0.5);

        vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
        vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
        vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
        vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));

        return mat4(v1, v2, v3, v4);
    }

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);

        mat4 boneMatX = getBoneMatrix(skinIndex.x);
        mat4 boneMatY = getBoneMatrix(skinIndex.y);
        mat4 boneMatZ = getBoneMatrix(skinIndex.z);
        mat4 boneMatW = getBoneMatrix(skinIndex.w);

        // update normal
        mat4 skinMatrix = mat4(0.0);
        skinMatrix += skinWeight.x * boneMatX;
        skinMatrix += skinWeight.y * boneMatY;
        skinMatrix += skinWeight.z * boneMatZ;
        skinMatrix += skinWeight.w * boneMatW;
        vNormal = vec4(skinMatrix * vec4(vNormal, 0.0)).xyz;

        // Update position
        vec4 bindPos = vec4(position, 1.0);
        vec4 transformed = vec4(0.0);
        transformed += boneMatX * bindPos * skinWeight.x;
        transformed += boneMatY * bindPos * skinWeight.y;
        transformed += boneMatZ * bindPos * skinWeight.z;
        transformed += boneMatW * bindPos * skinWeight.w;
        vec3 pos = transformed.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    precision highp int;

    uniform sampler2D tMap;

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vec3 tex = texture2D(tMap, vUv).rgb;

        vec3 normal = normalize(vNormal);
        vec3 light = vec3(0.0, 1.0, 0.0);
        float shading = min(0.0, dot(normal, light) * 0.2);

        gl_FragColor.rgb = tex + shading;
        gl_FragColor.a = 1.0;
    }
`;

const shadowVertex = /* glsl */ `
    precision highp float;

    attribute vec2 uv;
    attribute vec3 position;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const shadowFragment = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;

    varying vec2 vUv;

    void main() {
        float shadow = texture2D(tMap, vUv).g;
        
        gl_FragColor.rgb = vec3(0.0);
        gl_FragColor.a = shadow;
    }
`;

const {Scene} = spritejs;
const {Skin, Plane} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  alpha: false,
  camera: {
    fov: 35,
  },
});

layer.camera.attributes.pos = [6, 2, 6];

(async function () {
  const animationData = await (await fetch('https://s2.ssl.qhres.com/static/2042f56d104bd374.json')).json();
  const texture = layer.createTexture('https://p3.ssl.qhimg.com/d/inn/ae57767c6b58/snout.jpg');
  const program = layer.createProgram({
    vertex,
    fragment,
    texture,
  });
  const model = layer.loadModel('https://s3.ssl.qhres.com/static/e9139173907776d5.json');
  const skin = new Skin(program, {model});
  skin.attr({
    y: -1,
    scale: 0.01,
  });

  const shadowTexture = layer.createTexture('https://p1.ssl.qhimg.com/d/inn/8dd37178a756/snout-shadow.jpg');
  const shadowProgram = layer.createProgram({
    vertex: shadowVertex,
    fragment: shadowFragment,
    texture: shadowTexture,
    transparent: true,
    cullFace: false,
  });
  const plan = new Plane(shadowProgram, {width: 7, height: 7});
  plan.attr({
    rotateX: -90,
    y: -1,
  });
  layer.append(plan);

  const animation = skin.addAnimationFrames(animationData);

  layer.append(skin);
  layer.setOrbit();
  layer.tick(() => {
    animation.elapsed += 0.1;
  });
}());