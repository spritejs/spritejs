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
        '//s4.ssl.qhres.com/!a52a564f/color.min.js',
        '//s4.ssl.qhres.com/!f7da5437/proton.js',
        '//unpkg.com/sprite-extend-proton/dist/sprite-extend-proton.js',
      ],
    },
  });
};
