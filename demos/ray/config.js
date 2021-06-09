export default async () => {
  const [html, javascript, css] = await Promise.all([
    import('!raw-loader!~/index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!~/style.css'),
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
        '//s2.ssl.qhres2.com/!87edaa34/animator-0.3.1.min.js',
      ],
    },
  };
};
