module.exports = function(env) {
  const spritejs = env === 'development' ? '/spritejs.js'
    : 'https://unpkg.com/spritejs/dist/spritejs.min.js';
  return {
    devServer: {
      port: 9090,
    },
    output: {
      dir: 'docs/demo',
      publicUrl: env === 'development' ? '/' : '.',
    },
    themeFile: 'demos/theme.scss',
    staticFolder: 'dist',
    demoList: env === 'development' ? '.demoList.dev.json': '.demoList.prod.json',
    name: 'SPRITEJS',
    version: 'v2',
    homePage: 'https://spritejs.org',
    logo: '',
    // 可选主题: active4d, allHallowsEve, amy, blackboard, brillianceBlack,
    // brillianceDull, chromeDevtools, cloudsMidnight, clouds, cobalt,
    // dawn, dreamweaver, eiffel, espressoLibre, github, idle, katzenmilch,
    // kuroirTheme, lazy, magicwbAmiga, merbivoreSoft, merbivore, monokai,
    // pastelsOnDark, slushAndPoppies, solarizedDark, solarizedLight,
    // spacecadet, sunburst, textmateMacClassic, tomorrowNightBlue,
    // tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow,
    // twilight, vibrantInk, zenburnesque, iplastic, idlefingers, krtheme,
    // monoindustrial,
    boxTheme: 'monokai',
    globalPackages: {
      js: [ 
        '//lib.baomitu.com/babel-polyfill/7.0.0-beta.44/polyfill.min.js', 
        spritejs
      ],
      css: [],
    },
    // tab waterfall
    editorViewMode: 'tab',
  };
};