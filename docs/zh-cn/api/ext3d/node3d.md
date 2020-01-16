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

## Node3d

Node3d是所有 SpriteJS <sup>Next</sup> 3D扩展元素的公共基类。

### Attributes

| 属性名 | 继承 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| x | | number | 0 | 元素 X 轴坐标 |
| y | | number | 0 | 元素 Y 轴坐标 |
| z | | number | 0 | 元素 Z 轴坐标 |
| pos | | Array | [0, 0, 0] | [x, y, z] 简写 |
| rotateX | | number | 0 | 绕 X 轴旋转 |
| rotateY | | number | 0 | 绕 Y 轴旋转 |
| rotateZ | | number | 0 | 绕 Z 轴旋转 |
| rotate | | Array | [0, 0, 0] | [rotateX, rotateY, rotateZ] 简写 |
| scaleX | | number | 1 | 绕 X 轴旋转 |
| scaleY | | number | 1 | 绕 Y 轴旋转 |
| scaleZ | | number | 1 | 绕 Z 轴旋转 |
| scale | | Array | [1, 1, 1] | [scaleX, scaleY, scaleZ] 简写 |
| raycast | | string | undefined | 碰撞检测的模式，默认检测bounds，如果设为sphere则进行球形检测 |
| id | | string | '' | 设定元素的ID |
| name | | string | '' | 设定元素的name |
| className | | string | '' | 设定元素的className |
| display | | string | '' | 设定元素的可见性 |
| pointerEvents | | string | visible | 同CSS的pointerEvents |

### Properties

##### _readonly_ body

当前元素的Mesh或Transform对象。

##### _readonly_ isVisible

元素是否可见。

##### _readonly_ localMatrix

当前元素的变换矩阵。

##### _readonly_ matrix

localMatrix的别名。

##### _readonly_ mesh

当前元素的Mesh对象，如果没有，返回null

##### _readonly_ meshes

当前元素和它的子孙元素的Mesh对象列表。

##### _readonly_ modelViewMatrix

经过相机换算后的变换矩阵。

##### _readonly_ normalMatrix

法向变换矩阵，一个3X3的矩阵，用来计算光照。

##### _readonly_ renderMatrix

相对于layer的变换矩阵。

##### _readonly_ worldMatrix

renderMatrix的别名。

##### _readonly_ zDepth

元素相对z轴的深度。

#### _继承自Node_

##### _readonly_ ancestors

返回当前元素的祖先元素列表。

##### _readonly_ animations

返回当前元素执行中的所有动画。

##### _readonly_ layer

返回当前绘制上下文中的Layer对象。

##### _readonly_ parent

返回当前对象的父对象。

##### _readonly_ renderer

返回当前绘制上下文中的渲染对象。

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

##### _override_ connect(parent, zOrder)

当元素被添加到对象树上时，该函数被调用，parent和zOrder被赋给元素。

##### _override_ disconnect()

当元素从对象树上移除时，该函数被调用，parent和zOrder属性被移除。

##### lookAt([x, y, z])

让元素转向到对应的坐标所在的方向。

##### _override_ onPropertyChange(key, newValue, oldValue)

当元素属性值被改变时，执行的动作。

##### setBody(body, update = true) 

设置元素的Mesh对象。

##### traverse(callback) 

遍历当前元素和所有的子孙元素。

##### updateMatrix() 

更新matrix。

##### updateMatrixWorld(force = false)

更新worldMatrix。

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

##### deactivateAnimations()

停止元素上正在执行的所有动画。

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