/*
 * @Author: your name
 * @Date: 2019-12-01 11:09:27
 * @LastEditTime: 2019-12-12 22:38:42
 * @LastEditors: 尼大人
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
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => lazyLoadView(import('@/views/Login.vue'))
    },
    {
      path: '/home-member',
      name: 'HomeMember',
      component: () => lazyLoadView(import('@/views/HomeMember.vue'))
    },
    {
      path: '/home-agent',
      name: 'HomeAgent',
      component: () => lazyLoadView(import('@/views/HomeAgent.vue'))
    },
    {
      path: '/fans-list',
      name: 'fansList',
      component: () => lazyLoadView(import('@/views/FansList.vue'))
    },
    {
      path: '/agents-list',
      name: 'agentsList',
      component: () => lazyLoadView(import('@/views/AgentsList.vue'))
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
      path: '/take-out',
      name: 'TakeOut',
      component: () => lazyLoadView(import('@/views/TakeOut.vue'))
    },
    {
      path: '/setting-count',
      name: 'SettingCount',
      component: () => lazyLoadView(import('@/views/SettingCount.vue'))
    },
    {
      path: '/invite-agents',
      name: 'InviteAgents',
      component: () => lazyLoadView(import('@/views/InviteAgents.vue'))
    },
    {
      path: '/share',
      name: 'Share',
      component: () => lazyLoadView(import('@/views/Share.vue'))
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
