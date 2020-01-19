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

## Plane <sub>_extends_</sub> [Mesh3d](zh-cn/api/ext3d/mesh3d)

Plane是平面元素。

### constructor(program, attrs)

构造函数

### Attributes

| 属性名 | 继承 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| width | | number | 1 | 元素的宽度 |
| height | | number | 1 | 元素的高度 |
| widthSegments | | number | 1 |  |
| heightSegments | | number | 1 |  |
| mode | Mesh3d | string | TRIANGLES | 设置绘制模式 |
| colors | Mesh3d | Color | #80808080 | 每个顶点的颜色 |
| colorDivisor | Mesh3d | number | 3 | 每个color值赋给几个顶点 |
| x | Node3d | number | 0 | 元素 X 轴坐标 |
| y | Node3d | number | 0 | 元素 Y 轴坐标 |
| z | Node3d | number | 0 | 元素 Z 轴坐标 |
| pos | Node3d | Array | [0, 0, 0] | [x, y, z] 简写 |
| rotateX | Node3d | number | 0 | 绕 X 轴旋转 |
| rotateY | Node3d | number | 0 | 绕 Y 轴旋转 |
| rotateZ | Node3d | number | 0 | 绕 Z 轴旋转 |
| rotate | Node3d | Array | [0, 0, 0] | [rotateX, rotateY, rotateZ] 简写 |
| scaleX | Node3d | number | 1 | X 轴拉伸 |
| scaleY | Node3d | number | 1 | Y 轴拉伸 |
| scaleZ | Node3d | number | 1 | Z 轴拉伸 |
| scale | Node3d | Array | [1, 1, 1] | [scaleX, scaleY, scaleZ] 简写 |
| raycast | Node3d | string | undefined | 碰撞检测的模式，默认检测bounds，如果设为sphere则进行球形检测 |
| visibility | Node3d | enum | enum{visible,hidden} | 元素是否可见 |
| id | Node | string | '' | 设定元素的ID |
| name | Node | string | '' | 设定元素的name |
| className | Node | string | '' | 设定元素的className |
| display | Node | string | '' | 设定元素的可见性 |
| pointerEvents | Node | string | visible | 同CSS的pointerEvents |

### Properties

#### _继承自Mesh3d_

##### _readonly_ geometry

获取元素的几何体对象。

##### _readonly_ meshes

当前元素和它的子孙元素的Mesh对象列表。

##### _readonly_ model

获取几何数据。

##### _readonly_ program

获取GLProgram。

#### _继承自Group3d_

##### _readonly_ childNodes

children的别名

##### _readonly_ children

子元素

#### _继承自Node3d_

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

##### _override_ onPropertyChange(key, newValue, oldValue)

当元素属性值被改变时，执行的动作。

##### _override_ remesh()

重新创建Mesh对象。

#### _继承自Mesh3d_

##### addEventListener(type, listener, options = {})

注册事件监听器。

##### cloneNode(deep = false)

Copy一个元素，如果deep为true，同时Copy它的子元素。

##### removeAllListeners(type)

移除某类型的所有事件监听器。

##### removeEventListener(type, listener, options)

移除事件监听器。

##### setGeometry(model = this[_model])

设置或更新几何信息。

##### setProgram(program)

设置或更新GLProgram。

##### updateMesh()

设置或更新Mesh信息。

#### _继承自Group3d_

##### append(...els)

批量添加元素到group中。

##### appendChild(el)

将一个元素添加到group中。

##### getElementById(id)

返回指定id的子元素。

##### getElementsByClassName(className)

返回指定className的子元素列表

##### getElementsByName(name)

返回指定name的子元素列表。

##### getElementsByTagName(name)

返回指定类型的子元素列表。

##### insertBefore(el, ref)

将指定元素插入到ref元素之前，如果ref为null，则将el添加到group末尾，如果ref不为null且不是group的子元素，抛出异常。

##### querySelctor(selector)

根据选择器返回指定的子元素。

##### querySelectorAll(selector)

根据选择器返回所有匹配的子元素列表。

##### replaceChild(el, ref)

将ref元素用新的el元素替代。如果ref元素不在当前group中，则抛出异常。

##### removeAllChildren()

将group的所有子元素移除。

##### removeChild(el)

将指定元素移出group。

##### setResolution({width, height})

设置元素的上下文分辨率。

#### _继承自Node3d_

##### _override_ connect(parent, zOrder)

当元素被添加到对象树上时，该函数被调用，parent和zOrder被赋给元素。

##### _override_ disconnect()

当元素从对象树上移除时，该函数被调用，parent和zOrder属性被移除。

##### lookAt([x, y, z])

让元素转向到对应的坐标所在的方向。

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

##### transition(sec, easing = 'linear')

创建过渡动画。