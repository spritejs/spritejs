## sprite的缓存机制

spritejs在性能方便通过缓存机制来减少绘制工作。

如果我们绘制一个精灵元素，正常需要先渲染它的border、然后是bgcolor，接下来渲染texture、text或者path。如果我们每一次更新显示内容，都需要这么绘制，性能就会比较差，尤其是给较大的精灵填充背景色，这是一种很耗性能的操作。

spritejs默认在第一次绘制之后，把之前绘制的context缓存起来，下次绘制时直接将缓存的context取出直接作为图片绘制输出。这样大大提升了性能。spritejs的属性中，pos、size、transform这样的基本属性改变，只需要用缓存输出即可。但是如果gbcolor、border、text这样的属性发生改变，那么在属性变更时，就需要把缓存清除掉，让引擎重绘。

我们定义新的元素类型时，添加的属性也需要考虑是否要刷新缓存，如果需要，则要调用clearCache方法手工清除缓存，这在前面的[例子](/zh-cn/guide/nodes)里已经看到过。

<button id="toggle-normal-cache" style="margin-bottom: 10px">变色</button>

<div id="normal-cache" class="sprite-container"></div>

我们生成2000个随机元素，然后点击按钮改变它们的bgcolor，这是一个很耗性能的操作，因为bgcolor改变没法使用缓存，因此可以看到效果上还是比较卡顿的。

<!-- demo: normal-cach -->

## 自定义缓存策略

在类似这样的情况下，我们可以通过自定义缓存策略来大大提升性能。因为我们事先知道这2000个随机元素形态都一样，而且只有三种颜色，因此我们将这三种颜色都缓存一份即可。

<button id="toggle-user-cache" style="margin-bottom: 10px">变色</button>

<div id="user-cache" class="sprite-container"></div>

我们从Sprite继承一个Block类，直接改写一下它的cache属性即可。spritejs在绘图的时候会去读取cache属性，如果cache存在，则直接将cache取回绘制到canvas上。

<!-- demo: user-cach -->

## Batch Nodes

自定义缓存很灵活，能适应更加复杂的情况，但是还是相对麻烦。针对上面的场景，spritejs提供了Batch Nodes机制，我们可以通过layer创建Batch，将一系列元素添加进去。Batch自动取代元素本身的缓存，始终用最早渲染（根据zIndex和zOrder判断）的元素的缓存来绘制Batch中的其他元素。

<button id="toggle-use-batch" style="margin-bottom: 10px">变色</button>

使用Batch会让所有处于同一个Batch中的元素使用Batch中第一个被渲染的元素（可以通过baseNode获得）的cache，这样也能大大提升性能。但是这里也有一些坑需要注意，首先，使用了Batch的元素，那些需要清缓存的属性只能通过Batch的baseNode来操作。但是如果baseNode元素因为某种情况自身不可见，那么改变它时，由于spritejs不会重新渲染不可见元素，也就无法更新缓存，这样就让整个batch所有元素的缓存失效！其次，Batch目前不支持renderRepaintDirty模式，在使用这一模式渲染时，不要使用Batch。

<div id="use-batch" class="sprite-container"></div>

<!-- demo: use-batch -->


<script src="/js/guide/cache.js"></script>
