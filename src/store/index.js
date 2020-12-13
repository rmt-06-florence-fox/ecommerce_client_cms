import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setDataProducts (state, payload) {
      state.products = payload
    },
    setDataProductById (state, payload) {
      state.product = payload
    }
  },
  actions: {
    fetchDataProducts (context) {
      axios({
        url: 'https://e-commerce-server-hacktiv8rmt6.herokuapp.com/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('setDataProducts', response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchDataProductById (context, payload) {
      const id = payload

      axios({
        url: `https://e-commerce-server-hacktiv8rmt6.herokuapp.com/products/${id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('setDataProductById', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        url: 'https://e-commerce-server-hacktiv8rmt6.herokuapp.com/products',
        method: 'POST',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          router.push('/products')
        })
    },
    deleteProduct (context, payload) {
      const id = payload

      axios({
        url: `https://e-commerce-server-hacktiv8rmt6.herokuapp.com/products/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.dispatch('fetchDataProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      axios({
        url: `https://e-commerce-server-hacktiv8rmt6.herokuapp.com/products/${payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.dispatch('fetchDataProducts')
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        url: 'https://e-commerce-server-hacktiv8rmt6.herokuapp.com/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
