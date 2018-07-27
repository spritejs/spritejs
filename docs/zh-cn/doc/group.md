SpriteJS支持将元素分组，方法是创建一个group对象，然后将元素添加到group里。

Group可以嵌套。

关于Group的详细内容，具体参考[分组](/zh-cn/elements#分组-group)

## append()

`append(...sprites)` 添加一个或多个子元素到Group上

## appendChild()

`appendChild(sprite)` 添加一个子元素到Group上

## clear()

从Group中移除所有子元素。

## children

数组，保存添加到group中的元素，按照zIndex从小到大排序，如果zIndex相同，按照添加到group中的顺序排序。

## insertBefore()

`insertBefore(newChild, refChild)` 将元素插入目标元素的前面。

## isVirtual

Group对象有虚拟模式和非虚拟模式，这是SpriteJS自动设置的，如果当前Group在虚拟模式下，SpriteJS不计算Group的contentSize，也不对Group进行渲染，只会渲染Group中的子元素，这样提升性能。

具体参考[虚拟Group](/zh-cn/guide/virtualgroup)

## removeChild()

`removeChild(sprite)` 将一个子元素从Group中移除

## scrollBy()

`scrollBy(top, left)` 设置Group向左向上增量滚动

## scrollTo()

`scrollTo(top, left)` 设置Group向左向上滚动
