除了使用Web Animation API的动画之外，SpriteJS还提供了更简单的过渡动画 —— Transition

## 设置简单的transition

我们可以在改变元素的属性前先调用transition方法，这样就会产生一个过渡效果。

<p data-height="396" data-theme-id="light" data-slug-hash="vrbomo" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/vrbomo/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

`transition(...).attr(...)` 返回一个Promise对象，因此就像上面的例子那样，我们可以使用await来进行连续的过渡动画。

## 给transition添加Easing

就像Animation那样，我们可以添加easing，transition的第二个参数可以传easing：

<p data-height="380" data-theme-id="light" data-slug-hash="mKvNLJ" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/mKvNLJ/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## reverse transition

有时候我们需要过渡动画来做状态切换，这时候我们可以使用transition的reverse来回切trasition状态。

<p data-height="373" data-theme-id="light" data-slug-hash="yEZmZK" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/yEZmZK/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
