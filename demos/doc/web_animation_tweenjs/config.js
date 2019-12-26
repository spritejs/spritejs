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
        '//lib.baomitu.com/tween.js/17.2.0/Tween.min.js',
      ],
    },
  };
};