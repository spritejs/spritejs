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
    dat: true,
  },
  extends:  "eslint-config-sprite",
  plugins: ['html'],
  rules: {
    "complexity": ["warn", 25],
  },
}
