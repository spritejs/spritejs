## 提升性能

在SpriteJS<sup>Next</sup>中，由于默认对支持WebGL的环境优先使用WebGL渲染，所以性能与旧版的SpriteJS相比有明显的优势。

但是，需要注意的是，采用WebGL渲染并不意味着总是比Canvas2D要好，因为直接用Canvas2D在内存消耗方面要少一些，所以在某些内存受限的特殊情况下，采用Canvas2D渲染可能反而较好。

要强制使用2D模式渲染，可以在创建Scene或创建对应Layer的时候传入参数`contextType: '2d'`。

```js
const container = document.getElementById('containter');
const scene = new Scene({container, contextType: '2d'});
```

或

```js
const container = document.getElementById('containter');
const scene = new Scene({container});

const fglayer = scene.layer('fglayer', {contextType: '2d'});
```

### 改变缓冲区大小

在WebGL模式下，SpriteJS会给渲染对象分配一个缓冲区，进行批次渲染，在大部分情况下，SpriteJS会尽量合并能够合并的元素同时进行渲染，这样能很大程度上提升性能。

<iframe src="/demo/#/benchmark/birds_fly" height="640"></iframe>

默认的缓冲区大小是**1500个顶点数**，也就是说如果渲染的元素的顶点数不超过1500，那么它们就会被尽量合并。也有一些情况元素不能被合并，比如：

- 相邻的元素有不同的texture图片（这种情况可以使用雪碧图解决）
- 相邻的元素有不同的滤镜

通过修改创建Scene或Layer的参数`bufferSize`可以改变缓冲区大小，如果要绘制非常多的图形，可以将bufferSize改大一些，但这样相应要多耗费一些内存。

```js
const container = document.getElementById('containter');
const scene = new Scene({container, bufferSize: 3000});
```

注意有些特殊滤镜即使是相同也是不能够合并的，包括`blur`、`drop-shadow`和`url`。

### 组拓印（seal）

这是一种特殊的方式，当我们使用一个group来组合一组图形时，如果只是需要使用固定的图形拓扑结构，我们可以使用group的seal方法将子元素的几何图形合并成为group的几何图形。这样group的几何图形将被合并的几何图形替代，成为一个单一的元素被渲染，并且不再能够改变几何图形（但是依然可以改变位置、transform、颜色等等属性）。

`seal`生效的时候，原子元素的属性将失效，由group的属性替代。

当我们用group构建组合图形的时候，这种特殊方式能够大大提升渲染性能。

<iframe src="/demo/#/benchmark/group_sealed" height="640"></iframe>

### 云 Cloud

SpriteJS <sup>Next</sup>有一个特殊的元素Cloud，它能够以某个元素为模板，大批量绘制该元素。当我们要绘制特别大量的相同的元素（比如粒子）时，用这样的方式性能最佳。

<iframe src="/demo/#/benchmark/cloud" height="640"></iframe>