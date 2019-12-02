/*
 * @Author: your name
 * @Date: 2019-12-01 11:09:27
 * @LastEditTime: 2019-12-03 00:56:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \member-agent-h5\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import lazyLoadView from '@/utils/lazy-load-view'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => lazyLoadView(import('@/views/Login.vue'))
    },
    {
      path: '/home',
      name: 'home',
      component: () => lazyLoadView(import('@/views/Home.vue'))
    },
    {
      path: '/fans-list',
      name: 'fansList',
      component: () => lazyLoadView(import('@/views/FansList.vue'))
    },
    {
      path: '/upgrade',
      name: 'Upgrade',
      component: () => lazyLoadView(import('@/views/Upgrade.vue'))
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: () => lazyLoadView(import('@/views/Recharge.vue'))
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => lazyLoadView(import('@/views/About.vue'))
    },
    {
      path: '*',
      component: () => lazyLoadView(import('@/components/public/RouteError.vue'))
    }
  ]
})
