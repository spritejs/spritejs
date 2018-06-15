module.exports = {
  globals: {
    spritejs: true,
    axios: true,
    TWEEN: true,
    d3: true,
    Docsify: true,
    _: true,
    CodeMirror: true,
    topojson: true,
    mapRelation: true,
    Animator: true,
    Timeline: true,
    Proton: true,
    curvejs: true,
  },
  extends:  "eslint-config-75team",
  plugins: ['html'],
  rules: {
    // 'import/no-mutable-exports': 'off',
    'semi-style': ["error", "first"],
    // 禁止一个文件中在忽略空行和注释之后行数超过1500行
    'max-lines': ['error', {
      max: 1500,
      skipBlankLines: true,
      skipComments: true
    }],  
    'no-loop-func': 'off',
    'guard-for-in': 'off',
    'no-multi-assign': 'warn',
    'max-params': ['warn', 10],
    'prefer-const': ['error', {destructuring: 'all'}],
    // 因为我们可能模块内定义一个 decorate，这个 decorate 有可能和变量同名
    'no-shadow': 'warn',
    // 因为函数签名中可能声明未使用的变量
    'no-unused-vars': ['error', {args: "none"}],
    'prefer-destructuring': 'off',
    'object-curly-newline': 'off',
    // 'no-restricted-syntax': [
    //   'error',
    //   'ForInStatement',
    //   'LabeledStatement',
    //   'WithStatement',
    // ]
  },
}
