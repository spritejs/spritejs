## 使用jsx语法

通过配置babel，spritejs可以使用jsx语法

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

这一段代码完全等价于[分组 Group](/zh-cn/elements#分组-Group)中的示例代码。


# 配置babel

spritejs提供了用于babel的preset，在配置babel前首先应确保babel-preset-spritejsx已经被安装到本地node_modules，推荐同时将其加入devDependency：

```
npm install --save-dev babel-preset-spritejsx
```

在.babelrc文件中添加spritejsx这一preset即可：

```json
{
  "presets": ["spritejsx"]
}
```

根据babel文档，也可以用命令行来调用：

```
babel --presets spritejsx input.js > output.js
```

# 更多参考

JSX格式的详细定义，可参考facebook的官方文档

https://facebook.github.io/jsx/



