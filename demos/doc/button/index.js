const {Scene, Label} = spritejs;
const container = document.getElementById('stage');
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