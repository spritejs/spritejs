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
        '//s1.ssl.qhres.com/static/c83b6cdc11341b82.js', // proton-js
        '//unpkg.com/sprite-extend-proton/dist/sprite-extend-proton.js',
      ],
    },
  };
};
