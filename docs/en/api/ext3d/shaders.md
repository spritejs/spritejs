## 内置 shaders

包括以下：

- NORMAL 一个简单的根据法向量来确定表面颜色的着色器，主要用于测试
- NORMAL_GEOMETRY 支持光照、表面颜色的通用着色器，一般的几何元素可以使用它
- NORMAL_TEXTURE 支持光照、纹理的通用着色器，带纹理的几何元素可以使用它
- GEOMETRY_WITH_TEXTURE 支持光照、表面颜色和纹理的通用着色器，半透明纹理的几何元素可以使用它
- GEOMETRY_WITH_SHADOW 支持光照、表面颜色和阴影的通用着色器
- TEXTURE_WITH_SHADOW 支持光照、纹理和阴影的通用着色器
- GEOMETRY_WITH_TEXTURE_AND_SHADOW 支持光照、表面颜色、纹理和阴影的通用着色器
- TEXTURE_CUBE 支持立方体纹理的通用着色器