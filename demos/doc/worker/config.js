export default async () => {
  const [html, javascript, css, rawdata] = await Promise.all([
    import('!raw-loader!~/index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!./style.css'),
    import('!!raw-loader!./worker.js'),
  ]);

  return {
    rawdata: {
      tabName: 'Worker',
      code: rawdata,
      transformer: 'javascript',
      visible: true,
    },
    javascript: {
      tabName: 'MainThread',
      code: javascript,
      transformer: 'javascript',
      visible: true,
      transform(code) {
        const prefix = `(function() {let code = document.querySelector('script[type="text/x-rawdata"]').textContent;
          code = code.replace(/importScripts\\(['"]spritejs.worker.js['"]\\)/img, "importScripts('${location.protocol}//${location.host}${location.pathname}spritejs.worker.js')");
          const blob = new Blob([code], {type: 'text/javascript'});      
          return URL.createObjectURL(blob);
        }())`;
        return code.replace(/'\.\/worker.js'/img, prefix);
      },
    },
    html: {
      code: html,
    },
    css: {
      code: css,
    },
    packages: {
      js: [

      ],
    },
  };
};
