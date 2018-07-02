SpriteJS使用Path对象绘制矢量图形。Path对象支持svg-path，因此能够很灵活地绘制各种图形。

## 创建Path

Path的构造函数可以接受一个svgpath字符串作为参数。

```js
const p1 = new Path('M280,250A200,200,0,1,1,680,250A200,200,0,1,1,280,250Z')
```

## findPath()

`findPath(offsetX, offsetY)` 获取相对于元素指定坐标上的svgpath路径，如果当前位置在svgpath的范围外，返回空数组[]，否则返回包含对应svgpath（目前只会返回一个path，未来如果支持多路径，可能会发挥多个）的数组

Path的mouse和touch事件会调用这个方法，把命中的svgpath结果放在`event.targetPaths`中

## getPathLength()

获取svgpath路径的总长度

## getPointsAtLength()

`getPointsAtLength(length)` 获取svgpath路径上指定长度的点的位置

## lineWidth

只读属性，获取实际的lineWidth，如果只有fillColor没有strokeColor，返回0，否则返回`attr({lineWidth})`

## path

获取或设置path，等同于`sprite.attr({path})`

## pathSize

只读属性，获取svgpath的实际宽高
