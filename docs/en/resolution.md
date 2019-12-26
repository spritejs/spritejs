## Resolution

In spritejs<sup>Next</sup>, the drawing area is determined by the `width` and `height` attributes of the scene.

The `width` and `height` attributes affect the width and height of the canvas, but they are not necessarily the same as the width and height of the viewport. By default, the viewport is determined by the scene's container, or it can also be controlled through CSS styles.

```js
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1540,
  height: 600,
});
```

With CSS properties, we can define the scene adapted to the container size.

```css
#adaptive {
  width: 50%;
  padding-bottom: 50%;
  background: #eee;
}
```

```js
const {Scene, Path} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1600,
  height: 1600,
});
const layer = scene.layer();

const path = new Path('M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z');

const rect = path.originalContentRect;

path.attr({
  anchor: [0.5, 0.5],
  pos: [800 - rect[2] / 2, 800 - rect[3] / 2],
  fillColor: 'red',
});

layer.append(path);
```

<iframe src="/demo/#/doc/resolution" height="400"></iframe>

By default, the canvas is always zoomed according to the width and height of the viewport. When the screen scale is not consistent with `width / height`, stretch deformation may occur:

```css
#container {
  width: 50%;
  padding-bottom: 30%;
  background: #eee;
}
```

```js
const {Scene, Sprite} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 600,
  height: 600,
});
const layer = scene.layer();

for(let i = 0; i < 8; i++) {
  for(let j = 0; j < 8; j++) {
    const brick = new Sprite();
    const bgcolor = (i + j) % 2 ? 'black' : 'white';
    brick.attr({
      size: [100, 100],
      pos: [i * 100 - 50, j * 100 - 50],
      bgcolor,
    });

    layer.append(brick);
  }
}
```

To avoid stretch deformation, you can set the scene mode to one of `stickywidth, stickyheight, stickyleft, stickyright, stickytop or stickybottom` as appropriate. For details, please refer to [screen adaptation](/en/guide/resolution).

<iframe src="/demo/#/doc/resolution_scale" height="400"></iframe>