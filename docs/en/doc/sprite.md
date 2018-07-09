A sprite is a renderable object that has a box model. There are four build-in types of sprites supported by SpriteJS, that is Sprite, Label, Path, and Group.

## Create Sprite

The Sprite constructor can use a texture image.

<p data-height="370" data-theme-id="light" data-slug-hash="VdgOXP" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/VdgOXP/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

If we don't specify a size for the sprite, its default size is the image size.

If we specify the size of the sprite, the image will be stretched to the size we specified.

<p data-height="371" data-theme-id="light" data-slug-hash="LrqorR" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/LrqorR/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

We can add other attributes to the element. See [Attribute](/en/doc/attribute).

We can preload the image by id:

<p data-height="384" data-theme-id="light" data-slug-hash="KeJLxJ" data-default-tab="js,result" data-user="akira-cn" data-embed-version="2" data-pen-title="spritejs-demo-1" class="codepen">See the Pen <a href="https://codepen.io/akira-cn/pen/KeJLxJ/">spritejs-demo-1</a> by 月影 (<a href="https://codepen.io/akira-cn">@akira-cn</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

`scene.preload` support [TexturePacker](https://www.codeandweb.com/texturepacker).

See [example](http://spritejs.org/demo/#basic_sprites).

## textures

Get or set textures, one texture corresponds to one image, and sprite supports setting multiple images.
