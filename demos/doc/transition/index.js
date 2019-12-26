const {Scene, Arc} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

async function createBubble() {
  const x = 100 + Math.random() * 1000,
    y = 100 + Math.random() * 400;
  const r = Math.round(255 * Math.random()),
    g = Math.round(255 * Math.random()),
    b = Math.round(255 * Math.random());

  const fillColor = `rgb(${r},${g},${b})`;
  const bubble = new Arc();
  bubble.attr({
    fillColor,
    radius: 25,
    x,
    y,
  });
  layer.append(bubble);
  await bubble.transition(2.0).attr({
    scale: [2.0, 2.0],
    opacity: 0,
  });
  bubble.remove();
}

setInterval(() => {
  createBubble();
}, 50);