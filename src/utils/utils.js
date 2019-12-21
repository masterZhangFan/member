/*
 * @Author: 尼大人
 * @Date: 2019-12-10 23:37:26
 * @LastEditors  : 尼大人
 * @LastEditTime : 2019-12-22 01:10:56
 */
import { getInfo } from '@/api/user'
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
    // Vue.prototype.getInfo = () => {
    //   return getInfo()
    // }
  }
}
