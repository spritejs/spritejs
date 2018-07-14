## Flex 布局

感谢 [@Winter](https://github.com/wintercn) 同学的支持，现在SpriteJS能够使用Flex布局了。

在Group上可以设置属性`display: flex`，开启flex布局。

<div id="flex-basic" class="sprite-container"></div>

<!-- demo: flex-basic -->

## 容器属性

以下5个属性设置在容器上：

- flexDirection
- flexWrap
- justifyContent
- alignItems
- alignContent

#### flexDirection

flexDirection属性决定主轴的方向（即项目的排列方向）。

![flexDirection](https://p5.ssl.qhimg.com/t0101ed5ac3a8d033a4.png)

它可能取4个值：

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

<div id="flex-direction" class="sprite-container"></div>

<!-- demo: flex-direction -->

#### flexWrap

默认情况下，项目都排在一条线（又称”轴线”）上。flexWrap属性定义，如果一条轴线排不下，如何换行。

![flexWrap](https://p0.ssl.qhimg.com/t011fef6ec7f044f9ae.png)

它可能取3个值：

- nowrap（默认值）：不换行
- wrap：换行，第一行在上方
- wrap-reverse：换行，第一行在下方

<div id="flex-wrap" class="sprite-container"></div>

<!-- demo: flex-wrap -->

#### justifyContent

justifyContent属性定义了项目在主轴上的对齐方式。

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右：

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

<div id="flex-justify" class="sprite-container"></div>

<!-- demo: flex-justify -->

#### alignItems

alignItems属性定义项目在交叉轴上如何对齐。

它可能取4个值，具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

<div id="flex-alignItems" class="sprite-container"></div>

<!-- demo: flex-alignItems -->

#### alignContent

alignContent属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

该属性可能取6个值：

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

<div id="flex-alignContent" class="sprite-container"></div>

<!-- demo: flex-alignContent -->

## 元素属性

以下3个属性设置在元素上：

- order：决定元素的排序方式
- flex：当元素被拉伸时，决定它被拉伸的比例
- align-self：覆盖容器的alignItems属性

通过设置order来排序：

<div id="flex-order" class="sprite-container"></div>

<!-- demo: flex-order -->

通过设置flex来决定元素占据的空间：

<div id="flex-flex" class="sprite-container"></div>

<!-- demo: flex-flex -->


<script src="/js/guide/flexlayout.js"></src>
