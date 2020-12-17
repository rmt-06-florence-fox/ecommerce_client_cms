import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

const baseUrl = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productData: [],
    categories: [],
    editData: null,
    alert: false,
    errMessage: ''
  },
  mutations: {
    setProducts (state, data) {
      state.productData = data
    },
    setCategories (state, data) {
      state.categories = data
    },
    logout (state) {
      state.productData = []
    },
    editData (state, data) {
      state.editData = data
    },
    changeAlert (state, condition) {
      state.alert = condition
    },
    errMessage (state, message) {
      state.errMessage = message
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: `${baseUrl}/admin/login`,
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          context.commit('changeAlert', true)
          if (err.response) {
            console.log(err.response.data)
            context.commit('errMessage', err.response.data)
          } else if (err.request) {
            console.log(err.request)
            context.commit('errMessage', err.request)
          } else {
            console.log(err.message)
            context.commit('errMessage', err.message)
          }
          context.dispatch('changeAlert')
        })
    },
    getProducts ({ commit, state }) {
      axios({
        method: 'GET',
        url: `${baseUrl}/products`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('setProducts', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCategories ({ commit, state }) {
      axios({
        method: 'GET',
        url: `${baseUrl}/categories`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('setCategories', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editData ({ commit }, data) {
      commit('editData', data)
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: `${baseUrl}/products`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(() => {
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          context.commit('changeAlert', true)
          if (err.response) {
            console.log(err.response.data)
            context.commit('errMessage', err.response.data)
          } else if (err.request) {
            console.log(err.request)
            context.commit('errMessage', err.request)
          } else {
            console.log(err.message)
            context.commit('errMessage', err.message)
          }
          context.dispatch('changeAlert')
        })
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `${baseUrl}/products/${payload.id}`,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          router.push({ name: 'Home' })
        })
        .catch(err => {
          context.commit('changeAlert', true)
          if (err.response) {
            console.log(err.response.data)
            context.commit('errMessage', err.response.data)
          } else if (err.request) {
            console.log(err.request)
            context.commit('errMessage', err.request)
          } else {
            console.log(err.message)
            context.commit('errMessage', err.message)
          }
          context.dispatch('changeAlert')
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: `${baseUrl}/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('getProducts')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changeAlert (context) {
      setTimeout(() => {
        context.commit('changeAlert', false)
      }, 3000)
    }
  },
  modules: {
  }
})
