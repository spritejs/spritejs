<style>
  sub > em {
    font-size: 12px;
    margin-right: 10px;
  }
</style>
## Scene <sub>_extends_</sub> [Group](zh-cn/api/group)

Scene 管理一个或多个Layer。

### Properties

##### _readonly_ hasOffscreenCanvas

是否有离屏canvas，根据情况会选择不同的渲染模式。

##### displayRatio

获取或设置像素比。

##### hight

获取或设置画布高度。

##### mode

获取或设置适配模式。

##### width

获取或设置画布宽度。

#### _继承自Group_

##### _readonly_ childNodes

children的别名

##### _readonly_ children

子元素

##### _readonly_ orderedChildren

按照zIndex和zOrder排序后的子元素

#### _继承自Block_

##### _readonly_ borderSize

元素边框大小，等于`元素内容 + padding + border的一半`。

##### _readonly_ clientSize

元素内容盒子大小，等于`元素内容 + padding`。

##### _readonly_ contentSize

元素内容大小。

##### _readonly_ hasBackground

是否有填充背景，borderColor 不为 undefined 返回 true。

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

##### constructor(options)

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| alpha | boolean | true | alpha 通道 |
| autoRender | boolean | true | 自动渲染 |
| antialias | boolean | true | 抗锯齿，webgl/webgl2有效 |
| bufferSize | number | 1500 | 缓冲区大小，用来合并渲染，越大越耗内存，但是相应地渲染批次能减少 |
| container | HTMLElement | null | 创建画布的元素容器，如果不传，则会创建一个新的元素 |
| contextType | enum: {webgl2, webgl, 2d} | webgl2 | 渲染上下文类型 |
| depth | boolean | true | 深度信息，webgl/webgl2有效 |
| desynchronized | boolean | false | 设为true让浏览器减少Canvas绘制在事件循环中的延迟 |
| failIfMajorPerformanceCaveat | boolean | false | 设为true时，如果系统性能较低时，不创建上下文，webgl/webgl2有效 |
| powerPreference | enum: {default, high-performance, low-power} | default | 是否节能，webgl/webgl2有效 |
| premultipliedAlpha | boolean | true | 预处理 |
| preserveDrawingBuffer | boolean| false | 是否保留缓冲区数据 |
| stencil | boolean | false | 是否开启模板缓冲功能 |
| width | number | _required_ | Canvas的宽度 |
| height | number | _required_ | Canvas的高度 |
| stickyMode | enum: {scale, stickyTo, stickyHeight, stickyBottom, stickyLeft, stickyWidth, stickyRight} | scale | Canvas的渲染模式 |

##### _override_ appendChild(el)

将一个元素添加到group中。

##### _override_ forceUpdate()

强制重绘画布。

##### _override_ insertBefore(el, ref)

将指定元素插入到ref元素之前，如果ref为null，则将el添加到group末尾，如果ref不为null且不是group的子元素，抛出异常。

##### layer(id = 'default', options = {})

创建并获取对应的Layer。

##### _async_ preload(...resources)

异步加载资源。

##### _override_ removeChild(el)

将指定元素移出group。

##### render()

当layer中有离屏canvas的情况，会调用这个方法进行渲染。

##### _override_ replaceChild(el, ref)

将ref元素用新的el元素替代。如果ref元素不在当前group中，则抛出异常。

##### resize()

根据外层容器调整大小。

##### _override_ setResolution({width, height})

设置元素的上下文分辨率。

##### snapshot({offscreen = false} = {})

获取当前时刻的快照。

#### _继承自Group_

##### append(...els)

批量添加元素到group中。

##### _override_ cloneNode(deep = false)

Copy一个Group，如果deep为true，则同时复制Group中的子孙元素。

##### _override_ dispatchPointerEvent(event)

转发一个鼠标或触屏事件。

##### _override_ draw(meshes = [])

返回元素相关的几何网格列表，用于渲染。

##### getElementById(id)

返回指定id的子元素。

##### getElementsByClassName(className)

返回指定className的子元素列表

##### getElementsByName(name)

返回指定name的子元素列表。

##### getElementsByTagName(name)

返回指定类型的子元素列表。

##### querySelctor(selector)

根据选择器返回指定的子元素。

##### querySelectorAll(selector)

根据选择器返回所有匹配的子元素列表。

##### removeAllChildren()

将group的所有子元素移除。

##### reorder()

将children按照zIndex和zOrder次序重新排列，这个操作更新orderedChildren。

##### seal()

将子元素拓印，以提升性能。用法详见[提升性能](/zh-cn/guide/performance)。

##### _override_ updateContours()

更新图形的轮廓信息。

#### _继承自Block_

##### getBoundingClientRect()

获取元素实际绘制区域信息。

##### _override_ onPropertyChange(key, newValue, oldValue)

当元素属性值被改变时，执行的动作。

#### _继承自Node_

###### activateAnimations() {

激活元素上正在执行的所有动画。

##### addEventListener(type, listener, options = {})

注册事件监听器。

##### animate(frames, timing)

执行动画。

##### attr(...args)

读取或批量设置属性。

##### connect(parent, zOrder)

当元素被添加到对象树上时，该函数被调用，parent和zOrder被赋给元素。

##### deactivateAnimations()

停止元素上正在执行的所有动画。

##### disconnect()

当元素从对象树上移除时，该函数被调用，parent和zOrder属性被移除。

##### dispatchEvent(event)

转发一个自定义事件。

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