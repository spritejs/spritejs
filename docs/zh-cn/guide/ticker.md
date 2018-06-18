<style>
#curvejs {
  background: #333;
}
</style>

## 外部时钟

SpriteJS有自己的canvas内容更新机制，只要layer中的元素的属性有变化，layer就会将该元素放到等待刷新的列表中，在下一个渲染周期内刷新。这是SpriteJS内置的更新机制。

不过，SpriteJS可以使用外部时钟进行canvas更新。这使得它对很多第三方库非常友好。

SpriteJS要指定layer使用外部时钟，可以手动调用layer的`draw`方法，同时要屏蔽掉layer自己的更新机制，可以在创建layer的时候指定选项`{autoRender:false}`。

<div id="curvejs" class="sprite-container"></div>

这个例子演示了SpriteJS和[curvejs](https://github.com/AlloyTeam/curvejs)联合使用，在这里我们使用外部ticker调用SpriteJS的`layer.draw(false)`方法。参数false是指定layer在绘制的时候不clear掉canvas中的内容（因为curvejs中已经做了这件事）。

<!-- demo: curvejs -->

<script src="https://unpkg.com/curvejs@0.3.3/dist/curve.min.js"></script>
<script src="/js/guide/ticker.js"></script>
