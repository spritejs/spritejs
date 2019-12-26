## Performance

SpriteJS<sup>Next</sup> uses WegGL2 rendering by default, the performance is much better than previous version.

To manually use `2d` rendering, you can set the option `contexttype:'2d` when creating a scene or a corresponding layer.

```js
const container = document.getElementById('containter');
const scene = new Scene({container, contextType: '2d'});
```

or

```js
const container = document.getElementById('containter');
const scene = new Scene({container});

const fglayer = scene.layer('fglayer', {contextType: '2d'});
```

### The bufferSize

In WebGL2/WebGL mode, SpriteJS<sup>Next</sup> will allocate a buffer to the rendered objects for batch rendering. In most cases, the engine will try to merge elements that can be merged and render all of them at the same time, which can greatly improve the performance.

<iframe src="/demo/#/benchmark/birds_fly" height="640"></iframe>

The default buffer size is **1500 vertex points**, that is, if the total number of vertices of the rendered elements does not exceed 1500, they will be merged as much as possible. 

There are also cases where elements cannot be merged, such as:

- Adjacent elements have different texture pictures (in this case, we recommand using preload texture sprite).
- Adjacent elements have different filters.

The `bufferSize` can be changed by modifying the option `bufferSize` of creating scene or layer. If you want to draw a lot of graphics, you can change the `bufferSize` to a larger one, but this will consume more memory.

```js
const container = document.getElementById('containter');
const scene = new Scene({container, bufferSize: 3000});
```

### Seal

Group seal is a special mechanism. 

When we use a group to combine a group of figures, if we just need to use a fixed figure topology, we can use the group's seal method to merge the geometry of the sub elements into the group's geometry. In this way, the group geometry will be replaced by the merged geometry, become a single element to be rendered, and can no longer change the geometry (but still can change the location, transform, color and other attributes).

`When seal 'takes effect, the attribute of the sub-elements will be invalid and replaced by the attribute of group.

<iframe src="/demo/#/benchmark/group_sealed" height="640"></iframe>

### Cloud

SpriteJS<sup>Next</sup> has a special element named Cloud, which can use an element as a template to draw the element in large quantities. When we want to paint a very large number of the same elements (such as particles), this is the best way.

<iframe src="/demo/#/benchmark/cloud" height="640"></iframe>