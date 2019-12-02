/*
 * @Author: your name
 * @Date: 2019-12-01 11:09:27
 * @LastEditTime: 2019-12-02 01:39:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-agent-h5\vue.config.js
 */
// vue.config.js
module.exports = {
  // 选项...
  publicPath: '/',
  outputDir: 'dist',
  // 生产环境的 source map
  productionSourceMap: false,
  css: {
    modules: false,
    loaderOptions: {
      sass: {
        // 设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
        data: `
          @import "@/assets/scss/reset.scss";
          @import "@/assets/scss/mixins.scss";
          @import "@/assets/scss/common.scss";
          @import "@/assets/scss/function.scss";
          @import "@/assets/scss/reset-vant.scss";
        `
      }
    }
  }
}
