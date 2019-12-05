/*
 * @Author: your name
 * @Date: 2019-12-01 11:09:27
 * @LastEditTime: 2019-12-02 01:08:06
 * @LastEditors: Please set LastEditors
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
  DropdownItem
} from 'vant'
Vue.use(Button).use(NavBar).use(Toast).use(Tab).use(Tabs).use(Field).use(Popup).use(DropdownMenu).use(DropdownItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
