<style>
  #simple-demo {
    width: 100%;
    padding-bottom: 75%;
  }
  #render-demo {
    width: 100%;
    padding-bottom: 75%;
  }
</style>

## 与 matter-js 一同使用

我们可以将2D物理引擎 [matter-js](https://github.com/liabru/matter-js) 与spritejs一同使用。

<div id="simple-demo" class="sprite-container"></div>

<!-- demo: simple-demo -->

## Matter.Render

上面的例子我们可以使用原生的 matter-js，另外我们提供了一个spritejs扩展 [sprite-extend-matter](https://github.com/spritejs/sprite-extend-matter)，它重写了Matter.Render，这样可以快速使用内置的Render来渲染对象。

<div id="render-demo" class="sprite-container"></div>

<!-- demo: render-demo -->

<script src="https://unpkg.com/sprite-extend-matter/dist/sprite-extend-matter.js"></script>
<script src="/js/guide/matter.js"></script>
