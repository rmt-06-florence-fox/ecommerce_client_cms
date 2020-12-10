import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios-config.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    email: '',
    password: '',
    products: []
  },
  mutations: {
  },
  actions: {
    loginHandler (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        context.dispatch.fetchProduct()
        this.$router.push({ name: 'home' })
      }).catch(err => {
        console.log(err.response.data.messages)
      })
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchProductsHandler', data)
      }).catch(err => {
        console.log(err.response.data)
      })
    }
  },
  modules: {
  }
})
