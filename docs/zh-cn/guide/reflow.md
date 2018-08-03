## Reflow 机制

在2.7之后，SpriteJS采用了新的reflow机制，当元素的`attrSize`、`contentSize`、`clientSize`、`originalRect`、`originalRect`改变时，框架会对这些属性进行缓存，这样在精灵数量较多的layer中能一定程度上提升渲染性能。

但是，带来的变化是如果扩展的子类精灵中重写了上述这些属性，需要加上`@flow`装饰器以获得最优性能。

```js
class MySprite extends Sprite {
  @flow
  get clientSize() {
    ...
  }

  @flow
  get originalRect() {
    ...
  }
}
```

当精灵元素的一部分属性变化时，会触发reflow，reflow操作会清除上面那些属性的缓存。

自动触发reflow的属性包括：

`width | layoutWidth`、`height | layoutHeight`、`display`、`anchor`、`border`、`padding`、`boxSizing`、`margin`、`flex`

自适应sprite更改textures、自适应Label更改font相关属性、Group的clip改变以及Path的`path`、`d`和`lineWidth`属性改变也会触发reflow

自定义属性要触发reflow，可以调用`clearFlow()`方法：

```js
class MyAttr extends Sprite.Attr {
  @attr
  set myattr(value) {
    this.clearFlow()
    this.set('myattr', value)
  }
}
```
