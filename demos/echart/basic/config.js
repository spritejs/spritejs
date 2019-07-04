import merge from 'merge';
import base from '~/base.config';

export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import('!raw-loader!~/echart/index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!~/echart/style.css'),
  ]);

  return merge.recursive(true, base, {
    javascript: {
      code: jsCode,
    },
    html: {
      code: htmlCode,
    },
    css: {
      code: cssCode,
    },
    packages: {
      js: [
        '//lib.baomitu.com/echarts/4.2.1/echarts.min.js',
        '//unpkg.com/sprite-extend-echarts@0.1.1/dist/sprite-extend-echarts.js',
      ],
    },
  });
};
