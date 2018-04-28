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
