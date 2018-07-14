Besides using the Web Animation API, SpriteJS also provides a much more simple transition api.

## Set up a simple transition

We can call the transition method before changing the properties of the element, which will produce a transition effect.

<p data-height="396" data-theme-id="light" data-slug-hash="vrbomo" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/vrbomo/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

`transition(...).attr(...)` returns a Promise object, so we can use async/await for continuous transition animation.

## Adding Easing to the transition

Just like Animation, we can add easing, the second parameter of transition accept easing:

<p data-height="380" data-theme-id="light" data-slug-hash="mKvNLJ" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/mKvNLJ/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## reverse transition

Sometimes we need a transition to do state switching, we can use `transition.reverse()` to roll back the trasition state.

<p data-height="373" data-theme-id="light" data-slug-hash="yEZmZK" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/yEZmZK/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
