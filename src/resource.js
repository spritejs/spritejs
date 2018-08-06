import {createCanvas, loadImage} from './platform';

const axios = require('axios');

const loadedResources = new Map();

/**
  loadTexture({
    id: 'bird1',
    src: 'http://some.path/brid1.png'
  })
 */

const Resource = {
  loadTexture(texture, timeout = 30000) {
    if(typeof texture === 'string') {
      texture = {src: texture};
    }
    if(!texture.id) {
      texture.id = texture.src;
    }

    const mapKey = texture.id;

    if(!loadedResources.has(mapKey)) {
      const promise = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(new Error('load img timeout'));
        }, timeout);

        loadImage(texture.src).then((img) => {
          // save image not canvas for svg preserveAspectRatio
          resolve({img, texture, fromCache: false});
          loadedResources.set(mapKey, img);
          clearTimeout(timer);
        });
      });
      loadedResources.set(mapKey, promise);
      return promise;
    }
    const img = loadedResources.get(mapKey);
    if(img instanceof Promise) {
      return img;
    }
    return {
      img,
      texture,
      fromCache: true,
    };
  },
  /**
    u3d-json compatible: https://www.codeandweb.com/texturepacker
    {
      frames: {
        key: {
          frame: {x, y, w, h},
          trimmed: ...,
          rotated: true|false,
          spriteSourceSize: {x, y, w, h},
          sourceSize: {w, h}
        }
      }
    }
   */
  async loadFrames(src, frameData) {
    if(typeof frameData === 'string') {
      frameData = await axios.get(frameData);
      frameData = frameData.data;
    }

    const texture = await this.loadTexture(src);
    const frames = frameData.frames;

    Object.entries(frames).forEach(([key, frame]) => {
      const {w, h} = frame.sourceSize;

      const canvas = createCanvas(w, h),
        srcRect = frame.frame,
        rect = frame.spriteSourceSize,
        context = canvas.getContext('2d');

      const rotated = frame.rotated;

      context.save();

      if(rotated) {
        context.translate(0, h);
        context.rotate(-0.5 * Math.PI);

        const tmp = rect.y;
        rect.y = rect.x;
        rect.x = h - srcRect.h - tmp;

        context.drawImage(
          texture.img,
          srcRect.x, srcRect.y, srcRect.h, srcRect.w,
          rect.x, rect.y, rect.h, rect.w
        );
      } else {
        context.drawImage(
          texture.img,
          srcRect.x, srcRect.y, srcRect.w, srcRect.h,
          rect.x, rect.y, rect.w, rect.h
        );
      }

      context.restore();

      loadedResources.set(key, canvas);
    });

    return texture;
  },
};

export default Resource;
