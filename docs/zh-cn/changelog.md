# Change Log

## [2.0.0-alpha.1][2018-04-23]

### 新特性

- 支持hsl(a)颜色值以及hwb(a)颜色值
- svg path支持矢量缩放
- layer支持粘连模式，解决屏幕适配问题
- 支持了 transformOrigin 属性
- 支持 devtools

### 接口变更

- cache图片取代cache canvas，解决了svg自适应图片伸缩的bug
- 取消了textures设置为sprite的方式，以简化Resouce实现，此类需求可以用Group解决
- 取消了draw/drawOnce API，改为beforedraw、afterdraw事件
- 将Axis类移至扩展库[sprite-extend-d3axis](https://github.com/spritejs/sprite-extend-d3axis)
- gradients g可以直接设置在颜色值的属性中（推荐写法），而不用设置在`attr('gradients')`中了
- 改变了继承方式，通过Sprite类和派生类提供defineAttributes API来实现继承

### bug修复

- 修复了Resouce资源预加载时id设置无效的bug
- 修复动画回放（playbackRate < 0）时的bug
- 修复了renderRepaintDirty的一些边界bug
- 修复了派发自定义事件的bug
- 修复borderRadius设置后内容超出边界的bug
- 修复默认颜色值的bug
- 修复快照bug

### 其他

- 增加了benchmark测试
- 重构了核心逻辑代码，提升了性能
- 添加了部分单元测试

## [2.0.0-alpha.2][2018-04-24]

### bug修复

- 修复alpha.1通过npm安装时依赖库sprite-core找不到的问题

### 改进

- 完善了node环境下安装的文档

## [2.0.0-alpha.3][2018-04-24]

### bug修复

- 继续修复依赖库的bug，因为跨平台，有些平台依赖有问题

### 改进

- 减小了打包文件的体积

## [2.0.0-alpha.4][2018-04-26]

### bug修复

- 修复bug: Group元素如果设置了宽高，会导致Label子元素定位错误

## [2.0.0-alpha.5][2018-04-28]

### bug修复

- 修复bug: Group添加child时不能触发渲染刷新
- 修复bug: Group元素不能触发mouseleave

### 其他

- 更新了doc封面，修复了examples中的部分例子错误

## [2.0.0-alpha.6][2018-04-28]

### bug修复

- 修复bug: 容器设置了transform，layer的鼠标位置不正确

## [2.0.0-alpha.7][2018-05-11]

### 改进

- 兼容了 matter-js 物理引擎

## [2.0.0-alpha.8][2018-05-16]

### bug修复

- 修复了元素边界1px精度问题
- 修复了元素不可见仍然可以点击问题
- 修复了canvas与容器大小不一致时viewport计算错误问题

### 改进

- 调整文档

## [2.0.0-alpha.9][2018-05-16]

### 改进

- 当canvas从DOM树上移除时，清理相应的layer，以保证单页应用中资源得到释放
- 修复文档中的问题（文档是单页应用）
- 文档首页中cavase动画在可视区域之外会导致iphone手机浏览器崩溃，未能查出根本原因，目前解决方法是如果canvas区域在可视区域之外，停止动画播放

## [2.0.0-alpha.10][2018-05-16]

### 改进

- 优化Group对象的渲染性能

## [2.0.0-alpha.11][2018-05-21]

### bug修复

- 修复transform多次赋值的bug
- 修复group缓存引起的bug

### 改进

- 修复Layer和Group的insertBefore
- 修改和完善 Demo

## [2.0.0-alpha.12][2018-05-21]

### 改进

- 元素的.on方法允许同时监听多个事件
- 动画的cancel增加参数boolean类型，允许中途取消动画并保持元素动画状态
- Scene增加insertBefore

## [2.0.0-alpha.14][2018-05-25]

### bug 修复

- 重构了sprite-timeline修复了动画多个bug
- 修复了未更新元素属性update事件也会被触发的bug

### 改进

- event.stopDispatch()只对同级（同一个layer下的元素或者同一个group中的元素）生效，不会阻止父容器
- 增加了一些属性的自动parseFloat
- 增加了属性表达式，现在可以`sprite.attr({x: x => x+1})

## [2.0.0-alpha.15][2018-05-28]

### 改进

- 支持了[虚线 border](http://localhost:9090/#/api/sprite)、虚线 Path
- 实现属性获取的 immutable，避免副作用

## [2.0.0-alpha.16][2018-05-29]

### bug修复

- 修复了在小程序版本下isFinite错误的问题

### 改进

- 支持了sprite的transition
