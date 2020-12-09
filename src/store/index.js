import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    products: [],
    categories: ''
  },
  mutations: {
    isLogin (state, payload) {
      state.loggedIn = payload
    },
    insertProducts (state, payloads) {
      state.products = payloads
    },
    insertCategories (state, payloads) {
      state.categories = payloads
    }
  },
  actions: {
    login (context, payload) {
      console.log('nyampe store')
      return axios({
        method: 'POST',
        url: '/adminLogin',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    logout (context) {
      localStorage.clear()
      context.commit('isLogin', false)
    },
    getProducts (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(result => {
          context.commit('insertProducts', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCategories (context) {
      axios({
        method: 'GET',
        url: '/category'
      })
        .then(result => {
          context.commit('insertCategories', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
