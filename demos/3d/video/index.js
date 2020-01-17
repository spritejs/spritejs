const {Scene} = spritejs;
const {Mesh3d, Cube, shaders} = spritejs.ext3d;
const container = document.getElementById('container');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 45,
  },
});

layer.camera.attributes.pos = [3, 1.5, 4];
layer.camera.lookAt([1, 0.2, 0]);

const texture = layer.createTexture('https://p5.ssl.qhimg.com/t0110e2451e92de6193.jpg');
const program = layer.createProgram({
  ...shaders.NORMAL_TEXTURE,
  texture,
});
const model = layer.loadModel('https://s5.ssl.qhres.com/static/f545f86e6da07b9d.json');
const mesh = new Mesh3d(program, {model});
layer.append(mesh);

const videoTexture = layer.createTexture({
  generateMipmaps: false,
  width: 1024,
  height: 512,
});

// Create video with attributes that let it autoplay
// Check update loop to see when video is attached to texture
const video = document.createElement('video');
video.crossOrigin = 'anonymous';
video.src = 'https://s4.ssl.qhres.com/static/a2fa8e8634dd1ccb.mp4';

// Disclaimer: video autoplay is a confusing, constantly-changing browser feature.
// The best approach is to never assume that it will work, and therefore prepare for a fallback.
// Tested on mac: Chrome, Safari, Firefox; android: chrome
video.loop = true;
video.muted = true;
video.play();

const videoProgram = layer.createProgram({
  ...shaders.NORMAL_TEXTURE,
  texture: videoTexture,
  cullFace: null,
});

const videoMesh = new Cube(videoProgram, {
  width: 1.78,
  height: 1,
  depth: 1.78,
});
videoMesh.attributes.pos = [0, 0.5, -4];
videoMesh.attributes.scale = 1.5;
layer.append(videoMesh);

layer.tick((t) => {
  // Attach video and/or update texture when video is ready
  if(video.readyState >= video.HAVE_ENOUGH_DATA) {
    if(!videoTexture.image) videoTexture.image = video;
    videoTexture.needsUpdate = true;
  }

  if(mesh) mesh.attributes.rotateY -= 0.3;
  videoMesh.attributes.rotateY += 0.2;
});