SpriteJS里，精灵Sprite是一个拥有盒模型的可渲染对象。SpriteJS默认支持的精灵类型有四种，分别是Sprite、Label、Path和Group。Sprite是最基础的精灵。

## 创建Sprite

Sprite的构造函数可以传一个图片URL，这样将使用该图片创建Sprite。

<p data-height="370" data-theme-id="light" data-slug-hash="VdgOXP" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/VdgOXP/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

如果我们不给sprite指定大小，那么它的默认大小就是图片大小。

我们也可以给sprite指定大小，这样图片会拉伸为我们所指定的大小。

<p data-height="371" data-theme-id="light" data-slug-hash="LrqorR" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/LrqorR/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

除了图片，我们可以给元素添加其他的属性，详细参考[Attribute](/zh-cn/doc/attribute)

我们可以预加载图片，并给图片一个id：

<p data-height="384" data-theme-id="light" data-slug-hash="KeJLxJ" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/KeJLxJ/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

预加载图片还支持**雪碧图**，具体可以参考[预加载与雪碧图](/zh-cn/guide/resource#雪碧图)

如果资源比较多，我们还可以监听proload方法来显示进度条。具体参考[批量资源预加载进度](/zh-cn/guide/resource#批量资源预加载进度)

## textures

获取和设置textures，一个texture对应一张图片，sprite支持设置多张图片。详情参考[textures](/zh-cn/doc/attribute#textures)

## cache

获取和设置缓存，详细参考[缓存策略](/zh-cn/guide/cache)
