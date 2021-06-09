const canvas = document.querySelector('canvas');

const layer = new spritejs.Layer({
  canvas,
});

const video = document.createElement('video');
video.src = 'https://s4.ssl.qhres2.com/static/a2fa8e8634dd1ccb.mp4';
video.crossOrigin = 'Anonymous';
video.loop = true;
video.muted = true;
video.play();

const videoCanvas = canvas.cloneNode();
const videoCtx = videoCanvas.getContext('2d');

const s = new spritejs.Sprite({
  width: 1023,
  height: 576,
});

layer.append(s);

let started = false;
video.addEventListener('playing', () => {
  if(!started) {
    started = true;
    layer.tick(() => {
      videoCtx.drawImage(video, 0, 0);
      s.attr('texture', videoCanvas);
    });
  }
});