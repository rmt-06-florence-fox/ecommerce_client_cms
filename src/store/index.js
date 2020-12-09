import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteTitle: 'JAM TANGEN',
    products: []
  },
  mutations: {
    setProducts (state, value) {
      state.products = value
    }
  },
  actions: {
    loadProducts (context) {
      axios({
        method: 'get',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setProducts', res.data.products)
        })
    }
  },
  modules: {
  }
})
