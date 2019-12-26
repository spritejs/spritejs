export function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.src = src;
  });
}