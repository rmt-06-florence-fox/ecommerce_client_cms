import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

const baseUrl = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productData: [],
    editData: null
  },
  mutations: {
    getData (state, data) {
      state.productData = data
    },
    logout (state) {
      state.productData = []
    },
    editData (state, data) {
      state.editData = data
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: `${baseUrl}/login`,
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getData ({ commit, state }) {
      axios({
        method: 'GET',
        url: `${baseUrl}/products`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('getData', data)
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
          console.log(err)
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
          console.log(err)
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
          context.dispatch('getData')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
