SpriteJS支持将元素分组，方法是创建一个group对象，然后将元素添加到group里。

Group可以嵌套。

关于Group的详细内容，具体参考[分组](/zh-cn/elements#分组-group)

## children

数组，保存添加到group中的元素，按照zIndex从小到大排序，如果zIndex相同，按照添加到group中的顺序排序。

## isVirtual

Group对象有虚拟模式和非虚拟模式，这是SpriteJS自动设置的，如果当前Group在虚拟模式下，SpriteJS不计算Group的contentSize，也不对Group进行渲染，只会渲染Group中的子元素，这样提升性能。

具体参考[虚拟Group](/zh-cn/guide/virtualgroup)
