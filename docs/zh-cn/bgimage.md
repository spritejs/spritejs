## 背景图片

我们可以给精灵添加背景图片，只需要设置它们的bgimage属性。

bgimage是一个对象，有下列可配置属性：

- src 设置图片的URL地址
- id 设置图片的ID，如果图片是预加载的，可以设置id，注意id和src只需要设置一个，如果设置了id，会忽略src设置
- image 设置图片对象，bgimage可以直接设置一个加载好的Image对象，如果设置了它，那么src和id都会被忽略
- display 设置图片的展现方式，可选值如下：
  - undefined 默认值，图片以默认方式原始大小展现
  - 'none' 不展现背景图片
  - 'stretch' 图片拉伸或压缩到sprite元素大小
  - 'repeatX' 图片默认大小，如果元素水平宽度超过图片宽度，图片水平平铺
  - 'repeatY' 图片默认大小，如果元素垂直高度超过图片高度，图片垂直平铺
  - 'repeat' 相当于repeatX+repeatY
  - 'center' 图片原始大小居中
  - '.9' 图片以.9形式展现
- offset
  - 图片相对于元素左上角（不包括border）的偏移，如果display为'center'或'.9'，那么offset被忽略
- clip9
  - 如果diplay为'.9'，那么这个属性设置图片的剪裁方式。

clip9 剪裁： [top, right, bottom, left]

![clip9](https://p2.ssl.qhimg.com/t015db23adfa8223dd7.jpg)

<div id="bgimage" class="sprite-container"></div>

<!-- demo: bgimage -->


<!-- javascript -->
<script src="/js/bgimage.js"></script>
