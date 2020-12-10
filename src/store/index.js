import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, obj) {
      return axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          email: obj.email,
          password: obj.password
        }
      })
    },
    addProduct (context, obj) {
      return axios({
        url: 'http://localhost:3000/product',
        method: 'POST',
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
