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
        '//lib.baomitu.com/d3/4.10.2/d3.js',
        '//s0.ssl.qhres.com/!6ec3437a/mapRelation.js',
        '//s2.ssl.qhres.com/!87edaa34/animator-0.3.1.min.js',
      ],
    },
  };
};
