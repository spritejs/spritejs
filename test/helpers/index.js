const {createCanvas, loadImage} = require('canvas');

const imghash = require('imghash');
const hamming = require('hamming-distance');
const colors = require('colors');
const pixelmatch = require('pixelmatch');
const fs = require('fs');

async function createCanvasFromFile(src) {
  const img = await loadImage(src);
  const canvas = createCanvas(img.width, img.height);
  canvas.getContext('2d').drawImage(img, 0, 0);
  return canvas;
}

async function compare(canvas, caseId, pixelCompare = false) {
  const srcData = canvas.toBuffer();
  const desCanvas = await createCanvasFromFile(`./test/img/${caseId}.png`);

  const desData = desCanvas.toBuffer();
  const N = 32;
  const hash1 = imghash.hash(srcData, N);
  const hash2 = imghash.hash(desData, N);

  const results = await Promise.all([hash1, hash2]);

  const dist = hamming(...results);
  console.warn(colors.cyan(`Hamming distance between canvas and ${caseId} is: ${dist}`));

  const diffFile = `./test/img-diff/${caseId}.diff.png`;
  const srcFile = `./test/img-diff/${caseId}.src.png`;

  const width = canvas.width,
    height = canvas.height;
  const diffCanvas = createCanvas(width, height),
    srcContext = canvas.getContext('2d'),
    desContext = desCanvas.getContext('2d'),
    diffContext = diffCanvas.getContext('2d');

  const img1 = srcContext.getImageData(0, 0, width, height);
  const img2 = desContext.getImageData(0, 0, width, height);
  const diff = diffContext.createImageData(width, height);

  pixelmatch(
    img1.data,
    img2.data,
    diff.data,
    width,
    height,
    {threshold: 0.1}
  );
  diffContext.putImageData(diff, 0, 0);

  let isEqual = !dist;

  if(isEqual) { // hash equal, re-check pixels
    const data = diff.data;
    for(let i = 0; i < data.length; i += 4) {
      const r = data[i],
        g = data[i + 1],
        b = data[i + 2];

      if(r === 255 && g === 0 && b === 0) {
        isEqual = false;
        break;
      }
    }
  } else if(pixelCompare) {
    const data1 = img1.data,
      data2 = img2.data;
    isEqual = data1.length === data2.length;
    for(let i = 0; isEqual && i < data1.length; i += 4) {
      const r = data1[i],
        g = data1[i + 1],
        b = data1[i + 2],
        a = data1[i + 3];

      if(r !== data2[i] || g !== data2[i + 1] || b !== data2[i + 2] || a !== data2[i + 3]) {
        isEqual = false;
      }
    }
  }

  if(!isEqual) {
    fs.writeFileSync(diffFile, diffCanvas.toBuffer());
    fs.writeFileSync(srcFile, canvas.toBuffer());
  } else {
    if(fs.existsSync(diffFile)) {
      fs.unlinkSync(diffFile);
    }
    if(fs.existsSync(srcFile)) {
      fs.unlinkSync(srcFile);
    }
  }

  return isEqual;
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = {
  compare,
  wait,
};
