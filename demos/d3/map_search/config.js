import merge from 'merge';
import base from '~/base.config';

export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import('!raw-loader!~/common/index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!~/common/style.css'),
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
        '//s2.ssl.qhres.com/!87edaa34/animator-0.3.1.min.js',
        '//lib.baomitu.com/d3/4.10.2/d3.min.js',
        '//s0.ssl.qhres.com/!6ec3437a/mapRelation.js',
      ],
    },
  });
};
