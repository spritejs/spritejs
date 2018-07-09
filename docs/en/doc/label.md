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
