import merge from 'merge';
import base from '../base.config';

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
      js: ['//lib.baomitu.com/dat-gui/0.7.2/dat.gui.min.js'],
    },
  });
};
