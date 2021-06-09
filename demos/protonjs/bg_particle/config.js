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
        '//lib.baomitu.com/lodash.js/4.17.10/lodash.js',
        '//s1.ssl.qhres2.com/static/c83b6cdc11341b82.js', // proton-js
        '//unpkg.com/sprite-extend-proton/dist/sprite-extend-proton.js',
      ],
    },
  };
};
