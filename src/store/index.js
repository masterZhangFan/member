/*
 * @Author: 尼大人
 * @Date: 2019-12-20 22:23:13
 * @LastEditors  : 尼大人
 * @LastEditTime : 2019-12-21 00:40:09
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    userType: '',
    token: ''
  },
  mutations: {
    SET_USERINFO (state, userInfo) {
      state.userInfo = userInfo
    },
    SET_USERTYPE (state, type) {
      state.userType = type
    },
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    setUserInfo ({ commit }, userInfo) {
      commit('SET_USERINFO', userInfo)
    },
    setUserType ({ commit }, type) {
      commit('SET_USERTYPE', type)
    },
    setToken ({ commit }, token) {
      commit('SET_TOKEN', token)
    }
  }
})
