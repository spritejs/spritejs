import merge from 'merge';
import base from '~/base.config';

export default async () => {
  const [htmlCode, jsCode, cssCode] = await Promise.all([
    import('!raw-loader!~/qchart/index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!~/qchart/style.css'),
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
        '//unpkg.com/@qcharts/core/lib/index.js',
      ],
    },
  });
};
