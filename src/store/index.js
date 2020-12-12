import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios-config.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    products: [],
    errors: [],
    successMessage: ''
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
      setTimeout(_ => {
        state.successMessage = ''
      }, 1300)
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
        context.commit('setErrors', [])
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
        context.commit('changeProducts', data)
        context.commit('setErrors', [])
      }).catch(err => {
        // console.log(err, '<<<< error from fetch Prods')
        context.commit('setErrors', err.response.data.messages)
      })
    },
    deleteHandler (context, id) {
      axios({
        url: '/products/' + id,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(({ data }) => {
        context.dispatch('fetchProducts')
        context.commit('successMessage', data.message)
        context.commit('setErrors', [])
      }).catch(err => {
        // console.log(err)
        context.commit('setErrors', err.response.data.messages)
      })
    },
    editHandler (context, payload) {
      const { id, name, imageUrl, stock, price } = payload
      axios({
        url: '/products/' + id,
        method: 'PUT',
        data: { name, imageUrl, stock, price },
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(_ => {
        context.dispatch('fetchProducts')
        context.commit('setErrors', [])
        context.commit('successMessage', 'Product has been edited')
      }).catch(err => {
        context.commit('setErrors', err.response.data.messages)
      })
    },
    addHandler (context, payload) {
      console.log(payload)
      axios({
        url: '/products',
        method: 'POST',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      }).then(_ => {
        context.dispatch('fetchProducts')
        context.commit('successMessage', 'One product has been added')
        context.commit('setErrors', [])
      }).catch(err => {
        context.commit('setErrors', err.response.data.messages)
      })
    }
  },
  modules: {
  }
})
