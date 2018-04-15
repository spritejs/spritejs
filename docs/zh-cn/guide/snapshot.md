## 快照

每个layer有自己的context，如果我们的scene有多个layer，而且我们需要将scene当前绘制结果保存下来时，我们并不需要自己处理每个layer（尽管自己处理也是可以的，通过layer.canvas可以拿到layer的canvas对象）。

spirtejs提供了一个异步接口`snapshot()`，我们可以给scene拍一个当前的“快照”，snapshot()返回一个canvas对象，这个canvas对象是当前所有layer输出内容的叠加。

<button id="take-snapshot" >存快照</button>
<div id="snapshot" class="sprite-container"></div>

<ul id="snapshot-list"></ul>

<script src="/js/guide/snapshot.js"></script>
