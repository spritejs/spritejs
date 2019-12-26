<style>
  sub > em {
    font-size: 12px;
    margin-right: 10px;
  }
</style>
## LayerWorker <sub>_extends_</sub> Worker

LayerWorker inherits from a worker object. It can render a layer in the web worker.

### Properties

##### _readonly_ id

The ID of the LayerWorker.

### Methods

##### constructor(options)

| Name | Type |Defaul | Instruction |
| --- | --- | --- | --- |
| alpha | boolean | true | alpha channel |
| autoRender | boolean | true | auto render |
| antialias | boolean | true | antialias option for webgl/webgl2 |
| bufferSize | number | 1500 | BufferSize is used to merge rendering. The larger the buffer size is, the more memory will be consumed, but the corresponding drawing count can be reduced |
| canvas | Canvas | null | Canvas context passed to the layer, if not specified, layer will create a new context environment. |
| contextType | enum: {webgl2, webgl, 2d} | webgl2 | The context type |
| depth | boolean | true | depth option for webgl/webgl2 |
| desynchronized | boolean | false | Set to true to reduce the delay of canvas drawing in the event loop |
| failIfMajorPerformanceCaveat | boolean | false | failIfMajorPerformanceCaveat option for webgl/webgl2 |
| id | string | '' | Layer's ID |
| powerPreference | enum: {default, high-performance, low-power} | default | powerPreference option for webgl/webgl2 |
| premultipliedAlpha | boolean | true | premultipliedAlpha option for webgl/webgl2 |
| preserveDrawingBuffer | boolean| false | preserveDrawingBuffer option for webgl/webgl2 |
| stencil | boolean | false | stencil option for webgl/webgl2 |
| worker | string | `./${options.id}.worker.js` | Worker script file URL |