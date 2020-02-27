export default async () => {
  const [html, javascript, css] = await Promise.all([
    import('!raw-loader!../index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!../style.css'),
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
        '//unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.js',
        '//d3js.org/d3.v5.js',
        '//lib.baomitu.com/topojson/3.0.2/topojson.min.js',
      ],
    },
  };
};
