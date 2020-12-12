import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api.js'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: [],
    editedProduct: {}
  },
  mutations: {
    setProduct (state, payload) {
      state.product = payload
    },
    setUpdateProduct (state, payload) {
      state.editProduct = payload
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
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    },

    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('listProduct', data.product)
        })
        .catch(error => {
          console.log(error)
        })
    },

    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(response => {
          console.log(response)
          router.push('/products')
        })
        .catch(error => {
          console.log(error)
        })
    },

    findById (context, id) {
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setEditProduct', data)
        })
        .catch(error => {
          console.log(error)
        })
    },

    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(response => {
          console.log(response)
          router.push('/products')
        })
        .catch(error => {
          console.log(error)
        })
    },

    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('fetchProduct')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
