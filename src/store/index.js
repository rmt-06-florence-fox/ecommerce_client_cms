import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false
  },
  mutations: {
    changeLoginStatus (state, status) {
      state.loginStatus = status
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/admin/login',
        method: 'post',
        data: payload
      })
        .then(response => {
          console.log(response.data)
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('changeLoginStatus', true)
          context.dispatch('fetchProducts')
          router.push('/admin/products')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    logout (context) {
      localStorage.removeItem('access_token')
      context.commit('changeLoginStatus', false)
      router.push('/')
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  modules: {
  }
})
