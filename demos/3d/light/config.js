export default async () => {
  const [html, javascript, css] = await Promise.all([
    import('!raw-loader!./index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!./style.css'),
  ]);

  return {
    javascript,
    html: {
      code: html,
    },
    css: {
      code: css,
    },
    packages: {
      js: [
        '//lib.baomitu.com/dat-gui/0.7.2/dat.gui.min.js',
        '//unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.js',
      ],
    },
  };
};
