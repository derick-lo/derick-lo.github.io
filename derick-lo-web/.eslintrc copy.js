module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/no-deprecated": "off",
    "no-unused-vars": "error",
    "no-var": "error",
    "arrow-body-style": "warn",
    quotes: ["error", "single"],
    "no-console": ["warn", { allow: ["error"] }],
    // "no-debugger": "error", //禁用debugger
    // "no-var": "off", //对var警告
    // semi: "off", //不强制使用分号
    // "no-irregular-whitespace": "off", //不规则的空白不允许
    // "no-trailing-spaces": "warn", //一行结束后面有空格就发出警告
    // "eol-last": "off", //文件以单一的换行符结束
    // "no-unused-vars": ["error", { vars: "all", args: "after-used" }], //不能有声明后未被使用的变量或参数
    // "no-underscore-dangle": "off", //标识符不能以_开头或结尾
    // "no-alert": "error", //禁止使用alert confirm prompt
    // "no-lone-blocks": "off", //禁止不必要的嵌套块
    // "no-class-assign": "error", //禁止给类赋值
    // "no-cond-assign": "error", //禁止在条件表达式中使用赋值语句
    // "no-const-assign": "error", //禁止修改const声明的变量
    // "no-delete-var": "error", //不能对var声明的变量使用delete操作符
    // "no-dupe-keys": "error", //在创建对象字面量时不允许键重复
    // "no-duplicate-case": "error", //switch中的case标签不能重复
    // "no-dupe-args": "error", //函数参数不能重复
    // "no-empty": "error", //块语句中的内容不能为空
    // "no-func-assign": "error", //禁止重复的函数声明
    // "no-invalid-this": "off", //禁止无效的this，只能用在构造器，类，对象字面量
    // "no-redeclare": "error", //禁止重复声明变量
    // "no-spaced-func": "error", //函数调用时 函数名与()之间不能有空格
    // "no-this-before-sukrxUmpxlper": "off", //在调用super()之前不能使用this或super
    // "no-undef": "error", //不能有未定义的变量
    // "no-use-before-define": "error", //未定义前不能使用
    // camelcase: "off", //强制驼峰法命名
    // "jsx-quotes": ["error", "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
    // "react/display-name": "off", //防止在React组件定义中丢失displayName
    // "react/forbid-prop-types": ["error", { forbid: ["any"] }], //禁止某些propTypes
    // "react/jsx-boolean-value": "error", //在JSX中强制布尔属性符号
    // "react/jsx-closing-bracket-location": "warn", //在JSX中验证右括号位置
    // "react/jsx-curly-spacing": ["error", { when: "never", children: true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
    // "react/jsx-indent-props": ["error", 4], //验证JSX中的props缩进
    // "react/jsx-key": "error", //在数组或迭代器中验证JSX具有key属性
    // "react/jsx-max-props-per-line": ["warn", { maximum: "warn" }], // 限制JSX中单行上的props的最大数量
    // "react/jsx-no-bind": "off", //JSX中不允许使用箭头函数和bind
    // "react/jsx-no-duplicate-props": "error", //防止在JSX中重复的props
    // "react/jsx-no-literals": "off", //防止使用未包装的JSX字符串
    // "react/jsx-no-undef": "warn", //在JSX中禁止未声明的变量
    // "react/jsx-pascal-case": "off", //为用户定义的JSX组件强制使用PascalCase
    // "react/jsx-sort-props": "error", //强化props按字母排序
    // "react/jsx-uses-react": "warn", //防止反应被错误地标记为未使用
    // "react/jsx-uses-vars": "error", //防止在JSX中使用的变量被错误地标记为未使用
    // "react/no-danger": "off", //防止使用危险的JSX属性
    // "react/no-did-mount-set-state": "off", //防止在componentDidMount中使用setState
    // "react/no-did-update-set-state": "warn", //防止在componentDidUpdate中使用setState
    // "react/no-direct-mutation-state": "error", //防止this.state的直接变异
    // "react/no-multi-comp": "error", //防止每个文件有多个组件定义
    // "react/no-set-state": "off", //防止使用setState
    // "react/no-unknown-property": "error", //防止使用未知的DOM属性
    // "react/prefer-es6-class": "error", //为React组件强制执行ES5或ES6类
    // "react/prop-types": "off", //防止在React组件定义中丢失props验证
    // "react/react-in-jsx-scope": "error", //使用JSX时防止丢失React
    // "react/self-closing-comp": "off", //防止没有children的组件的额外结束标签
    // "react/sort-comp": "error", //强制组件方法顺序
    // "no-extra-boolean-cast": "off", //禁止不必要的bool转换
    // "react/no-array-index-key": "off", //防止在数组中遍历中使用数组key做索引
    // "react/no-deprecated": "warn", //不使用弃用的方法
    // "react/jsx-equals-spacing": "error", //在JSX属性中强制或禁止等号周围的空格
    // "no-unreachable": "warn", //不能有无法执行的代码
    // "comma-dangle": "error", //对象字面量项尾不能有逗号
    // "no-mixed-spaces-and-tabs": "off", //禁止混用tab和空格
    // "prefer-arrow-callback": "off", //比较喜欢箭头回调
    // "arrow-parens": "off", //箭头函数用小括号括起来
    // "arrow-spacing": "off", //=>的前/后括号
  },
};
