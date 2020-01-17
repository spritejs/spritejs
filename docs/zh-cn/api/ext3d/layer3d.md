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

## Layer3d <sub>_extends_</sub> [Layer](zh-cn/api/layer)

Layer3d 元素表示一个3D扩展层，它对应一个Canvas上下文。

##### constructor(options)

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| alpha | boolean | true | alpha 通道 |
| antialias | boolean | true | 抗锯齿 |
| autoClear | boolean | true | 渲染前是否自动清除上一次绘制的内容 |
| displayRatio | number | 1 | 显示比率 |
| canvas | Canvas | null | 传给layer的Canvas上下文，如果不传，会创新新的上下文环境 |
| depth | boolean | true | 深度信息 |
| desynchronized | boolean | false | 设为true让浏览器减少Canvas绘制在事件循环中的延迟 |
| failIfMajorPerformanceCaveat | boolean | false | 设为true时，如果系统性能较低时，不创建上下文，webgl/webgl2有效 |
| id | string | '' | Layer 的 ID |
| powerPreference | enum: {default, high-performance, low-power} | default | 是否节能，webgl/webgl2有效 |
| premultipliedAlpha | boolean | true | 预处理 |
| preserveDrawingBuffer | boolean| false | 是否保留缓冲区数据 |
| stencil | boolean | false | 是否开启模板缓冲功能 |

### Attributes

| 属性名 | 继承 | 属性类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
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

##### _readonly_ body

当前layer的Transform对象。

##### _readonly_ camera

当前layer的相机。

##### _readonly_ gl

当前layer的webgl对象。

##### _readonly_ meshes

当前layer所有的meshes。

##### _readonly_ orbitControls

获得orbit控制器对象。

##### _readonly_ post

获得后期处理通道对象。

##### _readonly_ renderOptions

获得渲染配置项。

##### _readonly_ root

layer的根分组。

##### _readonly_ shadow

获得阴影对象。

##### autoClear = true

绘制前是否自动清除layer或FrameBuffer。

#### _继承自Layer_

##### _readonly_ autoRender

是否自动渲染，根据创建layer时的参数决定，具体用法见[外部时钟](/zh-cn/guide/ticker)。

##### _readonly_ displayRatio

显示像素比，根据scene的参数决定，具体用法见[屏幕适配](/zh-cn/guide/resolution)。

##### _readonly_ offscreen

如果layer的canvas配置为offscreen，则这个属性为true。

##### _readonly_ renderer

layer的renderer对象

##### _readonly_ renderOffset

layer相对Scene的容器的坐标偏移量。

##### _readonly_ timeline

控制动画的时间线。

##### prepareRender

一个Promise，对应当前帧渲染的状态，只有在autoRender为true的时候才有效。

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

##### bindTarget(target, options = {}) 

绑定RenderTarget对象，让layer执行渲染。

##### bindTime(program, opts = {})

执行这个操作让layer自动更新对应的program的`uniforms.uTime`。这里的opts是timeline的配置项。

##### createProgram({attributes, texture, uniforms, ...options} = {}, {attributes: extraAttributes, uniforms: extraUniforms} = {})

用当前layer的上下文创建一个Program对象。

##### createText(text, {font, fillColor = '#000', strokeColor, strokeWidth = 1})

用指定font属性创建一个包含文字的纹理对象。

##### createTexture(opts)

创建纹理对象。

##### createShadow({width = this.canvas.width, height = this.canvas.height, light = this[_camera]} = {})

创建阴影对象。

##### _override_ dispatchPointerEvent(event)

转发一个鼠标或触屏事件。

##### _async_ loadImage(src)

加载图片。

##### _async_ loadImages(imgs) 

加载多张图片。

##### _async_ loadModel(src)

加载模型数据。

##### async loadShader({vertex, fragment})

加载shader文件。

##### _override_ render()

执行渲染。

##### renderTarget(target, options = {})

渲染RenderTarget对象。

##### setLights(program, lights)

设置光照。

##### setOrbit(options = {target: [x,y,z]})

设置轨迹控制。

##### setRaycast(enable = true)

设置碰撞检测。

##### setRenderOptions(opts)

设置绘制选项，可配置项如下：

- update = true,
- sort = true,
- frustumCull = true,
- clear,

##### _override_ setResolution({width, height})

设置元素的上下文分辨率。

##### setShadow(shadow)

将阴影设置到当前layer。

##### setUniforms(program, uniforms)

将uniforms设置到对应的program。

##### traverse(callback)

遍历layer上的每一个元素节点。

##### unbindTime(program)

取消program上的uTime绑定。

##### unbindTarget(target)

取消RenderTarget对象的绑定。

#### _继承自Layer_

##### forceUpdate()

强制重绘画布。

##### onPropertyChange(key, newValue, oldValue)

当元素属性值被改变时，执行的动作。

##### toGlobalPos(x, y)

将Layer的坐标转换为DOM事件坐标。

##### toLocalPos(x, y)

将DOM事件坐标转换为Layer的坐标。

#### _继承自Group_

##### append(...els)

批量添加元素到group中。

##### appendChild(el)

将一个元素添加到group中。

##### _override_ cloneNode(deep = false)

Copy一个Group，如果deep为true，则同时复制Group中的子孙元素。

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

##### reorder()

将children按照zIndex和zOrder次序重新排列，这个操作更新orderedChildren。

##### seal()

将子元素拓印，以提升性能。用法详见[提升性能](/zh-cn/guide/performance)。

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
