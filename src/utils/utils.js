
export default {
  install (Vue, options) {
    // 路由公共方法
    Vue.prototype.getLevelName = (num) => {
      let levelName = '--'
      switch (num * 1) {
        case 1:
          levelName = '初级会员'
          break
        case 2:
          levelName = '高级会员'
          break
        default:
          break
      }
      return levelName
    }
  }
}
