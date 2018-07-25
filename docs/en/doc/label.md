SpriteJS displays single or multiple lines of text through a Label object.

## Create Label

Label's constructor can accept text as a parameter.

```js
const label = new Label('Hello World')
label.attr(...)
```

The same as:

```js
const label = new Label()
label.text = 'Hello World'
label.attr(...)
```

Or

```js
const label = new Label()
label.attr({
  text: 'Hello World',
  ...
})
```

## text

Set the text content of the Label. If the Label does not have a size set, the size of the Label is adaptive to the size of the text content, otherwise the text content may be truncated.

Text can also be set directly via `attr({text})` or via constructor arguments.

## typesetting

Label supports two text typesetting related attributes: `lineBreak` and `wordBreak`.

#### lineBreak

Specify how (or if) to break lines. 

The valid values are:

- none (default) 
  - If the text exceeds the width of the Label, the content is truncated.
- normal 
  - Break text using the most common line break rule.
- strict 
  - Break text using the most stringent line break rule.

#### wordBreak

Specifies whether or not the label should insert line breaks wherever the text would otherwise overflow its content box.

The valid values are:

- normal（default）
  - Use the default line break rule.
- break-all
  - To prevent overflow, word breaks should be inserted between any two characters (excluding Chinese/Japanese/Korean text).
- keep-all
  - Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal.
- break-word
  - To prevent overflow, normally unbreakable words may be broken at arbitrary points if there are no otherwise acceptable break points in the line.

<p data-height="509" data-theme-id="light" data-slug-hash="gjRWbL" data-default-tab="js,result" data-user="akira-cn" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/gjRWbL">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
