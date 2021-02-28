import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  mutations: {
    setUserInfo: (state, payload) => state.userInfo = payload
  },
  actions: {
  },
  getters: {
    isLogin: state => state.userInfo !== null
  },
  modules: {
  }
})
