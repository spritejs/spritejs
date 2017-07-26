module.exports = {
  globals: {
    think: true,
    $: true,
  },
  // 指定脚本的运行环境
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  // 启用airbnb的eslint规则
  // 对于我们持不同意见的规则，在下面的rules进行了重新定义
  extends: ['airbnb-base'],
  plugins: ['vue'],
  // 指定解析器
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      'ecmaVersion': 7, //使用ES2016
    },
    sourceType: 'module',
  },
  rules: {
    'prefer-const': ['error', {'destructuring': 'all'}],
    // ✘ : 因为需要异步 one-by-one 执行 sprite 的渲染，故关闭此规则
    'no-await-in-loop': 'off',
    // ✘ : 允许匿名函数
    'func-names': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    // ✘ : 在确定不需要判断 prototype 的基础上没必要在 for-in 里加 if
    'guard-for-in': 'off',  
    'no-unused-vars': 'warn',
    // 强制 getter 和 setter 在对象中成对出现
    // 默认状态是开启对setWithoutGet的监控，关闭对getWithoutSet的监控
    'accessor-pairs': 'error',
    // ✘ : 关闭要求箭头函数体使用大括号的监控
    // 严格执行会降低可读性
    // 比如：export default context => app.preFetch(context).then(() => app) 
    'arrow-body-style': ['off', 'as-needed', { 'requireReturnForObjectLiteral': true }],
    // ✘ : 关闭对骆驼拼写法的监控
    // 因为我们要和后端接口保持一致
    'camelcase': 'off',
    // 因为有些 thinkJS 方法留空，没有 this
    // 设置为警告，便于检查
    'class-methods-use-this': 'warn',
    // ✘ : 关闭这一规则
    // JSON 或 Object 最后可以有逗号也可以没有逗号
    'comma-dangle': 'off',
    // ✘ : 关闭这一规则
    // 因为 thinkJS 有一些 async 方法，处理一般过程，故不返回任何值
    'consistent-return': 'off',
    // ✘ : 关闭对于最后行为空行的监控
    'eol-last': 'off',
    // ✘ : 关闭这一规则
    // 便于开发环境根据情况来 require 不同的配置
    'global-require': 'off',
    // 要求关键字前后都添加空格，但是overrides数组中的关键字后面不添加空格
    'keyword-spacing': ['error', {
      'overrides': {
        'if': { 'after': false },
        'for': { 'after': false },
        'while': { 'after': false },
        'function': { 'after': false },
      },
    }],
    // ✘ : 允许覆盖变量名
    // 因为我们可能模块内定义一个 decorate，这个 decorate 有可能和变量同名
    'no-shadow': 'off',
    // ✘ : 允许使用位操作
    // 因为 node 里面底层处理比如文件操作之类用位操作还是方便
    // 另外我们一般用 | 0 来取整
    'no-bitwise': 'off',
    // 禁止console，但是允许console.warn() 和 console.error()
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // 禁止在条件中使用常量表达式
    // 允许在循环中使用常量表达式
    'no-constant-condition': ['warn', { 'checkLoops': false }],
    // ✘ : 关闭对于禁用continue的监控
    'no-continue': 'error',
    // 禁止使用较短的符号实现类型转换, 对于Boolean类型例外
    'no-implicit-coercion': ['error', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],
    // 禁止在全局范围使用变量和函数声明
    'no-implicit-globals': 'error',
    // 禁止 this 关键字在类或类对象之外出现
    // 因为在 decorators 里面可能会使用 this，故不强制，仅提示 warn
    'no-invalid-this': 'warn',
    // 禁止混合操作符，同组的需要添加圆括号
    // 这个其实有点不太实用  
    'no-mixed-operators': ['off', {
      groups: [
        ['===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false,
    }],
    // ✘ : 关闭对于禁止使用new产生副作用的监控
    // 由于我们使用Vue，需要创建根实例，所以关闭
    'no-new': 'off',
    // ✘ : 关闭对于禁止对参数进行赋值的监控
    // 因为我们其实常常需要对参数进行修改操作
    'no-param-reassign': ['off', { 'props': false }],
    // ✘ : 关闭对于禁用自增自减的监控
    'no-plusplus': 'off',
    // ✘ : 关闭对于禁用下划线的监控
    'no-underscore-dangle': ['off', { allowAfterThis: false }],
    // 在声明之前不可以使用变量和类，但是函数除外
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // ✘ : 关闭对强制行的最大长度的监控
    // 传参很多就很方啊，尤其加上默认参数的时候
    'max-len': 'off',
    // 禁止一个文件中在忽略空行和注释之后行数超过300行
    'max-lines': ['error', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],
    // 一个函数的最大参数数量不可以超过5个
    'max-params': ['error', 5],
    'max-statements': ['off', 10],
    // ✘ : 关闭这一规则
    // 因为 ES6 之前 JS 没有块级作用域，存在变量提升，故采用此规则
    // 把变量定义在一起可以减少歧义
    'one-var': 'off',
    // 强制在花括号中不使用空格
    'object-curly-spacing': ['error', 'never'],
    // 强制将对象的属性放在不同的行上
    // 禁止所有的 key 和 value 在同一行
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],
    // 要求把换行符放在操作符前面
    'operator-linebreak': ['error', 'before'],
    // 在promise函数的reject()中，要么抛出Error要么为空
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    // 强制 async 方法使用 await
    // 否则可能会导致 babel 把不必要的 async 编译成 generator 
    'require-await': 'error',
    'require-yield': 'error',
    // 禁用分号
    'semi': ['error', 'never'],
    // import/禁止使用dependency外定义的文件
    'import/no-extraneous-dependencies': 0,
    'import/first': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 0,
    'import/extensions': 0,
  },
  root: true,
}