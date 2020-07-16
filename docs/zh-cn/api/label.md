<style>
  sub > em {
    font-size: 12px;
    margin-right: 10px;
  }

  h5 {
    padding-top: 10px;
    border-top: dashed 1px #ddd;
  }
</style>
## Label <sub>_extends_</sub> [Block](zh-cn/api/block)

Label 绘制一段文本。

### Attributes

| 属性名 | 继承 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| text | | string | '' | 要绘制的文本内容 |
| fontSize | | number | 16 | 字体大小 |
| fontFamily | | string | sans-serif | 字体族 |
| fontStyle | | string | normal | 字体样式 |
| fontVariant | | string | normal | 字体变体 |
| fontWeight | | string | normal | 字体粗细 |
| fontStretch | | string | normal | 字体变形 |
| lineHeight | | number | 等于fontSize值 | 行高 |
| font | | string | 16px/16px sans-serif | 字体简写 |
| textAlign | | enum: {left, center, right} | left | 字体对齐 |
| strokeColor | | color | undefined | 字体描边颜色 |
| strokeWidth | | number | 1 | 字体描边宽度 |
| fillColor | | color | undefined | 字体填充颜色 |
| verticalAlign | | enum: {top, middle, bottom} | middle | 垂直对齐方式 |
| anchorX | Block | number | 0 | X 轴向锚点 |
| anchorY | Block | number | 0 | Y 轴向锚点 |
| anchor | Block | Array | [0, 0] | [anchorX, anchorY] 简写 |
| width | Block | number | undefined | 元素宽度，不设定的话一般根据内容自适应 |
| height | Block | number | undefined | 元素高度，不设定的话一般根据内容自适应 |
| size | Block | Array | [undefined, undefined] | [width, height] 简写 |
| borderWidth | Block | number | 0 | border宽度 |
| borderColor | Block | color | rgba(0,0,0,1) | border颜色 |
| border | Block | Array | [0, 'rgba(0,0,0,1)'] | [borderWidth, borderColor] 简写 |
| borderDash | Block | Array | undefined | border虚线 |
| borderDashOffset | Block | number | 0 | border虚线偏移 | 
| borderTopLeftRadius | Block | Array | [0, 0] | border左上圆角 |
| borderTopRightRadius | Block | Array | [0, 0] | border右上圆角 |
| borderBottomRightRadius | Block | Array | [0, 0] | border右下圆角 |
| borderBottomLeftRadius | Block | Array | [0, 0] | border左下圆角 |
| borderRadius | Block | Array or number | 0 | 各个方向圆角的简写 |
| bgcolor | Block | color | undefined | 背景色 |
| paddingTop | Block | number | 0 | 上内边距 |
| paddingRight | Block | number | 0 | 右内边距 |
| paddingBottom | Block | number | 0 | 下内边距 |
| paddingLeft | Block | number | 0 | 左内边距 |
| padding | Block | Array | [0, 0, 0, 0] | [paddingTop, paddingRight, paddingBottom, paddingLeft] 简写 |
| boxSizing | Block | enum: {content-box, border-box} | content-box | 同CSS的box-sizing |
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

##### text

同 el.attributes.text

#### _继承自Block_

##### _readonly_ borderSize

元素边框大小，等于`元素内容 + padding + border的一半`。

##### _readonly_ clientSize

元素内容盒子大小，等于`元素内容 + padding`。

##### _readonly_ contentSize

元素内容大小。

##### _readonly_ hasBorder

是否有设定边框，borderWidth > 0 且 borderColor 不为 undefined 返回 true。

##### _readonly_ isVisible

元素是否可见。

##### _readonly_ mesh

获取元素的几何网格数据对象。

##### _readonly_ offsetSize

元素内容盒子+边框大小，等于`元素内容 + padding + border`。

##### _readonly_ originalClientRect

矩阵变换前的内容盒子区域。

##### _readonly_ originalContentRect

矩阵变换前的内容区域。

#### _继承自Node_

##### _readonly_ ancestors

返回当前元素的祖先元素列表。

#### _readonly_ animations

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

##### _override_ draw(meshes = [])

返回元素相关的几何网格列表，用于渲染。

##### _override_ onPropertyChange(key, newValue, oldValue)

当元素属性值被改变时，执行的动作。

##### _override_ updateContours()

更新图形的轮廓信息。

#### _继承自Block_

##### getBoundingClientRect()

获取元素实际绘制区域信息。

#### _继承自Node_

###### activateAnimations() {

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