import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fetchProduct (state, data) {
      state.products = data
    }
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
    },
    fetchProduct (context) {
      axios({
        url: 'http://localhost:3000/product',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('fetchProduct', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchDataById (context, id) {
      return axios({
        url: 'http://localhost:3000/product/' + id,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    editData (context, payload) {
      return axios({
        url: 'http://localhost:3000/product/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    deleteData (context, id) {
      return axios({
        url: 'http://localhost:3000/product/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
