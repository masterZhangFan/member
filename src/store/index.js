import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    userType: ''
  },
  mutations: {
    SET_USERINFO (state, userInfo) {
      state.userInfo = userInfo
    },
    SET_USERTYPE (state, type) {
      state.userInfo = type
    }
  },
  actions: {
    setUserInfo ({ commit }, userInfo) {
      commit('SET_USERINFO', userInfo)
    },
    setUserType ({ commit }, type) {
      commit('SET_USERTYPE', type)
    }
  }
})
