## 虚拟 Group

在spritjs中，用Group给精灵元素分组，对分组的元素进行统一的transform操作是一个很棒的方法。Group还可以嵌套，以形成多层树状的结构，这样就使得我们可以有能力用精灵来构造复杂的UI组件。

对于普通的Group元素，它本身的contentSize为[0, 0]，并且不具有普通元素的[盒模型](/zh-cn/guide/boxmodel)。这样的Group是**虚拟元素**，被称为**Virtual Group**，我们可以通过`group.isVirtual`判断一个Group元素是否是Virtual的。

当一个Group具有`anchor（非[0,0]）、size（非[0,0]）、borderWidth（非0）、borderRadius（非0）、bgcolor（非''）`属性之一时，它就成为一个有盒模型的真正的元素，不再是Virtual的了，这也就意味着给Group设置这些属性之后，Group就成为有边界的元素了。

<div id="virtualgroup" class="sprite-container"></div>

让一个Group成为普通元素，在某些情况下是比较好的做法，比如一个group中有很多静止的子元素，我们可以通过给group设置size，让它能够变成一个可被正常缓存的普通元素，通过缓存来提升性能。另一方面，group的box也会带来一些额外的性能开销，所以要权衡选择。

<!-- demo: virtualgroup -->


<script src="/js/guide/virtualgroup.js"></script>
