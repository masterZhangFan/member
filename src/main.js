/*
 * @Author: your name
 * @Date: 2019-12-01 11:09:27
 * @LastEditTime: 2019-12-07 00:52:05
 * @LastEditors: 尼大人
 * @Description: In User Settings Edit
 * @FilePath: \member-agent-h5\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 阿里适配方案
import 'lib-flexible'

import {
  Button,
  NavBar,
  Toast,
  Tab,
  Tabs,
  Field,
  Popup,
  DropdownMenu,
  DropdownItem,
  Uploader
} from 'vant'

// 引入全局方法
import utils from './utils/utils'

Vue.use(Button).use(NavBar).use(Toast).use(Tab).use(Tabs).use(Field).use(Popup).use(DropdownMenu).use(DropdownItem).use(Uploader)
Vue.use(utils)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
