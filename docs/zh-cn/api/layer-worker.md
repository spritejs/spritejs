<style>
  sub > em {
    font-size: 12px;
    margin-right: 10px;
  }
</style>
## LayerWorker <sub>_extends_</sub> Worker

LayerWorker 继承一个Worker对象，它能在Worker中渲染一个Layer。

### Properties

##### _readonly_ id

LayerWorker的ID。

### Methods

##### constructor(options)

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| alpha | boolean | true | alpha 通道 |
| autoRender | boolean | true | 自动渲染 |
| antialias | boolean | true | 抗锯齿，webgl/webgl2有效 |
| bufferSize | number | 1500 | 缓冲区大小，用来合并渲染，越大越耗内存，但是相应地渲染批次能减少 |
| canvas | Canvas | null | 传给layer的Canvas上下文，如果不传，会创新新的上下文环境 |
| contextType | enum: {webgl2, webgl, 2d} | webgl2 | 渲染上下文类型 |
| depth | boolean | true | 深度信息，webgl/webgl2有效 |
| desynchronized | boolean | false | 设为true让浏览器减少Canvas绘制在事件循环中的延迟 |
| failIfMajorPerformanceCaveat | boolean | false | 设为true时，如果系统性能较低时，不创建上下文，webgl/webgl2有效 |
| id | string | '' | Layer 的 ID |
| powerPreference | enum: {default, high-performance, low-power} | default | 是否节能，webgl/webgl2有效 |
| premultipliedAlpha | boolean | true | 预处理 |
| preserveDrawingBuffer | boolean| false | 是否保留缓冲区数据 |
| stencil | boolean | false | 是否开启模板缓冲功能 |
| worker | string | `./${options.id}.worker.js` | worker脚本文件URL |