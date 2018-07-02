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
