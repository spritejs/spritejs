## Screen adaptation

Compared with the previous version, SpriteJS<sup>Next</sup> simplified screen adaptation parameters.

The previous version provides two parameters of `viewport` and `resolution` when creating scene, while the new version does not need to specify `viewport` manually, the `viewport` can be automatically adapt with container.

SpriteJS<sup>Next</sup> only have two options, `width` and `height`, equal to the `resolution` option of previous version.

## Sticky mode

SpriteJS<sup>Next</sup> also simplified sticky mode, only provide a `mode` option.

The mode options are as follows:

- scale - default value, Always stretch canvas to container size.
- stickyWidth - Set canvas width to container width, adapt height, and center vertically.
- stickyTop - Set canvas width to container width, adapt height, and align with container top.
- stickyBottom - Set canvas width to container width, adapt height, and align with container bottom.
- stickyHeight Set canvas width to container height, adapt width, and center vertically.
- stickyLeft  Set canvas width to container height, adapt width, and align with container left.
- stickyRight Set canvas width to container height, adapt width, and align with container right.

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 640,
  height: 1000,
  mode: 'stickyWidth',
  // contextType: '2d',
});
const layer = scene.layer();

(async function () {
  await scene.preload(
    {id: 'snow', src: 'https://p5.ssl.qhimg.com/t01bfde08606e87f1fe.png'},
    {id: 'cloud', src: 'https://p5.ssl.qhimg.com/t01d2ff600bae7fe897.png'}
  );

  const cloud = new Sprite('cloud');
  cloud.attr({
    anchor: [0.5, 0],
    pos: [320, -50],
    size: [200, 130],
  });
  layer.append(cloud);

  function addRandomSnow() {
    const snow = new Sprite('snow');
    const x0 = 20 + Math.random() * 600,
      y0 = 0;

    snow.attr({
      anchor: [0.5, 0.5],
      pos: [x0, y0],
      size: [50, 50],
    });

    snow.animate([
      {x: x0 - 10},
      {x: x0 + 10},
    ], {
      duration: 1000,
      fill: 'forwards',
      direction: 'alternate',
      iterations: Infinity,
      easing: 'ease-in-out',
    });

    const dropAnim = snow.animate([
      {y: -200, rotate: 0},
      {y: 2000, rotate: 1880},
    ], {
      duration: 15000,
      fill: 'forwards',
    });

    dropAnim.finished.then(() => {
      snow.remove();
    });

    layer.append(snow);
  }

  setInterval(addRandomSnow, 200);
}());
```

<iframe src="/demo/#/doc/sticky" height="450"></iframe>