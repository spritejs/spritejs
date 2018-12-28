## Using jsx

With babel，jsx grammar also works for spritejs:

[JSBin](http://jsbin.com/babusayuco/edit?html,output)

```js
const {Group, Path, Scene, Sprite} = spritejs

const scene = new Scene('#demo-quickStart', {
  viewport: ['auto', 'auto'],
  resolution: [800, 800],
})

const layer = scene.layer();

const group = 
  <Group
    size={[300, 300]}
    pos={[400, 400]}
    anchor={[0.5, 0.5]}>
    {
        [...Array(6).keys()].map( i => <Path path={{
          d: 'M0 0L 50 0A50 50 0 0 1 43.3 25z',
          transform: {scale: 3, rotate: -15},
          trim: true,
        }} 
        pos={[150, 150]}
        anchor={[0, 0.5]}
        strokeColor='red'
        fillColor={`rgb(${i * 139 % 255}, 0, 0)`}
        rotate = {i * 60}></Path> )
    }
  </Group>
layer.append(group);

group.animate([
  {rotate: 0},
  {rotate: 360},
], {
  duration: 3000,
  iterations: Infinity,
})

```

This code is all [分组 Group](/zh-cn/elements#分组-Group)中的示例代码。

```
const scene = new Scene('#group', {viewport: ['auto', 'auto'], resolution: [1540, 600]})
const layer = scene.layer('fglayer')
const group = new Group()
const arcD = 'M0 0L 50 0A50 50 0 0 1 43.3 25z'

group.attr({
  size: [300, 300],
  pos: [770, 300],
  anchor: [0.5, 0.5],
})
layer.append(group)

for(let i = 0; i < 6; i++) {
  const arc = new Path()
  arc.attr({
    path: {
      d: arcD,
      transform: {scale: 3, rotate: -15},
      trim: true,
    },
    pos: [150, 150],
    anchor: [0, 0.5],
    strokeColor: 'red',
    rotate: i * 60,
  })
  arc.attr('fillColor', `rgb(${i * 139 % 255}, 0, 0)`)
  group.append(arc)
}

group.animate([
  {rotate: 0},
  {rotate: 360},
], {
  duration: 3000,
  iterations: Infinity,
})
```

# Config babel

We have spritejs-jsx preset for babel. Before configing, please make sure babel-preset-spritejsx is installed to node_modules. Put it into  devDependency is recommended:

```
npm install --save-dev babel-preset-spritejsx
```

add this preset to .babelrc will work：

```json
{
  "presets": ["spritejsx"]
}
```

According to doc of babel，you can also use command line：

```
babel --presets spritejsx input.js > output.js
```

# Reference

More details about JSX could be find in facebook‘s official jsx spec:

https://facebook.github.io/jsx/



