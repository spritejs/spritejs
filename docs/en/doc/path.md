SpriteJS uses the Path object to draw vector graphics. The Path object supports svg-path, so it is very flexible to draw various graphics.

## Create Path

The constructor of Path can accept an svgpath string as a parameter.

```js
const p1 = new Path('M280,250A200,200,0,1,1,680,250A200,200,0,1,1,280,250Z')
```

## findPath()

`findPath(offsetX, offsetY)` Gets the svgpath relative to the specified coordinates of the element. If the current position is outside the range of svgpath, it returns an empty array [], otherwise it returns the corresponding svgpath in an array.

## getPathLength()

Get the total length of the svgpath.

## getPointsAtLength()

`getPointsAtLength(length)` Get the position of the point of the specified length on the svgpath.

## lineWidth

Get the actual lineWidth.

## path

Get or set path, equivalent to `sprite.attr({path})`

## pathSize

Readonly, get the actual width and height of the svgpath.
