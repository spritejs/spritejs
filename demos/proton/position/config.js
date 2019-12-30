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
        '//lib.baomitu.com/lodash.js/4.17.10/lodash.js',
        '//s4.ssl.qhres.com/!f7da5437/proton.js',
        '//unpkg.com/sprite-extend-proton@0.5.0/dist/sprite-extend-proton.js',
      ],
    },
  });
};
