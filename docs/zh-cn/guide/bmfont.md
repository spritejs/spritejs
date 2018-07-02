SpriteJS的扩展支持[位图字体（Bitmap Font）](https://github.com/spritejs/sprite-extend-bmfont)

## 使用BMFont

我们可以使用[bmGlyph](https://www.bmglyph.com/)工具来创建位图字体

![bmGlyph](https://p1.ssl.qhimg.com/t01250012696697463d.png)

将创建的字体导出（导出时选择cocos2d/BMFont格式）

然后使用[sprite-extend-bmfont](https://github.com/spritejs/sprite-extend-bmfont)项目中的命令行工具将`字体文件.fnt`格式转换成spritejs的bmfont配置：

```bash
node tools/generate.js fonts/testsprite.fnt
```

然后我们就可以在项目中使用BMFont了。

<p data-height="374" data-theme-id="light" data-slug-hash="KeEPmx" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/KeEPmx/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## BMFont属性

### fontFace

设置BMFont的fontFace，取决于bmGlyph导出的文件配置，默认为被导出的字体的名字。

### text

设置BMFont的text，一段单行或多行文本

### lineHeight

设置字体的行高

### letterSpacing

设置字体的字母间距

### textAlign

设置对齐方式（left | center| right）
