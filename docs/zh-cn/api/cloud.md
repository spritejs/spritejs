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
## Cloud <sub>_extends_</sub> [Node](zh-cn/api/node)

Cloud是一个特殊的元素，它可以将其他元素的mesh作为模型同时绘制多个在画布上。

### constructor(node, amount = 1)

以node元素为模板创建cloud元素。

### Properties

##### _readonly_ meshCloud

获得MeshCloud网格对象。

##### amount

元素绘制的数量。

#### _继承自Node_

##### _readonly_ ancestors

返回当前元素的祖先元素列表。

##### _readonly_ animations

返回当前元素执行中的所有动画。

##### _readonly_ filters

获取当前元素上的滤镜。

##### _readonly_ isVisible

元素是否可见。

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

##### brightness(idx, p)

设置第idx次绘制的元素的色彩亮度。

##### contrast(idx, p)

设置第idx次绘制的元素的对比度。

##### _override_ draw(meshes = [])

返回元素相关的几何网格列表，用于渲染。

##### getTransform(idx)

获取第idx个元素的transform矩阵。

##### grayscale(idx, p)

设置第idx次绘制的元素的灰度。

##### hueRotate(idx, deg)

设置第idx次绘制的元素的色相偏转角度。

##### isPointCollision(x, y)

判断事件坐标是否与元素相交。

##### invert(idx, p)

设置第idx次绘制的元素的反色。

##### opacity(idx, p)

设置第idx次绘制的元素的透明度。

##### rotate(idx, ang, [ox, oy] = [0, 0])

设置第idx次绘制的元素的旋转角度。

##### saturate(idx, p)

设置第idx次绘制的元素的饱和度。

##### scale(idx, [x, y = x], [ox, oy] = [0, 0])

设置第idx次绘制的元素的缩放。

##### setColorTransform(idx, m)

设置第idx次绘制的元素的颜色变换矩阵，默认值为单位矩阵。

##### setFillColor(idx, color)

设置第idx次绘制的元素的填充色。

##### sepia（idx, p）

设置第idx次绘制的元素的暗度。

##### _override_ setResolution({width, height})

设置元素的上下文分辨率。

##### setStrokeColor(idx, color)

设置第idx次绘制的元素的描边色。

##### setTransform(idx, m)

设置第idx次绘制的元素的位置变换矩阵，默认值为单位矩阵。

##### skew(idx, [x, y = x], [ox, oy] = [0, 0])

设置第idx次绘制的元素的扭曲度。

##### transform(idx, m)

对第idx次绘制的元素进行位置变换。

##### transformColor(idx, m)

对第idx次绘制的元素进行颜色变换。

##### translate(idx, [x, y])

对第idx次绘制的元素进行平移。

#### 继承自_Node_

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

##### onPropertyChange(key, newValue, oldValue)

当元素属性值被改变时，执行的动作。

##### setAttribute(key, value)

设置元素属性值。

##### setMouseCapture()

捕获鼠标。

##### releaseMouseCapture()

释放鼠标。

##### remove()

将元素从parent上移除。

##### removeAttribute(key)

移除元素属性值，恢复为默认值。

##### removeEventListener(type, listener, options)

移除事件监听器。

##### transition(sec, easing = 'linear')

创建过度动画。

##### updateContours()

更新图形的轮廓信息。