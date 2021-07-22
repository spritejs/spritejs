module.exports = {
  env: {
    jest: true
  },
  globals: {
    spritejs: true,
    globalThis: true,
    Canvas: true,
    Container: true,
    importScripts: true,
    __DEV__: true,
  },
  extends:  "eslint-config-sprite",
  plugins: ['html'],
  rules: {
    "complexity": ["warn", 25],
    'import/prefer-default-export': 'off',
    "no-unused-vars": 'warn',
    'no-restricted-globals': 'off',
  },
}
