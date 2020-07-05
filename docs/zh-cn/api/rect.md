<style>
  sub > em {
    font-size: 12px;
    margin-right: 10px;
  }
</style>
## Rect <sub>_extends_</sub> [Path](zh-cn/api/path)

Rect 元素可以绘制一个矩形。

### Attributes

| 属性名 | 继承 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| width | | number | 0 | 矩形的宽度 |
| height | | number | 0 | 矩形的高度 |
| size | | Array | [0, 0] | [width, height] 简写 |
| _readonly_ d | Path | string | '' | SVG-Path 路径，继承自 Path |
| normalize | Path | boolean | false | 是否标准化，如果为 true，那么绘制的时候会默认以图形的中心点作为锚点 |
| fillColor | Path | color | undefined | 填充颜色 |
| strokeColor | Path | color | undefined | 描边颜色 |
| lineWidth | Path | number | 1 | 描边宽度 |
| lineJoin | Path | enum: {miter, bevel, round} | miter | 连线接头样式 |
| lineCap | Path | enum: {butt, square} | butt | 线帽样式 |
| lineDash | Path | Array | undefined | 虚线样式 |
| lineDashOffset | Path | number | 0 | 虚线偏移 | 
| miterLimit | Path | number | 10 | 当lineJoin为miter时，设置miter最大长度 |
| texture | Path | Image | undefined | 背景/纹理图片 |
| textureRect | Path | Array | undefined | 背景/纹理图片绘制区域 |
| textureRepeat | Path | boolean | false | 重复绘制背景图片，2d模式下暂不支持 |
| sourceRect | Path | Array | undefined | 背景/纹理图片剪裁 |
| id | Node | string | '' | 设定元素的ID |
| name | Node | string | '' | 设定元素的name |
| className | Node | string | '' | 设定元素的className |
| x | Node | number | 0 | 元素 X 轴坐标 |
| y | Node | number | 0 | 元素 Y 轴坐标 |
| pos | Node | Array | [0, 0] | [x, y] 简写 |
| transform | Node | string | '' | transform变换 |
| transformOrigin | Node | Array | [0, 0] | transform 原点 |
| translate | Node | Array | [0, 0] | 平移变换 |
| rotate | Node | number | 0 | 旋转变换 |
| scale | Node | Array | [1, 1] | 拉伸变换 |
| skew | Node | Array | [0, 0] | 扭曲变换 |
| opacity | Node | number | 1 | 透明度 |
| zIndex | Node | number | 0 | 层叠坐标 |
| offsetPath | Node | string | undefined | 同CSS的offsetPath |
| offsetDistance | Node | number | 0 | 同CSS的offsetDistance |
| offsetRotate | Node | string | number | auto | 同CSS的offsetRotate |
| pointerEvents | Node | string | visible | 同CSS的pointerEvents |
| filter | Node | string | none | 设置Canvas滤镜 |

### Properties

##### _readonly_ isVisible

元素是否可见。

#### _继承自Path_

##### _readonly_ mesh

获取元素的几何网格信息。

##### _readonly_ originalClientCenter

矩阵变换前的内容盒子中心点。

##### _readonly_ originalClientRect

矩阵变换前的内容盒子区域。

##### _readonly_ originalContentRect

矩阵变换前的内容区域。

##### d

相当于 element.attributes.d。

#### _继承自Node_

##### _readonly_ ancestors

返回当前元素的祖先元素列表。

##### _readonly_ animations

返回当前元素执行中的所有动画。

##### _readonly_ filters

获取当前元素上的滤镜。

##### _readonly_ layer

返回当前绘制上下文中的Layer对象。

##### _readonly_ localMatrix

返回当前元素相对于父元素的变化矩阵。

##### _readonly_ parent

返回当前对象的父对象。

##### _readonly_ renderer

返回当前绘制上下文中的渲染对象。

##### _readonly_ renderMatrix

返回当前元素相对于画布坐标系的变换矩阵。

##### _readonly_ zOrder

返回当前对象被添加到对象树上的次序。

##### attributes

返回当前元素的属性对象。

##### className

相当于 element.attributes.className

##### id

相当于 element.attributes.id

##### name

相当于 element.attributes.name

##### zIndex

相当于 element.attributes.zIndex

### Methods

#### _继承自Path_

##### _override_ draw(meshes = [])

返回元素相关的几何网格列表，用于渲染。

##### getBoundingClientRect()

获取元素实际绘制区域信息。

##### getPathLength()

获得Path的总长度

##### getPointAtLength(len)

获得指定长度位置所在点的原始坐标

##### _override_ onPropertyChange(key, newValue, oldValue)

当元素属性值被改变时，执行的动作。

##### _override_ updateContours()

更新图形的轮廓信息。

#### _继承自Node_

##### activateAnimations() {

激活元素上正在执行的所有动画。

##### addEventListener(type, listener, options = {})

注册事件监听器。

##### animate(frames, timing)

执行动画。

##### attr(...args)

读取或批量设置属性。

##### cloneNode()

Copy整个元素。

##### connect(parent, zOrder)

当元素被添加到对象树上时，该函数被调用，parent和zOrder被赋给元素。

##### deactivateAnimations()

停止元素上正在执行的所有动画。

##### disconnect()

当元素从对象树上移除时，该函数被调用，parent和zOrder属性被移除。

##### dispatchEvent(event)

转发一个自定义事件。

##### dispatchPointerEvent(event)

转发一个鼠标或触屏事件。

##### forceUpdate()

强制重绘画布。

##### getAttribute(key)

读取元素属性值。

##### getListeners(type, {capture = false} = {})

获取事件监听器。

##### getOffsetPosition(x, y)

将相对于Layer的指定[x, y]坐标变换为相对于当前元素的坐标，以锚点为原点。

##### getResolution()

获取元素的上下文分辨率。

##### isPointCollision(x, y)

判断事件坐标是否与元素相交。

##### setAttribute(key, value)

设置元素属性值。

##### setMouseCapture()

捕获鼠标。

##### setResolution({width, height})

设置元素的上下文分辨率。

##### releaseMouseCapture()

释放鼠标。

##### remove()

将元素从parent上移除。

##### removeAttribute(key)

移除元素属性值，恢复为默认值。

##### removeEventListener(type, listener, options)

移除事件监听器。

##### transition(sec, easing = 'linear')

创建过渡动画。