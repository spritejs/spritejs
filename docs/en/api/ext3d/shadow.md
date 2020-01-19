## Shadow

继承Ogl的Shadow。

### Methods

##### add(node, opts = {})

将元素添加到阴影层用于显示阴影

opts参数如下：

- receive = true,
- cast = true,
- vertex = defaultVertex,
- fragment = defaultFragment,
- uniformProjection = 'shadowProjectionMatrix',
- uniformView = 'shadowViewMatrix',
- uniformTexture = 'tShadow',