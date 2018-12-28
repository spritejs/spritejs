<style>
  sprite.circle {
    width: 100px;
    height: 100px;
    --sprite-anchor: 0.5;
    border-radius: 50px;
    --sprite-border: solid 3px green;
  }
  sprite.red {
    background: red;
    --sprite-pos: 300, 300;
  }
  sprite.blue {
    background: blue;
    --sprite-pos: 600, 300;
  }
  sprite.orange {
    background: orange;
    --sprite-pos: 300, 300;
    transition: all 0.5s;
  }
  sprite.cyan {
    background: cyan;
    --sprite-pos: 600, 300;
    transition: all 0.5s;
  }
</style>

## CSS 样式

SpriteJS从v2.22开始支持使用CSS。在HTML页面上可以加载CSS，使用CSS3选择器给SpriteJS元素添加样式。

要支持CSS样式，只要在创建Scene时，将参数`useDocumentCSS`设置为true。

```js
const scene = new Scene('#css-basic', {
  viewport: ['auto', 'auto'],
  resolution: [1540, 600],
  useDocumentCSS: true,
});
```

<div id="css-basic" class="sprite-container"></div>

```css
  sprite.circle {
    width: 100px;
    height: 100px;
    --sprite-anchor: 0.5;
    border-radius: 50px;
  }
  sprite.red {
    background: red;
    --sprite-pos: 300, 300;
  }
  sprite.blue {
    background: blue;
    --sprite-pos: 600, 300;
  }
```

<!-- demo: css-basic -->

**注意**：由于浏览器同源策略限制，ScriptJS不能读取跨域的css文件，只能是同域下的css文件或者inline css。

SpriteJS支持绝大多数css3选择器，但是**不支持伪元素**，**不支持`:hover,:atcive,:focus,:link,:visited,:lang`等伪类**。

SpriteJS选择器可以和DOM元素混用，例如：

```css
body, 
group {
  background-color: blue;
  --sprite-pos: 100, 100;
}
```

上面的代码会将页面body和group的背景色同时设置为蓝色，当然，body会忽略`--sprite-pos`这个SpriteJS专用的规则。

SpriteJS支持一部分原生CSS属性以及另一部分只特殊的属性，特殊属性以--sprite-开头，目前支持的属性如下：

| css属性 | spritejs属性 | 特殊说明 |
| --- | --- | --- |
| opacity | --spritejs-opacity | - |
| width | --spritejs-width | --spritejs-width支持rw、rh单位 |
| height | --spritejs-height | --spritejs-height支持rw、rh单位 |
| background | --spritejs-bgcolor | backgroud属性仅识别background-color |
| background-color | --spritejs-bgcolor | - |
| flex-grow | --spritejs-flex-grow | - |
| flex-shrink | --spritejs-flex-shrink | - |
| flex-basis | --spritejs-flex-basis | - |
| flex-order | --spritejs-flex-order | - |
| position | --spritejs-position | - |
| align-self | --spritejs-align-self | - |
| transform | --spritejs-transform | - |
| transform-origin | --spritejs-transform-origin | - |
| border | --spritejs-border | SpriteJS不支持border-left, border-right分开定义不同宽度 |
| box-sizing | --spritejs-box-sizing | - |
| display | --spritejs-display | - |
| padding | --spritejs-padding | 不能写成--spritejs-padding-left，如果分开写，请直接使用padding-left |
| margin | --spritejs-margin | 不能写成--spritejs-margin-left，如果分开写，请直接使用margin-left |
| z-index | --spritejs-z-index | - |
| font | --spritejs-font | - |
| font-size | --spritejs-font-size | - |
| font-family | --spritejs-font-family | - |
| font-style | --spritejs-font-style | - |
| font-weight | --spritejs-font-weight | - |
| font-variant-caps | --spritejs-font-variant | - |
| color | --spritejs-color | - |
| text-align | --spritejs-text-align | - |
| line-height | --spritejs-line-height | - |
| line-break | --spritejs-line-break | - |
| word-break | --spritejs-word-break | - |
| letter-spacing | --spritejs-letter-spacing | - |
| text-indent | --spritejs-text-indent | - |
| transition | - | - |
| - | --sprite-pos | - |
| - | --sprite-size | - |
| - | --sprite-border-style | - |
| - | --sprite-border-width | - |
| - | --sprite-border-color | - |
| - | --sprite-d | - |
| - | --sprite-clip | - |
| - | --sprite-bounding | - |
| - | --sprite-gradient | 格式示例： <br/>`color vector(0, 0, 70, 70) 0,red 0.5,yellow 1,green` |

SpriteJS支持CSS Transition，所以我们可以添加CSS过度动画。你可以将鼠标移动到下面的红蓝小圆点上：

<div id="css-transition" class="sprite-container"></div>

```css
  sprite.circle {
    width: 100px;
    height: 100px;
    --sprite-anchor: 0.5;
    border-radius: 50px;
    --sprite-border: solid 3px green;
  }
  sprite.red {
    background: red;
    --sprite-pos: 300, 300;
  }
  sprite.blue {
    background: blue;
    --sprite-pos: 600, 300;
  }
  sprite.orange {
    background: orange;
    --sprite-pos: 300, 300;
    transition: all 0.2s;
  }
  sprite.cyan {
    background: cyan;
    --sprite-pos: 600, 300;
    transition: all 0.2s;
  }
```

<!-- demo: css-transition -->

如果你想要某个css规则只能运用于DOM元素，可以设置一个属性`--sprite-ignore: 1`。

```js
.only-dom {
  --sprite-ignore: 1;
}
```

### SpriteJS的CSS样式限制：

由于考虑性能问题，因此SpriteJS只会在初始化的时候自动加载当前页面上的CSS文件，如果你希望在程序执行过程中动态加载的CSS规则也应用到SpriteJS元素，可以手动调用：

```js
// 在动态加载的css完成之后

spritejs.stylesheet.fromDocumentCSS();
scene.children[0].updateStyles();
```

同样出于性能考虑，SpriteJS应用css样式规则采用的是异步方式，因此给SpriteJS设置class或其他规则，如有导致样式变化，该变化在元素属性上不会立即体现，而是在下一次render时才会体现。

```js
sprite.attr('class', 'myclass');
await layer.prepareRender(); // 经过一次render之后
console.log(sprite.attributes); // sprite新的样式属性才会生效
```


<script src="/js/guide/styles.js"></script>
