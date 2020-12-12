import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios-config.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    products: [],
    errors: [],
    succesMessage: ''
  },
  mutations: {
    setErrors (state, payload) {
      state.errors = payload
    },
    changeProducts (state, array) {
      state.products = array
    },
    successMessage (state, string) {
      state.successMessage = string
    }
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
      }).catch(err => {
        context.commit('setErrors', err.response.data.messages)
      })
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(({ data }) => {
        const payload = data.products
        context.commit('changeProducts', payload)
      }).catch(err => {
        console.log(err, '<<<< error from fetch Prods')
        context.commit('setErrors', err.response.data.messages)
      })
    },
    deleteHandler (context, id) {
      axios({
        url: '/products/' + id,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(({ data }) => {
        context.commit('successMessage', data.message)
      }).catch(err => {
        console.log(err)
        context.commit('setErrors', err.response.data.messages)
      })
    },
    editHandler (context, product) {
      const { id, name, imageUrl, stock, price } = product
      axios({
        url: '/products/' + id,
        method: 'PUT',
        data: { name, imageUrl, stock, price },
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(_ => {
        context.commit('successMessage', 'Product has been edited')
      }).catch(err => {
        context.commit('setErrors', err.response.data.messages)
      })
    }
  },
  modules: {
  }
})
