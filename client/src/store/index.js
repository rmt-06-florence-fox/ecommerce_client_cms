import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosinstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetch (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data.result)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
