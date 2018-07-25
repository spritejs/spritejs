SpriteJS通过Label对象来显示单行或多行文本。

## 创建Label

Label的构造函数可以接受text作为参数，等价于构造后再设置text属性。

```js
const label = new Label('Hello World')
label.attr(...)
```

相当于

```js
const label = new Label()
label.text = 'Hello World'
label.attr(...)
```

或者

```js
const label = new Label()
label.attr({
  text: 'Hello World',
  ...
})
```

## text

设置Label的文本内容。如果Label没有设置size，Label的大小自适应为文本内容的大小，否则文本内容将被截断。

text也可以通过`attr({text})`或通过构造函数参数直接设置。

## 文字排版

Label支持两个文字排版相关的属性，分别是`lineBreak`和`wordBreak`。

#### lineBreak

决定Label是否断行和断行策略。

它可能取3个值：

- none（默认值） 如果文本超过Label宽度，内容被截断，不断行
- normal 使用普通的断行规则进行断行
- strict 使用严格的断行规则进行断行

#### wordBreak

决定Label断行时是否断行单词。

它可能取4个值

- normal（默认值）采用默认的方案
- break-all 将拉丁语系的单词拆分字母，CJK文字逐字断行
- keep-all 不拆分拉丁字母，CJK文字也依照空格分隔符换行
- break-word 在不得不断行的时候拆分单词（比如单词长度超过整行的宽度）

<p data-height="509" data-theme-id="light" data-slug-hash="YjQZRz" data-default-tab="js,result" data-user="akira-cn" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/YjQZRz/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
