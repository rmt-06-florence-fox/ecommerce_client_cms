import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    CHANGEISLOGIN (state, payload) {
      state.isLogin = payload
    }
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
    },
    addProduct (context, obj) {
      return axios({
        url: '/products',
        method: 'post',
        data: {
          name: obj.name,
          image_url: obj.image_url,
          price: obj.price,
          stock: obj.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
