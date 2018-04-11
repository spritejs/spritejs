## 图片的异步加载

spritejs支持图片URL作为资源，我们前面已经看过，我们可以把URL作为texture直接传给Sprite的textures属性。但是，因为网络图片资源是异步加载的，这会可能导致sprite的异步显示以及我们拿到的sprite的contentSize为0。

<div id="load-texture" class="sprite-container"></div>

获取图片大小之所以为0，是因为当我们把label添加到layer上的时候，图片还没有完成加载，因此此时的sprite里没有内容来撑开宽高，所以得到的大小就是0。

<!-- demo: load-texture -->

scene提供了`preload`方法来预加载和保存图片资源。这个方法可以接受一个或多个图片数据，返回一个promise对象。

<div id="preload-texture" class="sprite-container"></div>

我们通过preload事先预加载并缓存了图片，所以我们使用id:'robot'来创建sprite时，就可以立即显示出来，并得到contentSize。

<!-- demo: preload-texture -->

## 雪碧图

与css雪碧图一样，spritejs也支持雪碧图。spritejs支持[texture packer](https://www.codeandweb.com/texturepacker)生成的标准JSON雪碧图。

<div id="texturepacker" class="sprite-container"></div>

使用雪碧图可以有效减少HTTP请求，从而提高响应速度。

<!-- demo: texturepacker -->


## 批量资源预加载进度

有时候，我们要预加载大量的资源，此时我们可以在preload的时候显示一个进度。

<div id="preload-many" class="sprite-container"></div>

我们可以监听scene的preload事件来获取资源加载的进度，因为例子里这些图片不大，所以加载还是很快，可能需要打开控制台，模拟慢速网络才能看到效果。

<!-- demo: preload-many -->


<script src="/js/guide/resource.js"></script>
