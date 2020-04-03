## 继承元素类型

我们可以继承Sprite、Label、Path等元素创建我们自己的精灵类型。

```js
const {Scene, Label} = spritejs;
const container = document.getElementById('adaptive');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const setDefault = Symbol.for('spritejs_setAttributeDefault');
class ButtonAttr extends Label.Attr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      text: ' ',
      fontSize: 36,
      lineHeight: 48,
      anchorX: 0.5,
      anchorY: 0.5,
      borderWidth: 1,
      borderColor: 'black',
      paddingRight: 10,
      paddingLeft: 10,
      textAlign: 'center',
    });
  }
}

class Button extends Label {
  static Attr = ButtonAttr;

  constructor(attrs = {}) {
    super(attrs);
    this.addEventListener('mousedown', () => {
      this.attr({scale: 0.9});
    });
    this.addEventListener('mouseup', () => {
      this.attr({scale: 1.0});
    });
    this.addEventListener('mouseenter', () => {
      this.layer.canvas.style.cursor = 'pointer';
    });
    this.addEventListener('mouseleave', () => {
      this.layer.canvas.style.cursor = '';
    });
  }
}

const button = new Button({
  text: 'Click Me',
  pos: [600, 300],
});
layer.append(button);

button.addEventListener('click', () => {
  console.log('button clicked');
});
```

<iframe src="/demo/#/doc/button" height="450"></iframe>

## 注册元素类型

创建了精灵类型后，尽管我们已经可以直接使用这些新的元素，但我们最好用`spritejs.registerNode`方法将它们注册到框架中，这样就可以通过`spritejs.createElment`来创建该类型的元素，d3和vue等第三方框架也需要用`spritejs.createElement`来创建对应的元素。

```js
spritejs.registerNode(Button, 'button');

const button = spritejs.createElement('button');
```