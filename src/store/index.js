import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, obj) {
      return axios({
        url: '/adminLogin',
        method: 'post',
        data: {
          email: obj.email,
          password: obj.password
        }
      })
    }
  },
  modules: {
  }
})
