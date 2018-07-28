module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'airbnb',
  plugins: [
    'html',
    'import'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  'rules': {
    "no-alert": 0,
    'import/extensions': 0,
    "no-continue": 0,
    "no-return-assign": 0,
    'max-statements': ['error', 40 ],
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    'no-prototype-builtins': 0,
    'no-plusplus': 1,
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'no-use-before-define': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-console": "off",
    "func-names": 0,
    "no-unused-vars": 0,
    "no-shadow": 0,
    "no-template-curly-in-string": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-bind": 0,
    "react/no-unknown-property": 0,
    "react/jsx-pascal-case": 0,
    "react/jsx-no-undef": 0,
    "max-len": 0,
    "camelcase": 0,
    'import/no-unresolved': 0,
  },
  'globals': {
    'kr': true,
    'krLoading': true,
  }
}
