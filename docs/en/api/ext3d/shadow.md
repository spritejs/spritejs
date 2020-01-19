## Shadow

Inherit from OGL's shadow.

### Methods

##### add(node, opts = {})

Add elements to shadow layers to create shadows.

opts as follows:

- receive = true,
- cast = true,
- vertex = defaultVertex,
- fragment = defaultFragment,
- uniformProjection = 'shadowProjectionMatrix',
- uniformView = 'shadowViewMatrix',
- uniformTexture = 'tShadow',