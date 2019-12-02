/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 23:27:45
 * @LastEditTime: 2019-08-30 00:36:10
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
